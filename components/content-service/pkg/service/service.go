// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.

package service

import (
	"context"

	"github.com/gitpod-io/gitpod/content-service/api"
)

// ContentService implements ContentServiceServer
type ContentService struct {
}

// NewContentService create a new content service
func NewContentService() (res *ContentService, err error) {
	return &ContentService{}, nil
}

// HelloContentService says Hello
func (s *ContentService) HelloContentService(ctx context.Context, req *api.HelloContentServiceRequest) (resp *api.HelloContentServiceResponse, err error) {
	name := req.Name
	return &api.HelloContentServiceResponse{
		Message: "Hello " + name + "!",
	}, nil
}
