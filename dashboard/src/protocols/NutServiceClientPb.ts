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

}

export class RbacClient {
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

  methodDescriptorGetRolesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/GetRolesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacUserRequest,
    nut_pb.RbacGetRolesForUserResponse,
    (request: nut_pb.RbacUserRequest) => {
      return request.serializeBinary();
    },
    nut_pb.RbacGetRolesForUserResponse.deserializeBinary
  );

  getRolesForUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RbacGetRolesForUserResponse>;

  getRolesForUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RbacGetRolesForUserResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RbacGetRolesForUserResponse>;

  getRolesForUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RbacGetRolesForUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/GetRolesForUser',
        request,
        metadata || {},
        this.methodDescriptorGetRolesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/GetRolesForUser',
    request,
    metadata || {},
    this.methodDescriptorGetRolesForUser);
  }

  methodDescriptorGetUsersForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/GetUsersForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacRoleRequest,
    nut_pb.RbacGetUsersForRoleResponse,
    (request: nut_pb.RbacRoleRequest) => {
      return request.serializeBinary();
    },
    nut_pb.RbacGetUsersForRoleResponse.deserializeBinary
  );

  getUsersForRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RbacGetUsersForRoleResponse>;

  getUsersForRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RbacGetUsersForRoleResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RbacGetUsersForRoleResponse>;

  getUsersForRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RbacGetUsersForRoleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/GetUsersForRole',
        request,
        metadata || {},
        this.methodDescriptorGetUsersForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/GetUsersForRole',
    request,
    metadata || {},
    this.methodDescriptorGetUsersForRole);
  }

  methodDescriptorGetPermissionsForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/GetPermissionsForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacUserRequest,
    nut_pb.RbacPermissionsResponse,
    (request: nut_pb.RbacUserRequest) => {
      return request.serializeBinary();
    },
    nut_pb.RbacPermissionsResponse.deserializeBinary
  );

  getPermissionsForUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RbacPermissionsResponse>;

  getPermissionsForUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RbacPermissionsResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RbacPermissionsResponse>;

  getPermissionsForUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RbacPermissionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/GetPermissionsForUser',
        request,
        metadata || {},
        this.methodDescriptorGetPermissionsForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/GetPermissionsForUser',
    request,
    metadata || {},
    this.methodDescriptorGetPermissionsForUser);
  }

  methodDescriptorGetPermissionsForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/GetPermissionsForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacRoleRequest,
    nut_pb.RbacPermissionsResponse,
    (request: nut_pb.RbacRoleRequest) => {
      return request.serializeBinary();
    },
    nut_pb.RbacPermissionsResponse.deserializeBinary
  );

  getPermissionsForRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.RbacPermissionsResponse>;

  getPermissionsForRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.RbacPermissionsResponse) => void): grpcWeb.ClientReadableStream<nut_pb.RbacPermissionsResponse>;

  getPermissionsForRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.RbacPermissionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/GetPermissionsForRole',
        request,
        metadata || {},
        this.methodDescriptorGetPermissionsForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/GetPermissionsForRole',
    request,
    metadata || {},
    this.methodDescriptorGetPermissionsForRole);
  }

  methodDescriptorAddRolesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/AddRolesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacUserRolesRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RbacUserRolesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addRolesForUser(
    request: nut_pb.RbacUserRolesRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  addRolesForUser(
    request: nut_pb.RbacUserRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addRolesForUser(
    request: nut_pb.RbacUserRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/AddRolesForUser',
        request,
        metadata || {},
        this.methodDescriptorAddRolesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/AddRolesForUser',
    request,
    metadata || {},
    this.methodDescriptorAddRolesForUser);
  }

  methodDescriptorAddPermissionsForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/AddPermissionsForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacAddPermissionsForUserRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RbacAddPermissionsForUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addPermissionsForUser(
    request: nut_pb.RbacAddPermissionsForUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  addPermissionsForUser(
    request: nut_pb.RbacAddPermissionsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addPermissionsForUser(
    request: nut_pb.RbacAddPermissionsForUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/AddPermissionsForUser',
        request,
        metadata || {},
        this.methodDescriptorAddPermissionsForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/AddPermissionsForUser',
    request,
    metadata || {},
    this.methodDescriptorAddPermissionsForUser);
  }

  methodDescriptorAddPermissionsForRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/AddPermissionsForRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacAddPermissionsForRoleRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RbacAddPermissionsForRoleRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addPermissionsForRole(
    request: nut_pb.RbacAddPermissionsForRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  addPermissionsForRole(
    request: nut_pb.RbacAddPermissionsForRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addPermissionsForRole(
    request: nut_pb.RbacAddPermissionsForRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/AddPermissionsForRole',
        request,
        metadata || {},
        this.methodDescriptorAddPermissionsForRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/AddPermissionsForRole',
    request,
    metadata || {},
    this.methodDescriptorAddPermissionsForRole);
  }

  methodDescriptorDeleteRolesForUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/DeleteRolesForUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacUserRolesRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RbacUserRolesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRolesForUser(
    request: nut_pb.RbacUserRolesRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRolesForUser(
    request: nut_pb.RbacUserRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRolesForUser(
    request: nut_pb.RbacUserRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/DeleteRolesForUser',
        request,
        metadata || {},
        this.methodDescriptorDeleteRolesForUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/DeleteRolesForUser',
    request,
    metadata || {},
    this.methodDescriptorDeleteRolesForUser);
  }

  methodDescriptorDeleteUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/DeleteUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacUserRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RbacUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteUser(
    request: nut_pb.RbacUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/DeleteUser',
        request,
        metadata || {},
        this.methodDescriptorDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/DeleteUser',
    request,
    metadata || {},
    this.methodDescriptorDeleteUser);
  }

  methodDescriptorDeleteRole = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/DeleteRole',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacRoleRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RbacRoleRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRole(
    request: nut_pb.RbacRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/DeleteRole',
        request,
        metadata || {},
        this.methodDescriptorDeleteRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/DeleteRole',
    request,
    metadata || {},
    this.methodDescriptorDeleteRole);
  }

  methodDescriptorDeletePermission = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Rbac/DeletePermission',
    grpcWeb.MethodType.UNARY,
    nut_pb.RbacPermissionsResponse.Item,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.RbacPermissionsResponse.Item) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePermission(
    request: nut_pb.RbacPermissionsResponse.Item,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePermission(
    request: nut_pb.RbacPermissionsResponse.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePermission(
    request: nut_pb.RbacPermissionsResponse.Item,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Rbac/DeletePermission',
        request,
        metadata || {},
        this.methodDescriptorDeletePermission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Rbac/DeletePermission',
    request,
    metadata || {},
    this.methodDescriptorDeletePermission);
  }

}

