import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class Contact extends jspb.Message {
  getPhone(): string;
  setPhone(value: string): Contact;

  getWechat(): string;
  setWechat(value: string): Contact;

  getAddress(): string;
  setAddress(value: string): Contact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contact.AsObject;
  static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
  static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contact;
  static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
  export type AsObject = {
    phone: string,
    wechat: string,
    address: string,
  }
}

export class RouterBoundRequest extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): RouterBoundRequest;
  clearItemsList(): RouterBoundRequest;
  addItems(value: string, index?: number): RouterBoundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterBoundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouterBoundRequest): RouterBoundRequest.AsObject;
  static serializeBinaryToWriter(message: RouterBoundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterBoundRequest;
  static deserializeBinaryFromReader(message: RouterBoundRequest, reader: jspb.BinaryReader): RouterBoundRequest;
}

export namespace RouterBoundRequest {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class RouterCreateUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RouterCreateUserRequest;

  getContact(): Contact | undefined;
  setContact(value?: Contact): RouterCreateUserRequest;
  hasContact(): boolean;
  clearContact(): RouterCreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterCreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouterCreateUserRequest): RouterCreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: RouterCreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterCreateUserRequest;
  static deserializeBinaryFromReader(message: RouterCreateUserRequest, reader: jspb.BinaryReader): RouterCreateUserRequest;
}

export namespace RouterCreateUserRequest {
  export type AsObject = {
    name: string,
    contact?: Contact.AsObject,
  }
}

export class RouterIndexUserResponse extends jspb.Message {
  getItemsList(): Array<RouterIndexUserResponse.Item>;
  setItemsList(value: Array<RouterIndexUserResponse.Item>): RouterIndexUserResponse;
  clearItemsList(): RouterIndexUserResponse;
  addItems(value?: RouterIndexUserResponse.Item, index?: number): RouterIndexUserResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterIndexUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RouterIndexUserResponse): RouterIndexUserResponse.AsObject;
  static serializeBinaryToWriter(message: RouterIndexUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterIndexUserResponse;
  static deserializeBinaryFromReader(message: RouterIndexUserResponse, reader: jspb.BinaryReader): RouterIndexUserResponse;
}

export namespace RouterIndexUserResponse {
  export type AsObject = {
    itemsList: Array<RouterIndexUserResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getName(): string;
    setName(value: string): Item;

    getContact(): Contact | undefined;
    setContact(value?: Contact): Item;
    hasContact(): boolean;
    clearContact(): Item;

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
      name: string,
      contact?: Contact.AsObject,
    }
  }

}

export class RouterUpdateHostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RouterUpdateHostRequest;

  getUser(): number;
  setUser(value: number): RouterUpdateHostRequest;

  getGroup(): string;
  setGroup(value: string): RouterUpdateHostRequest;

  getIp(): string;
  setIp(value: string): RouterUpdateHostRequest;

  getFixed(): boolean;
  setFixed(value: boolean): RouterUpdateHostRequest;

  getZone(): string;
  setZone(value: string): RouterUpdateHostRequest;

  getLocation(): string;
  setLocation(value: string): RouterUpdateHostRequest;
  hasLocation(): boolean;
  clearLocation(): RouterUpdateHostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterUpdateHostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouterUpdateHostRequest): RouterUpdateHostRequest.AsObject;
  static serializeBinaryToWriter(message: RouterUpdateHostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterUpdateHostRequest;
  static deserializeBinaryFromReader(message: RouterUpdateHostRequest, reader: jspb.BinaryReader): RouterUpdateHostRequest;
}

export namespace RouterUpdateHostRequest {
  export type AsObject = {
    id: number,
    user: number,
    group: string,
    ip: string,
    fixed: boolean,
    zone: string,
    location?: string,
  }

  export enum LocationCase { 
    _LOCATION_NOT_SET = 0,
    LOCATION = 9,
  }
}

export class RouterIndexRuleResponse extends jspb.Message {
  getItemsList(): Array<RouterIndexRuleResponse.Item>;
  setItemsList(value: Array<RouterIndexRuleResponse.Item>): RouterIndexRuleResponse;
  clearItemsList(): RouterIndexRuleResponse;
  addItems(value?: RouterIndexRuleResponse.Item, index?: number): RouterIndexRuleResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterIndexRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RouterIndexRuleResponse): RouterIndexRuleResponse.AsObject;
  static serializeBinaryToWriter(message: RouterIndexRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterIndexRuleResponse;
  static deserializeBinaryFromReader(message: RouterIndexRuleResponse, reader: jspb.BinaryReader): RouterIndexRuleResponse;
}

