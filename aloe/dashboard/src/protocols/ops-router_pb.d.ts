import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class Rule extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
  }
}

export class Contact extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contact.AsObject;
  static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
  static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contact;
  static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
  export type AsObject = {
  }
}

export class Host extends jspb.Message {
  getName(): string;
  setName(value: string): Host;

  getIp(): string;
  setIp(value: string): Host;

  getMac(): string;
  setMac(value: string): Host;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Host.AsObject;
  static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
  static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Host;
  static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
  export type AsObject = {
    name: string,
    ip: string,
    mac: string,
  }
}

export class Input extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Input;

  getProtocol(): Protocol;
  setProtocol(value: Protocol): Input;

  getPort(): number;
  setPort(value: number): Input;
  hasPort(): boolean;
  clearPort(): Input;

  getSource(): string;
  setSource(value: string): Input;
  hasSource(): boolean;
  clearSource(): Input;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    device: string,
    protocol: Protocol,
    port?: number,
    source?: string,
  }

  export enum PortCase { 
    _PORT_NOT_SET = 0,
    PORT = 3,
  }

  export enum SourceCase { 
    _SOURCE_NOT_SET = 0,
    SOURCE = 4,
  }
}

export class Output extends jspb.Message {
  getIp(): string;
  setIp(value: string): Output;

  getDomain(): string;
  setDomain(value: string): Output;

  getProtocol(): Protocol;
  setProtocol(value: Protocol): Output;
  hasProtocol(): boolean;
  clearProtocol(): Output;

  getPort(): number;
  setPort(value: number): Output;
  hasPort(): boolean;
  clearPort(): Output;

  getDestinationCase(): Output.DestinationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Output.AsObject;
  static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
  static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Output;
  static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
  export type AsObject = {
    ip: string,
    domain: string,
    protocol?: Protocol,
    port?: number,
  }

  export enum DestinationCase { 
    DESTINATION_NOT_SET = 0,
    IP = 1,
    DOMAIN = 2,
  }

  export enum ProtocolCase { 
    _PROTOCOL_NOT_SET = 0,
    PROTOCOL = 11,
  }

  export enum PortCase { 
    _PORT_NOT_SET = 0,
    PORT = 12,
  }
}

export class Nat extends jspb.Message {
  getWan(): Nat.Wan | undefined;
  setWan(value?: Nat.Wan): Nat;
  hasWan(): boolean;
  clearWan(): Nat;

  getProtocol(): Protocol;
  setProtocol(value: Protocol): Nat;

  getLan(): Nat.Lan | undefined;
  setLan(value?: Nat.Lan): Nat;
  hasLan(): boolean;
  clearLan(): Nat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nat.AsObject;
  static toObject(includeInstance: boolean, msg: Nat): Nat.AsObject;
  static serializeBinaryToWriter(message: Nat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nat;
  static deserializeBinaryFromReader(message: Nat, reader: jspb.BinaryReader): Nat;
}

export namespace Nat {
  export type AsObject = {
    wan?: Nat.Wan.AsObject,
    protocol: Protocol,
    lan?: Nat.Lan.AsObject,
  }

  export class Wan extends jspb.Message {
    getDevice(): string;
    setDevice(value: string): Wan;

    getPort(): number;
    setPort(value: number): Wan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wan.AsObject;
    static toObject(includeInstance: boolean, msg: Wan): Wan.AsObject;
    static serializeBinaryToWriter(message: Wan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wan;
    static deserializeBinaryFromReader(message: Wan, reader: jspb.BinaryReader): Wan;
  }

  export namespace Wan {
    export type AsObject = {
      device: string,
      port: number,
    }
  }


  export class Lan extends jspb.Message {
    getIp(): string;
    setIp(value: string): Lan;

    getPort(): number;
    setPort(value: number): Lan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Lan.AsObject;
    static toObject(includeInstance: boolean, msg: Lan): Lan.AsObject;
    static serializeBinaryToWriter(message: Lan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Lan;
    static deserializeBinaryFromReader(message: Lan, reader: jspb.BinaryReader): Lan;
  }

  export namespace Lan {
    export type AsObject = {
      ip: string,
      port: number,
    }
  }

}

export class RouterStatusResponse extends jspb.Message {
  getWanList(): Array<Wan>;
  setWanList(value: Array<Wan>): RouterStatusResponse;
  clearWanList(): RouterStatusResponse;
  addWan(value?: Wan, index?: number): Wan;

