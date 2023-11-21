// source: auth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var nut_pb = require('./nut_pb.js');
goog.object.extend(proto, nut_pb);
var rbac_pb = require('./rbac_pb.js');
goog.object.extend(proto, rbac_pb);
var orchid_pb = require('./orchid_pb.js');
goog.object.extend(proto, orchid_pb);
goog.exportSymbol('proto.palm.auth.v1.AttachmentIndexResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.AttachmentIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.auth.v1.AttachmentShowRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.AttachmentShowResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.GoogleSignInUrlRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.GoogleSignInUrlResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleByCodeRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleByLangAndCodeRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleByLangRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleCreateRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleIndexResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleListResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.LocaleUpdateRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.Oauth2State', null, global);
goog.exportSymbol('proto.palm.auth.v1.SignInByGoogleRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.SignInByWechatOauth2Request', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserChangePasswordRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserDetail', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserGetProfileResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserIndexResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserLogsResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserLogsResponse.Item', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserLogsResponse.Item.Level', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserQueryRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserQueryRequest.UserCase', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserResetPasswordRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserSetPasswordRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserSetProfileRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserSignInRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserSignInRequest.UserCase', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserSignInResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserSignUpRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.UserTokenRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatAllMiniProgramUserResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatAllOauth2UserResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatAllOauth2UserResponse.Item', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatMiniProgramUser', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatOauth2SignInStateResponse', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatOauth2SignInUrlRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatUserBindByAccountRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatUserBindByIdRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatUserQueryByOpenIdRequest', null, global);
goog.exportSymbol('proto.palm.auth.v1.WechatUserQueryByUnionIdRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserDetail.displayName = 'proto.palm.auth.v1.UserDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.Oauth2State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.Oauth2State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.Oauth2State.displayName = 'proto.palm.auth.v1.Oauth2State';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserSignInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.auth.v1.UserSignInRequest.oneofGroups_);
};
goog.inherits(proto.palm.auth.v1.UserSignInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserSignInRequest.displayName = 'proto.palm.auth.v1.UserSignInRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.auth.v1.UserQueryRequest.oneofGroups_);
};
goog.inherits(proto.palm.auth.v1.UserQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserQueryRequest.displayName = 'proto.palm.auth.v1.UserQueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserSignInResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.UserSignInResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.UserSignInResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserSignInResponse.displayName = 'proto.palm.auth.v1.UserSignInResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserSignUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserSignUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserSignUpRequest.displayName = 'proto.palm.auth.v1.UserSignUpRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserTokenRequest.displayName = 'proto.palm.auth.v1.UserTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserResetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserResetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserResetPasswordRequest.displayName = 'proto.palm.auth.v1.UserResetPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserSetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserSetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserSetPasswordRequest.displayName = 'proto.palm.auth.v1.UserSetPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserSetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserSetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserSetProfileRequest.displayName = 'proto.palm.auth.v1.UserSetProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserGetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserGetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserGetProfileResponse.displayName = 'proto.palm.auth.v1.UserGetProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.UserLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.UserLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserLogsResponse.displayName = 'proto.palm.auth.v1.UserLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserLogsResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserLogsResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserLogsResponse.Item.displayName = 'proto.palm.auth.v1.UserLogsResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserChangePasswordRequest.displayName = 'proto.palm.auth.v1.UserChangePasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.UserIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.UserIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserIndexResponse.displayName = 'proto.palm.auth.v1.UserIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.UserIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.UserIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.UserIndexResponse.Item.displayName = 'proto.palm.auth.v1.UserIndexResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.SignInByGoogleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.SignInByGoogleRequest.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.SignInByGoogleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.SignInByGoogleRequest.displayName = 'proto.palm.auth.v1.SignInByGoogleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.GoogleSignInUrlRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.GoogleSignInUrlRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.GoogleSignInUrlRequest.displayName = 'proto.palm.auth.v1.GoogleSignInUrlRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.GoogleSignInUrlResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.GoogleSignInUrlResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.GoogleSignInUrlResponse.displayName = 'proto.palm.auth.v1.GoogleSignInUrlResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatUserBindByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatUserBindByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatUserBindByIdRequest.displayName = 'proto.palm.auth.v1.WechatUserBindByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatUserBindByAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatUserBindByAccountRequest.displayName = 'proto.palm.auth.v1.WechatUserBindByAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatUserQueryByOpenIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.displayName = 'proto.palm.auth.v1.WechatUserQueryByOpenIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatUserQueryByUnionIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.displayName = 'proto.palm.auth.v1.WechatUserQueryByUnionIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.WechatAllMiniProgramUserResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.WechatAllMiniProgramUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatAllMiniProgramUserResponse.displayName = 'proto.palm.auth.v1.WechatAllMiniProgramUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.displayName = 'proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.WechatAllOauth2UserResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.WechatAllOauth2UserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatAllOauth2UserResponse.displayName = 'proto.palm.auth.v1.WechatAllOauth2UserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.WechatAllOauth2UserResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.displayName = 'proto.palm.auth.v1.WechatAllOauth2UserResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.SignInByWechatOauth2Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.SignInByWechatOauth2Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.SignInByWechatOauth2Request.displayName = 'proto.palm.auth.v1.SignInByWechatOauth2Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatOauth2SignInStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatOauth2SignInStateResponse.displayName = 'proto.palm.auth.v1.WechatOauth2SignInStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatOauth2SignInUrlRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatOauth2SignInUrlRequest.displayName = 'proto.palm.auth.v1.WechatOauth2SignInUrlRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.WechatMiniProgramUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.WechatMiniProgramUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.WechatMiniProgramUser.displayName = 'proto.palm.auth.v1.WechatMiniProgramUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.AttachmentShowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.AttachmentShowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.AttachmentShowRequest.displayName = 'proto.palm.auth.v1.AttachmentShowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.AttachmentShowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.AttachmentShowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.AttachmentShowResponse.displayName = 'proto.palm.auth.v1.AttachmentShowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.AttachmentIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.AttachmentIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.AttachmentIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.AttachmentIndexResponse.displayName = 'proto.palm.auth.v1.AttachmentIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.AttachmentIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.AttachmentIndexResponse.Item.displayName = 'proto.palm.auth.v1.AttachmentIndexResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleByLangRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.LocaleByLangRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleByLangRequest.displayName = 'proto.palm.auth.v1.LocaleByLangRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.LocaleListResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.LocaleListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleListResponse.displayName = 'proto.palm.auth.v1.LocaleListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.auth.v1.LocaleIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.auth.v1.LocaleIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleIndexResponse.displayName = 'proto.palm.auth.v1.LocaleIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.LocaleIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleIndexResponse.Item.displayName = 'proto.palm.auth.v1.LocaleIndexResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleByCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.LocaleByCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleByCodeRequest.displayName = 'proto.palm.auth.v1.LocaleByCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.LocaleByLangAndCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleByLangAndCodeRequest.displayName = 'proto.palm.auth.v1.LocaleByLangAndCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.LocaleCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleCreateRequest.displayName = 'proto.palm.auth.v1.LocaleCreateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.auth.v1.LocaleUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.auth.v1.LocaleUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.auth.v1.LocaleUpdateRequest.displayName = 'proto.palm.auth.v1.LocaleUpdateRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    nickname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserDetail}
 */
