import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


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

export class UserDetail extends jspb.Message {
  getId(): number;
  setId(value: number): UserDetail;

  getUid(): string;
  setUid(value: string): UserDetail;

  getNickname(): string;
  setNickname(value: string): UserDetail;

  getRealName(): string;
  setRealName(value: string): UserDetail;

  getEmail(): string;
  setEmail(value: string): UserDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetail.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetail): UserDetail.AsObject;
  static serializeBinaryToWriter(message: UserDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetail;
  static deserializeBinaryFromReader(message: UserDetail, reader: jspb.BinaryReader): UserDetail;
}

export namespace UserDetail {
  export type AsObject = {
    id: number,
    uid: string,
    nickname: string,
    realName: string,
    email: string,
  }
}

export class Resource extends jspb.Message {
  getType(): string;
  setType(value: string): Resource;

  getId(): number;
  setId(value: number): Resource;
  hasId(): boolean;
  clearId(): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    type: string,
    id?: number,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 2,
  }
}

export class Permission extends jspb.Message {
  getUser(): number;
  setUser(value: number): Permission;

  getRole(): number;
  setRole(value: number): Permission;

  getOperation(): string;
  setOperation(value: string): Permission;

  getResource(): Resource | undefined;
  setResource(value?: Resource): Permission;
  hasResource(): boolean;
  clearResource(): Permission;

  getSubjectCase(): Permission.SubjectCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    user: number,
    role: number,
    operation: string,
    resource?: Resource.AsObject,
  }

  export enum SubjectCase { 
    SUBJECT_NOT_SET = 0,
    USER = 1,
    ROLE = 2,
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

export class UserQueryRequest extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): UserQueryRequest;

  getEmail(): string;
  setEmail(value: string): UserQueryRequest;

  getHome(): string;
  setHome(value: string): UserQueryRequest;

  getUserCase(): UserQueryRequest.UserCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserQueryRequest): UserQueryRequest.AsObject;
  static serializeBinaryToWriter(message: UserQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQueryRequest;
  static deserializeBinaryFromReader(message: UserQueryRequest, reader: jspb.BinaryReader): UserQueryRequest;
}

export namespace UserQueryRequest {
  export type AsObject = {
    nickname: string,
    email: string,
    home: string,
  }

  export enum UserCase { 
    USER_NOT_SET = 0,
    NICKNAME = 1,
    EMAIL = 2,
  }
}

export class UserSignInResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserSignInResponse;

  getPayload(): UserSignInResponse.Payload | undefined;
  setPayload(value?: UserSignInResponse.Payload): UserSignInResponse;
  hasPayload(): boolean;
  clearPayload(): UserSignInResponse;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): UserSignInResponse;
  clearRolesList(): UserSignInResponse;
  addRoles(value: string, index?: number): UserSignInResponse;

  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): UserSignInResponse;
  clearPermissionsList(): UserSignInResponse;
  addPermissions(value?: Permission, index?: number): Permission;

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
    payload?: UserSignInResponse.Payload.AsObject,
    rolesList: Array<string>,
    permissionsList: Array<Permission.AsObject>,
  }

  export class Payload extends jspb.Message {
    getNickname(): string;
    setNickname(value: string): Payload;

    getEmail(): string;
    setEmail(value: string): Payload;

    getRealName(): string;
    setRealName(value: string): Payload;

    getLang(): string;
    setLang(value: string): Payload;

    getTimeZone(): string;
    setTimeZone(value: string): Payload;

    getAvatar(): string;
    setAvatar(value: string): Payload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      nickname: string,
      email: string,
      realName: string,
      lang: string,
      timeZone: string,
      avatar: string,
    }
  }

}

export class UserSignUpRequest extends jspb.Message {
  getRealName(): string;
  setRealName(value: string): UserSignUpRequest;

  getNickname(): string;
  setNickname(value: string): UserSignUpRequest;

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
    nickname: string,
    email: string,
    password: string,
    lang: string,
    timeZone: string,
    home: string,
  }
}

export class UserTokenRequest extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): UserTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserTokenRequest): UserTokenRequest.AsObject;
  static serializeBinaryToWriter(message: UserTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTokenRequest;
  static deserializeBinaryFromReader(message: UserTokenRequest, reader: jspb.BinaryReader): UserTokenRequest;
}

export namespace UserTokenRequest {
  export type AsObject = {
    payload: string,
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

export class UserSetPasswordRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UserSetPasswordRequest;

  getPassword(): string;
  setPassword(value: string): UserSetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSetPasswordRequest): UserSetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UserSetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSetPasswordRequest;
  static deserializeBinaryFromReader(message: UserSetPasswordRequest, reader: jspb.BinaryReader): UserSetPasswordRequest;
}