  getLan(): Lan | undefined;
  setLan(value?: Lan): RouterStatusResponse;
  hasLan(): boolean;
  clearLan(): RouterStatusResponse;

  getHostsList(): Array<Host>;
  setHostsList(value: Array<Host>): RouterStatusResponse;
  clearHostsList(): RouterStatusResponse;
  addHosts(value?: Host, index?: number): Host;

  getRules(): string;
  setRules(value: string): RouterStatusResponse;

  getBootedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBootedAt(value?: google_protobuf_timestamp_pb.Timestamp): RouterStatusResponse;
  hasBootedAt(): boolean;
  clearBootedAt(): RouterStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RouterStatusResponse): RouterStatusResponse.AsObject;
  static serializeBinaryToWriter(message: RouterStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterStatusResponse;
  static deserializeBinaryFromReader(message: RouterStatusResponse, reader: jspb.BinaryReader): RouterStatusResponse;
}

export namespace RouterStatusResponse {
  export type AsObject = {
    wanList: Array<Wan.AsObject>,
    lan?: Lan.AsObject,
    hostsList: Array<Host.AsObject>,
    rules: string,
    bootedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ScanTask extends jspb.Message {
  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): ScanTask;
  hasTtl(): boolean;
  clearTtl(): ScanTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanTask.AsObject;
  static toObject(includeInstance: boolean, msg: ScanTask): ScanTask.AsObject;
  static serializeBinaryToWriter(message: ScanTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanTask;
  static deserializeBinaryFromReader(message: ScanTask, reader: jspb.BinaryReader): ScanTask;
}

export namespace ScanTask {
  export type AsObject = {
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Dhcp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dhcp.AsObject;
  static toObject(includeInstance: boolean, msg: Dhcp): Dhcp.AsObject;
  static serializeBinaryToWriter(message: Dhcp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dhcp;
  static deserializeBinaryFromReader(message: Dhcp, reader: jspb.BinaryReader): Dhcp;
}

export namespace Dhcp {
  export type AsObject = {
  }
}

export class Static extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): Static;

  getNetmask(): string;
  setNetmask(value: string): Static;

  getGateway(): string;
  setGateway(value: string): Static;

  getDns1(): string;
  setDns1(value: string): Static;

  getDns2(): string;
  setDns2(value: string): Static;
  hasDns2(): boolean;
  clearDns2(): Static;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Static.AsObject;
  static toObject(includeInstance: boolean, msg: Static): Static.AsObject;
  static serializeBinaryToWriter(message: Static, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Static;
  static deserializeBinaryFromReader(message: Static, reader: jspb.BinaryReader): Static;
}

export namespace Static {
  export type AsObject = {
    address: string,
    netmask: string,
    gateway: string,
    dns1: string,
    dns2?: string,
  }

  export enum Dns2Case { 
    _DNS2_NOT_SET = 0,
    DNS2 = 5,
  }
}

export class Wan extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Wan;

  getDhcp(): Dhcp | undefined;
  setDhcp(value?: Dhcp): Wan;
  hasDhcp(): boolean;
  clearDhcp(): Wan;

  getStatic(): Static | undefined;
  setStatic(value?: Static): Wan;
  hasStatic(): boolean;
  clearStatic(): Wan;

  getIpCase(): Wan.IpCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wan.AsObject;
  static toObject(includeInstance: boolean, msg: Wan): Wan.AsObject;
  static serializeBinaryToWriter(message: Wan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wan;
  static deserializeBinaryFromReader(message: Wan, reader: jspb.BinaryReader): Wan;
}

export namespace Wan {
  export type AsObject = {
    device: string,
    dhcp?: Dhcp.AsObject,
    pb_static?: Static.AsObject,
  }

  export enum IpCase { 
    IP_NOT_SET = 0,
    DHCP = 11,
    STATIC = 12,
  }
}

export class Bound extends jspb.Message {
  getDevicesList(): Array<string>;
  setDevicesList(value: Array<string>): Bound;
  clearDevicesList(): Bound;
  addDevices(value: string, index?: number): Bound;

  getAddress(): string;
  setAddress(value: string): Bound;

  getNetmask(): string;
  setNetmask(value: string): Bound;

  getGateway(): string;
  setGateway(value: string): Bound;

  getMiimon(): number;
  setMiimon(value: number): Bound;
  hasMiimon(): boolean;
  clearMiimon(): Bound;

  getMode(): number;
  setMode(value: number): Bound;
  hasMode(): boolean;
  clearMode(): Bound;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bound.AsObject;
  static toObject(includeInstance: boolean, msg: Bound): Bound.AsObject;
  static serializeBinaryToWriter(message: Bound, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bound;
  static deserializeBinaryFromReader(message: Bound, reader: jspb.BinaryReader): Bound;
}

export namespace Bound {
  export type AsObject = {
    devicesList: Array<string>,
    address: string,
    netmask: string,
    gateway: string,
    miimon?: number,
    mode?: number,
  }

  export enum MiimonCase { 
    _MIIMON_NOT_SET = 0,
    MIIMON = 41,
  }

  export enum ModeCase { 
    _MODE_NOT_SET = 0,
    MODE = 42,
  }
}

export class Lan extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Lan;

  getString(): string;
  setString(value: string): Lan;

  getNetmask(): string;
  setNetmask(value: string): Lan;

  getDhcp(): Lan.Dhcp | undefined;
  setDhcp(value?: Lan.Dhcp): Lan;
  hasDhcp(): boolean;
  clearDhcp(): Lan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lan.AsObject;
  static toObject(includeInstance: boolean, msg: Lan): Lan.AsObject;
  static serializeBinaryToWriter(message: Lan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lan;
  static deserializeBinaryFromReader(message: Lan, reader: jspb.BinaryReader): Lan;
}

export namespace Lan {
  export type AsObject = {
    device: string,
    string: string,
    netmask: string,
    dhcp?: Lan.Dhcp.AsObject,
  }

  export class Dhcp extends jspb.Message {
    getFrom(): string;
    setFrom(value: string): Dhcp;

    getTo(): string;
    setTo(value: string): Dhcp;

    getDns1(): string;
    setDns1(value: string): Dhcp;

    getDns2(): string;
    setDns2(value: string): Dhcp;
    hasDns2(): boolean;
    clearDns2(): Dhcp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dhcp.AsObject;
    static toObject(includeInstance: boolean, msg: Dhcp): Dhcp.AsObject;
    static serializeBinaryToWriter(message: Dhcp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dhcp;
    static deserializeBinaryFromReader(message: Dhcp, reader: jspb.BinaryReader): Dhcp;
  }

  export namespace Dhcp {
    export type AsObject = {
      from: string,
      to: string,
      dns1: string,
      dns2?: string,
    }

    export enum Dns2Case { 
      _DNS2_NOT_SET = 0,
      DNS2 = 4,
    }
  }

}

export class UserProfile extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): UserProfile;

  getPassword(): string;
  setPassword(value: string): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    nickname: string,
    password: string,
  }
}

export class UserSignInRequest extends jspb.Message {
  getUser(): UserProfile | undefined;
  setUser(value?: UserProfile): UserSignInRequest;
  hasUser(): boolean;
  clearUser(): UserSignInRequest;

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
    user?: UserProfile.AsObject,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class UserSignInResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserSignInResponse;

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
  }
}

export class UserUpdateRequest extends jspb.Message {
  getCurrent(): UserProfile | undefined;
  setCurrent(value?: UserProfile): UserUpdateRequest;
  hasCurrent(): boolean;
  clearCurrent(): UserUpdateRequest;

  getNew(): UserProfile | undefined;
  setNew(value?: UserProfile): UserUpdateRequest;
  hasNew(): boolean;
  clearNew(): UserUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdateRequest): UserUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UserUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdateRequest;
  static deserializeBinaryFromReader(message: UserUpdateRequest, reader: jspb.BinaryReader): UserUpdateRequest;
}

export namespace UserUpdateRequest {
  export type AsObject = {
    current?: UserProfile.AsObject,
    pb_new?: UserProfile.AsObject,
  }
}

export class UserLogsResponse extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): UserLogsResponse;
  clearItemsList(): UserLogsResponse;
  addItems(value: string, index?: number): UserLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogsResponse): UserLogsResponse.AsObject;
  static serializeBinaryToWriter(message: UserLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogsResponse;
  static deserializeBinaryFromReader(message: UserLogsResponse, reader: jspb.BinaryReader): UserLogsResponse;
}

export namespace UserLogsResponse {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export enum Protocol { 
  ICMP = 0,
  TCP = 1,
  UDP = 2,
}
