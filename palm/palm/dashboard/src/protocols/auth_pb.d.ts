import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as nut_pb from './nut_pb'; // proto import: "nut.proto"
import * as orchid_pb from './orchid_pb'; // proto import: "orchid.proto"


export class UserDetail extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): UserDetail;

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
    nickname: string,
    realName: string,
  }
}

export class Oauth2State extends jspb.Message {
  getGoto(): string;
  setGoto(value: string): Oauth2State;

  getHost(): string;
  setHost(value: string): Oauth2State;

  getUser(): string;
  setUser(value: string): Oauth2State;
  hasUser(): boolean;
  clearUser(): Oauth2State;

  getId(): string;
  setId(value: string): Oauth2State;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Oauth2State.AsObject;
  static toObject(includeInstance: boolean, msg: Oauth2State): Oauth2State.AsObject;
  static serializeBinaryToWriter(message: Oauth2State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Oauth2State;
  static deserializeBinaryFromReader(message: Oauth2State, reader: jspb.BinaryReader): Oauth2State;
}

export namespace Oauth2State {
  export type AsObject = {
    pb_goto: string,
    host: string,
    user?: string,
    id: string,
  }

  export enum UserCase { 
    _USER_NOT_SET = 0,
    USER = 3,
  }
}

export class Permission extends jspb.Message {
  getObject(): Permission.Resource | undefined;
  setObject(value?: Permission.Resource): Permission;
  hasObject(): boolean;
  clearObject(): Permission;

  getAction(): string;
  setAction(value: string): Permission;

  getUser(): number;
  setUser(value: number): Permission;

  getRole(): number;
  setRole(value: number): Permission;

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
    object?: Permission.Resource.AsObject,
    action: string,
    user: number,
    role: number,
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


  export enum SubjectCase { 
    SUBJECT_NOT_SET = 0,
    USER = 11,
    ROLE = 12,
  }
}

export class UserSignInRequest extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): UserSignInRequest;

  getEmail(): string;
  setEmail(value: string): UserSignInRequest;

  getPassword(): string;
  setPassword(value: string): UserSignInRequest;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): UserSignInRequest;
  hasTtl(): boolean;
  clearTtl(): UserSignInRequest;

  getUserCase(): UserSignInRequest.UserCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSignInRequest): UserSignInRequest.AsObject;
  static serializeBinaryToWriter(message: UserSignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSignInRequest;
  static deserializeBinaryFromReader(message: UserSignInRequest, reader: jspb.BinaryReader): UserSignInRequest;
}

export namespace UserSignInRequest {
  export type AsObject = {
    nickname: string,
    email: string,
    password: string,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum UserCase { 
    USER_NOT_SET = 0,
    NICKNAME = 1,
    EMAIL = 2,
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

  getUser(): UserIndexResponse.Item | undefined;
  setUser(value?: UserIndexResponse.Item): UserSignInResponse;
  hasUser(): boolean;
  clearUser(): UserSignInResponse;

  getProviderType(): string;
  setProviderType(value: string): UserSignInResponse;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): UserSignInResponse;
  clearRolesList(): UserSignInResponse;
  addRoles(value: string, index?: number): UserSignInResponse;

  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): UserSignInResponse;
  clearPermissionsList(): UserSignInResponse;
  addPermissions(value?: Permission, index?: number): Permission;

  getHasGoogle(): boolean;
  setHasGoogle(value: boolean): UserSignInResponse;

  getHasWechatMiniProgram(): boolean;
  setHasWechatMiniProgram(value: boolean): UserSignInResponse;

  getHasWechatOauth2(): boolean;
  setHasWechatOauth2(value: boolean): UserSignInResponse;

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
    user?: UserIndexResponse.Item.AsObject,
    providerType: string,
    rolesList: Array<string>,
    permissionsList: Array<Permission.AsObject>,
    hasGoogle: boolean,
    hasWechatMiniProgram: boolean,
    hasWechatOauth2: boolean,
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

  getTimezone(): string;
  setTimezone(value: string): UserSignUpRequest;

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
    timezone: string,
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
  getUser(): number;
  setUser(value: number): UserSetPasswordRequest;

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
    user: number,
    password: string,
  }
}

export class UserSetProfileRequest extends jspb.Message {
  getRealName(): string;
  setRealName(value: string): UserSetProfileRequest;

  getAvatar(): string;
  setAvatar(value: string): UserSetProfileRequest;

  getTimezone(): string;
  setTimezone(value: string): UserSetProfileRequest;

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
    timezone: string,
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

  getTimezone(): string;
  setTimezone(value: string): UserGetProfileResponse;

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
    timezone: string,
    lang: string,
    wechat: string,
    phone: string,
  }
}

