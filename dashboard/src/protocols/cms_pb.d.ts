import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as palm_pb from './palm_pb';
import * as auth_pb from './auth_pb';


export class ArticleCreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ArticleCreateRequest;

  getSummary(): string;
  setSummary(value: string): ArticleCreateRequest;

  getBody(): palm_pb.MediaContent | undefined;
  setBody(value?: palm_pb.MediaContent): ArticleCreateRequest;
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
    body?: palm_pb.MediaContent.AsObject,
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

  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): ArticleIndexResponse;
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
    pagination?: palm_pb.Pagination.AsObject,
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

    getBody(): palm_pb.MediaContent | undefined;
    setBody(value?: palm_pb.MediaContent): Item;
    hasBody(): boolean;
    clearBody(): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    getAuthor(): auth_pb.UserDetail | undefined;
    setAuthor(value?: auth_pb.UserDetail): Item;
    hasAuthor(): boolean;
    clearAuthor(): Item;

    getTagsList(): Array<TagIndexResponse.Item>;
    setTagsList(value: Array<TagIndexResponse.Item>): Item;
    clearTagsList(): Item;
    addTags(value?: TagIndexResponse.Item, index?: number): TagIndexResponse.Item;

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
      body?: palm_pb.MediaContent.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      author?: auth_pb.UserDetail.AsObject,
      tagsList: Array<TagIndexResponse.Item.AsObject>,
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

  getBody(): palm_pb.MediaContent | undefined;
  setBody(value?: palm_pb.MediaContent): CommentCreateRequest;
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
    body?: palm_pb.MediaContent.AsObject,
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

  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): CommentIndexResponse;
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
    pagination?: palm_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getArticle(): number;
    setArticle(value: number): Item;

    getBody(): palm_pb.MediaContent | undefined;
    setBody(value?: palm_pb.MediaContent): Item;
    hasBody(): boolean;
    clearBody(): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    getAuthor(): auth_pb.UserDetail | undefined;
    setAuthor(value?: auth_pb.UserDetail): Item;
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
      body?: palm_pb.MediaContent.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      author?: auth_pb.UserDetail.AsObject,
    }
  }

}

export class SiteMaintenanceModeRequest extends jspb.Message {
  getItem(): SiteMaintenanceModeRequest.Item | undefined;
  setItem(value?: SiteMaintenanceModeRequest.Item): SiteMaintenanceModeRequest;
  hasItem(): boolean;
  clearItem(): SiteMaintenanceModeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteMaintenanceModeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteMaintenanceModeRequest): SiteMaintenanceModeRequest.AsObject;
  static serializeBinaryToWriter(message: SiteMaintenanceModeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteMaintenanceModeRequest;
  static deserializeBinaryFromReader(message: SiteMaintenanceModeRequest, reader: jspb.BinaryReader): SiteMaintenanceModeRequest;
}

export namespace SiteMaintenanceModeRequest {
  export type AsObject = {
    item?: SiteMaintenanceModeRequest.Item.AsObject,
  }

  export class Item extends jspb.Message {
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): Item;
    hasDuration(): boolean;
    clearDuration(): Item;

    getReason(): string;
    setReason(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      duration?: google_protobuf_duration_pb.Duration.AsObject,
      reason: string,
    }
  }


  export enum ItemCase { 
    _ITEM_NOT_SET = 0,
    ITEM = 1,
  }
}

export class SiteInstallRequest extends jspb.Message {
  getUser(): auth_pb.UserSignUpRequest | undefined;
  setUser(value?: auth_pb.UserSignUpRequest): SiteInstallRequest;
  hasUser(): boolean;
  clearUser(): SiteInstallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteInstallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteInstallRequest): SiteInstallRequest.AsObject;
  static serializeBinaryToWriter(message: SiteInstallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteInstallRequest;
  static deserializeBinaryFromReader(message: SiteInstallRequest, reader: jspb.BinaryReader): SiteInstallRequest;
}

export namespace SiteInstallRequest {
  export type AsObject = {
    user?: auth_pb.UserSignUpRequest.AsObject,
  }
}

