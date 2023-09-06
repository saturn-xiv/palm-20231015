import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class HttpResponse extends jspb.Message {
  getContentType(): string;
  setContentType(value: string): HttpResponse;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): HttpResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HttpResponse): HttpResponse.AsObject;
  static serializeBinaryToWriter(message: HttpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpResponse;
  static deserializeBinaryFromReader(message: HttpResponse, reader: jspb.BinaryReader): HttpResponse;
}

export namespace HttpResponse {
  export type AsObject = {
    contentType: string,
    body: Uint8Array | string,
  }
}

export class ExcelLoadRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ExcelLoadRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ExcelLoadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelLoadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelLoadRequest): ExcelLoadRequest.AsObject;
  static serializeBinaryToWriter(message: ExcelLoadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelLoadRequest;
  static deserializeBinaryFromReader(message: ExcelLoadRequest, reader: jspb.BinaryReader): ExcelLoadRequest;
}

export namespace ExcelLoadRequest {
  export type AsObject = {
    id: string,
    data: Uint8Array | string,
  }
}

export class ExcelQueryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ExcelQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelQueryRequest): ExcelQueryRequest.AsObject;
  static serializeBinaryToWriter(message: ExcelQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelQueryRequest;
  static deserializeBinaryFromReader(message: ExcelQueryRequest, reader: jspb.BinaryReader): ExcelQueryRequest;
}

export namespace ExcelQueryRequest {
  export type AsObject = {
    id: string,
  }
}

export class ExcelQueryResponse extends jspb.Message {
  getItemsList(): Array<ExcelQueryResponse.Item>;
  setItemsList(value: Array<ExcelQueryResponse.Item>): ExcelQueryResponse;
  clearItemsList(): ExcelQueryResponse;
  addItems(value?: ExcelQueryResponse.Item, index?: number): ExcelQueryResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelQueryResponse): ExcelQueryResponse.AsObject;
  static serializeBinaryToWriter(message: ExcelQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelQueryResponse;
  static deserializeBinaryFromReader(message: ExcelQueryResponse, reader: jspb.BinaryReader): ExcelQueryResponse;
}

export namespace ExcelQueryResponse {
  export type AsObject = {
    itemsList: Array<ExcelQueryResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getX(): number;
    setX(value: number): Item;

    getY(): number;
    setY(value: number): Item;

    getV(): string;
    setV(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      x: number,
      y: number,
      v: string,
    }
  }

}

export class TexToRequest extends jspb.Message {
  getBody(): string;
  setBody(value: string): TexToRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TexToRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TexToRequest): TexToRequest.AsObject;
  static serializeBinaryToWriter(message: TexToRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TexToRequest;
  static deserializeBinaryFromReader(message: TexToRequest, reader: jspb.BinaryReader): TexToRequest;
}

export namespace TexToRequest {
  export type AsObject = {
    body: string,
  }
}

export class EpubBuildRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpubBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EpubBuildRequest): EpubBuildRequest.AsObject;
  static serializeBinaryToWriter(message: EpubBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpubBuildRequest;
  static deserializeBinaryFromReader(message: EpubBuildRequest, reader: jspb.BinaryReader): EpubBuildRequest;
}

export namespace EpubBuildRequest {
  export type AsObject = {
  }
}

