// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.

package daemon

import (
	"github.com/gitpod-io/gitpod/content-service/api"
	"github.com/gitpod-io/gitpod/content-service/pkg/service"
	"golang.org/x/xerrors"
	"google.golang.org/grpc"
)

// NewDaemon produces a new daemon
func NewDaemon() (*Daemon, error) {
	srv, err := service.NewContentService()
	if err != nil {
		return nil, xerrors.Errorf("cannot create content service: %w", err)
	}
	return &Daemon{srv}, nil
}

// Daemon provides the content service
type Daemon struct {
	service *service.ContentService
}

// Start runs all parts of the daemon until stop is called
func (d *Daemon) Start() error {
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