export class UserLogsResponse extends jspb.Message {
  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): UserLogsResponse;
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
    pagination?: nut_pb.Pagination.AsObject,
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

    getResource(): Permission.Resource | undefined;
    setResource(value?: Permission.Resource): Item;
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
      resource?: Permission.Resource.AsObject,
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
  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): UserIndexResponse;
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
    pagination?: nut_pb.Pagination.AsObject,
    itemsList: Array<UserIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getEmail(): string;
    setEmail(value: string): Item;

    getNickname(): string;
    setNickname(value: string): Item;

    getRealName(): string;
    setRealName(value: string): Item;

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

    getTimezone(): string;
    setTimezone(value: string): Item;

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
      email: string,
      nickname: string,
      realName: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastSignInAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastSignInIp?: string,
      currentSignInAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      currentSignInIp?: string,
      signInCount: number,
      lang: string,
      timezone: string,
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

export class SignInByGoogleRequest extends jspb.Message {
  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): SignInByGoogleRequest;
  clearScopesList(): SignInByGoogleRequest;
  addScopes(value: string, index?: number): SignInByGoogleRequest;

  getCode(): string;
  setCode(value: string): SignInByGoogleRequest;

  getState(): string;
  setState(value: string): SignInByGoogleRequest;

  getRedirectUri(): string;
  setRedirectUri(value: string): SignInByGoogleRequest;

  getNonce(): string;
  setNonce(value: string): SignInByGoogleRequest;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): SignInByGoogleRequest;
  hasTtl(): boolean;
  clearTtl(): SignInByGoogleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInByGoogleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInByGoogleRequest): SignInByGoogleRequest.AsObject;
  static serializeBinaryToWriter(message: SignInByGoogleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInByGoogleRequest;
  static deserializeBinaryFromReader(message: SignInByGoogleRequest, reader: jspb.BinaryReader): SignInByGoogleRequest;
}

export namespace SignInByGoogleRequest {
  export type AsObject = {
    scopesList: Array<string>,
    code: string,
    state: string,
    redirectUri: string,
    nonce: string,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class GoogleSignInUrlRequest extends jspb.Message {
  getRedirectUri(): string;
  setRedirectUri(value: string): GoogleSignInUrlRequest;

  getState(): Oauth2State | undefined;
  setState(value?: Oauth2State): GoogleSignInUrlRequest;
  hasState(): boolean;
  clearState(): GoogleSignInUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleSignInUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleSignInUrlRequest): GoogleSignInUrlRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleSignInUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleSignInUrlRequest;
  static deserializeBinaryFromReader(message: GoogleSignInUrlRequest, reader: jspb.BinaryReader): GoogleSignInUrlRequest;
}

export namespace GoogleSignInUrlRequest {
  export type AsObject = {
    redirectUri: string,
    state?: Oauth2State.AsObject,
  }
}

export class GoogleSignInUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GoogleSignInUrlResponse;

  getNonce(): string;
  setNonce(value: string): GoogleSignInUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleSignInUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleSignInUrlResponse): GoogleSignInUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GoogleSignInUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleSignInUrlResponse;
  static deserializeBinaryFromReader(message: GoogleSignInUrlResponse, reader: jspb.BinaryReader): GoogleSignInUrlResponse;
}

export namespace GoogleSignInUrlResponse {
  export type AsObject = {
    url: string,
    nonce: string,
  }
}

export class WechatUserBindByIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): WechatUserBindByIdRequest;

  getWechatUserId(): number;
  setWechatUserId(value: number): WechatUserBindByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatUserBindByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatUserBindByIdRequest): WechatUserBindByIdRequest.AsObject;
  static serializeBinaryToWriter(message: WechatUserBindByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatUserBindByIdRequest;
  static deserializeBinaryFromReader(message: WechatUserBindByIdRequest, reader: jspb.BinaryReader): WechatUserBindByIdRequest;
}

export namespace WechatUserBindByIdRequest {
  export type AsObject = {
    userId: number,
    wechatUserId: number,
  }
}

export class WechatUserBindByAccountRequest extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): WechatUserBindByAccountRequest;

  getPassword(): string;
  setPassword(value: string): WechatUserBindByAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatUserBindByAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatUserBindByAccountRequest): WechatUserBindByAccountRequest.AsObject;
  static serializeBinaryToWriter(message: WechatUserBindByAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatUserBindByAccountRequest;
  static deserializeBinaryFromReader(message: WechatUserBindByAccountRequest, reader: jspb.BinaryReader): WechatUserBindByAccountRequest;
}

