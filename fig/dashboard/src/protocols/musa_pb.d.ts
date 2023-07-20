import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class WechatPayPrepayRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayPrepayRequest;

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


  export enum PayerOpenIdCase { 
    _PAYER_OPEN_ID_NOT_SET = 0,
    PAYER_OPEN_ID = 2,
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

export class WechatPayCreateTransferRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): WechatPayCreateTransferRequest;

  getBatch(): WechatPayCreateTransferRequest.Batch | undefined;
  setBatch(value?: WechatPayCreateTransferRequest.Batch): WechatPayCreateTransferRequest;
  hasBatch(): boolean;
  clearBatch(): WechatPayCreateTransferRequest;

  getDetailsList(): Array<WechatPayCreateTransferRequest.Detail>;
  setDetailsList(value: Array<WechatPayCreateTransferRequest.Detail>): WechatPayCreateTransferRequest;
  clearDetailsList(): WechatPayCreateTransferRequest;
  addDetails(value?: WechatPayCreateTransferRequest.Detail, index?: number): WechatPayCreateTransferRequest.Detail;

  getSceneId(): string;
  setSceneId(value: string): WechatPayCreateTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayCreateTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayCreateTransferRequest): WechatPayCreateTransferRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayCreateTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayCreateTransferRequest;
  static deserializeBinaryFromReader(message: WechatPayCreateTransferRequest, reader: jspb.BinaryReader): WechatPayCreateTransferRequest;
}

export namespace WechatPayCreateTransferRequest {
  export type AsObject = {
    appId: string,
    batch?: WechatPayCreateTransferRequest.Batch.AsObject,
    detailsList: Array<WechatPayCreateTransferRequest.Detail.AsObject>,
    sceneId: string,
  }

  export class Batch extends jspb.Message {
    getName(): string;
    setName(value: string): Batch;

    getRemark(): string;
    setRemark(value: string): Batch;

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

export class WechatPayCreateTransferResponse extends jspb.Message {
  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayCreateTransferResponse;

  getDetailsList(): Array<WechatPayCreateTransferResponse.Detail>;
  setDetailsList(value: Array<WechatPayCreateTransferResponse.Detail>): WechatPayCreateTransferResponse;
  clearDetailsList(): WechatPayCreateTransferResponse;
  addDetails(value?: WechatPayCreateTransferResponse.Detail, index?: number): WechatPayCreateTransferResponse.Detail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayCreateTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayCreateTransferResponse): WechatPayCreateTransferResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayCreateTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayCreateTransferResponse;
  static deserializeBinaryFromReader(message: WechatPayCreateTransferResponse, reader: jspb.BinaryReader): WechatPayCreateTransferResponse;
}

export namespace WechatPayCreateTransferResponse {
  export type AsObject = {
    outBatchNo: string,
    detailsList: Array<WechatPayCreateTransferResponse.Detail.AsObject>,
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

}

export class WechatPayQueryTransferRequest extends jspb.Message {
  getOutBatchNo(): string;
  setOutBatchNo(value: string): WechatPayQueryTransferRequest;

  getOffset(): number;
  setOffset(value: number): WechatPayQueryTransferRequest;

  getLimit(): number;
  setLimit(value: number): WechatPayQueryTransferRequest;

  getDetailStatus(): WechatPayQueryTransferRequest.DetailStatus;
  setDetailStatus(value: WechatPayQueryTransferRequest.DetailStatus): WechatPayQueryTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryTransferRequest): WechatPayQueryTransferRequest.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryTransferRequest;
  static deserializeBinaryFromReader(message: WechatPayQueryTransferRequest, reader: jspb.BinaryReader): WechatPayQueryTransferRequest;
}

export namespace WechatPayQueryTransferRequest {
  export type AsObject = {
    outBatchNo: string,
    offset: number,
    limit: number,
    detailStatus: WechatPayQueryTransferRequest.DetailStatus,
  }

  export enum DetailStatus { 
    ALL = 0,
    SUCCESS = 1,
    FAIL = 2,
  }
}

export class WechatPayQueryTransferResponse extends jspb.Message {
  getBatch(): WechatPayQueryTransferResponse.Batch | undefined;
  setBatch(value?: WechatPayQueryTransferResponse.Batch): WechatPayQueryTransferResponse;
  hasBatch(): boolean;
  clearBatch(): WechatPayQueryTransferResponse;

  getDetailsList(): Array<WechatPayQueryTransferResponse.Detail>;
  setDetailsList(value: Array<WechatPayQueryTransferResponse.Detail>): WechatPayQueryTransferResponse;
  clearDetailsList(): WechatPayQueryTransferResponse;
  addDetails(value?: WechatPayQueryTransferResponse.Detail, index?: number): WechatPayQueryTransferResponse.Detail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WechatPayQueryTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WechatPayQueryTransferResponse): WechatPayQueryTransferResponse.AsObject;
  static serializeBinaryToWriter(message: WechatPayQueryTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WechatPayQueryTransferResponse;
  static deserializeBinaryFromReader(message: WechatPayQueryTransferResponse, reader: jspb.BinaryReader): WechatPayQueryTransferResponse;
}

export namespace WechatPayQueryTransferResponse {
  export type AsObject = {
    batch?: WechatPayQueryTransferResponse.Batch.AsObject,
    detailsList: Array<WechatPayQueryTransferResponse.Detail.AsObject>,
  }

  export class Detail extends jspb.Message {
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
      outDetailNo: string,
      status: string,
    }
  }


  export class Batch extends jspb.Message {
    getStatus(): string;
    setStatus(value: string): Batch;

    getType(): string;
    setType(value: string): Batch;

    getCloseReason(): string;
    setCloseReason(value: string): Batch;
    hasCloseReason(): boolean;
    clearCloseReason(): Batch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Batch.AsObject;
    static toObject(includeInstance: boolean, msg: Batch): Batch.AsObject;
    static serializeBinaryToWriter(message: Batch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Batch;
    static deserializeBinaryFromReader(message: Batch, reader: jspb.BinaryReader): Batch;
  }

  export namespace Batch {
    export type AsObject = {
      status: string,
      type: string,
      closeReason?: string,
    }

    export enum CloseReasonCase { 
      _CLOSE_REASON_NOT_SET = 0,
      CLOSE_REASON = 9,
    }
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
