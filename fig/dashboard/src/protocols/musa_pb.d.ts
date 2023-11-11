import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class WechatPayPrepayRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayPrepayRequest;

  getOutTradeNo(): string;
  setOutTradeNo(value: string): WechatPayPrepayRequest;
  hasOutTradeNo(): boolean;
  clearOutTradeNo(): WechatPayPrepayRequest;

  getPayerOpenId(): string;
  setPayerOpenId(value: string): WechatPayPrepayRequest;
  hasPayerOpenId(): boolean;
  clearPayerOpenId(): WechatPayPrepayRequest;

  getAmount(): WechatPayPrepayRequest.Amount | undefined;
  setAmount(value?: WechatPayPrepayRequest.Amount): WechatPayPrepayRequest;
  hasAmount(): boolean;
  clearAmount(): WechatPayPrepayRequest;

  getDescription(): string;
  setDescription(value: string): WechatPayPrepayRequest;

  getNotifyHost(): string;
  setNotifyHost(value: string): WechatPayPrepayRequest;

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
    outTradeNo?: string,
    payerOpenId?: string,
    amount?: WechatPayPrepayRequest.Amount.AsObject,
    description: string,
    notifyHost: string,
  }

  export class Amount extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): Amount;

    getCurrency(): WechatPayCurrency;
    setCurrency(value: WechatPayCurrency): Amount;

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
      currency: WechatPayCurrency,
    }
  }


  export enum OutTradeNoCase { 
    _OUT_TRADE_NO_NOT_SET = 0,
    OUT_TRADE_NO = 2,
  }

  export enum PayerOpenIdCase { 
    _PAYER_OPEN_ID_NOT_SET = 0,
    PAYER_OPEN_ID = 11,
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

export class Error extends jspb.Message {
  getCode(): string;
  setCode(value: string): Error;

  getMessage(): string;
  setMessage(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    code: string,
    message: string,
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
  getTradeState(): string;
  setTradeState(value: string): WechatPayTradeResponse;

  getTradeStateDesc(): string;
  setTradeStateDesc(value: string): WechatPayTradeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayTradeResponse): WechatPayTradeResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayTradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayTradeResponse;
  static deserializeBinaryFromReader(message: WechatPayTradeResponse, reader: jspb.BinaryReader): WechatPayTradeResponse;
}

export namespace WechatPayTradeResponse {
  export type AsObject = {
    tradeState: string,
    tradeStateDesc: string,
  }
}

export class WechatPayQueryOrderByIdRequest extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): WechatPayQueryOrderByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryOrderByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryOrderByIdRequest): WechatPayQueryOrderByIdRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryOrderByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryOrderByIdRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryOrderByIdRequest, reader: jspb.BinaryReader): WechatPayQueryOrderByIdRequest;
}

export namespace WechatPayQueryOrderByIdRequest {
  export type AsObject = {
    transactionId: string,
  }
}

export class WechatPayQueryOrderByOutTradeNoRequest extends jspb.Message {
  getOutTradeNo(): string;
  setOutTradeNo(value: string): WechatPayQueryOrderByOutTradeNoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryOrderByOutTradeNoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryOrderByOutTradeNoRequest): WechatPayQueryOrderByOutTradeNoRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryOrderByOutTradeNoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryOrderByOutTradeNoRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryOrderByOutTradeNoRequest, reader: jspb.BinaryReader): WechatPayQueryOrderByOutTradeNoRequest;
}

export namespace WechatPayQueryOrderByOutTradeNoRequest {
  export type AsObject = {
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

export class WechatPayCreateRefundRequest extends jspb.Message {
  getOutTradeNo(): string;
  setOutTradeNo(value: string): WechatPayCreateRefundRequest;

  getReason(): string;
  setReason(value: string): WechatPayCreateRefundRequest;

  getAmount(): WechatPayCreateRefundRequest.Amount | undefined;
  setAmount(value?: WechatPayCreateRefundRequest.Amount): WechatPayCreateRefundRequest;
  hasAmount(): boolean;
  clearAmount(): WechatPayCreateRefundRequest;

  getNotifyHost(): string;
  setNotifyHost(value: string): WechatPayCreateRefundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayCreateRefundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayCreateRefundRequest): WechatPayCreateRefundRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayCreateRefundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayCreateRefundRequest;
  static deserializeBinaryFromReader(message: WechatPayCreateRefundRequest, reader: jspb.BinaryReader): WechatPayCreateRefundRequest;
}

export namespace WechatPayCreateRefundRequest {
  export type AsObject = {
    outTradeNo: string,
    reason: string,
    amount?: WechatPayCreateRefundRequest.Amount.AsObject,
    notifyHost: string,
  }