proto.palm.auth.v1.UserDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserDetail;
  return proto.palm.auth.v1.UserDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserDetail}
 */
proto.palm.auth.v1.UserDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string nickname = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserDetail.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserDetail} returns this
 */
proto.palm.auth.v1.UserDetail.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string real_name = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserDetail.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserDetail} returns this
 */
proto.palm.auth.v1.UserDetail.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.Oauth2State.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.Oauth2State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.Oauth2State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.Oauth2State.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_goto: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.Oauth2State}
 */
proto.palm.auth.v1.Oauth2State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.Oauth2State;
  return proto.palm.auth.v1.Oauth2State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.Oauth2State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.Oauth2State}
 */
proto.palm.auth.v1.Oauth2State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoto(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.Oauth2State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.Oauth2State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.Oauth2State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.Oauth2State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoto();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string goto = 1;
 * @return {string}
 */
proto.palm.auth.v1.Oauth2State.prototype.getGoto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.Oauth2State} returns this
 */
proto.palm.auth.v1.Oauth2State.prototype.setGoto = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.palm.auth.v1.Oauth2State.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.Oauth2State} returns this
 */
proto.palm.auth.v1.Oauth2State.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user = 3;
 * @return {string}
 */
proto.palm.auth.v1.Oauth2State.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.Oauth2State} returns this
 */
proto.palm.auth.v1.Oauth2State.prototype.setUser = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.Oauth2State} returns this
 */
proto.palm.auth.v1.Oauth2State.prototype.clearUser = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.Oauth2State.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string id = 9;
 * @return {string}
 */
proto.palm.auth.v1.Oauth2State.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.Oauth2State} returns this
 */
proto.palm.auth.v1.Oauth2State.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.auth.v1.UserSignInRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.palm.auth.v1.UserSignInRequest.UserCase = {
  USER_NOT_SET: 0,
  NICKNAME: 1,
  EMAIL: 2
};

/**
 * @return {proto.palm.auth.v1.UserSignInRequest.UserCase}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.getUserCase = function() {
  return /** @type {proto.palm.auth.v1.UserSignInRequest.UserCase} */(jspb.Message.computeOneofCase(this, proto.palm.auth.v1.UserSignInRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserSignInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserSignInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSignInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nickname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 9, ""),
    ttl: (f = msg.getTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserSignInRequest}
 */
proto.palm.auth.v1.UserSignInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserSignInRequest;
  return proto.palm.auth.v1.UserSignInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserSignInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserSignInRequest}
 */
proto.palm.auth.v1.UserSignInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 11:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserSignInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserSignInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSignInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string nickname = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignInRequest} returns this
 */
proto.palm.auth.v1.UserSignInRequest.prototype.setNickname = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.palm.auth.v1.UserSignInRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.UserSignInRequest} returns this
 */
proto.palm.auth.v1.UserSignInRequest.prototype.clearNickname = function() {
  return jspb.Message.setOneofField(this, 1, proto.palm.auth.v1.UserSignInRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignInRequest} returns this
 */
proto.palm.auth.v1.UserSignInRequest.prototype.setEmail = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.auth.v1.UserSignInRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.UserSignInRequest} returns this
 */
proto.palm.auth.v1.UserSignInRequest.prototype.clearEmail = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.auth.v1.UserSignInRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string password = 9;
 * @return {string}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignInRequest} returns this
 */
proto.palm.auth.v1.UserSignInRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Duration ttl = 11;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 11));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.auth.v1.UserSignInRequest} returns this
*/
proto.palm.auth.v1.UserSignInRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserSignInRequest} returns this
 */
proto.palm.auth.v1.UserSignInRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserSignInRequest.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.auth.v1.UserQueryRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.palm.auth.v1.UserQueryRequest.UserCase = {
  USER_NOT_SET: 0,
  NICKNAME: 1,
  EMAIL: 2
};

/**
 * @return {proto.palm.auth.v1.UserQueryRequest.UserCase}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.getUserCase = function() {
  return /** @type {proto.palm.auth.v1.UserQueryRequest.UserCase} */(jspb.Message.computeOneofCase(this, proto.palm.auth.v1.UserQueryRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nickname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    home: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserQueryRequest}
 */
proto.palm.auth.v1.UserQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserQueryRequest;
  return proto.palm.auth.v1.UserQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserQueryRequest}
 */
proto.palm.auth.v1.UserQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setHome(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserQueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHome();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string nickname = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserQueryRequest} returns this
 */
proto.palm.auth.v1.UserQueryRequest.prototype.setNickname = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.palm.auth.v1.UserQueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.UserQueryRequest} returns this
 */
