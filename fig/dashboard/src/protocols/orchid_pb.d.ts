import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class AesPlainMessage extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): AesPlainMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AesPlainMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AesPlainMessage): AesPlainMessage.AsObject;
  static serializeBinaryToWriter(message: AesPlainMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AesPlainMessage;
  static deserializeBinaryFromReader(message: AesPlainMessage, reader: jspb.BinaryReader): AesPlainMessage;
}

export namespace AesPlainMessage {
  export type AsObject = {
    payload: string,
  }
}

export class AesCodeMessage extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): AesCodeMessage;

  getSalt(): string;
  setSalt(value: string): AesCodeMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AesCodeMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AesCodeMessage): AesCodeMessage.AsObject;
  static serializeBinaryToWriter(message: AesCodeMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AesCodeMessage;
  static deserializeBinaryFromReader(message: AesCodeMessage, reader: jspb.BinaryReader): AesCodeMessage;
}

export namespace AesCodeMessage {
  export type AsObject = {
    payload: string,
    salt: string,
  }
}

export class HMacSignRequest extends jspb.Message {
  getPlain(): string;
  setPlain(value: string): HMacSignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HMacSignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HMacSignRequest): HMacSignRequest.AsObject;
  static serializeBinaryToWriter(message: HMacSignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HMacSignRequest;
  static deserializeBinaryFromReader(message: HMacSignRequest, reader: jspb.BinaryReader): HMacSignRequest;
}

export namespace HMacSignRequest {
  export type AsObject = {
    plain: string,
  }
}

export class HMacSignResponse extends jspb.Message {
  getCode(): string;
  setCode(value: string): HMacSignResponse;

  getSalt(): string;
  setSalt(value: string): HMacSignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HMacSignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HMacSignResponse): HMacSignResponse.AsObject;
  static serializeBinaryToWriter(message: HMacSignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HMacSignResponse;
  static deserializeBinaryFromReader(message: HMacSignResponse, reader: jspb.BinaryReader): HMacSignResponse;
}

export namespace HMacSignResponse {
  export type AsObject = {
    code: string,
    salt: string,
  }
}

export class HMacVerifyRequest extends jspb.Message {
  getPlain(): string;
  setPlain(value: string): HMacVerifyRequest;

  getCode(): string;
  setCode(value: string): HMacVerifyRequest;

  getSalt(): string;
  setSalt(value: string): HMacVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HMacVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HMacVerifyRequest): HMacVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: HMacVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HMacVerifyRequest;
  static deserializeBinaryFromReader(message: HMacVerifyRequest, reader: jspb.BinaryReader): HMacVerifyRequest;
}

export namespace HMacVerifyRequest {
  export type AsObject = {
    plain: string,
    code: string,
    salt: string,
  }
}

export class JwtSignRequest extends jspb.Message {
  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): JwtSignRequest;
  hasTtl(): boolean;
  clearTtl(): JwtSignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JwtSignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JwtSignRequest): JwtSignRequest.AsObject;
  static serializeBinaryToWriter(message: JwtSignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JwtSignRequest;
  static deserializeBinaryFromReader(message: JwtSignRequest, reader: jspb.BinaryReader): JwtSignRequest;
}

export namespace JwtSignRequest {
  export type AsObject = {
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class JwtSignResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): JwtSignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JwtSignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JwtSignResponse): JwtSignResponse.AsObject;
  static serializeBinaryToWriter(message: JwtSignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JwtSignResponse;
  static deserializeBinaryFromReader(message: JwtSignResponse, reader: jspb.BinaryReader): JwtSignResponse;
}

export namespace JwtSignResponse {
  export type AsObject = {
    token: string,
  }
}

export class JwtVerifyRequest extends jspb.Message {
  getIss(): string;
  setIss(value: string): JwtVerifyRequest;

  getToken(): string;
  setToken(value: string): JwtVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JwtVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JwtVerifyRequest): JwtVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: JwtVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JwtVerifyRequest;
  static deserializeBinaryFromReader(message: JwtVerifyRequest, reader: jspb.BinaryReader): JwtVerifyRequest;
}

export namespace JwtVerifyRequest {
  export type AsObject = {
    iss: string,
    token: string,
  }
}

export class JwtVerifyResponse extends jspb.Message {
  getAud(): string;
  setAud(value: string): JwtVerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JwtVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JwtVerifyResponse): JwtVerifyResponse.AsObject;
  static serializeBinaryToWriter(message: JwtVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JwtVerifyResponse;
  static deserializeBinaryFromReader(message: JwtVerifyResponse, reader: jspb.BinaryReader): JwtVerifyResponse;
}

export namespace JwtVerifyResponse {
  export type AsObject = {
    aud: string,
  }
}