  export class Amount extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): Amount;

    getRefund(): number;
    setRefund(value: number): Amount;

    getCurrency(): WechatPayCurrency;
    setCurrency(value: WechatPayCurrency): Amount;

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
      refund: number,
      currency: WechatPayCurrency,
    }
  }

}

export class WechatPayQueryRefundRequest extends jspb.Message {
  getOutRefundNo(): string;
  setOutRefundNo(value: string): WechatPayQueryRefundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryRefundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryRefundRequest): WechatPayQueryRefundRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryRefundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryRefundRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryRefundRequest, reader: jspb.BinaryReader): WechatPayQueryRefundRequest;
}

export namespace WechatPayQueryRefundRequest {
  export type AsObject = {
    outRefundNo: string,
  }
}

export class WechatPayRefundResponse extends jspb.Message {
  getOutRefundNo(): string;
  setOutRefundNo(value: string): WechatPayRefundResponse;

  getChannel(): string;
  setChannel(value: string): WechatPayRefundResponse;

  getStatus(): string;
  setStatus(value: string): WechatPayRefundResponse;

  getUserReceivedAccount(): string;
  setUserReceivedAccount(value: string): WechatPayRefundResponse;

  getCreateTime(): string;
  setCreateTime(value: string): WechatPayRefundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayRefundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayRefundResponse): WechatPayRefundResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayRefundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayRefundResponse;
  static deserializeBinaryFromReader(message: WechatPayRefundResponse, reader: jspb.BinaryReader): WechatPayRefundResponse;
}

export namespace WechatPayRefundResponse {
  export type AsObject = {
    outRefundNo: string,
    channel: string,
    status: string,
    userReceivedAccount: string,
    createTime: string,
  }
}

export class WechatPayTransferGetElectronicReceiptRequest extends jspb.Message {
  getAcceptType(): WechatPayTransferGetElectronicReceiptRequest.AcceptType;
  setAcceptType(value: WechatPayTransferGetElectronicReceiptRequest.AcceptType): WechatPayTransferGetElectronicReceiptRequest;

  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayTransferGetElectronicReceiptRequest;
  hasOutBatchNo(): boolean;
  clearOutBatchNo(): WechatPayTransferGetElectronicReceiptRequest;

  getOutDetailNo(): string;
  setOutDetailNo(value: string): WechatPayTransferGetElectronicReceiptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayTransferGetElectronicReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayTransferGetElectronicReceiptRequest): WechatPayTransferGetElectronicReceiptRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayTransferGetElectronicReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayTransferGetElectronicReceiptRequest;
  static deserializeBinaryFromReader(message: WechatPayTransferGetElectronicReceiptRequest, reader: jspb.BinaryReader): WechatPayTransferGetElectronicReceiptRequest;
}

export namespace WechatPayTransferGetElectronicReceiptRequest {
  export type AsObject = {
    acceptType: WechatPayTransferGetElectronicReceiptRequest.AcceptType,
    outBatchNo?: string,
    outDetailNo: string,
  }

  export enum AcceptType { 
    BATCH_TRANSFER = 0,
    TRANSFER_TO_POCKET = 1,
    TRANSFER_TO_BANK = 2,
  }

  export enum OutBatchNoCase { 
    _OUT_BATCH_NO_NOT_SET = 0,
    OUT_BATCH_NO = 2,
  }
}

export class WechatPayTransferGetReceiptResponse extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): WechatPayTransferGetReceiptResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayTransferGetReceiptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayTransferGetReceiptResponse): WechatPayTransferGetReceiptResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayTransferGetReceiptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayTransferGetReceiptResponse;
  static deserializeBinaryFromReader(message: WechatPayTransferGetReceiptResponse, reader: jspb.BinaryReader): WechatPayTransferGetReceiptResponse;
}

