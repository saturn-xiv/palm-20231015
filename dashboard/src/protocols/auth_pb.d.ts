import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as palm_pb from './palm_pb';


export class UserDetail extends jspb.Message {
  getNickName(): string;
  setNickName(value: string): UserDetail;

  getRealName(): string;
  setRealName(value: string): UserDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetail.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetail): UserDetail.AsObject;
  static serializeBinaryToWriter(message: UserDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetail;
  static deserializeBinaryFromReader(message: UserDetail, reader: jspb.BinaryReader): UserDetail;
}

export namespace UserDetail {
  export type AsObject = {
    nickName: string,
    realName: string,
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
  getSubject(): Permission.Subject | undefined;
  setSubject(value?: Permission.Subject): Permission;
  hasSubject(): boolean;
  clearSubject(): Permission;

  getOperation(): string;
  setOperation(value: string): Permission;

  getResource(): Resource | undefined;
  setResource(value?: Resource): Permission;
  hasResource(): boolean;
  clearResource(): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    subject?: Permission.Subject.AsObject,
    operation: string,
    resource?: Resource.AsObject,
  }

  export class Subject extends jspb.Message {
    getId(): number;
    setId(value: number): Subject;

    getType(): string;
    setType(value: string): Subject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subject.AsObject;
    static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
    static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subject;
    static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
  }

  export namespace Subject {
    export type AsObject = {
      id: number,
      type: string,
    }
  }

}

export class UserQueryRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): UserQueryRequest;

  getNickName(): string;
  setNickName(value: string): UserQueryRequest;

  getProvider(): UserQueryRequest.Provider | undefined;
  setProvider(value?: UserQueryRequest.Provider): UserQueryRequest;
  hasProvider(): boolean;
  clearProvider(): UserQueryRequest;

  getWhoCase(): UserQueryRequest.WhoCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserQueryRequest): UserQueryRequest.AsObject;
  static serializeBinaryToWriter(message: UserQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQueryRequest;
  static deserializeBinaryFromReader(message: UserQueryRequest, reader: jspb.BinaryReader): UserQueryRequest;
}

export namespace UserQueryRequest {
  export type AsObject = {
    uid: string,
    nickName: string,
    provider?: UserQueryRequest.Provider.AsObject,
  }

  export class Provider extends jspb.Message {
    getType(): UserQueryRequest.Provider.Type;
    setType(value: UserQueryRequest.Provider.Type): Provider;

    getId(): string;
    setId(value: string): Provider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Provider.AsObject;
    static toObject(includeInstance: boolean, msg: Provider): Provider.AsObject;
    static serializeBinaryToWriter(message: Provider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Provider;
    static deserializeBinaryFromReader(message: Provider, reader: jspb.BinaryReader): Provider;
  }

  export namespace Provider {
    export type AsObject = {
      type: UserQueryRequest.Provider.Type,
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


  export enum WhoCase { 
    WHO_NOT_SET = 0,
    UID = 1,
    NICK_NAME = 2,
    PROVIDER = 9,
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

export class UserSignInResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserSignInResponse;

  getRealName(): string;
  setRealName(value: string): UserSignInResponse;

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
    realName: string,
    rolesList: Array<string>,
    permissionsList: Array<Permission.AsObject>,
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
  getWho(): UserQueryRequest | undefined;
  setWho(value?: UserQueryRequest): UserSetPasswordRequest;
  hasWho(): boolean;
  clearWho(): UserSetPasswordRequest;

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
    who?: UserQueryRequest.AsObject,
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

  getNickName(): string;
  setNickName(value: string): UserGetProfileResponse;

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
    nickName: string,
    email: string,
    timeZone: string,
    lang: string,
    wechat: string,
    phone: string,
  }
}

export class UserLogsRequest extends jspb.Message {
  getPager(): palm_pb.Pager | undefined;
  setPager(value?: palm_pb.Pager): UserLogsRequest;
  hasPager(): boolean;
  clearPager(): UserLogsRequest;

  getLevel(): UserLogsResponse.Item.Level;
  setLevel(value: UserLogsResponse.Item.Level): UserLogsRequest;
  hasLevel(): boolean;
  clearLevel(): UserLogsRequest;

