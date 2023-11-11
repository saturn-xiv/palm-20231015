import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class CasbinSyncTask extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CasbinSyncTask.AsObject;
  static toObject(includeInstance: boolean, msg: CasbinSyncTask): CasbinSyncTask.AsObject;
  static serializeBinaryToWriter(message: CasbinSyncTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CasbinSyncTask;
  static deserializeBinaryFromReader(message: CasbinSyncTask, reader: jspb.BinaryReader): CasbinSyncTask;
}

export namespace CasbinSyncTask {
  export type AsObject = {
  }
}

export class UsersResponse extends jspb.Message {
  getItemsList(): Array<UsersResponse.Item>;
  setItemsList(value: Array<UsersResponse.Item>): UsersResponse;
  clearItemsList(): UsersResponse;
  addItems(value?: UsersResponse.Item, index?: number): UsersResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
  static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersResponse;
  static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
  export type AsObject = {
    itemsList: Array<UsersResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getNickname(): string;
    setNickname(value: string): Item;

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
      id: number,
      nickname: string,
      realName: string,
      email: string,
    }
  }

}

export class ResourcesResponse extends jspb.Message {
  getItemsList(): Array<ResourcesResponse.Item>;
  setItemsList(value: Array<ResourcesResponse.Item>): ResourcesResponse;
  clearItemsList(): ResourcesResponse;
  addItems(value?: ResourcesResponse.Item, index?: number): ResourcesResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourcesResponse): ResourcesResponse.AsObject;
  static serializeBinaryToWriter(message: ResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourcesResponse;
  static deserializeBinaryFromReader(message: ResourcesResponse, reader: jspb.BinaryReader): ResourcesResponse;
}

export namespace ResourcesResponse {
  export type AsObject = {
    itemsList: Array<ResourcesResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getType(): string;
    setType(value: string): Item;

    getId(): number;
    setId(value: number): Item;
    hasId(): boolean;
    clearId(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      type: string,
      id?: number,
    }

    export enum IdCase { 
      _ID_NOT_SET = 0,
      ID = 2,
    }
  }

}

export class OperationsResponse extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): OperationsResponse;
  clearItemsList(): OperationsResponse;
  addItems(value: string, index?: number): OperationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsResponse): OperationsResponse.AsObject;
  static serializeBinaryToWriter(message: OperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsResponse;
  static deserializeBinaryFromReader(message: OperationsResponse, reader: jspb.BinaryReader): OperationsResponse;
}

export namespace OperationsResponse {
  export type AsObject = {
    itemsList: Array<string>,
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

export class RoleRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): RoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleRequest): RoleRequest.AsObject;
  static serializeBinaryToWriter(message: RoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleRequest;
  static deserializeBinaryFromReader(message: RoleRequest, reader: jspb.BinaryReader): RoleRequest;
}

export namespace RoleRequest {
  export type AsObject = {
    code: string,
  }
}

export class UserRolesRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): UserRolesRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): UserRolesRequest;
  clearRolesList(): UserRolesRequest;
  addRoles(value: string, index?: number): UserRolesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRolesRequest): UserRolesRequest.AsObject;
  static serializeBinaryToWriter(message: UserRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRolesRequest;
  static deserializeBinaryFromReader(message: UserRolesRequest, reader: jspb.BinaryReader): UserRolesRequest;
}

export namespace UserRolesRequest {
  export type AsObject = {
    user: number,
    rolesList: Array<string>,
  }
}

export class UserPermissionsRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): UserPermissionsRequest;

  getPermissionsList(): Array<PermissionsResponse.Item>;
  setPermissionsList(value: Array<PermissionsResponse.Item>): UserPermissionsRequest;
  clearPermissionsList(): UserPermissionsRequest;
  addPermissions(value?: PermissionsResponse.Item, index?: number): PermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserPermissionsRequest): UserPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: UserPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPermissionsRequest;
  static deserializeBinaryFromReader(message: UserPermissionsRequest, reader: jspb.BinaryReader): UserPermissionsRequest;
}

export namespace UserPermissionsRequest {
  export type AsObject = {
    user: number,
    permissionsList: Array<PermissionsResponse.Item.AsObject>,
  }
}

export class RolePermissionsRequest extends jspb.Message {
  getRole(): string;
  setRole(value: string): RolePermissionsRequest;

  getPermissionsList(): Array<PermissionsResponse.Item>;
  setPermissionsList(value: Array<PermissionsResponse.Item>): RolePermissionsRequest;
  clearPermissionsList(): RolePermissionsRequest;
  addPermissions(value?: PermissionsResponse.Item, index?: number): PermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RolePermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RolePermissionsRequest): RolePermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: RolePermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RolePermissionsRequest;
  static deserializeBinaryFromReader(message: RolePermissionsRequest, reader: jspb.BinaryReader): RolePermissionsRequest;
}

export namespace RolePermissionsRequest {
  export type AsObject = {
    role: string,
    permissionsList: Array<PermissionsResponse.Item.AsObject>,
  }
}