export namespace WechatPayTransferGetReceiptResponse {
  export type AsObject = {
    payload: Uint8Array | string,
  }
}

export class WechatPayTransferGetBillReceiptRequest extends jspb.Message {
  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayTransferGetBillReceiptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayTransferGetBillReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayTransferGetBillReceiptRequest): WechatPayTransferGetBillReceiptRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayTransferGetBillReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayTransferGetBillReceiptRequest;
  static deserializeBinaryFromReader(message: WechatPayTransferGetBillReceiptRequest, reader: jspb.BinaryReader): WechatPayTransferGetBillReceiptRequest;
}

export namespace WechatPayTransferGetBillReceiptRequest {
  export type AsObject = {
    outBatchNo: string,
  }
}

export class WechatPayExecuteBatchTransferRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayExecuteBatchTransferRequest;

  getBatch(): WechatPayExecuteBatchTransferRequest.Batch | undefined;
  setBatch(value?: WechatPayExecuteBatchTransferRequest.Batch): WechatPayExecuteBatchTransferRequest;
  hasBatch(): boolean;
  clearBatch(): WechatPayExecuteBatchTransferRequest;

  getDetailsList(): Array<WechatPayExecuteBatchTransferRequest.Detail>;
  setDetailsList(value: Array<WechatPayExecuteBatchTransferRequest.Detail>): WechatPayExecuteBatchTransferRequest;
  clearDetailsList(): WechatPayExecuteBatchTransferRequest;
  addDetails(value?: WechatPayExecuteBatchTransferRequest.Detail, index?: number): WechatPayExecuteBatchTransferRequest.Detail;

  getSceneId(): string;
  setSceneId(value: string): WechatPayExecuteBatchTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayExecuteBatchTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayExecuteBatchTransferRequest): WechatPayExecuteBatchTransferRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayExecuteBatchTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayExecuteBatchTransferRequest;
  static deserializeBinaryFromReader(message: WechatPayExecuteBatchTransferRequest, reader: jspb.BinaryReader): WechatPayExecuteBatchTransferRequest;
}

export namespace WechatPayExecuteBatchTransferRequest {
  export type AsObject = {
    appId: string,
    batch?: WechatPayExecuteBatchTransferRequest.Batch.AsObject,
    detailsList: Array<WechatPayExecuteBatchTransferRequest.Detail.AsObject>,
    sceneId: string,
  }

  export class Batch extends jspb.Message {
    getName(): string;
    setName(value: string): Batch;

    getRemark(): string;
    setRemark(value: string): Batch;

    getOutNo(): string;
    setOutNo(value: string): Batch;
    hasOutNo(): boolean;
    clearOutNo(): Batch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Batch.AsObject;
    static toObject(includeInstance: boolean, msg: Batch): Batch.AsObject;
    static serializeBinaryToWriter(message: Batch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Batch;
    static deserializeBinaryFromReader(message: Batch, reader: jspb.BinaryReader): Batch;
  }

  export namespace Batch {
    export type AsObject = {
      name: string,
      remark: string,
      outNo?: string,
    }

    export enum OutNoCase { 
      _OUT_NO_NOT_SET = 0,
      OUT_NO = 3,
    }
  }


  export class Detail extends jspb.Message {
    getOpenId(): string;
    setOpenId(value: string): Detail;

    getUsername(): string;
    setUsername(value: string): Detail;

    getAmount(): number;
    setAmount(value: number): Detail;

    getRemark(): string;
    setRemark(value: string): Detail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Detail.AsObject;
    static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
    static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Detail;
    static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
  }

  export namespace Detail {
    export type AsObject = {
      openId: string,
      username: string,
      amount: number,
      remark: string,
    }
  }

}

export class WechatPayExecuteBatchTransferResponse extends jspb.Message {
  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayExecuteBatchTransferResponse;

  getDetailsList(): Array<WechatPayExecuteBatchTransferResponse.Detail>;
  setDetailsList(value: Array<WechatPayExecuteBatchTransferResponse.Detail>): WechatPayExecuteBatchTransferResponse;
  clearDetailsList(): WechatPayExecuteBatchTransferResponse;
  addDetails(value?: WechatPayExecuteBatchTransferResponse.Detail, index?: number): WechatPayExecuteBatchTransferResponse.Detail;

