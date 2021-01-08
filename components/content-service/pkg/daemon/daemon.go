// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.

package daemon

import (
	"context"
	"io/ioutil"
	"time"

	"github.com/gitpod-io/gitpod/common-go/log"
	"github.com/gitpod-io/gitpod/content-service/api"
	"github.com/gitpod-io/gitpod/content-service/pkg/service"
	"github.com/gitpod-io/gitpod/content-service/pkg/storage"
	"golang.org/x/xerrors"
	"google.golang.org/grpc"
)

// NewDaemon produces a new daemon
func NewDaemon(strg storage.Config) (*Daemon, error) {
	srv, err := service.NewContentService()
	if err != nil {
		return nil, xerrors.Errorf("cannot create content service: %w", err)
	}
	return &Daemon{srv, strg}, nil
}

// Daemon provides the content service
type Daemon struct {
	service *service.ContentService
	strg    storage.Config
}

// Start runs all parts of the daemon until stop is called
func (d *Daemon) Start() error {
	return tmp(d.strg)
}

func tmp(strg storage.Config) error {
	ctx := context.Background()
	remoteStorage, err := storage.NewDirectAccess(&strg)
	if err != nil {
		return xerrors.Errorf("cannot use configured storage: %w", err)
	}

	err = remoteStorage.Init(ctx, "123", "abc")
	if err != nil {
		return xerrors.Errorf("cannot use configured storage: %w", err)
	}

	err = remoteStorage.EnsureExists(ctx)
	if err != nil {
		return xerrors.Errorf("cannot use configured storage: %w", err)
	}

	_, _, err = remoteStorage.Upload(ctx, "/config/config.json", "testfile")
	if err != nil {
		return xerrors.Errorf("cannot upload to configured storage: %w", err)
	}

	err = remoteStorage.BlobStore(ctx, storage.BlobStoreActionOption{EnableVersioning: false, LogObjectStat: false})
	if err != nil {
		return xerrors.Errorf("cannot do blobstore (1): %w", err)
	}

	data := make([]byte, 1e+10) // 10 GB
	err = ioutil.WriteFile("/tmp/testfile10gb", data, 0644)
	if err != nil {
		return xerrors.Errorf("error writing big file: %w", err)
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	ch := make(chan string, 1)

	go func() {
		start := time.Now()
		log.Println("starting uploading big file")
		_, _, err = remoteStorage.Upload(ctx, "/tmp/testfile10gb", "testfile")
		if err != nil {
			log.WithError(err).Errorf("error uploading big testfile")
		} else {
			elapsed := time.Since(start)
			log.Printf("uploading testfile took %s", elapsed)
		}

		select {
		default:
			ch <- "done"
		case <-ctx.Done():
			log.Println("canceled by timeout")
			return
		}
	}()

	time.Sleep((time.Second))

	log.Println("checking object")
	err = remoteStorage.BlobStore(ctx, storage.BlobStoreActionOption{EnableVersioning: false, LogObjectStat: true})
	if err != nil {
		return xerrors.Errorf("cannot do blobstore (2): %w", err)
	}

	// os.Mkdir("/tmp/download1", os.ModePerm)
	// found, err := remoteStorage.Download(ctx, "/tmp/download1", "testfile")
	// if err != nil {
	// 	return xerrors.Errorf("cannot download: %w", err)
	// }
	// if !found {
	// 	return xerrors.Errorf("not found")
	// }

	select {
	case <-ch:
		log.Println("Read from ch")
	case <-time.After(5 * time.Second):
		log.Println("Timed out")
	}

	start := time.Now()
	log.Println("starting uploading big file (2)")
	_, _, err = remoteStorage.Upload(ctx, "/tmp/testfile10gb", "testfile")
	if err != nil {
		log.WithError(err).Errorf("error uploading big testfile (2)")
	} else {
		elapsed := time.Since(start)
		log.Printf("uploading testfile (2) took %s", elapsed)
	}

	log.Println("checking object (2)")
	err = remoteStorage.BlobStore(ctx, storage.BlobStoreActionOption{EnableVersioning: false, LogObjectStat: true})
	if err != nil {
		return xerrors.Errorf("cannot do blobstore (3): %w", err)
	}

	// os.Mkdir("/tmp/download2", os.ModePerm)
	// found, err = remoteStorage.Download(ctx, "/tmp/download2", "testfile")
	// if err != nil {
	// 	return xerrors.Errorf("cannot download (2): %w", err)
	// }
	// if !found {
	// 	return xerrors.Errorf("not found (2")
	// }

	return nil
}

// Register registers all gRPC services provided by this daemon
func (d *Daemon) Register(srv *grpc.Server) {
	api.RegisterContentServiceServer(srv, d.service)
}

// Stop gracefully shuts down the daemon. Once stopped, it
// cannot be started again.
func (d *Daemon) Stop() error {
	return nil
}