export class SiteMinioTestResponse extends jspb.Message {
  getBucketsList(): Array<string>;
  setBucketsList(value: Array<string>): SiteMinioTestResponse;
  clearBucketsList(): SiteMinioTestResponse;
  addBuckets(value: string, index?: number): SiteMinioTestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteMinioTestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteMinioTestResponse): SiteMinioTestResponse.AsObject;
  static serializeBinaryToWriter(message: SiteMinioTestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteMinioTestResponse;
  static deserializeBinaryFromReader(message: SiteMinioTestResponse, reader: jspb.BinaryReader): SiteMinioTestResponse;
}

export namespace SiteMinioTestResponse {
  export type AsObject = {
    bucketsList: Array<string>,
  }
}

export class SiteSmtpTestRequst extends jspb.Message {
  getTo(): string;
  setTo(value: string): SiteSmtpTestRequst;

  getSubject(): string;
  setSubject(value: string): SiteSmtpTestRequst;

  getBody(): string;
  setBody(value: string): SiteSmtpTestRequst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSmtpTestRequst.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSmtpTestRequst): SiteSmtpTestRequst.AsObject;
  static serializeBinaryToWriter(message: SiteSmtpTestRequst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSmtpTestRequst;
  static deserializeBinaryFromReader(message: SiteSmtpTestRequst, reader: jspb.BinaryReader): SiteSmtpTestRequst;
}

export namespace SiteSmtpTestRequst {
  export type AsObject = {
    to: string,
    subject: string,
    body: string,
  }
}

export class SiteSetLogoRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): SiteSetLogoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetLogoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetLogoRequest): SiteSetLogoRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetLogoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetLogoRequest;
  static deserializeBinaryFromReader(message: SiteSetLogoRequest, reader: jspb.BinaryReader): SiteSetLogoRequest;
}

export namespace SiteSetLogoRequest {
  export type AsObject = {
    url: string,
  }
}

export class SiteSetCopyrightRequest extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): SiteSetCopyrightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetCopyrightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetCopyrightRequest): SiteSetCopyrightRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetCopyrightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetCopyrightRequest;
  static deserializeBinaryFromReader(message: SiteSetCopyrightRequest, reader: jspb.BinaryReader): SiteSetCopyrightRequest;
}

export namespace SiteSetCopyrightRequest {
  export type AsObject = {
    payload: string,
  }
}

export class SiteSetKeywordsRequest extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): SiteSetKeywordsRequest;
  clearItemsList(): SiteSetKeywordsRequest;
  addItems(value: string, index?: number): SiteSetKeywordsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetKeywordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetKeywordsRequest): SiteSetKeywordsRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetKeywordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetKeywordsRequest;
  static deserializeBinaryFromReader(message: SiteSetKeywordsRequest, reader: jspb.BinaryReader): SiteSetKeywordsRequest;
}

export namespace SiteSetKeywordsRequest {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class SiteSetInfoRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SiteSetInfoRequest;

  getSubhead(): string;
  setSubhead(value: string): SiteSetInfoRequest;

  getDescription(): string;
  setDescription(value: string): SiteSetInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetInfoRequest): SiteSetInfoRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetInfoRequest;
  static deserializeBinaryFromReader(message: SiteSetInfoRequest, reader: jspb.BinaryReader): SiteSetInfoRequest;
}

export namespace SiteSetInfoRequest {
  export type AsObject = {
    title: string,
    subhead: string,
    description: string,
  }
}

export class SiteLayoutResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SiteLayoutResponse;

  getSubhead(): string;
  setSubhead(value: string): SiteLayoutResponse;

  getKeywordsList(): Array<string>;
  setKeywordsList(value: Array<string>): SiteLayoutResponse;
  clearKeywordsList(): SiteLayoutResponse;
  addKeywords(value: string, index?: number): SiteLayoutResponse;

  getDescription(): string;
  setDescription(value: string): SiteLayoutResponse;

  getAuthor(): SiteLayoutResponse.Author | undefined;
  setAuthor(value?: SiteLayoutResponse.Author): SiteLayoutResponse;
  hasAuthor(): boolean;
  clearAuthor(): SiteLayoutResponse;

  getCopyright(): string;
  setCopyright(value: string): SiteLayoutResponse;

  getLogo(): string;
  setLogo(value: string): SiteLayoutResponse;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): SiteLayoutResponse;
  clearLanguagesList(): SiteLayoutResponse;
  addLanguages(value: string, index?: number): SiteLayoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteLayoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteLayoutResponse): SiteLayoutResponse.AsObject;
  static serializeBinaryToWriter(message: SiteLayoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteLayoutResponse;
  static deserializeBinaryFromReader(message: SiteLayoutResponse, reader: jspb.BinaryReader): SiteLayoutResponse;
}