  getSucceeded(): WechatPayExecuteBatchTransferResponse.Succeeded | undefined;
  setSucceeded(value?: WechatPayExecuteBatchTransferResponse.Succeeded): WechatPayExecuteBatchTransferResponse;
  hasSucceeded(): boolean;
  clearSucceeded(): WechatPayExecuteBatchTransferResponse;

  getError(): Error | undefined;
  setError(value?: Error): WechatPayExecuteBatchTransferResponse;
  hasError(): boolean;
  clearError(): WechatPayExecuteBatchTransferResponse;

  getPayloadCase(): WechatPayExecuteBatchTransferResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayExecuteBatchTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayExecuteBatchTransferResponse): WechatPayExecuteBatchTransferResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayExecuteBatchTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayExecuteBatchTransferResponse;
  static deserializeBinaryFromReader(message: WechatPayExecuteBatchTransferResponse, reader: jspb.BinaryReader): WechatPayExecuteBatchTransferResponse;
}

export namespace WechatPayExecuteBatchTransferResponse {
  export type AsObject = {
    outBatchNo: string,
    detailsList: Array<WechatPayExecuteBatchTransferResponse.Detail.AsObject>,
    succeeded?: WechatPayExecuteBatchTransferResponse.Succeeded.AsObject,
    error?: Error.AsObject,
  }

  export class Detail extends jspb.Message {
    getOpenId(): string;
    setOpenId(value: string): Detail;

    getOutDetailNo(): string;
    setOutDetailNo(value: string): Detail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Detail.AsObject;
    static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
    static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Detail;
    static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
  }

  export namespace Detail {
    export type AsObject = {
      openId: string,
      outDetailNo: string,
    }
  }


  export class Succeeded extends jspb.Message {
    getBatchId(): string;
    setBatchId(value: string): Succeeded;

    getCreateTime(): string;
    setCreateTime(value: string): Succeeded;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Succeeded.AsObject;
    static toObject(includeInstance: boolean, msg: Succeeded): Succeeded.AsObject;
    static serializeBinaryToWriter(message: Succeeded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Succeeded;
    static deserializeBinaryFromReader(message: Succeeded, reader: jspb.BinaryReader): Succeeded;
  }

  export namespace Succeeded {
    export type AsObject = {
      batchId: string,
      createTime: string,
    }
  }


  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    SUCCEEDED = 11,
    ERROR = 12,
  }
}

export class WechatPayQueryBatchTransferRequest extends jspb.Message {
  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayQueryBatchTransferRequest;

  getOffset(): number;
  setOffset(value: number): WechatPayQueryBatchTransferRequest;

  getLimit(): number;
  setLimit(value: number): WechatPayQueryBatchTransferRequest;

  getDetailStatus(): WechatPayQueryBatchTransferRequest.DetailStatus;
  setDetailStatus(value: WechatPayQueryBatchTransferRequest.DetailStatus): WechatPayQueryBatchTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryBatchTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryBatchTransferRequest): WechatPayQueryBatchTransferRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryBatchTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryBatchTransferRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryBatchTransferRequest, reader: jspb.BinaryReader): WechatPayQueryBatchTransferRequest;
}

export namespace WechatPayQueryBatchTransferRequest {
  export type AsObject = {
    outBatchNo: string,
    offset: number,
    limit: number,
    detailStatus: WechatPayQueryBatchTransferRequest.DetailStatus,
  }

  export enum DetailStatus { 
    ALL = 0,
    SUCCESS = 1,
    WAIT_PAY = 2,
    FAIL = 9,
  }
}

export class WechatPayQueryBatchTransferResponse extends jspb.Message {
  getBatch(): WechatPayQueryBatchTransferResponse.Batch | undefined;
  setBatch(value?: WechatPayQueryBatchTransferResponse.Batch): WechatPayQueryBatchTransferResponse;
  hasBatch(): boolean;
  clearBatch(): WechatPayQueryBatchTransferResponse;