proto.palm.auth.v1.UserQueryRequest.prototype.clearNickname = function() {
  return jspb.Message.setOneofField(this, 1, proto.palm.auth.v1.UserQueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserQueryRequest} returns this
 */
proto.palm.auth.v1.UserQueryRequest.prototype.setEmail = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.auth.v1.UserQueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.UserQueryRequest} returns this
 */
proto.palm.auth.v1.UserQueryRequest.prototype.clearEmail = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.auth.v1.UserQueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string home = 9;
 * @return {string}
 */
proto.palm.auth.v1.UserQueryRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserQueryRequest} returns this
 */
proto.palm.auth.v1.UserQueryRequest.prototype.setHome = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.UserSignInResponse.repeatedFields_ = [11,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserSignInResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserSignInResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSignInResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: (f = msg.getUser()) && proto.palm.auth.v1.UserIndexResponse.Item.toObject(includeInstance, f),
    providerType: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rolesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    rbac_pb.Permission.toObject, includeInstance),
    hasGoogle: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    hasWechatMiniProgram: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    hasWechatOauth2: jspb.Message.getBooleanFieldWithDefault(msg, 23, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserSignInResponse}
 */
proto.palm.auth.v1.UserSignInResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserSignInResponse;
  return proto.palm.auth.v1.UserSignInResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserSignInResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserSignInResponse}
 */
proto.palm.auth.v1.UserSignInResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = new proto.palm.auth.v1.UserIndexResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.UserIndexResponse.Item.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 12:
      var value = new rbac_pb.Permission;
      reader.readMessage(value,rbac_pb.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasGoogle(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasWechatMiniProgram(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasWechatOauth2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserSignInResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserSignInResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSignInResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.auth.v1.UserIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getProviderType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      rbac_pb.Permission.serializeBinaryToWriter
    );
  }
  f = message.getHasGoogle();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getHasWechatMiniProgram();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getHasWechatOauth2();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UserIndexResponse.Item user = 2;
 * @return {?proto.palm.auth.v1.UserIndexResponse.Item}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getUser = function() {
  return /** @type{?proto.palm.auth.v1.UserIndexResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.auth.v1.UserIndexResponse.Item, 2));
};


/**
 * @param {?proto.palm.auth.v1.UserIndexResponse.Item|undefined} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
*/
proto.palm.auth.v1.UserSignInResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string provider_type = 9;
 * @return {string}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getProviderType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.setProviderType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string roles = 11;
 * @return {!Array<string>}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated palm.rbac.v1.Permission permissions = 12;
 * @return {!Array<!proto.palm.rbac.v1.Permission>}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.palm.rbac.v1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, rbac_pb.Permission, 12));
};


/**
 * @param {!Array<!proto.palm.rbac.v1.Permission>} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
*/
proto.palm.auth.v1.UserSignInResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.palm.rbac.v1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.rbac.v1.Permission}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.palm.rbac.v1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional bool has_google = 21;
 * @return {boolean}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getHasGoogle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.setHasGoogle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool has_wechat_mini_program = 22;
 * @return {boolean}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getHasWechatMiniProgram = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.setHasWechatMiniProgram = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool has_wechat_oauth2 = 23;
 * @return {boolean}
 */
proto.palm.auth.v1.UserSignInResponse.prototype.getHasWechatOauth2 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.auth.v1.UserSignInResponse} returns this
 */
proto.palm.auth.v1.UserSignInResponse.prototype.setHasWechatOauth2 = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserSignUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserSignUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSignUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lang: jspb.Message.getFieldWithDefault(msg, 11, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 12, ""),
    home: jspb.Message.getFieldWithDefault(msg, 21, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserSignUpRequest}
 */
proto.palm.auth.v1.UserSignUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserSignUpRequest;
  return proto.palm.auth.v1.UserSignUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserSignUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserSignUpRequest}
 */
proto.palm.auth.v1.UserSignUpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setHome(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserSignUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserSignUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSignUpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getHome();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
};


/**
 * optional string real_name = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignUpRequest} returns this
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignUpRequest} returns this
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignUpRequest} returns this
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignUpRequest} returns this
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string lang = 11;
 * @return {string}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignUpRequest} returns this
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string timezone = 12;
 * @return {string}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignUpRequest} returns this
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string home = 21;
 * @return {string}
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSignUpRequest} returns this
 */
proto.palm.auth.v1.UserSignUpRequest.prototype.setHome = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserTokenRequest}
 */
proto.palm.auth.v1.UserTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserTokenRequest;
  return proto.palm.auth.v1.UserTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserTokenRequest}
 */
proto.palm.auth.v1.UserTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payload = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserTokenRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserTokenRequest} returns this
 */
proto.palm.auth.v1.UserTokenRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserResetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserResetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserResetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserResetPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserResetPasswordRequest}
 */
proto.palm.auth.v1.UserResetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserResetPasswordRequest;
  return proto.palm.auth.v1.UserResetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserResetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserResetPasswordRequest}
 */
proto.palm.auth.v1.UserResetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserResetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserResetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserResetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserResetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserResetPasswordRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserResetPasswordRequest} returns this
 */
proto.palm.auth.v1.UserResetPasswordRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserResetPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserResetPasswordRequest} returns this
 */
proto.palm.auth.v1.UserResetPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserSetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserSetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserSetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSetPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, 0),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserSetPasswordRequest}
 */
proto.palm.auth.v1.UserSetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserSetPasswordRequest;
  return proto.palm.auth.v1.UserSetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserSetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserSetPasswordRequest}
 */
proto.palm.auth.v1.UserSetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserSetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserSetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserSetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 user = 1;
 * @return {number}
 */
proto.palm.auth.v1.UserSetPasswordRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.UserSetPasswordRequest} returns this
 */
proto.palm.auth.v1.UserSetPasswordRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserSetPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSetPasswordRequest} returns this
 */
