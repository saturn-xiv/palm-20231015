import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as nut_pb from './nut_pb';


export class ArticleCreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ArticleCreateRequest;

  getSummary(): string;
  setSummary(value: string): ArticleCreateRequest;

  getBody(): nut_pb.MediaContent | undefined;
  setBody(value?: nut_pb.MediaContent): ArticleCreateRequest;
  hasBody(): boolean;
  clearBody(): ArticleCreateRequest;

  getTagsList(): Array<number>;
  setTagsList(value: Array<number>): ArticleCreateRequest;
  clearTagsList(): ArticleCreateRequest;
  addTags(value: number, index?: number): ArticleCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleCreateRequest): ArticleCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ArticleCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleCreateRequest;
  static deserializeBinaryFromReader(message: ArticleCreateRequest, reader: jspb.BinaryReader): ArticleCreateRequest;
}

export namespace ArticleCreateRequest {
  export type AsObject = {
    title: string,
    summary: string,
    body?: nut_pb.MediaContent.AsObject,
    tagsList: Array<number>,
  }
}

export class ArticleUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ArticleUpdateRequest;

  getTitle(): string;
  setTitle(value: string): ArticleUpdateRequest;

  getSummary(): string;
  setSummary(value: string): ArticleUpdateRequest;

  getBody(): string;
  setBody(value: string): ArticleUpdateRequest;

  getTagsList(): Array<number>;
  setTagsList(value: Array<number>): ArticleUpdateRequest;
  clearTagsList(): ArticleUpdateRequest;
  addTags(value: number, index?: number): ArticleUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleUpdateRequest): ArticleUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ArticleUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleUpdateRequest;
  static deserializeBinaryFromReader(message: ArticleUpdateRequest, reader: jspb.BinaryReader): ArticleUpdateRequest;
}

export namespace ArticleUpdateRequest {
  export type AsObject = {
    id: number,
    title: string,
    summary: string,
    body: string,
    tagsList: Array<number>,
  }
}

export class ArticleIndexResponse extends jspb.Message {
  getItemsList(): Array<ArticleIndexResponse.Item>;
  setItemsList(value: Array<ArticleIndexResponse.Item>): ArticleIndexResponse;
  clearItemsList(): ArticleIndexResponse;
  addItems(value?: ArticleIndexResponse.Item, index?: number): ArticleIndexResponse.Item;

  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): ArticleIndexResponse;
  hasPagination(): boolean;
  clearPagination(): ArticleIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleIndexResponse): ArticleIndexResponse.AsObject;
  static serializeBinaryToWriter(message: ArticleIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleIndexResponse;
  static deserializeBinaryFromReader(message: ArticleIndexResponse, reader: jspb.BinaryReader): ArticleIndexResponse;
}

export namespace ArticleIndexResponse {
  export type AsObject = {
    itemsList: Array<ArticleIndexResponse.Item.AsObject>,
    pagination?: nut_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getLang(): string;
    setLang(value: string): Item;

    getTitle(): string;
    setTitle(value: string): Item;

    getSummary(): string;
    setSummary(value: string): Item;

    getBody(): nut_pb.MediaContent | undefined;
    setBody(value?: nut_pb.MediaContent): Item;
    hasBody(): boolean;
    clearBody(): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    getAuthor(): nut_pb.UserDetail | undefined;
    setAuthor(value?: nut_pb.UserDetail): Item;
    hasAuthor(): boolean;
    clearAuthor(): Item;

    getTagsList(): Array<nut_pb.TagIndexResponse.Item>;
    setTagsList(value: Array<nut_pb.TagIndexResponse.Item>): Item;
    clearTagsList(): Item;
    addTags(value?: nut_pb.TagIndexResponse.Item, index?: number): nut_pb.TagIndexResponse.Item;

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
      lang: string,
      title: string,
      summary: string,
      body?: nut_pb.MediaContent.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      author?: nut_pb.UserDetail.AsObject,
      tagsList: Array<nut_pb.TagIndexResponse.Item.AsObject>,
    }
  }

}

export class ArticleShowResponse extends jspb.Message {
  getItem(): ArticleIndexResponse.Item | undefined;
  setItem(value?: ArticleIndexResponse.Item): ArticleShowResponse;
  hasItem(): boolean;
  clearItem(): ArticleShowResponse;

  getCommentsList(): Array<CommentIndexResponse.Item>;
  setCommentsList(value: Array<CommentIndexResponse.Item>): ArticleShowResponse;
  clearCommentsList(): ArticleShowResponse;
  addComments(value?: CommentIndexResponse.Item, index?: number): CommentIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleShowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleShowResponse): ArticleShowResponse.AsObject;
  static serializeBinaryToWriter(message: ArticleShowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleShowResponse;
  static deserializeBinaryFromReader(message: ArticleShowResponse, reader: jspb.BinaryReader): ArticleShowResponse;
}

export namespace ArticleShowResponse {
  export type AsObject = {
    item?: ArticleIndexResponse.Item.AsObject,
    commentsList: Array<CommentIndexResponse.Item.AsObject>,
  }
}

export class CommentCreateRequest extends jspb.Message {
  getArticle(): number;
  setArticle(value: number): CommentCreateRequest;

  getBody(): nut_pb.MediaContent | undefined;
  setBody(value?: nut_pb.MediaContent): CommentCreateRequest;
  hasBody(): boolean;
  clearBody(): CommentCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommentCreateRequest): CommentCreateRequest.AsObject;
  static serializeBinaryToWriter(message: CommentCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentCreateRequest;
  static deserializeBinaryFromReader(message: CommentCreateRequest, reader: jspb.BinaryReader): CommentCreateRequest;
}

export namespace CommentCreateRequest {
  export type AsObject = {
    article: number,
    body?: nut_pb.MediaContent.AsObject,
  }
}

export class CommentUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CommentUpdateRequest;

  getBody(): string;
  setBody(value: string): CommentUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommentUpdateRequest): CommentUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: CommentUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentUpdateRequest;
  static deserializeBinaryFromReader(message: CommentUpdateRequest, reader: jspb.BinaryReader): CommentUpdateRequest;
}

export namespace CommentUpdateRequest {
  export type AsObject = {
    id: number,
    body: string,
  }
}

export class CommentIndexResponse extends jspb.Message {
  getItemsList(): Array<CommentIndexResponse.Item>;
  setItemsList(value: Array<CommentIndexResponse.Item>): CommentIndexResponse;
  clearItemsList(): CommentIndexResponse;
  addItems(value?: CommentIndexResponse.Item, index?: number): CommentIndexResponse.Item;

  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): CommentIndexResponse;
  hasPagination(): boolean;
  clearPagination(): CommentIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommentIndexResponse): CommentIndexResponse.AsObject;
  static serializeBinaryToWriter(message: CommentIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentIndexResponse;
  static deserializeBinaryFromReader(message: CommentIndexResponse, reader: jspb.BinaryReader): CommentIndexResponse;
}

export namespace CommentIndexResponse {
  export type AsObject = {
    itemsList: Array<CommentIndexResponse.Item.AsObject>,
    pagination?: nut_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getArticle(): number;
    setArticle(value: number): Item;

    getBody(): nut_pb.MediaContent | undefined;
    setBody(value?: nut_pb.MediaContent): Item;
    hasBody(): boolean;
    clearBody(): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    getAuthor(): nut_pb.UserDetail | undefined;
    setAuthor(value?: nut_pb.UserDetail): Item;
    hasAuthor(): boolean;
    clearAuthor(): Item;

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
      article: number,
      body?: nut_pb.MediaContent.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      author?: nut_pb.UserDetail.AsObject,
    }
  }

}

