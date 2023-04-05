import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class PdfBuildRequest extends jspb.Message {
  getBody(): string;
  setBody(value: string): PdfBuildRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PdfBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PdfBuildRequest): PdfBuildRequest.AsObject;
  static serializeBinaryToWriter(message: PdfBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PdfBuildRequest;
  static deserializeBinaryFromReader(message: PdfBuildRequest, reader: jspb.BinaryReader): PdfBuildRequest;
}

export namespace PdfBuildRequest {
  export type AsObject = {
    body: string,
  }
}

export class PdfBuildResponse extends jspb.Message {
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): PdfBuildResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PdfBuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PdfBuildResponse): PdfBuildResponse.AsObject;
  static serializeBinaryToWriter(message: PdfBuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PdfBuildResponse;
  static deserializeBinaryFromReader(message: PdfBuildResponse, reader: jspb.BinaryReader): PdfBuildResponse;
}

export namespace PdfBuildResponse {
  export type AsObject = {
    body: Uint8Array | string,
  }
}

