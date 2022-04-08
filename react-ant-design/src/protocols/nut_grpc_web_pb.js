/**
 * @fileoverview gRPC-Web generated client stub for palm.plugins.nut.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.palm = {};
proto.palm.plugins = {};
proto.palm.plugins.nut = {};
proto.palm.plugins.nut.v1 = require('./nut_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.plugins.nut.v1.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
proto.palm.plugins.nut.v1.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
proto.palm.plugins.nut.v1.SiteClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
proto.palm.plugins.nut.v1.SitePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 *   !proto.palm.plugins.nut.v1.SiteInstallRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Site_Install = new grpc.web.MethodDescriptor(
  '/palm.plugins.nut.v1.Site/Install',
  grpc.web.MethodType.UNARY,
  proto.palm.plugins.nut.v1.SiteInstallRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.plugins.nut.v1.SiteInstallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.plugins.nut.v1.SiteInstallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.plugins.nut.v1.SiteClient.prototype.install =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.plugins.nut.v1.Site/Install',
      request,
      metadata || {},
      methodDescriptor_Site_Install,
      callback);
};


/**
 * @param {!proto.palm.plugins.nut.v1.SiteInstallRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.plugins.nut.v1.SitePromiseClient.prototype.install =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.plugins.nut.v1.Site/Install',
      request,
      metadata || {},
      methodDescriptor_Site_Install);
};


module.exports = proto.palm.plugins.nut.v1;