export namespace UserSetPasswordRequest {
  export type AsObject = {
    id: number,
    password: string,
  }
}

export class UserSetProfileRequest extends jspb.Message {
  getRealName(): string;
  setRealName(value: string): UserSetProfileRequest;

  getAvatar(): string;
  setAvatar(value: string): UserSetProfileRequest;

  getTimeZone(): string;
  setTimeZone(value: string): UserSetProfileRequest;

  getLang(): string;
  setLang(value: string): UserSetProfileRequest;

  getWechat(): string;
  setWechat(value: string): UserSetProfileRequest;

  getPhone(): string;
  setPhone(value: string): UserSetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSetProfileRequest): UserSetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UserSetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSetProfileRequest;
  static deserializeBinaryFromReader(message: UserSetProfileRequest, reader: jspb.BinaryReader): UserSetProfileRequest;
}

export namespace UserSetProfileRequest {
  export type AsObject = {
    realName: string,
    avatar: string,
    timeZone: string,
    lang: string,
    wechat: string,
    phone: string,
  }
}

export class UserGetProfileResponse extends jspb.Message {
  getRealName(): string;
  setRealName(value: string): UserGetProfileResponse;

  getAvatar(): string;
  setAvatar(value: string): UserGetProfileResponse;

  getNickname(): string;
  setNickname(value: string): UserGetProfileResponse;

  getEmail(): string;
  setEmail(value: string): UserGetProfileResponse;

  getTimeZone(): string;
  setTimeZone(value: string): UserGetProfileResponse;

  getLang(): string;
  setLang(value: string): UserGetProfileResponse;

  getWechat(): string;
  setWechat(value: string): UserGetProfileResponse;

  getPhone(): string;
  setPhone(value: string): UserGetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserGetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserGetProfileResponse): UserGetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UserGetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserGetProfileResponse;
  static deserializeBinaryFromReader(message: UserGetProfileResponse, reader: jspb.BinaryReader): UserGetProfileResponse;
}

export namespace UserGetProfileResponse {
  export type AsObject = {
    realName: string,
    avatar: string,
    nickname: string,
    email: string,
    timeZone: string,
    lang: string,
    wechat: string,
    phone: string,
  }
}

export class UserLogsResponse extends jspb.Message {
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): UserLogsResponse;
  hasPagination(): boolean;
  clearPagination(): UserLogsResponse;

  getItemsList(): Array<UserLogsResponse.Item>;
  setItemsList(value: Array<UserLogsResponse.Item>): UserLogsResponse;
  clearItemsList(): UserLogsResponse;
  addItems(value?: UserLogsResponse.Item, index?: number): UserLogsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogsResponse): UserLogsResponse.AsObject;
  static serializeBinaryToWriter(message: UserLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogsResponse;
  static deserializeBinaryFromReader(message: UserLogsResponse, reader: jspb.BinaryReader): UserLogsResponse;
}

export namespace UserLogsResponse {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    itemsList: Array<UserLogsResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUserId(): number;
    setUserId(value: number): Item;

    getIp(): string;
    setIp(value: string): Item;

    getLevel(): UserLogsResponse.Item.Level;
    setLevel(value: UserLogsResponse.Item.Level): Item;

    getMessage(): string;
    setMessage(value: string): Item;

    getResource(): Resource | undefined;
    setResource(value?: Resource): Item;
    hasResource(): boolean;
    clearResource(): Item;

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
      ip: string,
      level: UserLogsResponse.Item.Level,
      message: string,
      resource?: Resource.AsObject,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Level { 
      DEBUG = 0,
      INFO = 1,
      WARNING = 2,
      ERROR = 3,
      PANIC = 4,
    }
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

export class UserProvider extends jspb.Message {
  getType(): UserProvider.Type;
  setType(value: UserProvider.Type): UserProvider;

  getId(): string;
  setId(value: string): UserProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProvider.AsObject;
  static toObject(includeInstance: boolean, msg: UserProvider): UserProvider.AsObject;
  static serializeBinaryToWriter(message: UserProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProvider;
  static deserializeBinaryFromReader(message: UserProvider, reader: jspb.BinaryReader): UserProvider;
}

export namespace UserProvider {
  export type AsObject = {
    type: UserProvider.Type,
    id: string,
  }

  export enum Type { 
    EMAIL = 0,
    GMAIL = 1,
    WECHAT = 2,
    FACEBOOK = 3,
    GITHUB = 4,
  }
}

export class UserIndexResponse extends jspb.Message {
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): UserIndexResponse;
  hasPagination(): boolean;
  clearPagination(): UserIndexResponse;