proto.palm.auth.v1.UserSetPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserSetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserSetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lang: jspb.Message.getFieldWithDefault(msg, 9, ""),
    wechat: jspb.Message.getFieldWithDefault(msg, 11, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserSetProfileRequest}
 */
proto.palm.auth.v1.UserSetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserSetProfileRequest;
  return proto.palm.auth.v1.UserSetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserSetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserSetProfileRequest}
 */
proto.palm.auth.v1.UserSetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setWechat(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserSetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserSetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserSetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getWechat();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string real_name = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSetProfileRequest} returns this
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSetProfileRequest} returns this
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string timezone = 8;
 * @return {string}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSetProfileRequest} returns this
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string lang = 9;
 * @return {string}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSetProfileRequest} returns this
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string wechat = 11;
 * @return {string}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.getWechat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSetProfileRequest} returns this
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.setWechat = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone = 12;
 * @return {string}
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserSetProfileRequest} returns this
 */
proto.palm.auth.v1.UserSetProfileRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserGetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserGetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserGetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lang: jspb.Message.getFieldWithDefault(msg, 9, ""),
    wechat: jspb.Message.getFieldWithDefault(msg, 11, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserGetProfileResponse}
 */
proto.palm.auth.v1.UserGetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserGetProfileResponse;
  return proto.palm.auth.v1.UserGetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserGetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserGetProfileResponse}
 */
proto.palm.auth.v1.UserGetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setWechat(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserGetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserGetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserGetProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getWechat();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string real_name = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickname = 3;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string timezone = 8;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string lang = 9;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string wechat = 11;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getWechat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setWechat = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone = 12;
 * @return {string}
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserGetProfileResponse} returns this
 */
proto.palm.auth.v1.UserGetProfileResponse.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.UserLogsResponse.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && nut_pb.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.auth.v1.UserLogsResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserLogsResponse}
 */
proto.palm.auth.v1.UserLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserLogsResponse;
  return proto.palm.auth.v1.UserLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserLogsResponse}
 */
proto.palm.auth.v1.UserLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new nut_pb.Pagination;
      reader.readMessage(value,nut_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 11:
      var value = new proto.palm.auth.v1.UserLogsResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.UserLogsResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      nut_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.palm.auth.v1.UserLogsResponse.Item.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserLogsResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserLogsResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserLogsResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resource: (f = msg.getResource()) && rbac_pb.Resource.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item}
 */
proto.palm.auth.v1.UserLogsResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserLogsResponse.Item;
  return proto.palm.auth.v1.UserLogsResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserLogsResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item}
 */
proto.palm.auth.v1.UserLogsResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {!proto.palm.auth.v1.UserLogsResponse.Item.Level} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = new rbac_pb.Resource;
      reader.readMessage(value,rbac_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserLogsResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserLogsResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserLogsResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      rbac_pb.Resource.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.palm.auth.v1.UserLogsResponse.Item.Level = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3,
  PANIC: 4
};

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Level level = 4;
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item.Level}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.getLevel = function() {
  return /** @type {!proto.palm.auth.v1.UserLogsResponse.Item.Level} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.palm.auth.v1.UserLogsResponse.Item.Level} value
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional palm.rbac.v1.Resource resource = 6;
 * @return {?proto.palm.rbac.v1.Resource}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.getResource = function() {
  return /** @type{?proto.palm.rbac.v1.Resource} */ (
    jspb.Message.getWrapperField(this, rbac_pb.Resource, 6));
};


/**
 * @param {?proto.palm.rbac.v1.Resource|undefined} value
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
*/
proto.palm.auth.v1.UserLogsResponse.Item.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.hasResource = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
*/
proto.palm.auth.v1.UserLogsResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item} returns this
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserLogsResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional palm.nut.v1.Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.auth.v1.UserLogsResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, nut_pb.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.auth.v1.UserLogsResponse} returns this
*/
proto.palm.auth.v1.UserLogsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserLogsResponse} returns this
 */
proto.palm.auth.v1.UserLogsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserLogsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.auth.v1.UserLogsResponse.Item>}
 */
proto.palm.auth.v1.UserLogsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.auth.v1.UserLogsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.auth.v1.UserLogsResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.auth.v1.UserLogsResponse.Item>} value
 * @return {!proto.palm.auth.v1.UserLogsResponse} returns this
*/
proto.palm.auth.v1.UserLogsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.auth.v1.UserLogsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.UserLogsResponse.Item}
 */
proto.palm.auth.v1.UserLogsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.auth.v1.UserLogsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.UserLogsResponse} returns this
 */
proto.palm.auth.v1.UserLogsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserChangePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserChangePasswordRequest}
 */
proto.palm.auth.v1.UserChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserChangePasswordRequest;
  return proto.palm.auth.v1.UserChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserChangePasswordRequest}
 */
proto.palm.auth.v1.UserChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string current_password = 1;
 * @return {string}
 */
proto.palm.auth.v1.UserChangePasswordRequest.prototype.getCurrentPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserChangePasswordRequest} returns this
 */
proto.palm.auth.v1.UserChangePasswordRequest.prototype.setCurrentPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserChangePasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserChangePasswordRequest} returns this
 */
proto.palm.auth.v1.UserChangePasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.UserIndexResponse.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && nut_pb.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.auth.v1.UserIndexResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserIndexResponse}
 */
proto.palm.auth.v1.UserIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserIndexResponse;
  return proto.palm.auth.v1.UserIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserIndexResponse}
 */
