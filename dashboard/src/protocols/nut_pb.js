// source: nut.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.palm.plugins.nut.v1.AttachemtShowRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.AttachemtShowResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.AttachmetIndexResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.AwsProfile', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.BaiduProfile', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.BingProfile', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.CategoryCreateRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.CategoryIndexResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.CategoryIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.CategoryUpdateRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.GoogleProfile', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.IdRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.LocaleGetRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.LocaleIndexResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.LocaleIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.LocaleSetRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.Pager', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.Pagination', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.PolicyIndexResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.PolicyIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.PolicyOptionsResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.PolicyPermission', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.RoleByUserResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.RoleIndexResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.RoleIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.RoleOptionsResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.RoleUserAssociateRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.RoleUserUnassociateRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SettingGetRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SettingGetResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SettingSetRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteAwsS3TestResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteInstallRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteLayoutResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteLayoutResponse.Author', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteListUserResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteListUserResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteSetCopyrightRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteSetInfoRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteSetKeywordsRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteSetLogoRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteSmtpTestRequst', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.Database', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.Health', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.MySql', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.Redis', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteStatusResponse.System', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteUserIndexResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.SmtpProfile', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.TagCreateRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.TagIndexResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.TagIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.TagUpdateRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserChangePasswordRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserEmailRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserGetProfileResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserLogsResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserLogsResponse.Item', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserQueryRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserQueryRequest.IdCase', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserResetPasswordRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserSetProfileRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserSignInRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserSignInResponse', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserSignUpRequest', null, global);
goog.exportSymbol('proto.palm.plugins.nut.v1.UserTokenRequest', null, global);
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
proto.palm.plugins.nut.v1.Pager = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.Pager, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.Pager.displayName = 'proto.palm.plugins.nut.v1.Pager';
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
proto.palm.plugins.nut.v1.Pagination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.Pagination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.Pagination.displayName = 'proto.palm.plugins.nut.v1.Pagination';
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
proto.palm.plugins.nut.v1.IdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.IdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.IdRequest.displayName = 'proto.palm.plugins.nut.v1.IdRequest';
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
proto.palm.plugins.nut.v1.UserSignInResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserSignInResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserSignInResponse.displayName = 'proto.palm.plugins.nut.v1.UserSignInResponse';
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
proto.palm.plugins.nut.v1.UserChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserChangePasswordRequest.displayName = 'proto.palm.plugins.nut.v1.UserChangePasswordRequest';
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
proto.palm.plugins.nut.v1.UserLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.UserLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserLogsResponse.displayName = 'proto.palm.plugins.nut.v1.UserLogsResponse';
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
proto.palm.plugins.nut.v1.UserLogsResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserLogsResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserLogsResponse.Item.displayName = 'proto.palm.plugins.nut.v1.UserLogsResponse.Item';
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
proto.palm.plugins.nut.v1.UserResetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserResetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserResetPasswordRequest.displayName = 'proto.palm.plugins.nut.v1.UserResetPasswordRequest';
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
proto.palm.plugins.nut.v1.UserQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.plugins.nut.v1.UserQueryRequest.oneofGroups_);
};
goog.inherits(proto.palm.plugins.nut.v1.UserQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserQueryRequest.displayName = 'proto.palm.plugins.nut.v1.UserQueryRequest';
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
proto.palm.plugins.nut.v1.UserEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserEmailRequest.displayName = 'proto.palm.plugins.nut.v1.UserEmailRequest';
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
proto.palm.plugins.nut.v1.UserTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserTokenRequest.displayName = 'proto.palm.plugins.nut.v1.UserTokenRequest';
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
proto.palm.plugins.nut.v1.UserSignInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserSignInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserSignInRequest.displayName = 'proto.palm.plugins.nut.v1.UserSignInRequest';
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
proto.palm.plugins.nut.v1.UserSignUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserSignUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserSignUpRequest.displayName = 'proto.palm.plugins.nut.v1.UserSignUpRequest';
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
proto.palm.plugins.nut.v1.UserSetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserSetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserSetProfileRequest.displayName = 'proto.palm.plugins.nut.v1.UserSetProfileRequest';
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
proto.palm.plugins.nut.v1.UserGetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.UserGetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.UserGetProfileResponse.displayName = 'proto.palm.plugins.nut.v1.UserGetProfileResponse';
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
proto.palm.plugins.nut.v1.RoleOptionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.RoleOptionsResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.RoleOptionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.RoleOptionsResponse.displayName = 'proto.palm.plugins.nut.v1.RoleOptionsResponse';
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
proto.palm.plugins.nut.v1.RoleIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.RoleIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.RoleIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.RoleIndexResponse.displayName = 'proto.palm.plugins.nut.v1.RoleIndexResponse';
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
proto.palm.plugins.nut.v1.RoleIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.RoleIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.RoleIndexResponse.Item.displayName = 'proto.palm.plugins.nut.v1.RoleIndexResponse.Item';
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
proto.palm.plugins.nut.v1.RoleByUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.RoleByUserResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.RoleByUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.RoleByUserResponse.displayName = 'proto.palm.plugins.nut.v1.RoleByUserResponse';
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
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.RoleUserUnassociateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.displayName = 'proto.palm.plugins.nut.v1.RoleUserUnassociateRequest';
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
proto.palm.plugins.nut.v1.RoleUserAssociateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.RoleUserAssociateRequest.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.RoleUserAssociateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.RoleUserAssociateRequest.displayName = 'proto.palm.plugins.nut.v1.RoleUserAssociateRequest';
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
proto.palm.plugins.nut.v1.PolicyPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.PolicyPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.PolicyPermission.displayName = 'proto.palm.plugins.nut.v1.PolicyPermission';
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
proto.palm.plugins.nut.v1.PolicyOptionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.PolicyOptionsResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.PolicyOptionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.PolicyOptionsResponse.displayName = 'proto.palm.plugins.nut.v1.PolicyOptionsResponse';
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
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.displayName = 'proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item';
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
proto.palm.plugins.nut.v1.PolicyIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.PolicyIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.PolicyIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.PolicyIndexResponse.displayName = 'proto.palm.plugins.nut.v1.PolicyIndexResponse';
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
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.PolicyIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.displayName = 'proto.palm.plugins.nut.v1.PolicyIndexResponse.Item';
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
proto.palm.plugins.nut.v1.TagIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.TagIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.TagIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.TagIndexResponse.displayName = 'proto.palm.plugins.nut.v1.TagIndexResponse';
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
proto.palm.plugins.nut.v1.TagIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.TagIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.TagIndexResponse.Item.displayName = 'proto.palm.plugins.nut.v1.TagIndexResponse.Item';
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
proto.palm.plugins.nut.v1.TagCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.TagCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.TagCreateRequest.displayName = 'proto.palm.plugins.nut.v1.TagCreateRequest';
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
proto.palm.plugins.nut.v1.TagUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.TagUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.TagUpdateRequest.displayName = 'proto.palm.plugins.nut.v1.TagUpdateRequest';
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
proto.palm.plugins.nut.v1.CategoryIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.CategoryIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.CategoryIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.CategoryIndexResponse.displayName = 'proto.palm.plugins.nut.v1.CategoryIndexResponse';
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
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.CategoryIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.displayName = 'proto.palm.plugins.nut.v1.CategoryIndexResponse.Item';
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
proto.palm.plugins.nut.v1.CategoryCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.CategoryCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.CategoryCreateRequest.displayName = 'proto.palm.plugins.nut.v1.CategoryCreateRequest';
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
proto.palm.plugins.nut.v1.CategoryUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.CategoryUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.CategoryUpdateRequest.displayName = 'proto.palm.plugins.nut.v1.CategoryUpdateRequest';
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
proto.palm.plugins.nut.v1.AttachemtShowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.AttachemtShowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.AttachemtShowRequest.displayName = 'proto.palm.plugins.nut.v1.AttachemtShowRequest';
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
proto.palm.plugins.nut.v1.AttachemtShowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.AttachemtShowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.AttachemtShowResponse.displayName = 'proto.palm.plugins.nut.v1.AttachemtShowResponse';
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
proto.palm.plugins.nut.v1.AttachmetIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.AttachmetIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.AttachmetIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.AttachmetIndexResponse.displayName = 'proto.palm.plugins.nut.v1.AttachmetIndexResponse';
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
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.displayName = 'proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item';
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
proto.palm.plugins.nut.v1.LocaleIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.LocaleIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.LocaleIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.LocaleIndexResponse.displayName = 'proto.palm.plugins.nut.v1.LocaleIndexResponse';
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
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.LocaleIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.displayName = 'proto.palm.plugins.nut.v1.LocaleIndexResponse.Item';
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
proto.palm.plugins.nut.v1.LocaleGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.LocaleGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.LocaleGetRequest.displayName = 'proto.palm.plugins.nut.v1.LocaleGetRequest';
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
proto.palm.plugins.nut.v1.LocaleSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.LocaleSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.LocaleSetRequest.displayName = 'proto.palm.plugins.nut.v1.LocaleSetRequest';
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
proto.palm.plugins.nut.v1.SettingGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SettingGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SettingGetResponse.displayName = 'proto.palm.plugins.nut.v1.SettingGetResponse';
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
proto.palm.plugins.nut.v1.SettingGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SettingGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SettingGetRequest.displayName = 'proto.palm.plugins.nut.v1.SettingGetRequest';
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
proto.palm.plugins.nut.v1.SettingSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SettingSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SettingSetRequest.displayName = 'proto.palm.plugins.nut.v1.SettingSetRequest';
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
proto.palm.plugins.nut.v1.AwsProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.AwsProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.AwsProfile.displayName = 'proto.palm.plugins.nut.v1.AwsProfile';
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
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteAwsS3TestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.displayName = 'proto.palm.plugins.nut.v1.SiteAwsS3TestResponse';
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
proto.palm.plugins.nut.v1.SiteListUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteListUserResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteListUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteListUserResponse.displayName = 'proto.palm.plugins.nut.v1.SiteListUserResponse';
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
proto.palm.plugins.nut.v1.SiteListUserResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteListUserResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteListUserResponse.Item.displayName = 'proto.palm.plugins.nut.v1.SiteListUserResponse.Item';
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
proto.palm.plugins.nut.v1.SiteSmtpTestRequst = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteSmtpTestRequst, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteSmtpTestRequst.displayName = 'proto.palm.plugins.nut.v1.SiteSmtpTestRequst';
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
proto.palm.plugins.nut.v1.SiteSetLogoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteSetLogoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteSetLogoRequest.displayName = 'proto.palm.plugins.nut.v1.SiteSetLogoRequest';
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
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteSetCopyrightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.displayName = 'proto.palm.plugins.nut.v1.SiteSetCopyrightRequest';
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
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteSetKeywordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.displayName = 'proto.palm.plugins.nut.v1.SiteSetKeywordsRequest';
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
proto.palm.plugins.nut.v1.SiteSetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteSetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteSetInfoRequest.displayName = 'proto.palm.plugins.nut.v1.SiteSetInfoRequest';
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
proto.palm.plugins.nut.v1.SiteLayoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteLayoutResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteLayoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteLayoutResponse.displayName = 'proto.palm.plugins.nut.v1.SiteLayoutResponse';
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
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteLayoutResponse.Author, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.displayName = 'proto.palm.plugins.nut.v1.SiteLayoutResponse.Author';
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
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.displayName = 'proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser';
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
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.displayName = 'proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest';
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
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.displayName = 'proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse';
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
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.displayName = 'proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item';
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
proto.palm.plugins.nut.v1.SiteInstallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteInstallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteInstallRequest.displayName = 'proto.palm.plugins.nut.v1.SiteInstallRequest';
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
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.displayName = 'proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest';
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
proto.palm.plugins.nut.v1.SiteUserIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteUserIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteUserIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteUserIndexResponse.displayName = 'proto.palm.plugins.nut.v1.SiteUserIndexResponse';
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
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.displayName = 'proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item';
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
proto.palm.plugins.nut.v1.GoogleProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.GoogleProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.GoogleProfile.displayName = 'proto.palm.plugins.nut.v1.GoogleProfile';
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
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.displayName = 'proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha';
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
proto.palm.plugins.nut.v1.BaiduProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.BaiduProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.BaiduProfile.displayName = 'proto.palm.plugins.nut.v1.BaiduProfile';
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
proto.palm.plugins.nut.v1.BingProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.BingProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.BingProfile.displayName = 'proto.palm.plugins.nut.v1.BingProfile';
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
proto.palm.plugins.nut.v1.SmtpProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SmtpProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SmtpProfile.displayName = 'proto.palm.plugins.nut.v1.SmtpProfile';
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
proto.palm.plugins.nut.v1.SiteStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Database = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.Database, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.Database.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.Database';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.MySql, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.MySql';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.repeatedFields_, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.Redis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.Redis';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Health = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.Health, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.Health.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.Health';
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
proto.palm.plugins.nut.v1.SiteStatusResponse.System = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.plugins.nut.v1.SiteStatusResponse.System, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.plugins.nut.v1.SiteStatusResponse.System.displayName = 'proto.palm.plugins.nut.v1.SiteStatusResponse.System';
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
proto.palm.plugins.nut.v1.Pager.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.Pager.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.Pager} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.Pager.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.palm.plugins.nut.v1.Pager}
 */
