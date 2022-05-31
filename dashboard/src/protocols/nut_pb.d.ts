import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


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
  }
}

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

export class UserChangePasswordRequest extends jspb.Message {
  getCurrentPassword(): string;
  setCurrentPassword(value: string): UserChangePasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): UserChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserChangePasswordRequest): UserChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UserChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserChangePasswordRequest;
  static deserializeBinaryFromReader(message: UserChangePasswordRequest, reader: jspb.BinaryReader): UserChangePasswordRequest;
}

export namespace UserChangePasswordRequest {
  export type AsObject = {
    currentPassword: string,
    newPassword: string,
  }
}

export class UserLogsResponse extends jspb.Message {
  getItemsList(): Array<UserLogsResponse.Item>;
  setItemsList(value: Array<UserLogsResponse.Item>): UserLogsResponse;
  clearItemsList(): UserLogsResponse;
  addItems(value?: UserLogsResponse.Item, index?: number): UserLogsResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): UserLogsResponse;
  hasPagination(): boolean;
  clearPagination(): UserLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogsResponse): UserLogsResponse.AsObject;
  static serializeBinaryToWriter(message: UserLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogsResponse;
  static deserializeBinaryFromReader(message: UserLogsResponse, reader: jspb.BinaryReader): UserLogsResponse;
}

export namespace UserLogsResponse {
  export type AsObject = {
    itemsList: Array<UserLogsResponse.Item.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUserId(): number;
    setUserId(value: number): Item;

    getMessage(): string;
    setMessage(value: string): Item;

    getResourceType(): string;
    setResourceType(value: string): Item;

    getResourceId(): number;
    setResourceId(value: number): Item;
    hasResourceId(): boolean;
    clearResourceId(): Item;

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
      userId: number,
      message: string,
      resourceType: string,
      resourceId?: number,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum ResourceIdCase { 
      _RESOURCE_ID_NOT_SET = 0,
      RESOURCE_ID = 5,
    }
  }

}

export class UserResetPasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserResetPasswordRequest;

  getPassword(): string;
  setPassword(value: string): UserResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserResetPasswordRequest): UserResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UserResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResetPasswordRequest;
  static deserializeBinaryFromReader(message: UserResetPasswordRequest, reader: jspb.BinaryReader): UserResetPasswordRequest;
}

export namespace UserResetPasswordRequest {
  export type AsObject = {
    token: string,
    password: string,
  }
}

export class UserQueryRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): UserQueryRequest;

  getNickName(): string;
  setNickName(value: string): UserQueryRequest;

  getIdCase(): UserQueryRequest.IdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserQueryRequest): UserQueryRequest.AsObject;
  static serializeBinaryToWriter(message: UserQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQueryRequest;
  static deserializeBinaryFromReader(message: UserQueryRequest, reader: jspb.BinaryReader): UserQueryRequest;
}

export namespace UserQueryRequest {
  export type AsObject = {
    email: string,
    nickName: string,
  }

  export enum IdCase { 
    ID_NOT_SET = 0,
    EMAIL = 1,
    NICK_NAME = 2,
  }
}

export class UserEmailRequest extends jspb.Message {
  getQuery(): UserQueryRequest | undefined;
  setQuery(value?: UserQueryRequest): UserEmailRequest;
  hasQuery(): boolean;
  clearQuery(): UserEmailRequest;

  getHome(): string;
  setHome(value: string): UserEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserEmailRequest): UserEmailRequest.AsObject;
  static serializeBinaryToWriter(message: UserEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserEmailRequest;
  static deserializeBinaryFromReader(message: UserEmailRequest, reader: jspb.BinaryReader): UserEmailRequest;
}

export namespace UserEmailRequest {
  export type AsObject = {
    query?: UserQueryRequest.AsObject,
    home: string,
  }
}