export class TagClient {
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

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Tag/Create',
    grpcWeb.MethodType.UNARY,
    nut_pb.TagCreateRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.TagCreateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  create(
    request: nut_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  create(
    request: nut_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  create(
    request: nut_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Tag/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Tag/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Tag/Update',
    grpcWeb.MethodType.UNARY,
    nut_pb.TagUpdateRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.TagUpdateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: nut_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Tag/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Tag/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorDestroy = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Tag/Destroy',
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
          '/palm.plugins.nut.v1.Tag/Destroy',
        request,
        metadata || {},
        this.methodDescriptorDestroy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Tag/Destroy',
    request,
    metadata || {},
    this.methodDescriptorDestroy);
  }

  methodDescriptorIndex = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Tag/Index',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.TagIndexResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.TagIndexResponse.deserializeBinary
  );

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.TagIndexResponse>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.TagIndexResponse) => void): grpcWeb.ClientReadableStream<nut_pb.TagIndexResponse>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.TagIndexResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Tag/Index',
        request,
        metadata || {},
        this.methodDescriptorIndex,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Tag/Index',
    request,
    metadata || {},
    this.methodDescriptorIndex);
  }

}

export class CategoryClient {
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

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Category/Create',
    grpcWeb.MethodType.UNARY,
    nut_pb.CategoryCreateRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.CategoryCreateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  create(
    request: nut_pb.CategoryCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  create(
    request: nut_pb.CategoryCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  create(
    request: nut_pb.CategoryCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Category/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Category/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Category/Update',
    grpcWeb.MethodType.UNARY,
    nut_pb.CategoryUpdateRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.CategoryUpdateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: nut_pb.CategoryUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.CategoryUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.CategoryUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Category/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Category/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorDestroy = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Category/Destroy',
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
          '/palm.plugins.nut.v1.Category/Destroy',
        request,
        metadata || {},
        this.methodDescriptorDestroy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Category/Destroy',
    request,
    metadata || {},
    this.methodDescriptorDestroy);
  }

  methodDescriptorIndex = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Category/Index',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.CategoryIndexResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.CategoryIndexResponse.deserializeBinary
  );

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.CategoryIndexResponse>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.CategoryIndexResponse) => void): grpcWeb.ClientReadableStream<nut_pb.CategoryIndexResponse>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.CategoryIndexResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Category/Index',
        request,
        metadata || {},
        this.methodDescriptorIndex,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Category/Index',
    request,
    metadata || {},
    this.methodDescriptorIndex);
  }

}

