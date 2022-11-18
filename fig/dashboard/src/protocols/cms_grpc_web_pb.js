/**
 * @fileoverview gRPC-Web generated client stub for palm.cms.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.6
// source: cms.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var nut_pb = require('./nut_pb.js')
const proto = {};
proto.palm = {};
proto.palm.cms = {};
proto.palm.cms.v1 = require('./cms_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.cms.v1.ArticleClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.cms.v1.ArticlePromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.cms.v1.ArticleCreateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Article_Create = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Article/Create',
  grpc.web.MethodType.UNARY,
  proto.palm.cms.v1.ArticleCreateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.cms.v1.ArticleCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.cms.v1.ArticleCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.cms.v1.ArticleClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Article/Create',
      request,
      metadata || {},
      methodDescriptor_Article_Create,
      callback);
};


/**
 * @param {!proto.palm.cms.v1.ArticleCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.cms.v1.ArticlePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Article/Create',
      request,
      metadata || {},
      methodDescriptor_Article_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.cms.v1.ArticleUpdateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Article_Update = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Article/Update',
  grpc.web.MethodType.UNARY,
  proto.palm.cms.v1.ArticleUpdateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.cms.v1.ArticleUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.cms.v1.ArticleUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.cms.v1.ArticleClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Article/Update',
      request,
      metadata || {},
      methodDescriptor_Article_Update,
      callback);
};


/**
 * @param {!proto.palm.cms.v1.ArticleUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.cms.v1.ArticlePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Article/Update',
      request,
      metadata || {},
      methodDescriptor_Article_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.Pager,
 *   !proto.palm.cms.v1.ArticleIndexResponse>}
 */
const methodDescriptor_Article_Index = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Article/Index',
  grpc.web.MethodType.UNARY,
  nut_pb.Pager,
  proto.palm.cms.v1.ArticleIndexResponse,
  /**
   * @param {!proto.palm.nut.v1.Pager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.cms.v1.ArticleIndexResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.cms.v1.ArticleIndexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.cms.v1.ArticleIndexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.cms.v1.ArticleClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Article/Index',
      request,
      metadata || {},
      methodDescriptor_Article_Index,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.cms.v1.ArticleIndexResponse>}
 *     Promise that resolves to the response
 */
proto.palm.cms.v1.ArticlePromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Article/Index',
      request,
      metadata || {},
      methodDescriptor_Article_Index);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.palm.cms.v1.ArticleShowResponse>}
 */
const methodDescriptor_Article_Show = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Article/Show',
  grpc.web.MethodType.UNARY,
  nut_pb.IdRequest,
  proto.palm.cms.v1.ArticleShowResponse,
  /**
   * @param {!proto.palm.nut.v1.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.cms.v1.ArticleShowResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.cms.v1.ArticleShowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.cms.v1.ArticleShowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.cms.v1.ArticleClient.prototype.show =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Article/Show',
      request,
      metadata || {},
      methodDescriptor_Article_Show,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.cms.v1.ArticleShowResponse>}
 *     Promise that resolves to the response
 */
proto.palm.cms.v1.ArticlePromiseClient.prototype.show =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Article/Show',
      request,
      metadata || {},
      methodDescriptor_Article_Show);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Article_Destory = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Article/Destory',
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
proto.palm.cms.v1.ArticleClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Article/Destory',
      request,
      metadata || {},
      methodDescriptor_Article_Destory,
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
proto.palm.cms.v1.ArticlePromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Article/Destory',
      request,
      metadata || {},
      methodDescriptor_Article_Destory);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.cms.v1.CommentClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.palm.cms.v1.CommentPromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.cms.v1.CommentCreateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Comment_Create = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Comment/Create',
  grpc.web.MethodType.UNARY,
  proto.palm.cms.v1.CommentCreateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.cms.v1.CommentCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.cms.v1.CommentCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.cms.v1.CommentClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Comment/Create',
      request,
      metadata || {},
      methodDescriptor_Comment_Create,
      callback);
};


/**
 * @param {!proto.palm.cms.v1.CommentCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.cms.v1.CommentPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Comment/Create',
      request,
      metadata || {},
      methodDescriptor_Comment_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.cms.v1.CommentUpdateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Comment_Update = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Comment/Update',
  grpc.web.MethodType.UNARY,
  proto.palm.cms.v1.CommentUpdateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.palm.cms.v1.CommentUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.palm.cms.v1.CommentUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.cms.v1.CommentClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Comment/Update',
      request,
      metadata || {},
      methodDescriptor_Comment_Update,
      callback);
};


/**
 * @param {!proto.palm.cms.v1.CommentUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.palm.cms.v1.CommentPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Comment/Update',
      request,
      metadata || {},
      methodDescriptor_Comment_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.Pager,
 *   !proto.palm.cms.v1.CommentIndexResponse>}
 */
const methodDescriptor_Comment_Index = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Comment/Index',
  grpc.web.MethodType.UNARY,
  nut_pb.Pager,
  proto.palm.cms.v1.CommentIndexResponse,
  /**
   * @param {!proto.palm.nut.v1.Pager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.palm.cms.v1.CommentIndexResponse.deserializeBinary
);


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.palm.cms.v1.CommentIndexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.palm.cms.v1.CommentIndexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.palm.cms.v1.CommentClient.prototype.index =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Comment/Index',
      request,
      metadata || {},
      methodDescriptor_Comment_Index,
      callback);
};


/**
 * @param {!proto.palm.nut.v1.Pager} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.palm.cms.v1.CommentIndexResponse>}
 *     Promise that resolves to the response
 */
proto.palm.cms.v1.CommentPromiseClient.prototype.index =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Comment/Index',
      request,
      metadata || {},
      methodDescriptor_Comment_Index);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.palm.nut.v1.IdRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Comment_Destory = new grpc.web.MethodDescriptor(
  '/palm.cms.v1.Comment/Destory',
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
proto.palm.cms.v1.CommentClient.prototype.destory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/palm.cms.v1.Comment/Destory',
      request,
      metadata || {},
      methodDescriptor_Comment_Destory,
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
proto.palm.cms.v1.CommentPromiseClient.prototype.destory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/palm.cms.v1.Comment/Destory',
      request,
      metadata || {},
      methodDescriptor_Comment_Destory);
};


module.exports = proto.palm.cms.v1;

