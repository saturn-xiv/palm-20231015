import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class WechatPayPrepayRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayPrepayRequest;

  getPayerOpenId(): string;
  setPayerOpenId(value: string): WechatPayPrepayRequest;

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
    payerOpenId: string,
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

  getReason(): string;
  setReason(value: string): WechatPayCloseOrderRequest;

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
    reason: string,
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

export class WechatPayTradeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayTradeResponse): WechatPayTradeResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayTradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayTradeResponse;
  static deserializeBinaryFromReader(message: WechatPayTradeResponse, reader: jspb.BinaryReader): WechatPayTradeResponse;
}

export namespace WechatPayTradeResponse {
  export type AsObject = {
  }
}

export class WechatPayQueryOrderByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): WechatPayQueryOrderByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryOrderByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryOrderByIdRequest): WechatPayQueryOrderByIdRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryOrderByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryOrderByIdRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryOrderByIdRequest, reader: jspb.BinaryReader): WechatPayQueryOrderByIdRequest;
}

export namespace WechatPayQueryOrderByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class WechatPayQueryOrderByOutTradeNoRequest extends jspb.Message {
  getNo(): string;
  setNo(value: string): WechatPayQueryOrderByOutTradeNoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryOrderByOutTradeNoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryOrderByOutTradeNoRequest): WechatPayQueryOrderByOutTradeNoRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryOrderByOutTradeNoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryOrderByOutTradeNoRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryOrderByOutTradeNoRequest, reader: jspb.BinaryReader): WechatPayQueryOrderByOutTradeNoRequest;
}

export namespace WechatPayQueryOrderByOutTradeNoRequest {
  export type AsObject = {
    no: string,
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

export class WechatPayBillDate extends jspb.Message {
  getYear(): number;
  setYear(value: number): WechatPayBillDate;

  getMonth(): number;
  setMonth(value: number): WechatPayBillDate;

  getDay(): number;
  setDay(value: number): WechatPayBillDate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayBillDate.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayBillDate): WechatPayBillDate.AsObject;
  static serializeBinaryToWriter(message: WechatPayBillDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayBillDate;
  static deserializeBinaryFromReader(message: WechatPayBillDate, reader: jspb.BinaryReader): WechatPayBillDate;
}

export namespace WechatPayBillDate {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
  }
}

export class WechatPayBillResponse extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): WechatPayBillResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayBillResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayBillResponse): WechatPayBillResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayBillResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayBillResponse;
  static deserializeBinaryFromReader(message: WechatPayBillResponse, reader: jspb.BinaryReader): WechatPayBillResponse;
}

export namespace WechatPayBillResponse {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

export class WechatPayTradeBillRequest extends jspb.Message {
  getBillDate(): WechatPayBillDate | undefined;
  setBillDate(value?: WechatPayBillDate): WechatPayTradeBillRequest;
  hasBillDate(): boolean;
  clearBillDate(): WechatPayTradeBillRequest;

  getBillType(): WechatPayTradeBillRequest.BillType;
  setBillType(value: WechatPayTradeBillRequest.BillType): WechatPayTradeBillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayTradeBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayTradeBillRequest): WechatPayTradeBillRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayTradeBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayTradeBillRequest;
  static deserializeBinaryFromReader(message: WechatPayTradeBillRequest, reader: jspb.BinaryReader): WechatPayTradeBillRequest;
}

export namespace WechatPayTradeBillRequest {
  export type AsObject = {
    billDate?: WechatPayBillDate.AsObject,
    billType: WechatPayTradeBillRequest.BillType,
  }

  export enum BillType { 
    ALL = 0,
    SUCCESS = 1,
    REFUND = 2,
  }
}

export class WechatPayFundFlowBillRequest extends jspb.Message {
  getBillDate(): WechatPayBillDate | undefined;
  setBillDate(value?: WechatPayBillDate): WechatPayFundFlowBillRequest;
  hasBillDate(): boolean;
  clearBillDate(): WechatPayFundFlowBillRequest;

  getAccountType(): WechatPayFundFlowBillRequest.AccountType;
  setAccountType(value: WechatPayFundFlowBillRequest.AccountType): WechatPayFundFlowBillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayFundFlowBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayFundFlowBillRequest): WechatPayFundFlowBillRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayFundFlowBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayFundFlowBillRequest;
  static deserializeBinaryFromReader(message: WechatPayFundFlowBillRequest, reader: jspb.BinaryReader): WechatPayFundFlowBillRequest;
}

export namespace WechatPayFundFlowBillRequest {
  export type AsObject = {
    billDate?: WechatPayBillDate.AsObject,
    accountType: WechatPayFundFlowBillRequest.AccountType,
  }

  export enum AccountType { 
    BASIC = 0,
    OPERATION = 1,
    FEES = 2,
  }
}

export enum WechatPayTarType { 
  GZIP = 0,
}