export class AttachmentClient {
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

  methodDescriptorIndex = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Attachment/Index',
    grpcWeb.MethodType.UNARY,
    nut_pb.Pager,
    nut_pb.AttachmetIndexResponse,
    (request: nut_pb.Pager) => {
      return request.serializeBinary();
    },
    nut_pb.AttachmetIndexResponse.deserializeBinary
  );

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.AttachmetIndexResponse>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.AttachmetIndexResponse) => void): grpcWeb.ClientReadableStream<nut_pb.AttachmetIndexResponse>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.AttachmetIndexResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Attachment/Index',
        request,
        metadata || {},
        this.methodDescriptorIndex,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Attachment/Index',
    request,
    metadata || {},
    this.methodDescriptorIndex);
  }

  methodDescriptorDestroy = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Attachment/Destroy',
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
          '/palm.plugins.nut.v1.Attachment/Destroy',
        request,
        metadata || {},
        this.methodDescriptorDestroy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Attachment/Destroy',
    request,
    metadata || {},
    this.methodDescriptorDestroy);
  }

  methodDescriptorShow = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Attachment/Show',
    grpcWeb.MethodType.UNARY,
    nut_pb.AttachemtShowRequest,
    nut_pb.AttachemtShowResponse,
    (request: nut_pb.AttachemtShowRequest) => {
      return request.serializeBinary();
    },
    nut_pb.AttachemtShowResponse.deserializeBinary
  );

  show(
    request: nut_pb.AttachemtShowRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.AttachemtShowResponse>;

  show(
    request: nut_pb.AttachemtShowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.AttachemtShowResponse) => void): grpcWeb.ClientReadableStream<nut_pb.AttachemtShowResponse>;

  show(
    request: nut_pb.AttachemtShowRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.AttachemtShowResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Attachment/Show',
        request,
        metadata || {},
        this.methodDescriptorShow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Attachment/Show',
    request,
    metadata || {},
    this.methodDescriptorShow);
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

export class SettingClient {
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
    '/palm.plugins.nut.v1.Setting/Set',
    grpcWeb.MethodType.UNARY,
    nut_pb.SettingSetRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SettingSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  set(
    request: nut_pb.SettingSetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  set(
    request: nut_pb.SettingSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  set(
    request: nut_pb.SettingSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Setting/Set',
        request,
        metadata || {},
        this.methodDescriptorSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Setting/Set',
    request,
    metadata || {},
    this.methodDescriptorSet);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Setting/Get',
    grpcWeb.MethodType.UNARY,
    nut_pb.SettingGetRequest,
    nut_pb.SettingGetResponse,
    (request: nut_pb.SettingGetRequest) => {
      return request.serializeBinary();
    },
    nut_pb.SettingGetResponse.deserializeBinary
  );

  get(
    request: nut_pb.SettingGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SettingGetResponse>;

  get(
    request: nut_pb.SettingGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SettingGetResponse) => void): grpcWeb.ClientReadableStream<nut_pb.SettingGetResponse>;

  get(
    request: nut_pb.SettingGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SettingGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Setting/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Setting/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
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

  methodDescriptorInstall = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/Install',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteInstallRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteInstallRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  install(
    request: nut_pb.SiteInstallRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  install(
    request: nut_pb.SiteInstallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  install(
    request: nut_pb.SiteInstallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/Install',
        request,
        metadata || {},
        this.methodDescriptorInstall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/Install',
    request,
    metadata || {},
    this.methodDescriptorInstall);
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

  methodDescriptorIndexUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/IndexUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.Pager,
    nut_pb.SiteUserIndexResponse,
    (request: nut_pb.Pager) => {
      return request.serializeBinary();
    },
    nut_pb.SiteUserIndexResponse.deserializeBinary
  );

  indexUser(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SiteUserIndexResponse>;

  indexUser(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteUserIndexResponse) => void): grpcWeb.ClientReadableStream<nut_pb.SiteUserIndexResponse>;

  indexUser(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SiteUserIndexResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/IndexUser',
        request,
        metadata || {},
        this.methodDescriptorIndexUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/IndexUser',
    request,
    metadata || {},
    this.methodDescriptorIndexUser);
  }

  methodDescriptorShowUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/ShowUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    nut_pb.SiteUserIndexResponse.Item,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    nut_pb.SiteUserIndexResponse.Item.deserializeBinary
  );

  showUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SiteUserIndexResponse.Item>;

  showUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteUserIndexResponse.Item) => void): grpcWeb.ClientReadableStream<nut_pb.SiteUserIndexResponse.Item>;

  showUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SiteUserIndexResponse.Item) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/ShowUser',
        request,
        metadata || {},
        this.methodDescriptorShowUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/ShowUser',
    request,
    metadata || {},
    this.methodDescriptorShowUser);
  }

  methodDescriptorDisableUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/DisableUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  disableUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  disableUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  disableUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/DisableUser',
        request,
        metadata || {},
        this.methodDescriptorDisableUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/DisableUser',
    request,
    metadata || {},
    this.methodDescriptorDisableUser);
  }

  methodDescriptorEnableUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/EnableUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  enableUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  enableUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  enableUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/EnableUser',
        request,
        metadata || {},
        this.methodDescriptorEnableUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/EnableUser',
    request,
    metadata || {},
    this.methodDescriptorEnableUser);
  }

  methodDescriptorLockUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/LockUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  lockUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  lockUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  lockUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/LockUser',
        request,
        metadata || {},
        this.methodDescriptorLockUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/LockUser',
    request,
    metadata || {},
    this.methodDescriptorLockUser);
  }

  methodDescriptorUnlockUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/UnlockUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  unlockUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  unlockUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unlockUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/UnlockUser',
        request,
        metadata || {},
        this.methodDescriptorUnlockUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/UnlockUser',
    request,
    metadata || {},
    this.methodDescriptorUnlockUser);
  }

  methodDescriptorConfirmUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/ConfirmUser',
    grpcWeb.MethodType.UNARY,
    nut_pb.IdRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.IdRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  confirmUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  confirmUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  confirmUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/ConfirmUser',
        request,
        metadata || {},
        this.methodDescriptorConfirmUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/ConfirmUser',
    request,
    metadata || {},
    this.methodDescriptorConfirmUser);
  }

  methodDescriptorSetUserPassword = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/SetUserPassword',
    grpcWeb.MethodType.UNARY,
    nut_pb.SiteSetUserPasswordRequest,
    google_protobuf_empty_pb.Empty,
    (request: nut_pb.SiteSetUserPasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setUserPassword(
    request: nut_pb.SiteSetUserPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setUserPassword(
    request: nut_pb.SiteSetUserPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setUserPassword(
    request: nut_pb.SiteSetUserPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/SetUserPassword',
        request,
        metadata || {},
        this.methodDescriptorSetUserPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/SetUserPassword',
    request,
    metadata || {},
    this.methodDescriptorSetUserPassword);
  }

  methodDescriptorListUser = new grpcWeb.MethodDescriptor(
    '/palm.plugins.nut.v1.Site/ListUser',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nut_pb.SiteListUserResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nut_pb.SiteListUserResponse.deserializeBinary
  );

  listUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nut_pb.SiteListUserResponse>;

  listUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteListUserResponse) => void): grpcWeb.ClientReadableStream<nut_pb.SiteListUserResponse>;

  listUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nut_pb.SiteListUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/palm.plugins.nut.v1.Site/ListUser',
        request,
        metadata || {},
        this.methodDescriptorListUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/palm.plugins.nut.v1.Site/ListUser',
    request,
    metadata || {},
    this.methodDescriptorListUser);
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