export namespace WechatUserBindByAccountRequest {
  export type AsObject = {
    nickname: string,
    password: string,
  }
}

export class WechatUserQueryByOpenIdRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatUserQueryByOpenIdRequest;

  getOpenId(): string;
  setOpenId(value: string): WechatUserQueryByOpenIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatUserQueryByOpenIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatUserQueryByOpenIdRequest): WechatUserQueryByOpenIdRequest.AsObject;
  static serializeBinaryToWriter(message: WechatUserQueryByOpenIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatUserQueryByOpenIdRequest;
  static deserializeBinaryFromReader(message: WechatUserQueryByOpenIdRequest, reader: jspb.BinaryReader): WechatUserQueryByOpenIdRequest;
}

export namespace WechatUserQueryByOpenIdRequest {
  export type AsObject = {
    appId: string,
    openId: string,
  }
}

export class WechatUserQueryByUnionIdRequest extends jspb.Message {
  getUnionId(): string;
  setUnionId(value: string): WechatUserQueryByUnionIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatUserQueryByUnionIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatUserQueryByUnionIdRequest): WechatUserQueryByUnionIdRequest.AsObject;
  static serializeBinaryToWriter(message: WechatUserQueryByUnionIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatUserQueryByUnionIdRequest;
  static deserializeBinaryFromReader(message: WechatUserQueryByUnionIdRequest, reader: jspb.BinaryReader): WechatUserQueryByUnionIdRequest;
}

export namespace WechatUserQueryByUnionIdRequest {
  export type AsObject = {
    unionId: string,
  }
}

export class WechatAllMiniProgramUserResponse extends jspb.Message {
  getItemsList(): Array<WechatAllMiniProgramUserResponse.Item>;
  setItemsList(value: Array<WechatAllMiniProgramUserResponse.Item>): WechatAllMiniProgramUserResponse;
  clearItemsList(): WechatAllMiniProgramUserResponse;
  addItems(value?: WechatAllMiniProgramUserResponse.Item, index?: number): WechatAllMiniProgramUserResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatAllMiniProgramUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatAllMiniProgramUserResponse): WechatAllMiniProgramUserResponse.AsObject;
  static serializeBinaryToWriter(message: WechatAllMiniProgramUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatAllMiniProgramUserResponse;
  static deserializeBinaryFromReader(message: WechatAllMiniProgramUserResponse, reader: jspb.BinaryReader): WechatAllMiniProgramUserResponse;
}

export namespace WechatAllMiniProgramUserResponse {
  export type AsObject = {
    itemsList: Array<WechatAllMiniProgramUserResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUserId(): number;
    setUserId(value: number): Item;

    getUnionId(): string;
    setUnionId(value: string): Item;

    getAppId(): string;
    setAppId(value: string): Item;

    getOpenId(): string;
    setOpenId(value: string): Item;

    getNickname(): string;
    setNickname(value: string): Item;
    hasNickname(): boolean;
    clearNickname(): Item;

    getAvatarUrl(): string;
    setAvatarUrl(value: string): Item;
    hasAvatarUrl(): boolean;
    clearAvatarUrl(): Item;

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
      unionId: string,
      appId: string,
      openId: string,
      nickname?: string,
      avatarUrl?: string,
    }

    export enum NicknameCase { 
      _NICKNAME_NOT_SET = 0,
      NICKNAME = 11,
    }

    export enum AvatarUrlCase { 
      _AVATAR_URL_NOT_SET = 0,
      AVATAR_URL = 12,
    }
  }

}

export class WechatAllOauth2UserResponse extends jspb.Message {
  getItemsList(): Array<WechatAllOauth2UserResponse.Item>;
  setItemsList(value: Array<WechatAllOauth2UserResponse.Item>): WechatAllOauth2UserResponse;
  clearItemsList(): WechatAllOauth2UserResponse;
  addItems(value?: WechatAllOauth2UserResponse.Item, index?: number): WechatAllOauth2UserResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatAllOauth2UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatAllOauth2UserResponse): WechatAllOauth2UserResponse.AsObject;
  static serializeBinaryToWriter(message: WechatAllOauth2UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatAllOauth2UserResponse;
  static deserializeBinaryFromReader(message: WechatAllOauth2UserResponse, reader: jspb.BinaryReader): WechatAllOauth2UserResponse;
}

