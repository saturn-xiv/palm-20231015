/**
 * @fileoverview gRPC-Web generated client stub for palm.orchid.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.1
// source: orchid.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as orchid_pb from './orchid_pb';


export class WechatMiniProgramClient {
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

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/palm.orchid.v1.WechatMiniProgram/Login',
    grpcWeb.MethodType.UNARY,
    orchid_pb.WechatMiniProgramLoginRequest,
    orchid_pb.WechatMiniProgramLoginResponse,
    (request: orchid_pb.WechatMiniProgramLoginRequest) => {
      return request.serializeBinary();
    },
    orchid_pb.WechatMiniProgramLoginResponse.deserializeBinary
  );

  login(
    request: orchid_pb.WechatMiniProgramLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<orchid_pb.WechatMiniProgramLoginResponse>;

  login(
    request: orchid_pb.WechatMiniProgramLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatMiniProgramLoginResponse) => void): grpcWeb.ClientReadableStream<orchid_pb.WechatMiniProgramLoginResponse>;

  login(
    request: orchid_pb.WechatMiniProgramLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatMiniProgramLoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.orchid.v1.WechatMiniProgram/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.orchid.v1.WechatMiniProgram/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorPhoneNumber = new grpcWeb.MethodDescriptor(
    '/palm.orchid.v1.WechatMiniProgram/PhoneNumber',
    grpcWeb.MethodType.UNARY,
    orchid_pb.WechatMiniProgramPhoneNumberRequest,
    orchid_pb.WechatMiniProgramPhoneNumberResponse,
    (request: orchid_pb.WechatMiniProgramPhoneNumberRequest) => {
      return request.serializeBinary();
    },
    orchid_pb.WechatMiniProgramPhoneNumberResponse.deserializeBinary
  );

  phoneNumber(
    request: orchid_pb.WechatMiniProgramPhoneNumberRequest,
    metadata: grpcWeb.Metadata | null): Promise<orchid_pb.WechatMiniProgramPhoneNumberResponse>;

  phoneNumber(
    request: orchid_pb.WechatMiniProgramPhoneNumberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatMiniProgramPhoneNumberResponse) => void): grpcWeb.ClientReadableStream<orchid_pb.WechatMiniProgramPhoneNumberResponse>;

  phoneNumber(
    request: orchid_pb.WechatMiniProgramPhoneNumberRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatMiniProgramPhoneNumberResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.orchid.v1.WechatMiniProgram/PhoneNumber',
        request,
        metadata || {},
        this.methodDescriptorPhoneNumber,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.orchid.v1.WechatMiniProgram/PhoneNumber',
    request,
    metadata || {},
    this.methodDescriptorPhoneNumber);
  }

}

export class WechatOauth2Client {
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

  methodDescriptorQrConnect = new grpcWeb.MethodDescriptor(
    '/palm.orchid.v1.WechatOauth2/QrConnect',
    grpcWeb.MethodType.UNARY,
    orchid_pb.WechatOauth2QrConnectRequest,
    orchid_pb.WechatOauth2QrConnectResponse,
    (request: orchid_pb.WechatOauth2QrConnectRequest) => {
      return request.serializeBinary();
    },
    orchid_pb.WechatOauth2QrConnectResponse.deserializeBinary
  );

  qrConnect(
    request: orchid_pb.WechatOauth2QrConnectRequest,
    metadata: grpcWeb.Metadata | null): Promise<orchid_pb.WechatOauth2QrConnectResponse>;

  qrConnect(
    request: orchid_pb.WechatOauth2QrConnectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatOauth2QrConnectResponse) => void): grpcWeb.ClientReadableStream<orchid_pb.WechatOauth2QrConnectResponse>;

  qrConnect(
    request: orchid_pb.WechatOauth2QrConnectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatOauth2QrConnectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.orchid.v1.WechatOauth2/QrConnect',
        request,
        metadata || {},
        this.methodDescriptorQrConnect,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.orchid.v1.WechatOauth2/QrConnect',
    request,
    metadata || {},
    this.methodDescriptorQrConnect);
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/palm.orchid.v1.WechatOauth2/Login',
    grpcWeb.MethodType.UNARY,
    orchid_pb.WechatOauth2LoginRequest,
    orchid_pb.WechatOauth2LoginResponse,
    (request: orchid_pb.WechatOauth2LoginRequest) => {
      return request.serializeBinary();
    },
    orchid_pb.WechatOauth2LoginResponse.deserializeBinary
  );

  login(
    request: orchid_pb.WechatOauth2LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<orchid_pb.WechatOauth2LoginResponse>;

  login(
    request: orchid_pb.WechatOauth2LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatOauth2LoginResponse) => void): grpcWeb.ClientReadableStream<orchid_pb.WechatOauth2LoginResponse>;

  login(
    request: orchid_pb.WechatOauth2LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: orchid_pb.WechatOauth2LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.orchid.v1.WechatOauth2/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.orchid.v1.WechatOauth2/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

}

