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

export class UserLogsRequest extends jspb.Message {
  getPager(): Pager | undefined;
  setPager(value?: Pager): UserLogsRequest;
  hasPager(): boolean;
  clearPager(): UserLogsRequest;

  getLevel(): string;
  setLevel(value: string): UserLogsRequest;
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
    pager?: Pager.AsObject,
    level?: string,
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

export class UserSignInResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserSignInResponse;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): UserSignInResponse;
  clearRolesList(): UserSignInResponse;
  addRoles(value: string, index?: number): UserSignInResponse;

  getPermissionsList(): Array<RbacPermissionsResponse.Item>;
  setPermissionsList(value: Array<RbacPermissionsResponse.Item>): UserSignInResponse;
  clearPermissionsList(): UserSignInResponse;
  addPermissions(value?: RbacPermissionsResponse.Item, index?: number): RbacPermissionsResponse.Item;

  getPayload(): SiteUserIndexResponse.Item | undefined;
  setPayload(value?: SiteUserIndexResponse.Item): UserSignInResponse;
  hasPayload(): boolean;
  clearPayload(): UserSignInResponse;

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
    rolesList: Array<string>,
    permissionsList: Array<RbacPermissionsResponse.Item.AsObject>,
    payload?: SiteUserIndexResponse.Item.AsObject,
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

    getIp(): string;
    setIp(value: string): Item;

    getLevel(): string;
    setLevel(value: string): Item;

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
      ip: string,
      level: string,
      message: string,
      resourceType: string,
      resourceId?: number,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum ResourceIdCase { 
      _RESOURCE_ID_NOT_SET = 0,
      RESOURCE_ID = 7,
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

export class RbacUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RbacUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacUserRequest): RbacUserRequest.AsObject;
  static serializeBinaryToWriter(message: RbacUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacUserRequest;
  static deserializeBinaryFromReader(message: RbacUserRequest, reader: jspb.BinaryReader): RbacUserRequest;
}

export namespace RbacUserRequest {
  export type AsObject = {
    id: number,
  }
}

export class RbacGetRolesForUserResponse extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): RbacGetRolesForUserResponse;
  clearItemsList(): RbacGetRolesForUserResponse;
  addItems(value: string, index?: number): RbacGetRolesForUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacGetRolesForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RbacGetRolesForUserResponse): RbacGetRolesForUserResponse.AsObject;
  static serializeBinaryToWriter(message: RbacGetRolesForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacGetRolesForUserResponse;
  static deserializeBinaryFromReader(message: RbacGetRolesForUserResponse, reader: jspb.BinaryReader): RbacGetRolesForUserResponse;
}

export namespace RbacGetRolesForUserResponse {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class RbacRoleRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): RbacRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacRoleRequest): RbacRoleRequest.AsObject;
  static serializeBinaryToWriter(message: RbacRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacRoleRequest;
  static deserializeBinaryFromReader(message: RbacRoleRequest, reader: jspb.BinaryReader): RbacRoleRequest;
}

export namespace RbacRoleRequest {
  export type AsObject = {
    code: string,
  }
}

export class RbacGetUsersForRoleResponse extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): RbacGetUsersForRoleResponse;
  clearItemsList(): RbacGetUsersForRoleResponse;
  addItems(value: string, index?: number): RbacGetUsersForRoleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacGetUsersForRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RbacGetUsersForRoleResponse): RbacGetUsersForRoleResponse.AsObject;
  static serializeBinaryToWriter(message: RbacGetUsersForRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacGetUsersForRoleResponse;
  static deserializeBinaryFromReader(message: RbacGetUsersForRoleResponse, reader: jspb.BinaryReader): RbacGetUsersForRoleResponse;
}

