import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"


export class UserProfile extends jspb.Message {
  getPayloadMap(): jspb.Map<string, string>;
  clearPayloadMap(): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    payloadMap: Array<[string, string]>,
  }
}

export class UserIndexResponse extends jspb.Message {
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
    itemsList: Array<UserIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getNickname(): string;
    setNickname(value: string): Item;

    getRealName(): string;
    setRealName(value: string): Item;

    getEmail(): string;
    setEmail(value: string): Item;

    getLocale(): string;
    setLocale(value: string): Item;

    getTimezone(): string;
    setTimezone(value: string): Item;

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

    getBy(): UserSignInResponse.By;
    setBy(value: UserSignInResponse.By): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      nickname: string,
      realName: string,
      email: string,
      locale: string,
      timezone: string,
      confirmedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lockedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      by: UserSignInResponse.By,
    }

    export enum ConfirmedAtCase { 
      _CONFIRMED_AT_NOT_SET = 0,
      CONFIRMED_AT = 91,
    }

    export enum LockedAtCase { 
      _LOCKED_AT_NOT_SET = 0,
      LOCKED_AT = 92,
    }

    export enum DeletedAtCase { 
      _DELETED_AT_NOT_SET = 0,
      DELETED_AT = 93,
    }
  }

}

export class UserSetPasswordRequest extends jspb.Message {
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
    password: string,
  }
}

export class UserChangePasswordRequest extends jspb.Message {
  getCurrentPassword(): string;
  setCurrentPassword(value: string): UserChangePasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): UserChangePasswordRequest;

  getPasswordConfirmation(): string;
  setPasswordConfirmation(value: string): UserChangePasswordRequest;

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
    passwordConfirmation: string,
  }
}

export class UserLogsRequest extends jspb.Message {
  getPlugin(): string;
  setPlugin(value: string): UserLogsRequest;
  hasPlugin(): boolean;
  clearPlugin(): UserLogsRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): UserLogsRequest;
  hasFrom(): boolean;
  clearFrom(): UserLogsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): UserLogsRequest;
  hasTo(): boolean;
  clearTo(): UserLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogsRequest): UserLogsRequest.AsObject;
  static serializeBinaryToWriter(message: UserLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogsRequest;
  static deserializeBinaryFromReader(message: UserLogsRequest, reader: jspb.BinaryReader): UserLogsRequest;
}

export namespace UserLogsRequest {
  export type AsObject = {
    plugin?: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum PluginCase { 
    _PLUGIN_NOT_SET = 0,
    PLUGIN = 1,
  }
}

export class UserLogsResponse extends jspb.Message {
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
    itemsList: Array<UserLogsResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getLevel(): UserLogsResponse.Item.Level;
    setLevel(value: UserLogsResponse.Item.Level): Item;

    getPlugin(): string;
    setPlugin(value: string): Item;

    getIp(): string;
    setIp(value: string): Item;

    getMessage(): string;
    setMessage(value: string): Item;

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
      level: UserLogsResponse.Item.Level,
      plugin: string,
      ip: string,
      message: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Level { 
      DEBUG = 0,
      INFO = 1,
      WARNING = 2,
      ERROR = 3,
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

export class UserQueryRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): UserQueryRequest;

  getNickname(): string;
  setNickname(value: string): UserQueryRequest;

  getPhone(): string;
  setPhone(value: string): UserQueryRequest;

  getUid(): string;
  setUid(value: string): UserQueryRequest;

  getByCase(): UserQueryRequest.ByCase;

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
    nickname: string,
    phone: string,
    uid: string,
  }

  export enum ByCase { 
    BY_NOT_SET = 0,
    EMAIL = 1,
    NICKNAME = 2,
    PHONE = 3,
    UID = 4,
  }
}

export class UserSignUpByEmailRequest extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): UserSignUpByEmailRequest;

  getRealName(): string;
  setRealName(value: string): UserSignUpByEmailRequest;

  getEmail(): string;
  setEmail(value: string): UserSignUpByEmailRequest;

  getPassword(): string;
  setPassword(value: string): UserSignUpByEmailRequest;

  getLocale(): string;
  setLocale(value: string): UserSignUpByEmailRequest;

  getTimezone(): string;
  setTimezone(value: string): UserSignUpByEmailRequest;

  getHome(): string;
  setHome(value: string): UserSignUpByEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSignUpByEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSignUpByEmailRequest): UserSignUpByEmailRequest.AsObject;
  static serializeBinaryToWriter(message: UserSignUpByEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSignUpByEmailRequest;
  static deserializeBinaryFromReader(message: UserSignUpByEmailRequest, reader: jspb.BinaryReader): UserSignUpByEmailRequest;
}