  getItemsList(): Array<UserIndexResponse.Item>;
  setItemsList(value: Array<UserIndexResponse.Item>): UserIndexResponse;
  clearItemsList(): UserIndexResponse;
  addItems(value?: UserIndexResponse.Item, index?: number): UserIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserIndexResponse): UserIndexResponse.AsObject;
  static serializeBinaryToWriter(message: UserIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIndexResponse;
  static deserializeBinaryFromReader(message: UserIndexResponse, reader: jspb.BinaryReader): UserIndexResponse;
}

export namespace UserIndexResponse {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    itemsList: Array<UserIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUid(): string;
    setUid(value: string): Item;

    getEmail(): string;
    setEmail(value: string): Item;

    getNickname(): string;
    setNickname(value: string): Item;

    getRealName(): string;
    setRealName(value: string): Item;

    getProviderType(): UserProvider.Type;
    setProviderType(value: UserProvider.Type): Item;

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
      nickname: string,
      realName: string,
      providerType: UserProvider.Type,
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

export class AttachmentShowRequest extends jspb.Message {
  getId(): number;
  setId(value: number): AttachmentShowRequest;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): AttachmentShowRequest;
  hasTtl(): boolean;
  clearTtl(): AttachmentShowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentShowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentShowRequest): AttachmentShowRequest.AsObject;
  static serializeBinaryToWriter(message: AttachmentShowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentShowRequest;
  static deserializeBinaryFromReader(message: AttachmentShowRequest, reader: jspb.BinaryReader): AttachmentShowRequest;
}

export namespace AttachmentShowRequest {
  export type AsObject = {
    id: number,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class AttachmentShowResponse extends jspb.Message {
  getItem(): AttachmentIndexResponse.Item | undefined;
  setItem(value?: AttachmentIndexResponse.Item): AttachmentShowResponse;
  hasItem(): boolean;
  clearItem(): AttachmentShowResponse;

  getUrl(): string;
  setUrl(value: string): AttachmentShowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentShowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentShowResponse): AttachmentShowResponse.AsObject;
  static serializeBinaryToWriter(message: AttachmentShowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentShowResponse;
  static deserializeBinaryFromReader(message: AttachmentShowResponse, reader: jspb.BinaryReader): AttachmentShowResponse;
}

export namespace AttachmentShowResponse {
  export type AsObject = {
    item?: AttachmentIndexResponse.Item.AsObject,
    url: string,
  }
}

export class AttachmentIndexResponse extends jspb.Message {
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): AttachmentIndexResponse;
  hasPagination(): boolean;
  clearPagination(): AttachmentIndexResponse;

  getItemsList(): Array<AttachmentIndexResponse.Item>;
  setItemsList(value: Array<AttachmentIndexResponse.Item>): AttachmentIndexResponse;
  clearItemsList(): AttachmentIndexResponse;
  addItems(value?: AttachmentIndexResponse.Item, index?: number): AttachmentIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentIndexResponse): AttachmentIndexResponse.AsObject;
  static serializeBinaryToWriter(message: AttachmentIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentIndexResponse;
  static deserializeBinaryFromReader(message: AttachmentIndexResponse, reader: jspb.BinaryReader): AttachmentIndexResponse;
}

export namespace AttachmentIndexResponse {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    itemsList: Array<AttachmentIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getBucket(): string;
    setBucket(value: string): Item;

    getName(): string;
    setName(value: string): Item;

    getTitle(): string;
    setTitle(value: string): Item;

    getSize(): number;
    setSize(value: number): Item;

    getContentType(): string;
    setContentType(value: string): Item;

    getStatus(): MediaContent.Status;
    setStatus(value: MediaContent.Status): Item;

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
      bucket: string,
      name: string,
      title: string,
      size: number,
      contentType: string,
      status: MediaContent.Status,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class PolicyAddRoleRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): PolicyAddRoleRequest;

  getLeft(): number;
  setLeft(value: number): PolicyAddRoleRequest;

  getParent(): number;
  setParent(value: number): PolicyAddRoleRequest;

  getNestedCase(): PolicyAddRoleRequest.NestedCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyAddRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyAddRoleRequest): PolicyAddRoleRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyAddRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyAddRoleRequest;
  static deserializeBinaryFromReader(message: PolicyAddRoleRequest, reader: jspb.BinaryReader): PolicyAddRoleRequest;
}

export namespace PolicyAddRoleRequest {
  export type AsObject = {
    code: string,
    left: number,
    parent: number,
  }

  export enum NestedCase { 
    NESTED_NOT_SET = 0,
    LEFT = 2,
    PARENT = 3,
  }
}