proto.palm.plugins.nut.v1.Pager.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.Pager;
  return proto.palm.plugins.nut.v1.Pager.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.Pager} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.Pager}
 */
proto.palm.plugins.nut.v1.Pager.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.palm.plugins.nut.v1.Pager.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.Pager.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.Pager} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.Pager.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 page = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.Pager.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.Pager} returns this
 */
proto.palm.plugins.nut.v1.Pager.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.palm.plugins.nut.v1.Pager.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.Pager} returns this
 */
proto.palm.plugins.nut.v1.Pager.prototype.setSize = function(value) {
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
proto.palm.plugins.nut.v1.Pagination.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.Pagination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.Pagination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.Pagination.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    hasPrevious: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
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
 * @return {!proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.Pagination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.Pagination;
  return proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.Pagination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasPrevious(value);
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
proto.palm.plugins.nut.v1.Pagination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.Pagination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getHasPrevious();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional int64 page = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.Pagination.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.Pagination} returns this
 */
proto.palm.plugins.nut.v1.Pagination.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.palm.plugins.nut.v1.Pagination.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.Pagination} returns this
 */
proto.palm.plugins.nut.v1.Pagination.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.palm.plugins.nut.v1.Pagination.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.Pagination} returns this
 */
proto.palm.plugins.nut.v1.Pagination.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool has_next = 11;
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.Pagination.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.plugins.nut.v1.Pagination} returns this
 */
proto.palm.plugins.nut.v1.Pagination.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool has_previous = 12;
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.Pagination.prototype.getHasPrevious = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.plugins.nut.v1.Pagination} returns this
 */
proto.palm.plugins.nut.v1.Pagination.prototype.setHasPrevious = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
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
proto.palm.plugins.nut.v1.IdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.IdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.IdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.IdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.palm.plugins.nut.v1.IdRequest}
 */
proto.palm.plugins.nut.v1.IdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.IdRequest;
  return proto.palm.plugins.nut.v1.IdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.IdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.IdRequest}
 */
proto.palm.plugins.nut.v1.IdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.IdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.IdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.IdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.IdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.IdRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.IdRequest} returns this
 */
