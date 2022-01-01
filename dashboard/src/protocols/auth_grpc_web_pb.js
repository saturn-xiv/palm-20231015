/**
 * @fileoverview gRPC-Web generated client stub for palm.auth.v1
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
proto.palm.auth = {};
proto.palm.auth.v1 = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.auth.v1.UserClient =
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
proto.palm.auth.v1.UserPromiseClient =
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
 *   !proto.palm.auth.v1.SignInRequest,
 *   !proto.palm.auth.v1.SignInResponse>}
 */
const methodDescriptor_User_SignIn = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/SignIn',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.SignInRequest,
  proto.palm.auth.v1.SignInResponse,
  /**
   * @param {!proto.palm.auth.v1.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.auth.v1.SignInResponse.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.auth.v1.SignInResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.auth.v1.SignInResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/SignIn',
      request,
      metadata || {},
      methodDescriptor_User_SignIn,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.auth.v1.SignInResponse>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/SignIn',
      request,
      metadata || {},
      methodDescriptor_User_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.SignUpRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_SignUp = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/SignUp',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.SignUpRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/SignUp',
      request,
      metadata || {},
      methodDescriptor_User_SignUp,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/SignUp',
      request,
      metadata || {},
      methodDescriptor_User_SignUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_Confirm = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/Confirm',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.confirm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/Confirm',
      request,
      metadata || {},
      methodDescriptor_User_Confirm,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.confirm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/Confirm',
      request,
      metadata || {},
      methodDescriptor_User_Confirm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.TokenForm,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ConfirmByToken = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/ConfirmByToken',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.TokenForm,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.TokenForm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.confirmByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/ConfirmByToken',
      request,
      metadata || {},
      methodDescriptor_User_ConfirmByToken,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.confirmByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/ConfirmByToken',
      request,
      metadata || {},
      methodDescriptor_User_ConfirmByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_Unlock = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/Unlock',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.unlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/Unlock',
      request,
      metadata || {},
      methodDescriptor_User_Unlock,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.unlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/Unlock',
      request,
      metadata || {},
      methodDescriptor_User_Unlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.TokenForm,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_UnlockByToken = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/UnlockByToken',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.TokenForm,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.TokenForm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.unlockByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/UnlockByToken',
      request,
      metadata || {},
      methodDescriptor_User_UnlockByToken,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.TokenForm} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.unlockByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/UnlockByToken',
      request,
      metadata || {},
      methodDescriptor_User_UnlockByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ForgotPassword = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/ForgotPassword',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.forgotPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_User_ForgotPassword,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.forgotPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_User_ForgotPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.ResetPasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ResetPassword = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.ResetPasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_User_ResetPassword,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_User_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.ChangePasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_ChangePassword = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.ChangePasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_User_ChangePassword,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_User_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.ProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_SetProfile = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/SetProfile',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.ProfileRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.setProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/SetProfile',
      request,
      metadata || {},
      methodDescriptor_User_SetProfile,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.setProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/SetProfile',
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
  '/palm.auth.v1.User/SignOut',
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
proto.palm.auth.v1.UserClient.prototype.signOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/SignOut',
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
proto.palm.auth.v1.UserPromiseClient.prototype.signOut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/SignOut',
      request,
      metadata || {},
      methodDescriptor_User_SignOut);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.auth.v1.SelfResponse>}
 */
const methodDescriptor_User_Self = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/Self',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.auth.v1.SelfResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.auth.v1.SelfResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.auth.v1.SelfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.auth.v1.SelfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.self =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/Self',
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
 * @return {!Promise<!proto.palm.auth.v1.SelfResponse>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.self =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/Self',
      request,
      metadata || {},
      methodDescriptor_User_Self);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Duration,
 *   !proto.palm.auth.v1.LogList>}
 */
const methodDescriptor_User_Log = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/Log',
  grpc.web.MethodType.UNARY,
  google_protobuf_duration_pb.Duration,
  proto.palm.auth.v1.LogList,
  /**
   * @param {!proto.google.protobuf.Duration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.auth.v1.LogList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.auth.v1.LogList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.auth.v1.LogList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.log =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/Log',
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
 * @return {!Promise<!proto.palm.auth.v1.LogList>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.log =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/Log',
      request,
      metadata || {},
      methodDescriptor_User_Log);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Duration,
 *   !proto.palm.auth.v1.UserList>}
 */