export namespace UserSignUpByEmailRequest {
  export type AsObject = {
    nickname: string,
    realName: string,
    email: string,
    password: string,
    locale: string,
    timezone: string,
    home: string,
  }
}

export class UserSignInByPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): UserSignInByPasswordRequest;

  getNickname(): string;
  setNickname(value: string): UserSignInByPasswordRequest;

  getPhone(): string;
  setPhone(value: string): UserSignInByPasswordRequest;

  getPassword(): string;
  setPassword(value: string): UserSignInByPasswordRequest;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): UserSignInByPasswordRequest;
  hasTtl(): boolean;
  clearTtl(): UserSignInByPasswordRequest;

  getUserCase(): UserSignInByPasswordRequest.UserCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSignInByPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSignInByPasswordRequest): UserSignInByPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UserSignInByPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSignInByPasswordRequest;
  static deserializeBinaryFromReader(message: UserSignInByPasswordRequest, reader: jspb.BinaryReader): UserSignInByPasswordRequest;
}

export namespace UserSignInByPasswordRequest {
  export type AsObject = {
    email: string,
    nickname: string,
    phone: string,
    password: string,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum UserCase { 
    USER_NOT_SET = 0,
    EMAIL = 1,
    NICKNAME = 2,
    PHONE = 3,
  }
}

export class UserSignInResponse extends jspb.Message {
  getRealName(): string;
  setRealName(value: string): UserSignInResponse;

  getBy(): UserSignInResponse.By;
  setBy(value: UserSignInResponse.By): UserSignInResponse;

  getToken(): string;
  setToken(value: string): UserSignInResponse;

  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): UserSignInResponse;
  clearRolesList(): UserSignInResponse;
  addRoles(value?: Role, index?: number): Role;

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
    realName: string,
    by: UserSignInResponse.By,
    token: string,
    rolesList: Array<Role.AsObject>,
    permissionsList: Array<Permission.AsObject>,
  }

  export enum By { 
    NICKNAME = 0,
    EMAIL = 1,
    PHONE = 2,
    WECHATOAUTH2 = 11,
    WECHATMINIPROGRAM = 12,
    FACEBOOK = 21,
    GOOGLE = 22,
  }
}

export class Permission extends jspb.Message {
  getUser(): number;
  setUser(value: number): Permission;

  getRole(): Role | undefined;
  setRole(value?: Role): Permission;
  hasRole(): boolean;
  clearRole(): Permission;

  getObject(): Resource | undefined;
  setObject(value?: Resource): Permission;
  hasObject(): boolean;
  clearObject(): Permission;

  getAction(): string;
  setAction(value: string): Permission;

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
    role?: Role.AsObject,
    object?: Resource.AsObject,
    action: string,
  }

  export enum SubjectCase { 
    SUBJECT_NOT_SET = 0,
    USER = 1,
    ROLE = 2,
  }
}

export class Resource extends jspb.Message {
  getS(): string;
  setS(value: string): Resource;

  getI(): number;
  setI(value: number): Resource;

  getType(): string;
  setType(value: string): Resource;

  getIdCase(): Resource.IdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    s: string,
    i: number,
    type: string,
  }

  export enum IdCase { 
    ID_NOT_SET = 0,
    S = 1,
    I = 2,
  }
}

export class Role extends jspb.Message {
  getAdministrator(): google_protobuf_empty_pb.Empty | undefined;
  setAdministrator(value?: google_protobuf_empty_pb.Empty): Role;
  hasAdministrator(): boolean;
  clearAdministrator(): Role;

  getRoot(): google_protobuf_empty_pb.Empty | undefined;
  setRoot(value?: google_protobuf_empty_pb.Empty): Role;
  hasRoot(): boolean;
  clearRoot(): Role;

  getMember(): Role.Member | undefined;
  setMember(value?: Role.Member): Role;
  hasMember(): boolean;
  clearMember(): Role;

  getByCase(): Role.ByCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    administrator?: google_protobuf_empty_pb.Empty.AsObject,
    root?: google_protobuf_empty_pb.Empty.AsObject,
    member?: Role.Member.AsObject,
  }

  export class Member extends jspb.Message {
    getName(): string;
    setName(value: string): Member;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Member.AsObject;
    static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
    static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Member;
    static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
  }

  export namespace Member {
    export type AsObject = {
      name: string,
    }
  }


  export enum ByCase { 
    BY_NOT_SET = 0,
    ADMINISTRATOR = 1,
    ROOT = 2,
    MEMBER = 3,
  }
}