export namespace SiteLayoutResponse {
  export type AsObject = {
    title: string,
    subhead: string,
    keywordsList: Array<string>,
    description: string,
    author?: SiteLayoutResponse.Author.AsObject,
    copyright: string,
    logo: string,
    languagesList: Array<string>,
  }

  export class Author extends jspb.Message {
    getName(): string;
    setName(value: string): Author;

    getEmail(): string;
    setEmail(value: string): Author;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Author.AsObject;
    static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
    static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Author;
    static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
  }

  export namespace Author {
    export type AsObject = {
      name: string,
      email: string,
    }
  }

}

export class SiteNewLeaveWordRequest extends jspb.Message {
  getContent(): palm_pb.MediaContent | undefined;
  setContent(value?: palm_pb.MediaContent): SiteNewLeaveWordRequest;
  hasContent(): boolean;
  clearContent(): SiteNewLeaveWordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteNewLeaveWordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteNewLeaveWordRequest): SiteNewLeaveWordRequest.AsObject;
  static serializeBinaryToWriter(message: SiteNewLeaveWordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteNewLeaveWordRequest;
  static deserializeBinaryFromReader(message: SiteNewLeaveWordRequest, reader: jspb.BinaryReader): SiteNewLeaveWordRequest;
}

export namespace SiteNewLeaveWordRequest {
  export type AsObject = {
    content?: palm_pb.MediaContent.AsObject,
  }
}

export class SiteIndexLeaveWordResponse extends jspb.Message {
  getItemsList(): Array<SiteIndexLeaveWordResponse.Item>;
  setItemsList(value: Array<SiteIndexLeaveWordResponse.Item>): SiteIndexLeaveWordResponse;
  clearItemsList(): SiteIndexLeaveWordResponse;
  addItems(value?: SiteIndexLeaveWordResponse.Item, index?: number): SiteIndexLeaveWordResponse.Item;

  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): SiteIndexLeaveWordResponse;
  hasPagination(): boolean;
  clearPagination(): SiteIndexLeaveWordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteIndexLeaveWordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteIndexLeaveWordResponse): SiteIndexLeaveWordResponse.AsObject;
  static serializeBinaryToWriter(message: SiteIndexLeaveWordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteIndexLeaveWordResponse;
  static deserializeBinaryFromReader(message: SiteIndexLeaveWordResponse, reader: jspb.BinaryReader): SiteIndexLeaveWordResponse;
}