export class UserTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserTokenRequest): UserTokenRequest.AsObject;
  static serializeBinaryToWriter(message: UserTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTokenRequest;
  static deserializeBinaryFromReader(message: UserTokenRequest, reader: jspb.BinaryReader): UserTokenRequest;
}

export namespace UserTokenRequest {
  export type AsObject = {
    token: string,
  }
}

export class UserSignInRequest extends jspb.Message {
  getQuery(): UserQueryRequest | undefined;
  setQuery(value?: UserQueryRequest): UserSignInRequest;
  hasQuery(): boolean;
  clearQuery(): UserSignInRequest;

  getPassword(): string;
  setPassword(value: string): UserSignInRequest;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): UserSignInRequest;
  hasTtl(): boolean;
  clearTtl(): UserSignInRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSignInRequest): UserSignInRequest.AsObject;
  static serializeBinaryToWriter(message: UserSignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSignInRequest;
  static deserializeBinaryFromReader(message: UserSignInRequest, reader: jspb.BinaryReader): UserSignInRequest;
}

export namespace UserSignInRequest {
  export type AsObject = {
    query?: UserQueryRequest.AsObject,
    password: string,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Menu extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): Menu;

  getTo(): string;
  setTo(value: string): Menu;

  getChildrenList(): Array<Menu>;
  setChildrenList(value: Array<Menu>): Menu;
  clearChildrenList(): Menu;
  addChildren(value?: Menu, index?: number): Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Menu.AsObject;
  static toObject(includeInstance: boolean, msg: Menu): Menu.AsObject;
  static serializeBinaryToWriter(message: Menu, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Menu;
  static deserializeBinaryFromReader(message: Menu, reader: jspb.BinaryReader): Menu;
}

export namespace Menu {
  export type AsObject = {
    label: string,
    to: string,
    childrenList: Array<Menu.AsObject>,
  }
}

export class SiteInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SiteInfo;

  getSubhead(): string;
  setSubhead(value: string): SiteInfo;

  getKeywordsList(): Array<string>;
  setKeywordsList(value: Array<string>): SiteInfo;
  clearKeywordsList(): SiteInfo;
  addKeywords(value: string, index?: number): SiteInfo;

  getDescription(): string;
  setDescription(value: string): SiteInfo;

  getAuthor(): SiteInfo.Author | undefined;
  setAuthor(value?: SiteInfo.Author): SiteInfo;
  hasAuthor(): boolean;
  clearAuthor(): SiteInfo;

  getCopyright(): string;
  setCopyright(value: string): SiteInfo;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): SiteInfo;
  clearLanguagesList(): SiteInfo;
  addLanguages(value: string, index?: number): SiteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SiteInfo): SiteInfo.AsObject;
  static serializeBinaryToWriter(message: SiteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteInfo;
  static deserializeBinaryFromReader(message: SiteInfo, reader: jspb.BinaryReader): SiteInfo;
}

export namespace SiteInfo {
  export type AsObject = {
    title: string,
    subhead: string,
    keywordsList: Array<string>,
    description: string,
    author?: SiteInfo.Author.AsObject,
    copyright: string,
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

export class UserSignInResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserSignInResponse;

  getLang(): string;
  setLang(value: string): UserSignInResponse;

  getTimeZone(): string;
  setTimeZone(value: string): UserSignInResponse;

  getAvatar(): string;
  setAvatar(value: string): UserSignInResponse;

  getRealName(): string;
  setRealName(value: string): UserSignInResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSignInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserSignInResponse): UserSignInResponse.AsObject;
  static serializeBinaryToWriter(message: UserSignInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSignInResponse;
  static deserializeBinaryFromReader(message: UserSignInResponse, reader: jspb.BinaryReader): UserSignInResponse;
}

export namespace UserSignInResponse {
  export type AsObject = {
    token: string,
    lang: string,
    timeZone: string,
    avatar: string,
    realName: string,
  }
}

export class UserSignUpRequest extends jspb.Message {
  getRealName(): string;
  setRealName(value: string): UserSignUpRequest;