proto.palm.plugins.nut.v1.IdRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.palm.plugins.nut.v1.UserSignInResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserSignInResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserSignInResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSignInResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.plugins.nut.v1.UserSignInResponse}
 */
proto.palm.plugins.nut.v1.UserSignInResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserSignInResponse;
  return proto.palm.plugins.nut.v1.UserSignInResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserSignInResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserSignInResponse}
 */
proto.palm.plugins.nut.v1.UserSignInResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.UserSignInResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserSignInResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserSignInResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSignInResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignInResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignInResponse} returns this
 */
proto.palm.plugins.nut.v1.UserSignInResponse.prototype.setToken = function(value) {
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
proto.palm.plugins.nut.v1.UserChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserChangePasswordRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.UserChangePasswordRequest}
 */
proto.palm.plugins.nut.v1.UserChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserChangePasswordRequest;
  return proto.palm.plugins.nut.v1.UserChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserChangePasswordRequest}
 */
proto.palm.plugins.nut.v1.UserChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.UserChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.UserChangePasswordRequest.prototype.getCurrentPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserChangePasswordRequest} returns this
 */
proto.palm.plugins.nut.v1.UserChangePasswordRequest.prototype.setCurrentPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserChangePasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserChangePasswordRequest} returns this
 */
proto.palm.plugins.nut.v1.UserChangePasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.UserLogsResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.UserLogsResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.plugins.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserLogsResponse;
  return proto.palm.plugins.nut.v1.UserLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.UserLogsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.UserLogsResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.UserLogsResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserLogsResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    level: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resourceType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    resourceId: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserLogsResponse.Item;
  return proto.palm.plugins.nut.v1.UserLogsResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setLevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResourceId(value);
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
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserLogsResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getResourceType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string level = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setLevel = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string resource_type = 6;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getResourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 resource_id = 7;
 * @return {number}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getResourceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setResourceId = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.clearResourceId = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.hasResourceId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.UserLogsResponse.Item>}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.UserLogsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.UserLogsResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.UserLogsResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse} returns this
*/
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.UserLogsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse.Item}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.UserLogsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.plugins.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.plugins.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse} returns this
*/
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserLogsResponse} returns this
 */
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserLogsResponse.prototype.hasPagination = function() {
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
proto.palm.plugins.nut.v1.UserResetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserResetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserResetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserResetPasswordRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.UserResetPasswordRequest}
 */
proto.palm.plugins.nut.v1.UserResetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserResetPasswordRequest;
  return proto.palm.plugins.nut.v1.UserResetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserResetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserResetPasswordRequest}
 */
proto.palm.plugins.nut.v1.UserResetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.UserResetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserResetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserResetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserResetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.UserResetPasswordRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserResetPasswordRequest} returns this
 */
proto.palm.plugins.nut.v1.UserResetPasswordRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserResetPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserResetPasswordRequest} returns this
 */
proto.palm.plugins.nut.v1.UserResetPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.plugins.nut.v1.UserQueryRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.IdCase = {
  ID_NOT_SET: 0,
  EMAIL: 1,
  NICK_NAME: 2
};

/**
 * @return {proto.palm.plugins.nut.v1.UserQueryRequest.IdCase}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.getIdCase = function() {
  return /** @type {proto.palm.plugins.nut.v1.UserQueryRequest.IdCase} */(jspb.Message.computeOneofCase(this, proto.palm.plugins.nut.v1.UserQueryRequest.oneofGroups_[0]));
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
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.UserQueryRequest}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserQueryRequest;
  return proto.palm.plugins.nut.v1.UserQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserQueryRequest}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
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
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserQueryRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserQueryRequest} returns this
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.setEmail = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.palm.plugins.nut.v1.UserQueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserQueryRequest} returns this
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.clearEmail = function() {
  return jspb.Message.setOneofField(this, 1, proto.palm.plugins.nut.v1.UserQueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nick_name = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserQueryRequest} returns this
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.setNickName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.plugins.nut.v1.UserQueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserQueryRequest} returns this
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.clearNickName = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.plugins.nut.v1.UserQueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserQueryRequest.prototype.hasNickName = function() {
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
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.palm.plugins.nut.v1.UserQueryRequest.toObject(includeInstance, f),
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
 * @return {!proto.palm.plugins.nut.v1.UserEmailRequest}
 */
proto.palm.plugins.nut.v1.UserEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserEmailRequest;
  return proto.palm.plugins.nut.v1.UserEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserEmailRequest}
 */
proto.palm.plugins.nut.v1.UserEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.UserQueryRequest;
      reader.readMessage(value,proto.palm.plugins.nut.v1.UserQueryRequest.deserializeBinaryFromReader);
      msg.setQuery(value);
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
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.UserQueryRequest.serializeBinaryToWriter
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
 * optional UserQueryRequest query = 1;
 * @return {?proto.palm.plugins.nut.v1.UserQueryRequest}
 */
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.getQuery = function() {
  return /** @type{?proto.palm.plugins.nut.v1.UserQueryRequest} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.UserQueryRequest, 1));
};


/**
 * @param {?proto.palm.plugins.nut.v1.UserQueryRequest|undefined} value
 * @return {!proto.palm.plugins.nut.v1.UserEmailRequest} returns this
*/
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserEmailRequest} returns this
 */
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string home = 9;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserEmailRequest} returns this
 */
proto.palm.plugins.nut.v1.UserEmailRequest.prototype.setHome = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.palm.plugins.nut.v1.UserTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.plugins.nut.v1.UserTokenRequest}
 */
proto.palm.plugins.nut.v1.UserTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserTokenRequest;
  return proto.palm.plugins.nut.v1.UserTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserTokenRequest}
 */
proto.palm.plugins.nut.v1.UserTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.UserTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserTokenRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserTokenRequest} returns this
 */
proto.palm.plugins.nut.v1.UserTokenRequest.prototype.setToken = function(value) {
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
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserSignInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserSignInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSignInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.palm.plugins.nut.v1.UserQueryRequest.toObject(includeInstance, f),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.palm.plugins.nut.v1.UserSignInRequest}
 */
proto.palm.plugins.nut.v1.UserSignInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserSignInRequest;
  return proto.palm.plugins.nut.v1.UserSignInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserSignInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserSignInRequest}
 */
proto.palm.plugins.nut.v1.UserSignInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.UserQueryRequest;
      reader.readMessage(value,proto.palm.plugins.nut.v1.UserQueryRequest.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
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
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserSignInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserSignInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSignInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.UserQueryRequest.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
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
 * optional UserQueryRequest query = 1;
 * @return {?proto.palm.plugins.nut.v1.UserQueryRequest}
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.getQuery = function() {
  return /** @type{?proto.palm.plugins.nut.v1.UserQueryRequest} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.UserQueryRequest, 1));
};


/**
 * @param {?proto.palm.plugins.nut.v1.UserQueryRequest|undefined} value
 * @return {!proto.palm.plugins.nut.v1.UserSignInRequest} returns this
*/
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserSignInRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignInRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Duration ttl = 11;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 11));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.plugins.nut.v1.UserSignInRequest} returns this
*/
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.UserSignInRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.UserSignInRequest.prototype.hasTtl = function() {
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
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserSignUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserSignUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lang: jspb.Message.getFieldWithDefault(msg, 11, ""),
    timeZone: jspb.Message.getFieldWithDefault(msg, 12, ""),
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
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserSignUpRequest;
  return proto.palm.plugins.nut.v1.UserSignUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserSignUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickName(value);
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
      msg.setTimeZone(value);
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
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserSignUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserSignUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNickName();
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
  f = message.getTimeZone();
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
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nick_name = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string lang = 11;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string time_zone = 12;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string home = 21;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSignUpRequest.prototype.setHome = function(value) {
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
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserSetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserSetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timeZone: jspb.Message.getFieldWithDefault(msg, 8, ""),
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
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest}
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserSetProfileRequest;
  return proto.palm.plugins.nut.v1.UserSetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserSetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest}
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTimeZone(value);
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
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserSetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserSetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTimeZone();
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
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string time_zone = 8;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string lang = 9;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string wechat = 11;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.getWechat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.setWechat = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone = 12;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.plugins.nut.v1.UserSetProfileRequest.prototype.setPhone = function(value) {
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
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.UserGetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.UserGetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timeZone: jspb.Message.getFieldWithDefault(msg, 8, ""),
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
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.UserGetProfileResponse;
  return proto.palm.plugins.nut.v1.UserGetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.UserGetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
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
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.UserGetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.UserGetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNickName();
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
  f = message.getTimeZone();
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
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nick_name = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string time_zone = 8;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string lang = 9;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string wechat = 11;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getWechat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setWechat = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone = 12;
 * @return {string}
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.plugins.nut.v1.UserGetProfileResponse.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.RoleOptionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.RoleOptionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.RoleOptionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.RoleOptionsResponse}
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.RoleOptionsResponse;
  return proto.palm.plugins.nut.v1.RoleOptionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.RoleOptionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.RoleOptionsResponse}
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.RoleOptionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.RoleOptionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.RoleOptionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PolicyOptionsResponse.Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>}
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.RoleOptionsResponse} returns this
*/
proto.palm.plugins.nut.v1.RoleOptionsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.RoleOptionsResponse} returns this
 */