export namespace SiteIndexLeaveWordResponse {
  export type AsObject = {
    itemsList: Array<SiteIndexLeaveWordResponse.Item.AsObject>,
    pagination?: palm_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getLang(): string;
    setLang(value: string): Item;

    getIp(): string;
    setIp(value: string): Item;

    getBody(): string;
    setBody(value: string): Item;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasCreatedAt(): boolean;
    clearCreatedAt(): Item;

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
      ip: string,
      body: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class GoogleProfile extends jspb.Message {
  getSiteVerifyId(): string;
  setSiteVerifyId(value: string): GoogleProfile;
  hasSiteVerifyId(): boolean;
  clearSiteVerifyId(): GoogleProfile;

  getReCaptcha(): GoogleProfile.ReCaptcha | undefined;
  setReCaptcha(value?: GoogleProfile.ReCaptcha): GoogleProfile;
  hasReCaptcha(): boolean;
  clearReCaptcha(): GoogleProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleProfile.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleProfile): GoogleProfile.AsObject;
  static serializeBinaryToWriter(message: GoogleProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleProfile;
  static deserializeBinaryFromReader(message: GoogleProfile, reader: jspb.BinaryReader): GoogleProfile;
}

export namespace GoogleProfile {
  export type AsObject = {
    siteVerifyId?: string,
    reCaptcha?: GoogleProfile.ReCaptcha.AsObject,
  }

  export class ReCaptcha extends jspb.Message {
    getSiteKey(): string;
    setSiteKey(value: string): ReCaptcha;

    getSecret(): string;
    setSecret(value: string): ReCaptcha;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReCaptcha.AsObject;
    static toObject(includeInstance: boolean, msg: ReCaptcha): ReCaptcha.AsObject;
    static serializeBinaryToWriter(message: ReCaptcha, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReCaptcha;
    static deserializeBinaryFromReader(message: ReCaptcha, reader: jspb.BinaryReader): ReCaptcha;
  }

  export namespace ReCaptcha {
    export type AsObject = {
      siteKey: string,
      secret: string,
    }
  }


  export enum SiteVerifyIdCase { 
    _SITE_VERIFY_ID_NOT_SET = 0,
    SITE_VERIFY_ID = 1,
  }

  export enum ReCaptchaCase { 
    _RE_CAPTCHA_NOT_SET = 0,
    RE_CAPTCHA = 2,
  }
}

export class BaiduProfile extends jspb.Message {
  getSiteVerify(): BaiduProfile.SiteVerify | undefined;
  setSiteVerify(value?: BaiduProfile.SiteVerify): BaiduProfile;
  hasSiteVerify(): boolean;
  clearSiteVerify(): BaiduProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaiduProfile.AsObject;
  static toObject(includeInstance: boolean, msg: BaiduProfile): BaiduProfile.AsObject;
  static serializeBinaryToWriter(message: BaiduProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaiduProfile;
  static deserializeBinaryFromReader(message: BaiduProfile, reader: jspb.BinaryReader): BaiduProfile;
}

export namespace BaiduProfile {
  export type AsObject = {
    siteVerify?: BaiduProfile.SiteVerify.AsObject,
  }

  export class SiteVerify extends jspb.Message {
    getId(): string;
    setId(value: string): SiteVerify;

    getContent(): string;
    setContent(value: string): SiteVerify;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteVerify.AsObject;
    static toObject(includeInstance: boolean, msg: SiteVerify): SiteVerify.AsObject;
    static serializeBinaryToWriter(message: SiteVerify, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteVerify;
    static deserializeBinaryFromReader(message: SiteVerify, reader: jspb.BinaryReader): SiteVerify;
  }

  export namespace SiteVerify {
    export type AsObject = {
      id: string,
      content: string,
    }
  }


  export enum SiteVerifyCase { 
    _SITE_VERIFY_NOT_SET = 0,
    SITE_VERIFY = 1,
  }
}

export class BingProfile extends jspb.Message {
  getSiteVerifyId(): string;
  setSiteVerifyId(value: string): BingProfile;
  hasSiteVerifyId(): boolean;
  clearSiteVerifyId(): BingProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BingProfile.AsObject;
  static toObject(includeInstance: boolean, msg: BingProfile): BingProfile.AsObject;
  static serializeBinaryToWriter(message: BingProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BingProfile;
  static deserializeBinaryFromReader(message: BingProfile, reader: jspb.BinaryReader): BingProfile;
}

export namespace BingProfile {
  export type AsObject = {
    siteVerifyId?: string,
  }

  export enum SiteVerifyIdCase { 
    _SITE_VERIFY_ID_NOT_SET = 0,
    SITE_VERIFY_ID = 1,
  }
}

export class SiteIndexNotificationResponse extends jspb.Message {
  getItemsList(): Array<SiteIndexNotificationResponse.Item>;
  setItemsList(value: Array<SiteIndexNotificationResponse.Item>): SiteIndexNotificationResponse;
  clearItemsList(): SiteIndexNotificationResponse;
  addItems(value?: SiteIndexNotificationResponse.Item, index?: number): SiteIndexNotificationResponse.Item;

  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): SiteIndexNotificationResponse;
  hasPagination(): boolean;
  clearPagination(): SiteIndexNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteIndexNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteIndexNotificationResponse): SiteIndexNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: SiteIndexNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteIndexNotificationResponse;
  static deserializeBinaryFromReader(message: SiteIndexNotificationResponse, reader: jspb.BinaryReader): SiteIndexNotificationResponse;
}

export namespace SiteIndexNotificationResponse {
  export type AsObject = {
    itemsList: Array<SiteIndexNotificationResponse.Item.AsObject>,
    pagination?: palm_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getEmail(): palm_pb.EmailTask | undefined;
    setEmail(value?: palm_pb.EmailTask): Item;
    hasEmail(): boolean;
    clearEmail(): Item;

    getSms(): palm_pb.SmsTask | undefined;
    setSms(value?: palm_pb.SmsTask): Item;
    hasSms(): boolean;
    clearSms(): Item;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasCreatedAt(): boolean;
    clearCreatedAt(): Item;

    getMessageCase(): Item.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      email?: palm_pb.EmailTask.AsObject,
      sms?: palm_pb.SmsTask.AsObject,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum MessageCase { 
      MESSAGE_NOT_SET = 0,
      EMAIL = 1,
      SMS = 2,
    }
  }

}

export class SiteStatusResponse extends jspb.Message {
  getPostgresql(): SiteStatusResponse.PostgreSql | undefined;
  setPostgresql(value?: SiteStatusResponse.PostgreSql): SiteStatusResponse;
  hasPostgresql(): boolean;
  clearPostgresql(): SiteStatusResponse;

  getMysql(): SiteStatusResponse.MySql | undefined;
  setMysql(value?: SiteStatusResponse.MySql): SiteStatusResponse;
  hasMysql(): boolean;
  clearMysql(): SiteStatusResponse;

  getRedis(): SiteStatusResponse.Redis | undefined;
  setRedis(value?: SiteStatusResponse.Redis): SiteStatusResponse;
  hasRedis(): boolean;
  clearRedis(): SiteStatusResponse;

  getRabbitmq(): SiteStatusResponse.RabbitMq | undefined;
  setRabbitmq(value?: SiteStatusResponse.RabbitMq): SiteStatusResponse;
  hasRabbitmq(): boolean;
  clearRabbitmq(): SiteStatusResponse;

  getOpensearch(): SiteStatusResponse.OpenSearch | undefined;
  setOpensearch(value?: SiteStatusResponse.OpenSearch): SiteStatusResponse;
  hasOpensearch(): boolean;
  clearOpensearch(): SiteStatusResponse;

  getSystem(): SiteStatusResponse.System | undefined;
  setSystem(value?: SiteStatusResponse.System): SiteStatusResponse;
  hasSystem(): boolean;
  clearSystem(): SiteStatusResponse;

  getHealthesList(): Array<SiteStatusResponse.Health>;
  setHealthesList(value: Array<SiteStatusResponse.Health>): SiteStatusResponse;
  clearHealthesList(): SiteStatusResponse;
  addHealthes(value?: SiteStatusResponse.Health, index?: number): SiteStatusResponse.Health;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteStatusResponse): SiteStatusResponse.AsObject;
  static serializeBinaryToWriter(message: SiteStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteStatusResponse;
  static deserializeBinaryFromReader(message: SiteStatusResponse, reader: jspb.BinaryReader): SiteStatusResponse;
}

export namespace SiteStatusResponse {
  export type AsObject = {
    postgresql?: SiteStatusResponse.PostgreSql.AsObject,
    mysql?: SiteStatusResponse.MySql.AsObject,
    redis?: SiteStatusResponse.Redis.AsObject,
    rabbitmq?: SiteStatusResponse.RabbitMq.AsObject,
    opensearch?: SiteStatusResponse.OpenSearch.AsObject,
    system?: SiteStatusResponse.System.AsObject,
    healthesList: Array<SiteStatusResponse.Health.AsObject>,
  }

  export class Database extends jspb.Message {
    getName(): string;
    setName(value: string): Database;

    getSize(): string;
    setSize(value: string): Database;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Database.AsObject;
    static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
    static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Database;
    static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
  }

  export namespace Database {
    export type AsObject = {
      name: string,
      size: string,
    }
  }


  export class PostgreSql extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): PostgreSql;

    getNow(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNow(value?: google_protobuf_timestamp_pb.Timestamp): PostgreSql;
    hasNow(): boolean;
    clearNow(): PostgreSql;

    getDatabasesList(): Array<SiteStatusResponse.Database>;
    setDatabasesList(value: Array<SiteStatusResponse.Database>): PostgreSql;
    clearDatabasesList(): PostgreSql;
    addDatabases(value?: SiteStatusResponse.Database, index?: number): SiteStatusResponse.Database;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgreSql.AsObject;
    static toObject(includeInstance: boolean, msg: PostgreSql): PostgreSql.AsObject;
    static serializeBinaryToWriter(message: PostgreSql, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgreSql;
    static deserializeBinaryFromReader(message: PostgreSql, reader: jspb.BinaryReader): PostgreSql;
  }

  export namespace PostgreSql {
    export type AsObject = {
      version: string,
      now?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      databasesList: Array<SiteStatusResponse.Database.AsObject>,
    }
  }


  export class MySql extends jspb.Message {
    getSize(): number;
    setSize(value: number): MySql;

    getVersion(): string;
    setVersion(value: string): MySql;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MySql.AsObject;
    static toObject(includeInstance: boolean, msg: MySql): MySql.AsObject;
    static serializeBinaryToWriter(message: MySql, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MySql;
    static deserializeBinaryFromReader(message: MySql, reader: jspb.BinaryReader): MySql;
  }

  export namespace MySql {
    export type AsObject = {
      size: number,
      version: string,
    }
  }


  export class Redis extends jspb.Message {
    getInfo(): string;
    setInfo(value: string): Redis;

    getItemsList(): Array<SiteStatusResponse.Redis.Item>;
    setItemsList(value: Array<SiteStatusResponse.Redis.Item>): Redis;
    clearItemsList(): Redis;
    addItems(value?: SiteStatusResponse.Redis.Item, index?: number): SiteStatusResponse.Redis.Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Redis.AsObject;
    static toObject(includeInstance: boolean, msg: Redis): Redis.AsObject;
    static serializeBinaryToWriter(message: Redis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Redis;
    static deserializeBinaryFromReader(message: Redis, reader: jspb.BinaryReader): Redis;
  }

  export namespace Redis {
    export type AsObject = {
      info: string,
      itemsList: Array<SiteStatusResponse.Redis.Item.AsObject>,
    }

    export class Item extends jspb.Message {
      getKey(): string;
      setKey(value: string): Item;

      getTtl(): number;
      setTtl(value: number): Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Item.AsObject;
      static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
      static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Item;
      static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
    }

    export namespace Item {
      export type AsObject = {
        key: string,
        ttl: number,
      }
    }

  }


  export class RabbitMq extends jspb.Message {
    getProtocol(): string;
    setProtocol(value: string): RabbitMq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitMq.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitMq): RabbitMq.AsObject;
    static serializeBinaryToWriter(message: RabbitMq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitMq;
    static deserializeBinaryFromReader(message: RabbitMq, reader: jspb.BinaryReader): RabbitMq;
  }

  export namespace RabbitMq {
    export type AsObject = {
      protocol: string,
    }
  }


  export class OpenSearch extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): OpenSearch;

    getInfo(): string;
    setInfo(value: string): OpenSearch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenSearch.AsObject;
    static toObject(includeInstance: boolean, msg: OpenSearch): OpenSearch.AsObject;
    static serializeBinaryToWriter(message: OpenSearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenSearch;
    static deserializeBinaryFromReader(message: OpenSearch, reader: jspb.BinaryReader): OpenSearch;
  }

  export namespace OpenSearch {
    export type AsObject = {
      url: string,
      info: string,
    }
  }


  export class Health extends jspb.Message {
    getName(): string;
    setName(value: string): Health;

    getStatus(): string;
    setStatus(value: string): Health;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Health.AsObject;
    static toObject(includeInstance: boolean, msg: Health): Health.AsObject;
    static serializeBinaryToWriter(message: Health, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Health;
    static deserializeBinaryFromReader(message: Health, reader: jspb.BinaryReader): Health;
  }

  export namespace Health {
    export type AsObject = {
      name: string,
      status: string,
    }
  }


  export class System extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): System;

    getCpu(): string;
    setCpu(value: string): System;

    getMemory(): string;
    setMemory(value: string): System;

    getBoot(): string;
    setBoot(value: string): System;

    getDisk(): string;
    setDisk(value: string): System;

    getLoad(): string;
    setLoad(value: string): System;

    getFs(): string;
    setFs(value: string): System;

    getSwap(): string;
    setSwap(value: string): System;

    getUptime(): string;
    setUptime(value: string): System;

    getNetwork(): string;
    setNetwork(value: string): System;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): System.AsObject;
    static toObject(includeInstance: boolean, msg: System): System.AsObject;
    static serializeBinaryToWriter(message: System, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): System;
    static deserializeBinaryFromReader(message: System, reader: jspb.BinaryReader): System;
  }

  export namespace System {
    export type AsObject = {
      version: string,
      cpu: string,
      memory: string,
      boot: string,
      disk: string,
      load: string,
      fs: string,
      swap: string,
      uptime: string,
      network: string,
    }
  }

}

export class ShorterLinkIndexResponse extends jspb.Message {
  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): ShorterLinkIndexResponse;
  hasPagination(): boolean;
  clearPagination(): ShorterLinkIndexResponse;

  getItemsList(): Array<ShorterLinkIndexResponse.Item>;
  setItemsList(value: Array<ShorterLinkIndexResponse.Item>): ShorterLinkIndexResponse;
  clearItemsList(): ShorterLinkIndexResponse;
  addItems(value?: ShorterLinkIndexResponse.Item, index?: number): ShorterLinkIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShorterLinkIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShorterLinkIndexResponse): ShorterLinkIndexResponse.AsObject;
  static serializeBinaryToWriter(message: ShorterLinkIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShorterLinkIndexResponse;
  static deserializeBinaryFromReader(message: ShorterLinkIndexResponse, reader: jspb.BinaryReader): ShorterLinkIndexResponse;
}

export namespace ShorterLinkIndexResponse {
  export type AsObject = {
    pagination?: palm_pb.Pagination.AsObject,
    itemsList: Array<ShorterLinkIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUrl(): string;
    setUrl(value: string): Item;

    getDetails(): string;
    setDetails(value: string): Item;

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
      url: string,
      details: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class ShorterLinkCreateRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ShorterLinkCreateRequest;

  getDetails(): string;
  setDetails(value: string): ShorterLinkCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShorterLinkCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShorterLinkCreateRequest): ShorterLinkCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ShorterLinkCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShorterLinkCreateRequest;
  static deserializeBinaryFromReader(message: ShorterLinkCreateRequest, reader: jspb.BinaryReader): ShorterLinkCreateRequest;
}

export namespace ShorterLinkCreateRequest {
  export type AsObject = {
    url: string,
    details: string,
  }
}

export class ShorterLinkUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ShorterLinkUpdateRequest;

  getUrl(): string;
  setUrl(value: string): ShorterLinkUpdateRequest;

  getDetails(): string;
  setDetails(value: string): ShorterLinkUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShorterLinkUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShorterLinkUpdateRequest): ShorterLinkUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ShorterLinkUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShorterLinkUpdateRequest;
  static deserializeBinaryFromReader(message: ShorterLinkUpdateRequest, reader: jspb.BinaryReader): ShorterLinkUpdateRequest;
}

