/**
 * @fileoverview gRPC-Web generated client stub for palm.pi.v1
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

var nut_pb = require('./nut_pb.js')
const proto = {};
proto.palm = {};
proto.palm.pi = {};
proto.palm.pi.v1 = require('./pi_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.pi.v1.UserClient =
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
proto.palm.pi.v1.UserPromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.pi.v1.UserProfile>}
 */
const methodDescriptor_User_Get = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.User/Get',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.pi.v1.UserProfile,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.pi.v1.UserProfile.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.pi.v1.UserProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.pi.v1.UserProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.UserClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.User/Get',
      request,
      metadata || {},
      methodDescriptor_User_Get,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.pi.v1.UserProfile>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.UserPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.User/Get',
      request,
      metadata || {},
      methodDescriptor_User_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.pi.v1.UserProfile,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_User_Set = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.User/Set',
  grpc.web.MethodType.UNARY,
  proto.palm.pi.v1.UserProfile,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.pi.v1.UserProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.pi.v1.UserProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.UserClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.User/Set',
      request,
      metadata || {},
      methodDescriptor_User_Set,
      callback);
};


/**
 * @param {!proto.palm.pi.v1.UserProfile} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.UserPromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.User/Set',
      request,
      metadata || {},
      methodDescriptor_User_Set);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.pi.v1.UserLogsResponse>}
 */
const methodDescriptor_User_Logs = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.User/Logs',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.pi.v1.UserLogsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.pi.v1.UserLogsResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.pi.v1.UserLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.pi.v1.UserLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.UserClient.prototype.logs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.User/Logs',
      request,
      metadata || {},
      methodDescriptor_User_Logs,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.pi.v1.UserLogsResponse>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.UserPromiseClient.prototype.logs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.User/Logs',
      request,
      metadata || {},
      methodDescriptor_User_Logs);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.pi.v1.TtyClient =
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
proto.palm.pi.v1.TtyPromiseClient =
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
 *   !proto.palm.pi.v1.TtyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Tty_Write = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.Tty/Write',
  grpc.web.MethodType.UNARY,
  proto.palm.pi.v1.TtyRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.pi.v1.TtyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.pi.v1.TtyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.TtyClient.prototype.write =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.Tty/Write',
      request,
      metadata || {},
      methodDescriptor_Tty_Write,
      callback);
};


/**
 * @param {!proto.palm.pi.v1.TtyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.TtyPromiseClient.prototype.write =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.Tty/Write',
      request,
      metadata || {},
      methodDescriptor_Tty_Write);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.pi.v1.AudioClient =
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
proto.palm.pi.v1.AudioPromiseClient =
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
 *   !proto.palm.pi.v1.AudioPlayRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Audio_Play = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.Audio/Play',
  grpc.web.MethodType.UNARY,
  proto.palm.pi.v1.AudioPlayRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.pi.v1.AudioPlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.pi.v1.AudioPlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.AudioClient.prototype.play =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.Audio/Play',
      request,
      metadata || {},
      methodDescriptor_Audio_Play,
      callback);
};


/**
 * @param {!proto.palm.pi.v1.AudioPlayRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.AudioPromiseClient.prototype.play =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.Audio/Play',
      request,
      metadata || {},
      methodDescriptor_Audio_Play);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Audio_Stop = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.Audio/Stop',
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
proto.palm.pi.v1.AudioClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.Audio/Stop',
      request,
      metadata || {},
      methodDescriptor_Audio_Stop,
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
proto.palm.pi.v1.AudioPromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.Audio/Stop',
      request,
      metadata || {},
      methodDescriptor_Audio_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.pi.v1.AudioTtsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Audio_Tts = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.Audio/Tts',
  grpc.web.MethodType.UNARY,
  proto.palm.pi.v1.AudioTtsRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.pi.v1.AudioTtsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.pi.v1.AudioTtsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.AudioClient.prototype.tts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.Audio/Tts',
      request,
      metadata || {},
      methodDescriptor_Audio_Tts,
      callback);
};


/**
 * @param {!proto.palm.pi.v1.AudioTtsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.AudioPromiseClient.prototype.tts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.Audio/Tts',
      request,
      metadata || {},
      methodDescriptor_Audio_Tts);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.pi.v1.ButtonClient =
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
proto.palm.pi.v1.ButtonPromiseClient =
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
proto.palm.pi.v1.LedClient =
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
proto.palm.pi.v1.LedPromiseClient =
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
proto.palm.pi.v1.OpenVpnClient =
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
proto.palm.pi.v1.OpenVpnPromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.pi.v1.OpenVpnProfile>}
 */
const methodDescriptor_OpenVpn_Get = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.OpenVpn/Get',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.pi.v1.OpenVpnProfile,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.pi.v1.OpenVpnProfile.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.pi.v1.OpenVpnProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.pi.v1.OpenVpnProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.OpenVpnClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.OpenVpn/Get',
      request,
      metadata || {},
      methodDescriptor_OpenVpn_Get,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.pi.v1.OpenVpnProfile>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.OpenVpnPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.OpenVpn/Get',
      request,
      metadata || {},
      methodDescriptor_OpenVpn_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.pi.v1.OpenVpnProfile,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_OpenVpn_Set = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.OpenVpn/Set',
  grpc.web.MethodType.UNARY,
  proto.palm.pi.v1.OpenVpnProfile,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.pi.v1.OpenVpnProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.pi.v1.OpenVpnProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.OpenVpnClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.OpenVpn/Set',
      request,
      metadata || {},
      methodDescriptor_OpenVpn_Set,
      callback);
};


/**
 * @param {!proto.palm.pi.v1.OpenVpnProfile} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.OpenVpnPromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.OpenVpn/Set',
      request,
      metadata || {},
      methodDescriptor_OpenVpn_Set);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.pi.v1.NetworkClient =
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
proto.palm.pi.v1.NetworkPromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.palm.pi.v1.NetworkProfile>}
 */
const methodDescriptor_Network_Get = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.Network/Get',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.pi.v1.NetworkProfile,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.pi.v1.NetworkProfile.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.pi.v1.NetworkProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.pi.v1.NetworkProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.NetworkClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.Network/Get',
      request,
      metadata || {},
      methodDescriptor_Network_Get,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.pi.v1.NetworkProfile>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.NetworkPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.Network/Get',
      request,
      metadata || {},
      methodDescriptor_Network_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.pi.v1.NetworkProfile,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Network_Set = new grpc.web.MethodDescriptor(
  '/palm.pi.v1.Network/Set',
  grpc.web.MethodType.UNARY,
  proto.palm.pi.v1.NetworkProfile,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.pi.v1.NetworkProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.pi.v1.NetworkProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.pi.v1.NetworkClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.pi.v1.Network/Set',
      request,
      metadata || {},
      methodDescriptor_Network_Set,
      callback);
};


/**
 * @param {!proto.palm.pi.v1.NetworkProfile} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.pi.v1.NetworkPromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.pi.v1.Network/Set',
      request,
      metadata || {},
      methodDescriptor_Network_Set);
};


module.exports = proto.palm.pi.v1;