export class PolicyUsersForRoleResponse extends jspb.Message {
  getItemsList(): Array<PolicyUsersForRoleResponse.Item>;
  setItemsList(value: Array<PolicyUsersForRoleResponse.Item>): PolicyUsersForRoleResponse;
  clearItemsList(): PolicyUsersForRoleResponse;
  addItems(value?: PolicyUsersForRoleResponse.Item, index?: number): PolicyUsersForRoleResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyUsersForRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyUsersForRoleResponse): PolicyUsersForRoleResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyUsersForRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyUsersForRoleResponse;
  static deserializeBinaryFromReader(message: PolicyUsersForRoleResponse, reader: jspb.BinaryReader): PolicyUsersForRoleResponse;
}

export namespace PolicyUsersForRoleResponse {
  export type AsObject = {
    itemsList: Array<PolicyUsersForRoleResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getUser(): UserDetail | undefined;
    setUser(value?: UserDetail): Item;
    hasUser(): boolean;
    clearUser(): Item;

    getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasNotBefore(): boolean;
    clearNotBefore(): Item;

    getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasExpiredAt(): boolean;
    clearExpiredAt(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      user?: UserDetail.AsObject,
      notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class PolicyImplicitUsersForRoleResponse extends jspb.Message {
  getItemsList(): Array<UserDetail>;
  setItemsList(value: Array<UserDetail>): PolicyImplicitUsersForRoleResponse;
  clearItemsList(): PolicyImplicitUsersForRoleResponse;
  addItems(value?: UserDetail, index?: number): UserDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyImplicitUsersForRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyImplicitUsersForRoleResponse): PolicyImplicitUsersForRoleResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyImplicitUsersForRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyImplicitUsersForRoleResponse;
  static deserializeBinaryFromReader(message: PolicyImplicitUsersForRoleResponse, reader: jspb.BinaryReader): PolicyImplicitUsersForRoleResponse;
}

export namespace PolicyImplicitUsersForRoleResponse {
  export type AsObject = {
    itemsList: Array<UserDetail.AsObject>,
  }
}

export class PolicyRolesForUserResponse extends jspb.Message {
  getItemsList(): Array<PolicyRolesForUserResponse.Item>;
  setItemsList(value: Array<PolicyRolesForUserResponse.Item>): PolicyRolesForUserResponse;
  clearItemsList(): PolicyRolesForUserResponse;
  addItems(value?: PolicyRolesForUserResponse.Item, index?: number): PolicyRolesForUserResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRolesForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRolesForUserResponse): PolicyRolesForUserResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyRolesForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRolesForUserResponse;
  static deserializeBinaryFromReader(message: PolicyRolesForUserResponse, reader: jspb.BinaryReader): PolicyRolesForUserResponse;
}

export namespace PolicyRolesForUserResponse {
  export type AsObject = {
    itemsList: Array<PolicyRolesForUserResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getCode(): string;
    setCode(value: string): Item;

    getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasNotBefore(): boolean;
    clearNotBefore(): Item;

    getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasExpiredAt(): boolean;
    clearExpiredAt(): Item;

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
      notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class PolicyImplicitRolesForUserResponse extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): PolicyImplicitRolesForUserResponse;
  clearItemsList(): PolicyImplicitRolesForUserResponse;
  addItems(value: string, index?: number): PolicyImplicitRolesForUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyImplicitRolesForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyImplicitRolesForUserResponse): PolicyImplicitRolesForUserResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyImplicitRolesForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyImplicitRolesForUserResponse;
  static deserializeBinaryFromReader(message: PolicyImplicitRolesForUserResponse, reader: jspb.BinaryReader): PolicyImplicitRolesForUserResponse;
}

export namespace PolicyImplicitRolesForUserResponse {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class PolicyRoleListResponse extends jspb.Message {
  getItemsList(): Array<PolicyRoleListResponse.Item>;
  setItemsList(value: Array<PolicyRoleListResponse.Item>): PolicyRoleListResponse;
  clearItemsList(): PolicyRoleListResponse;
  addItems(value?: PolicyRoleListResponse.Item, index?: number): PolicyRoleListResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRoleListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRoleListResponse): PolicyRoleListResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyRoleListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRoleListResponse;
  static deserializeBinaryFromReader(message: PolicyRoleListResponse, reader: jspb.BinaryReader): PolicyRoleListResponse;
}

