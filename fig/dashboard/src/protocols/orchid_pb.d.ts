import * as jspb from 'google-protobuf'



export class WeChatLoginRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WeChatLoginRequest;

  getCode(): string;
  setCode(value: string): WeChatLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeChatLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WeChatLoginRequest): WeChatLoginRequest.AsObject;
  static serializeBinaryToWriter(message: WeChatLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeChatLoginRequest;
  static deserializeBinaryFromReader(message: WeChatLoginRequest, reader: jspb.BinaryReader): WeChatLoginRequest;
}

export namespace WeChatLoginRequest {
  export type AsObject = {
    appId: string,
    code: string,
  }
}

export class WeChatLoginResponse extends jspb.Message {
  getUnionid(): string;
  setUnionid(value: string): WeChatLoginResponse;
  hasUnionid(): boolean;
  clearUnionid(): WeChatLoginResponse;

  getOpenid(): string;
  setOpenid(value: string): WeChatLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeChatLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WeChatLoginResponse): WeChatLoginResponse.AsObject;
  static serializeBinaryToWriter(message: WeChatLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeChatLoginResponse;
  static deserializeBinaryFromReader(message: WeChatLoginResponse, reader: jspb.BinaryReader): WeChatLoginResponse;
}

export namespace WeChatLoginResponse {
  export type AsObject = {
    unionid?: string,
    openid: string,
  }

  export enum UnionidCase { 
    _UNIONID_NOT_SET = 0,
    UNIONID = 1,
  }
}

export class WeChatPhoneNumberRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WeChatPhoneNumberRequest;

  getCode(): string;
  setCode(value: string): WeChatPhoneNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeChatPhoneNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WeChatPhoneNumberRequest): WeChatPhoneNumberRequest.AsObject;
  static serializeBinaryToWriter(message: WeChatPhoneNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeChatPhoneNumberRequest;
  static deserializeBinaryFromReader(message: WeChatPhoneNumberRequest, reader: jspb.BinaryReader): WeChatPhoneNumberRequest;
}

export namespace WeChatPhoneNumberRequest {
  export type AsObject = {
    appId: string,
    code: string,
  }
}

export class WeChatPhoneNumberResponse extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): WeChatPhoneNumberResponse;

  getPurePhoneNumber(): string;
  setPurePhoneNumber(value: string): WeChatPhoneNumberResponse;

  getCountryCode(): string;
  setCountryCode(value: string): WeChatPhoneNumberResponse;

  getWaterMark(): number;
  setWaterMark(value: number): WeChatPhoneNumberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeChatPhoneNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WeChatPhoneNumberResponse): WeChatPhoneNumberResponse.AsObject;
  static serializeBinaryToWriter(message: WeChatPhoneNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeChatPhoneNumberResponse;
  static deserializeBinaryFromReader(message: WeChatPhoneNumberResponse, reader: jspb.BinaryReader): WeChatPhoneNumberResponse;
}

export namespace WeChatPhoneNumberResponse {
  export type AsObject = {
    phoneNumber: string,
    purePhoneNumber: string,
    countryCode: string,
    waterMark: number,
  }
}

