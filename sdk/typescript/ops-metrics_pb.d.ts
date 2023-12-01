import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class ReportHeartbeatRequest extends jspb.Message {
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReportHeartbeatRequest;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ReportHeartbeatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportHeartbeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportHeartbeatRequest): ReportHeartbeatRequest.AsObject;
  static serializeBinaryToWriter(message: ReportHeartbeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportHeartbeatRequest;
  static deserializeBinaryFromReader(message: ReportHeartbeatRequest, reader: jspb.BinaryReader): ReportHeartbeatRequest;
}

export namespace ReportHeartbeatRequest {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ReportJournalRequest extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): ReportJournalRequest;

  getUser(): string;
  setUser(value: string): ReportJournalRequest;

  getGroup(): string;
  setGroup(value: string): ReportJournalRequest;

  getCommand(): string;
  setCommand(value: string): ReportJournalRequest;

  getMessage(): string;
  setMessage(value: string): ReportJournalRequest;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReportJournalRequest;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ReportJournalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportJournalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportJournalRequest): ReportJournalRequest.AsObject;
  static serializeBinaryToWriter(message: ReportJournalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportJournalRequest;
  static deserializeBinaryFromReader(message: ReportJournalRequest, reader: jspb.BinaryReader): ReportJournalRequest;
}

export namespace ReportJournalRequest {
  export type AsObject = {
    hostname: string,
    user: string,
    group: string,
    command: string,
    message: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ReportNginxRequest extends jspb.Message {
  getAccess(): ReportNginxRequest.Access | undefined;
  setAccess(value?: ReportNginxRequest.Access): ReportNginxRequest;
  hasAccess(): boolean;
  clearAccess(): ReportNginxRequest;

  getError(): string;
  setError(value: string): ReportNginxRequest;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReportNginxRequest;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ReportNginxRequest;

  getPayloadCase(): ReportNginxRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportNginxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportNginxRequest): ReportNginxRequest.AsObject;
  static serializeBinaryToWriter(message: ReportNginxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportNginxRequest;
  static deserializeBinaryFromReader(message: ReportNginxRequest, reader: jspb.BinaryReader): ReportNginxRequest;
}

export namespace ReportNginxRequest {
  export type AsObject = {
    access?: ReportNginxRequest.Access.AsObject,
    error: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class Access extends jspb.Message {
    getClientIp(): string;
    setClientIp(value: string): Access;

    getMethod(): string;
    setMethod(value: string): Access;

    getPath(): string;
    setPath(value: string): Access;

    getVersion(): number;
    setVersion(value: number): Access;

    getStatus(): number;
    setStatus(value: number): Access;

    getBodyBytesSent(): number;
    setBodyBytesSent(value: number): Access;

    getRequestTime(): number;
    setRequestTime(value: number): Access;

    getHttpReferer(): string;
    setHttpReferer(value: string): Access;
    hasHttpReferer(): boolean;
    clearHttpReferer(): Access;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Access.AsObject;
    static toObject(includeInstance: boolean, msg: Access): Access.AsObject;
    static serializeBinaryToWriter(message: Access, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Access;
    static deserializeBinaryFromReader(message: Access, reader: jspb.BinaryReader): Access;
  }

  export namespace Access {
    export type AsObject = {
      clientIp: string,
      method: string,
      path: string,
      version: number,
      status: number,
      bodyBytesSent: number,
      requestTime: number,
      httpReferer?: string,
    }

    export enum HttpRefererCase { 
      _HTTP_REFERER_NOT_SET = 0,
      HTTP_REFERER = 8,
    }
  }


  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    ACCESS = 1,
    ERROR = 2,
  }
}