proto.palm.auth.v1.UserIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new nut_pb.Pagination;
      reader.readMessage(value,nut_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 11:
      var value = new proto.palm.auth.v1.UserIndexResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.UserIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      nut_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.palm.auth.v1.UserIndexResponse.Item.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.UserIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.UserIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastSignInAt: (f = msg.getLastSignInAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastSignInIp: jspb.Message.getFieldWithDefault(msg, 12, ""),
    currentSignInAt: (f = msg.getCurrentSignInAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    currentSignInIp: jspb.Message.getFieldWithDefault(msg, 14, ""),
    signInCount: jspb.Message.getFieldWithDefault(msg, 19, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 21, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 22, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 23, ""),
    confirmedAt: (f = msg.getConfirmedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lockedAt: (f = msg.getLockedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deletedAt: (f = msg.getDeletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item}
 */
proto.palm.auth.v1.UserIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.UserIndexResponse.Item;
  return proto.palm.auth.v1.UserIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.UserIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item}
 */
proto.palm.auth.v1.UserIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastSignInAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastSignInIp(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCurrentSignInAt(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentSignInIp(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSignInCount(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 27:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConfirmedAt(value);
      break;
    case 28:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLockedAt(value);
      break;
    case 29:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.UserIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.UserIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.UserIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastSignInAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCurrentSignInAt();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSignInCount();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getConfirmedAt();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLockedAt();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeletedAt();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickname = 3;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string real_name = 4;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
*/
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp last_sign_in_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getLastSignInAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
*/
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setLastSignInAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearLastSignInAt = function() {
  return this.setLastSignInAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasLastSignInAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string last_sign_in_ip = 12;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getLastSignInIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setLastSignInIp = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearLastSignInIp = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasLastSignInIp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp current_sign_in_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getCurrentSignInAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
*/
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setCurrentSignInAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearCurrentSignInAt = function() {
  return this.setCurrentSignInAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasCurrentSignInAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string current_sign_in_ip = 14;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getCurrentSignInIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setCurrentSignInIp = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearCurrentSignInIp = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasCurrentSignInIp = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 sign_in_count = 19;
 * @return {number}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getSignInCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setSignInCount = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string lang = 21;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string timezone = 22;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string avatar = 23;
 * @return {string}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional google.protobuf.Timestamp confirmed_at = 27;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getConfirmedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 27));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
*/
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setConfirmedAt = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearConfirmedAt = function() {
  return this.setConfirmedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasConfirmedAt = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional google.protobuf.Timestamp locked_at = 28;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getLockedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 28));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
*/
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setLockedAt = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearLockedAt = function() {
  return this.setLockedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasLockedAt = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional google.protobuf.Timestamp deleted_at = 29;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.getDeletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 29));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
*/
proto.palm.auth.v1.UserIndexResponse.Item.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item} returns this
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.Item.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional palm.nut.v1.Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.auth.v1.UserIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, nut_pb.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.auth.v1.UserIndexResponse} returns this
*/
proto.palm.auth.v1.UserIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.UserIndexResponse} returns this
 */
proto.palm.auth.v1.UserIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.UserIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.auth.v1.UserIndexResponse.Item>}
 */
proto.palm.auth.v1.UserIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.auth.v1.UserIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.auth.v1.UserIndexResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.auth.v1.UserIndexResponse.Item>} value
 * @return {!proto.palm.auth.v1.UserIndexResponse} returns this
*/
proto.palm.auth.v1.UserIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.auth.v1.UserIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.UserIndexResponse.Item}
 */
proto.palm.auth.v1.UserIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.auth.v1.UserIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.UserIndexResponse} returns this
 */
proto.palm.auth.v1.UserIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.SignInByGoogleRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.SignInByGoogleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.SignInByGoogleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.SignInByGoogleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, ""),
    redirectUri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 9, ""),
    ttl: (f = msg.getTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest}
 */
proto.palm.auth.v1.SignInByGoogleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.SignInByGoogleRequest;
  return proto.palm.auth.v1.SignInByGoogleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.SignInByGoogleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest}
 */
proto.palm.auth.v1.SignInByGoogleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRedirectUri(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 11:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.SignInByGoogleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.SignInByGoogleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.SignInByGoogleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRedirectUri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string scopes = 1;
 * @return {!Array<string>}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string redirect_uri = 4;
 * @return {string}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.getRedirectUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.setRedirectUri = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string nonce = 9;
 * @return {string}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Duration ttl = 11;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 11));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
*/
proto.palm.auth.v1.SignInByGoogleRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.SignInByGoogleRequest} returns this
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.SignInByGoogleRequest.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.GoogleSignInUrlRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.GoogleSignInUrlRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    redirectUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: (f = msg.getState()) && proto.palm.auth.v1.Oauth2State.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.GoogleSignInUrlRequest}
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.GoogleSignInUrlRequest;
  return proto.palm.auth.v1.GoogleSignInUrlRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.GoogleSignInUrlRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.GoogleSignInUrlRequest}
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRedirectUri(value);
      break;
    case 2:
      var value = new proto.palm.auth.v1.Oauth2State;
      reader.readMessage(value,proto.palm.auth.v1.Oauth2State.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.GoogleSignInUrlRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.GoogleSignInUrlRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRedirectUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.auth.v1.Oauth2State.serializeBinaryToWriter
    );
  }
};


/**
 * optional string redirect_uri = 1;
 * @return {string}
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.getRedirectUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.GoogleSignInUrlRequest} returns this
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.setRedirectUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Oauth2State state = 2;
 * @return {?proto.palm.auth.v1.Oauth2State}
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.getState = function() {
  return /** @type{?proto.palm.auth.v1.Oauth2State} */ (
    jspb.Message.getWrapperField(this, proto.palm.auth.v1.Oauth2State, 2));
};


/**
 * @param {?proto.palm.auth.v1.Oauth2State|undefined} value
 * @return {!proto.palm.auth.v1.GoogleSignInUrlRequest} returns this
*/
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.GoogleSignInUrlRequest} returns this
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.GoogleSignInUrlRequest.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.GoogleSignInUrlResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.GoogleSignInUrlResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.GoogleSignInUrlResponse}
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.GoogleSignInUrlResponse;
  return proto.palm.auth.v1.GoogleSignInUrlResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.GoogleSignInUrlResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.GoogleSignInUrlResponse}
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.GoogleSignInUrlResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.GoogleSignInUrlResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.GoogleSignInUrlResponse} returns this
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nonce = 2;
 * @return {string}
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.GoogleSignInUrlResponse} returns this
 */
