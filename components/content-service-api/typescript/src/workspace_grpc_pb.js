// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2020 TypeFox GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.
//
'use strict';
var grpc = require('grpc');
var workspace_pb = require('./workspace_pb.js');

function serialize_contentservice_DeleteWorkspaceRequest(arg) {
  if (!(arg instanceof workspace_pb.DeleteWorkspaceRequest)) {
    throw new Error('Expected argument of type contentservice.DeleteWorkspaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_DeleteWorkspaceRequest(buffer_arg) {
  return workspace_pb.DeleteWorkspaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_DeleteWorkspaceResponse(arg) {
  if (!(arg instanceof workspace_pb.DeleteWorkspaceResponse)) {
    throw new Error('Expected argument of type contentservice.DeleteWorkspaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_DeleteWorkspaceResponse(buffer_arg) {
  return workspace_pb.DeleteWorkspaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_DownloadUrlWorkspaceRequest(arg) {
  if (!(arg instanceof workspace_pb.DownloadUrlWorkspaceRequest)) {
    throw new Error('Expected argument of type contentservice.DownloadUrlWorkspaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_DownloadUrlWorkspaceRequest(buffer_arg) {
  return workspace_pb.DownloadUrlWorkspaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_DownloadUrlWorkspaceResponse(arg) {
  if (!(arg instanceof workspace_pb.DownloadUrlWorkspaceResponse)) {
    throw new Error('Expected argument of type contentservice.DownloadUrlWorkspaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_DownloadUrlWorkspaceResponse(buffer_arg) {
  return workspace_pb.DownloadUrlWorkspaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkspaceServiceService = exports.WorkspaceServiceService = {
  // DownloadUrlWorkspace provides a URL from where the content of a workspace can be downloaded from
downloadUrlWorkspace: {
    path: '/contentservice.WorkspaceService/DownloadUrlWorkspace',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.DownloadUrlWorkspaceRequest,
    responseType: workspace_pb.DownloadUrlWorkspaceResponse,
    requestSerialize: serialize_contentservice_DownloadUrlWorkspaceRequest,
    requestDeserialize: deserialize_contentservice_DownloadUrlWorkspaceRequest,
    responseSerialize: serialize_contentservice_DownloadUrlWorkspaceResponse,
    responseDeserialize: deserialize_contentservice_DownloadUrlWorkspaceResponse,
  },
  // DeleteWorkspace deletes the content of a single workspace
deleteWorkspace: {
    path: '/contentservice.WorkspaceService/DeleteWorkspace',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.DeleteWorkspaceRequest,
    responseType: workspace_pb.DeleteWorkspaceResponse,
    requestSerialize: serialize_contentservice_DeleteWorkspaceRequest,
    requestDeserialize: deserialize_contentservice_DeleteWorkspaceRequest,
    responseSerialize: serialize_contentservice_DeleteWorkspaceResponse,
    responseDeserialize: deserialize_contentservice_DeleteWorkspaceResponse,
  },
};

exports.WorkspaceServiceClient = grpc.makeGenericClientConstructor(WorkspaceServiceService);
