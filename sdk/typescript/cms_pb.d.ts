import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as nut_pb from './nut_pb'; // proto import: "nut.proto"


export class WebSite extends jspb.Message {
  getTaxonomiesList(): Array<string>;
  setTaxonomiesList(value: Array<string>): WebSite;
  clearTaxonomiesList(): WebSite;
  addTaxonomies(value: string, index?: number): WebSite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebSite.AsObject;
  static toObject(includeInstance: boolean, msg: WebSite): WebSite.AsObject;
  static serializeBinaryToWriter(message: WebSite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebSite;
  static deserializeBinaryFromReader(message: WebSite, reader: jspb.BinaryReader): WebSite;
}

export namespace WebSite {
  export type AsObject = {
    taxonomiesList: Array<string>,
  }
}

export class NotificationIndexResponse extends jspb.Message {
  getItemsList(): Array<NotificationIndexResponse.Item>;
  setItemsList(value: Array<NotificationIndexResponse.Item>): NotificationIndexResponse;
  clearItemsList(): NotificationIndexResponse;
  addItems(value?: NotificationIndexResponse.Item, index?: number): NotificationIndexResponse.Item;

  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): NotificationIndexResponse;
  hasPagination(): boolean;
  clearPagination(): NotificationIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationIndexResponse): NotificationIndexResponse.AsObject;
  static serializeBinaryToWriter(message: NotificationIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationIndexResponse;
  static deserializeBinaryFromReader(message: NotificationIndexResponse, reader: jspb.BinaryReader): NotificationIndexResponse;
}

export namespace NotificationIndexResponse {
  export type AsObject = {
    itemsList: Array<NotificationIndexResponse.Item.AsObject>,
    pagination?: nut_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getLevel(): NotificationIndexResponse.Item.Level;
    setLevel(value: NotificationIndexResponse.Item.Level): Item;

    getTitle(): string;
    setTitle(value: string): Item;

    getUrl(): string;
    setUrl(value: string): Item;

    getLang(): string;
    setLang(value: string): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id: number,
      level: NotificationIndexResponse.Item.Level,
      title: string,
      url: string,
      lang: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Level { 
      NOTE = 0,
      INFO = 1,
    }
  }

}

export class NotificationCreateRequest extends jspb.Message {
  getLevel(): NotificationIndexResponse.Item.Level;
  setLevel(value: NotificationIndexResponse.Item.Level): NotificationCreateRequest;

  getTitle(): string;
  setTitle(value: string): NotificationCreateRequest;

  getUrl(): string;
  setUrl(value: string): NotificationCreateRequest;

  getLang(): string;
  setLang(value: string): NotificationCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationCreateRequest): NotificationCreateRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationCreateRequest;
  static deserializeBinaryFromReader(message: NotificationCreateRequest, reader: jspb.BinaryReader): NotificationCreateRequest;
}

export namespace NotificationCreateRequest {
  export type AsObject = {
    level: NotificationIndexResponse.Item.Level,
    title: string,
    url: string,
    lang: string,
  }
}

export class NotificationUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): NotificationUpdateRequest;

  getLevel(): NotificationIndexResponse.Item.Level;
  setLevel(value: NotificationIndexResponse.Item.Level): NotificationUpdateRequest;

  getTitle(): string;
  setTitle(value: string): NotificationUpdateRequest;

  getUrl(): string;
  setUrl(value: string): NotificationUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationUpdateRequest): NotificationUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationUpdateRequest;
  static deserializeBinaryFromReader(message: NotificationUpdateRequest, reader: jspb.BinaryReader): NotificationUpdateRequest;
}

export namespace NotificationUpdateRequest {
  export type AsObject = {
    id: number,
    level: NotificationIndexResponse.Item.Level,
    title: string,
    url: string,
  }
}

