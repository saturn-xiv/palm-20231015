/**
 * @fileoverview gRPC-Web generated client stub for palm.nut.v1.auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.palm = {};
proto.palm.nut = {};
proto.palm.nut.v1 = {};
proto.palm.nut.v1.auth = require('./nut.auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.auth.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.auth.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.SignInRequest,
 *   !proto.palm.nut.v1.auth.SignInResponse>}
 */
const methodDescriptor_User_SignIn = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/SignIn',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.SignInRequest,
  proto.palm.nut.v1.auth.SignInResponse,
  /**
   * @param {!proto.palm.nut.v1.auth.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.auth.SignInResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.auth.SignInResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.auth.SignInResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SignIn',
      request,
      metadata || {},
      methodDescriptor_User_SignIn,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.auth.SignInResponse>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SignIn',
      request,
      metadata || {},
      methodDescriptor_User_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.SignUpRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_SignUp = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/SignUp',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.SignUpRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SignUp',
      request,
      metadata || {},
      methodDescriptor_User_SignUp,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SignUp',
      request,
      metadata || {},
      methodDescriptor_User_SignUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_Confirm = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/Confirm',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.confirm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Confirm',
      request,
      metadata || {},
      methodDescriptor_User_Confirm,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.confirm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Confirm',
      request,
      metadata || {},
      methodDescriptor_User_Confirm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.TokenForm,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ConfirmByToken = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/ConfirmByToken',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.TokenForm,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.TokenForm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.confirmByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ConfirmByToken',
      request,
      metadata || {},
      methodDescriptor_User_ConfirmByToken,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.confirmByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ConfirmByToken',
      request,
      metadata || {},
      methodDescriptor_User_ConfirmByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_Unlock = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/Unlock',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.unlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Unlock',
      request,
      metadata || {},
      methodDescriptor_User_Unlock,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.unlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Unlock',
      request,
      metadata || {},
      methodDescriptor_User_Unlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.TokenForm,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_UnlockByToken = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/UnlockByToken',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.TokenForm,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.TokenForm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.unlockByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/UnlockByToken',
      request,
      metadata || {},
      methodDescriptor_User_UnlockByToken,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.unlockByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/UnlockByToken',
      request,
      metadata || {},
      methodDescriptor_User_UnlockByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ForgotPassword = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/ForgotPassword',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.forgotPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_User_ForgotPassword,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.forgotPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_User_ForgotPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.ResetPasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ResetPassword = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.ResetPasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_User_ResetPassword,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_User_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.ChangePasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ChangePassword = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.ChangePasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_User_ChangePassword,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_User_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.ProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_SetProfile = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/SetProfile',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.ProfileRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.setProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SetProfile',
      request,
      metadata || {},
      methodDescriptor_User_SetProfile,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.setProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SetProfile',
      request,
      metadata || {},
      methodDescriptor_User_SetProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_SignOut = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/SignOut',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.signOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SignOut',
      request,
      metadata || {},
      methodDescriptor_User_SignOut,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.signOut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/SignOut',
      request,
      metadata || {},
      methodDescriptor_User_SignOut);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.nut.v1.auth.SelfResponse>}
 */
const methodDescriptor_User_Self = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/Self',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.nut.v1.auth.SelfResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.auth.SelfResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.auth.SelfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.auth.SelfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.self =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Self',
      request,
      metadata || {},
      methodDescriptor_User_Self,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.auth.SelfResponse>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.self =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Self',
      request,
      metadata || {},
      methodDescriptor_User_Self);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Duration,
 *   !proto.palm.nut.v1.auth.LogList>}
 */
const methodDescriptor_User_Log = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/Log',
  grpc.web.MethodType.UNARY,
  google_protobuf_duration_pb.Duration,
  proto.palm.nut.v1.auth.LogList,
  /**
   * @param {!proto.google.protobuf.Duration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.auth.LogList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.auth.LogList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.auth.LogList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.log =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Log',
      request,
      metadata || {},
      methodDescriptor_User_Log,
      callback);
};


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.auth.LogList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.log =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Log',
      request,
      metadata || {},
      methodDescriptor_User_Log);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Duration,
 *   !proto.palm.nut.v1.auth.UserList>}
 */