export class RbacCanRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacCanRequest;

  getObject(): Resource | undefined;
  setObject(value?: Resource): RbacCanRequest;
  hasObject(): boolean;
  clearObject(): RbacCanRequest;

  getAction(): string;
  setAction(value: string): RbacCanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacCanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacCanRequest): RbacCanRequest.AsObject;
  static serializeBinaryToWriter(message: RbacCanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacCanRequest;
  static deserializeBinaryFromReader(message: RbacCanRequest, reader: jspb.BinaryReader): RbacCanRequest;
}

export namespace RbacCanRequest {
  export type AsObject = {
    user: number,
    object?: Resource.AsObject,
    action: string,
  }
}

export class RbacHasRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacHasRequest;

  getRole(): Role | undefined;
  setRole(value?: Role): RbacHasRequest;
  hasRole(): boolean;
  clearRole(): RbacHasRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacHasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacHasRequest): RbacHasRequest.AsObject;
  static serializeBinaryToWriter(message: RbacHasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacHasRequest;
  static deserializeBinaryFromReader(message: RbacHasRequest, reader: jspb.BinaryReader): RbacHasRequest;
}

export namespace RbacHasRequest {
  export type AsObject = {
    user: number,
    role?: Role.AsObject,
  }
}

export class RbacPermissionItem extends jspb.Message {
  getAction(): string;
  setAction(value: string): RbacPermissionItem;

  getResource(): Resource | undefined;
  setResource(value?: Resource): RbacPermissionItem;
  hasResource(): boolean;
  clearResource(): RbacPermissionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacPermissionItem.AsObject;
  static toObject(includeInstance: boolean, msg: RbacPermissionItem): RbacPermissionItem.AsObject;
  static serializeBinaryToWriter(message: RbacPermissionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacPermissionItem;
  static deserializeBinaryFromReader(message: RbacPermissionItem, reader: jspb.BinaryReader): RbacPermissionItem;
}

export namespace RbacPermissionItem {
  export type AsObject = {
    action: string,
    resource?: Resource.AsObject,
  }
}

export class RbacPermissionsForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacPermissionsForUserRequest;

  getPermissionsList(): Array<RbacPermissionItem>;
  setPermissionsList(value: Array<RbacPermissionItem>): RbacPermissionsForUserRequest;
  clearPermissionsList(): RbacPermissionsForUserRequest;
  addPermissions(value?: RbacPermissionItem, index?: number): RbacPermissionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacPermissionsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacPermissionsForUserRequest): RbacPermissionsForUserRequest.AsObject;
  static serializeBinaryToWriter(message: RbacPermissionsForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacPermissionsForUserRequest;
  static deserializeBinaryFromReader(message: RbacPermissionsForUserRequest, reader: jspb.BinaryReader): RbacPermissionsForUserRequest;
}

export namespace RbacPermissionsForUserRequest {
  export type AsObject = {
    user: number,
    permissionsList: Array<RbacPermissionItem.AsObject>,
  }
}

export class RbacPermissionsForRoleRequest extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): RbacPermissionsForRoleRequest;
  hasRole(): boolean;
  clearRole(): RbacPermissionsForRoleRequest;

  getPermissionsList(): Array<RbacPermissionItem>;
  setPermissionsList(value: Array<RbacPermissionItem>): RbacPermissionsForRoleRequest;
  clearPermissionsList(): RbacPermissionsForRoleRequest;
  addPermissions(value?: RbacPermissionItem, index?: number): RbacPermissionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacPermissionsForRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacPermissionsForRoleRequest): RbacPermissionsForRoleRequest.AsObject;
  static serializeBinaryToWriter(message: RbacPermissionsForRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacPermissionsForRoleRequest;
  static deserializeBinaryFromReader(message: RbacPermissionsForRoleRequest, reader: jspb.BinaryReader): RbacPermissionsForRoleRequest;
}

export namespace RbacPermissionsForRoleRequest {
  export type AsObject = {
    role?: Role.AsObject,
    permissionsList: Array<RbacPermissionItem.AsObject>,
  }
}

export class RbacRolesForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RbacRolesForUserRequest;

  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): RbacRolesForUserRequest;
  clearRolesList(): RbacRolesForUserRequest;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacRolesForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RbacRolesForUserRequest): RbacRolesForUserRequest.AsObject;
  static serializeBinaryToWriter(message: RbacRolesForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacRolesForUserRequest;
  static deserializeBinaryFromReader(message: RbacRolesForUserRequest, reader: jspb.BinaryReader): RbacRolesForUserRequest;
}

