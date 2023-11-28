import * as jspb from 'google-protobuf'



export class WechatMiniProgramLoginRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatMiniProgramLoginRequest;

  getCode(): string;
  setCode(value: string): WechatMiniProgramLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatMiniProgramLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatMiniProgramLoginRequest): WechatMiniProgramLoginRequest.AsObject;
  static serializeBinaryToWriter(message: WechatMiniProgramLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatMiniProgramLoginRequest;
  static deserializeBinaryFromReader(message: WechatMiniProgramLoginRequest, reader: jspb.BinaryReader): WechatMiniProgramLoginRequest;
}

export namespace WechatMiniProgramLoginRequest {
  export type AsObject = {
    appId: string,
    code: string,
  }
}

export class WechatMiniProgramLoginResponse extends jspb.Message {
  getUnionid(): string;
  setUnionid(value: string): WechatMiniProgramLoginResponse;

  getOpenid(): string;
  setOpenid(value: string): WechatMiniProgramLoginResponse;

  getSessionKey(): string;
  setSessionKey(value: string): WechatMiniProgramLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatMiniProgramLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatMiniProgramLoginResponse): WechatMiniProgramLoginResponse.AsObject;
  static serializeBinaryToWriter(message: WechatMiniProgramLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatMiniProgramLoginResponse;
  static deserializeBinaryFromReader(message: WechatMiniProgramLoginResponse, reader: jspb.BinaryReader): WechatMiniProgramLoginResponse;
}

export namespace WechatMiniProgramLoginResponse {
  export type AsObject = {
    unionid: string,
    openid: string,
    sessionKey: string,
  }
}

export class WechatMiniProgramPhoneNumberRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatMiniProgramPhoneNumberRequest;

  getCode(): string;
  setCode(value: string): WechatMiniProgramPhoneNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatMiniProgramPhoneNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatMiniProgramPhoneNumberRequest): WechatMiniProgramPhoneNumberRequest.AsObject;
  static serializeBinaryToWriter(message: WechatMiniProgramPhoneNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatMiniProgramPhoneNumberRequest;
  static deserializeBinaryFromReader(message: WechatMiniProgramPhoneNumberRequest, reader: jspb.BinaryReader): WechatMiniProgramPhoneNumberRequest;
}

export namespace WechatMiniProgramPhoneNumberRequest {
  export type AsObject = {
    appId: string,
    code: string,
  }
}

export class WechatMiniProgramPhoneNumberResponse extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): WechatMiniProgramPhoneNumberResponse;

  getPurePhoneNumber(): string;
  setPurePhoneNumber(value: string): WechatMiniProgramPhoneNumberResponse;

  getCountryCode(): string;
  setCountryCode(value: string): WechatMiniProgramPhoneNumberResponse;

  getWaterMark(): number;
  setWaterMark(value: number): WechatMiniProgramPhoneNumberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatMiniProgramPhoneNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatMiniProgramPhoneNumberResponse): WechatMiniProgramPhoneNumberResponse.AsObject;
  static serializeBinaryToWriter(message: WechatMiniProgramPhoneNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatMiniProgramPhoneNumberResponse;
  static deserializeBinaryFromReader(message: WechatMiniProgramPhoneNumberResponse, reader: jspb.BinaryReader): WechatMiniProgramPhoneNumberResponse;
}

export namespace WechatMiniProgramPhoneNumberResponse {
  export type AsObject = {
    phoneNumber: string,
    purePhoneNumber: string,
    countryCode: string,
    waterMark: number,
  }
}

export class WechatOauth2QrConnectRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatOauth2QrConnectRequest;

  getRedirectUri(): string;
  setRedirectUri(value: string): WechatOauth2QrConnectRequest;

  getState(): string;
  setState(value: string): WechatOauth2QrConnectRequest;

  getLanguage(): WechatOauth2QrConnectRequest.Language;
  setLanguage(value: WechatOauth2QrConnectRequest.Language): WechatOauth2QrConnectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatOauth2QrConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatOauth2QrConnectRequest): WechatOauth2QrConnectRequest.AsObject;
  static serializeBinaryToWriter(message: WechatOauth2QrConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatOauth2QrConnectRequest;
  static deserializeBinaryFromReader(message: WechatOauth2QrConnectRequest, reader: jspb.BinaryReader): WechatOauth2QrConnectRequest;
}