const methodDescriptor_User_Index = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/Index',
  grpc.web.MethodType.UNARY,
  google_protobuf_duration_pb.Duration,
  proto.palm.nut.v1.auth.UserList,
  /**
   * @param {!proto.google.protobuf.Duration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.auth.UserList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.auth.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.auth.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Index',
      request,
      metadata || {},
      methodDescriptor_User_Index,
      callback);
};


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.auth.UserList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Index',
      request,
      metadata || {},
      methodDescriptor_User_Index);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.UserQuery,
 *   !proto.palm.nut.v1.auth.UserList.Item>}
 */
const methodDescriptor_User_Show = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/Show',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.UserQuery,
  proto.palm.nut.v1.auth.UserList.Item,
  /**
   * @param {!proto.palm.nut.v1.auth.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.auth.UserList.Item.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.auth.UserList.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.auth.UserList.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Show',
      request,
      metadata || {},
      methodDescriptor_User_Show,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.auth.UserList.Item>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Show',
      request,
      metadata || {},
      methodDescriptor_User_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_Lock = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.User/Lock',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.UserClient.prototype.lock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Lock',
      request,
      metadata || {},
      methodDescriptor_User_Lock,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.UserPromiseClient.prototype.lock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.User/Lock',
      request,
      metadata || {},
      methodDescriptor_User_Lock);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.auth.AttachmentClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.auth.AttachmentPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Duration,
 *   !proto.palm.nut.v1.auth.AttachmentList>}
 */
const methodDescriptor_Attachment_All = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.Attachment/All',
  grpc.web.MethodType.UNARY,
  google_protobuf_duration_pb.Duration,
  proto.palm.nut.v1.auth.AttachmentList,
  /**
   * @param {!proto.google.protobuf.Duration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.auth.AttachmentList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.auth.AttachmentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.auth.AttachmentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.AttachmentClient.prototype.all =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/All',
      request,
      metadata || {},
      methodDescriptor_Attachment_All,
      callback);
};


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.auth.AttachmentList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.AttachmentPromiseClient.prototype.all =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/All',
      request,
      metadata || {},
      methodDescriptor_Attachment_All);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.AttachmentQuery,
 *   !proto.palm.nut.v1.auth.AttachmentList.Item>}
 */
const methodDescriptor_Attachment_Show = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.Attachment/Show',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.AttachmentQuery,
  proto.palm.nut.v1.auth.AttachmentList.Item,
  /**
   * @param {!proto.palm.nut.v1.auth.AttachmentQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.auth.AttachmentList.Item.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.auth.AttachmentList.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.auth.AttachmentList.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.AttachmentClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/Show',
      request,
      metadata || {},
      methodDescriptor_Attachment_Show,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.auth.AttachmentList.Item>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.AttachmentPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/Show',
      request,
      metadata || {},
      methodDescriptor_Attachment_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.AttachmentUploadRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Attachment_Upload = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.Attachment/Upload',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.AttachmentUploadRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.AttachmentUploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.AttachmentUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.AttachmentClient.prototype.upload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/Upload',
      request,
      metadata || {},
      methodDescriptor_Attachment_Upload,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.AttachmentUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.AttachmentPromiseClient.prototype.upload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/Upload',
      request,
      metadata || {},
      methodDescriptor_Attachment_Upload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.auth.AttachmentQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Attachment_Destory = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.auth.Attachment/Destory',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.auth.AttachmentQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.auth.AttachmentQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.auth.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.auth.AttachmentClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/Destory',
      request,
      metadata || {},
      methodDescriptor_Attachment_Destory,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.auth.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.auth.AttachmentPromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.auth.Attachment/Destory',
      request,
      metadata || {},
      methodDescriptor_Attachment_Destory);
};


module.exports = proto.palm.nut.v1.auth;