export namespace RouterIndexRuleResponse {
  export type AsObject = {
    itemsList: Array<RouterIndexRuleResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getName(): string;
    setName(value: string): Item;

    getGroup(): string;
    setGroup(value: string): Item;

    getIn(): Rule.InBound | undefined;
    setIn(value?: Rule.InBound): Item;
    hasIn(): boolean;
    clearIn(): Item;

    getOut(): Rule.OutBound | undefined;
    setOut(value?: Rule.OutBound): Item;
    hasOut(): boolean;
    clearOut(): Item;

    getNat(): Rule.Nat | undefined;
    setNat(value?: Rule.Nat): Item;
    hasNat(): boolean;
    clearNat(): Item;

    getPayloadCase(): Item.PayloadCase;

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
      name: string,
      group: string,
      pb_in?: Rule.InBound.AsObject,
      out?: Rule.OutBound.AsObject,
      nat?: Rule.Nat.AsObject,
    }

    export enum PayloadCase { 
      PAYLOAD_NOT_SET = 0,
      IN = 11,
      OUT = 12,
      NAT = 13,
    }
  }

}

export class Host extends jspb.Message {
  getId(): number;
  setId(value: number): Host;

  getName(): string;
  setName(value: string): Host;

  getMac(): string;
  setMac(value: string): Host;

  getIp(): string;
  setIp(value: string): Host;

  getFixed(): boolean;
  setFixed(value: boolean): Host;

  getGroup(): string;
  setGroup(value: string): Host;

  getLocation(): string;
  setLocation(value: string): Host;
  hasLocation(): boolean;
  clearLocation(): Host;

  getOwner(): Host.Owner | undefined;
  setOwner(value?: Host.Owner): Host;
  hasOwner(): boolean;
  clearOwner(): Host;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Host.AsObject;
  static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
  static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Host;
  static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
  export type AsObject = {
    id: number,
    name: string,
    mac: string,
    ip: string,
    fixed: boolean,
    group: string,
    location?: string,
    owner?: Host.Owner.AsObject,
  }

  export class Owner extends jspb.Message {
    getName(): string;
    setName(value: string): Owner;

    getContact(): Contact | undefined;
    setContact(value?: Contact): Owner;
    hasContact(): boolean;
    clearContact(): Owner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Owner.AsObject;
    static toObject(includeInstance: boolean, msg: Owner): Owner.AsObject;
    static serializeBinaryToWriter(message: Owner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Owner;
    static deserializeBinaryFromReader(message: Owner, reader: jspb.BinaryReader): Owner;
  }

  export namespace Owner {
    export type AsObject = {
      name: string,
      contact?: Contact.AsObject,
    }
  }


  export enum LocationCase { 
    _LOCATION_NOT_SET = 0,
    LOCATION = 11,
  }
}

export class Rule extends jspb.Message {
  getName(): string;
  setName(value: string): Rule;

  getGroup(): string;
  setGroup(value: string): Rule;

  getIn(): Rule.InBound | undefined;
  setIn(value?: Rule.InBound): Rule;
  hasIn(): boolean;
  clearIn(): Rule;

  getOut(): Rule.OutBound | undefined;
  setOut(value?: Rule.OutBound): Rule;
  hasOut(): boolean;
  clearOut(): Rule;

  getNat(): Rule.Nat | undefined;
  setNat(value?: Rule.Nat): Rule;
  hasNat(): boolean;
  clearNat(): Rule;

  getPayloadCase(): Rule.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    name: string,
    group: string,
    pb_in?: Rule.InBound.AsObject,
    out?: Rule.OutBound.AsObject,
    nat?: Rule.Nat.AsObject,
  }

  export class InBound extends jspb.Message {
    getDevice(): string;
    setDevice(value: string): InBound;

    getTcp(): boolean;
    setTcp(value: boolean): InBound;

    getPort(): number;
    setPort(value: number): InBound;

    getSource(): string;
    setSource(value: string): InBound;
    hasSource(): boolean;
    clearSource(): InBound;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InBound.AsObject;
    static toObject(includeInstance: boolean, msg: InBound): InBound.AsObject;
    static serializeBinaryToWriter(message: InBound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InBound;
    static deserializeBinaryFromReader(message: InBound, reader: jspb.BinaryReader): InBound;
  }

  export namespace InBound {
    export type AsObject = {
      device: string,
      tcp: boolean,
      port: number,
      source?: string,
    }

    export enum SourceCase { 
      _SOURCE_NOT_SET = 0,
      SOURCE = 4,
    }
  }