export namespace ShorterLinkUpdateRequest {
  export type AsObject = {
    id: number,
    url: string,
    details: string,
  }
}

export class TagIndexResponse extends jspb.Message {
  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): TagIndexResponse;
  hasPagination(): boolean;
  clearPagination(): TagIndexResponse;

  getItemsList(): Array<TagIndexResponse.Item>;
  setItemsList(value: Array<TagIndexResponse.Item>): TagIndexResponse;
  clearItemsList(): TagIndexResponse;
  addItems(value?: TagIndexResponse.Item, index?: number): TagIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TagIndexResponse): TagIndexResponse.AsObject;
  static serializeBinaryToWriter(message: TagIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagIndexResponse;
  static deserializeBinaryFromReader(message: TagIndexResponse, reader: jspb.BinaryReader): TagIndexResponse;
}

export namespace TagIndexResponse {
  export type AsObject = {
    pagination?: palm_pb.Pagination.AsObject,
    itemsList: Array<TagIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getCode(): string;
    setCode(value: string): Item;

    getPriority(): number;
    setPriority(value: number): Item;

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
      code: string,
      priority: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class TagCreateRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): TagCreateRequest;

  getPriority(): number;
  setPriority(value: number): TagCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TagCreateRequest): TagCreateRequest.AsObject;
  static serializeBinaryToWriter(message: TagCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagCreateRequest;
  static deserializeBinaryFromReader(message: TagCreateRequest, reader: jspb.BinaryReader): TagCreateRequest;
}

