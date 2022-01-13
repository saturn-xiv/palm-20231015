/**
 * @fileoverview gRPC-Web generated client stub for palm.plugins.twilio.v1
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
proto.palm.plugins = {};
proto.palm.plugins.twilio = {};
proto.palm.plugins.twilio.v1 = require('./twilio_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.plugins.twilio.v1.TwilioClient =
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
proto.palm.plugins.twilio.v1.TwilioPromiseClient =
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
 *   !proto.palm.plugins.twilio.v1.TextMessage,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Twilio_Send = new grpc.web.MethodDescriptor(
  '/palm.plugins.twilio.v1.Twilio/Send',
  grpc.web.MethodType.UNARY,
  proto.palm.plugins.twilio.v1.TextMessage,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.plugins.twilio.v1.TextMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.plugins.twilio.v1.TextMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.plugins.twilio.v1.TwilioClient.prototype.send =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.plugins.twilio.v1.Twilio/Send',
      request,
      metadata || {},
      methodDescriptor_Twilio_Send,
      callback);
};


/**
 * @param {!proto.palm.plugins.twilio.v1.TextMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.plugins.twilio.v1.TwilioPromiseClient.prototype.send =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.plugins.twilio.v1.Twilio/Send',
      request,
      metadata || {},
      methodDescriptor_Twilio_Send);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Duration,
 *   !proto.palm.plugins.twilio.v1.LogsResponse>}
 */
const methodDescriptor_Twilio_Logs = new grpc.web.MethodDescriptor(
  '/palm.plugins.twilio.v1.Twilio/Logs',
  grpc.web.MethodType.UNARY,
  google_protobuf_duration_pb.Duration,
  proto.palm.plugins.twilio.v1.LogsResponse,
  /**
   * @param {!proto.google.protobuf.Duration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.plugins.twilio.v1.LogsResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.plugins.twilio.v1.LogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.plugins.twilio.v1.LogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.plugins.twilio.v1.TwilioClient.prototype.logs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.plugins.twilio.v1.Twilio/Logs',
      request,
      metadata || {},
      methodDescriptor_Twilio_Logs,
      callback);
};


/**
 * @param {!proto.google.protobuf.Duration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.plugins.twilio.v1.LogsResponse>}
 *     Promise that resolves to the response
 */
proto.palm.plugins.twilio.v1.TwilioPromiseClient.prototype.logs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.plugins.twilio.v1.Twilio/Logs',
      request,
      metadata || {},
      methodDescriptor_Twilio_Logs);
};


module.exports = proto.palm.plugins.twilio.v1;