  export class OutBound extends jspb.Message {
    getHost(): Rule.OutBound.Host | undefined;
    setHost(value?: Rule.OutBound.Host): OutBound;
    hasHost(): boolean;
    clearHost(): OutBound;

    getSpeed(): Rule.OutBound.Speed | undefined;
    setSpeed(value?: Rule.OutBound.Speed): OutBound;
    hasSpeed(): boolean;
    clearSpeed(): OutBound;

    getTime(): Rule.OutBound.Time | undefined;
    setTime(value?: Rule.OutBound.Time): OutBound;
    hasTime(): boolean;
    clearTime(): OutBound;

    getPayloadCase(): OutBound.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutBound.AsObject;
    static toObject(includeInstance: boolean, msg: OutBound): OutBound.AsObject;
    static serializeBinaryToWriter(message: OutBound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutBound;
    static deserializeBinaryFromReader(message: OutBound, reader: jspb.BinaryReader): OutBound;
  }

  export namespace OutBound {
    export type AsObject = {
      host?: Rule.OutBound.Host.AsObject,
      speed?: Rule.OutBound.Speed.AsObject,
      time?: Rule.OutBound.Time.AsObject,
    }

    export class Host extends jspb.Message {
      getTo(): string;
      setTo(value: string): Host;

      getProtocol(): Rule.Protocol;
      setProtocol(value: Rule.Protocol): Host;

      getPort(): number;
      setPort(value: number): Host;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Host.AsObject;
      static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
      static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Host;
      static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
    }

    export namespace Host {
      export type AsObject = {
        to: string,
        protocol: Rule.Protocol,
        port: number,
      }
    }


    export class Speed extends jspb.Message {
      getUp(): number;
      setUp(value: number): Speed;
      hasUp(): boolean;
      clearUp(): Speed;

      getDown(): number;
      setDown(value: number): Speed;
      hasDown(): boolean;
      clearDown(): Speed;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Speed.AsObject;
      static toObject(includeInstance: boolean, msg: Speed): Speed.AsObject;
      static serializeBinaryToWriter(message: Speed, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Speed;
      static deserializeBinaryFromReader(message: Speed, reader: jspb.BinaryReader): Speed;
    }

    export namespace Speed {
      export type AsObject = {
        up?: number,
        down?: number,
      }

      export enum UpCase { 
        _UP_NOT_SET = 0,
        UP = 1,
      }

      export enum DownCase { 
        _DOWN_NOT_SET = 0,
        DOWN = 2,
      }
    }


    export class Time extends jspb.Message {
      getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setFrom(value?: google_protobuf_timestamp_pb.Timestamp): Time;
      hasFrom(): boolean;
      clearFrom(): Time;

      getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setTo(value?: google_protobuf_timestamp_pb.Timestamp): Time;
      hasTo(): boolean;
      clearTo(): Time;

      getMonday(): boolean;
      setMonday(value: boolean): Time;

      getTuesday(): boolean;
      setTuesday(value: boolean): Time;

      getWednesday(): boolean;
      setWednesday(value: boolean): Time;

      getThursday(): boolean;
      setThursday(value: boolean): Time;

      getFriday(): boolean;
      setFriday(value: boolean): Time;

      getSaturday(): boolean;
      setSaturday(value: boolean): Time;

      getSunday(): boolean;
      setSunday(value: boolean): Time;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Time.AsObject;
      static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
      static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Time;
      static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
    }

    export namespace Time {
      export type AsObject = {
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        monday: boolean,
        tuesday: boolean,
        wednesday: boolean,
        thursday: boolean,
        friday: boolean,
        saturday: boolean,
        sunday: boolean,
      }
    }


    export enum PayloadCase { 
      PAYLOAD_NOT_SET = 0,
      HOST = 1,
      SPEED = 2,
      TIME = 3,
    }
  }


  export class Nat extends jspb.Message {
    getDevice(): string;
    setDevice(value: string): Nat;

    getTcp(): boolean;
    setTcp(value: boolean): Nat;

    getPort(): number;
    setPort(value: number): Nat;

    getDestination(): Rule.Nat.Host | undefined;
    setDestination(value?: Rule.Nat.Host): Nat;
    hasDestination(): boolean;
    clearDestination(): Nat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nat.AsObject;
    static toObject(includeInstance: boolean, msg: Nat): Nat.AsObject;
    static serializeBinaryToWriter(message: Nat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nat;
    static deserializeBinaryFromReader(message: Nat, reader: jspb.BinaryReader): Nat;
  }

  export namespace Nat {
    export type AsObject = {
      device: string,
      tcp: boolean,
      port: number,
      destination?: Rule.Nat.Host.AsObject,
    }

    export class Host extends jspb.Message {
      getIp(): string;
      setIp(value: string): Host;