  getIp(): string;
  setIp(value: string): UserLogsRequest;
  hasIp(): boolean;
  clearIp(): UserLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogsRequest): UserLogsRequest.AsObject;
  static serializeBinaryToWriter(message: UserLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogsRequest;
  static deserializeBinaryFromReader(message: UserLogsRequest, reader: jspb.BinaryReader): UserLogsRequest;
}

export namespace UserLogsRequest {
  export type AsObject = {
    pager?: palm_pb.Pager.AsObject,
    level?: UserLogsResponse.Item.Level,
    ip?: string,
  }

  export enum LevelCase { 
    _LEVEL_NOT_SET = 0,
    LEVEL = 11,
  }

  export enum IpCase { 
    _IP_NOT_SET = 0,
    IP = 12,
  }
}

export class UserLogsResponse extends jspb.Message {
  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): UserLogsResponse;
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
    pagination?: palm_pb.Pagination.AsObject,
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

export class UserIndexResponse extends jspb.Message {
  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): UserIndexResponse;
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
    pagination?: palm_pb.Pagination.AsObject,
    itemsList: Array<UserIndexResponse.Item.AsObject>,
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

    getProviderType(): UserQueryRequest.Provider.Type;
    setProviderType(value: UserQueryRequest.Provider.Type): Item;

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
      providerType: UserQueryRequest.Provider.Type,
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

export class AttachemtShowRequest extends jspb.Message {
  getId(): number;
  setId(value: number): AttachemtShowRequest;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): AttachemtShowRequest;
  hasTtl(): boolean;
  clearTtl(): AttachemtShowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachemtShowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttachemtShowRequest): AttachemtShowRequest.AsObject;
  static serializeBinaryToWriter(message: AttachemtShowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachemtShowRequest;
  static deserializeBinaryFromReader(message: AttachemtShowRequest, reader: jspb.BinaryReader): AttachemtShowRequest;
}

export namespace AttachemtShowRequest {
  export type AsObject = {
    id: number,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class AttachemtShowResponse extends jspb.Message {
  getItem(): AttachmetIndexResponse.Item | undefined;
  setItem(value?: AttachmetIndexResponse.Item): AttachemtShowResponse;
  hasItem(): boolean;
  clearItem(): AttachemtShowResponse;

  getUrl(): string;
  setUrl(value: string): AttachemtShowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachemtShowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachemtShowResponse): AttachemtShowResponse.AsObject;
  static serializeBinaryToWriter(message: AttachemtShowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachemtShowResponse;
  static deserializeBinaryFromReader(message: AttachemtShowResponse, reader: jspb.BinaryReader): AttachemtShowResponse;
}

export namespace AttachemtShowResponse {
  export type AsObject = {
    item?: AttachmetIndexResponse.Item.AsObject,
    url: string,
  }
}

export class AttachmetIndexResponse extends jspb.Message {
  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): AttachmetIndexResponse;
  hasPagination(): boolean;
  clearPagination(): AttachmetIndexResponse;

  getItemsList(): Array<AttachmetIndexResponse.Item>;
  setItemsList(value: Array<AttachmetIndexResponse.Item>): AttachmetIndexResponse;
  clearItemsList(): AttachmetIndexResponse;
  addItems(value?: AttachmetIndexResponse.Item, index?: number): AttachmetIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmetIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmetIndexResponse): AttachmetIndexResponse.AsObject;
  static serializeBinaryToWriter(message: AttachmetIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmetIndexResponse;
  static deserializeBinaryFromReader(message: AttachmetIndexResponse, reader: jspb.BinaryReader): AttachmetIndexResponse;
}

export namespace AttachmetIndexResponse {
  export type AsObject = {
    pagination?: palm_pb.Pagination.AsObject,
    itemsList: Array<AttachmetIndexResponse.Item.AsObject>,
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

    getStatus(): palm_pb.MediaContent.Status;
    setStatus(value: palm_pb.MediaContent.Status): Item;

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
      status: palm_pb.MediaContent.Status,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class PolicyAddRoleRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): PolicyAddRoleRequest;

  getNested(): string;
  setNested(value: string): PolicyAddRoleRequest;

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
    nested: string,
  }
}

export class PolicyUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): PolicyUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyUserRequest): PolicyUserRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyUserRequest;
  static deserializeBinaryFromReader(message: PolicyUserRequest, reader: jspb.BinaryReader): PolicyUserRequest;
}