export namespace TagCreateRequest {
  export type AsObject = {
    code: string,
    priority: number,
  }
}

export class TagUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TagUpdateRequest;

  getCode(): string;
  setCode(value: string): TagUpdateRequest;

  getPriority(): number;
  setPriority(value: number): TagUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TagUpdateRequest): TagUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TagUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagUpdateRequest;
  static deserializeBinaryFromReader(message: TagUpdateRequest, reader: jspb.BinaryReader): TagUpdateRequest;
}

export namespace TagUpdateRequest {
  export type AsObject = {
    id: number,
    code: string,
    priority: number,
  }
}

export class CategoryIndexResponse extends jspb.Message {
  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): CategoryIndexResponse;
  hasPagination(): boolean;
  clearPagination(): CategoryIndexResponse;

  getItemsList(): Array<CategoryIndexResponse.Item>;
  setItemsList(value: Array<CategoryIndexResponse.Item>): CategoryIndexResponse;
  clearItemsList(): CategoryIndexResponse;
  addItems(value?: CategoryIndexResponse.Item, index?: number): CategoryIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryIndexResponse): CategoryIndexResponse.AsObject;
  static serializeBinaryToWriter(message: CategoryIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryIndexResponse;
  static deserializeBinaryFromReader(message: CategoryIndexResponse, reader: jspb.BinaryReader): CategoryIndexResponse;
}