      getPort(): number;
      setPort(value: number): Host;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Host.AsObject;
      static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
      static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Host;
      static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
    }

    export namespace Host {
      export type AsObject = {
        ip: string,
        port: number,
      }
    }

  }


  export enum Protocol { 
    ICMP = 0,
    TCP = 1,
    UDP = 2,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    IN = 11,
    OUT = 12,
    NAT = 13,
  }
}

export class RouterStatusResponse extends jspb.Message {
  getLan(): Lan | undefined;
  setLan(value?: Lan): RouterStatusResponse;
  hasLan(): boolean;
  clearLan(): RouterStatusResponse;

  getDmz(): Dmz | undefined;
  setDmz(value?: Dmz): RouterStatusResponse;
  hasDmz(): boolean;
  clearDmz(): RouterStatusResponse;

  getWanList(): Array<Wan>;
  setWanList(value: Array<Wan>): RouterStatusResponse;
  clearWanList(): RouterStatusResponse;
  addWan(value?: Wan, index?: number): Wan;

  getBoundList(): Array<string>;
  setBoundList(value: Array<string>): RouterStatusResponse;
  clearBoundList(): RouterStatusResponse;
  addBound(value: string, index?: number): RouterStatusResponse;

  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): RouterStatusResponse;
  clearRulesList(): RouterStatusResponse;
  addRules(value?: Rule, index?: number): Rule;

  getHostsList(): Array<Host>;
  setHostsList(value: Array<Host>): RouterStatusResponse;
  clearHostsList(): RouterStatusResponse;
  addHosts(value?: Host, index?: number): Host;

  getScript(): string;
  setScript(value: string): RouterStatusResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): RouterStatusResponse;
  hasUptime(): boolean;
  clearUptime(): RouterStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RouterStatusResponse): RouterStatusResponse.AsObject;
  static serializeBinaryToWriter(message: RouterStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterStatusResponse;
  static deserializeBinaryFromReader(message: RouterStatusResponse, reader: jspb.BinaryReader): RouterStatusResponse;
}

export namespace RouterStatusResponse {
  export type AsObject = {
    lan?: Lan.AsObject,
    dmz?: Dmz.AsObject,
    wanList: Array<Wan.AsObject>,
    boundList: Array<string>,
    rulesList: Array<Rule.AsObject>,
    hostsList: Array<Host.AsObject>,
    script: string,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Lan extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Lan;

  getMac(): string;
  setMac(value: string): Lan;

  getAddress(): string;
  setAddress(value: string): Lan;

  getDns1(): string;
  setDns1(value: string): Lan;

  getDns2(): string;
  setDns2(value: string): Lan;
  hasDns2(): boolean;
  clearDns2(): Lan;

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
    mac: string,
    address: string,
    dns1: string,
    dns2?: string,
  }

  export enum Dns2Case { 
    _DNS2_NOT_SET = 0,
    DNS2 = 13,
  }
}

export class Dmz extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Dmz;

  getMac(): string;
  setMac(value: string): Dmz;

  getAddress(): string;
  setAddress(value: string): Dmz;

  getDns1(): string;
  setDns1(value: string): Dmz;

  getDns2(): string;
  setDns2(value: string): Dmz;
  hasDns2(): boolean;
  clearDns2(): Dmz;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dmz.AsObject;
  static toObject(includeInstance: boolean, msg: Dmz): Dmz.AsObject;
  static serializeBinaryToWriter(message: Dmz, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dmz;
  static deserializeBinaryFromReader(message: Dmz, reader: jspb.BinaryReader): Dmz;
}

export namespace Dmz {
  export type AsObject = {
    device: string,
    mac: string,
    address: string,
    dns1: string,
    dns2?: string,
  }

  export enum Dns2Case { 
    _DNS2_NOT_SET = 0,
    DNS2 = 13,
  }
}

export class Wan extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Wan;

  getName(): string;
  setName(value: string): Wan;

  getCapacity(): number;
  setCapacity(value: number): Wan;

  getMetric(): number;
  setMetric(value: number): Wan;

  getMac(): string;
  setMac(value: string): Wan;

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
    name: string,
    capacity: number,
    metric: number,
    mac: string,
    dhcp?: Dhcp.AsObject,
    pb_static?: Static.AsObject,
  }

  export enum IpCase { 
    IP_NOT_SET = 0,
    DHCP = 21,
    STATIC = 22,
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
    gateway: string,
    dns1: string,
    dns2?: string,
  }

  export enum Dns2Case { 
    _DNS2_NOT_SET = 0,
    DNS2 = 5,
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