export namespace PolicyUserRequest {
  export type AsObject = {
    id: number,
  }
}

export class PolicyUserListResponse extends jspb.Message {
  getItemsList(): Array<PolicyUserListResponse.Item>;
  setItemsList(value: Array<PolicyUserListResponse.Item>): PolicyUserListResponse;
  clearItemsList(): PolicyUserListResponse;
  addItems(value?: PolicyUserListResponse.Item, index?: number): PolicyUserListResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyUserListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyUserListResponse): PolicyUserListResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyUserListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyUserListResponse;
  static deserializeBinaryFromReader(message: PolicyUserListResponse, reader: jspb.BinaryReader): PolicyUserListResponse;
}

export namespace PolicyUserListResponse {
  export type AsObject = {
    itemsList: Array<PolicyUserListResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getUid(): string;
    setUid(value: string): Item;

    getNickName(): string;
    setNickName(value: string): Item;

    getRealName(): string;
    setRealName(value: string): Item;

    getEmail(): string;
    setEmail(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      uid: string,
      nickName: string,
      realName: string,
      email: string,
    }
  }

}

export class PolicyRoleRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): PolicyRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRoleRequest): PolicyRoleRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRoleRequest;
  static deserializeBinaryFromReader(message: PolicyRoleRequest, reader: jspb.BinaryReader): PolicyRoleRequest;
}

export namespace PolicyRoleRequest {
  export type AsObject = {
    code: string,
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
    getCode(): string;
    setCode(value: string): Item;

    getName(): string;
    setName(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      code: string,
      name: string,
    }
  }

}

export class PolicyAddRolesForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): PolicyAddRolesForUserRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): PolicyAddRolesForUserRequest;
  clearRolesList(): PolicyAddRolesForUserRequest;
  addRoles(value: string, index?: number): PolicyAddRolesForUserRequest;

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
    rolesList: Array<string>,
    notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PolicyDeleteRolesForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): PolicyDeleteRolesForUserRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): PolicyDeleteRolesForUserRequest;
  clearRolesList(): PolicyDeleteRolesForUserRequest;
  addRoles(value: string, index?: number): PolicyDeleteRolesForUserRequest;

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
    rolesList: Array<string>,
  }
}

export class PolicyPermissionsRequest extends jspb.Message {
  getItemsList(): Array<Permission>;
  setItemsList(value: Array<Permission>): PolicyPermissionsRequest;
  clearItemsList(): PolicyPermissionsRequest;
  addItems(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyPermissionsRequest): PolicyPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyPermissionsRequest;
  static deserializeBinaryFromReader(message: PolicyPermissionsRequest, reader: jspb.BinaryReader): PolicyPermissionsRequest;
}

export namespace PolicyPermissionsRequest {
  export type AsObject = {
    itemsList: Array<Permission.AsObject>,
  }
}

export class PolicyPermissionListResponse extends jspb.Message {
  getItemsList(): Array<Permission>;
  setItemsList(value: Array<Permission>): PolicyPermissionListResponse;
  clearItemsList(): PolicyPermissionListResponse;
  addItems(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyPermissionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyPermissionListResponse): PolicyPermissionListResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyPermissionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyPermissionListResponse;
  static deserializeBinaryFromReader(message: PolicyPermissionListResponse, reader: jspb.BinaryReader): PolicyPermissionListResponse;
}

export namespace PolicyPermissionListResponse {
  export type AsObject = {
    itemsList: Array<Permission.AsObject>,
  }
}

export class LocaleIndexResponse extends jspb.Message {
  getItemsList(): Array<LocaleIndexResponse.Item>;
  setItemsList(value: Array<LocaleIndexResponse.Item>): LocaleIndexResponse;
  clearItemsList(): LocaleIndexResponse;
  addItems(value?: LocaleIndexResponse.Item, index?: number): LocaleIndexResponse.Item;

  getPagination(): palm_pb.Pagination | undefined;
  setPagination(value?: palm_pb.Pagination): LocaleIndexResponse;
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
    pagination?: palm_pb.Pagination.AsObject,
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

