import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class IdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): IdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
  static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRequest;
  static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
  export type AsObject = {
    id: number,
  }
}

export class Pager extends jspb.Message {
  getPage(): number;
  setPage(value: number): Pager;

  getSize(): number;
  setSize(value: number): Pager;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pager.AsObject;
  static toObject(includeInstance: boolean, msg: Pager): Pager.AsObject;
  static serializeBinaryToWriter(message: Pager, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pager;
  static deserializeBinaryFromReader(message: Pager, reader: jspb.BinaryReader): Pager;
}

export namespace Pager {
  export type AsObject = {
    page: number,
    size: number,
  }
}

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): Pagination;

  getSize(): number;
  setSize(value: number): Pagination;

  getTotal(): number;
  setTotal(value: number): Pagination;

  getHasNext(): boolean;
  setHasNext(value: boolean): Pagination;

  getHasPrevious(): boolean;
  setHasPrevious(value: boolean): Pagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    page: number,
    size: number,
    total: number,
    hasNext: boolean,
    hasPrevious: boolean,
  }
}

export class MediaContent extends jspb.Message {
  getEditor(): MediaContent.Editor;
  setEditor(value: MediaContent.Editor): MediaContent;

  getBody(): string;
  setBody(value: string): MediaContent;

  getStatus(): MediaContent.Status;
  setStatus(value: MediaContent.Status): MediaContent;

  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): MediaContent;
  hasPublishedAt(): boolean;
  clearPublishedAt(): MediaContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaContent.AsObject;
  static toObject(includeInstance: boolean, msg: MediaContent): MediaContent.AsObject;
  static serializeBinaryToWriter(message: MediaContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaContent;
  static deserializeBinaryFromReader(message: MediaContent, reader: jspb.BinaryReader): MediaContent;
}

export namespace MediaContent {
  export type AsObject = {
    editor: MediaContent.Editor,
    body: string,
    status: MediaContent.Status,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum Editor { 
    TEXTAREA = 0,
    QUILL = 1,
  }

  export enum Status { 
    PUBLISHED = 0,
    DRAFT = 1,
    PENDING = 2,
    PRIVATE = 3,
    FUTURE = 4,
    TRASH = 99,
  }

  export enum PublishedAtCase { 
    _PUBLISHED_AT_NOT_SET = 0,
    PUBLISHED_AT = 11,
  }
}