  getNickName(): string;
  setNickName(value: string): UserSignUpRequest;

  getEmail(): string;
  setEmail(value: string): UserSignUpRequest;

  getPassword(): string;
  setPassword(value: string): UserSignUpRequest;

  getLang(): string;
  setLang(value: string): UserSignUpRequest;

  getTimeZone(): string;
  setTimeZone(value: string): UserSignUpRequest;

  getHome(): string;
  setHome(value: string): UserSignUpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSignUpRequest): UserSignUpRequest.AsObject;
  static serializeBinaryToWriter(message: UserSignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSignUpRequest;
  static deserializeBinaryFromReader(message: UserSignUpRequest, reader: jspb.BinaryReader): UserSignUpRequest;
}

export namespace UserSignUpRequest {
  export type AsObject = {
    realName: string,
    nickName: string,
    email: string,
    password: string,
    lang: string,
    timeZone: string,
    home: string,
  }
}

export class UserProfile extends jspb.Message {
  getRealName(): string;
  setRealName(value: string): UserProfile;

  getAvatar(): string;
  setAvatar(value: string): UserProfile;

  getNickName(): string;
  setNickName(value: string): UserProfile;

  getEmail(): string;
  setEmail(value: string): UserProfile;

  getTimeZone(): string;
  setTimeZone(value: string): UserProfile;

  getLang(): string;
  setLang(value: string): UserProfile;

  getWechat(): string;
  setWechat(value: string): UserProfile;

  getPhone(): string;
  setPhone(value: string): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    realName: string,
    avatar: string,
    nickName: string,
    email: string,
    timeZone: string,
    lang: string,
    wechat: string,
    phone: string,
  }
}

export class PolicyIndexResponse extends jspb.Message {
  getItemsList(): Array<PolicyIndexResponse.Item>;
  setItemsList(value: Array<PolicyIndexResponse.Item>): PolicyIndexResponse;
  clearItemsList(): PolicyIndexResponse;
  addItems(value?: PolicyIndexResponse.Item, index?: number): PolicyIndexResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PolicyIndexResponse;
  hasPagination(): boolean;
  clearPagination(): PolicyIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyIndexResponse): PolicyIndexResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyIndexResponse;
  static deserializeBinaryFromReader(message: PolicyIndexResponse, reader: jspb.BinaryReader): PolicyIndexResponse;
}

export namespace PolicyIndexResponse {
  export type AsObject = {
    itemsList: Array<PolicyIndexResponse.Item.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getRole(): string;
    setRole(value: string): Item;

    getOperation(): string;
    setOperation(value: string): Item;

    getResourceType(): string;
    setResourceType(value: string): Item;

    getResourceId(): number;
    setResourceId(value: number): Item;
    hasResourceId(): boolean;
    clearResourceId(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      role: string,
      operation: string,
      resourceType: string,
      resourceId?: number,
    }

    export enum ResourceIdCase { 
      _RESOURCE_ID_NOT_SET = 0,
      RESOURCE_ID = 4,
    }
  }

}

export class PolicyUserRoleAssociateRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): PolicyUserRoleAssociateRequest;

  getRole(): string;
  setRole(value: string): PolicyUserRoleAssociateRequest;

  getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): PolicyUserRoleAssociateRequest;
  hasNotBefore(): boolean;
  clearNotBefore(): PolicyUserRoleAssociateRequest;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): PolicyUserRoleAssociateRequest;
  hasExpiredAt(): boolean;
  clearExpiredAt(): PolicyUserRoleAssociateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyUserRoleAssociateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyUserRoleAssociateRequest): PolicyUserRoleAssociateRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyUserRoleAssociateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyUserRoleAssociateRequest;
  static deserializeBinaryFromReader(message: PolicyUserRoleAssociateRequest, reader: jspb.BinaryReader): PolicyUserRoleAssociateRequest;
}