proto.palm.plugins.nut.v1.RoleOptionsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.RoleIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.RoleIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.RoleIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.plugins.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.RoleIndexResponse;
  return proto.palm.plugins.nut.v1.RoleIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.RoleIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.RoleIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.RoleIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.RoleIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.RoleIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.RoleIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.RoleIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    role: (f = msg.getRole()) && proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.toObject(includeInstance, f),
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
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.RoleIndexResponse.Item;
  return proto.palm.plugins.nut.v1.RoleIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    case 3:
      var value = new proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 9:
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
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.RoleIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
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
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PolicyOptionsResponse.Item role = 2;
 * @return {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.getRole = function() {
  return /** @type{?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 2));
};


/**
 * @param {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item|undefined} value
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SiteUserIndexResponse.Item user = 3;
 * @return {?proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.getUser = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item, 3));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item|undefined} value
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.RoleIndexResponse.Item>}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.RoleIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.RoleIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.RoleIndexResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.RoleIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.plugins.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.plugins.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.RoleIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.RoleIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.RoleByUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.RoleByUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.RoleByUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.RoleByUserResponse}
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.RoleByUserResponse;
  return proto.palm.plugins.nut.v1.RoleByUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.RoleByUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.RoleByUserResponse}
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.RoleByUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.RoleByUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.RoleByUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PolicyOptionsResponse.Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>}
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.RoleByUserResponse} returns this
*/
proto.palm.plugins.nut.v1.RoleByUserResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.RoleByUserResponse} returns this
 */
proto.palm.plugins.nut.v1.RoleByUserResponse.prototype.clearItemsList = function() {
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
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.RoleUserUnassociateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, 0),
    role: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.RoleUserUnassociateRequest}
 */
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.RoleUserUnassociateRequest;
  return proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.RoleUserUnassociateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.RoleUserUnassociateRequest}
 */
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRole(value);
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
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.RoleUserUnassociateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRole();
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
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.RoleUserUnassociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string role = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.RoleUserUnassociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserUnassociateRequest.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.repeatedFields_ = [2];



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
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.RoleUserAssociateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rolesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    notBefore: (f = msg.getNotBefore()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expiredAt: (f = msg.getExpiredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.RoleUserAssociateRequest;
  return proto.palm.plugins.nut.v1.RoleUserAssociateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addRoles(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNotBefore(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiredAt(value);
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
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.RoleUserAssociateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getNotBefore();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiredAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 user = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string roles = 2;
 * @return {!Array<string>}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional google.protobuf.Timestamp not_before = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.getNotBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
*/
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.setNotBefore = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.clearNotBefore = function() {
  return this.setNotBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.hasNotBefore = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expired_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.getExpiredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
*/
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.setExpiredAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.RoleUserAssociateRequest} returns this
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.clearExpiredAt = function() {
  return this.setExpiredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.RoleUserAssociateRequest.prototype.hasExpiredAt = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.palm.plugins.nut.v1.PolicyPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.PolicyPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.PolicyPermission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operation: jspb.Message.getFieldWithDefault(msg, 2, ""),
    resourceType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resourceId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission}
 */
proto.palm.plugins.nut.v1.PolicyPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.PolicyPermission;
  return proto.palm.plugins.nut.v1.PolicyPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.PolicyPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission}
 */
proto.palm.plugins.nut.v1.PolicyPermission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResourceId(value);
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
proto.palm.plugins.nut.v1.PolicyPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.PolicyPermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.PolicyPermission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyPermission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResourceType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string role = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission} returns this
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operation = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission} returns this
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string resource_type = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.getResourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission} returns this
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 resource_id = 4;
 * @return {number}
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.getResourceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission} returns this
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.setResourceId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission} returns this
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.clearResourceId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.PolicyPermission.prototype.hasResourceId = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.repeatedFields_ = [1,2,3];



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
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.PolicyOptionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject, includeInstance),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject, includeInstance),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.PolicyOptionsResponse;
  return proto.palm.plugins.nut.v1.PolicyOptionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 2:
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 3:
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
      msg.addResources(value);
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
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.PolicyOptionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    label: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
  return proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
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
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Item roles = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} returns this
*/
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} returns this
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated Item operations = 2;
 * @return {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 2));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} returns this
*/
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} returns this
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * repeated Item resources = 3;
 * @return {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 3));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} returns this
*/
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.PolicyOptionsResponse} returns this
 */