export class PermissionsResponse extends jspb.Message {
  getItemsList(): Array<PermissionsResponse.Item>;
  setItemsList(value: Array<PermissionsResponse.Item>): PermissionsResponse;
  clearItemsList(): PermissionsResponse;
  addItems(value?: PermissionsResponse.Item, index?: number): PermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionsResponse): PermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: PermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionsResponse;
  static deserializeBinaryFromReader(message: PermissionsResponse, reader: jspb.BinaryReader): PermissionsResponse;
}

export namespace PermissionsResponse {
  export type AsObject = {
    itemsList: Array<PermissionsResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getOperation(): string;
    setOperation(value: string): Item;

    getResource(): ResourcesResponse.Item | undefined;
    setResource(value?: ResourcesResponse.Item): Item;
    hasResource(): boolean;
    clearResource(): Item;

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
      resource?: ResourcesResponse.Item.AsObject,
    }
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

  getOperation(): string;
  setOperation(value: string): HasPermissionForUserRequest;

  getResource(): ResourcesResponse.Item | undefined;
  setResource(value?: ResourcesResponse.Item): HasPermissionForUserRequest;
  hasResource(): boolean;
  clearResource(): HasPermissionForUserRequest;

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
    operation: string,
    resource?: ResourcesResponse.Item.AsObject,
  }
}

export class UpdatePermissionsForUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): UpdatePermissionsForUserRequest;

  getRemovedList(): Array<PermissionsResponse.Item>;
  setRemovedList(value: Array<PermissionsResponse.Item>): UpdatePermissionsForUserRequest;
  clearRemovedList(): UpdatePermissionsForUserRequest;
  addRemoved(value?: PermissionsResponse.Item, index?: number): PermissionsResponse.Item;

  getSavedList(): Array<PermissionsResponse.Item>;
  setSavedList(value: Array<PermissionsResponse.Item>): UpdatePermissionsForUserRequest;
  clearSavedList(): UpdatePermissionsForUserRequest;
  addSaved(value?: PermissionsResponse.Item, index?: number): PermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePermissionsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePermissionsForUserRequest): UpdatePermissionsForUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePermissionsForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePermissionsForUserRequest;
  static deserializeBinaryFromReader(message: UpdatePermissionsForUserRequest, reader: jspb.BinaryReader): UpdatePermissionsForUserRequest;
}

export namespace UpdatePermissionsForUserRequest {
  export type AsObject = {
    user: number,
    removedList: Array<PermissionsResponse.Item.AsObject>,
    savedList: Array<PermissionsResponse.Item.AsObject>,
  }
}

export class UpdatePermissionsForRoleRequest extends jspb.Message {
  getRole(): string;
  setRole(value: string): UpdatePermissionsForRoleRequest;

  getRemovedList(): Array<PermissionsResponse.Item>;
  setRemovedList(value: Array<PermissionsResponse.Item>): UpdatePermissionsForRoleRequest;
  clearRemovedList(): UpdatePermissionsForRoleRequest;
  addRemoved(value?: PermissionsResponse.Item, index?: number): PermissionsResponse.Item;

  getSavedList(): Array<PermissionsResponse.Item>;
  setSavedList(value: Array<PermissionsResponse.Item>): UpdatePermissionsForRoleRequest;
  clearSavedList(): UpdatePermissionsForRoleRequest;
  addSaved(value?: PermissionsResponse.Item, index?: number): PermissionsResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePermissionsForRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePermissionsForRoleRequest): UpdatePermissionsForRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePermissionsForRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePermissionsForRoleRequest;
  static deserializeBinaryFromReader(message: UpdatePermissionsForRoleRequest, reader: jspb.BinaryReader): UpdatePermissionsForRoleRequest;
}

export namespace UpdatePermissionsForRoleRequest {
  export type AsObject = {
    role: string,
    removedList: Array<PermissionsResponse.Item.AsObject>,
    savedList: Array<PermissionsResponse.Item.AsObject>,
  }
}

export class RulesResponse extends jspb.Message {
  getItemsList(): Array<RulesResponse.Item>;
  setItemsList(value: Array<RulesResponse.Item>): RulesResponse;
  clearItemsList(): RulesResponse;
  addItems(value?: RulesResponse.Item, index?: number): RulesResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RulesResponse): RulesResponse.AsObject;
  static serializeBinaryToWriter(message: RulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RulesResponse;
  static deserializeBinaryFromReader(message: RulesResponse, reader: jspb.BinaryReader): RulesResponse;
}

export namespace RulesResponse {
  export type AsObject = {
    itemsList: Array<RulesResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getPtype(): string;
    setPtype(value: string): Item;

    getV0(): string;
    setV0(value: string): Item;

    getV1(): string;
    setV1(value: string): Item;

    getV2(): string;
    setV2(value: string): Item;

    getV3(): string;
    setV3(value: string): Item;

    getV4(): string;
    setV4(value: string): Item;

    getV5(): string;
    setV5(value: string): Item;

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
      ptype: string,
      v0: string,
      v1: string,
      v2: string,
      v3: string,
      v4: string,
      v5: string,
    }
  }

}