const methodDescriptor_User_Index = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/Index',
  grpc.web.MethodType.UNARY,
  google_protobuf_duration_pb.Duration,
  proto.palm.auth.v1.UserList,
  /**
   * @param {!proto.google.protobuf.Duration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.auth.v1.UserList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.auth.v1.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.auth.v1.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/Index',
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
 * @return {!Promise<!proto.palm.auth.v1.UserList>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/Index',
      request,
      metadata || {},
      methodDescriptor_User_Index);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.UserQuery,
 *   !proto.palm.auth.v1.UserList.Item>}
 */
const methodDescriptor_User_Show = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/Show',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.UserQuery,
  proto.palm.auth.v1.UserList.Item,
  /**
   * @param {!proto.palm.auth.v1.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.auth.v1.UserList.Item.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.auth.v1.UserList.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.auth.v1.UserList.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/Show',
      request,
      metadata || {},
      methodDescriptor_User_Show,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.auth.v1.UserList.Item>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/Show',
      request,
      metadata || {},
      methodDescriptor_User_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.UserQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_Lock = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.User/Lock',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.UserQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.UserQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.UserClient.prototype.lock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.User/Lock',
      request,
      metadata || {},
      methodDescriptor_User_Lock,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.UserQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.UserPromiseClient.prototype.lock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.User/Lock',
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
proto.palm.auth.v1.AttachmentClient =
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
proto.palm.auth.v1.AttachmentPromiseClient =
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
 *   !proto.palm.auth.v1.AttachmentList>}
 */
const methodDescriptor_Attachment_All = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.Attachment/All',
  grpc.web.MethodType.UNARY,
  google_protobuf_duration_pb.Duration,
  proto.palm.auth.v1.AttachmentList,
  /**
   * @param {!proto.google.protobuf.Duration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.auth.v1.AttachmentList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.auth.v1.AttachmentList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.auth.v1.AttachmentList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.AttachmentClient.prototype.all =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.Attachment/All',
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
 * @return {!Promise<!proto.palm.auth.v1.AttachmentList>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.AttachmentPromiseClient.prototype.all =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.Attachment/All',
      request,
      metadata || {},
      methodDescriptor_Attachment_All);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.AttachmentQuery,
 *   !proto.palm.auth.v1.AttachmentList.Item>}
 */
const methodDescriptor_Attachment_Show = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.Attachment/Show',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.AttachmentQuery,
  proto.palm.auth.v1.AttachmentList.Item,
  /**
   * @param {!proto.palm.auth.v1.AttachmentQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.auth.v1.AttachmentList.Item.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.auth.v1.AttachmentList.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.auth.v1.AttachmentList.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.AttachmentClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.Attachment/Show',
      request,
      metadata || {},
      methodDescriptor_Attachment_Show,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.auth.v1.AttachmentList.Item>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.AttachmentPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.Attachment/Show',
      request,
      metadata || {},
      methodDescriptor_Attachment_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.AttachmentUploadRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Attachment_Upload = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.Attachment/Upload',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.AttachmentUploadRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.AttachmentUploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.AttachmentUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.AttachmentClient.prototype.upload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.Attachment/Upload',
      request,
      metadata || {},
      methodDescriptor_Attachment_Upload,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.AttachmentUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.AttachmentPromiseClient.prototype.upload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.Attachment/Upload',
      request,
      metadata || {},
      methodDescriptor_Attachment_Upload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.AttachmentQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Attachment_Destory = new grpc.web.MethodDescriptor(
  '/palm.auth.v1.Attachment/Destory',
  grpc.web.MethodType.UNARY,
  proto.palm.auth.v1.AttachmentQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.auth.v1.AttachmentQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.auth.v1.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.auth.v1.AttachmentClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.auth.v1.Attachment/Destory',
      request,
      metadata || {},
      methodDescriptor_Attachment_Destory,
      callback);
};


/**
 * @param {!proto.palm.auth.v1.AttachmentQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.auth.v1.AttachmentPromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.auth.v1.Attachment/Destory',
      request,
      metadata || {},
      methodDescriptor_Attachment_Destory);
};


module.exports = proto.palm.auth.v1;