proto.palm.plugins.nut.v1.PolicyOptionsResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.PolicyIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.PolicyIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.plugins.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.PolicyIndexResponse;
  return proto.palm.plugins.nut.v1.PolicyIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.PolicyIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.PolicyIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.PolicyIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.PolicyIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    role: (f = msg.getRole()) && proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject(includeInstance, f),
    operation: (f = msg.getOperation()) && proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject(includeInstance, f),
    resourceType: (f = msg.getResourceType()) && proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.toObject(includeInstance, f),
    resourceId: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.PolicyIndexResponse.Item;
  return proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    case 3:
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
      msg.setOperation(value);
      break;
    case 4:
      var value = new proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.deserializeBinaryFromReader);
      msg.setResourceType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResourceId(value);
      break;
    case 9:
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
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getResourceType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCreatedAt();
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
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PolicyOptionsResponse.Item role = 2;
 * @return {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.getRole = function() {
  return /** @type{?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 2));
};


/**
 * @param {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item|undefined} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PolicyOptionsResponse.Item operation = 3;
 * @return {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.getOperation = function() {
  return /** @type{?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 3));
};


/**
 * @param {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item|undefined} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PolicyOptionsResponse.Item resource_type = 4;
 * @return {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.getResourceType = function() {
  return /** @type{?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item, 4));
};


/**
 * @param {?proto.palm.plugins.nut.v1.PolicyOptionsResponse.Item|undefined} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.setResourceType = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.clearResourceType = function() {
  return this.setResourceType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.hasResourceType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 resource_id = 5;
 * @return {number}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.getResourceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.setResourceId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.clearResourceId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.hasResourceId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item>}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.PolicyIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.PolicyIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.plugins.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.plugins.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.PolicyIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.PolicyIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.TagIndexResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.TagIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.TagIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.TagIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.TagIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.TagIndexResponse;
  return proto.palm.plugins.nut.v1.TagIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.TagIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.TagIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.TagIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.TagIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.TagIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.TagIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.TagIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.TagIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.TagIndexResponse.Item;
  return proto.palm.plugins.nut.v1.TagIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.TagIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      4,
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
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 priority = 4;
 * @return {number}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.TagIndexResponse.Item>}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.TagIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.TagIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.TagIndexResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.TagIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.TagIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.TagIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.TagIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.TagIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.TagIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.TagCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.TagCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lang: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.palm.plugins.nut.v1.TagCreateRequest}
 */
proto.palm.plugins.nut.v1.TagCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.TagCreateRequest;
  return proto.palm.plugins.nut.v1.TagCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.TagCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.TagCreateRequest}
 */
proto.palm.plugins.nut.v1.TagCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.TagCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.TagCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string lang = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.TagCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.TagCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.TagCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.TagCreateRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
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
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.TagUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.TagUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.palm.plugins.nut.v1.TagUpdateRequest}
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.TagUpdateRequest;
  return proto.palm.plugins.nut.v1.TagUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.TagUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.TagUpdateRequest}
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.TagUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.TagUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.TagUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.TagUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.TagUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.TagUpdateRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.CategoryIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.CategoryIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.CategoryIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.CategoryIndexResponse;
  return proto.palm.plugins.nut.v1.CategoryIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.CategoryIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.CategoryIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.CategoryIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.CategoryIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.CategoryIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.CategoryIndexResponse.Item;
  return proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      5,
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
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 parent_id = 4;
 * @return {number}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.setParentId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.clearParentId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.hasParentId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 priority = 5;
 * @return {number}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item>}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.CategoryIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.CategoryIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.CategoryIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.CategoryIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.CategoryIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.CategoryCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.CategoryCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lang: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.palm.plugins.nut.v1.CategoryCreateRequest}
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.CategoryCreateRequest;
  return proto.palm.plugins.nut.v1.CategoryCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.CategoryCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.CategoryCreateRequest}
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParentId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.CategoryCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.CategoryCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string lang = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 parent_id = 3;
 * @return {number}
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.setParentId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.clearParentId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.hasParentId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryCreateRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
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
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.CategoryUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.palm.plugins.nut.v1.CategoryUpdateRequest}
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.CategoryUpdateRequest;
  return proto.palm.plugins.nut.v1.CategoryUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.CategoryUpdateRequest}
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParentId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.CategoryUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 parent_id = 3;
 * @return {number}
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.setParentId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.clearParentId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.hasParentId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.CategoryUpdateRequest} returns this
 */
proto.palm.plugins.nut.v1.CategoryUpdateRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
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
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.AttachemtShowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.AttachemtShowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowRequest}
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.AttachemtShowRequest;
  return proto.palm.plugins.nut.v1.AttachemtShowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.AttachemtShowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowRequest}
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.AttachemtShowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.AttachemtShowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowRequest} returns this
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration ttl = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowRequest} returns this
*/
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowRequest} returns this
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.AttachemtShowRequest.prototype.hasTtl = function() {
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
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.AttachemtShowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.AttachemtShowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.toObject(includeInstance, f),
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
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowResponse}
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.AttachemtShowResponse;
  return proto.palm.plugins.nut.v1.AttachemtShowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.AttachemtShowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowResponse}
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.AttachemtShowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.AttachemtShowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.serializeBinaryToWriter
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
 * optional AttachmetIndexResponse.Item item = 1;
 * @return {?proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.getItem = function() {
  return /** @type{?proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item, 1));
};


/**
 * @param {?proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item|undefined} value
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowResponse} returns this
*/
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowResponse} returns this
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AttachemtShowResponse} returns this
 */
proto.palm.plugins.nut.v1.AttachemtShowResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.AttachmetIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.AttachmetIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.plugins.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.AttachmetIndexResponse;
  return proto.palm.plugins.nut.v1.AttachmetIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.AttachmetIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.AttachmetIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.AttachmetIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bucket: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    contentType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    region: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
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
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item;
  return proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
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
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
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
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string bucket = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string content_type = 6;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string region = 7;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string status = 8;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item>}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.AttachmetIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.plugins.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.plugins.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.AttachmetIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.AttachmetIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.LocaleIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.LocaleIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.plugins.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.LocaleIndexResponse;
  return proto.palm.plugins.nut.v1.LocaleIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.LocaleIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.LocaleIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.LocaleIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.LocaleIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.LocaleIndexResponse.Item;
  return proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item>}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.LocaleIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.LocaleIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.plugins.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.plugins.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.LocaleIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.LocaleIndexResponse.prototype.hasPagination = function() {
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
proto.palm.plugins.nut.v1.LocaleGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.LocaleGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.LocaleGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleGetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.LocaleGetRequest}
 */
proto.palm.plugins.nut.v1.LocaleGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.LocaleGetRequest;
  return proto.palm.plugins.nut.v1.LocaleGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.LocaleGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.LocaleGetRequest}
 */
proto.palm.plugins.nut.v1.LocaleGetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.LocaleGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.LocaleGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.LocaleGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleGetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.LocaleGetRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleGetRequest} returns this
 */
proto.palm.plugins.nut.v1.LocaleGetRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.LocaleGetRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleGetRequest} returns this
 */
proto.palm.plugins.nut.v1.LocaleGetRequest.prototype.setCode = function(value) {
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
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.LocaleSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.LocaleSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.LocaleSetRequest}
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.LocaleSetRequest;
  return proto.palm.plugins.nut.v1.LocaleSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.LocaleSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.LocaleSetRequest}
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.LocaleSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.LocaleSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleSetRequest} returns this
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleSetRequest} returns this
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.LocaleSetRequest} returns this
 */
proto.palm.plugins.nut.v1.LocaleSetRequest.prototype.setMessage = function(value) {
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
proto.palm.plugins.nut.v1.SettingGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SettingGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SettingGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SettingGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
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
 * @return {!proto.palm.plugins.nut.v1.SettingGetResponse}
 */
proto.palm.plugins.nut.v1.SettingGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SettingGetResponse;
  return proto.palm.plugins.nut.v1.SettingGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SettingGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SettingGetResponse}
 */
proto.palm.plugins.nut.v1.SettingGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
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
proto.palm.plugins.nut.v1.SettingGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SettingGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SettingGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SettingGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.palm.plugins.nut.v1.SettingGetResponse.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.palm.plugins.nut.v1.SettingGetResponse.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.palm.plugins.nut.v1.SettingGetResponse.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.palm.plugins.nut.v1.SettingGetResponse} returns this
 */
proto.palm.plugins.nut.v1.SettingGetResponse.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SettingGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SettingGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SettingGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.SettingGetRequest}
 */
proto.palm.plugins.nut.v1.SettingGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SettingGetRequest;
  return proto.palm.plugins.nut.v1.SettingGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SettingGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SettingGetRequest}
 */
proto.palm.plugins.nut.v1.SettingGetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setKey(value);
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
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SettingGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SettingGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SettingGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKey();
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
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SettingGetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.setUser = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SettingGetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.clearUser = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SettingGetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingGetRequest.prototype.setKey = function(value) {
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
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SettingSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SettingSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SettingSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: msg.getValue_asB64(),
    encrypt: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.palm.plugins.nut.v1.SettingSetRequest}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SettingSetRequest;
  return proto.palm.plugins.nut.v1.SettingSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SettingSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SettingSetRequest}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEncrypt(value);
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
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SettingSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SettingSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SettingSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getEncrypt();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional int32 user = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SettingSetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.setUser = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SettingSetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.clearUser = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SettingSetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes value = 3;
 * @return {!(string|Uint8Array)}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes value = 3;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.palm.plugins.nut.v1.SettingSetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bool encrypt = 9;
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.getEncrypt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.plugins.nut.v1.SettingSetRequest} returns this
 */
proto.palm.plugins.nut.v1.SettingSetRequest.prototype.setEncrypt = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
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
proto.palm.plugins.nut.v1.AwsProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.AwsProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.AwsProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AwsProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    region: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endpoint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accessKeyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    secretAccessKey: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.palm.plugins.nut.v1.AwsProfile}
 */
