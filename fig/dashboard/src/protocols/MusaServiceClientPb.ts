/**
 * @fileoverview gRPC-Web generated client stub for palm.musa.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: musa.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as musa_pb from './musa_pb';


export class WechatPayNativeClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorPrepay = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayNative/Prepay',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayPrepayRequest,
    musa_pb.WechatPayNativeQrCodeUrlResponse,
    (request: musa_pb.WechatPayPrepayRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayNativeQrCodeUrlResponse.deserializeBinary
  );

  prepay(
    request: musa_pb.WechatPayPrepayRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayNativeQrCodeUrlResponse>;

  prepay(
    request: musa_pb.WechatPayPrepayRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayNativeQrCodeUrlResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayNativeQrCodeUrlResponse>;

  prepay(
    request: musa_pb.WechatPayPrepayRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayNativeQrCodeUrlResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayNative/Prepay',
        request,
        metadata || {},
        this.methodDescriptorPrepay,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayNative/Prepay',
    request,
    metadata || {},
    this.methodDescriptorPrepay);
  }

}

export class WechatPayJsapiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorPrepay = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayJsapi/Prepay',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayPrepayRequest,
    musa_pb.WechatPayJsapiPrepayIdResponse,
    (request: musa_pb.WechatPayPrepayRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayJsapiPrepayIdResponse.deserializeBinary
  );

  prepay(
    request: musa_pb.WechatPayPrepayRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayJsapiPrepayIdResponse>;

  prepay(
    request: musa_pb.WechatPayPrepayRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayJsapiPrepayIdResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayJsapiPrepayIdResponse>;

  prepay(
    request: musa_pb.WechatPayPrepayRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayJsapiPrepayIdResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayJsapi/Prepay',
        request,
        metadata || {},
        this.methodDescriptorPrepay,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayJsapi/Prepay',
    request,
    metadata || {},
    this.methodDescriptorPrepay);
  }

  methodDescriptorQueryOrderByOutTradeNo = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayJsapi/QueryOrderByOutTradeNo',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayQueryOrderByOutTradeNoRequest,
    musa_pb.WechatPayTradeResponse,
    (request: musa_pb.WechatPayQueryOrderByOutTradeNoRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayTradeResponse.deserializeBinary
  );

  queryOrderByOutTradeNo(
    request: musa_pb.WechatPayQueryOrderByOutTradeNoRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayTradeResponse>;

  queryOrderByOutTradeNo(
    request: musa_pb.WechatPayQueryOrderByOutTradeNoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayTradeResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayTradeResponse>;

  queryOrderByOutTradeNo(
    request: musa_pb.WechatPayQueryOrderByOutTradeNoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayTradeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayJsapi/QueryOrderByOutTradeNo',
        request,
        metadata || {},
        this.methodDescriptorQueryOrderByOutTradeNo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayJsapi/QueryOrderByOutTradeNo',
    request,
    metadata || {},
    this.methodDescriptorQueryOrderByOutTradeNo);
  }

  methodDescriptorQueryOrderById = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayJsapi/QueryOrderById',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayQueryOrderByIdRequest,
    musa_pb.WechatPayTradeResponse,
    (request: musa_pb.WechatPayQueryOrderByIdRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayTradeResponse.deserializeBinary
  );

  queryOrderById(
    request: musa_pb.WechatPayQueryOrderByIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayTradeResponse>;

  queryOrderById(
    request: musa_pb.WechatPayQueryOrderByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayTradeResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayTradeResponse>;

  queryOrderById(
    request: musa_pb.WechatPayQueryOrderByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayTradeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayJsapi/QueryOrderById',
        request,
        metadata || {},
        this.methodDescriptorQueryOrderById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayJsapi/QueryOrderById',
    request,
    metadata || {},
    this.methodDescriptorQueryOrderById);
  }

  methodDescriptorCloseOrder = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayJsapi/CloseOrder',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayCloseOrderRequest,
    google_protobuf_empty_pb.Empty,
    (request: musa_pb.WechatPayCloseOrderRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  closeOrder(
    request: musa_pb.WechatPayCloseOrderRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  closeOrder(
    request: musa_pb.WechatPayCloseOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  closeOrder(
    request: musa_pb.WechatPayCloseOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayJsapi/CloseOrder',
        request,
        metadata || {},
        this.methodDescriptorCloseOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayJsapi/CloseOrder',
    request,
    metadata || {},
    this.methodDescriptorCloseOrder);
  }

}

export class WechatPayNotificationClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptortransaction = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayNotification/transaction',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayNotificationRequest,
    musa_pb.WechatPayNotificationTransactionResponse,
    (request: musa_pb.WechatPayNotificationRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayNotificationTransactionResponse.deserializeBinary
  );

  transaction(
    request: musa_pb.WechatPayNotificationRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayNotificationTransactionResponse>;

  transaction(
    request: musa_pb.WechatPayNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayNotificationTransactionResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayNotificationTransactionResponse>;

  transaction(
    request: musa_pb.WechatPayNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayNotificationTransactionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayNotification/transaction',
        request,
        metadata || {},
        this.methodDescriptortransaction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayNotification/transaction',
    request,
    metadata || {},
    this.methodDescriptortransaction);
  }

  methodDescriptorrefund = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayNotification/refund',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayNotificationRequest,
    musa_pb.WechatPayNotificationRefundResponse,
    (request: musa_pb.WechatPayNotificationRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayNotificationRefundResponse.deserializeBinary
  );

  refund(
    request: musa_pb.WechatPayNotificationRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayNotificationRefundResponse>;

  refund(
    request: musa_pb.WechatPayNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayNotificationRefundResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayNotificationRefundResponse>;

  refund(
    request: musa_pb.WechatPayNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayNotificationRefundResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayNotification/refund',
        request,
        metadata || {},
        this.methodDescriptorrefund,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayNotification/refund',
    request,
    metadata || {},
    this.methodDescriptorrefund);
  }

}

export class WechatPayBillClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorTrade = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayBill/Trade',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayTradeBillRequest,
    musa_pb.WechatPayBillResponse,
    (request: musa_pb.WechatPayTradeBillRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayBillResponse.deserializeBinary
  );

  trade(
    request: musa_pb.WechatPayTradeBillRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayBillResponse>;

  trade(
    request: musa_pb.WechatPayTradeBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayBillResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayBillResponse>;

  trade(
    request: musa_pb.WechatPayTradeBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayBillResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayBill/Trade',
        request,
        metadata || {},
        this.methodDescriptorTrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayBill/Trade',
    request,
    metadata || {},
    this.methodDescriptorTrade);
  }

  methodDescriptorFundFlow = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.WechatPayBill/FundFlow',
    grpcWeb.MethodType.UNARY,
    musa_pb.WechatPayFundFlowBillRequest,
    musa_pb.WechatPayBillResponse,
    (request: musa_pb.WechatPayFundFlowBillRequest) => {
      return request.serializeBinary();
    },
    musa_pb.WechatPayBillResponse.deserializeBinary
  );

  fundFlow(
    request: musa_pb.WechatPayFundFlowBillRequest,
    metadata: grpcWeb.Metadata | null): Promise<musa_pb.WechatPayBillResponse>;

  fundFlow(
    request: musa_pb.WechatPayFundFlowBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayBillResponse) => void): grpcWeb.ClientReadableStream<musa_pb.WechatPayBillResponse>;

  fundFlow(
    request: musa_pb.WechatPayFundFlowBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: musa_pb.WechatPayBillResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.WechatPayBill/FundFlow',
        request,
        metadata || {},
        this.methodDescriptorFundFlow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.WechatPayBill/FundFlow',
    request,
    metadata || {},
    this.methodDescriptorFundFlow);
  }

}

export class HealthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCheck = new grpcWeb.MethodDescriptor(
    '/palm.musa.v1.Health/Check',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  check(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  check(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  check(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.musa.v1.Health/Check',
        request,
        metadata || {},
        this.methodDescriptorCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.musa.v1.Health/Check',
    request,
    metadata || {},
    this.methodDescriptorCheck);
  }

}

