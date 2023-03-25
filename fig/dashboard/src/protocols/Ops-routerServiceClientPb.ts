/**
 * @fileoverview gRPC-Web generated client stub for palm.ops.router.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
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

  methodDescriptorReboot = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/Reboot',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  reboot(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  reboot(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  reboot(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/Reboot',
        request,
        metadata || {},
        this.methodDescriptorReboot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/Reboot',
    request,
    metadata || {},
    this.methodDescriptorReboot);
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

  methodDescriptorSetDns = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetDns',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.Dns,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.Dns) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setDns(
    request: ops$router_pb.Dns,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setDns(
    request: ops$router_pb.Dns,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setDns(
    request: ops$router_pb.Dns,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/SetDns',
        request,
        metadata || {},
        this.methodDescriptorSetDns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/SetDns',
    request,
    metadata || {},
    this.methodDescriptorSetDns);
  }

  methodDescriptorSetWan = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetWan',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.RouterSetWanRequest,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.RouterSetWanRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setWan(
    request: ops$router_pb.RouterSetWanRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setWan(
    request: ops$router_pb.RouterSetWanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setWan(
    request: ops$router_pb.RouterSetWanRequest,
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

  methodDescriptorSetWanPool = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetWanPool',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.WanPool,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.WanPool) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setWanPool(
    request: ops$router_pb.WanPool,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setWanPool(
    request: ops$router_pb.WanPool,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setWanPool(
    request: ops$router_pb.WanPool,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/SetWanPool',
        request,
        metadata || {},
        this.methodDescriptorSetWanPool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/SetWanPool',
    request,
    metadata || {},
    this.methodDescriptorSetWanPool);
  }

  methodDescriptorSetLan = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetLan',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.RouterSetLanRequest,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.RouterSetLanRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setLan(
    request: ops$router_pb.RouterSetLanRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setLan(
    request: ops$router_pb.RouterSetLanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setLan(
    request: ops$router_pb.RouterSetLanRequest,
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

  methodDescriptorSetDmz = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/SetDmz',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.RouterSetDmzRequest,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.RouterSetDmzRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setDmz(
    request: ops$router_pb.RouterSetDmzRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setDmz(
    request: ops$router_pb.RouterSetDmzRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setDmz(
    request: ops$router_pb.RouterSetDmzRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/SetDmz',
        request,
        metadata || {},
        this.methodDescriptorSetDmz,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/SetDmz',
    request,
    metadata || {},
    this.methodDescriptorSetDmz);
  }

  methodDescriptorCreateRule = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/CreateRule',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.Rule,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.Rule) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createRule(
    request: ops$router_pb.Rule,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  createRule(
    request: ops$router_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createRule(
    request: ops$router_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/CreateRule',
        request,
        metadata || {},
        this.methodDescriptorCreateRule,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/CreateRule',
    request,
    metadata || {},
    this.methodDescriptorCreateRule);
  }

  methodDescriptorUpdateRule = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/UpdateRule',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.RouterIndexRuleResponse.Item,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.RouterIndexRuleResponse.Item) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateRule(
    request: ops$router_pb.RouterIndexRuleResponse.Item,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateRule(
    request: ops$router_pb.RouterIndexRuleResponse.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateRule(
    request: ops$router_pb.RouterIndexRuleResponse.Item,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/UpdateRule',
        request,
        metadata || {},
        this.methodDescriptorUpdateRule,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/UpdateRule',
    request,
    metadata || {},
    this.methodDescriptorUpdateRule);
  }

  methodDescriptorIndexRule = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/IndexRule',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    ops$router_pb.RouterIndexRuleResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ops$router_pb.RouterIndexRuleResponse.deserializeBinary
  );

  indexRule(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ops$router_pb.RouterIndexRuleResponse>;

  indexRule(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ops$router_pb.RouterIndexRuleResponse) => void): grpcWeb.ClientReadableStream<ops$router_pb.RouterIndexRuleResponse>;

  indexRule(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ops$router_pb.RouterIndexRuleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/IndexRule',
        request,
        metadata || {},
        this.methodDescriptorIndexRule,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/IndexRule',
    request,
    metadata || {},
    this.methodDescriptorIndexRule);
  }

  methodDescriptorUpdateHost = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/UpdateHost',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.RouterUpdateHostRequest,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.RouterUpdateHostRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateHost(
    request: ops$router_pb.RouterUpdateHostRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateHost(
    request: ops$router_pb.RouterUpdateHostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateHost(
    request: ops$router_pb.RouterUpdateHostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/UpdateHost',
        request,
        metadata || {},
        this.methodDescriptorUpdateHost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/UpdateHost',
    request,
    metadata || {},
    this.methodDescriptorUpdateHost);
  }

  methodDescriptorIndexUser = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/IndexUser',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    ops$router_pb.RouterIndexUserResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ops$router_pb.RouterIndexUserResponse.deserializeBinary
  );

  indexUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ops$router_pb.RouterIndexUserResponse>;

  indexUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ops$router_pb.RouterIndexUserResponse) => void): grpcWeb.ClientReadableStream<ops$router_pb.RouterIndexUserResponse>;

  indexUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ops$router_pb.RouterIndexUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/IndexUser',
        request,
        metadata || {},
        this.methodDescriptorIndexUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/IndexUser',
    request,
    metadata || {},
    this.methodDescriptorIndexUser);
  }

  methodDescriptorUpdateUser = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/UpdateUser',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.RouterIndexUserResponse.Item,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.RouterIndexUserResponse.Item) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateUser(
    request: ops$router_pb.RouterIndexUserResponse.Item,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateUser(
    request: ops$router_pb.RouterIndexUserResponse.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateUser(
    request: ops$router_pb.RouterIndexUserResponse.Item,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/UpdateUser',
        request,
        metadata || {},
        this.methodDescriptorUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/UpdateUser',
    request,
    metadata || {},
    this.methodDescriptorUpdateUser);
  }

  methodDescriptorCreateUser = new grpcWeb.MethodDescriptor(
    '/palm.ops.router.v1.Router/CreateUser',
    grpcWeb.MethodType.UNARY,
    ops$router_pb.RouterCreateUserRequest,
    google_protobuf_empty_pb.Empty,
    (request: ops$router_pb.RouterCreateUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createUser(
    request: ops$router_pb.RouterCreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  createUser(
    request: ops$router_pb.RouterCreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createUser(
    request: ops$router_pb.RouterCreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.ops.router.v1.Router/CreateUser',
        request,
        metadata || {},
        this.methodDescriptorCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.ops.router.v1.Router/CreateUser',
    request,
    metadata || {},
    this.methodDescriptorCreateUser);
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
    google_protobuf_empty_pb.Empty,
    ops$router_pb.UserLogsResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ops$router_pb.UserLogsResponse.deserializeBinary
  );

  logs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ops$router_pb.UserLogsResponse>;

  logs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ops$router_pb.UserLogsResponse) => void): grpcWeb.ClientReadableStream<ops$router_pb.UserLogsResponse>;

  logs(
    request: google_protobuf_empty_pb.Empty,
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

