// package: contentservice
// file: daemon.proto

import * as jspb from "google-protobuf";

export class HelloContentServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloContentServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloContentServiceRequest): HelloContentServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloContentServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloContentServiceRequest;
  static deserializeBinaryFromReader(message: HelloContentServiceRequest, reader: jspb.BinaryReader): HelloContentServiceRequest;
}

export namespace HelloContentServiceRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloContentServiceResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloContentServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloContentServiceResponse): HelloContentServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloContentServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloContentServiceResponse;
  static deserializeBinaryFromReader(message: HelloContentServiceResponse, reader: jspb.BinaryReader): HelloContentServiceResponse;
}

export namespace HelloContentServiceResponse {
  export type AsObject = {
    message: string,
  }
}

