/**
 * @fileoverview gRPC-Web generated client stub for palm.nut.v1.rbac
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.palm = {};
proto.palm.nut = {};
proto.palm.nut.v1 = {};
proto.palm.nut.v1.rbac = require('./nut.rbac_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.rbac.EnforcerClient =
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
proto.palm.nut.v1.rbac.EnforcerPromiseClient =
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
 *   !proto.palm.nut.v1.rbac.UserList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteUser = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.UserList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.UserList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteUser,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.OperationList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteOperation = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/DeleteOperation',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.OperationList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.OperationList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.OperationList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.deleteOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteOperation',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteOperation,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.OperationList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.deleteOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteOperation',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.ResourceList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteResource = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/DeleteResource',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.ResourceList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.ResourceList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.ResourceList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.deleteResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteResource',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteResource,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.ResourceList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.deleteResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteResource',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.nut.v1.rbac.RoleList>}
 */
const methodDescriptor_Enforcer_AllRoles = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/AllRoles',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.nut.v1.rbac.RoleList,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.rbac.RoleList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.rbac.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.rbac.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.allRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/AllRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AllRoles,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.rbac.RoleList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.allRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/AllRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AllRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.RolesInheritance,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_LinkRoles = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/LinkRoles',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.RolesInheritance,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.RolesInheritance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.linkRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/LinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_LinkRoles,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.linkRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/LinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_LinkRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.RolesInheritance,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_UnlinkRoles = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/UnlinkRoles',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.RolesInheritance,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.RolesInheritance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.unlinkRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/UnlinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_UnlinkRoles,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.unlinkRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/UnlinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_UnlinkRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.UserList.Item,
 *   !proto.palm.nut.v1.rbac.RoleList>}
 */
const methodDescriptor_Enforcer_GetRolesForUser = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/GetRolesForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.UserList.Item,
  proto.palm.nut.v1.rbac.RoleList,
  /**
   * @param {!proto.palm.nut.v1.rbac.UserList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.rbac.RoleList.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.rbac.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.rbac.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.getRolesForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetRolesForUser,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.rbac.RoleList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.getRolesForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetRolesForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.RoleList.Item,
 *   !proto.palm.nut.v1.rbac.UserList>}
 */
const methodDescriptor_Enforcer_GetUsersForRole = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/GetUsersForRole',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.RoleList.Item,
  proto.palm.nut.v1.rbac.UserList,
  /**
   * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.rbac.UserList.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.rbac.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.rbac.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.getUsersForRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetUsersForRole,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.rbac.UserList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.getUsersForRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetUsersForRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.RoleForUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_HasRoleForUser = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/HasRoleForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.RoleForUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.RoleForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.hasRoleForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/HasRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasRoleForUser,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.hasRoleForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/HasRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasRoleForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.AddRoleForUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_AddRoleForUser = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/AddRoleForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.AddRoleForUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.AddRoleForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.AddRoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.addRoleForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/AddRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddRoleForUser,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.AddRoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.addRoleForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/AddRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddRoleForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.RoleForUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteRoleForUser = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/DeleteRoleForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.RoleForUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.RoleForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.deleteRoleForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRoleForUser,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.deleteRoleForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRoleForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.RoleList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteRole = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/DeleteRole',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.RoleList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRole,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.PermissionList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_AddPermission = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/AddPermission',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.PermissionList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.PermissionList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.addPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/AddPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddPermission,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.addPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/AddPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.PermissionList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeletePermission = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/DeletePermission',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.PermissionList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.PermissionList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.deletePermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeletePermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeletePermission,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.deletePermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/DeletePermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeletePermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.PermissionQuery,
 *   !proto.palm.nut.v1.rbac.PermissionList>}
 */
const methodDescriptor_Enforcer_GetPermissions = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/GetPermissions',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.PermissionQuery,
  proto.palm.nut.v1.rbac.PermissionList,
  /**
   * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.rbac.PermissionList.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.rbac.PermissionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.rbac.PermissionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.getPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetPermissions,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.rbac.PermissionList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.getPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.PermissionQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_HasPermission = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/HasPermission',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.PermissionQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.hasPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/HasPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasPermission,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.hasPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/HasPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.UserList.Item,
 *   !proto.palm.nut.v1.rbac.RoleList>}
 */
const methodDescriptor_Enforcer_GetImplicitRolesForUser = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/GetImplicitRolesForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.UserList.Item,
  proto.palm.nut.v1.rbac.RoleList,
  /**
   * @param {!proto.palm.nut.v1.rbac.UserList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.rbac.RoleList.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.rbac.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.rbac.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.getImplicitRolesForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetImplicitRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitRolesForUser,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.rbac.RoleList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.getImplicitRolesForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetImplicitRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitRolesForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.RoleList.Item,
 *   !proto.palm.nut.v1.rbac.UserList>}
 */
const methodDescriptor_Enforcer_GetImplicitUsersForRole = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/GetImplicitUsersForRole',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.RoleList.Item,
  proto.palm.nut.v1.rbac.UserList,
  /**
   * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.rbac.UserList.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.rbac.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.rbac.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.getImplicitUsersForRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetImplicitUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitUsersForRole,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.rbac.UserList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.getImplicitUsersForRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetImplicitUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitUsersForRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.PermissionQuery,
 *   !proto.palm.nut.v1.rbac.PermissionList>}
 */
const methodDescriptor_Enforcer_GetImplicitPermissions = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/GetImplicitPermissions',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.PermissionQuery,
  proto.palm.nut.v1.rbac.PermissionList,
  /**
   * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.rbac.PermissionList.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.rbac.PermissionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.rbac.PermissionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.getImplicitPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetImplicitPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitPermissions,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.rbac.PermissionList>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.getImplicitPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/GetImplicitPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.rbac.PermissionQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_HasImplicitPermission = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.rbac.Enforcer/HasImplicitPermission',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.rbac.PermissionQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.rbac.EnforcerClient.prototype.hasImplicitPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/HasImplicitPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasImplicitPermission,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.rbac.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.rbac.EnforcerPromiseClient.prototype.hasImplicitPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.rbac.Enforcer/HasImplicitPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasImplicitPermission);
};


module.exports = proto.palm.nut.v1.rbac;

