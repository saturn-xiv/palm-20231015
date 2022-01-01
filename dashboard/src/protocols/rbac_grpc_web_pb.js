/**
 * @fileoverview gRPC-Web generated client stub for palm.rbac.v1
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
proto.palm.rbac = {};
proto.palm.rbac.v1 = require('./rbac_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.rbac.v1.EnforcerClient =
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
proto.palm.rbac.v1.EnforcerPromiseClient =
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
 *   !proto.palm.rbac.v1.UserList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteUser = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.UserList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.UserList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteUser,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.OperationList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteOperation = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/DeleteOperation',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.OperationList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.OperationList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.OperationList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.deleteOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteOperation',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteOperation,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.OperationList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.deleteOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteOperation',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.ResourceList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteResource = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/DeleteResource',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.ResourceList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.ResourceList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.ResourceList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.deleteResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteResource',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteResource,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.ResourceList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.deleteResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteResource',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.rbac.v1.RoleList>}
 */
const methodDescriptor_Enforcer_AllRoles = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/AllRoles',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.rbac.v1.RoleList,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.rbac.v1.RoleList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.rbac.v1.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.rbac.v1.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.allRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/AllRoles',
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
 * @return {!Promise<!proto.palm.rbac.v1.RoleList>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.allRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/AllRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AllRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.RolesInheritance,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_LinkRoles = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/LinkRoles',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.RolesInheritance,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.RolesInheritance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.linkRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/LinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_LinkRoles,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.linkRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/LinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_LinkRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.RolesInheritance,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_UnlinkRoles = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/UnlinkRoles',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.RolesInheritance,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.RolesInheritance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.unlinkRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/UnlinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_UnlinkRoles,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.RolesInheritance} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.unlinkRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/UnlinkRoles',
      request,
      metadata || {},
      methodDescriptor_Enforcer_UnlinkRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.UserList.Item,
 *   !proto.palm.rbac.v1.RoleList>}
 */
const methodDescriptor_Enforcer_GetRolesForUser = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/GetRolesForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.UserList.Item,
  proto.palm.rbac.v1.RoleList,
  /**
   * @param {!proto.palm.rbac.v1.UserList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.rbac.v1.RoleList.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.rbac.v1.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.rbac.v1.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.getRolesForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetRolesForUser,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.rbac.v1.RoleList>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.getRolesForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetRolesForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.RoleList.Item,
 *   !proto.palm.rbac.v1.UserList>}
 */
const methodDescriptor_Enforcer_GetUsersForRole = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/GetUsersForRole',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.RoleList.Item,
  proto.palm.rbac.v1.UserList,
  /**
   * @param {!proto.palm.rbac.v1.RoleList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.rbac.v1.UserList.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.rbac.v1.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.rbac.v1.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.getUsersForRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetUsersForRole,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.rbac.v1.UserList>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.getUsersForRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetUsersForRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.RoleForUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_HasRoleForUser = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/HasRoleForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.RoleForUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.RoleForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.hasRoleForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/HasRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasRoleForUser,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.hasRoleForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/HasRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasRoleForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.AddRoleForUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_AddRoleForUser = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/AddRoleForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.AddRoleForUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.AddRoleForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.AddRoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.addRoleForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/AddRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddRoleForUser,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.AddRoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.addRoleForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/AddRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddRoleForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.RoleForUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteRoleForUser = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/DeleteRoleForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.RoleForUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.RoleForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.deleteRoleForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRoleForUser,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.RoleForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.deleteRoleForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteRoleForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRoleForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.RoleList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeleteRole = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/DeleteRole',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.RoleList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.RoleList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRole,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.PermissionList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_AddPermission = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/AddPermission',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.PermissionList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.PermissionList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.addPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/AddPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddPermission,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.addPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/AddPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_AddPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.PermissionList.Item,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_DeletePermission = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/DeletePermission',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.PermissionList.Item,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.PermissionList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.deletePermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeletePermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeletePermission,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.PermissionList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.deletePermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/DeletePermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_DeletePermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.PermissionQuery,
 *   !proto.palm.rbac.v1.PermissionList>}
 */
const methodDescriptor_Enforcer_GetPermissions = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/GetPermissions',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.PermissionQuery,
  proto.palm.rbac.v1.PermissionList,
  /**
   * @param {!proto.palm.rbac.v1.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.rbac.v1.PermissionList.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.rbac.v1.PermissionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.rbac.v1.PermissionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.getPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetPermissions,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.rbac.v1.PermissionList>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.getPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.PermissionQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_HasPermission = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/HasPermission',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.PermissionQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.hasPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/HasPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasPermission,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.hasPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/HasPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.UserList.Item,
 *   !proto.palm.rbac.v1.RoleList>}
 */
const methodDescriptor_Enforcer_GetImplicitRolesForUser = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/GetImplicitRolesForUser',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.UserList.Item,
  proto.palm.rbac.v1.RoleList,
  /**
   * @param {!proto.palm.rbac.v1.UserList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.rbac.v1.RoleList.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.rbac.v1.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.rbac.v1.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.getImplicitRolesForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetImplicitRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitRolesForUser,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.UserList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.rbac.v1.RoleList>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.getImplicitRolesForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetImplicitRolesForUser',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitRolesForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.RoleList.Item,
 *   !proto.palm.rbac.v1.UserList>}
 */
const methodDescriptor_Enforcer_GetImplicitUsersForRole = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/GetImplicitUsersForRole',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.RoleList.Item,
  proto.palm.rbac.v1.UserList,
  /**
   * @param {!proto.palm.rbac.v1.RoleList.Item} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.rbac.v1.UserList.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.rbac.v1.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.rbac.v1.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.getImplicitUsersForRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetImplicitUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitUsersForRole,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.RoleList.Item} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.rbac.v1.UserList>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.getImplicitUsersForRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetImplicitUsersForRole',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitUsersForRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.PermissionQuery,
 *   !proto.palm.rbac.v1.PermissionList>}
 */
const methodDescriptor_Enforcer_GetImplicitPermissions = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/GetImplicitPermissions',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.PermissionQuery,
  proto.palm.rbac.v1.PermissionList,
  /**
   * @param {!proto.palm.rbac.v1.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.rbac.v1.PermissionList.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.rbac.v1.PermissionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.rbac.v1.PermissionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.getImplicitPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetImplicitPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitPermissions,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.rbac.v1.PermissionList>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.getImplicitPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/GetImplicitPermissions',
      request,
      metadata || {},
      methodDescriptor_Enforcer_GetImplicitPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.rbac.v1.PermissionQuery,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Enforcer_HasImplicitPermission = new grpc.web.MethodDescriptor(
  '/palm.rbac.v1.Enforcer/HasImplicitPermission',
  grpc.web.MethodType.UNARY,
  proto.palm.rbac.v1.PermissionQuery,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.rbac.v1.PermissionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.rbac.v1.EnforcerClient.prototype.hasImplicitPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/HasImplicitPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasImplicitPermission,
      callback);
};


/**
 * @param {!proto.palm.rbac.v1.PermissionQuery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.rbac.v1.EnforcerPromiseClient.prototype.hasImplicitPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.rbac.v1.Enforcer/HasImplicitPermission',
      request,
      metadata || {},
      methodDescriptor_Enforcer_HasImplicitPermission);
};


module.exports = proto.palm.rbac.v1;

