/**
 * @fileoverview gRPC-Web generated client stub for palm.plugins.nut.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as nut_pb from './nut_pb';


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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSignIn = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/SignIn',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserSignInRequest,
    nut_pb.UserSignInResponse,
    (request: nut_pb.UserSignInRequest) => {
      return request.serializeBinary();
    },
    nut_pb.UserSignInResponse.deserializeBinary
  );

  signIn(
    request: nut_pb.UserSignInRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.UserSignInResponse>;

  signIn(
    request: nut_pb.UserSignInRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserSignInResponse) => void): grpcWeb.ClientReadableStream<nut_pb.UserSignInResponse>;

  signIn(
    request: nut_pb.UserSignInRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.UserSignInResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/SignIn',
        request,
        metadata || {},
        this.methodDescriptorSignIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/SignIn',
    request,
    metadata || {},
    this.methodDescriptorSignIn);
  }

  methodDescriptorSignUp = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/SignUp',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserSignUpRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserSignUpRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  signUp(
    request: nut_pb.UserSignUpRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  signUp(
    request: nut_pb.UserSignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  signUp(
    request: nut_pb.UserSignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/SignUp',
        request,
        metadata || {},
        this.methodDescriptorSignUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/SignUp',
    request,
    metadata || {},
    this.methodDescriptorSignUp);
  }

  methodDescriptorConfirmByEmail = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/ConfirmByEmail',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserEmailRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserEmailRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  confirmByEmail(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  confirmByEmail(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  confirmByEmail(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/ConfirmByEmail',
        request,
        metadata || {},
        this.methodDescriptorConfirmByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/ConfirmByEmail',
    request,
    metadata || {},
    this.methodDescriptorConfirmByEmail);
  }

  methodDescriptorConfirmByToken = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/ConfirmByToken',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserTokenRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserTokenRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  confirmByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  confirmByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  confirmByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/ConfirmByToken',
        request,
        metadata || {},
        this.methodDescriptorConfirmByToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/ConfirmByToken',
    request,
    metadata || {},
    this.methodDescriptorConfirmByToken);
  }

  methodDescriptorUnlockByEmail = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/UnlockByEmail',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserEmailRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserEmailRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  unlockByEmail(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  unlockByEmail(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unlockByEmail(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/UnlockByEmail',
        request,
        metadata || {},
        this.methodDescriptorUnlockByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/UnlockByEmail',
    request,
    metadata || {},
    this.methodDescriptorUnlockByEmail);
  }

  methodDescriptorUnlockByToken = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/UnlockByToken',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserTokenRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserTokenRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  unlockByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  unlockByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unlockByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/UnlockByToken',
        request,
        metadata || {},
        this.methodDescriptorUnlockByToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/UnlockByToken',
    request,
    metadata || {},
    this.methodDescriptorUnlockByToken);
  }

  methodDescriptorForgotPassword = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/ForgotPassword',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserEmailRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserEmailRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  forgotPassword(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  forgotPassword(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  forgotPassword(
    request: nut_pb.UserEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/ForgotPassword',
        request,
        metadata || {},
        this.methodDescriptorForgotPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/ForgotPassword',
    request,
    metadata || {},
    this.methodDescriptorForgotPassword);
  }

  methodDescriptorResetPassword = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/ResetPassword',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserResetPasswordRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserResetPasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  resetPassword(
    request: nut_pb.UserResetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: nut_pb.UserResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: nut_pb.UserResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/ResetPassword',
        request,
        metadata || {},
        this.methodDescriptorResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/ResetPassword',
    request,
    metadata || {},
    this.methodDescriptorResetPassword);
  }

  methodDescriptorRefresh = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Refresh',
    grpcWeb.MethodType.UNARY,
    google_protobuf_duration_pb.Duration,
    nut_pb.UserSignInResponse,
    (request: google_protobuf_duration_pb.Duration) => {
      return request.serializeBinary();
    },
    nut_pb.UserSignInResponse.deserializeBinary
  );

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.UserSignInResponse>;

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserSignInResponse) => void): grpcWeb.ClientReadableStream<nut_pb.UserSignInResponse>;

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.UserSignInResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Refresh',
        request,
        metadata || {},
        this.methodDescriptorRefresh,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Refresh',
    request,
    metadata || {},
    this.methodDescriptorRefresh);
  }

  methodDescriptorLogs = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Logs',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserLogsRequest,
    nut_pb.UserLogsResponse,
    (request: nut_pb.UserLogsRequest) => {
      return request.serializeBinary();
    },
    nut_pb.UserLogsResponse.deserializeBinary
  );

  logs(
    request: nut_pb.UserLogsRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.UserLogsResponse>;

  logs(
    request: nut_pb.UserLogsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserLogsResponse) => void): grpcWeb.ClientReadableStream<nut_pb.UserLogsResponse>;

  logs(
    request: nut_pb.UserLogsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.UserLogsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Logs',
        request,
        metadata || {},
        this.methodDescriptorLogs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Logs',
    request,
    metadata || {},
    this.methodDescriptorLogs);
  }

  methodDescriptorSetProfile = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/SetProfile',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserSetProfileRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserSetProfileRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setProfile(
    request: nut_pb.UserSetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setProfile(
    request: nut_pb.UserSetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setProfile(
    request: nut_pb.UserSetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/SetProfile',
        request,
        metadata || {},
        this.methodDescriptorSetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/SetProfile',
    request,
    metadata || {},
    this.methodDescriptorSetProfile);
  }

  methodDescriptorChangePassword = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/ChangePassword',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserChangePasswordRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserChangePasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  changePassword(
    request: nut_pb.UserChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: nut_pb.UserChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: nut_pb.UserChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/ChangePassword',
        request,
        metadata || {},
        this.methodDescriptorChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/ChangePassword',
    request,
    metadata || {},
    this.methodDescriptorChangePassword);
  }

  methodDescriptorSignOut = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/SignOut',
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
          '/palm.plugins.nut.v1.User/SignOut',
        request,
        metadata || {},
        this.methodDescriptorSignOut,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/SignOut',
    request,
    metadata || {},
    this.methodDescriptorSignOut);
  }

  methodDescriptorIndexUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/IndexUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.Pager,
    nut_pb.UserIndexResponse,
    (request: nut_pb.Pager) => {
      return request.serializeBinary();
    },
    nut_pb.UserIndexResponse.deserializeBinary
  );

  indexUser(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.UserIndexResponse>;

  indexUser(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserIndexResponse) => void): grpcWeb.ClientReadableStream<nut_pb.UserIndexResponse>;

  indexUser(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.UserIndexResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/IndexUser',
        request,
        metadata || {},
        this.methodDescriptorIndexUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/IndexUser',
    request,
    metadata || {},
    this.methodDescriptorIndexUser);
  }

  methodDescriptorShow = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Show',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserQueryRequest,
    nut_pb.UserIndexResponse.Item,
    (request: nut_pb.UserQueryRequest) => {
      return request.serializeBinary();
    },
    nut_pb.UserIndexResponse.Item.deserializeBinary
  );

  show(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.UserIndexResponse.Item>;

  show(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserIndexResponse.Item) => void): grpcWeb.ClientReadableStream<nut_pb.UserIndexResponse.Item>;

  show(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.UserIndexResponse.Item) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Show',
        request,
        metadata || {},
        this.methodDescriptorShow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Show',
    request,
    metadata || {},
    this.methodDescriptorShow);
  }

  methodDescriptorDisable = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Disable',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserQueryRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserQueryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  disable(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  disable(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  disable(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Disable',
        request,
        metadata || {},
        this.methodDescriptorDisable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Disable',
    request,
    metadata || {},
    this.methodDescriptorDisable);
  }

  methodDescriptorEnable = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Enable',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserQueryRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserQueryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  enable(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  enable(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  enable(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Enable',
        request,
        metadata || {},
        this.methodDescriptorEnable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Enable',
    request,
    metadata || {},
    this.methodDescriptorEnable);
  }

  methodDescriptorLock = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Lock',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserQueryRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserQueryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  lock(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  lock(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  lock(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Lock',
        request,
        metadata || {},
        this.methodDescriptorLock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Lock',
    request,
    metadata || {},
    this.methodDescriptorLock);
  }

  methodDescriptorUnlock = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Unlock',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserQueryRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserQueryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  unlock(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  unlock(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unlock(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Unlock',
        request,
        metadata || {},
        this.methodDescriptorUnlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Unlock',
    request,
    metadata || {},
    this.methodDescriptorUnlock);
  }

  methodDescriptorConfirm = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/Confirm',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserQueryRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserQueryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  confirm(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  confirm(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  confirm(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/Confirm',
        request,
        metadata || {},
        this.methodDescriptorConfirm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/Confirm',
    request,
    metadata || {},
    this.methodDescriptorConfirm);
  }

  methodDescriptorSetPassword = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.User/SetPassword',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserSetPasswordRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserSetPasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setPassword(
    request: nut_pb.UserSetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setPassword(
    request: nut_pb.UserSetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setPassword(
    request: nut_pb.UserSetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.User/SetPassword',
        request,
        metadata || {},
        this.methodDescriptorSetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.User/SetPassword',
    request,
    metadata || {},
    this.methodDescriptorSetPassword);
  }

}

export class PolicyClient {
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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetAllRoles = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetAllRoles',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.RoleListResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.RoleListResponse.deserializeBinary
  );

  getAllRoles(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RoleListResponse>;

  getAllRoles(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RoleListResponse>;

  getAllRoles(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetAllRoles',
        request,
        metadata || {},
        this.methodDescriptorGetAllRoles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetAllRoles',
    request,
    metadata || {},
    this.methodDescriptorGetAllRoles);
  }

  methodDescriptorGetAllUsers = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetAllUsers',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.UserListResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.UserListResponse.deserializeBinary
  );

  getAllUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.UserListResponse>;

  getAllUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.UserListResponse>;

  getAllUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.UserListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetAllUsers',
        request,
        metadata || {},
        this.methodDescriptorGetAllUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetAllUsers',
    request,
    metadata || {},
    this.methodDescriptorGetAllUsers);
  }

  methodDescriptorDeleteUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/DeleteUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.UserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/DeleteUser',
        request,
        metadata || {},
        this.methodDescriptorDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/DeleteUser',
    request,
    metadata || {},
    this.methodDescriptorDeleteUser);
  }

  methodDescriptorDeleteRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/DeleteRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RoleRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RoleRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/DeleteRole',
        request,
        metadata || {},
        this.methodDescriptorDeleteRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/DeleteRole',
    request,
    metadata || {},
    this.methodDescriptorDeleteRole);
  }

  methodDescriptorGetRolesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetRolesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserRequest,
    nut_pb.RoleListResponse,
    (request: nut_pb.UserRequest) => {
      return request.serializeBinary();
    },
    nut_pb.RoleListResponse.deserializeBinary
  );

  getRolesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RoleListResponse>;

  getRolesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RoleListResponse>;

  getRolesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetRolesForUser',
        request,
        metadata || {},
        this.methodDescriptorGetRolesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetRolesForUser',
    request,
    metadata || {},
    this.methodDescriptorGetRolesForUser);
  }

  methodDescriptorGetUsersForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetUsersForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RoleRequest,
    nut_pb.UserListResponse,
    (request: nut_pb.RoleRequest) => {
      return request.serializeBinary();
    },
    nut_pb.UserListResponse.deserializeBinary
  );

  getUsersForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.UserListResponse>;

  getUsersForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.UserListResponse>;

  getUsersForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.UserListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetUsersForRole',
        request,
        metadata || {},
        this.methodDescriptorGetUsersForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetUsersForRole',
    request,
    metadata || {},
    this.methodDescriptorGetUsersForRole);
  }

  methodDescriptorAddRolesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/AddRolesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RolesForUserRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RolesForUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addRolesForUser(
    request: nut_pb.RolesForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  addRolesForUser(
    request: nut_pb.RolesForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addRolesForUser(
    request: nut_pb.RolesForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/AddRolesForUser',
        request,
        metadata || {},
        this.methodDescriptorAddRolesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/AddRolesForUser',
    request,
    metadata || {},
    this.methodDescriptorAddRolesForUser);
  }

  methodDescriptorDeleteRolesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/DeleteRolesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RolesForUserRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RolesForUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRolesForUser(
    request: nut_pb.RolesForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRolesForUser(
    request: nut_pb.RolesForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRolesForUser(
    request: nut_pb.RolesForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/DeleteRolesForUser',
        request,
        metadata || {},
        this.methodDescriptorDeleteRolesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/DeleteRolesForUser',
    request,
    metadata || {},
    this.methodDescriptorDeleteRolesForUser);
  }

  methodDescriptorGetImplicitRolesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetImplicitRolesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserRequest,
    nut_pb.RoleListResponse,
    (request: nut_pb.UserRequest) => {
      return request.serializeBinary();
    },
    nut_pb.RoleListResponse.deserializeBinary
  );

  getImplicitRolesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RoleListResponse>;

  getImplicitRolesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RoleListResponse>;

  getImplicitRolesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetImplicitRolesForUser',
        request,
        metadata || {},
        this.methodDescriptorGetImplicitRolesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetImplicitRolesForUser',
    request,
    metadata || {},
    this.methodDescriptorGetImplicitRolesForUser);
  }

  methodDescriptorGetImplicitUsersForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetImplicitUsersForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RoleRequest,
    nut_pb.RoleListResponse,
    (request: nut_pb.RoleRequest) => {
      return request.serializeBinary();
    },
    nut_pb.RoleListResponse.deserializeBinary
  );

  getImplicitUsersForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RoleListResponse>;

  getImplicitUsersForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RoleListResponse>;

  getImplicitUsersForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RoleListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetImplicitUsersForRole',
        request,
        metadata || {},
        this.methodDescriptorGetImplicitUsersForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetImplicitUsersForRole',
    request,
    metadata || {},
    this.methodDescriptorGetImplicitUsersForRole);
  }

  methodDescriptorGetPermissionsForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetPermissionsForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserRequest,
    nut_pb.PermissionListResponse,
    (request: nut_pb.UserRequest) => {
      return request.serializeBinary();
    },
    nut_pb.PermissionListResponse.deserializeBinary
  );

  getPermissionsForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.PermissionListResponse>;

  getPermissionsForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.PermissionListResponse>;

  getPermissionsForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetPermissionsForUser',
        request,
        metadata || {},
        this.methodDescriptorGetPermissionsForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetPermissionsForUser',
    request,
    metadata || {},
    this.methodDescriptorGetPermissionsForUser);
  }

  methodDescriptorGetPermissionsForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetPermissionsForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RoleRequest,
    nut_pb.PermissionListResponse,
    (request: nut_pb.RoleRequest) => {
      return request.serializeBinary();
    },
    nut_pb.PermissionListResponse.deserializeBinary
  );

  getPermissionsForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.PermissionListResponse>;

  getPermissionsForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.PermissionListResponse>;

  getPermissionsForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetPermissionsForRole',
        request,
        metadata || {},
        this.methodDescriptorGetPermissionsForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetPermissionsForRole',
    request,
    metadata || {},
    this.methodDescriptorGetPermissionsForRole);
  }

  methodDescriptorGetImplicitPermissionsForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetImplicitPermissionsForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserRequest,
    nut_pb.PermissionListResponse,
    (request: nut_pb.UserRequest) => {
      return request.serializeBinary();
    },
    nut_pb.PermissionListResponse.deserializeBinary
  );

  getImplicitPermissionsForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.PermissionListResponse>;

  getImplicitPermissionsForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.PermissionListResponse>;

  getImplicitPermissionsForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetImplicitPermissionsForUser',
        request,
        metadata || {},
        this.methodDescriptorGetImplicitPermissionsForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetImplicitPermissionsForUser',
    request,
    metadata || {},
    this.methodDescriptorGetImplicitPermissionsForUser);
  }

  methodDescriptorGetImplicitPermissionsForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetImplicitPermissionsForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RoleRequest,
    nut_pb.PermissionListResponse,
    (request: nut_pb.RoleRequest) => {
      return request.serializeBinary();
    },
    nut_pb.PermissionListResponse.deserializeBinary
  );

  getImplicitPermissionsForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.PermissionListResponse>;

  getImplicitPermissionsForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.PermissionListResponse>;

  getImplicitPermissionsForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.PermissionListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetImplicitPermissionsForRole',
        request,
        metadata || {},
        this.methodDescriptorGetImplicitPermissionsForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetImplicitPermissionsForRole',
    request,
    metadata || {},
    this.methodDescriptorGetImplicitPermissionsForRole);
  }

  methodDescriptorGetImplicitResourcesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetImplicitResourcesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.UserRequest,
    nut_pb.ResourceListResponse,
    (request: nut_pb.UserRequest) => {
      return request.serializeBinary();
    },
    nut_pb.ResourceListResponse.deserializeBinary
  );

  getImplicitResourcesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.ResourceListResponse>;

  getImplicitResourcesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.ResourceListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.ResourceListResponse>;

  getImplicitResourcesForUser(
    request: nut_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.ResourceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetImplicitResourcesForUser',
        request,
        metadata || {},
        this.methodDescriptorGetImplicitResourcesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetImplicitResourcesForUser',
    request,
    metadata || {},
    this.methodDescriptorGetImplicitResourcesForUser);
  }

  methodDescriptorGetImplicitResourcesForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/GetImplicitResourcesForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RoleRequest,
    nut_pb.ResourceListResponse,
    (request: nut_pb.RoleRequest) => {
      return request.serializeBinary();
    },
    nut_pb.ResourceListResponse.deserializeBinary
  );

  getImplicitResourcesForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.ResourceListResponse>;

  getImplicitResourcesForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.ResourceListResponse) => void): grpcWeb.ClientReadableStream<nut_pb.ResourceListResponse>;

  getImplicitResourcesForRole(
    request: nut_pb.RoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.ResourceListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/GetImplicitResourcesForRole',
        request,
        metadata || {},
        this.methodDescriptorGetImplicitResourcesForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/GetImplicitResourcesForRole',
    request,
    metadata || {},
    this.methodDescriptorGetImplicitResourcesForRole);
  }

  methodDescriptorAddPermissions = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/AddPermissions',
    grpcWeb.MethodType.UNARY,
    nut_pb.PermissionsRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.PermissionsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addPermissions(
    request: nut_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  addPermissions(
    request: nut_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addPermissions(
    request: nut_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/AddPermissions',
        request,
        metadata || {},
        this.methodDescriptorAddPermissions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/AddPermissions',
    request,
    metadata || {},
    this.methodDescriptorAddPermissions);
  }

  methodDescriptorDeletePermissions = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Policy/DeletePermissions',
    grpcWeb.MethodType.UNARY,
    nut_pb.PermissionsRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.PermissionsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePermissions(
    request: nut_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePermissions(
    request: nut_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePermissions(
    request: nut_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Policy/DeletePermissions',
        request,
        metadata || {},
        this.methodDescriptorDeletePermissions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Policy/DeletePermissions',
    request,
    metadata || {},
    this.methodDescriptorDeletePermissions);
  }

}

export class LocaleClient {
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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSet = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Locale/Set',
    grpcWeb.MethodType.UNARY,
    nut_pb.LocaleSetRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.LocaleSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  set(
    request: nut_pb.LocaleSetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  set(
    request: nut_pb.LocaleSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  set(
    request: nut_pb.LocaleSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Locale/Set',
        request,
        metadata || {},
        this.methodDescriptorSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Locale/Set',
    request,
    metadata || {},
    this.methodDescriptorSet);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Locale/Get',
    grpcWeb.MethodType.UNARY,
    nut_pb.LocaleGetRequest,
    nut_pb.LocaleIndexResponse.Item,
    (request: nut_pb.LocaleGetRequest) => {
      return request.serializeBinary();
    },
    nut_pb.LocaleIndexResponse.Item.deserializeBinary
  );

  get(
    request: nut_pb.LocaleGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.LocaleIndexResponse.Item>;

  get(
    request: nut_pb.LocaleGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.LocaleIndexResponse.Item) => void): grpcWeb.ClientReadableStream<nut_pb.LocaleIndexResponse.Item>;

  get(
    request: nut_pb.LocaleGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.LocaleIndexResponse.Item) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Locale/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Locale/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorIndex = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Locale/Index',
    grpcWeb.MethodType.UNARY,
    nut_pb.Pager,
    nut_pb.LocaleIndexResponse,
    (request: nut_pb.Pager) => {
      return request.serializeBinary();
    },
    nut_pb.LocaleIndexResponse.deserializeBinary
  );

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.LocaleIndexResponse>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.LocaleIndexResponse) => void): grpcWeb.ClientReadableStream<nut_pb.LocaleIndexResponse>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.LocaleIndexResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Locale/Index',
        request,
        metadata || {},
        this.methodDescriptorIndex,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Locale/Index',
    request,
    metadata || {},
    this.methodDescriptorIndex);
  }

  methodDescriptorDestroy = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Locale/Destroy',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Locale/Destroy',
        request,
        metadata || {},
        this.methodDescriptorDestroy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Locale/Destroy',
    request,
    metadata || {},
    this.methodDescriptorDestroy);
  }

}

export class SiteClient {
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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorClearCache = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/ClearCache',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  clearCache(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  clearCache(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  clearCache(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/ClearCache',
        request,
        metadata || {},
        this.methodDescriptorClearCache,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/ClearCache',
    request,
    metadata || {},
    this.methodDescriptorClearCache);
  }

  methodDescriptorLayout = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/Layout',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.SiteLayoutResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.SiteLayoutResponse.deserializeBinary
  );

  layout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SiteLayoutResponse>;

  layout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteLayoutResponse) => void): grpcWeb.ClientReadableStream<nut_pb.SiteLayoutResponse>;

  layout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SiteLayoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/Layout',
        request,
        metadata || {},
        this.methodDescriptorLayout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/Layout',
    request,
    metadata || {},
    this.methodDescriptorLayout);
  }

  methodDescriptorSetAuthor = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetAuthor',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteLayoutResponse.Author,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteLayoutResponse.Author) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setAuthor(
    request: nut_pb.SiteLayoutResponse.Author,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setAuthor(
    request: nut_pb.SiteLayoutResponse.Author,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setAuthor(
    request: nut_pb.SiteLayoutResponse.Author,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetAuthor',
        request,
        metadata || {},
        this.methodDescriptorSetAuthor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetAuthor',
    request,
    metadata || {},
    this.methodDescriptorSetAuthor);
  }

  methodDescriptorSetCopyright = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetCopyright',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteSetCopyrightRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteSetCopyrightRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setCopyright(
    request: nut_pb.SiteSetCopyrightRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setCopyright(
    request: nut_pb.SiteSetCopyrightRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setCopyright(
    request: nut_pb.SiteSetCopyrightRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetCopyright',
        request,
        metadata || {},
        this.methodDescriptorSetCopyright,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetCopyright',
    request,
    metadata || {},
    this.methodDescriptorSetCopyright);
  }

  methodDescriptorSetKeywords = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetKeywords',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteSetKeywordsRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteSetKeywordsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setKeywords(
    request: nut_pb.SiteSetKeywordsRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setKeywords(
    request: nut_pb.SiteSetKeywordsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setKeywords(
    request: nut_pb.SiteSetKeywordsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetKeywords',
        request,
        metadata || {},
        this.methodDescriptorSetKeywords,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetKeywords',
    request,
    metadata || {},
    this.methodDescriptorSetKeywords);
  }

  methodDescriptorSetInfo = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetInfo',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteSetInfoRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteSetInfoRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setInfo(
    request: nut_pb.SiteSetInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setInfo(
    request: nut_pb.SiteSetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setInfo(
    request: nut_pb.SiteSetInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetInfo',
        request,
        metadata || {},
        this.methodDescriptorSetInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetInfo',
    request,
    metadata || {},
    this.methodDescriptorSetInfo);
  }

  methodDescriptorSetLogo = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetLogo',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteSetLogoRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteSetLogoRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setLogo(
    request: nut_pb.SiteSetLogoRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setLogo(
    request: nut_pb.SiteSetLogoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setLogo(
    request: nut_pb.SiteSetLogoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetLogo',
        request,
        metadata || {},
        this.methodDescriptorSetLogo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetLogo',
    request,
    metadata || {},
    this.methodDescriptorSetLogo);
  }

  methodDescriptorSetAws = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetAws',
    grpcWeb.MethodType.UNARY,
    nut_pb.AwsProfile,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.AwsProfile) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setAws(
    request: nut_pb.AwsProfile,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setAws(
    request: nut_pb.AwsProfile,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setAws(
    request: nut_pb.AwsProfile,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetAws',
        request,
        metadata || {},
        this.methodDescriptorSetAws,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetAws',
    request,
    metadata || {},
    this.methodDescriptorSetAws);
  }

  methodDescriptorGetAws = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/GetAws',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.AwsProfile,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.AwsProfile.deserializeBinary
  );

  getAws(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.AwsProfile>;

  getAws(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.AwsProfile) => void): grpcWeb.ClientReadableStream<nut_pb.AwsProfile>;

  getAws(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.AwsProfile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/GetAws',
        request,
        metadata || {},
        this.methodDescriptorGetAws,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/GetAws',
    request,
    metadata || {},
    this.methodDescriptorGetAws);
  }

  methodDescriptorTestAwsS3 = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/TestAwsS3',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.SiteAwsS3TestResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.SiteAwsS3TestResponse.deserializeBinary
  );

  testAwsS3(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SiteAwsS3TestResponse>;

  testAwsS3(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteAwsS3TestResponse) => void): grpcWeb.ClientReadableStream<nut_pb.SiteAwsS3TestResponse>;

  testAwsS3(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SiteAwsS3TestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/TestAwsS3',
        request,
        metadata || {},
        this.methodDescriptorTestAwsS3,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/TestAwsS3',
    request,
    metadata || {},
    this.methodDescriptorTestAwsS3);
  }

  methodDescriptorSetSmtp = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetSmtp',
    grpcWeb.MethodType.UNARY,
    nut_pb.SmtpProfile,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SmtpProfile) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setSmtp(
    request: nut_pb.SmtpProfile,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setSmtp(
    request: nut_pb.SmtpProfile,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setSmtp(
    request: nut_pb.SmtpProfile,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetSmtp',
        request,
        metadata || {},
        this.methodDescriptorSetSmtp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetSmtp',
    request,
    metadata || {},
    this.methodDescriptorSetSmtp);
  }

  methodDescriptorGetSmtp = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/GetSmtp',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.SmtpProfile,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.SmtpProfile.deserializeBinary
  );

  getSmtp(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SmtpProfile>;

  getSmtp(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SmtpProfile) => void): grpcWeb.ClientReadableStream<nut_pb.SmtpProfile>;

  getSmtp(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SmtpProfile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/GetSmtp',
        request,
        metadata || {},
        this.methodDescriptorGetSmtp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/GetSmtp',
    request,
    metadata || {},
    this.methodDescriptorGetSmtp);
  }

  methodDescriptorTestSmtp = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/TestSmtp',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteSmtpTestRequst,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteSmtpTestRequst) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  testSmtp(
    request: nut_pb.SiteSmtpTestRequst,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  testSmtp(
    request: nut_pb.SiteSmtpTestRequst,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  testSmtp(
    request: nut_pb.SiteSmtpTestRequst,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/TestSmtp',
        request,
        metadata || {},
        this.methodDescriptorTestSmtp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/TestSmtp',
    request,
    metadata || {},
    this.methodDescriptorTestSmtp);
  }

  methodDescriptorSetBing = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetBing',
    grpcWeb.MethodType.UNARY,
    nut_pb.BingProfile,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.BingProfile) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setBing(
    request: nut_pb.BingProfile,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setBing(
    request: nut_pb.BingProfile,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setBing(
    request: nut_pb.BingProfile,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetBing',
        request,
        metadata || {},
        this.methodDescriptorSetBing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetBing',
    request,
    metadata || {},
    this.methodDescriptorSetBing);
  }

  methodDescriptorGetBing = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/GetBing',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.BingProfile,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.BingProfile.deserializeBinary
  );

  getBing(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.BingProfile>;

  getBing(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.BingProfile) => void): grpcWeb.ClientReadableStream<nut_pb.BingProfile>;

  getBing(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.BingProfile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/GetBing',
        request,
        metadata || {},
        this.methodDescriptorGetBing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/GetBing',
    request,
    metadata || {},
    this.methodDescriptorGetBing);
  }

  methodDescriptorSetGoogle = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetGoogle',
    grpcWeb.MethodType.UNARY,
    nut_pb.GoogleProfile,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.GoogleProfile) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setGoogle(
    request: nut_pb.GoogleProfile,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setGoogle(
    request: nut_pb.GoogleProfile,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setGoogle(
    request: nut_pb.GoogleProfile,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetGoogle',
        request,
        metadata || {},
        this.methodDescriptorSetGoogle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetGoogle',
    request,
    metadata || {},
    this.methodDescriptorSetGoogle);
  }

  methodDescriptorGetGoogle = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/GetGoogle',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.GoogleProfile,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.GoogleProfile.deserializeBinary
  );

  getGoogle(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.GoogleProfile>;

  getGoogle(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.GoogleProfile) => void): grpcWeb.ClientReadableStream<nut_pb.GoogleProfile>;

  getGoogle(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.GoogleProfile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/GetGoogle',
        request,
        metadata || {},
        this.methodDescriptorGetGoogle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/GetGoogle',
    request,
    metadata || {},
    this.methodDescriptorGetGoogle);
  }

  methodDescriptorSetBaidu = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetBaidu',
    grpcWeb.MethodType.UNARY,
    nut_pb.BaiduProfile,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.BaiduProfile) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setBaidu(
    request: nut_pb.BaiduProfile,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setBaidu(
    request: nut_pb.BaiduProfile,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setBaidu(
    request: nut_pb.BaiduProfile,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetBaidu',
        request,
        metadata || {},
        this.methodDescriptorSetBaidu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetBaidu',
    request,
    metadata || {},
    this.methodDescriptorSetBaidu);
  }

  methodDescriptorGetBaidu = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/GetBaidu',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.BaiduProfile,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.BaiduProfile.deserializeBinary
  );

  getBaidu(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.BaiduProfile>;

  getBaidu(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.BaiduProfile) => void): grpcWeb.ClientReadableStream<nut_pb.BaiduProfile>;

  getBaidu(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.BaiduProfile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/GetBaidu',
        request,
        metadata || {},
        this.methodDescriptorGetBaidu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/GetBaidu',
    request,
    metadata || {},
    this.methodDescriptorGetBaidu);
  }

  methodDescriptorStatus = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/Status',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.SiteStatusResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.SiteStatusResponse.deserializeBinary
  );

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SiteStatusResponse>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteStatusResponse) => void): grpcWeb.ClientReadableStream<nut_pb.SiteStatusResponse>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SiteStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/Status',
        request,
        metadata || {},
        this.methodDescriptorStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/Status',
    request,
    metadata || {},
    this.methodDescriptorStatus);
  }

  methodDescriptorNewLeaveWord = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/NewLeaveWord',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteNewLeaveWordRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteNewLeaveWordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  newLeaveWord(
    request: nut_pb.SiteNewLeaveWordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  newLeaveWord(
    request: nut_pb.SiteNewLeaveWordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  newLeaveWord(
    request: nut_pb.SiteNewLeaveWordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/NewLeaveWord',
        request,
        metadata || {},
        this.methodDescriptorNewLeaveWord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/NewLeaveWord',
    request,
    metadata || {},
    this.methodDescriptorNewLeaveWord);
  }

  methodDescriptorIndexLeaveWord = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/IndexLeaveWord',
    grpcWeb.MethodType.UNARY,
    nut_pb.Pager,
    nut_pb.SiteIndexLeaveWordResponse,
    (request: nut_pb.Pager) => {
      return request.serializeBinary();
    },
    nut_pb.SiteIndexLeaveWordResponse.deserializeBinary
  );

  indexLeaveWord(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SiteIndexLeaveWordResponse>;

  indexLeaveWord(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteIndexLeaveWordResponse) => void): grpcWeb.ClientReadableStream<nut_pb.SiteIndexLeaveWordResponse>;

  indexLeaveWord(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SiteIndexLeaveWordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/IndexLeaveWord',
        request,
        metadata || {},
        this.methodDescriptorIndexLeaveWord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/IndexLeaveWord',
    request,
    metadata || {},
    this.methodDescriptorIndexLeaveWord);
  }

  methodDescriptorDestroyLeaveWord = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/DestroyLeaveWord',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  destroyLeaveWord(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  destroyLeaveWord(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  destroyLeaveWord(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/DestroyLeaveWord',
        request,
        metadata || {},
        this.methodDescriptorDestroyLeaveWord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/DestroyLeaveWord',
    request,
    metadata || {},
    this.methodDescriptorDestroyLeaveWord);
  }

}