export namespace PolicyRoleListResponse {
  export type AsObject = {
    itemsList: Array<PolicyRoleListResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getCode(): string;
    setCode(value: string): Item;

    getLeft(): number;
    setLeft(value: number): Item;

    getRight(): number;
    setRight(value: number): Item;

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
      left: number,
      right: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class PolicyAddRolesForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): PolicyAddRolesForUserRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): PolicyAddRolesForUserRequest;
  clearRolesList(): PolicyAddRolesForUserRequest;
  addRoles(value: number, index?: number): PolicyAddRolesForUserRequest;

  getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): PolicyAddRolesForUserRequest;
  hasNotBefore(): boolean;
  clearNotBefore(): PolicyAddRolesForUserRequest;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): PolicyAddRolesForUserRequest;
  hasExpiredAt(): boolean;
  clearExpiredAt(): PolicyAddRolesForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyAddRolesForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyAddRolesForUserRequest): PolicyAddRolesForUserRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyAddRolesForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyAddRolesForUserRequest;
  static deserializeBinaryFromReader(message: PolicyAddRolesForUserRequest, reader: jspb.BinaryReader): PolicyAddRolesForUserRequest;
}

export namespace PolicyAddRolesForUserRequest {
  export type AsObject = {
    user: number,
    rolesList: Array<number>,
    notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PolicyDeleteRolesForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): PolicyDeleteRolesForUserRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): PolicyDeleteRolesForUserRequest;
  clearRolesList(): PolicyDeleteRolesForUserRequest;
  addRoles(value: number, index?: number): PolicyDeleteRolesForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyDeleteRolesForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyDeleteRolesForUserRequest): PolicyDeleteRolesForUserRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyDeleteRolesForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyDeleteRolesForUserRequest;
  static deserializeBinaryFromReader(message: PolicyDeleteRolesForUserRequest, reader: jspb.BinaryReader): PolicyDeleteRolesForUserRequest;
}

export namespace PolicyDeleteRolesForUserRequest {
  export type AsObject = {
    user: number,
    rolesList: Array<number>,
  }
}

export class PolicyPermissionList extends jspb.Message {
  getItemsList(): Array<Permission>;
  setItemsList(value: Array<Permission>): PolicyPermissionList;
  clearItemsList(): PolicyPermissionList;
  addItems(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyPermissionList.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyPermissionList): PolicyPermissionList.AsObject;
  static serializeBinaryToWriter(message: PolicyPermissionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyPermissionList;
  static deserializeBinaryFromReader(message: PolicyPermissionList, reader: jspb.BinaryReader): PolicyPermissionList;
}

export namespace PolicyPermissionList {
  export type AsObject = {
    itemsList: Array<Permission.AsObject>,
  }
}

export class LocaleByLangRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): LocaleByLangRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleByLangRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleByLangRequest): LocaleByLangRequest.AsObject;
  static serializeBinaryToWriter(message: LocaleByLangRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleByLangRequest;
  static deserializeBinaryFromReader(message: LocaleByLangRequest, reader: jspb.BinaryReader): LocaleByLangRequest;
}

export namespace LocaleByLangRequest {
  export type AsObject = {
    lang: string,
  }
}

export class LocaleByLangResponse extends jspb.Message {
  getItemsList(): Array<LocaleIndexResponse.Item>;
  setItemsList(value: Array<LocaleIndexResponse.Item>): LocaleByLangResponse;
  clearItemsList(): LocaleByLangResponse;
  addItems(value?: LocaleIndexResponse.Item, index?: number): LocaleIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleByLangResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleByLangResponse): LocaleByLangResponse.AsObject;
  static serializeBinaryToWriter(message: LocaleByLangResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleByLangResponse;
  static deserializeBinaryFromReader(message: LocaleByLangResponse, reader: jspb.BinaryReader): LocaleByLangResponse;
}

export namespace LocaleByLangResponse {
  export type AsObject = {
    itemsList: Array<LocaleIndexResponse.Item.AsObject>,
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

export class IndexNotificationResponse extends jspb.Message {
  getItemsList(): Array<IndexNotificationResponse.Item>;
  setItemsList(value: Array<IndexNotificationResponse.Item>): IndexNotificationResponse;
  clearItemsList(): IndexNotificationResponse;
  addItems(value?: IndexNotificationResponse.Item, index?: number): IndexNotificationResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): IndexNotificationResponse;
  hasPagination(): boolean;
  clearPagination(): IndexNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexNotificationResponse): IndexNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: IndexNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexNotificationResponse;
  static deserializeBinaryFromReader(message: IndexNotificationResponse, reader: jspb.BinaryReader): IndexNotificationResponse;
}

export namespace IndexNotificationResponse {
  export type AsObject = {
    itemsList: Array<IndexNotificationResponse.Item.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getEmail(): EmailTask | undefined;
    setEmail(value?: EmailTask): Item;
    hasEmail(): boolean;
    clearEmail(): Item;

    getSms(): SmsTask | undefined;
    setSms(value?: SmsTask): Item;
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
      email?: EmailTask.AsObject,
      sms?: SmsTask.AsObject,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum MessageCase { 
      MESSAGE_NOT_SET = 0,
      EMAIL = 1,
      SMS = 2,
    }
  }

}