proto.palm.plugins.nut.v1.AwsProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.AwsProfile;
  return proto.palm.plugins.nut.v1.AwsProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.AwsProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.AwsProfile}
 */
proto.palm.plugins.nut.v1.AwsProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessKeyId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretAccessKey(value);
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
proto.palm.plugins.nut.v1.AwsProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.AwsProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.AwsProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.AwsProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegion();
  if (f.length > 0) {
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
  f = message.getAccessKeyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSecretAccessKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string region = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AwsProfile} returns this
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AwsProfile} returns this
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.setEndpoint = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.AwsProfile} returns this
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.clearEndpoint = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string access_key_id = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.getAccessKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AwsProfile} returns this
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.setAccessKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string secret_access_key = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.getSecretAccessKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.AwsProfile} returns this
 */
proto.palm.plugins.nut.v1.AwsProfile.prototype.setSecretAccessKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse}
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteAwsS3TestResponse;
  return proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse}
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBuckets(value);
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
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string buckets = 1;
 * @return {!Array<string>}
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.prototype.getBucketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.prototype.setBucketsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.prototype.addBuckets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteAwsS3TestResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteAwsS3TestResponse.prototype.clearBucketsList = function() {
  return this.setBucketsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.SiteListUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteListUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteListUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.SiteListUserResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteListUserResponse;
  return proto.palm.plugins.nut.v1.SiteListUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteListUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.SiteListUserResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteListUserResponse.Item.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.SiteListUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteListUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteListUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.SiteListUserResponse.Item.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteListUserResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteListUserResponse.Item;
  return proto.palm.plugins.nut.v1.SiteListUserResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickName(value);
      break;
    case 3:
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
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteListUserResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nick_name = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string real_name = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.Item.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.SiteListUserResponse.Item>}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.SiteListUserResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.SiteListUserResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.SiteListUserResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteListUserResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.SiteListUserResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteListUserResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteListUserResponse.prototype.clearItemsList = function() {
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
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteSmtpTestRequst.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
    body: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst}
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteSmtpTestRequst;
  return proto.palm.plugins.nut.v1.SiteSmtpTestRequst.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst}
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
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
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteSmtpTestRequst.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string to = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst} returns this
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst} returns this
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string body = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSmtpTestRequst} returns this
 */
proto.palm.plugins.nut.v1.SiteSmtpTestRequst.prototype.setBody = function(value) {
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
proto.palm.plugins.nut.v1.SiteSetLogoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteSetLogoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteSetLogoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetLogoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteSetLogoRequest}
 */
proto.palm.plugins.nut.v1.SiteSetLogoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteSetLogoRequest;
  return proto.palm.plugins.nut.v1.SiteSetLogoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteSetLogoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteSetLogoRequest}
 */
proto.palm.plugins.nut.v1.SiteSetLogoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.SiteSetLogoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteSetLogoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteSetLogoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetLogoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSetLogoRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetLogoRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetLogoRequest.prototype.setUrl = function(value) {
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
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteSetCopyrightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.SiteSetCopyrightRequest}
 */
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteSetCopyrightRequest;
  return proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteSetCopyrightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteSetCopyrightRequest}
 */
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteSetCopyrightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetCopyrightRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetCopyrightRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest}
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteSetKeywordsRequest;
  return proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest}
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string items = 1;
 * @return {!Array<string>}
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetKeywordsRequest.prototype.clearItemsList = function() {
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
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteSetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteSetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subhead: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteSetInfoRequest}
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteSetInfoRequest;
  return proto.palm.plugins.nut.v1.SiteSetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteSetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteSetInfoRequest}
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubhead(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteSetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteSetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubhead();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetInfoRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subhead = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.getSubhead = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetInfoRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.setSubhead = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetInfoRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetInfoRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.repeatedFields_ = [3,9];



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
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteLayoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subhead: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keywordsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    author: (f = msg.getAuthor()) && proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.toObject(includeInstance, f),
    copyright: jspb.Message.getFieldWithDefault(msg, 6, ""),
    logo: jspb.Message.getFieldWithDefault(msg, 7, ""),
    languagesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    currentUser: (f = msg.getCurrentUser()) && proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteLayoutResponse;
  return proto.palm.plugins.nut.v1.SiteLayoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubhead(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeywords(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.palm.plugins.nut.v1.SiteLayoutResponse.Author;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCopyright(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogo(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguages(value);
      break;
    case 11:
      var value = new proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.deserializeBinaryFromReader);
      msg.setCurrentUser(value);
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
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteLayoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubhead();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeywordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.serializeBinaryToWriter
    );
  }
  f = message.getCopyright();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLogo();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getCurrentUser();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse.Author} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.Author}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteLayoutResponse.Author;
  return proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse.Author} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.Author}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
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
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse.Author} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.Author} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.Author} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.Author.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.repeatedFields_ = [3];



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
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.toObject(includeInstance, f),
    isAdministrator: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    proto.palm.plugins.nut.v1.PolicyPermission.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser;
  return proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdministrator(value);
      break;
    case 3:
      var value = new proto.palm.plugins.nut.v1.PolicyPermission;
      reader.readMessage(value,proto.palm.plugins.nut.v1.PolicyPermission.deserializeBinaryFromReader);
      msg.addPolicies(value);
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
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getIsAdministrator();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.palm.plugins.nut.v1.PolicyPermission.serializeBinaryToWriter
    );
  }
};


/**
 * optional SiteUserIndexResponse.Item payload = 1;
 * @return {?proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.getPayload = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item, 1));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} returns this
*/
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_administrator = 2;
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.getIsAdministrator = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.setIsAdministrator = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated PolicyPermission policies = 3;
 * @return {!Array<!proto.palm.plugins.nut.v1.PolicyPermission>}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.getPoliciesList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.PolicyPermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.PolicyPermission, 3));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.PolicyPermission>} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} returns this
*/
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.setPoliciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.PolicyPermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.PolicyPermission}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.palm.plugins.nut.v1.PolicyPermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser.prototype.clearPoliciesList = function() {
  return this.setPoliciesList([]);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subhead = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getSubhead = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setSubhead = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string keywords = 3;
 * @return {!Array<string>}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getKeywordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setKeywordsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.addKeywords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.clearKeywordsList = function() {
  return this.setKeywordsList([]);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Author author = 5;
 * @return {?proto.palm.plugins.nut.v1.SiteLayoutResponse.Author}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getAuthor = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteLayoutResponse.Author} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteLayoutResponse.Author, 5));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteLayoutResponse.Author|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string copyright = 6;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getCopyright = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setCopyright = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string logo = 7;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setLogo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string languages = 9;
 * @return {!Array<string>}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
};


/**
 * optional CurrentUser current_user = 11;
 * @return {?proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.getCurrentUser = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser, 11));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteLayoutResponse.CurrentUser|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.setCurrentUser = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.clearCurrentUser = function() {
  return this.setCurrentUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteLayoutResponse.prototype.hasCurrentUser = function() {
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
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest}
 */
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest;
  return proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest}
 */
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
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
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string body = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteNewLeaveWordRequest.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.plugins.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse;
  return proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    body: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item;
  return proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 9:
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
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
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
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string body = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item>}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.plugins.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.plugins.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteIndexLeaveWordResponse.prototype.hasPagination = function() {
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
proto.palm.plugins.nut.v1.SiteInstallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteInstallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteInstallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteInstallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.palm.plugins.nut.v1.UserSignUpRequest.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.SiteInstallRequest}
 */
proto.palm.plugins.nut.v1.SiteInstallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteInstallRequest;
  return proto.palm.plugins.nut.v1.SiteInstallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteInstallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteInstallRequest}
 */
