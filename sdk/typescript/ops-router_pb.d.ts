import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"


export class Config extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
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


  export class StaticIp extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): StaticIp;

    getGateway(): string;
    setGateway(value: string): StaticIp;

    getDns(): string;
    setDns(value: string): StaticIp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StaticIp.AsObject;
    static toObject(includeInstance: boolean, msg: StaticIp): StaticIp.AsObject;
    static serializeBinaryToWriter(message: StaticIp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StaticIp;
    static deserializeBinaryFromReader(message: StaticIp, reader: jspb.BinaryReader): StaticIp;
  }

  export namespace StaticIp {
    export type AsObject = {
      address: string,
      gateway: string,
      dns: string,
    }
  }


  export class Wan extends jspb.Message {
    getInterfacesList(): Array<Config.Wan.Ethernet>;
    setInterfacesList(value: Array<Config.Wan.Ethernet>): Wan;
    clearInterfacesList(): Wan;
    addInterfaces(value?: Config.Wan.Ethernet, index?: number): Config.Wan.Ethernet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wan.AsObject;
    static toObject(includeInstance: boolean, msg: Wan): Wan.AsObject;
    static serializeBinaryToWriter(message: Wan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wan;
    static deserializeBinaryFromReader(message: Wan, reader: jspb.BinaryReader): Wan;
  }

  export namespace Wan {
    export type AsObject = {
      interfacesList: Array<Config.Wan.Ethernet.AsObject>,
    }

    export class Ethernet extends jspb.Message {
      getName(): string;
      setName(value: string): Ethernet;

      getDevice(): string;
      setDevice(value: string): Ethernet;

      getDhcp(): Config.Dhcp | undefined;
      setDhcp(value?: Config.Dhcp): Ethernet;
      hasDhcp(): boolean;
      clearDhcp(): Ethernet;

      getStaticIp(): Config.StaticIp | undefined;
      setStaticIp(value?: Config.StaticIp): Ethernet;
      hasStaticIp(): boolean;
      clearStaticIp(): Ethernet;

      getMetric(): number;
      setMetric(value: number): Ethernet;

      getIpCase(): Ethernet.IpCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Ethernet.AsObject;
      static toObject(includeInstance: boolean, msg: Ethernet): Ethernet.AsObject;
      static serializeBinaryToWriter(message: Ethernet, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Ethernet;
      static deserializeBinaryFromReader(message: Ethernet, reader: jspb.BinaryReader): Ethernet;
    }

    export namespace Ethernet {
      export type AsObject = {
        name: string,
        device: string,
        dhcp?: Config.Dhcp.AsObject,
        staticIp?: Config.StaticIp.AsObject,
        metric: number,
      }

      export enum IpCase { 
        IP_NOT_SET = 0,
        DHCP = 11,
        STATIC_IP = 12,
      }
    }

  }


  export class Dmz extends jspb.Message {
    getName(): string;
    setName(value: string): Dmz;

    getDevice(): string;
    setDevice(value: string): Dmz;

    getAddress(): string;
    setAddress(value: string): Dmz;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dmz.AsObject;
    static toObject(includeInstance: boolean, msg: Dmz): Dmz.AsObject;
    static serializeBinaryToWriter(message: Dmz, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dmz;
    static deserializeBinaryFromReader(message: Dmz, reader: jspb.BinaryReader): Dmz;
  }

  export namespace Dmz {
    export type AsObject = {
      name: string,
      device: string,
      address: string,
    }
  }


  export class Lan extends jspb.Message {
    getName(): string;
    setName(value: string): Lan;

    getDevice(): string;
    setDevice(value: string): Lan;

    getAddress(): string;
    setAddress(value: string): Lan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Lan.AsObject;
    static toObject(includeInstance: boolean, msg: Lan): Lan.AsObject;
    static serializeBinaryToWriter(message: Lan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Lan;
    static deserializeBinaryFromReader(message: Lan, reader: jspb.BinaryReader): Lan;
  }

  export namespace Lan {
    export type AsObject = {
      name: string,
      device: string,
      address: string,
    }
  }


  export class Guest extends jspb.Message {
    getName(): string;
    setName(value: string): Guest;

    getDevice(): string;
    setDevice(value: string): Guest;

    getAddress(): string;
    setAddress(value: string): Guest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Guest.AsObject;
    static toObject(includeInstance: boolean, msg: Guest): Guest.AsObject;
    static serializeBinaryToWriter(message: Guest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Guest;
    static deserializeBinaryFromReader(message: Guest, reader: jspb.BinaryReader): Guest;
  }

  export namespace Guest {
    export type AsObject = {
      name: string,
      device: string,
      address: string,
    }
  }

}

export class Contact extends jspb.Message {
  getPhone(): string;
  setPhone(value: string): Contact;
  hasPhone(): boolean;
  clearPhone(): Contact;

  getWechat(): string;
  setWechat(value: string): Contact;
  hasWechat(): boolean;
  clearWechat(): Contact;

  getEmail(): string;
  setEmail(value: string): Contact;
  hasEmail(): boolean;
  clearEmail(): Contact;

  getAddress(): string;
  setAddress(value: string): Contact;
  hasAddress(): boolean;
  clearAddress(): Contact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contact.AsObject;
  static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
  static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contact;
  static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
  export type AsObject = {
    phone?: string,
    wechat?: string,
    email?: string,
    address?: string,
  }

  export enum PhoneCase { 
    _PHONE_NOT_SET = 0,
    PHONE = 1,
  }

  export enum WechatCase { 
    _WECHAT_NOT_SET = 0,
    WECHAT = 2,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 3,
  }

  export enum AddressCase { 
    _ADDRESS_NOT_SET = 0,
    ADDRESS = 99,
  }
}

export class RouterSetLanRequest extends jspb.Message {
  getPayload(): Lan | undefined;
  setPayload(value?: Lan): RouterSetLanRequest;
  hasPayload(): boolean;
  clearPayload(): RouterSetLanRequest;

  getEnable(): boolean;
  setEnable(value: boolean): RouterSetLanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterSetLanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouterSetLanRequest): RouterSetLanRequest.AsObject;
  static serializeBinaryToWriter(message: RouterSetLanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterSetLanRequest;
  static deserializeBinaryFromReader(message: RouterSetLanRequest, reader: jspb.BinaryReader): RouterSetLanRequest;
}

export namespace RouterSetLanRequest {
  export type AsObject = {
    payload?: Lan.AsObject,
    enable: boolean,
  }
}

export class RouterSetDmzRequest extends jspb.Message {
  getPayload(): Dmz | undefined;
  setPayload(value?: Dmz): RouterSetDmzRequest;
  hasPayload(): boolean;
  clearPayload(): RouterSetDmzRequest;

  getEnable(): boolean;
  setEnable(value: boolean): RouterSetDmzRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterSetDmzRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouterSetDmzRequest): RouterSetDmzRequest.AsObject;
  static serializeBinaryToWriter(message: RouterSetDmzRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterSetDmzRequest;
  static deserializeBinaryFromReader(message: RouterSetDmzRequest, reader: jspb.BinaryReader): RouterSetDmzRequest;
}

export namespace RouterSetDmzRequest {
  export type AsObject = {
    payload?: Dmz.AsObject,
    enable: boolean,
  }
}

export class RouterSetWanRequest extends jspb.Message {
  getPayload(): Wan | undefined;
  setPayload(value?: Wan): RouterSetWanRequest;
  hasPayload(): boolean;
  clearPayload(): RouterSetWanRequest;

  getEnable(): boolean;
  setEnable(value: boolean): RouterSetWanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterSetWanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouterSetWanRequest): RouterSetWanRequest.AsObject;
  static serializeBinaryToWriter(message: RouterSetWanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterSetWanRequest;
  static deserializeBinaryFromReader(message: RouterSetWanRequest, reader: jspb.BinaryReader): RouterSetWanRequest;
}

export namespace RouterSetWanRequest {
  export type AsObject = {
    payload?: Wan.AsObject,
    enable: boolean,
  }
}

export class WanPool extends jspb.Message {
  getItemsList(): Array<WanPool.Item>;
  setItemsList(value: Array<WanPool.Item>): WanPool;
  clearItemsList(): WanPool;
  addItems(value?: WanPool.Item, index?: number): WanPool.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WanPool.AsObject;
  static toObject(includeInstance: boolean, msg: WanPool): WanPool.AsObject;
  static serializeBinaryToWriter(message: WanPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WanPool;
  static deserializeBinaryFromReader(message: WanPool, reader: jspb.BinaryReader): WanPool;
}

export namespace WanPool {
  export type AsObject = {
    itemsList: Array<WanPool.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getDevice(): string;
    setDevice(value: string): Item;

    getWeight(): number;
    setWeight(value: number): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      device: string,
      weight: number,
    }
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
    getSource(): Rule.Nat.Source | undefined;
    setSource(value?: Rule.Nat.Source): Nat;
    hasSource(): boolean;
    clearSource(): Nat;

    getTcp(): boolean;
    setTcp(value: boolean): Nat;

    getDestination(): Rule.Nat.Destination | undefined;
    setDestination(value?: Rule.Nat.Destination): Nat;
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
      source?: Rule.Nat.Source.AsObject,
      tcp: boolean,
      destination?: Rule.Nat.Destination.AsObject,
    }

    export class Source extends jspb.Message {
      getDevice(): string;
      setDevice(value: string): Source;

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
        port: number,
      }
    }


    export class Destination extends jspb.Message {
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
  getInterfacesMap(): jspb.Map<string, string>;
  clearInterfacesMap(): RouterStatusResponse;

  getLan(): Lan | undefined;
  setLan(value?: Lan): RouterStatusResponse;
  hasLan(): boolean;
  clearLan(): RouterStatusResponse;

  getDmz(): Dmz | undefined;
  setDmz(value?: Dmz): RouterStatusResponse;
  hasDmz(): boolean;
  clearDmz(): RouterStatusResponse;

  getDns(): Dns | undefined;
  setDns(value?: Dns): RouterStatusResponse;
  hasDns(): boolean;
  clearDns(): RouterStatusResponse;

  getWanList(): Array<Wan>;
  setWanList(value: Array<Wan>): RouterStatusResponse;
  clearWanList(): RouterStatusResponse;
  addWan(value?: Wan, index?: number): Wan;

  getWanPool(): WanPool | undefined;
  setWanPool(value?: WanPool): RouterStatusResponse;
  hasWanPool(): boolean;
  clearWanPool(): RouterStatusResponse;

  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): RouterStatusResponse;
  clearRulesList(): RouterStatusResponse;
  addRules(value?: Rule, index?: number): Rule;

  getHostsList(): Array<Host>;
  setHostsList(value: Array<Host>): RouterStatusResponse;
  clearHostsList(): RouterStatusResponse;
  addHosts(value?: Host, index?: number): Host;

  getIp(): RouterStatusResponse.Ip | undefined;
  setIp(value?: RouterStatusResponse.Ip): RouterStatusResponse;
  hasIp(): boolean;
  clearIp(): RouterStatusResponse;

  getFirewall(): string;
  setFirewall(value: string): RouterStatusResponse;

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
    interfacesMap: Array<[string, string]>,
    lan?: Lan.AsObject,
    dmz?: Dmz.AsObject,
    dns?: Dns.AsObject,
    wanList: Array<Wan.AsObject>,
    wanPool?: WanPool.AsObject,
    rulesList: Array<Rule.AsObject>,
    hostsList: Array<Host.AsObject>,
    ip?: RouterStatusResponse.Ip.AsObject,
    firewall: string,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export class Ip extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): Ip;

    getRoute(): string;
    setRoute(value: string): Ip;

    getRule(): string;
    setRule(value: string): Ip;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ip.AsObject;
    static toObject(includeInstance: boolean, msg: Ip): Ip.AsObject;
    static serializeBinaryToWriter(message: Ip, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ip;
    static deserializeBinaryFromReader(message: Ip, reader: jspb.BinaryReader): Ip;
  }

  export namespace Ip {
    export type AsObject = {
      address: string,
      route: string,
      rule: string,
    }
  }

}

export class Lan extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Lan;

  getMac(): string;
  setMac(value: string): Lan;

  getMetric(): number;
  setMetric(value: number): Lan;

  getAddress(): string;
  setAddress(value: string): Lan;

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
    metric: number,
    address: string,
  }
}

