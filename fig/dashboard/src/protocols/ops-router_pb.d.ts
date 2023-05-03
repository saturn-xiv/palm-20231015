import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Administrator extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): Administrator;

  getPassword(): string;
  setPassword(value: string): Administrator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Administrator.AsObject;
  static toObject(includeInstance: boolean, msg: Administrator): Administrator.AsObject;
  static serializeBinaryToWriter(message: Administrator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Administrator;
  static deserializeBinaryFromReader(message: Administrator, reader: jspb.BinaryReader): Administrator;
}

export namespace Administrator {
  export type AsObject = {
    nickname: string,
    password: string,
  }
}

export class Log extends jspb.Message {
  getIp(): string;
  setIp(value: string): Log;

  getLevel(): Log.Level;
  setLevel(value: Log.Level): Log;

  getMessage(): string;
  setMessage(value: string): Log;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Log;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Log;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    ip: string,
    level: Log.Level,
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

export class Wan extends jspb.Message {
  getDhcp(): Wan.Dhcp | undefined;
  setDhcp(value?: Wan.Dhcp): Wan;
  hasDhcp(): boolean;
  clearDhcp(): Wan;

  getStatic(): Wan.Static | undefined;
  setStatic(value?: Wan.Static): Wan;
  hasStatic(): boolean;
  clearStatic(): Wan;

  getRouteMetric(): number;
  setRouteMetric(value: number): Wan;

  getV6(): boolean;
  setV6(value: boolean): Wan;

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
    dhcp?: Wan.Dhcp.AsObject,
    pb_static?: Wan.Static.AsObject,
    routeMetric: number,
    v6: boolean,
  }

  export class Static extends jspb.Message {
    getIpAddress(): string;
    setIpAddress(value: string): Static;

    getSubnetPrefixLength(): number;
    setSubnetPrefixLength(value: number): Static;

    getGateway(): string;
    setGateway(value: string): Static;

    getPreferredDns(): string;
    setPreferredDns(value: string): Static;

    getAlternateDns(): string;
    setAlternateDns(value: string): Static;
    hasAlternateDns(): boolean;
    clearAlternateDns(): Static;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Static.AsObject;
    static toObject(includeInstance: boolean, msg: Static): Static.AsObject;
    static serializeBinaryToWriter(message: Static, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Static;
    static deserializeBinaryFromReader(message: Static, reader: jspb.BinaryReader): Static;
  }

  export namespace Static {
    export type AsObject = {
      ipAddress: string,
      subnetPrefixLength: number,
      gateway: string,
      preferredDns: string,
      alternateDns?: string,
    }

    export enum AlternateDnsCase { 
      _ALTERNATE_DNS_NOT_SET = 0,
      ALTERNATE_DNS = 5,
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


  export enum IpCase { 
    IP_NOT_SET = 0,
    DHCP = 1,
    STATIC = 2,
  }
}

export class Dhcpd extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Dhcpd;

  getAddress(): string;
  setAddress(value: string): Dhcpd;

  getNetmask(): string;
  setNetmask(value: string): Dhcpd;

  getV6(): boolean;
  setV6(value: boolean): Dhcpd;

  getStartAddr(): string;
  setStartAddr(value: string): Dhcpd;

  getEndAddr(): string;
  setEndAddr(value: string): Dhcpd;

  getHostsMap(): jspb.Map<string, string>;
  clearHostsMap(): Dhcpd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dhcpd.AsObject;
  static toObject(includeInstance: boolean, msg: Dhcpd): Dhcpd.AsObject;
  static serializeBinaryToWriter(message: Dhcpd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dhcpd;
  static deserializeBinaryFromReader(message: Dhcpd, reader: jspb.BinaryReader): Dhcpd;
}

export namespace Dhcpd {
  export type AsObject = {
    device: string,
    address: string,
    netmask: string,
    v6: boolean,
    startAddr: string,
    endAddr: string,
    hostsMap: Array<[string, string]>,
  }
}

export class Dns extends jspb.Message {
  getServersList(): Array<string>;
  setServersList(value: Array<string>): Dns;
  clearServersList(): Dns;
  addServers(value: string, index?: number): Dns;

  getSec(): boolean;
  setSec(value: boolean): Dns;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dns.AsObject;
  static toObject(includeInstance: boolean, msg: Dns): Dns.AsObject;
  static serializeBinaryToWriter(message: Dns, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dns;
  static deserializeBinaryFromReader(message: Dns, reader: jspb.BinaryReader): Dns;
}

export namespace Dns {
  export type AsObject = {
    serversList: Array<string>,
    sec: boolean,
  }
}

export class Profile extends jspb.Message {
  getAdministrator(): Administrator | undefined;
  setAdministrator(value?: Administrator): Profile;
  hasAdministrator(): boolean;
  clearAdministrator(): Profile;

  getWanMap(): jspb.Map<string, Wan>;
  clearWanMap(): Profile;

  getLan(): Dhcpd | undefined;
  setLan(value?: Dhcpd): Profile;
  hasLan(): boolean;
  clearLan(): Profile;