proto.palm.plugins.nut.v1.SiteInstallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.UserSignUpRequest;
      reader.readMessage(value,proto.palm.plugins.nut.v1.UserSignUpRequest.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.palm.plugins.nut.v1.SiteInstallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteInstallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteInstallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteInstallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.UserSignUpRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserSignUpRequest user = 1;
 * @return {?proto.palm.plugins.nut.v1.UserSignUpRequest}
 */
proto.palm.plugins.nut.v1.SiteInstallRequest.prototype.getUser = function() {
  return /** @type{?proto.palm.plugins.nut.v1.UserSignUpRequest} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.UserSignUpRequest, 1));
};


/**
 * @param {?proto.palm.plugins.nut.v1.UserSignUpRequest|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteInstallRequest} returns this
*/
proto.palm.plugins.nut.v1.SiteInstallRequest.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteInstallRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteInstallRequest.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteInstallRequest.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest}
 */
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest;
  return proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest}
 */
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest} returns this
 */
proto.palm.plugins.nut.v1.SiteSetUserPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.repeatedFields_ = [1];



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
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteUserIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteUserIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.plugins.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteUserIndexResponse;
  return proto.palm.plugins.nut.v1.SiteUserIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteUserIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.plugins.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteUserIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteUserIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    providerType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastSignInAt: (f = msg.getLastSignInAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastSignInIp: jspb.Message.getFieldWithDefault(msg, 12, ""),
    currentSignInAt: (f = msg.getCurrentSignInAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    currentSignInIp: jspb.Message.getFieldWithDefault(msg, 14, ""),
    signInCount: jspb.Message.getFieldWithDefault(msg, 19, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 21, ""),
    timeZone: jspb.Message.getFieldWithDefault(msg, 22, ""),
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
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item;
  return proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderType(value);
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
      msg.setTimeZone(value);
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
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUid();
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
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProviderType();
  if (f.length > 0) {
    writer.writeString(
      6,
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
  f = message.getTimeZone();
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
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uid = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nick_name = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string real_name = 5;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string provider_type = 6;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getProviderType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setProviderType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp last_sign_in_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getLastSignInAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setLastSignInAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearLastSignInAt = function() {
  return this.setLastSignInAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasLastSignInAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string last_sign_in_ip = 12;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getLastSignInIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setLastSignInIp = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearLastSignInIp = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasLastSignInIp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp current_sign_in_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getCurrentSignInAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setCurrentSignInAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearCurrentSignInAt = function() {
  return this.setCurrentSignInAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasCurrentSignInAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string current_sign_in_ip = 14;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getCurrentSignInIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setCurrentSignInIp = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearCurrentSignInIp = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasCurrentSignInIp = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 sign_in_count = 19;
 * @return {number}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getSignInCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setSignInCount = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string lang = 21;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string time_zone = 22;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string avatar = 23;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional google.protobuf.Timestamp confirmed_at = 27;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getConfirmedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 27));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setConfirmedAt = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearConfirmedAt = function() {
  return this.setConfirmedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasConfirmedAt = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional google.protobuf.Timestamp locked_at = 28;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getLockedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 28));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setLockedAt = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearLockedAt = function() {
  return this.setLockedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasLockedAt = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional google.protobuf.Timestamp deleted_at = 29;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.getDeletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 29));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item>}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item>} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.plugins.nut.v1.SiteUserIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.plugins.nut.v1.Pagination}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.plugins.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.plugins.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteUserIndexResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteUserIndexResponse.prototype.hasPagination = function() {
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
proto.palm.plugins.nut.v1.GoogleProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.GoogleProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.GoogleProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.GoogleProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteVerifyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reCaptcha: (f = msg.getReCaptcha()) && proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.toObject(includeInstance, f)
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
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile}
 */
proto.palm.plugins.nut.v1.GoogleProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.GoogleProfile;
  return proto.palm.plugins.nut.v1.GoogleProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.GoogleProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile}
 */
proto.palm.plugins.nut.v1.GoogleProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSiteVerifyId(value);
      break;
    case 2:
      var value = new proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha;
      reader.readMessage(value,proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader);
      msg.setReCaptcha(value);
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
proto.palm.plugins.nut.v1.GoogleProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.GoogleProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.GoogleProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.GoogleProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReCaptcha();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha;
  return proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSiteKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
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
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSiteKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string site_key = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.prototype.getSiteKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha} returns this
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.prototype.setSiteKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha} returns this
 */
proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string site_verify_id = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.GoogleProfile.prototype.getSiteVerifyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile} returns this
 */
proto.palm.plugins.nut.v1.GoogleProfile.prototype.setSiteVerifyId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile} returns this
 */
proto.palm.plugins.nut.v1.GoogleProfile.prototype.clearSiteVerifyId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.GoogleProfile.prototype.hasSiteVerifyId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReCaptcha re_captcha = 2;
 * @return {?proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.plugins.nut.v1.GoogleProfile.prototype.getReCaptcha = function() {
  return /** @type{?proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha, 2));
};


/**
 * @param {?proto.palm.plugins.nut.v1.GoogleProfile.ReCaptcha|undefined} value
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile} returns this
*/
proto.palm.plugins.nut.v1.GoogleProfile.prototype.setReCaptcha = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.GoogleProfile} returns this
 */
proto.palm.plugins.nut.v1.GoogleProfile.prototype.clearReCaptcha = function() {
  return this.setReCaptcha(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.GoogleProfile.prototype.hasReCaptcha = function() {
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
proto.palm.plugins.nut.v1.BaiduProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.BaiduProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.BaiduProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.BaiduProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteVerifyId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.plugins.nut.v1.BaiduProfile}
 */
proto.palm.plugins.nut.v1.BaiduProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.BaiduProfile;
  return proto.palm.plugins.nut.v1.BaiduProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.BaiduProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.BaiduProfile}
 */
proto.palm.plugins.nut.v1.BaiduProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSiteVerifyId(value);
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
proto.palm.plugins.nut.v1.BaiduProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.BaiduProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.BaiduProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.BaiduProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string site_verify_id = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.BaiduProfile.prototype.getSiteVerifyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.BaiduProfile} returns this
 */
proto.palm.plugins.nut.v1.BaiduProfile.prototype.setSiteVerifyId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.BaiduProfile} returns this
 */
proto.palm.plugins.nut.v1.BaiduProfile.prototype.clearSiteVerifyId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.BaiduProfile.prototype.hasSiteVerifyId = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.palm.plugins.nut.v1.BingProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.BingProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.BingProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.BingProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteVerifyId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.plugins.nut.v1.BingProfile}
 */
proto.palm.plugins.nut.v1.BingProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.BingProfile;
  return proto.palm.plugins.nut.v1.BingProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.BingProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.BingProfile}
 */
proto.palm.plugins.nut.v1.BingProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSiteVerifyId(value);
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
proto.palm.plugins.nut.v1.BingProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.BingProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.BingProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.BingProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string site_verify_id = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.BingProfile.prototype.getSiteVerifyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.BingProfile} returns this
 */
proto.palm.plugins.nut.v1.BingProfile.prototype.setSiteVerifyId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.BingProfile} returns this
 */
proto.palm.plugins.nut.v1.BingProfile.prototype.clearSiteVerifyId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.BingProfile.prototype.hasSiteVerifyId = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.palm.plugins.nut.v1.SmtpProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SmtpProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SmtpProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SmtpProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    user: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cc: jspb.Message.getFieldWithDefault(msg, 5, ""),
    bcc: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile}
 */
proto.palm.plugins.nut.v1.SmtpProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SmtpProfile;
  return proto.palm.plugins.nut.v1.SmtpProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SmtpProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile}
 */