proto.palm.auth.v1.GoogleSignInUrlResponse.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatUserBindByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatUserBindByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    wechatUserId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatUserBindByIdRequest}
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatUserBindByIdRequest;
  return proto.palm.auth.v1.WechatUserBindByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatUserBindByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatUserBindByIdRequest}
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWechatUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatUserBindByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatUserBindByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWechatUserId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.WechatUserBindByIdRequest} returns this
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 wechat_user_id = 2;
 * @return {number}
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.prototype.getWechatUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.WechatUserBindByIdRequest} returns this
 */
proto.palm.auth.v1.WechatUserBindByIdRequest.prototype.setWechatUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatUserBindByAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatUserBindByAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nickname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatUserBindByAccountRequest}
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatUserBindByAccountRequest;
  return proto.palm.auth.v1.WechatUserBindByAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatUserBindByAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatUserBindByAccountRequest}
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatUserBindByAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatUserBindByAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string nickname = 1;
 * @return {string}
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatUserBindByAccountRequest} returns this
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatUserBindByAccountRequest} returns this
 */
proto.palm.auth.v1.WechatUserBindByAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatUserQueryByOpenIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatUserQueryByOpenIdRequest}
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatUserQueryByOpenIdRequest;
  return proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatUserQueryByOpenIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatUserQueryByOpenIdRequest}
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatUserQueryByOpenIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatUserQueryByOpenIdRequest} returns this
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string open_id = 2;
 * @return {string}
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.prototype.getOpenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatUserQueryByOpenIdRequest} returns this
 */
proto.palm.auth.v1.WechatUserQueryByOpenIdRequest.prototype.setOpenId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatUserQueryByUnionIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    unionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatUserQueryByUnionIdRequest}
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatUserQueryByUnionIdRequest;
  return proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatUserQueryByUnionIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatUserQueryByUnionIdRequest}
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatUserQueryByUnionIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string union_id = 1;
 * @return {string}
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.prototype.getUnionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatUserQueryByUnionIdRequest} returns this
 */
proto.palm.auth.v1.WechatUserQueryByUnionIdRequest.prototype.setUnionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatAllMiniProgramUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatAllMiniProgramUserResponse;
  return proto.palm.auth.v1.WechatAllMiniProgramUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatAllMiniProgramUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    openId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 11, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item;
  return proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUnionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOpenId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string union_id = 3;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.getUnionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.setUnionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string app_id = 4;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string open_id = 5;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.getOpenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.setOpenId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string nickname = 11;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.setNickname = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.clearNickname = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string avatar_url = 12;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.clearAvatarUrl = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item.prototype.hasAvatarUrl = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item>}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item>} value
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse} returns this
*/
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item}
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.auth.v1.WechatAllMiniProgramUserResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.WechatAllMiniProgramUserResponse} returns this
 */
proto.palm.auth.v1.WechatAllMiniProgramUserResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatAllOauth2UserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatAllOauth2UserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatAllOauth2UserResponse;
  return proto.palm.auth.v1.WechatAllOauth2UserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatAllOauth2UserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.auth.v1.WechatAllOauth2UserResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatAllOauth2UserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatAllOauth2UserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.repeatedFields_ = [17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    openId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 11, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 12, 0),
    city: jspb.Message.getFieldWithDefault(msg, 13, ""),
    province: jspb.Message.getFieldWithDefault(msg, 14, ""),
    country: jspb.Message.getFieldWithDefault(msg, 15, ""),
    headImgUrl: jspb.Message.getFieldWithDefault(msg, 16, ""),
    privilegeList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    lang: jspb.Message.getFieldWithDefault(msg, 18, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatAllOauth2UserResponse.Item;
  return proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSex(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvince(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadImgUrl(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrivilege(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUnionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOpenId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSex();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getProvince();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPrivilegeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string union_id = 3;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getUnionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setUnionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string app_id = 4;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string open_id = 5;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getOpenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setOpenId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string nickname = 11;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 sex = 12;
 * @return {number}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getSex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setSex = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string city = 13;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string province = 14;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getProvince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setProvince = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string country = 15;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string head_img_url = 16;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getHeadImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setHeadImgUrl = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.clearHeadImgUrl = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.hasHeadImgUrl = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated string privilege = 17;
 * @return {!Array<string>}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getPrivilegeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setPrivilegeList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.addPrivilege = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.clearPrivilegeList = function() {
  return this.setPrivilegeList([]);
};


/**
 * optional string lang = 18;
 * @return {string}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item>}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.auth.v1.WechatAllOauth2UserResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item>} value
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse} returns this
*/
proto.palm.auth.v1.WechatAllOauth2UserResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse.Item}
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.auth.v1.WechatAllOauth2UserResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.WechatAllOauth2UserResponse} returns this
 */
proto.palm.auth.v1.WechatAllOauth2UserResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.SignInByWechatOauth2Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.SignInByWechatOauth2Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    language: jspb.Message.getFieldWithDefault(msg, 8, 0),
    ttl: (f = msg.getTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.SignInByWechatOauth2Request;
  return proto.palm.auth.v1.SignInByWechatOauth2Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.SignInByWechatOauth2Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 8:
      var value = /** @type {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language} */ (reader.readEnum());
      msg.setLanguage(value);
      break;
    case 11:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.SignInByWechatOauth2Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.SignInByWechatOauth2Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguage();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string state = 1;
 * @return {string}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request} returns this
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request} returns this
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string app_id = 3;
 * @return {string}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request} returns this
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 8;
 * @return {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.getLanguage = function() {
  return /** @type {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language} value
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request} returns this
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional google.protobuf.Duration ttl = 11;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 11));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request} returns this
*/
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.SignInByWechatOauth2Request} returns this
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.SignInByWechatOauth2Request.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatOauth2SignInStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatOauth2SignInStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatOauth2SignInStateResponse}
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatOauth2SignInStateResponse;
  return proto.palm.auth.v1.WechatOauth2SignInStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatOauth2SignInStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatOauth2SignInStateResponse}
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatOauth2SignInStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatOauth2SignInStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string state = 1;
 * @return {string}
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatOauth2SignInStateResponse} returns this
 */
