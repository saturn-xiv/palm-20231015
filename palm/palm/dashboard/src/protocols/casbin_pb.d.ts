import * as jspb from 'google-protobuf'



export class NewEnforcerRequest extends jspb.Message {
  getModeltext(): string;
  setModeltext(value: string): NewEnforcerRequest;

  getAdapterhandle(): number;
  setAdapterhandle(value: number): NewEnforcerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewEnforcerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewEnforcerRequest): NewEnforcerRequest.AsObject;
  static serializeBinaryToWriter(message: NewEnforcerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewEnforcerRequest;
  static deserializeBinaryFromReader(message: NewEnforcerRequest, reader: jspb.BinaryReader): NewEnforcerRequest;
}

export namespace NewEnforcerRequest {
  export type AsObject = {
    modeltext: string,
    adapterhandle: number,
  }
}

export class NewEnforcerReply extends jspb.Message {
  getHandler(): number;
  setHandler(value: number): NewEnforcerReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewEnforcerReply.AsObject;
  static toObject(includeInstance: boolean, msg: NewEnforcerReply): NewEnforcerReply.AsObject;
  static serializeBinaryToWriter(message: NewEnforcerReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewEnforcerReply;
  static deserializeBinaryFromReader(message: NewEnforcerReply, reader: jspb.BinaryReader): NewEnforcerReply;
}

export namespace NewEnforcerReply {
  export type AsObject = {
    handler: number,
  }
}

export class NewAdapterRequest extends jspb.Message {
  getAdaptername(): string;
  setAdaptername(value: string): NewAdapterRequest;

  getDrivername(): string;
  setDrivername(value: string): NewAdapterRequest;

  getConnectstring(): string;
  setConnectstring(value: string): NewAdapterRequest;

  getDbspecified(): boolean;
  setDbspecified(value: boolean): NewAdapterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewAdapterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewAdapterRequest): NewAdapterRequest.AsObject;
  static serializeBinaryToWriter(message: NewAdapterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewAdapterRequest;
  static deserializeBinaryFromReader(message: NewAdapterRequest, reader: jspb.BinaryReader): NewAdapterRequest;
}

export namespace NewAdapterRequest {
  export type AsObject = {
    adaptername: string,
    drivername: string,
    connectstring: string,
    dbspecified: boolean,
  }
}

export class NewAdapterReply extends jspb.Message {
  getHandler(): number;
  setHandler(value: number): NewAdapterReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewAdapterReply.AsObject;
  static toObject(includeInstance: boolean, msg: NewAdapterReply): NewAdapterReply.AsObject;
  static serializeBinaryToWriter(message: NewAdapterReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewAdapterReply;
  static deserializeBinaryFromReader(message: NewAdapterReply, reader: jspb.BinaryReader): NewAdapterReply;
}

export namespace NewAdapterReply {
  export type AsObject = {
    handler: number,
  }
}

export class EnforceRequest extends jspb.Message {
  getEnforcerhandler(): number;
  setEnforcerhandler(value: number): EnforceRequest;

  getParamsList(): Array<string>;
  setParamsList(value: Array<string>): EnforceRequest;
  clearParamsList(): EnforceRequest;
  addParams(value: string, index?: number): EnforceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnforceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnforceRequest): EnforceRequest.AsObject;
  static serializeBinaryToWriter(message: EnforceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnforceRequest;
  static deserializeBinaryFromReader(message: EnforceRequest, reader: jspb.BinaryReader): EnforceRequest;
}

export namespace EnforceRequest {
  export type AsObject = {
    enforcerhandler: number,
    paramsList: Array<string>,
  }
}

export class BoolReply extends jspb.Message {
  getRes(): boolean;
  setRes(value: boolean): BoolReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolReply.AsObject;
  static toObject(includeInstance: boolean, msg: BoolReply): BoolReply.AsObject;
  static serializeBinaryToWriter(message: BoolReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolReply;
  static deserializeBinaryFromReader(message: BoolReply, reader: jspb.BinaryReader): BoolReply;
}

export namespace BoolReply {
  export type AsObject = {
    res: boolean,
  }
}

export class EmptyRequest extends jspb.Message {
  getHandler(): number;
  setHandler(value: number): EmptyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
    handler: number,
  }
}

export class EmptyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyReply.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyReply): EmptyReply.AsObject;
  static serializeBinaryToWriter(message: EmptyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyReply;
  static deserializeBinaryFromReader(message: EmptyReply, reader: jspb.BinaryReader): EmptyReply;
}

export namespace EmptyReply {
  export type AsObject = {
  }
}

export class PolicyRequest extends jspb.Message {
  getEnforcerhandler(): number;
  setEnforcerhandler(value: number): PolicyRequest;

  getPtype(): string;
  setPtype(value: string): PolicyRequest;

  getParamsList(): Array<string>;
  setParamsList(value: Array<string>): PolicyRequest;
  clearParamsList(): PolicyRequest;
  addParams(value: string, index?: number): PolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRequest): PolicyRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRequest;
  static deserializeBinaryFromReader(message: PolicyRequest, reader: jspb.BinaryReader): PolicyRequest;
}

