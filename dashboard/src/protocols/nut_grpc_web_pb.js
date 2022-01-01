/**
 * @fileoverview gRPC-Web generated client stub for palm.nut.v1
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

var auth_pb = require('./auth_pb.js')
const proto = {};
proto.palm = {};
proto.palm.nut = {};
proto.palm.nut.v1 = require('./nut_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.SiteClient =
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
proto.palm.nut.v1.SitePromiseClient =
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
 *   !proto.palm.nut.v1.AboutResponse>}
 */
const methodDescriptor_Site_About = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Site/About',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.nut.v1.AboutResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.AboutResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.AboutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.AboutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.SiteClient.prototype.about =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Site/About',
      request,
      metadata || {},
      methodDescriptor_Site_About,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.AboutResponse>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.SitePromiseClient.prototype.about =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Site/About',
      request,
      metadata || {},
      methodDescriptor_Site_About);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.auth.v1.SignUpRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Site_Install = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Site/Install',
  grpc.web.MethodType.UNARY,
  auth_pb.SignUpRequest,
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
proto.palm.nut.v1.SiteClient.prototype.install =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Site/Install',
      request,
      metadata || {},
      methodDescriptor_Site_Install,
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
proto.palm.nut.v1.SitePromiseClient.prototype.install =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Site/Install',
      request,
      metadata || {},
      methodDescriptor_Site_Install);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.LocaleClient =
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
proto.palm.nut.v1.LocalePromiseClient =
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
 *   !proto.palm.nut.v1.LocaleIndexRequest,
 *   !proto.palm.nut.v1.LocaleIndexResponse>}
 */
const methodDescriptor_Locale_Index = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Locale/Index',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.LocaleIndexRequest,
  proto.palm.nut.v1.LocaleIndexResponse,
  /**
   * @param {!proto.palm.nut.v1.LocaleIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.LocaleIndexResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.LocaleIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.LocaleIndexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.LocaleIndexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.LocaleClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Locale/Index',
      request,
      metadata || {},
      methodDescriptor_Locale_Index,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.LocaleIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.LocaleIndexResponse>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.LocalePromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Locale/Index',
      request,
      metadata || {},
      methodDescriptor_Locale_Index);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.LocaleSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Locale_Set = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Locale/Set',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.LocaleSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.LocaleSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.LocaleSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.LocaleClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Locale/Set',
      request,
      metadata || {},
      methodDescriptor_Locale_Set,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.LocaleSetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.LocalePromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Locale/Set',
      request,
      metadata || {},
      methodDescriptor_Locale_Set);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.StmpClient =
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
proto.palm.nut.v1.StmpPromiseClient =
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
 *   !proto.palm.nut.v1.StmpProfile>}
 */
const methodDescriptor_Stmp_Get = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Stmp/Get',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.nut.v1.StmpProfile,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.StmpProfile.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.StmpProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.StmpProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.StmpClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Stmp/Get',
      request,
      metadata || {},
      methodDescriptor_Stmp_Get,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.StmpProfile>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.StmpPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Stmp/Get',
      request,
      metadata || {},
      methodDescriptor_Stmp_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.StmpProfile,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Stmp_Set = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Stmp/Set',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.StmpProfile,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.StmpProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.StmpProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.StmpClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Stmp/Set',
      request,
      metadata || {},
      methodDescriptor_Stmp_Set,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.StmpProfile} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.StmpPromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Stmp/Set',
      request,
      metadata || {},
      methodDescriptor_Stmp_Set);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.TwilioClient =
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
proto.palm.nut.v1.TwilioPromiseClient =
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
 *   !proto.palm.nut.v1.TwilioProfile>}
 */
const methodDescriptor_Twilio_Get = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Twilio/Get',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.nut.v1.TwilioProfile,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.TwilioProfile.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.TwilioProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.TwilioProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.TwilioClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Twilio/Get',
      request,
      metadata || {},
      methodDescriptor_Twilio_Get,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.TwilioProfile>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.TwilioPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Twilio/Get',
      request,
      metadata || {},
      methodDescriptor_Twilio_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.TwilioProfile,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Twilio_Set = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Twilio/Set',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.TwilioProfile,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.TwilioProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.TwilioProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.TwilioClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Twilio/Set',
      request,
      metadata || {},
      methodDescriptor_Twilio_Set,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.TwilioProfile} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.TwilioPromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Twilio/Set',
      request,
      metadata || {},
      methodDescriptor_Twilio_Set);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.SeoClient =
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
proto.palm.nut.v1.SeoPromiseClient =
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
 *   !proto.palm.nut.v1.SeoProfile>}
 */