  getDetailsList(): Array<WechatPayQueryBatchTransferResponse.Detail>;
  setDetailsList(value: Array<WechatPayQueryBatchTransferResponse.Detail>): WechatPayQueryBatchTransferResponse;
  clearDetailsList(): WechatPayQueryBatchTransferResponse;
  addDetails(value?: WechatPayQueryBatchTransferResponse.Detail, index?: number): WechatPayQueryBatchTransferResponse.Detail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryBatchTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryBatchTransferResponse): WechatPayQueryBatchTransferResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryBatchTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryBatchTransferResponse;
  static deserializeBinaryFromReader(message: WechatPayQueryBatchTransferResponse, reader: jspb.BinaryReader): WechatPayQueryBatchTransferResponse;
}

export namespace WechatPayQueryBatchTransferResponse {
  export type AsObject = {
    batch?: WechatPayQueryBatchTransferResponse.Batch.AsObject,
    detailsList: Array<WechatPayQueryBatchTransferResponse.Detail.AsObject>,
  }

  export class Detail extends jspb.Message {
    getDetailId(): string;
    setDetailId(value: string): Detail;

    getOutDetailNo(): string;
    setOutDetailNo(value: string): Detail;

    getStatus(): string;
    setStatus(value: string): Detail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Detail.AsObject;
    static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
    static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Detail;
    static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
  }

  export namespace Detail {
    export type AsObject = {
      detailId: string,
      outDetailNo: string,
      status: string,
    }
  }


  export class Batch extends jspb.Message {
    getAppId(): string;
    setAppId(value: string): Batch;

    getMchId(): string;
    setMchId(value: string): Batch;

    getTransferSceneId(): string;
    setTransferSceneId(value: string): Batch;

    getBatchId(): string;
    setBatchId(value: string): Batch;

    getOutBatchNo(): string;
    setOutBatchNo(value: string): Batch;

    getBatchStatus(): string;
    setBatchStatus(value: string): Batch;

    getBatchType(): string;
    setBatchType(value: string): Batch;

    getBatchName(): string;
    setBatchName(value: string): Batch;

    getBatchRemark(): string;
    setBatchRemark(value: string): Batch;

    getCloseReason(): string;
    setCloseReason(value: string): Batch;
    hasCloseReason(): boolean;
    clearCloseReason(): Batch;

    getTotalAmount(): number;
    setTotalAmount(value: number): Batch;

    getTotalNum(): number;
    setTotalNum(value: number): Batch;

    getCreateTime(): string;
    setCreateTime(value: string): Batch;
    hasCreateTime(): boolean;
    clearCreateTime(): Batch;

    getUpdateTime(): string;
    setUpdateTime(value: string): Batch;
    hasUpdateTime(): boolean;
    clearUpdateTime(): Batch;

    getSuccessAmount(): number;
    setSuccessAmount(value: number): Batch;
    hasSuccessAmount(): boolean;
    clearSuccessAmount(): Batch;

    getSuccessNum(): number;
    setSuccessNum(value: number): Batch;
    hasSuccessNum(): boolean;
    clearSuccessNum(): Batch;

    getFailAmount(): number;
    setFailAmount(value: number): Batch;
    hasFailAmount(): boolean;
    clearFailAmount(): Batch;

    getFailNum(): number;
    setFailNum(value: number): Batch;
    hasFailNum(): boolean;
    clearFailNum(): Batch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Batch.AsObject;
    static toObject(includeInstance: boolean, msg: Batch): Batch.AsObject;
    static serializeBinaryToWriter(message: Batch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Batch;
    static deserializeBinaryFromReader(message: Batch, reader: jspb.BinaryReader): Batch;
  }

  export namespace Batch {
    export type AsObject = {
      appId: string,
      mchId: string,
      transferSceneId: string,
      batchId: string,
      outBatchNo: string,
      batchStatus: string,
      batchType: string,
      batchName: string,
      batchRemark: string,
      closeReason?: string,
      totalAmount: number,
      totalNum: number,
      createTime?: string,
      updateTime?: string,
      successAmount?: number,
      successNum?: number,
      failAmount?: number,
      failNum?: number,
    }

    export enum CloseReasonCase { 
      _CLOSE_REASON_NOT_SET = 0,
      CLOSE_REASON = 21,
    }

    export enum CreateTimeCase { 
      _CREATE_TIME_NOT_SET = 0,
      CREATE_TIME = 24,
    }