export namespace PolicyUserRoleAssociateRequest {
  export type AsObject = {
    user: number,
    role: string,
    notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PolicyUserRoleUnassociateRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): PolicyUserRoleUnassociateRequest;

  getRole(): string;
  setRole(value: string): PolicyUserRoleUnassociateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyUserRoleUnassociateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyUserRoleUnassociateRequest): PolicyUserRoleUnassociateRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyUserRoleUnassociateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyUserRoleUnassociateRequest;
  static deserializeBinaryFromReader(message: PolicyUserRoleUnassociateRequest, reader: jspb.BinaryReader): PolicyUserRoleUnassociateRequest;
}

export namespace PolicyUserRoleUnassociateRequest {
  export type AsObject = {
    user: number,
    role: string,
  }
}

export class LocaleIndexResponse extends jspb.Message {
  getItemsList(): Array<LocaleIndexResponse.Item>;
  setItemsList(value: Array<LocaleIndexResponse.Item>): LocaleIndexResponse;
  clearItemsList(): LocaleIndexResponse;
  addItems(value?: LocaleIndexResponse.Item, index?: number): LocaleIndexResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): LocaleIndexResponse;
  hasPagination(): boolean;
  clearPagination(): LocaleIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleIndexResponse): LocaleIndexResponse.AsObject;
  static serializeBinaryToWriter(message: LocaleIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleIndexResponse;
  static deserializeBinaryFromReader(message: LocaleIndexResponse, reader: jspb.BinaryReader): LocaleIndexResponse;
}

export namespace LocaleIndexResponse {
  export type AsObject = {
    itemsList: Array<LocaleIndexResponse.Item.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getLang(): string;
    setLang(value: string): Item;

    getCode(): string;
    setCode(value: string): Item;

    getMessage(): string;
    setMessage(value: string): Item;

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
      lang: string,
      code: string,
      message: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class LocaleGetRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): LocaleGetRequest;

  getCode(): string;
  setCode(value: string): LocaleGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleGetRequest): LocaleGetRequest.AsObject;
  static serializeBinaryToWriter(message: LocaleGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleGetRequest;
  static deserializeBinaryFromReader(message: LocaleGetRequest, reader: jspb.BinaryReader): LocaleGetRequest;
}

export namespace LocaleGetRequest {
  export type AsObject = {
    lang: string,
    code: string,
  }
}

export class LocaleSetRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): LocaleSetRequest;

  getCode(): string;
  setCode(value: string): LocaleSetRequest;

  getMessage(): string;
  setMessage(value: string): LocaleSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleSetRequest): LocaleSetRequest.AsObject;
  static serializeBinaryToWriter(message: LocaleSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleSetRequest;
  static deserializeBinaryFromReader(message: LocaleSetRequest, reader: jspb.BinaryReader): LocaleSetRequest;
}

export namespace LocaleSetRequest {
  export type AsObject = {
    lang: string,
    code: string,
    message: string,
  }
}

export class SettingGetResponse extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): SettingGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SettingGetResponse): SettingGetResponse.AsObject;
  static serializeBinaryToWriter(message: SettingGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingGetResponse;
  static deserializeBinaryFromReader(message: SettingGetResponse, reader: jspb.BinaryReader): SettingGetResponse;
}

export namespace SettingGetResponse {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class SettingGetRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): SettingGetRequest;
  hasUser(): boolean;
  clearUser(): SettingGetRequest;

  getKey(): string;
  setKey(value: string): SettingGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SettingGetRequest): SettingGetRequest.AsObject;
  static serializeBinaryToWriter(message: SettingGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingGetRequest;
  static deserializeBinaryFromReader(message: SettingGetRequest, reader: jspb.BinaryReader): SettingGetRequest;
}

export namespace SettingGetRequest {
  export type AsObject = {
    user?: number,
    key: string,
  }

  export enum UserCase { 
    _USER_NOT_SET = 0,
    USER = 1,
  }
}