export namespace WechatOauth2QrConnectRequest {
  export type AsObject = {
    appId: string,
    redirectUri: string,
    state: string,
    language: WechatOauth2QrConnectRequest.Language,
  }

  export enum Language { 
    EN = 0,
    CN = 1,
    TW = 2,
  }
}

export class WechatOauth2QrConnectResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): WechatOauth2QrConnectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatOauth2QrConnectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatOauth2QrConnectResponse): WechatOauth2QrConnectResponse.AsObject;
  static serializeBinaryToWriter(message: WechatOauth2QrConnectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatOauth2QrConnectResponse;
  static deserializeBinaryFromReader(message: WechatOauth2QrConnectResponse, reader: jspb.BinaryReader): WechatOauth2QrConnectResponse;
}

export namespace WechatOauth2QrConnectResponse {
  export type AsObject = {
    url: string,
  }
}

export class WechatOauth2LoginResponse extends jspb.Message {
  getUnionid(): string;
  setUnionid(value: string): WechatOauth2LoginResponse;

  getOpenid(): string;
  setOpenid(value: string): WechatOauth2LoginResponse;

  getNickname(): string;
  setNickname(value: string): WechatOauth2LoginResponse;

  getSex(): WechatOauth2LoginResponse.Sex;
  setSex(value: WechatOauth2LoginResponse.Sex): WechatOauth2LoginResponse;

  getProvince(): string;
  setProvince(value: string): WechatOauth2LoginResponse;

  getCity(): string;
  setCity(value: string): WechatOauth2LoginResponse;

  getCountry(): string;
  setCountry(value: string): WechatOauth2LoginResponse;

  getHeadimgurl(): string;
  setHeadimgurl(value: string): WechatOauth2LoginResponse;
  hasHeadimgurl(): boolean;
  clearHeadimgurl(): WechatOauth2LoginResponse;

  getPrivilegeList(): Array<string>;
  setPrivilegeList(value: Array<string>): WechatOauth2LoginResponse;
  clearPrivilegeList(): WechatOauth2LoginResponse;
  addPrivilege(value: string, index?: number): WechatOauth2LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatOauth2LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatOauth2LoginResponse): WechatOauth2LoginResponse.AsObject;
  static serializeBinaryToWriter(message: WechatOauth2LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatOauth2LoginResponse;
  static deserializeBinaryFromReader(message: WechatOauth2LoginResponse, reader: jspb.BinaryReader): WechatOauth2LoginResponse;
}

export namespace WechatOauth2LoginResponse {
  export type AsObject = {
    unionid: string,
    openid: string,
    nickname: string,
    sex: WechatOauth2LoginResponse.Sex,
    province: string,
    city: string,
    country: string,
    headimgurl?: string,
    privilegeList: Array<string>,
  }

  export enum Sex { 
    MALE = 0,
    FEMALE = 1,
  }

  export enum HeadimgurlCase { 
    _HEADIMGURL_NOT_SET = 0,
    HEADIMGURL = 16,
  }
}

export class WechatOauth2LoginRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatOauth2LoginRequest;

  getCode(): string;
  setCode(value: string): WechatOauth2LoginRequest;

  getState(): string;
  setState(value: string): WechatOauth2LoginRequest;

  getLanguage(): WechatOauth2QrConnectRequest.Language;
  setLanguage(value: WechatOauth2QrConnectRequest.Language): WechatOauth2LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatOauth2LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatOauth2LoginRequest): WechatOauth2LoginRequest.AsObject;
  static serializeBinaryToWriter(message: WechatOauth2LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatOauth2LoginRequest;
  static deserializeBinaryFromReader(message: WechatOauth2LoginRequest, reader: jspb.BinaryReader): WechatOauth2LoginRequest;
}

export namespace WechatOauth2LoginRequest {
  export type AsObject = {
    appId: string,
    code: string,
    state: string,
    language: WechatOauth2QrConnectRequest.Language,
  }
}