export namespace RbacGetUsersForRoleResponse {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class RbacPermissionsResponse extends jspb.Message {
  getItemsList(): Array<RbacPermissionsResponse.Item>;
  setItemsList(value: Array<RbacPermissionsResponse.Item>): RbacPermissionsResponse;
  clearItemsList(): RbacPermissionsResponse;
  addItems(value?: RbacPermissionsResponse.Item, index?: number): RbacPermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RbacPermissionsResponse): RbacPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: RbacPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacPermissionsResponse;
  static deserializeBinaryFromReader(message: RbacPermissionsResponse, reader: jspb.BinaryReader): RbacPermissionsResponse;
}

export namespace RbacPermissionsResponse {
  export type AsObject = {
    itemsList: Array<RbacPermissionsResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
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
      operation: string,
      resourceType: string,
      resourceId?: number,
    }

    export enum ResourceIdCase { 
      _RESOURCE_ID_NOT_SET = 0,
      RESOURCE_ID = 3,
    }
  }

}

export class RbacAddRolesForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacAddRolesForUserRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): RbacAddRolesForUserRequest;
  clearRolesList(): RbacAddRolesForUserRequest;
  addRoles(value: string, index?: number): RbacAddRolesForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacAddRolesForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacAddRolesForUserRequest): RbacAddRolesForUserRequest.AsObject;
  static serializeBinaryToWriter(message: RbacAddRolesForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacAddRolesForUserRequest;
  static deserializeBinaryFromReader(message: RbacAddRolesForUserRequest, reader: jspb.BinaryReader): RbacAddRolesForUserRequest;
}

export namespace RbacAddRolesForUserRequest {
  export type AsObject = {
    user: number,
    rolesList: Array<string>,
  }
}

export class RbacRoleForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacRoleForUserRequest;

  getRole(): string;
  setRole(value: string): RbacRoleForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacRoleForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacRoleForUserRequest): RbacRoleForUserRequest.AsObject;
  static serializeBinaryToWriter(message: RbacRoleForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacRoleForUserRequest;
  static deserializeBinaryFromReader(message: RbacRoleForUserRequest, reader: jspb.BinaryReader): RbacRoleForUserRequest;
}

export namespace RbacRoleForUserRequest {
  export type AsObject = {
    user: number,
    role: string,
  }
}

export class RbacAddPermissionsForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacAddPermissionsForUserRequest;

  getPermissionsList(): Array<RbacPermissionsResponse.Item>;
  setPermissionsList(value: Array<RbacPermissionsResponse.Item>): RbacAddPermissionsForUserRequest;
  clearPermissionsList(): RbacAddPermissionsForUserRequest;
  addPermissions(value?: RbacPermissionsResponse.Item, index?: number): RbacPermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacAddPermissionsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacAddPermissionsForUserRequest): RbacAddPermissionsForUserRequest.AsObject;
  static serializeBinaryToWriter(message: RbacAddPermissionsForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacAddPermissionsForUserRequest;
  static deserializeBinaryFromReader(message: RbacAddPermissionsForUserRequest, reader: jspb.BinaryReader): RbacAddPermissionsForUserRequest;
}

export namespace RbacAddPermissionsForUserRequest {
  export type AsObject = {
    user: number,
    permissionsList: Array<RbacPermissionsResponse.Item.AsObject>,
  }
}

export class RbacAddPermissionsForRoleRequest extends jspb.Message {
  getRole(): string;
  setRole(value: string): RbacAddPermissionsForRoleRequest;

  getPermissionsList(): Array<RbacPermissionsResponse.Item>;
  setPermissionsList(value: Array<RbacPermissionsResponse.Item>): RbacAddPermissionsForRoleRequest;
  clearPermissionsList(): RbacAddPermissionsForRoleRequest;
  addPermissions(value?: RbacPermissionsResponse.Item, index?: number): RbacPermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacAddPermissionsForRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacAddPermissionsForRoleRequest): RbacAddPermissionsForRoleRequest.AsObject;
  static serializeBinaryToWriter(message: RbacAddPermissionsForRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacAddPermissionsForRoleRequest;
  static deserializeBinaryFromReader(message: RbacAddPermissionsForRoleRequest, reader: jspb.BinaryReader): RbacAddPermissionsForRoleRequest;
}