proto.palm.auth.v1.WechatOauth2SignInStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatOauth2SignInUrlRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    redirectUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    language: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest}
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatOauth2SignInUrlRequest;
  return proto.palm.auth.v1.WechatOauth2SignInUrlRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest}
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRedirectUri(value);
      break;
    case 3:
      var value = /** @type {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language} */ (reader.readEnum());
      msg.setLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatOauth2SignInUrlRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRedirectUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguage();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest} returns this
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string redirect_uri = 2;
 * @return {string}
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.getRedirectUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest} returns this
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.setRedirectUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 3;
 * @return {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language}
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.getLanguage = function() {
  return /** @type {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.palm.orchid.v1.WechatOauth2QrConnectRequest.Language} value
 * @return {!proto.palm.auth.v1.WechatOauth2SignInUrlRequest} returns this
 */
proto.palm.auth.v1.WechatOauth2SignInUrlRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.WechatMiniProgramUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.WechatMiniProgramUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatMiniProgramUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    openId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    unionId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 21, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 22, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser}
 */
proto.palm.auth.v1.WechatMiniProgramUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.WechatMiniProgramUser;
  return proto.palm.auth.v1.WechatMiniProgramUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.WechatMiniProgramUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser}
 */
proto.palm.auth.v1.WechatMiniProgramUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnionId(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.WechatMiniProgramUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.WechatMiniProgramUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.WechatMiniProgramUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOpenId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getUnionId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeString(
      21,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional string app_id = 11;
 * @return {string}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser} returns this
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string open_id = 12;
 * @return {string}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.getOpenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser} returns this
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.setOpenId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string union_id = 13;
 * @return {string}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.getUnionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser} returns this
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.setUnionId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string nickname = 21;
 * @return {string}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser} returns this
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.setNickname = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser} returns this
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.clearNickname = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string avatar_url = 22;
 * @return {string}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser} returns this
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.auth.v1.WechatMiniProgramUser} returns this
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.clearAvatarUrl = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.WechatMiniProgramUser.prototype.hasAvatarUrl = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.AttachmentShowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.AttachmentShowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.AttachmentShowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentShowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ttl: (f = msg.getTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.AttachmentShowRequest}
 */
proto.palm.auth.v1.AttachmentShowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.AttachmentShowRequest;
  return proto.palm.auth.v1.AttachmentShowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.AttachmentShowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.AttachmentShowRequest}
 */
proto.palm.auth.v1.AttachmentShowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.AttachmentShowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.AttachmentShowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.AttachmentShowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentShowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.AttachmentShowRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.AttachmentShowRequest} returns this
 */
proto.palm.auth.v1.AttachmentShowRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration ttl = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.auth.v1.AttachmentShowRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.auth.v1.AttachmentShowRequest} returns this
*/
proto.palm.auth.v1.AttachmentShowRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.AttachmentShowRequest} returns this
 */
proto.palm.auth.v1.AttachmentShowRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.AttachmentShowRequest.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.AttachmentShowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.AttachmentShowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.AttachmentShowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentShowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.palm.auth.v1.AttachmentIndexResponse.Item.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.AttachmentShowResponse}
 */
proto.palm.auth.v1.AttachmentShowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.AttachmentShowResponse;
  return proto.palm.auth.v1.AttachmentShowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.AttachmentShowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.AttachmentShowResponse}
 */
proto.palm.auth.v1.AttachmentShowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.auth.v1.AttachmentIndexResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.AttachmentShowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.AttachmentShowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.AttachmentShowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentShowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.auth.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AttachmentIndexResponse.Item item = 1;
 * @return {?proto.palm.auth.v1.AttachmentIndexResponse.Item}
 */
proto.palm.auth.v1.AttachmentShowResponse.prototype.getItem = function() {
  return /** @type{?proto.palm.auth.v1.AttachmentIndexResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.auth.v1.AttachmentIndexResponse.Item, 1));
};


/**
 * @param {?proto.palm.auth.v1.AttachmentIndexResponse.Item|undefined} value
 * @return {!proto.palm.auth.v1.AttachmentShowResponse} returns this
*/
proto.palm.auth.v1.AttachmentShowResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.AttachmentShowResponse} returns this
 */
proto.palm.auth.v1.AttachmentShowResponse.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.AttachmentShowResponse.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.palm.auth.v1.AttachmentShowResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.AttachmentShowResponse} returns this
 */
proto.palm.auth.v1.AttachmentShowResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.AttachmentIndexResponse.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.AttachmentIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.AttachmentIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && nut_pb.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.auth.v1.AttachmentIndexResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse}
 */
proto.palm.auth.v1.AttachmentIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.AttachmentIndexResponse;
  return proto.palm.auth.v1.AttachmentIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.AttachmentIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse}
 */
proto.palm.auth.v1.AttachmentIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new nut_pb.Pagination;
      reader.readMessage(value,nut_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 11:
      var value = new proto.palm.auth.v1.AttachmentIndexResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.AttachmentIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.AttachmentIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      nut_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.palm.auth.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.AttachmentIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.AttachmentIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bucket: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    contentType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.AttachmentIndexResponse.Item;
  return proto.palm.auth.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.AttachmentIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 7:
      var value = /** @type {!proto.palm.nut.v1.MediaContent.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.AttachmentIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string bucket = 2;
 * @return {string}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string content_type = 6;
 * @return {string}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional palm.nut.v1.MediaContent.Status status = 7;
 * @return {!proto.palm.nut.v1.MediaContent.Status}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getStatus = function() {
  return /** @type {!proto.palm.nut.v1.MediaContent.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.palm.nut.v1.MediaContent.Status} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
*/
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.AttachmentIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional palm.nut.v1.Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, nut_pb.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse} returns this
*/
proto.palm.auth.v1.AttachmentIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.auth.v1.AttachmentIndexResponse.Item>}
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.auth.v1.AttachmentIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.auth.v1.AttachmentIndexResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.auth.v1.AttachmentIndexResponse.Item>} value
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse} returns this
*/
proto.palm.auth.v1.AttachmentIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.auth.v1.AttachmentIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse.Item}
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.auth.v1.AttachmentIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.AttachmentIndexResponse} returns this
 */