export namespace WechatAllOauth2UserResponse {
  export type AsObject = {
    itemsList: Array<WechatAllOauth2UserResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUserId(): number;
    setUserId(value: number): Item;

    getUnionId(): string;
    setUnionId(value: string): Item;

    getAppId(): string;
    setAppId(value: string): Item;

    getOpenId(): string;
    setOpenId(value: string): Item;

    getNickname(): string;
    setNickname(value: string): Item;

    getSex(): number;
    setSex(value: number): Item;

    getCity(): string;
    setCity(value: string): Item;

    getProvince(): string;
    setProvince(value: string): Item;

    getCountry(): string;
    setCountry(value: string): Item;

    getHeadImgUrl(): string;
    setHeadImgUrl(value: string): Item;
    hasHeadImgUrl(): boolean;
    clearHeadImgUrl(): Item;

    getPrivilegeList(): Array<string>;
    setPrivilegeList(value: Array<string>): Item;
    clearPrivilegeList(): Item;
    addPrivilege(value: string, index?: number): Item;

    getLang(): string;
    setLang(value: string): Item;

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
      unionId: string,
      appId: string,
      openId: string,
      nickname: string,
      sex: number,
      city: string,
      province: string,
      country: string,
      headImgUrl?: string,
      privilegeList: Array<string>,
      lang: string,
    }

    export enum HeadImgUrlCase { 
      _HEAD_IMG_URL_NOT_SET = 0,
      HEAD_IMG_URL = 16,
    }
  }

}

export class SignInByWechatOauth2Request extends jspb.Message {
  getState(): string;
  setState(value: string): SignInByWechatOauth2Request;

  getCode(): string;
  setCode(value: string): SignInByWechatOauth2Request;

  getAppId(): string;
  setAppId(value: string): SignInByWechatOauth2Request;

  getLanguage(): orchid_pb.WechatOauth2QrConnectRequest.Language;
  setLanguage(value: orchid_pb.WechatOauth2QrConnectRequest.Language): SignInByWechatOauth2Request;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): SignInByWechatOauth2Request;
  hasTtl(): boolean;
  clearTtl(): SignInByWechatOauth2Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInByWechatOauth2Request.AsObject;
  static toObject(includeInstance: boolean, msg: SignInByWechatOauth2Request): SignInByWechatOauth2Request.AsObject;
  static serializeBinaryToWriter(message: SignInByWechatOauth2Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInByWechatOauth2Request;
  static deserializeBinaryFromReader(message: SignInByWechatOauth2Request, reader: jspb.BinaryReader): SignInByWechatOauth2Request;
}

export namespace SignInByWechatOauth2Request {
  export type AsObject = {
    state: string,
    code: string,
    appId: string,
    language: orchid_pb.WechatOauth2QrConnectRequest.Language,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class WechatOauth2SignInStateResponse extends jspb.Message {
  getState(): string;
  setState(value: string): WechatOauth2SignInStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatOauth2SignInStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatOauth2SignInStateResponse): WechatOauth2SignInStateResponse.AsObject;
  static serializeBinaryToWriter(message: WechatOauth2SignInStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatOauth2SignInStateResponse;
  static deserializeBinaryFromReader(message: WechatOauth2SignInStateResponse, reader: jspb.BinaryReader): WechatOauth2SignInStateResponse;
}

export namespace WechatOauth2SignInStateResponse {
  export type AsObject = {
    state: string,
  }
}

export class WechatOauth2SignInUrlRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatOauth2SignInUrlRequest;

  getRedirectUri(): string;
  setRedirectUri(value: string): WechatOauth2SignInUrlRequest;

  getLanguage(): orchid_pb.WechatOauth2QrConnectRequest.Language;
  setLanguage(value: orchid_pb.WechatOauth2QrConnectRequest.Language): WechatOauth2SignInUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatOauth2SignInUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatOauth2SignInUrlRequest): WechatOauth2SignInUrlRequest.AsObject;
  static serializeBinaryToWriter(message: WechatOauth2SignInUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatOauth2SignInUrlRequest;
  static deserializeBinaryFromReader(message: WechatOauth2SignInUrlRequest, reader: jspb.BinaryReader): WechatOauth2SignInUrlRequest;
}

export namespace WechatOauth2SignInUrlRequest {
  export type AsObject = {
    appId: string,
    redirectUri: string,
    language: orchid_pb.WechatOauth2QrConnectRequest.Language,
  }
}

export class WechatMiniProgramUser extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatMiniProgramUser;

  getOpenId(): string;
  setOpenId(value: string): WechatMiniProgramUser;

  getUnionId(): string;
  setUnionId(value: string): WechatMiniProgramUser;

