import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class WechatPayPrepayRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayPrepayRequest;

  getAmount(): WechatPayPrepayRequest.Amount | undefined;
  setAmount(value?: WechatPayPrepayRequest.Amount): WechatPayPrepayRequest;
  hasAmount(): boolean;
  clearAmount(): WechatPayPrepayRequest;

  getDescription(): string;
  setDescription(value: string): WechatPayPrepayRequest;

  getNotifyUrl(): string;
  setNotifyUrl(value: string): WechatPayPrepayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayPrepayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayPrepayRequest): WechatPayPrepayRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayPrepayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayPrepayRequest;
  static deserializeBinaryFromReader(message: WechatPayPrepayRequest, reader: jspb.BinaryReader): WechatPayPrepayRequest;
}

export namespace WechatPayPrepayRequest {
  export type AsObject = {
    appId: string,
    amount?: WechatPayPrepayRequest.Amount.AsObject,
    description: string,
    notifyUrl: string,
  }

  export class Amount extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): Amount;

    getCurrenty(): WechatPayPrepayRequest.Amount.Currency;
    setCurrenty(value: WechatPayPrepayRequest.Amount.Currency): Amount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
  }

  export namespace Amount {
    export type AsObject = {
      total: number,
      currenty: WechatPayPrepayRequest.Amount.Currency,
    }

    export enum Currency { 
      CNY = 0,
    }
  }

}

export class WechatPayCloseOrderRequest extends jspb.Message {
  getOutTradeNo(): string;
  setOutTradeNo(value: string): WechatPayCloseOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayCloseOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayCloseOrderRequest): WechatPayCloseOrderRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayCloseOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayCloseOrderRequest;
  static deserializeBinaryFromReader(message: WechatPayCloseOrderRequest, reader: jspb.BinaryReader): WechatPayCloseOrderRequest;
}

export namespace WechatPayCloseOrderRequest {
  export type AsObject = {
    outTradeNo: string,
  }
}

export class WechatPayNativeQrCodeUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): WechatPayNativeQrCodeUrlResponse;

  getOutTradeNo(): string;
  setOutTradeNo(value: string): WechatPayNativeQrCodeUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayNativeQrCodeUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayNativeQrCodeUrlResponse): WechatPayNativeQrCodeUrlResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayNativeQrCodeUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayNativeQrCodeUrlResponse;
  static deserializeBinaryFromReader(message: WechatPayNativeQrCodeUrlResponse, reader: jspb.BinaryReader): WechatPayNativeQrCodeUrlResponse;
}

export namespace WechatPayNativeQrCodeUrlResponse {
  export type AsObject = {
    url: string,
    outTradeNo: string,
  }
}

export class WechatPayJsapiPrepayIdResponse extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayJsapiPrepayIdResponse;

  getTimeStamp(): string;
  setTimeStamp(value: string): WechatPayJsapiPrepayIdResponse;

  getNonceStr(): string;
  setNonceStr(value: string): WechatPayJsapiPrepayIdResponse;

  getPackage(): string;
  setPackage(value: string): WechatPayJsapiPrepayIdResponse;

  getSignType(): string;
  setSignType(value: string): WechatPayJsapiPrepayIdResponse;

  getPaySign(): string;
  setPaySign(value: string): WechatPayJsapiPrepayIdResponse;

  getOutTradeNo(): string;
  setOutTradeNo(value: string): WechatPayJsapiPrepayIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayJsapiPrepayIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayJsapiPrepayIdResponse): WechatPayJsapiPrepayIdResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayJsapiPrepayIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayJsapiPrepayIdResponse;
  static deserializeBinaryFromReader(message: WechatPayJsapiPrepayIdResponse, reader: jspb.BinaryReader): WechatPayJsapiPrepayIdResponse;
}

export namespace WechatPayJsapiPrepayIdResponse {
  export type AsObject = {
    appId: string,
    timeStamp: string,
    nonceStr: string,
    pb_package: string,
    signType: string,
    paySign: string,
    outTradeNo: string,
  }
}

export class WechatPayNotificationRequest extends jspb.Message {
  getSerialNumber(): string;
  setSerialNumber(value: string): WechatPayNotificationRequest;

  getNonce(): string;
  setNonce(value: string): WechatPayNotificationRequest;

  getSignature(): string;
  setSignature(value: string): WechatPayNotificationRequest;

  getTimestamp(): string;
  setTimestamp(value: string): WechatPayNotificationRequest;

  getBody(): string;
  setBody(value: string): WechatPayNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayNotificationRequest): WechatPayNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayNotificationRequest;
  static deserializeBinaryFromReader(message: WechatPayNotificationRequest, reader: jspb.BinaryReader): WechatPayNotificationRequest;
}

export namespace WechatPayNotificationRequest {
  export type AsObject = {
    serialNumber: string,
    nonce: string,
    signature: string,
    timestamp: string,
    body: string,
  }
}

export class WechatPayNotificationTransactionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayNotificationTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayNotificationTransactionResponse): WechatPayNotificationTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayNotificationTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayNotificationTransactionResponse;
  static deserializeBinaryFromReader(message: WechatPayNotificationTransactionResponse, reader: jspb.BinaryReader): WechatPayNotificationTransactionResponse;
}

export namespace WechatPayNotificationTransactionResponse {
  export type AsObject = {
  }
}

export class WechatPayNotificationRefundResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayNotificationRefundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayNotificationRefundResponse): WechatPayNotificationRefundResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayNotificationRefundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayNotificationRefundResponse;
  static deserializeBinaryFromReader(message: WechatPayNotificationRefundResponse, reader: jspb.BinaryReader): WechatPayNotificationRefundResponse;
}

export namespace WechatPayNotificationRefundResponse {
  export type AsObject = {
  }
}

