// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var daemon_pb = require('./daemon_pb.js');

function serialize_contentservice_HelloContentServiceRequest(arg) {
  if (!(arg instanceof daemon_pb.HelloContentServiceRequest)) {
    throw new Error('Expected argument of type contentservice.HelloContentServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_HelloContentServiceRequest(buffer_arg) {
  return daemon_pb.HelloContentServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_HelloContentServiceResponse(arg) {
  if (!(arg instanceof daemon_pb.HelloContentServiceResponse)) {
    throw new Error('Expected argument of type contentservice.HelloContentServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_HelloContentServiceResponse(buffer_arg) {
  return daemon_pb.HelloContentServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContentServiceService = exports.ContentServiceService = {
  // HelloConttentService says Hello
helloContentService: {
    path: '/contentservice.ContentService/HelloContentService',
    requestStream: false,
    responseStream: false,
    requestType: daemon_pb.HelloContentServiceRequest,
    responseType: daemon_pb.HelloContentServiceResponse,
    requestSerialize: serialize_contentservice_HelloContentServiceRequest,
    requestDeserialize: deserialize_contentservice_HelloContentServiceRequest,
    responseSerialize: serialize_contentservice_HelloContentServiceResponse,
    responseDeserialize: deserialize_contentservice_HelloContentServiceResponse,
  },
};

exports.ContentServiceClient = grpc.makeGenericClientConstructor(ContentServiceService);