    export enum UpdateTimeCase { 
      _UPDATE_TIME_NOT_SET = 0,
      UPDATE_TIME = 25,
    }

    export enum SuccessAmountCase { 
      _SUCCESS_AMOUNT_NOT_SET = 0,
      SUCCESS_AMOUNT = 26,
    }

    export enum SuccessNumCase { 
      _SUCCESS_NUM_NOT_SET = 0,
      SUCCESS_NUM = 27,
    }

    export enum FailAmountCase { 
      _FAIL_AMOUNT_NOT_SET = 0,
      FAIL_AMOUNT = 28,
    }

    export enum FailNumCase { 
      _FAIL_NUM_NOT_SET = 0,
      FAIL_NUM = 29,
    }
  }

}

export class WechatPayQueryTransferDetailRequest extends jspb.Message {
  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayQueryTransferDetailRequest;

  getOutDetailNo(): string;
  setOutDetailNo(value: string): WechatPayQueryTransferDetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryTransferDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryTransferDetailRequest): WechatPayQueryTransferDetailRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryTransferDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryTransferDetailRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryTransferDetailRequest, reader: jspb.BinaryReader): WechatPayQueryTransferDetailRequest;
}

export namespace WechatPayQueryTransferDetailRequest {
  export type AsObject = {
    outBatchNo: string,
    outDetailNo: string,
  }
}

export class WechatPayQueryTransferDetailResponse extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayQueryTransferDetailResponse;

  getMchId(): string;
  setMchId(value: string): WechatPayQueryTransferDetailResponse;

  getOpenId(): string;
  setOpenId(value: string): WechatPayQueryTransferDetailResponse;

  getUserName(): string;
  setUserName(value: string): WechatPayQueryTransferDetailResponse;
  hasUserName(): boolean;
  clearUserName(): WechatPayQueryTransferDetailResponse;

  getBatchId(): string;
  setBatchId(value: string): WechatPayQueryTransferDetailResponse;

  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayQueryTransferDetailResponse;

  getOutDetailNo(): string;
  setOutDetailNo(value: string): WechatPayQueryTransferDetailResponse;

  getDetailId(): string;
  setDetailId(value: string): WechatPayQueryTransferDetailResponse;

  getDetailStatus(): string;
  setDetailStatus(value: string): WechatPayQueryTransferDetailResponse;

  getTransferAmount(): number;
  setTransferAmount(value: number): WechatPayQueryTransferDetailResponse;

  getTransferRemark(): string;
  setTransferRemark(value: string): WechatPayQueryTransferDetailResponse;

  getFailReason(): string;
  setFailReason(value: string): WechatPayQueryTransferDetailResponse;
  hasFailReason(): boolean;
  clearFailReason(): WechatPayQueryTransferDetailResponse;

  getInitiateTime(): string;
  setInitiateTime(value: string): WechatPayQueryTransferDetailResponse;

  getUpdateTime(): string;
  setUpdateTime(value: string): WechatPayQueryTransferDetailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryTransferDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryTransferDetailResponse): WechatPayQueryTransferDetailResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryTransferDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryTransferDetailResponse;
  static deserializeBinaryFromReader(message: WechatPayQueryTransferDetailResponse, reader: jspb.BinaryReader): WechatPayQueryTransferDetailResponse;
}

export namespace WechatPayQueryTransferDetailResponse {
  export type AsObject = {
    appId: string,
    mchId: string,
    openId: string,
    userName?: string,
    batchId: string,
    outBatchNo: string,
    outDetailNo: string,
    detailId: string,
    detailStatus: string,
    transferAmount: number,
    transferRemark: string,
    failReason?: string,
    initiateTime: string,
    updateTime: string,
  }

  export enum UserNameCase { 
    _USER_NAME_NOT_SET = 0,
    USER_NAME = 4,
  }

  export enum FailReasonCase { 
    _FAIL_REASON_NOT_SET = 0,
    FAIL_REASON = 18,
  }
}

export enum WechatPayCurrency { 
  CNY = 0,
}
export enum WechatPayNotifyAction { 
  TRANSCATION = 0,
  REFUND = 1,
}
export enum WechatPayTarType { 
  GZIP = 0,
}