proto.palm.auth.v1.AttachmentIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleByLangRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleByLangRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleByLangRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleByLangRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lang: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleByLangRequest}
 */
proto.palm.auth.v1.LocaleByLangRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleByLangRequest;
  return proto.palm.auth.v1.LocaleByLangRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleByLangRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleByLangRequest}
 */
proto.palm.auth.v1.LocaleByLangRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleByLangRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleByLangRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleByLangRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleByLangRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string lang = 1;
 * @return {string}
 */
proto.palm.auth.v1.LocaleByLangRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleByLangRequest} returns this
 */
proto.palm.auth.v1.LocaleByLangRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.LocaleListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.auth.v1.LocaleIndexResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleListResponse}
 */
proto.palm.auth.v1.LocaleListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleListResponse;
  return proto.palm.auth.v1.LocaleListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleListResponse}
 */
proto.palm.auth.v1.LocaleListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.auth.v1.LocaleIndexResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.auth.v1.LocaleIndexResponse.Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LocaleIndexResponse.Item items = 1;
 * @return {!Array<!proto.palm.auth.v1.LocaleIndexResponse.Item>}
 */
proto.palm.auth.v1.LocaleListResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.auth.v1.LocaleIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.auth.v1.LocaleIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.auth.v1.LocaleIndexResponse.Item>} value
 * @return {!proto.palm.auth.v1.LocaleListResponse} returns this
*/
proto.palm.auth.v1.LocaleListResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.auth.v1.LocaleIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item}
 */
proto.palm.auth.v1.LocaleListResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.auth.v1.LocaleIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.LocaleListResponse} returns this
 */
proto.palm.auth.v1.LocaleListResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.auth.v1.LocaleIndexResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.auth.v1.LocaleIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && nut_pb.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleIndexResponse}
 */
proto.palm.auth.v1.LocaleIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleIndexResponse;
  return proto.palm.auth.v1.LocaleIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleIndexResponse}
 */
proto.palm.auth.v1.LocaleIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.auth.v1.LocaleIndexResponse.Item;
      reader.readMessage(value,proto.palm.auth.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new nut_pb.Pagination;
      reader.readMessage(value,nut_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.auth.v1.LocaleIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      nut_pb.Pagination.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: jspb.Message.getFieldWithDefault(msg, 3, ""),
    message: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleIndexResponse.Item;
  return proto.palm.auth.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item} returns this
*/
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.LocaleIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.auth.v1.LocaleIndexResponse.Item>}
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.auth.v1.LocaleIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.auth.v1.LocaleIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.auth.v1.LocaleIndexResponse.Item>} value
 * @return {!proto.palm.auth.v1.LocaleIndexResponse} returns this
*/
proto.palm.auth.v1.LocaleIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.auth.v1.LocaleIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.auth.v1.LocaleIndexResponse.Item}
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.auth.v1.LocaleIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.auth.v1.LocaleIndexResponse} returns this
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional palm.nut.v1.Pagination pagination = 9;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, nut_pb.Pagination, 9));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.auth.v1.LocaleIndexResponse} returns this
*/
proto.palm.auth.v1.LocaleIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.auth.v1.LocaleIndexResponse} returns this
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.auth.v1.LocaleIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleByCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleByCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleByCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleByCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleByCodeRequest}
 */
proto.palm.auth.v1.LocaleByCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleByCodeRequest;
  return proto.palm.auth.v1.LocaleByCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleByCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleByCodeRequest}
 */
proto.palm.auth.v1.LocaleByCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleByCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleByCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleByCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleByCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.palm.auth.v1.LocaleByCodeRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleByCodeRequest} returns this
 */
proto.palm.auth.v1.LocaleByCodeRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleByLangAndCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleByLangAndCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lang: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleByLangAndCodeRequest}
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleByLangAndCodeRequest;
  return proto.palm.auth.v1.LocaleByLangAndCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleByLangAndCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleByLangAndCodeRequest}
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleByLangAndCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleByLangAndCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string lang = 1;
 * @return {string}
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleByLangAndCodeRequest} returns this
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleByLangAndCodeRequest} returns this
 */
proto.palm.auth.v1.LocaleByLangAndCodeRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lang: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleCreateRequest}
 */
proto.palm.auth.v1.LocaleCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleCreateRequest;
  return proto.palm.auth.v1.LocaleCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleCreateRequest}
 */
proto.palm.auth.v1.LocaleCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string lang = 1;
 * @return {string}
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleCreateRequest} returns this
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleCreateRequest} returns this
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleCreateRequest} returns this
 */
proto.palm.auth.v1.LocaleCreateRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.auth.v1.LocaleUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.auth.v1.LocaleUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.auth.v1.LocaleUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.auth.v1.LocaleUpdateRequest}
 */
proto.palm.auth.v1.LocaleUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.auth.v1.LocaleUpdateRequest;
  return proto.palm.auth.v1.LocaleUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.auth.v1.LocaleUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.auth.v1.LocaleUpdateRequest}
 */
proto.palm.auth.v1.LocaleUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.auth.v1.LocaleUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.auth.v1.LocaleUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.auth.v1.LocaleUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.auth.v1.LocaleUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.auth.v1.LocaleUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.auth.v1.LocaleUpdateRequest} returns this
 */
proto.palm.auth.v1.LocaleUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.palm.auth.v1.LocaleUpdateRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.auth.v1.LocaleUpdateRequest} returns this
 */
proto.palm.auth.v1.LocaleUpdateRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.palm.auth.v1);