proto.palm.plugins.nut.v1.SmtpProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCc(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcc(value);
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
proto.palm.plugins.nut.v1.SmtpProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SmtpProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SmtpProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SmtpProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUser();
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
  f = message.getCc();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBcc();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile} returns this
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile} returns this
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string user = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile} returns this
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile} returns this
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cc = 5;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.getCc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile} returns this
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.setCc = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string bcc = 6;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.getBcc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SmtpProfile} returns this
 */
proto.palm.plugins.nut.v1.SmtpProfile.prototype.setBcc = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.repeatedFields_ = [21];



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
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postgresql: (f = msg.getPostgresql()) && proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.toObject(includeInstance, f),
    mysql: (f = msg.getMysql()) && proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.toObject(includeInstance, f),
    redis: (f = msg.getRedis()) && proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.toObject(includeInstance, f),
    rabbitmq: (f = msg.getRabbitmq()) && proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.toObject(includeInstance, f),
    elasticsearch: (f = msg.getElasticsearch()) && proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.toObject(includeInstance, f),
    system: (f = msg.getSystem()) && proto.palm.plugins.nut.v1.SiteStatusResponse.System.toObject(includeInstance, f),
    healthesList: jspb.Message.toObjectList(msg.getHealthesList(),
    proto.palm.plugins.nut.v1.SiteStatusResponse.Health.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader);
      msg.setPostgresql(value);
      break;
    case 2:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.MySql;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader);
      msg.setMysql(value);
      break;
    case 3:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.Redis;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader);
      msg.setRedis(value);
      break;
    case 4:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader);
      msg.setRabbitmq(value);
      break;
    case 5:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.deserializeBinaryFromReader);
      msg.setElasticsearch(value);
      break;
    case 11:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.System;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.System.deserializeBinaryFromReader);
      msg.setSystem(value);
      break;
    case 21:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.Health;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.Health.deserializeBinaryFromReader);
      msg.addHealthes(value);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostgresql();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter
    );
  }
  f = message.getMysql();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.serializeBinaryToWriter
    );
  }
  f = message.getRedis();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.serializeBinaryToWriter
    );
  }
  f = message.getRabbitmq();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter
    );
  }
  f = message.getElasticsearch();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.serializeBinaryToWriter
    );
  }
  f = message.getSystem();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.System.serializeBinaryToWriter
    );
  }
  f = message.getHealthesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.Health.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Database.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.Database;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Database.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.Database.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string size = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Database.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.repeatedFields_ = [9];



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
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    now: (f = msg.getNow()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    databasesList: jspb.Message.toObjectList(msg.getDatabasesList(),
    proto.palm.plugins.nut.v1.SiteStatusResponse.Database.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNow(value);
      break;
    case 9:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.Database;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.Database.deserializeBinaryFromReader);
      msg.addDatabases(value);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNow();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDatabasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.Database.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp now = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.getNow = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.setNow = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.clearNow = function() {
  return this.setNow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.hasNow = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Database databases = 9;
 * @return {!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Database>}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.getDatabasesList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Database>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.Database, 9));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Database>} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.setDatabasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Database}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.addDatabases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.palm.plugins.nut.v1.SiteStatusResponse.Database, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql.prototype.clearDatabasesList = function() {
  return this.setDatabasesList([]);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.MySql} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFieldWithDefault(msg, 1, 0),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.MySql}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.MySql;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.MySql} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.MySql}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.MySql} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 size = 1;
 * @return {number}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.MySql} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.MySql} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.MySql.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.repeatedFields_ = [2];



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
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.toObject, includeInstance)
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.Redis;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 2:
      var value = new proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item;
      reader.readMessage(value,proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ttl = 2;
 * @return {number}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string info = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item>}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item, 2));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item>} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Redis} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Redis.prototype.clearItemsList = function() {
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
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocol: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string protocol = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq.prototype.setProtocol = function(value) {
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
proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Health.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.Health;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.Health.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.Health.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.Health.prototype.setStatus = function(value) {
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
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.plugins.nut.v1.SiteStatusResponse.System.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cpu: jspb.Message.getFieldWithDefault(msg, 2, ""),
    memory: jspb.Message.getFieldWithDefault(msg, 3, ""),
    boot: jspb.Message.getFieldWithDefault(msg, 4, ""),
    disk: jspb.Message.getFieldWithDefault(msg, 5, ""),
    load: jspb.Message.getFieldWithDefault(msg, 6, ""),
    fs: jspb.Message.getFieldWithDefault(msg, 7, ""),
    swap: jspb.Message.getFieldWithDefault(msg, 8, ""),
    uptime: jspb.Message.getFieldWithDefault(msg, 9, ""),
    network: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.plugins.nut.v1.SiteStatusResponse.System;
  return proto.palm.plugins.nut.v1.SiteStatusResponse.System.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpu(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBoot(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisk(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoad(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFs(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwap(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUptime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
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
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.plugins.nut.v1.SiteStatusResponse.System.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCpu();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMemory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBoot();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisk();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLoad();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFs();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSwap();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUptime();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cpu = 2;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getCpu = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setCpu = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string memory = 3;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getMemory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setMemory = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string boot = 4;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getBoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setBoot = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string disk = 5;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getDisk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setDisk = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string load = 6;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getLoad = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setLoad = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fs = 7;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getFs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setFs = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string swap = 8;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getSwap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setSwap = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string uptime = 9;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getUptime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setUptime = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string network = 10;
 * @return {string}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.System.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional PostgreSql postgresql = 1;
 * @return {?proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.getPostgresql = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql, 1));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteStatusResponse.PostgreSql|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.setPostgresql = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.clearPostgresql = function() {
  return this.setPostgresql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.hasPostgresql = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MySql mysql = 2;
 * @return {?proto.palm.plugins.nut.v1.SiteStatusResponse.MySql}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.getMysql = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteStatusResponse.MySql} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.MySql, 2));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteStatusResponse.MySql|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.setMysql = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.clearMysql = function() {
  return this.setMysql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.hasMysql = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Redis redis = 3;
 * @return {?proto.palm.plugins.nut.v1.SiteStatusResponse.Redis}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.getRedis = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteStatusResponse.Redis} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.Redis, 3));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteStatusResponse.Redis|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.setRedis = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.clearRedis = function() {
  return this.setRedis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.hasRedis = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RabbitMq rabbitmq = 4;
 * @return {?proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.getRabbitmq = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq, 4));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteStatusResponse.RabbitMq|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.setRabbitmq = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.clearRabbitmq = function() {
  return this.setRabbitmq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.hasRabbitmq = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ElasticSearch elasticsearch = 5;
 * @return {?proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.getElasticsearch = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch, 5));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteStatusResponse.ElasticSearch|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.setElasticsearch = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.clearElasticsearch = function() {
  return this.setElasticsearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.hasElasticsearch = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional System system = 11;
 * @return {?proto.palm.plugins.nut.v1.SiteStatusResponse.System}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.getSystem = function() {
  return /** @type{?proto.palm.plugins.nut.v1.SiteStatusResponse.System} */ (
    jspb.Message.getWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.System, 11));
};


/**
 * @param {?proto.palm.plugins.nut.v1.SiteStatusResponse.System|undefined} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.setSystem = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.clearSystem = function() {
  return this.setSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Health healthes = 21;
 * @return {!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Health>}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.getHealthesList = function() {
  return /** @type{!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Health>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.plugins.nut.v1.SiteStatusResponse.Health, 21));
};


/**
 * @param {!Array<!proto.palm.plugins.nut.v1.SiteStatusResponse.Health>} value
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.setHealthesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse.Health}
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.addHealthes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.palm.plugins.nut.v1.SiteStatusResponse.Health, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.plugins.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.plugins.nut.v1.SiteStatusResponse.prototype.clearHealthesList = function() {
  return this.setHealthesList([]);
};


goog.object.extend(exports, proto.palm.plugins.nut.v1);
