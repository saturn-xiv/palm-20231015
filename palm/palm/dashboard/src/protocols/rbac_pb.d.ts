import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class UserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    id: number,
  }
}

export class RolesResponse extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): RolesResponse;
  clearItemsList(): RolesResponse;
  addItems(value: string, index?: number): RolesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RolesResponse): RolesResponse.AsObject;
  static serializeBinaryToWriter(message: RolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RolesResponse;
  static deserializeBinaryFromReader(message: RolesResponse, reader: jspb.BinaryReader): RolesResponse;
}

export namespace RolesResponse {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class RoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleRequest): RoleRequest.AsObject;
  static serializeBinaryToWriter(message: RoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleRequest;
  static deserializeBinaryFromReader(message: RoleRequest, reader: jspb.BinaryReader): RoleRequest;
}

export namespace RoleRequest {
  export type AsObject = {
    name: string,
  }
}

export class UsersResponse extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): UsersResponse;
  clearItemsList(): UsersResponse;
  addItems(value: string, index?: number): UsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
  static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersResponse;
  static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class HasRoleForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): HasRoleForUserRequest;

  getRole(): string;
  setRole(value: string): HasRoleForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasRoleForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HasRoleForUserRequest): HasRoleForUserRequest.AsObject;
  static serializeBinaryToWriter(message: HasRoleForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasRoleForUserRequest;
  static deserializeBinaryFromReader(message: HasRoleForUserRequest, reader: jspb.BinaryReader): HasRoleForUserRequest;
}

export namespace HasRoleForUserRequest {
  export type AsObject = {
    user: number,
    role: string,
  }
}

export class HasPermissionForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): HasPermissionForUserRequest;

  getRole(): string;
  setRole(value: string): HasPermissionForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasPermissionForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HasPermissionForUserRequest): HasPermissionForUserRequest.AsObject;
  static serializeBinaryToWriter(message: HasPermissionForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasPermissionForUserRequest;
  static deserializeBinaryFromReader(message: HasPermissionForUserRequest, reader: jspb.BinaryReader): HasPermissionForUserRequest;
}

export namespace HasPermissionForUserRequest {
  export type AsObject = {
    user: number,
    role: string,
  }
}

export class RolesForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): RolesForUserRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): RolesForUserRequest;
  clearRolesList(): RolesForUserRequest;
  addRoles(value: string, index?: number): RolesForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RolesForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RolesForUserRequest): RolesForUserRequest.AsObject;
  static serializeBinaryToWriter(message: RolesForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RolesForUserRequest;
  static deserializeBinaryFromReader(message: RolesForUserRequest, reader: jspb.BinaryReader): RolesForUserRequest;
}

export namespace RolesForUserRequest {
  export type AsObject = {
    user: number,
    rolesList: Array<string>,
  }
}

export class Resource extends jspb.Message {
  getType(): string;
  setType(value: string): Resource;

  getId(): string;
  setId(value: string): Resource;
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
    id?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 2,
  }
}

export class Permission extends jspb.Message {
  getObject(): Resource | undefined;
  setObject(value?: Resource): Permission;
  hasObject(): boolean;
  clearObject(): Permission;

  getAction(): string;
  setAction(value: string): Permission;

  getUser(): number;
  setUser(value: number): Permission;

  getRole(): string;
  setRole(value: string): Permission;

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
    object?: Resource.AsObject,
    action: string,
    user: number,
    role: string,
  }

  export enum SubjectCase { 
    SUBJECT_NOT_SET = 0,
    USER = 11,
    ROLE = 12,
  }
}

export class PermissionsResponse extends jspb.Message {
  getItemsList(): Array<Permission>;
  setItemsList(value: Array<Permission>): PermissionsResponse;
  clearItemsList(): PermissionsResponse;
  addItems(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionsResponse): PermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: PermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionsResponse;
  static deserializeBinaryFromReader(message: PermissionsResponse, reader: jspb.BinaryReader): PermissionsResponse;
}

export namespace PermissionsResponse {
  export type AsObject = {
    itemsList: Array<Permission.AsObject>,
  }
}

export class PermissionsForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): PermissionsForUserRequest;

  getItemsList(): Array<Permission>;
  setItemsList(value: Array<Permission>): PermissionsForUserRequest;
  clearItemsList(): PermissionsForUserRequest;
  addItems(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionsForUserRequest): PermissionsForUserRequest.AsObject;
  static serializeBinaryToWriter(message: PermissionsForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionsForUserRequest;
  static deserializeBinaryFromReader(message: PermissionsForUserRequest, reader: jspb.BinaryReader): PermissionsForUserRequest;
}

export namespace PermissionsForUserRequest {
  export type AsObject = {
    user: number,
    itemsList: Array<Permission.AsObject>,
  }
}

export class PermissionsForRoleRequest extends jspb.Message {
  getRole(): string;
  setRole(value: string): PermissionsForRoleRequest;

  getItemsList(): Array<Permission>;
  setItemsList(value: Array<Permission>): PermissionsForRoleRequest;
  clearItemsList(): PermissionsForRoleRequest;
  addItems(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionsForRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionsForRoleRequest): PermissionsForRoleRequest.AsObject;
  static serializeBinaryToWriter(message: PermissionsForRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionsForRoleRequest;
  static deserializeBinaryFromReader(message: PermissionsForRoleRequest, reader: jspb.BinaryReader): PermissionsForRoleRequest;
}

export namespace PermissionsForRoleRequest {
  export type AsObject = {
    role: string,
    itemsList: Array<Permission.AsObject>,
  }
}