export class SettingSetRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): SettingSetRequest;
  hasUser(): boolean;
  clearUser(): SettingSetRequest;

  getKey(): string;
  setKey(value: string): SettingSetRequest;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): SettingSetRequest;

  getEncrypt(): boolean;
  setEncrypt(value: boolean): SettingSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SettingSetRequest): SettingSetRequest.AsObject;
  static serializeBinaryToWriter(message: SettingSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingSetRequest;
  static deserializeBinaryFromReader(message: SettingSetRequest, reader: jspb.BinaryReader): SettingSetRequest;
}

export namespace SettingSetRequest {
  export type AsObject = {
    user?: number,
    key: string,
    value: Uint8Array | string,
    encrypt: boolean,
  }

  export enum UserCase { 
    _USER_NOT_SET = 0,
    USER = 1,
  }
}

export class SiteInstallRequest extends jspb.Message {
  getUser(): UserSignUpRequest | undefined;
  setUser(value?: UserSignUpRequest): SiteInstallRequest;
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
    user?: UserSignUpRequest.AsObject,
  }
}

export class SiteSetUserPasswordRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): SiteSetUserPasswordRequest;

  getPassword(): string;
  setPassword(value: string): SiteSetUserPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetUserPasswordRequest): SiteSetUserPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetUserPasswordRequest;
  static deserializeBinaryFromReader(message: SiteSetUserPasswordRequest, reader: jspb.BinaryReader): SiteSetUserPasswordRequest;
}

export namespace SiteSetUserPasswordRequest {
  export type AsObject = {
    user: number,
    password: string,
  }
}

export class SiteUserIndexResponse extends jspb.Message {
  getItemsList(): Array<SiteUserIndexResponse.Item>;
  setItemsList(value: Array<SiteUserIndexResponse.Item>): SiteUserIndexResponse;
  clearItemsList(): SiteUserIndexResponse;
  addItems(value?: SiteUserIndexResponse.Item, index?: number): SiteUserIndexResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): SiteUserIndexResponse;
  hasPagination(): boolean;
  clearPagination(): SiteUserIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteUserIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteUserIndexResponse): SiteUserIndexResponse.AsObject;
  static serializeBinaryToWriter(message: SiteUserIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteUserIndexResponse;
  static deserializeBinaryFromReader(message: SiteUserIndexResponse, reader: jspb.BinaryReader): SiteUserIndexResponse;
}

