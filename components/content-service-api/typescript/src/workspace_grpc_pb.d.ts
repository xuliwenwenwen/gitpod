/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

// package: contentservice
// file: workspace.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as workspace_pb from "./workspace_pb";

interface IWorkspaceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    downloadUrlWorkspace: IWorkspaceServiceService_IDownloadUrlWorkspace;
    deleteWorkspace: IWorkspaceServiceService_IDeleteWorkspace;
}

interface IWorkspaceServiceService_IDownloadUrlWorkspace extends grpc.MethodDefinition<workspace_pb.DownloadUrlWorkspaceRequest, workspace_pb.DownloadUrlWorkspaceResponse> {
    path: "/contentservice.WorkspaceService/DownloadUrlWorkspace";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workspace_pb.DownloadUrlWorkspaceRequest>;
    requestDeserialize: grpc.deserialize<workspace_pb.DownloadUrlWorkspaceRequest>;
    responseSerialize: grpc.serialize<workspace_pb.DownloadUrlWorkspaceResponse>;
    responseDeserialize: grpc.deserialize<workspace_pb.DownloadUrlWorkspaceResponse>;
}
interface IWorkspaceServiceService_IDeleteWorkspace extends grpc.MethodDefinition<workspace_pb.DeleteWorkspaceRequest, workspace_pb.DeleteWorkspaceResponse> {
    path: "/contentservice.WorkspaceService/DeleteWorkspace";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workspace_pb.DeleteWorkspaceRequest>;
    requestDeserialize: grpc.deserialize<workspace_pb.DeleteWorkspaceRequest>;
    responseSerialize: grpc.serialize<workspace_pb.DeleteWorkspaceResponse>;
    responseDeserialize: grpc.deserialize<workspace_pb.DeleteWorkspaceResponse>;
}

export const WorkspaceServiceService: IWorkspaceServiceService;

export interface IWorkspaceServiceServer {
    downloadUrlWorkspace: grpc.handleUnaryCall<workspace_pb.DownloadUrlWorkspaceRequest, workspace_pb.DownloadUrlWorkspaceResponse>;
    deleteWorkspace: grpc.handleUnaryCall<workspace_pb.DeleteWorkspaceRequest, workspace_pb.DeleteWorkspaceResponse>;
}

export interface IWorkspaceServiceClient {
    downloadUrlWorkspace(request: workspace_pb.DownloadUrlWorkspaceRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.DownloadUrlWorkspaceResponse) => void): grpc.ClientUnaryCall;
    downloadUrlWorkspace(request: workspace_pb.DownloadUrlWorkspaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.DownloadUrlWorkspaceResponse) => void): grpc.ClientUnaryCall;
    downloadUrlWorkspace(request: workspace_pb.DownloadUrlWorkspaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.DownloadUrlWorkspaceResponse) => void): grpc.ClientUnaryCall;
    deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
}

export class WorkspaceServiceClient extends grpc.Client implements IWorkspaceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public downloadUrlWorkspace(request: workspace_pb.DownloadUrlWorkspaceRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.DownloadUrlWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public downloadUrlWorkspace(request: workspace_pb.DownloadUrlWorkspaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.DownloadUrlWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public downloadUrlWorkspace(request: workspace_pb.DownloadUrlWorkspaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.DownloadUrlWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
}
