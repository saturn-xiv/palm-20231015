/**
 * @fileoverview gRPC-Web generated client stub for palm.forum.v1
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

var nut_pb = require('./nut_pb.js')
const proto = {};
proto.palm = {};
proto.palm.forum = {};
proto.palm.forum.v1 = require('./forum_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.forum.v1.TopicClient =
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
proto.palm.forum.v1.TopicPromiseClient =
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
 *   !proto.palm.forum.v1.CreateTopicRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Topic_Create = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Topic/Create',
  grpc.web.MethodType.UNARY,
  proto.palm.forum.v1.CreateTopicRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.forum.v1.CreateTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.forum.v1.CreateTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.TopicClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Topic/Create',
      request,
      metadata || {},
      methodDescriptor_Topic_Create,
      callback);
};


/**
 * @param {!proto.palm.forum.v1.CreateTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.TopicPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Topic/Create',
      request,
      metadata || {},
      methodDescriptor_Topic_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.palm.forum.v1.IndexTopicResponse.Item>}
 */
const methodDescriptor_Topic_Show = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Topic/Show',
  grpc.web.MethodType.UNARY,
  nut_pb.IdRequest,
  proto.palm.forum.v1.IndexTopicResponse.Item,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.forum.v1.IndexTopicResponse.Item.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.forum.v1.IndexTopicResponse.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.forum.v1.IndexTopicResponse.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.TopicClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Topic/Show',
      request,
      metadata || {},
      methodDescriptor_Topic_Show,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.forum.v1.IndexTopicResponse.Item>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.TopicPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Topic/Show',
      request,
      metadata || {},
      methodDescriptor_Topic_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.forum.v1.CreateTopicRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Topic_Update = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Topic/Update',
  grpc.web.MethodType.UNARY,
  proto.palm.forum.v1.CreateTopicRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.forum.v1.CreateTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.forum.v1.CreateTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.TopicClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Topic/Update',
      request,
      metadata || {},
      methodDescriptor_Topic_Update,
      callback);
};


/**
 * @param {!proto.palm.forum.v1.CreateTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.TopicPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Topic/Update',
      request,
      metadata || {},
      methodDescriptor_Topic_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Topic_Destory = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Topic/Destory',
  grpc.web.MethodType.UNARY,
  nut_pb.IdRequest,
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
proto.palm.forum.v1.TopicClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Topic/Destory',
      request,
      metadata || {},
      methodDescriptor_Topic_Destory,
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
proto.palm.forum.v1.TopicPromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Topic/Destory',
      request,
      metadata || {},
      methodDescriptor_Topic_Destory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.Pager,
 *   !proto.palm.forum.v1.IndexTopicResponse>}
 */
const methodDescriptor_Topic_Index = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Topic/Index',
  grpc.web.MethodType.UNARY,
  nut_pb.Pager,
  proto.palm.forum.v1.IndexTopicResponse,
  /**
   * @param {!proto.palm.nut.v1.Pager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.forum.v1.IndexTopicResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.forum.v1.IndexTopicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.forum.v1.IndexTopicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.TopicClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Topic/Index',
      request,
      metadata || {},
      methodDescriptor_Topic_Index,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.forum.v1.IndexTopicResponse>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.TopicPromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Topic/Index',
      request,
      metadata || {},
      methodDescriptor_Topic_Index);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.forum.v1.PostClient =
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
proto.palm.forum.v1.PostPromiseClient =
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
 *   !proto.palm.forum.v1.CreatePostRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Post_Create = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Post/Create',
  grpc.web.MethodType.UNARY,
  proto.palm.forum.v1.CreatePostRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.forum.v1.CreatePostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.forum.v1.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.PostClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Post/Create',
      request,
      metadata || {},
      methodDescriptor_Post_Create,
      callback);
};


/**
 * @param {!proto.palm.forum.v1.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.PostPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Post/Create',
      request,
      metadata || {},
      methodDescriptor_Post_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.palm.forum.v1.IndexPostResponse.Item>}
 */
const methodDescriptor_Post_Show = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Post/Show',
  grpc.web.MethodType.UNARY,
  nut_pb.IdRequest,
  proto.palm.forum.v1.IndexPostResponse.Item,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.forum.v1.IndexPostResponse.Item.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.forum.v1.IndexPostResponse.Item)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.forum.v1.IndexPostResponse.Item>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.PostClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Post/Show',
      request,
      metadata || {},
      methodDescriptor_Post_Show,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.forum.v1.IndexPostResponse.Item>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.PostPromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Post/Show',
      request,
      metadata || {},
      methodDescriptor_Post_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.forum.v1.CreatePostRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Post_Update = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Post/Update',
  grpc.web.MethodType.UNARY,
  proto.palm.forum.v1.CreatePostRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.forum.v1.CreatePostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.forum.v1.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.PostClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Post/Update',
      request,
      metadata || {},
      methodDescriptor_Post_Update,
      callback);
};


/**
 * @param {!proto.palm.forum.v1.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.PostPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Post/Update',
      request,
      metadata || {},
      methodDescriptor_Post_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Post_Destory = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Post/Destory',
  grpc.web.MethodType.UNARY,
  nut_pb.IdRequest,
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
proto.palm.forum.v1.PostClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Post/Destory',
      request,
      metadata || {},
      methodDescriptor_Post_Destory,
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
proto.palm.forum.v1.PostPromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Post/Destory',
      request,
      metadata || {},
      methodDescriptor_Post_Destory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.Pager,
 *   !proto.palm.forum.v1.IndexPostResponse>}
 */
const methodDescriptor_Post_Index = new grpc.web.MethodDescriptor(
  '/palm.forum.v1.Post/Index',
  grpc.web.MethodType.UNARY,
  nut_pb.Pager,
  proto.palm.forum.v1.IndexPostResponse,
  /**
   * @param {!proto.palm.nut.v1.Pager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.forum.v1.IndexPostResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.forum.v1.IndexPostResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.forum.v1.IndexPostResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.forum.v1.PostClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.forum.v1.Post/Index',
      request,
      metadata || {},
      methodDescriptor_Post_Index,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.forum.v1.IndexPostResponse>}
 *     Promise that resolves to the response
 */
proto.palm.forum.v1.PostPromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.forum.v1.Post/Index',
      request,
      metadata || {},
      methodDescriptor_Post_Index);
};


module.exports = proto.palm.forum.v1;