export namespace SiteUserIndexResponse {
  export type AsObject = {
    itemsList: Array<SiteUserIndexResponse.Item.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUid(): string;
    setUid(value: string): Item;

    getEmail(): string;
    setEmail(value: string): Item;

    getNickName(): string;
    setNickName(value: string): Item;

    getRealName(): string;
    setRealName(value: string): Item;

    getProviderType(): string;
    setProviderType(value: string): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    getLastSignInAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastSignInAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasLastSignInAt(): boolean;
    clearLastSignInAt(): Item;

    getLastSignInIp(): string;
    setLastSignInIp(value: string): Item;
    hasLastSignInIp(): boolean;
    clearLastSignInIp(): Item;

    getCurrentSignInAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCurrentSignInAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasCurrentSignInAt(): boolean;
    clearCurrentSignInAt(): Item;

    getCurrentSignInIp(): string;
    setCurrentSignInIp(value: string): Item;
    hasCurrentSignInIp(): boolean;
    clearCurrentSignInIp(): Item;

    getSignInCount(): number;
    setSignInCount(value: number): Item;

    getLang(): string;
    setLang(value: string): Item;

    getTimeZone(): string;
    setTimeZone(value: string): Item;

    getAvatar(): string;
    setAvatar(value: string): Item;

    getConfirmedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setConfirmedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasConfirmedAt(): boolean;
    clearConfirmedAt(): Item;

    getLockedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLockedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasLockedAt(): boolean;
    clearLockedAt(): Item;

    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasDeletedAt(): boolean;
    clearDeletedAt(): Item;

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
      uid: string,
      email: string,
      nickName: string,
      realName: string,
      providerType: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastSignInAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastSignInIp?: string,
      currentSignInAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      currentSignInIp?: string,
      signInCount: number,
      lang: string,
      timeZone: string,
      avatar: string,
      confirmedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lockedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum LastSignInAtCase { 
      _LAST_SIGN_IN_AT_NOT_SET = 0,
      LAST_SIGN_IN_AT = 11,
    }

    export enum LastSignInIpCase { 
      _LAST_SIGN_IN_IP_NOT_SET = 0,
      LAST_SIGN_IN_IP = 12,
    }

    export enum CurrentSignInAtCase { 
      _CURRENT_SIGN_IN_AT_NOT_SET = 0,
      CURRENT_SIGN_IN_AT = 13,
    }

    export enum CurrentSignInIpCase { 
      _CURRENT_SIGN_IN_IP_NOT_SET = 0,
      CURRENT_SIGN_IN_IP = 14,
    }

    export enum ConfirmedAtCase { 
      _CONFIRMED_AT_NOT_SET = 0,
      CONFIRMED_AT = 27,
    }

    export enum LockedAtCase { 
      _LOCKED_AT_NOT_SET = 0,
      LOCKED_AT = 28,
    }

    export enum DeletedAtCase { 
      _DELETED_AT_NOT_SET = 0,
      DELETED_AT = 29,
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
  getSiteVerifyId(): string;
  setSiteVerifyId(value: string): BaiduProfile;
  hasSiteVerifyId(): boolean;
  clearSiteVerifyId(): BaiduProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaiduProfile.AsObject;
  static toObject(includeInstance: boolean, msg: BaiduProfile): BaiduProfile.AsObject;
  static serializeBinaryToWriter(message: BaiduProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaiduProfile;
  static deserializeBinaryFromReader(message: BaiduProfile, reader: jspb.BinaryReader): BaiduProfile;
}

export namespace BaiduProfile {
  export type AsObject = {
    siteVerifyId?: string,
  }

  export enum SiteVerifyIdCase { 
    _SITE_VERIFY_ID_NOT_SET = 0,
    SITE_VERIFY_ID = 1,
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

export class SmtpProfile extends jspb.Message {
  getHost(): string;
  setHost(value: string): SmtpProfile;

  getPort(): number;
  setPort(value: number): SmtpProfile;

  getUser(): string;
  setUser(value: string): SmtpProfile;

  getPassword(): string;
  setPassword(value: string): SmtpProfile;

  getCc(): string;
  setCc(value: string): SmtpProfile;

  getBcc(): string;
  setBcc(value: string): SmtpProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmtpProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SmtpProfile): SmtpProfile.AsObject;
  static serializeBinaryToWriter(message: SmtpProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmtpProfile;
  static deserializeBinaryFromReader(message: SmtpProfile, reader: jspb.BinaryReader): SmtpProfile;
}

export namespace SmtpProfile {
  export type AsObject = {
    host: string,
    port: number,
    user: string,
    password: string,
    cc: string,
    bcc: string,
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

  getElasticsearch(): SiteStatusResponse.ElasticSearch | undefined;
  setElasticsearch(value?: SiteStatusResponse.ElasticSearch): SiteStatusResponse;
  hasElasticsearch(): boolean;
  clearElasticsearch(): SiteStatusResponse;

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
    elasticsearch?: SiteStatusResponse.ElasticSearch.AsObject,
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


  export class ElasticSearch extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElasticSearch.AsObject;
    static toObject(includeInstance: boolean, msg: ElasticSearch): ElasticSearch.AsObject;
    static serializeBinaryToWriter(message: ElasticSearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElasticSearch;
    static deserializeBinaryFromReader(message: ElasticSearch, reader: jspb.BinaryReader): ElasticSearch;
  }

  export namespace ElasticSearch {
    export type AsObject = {
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