export class LeaveWordIndexResponse extends jspb.Message {
  getItemsList(): Array<LeaveWordIndexResponse.Item>;
  setItemsList(value: Array<LeaveWordIndexResponse.Item>): LeaveWordIndexResponse;
  clearItemsList(): LeaveWordIndexResponse;
  addItems(value?: LeaveWordIndexResponse.Item, index?: number): LeaveWordIndexResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): LeaveWordIndexResponse;
  hasPagination(): boolean;
  clearPagination(): LeaveWordIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveWordIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveWordIndexResponse): LeaveWordIndexResponse.AsObject;
  static serializeBinaryToWriter(message: LeaveWordIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveWordIndexResponse;
  static deserializeBinaryFromReader(message: LeaveWordIndexResponse, reader: jspb.BinaryReader): LeaveWordIndexResponse;
}

export namespace LeaveWordIndexResponse {
  export type AsObject = {
    itemsList: Array<LeaveWordIndexResponse.Item.AsObject>,
    pagination?: Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getLang(): string;
    setLang(value: string): Item;

    getIp(): string;
    setIp(value: string): Item;

    getContent(): MediaContent | undefined;
    setContent(value?: MediaContent): Item;
    hasContent(): boolean;
    clearContent(): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

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
      content?: MediaContent.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class IndexNowProfile extends jspb.Message {
  getKey(): string;
  setKey(value: string): IndexNowProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexNowProfile.AsObject;
  static toObject(includeInstance: boolean, msg: IndexNowProfile): IndexNowProfile.AsObject;
  static serializeBinaryToWriter(message: IndexNowProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexNowProfile;
  static deserializeBinaryFromReader(message: IndexNowProfile, reader: jspb.BinaryReader): IndexNowProfile;
}

export namespace IndexNowProfile {
  export type AsObject = {
    key: string,
  }
}

export class IndexNowPingRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): IndexNowPingRequest;

  getHome(): string;
  setHome(value: string): IndexNowPingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexNowPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexNowPingRequest): IndexNowPingRequest.AsObject;
  static serializeBinaryToWriter(message: IndexNowPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexNowPingRequest;
  static deserializeBinaryFromReader(message: IndexNowPingRequest, reader: jspb.BinaryReader): IndexNowPingRequest;
}

export namespace IndexNowPingRequest {
  export type AsObject = {
    key: string,
    home: string,
  }
}

export class SitemapPingRequest extends jspb.Message {
  getHome(): string;
  setHome(value: string): SitemapPingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SitemapPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SitemapPingRequest): SitemapPingRequest.AsObject;
  static serializeBinaryToWriter(message: SitemapPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SitemapPingRequest;
  static deserializeBinaryFromReader(message: SitemapPingRequest, reader: jspb.BinaryReader): SitemapPingRequest;
}

export namespace SitemapPingRequest {
  export type AsObject = {
    home: string,
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

export class MinioProfile extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MinioProfile;

  getRegion(): string;
  setRegion(value: string): MinioProfile;

  getAccessKey(): string;
  setAccessKey(value: string): MinioProfile;

  getSecretKey(): string;
  setSecretKey(value: string): MinioProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinioProfile.AsObject;
  static toObject(includeInstance: boolean, msg: MinioProfile): MinioProfile.AsObject;
  static serializeBinaryToWriter(message: MinioProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinioProfile;
  static deserializeBinaryFromReader(message: MinioProfile, reader: jspb.BinaryReader): MinioProfile;
}

export namespace MinioProfile {
  export type AsObject = {
    url: string,
    region: string,
    accessKey: string,
    secretKey: string,
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

export class TwilioProfile extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): TwilioProfile;

  getAccountSid(): string;
  setAccountSid(value: string): TwilioProfile;

  getAuthToken(): string;
  setAuthToken(value: string): TwilioProfile;

  getSmsStatusCallback(): string;
  setSmsStatusCallback(value: string): TwilioProfile;
  hasSmsStatusCallback(): boolean;
  clearSmsStatusCallback(): TwilioProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwilioProfile.AsObject;
  static toObject(includeInstance: boolean, msg: TwilioProfile): TwilioProfile.AsObject;
  static serializeBinaryToWriter(message: TwilioProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwilioProfile;
  static deserializeBinaryFromReader(message: TwilioProfile, reader: jspb.BinaryReader): TwilioProfile;
}

export namespace TwilioProfile {
  export type AsObject = {
    from: string,
    accountSid: string,
    authToken: string,
    smsStatusCallback?: string,
  }

  export enum SmsStatusCallbackCase { 
    _SMS_STATUS_CALLBACK_NOT_SET = 0,
    SMS_STATUS_CALLBACK = 9,
  }
}

export class WechatProfile extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatProfile;

  getAppSecret(): string;
  setAppSecret(value: string): WechatProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatProfile.AsObject;
  static toObject(includeInstance: boolean, msg: WechatProfile): WechatProfile.AsObject;
  static serializeBinaryToWriter(message: WechatProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatProfile;
  static deserializeBinaryFromReader(message: WechatProfile, reader: jspb.BinaryReader): WechatProfile;
}

export namespace WechatProfile {
  export type AsObject = {
    appId: string,
    appSecret: string,
  }
}

export class SiteWechatTestResponse extends jspb.Message {
  getIpList(): Array<string>;
  setIpList(value: Array<string>): SiteWechatTestResponse;
  clearIpList(): SiteWechatTestResponse;
  addIp(value: string, index?: number): SiteWechatTestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteWechatTestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteWechatTestResponse): SiteWechatTestResponse.AsObject;
  static serializeBinaryToWriter(message: SiteWechatTestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteWechatTestResponse;
  static deserializeBinaryFromReader(message: SiteWechatTestResponse, reader: jspb.BinaryReader): SiteWechatTestResponse;
}

export namespace SiteWechatTestResponse {
  export type AsObject = {
    ipList: Array<string>,
  }
}

export class SmtpProfile extends jspb.Message {
  getHost(): string;
  setHost(value: string): SmtpProfile;

  getPort(): number;
  setPort(value: number): SmtpProfile;

  getAuthMethod(): SmtpProfile.AuthMethod;
  setAuthMethod(value: SmtpProfile.AuthMethod): SmtpProfile;

  getCcList(): Array<EmailTask.Address>;
  setCcList(value: Array<EmailTask.Address>): SmtpProfile;
  clearCcList(): SmtpProfile;
  addCc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getBccList(): Array<EmailTask.Address>;
  setBccList(value: Array<EmailTask.Address>): SmtpProfile;
  clearBccList(): SmtpProfile;
  addBcc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getUser(): EmailTask.Address | undefined;
  setUser(value?: EmailTask.Address): SmtpProfile;
  hasUser(): boolean;
  clearUser(): SmtpProfile;

  getPassword(): string;
  setPassword(value: string): SmtpProfile;

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
    authMethod: SmtpProfile.AuthMethod,
    ccList: Array<EmailTask.Address.AsObject>,
    bccList: Array<EmailTask.Address.AsObject>,
    user?: EmailTask.Address.AsObject,
    password: string,
  }

  export enum AuthMethod { 
    NONE = 0,
    LOGIN = 1,
    STARTTLS = 2,
  }
}

export class EmailTask extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): EmailTask;

