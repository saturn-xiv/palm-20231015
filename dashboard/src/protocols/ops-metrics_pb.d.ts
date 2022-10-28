import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


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
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ReportNginxRequest extends jspb.Message {
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReportNginxRequest;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ReportNginxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportNginxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportNginxRequest): ReportNginxRequest.AsObject;
  static serializeBinaryToWriter(message: ReportNginxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportNginxRequest;
  static deserializeBinaryFromReader(message: ReportNginxRequest, reader: jspb.BinaryReader): ReportNginxRequest;
}

export namespace ReportNginxRequest {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