export namespace CategoryIndexResponse {
  export type AsObject = {
    pagination?: palm_pb.Pagination.AsObject,
    itemsList: Array<CategoryIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getCode(): string;
    setCode(value: string): Item;

    getParentId(): number;
    setParentId(value: number): Item;
    hasParentId(): boolean;
    clearParentId(): Item;

    getPriority(): number;
    setPriority(value: number): Item;

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
      code: string,
      parentId?: number,
      priority: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum ParentIdCase { 
      _PARENT_ID_NOT_SET = 0,
      PARENT_ID = 3,
    }
  }

}

export class CategoryCreateRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): CategoryCreateRequest;

  getCode(): string;
  setCode(value: string): CategoryCreateRequest;

  getParentId(): number;
  setParentId(value: number): CategoryCreateRequest;
  hasParentId(): boolean;
  clearParentId(): CategoryCreateRequest;

  getPriority(): number;
  setPriority(value: number): CategoryCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryCreateRequest): CategoryCreateRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryCreateRequest;
  static deserializeBinaryFromReader(message: CategoryCreateRequest, reader: jspb.BinaryReader): CategoryCreateRequest;
}

export namespace CategoryCreateRequest {
  export type AsObject = {
    lang: string,
    code: string,
    parentId?: number,
    priority: number,
  }

  export enum ParentIdCase { 
    _PARENT_ID_NOT_SET = 0,
    PARENT_ID = 3,
  }
}

export class CategoryUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CategoryUpdateRequest;

  getCode(): string;
  setCode(value: string): CategoryUpdateRequest;

  getParentId(): number;
  setParentId(value: number): CategoryUpdateRequest;
  hasParentId(): boolean;
  clearParentId(): CategoryUpdateRequest;

  getPriority(): number;
  setPriority(value: number): CategoryUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryUpdateRequest): CategoryUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryUpdateRequest;
  static deserializeBinaryFromReader(message: CategoryUpdateRequest, reader: jspb.BinaryReader): CategoryUpdateRequest;
}

export namespace CategoryUpdateRequest {
  export type AsObject = {
    id: number,
    code: string,
    parentId?: number,
    priority: number,
  }

  export enum ParentIdCase { 
    _PARENT_ID_NOT_SET = 0,
    PARENT_ID = 3,
  }
}