export namespace RbacAddPermissionsForRoleRequest {
  export type AsObject = {
    role: string,
    permissionsList: Array<RbacPermissionsResponse.Item.AsObject>,
  }
}

export class RbacPermissionForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacPermissionForUserRequest;

  getPermission(): RbacPermissionsResponse.Item | undefined;
  setPermission(value?: RbacPermissionsResponse.Item): RbacPermissionForUserRequest;
  hasPermission(): boolean;
  clearPermission(): RbacPermissionForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacPermissionForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacPermissionForUserRequest): RbacPermissionForUserRequest.AsObject;
  static serializeBinaryToWriter(message: RbacPermissionForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacPermissionForUserRequest;
  static deserializeBinaryFromReader(message: RbacPermissionForUserRequest, reader: jspb.BinaryReader): RbacPermissionForUserRequest;
}

export namespace RbacPermissionForUserRequest {
  export type AsObject = {
    user: number,
    permission?: RbacPermissionsResponse.Item.AsObject,
  }
}

export class RbacPermissionForRoleRequest extends jspb.Message {
  getRole(): string;
  setRole(value: string): RbacPermissionForRoleRequest;

  getPermission(): RbacPermissionsResponse.Item | undefined;
  setPermission(value?: RbacPermissionsResponse.Item): RbacPermissionForRoleRequest;
  hasPermission(): boolean;
  clearPermission(): RbacPermissionForRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacPermissionForRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacPermissionForRoleRequest): RbacPermissionForRoleRequest.AsObject;
  static serializeBinaryToWriter(message: RbacPermissionForRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacPermissionForRoleRequest;
  static deserializeBinaryFromReader(message: RbacPermissionForRoleRequest, reader: jspb.BinaryReader): RbacPermissionForRoleRequest;
}

export namespace RbacPermissionForRoleRequest {
  export type AsObject = {
    role: string,
    permission?: RbacPermissionsResponse.Item.AsObject,
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

    getLang(): string;
    setLang(value: string): Item;

    getName(): string;
    setName(value: string): Item;

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
      lang: string,
      name: string,
      priority: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class TagCreateRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): TagCreateRequest;

  getName(): string;
  setName(value: string): TagCreateRequest;

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
    lang: string,
    name: string,
    priority: number,
  }
}

export class TagUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TagUpdateRequest;

  getName(): string;
  setName(value: string): TagUpdateRequest;

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
    name: string,
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

    getLang(): string;
    setLang(value: string): Item;

    getName(): string;
    setName(value: string): Item;

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
      lang: string,
      name: string,
      parentId?: number,
      priority: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum ParentIdCase { 
      _PARENT_ID_NOT_SET = 0,
      PARENT_ID = 4,
    }
  }

}

export class CategoryCreateRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): CategoryCreateRequest;

  getName(): string;
  setName(value: string): CategoryCreateRequest;

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
    name: string,
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

  getName(): string;
  setName(value: string): CategoryUpdateRequest;

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
    name: string,
    parentId?: number,
    priority: number,
  }

  export enum ParentIdCase { 
    _PARENT_ID_NOT_SET = 0,
    PARENT_ID = 3,
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
  getItemsList(): Array<AttachmetIndexResponse.Item>;
  setItemsList(value: Array<AttachmetIndexResponse.Item>): AttachmetIndexResponse;
  clearItemsList(): AttachmetIndexResponse;
  addItems(value?: AttachmetIndexResponse.Item, index?: number): AttachmetIndexResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): AttachmetIndexResponse;
  hasPagination(): boolean;
  clearPagination(): AttachmetIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmetIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmetIndexResponse): AttachmetIndexResponse.AsObject;
  static serializeBinaryToWriter(message: AttachmetIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmetIndexResponse;
  static deserializeBinaryFromReader(message: AttachmetIndexResponse, reader: jspb.BinaryReader): AttachmetIndexResponse;
}