export namespace RbacRolesForUserRequest {
  export type AsObject = {
    user: number,
    rolesList: Array<Role.AsObject>,
  }
}

export class RbacRolesResponse extends jspb.Message {
  getItemsList(): Array<Role>;
  setItemsList(value: Array<Role>): RbacRolesResponse;
  clearItemsList(): RbacRolesResponse;
  addItems(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RbacRolesResponse): RbacRolesResponse.AsObject;
  static serializeBinaryToWriter(message: RbacRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacRolesResponse;
  static deserializeBinaryFromReader(message: RbacRolesResponse, reader: jspb.BinaryReader): RbacRolesResponse;
}

export namespace RbacRolesResponse {
  export type AsObject = {
    itemsList: Array<Role.AsObject>,
  }
}

export class RbacPermissionsResponse extends jspb.Message {
  getItemsList(): Array<Permission>;
  setItemsList(value: Array<Permission>): RbacPermissionsResponse;
  clearItemsList(): RbacPermissionsResponse;
  addItems(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RbacPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RbacPermissionsResponse): RbacPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: RbacPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RbacPermissionsResponse;
  static deserializeBinaryFromReader(message: RbacPermissionsResponse, reader: jspb.BinaryReader): RbacPermissionsResponse;
}

export namespace RbacPermissionsResponse {
  export type AsObject = {
    itemsList: Array<Permission.AsObject>,
  }
}

export class SettingSetRequest extends jspb.Message {
  getGlobal(): boolean;
  setGlobal(value: boolean): SettingSetRequest;

  getKey(): string;
  setKey(value: string): SettingSetRequest;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): SettingSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SettingSetRequest): SettingSetRequest.AsObject;
  static serializeBinaryToWriter(message: SettingSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingSetRequest;
  static deserializeBinaryFromReader(message: SettingSetRequest, reader: jspb.BinaryReader): SettingSetRequest;
}

export namespace SettingSetRequest {
  export type AsObject = {
    global: boolean,
    key: string,
    value: Uint8Array | string,
  }
}

export class SettingGetRequest extends jspb.Message {
  getGlobal(): boolean;
  setGlobal(value: boolean): SettingGetRequest;

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
    global: boolean,
    key: string,
  }
}

export class SettingByUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): SettingByUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingByUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SettingByUserRequest): SettingByUserRequest.AsObject;
  static serializeBinaryToWriter(message: SettingByUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingByUserRequest;
  static deserializeBinaryFromReader(message: SettingByUserRequest, reader: jspb.BinaryReader): SettingByUserRequest;
}

export namespace SettingByUserRequest {
  export type AsObject = {
    user: number,
  }
}

export class SettingsResponse extends jspb.Message {
  getItemsList(): Array<SettingsResponse.Item>;
  setItemsList(value: Array<SettingsResponse.Item>): SettingsResponse;
  clearItemsList(): SettingsResponse;
  addItems(value?: SettingsResponse.Item, index?: number): SettingsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SettingsResponse): SettingsResponse.AsObject;
  static serializeBinaryToWriter(message: SettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingsResponse;
  static deserializeBinaryFromReader(message: SettingsResponse, reader: jspb.BinaryReader): SettingsResponse;
}

export namespace SettingsResponse {
  export type AsObject = {
    itemsList: Array<SettingsResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUserId(): number;
    setUserId(value: number): Item;
    hasUserId(): boolean;
    clearUserId(): Item;

    getKey(): string;
    setKey(value: string): Item;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Item;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasCreatedAt(): boolean;
    clearCreatedAt(): Item;

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
      userId?: number,
      key: string,
      value: Uint8Array | string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum UserIdCase { 
      _USER_ID_NOT_SET = 0,
      USER_ID = 2,
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

export class LocalesResponse extends jspb.Message {
  getItemsList(): Array<LocalesResponse.Item>;
  setItemsList(value: Array<LocalesResponse.Item>): LocalesResponse;
  clearItemsList(): LocalesResponse;
  addItems(value?: LocalesResponse.Item, index?: number): LocalesResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocalesResponse): LocalesResponse.AsObject;
  static serializeBinaryToWriter(message: LocalesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalesResponse;
  static deserializeBinaryFromReader(message: LocalesResponse, reader: jspb.BinaryReader): LocalesResponse;
}

export namespace LocalesResponse {
  export type AsObject = {
    itemsList: Array<LocalesResponse.Item.AsObject>,
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

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasCreatedAt(): boolean;
    clearCreatedAt(): Item;

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
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
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