export class Dmz extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Dmz;

  getMac(): string;
  setMac(value: string): Dmz;

  getMetric(): number;
  setMetric(value: number): Dmz;

  getAddress(): string;
  setAddress(value: string): Dmz;

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
    metric: number,
    address: string,
  }
}

export class Wan extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): Wan;

  getMetric(): number;
  setMetric(value: number): Wan;

  getName(): string;
  setName(value: string): Wan;

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

  getEnable(): boolean;
  setEnable(value: boolean): Wan;

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
    metric: number,
    name: string,
    mac: string,
    dhcp?: Dhcp.AsObject,
    pb_static?: Static.AsObject,
    enable: boolean,
  }

  export enum IpCase { 
    IP_NOT_SET = 0,
    DHCP = 21,
    STATIC = 22,
  }
}

export class Dhcp extends jspb.Message {
  getV6(): boolean;
  setV6(value: boolean): Dhcp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dhcp.AsObject;
  static toObject(includeInstance: boolean, msg: Dhcp): Dhcp.AsObject;
  static serializeBinaryToWriter(message: Dhcp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dhcp;
  static deserializeBinaryFromReader(message: Dhcp, reader: jspb.BinaryReader): Dhcp;
}

export namespace Dhcp {
  export type AsObject = {
    v6: boolean,
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

export class Dns extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): Dns;
  clearItemsList(): Dns;
  addItems(value: string, index?: number): Dns;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dns.AsObject;
  static toObject(includeInstance: boolean, msg: Dns): Dns.AsObject;
  static serializeBinaryToWriter(message: Dns, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dns;
  static deserializeBinaryFromReader(message: Dns, reader: jspb.BinaryReader): Dns;
}

export namespace Dns {
  export type AsObject = {
    itemsList: Array<string>,
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