export namespace AttachmetIndexResponse {
  export type AsObject = {
    itemsList: Array<AttachmetIndexResponse.Item.AsObject>,
    pagination?: Pagination.AsObject,
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

    getRegion(): string;
    setRegion(value: string): Item;

    getStatus(): string;
    setStatus(value: string): Item;

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
      region: string,
      status: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
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

export class AwsProfile extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): AwsProfile;

  getEndpoint(): string;
  setEndpoint(value: string): AwsProfile;
  hasEndpoint(): boolean;
  clearEndpoint(): AwsProfile;

  getAccessKeyId(): string;
  setAccessKeyId(value: string): AwsProfile;

  getSecretAccessKey(): string;
  setSecretAccessKey(value: string): AwsProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsProfile.AsObject;
  static toObject(includeInstance: boolean, msg: AwsProfile): AwsProfile.AsObject;
  static serializeBinaryToWriter(message: AwsProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsProfile;
  static deserializeBinaryFromReader(message: AwsProfile, reader: jspb.BinaryReader): AwsProfile;
}

export namespace AwsProfile {
  export type AsObject = {
    region: string,
    endpoint?: string,
    accessKeyId: string,
    secretAccessKey: string,
  }

  export enum EndpointCase { 
    _ENDPOINT_NOT_SET = 0,
    ENDPOINT = 2,
  }
}

export class SiteAwsS3TestResponse extends jspb.Message {
  getBucketsList(): Array<string>;
  setBucketsList(value: Array<string>): SiteAwsS3TestResponse;
  clearBucketsList(): SiteAwsS3TestResponse;
  addBuckets(value: string, index?: number): SiteAwsS3TestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteAwsS3TestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteAwsS3TestResponse): SiteAwsS3TestResponse.AsObject;
  static serializeBinaryToWriter(message: SiteAwsS3TestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteAwsS3TestResponse;
  static deserializeBinaryFromReader(message: SiteAwsS3TestResponse, reader: jspb.BinaryReader): SiteAwsS3TestResponse;
}

export namespace SiteAwsS3TestResponse {
  export type AsObject = {
    bucketsList: Array<string>,
  }
}

export class SiteListUserResponse extends jspb.Message {
  getItemsList(): Array<SiteListUserResponse.Item>;
  setItemsList(value: Array<SiteListUserResponse.Item>): SiteListUserResponse;
  clearItemsList(): SiteListUserResponse;
  addItems(value?: SiteListUserResponse.Item, index?: number): SiteListUserResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteListUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteListUserResponse): SiteListUserResponse.AsObject;
  static serializeBinaryToWriter(message: SiteListUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteListUserResponse;
  static deserializeBinaryFromReader(message: SiteListUserResponse, reader: jspb.BinaryReader): SiteListUserResponse;
}

export namespace SiteListUserResponse {
  export type AsObject = {
    itemsList: Array<SiteListUserResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getNickName(): string;
    setNickName(value: string): Item;

    getRealName(): string;
    setRealName(value: string): Item;

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
      nickName: string,
      realName: string,
    }
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
  getBody(): string;
  setBody(value: string): SiteNewLeaveWordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteNewLeaveWordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteNewLeaveWordRequest): SiteNewLeaveWordRequest.AsObject;
  static serializeBinaryToWriter(message: SiteNewLeaveWordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteNewLeaveWordRequest;
  static deserializeBinaryFromReader(message: SiteNewLeaveWordRequest, reader: jspb.BinaryReader): SiteNewLeaveWordRequest;
}

export namespace SiteNewLeaveWordRequest {
  export type AsObject = {
    body: string,
  }
}

export class SiteIndexLeaveWordResponse extends jspb.Message {
  getItemsList(): Array<SiteIndexLeaveWordResponse.Item>;
  setItemsList(value: Array<SiteIndexLeaveWordResponse.Item>): SiteIndexLeaveWordResponse;
  clearItemsList(): SiteIndexLeaveWordResponse;
  addItems(value?: SiteIndexLeaveWordResponse.Item, index?: number): SiteIndexLeaveWordResponse.Item;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): SiteIndexLeaveWordResponse;
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
    pagination?: Pagination.AsObject,
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