  getContent(): string;
  setContent(value: string): EmailTask;

  getContentType(): EmailTask.ContentType;
  setContentType(value: EmailTask.ContentType): EmailTask;

  getTo(): EmailTask.Address | undefined;
  setTo(value?: EmailTask.Address): EmailTask;
  hasTo(): boolean;
  clearTo(): EmailTask;

  getCcList(): Array<EmailTask.Address>;
  setCcList(value: Array<EmailTask.Address>): EmailTask;
  clearCcList(): EmailTask;
  addCc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getBccList(): Array<EmailTask.Address>;
  setBccList(value: Array<EmailTask.Address>): EmailTask;
  clearBccList(): EmailTask;
  addBcc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getAttachmentsList(): Array<EmailTask.Attachment>;
  setAttachmentsList(value: Array<EmailTask.Attachment>): EmailTask;
  clearAttachmentsList(): EmailTask;
  addAttachments(value?: EmailTask.Attachment, index?: number): EmailTask.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTask.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTask): EmailTask.AsObject;
  static serializeBinaryToWriter(message: EmailTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTask;
  static deserializeBinaryFromReader(message: EmailTask, reader: jspb.BinaryReader): EmailTask;
}

export namespace EmailTask {
  export type AsObject = {
    subject: string,
    content: string,
    contentType: EmailTask.ContentType,
    to?: EmailTask.Address.AsObject,
    ccList: Array<EmailTask.Address.AsObject>,
    bccList: Array<EmailTask.Address.AsObject>,
    attachmentsList: Array<EmailTask.Attachment.AsObject>,
  }

  export class Address extends jspb.Message {
    getName(): string;
    setName(value: string): Address;

    getEmail(): string;
    setEmail(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
  }

  export namespace Address {
    export type AsObject = {
      name: string,
      email: string,
    }
  }


  export class Attachment extends jspb.Message {
    getName(): string;
    setName(value: string): Attachment;