export namespace PolicyRequest {
  export type AsObject = {
    enforcerhandler: number,
    ptype: string,
    paramsList: Array<string>,
  }
}

export class SimpleGetRequest extends jspb.Message {
  getEnforcerhandler(): number;
  setEnforcerhandler(value: number): SimpleGetRequest;

  getPtype(): string;
  setPtype(value: string): SimpleGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleGetRequest): SimpleGetRequest.AsObject;
  static serializeBinaryToWriter(message: SimpleGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleGetRequest;
  static deserializeBinaryFromReader(message: SimpleGetRequest, reader: jspb.BinaryReader): SimpleGetRequest;
}

export namespace SimpleGetRequest {
  export type AsObject = {
    enforcerhandler: number,
    ptype: string,
  }
}

export class ArrayReply extends jspb.Message {
  getArrayList(): Array<string>;
  setArrayList(value: Array<string>): ArrayReply;
  clearArrayList(): ArrayReply;
  addArray(value: string, index?: number): ArrayReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayReply.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayReply): ArrayReply.AsObject;
  static serializeBinaryToWriter(message: ArrayReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayReply;
  static deserializeBinaryFromReader(message: ArrayReply, reader: jspb.BinaryReader): ArrayReply;
}

export namespace ArrayReply {
  export type AsObject = {
    arrayList: Array<string>,
  }
}

export class FilteredPolicyRequest extends jspb.Message {
  getEnforcerhandler(): number;
  setEnforcerhandler(value: number): FilteredPolicyRequest;

  getPtype(): string;
  setPtype(value: string): FilteredPolicyRequest;

  getFieldindex(): number;
  setFieldindex(value: number): FilteredPolicyRequest;

  getFieldvaluesList(): Array<string>;
  setFieldvaluesList(value: Array<string>): FilteredPolicyRequest;
  clearFieldvaluesList(): FilteredPolicyRequest;
  addFieldvalues(value: string, index?: number): FilteredPolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilteredPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilteredPolicyRequest): FilteredPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: FilteredPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilteredPolicyRequest;
  static deserializeBinaryFromReader(message: FilteredPolicyRequest, reader: jspb.BinaryReader): FilteredPolicyRequest;
}

export namespace FilteredPolicyRequest {
  export type AsObject = {
    enforcerhandler: number,
    ptype: string,
    fieldindex: number,
    fieldvaluesList: Array<string>,
  }
}

export class UserRoleRequest extends jspb.Message {
  getEnforcerhandler(): number;
  setEnforcerhandler(value: number): UserRoleRequest;

  getUser(): string;
  setUser(value: string): UserRoleRequest;

  getRole(): string;
  setRole(value: string): UserRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleRequest): UserRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UserRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleRequest;
  static deserializeBinaryFromReader(message: UserRoleRequest, reader: jspb.BinaryReader): UserRoleRequest;
}

export namespace UserRoleRequest {
  export type AsObject = {
    enforcerhandler: number,
    user: string,
    role: string,
  }
}

export class PermissionRequest extends jspb.Message {
  getEnforcerhandler(): number;
  setEnforcerhandler(value: number): PermissionRequest;

  getUser(): string;
  setUser(value: string): PermissionRequest;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): PermissionRequest;
  clearPermissionsList(): PermissionRequest;
  addPermissions(value: string, index?: number): PermissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionRequest): PermissionRequest.AsObject;
  static serializeBinaryToWriter(message: PermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionRequest;
  static deserializeBinaryFromReader(message: PermissionRequest, reader: jspb.BinaryReader): PermissionRequest;
}

export namespace PermissionRequest {
  export type AsObject = {
    enforcerhandler: number,
    user: string,
    permissionsList: Array<string>,
  }
}

export class Array2DReply extends jspb.Message {
  getD2List(): Array<Array2DReply.d>;
  setD2List(value: Array<Array2DReply.d>): Array2DReply;
  clearD2List(): Array2DReply;
  addD2(value?: Array2DReply.d, index?: number): Array2DReply.d;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Array2DReply.AsObject;
  static toObject(includeInstance: boolean, msg: Array2DReply): Array2DReply.AsObject;
  static serializeBinaryToWriter(message: Array2DReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Array2DReply;
  static deserializeBinaryFromReader(message: Array2DReply, reader: jspb.BinaryReader): Array2DReply;
}

export namespace Array2DReply {
  export type AsObject = {
    d2List: Array<Array2DReply.d.AsObject>,
  }

  export class d extends jspb.Message {
    getD1List(): Array<string>;
    setD1List(value: Array<string>): d;
    clearD1List(): d;
    addD1(value: string, index?: number): d;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): d.AsObject;
    static toObject(includeInstance: boolean, msg: d): d.AsObject;
    static serializeBinaryToWriter(message: d, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): d;
    static deserializeBinaryFromReader(message: d, reader: jspb.BinaryReader): d;
  }

  export namespace d {
    export type AsObject = {
      d1List: Array<string>,
    }
  }

}