  getDmz(): Dhcpd | undefined;
  setDmz(value?: Dhcpd): Profile;
  hasDmz(): boolean;
  clearDmz(): Profile;

  getDns(): Dns | undefined;
  setDns(value?: Dns): Profile;
  hasDns(): boolean;
  clearDns(): Profile;

  getInList(): Array<Profile.In>;
  setInList(value: Array<Profile.In>): Profile;
  clearInList(): Profile;
  addIn(value?: Profile.In, index?: number): Profile.In;

  getOutList(): Array<Profile.Out>;
  setOutList(value: Array<Profile.Out>): Profile;
  clearOutList(): Profile;
  addOut(value?: Profile.Out, index?: number): Profile.Out;

  getNatList(): Array<Profile.Nat>;
  setNatList(value: Array<Profile.Nat>): Profile;
  clearNatList(): Profile;
  addNat(value?: Profile.Nat, index?: number): Profile.Nat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    administrator?: Administrator.AsObject,
    wanMap: Array<[string, Wan.AsObject]>,
    lan?: Dhcpd.AsObject,
    dmz?: Dhcpd.AsObject,
    dns?: Dns.AsObject,
    inList: Array<Profile.In.AsObject>,
    outList: Array<Profile.Out.AsObject>,
    natList: Array<Profile.Nat.AsObject>,
  }

  export class Nat extends jspb.Message {
    getSource(): Profile.Nat.Source | undefined;
    setSource(value?: Profile.Nat.Source): Nat;
    hasSource(): boolean;
    clearSource(): Nat;

    getDestination(): Profile.Nat.Destination | undefined;
    setDestination(value?: Profile.Nat.Destination): Nat;
    hasDestination(): boolean;
    clearDestination(): Nat;

    getTcp(): boolean;
    setTcp(value: boolean): Nat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nat.AsObject;
    static toObject(includeInstance: boolean, msg: Nat): Nat.AsObject;
    static serializeBinaryToWriter(message: Nat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nat;
    static deserializeBinaryFromReader(message: Nat, reader: jspb.BinaryReader): Nat;
  }

  export namespace Nat {
    export type AsObject = {
      source?: Profile.Nat.Source.AsObject,
      destination?: Profile.Nat.Destination.AsObject,
      tcp: boolean,
    }

    export class Source extends jspb.Message {
      getDevice(): string;
      setDevice(value: string): Source;

      getIp(): string;
      setIp(value: string): Source;

      getPort(): number;
      setPort(value: number): Source;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Source.AsObject;
      static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
      static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Source;
      static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
    }

    export namespace Source {
      export type AsObject = {
        device: string,
        ip: string,
        port: number,
      }
    }


    export class Destination extends jspb.Message {
      getDevice(): string;
      setDevice(value: string): Destination;

      getIp(): string;
      setIp(value: string): Destination;

      getPort(): number;
      setPort(value: number): Destination;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Destination.AsObject;
      static toObject(includeInstance: boolean, msg: Destination): Destination.AsObject;
      static serializeBinaryToWriter(message: Destination, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Destination;
      static deserializeBinaryFromReader(message: Destination, reader: jspb.BinaryReader): Destination;
    }

    export namespace Destination {
      export type AsObject = {
        device: string,
        ip: string,
        port: number,
      }
    }

  }


  export class In extends jspb.Message {
    getDevice(): string;
    setDevice(value: string): In;

    getSourceIp(): string;
    setSourceIp(value: string): In;
    hasSourceIp(): boolean;
    clearSourceIp(): In;

    getPort(): number;
    setPort(value: number): In;

    getTcp(): boolean;
    setTcp(value: boolean): In;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): In.AsObject;
    static toObject(includeInstance: boolean, msg: In): In.AsObject;
    static serializeBinaryToWriter(message: In, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): In;
    static deserializeBinaryFromReader(message: In, reader: jspb.BinaryReader): In;
  }

  export namespace In {
    export type AsObject = {
      device: string,
      sourceIp?: string,
      port: number,
      tcp: boolean,
    }

    export enum SourceIpCase { 
      _SOURCE_IP_NOT_SET = 0,
      SOURCE_IP = 2,
    }
  }


  export class Out extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Out.AsObject;
    static toObject(includeInstance: boolean, msg: Out): Out.AsObject;
    static serializeBinaryToWriter(message: Out, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Out;
    static deserializeBinaryFromReader(message: Out, reader: jspb.BinaryReader): Out;
  }

  export namespace Out {
    export type AsObject = {
    }
  }


  export enum DmzCase { 
    _DMZ_NOT_SET = 0,
    DMZ = 22,
  }
}

export class Status extends jspb.Message {
  getProfile(): Profile | undefined;
  setProfile(value?: Profile): Status;
  hasProfile(): boolean;
  clearProfile(): Status;

  getLogsList(): Array<Log>;
  setLogsList(value: Array<Log>): Status;
  clearLogsList(): Status;
  addLogs(value?: Log, index?: number): Log;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Status;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    profile?: Profile.AsObject,
    logsList: Array<Log.AsObject>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