    getContentType(): string;
    setContentType(value: string): Attachment;

    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): Attachment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attachment.AsObject;
    static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
    static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attachment;
    static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
  }

  export namespace Attachment {
    export type AsObject = {
      name: string,
      contentType: string,
      payload: Uint8Array | string,
    }
  }


  export enum ContentType { 
    PLAIN = 0,
    HTML = 1,
  }
}

export class SiteTwilioTestRequest extends jspb.Message {
  getTo(): string;
  setTo(value: string): SiteTwilioTestRequest;

  getMessage(): string;
  setMessage(value: string): SiteTwilioTestRequest;

  getProfile(): TwilioProfile | undefined;
  setProfile(value?: TwilioProfile): SiteTwilioTestRequest;
  hasProfile(): boolean;
  clearProfile(): SiteTwilioTestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteTwilioTestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteTwilioTestRequest): SiteTwilioTestRequest.AsObject;
  static serializeBinaryToWriter(message: SiteTwilioTestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteTwilioTestRequest;
  static deserializeBinaryFromReader(message: SiteTwilioTestRequest, reader: jspb.BinaryReader): SiteTwilioTestRequest;
}

export namespace SiteTwilioTestRequest {
  export type AsObject = {
    to: string,
    message: string,
    profile?: TwilioProfile.AsObject,
  }
}

export class SiteSmtpTestRequest extends jspb.Message {
  getTo(): EmailTask.Address | undefined;
  setTo(value?: EmailTask.Address): SiteSmtpTestRequest;
  hasTo(): boolean;
  clearTo(): SiteSmtpTestRequest;

  getSubject(): string;
  setSubject(value: string): SiteSmtpTestRequest;

  getContent(): string;
  setContent(value: string): SiteSmtpTestRequest;

  getProfile(): SmtpProfile | undefined;
  setProfile(value?: SmtpProfile): SiteSmtpTestRequest;
  hasProfile(): boolean;
  clearProfile(): SiteSmtpTestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSmtpTestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSmtpTestRequest): SiteSmtpTestRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSmtpTestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSmtpTestRequest;
  static deserializeBinaryFromReader(message: SiteSmtpTestRequest, reader: jspb.BinaryReader): SiteSmtpTestRequest;
}

export namespace SiteSmtpTestRequest {
  export type AsObject = {
    to?: EmailTask.Address.AsObject,
    subject: string,
    content: string,
    profile?: SmtpProfile.AsObject,
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
  getLang(): string;
  setLang(value: string): SiteSetInfoRequest;

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
    lang: string,
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

export class SmsTask extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): SmsTask;

  getToList(): Array<string>;
  setToList(value: Array<string>): SmsTask;
  clearToList(): SmsTask;
  addTo(value: string, index?: number): SmsTask;

  getBody(): string;
  setBody(value: string): SmsTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsTask.AsObject;
  static toObject(includeInstance: boolean, msg: SmsTask): SmsTask.AsObject;
  static serializeBinaryToWriter(message: SmsTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsTask;
  static deserializeBinaryFromReader(message: SmsTask, reader: jspb.BinaryReader): SmsTask;
}

export namespace SmsTask {
  export type AsObject = {
    from: string,
    toList: Array<string>,
    body: string,
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
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): ShorterLinkIndexResponse;
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
    pagination?: Pagination.AsObject,
    itemsList: Array<ShorterLinkIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUrl(): string;
    setUrl(value: string): Item;

    getDetails(): string;
    setDetails(value: string): Item;

    getCode(): string;
    setCode(value: string): Item;

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
      code: string,
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
    itemsList: Array<CategoryIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getCode(): string;
    setCode(value: string): Item;

    getLeft(): number;
    setLeft(value: number): Item;

    getRight(): number;
    setRight(value: number): Item;

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
      left: number,
      right: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class CategoryCreateRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): CategoryCreateRequest;

  getLeft(): number;
  setLeft(value: number): CategoryCreateRequest;

  getParent(): number;
  setParent(value: number): CategoryCreateRequest;

  getByCase(): CategoryCreateRequest.ByCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryCreateRequest): CategoryCreateRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryCreateRequest;
  static deserializeBinaryFromReader(message: CategoryCreateRequest, reader: jspb.BinaryReader): CategoryCreateRequest;
}

export namespace CategoryCreateRequest {
  export type AsObject = {
    code: string,
    left: number,
    parent: number,
  }

  export enum ByCase { 
    BY_NOT_SET = 0,
    LEFT = 2,
    PARENT = 3,
  }
}

export class CategoryUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CategoryUpdateRequest;

  getCode(): string;
  setCode(value: string): CategoryUpdateRequest;

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
  }
}