const methodDescriptor_Seo_Get = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Seo/Get',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.palm.nut.v1.SeoProfile,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.SeoProfile.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.SeoProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.SeoProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.SeoClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Seo/Get',
      request,
      metadata || {},
      methodDescriptor_Seo_Get,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.SeoProfile>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.SeoPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Seo/Get',
      request,
      metadata || {},
      methodDescriptor_Seo_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.SeoProfile,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Seo_Set = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Seo/Set',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.SeoProfile,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.SeoProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.SeoProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.SeoClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Seo/Set',
      request,
      metadata || {},
      methodDescriptor_Seo_Set,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.SeoProfile} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.SeoPromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Seo/Set',
      request,
      metadata || {},
      methodDescriptor_Seo_Set);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.TagClient =
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
proto.palm.nut.v1.TagPromiseClient =
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
 *   !proto.palm.nut.v1.CreateTagRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Tag_Create = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Tag/Create',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.CreateTagRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.CreateTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.CreateTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.TagClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Tag/Create',
      request,
      metadata || {},
      methodDescriptor_Tag_Create,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.CreateTagRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.TagPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Tag/Create',
      request,
      metadata || {},
      methodDescriptor_Tag_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.palm.nut.v1.IndexTagResponse.Item>}
 */
const methodDescriptor_Tag_Show = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Tag/Show',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.IdRequest,
  proto.palm.nut.v1.IndexTagResponse.Item,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.IndexTagResponse.Item.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.IndexTagResponse.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.IndexTagResponse.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.TagClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Tag/Show',
      request,
      metadata || {},
      methodDescriptor_Tag_Show,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.IndexTagResponse.Item>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.TagPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Tag/Show',
      request,
      metadata || {},
      methodDescriptor_Tag_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.CreateTagRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Tag_Update = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Tag/Update',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.CreateTagRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.CreateTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.CreateTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.TagClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Tag/Update',
      request,
      metadata || {},
      methodDescriptor_Tag_Update,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.CreateTagRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.TagPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Tag/Update',
      request,
      metadata || {},
      methodDescriptor_Tag_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Tag_Destory = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Tag/Destory',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.IdRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.TagClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Tag/Destory',
      request,
      metadata || {},
      methodDescriptor_Tag_Destory,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.TagPromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Tag/Destory',
      request,
      metadata || {},
      methodDescriptor_Tag_Destory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.Pager,
 *   !proto.palm.nut.v1.IndexTagResponse>}
 */
const methodDescriptor_Tag_Index = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Tag/Index',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.Pager,
  proto.palm.nut.v1.IndexTagResponse,
  /**
   * @param {!proto.palm.nut.v1.Pager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.IndexTagResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.IndexTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.IndexTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.TagClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Tag/Index',
      request,
      metadata || {},
      methodDescriptor_Tag_Index,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.IndexTagResponse>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.TagPromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Tag/Index',
      request,
      metadata || {},
      methodDescriptor_Tag_Index);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.nut.v1.NotificationClient =
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
proto.palm.nut.v1.NotificationPromiseClient =
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
 *   !proto.palm.nut.v1.CreateNotificationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Notification_Create = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Notification/Create',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.CreateNotificationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.CreateNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.CreateNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.NotificationClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Notification/Create',
      request,
      metadata || {},
      methodDescriptor_Notification_Create,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.CreateNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.NotificationPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Notification/Create',
      request,
      metadata || {},
      methodDescriptor_Notification_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.palm.nut.v1.IndexNotificationResponse.Item>}
 */
const methodDescriptor_Notification_Show = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Notification/Show',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.IdRequest,
  proto.palm.nut.v1.IndexNotificationResponse.Item,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.IndexNotificationResponse.Item.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.IndexNotificationResponse.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.IndexNotificationResponse.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.NotificationClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Notification/Show',
      request,
      metadata || {},
      methodDescriptor_Notification_Show,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.IndexNotificationResponse.Item>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.NotificationPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Notification/Show',
      request,
      metadata || {},
      methodDescriptor_Notification_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Notification_SetRead = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Notification/SetRead',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.IdRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.NotificationClient.prototype.setRead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Notification/SetRead',
      request,
      metadata || {},
      methodDescriptor_Notification_SetRead,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.NotificationPromiseClient.prototype.setRead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Notification/SetRead',
      request,
      metadata || {},
      methodDescriptor_Notification_SetRead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Notification_Destory = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Notification/Destory',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.IdRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.NotificationClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Notification/Destory',
      request,
      metadata || {},
      methodDescriptor_Notification_Destory,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.NotificationPromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Notification/Destory',
      request,
      metadata || {},
      methodDescriptor_Notification_Destory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.Pager,
 *   !proto.palm.nut.v1.IndexNotificationResponse>}
 */
const methodDescriptor_Notification_Index = new grpc.web.MethodDescriptor(
  '/palm.nut.v1.Notification/Index',
  grpc.web.MethodType.UNARY,
  proto.palm.nut.v1.Pager,
  proto.palm.nut.v1.IndexNotificationResponse,
  /**
   * @param {!proto.palm.nut.v1.Pager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.nut.v1.IndexNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.nut.v1.IndexNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.nut.v1.IndexNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.nut.v1.NotificationClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.nut.v1.Notification/Index',
      request,
      metadata || {},
      methodDescriptor_Notification_Index,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.nut.v1.IndexNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.palm.nut.v1.NotificationPromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.nut.v1.Notification/Index',
      request,
      metadata || {},
      methodDescriptor_Notification_Index);
};


module.exports = proto.palm.nut.v1;

