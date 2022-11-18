/**
 * @fileoverview gRPC-Web generated client stub for palm.ops.router.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.6
// source: ops-router.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ops$router_pb from './ops-router_pb';


export class RouterClient {
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

  methodDescriptorScan = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/Scan',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  scan(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  scan(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  scan(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/Scan',
        request,
        metadata || {},
        this.methodDescriptorScan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/Scan',
    request,
    metadata || {},
    this.methodDescriptorScan);
  }

  methodDescriptorApply = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/Apply',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  apply(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  apply(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  apply(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/Apply',
        request,
        metadata || {},
        this.methodDescriptorApply,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/Apply',
    request,
    metadata || {},
    this.methodDescriptorApply);
  }

  methodDescriptorStatus = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/Status',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    ops$router_pb.RouterStatusResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ops$router_pb.RouterStatusResponse.deserializeBinary
  );

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ops$router_pb.RouterStatusResponse>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ops$router_pb.RouterStatusResponse) => void): grpcWeb.ClientReadableStream<ops$router_pb.RouterStatusResponse>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ops$router_pb.RouterStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/Status',
        request,
        metadata || {},
        this.methodDescriptorStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/Status',
    request,
    metadata || {},
    this.methodDescriptorStatus);
  }

  methodDescriptorSetWan = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetWan',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.Wan,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.Wan) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setWan(
    request: ops$router_pb.Wan,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setWan(
    request: ops$router_pb.Wan,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setWan(
    request: ops$router_pb.Wan,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/SetWan',
        request,
        metadata || {},
        this.methodDescriptorSetWan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/SetWan',
    request,
    metadata || {},
    this.methodDescriptorSetWan);
  }

  methodDescriptorSetLan = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetLan',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.Lan,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.Lan) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setLan(
    request: ops$router_pb.Lan,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setLan(
    request: ops$router_pb.Lan,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setLan(
    request: ops$router_pb.Lan,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/SetLan',
        request,
        metadata || {},
        this.methodDescriptorSetLan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/SetLan',
    request,
    metadata || {},
    this.methodDescriptorSetLan);
  }

  methodDescriptorSetBound = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetBound',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.Bound,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.Bound) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setBound(
    request: ops$router_pb.Bound,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setBound(
    request: ops$router_pb.Bound,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setBound(
    request: ops$router_pb.Bound,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/SetBound',
        request,
        metadata || {},
        this.methodDescriptorSetBound,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/SetBound',
    request,
    metadata || {},
    this.methodDescriptorSetBound);
  }

}

export class UserClient {
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

  methodDescriptorSignIn = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.User/SignIn',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.UserSignInRequest,
    ops$router_pb.UserSignInResponse,
    (request: ops$router_pb.UserSignInRequest) => {
      return request.serializeBinary();
    },
    ops$router_pb.UserSignInResponse.deserializeBinary
  );

  signIn(
    request: ops$router_pb.UserSignInRequest,
    metadata: grpcWeb.Metadata | null): Promise<ops$router_pb.UserSignInResponse>;

  signIn(
    request: ops$router_pb.UserSignInRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ops$router_pb.UserSignInResponse) => void): grpcWeb.ClientReadableStream<ops$router_pb.UserSignInResponse>;

  signIn(
    request: ops$router_pb.UserSignInRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ops$router_pb.UserSignInResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.User/SignIn',
        request,
        metadata || {},
        this.methodDescriptorSignIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.User/SignIn',
    request,
    metadata || {},
    this.methodDescriptorSignIn);
  }

  methodDescriptorRefresh = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.User/Refresh',
    grpcWeb.MethodType.UNARY,
    google_protobuf_duration_pb.Duration,
    ops$router_pb.UserSignInResponse,
    (request: google_protobuf_duration_pb.Duration) => {
      return request.serializeBinary();
    },
    ops$router_pb.UserSignInResponse.deserializeBinary
  );

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null): Promise<ops$router_pb.UserSignInResponse>;

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ops$router_pb.UserSignInResponse) => void): grpcWeb.ClientReadableStream<ops$router_pb.UserSignInResponse>;

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ops$router_pb.UserSignInResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.User/Refresh',
        request,
        metadata || {},
        this.methodDescriptorRefresh,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.User/Refresh',
    request,
    metadata || {},
    this.methodDescriptorRefresh);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.User/Update',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.UserUpdateRequest,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.UserUpdateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: ops$router_pb.UserUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: ops$router_pb.UserUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: ops$router_pb.UserUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.User/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.User/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorSignOut = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.User/SignOut',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.User/SignOut',
        request,
        metadata || {},
        this.methodDescriptorSignOut,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.User/SignOut',
    request,
    metadata || {},
    this.methodDescriptorSignOut);
  }

  methodDescriptorLogs = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.User/Logs',
    grpcWeb.MethodType.UNARY,
    google_protobuf_duration_pb.Duration,
    ops$router_pb.UserLogsResponse,
    (request: google_protobuf_duration_pb.Duration) => {
      return request.serializeBinary();
    },
    ops$router_pb.UserLogsResponse.deserializeBinary
  );

  logs(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null): Promise<ops$router_pb.UserLogsResponse>;

  logs(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ops$router_pb.UserLogsResponse) => void): grpcWeb.ClientReadableStream<ops$router_pb.UserLogsResponse>;

  logs(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ops$router_pb.UserLogsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.User/Logs',
        request,
        metadata || {},
        this.methodDescriptorLogs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.User/Logs',
    request,
    metadata || {},
    this.methodDescriptorLogs);
  }

}