  getNickname(): string;
  setNickname(value: string): WechatMiniProgramUser;
  hasNickname(): boolean;
  clearNickname(): WechatMiniProgramUser;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): WechatMiniProgramUser;
  hasAvatarUrl(): boolean;
  clearAvatarUrl(): WechatMiniProgramUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatMiniProgramUser.AsObject;
  static toObject(includeInstance: boolean, msg: WechatMiniProgramUser): WechatMiniProgramUser.AsObject;
  static serializeBinaryToWriter(message: WechatMiniProgramUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatMiniProgramUser;
  static deserializeBinaryFromReader(message: WechatMiniProgramUser, reader: jspb.BinaryReader): WechatMiniProgramUser;
}

export namespace WechatMiniProgramUser {
  export type AsObject = {
    appId: string,
    openId: string,
    unionId: string,
    nickname?: string,
    avatarUrl?: string,
  }

  export enum NicknameCase { 
    _NICKNAME_NOT_SET = 0,
    NICKNAME = 21,
  }

  export enum AvatarUrlCase { 
    _AVATAR_URL_NOT_SET = 0,
    AVATAR_URL = 22,
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
  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): AttachmentIndexResponse;
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
    pagination?: nut_pb.Pagination.AsObject,
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

    getStatus(): nut_pb.MediaContent.Status;
    setStatus(value: nut_pb.MediaContent.Status): Item;

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
      status: nut_pb.MediaContent.Status,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
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

export class LocaleListResponse extends jspb.Message {
  getItemsList(): Array<LocaleIndexResponse.Item>;
  setItemsList(value: Array<LocaleIndexResponse.Item>): LocaleListResponse;
  clearItemsList(): LocaleListResponse;
  addItems(value?: LocaleIndexResponse.Item, index?: number): LocaleIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleListResponse): LocaleListResponse.AsObject;
  static serializeBinaryToWriter(message: LocaleListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleListResponse;
  static deserializeBinaryFromReader(message: LocaleListResponse, reader: jspb.BinaryReader): LocaleListResponse;
}

export namespace LocaleListResponse {
  export type AsObject = {
    itemsList: Array<LocaleIndexResponse.Item.AsObject>,
  }
}

export class LocaleIndexResponse extends jspb.Message {
  getItemsList(): Array<LocaleIndexResponse.Item>;
  setItemsList(value: Array<LocaleIndexResponse.Item>): LocaleIndexResponse;
  clearItemsList(): LocaleIndexResponse;
  addItems(value?: LocaleIndexResponse.Item, index?: number): LocaleIndexResponse.Item;

  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): LocaleIndexResponse;
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
    pagination?: nut_pb.Pagination.AsObject,
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

export class LocaleByCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): LocaleByCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleByCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleByCodeRequest): LocaleByCodeRequest.AsObject;
  static serializeBinaryToWriter(message: LocaleByCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleByCodeRequest;
  static deserializeBinaryFromReader(message: LocaleByCodeRequest, reader: jspb.BinaryReader): LocaleByCodeRequest;
}

export namespace LocaleByCodeRequest {
  export type AsObject = {
    code: string,
  }
}

export class LocaleByLangAndCodeRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): LocaleByLangAndCodeRequest;

  getCode(): string;
  setCode(value: string): LocaleByLangAndCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleByLangAndCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleByLangAndCodeRequest): LocaleByLangAndCodeRequest.AsObject;
  static serializeBinaryToWriter(message: LocaleByLangAndCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleByLangAndCodeRequest;
  static deserializeBinaryFromReader(message: LocaleByLangAndCodeRequest, reader: jspb.BinaryReader): LocaleByLangAndCodeRequest;
}

export namespace LocaleByLangAndCodeRequest {
  export type AsObject = {
    lang: string,
    code: string,
  }
}

export class LocaleCreateRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): LocaleCreateRequest;

  getCode(): string;
  setCode(value: string): LocaleCreateRequest;

  getMessage(): string;
  setMessage(value: string): LocaleCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleCreateRequest): LocaleCreateRequest.AsObject;
  static serializeBinaryToWriter(message: LocaleCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleCreateRequest;
  static deserializeBinaryFromReader(message: LocaleCreateRequest, reader: jspb.BinaryReader): LocaleCreateRequest;
}

export namespace LocaleCreateRequest {
  export type AsObject = {
    lang: string,
    code: string,
    message: string,
  }
}

export class LocaleUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): LocaleUpdateRequest;

  getMessage(): string;
  setMessage(value: string): LocaleUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleUpdateRequest): LocaleUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: LocaleUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleUpdateRequest;
  static deserializeBinaryFromReader(message: LocaleUpdateRequest, reader: jspb.BinaryReader): LocaleUpdateRequest;
}

export namespace LocaleUpdateRequest {
  export type AsObject = {
    id: number,
    message: string,
  }
}

