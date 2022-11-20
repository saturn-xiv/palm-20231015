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
goog.exportSymbol('proto.palm.nut.v1.AttachmentIndexResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.AttachmentIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.AttachmentShowRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.AttachmentShowResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.BaiduProfile', null, global);
goog.exportSymbol('proto.palm.nut.v1.BaiduProfile.SiteVerify', null, global);
goog.exportSymbol('proto.palm.nut.v1.BingProfile', null, global);
goog.exportSymbol('proto.palm.nut.v1.CategoryCreateRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.CategoryCreateRequest.ByCase', null, global);
goog.exportSymbol('proto.palm.nut.v1.CategoryIndexResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.CategoryIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.CategoryUpdateRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.EmailTask', null, global);
goog.exportSymbol('proto.palm.nut.v1.EmailTask.Address', null, global);
goog.exportSymbol('proto.palm.nut.v1.EmailTask.Attachment', null, global);
goog.exportSymbol('proto.palm.nut.v1.EmailTask.ContentType', null, global);
goog.exportSymbol('proto.palm.nut.v1.GoogleProfile', null, global);
goog.exportSymbol('proto.palm.nut.v1.GoogleProfile.ReCaptcha', null, global);
goog.exportSymbol('proto.palm.nut.v1.IdRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.IndexNotificationResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.IndexNotificationResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.IndexNotificationResponse.Item.MessageCase', null, global);
goog.exportSymbol('proto.palm.nut.v1.IndexNowPingRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.IndexNowProfile', null, global);
goog.exportSymbol('proto.palm.nut.v1.LeaveWordIndexResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.LeaveWordIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.LocaleByLangRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.LocaleByLangResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.LocaleGetRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.LocaleIndexResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.LocaleIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.LocaleSetRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.MediaContent', null, global);
goog.exportSymbol('proto.palm.nut.v1.MediaContent.Editor', null, global);
goog.exportSymbol('proto.palm.nut.v1.MediaContent.Status', null, global);
goog.exportSymbol('proto.palm.nut.v1.MinioProfile', null, global);
goog.exportSymbol('proto.palm.nut.v1.Pager', null, global);
goog.exportSymbol('proto.palm.nut.v1.Pagination', null, global);
goog.exportSymbol('proto.palm.nut.v1.Permission', null, global);
goog.exportSymbol('proto.palm.nut.v1.Permission.SubjectCase', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyAddRoleRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyAddRoleRequest.NestedCase', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyAddRolesForUserRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyDeleteRolesForUserRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyImplicitRolesForUserResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyPermissionList', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyRoleListResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyRoleListResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyRolesForUserResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyRolesForUserResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyUsersForRoleResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.PolicyUsersForRoleResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.Resource', null, global);
goog.exportSymbol('proto.palm.nut.v1.ShorterLinkCreateRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.ShorterLinkIndexResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.ShorterLinkIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.ShorterLinkUpdateRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteInstallRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteLayoutResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteLayoutResponse.Author', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteMaintenanceModeRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteMaintenanceModeRequest.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteMinioTestResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteSetCopyrightRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteSetInfoRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteSetKeywordsRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteSetLogoRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteSmtpTestRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.Database', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.Health', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.MySql', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.OpenSearch', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.PostgreSql', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.RabbitMq', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.Redis', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.Redis.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteStatusResponse.System', null, global);
goog.exportSymbol('proto.palm.nut.v1.SiteTwilioTestRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SitemapPingRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.SmsTask', null, global);
goog.exportSymbol('proto.palm.nut.v1.SmtpProfile', null, global);
goog.exportSymbol('proto.palm.nut.v1.SmtpProfile.AuthMethod', null, global);
goog.exportSymbol('proto.palm.nut.v1.TagCreateRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.TagIndexResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.TagIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.TagUpdateRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.TwilioProfile', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserChangePasswordRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserDetail', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserGetProfileResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserIndexResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserLogsResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserLogsResponse.Item', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserLogsResponse.Item.Level', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserProvider', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserProvider.Type', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserQueryRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserQueryRequest.UserCase', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserResetPasswordRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserSetPasswordRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserSetProfileRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserSignInRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserSignInResponse', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserSignInResponse.Payload', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserSignUpRequest', null, global);
goog.exportSymbol('proto.palm.nut.v1.UserTokenRequest', null, global);
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
proto.palm.nut.v1.IdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.IdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.IdRequest.displayName = 'proto.palm.nut.v1.IdRequest';
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
proto.palm.nut.v1.Pager = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.Pager, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.Pager.displayName = 'proto.palm.nut.v1.Pager';
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
proto.palm.nut.v1.Pagination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.Pagination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.Pagination.displayName = 'proto.palm.nut.v1.Pagination';
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
proto.palm.nut.v1.MediaContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.MediaContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.MediaContent.displayName = 'proto.palm.nut.v1.MediaContent';
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
proto.palm.nut.v1.UserDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserDetail.displayName = 'proto.palm.nut.v1.UserDetail';
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
proto.palm.nut.v1.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.Resource.displayName = 'proto.palm.nut.v1.Resource';
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
proto.palm.nut.v1.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.nut.v1.Permission.oneofGroups_);
};
goog.inherits(proto.palm.nut.v1.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.Permission.displayName = 'proto.palm.nut.v1.Permission';
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
proto.palm.nut.v1.UserSignInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserSignInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserSignInRequest.displayName = 'proto.palm.nut.v1.UserSignInRequest';
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
proto.palm.nut.v1.UserQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.nut.v1.UserQueryRequest.oneofGroups_);
};
goog.inherits(proto.palm.nut.v1.UserQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserQueryRequest.displayName = 'proto.palm.nut.v1.UserQueryRequest';
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
proto.palm.nut.v1.UserSignInResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.UserSignInResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.UserSignInResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserSignInResponse.displayName = 'proto.palm.nut.v1.UserSignInResponse';
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
proto.palm.nut.v1.UserSignInResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserSignInResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserSignInResponse.Payload.displayName = 'proto.palm.nut.v1.UserSignInResponse.Payload';
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
proto.palm.nut.v1.UserSignUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserSignUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserSignUpRequest.displayName = 'proto.palm.nut.v1.UserSignUpRequest';
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
proto.palm.nut.v1.UserTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserTokenRequest.displayName = 'proto.palm.nut.v1.UserTokenRequest';
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
proto.palm.nut.v1.UserResetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserResetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserResetPasswordRequest.displayName = 'proto.palm.nut.v1.UserResetPasswordRequest';
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
proto.palm.nut.v1.UserSetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserSetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserSetPasswordRequest.displayName = 'proto.palm.nut.v1.UserSetPasswordRequest';
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
proto.palm.nut.v1.UserSetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserSetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserSetProfileRequest.displayName = 'proto.palm.nut.v1.UserSetProfileRequest';
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
proto.palm.nut.v1.UserGetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserGetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserGetProfileResponse.displayName = 'proto.palm.nut.v1.UserGetProfileResponse';
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
proto.palm.nut.v1.UserLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.UserLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.UserLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserLogsResponse.displayName = 'proto.palm.nut.v1.UserLogsResponse';
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
proto.palm.nut.v1.UserLogsResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserLogsResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserLogsResponse.Item.displayName = 'proto.palm.nut.v1.UserLogsResponse.Item';
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
proto.palm.nut.v1.UserChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserChangePasswordRequest.displayName = 'proto.palm.nut.v1.UserChangePasswordRequest';
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
proto.palm.nut.v1.UserProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserProvider.displayName = 'proto.palm.nut.v1.UserProvider';
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
proto.palm.nut.v1.UserIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.UserIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.UserIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserIndexResponse.displayName = 'proto.palm.nut.v1.UserIndexResponse';
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
proto.palm.nut.v1.UserIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.UserIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.UserIndexResponse.Item.displayName = 'proto.palm.nut.v1.UserIndexResponse.Item';
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
proto.palm.nut.v1.AttachmentShowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.AttachmentShowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.AttachmentShowRequest.displayName = 'proto.palm.nut.v1.AttachmentShowRequest';
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
proto.palm.nut.v1.AttachmentShowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.AttachmentShowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.AttachmentShowResponse.displayName = 'proto.palm.nut.v1.AttachmentShowResponse';
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
proto.palm.nut.v1.AttachmentIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.AttachmentIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.AttachmentIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.AttachmentIndexResponse.displayName = 'proto.palm.nut.v1.AttachmentIndexResponse';
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
proto.palm.nut.v1.AttachmentIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.AttachmentIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.AttachmentIndexResponse.Item.displayName = 'proto.palm.nut.v1.AttachmentIndexResponse.Item';
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
proto.palm.nut.v1.PolicyAddRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.nut.v1.PolicyAddRoleRequest.oneofGroups_);
};
goog.inherits(proto.palm.nut.v1.PolicyAddRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyAddRoleRequest.displayName = 'proto.palm.nut.v1.PolicyAddRoleRequest';
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
proto.palm.nut.v1.PolicyUsersForRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyUsersForRoleResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyUsersForRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyUsersForRoleResponse.displayName = 'proto.palm.nut.v1.PolicyUsersForRoleResponse';
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
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.PolicyUsersForRoleResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.displayName = 'proto.palm.nut.v1.PolicyUsersForRoleResponse.Item';
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
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.displayName = 'proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse';
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
proto.palm.nut.v1.PolicyRolesForUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyRolesForUserResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyRolesForUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyRolesForUserResponse.displayName = 'proto.palm.nut.v1.PolicyRolesForUserResponse';
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
proto.palm.nut.v1.PolicyRolesForUserResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.PolicyRolesForUserResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyRolesForUserResponse.Item.displayName = 'proto.palm.nut.v1.PolicyRolesForUserResponse.Item';
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
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyImplicitRolesForUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.displayName = 'proto.palm.nut.v1.PolicyImplicitRolesForUserResponse';
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
proto.palm.nut.v1.PolicyRoleListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyRoleListResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyRoleListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyRoleListResponse.displayName = 'proto.palm.nut.v1.PolicyRoleListResponse';
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
proto.palm.nut.v1.PolicyRoleListResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.PolicyRoleListResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyRoleListResponse.Item.displayName = 'proto.palm.nut.v1.PolicyRoleListResponse.Item';
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
proto.palm.nut.v1.PolicyAddRolesForUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyAddRolesForUserRequest.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyAddRolesForUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyAddRolesForUserRequest.displayName = 'proto.palm.nut.v1.PolicyAddRolesForUserRequest';
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
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyDeleteRolesForUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.displayName = 'proto.palm.nut.v1.PolicyDeleteRolesForUserRequest';
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
proto.palm.nut.v1.PolicyPermissionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.PolicyPermissionList.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.PolicyPermissionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.PolicyPermissionList.displayName = 'proto.palm.nut.v1.PolicyPermissionList';
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
proto.palm.nut.v1.LocaleByLangRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.LocaleByLangRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LocaleByLangRequest.displayName = 'proto.palm.nut.v1.LocaleByLangRequest';
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
proto.palm.nut.v1.LocaleByLangResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.LocaleByLangResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.LocaleByLangResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LocaleByLangResponse.displayName = 'proto.palm.nut.v1.LocaleByLangResponse';
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
proto.palm.nut.v1.LocaleIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.LocaleIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.LocaleIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LocaleIndexResponse.displayName = 'proto.palm.nut.v1.LocaleIndexResponse';
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
proto.palm.nut.v1.LocaleIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.LocaleIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LocaleIndexResponse.Item.displayName = 'proto.palm.nut.v1.LocaleIndexResponse.Item';
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
proto.palm.nut.v1.LocaleGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.LocaleGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LocaleGetRequest.displayName = 'proto.palm.nut.v1.LocaleGetRequest';
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
proto.palm.nut.v1.LocaleSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.LocaleSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LocaleSetRequest.displayName = 'proto.palm.nut.v1.LocaleSetRequest';
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
proto.palm.nut.v1.IndexNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.IndexNotificationResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.IndexNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.IndexNotificationResponse.displayName = 'proto.palm.nut.v1.IndexNotificationResponse';
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
proto.palm.nut.v1.IndexNotificationResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.nut.v1.IndexNotificationResponse.Item.oneofGroups_);
};
goog.inherits(proto.palm.nut.v1.IndexNotificationResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.IndexNotificationResponse.Item.displayName = 'proto.palm.nut.v1.IndexNotificationResponse.Item';
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
proto.palm.nut.v1.LeaveWordIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.LeaveWordIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.LeaveWordIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LeaveWordIndexResponse.displayName = 'proto.palm.nut.v1.LeaveWordIndexResponse';
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
proto.palm.nut.v1.LeaveWordIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.LeaveWordIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.LeaveWordIndexResponse.Item.displayName = 'proto.palm.nut.v1.LeaveWordIndexResponse.Item';
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
proto.palm.nut.v1.IndexNowProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.IndexNowProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.IndexNowProfile.displayName = 'proto.palm.nut.v1.IndexNowProfile';
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
proto.palm.nut.v1.IndexNowPingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.IndexNowPingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.IndexNowPingRequest.displayName = 'proto.palm.nut.v1.IndexNowPingRequest';
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
proto.palm.nut.v1.SitemapPingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SitemapPingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SitemapPingRequest.displayName = 'proto.palm.nut.v1.SitemapPingRequest';
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
proto.palm.nut.v1.SiteMaintenanceModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteMaintenanceModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteMaintenanceModeRequest.displayName = 'proto.palm.nut.v1.SiteMaintenanceModeRequest';
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
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteMaintenanceModeRequest.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.displayName = 'proto.palm.nut.v1.SiteMaintenanceModeRequest.Item';
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
proto.palm.nut.v1.SiteInstallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteInstallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteInstallRequest.displayName = 'proto.palm.nut.v1.SiteInstallRequest';
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
proto.palm.nut.v1.MinioProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.MinioProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.MinioProfile.displayName = 'proto.palm.nut.v1.MinioProfile';
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
proto.palm.nut.v1.SiteMinioTestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SiteMinioTestResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SiteMinioTestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteMinioTestResponse.displayName = 'proto.palm.nut.v1.SiteMinioTestResponse';
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
proto.palm.nut.v1.TwilioProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.TwilioProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.TwilioProfile.displayName = 'proto.palm.nut.v1.TwilioProfile';
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
proto.palm.nut.v1.SmtpProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SmtpProfile.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SmtpProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SmtpProfile.displayName = 'proto.palm.nut.v1.SmtpProfile';
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
proto.palm.nut.v1.EmailTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.EmailTask.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.EmailTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.EmailTask.displayName = 'proto.palm.nut.v1.EmailTask';
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
proto.palm.nut.v1.EmailTask.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.EmailTask.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.EmailTask.Address.displayName = 'proto.palm.nut.v1.EmailTask.Address';
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
proto.palm.nut.v1.EmailTask.Attachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.EmailTask.Attachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.EmailTask.Attachment.displayName = 'proto.palm.nut.v1.EmailTask.Attachment';
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
proto.palm.nut.v1.SiteTwilioTestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteTwilioTestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteTwilioTestRequest.displayName = 'proto.palm.nut.v1.SiteTwilioTestRequest';
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
proto.palm.nut.v1.SiteSmtpTestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteSmtpTestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteSmtpTestRequest.displayName = 'proto.palm.nut.v1.SiteSmtpTestRequest';
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
proto.palm.nut.v1.SiteSetLogoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteSetLogoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteSetLogoRequest.displayName = 'proto.palm.nut.v1.SiteSetLogoRequest';
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
proto.palm.nut.v1.SiteSetCopyrightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteSetCopyrightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteSetCopyrightRequest.displayName = 'proto.palm.nut.v1.SiteSetCopyrightRequest';
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
proto.palm.nut.v1.SiteSetKeywordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SiteSetKeywordsRequest.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SiteSetKeywordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteSetKeywordsRequest.displayName = 'proto.palm.nut.v1.SiteSetKeywordsRequest';
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
proto.palm.nut.v1.SiteSetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteSetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteSetInfoRequest.displayName = 'proto.palm.nut.v1.SiteSetInfoRequest';
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
proto.palm.nut.v1.SiteLayoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SiteLayoutResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SiteLayoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteLayoutResponse.displayName = 'proto.palm.nut.v1.SiteLayoutResponse';
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
proto.palm.nut.v1.SiteLayoutResponse.Author = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteLayoutResponse.Author, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteLayoutResponse.Author.displayName = 'proto.palm.nut.v1.SiteLayoutResponse.Author';
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
proto.palm.nut.v1.GoogleProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.GoogleProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.GoogleProfile.displayName = 'proto.palm.nut.v1.GoogleProfile';
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
proto.palm.nut.v1.GoogleProfile.ReCaptcha = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.GoogleProfile.ReCaptcha, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.GoogleProfile.ReCaptcha.displayName = 'proto.palm.nut.v1.GoogleProfile.ReCaptcha';
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
proto.palm.nut.v1.BaiduProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.BaiduProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.BaiduProfile.displayName = 'proto.palm.nut.v1.BaiduProfile';
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
proto.palm.nut.v1.BaiduProfile.SiteVerify = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.BaiduProfile.SiteVerify, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.BaiduProfile.SiteVerify.displayName = 'proto.palm.nut.v1.BaiduProfile.SiteVerify';
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
proto.palm.nut.v1.BingProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.BingProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.BingProfile.displayName = 'proto.palm.nut.v1.BingProfile';
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
proto.palm.nut.v1.SmsTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SmsTask.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SmsTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SmsTask.displayName = 'proto.palm.nut.v1.SmsTask';
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
proto.palm.nut.v1.SiteStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SiteStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.displayName = 'proto.palm.nut.v1.SiteStatusResponse';
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
proto.palm.nut.v1.SiteStatusResponse.Database = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.Database, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.Database.displayName = 'proto.palm.nut.v1.SiteStatusResponse.Database';
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
proto.palm.nut.v1.SiteStatusResponse.PostgreSql = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SiteStatusResponse.PostgreSql.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.PostgreSql, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.PostgreSql.displayName = 'proto.palm.nut.v1.SiteStatusResponse.PostgreSql';
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
proto.palm.nut.v1.SiteStatusResponse.MySql = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.MySql, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.MySql.displayName = 'proto.palm.nut.v1.SiteStatusResponse.MySql';
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
proto.palm.nut.v1.SiteStatusResponse.Redis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.SiteStatusResponse.Redis.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.Redis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.Redis.displayName = 'proto.palm.nut.v1.SiteStatusResponse.Redis';
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
proto.palm.nut.v1.SiteStatusResponse.Redis.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.Redis.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.Redis.Item.displayName = 'proto.palm.nut.v1.SiteStatusResponse.Redis.Item';
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
proto.palm.nut.v1.SiteStatusResponse.RabbitMq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.RabbitMq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.RabbitMq.displayName = 'proto.palm.nut.v1.SiteStatusResponse.RabbitMq';
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
proto.palm.nut.v1.SiteStatusResponse.OpenSearch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.OpenSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.OpenSearch.displayName = 'proto.palm.nut.v1.SiteStatusResponse.OpenSearch';
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
proto.palm.nut.v1.SiteStatusResponse.Health = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.Health, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.Health.displayName = 'proto.palm.nut.v1.SiteStatusResponse.Health';
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
proto.palm.nut.v1.SiteStatusResponse.System = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.SiteStatusResponse.System, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.SiteStatusResponse.System.displayName = 'proto.palm.nut.v1.SiteStatusResponse.System';
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
proto.palm.nut.v1.ShorterLinkIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.ShorterLinkIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.ShorterLinkIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.ShorterLinkIndexResponse.displayName = 'proto.palm.nut.v1.ShorterLinkIndexResponse';
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
proto.palm.nut.v1.ShorterLinkIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.ShorterLinkIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.ShorterLinkIndexResponse.Item.displayName = 'proto.palm.nut.v1.ShorterLinkIndexResponse.Item';
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
proto.palm.nut.v1.ShorterLinkCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.ShorterLinkCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.ShorterLinkCreateRequest.displayName = 'proto.palm.nut.v1.ShorterLinkCreateRequest';
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
proto.palm.nut.v1.ShorterLinkUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.ShorterLinkUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.ShorterLinkUpdateRequest.displayName = 'proto.palm.nut.v1.ShorterLinkUpdateRequest';
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
proto.palm.nut.v1.TagIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.TagIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.TagIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.TagIndexResponse.displayName = 'proto.palm.nut.v1.TagIndexResponse';
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
proto.palm.nut.v1.TagIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.TagIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.TagIndexResponse.Item.displayName = 'proto.palm.nut.v1.TagIndexResponse.Item';
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
proto.palm.nut.v1.TagCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.TagCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.TagCreateRequest.displayName = 'proto.palm.nut.v1.TagCreateRequest';
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
proto.palm.nut.v1.TagUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.TagUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.TagUpdateRequest.displayName = 'proto.palm.nut.v1.TagUpdateRequest';
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
proto.palm.nut.v1.CategoryIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.nut.v1.CategoryIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.nut.v1.CategoryIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.CategoryIndexResponse.displayName = 'proto.palm.nut.v1.CategoryIndexResponse';
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
proto.palm.nut.v1.CategoryIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.CategoryIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.CategoryIndexResponse.Item.displayName = 'proto.palm.nut.v1.CategoryIndexResponse.Item';
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
proto.palm.nut.v1.CategoryCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.nut.v1.CategoryCreateRequest.oneofGroups_);
};
goog.inherits(proto.palm.nut.v1.CategoryCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.CategoryCreateRequest.displayName = 'proto.palm.nut.v1.CategoryCreateRequest';
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
proto.palm.nut.v1.CategoryUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.nut.v1.CategoryUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.nut.v1.CategoryUpdateRequest.displayName = 'proto.palm.nut.v1.CategoryUpdateRequest';
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
proto.palm.nut.v1.IdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.IdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.IdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.IdRequest}
 */
proto.palm.nut.v1.IdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.IdRequest;
  return proto.palm.nut.v1.IdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.IdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.IdRequest}
 */
proto.palm.nut.v1.IdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.IdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.IdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.IdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.IdRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.IdRequest} returns this
 */
proto.palm.nut.v1.IdRequest.prototype.setId = function(value) {
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
proto.palm.nut.v1.Pager.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.Pager.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.Pager} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Pager.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.Pager}
 */
proto.palm.nut.v1.Pager.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.Pager;
  return proto.palm.nut.v1.Pager.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.Pager} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.Pager}
 */
proto.palm.nut.v1.Pager.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.Pager.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.Pager.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.Pager} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Pager.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.Pager.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Pager} returns this
 */
proto.palm.nut.v1.Pager.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.palm.nut.v1.Pager.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Pager} returns this
 */
proto.palm.nut.v1.Pager.prototype.setSize = function(value) {
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
proto.palm.nut.v1.Pagination.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.Pagination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.Pagination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Pagination.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.Pagination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.Pagination;
  return proto.palm.nut.v1.Pagination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.Pagination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.Pagination.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.Pagination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.Pagination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.Pagination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Pagination.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.Pagination.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Pagination} returns this
 */
proto.palm.nut.v1.Pagination.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.palm.nut.v1.Pagination.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Pagination} returns this
 */
proto.palm.nut.v1.Pagination.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.palm.nut.v1.Pagination.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Pagination} returns this
 */
proto.palm.nut.v1.Pagination.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool has_next = 11;
 * @return {boolean}
 */
proto.palm.nut.v1.Pagination.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.nut.v1.Pagination} returns this
 */
proto.palm.nut.v1.Pagination.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool has_previous = 12;
 * @return {boolean}
 */
proto.palm.nut.v1.Pagination.prototype.getHasPrevious = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.nut.v1.Pagination} returns this
 */
proto.palm.nut.v1.Pagination.prototype.setHasPrevious = function(value) {
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
proto.palm.nut.v1.MediaContent.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.MediaContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.MediaContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.MediaContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    editor: jspb.Message.getFieldWithDefault(msg, 1, 0),
    body: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    publishedAt: (f = msg.getPublishedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.MediaContent}
 */
proto.palm.nut.v1.MediaContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.MediaContent;
  return proto.palm.nut.v1.MediaContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.MediaContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.MediaContent}
 */
proto.palm.nut.v1.MediaContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.palm.nut.v1.MediaContent.Editor} */ (reader.readEnum());
      msg.setEditor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 3:
      var value = /** @type {!proto.palm.nut.v1.MediaContent.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPublishedAt(value);
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
proto.palm.nut.v1.MediaContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.MediaContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.MediaContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.MediaContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEditor();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPublishedAt();
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
proto.palm.nut.v1.MediaContent.Editor = {
  TEXTAREA: 0,
  QUILL: 1
};

/**
 * @enum {number}
 */
proto.palm.nut.v1.MediaContent.Status = {
  PUBLISHED: 0,
  DRAFT: 1,
  PENDING: 2,
  PRIVATE: 3,
  FUTURE: 4,
  TRASH: 99
};

/**
 * optional Editor editor = 1;
 * @return {!proto.palm.nut.v1.MediaContent.Editor}
 */
proto.palm.nut.v1.MediaContent.prototype.getEditor = function() {
  return /** @type {!proto.palm.nut.v1.MediaContent.Editor} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.palm.nut.v1.MediaContent.Editor} value
 * @return {!proto.palm.nut.v1.MediaContent} returns this
 */
proto.palm.nut.v1.MediaContent.prototype.setEditor = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string body = 2;
 * @return {string}
 */
proto.palm.nut.v1.MediaContent.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.MediaContent} returns this
 */
proto.palm.nut.v1.MediaContent.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Status status = 3;
 * @return {!proto.palm.nut.v1.MediaContent.Status}
 */
proto.palm.nut.v1.MediaContent.prototype.getStatus = function() {
  return /** @type {!proto.palm.nut.v1.MediaContent.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.palm.nut.v1.MediaContent.Status} value
 * @return {!proto.palm.nut.v1.MediaContent} returns this
 */
proto.palm.nut.v1.MediaContent.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp published_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.MediaContent.prototype.getPublishedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.MediaContent} returns this
*/
proto.palm.nut.v1.MediaContent.prototype.setPublishedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.MediaContent} returns this
 */
proto.palm.nut.v1.MediaContent.prototype.clearPublishedAt = function() {
  return this.setPublishedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.MediaContent.prototype.hasPublishedAt = function() {
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
proto.palm.nut.v1.UserDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.palm.nut.v1.UserDetail}
 */
proto.palm.nut.v1.UserDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserDetail;
  return proto.palm.nut.v1.UserDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserDetail}
 */
proto.palm.nut.v1.UserDetail.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 5:
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
proto.palm.nut.v1.UserDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserDetail.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.nut.v1.UserDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.UserDetail} returns this
 */
proto.palm.nut.v1.UserDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uid = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserDetail.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserDetail} returns this
 */
proto.palm.nut.v1.UserDetail.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickname = 3;
 * @return {string}
 */
proto.palm.nut.v1.UserDetail.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserDetail} returns this
 */
proto.palm.nut.v1.UserDetail.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string real_name = 4;
 * @return {string}
 */
proto.palm.nut.v1.UserDetail.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserDetail} returns this
 */
proto.palm.nut.v1.UserDetail.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.palm.nut.v1.UserDetail.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserDetail} returns this
 */
proto.palm.nut.v1.UserDetail.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.palm.nut.v1.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.palm.nut.v1.Resource}
 */
proto.palm.nut.v1.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.Resource;
  return proto.palm.nut.v1.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.Resource}
 */
proto.palm.nut.v1.Resource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
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
proto.palm.nut.v1.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.palm.nut.v1.Resource.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.Resource} returns this
 */
proto.palm.nut.v1.Resource.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.palm.nut.v1.Resource.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Resource} returns this
 */
proto.palm.nut.v1.Resource.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.Resource} returns this
 */
proto.palm.nut.v1.Resource.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.Resource.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.nut.v1.Permission.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.palm.nut.v1.Permission.SubjectCase = {
  SUBJECT_NOT_SET: 0,
  USER: 1,
  ROLE: 2
};

/**
 * @return {proto.palm.nut.v1.Permission.SubjectCase}
 */
proto.palm.nut.v1.Permission.prototype.getSubjectCase = function() {
  return /** @type {proto.palm.nut.v1.Permission.SubjectCase} */(jspb.Message.computeOneofCase(this, proto.palm.nut.v1.Permission.oneofGroups_[0]));
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
proto.palm.nut.v1.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, 0),
    role: jspb.Message.getFieldWithDefault(msg, 2, 0),
    operation: jspb.Message.getFieldWithDefault(msg, 11, ""),
    resource: (f = msg.getResource()) && proto.palm.nut.v1.Resource.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.Permission}
 */
proto.palm.nut.v1.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.Permission;
  return proto.palm.nut.v1.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.Permission}
 */
proto.palm.nut.v1.Permission.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRole(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 12:
      var value = new proto.palm.nut.v1.Resource;
      reader.readMessage(value,proto.palm.nut.v1.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
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
proto.palm.nut.v1.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.palm.nut.v1.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 user = 1;
 * @return {number}
 */
proto.palm.nut.v1.Permission.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Permission} returns this
 */
proto.palm.nut.v1.Permission.prototype.setUser = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.palm.nut.v1.Permission.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.Permission} returns this
 */
proto.palm.nut.v1.Permission.prototype.clearUser = function() {
  return jspb.Message.setOneofField(this, 1, proto.palm.nut.v1.Permission.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.Permission.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 role = 2;
 * @return {number}
 */
proto.palm.nut.v1.Permission.prototype.getRole = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.Permission} returns this
 */
proto.palm.nut.v1.Permission.prototype.setRole = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.Permission.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.Permission} returns this
 */
proto.palm.nut.v1.Permission.prototype.clearRole = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.Permission.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.Permission.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string operation = 11;
 * @return {string}
 */
proto.palm.nut.v1.Permission.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.Permission} returns this
 */
proto.palm.nut.v1.Permission.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional Resource resource = 12;
 * @return {?proto.palm.nut.v1.Resource}
 */
proto.palm.nut.v1.Permission.prototype.getResource = function() {
  return /** @type{?proto.palm.nut.v1.Resource} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Resource, 12));
};


/**
 * @param {?proto.palm.nut.v1.Resource|undefined} value
 * @return {!proto.palm.nut.v1.Permission} returns this
*/
proto.palm.nut.v1.Permission.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.Permission} returns this
 */
proto.palm.nut.v1.Permission.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.Permission.prototype.hasResource = function() {
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
proto.palm.nut.v1.UserSignInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserSignInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserSignInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.palm.nut.v1.UserQueryRequest.toObject(includeInstance, f),
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
 * @return {!proto.palm.nut.v1.UserSignInRequest}
 */
proto.palm.nut.v1.UserSignInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserSignInRequest;
  return proto.palm.nut.v1.UserSignInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserSignInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserSignInRequest}
 */
proto.palm.nut.v1.UserSignInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.UserQueryRequest;
      reader.readMessage(value,proto.palm.nut.v1.UserQueryRequest.deserializeBinaryFromReader);
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
proto.palm.nut.v1.UserSignInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserSignInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserSignInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.UserQueryRequest.serializeBinaryToWriter
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
 * @return {?proto.palm.nut.v1.UserQueryRequest}
 */
proto.palm.nut.v1.UserSignInRequest.prototype.getQuery = function() {
  return /** @type{?proto.palm.nut.v1.UserQueryRequest} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.UserQueryRequest, 1));
};


/**
 * @param {?proto.palm.nut.v1.UserQueryRequest|undefined} value
 * @return {!proto.palm.nut.v1.UserSignInRequest} returns this
*/
proto.palm.nut.v1.UserSignInRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserSignInRequest} returns this
 */
proto.palm.nut.v1.UserSignInRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserSignInRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInRequest} returns this
 */
proto.palm.nut.v1.UserSignInRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Duration ttl = 11;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.nut.v1.UserSignInRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 11));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.nut.v1.UserSignInRequest} returns this
*/
proto.palm.nut.v1.UserSignInRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserSignInRequest} returns this
 */
proto.palm.nut.v1.UserSignInRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserSignInRequest.prototype.hasTtl = function() {
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
proto.palm.nut.v1.UserQueryRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.palm.nut.v1.UserQueryRequest.UserCase = {
  USER_NOT_SET: 0,
  NICKNAME: 1,
  EMAIL: 2
};

/**
 * @return {proto.palm.nut.v1.UserQueryRequest.UserCase}
 */
proto.palm.nut.v1.UserQueryRequest.prototype.getUserCase = function() {
  return /** @type {proto.palm.nut.v1.UserQueryRequest.UserCase} */(jspb.Message.computeOneofCase(this, proto.palm.nut.v1.UserQueryRequest.oneofGroups_[0]));
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
proto.palm.nut.v1.UserQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserQueryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.UserQueryRequest}
 */
proto.palm.nut.v1.UserQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserQueryRequest;
  return proto.palm.nut.v1.UserQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserQueryRequest}
 */
proto.palm.nut.v1.UserQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserQueryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.UserQueryRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserQueryRequest} returns this
 */
proto.palm.nut.v1.UserQueryRequest.prototype.setNickname = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.palm.nut.v1.UserQueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.UserQueryRequest} returns this
 */
proto.palm.nut.v1.UserQueryRequest.prototype.clearNickname = function() {
  return jspb.Message.setOneofField(this, 1, proto.palm.nut.v1.UserQueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserQueryRequest.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserQueryRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserQueryRequest} returns this
 */
proto.palm.nut.v1.UserQueryRequest.prototype.setEmail = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.UserQueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.UserQueryRequest} returns this
 */
proto.palm.nut.v1.UserQueryRequest.prototype.clearEmail = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.UserQueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserQueryRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string home = 9;
 * @return {string}
 */
proto.palm.nut.v1.UserQueryRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserQueryRequest} returns this
 */
proto.palm.nut.v1.UserQueryRequest.prototype.setHome = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.UserSignInResponse.repeatedFields_ = [11,12];



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
proto.palm.nut.v1.UserSignInResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserSignInResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserSignInResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignInResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.palm.nut.v1.UserSignInResponse.Payload.toObject(includeInstance, f),
    rolesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.palm.nut.v1.Permission.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.UserSignInResponse}
 */
proto.palm.nut.v1.UserSignInResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserSignInResponse;
  return proto.palm.nut.v1.UserSignInResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserSignInResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserSignInResponse}
 */
proto.palm.nut.v1.UserSignInResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.nut.v1.UserSignInResponse.Payload;
      reader.readMessage(value,proto.palm.nut.v1.UserSignInResponse.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 12:
      var value = new proto.palm.nut.v1.Permission;
      reader.readMessage(value,proto.palm.nut.v1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.palm.nut.v1.UserSignInResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserSignInResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserSignInResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignInResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.nut.v1.UserSignInResponse.Payload.serializeBinaryToWriter
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
      proto.palm.nut.v1.Permission.serializeBinaryToWriter
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
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserSignInResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserSignInResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignInResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    nickname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lang: jspb.Message.getFieldWithDefault(msg, 12, ""),
    timeZone: jspb.Message.getFieldWithDefault(msg, 13, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 99, "")
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
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserSignInResponse.Payload;
  return proto.palm.nut.v1.UserSignInResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserSignInResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
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
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    case 99:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
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
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserSignInResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserSignInResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignInResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNickname();
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
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      99,
      f
    );
  }
};


/**
 * optional string nickname = 1;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload} returns this
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload} returns this
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string real_name = 11;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload} returns this
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string lang = 12;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload} returns this
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string time_zone = 13;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload} returns this
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string avatar = 99;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 99, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInResponse.Payload} returns this
 */
proto.palm.nut.v1.UserSignInResponse.Payload.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 99, value);
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.palm.nut.v1.UserSignInResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
 */
proto.palm.nut.v1.UserSignInResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Payload payload = 2;
 * @return {?proto.palm.nut.v1.UserSignInResponse.Payload}
 */
proto.palm.nut.v1.UserSignInResponse.prototype.getPayload = function() {
  return /** @type{?proto.palm.nut.v1.UserSignInResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.UserSignInResponse.Payload, 2));
};


/**
 * @param {?proto.palm.nut.v1.UserSignInResponse.Payload|undefined} value
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
*/
proto.palm.nut.v1.UserSignInResponse.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
 */
proto.palm.nut.v1.UserSignInResponse.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserSignInResponse.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string roles = 11;
 * @return {!Array<string>}
 */
proto.palm.nut.v1.UserSignInResponse.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
 */
proto.palm.nut.v1.UserSignInResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
 */
proto.palm.nut.v1.UserSignInResponse.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
 */
proto.palm.nut.v1.UserSignInResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated Permission permissions = 12;
 * @return {!Array<!proto.palm.nut.v1.Permission>}
 */
proto.palm.nut.v1.UserSignInResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.Permission, 12));
};


/**
 * @param {!Array<!proto.palm.nut.v1.Permission>} value
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
*/
proto.palm.nut.v1.UserSignInResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.palm.nut.v1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.Permission}
 */
proto.palm.nut.v1.UserSignInResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.palm.nut.v1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.UserSignInResponse} returns this
 */
proto.palm.nut.v1.UserSignInResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
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
proto.palm.nut.v1.UserSignUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserSignUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserSignUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.palm.nut.v1.UserSignUpRequest}
 */
proto.palm.nut.v1.UserSignUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserSignUpRequest;
  return proto.palm.nut.v1.UserSignUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserSignUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserSignUpRequest}
 */
proto.palm.nut.v1.UserSignUpRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserSignUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserSignUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserSignUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSignUpRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.UserSignUpRequest.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string lang = 11;
 * @return {string}
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string time_zone = 12;
 * @return {string}
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string home = 21;
 * @return {string}
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSignUpRequest} returns this
 */
proto.palm.nut.v1.UserSignUpRequest.prototype.setHome = function(value) {
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
proto.palm.nut.v1.UserTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserTokenRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.UserTokenRequest}
 */
proto.palm.nut.v1.UserTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserTokenRequest;
  return proto.palm.nut.v1.UserTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserTokenRequest}
 */
proto.palm.nut.v1.UserTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserTokenRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.UserTokenRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserTokenRequest} returns this
 */
proto.palm.nut.v1.UserTokenRequest.prototype.setPayload = function(value) {
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
proto.palm.nut.v1.UserResetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserResetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserResetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserResetPasswordRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.UserResetPasswordRequest}
 */
proto.palm.nut.v1.UserResetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserResetPasswordRequest;
  return proto.palm.nut.v1.UserResetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserResetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserResetPasswordRequest}
 */
proto.palm.nut.v1.UserResetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserResetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserResetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserResetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserResetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.UserResetPasswordRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserResetPasswordRequest} returns this
 */
proto.palm.nut.v1.UserResetPasswordRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserResetPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserResetPasswordRequest} returns this
 */
proto.palm.nut.v1.UserResetPasswordRequest.prototype.setPassword = function(value) {
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
proto.palm.nut.v1.UserSetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserSetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserSetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSetPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.palm.nut.v1.UserSetPasswordRequest}
 */
proto.palm.nut.v1.UserSetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserSetPasswordRequest;
  return proto.palm.nut.v1.UserSetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserSetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserSetPasswordRequest}
 */
proto.palm.nut.v1.UserSetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserSetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserSetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserSetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.nut.v1.UserSetPasswordRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.UserSetPasswordRequest} returns this
 */
proto.palm.nut.v1.UserSetPasswordRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserSetPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSetPasswordRequest} returns this
 */
proto.palm.nut.v1.UserSetPasswordRequest.prototype.setPassword = function(value) {
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
proto.palm.nut.v1.UserSetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserSetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserSetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSetProfileRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.UserSetProfileRequest}
 */
proto.palm.nut.v1.UserSetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserSetProfileRequest;
  return proto.palm.nut.v1.UserSetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserSetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserSetProfileRequest}
 */
proto.palm.nut.v1.UserSetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserSetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserSetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserSetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserSetProfileRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.UserSetProfileRequest.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string time_zone = 8;
 * @return {string}
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string lang = 9;
 * @return {string}
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string wechat = 11;
 * @return {string}
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.getWechat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.setWechat = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone = 12;
 * @return {string}
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserSetProfileRequest} returns this
 */
proto.palm.nut.v1.UserSetProfileRequest.prototype.setPhone = function(value) {
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
proto.palm.nut.v1.UserGetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserGetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserGetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserGetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    realName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.palm.nut.v1.UserGetProfileResponse}
 */
proto.palm.nut.v1.UserGetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserGetProfileResponse;
  return proto.palm.nut.v1.UserGetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserGetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserGetProfileResponse}
 */
proto.palm.nut.v1.UserGetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserGetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserGetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserGetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserGetProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.UserGetProfileResponse.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickname = 3;
 * @return {string}
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string time_zone = 8;
 * @return {string}
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string lang = 9;
 * @return {string}
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string wechat = 11;
 * @return {string}
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.getWechat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setWechat = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone = 12;
 * @return {string}
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserGetProfileResponse} returns this
 */
proto.palm.nut.v1.UserGetProfileResponse.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.UserLogsResponse.repeatedFields_ = [11];



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
proto.palm.nut.v1.UserLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.palm.nut.v1.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.UserLogsResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.UserLogsResponse}
 */
proto.palm.nut.v1.UserLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserLogsResponse;
  return proto.palm.nut.v1.UserLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserLogsResponse}
 */
proto.palm.nut.v1.UserLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.nut.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 11:
      var value = new proto.palm.nut.v1.UserLogsResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.UserLogsResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.UserLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.palm.nut.v1.UserLogsResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.UserLogsResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserLogsResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserLogsResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserLogsResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resource: (f = msg.getResource()) && proto.palm.nut.v1.Resource.toObject(includeInstance, f),
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
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item}
 */
proto.palm.nut.v1.UserLogsResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserLogsResponse.Item;
  return proto.palm.nut.v1.UserLogsResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserLogsResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item}
 */
proto.palm.nut.v1.UserLogsResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.palm.nut.v1.UserLogsResponse.Item.Level} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = new proto.palm.nut.v1.Resource;
      reader.readMessage(value,proto.palm.nut.v1.Resource.deserializeBinaryFromReader);
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
proto.palm.nut.v1.UserLogsResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserLogsResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserLogsResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserLogsResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.nut.v1.Resource.serializeBinaryToWriter
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
proto.palm.nut.v1.UserLogsResponse.Item.Level = {
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
proto.palm.nut.v1.UserLogsResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Level level = 4;
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item.Level}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.getLevel = function() {
  return /** @type {!proto.palm.nut.v1.UserLogsResponse.Item.Level} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.palm.nut.v1.UserLogsResponse.Item.Level} value
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Resource resource = 6;
 * @return {?proto.palm.nut.v1.Resource}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.getResource = function() {
  return /** @type{?proto.palm.nut.v1.Resource} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Resource, 6));
};


/**
 * @param {?proto.palm.nut.v1.Resource|undefined} value
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
*/
proto.palm.nut.v1.UserLogsResponse.Item.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.hasResource = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
*/
proto.palm.nut.v1.UserLogsResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item} returns this
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserLogsResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.UserLogsResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.nut.v1.UserLogsResponse} returns this
*/
proto.palm.nut.v1.UserLogsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserLogsResponse} returns this
 */
proto.palm.nut.v1.UserLogsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserLogsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.nut.v1.UserLogsResponse.Item>}
 */
proto.palm.nut.v1.UserLogsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.UserLogsResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.UserLogsResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.nut.v1.UserLogsResponse.Item>} value
 * @return {!proto.palm.nut.v1.UserLogsResponse} returns this
*/
proto.palm.nut.v1.UserLogsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.nut.v1.UserLogsResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.UserLogsResponse.Item}
 */
proto.palm.nut.v1.UserLogsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.nut.v1.UserLogsResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.UserLogsResponse} returns this
 */
proto.palm.nut.v1.UserLogsResponse.prototype.clearItemsList = function() {
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
proto.palm.nut.v1.UserChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserChangePasswordRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.UserChangePasswordRequest}
 */
proto.palm.nut.v1.UserChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserChangePasswordRequest;
  return proto.palm.nut.v1.UserChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserChangePasswordRequest}
 */
proto.palm.nut.v1.UserChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.UserChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.UserChangePasswordRequest.prototype.getCurrentPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserChangePasswordRequest} returns this
 */
proto.palm.nut.v1.UserChangePasswordRequest.prototype.setCurrentPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserChangePasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserChangePasswordRequest} returns this
 */
proto.palm.nut.v1.UserChangePasswordRequest.prototype.setNewPassword = function(value) {
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
proto.palm.nut.v1.UserProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.nut.v1.UserProvider}
 */
proto.palm.nut.v1.UserProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserProvider;
  return proto.palm.nut.v1.UserProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserProvider}
 */
proto.palm.nut.v1.UserProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.palm.nut.v1.UserProvider.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
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
proto.palm.nut.v1.UserProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.palm.nut.v1.UserProvider.Type = {
  EMAIL: 0,
  GMAIL: 1,
  WECHAT: 2,
  FACEBOOK: 3,
  GITHUB: 4
};

/**
 * optional Type type = 1;
 * @return {!proto.palm.nut.v1.UserProvider.Type}
 */
proto.palm.nut.v1.UserProvider.prototype.getType = function() {
  return /** @type {!proto.palm.nut.v1.UserProvider.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.palm.nut.v1.UserProvider.Type} value
 * @return {!proto.palm.nut.v1.UserProvider} returns this
 */
proto.palm.nut.v1.UserProvider.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserProvider.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserProvider} returns this
 */
proto.palm.nut.v1.UserProvider.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.UserIndexResponse.repeatedFields_ = [11];



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
proto.palm.nut.v1.UserIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.palm.nut.v1.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.UserIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.UserIndexResponse}
 */
proto.palm.nut.v1.UserIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserIndexResponse;
  return proto.palm.nut.v1.UserIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserIndexResponse}
 */
proto.palm.nut.v1.UserIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.nut.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 11:
      var value = new proto.palm.nut.v1.UserIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.UserIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.UserIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.palm.nut.v1.UserIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.UserIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.UserIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.UserIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    providerType: jspb.Message.getFieldWithDefault(msg, 6, 0),
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
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item}
 */
proto.palm.nut.v1.UserIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.UserIndexResponse.Item;
  return proto.palm.nut.v1.UserIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.UserIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item}
 */
proto.palm.nut.v1.UserIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 6:
      var value = /** @type {!proto.palm.nut.v1.UserProvider.Type} */ (reader.readEnum());
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
proto.palm.nut.v1.UserIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.UserIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.UserIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.UserIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNickname();
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
  if (f !== 0.0) {
    writer.writeEnum(
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
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uid = 2;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nickname = 4;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string real_name = 5;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional UserProvider.Type provider_type = 6;
 * @return {!proto.palm.nut.v1.UserProvider.Type}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getProviderType = function() {
  return /** @type {!proto.palm.nut.v1.UserProvider.Type} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.palm.nut.v1.UserProvider.Type} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setProviderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
*/
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp last_sign_in_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getLastSignInAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
*/
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setLastSignInAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearLastSignInAt = function() {
  return this.setLastSignInAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasLastSignInAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string last_sign_in_ip = 12;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getLastSignInIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setLastSignInIp = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearLastSignInIp = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasLastSignInIp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp current_sign_in_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getCurrentSignInAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
*/
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setCurrentSignInAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearCurrentSignInAt = function() {
  return this.setCurrentSignInAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasCurrentSignInAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string current_sign_in_ip = 14;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getCurrentSignInIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setCurrentSignInIp = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearCurrentSignInIp = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasCurrentSignInIp = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 sign_in_count = 19;
 * @return {number}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getSignInCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setSignInCount = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string lang = 21;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string time_zone = 22;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string avatar = 23;
 * @return {string}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional google.protobuf.Timestamp confirmed_at = 27;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getConfirmedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 27));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
*/
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setConfirmedAt = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearConfirmedAt = function() {
  return this.setConfirmedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasConfirmedAt = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional google.protobuf.Timestamp locked_at = 28;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getLockedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 28));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
*/
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setLockedAt = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearLockedAt = function() {
  return this.setLockedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasLockedAt = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional google.protobuf.Timestamp deleted_at = 29;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.getDeletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 29));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
*/
proto.palm.nut.v1.UserIndexResponse.Item.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item} returns this
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.Item.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.UserIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.nut.v1.UserIndexResponse} returns this
*/
proto.palm.nut.v1.UserIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.UserIndexResponse} returns this
 */
proto.palm.nut.v1.UserIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.UserIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.nut.v1.UserIndexResponse.Item>}
 */
proto.palm.nut.v1.UserIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.UserIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.UserIndexResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.nut.v1.UserIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.UserIndexResponse} returns this
*/
proto.palm.nut.v1.UserIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.nut.v1.UserIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.UserIndexResponse.Item}
 */
proto.palm.nut.v1.UserIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.nut.v1.UserIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.UserIndexResponse} returns this
 */
proto.palm.nut.v1.UserIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.nut.v1.AttachmentShowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.AttachmentShowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.AttachmentShowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentShowRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.AttachmentShowRequest}
 */
proto.palm.nut.v1.AttachmentShowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.AttachmentShowRequest;
  return proto.palm.nut.v1.AttachmentShowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.AttachmentShowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.AttachmentShowRequest}
 */
proto.palm.nut.v1.AttachmentShowRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.AttachmentShowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.AttachmentShowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.AttachmentShowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentShowRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.AttachmentShowRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.AttachmentShowRequest} returns this
 */
proto.palm.nut.v1.AttachmentShowRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration ttl = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.nut.v1.AttachmentShowRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.nut.v1.AttachmentShowRequest} returns this
*/
proto.palm.nut.v1.AttachmentShowRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.AttachmentShowRequest} returns this
 */
proto.palm.nut.v1.AttachmentShowRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.AttachmentShowRequest.prototype.hasTtl = function() {
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
proto.palm.nut.v1.AttachmentShowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.AttachmentShowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.AttachmentShowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentShowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.palm.nut.v1.AttachmentIndexResponse.Item.toObject(includeInstance, f),
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
 * @return {!proto.palm.nut.v1.AttachmentShowResponse}
 */
proto.palm.nut.v1.AttachmentShowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.AttachmentShowResponse;
  return proto.palm.nut.v1.AttachmentShowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.AttachmentShowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.AttachmentShowResponse}
 */
proto.palm.nut.v1.AttachmentShowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.AttachmentIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.AttachmentShowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.AttachmentShowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.AttachmentShowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentShowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter
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
 * @return {?proto.palm.nut.v1.AttachmentIndexResponse.Item}
 */
proto.palm.nut.v1.AttachmentShowResponse.prototype.getItem = function() {
  return /** @type{?proto.palm.nut.v1.AttachmentIndexResponse.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.AttachmentIndexResponse.Item, 1));
};


/**
 * @param {?proto.palm.nut.v1.AttachmentIndexResponse.Item|undefined} value
 * @return {!proto.palm.nut.v1.AttachmentShowResponse} returns this
*/
proto.palm.nut.v1.AttachmentShowResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.AttachmentShowResponse} returns this
 */
proto.palm.nut.v1.AttachmentShowResponse.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.AttachmentShowResponse.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.palm.nut.v1.AttachmentShowResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.AttachmentShowResponse} returns this
 */
proto.palm.nut.v1.AttachmentShowResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.AttachmentIndexResponse.repeatedFields_ = [11];



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
proto.palm.nut.v1.AttachmentIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.AttachmentIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.AttachmentIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.palm.nut.v1.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.AttachmentIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse}
 */
proto.palm.nut.v1.AttachmentIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.AttachmentIndexResponse;
  return proto.palm.nut.v1.AttachmentIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.AttachmentIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse}
 */
proto.palm.nut.v1.AttachmentIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.nut.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 11:
      var value = new proto.palm.nut.v1.AttachmentIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.AttachmentIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.AttachmentIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.AttachmentIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.palm.nut.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.AttachmentIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.AttachmentIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.AttachmentIndexResponse.Item;
  return proto.palm.nut.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.AttachmentIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.AttachmentIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string bucket = 2;
 * @return {string}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string content_type = 6;
 * @return {string}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional MediaContent.Status status = 7;
 * @return {!proto.palm.nut.v1.MediaContent.Status}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getStatus = function() {
  return /** @type {!proto.palm.nut.v1.MediaContent.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.palm.nut.v1.MediaContent.Status} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
*/
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.AttachmentIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.AttachmentIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse} returns this
*/
proto.palm.nut.v1.AttachmentIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.AttachmentIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.nut.v1.AttachmentIndexResponse.Item>}
 */
proto.palm.nut.v1.AttachmentIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.AttachmentIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.AttachmentIndexResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.nut.v1.AttachmentIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse} returns this
*/
proto.palm.nut.v1.AttachmentIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.nut.v1.AttachmentIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse.Item}
 */
proto.palm.nut.v1.AttachmentIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.nut.v1.AttachmentIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.AttachmentIndexResponse} returns this
 */
proto.palm.nut.v1.AttachmentIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.nut.v1.PolicyAddRoleRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.NestedCase = {
  NESTED_NOT_SET: 0,
  LEFT: 2,
  PARENT: 3
};

/**
 * @return {proto.palm.nut.v1.PolicyAddRoleRequest.NestedCase}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.getNestedCase = function() {
  return /** @type {proto.palm.nut.v1.PolicyAddRoleRequest.NestedCase} */(jspb.Message.computeOneofCase(this, proto.palm.nut.v1.PolicyAddRoleRequest.oneofGroups_[0]));
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
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyAddRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyAddRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyAddRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    left: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parent: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.palm.nut.v1.PolicyAddRoleRequest}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyAddRoleRequest;
  return proto.palm.nut.v1.PolicyAddRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyAddRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyAddRoleRequest}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParent(value);
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
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyAddRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyAddRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyAddRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.PolicyAddRoleRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 left = 2;
 * @return {number}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyAddRoleRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.setLeft = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.PolicyAddRoleRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyAddRoleRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.clearLeft = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.PolicyAddRoleRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.hasLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 parent = 3;
 * @return {number}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.getParent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyAddRoleRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.setParent = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.palm.nut.v1.PolicyAddRoleRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyAddRoleRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.clearParent = function() {
  return jspb.Message.setOneofField(this, 3, proto.palm.nut.v1.PolicyAddRoleRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyAddRoleRequest.prototype.hasParent = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.PolicyUsersForRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyUsersForRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyUsersForRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyUsersForRoleResponse;
  return proto.palm.nut.v1.PolicyUsersForRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyUsersForRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.PolicyUsersForRoleResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.PolicyUsersForRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyUsersForRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyUsersForRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.palm.nut.v1.UserDetail.toObject(includeInstance, f),
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
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyUsersForRoleResponse.Item;
  return proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.UserDetail;
      reader.readMessage(value,proto.palm.nut.v1.UserDetail.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.UserDetail.serializeBinaryToWriter
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
 * optional UserDetail user = 1;
 * @return {?proto.palm.nut.v1.UserDetail}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.getUser = function() {
  return /** @type{?proto.palm.nut.v1.UserDetail} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.UserDetail, 1));
};


/**
 * @param {?proto.palm.nut.v1.UserDetail|undefined} value
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} returns this
*/
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp not_before = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.getNotBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} returns this
*/
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.setNotBefore = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.clearNotBefore = function() {
  return this.setNotBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.hasNotBefore = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expired_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.getExpiredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} returns this
*/
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.setExpiredAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.clearExpiredAt = function() {
  return this.setExpiredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.Item.prototype.hasExpiredAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item>}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.PolicyUsersForRoleResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item>} value
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse} returns this
*/
proto.palm.nut.v1.PolicyUsersForRoleResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse.Item}
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.PolicyUsersForRoleResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyUsersForRoleResponse} returns this
 */
proto.palm.nut.v1.PolicyUsersForRoleResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.UserDetail.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse}
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse;
  return proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse}
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.UserDetail;
      reader.readMessage(value,proto.palm.nut.v1.UserDetail.deserializeBinaryFromReader);
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
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.UserDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UserDetail items = 1;
 * @return {!Array<!proto.palm.nut.v1.UserDetail>}
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.UserDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.UserDetail, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.UserDetail>} value
 * @return {!proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse} returns this
*/
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.UserDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.UserDetail}
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.UserDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse} returns this
 */
proto.palm.nut.v1.PolicyImplicitUsersForRoleResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.PolicyRolesForUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyRolesForUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyRolesForUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.PolicyRolesForUserResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyRolesForUserResponse;
  return proto.palm.nut.v1.PolicyRolesForUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyRolesForUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.PolicyRolesForUserResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.PolicyRolesForUserResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.PolicyRolesForUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyRolesForUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyRolesForUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.PolicyRolesForUserResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyRolesForUserResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyRolesForUserResponse.Item;
  return proto.palm.nut.v1.PolicyRolesForUserResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCode(value);
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
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyRolesForUserResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp not_before = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.getNotBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} returns this
*/
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.setNotBefore = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.clearNotBefore = function() {
  return this.setNotBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.hasNotBefore = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expired_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.getExpiredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} returns this
*/
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.setExpiredAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.clearExpiredAt = function() {
  return this.setExpiredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.Item.prototype.hasExpiredAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.PolicyRolesForUserResponse.Item>}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.PolicyRolesForUserResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.PolicyRolesForUserResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.PolicyRolesForUserResponse.Item>} value
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse} returns this
*/
proto.palm.nut.v1.PolicyRolesForUserResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse.Item}
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.PolicyRolesForUserResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyRolesForUserResponse} returns this
 */
proto.palm.nut.v1.PolicyRolesForUserResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse}
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyImplicitRolesForUserResponse;
  return proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse}
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse} returns this
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse} returns this
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyImplicitRolesForUserResponse} returns this
 */
proto.palm.nut.v1.PolicyImplicitRolesForUserResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyRoleListResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.PolicyRoleListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyRoleListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyRoleListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRoleListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.PolicyRoleListResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse}
 */
proto.palm.nut.v1.PolicyRoleListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyRoleListResponse;
  return proto.palm.nut.v1.PolicyRoleListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyRoleListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse}
 */
proto.palm.nut.v1.PolicyRoleListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.PolicyRoleListResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.PolicyRoleListResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.PolicyRoleListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyRoleListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyRoleListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRoleListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.PolicyRoleListResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyRoleListResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyRoleListResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    left: jspb.Message.getFieldWithDefault(msg, 3, 0),
    right: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item}
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyRoleListResponse.Item;
  return proto.palm.nut.v1.PolicyRoleListResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyRoleListResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item}
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeft(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRight(value);
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
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyRoleListResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyRoleListResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getLeft();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRight();
  if (f !== 0) {
    writer.writeInt32(
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
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 left = 3;
 * @return {number}
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.setLeft = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 right = 4;
 * @return {number}
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.getRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.setRight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item} returns this
*/
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item} returns this
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyRoleListResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.PolicyRoleListResponse.Item>}
 */
proto.palm.nut.v1.PolicyRoleListResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.PolicyRoleListResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.PolicyRoleListResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.PolicyRoleListResponse.Item>} value
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse} returns this
*/
proto.palm.nut.v1.PolicyRoleListResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.PolicyRoleListResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse.Item}
 */
proto.palm.nut.v1.PolicyRoleListResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.PolicyRoleListResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyRoleListResponse} returns this
 */
proto.palm.nut.v1.PolicyRoleListResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.repeatedFields_ = [2];



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
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyAddRolesForUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest}
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyAddRolesForUserRequest;
  return proto.palm.nut.v1.PolicyAddRolesForUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest}
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRoles(values[i]);
      }
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
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyAddRolesForUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.serializeBinaryToWriter = function(message, writer) {
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
    writer.writePackedInt32(
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
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int32 roles = 2;
 * @return {!Array<number>}
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.getRolesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional google.protobuf.Timestamp not_before = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.getNotBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
*/
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.setNotBefore = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.clearNotBefore = function() {
  return this.setNotBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.hasNotBefore = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expired_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.getExpiredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
*/
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.setExpiredAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.PolicyAddRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.clearExpiredAt = function() {
  return this.setExpiredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.PolicyAddRolesForUserRequest.prototype.hasExpiredAt = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.repeatedFields_ = [2];



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
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rolesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest}
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyDeleteRolesForUserRequest;
  return proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest}
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRoles(values[i]);
      }
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
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.serializeBinaryToWriter = function(message, writer) {
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
    writer.writePackedInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 user = 1;
 * @return {number}
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int32 roles = 2;
 * @return {!Array<number>}
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.getRolesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyDeleteRolesForUserRequest} returns this
 */
proto.palm.nut.v1.PolicyDeleteRolesForUserRequest.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.PolicyPermissionList.repeatedFields_ = [1];



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
proto.palm.nut.v1.PolicyPermissionList.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.PolicyPermissionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.PolicyPermissionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyPermissionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.Permission.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.PolicyPermissionList}
 */
proto.palm.nut.v1.PolicyPermissionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.PolicyPermissionList;
  return proto.palm.nut.v1.PolicyPermissionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.PolicyPermissionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.PolicyPermissionList}
 */
proto.palm.nut.v1.PolicyPermissionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.Permission;
      reader.readMessage(value,proto.palm.nut.v1.Permission.deserializeBinaryFromReader);
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
proto.palm.nut.v1.PolicyPermissionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.PolicyPermissionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.PolicyPermissionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.PolicyPermissionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Permission items = 1;
 * @return {!Array<!proto.palm.nut.v1.Permission>}
 */
proto.palm.nut.v1.PolicyPermissionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.Permission, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.Permission>} value
 * @return {!proto.palm.nut.v1.PolicyPermissionList} returns this
*/
proto.palm.nut.v1.PolicyPermissionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.Permission}
 */
proto.palm.nut.v1.PolicyPermissionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.PolicyPermissionList} returns this
 */
proto.palm.nut.v1.PolicyPermissionList.prototype.clearItemsList = function() {
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
proto.palm.nut.v1.LocaleByLangRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LocaleByLangRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LocaleByLangRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleByLangRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.LocaleByLangRequest}
 */
proto.palm.nut.v1.LocaleByLangRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LocaleByLangRequest;
  return proto.palm.nut.v1.LocaleByLangRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LocaleByLangRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LocaleByLangRequest}
 */
proto.palm.nut.v1.LocaleByLangRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.LocaleByLangRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LocaleByLangRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LocaleByLangRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleByLangRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.LocaleByLangRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleByLangRequest} returns this
 */
proto.palm.nut.v1.LocaleByLangRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.LocaleByLangResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.LocaleByLangResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LocaleByLangResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LocaleByLangResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleByLangResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.LocaleIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.LocaleByLangResponse}
 */
proto.palm.nut.v1.LocaleByLangResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LocaleByLangResponse;
  return proto.palm.nut.v1.LocaleByLangResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LocaleByLangResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LocaleByLangResponse}
 */
proto.palm.nut.v1.LocaleByLangResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.LocaleIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.LocaleByLangResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LocaleByLangResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LocaleByLangResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleByLangResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.LocaleIndexResponse.Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LocaleIndexResponse.Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.LocaleIndexResponse.Item>}
 */
proto.palm.nut.v1.LocaleByLangResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.LocaleIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.LocaleIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.LocaleIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.LocaleByLangResponse} returns this
*/
proto.palm.nut.v1.LocaleByLangResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.LocaleIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item}
 */
proto.palm.nut.v1.LocaleByLangResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.LocaleIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.LocaleByLangResponse} returns this
 */
proto.palm.nut.v1.LocaleByLangResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.LocaleIndexResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.LocaleIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LocaleIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LocaleIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.LocaleIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.LocaleIndexResponse}
 */
proto.palm.nut.v1.LocaleIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LocaleIndexResponse;
  return proto.palm.nut.v1.LocaleIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LocaleIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LocaleIndexResponse}
 */
proto.palm.nut.v1.LocaleIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.LocaleIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.nut.v1.LocaleIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LocaleIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LocaleIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.LocaleIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LocaleIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LocaleIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item}
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LocaleIndexResponse.Item;
  return proto.palm.nut.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LocaleIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item}
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LocaleIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LocaleIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item} returns this
*/
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.LocaleIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.LocaleIndexResponse.Item>}
 */
proto.palm.nut.v1.LocaleIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.LocaleIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.LocaleIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.LocaleIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.LocaleIndexResponse} returns this
*/
proto.palm.nut.v1.LocaleIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.LocaleIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.LocaleIndexResponse.Item}
 */
proto.palm.nut.v1.LocaleIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.LocaleIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.LocaleIndexResponse} returns this
 */
proto.palm.nut.v1.LocaleIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.LocaleIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.nut.v1.LocaleIndexResponse} returns this
*/
proto.palm.nut.v1.LocaleIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.LocaleIndexResponse} returns this
 */
proto.palm.nut.v1.LocaleIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.LocaleIndexResponse.prototype.hasPagination = function() {
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
proto.palm.nut.v1.LocaleGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LocaleGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LocaleGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleGetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.LocaleGetRequest}
 */
proto.palm.nut.v1.LocaleGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LocaleGetRequest;
  return proto.palm.nut.v1.LocaleGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LocaleGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LocaleGetRequest}
 */
proto.palm.nut.v1.LocaleGetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.LocaleGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LocaleGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LocaleGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleGetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.LocaleGetRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleGetRequest} returns this
 */
proto.palm.nut.v1.LocaleGetRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.LocaleGetRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleGetRequest} returns this
 */
proto.palm.nut.v1.LocaleGetRequest.prototype.setCode = function(value) {
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
proto.palm.nut.v1.LocaleSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LocaleSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LocaleSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleSetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.LocaleSetRequest}
 */
proto.palm.nut.v1.LocaleSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LocaleSetRequest;
  return proto.palm.nut.v1.LocaleSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LocaleSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LocaleSetRequest}
 */
proto.palm.nut.v1.LocaleSetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.LocaleSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LocaleSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LocaleSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LocaleSetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.LocaleSetRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleSetRequest} returns this
 */
proto.palm.nut.v1.LocaleSetRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.LocaleSetRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleSetRequest} returns this
 */
proto.palm.nut.v1.LocaleSetRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.palm.nut.v1.LocaleSetRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LocaleSetRequest} returns this
 */
proto.palm.nut.v1.LocaleSetRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.IndexNotificationResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.IndexNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.IndexNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.IndexNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.IndexNotificationResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.IndexNotificationResponse}
 */
proto.palm.nut.v1.IndexNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.IndexNotificationResponse;
  return proto.palm.nut.v1.IndexNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.IndexNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.IndexNotificationResponse}
 */
proto.palm.nut.v1.IndexNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.IndexNotificationResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.IndexNotificationResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.nut.v1.IndexNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.IndexNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.IndexNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.IndexNotificationResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.nut.v1.Pagination.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.MessageCase = {
  MESSAGE_NOT_SET: 0,
  EMAIL: 1,
  SMS: 2
};

/**
 * @return {proto.palm.nut.v1.IndexNotificationResponse.Item.MessageCase}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.getMessageCase = function() {
  return /** @type {proto.palm.nut.v1.IndexNotificationResponse.Item.MessageCase} */(jspb.Message.computeOneofCase(this, proto.palm.nut.v1.IndexNotificationResponse.Item.oneofGroups_[0]));
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
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.IndexNotificationResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.IndexNotificationResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: (f = msg.getEmail()) && proto.palm.nut.v1.EmailTask.toObject(includeInstance, f),
    sms: (f = msg.getSms()) && proto.palm.nut.v1.SmsTask.toObject(includeInstance, f),
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
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.IndexNotificationResponse.Item;
  return proto.palm.nut.v1.IndexNotificationResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.IndexNotificationResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.EmailTask;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 2:
      var value = new proto.palm.nut.v1.SmsTask;
      reader.readMessage(value,proto.palm.nut.v1.SmsTask.deserializeBinaryFromReader);
      msg.setSms(value);
      break;
    case 19:
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
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.IndexNotificationResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.IndexNotificationResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.EmailTask.serializeBinaryToWriter
    );
  }
  f = message.getSms();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.nut.v1.SmsTask.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional EmailTask email = 1;
 * @return {?proto.palm.nut.v1.EmailTask}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.getEmail = function() {
  return /** @type{?proto.palm.nut.v1.EmailTask} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.EmailTask, 1));
};


/**
 * @param {?proto.palm.nut.v1.EmailTask|undefined} value
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item} returns this
*/
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.setEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.palm.nut.v1.IndexNotificationResponse.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item} returns this
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SmsTask sms = 2;
 * @return {?proto.palm.nut.v1.SmsTask}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.getSms = function() {
  return /** @type{?proto.palm.nut.v1.SmsTask} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SmsTask, 2));
};


/**
 * @param {?proto.palm.nut.v1.SmsTask|undefined} value
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item} returns this
*/
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.setSms = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.palm.nut.v1.IndexNotificationResponse.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item} returns this
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.clearSms = function() {
  return this.setSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.hasSms = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item} returns this
*/
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item} returns this
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.IndexNotificationResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.IndexNotificationResponse.Item>}
 */
proto.palm.nut.v1.IndexNotificationResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.IndexNotificationResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.IndexNotificationResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.IndexNotificationResponse.Item>} value
 * @return {!proto.palm.nut.v1.IndexNotificationResponse} returns this
*/
proto.palm.nut.v1.IndexNotificationResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.IndexNotificationResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.IndexNotificationResponse.Item}
 */
proto.palm.nut.v1.IndexNotificationResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.IndexNotificationResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.IndexNotificationResponse} returns this
 */
proto.palm.nut.v1.IndexNotificationResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.IndexNotificationResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.nut.v1.IndexNotificationResponse} returns this
*/
proto.palm.nut.v1.IndexNotificationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.IndexNotificationResponse} returns this
 */
proto.palm.nut.v1.IndexNotificationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.IndexNotificationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.LeaveWordIndexResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LeaveWordIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LeaveWordIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LeaveWordIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.LeaveWordIndexResponse.Item.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.palm.nut.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LeaveWordIndexResponse;
  return proto.palm.nut.v1.LeaveWordIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LeaveWordIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.LeaveWordIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.LeaveWordIndexResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 9:
      var value = new proto.palm.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.nut.v1.Pagination.deserializeBinaryFromReader);
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
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LeaveWordIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LeaveWordIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LeaveWordIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.LeaveWordIndexResponse.Item.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.nut.v1.Pagination.serializeBinaryToWriter
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
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.LeaveWordIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: (f = msg.getContent()) && proto.palm.nut.v1.MediaContent.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
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
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.LeaveWordIndexResponse.Item;
  return proto.palm.nut.v1.LeaveWordIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
    case 8:
      var value = new proto.palm.nut.v1.MediaContent;
      reader.readMessage(value,proto.palm.nut.v1.MediaContent.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 12:
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
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.LeaveWordIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.palm.nut.v1.MediaContent.serializeBinaryToWriter
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
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MediaContent content = 8;
 * @return {?proto.palm.nut.v1.MediaContent}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.getContent = function() {
  return /** @type{?proto.palm.nut.v1.MediaContent} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.MediaContent, 8));
};


/**
 * @param {?proto.palm.nut.v1.MediaContent|undefined} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
*/
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.hasContent = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
*/
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
*/
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.LeaveWordIndexResponse.Item>}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.LeaveWordIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.LeaveWordIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.LeaveWordIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse} returns this
*/
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.LeaveWordIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse.Item}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.LeaveWordIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Pagination pagination = 9;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Pagination, 9));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse} returns this
*/
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.LeaveWordIndexResponse} returns this
 */
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.LeaveWordIndexResponse.prototype.hasPagination = function() {
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
proto.palm.nut.v1.IndexNowProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.IndexNowProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.IndexNowProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNowProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.nut.v1.IndexNowProfile}
 */
proto.palm.nut.v1.IndexNowProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.IndexNowProfile;
  return proto.palm.nut.v1.IndexNowProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.IndexNowProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.IndexNowProfile}
 */
proto.palm.nut.v1.IndexNowProfile.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.IndexNowProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.IndexNowProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.IndexNowProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNowProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.palm.nut.v1.IndexNowProfile.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.IndexNowProfile} returns this
 */
proto.palm.nut.v1.IndexNowProfile.prototype.setKey = function(value) {
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
proto.palm.nut.v1.IndexNowPingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.IndexNowPingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.IndexNowPingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNowPingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.palm.nut.v1.IndexNowPingRequest}
 */
proto.palm.nut.v1.IndexNowPingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.IndexNowPingRequest;
  return proto.palm.nut.v1.IndexNowPingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.IndexNowPingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.IndexNowPingRequest}
 */
proto.palm.nut.v1.IndexNowPingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.IndexNowPingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.IndexNowPingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.IndexNowPingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.IndexNowPingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
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
 * optional string key = 1;
 * @return {string}
 */
proto.palm.nut.v1.IndexNowPingRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.IndexNowPingRequest} returns this
 */
proto.palm.nut.v1.IndexNowPingRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string home = 9;
 * @return {string}
 */
proto.palm.nut.v1.IndexNowPingRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.IndexNowPingRequest} returns this
 */
proto.palm.nut.v1.IndexNowPingRequest.prototype.setHome = function(value) {
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
proto.palm.nut.v1.SitemapPingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SitemapPingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SitemapPingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SitemapPingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    home: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.palm.nut.v1.SitemapPingRequest}
 */
proto.palm.nut.v1.SitemapPingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SitemapPingRequest;
  return proto.palm.nut.v1.SitemapPingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SitemapPingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SitemapPingRequest}
 */
proto.palm.nut.v1.SitemapPingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.palm.nut.v1.SitemapPingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SitemapPingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SitemapPingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SitemapPingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHome();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string home = 1;
 * @return {string}
 */
proto.palm.nut.v1.SitemapPingRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SitemapPingRequest} returns this
 */
proto.palm.nut.v1.SitemapPingRequest.prototype.setHome = function(value) {
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
proto.palm.nut.v1.SiteMaintenanceModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteMaintenanceModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteMaintenanceModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteMaintenanceModeRequest;
  return proto.palm.nut.v1.SiteMaintenanceModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteMaintenanceModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.SiteMaintenanceModeRequest.Item;
      reader.readMessage(value,proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.deserializeBinaryFromReader);
      msg.setItem(value);
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
proto.palm.nut.v1.SiteMaintenanceModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteMaintenanceModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteMaintenanceModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteMaintenanceModeRequest.Item;
  return proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration duration = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item} returns this
*/
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item} returns this
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest.Item} returns this
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.Item.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Item item = 1;
 * @return {?proto.palm.nut.v1.SiteMaintenanceModeRequest.Item}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.prototype.getItem = function() {
  return /** @type{?proto.palm.nut.v1.SiteMaintenanceModeRequest.Item} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteMaintenanceModeRequest.Item, 1));
};


/**
 * @param {?proto.palm.nut.v1.SiteMaintenanceModeRequest.Item|undefined} value
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest} returns this
*/
proto.palm.nut.v1.SiteMaintenanceModeRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteMaintenanceModeRequest} returns this
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteMaintenanceModeRequest.prototype.hasItem = function() {
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
proto.palm.nut.v1.SiteInstallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteInstallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteInstallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteInstallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.palm.nut.v1.UserSignUpRequest.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.SiteInstallRequest}
 */
proto.palm.nut.v1.SiteInstallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteInstallRequest;
  return proto.palm.nut.v1.SiteInstallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteInstallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteInstallRequest}
 */
proto.palm.nut.v1.SiteInstallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.UserSignUpRequest;
      reader.readMessage(value,proto.palm.nut.v1.UserSignUpRequest.deserializeBinaryFromReader);
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
proto.palm.nut.v1.SiteInstallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteInstallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteInstallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteInstallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.UserSignUpRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserSignUpRequest user = 1;
 * @return {?proto.palm.nut.v1.UserSignUpRequest}
 */
proto.palm.nut.v1.SiteInstallRequest.prototype.getUser = function() {
  return /** @type{?proto.palm.nut.v1.UserSignUpRequest} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.UserSignUpRequest, 1));
};


/**
 * @param {?proto.palm.nut.v1.UserSignUpRequest|undefined} value
 * @return {!proto.palm.nut.v1.SiteInstallRequest} returns this
*/
proto.palm.nut.v1.SiteInstallRequest.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteInstallRequest} returns this
 */
proto.palm.nut.v1.SiteInstallRequest.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteInstallRequest.prototype.hasUser = function() {
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
proto.palm.nut.v1.MinioProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.MinioProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.MinioProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.MinioProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    region: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accessKey: jspb.Message.getFieldWithDefault(msg, 8, ""),
    secretKey: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.palm.nut.v1.MinioProfile}
 */
proto.palm.nut.v1.MinioProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.MinioProfile;
  return proto.palm.nut.v1.MinioProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.MinioProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.MinioProfile}
 */
proto.palm.nut.v1.MinioProfile.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRegion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessKey(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretKey(value);
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
proto.palm.nut.v1.MinioProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.MinioProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.MinioProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.MinioProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccessKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSecretKey();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.palm.nut.v1.MinioProfile.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.MinioProfile} returns this
 */
proto.palm.nut.v1.MinioProfile.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string region = 2;
 * @return {string}
 */
proto.palm.nut.v1.MinioProfile.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.MinioProfile} returns this
 */
proto.palm.nut.v1.MinioProfile.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string access_key = 8;
 * @return {string}
 */
proto.palm.nut.v1.MinioProfile.prototype.getAccessKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.MinioProfile} returns this
 */
proto.palm.nut.v1.MinioProfile.prototype.setAccessKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string secret_key = 9;
 * @return {string}
 */
proto.palm.nut.v1.MinioProfile.prototype.getSecretKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.MinioProfile} returns this
 */
proto.palm.nut.v1.MinioProfile.prototype.setSecretKey = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SiteMinioTestResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.SiteMinioTestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteMinioTestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteMinioTestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteMinioTestResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteMinioTestResponse}
 */
proto.palm.nut.v1.SiteMinioTestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteMinioTestResponse;
  return proto.palm.nut.v1.SiteMinioTestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteMinioTestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteMinioTestResponse}
 */
proto.palm.nut.v1.SiteMinioTestResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteMinioTestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteMinioTestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteMinioTestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteMinioTestResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteMinioTestResponse.prototype.getBucketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.nut.v1.SiteMinioTestResponse} returns this
 */
proto.palm.nut.v1.SiteMinioTestResponse.prototype.setBucketsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SiteMinioTestResponse} returns this
 */
proto.palm.nut.v1.SiteMinioTestResponse.prototype.addBuckets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SiteMinioTestResponse} returns this
 */
proto.palm.nut.v1.SiteMinioTestResponse.prototype.clearBucketsList = function() {
  return this.setBucketsList([]);
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
proto.palm.nut.v1.TwilioProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.TwilioProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.TwilioProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TwilioProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountSid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    authToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    smsStatusCallback: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.palm.nut.v1.TwilioProfile}
 */
proto.palm.nut.v1.TwilioProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.TwilioProfile;
  return proto.palm.nut.v1.TwilioProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.TwilioProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.TwilioProfile}
 */
proto.palm.nut.v1.TwilioProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthToken(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsStatusCallback(value);
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
proto.palm.nut.v1.TwilioProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.TwilioProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.TwilioProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TwilioProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountSid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuthToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.palm.nut.v1.TwilioProfile.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.TwilioProfile} returns this
 */
proto.palm.nut.v1.TwilioProfile.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_sid = 2;
 * @return {string}
 */
proto.palm.nut.v1.TwilioProfile.prototype.getAccountSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.TwilioProfile} returns this
 */
proto.palm.nut.v1.TwilioProfile.prototype.setAccountSid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string auth_token = 3;
 * @return {string}
 */
proto.palm.nut.v1.TwilioProfile.prototype.getAuthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.TwilioProfile} returns this
 */
proto.palm.nut.v1.TwilioProfile.prototype.setAuthToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sms_status_callback = 9;
 * @return {string}
 */
proto.palm.nut.v1.TwilioProfile.prototype.getSmsStatusCallback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.TwilioProfile} returns this
 */
proto.palm.nut.v1.TwilioProfile.prototype.setSmsStatusCallback = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.TwilioProfile} returns this
 */
proto.palm.nut.v1.TwilioProfile.prototype.clearSmsStatusCallback = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.TwilioProfile.prototype.hasSmsStatusCallback = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SmtpProfile.repeatedFields_ = [8,9];



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
proto.palm.nut.v1.SmtpProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SmtpProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SmtpProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SmtpProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    authMethod: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ccList: jspb.Message.toObjectList(msg.getCcList(),
    proto.palm.nut.v1.EmailTask.Address.toObject, includeInstance),
    bccList: jspb.Message.toObjectList(msg.getBccList(),
    proto.palm.nut.v1.EmailTask.Address.toObject, includeInstance),
    user: (f = msg.getUser()) && proto.palm.nut.v1.EmailTask.Address.toObject(includeInstance, f),
    password: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.palm.nut.v1.SmtpProfile}
 */
proto.palm.nut.v1.SmtpProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SmtpProfile;
  return proto.palm.nut.v1.SmtpProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SmtpProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SmtpProfile}
 */
proto.palm.nut.v1.SmtpProfile.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.palm.nut.v1.SmtpProfile.AuthMethod} */ (reader.readEnum());
      msg.setAuthMethod(value);
      break;
    case 8:
      var value = new proto.palm.nut.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addCc(value);
      break;
    case 9:
      var value = new proto.palm.nut.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addBcc(value);
      break;
    case 11:
      var value = new proto.palm.nut.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 12:
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
proto.palm.nut.v1.SmtpProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SmtpProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SmtpProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SmtpProfile.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAuthMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCcList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getBccList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.palm.nut.v1.SmtpProfile.AuthMethod = {
  NONE: 0,
  LOGIN: 1,
  STARTTLS: 2
};

/**
 * optional string host = 1;
 * @return {string}
 */
proto.palm.nut.v1.SmtpProfile.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
 */
proto.palm.nut.v1.SmtpProfile.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.palm.nut.v1.SmtpProfile.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
 */
proto.palm.nut.v1.SmtpProfile.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AuthMethod auth_method = 3;
 * @return {!proto.palm.nut.v1.SmtpProfile.AuthMethod}
 */
proto.palm.nut.v1.SmtpProfile.prototype.getAuthMethod = function() {
  return /** @type {!proto.palm.nut.v1.SmtpProfile.AuthMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.palm.nut.v1.SmtpProfile.AuthMethod} value
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
 */
proto.palm.nut.v1.SmtpProfile.prototype.setAuthMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated EmailTask.Address cc = 8;
 * @return {!Array<!proto.palm.nut.v1.EmailTask.Address>}
 */
proto.palm.nut.v1.SmtpProfile.prototype.getCcList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.EmailTask.Address, 8));
};


/**
 * @param {!Array<!proto.palm.nut.v1.EmailTask.Address>} value
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
*/
proto.palm.nut.v1.SmtpProfile.prototype.setCcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.palm.nut.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.SmtpProfile.prototype.addCc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.palm.nut.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
 */
proto.palm.nut.v1.SmtpProfile.prototype.clearCcList = function() {
  return this.setCcList([]);
};


/**
 * repeated EmailTask.Address bcc = 9;
 * @return {!Array<!proto.palm.nut.v1.EmailTask.Address>}
 */
proto.palm.nut.v1.SmtpProfile.prototype.getBccList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.EmailTask.Address, 9));
};


/**
 * @param {!Array<!proto.palm.nut.v1.EmailTask.Address>} value
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
*/
proto.palm.nut.v1.SmtpProfile.prototype.setBccList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.palm.nut.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.SmtpProfile.prototype.addBcc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.palm.nut.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
 */
proto.palm.nut.v1.SmtpProfile.prototype.clearBccList = function() {
  return this.setBccList([]);
};


/**
 * optional EmailTask.Address user = 11;
 * @return {?proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.SmtpProfile.prototype.getUser = function() {
  return /** @type{?proto.palm.nut.v1.EmailTask.Address} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.EmailTask.Address, 11));
};


/**
 * @param {?proto.palm.nut.v1.EmailTask.Address|undefined} value
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
*/
proto.palm.nut.v1.SmtpProfile.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
 */
proto.palm.nut.v1.SmtpProfile.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SmtpProfile.prototype.hasUser = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string password = 12;
 * @return {string}
 */
proto.palm.nut.v1.SmtpProfile.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SmtpProfile} returns this
 */
proto.palm.nut.v1.SmtpProfile.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.EmailTask.repeatedFields_ = [12,13,21];



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
proto.palm.nut.v1.EmailTask.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.EmailTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.EmailTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.EmailTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    to: (f = msg.getTo()) && proto.palm.nut.v1.EmailTask.Address.toObject(includeInstance, f),
    ccList: jspb.Message.toObjectList(msg.getCcList(),
    proto.palm.nut.v1.EmailTask.Address.toObject, includeInstance),
    bccList: jspb.Message.toObjectList(msg.getBccList(),
    proto.palm.nut.v1.EmailTask.Address.toObject, includeInstance),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.palm.nut.v1.EmailTask.Attachment.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.EmailTask}
 */
proto.palm.nut.v1.EmailTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.EmailTask;
  return proto.palm.nut.v1.EmailTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.EmailTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.EmailTask}
 */
proto.palm.nut.v1.EmailTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {!proto.palm.nut.v1.EmailTask.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 11:
      var value = new proto.palm.nut.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 12:
      var value = new proto.palm.nut.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addCc(value);
      break;
    case 13:
      var value = new proto.palm.nut.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addBcc(value);
      break;
    case 21:
      var value = new proto.palm.nut.v1.EmailTask.Attachment;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Attachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
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
proto.palm.nut.v1.EmailTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.EmailTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.EmailTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.EmailTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getCcList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getBccList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.palm.nut.v1.EmailTask.Attachment.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.palm.nut.v1.EmailTask.ContentType = {
  PLAIN: 0,
  HTML: 1
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
proto.palm.nut.v1.EmailTask.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.EmailTask.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.EmailTask.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.EmailTask.Address.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.EmailTask.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.EmailTask.Address;
  return proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.EmailTask.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.EmailTask.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.EmailTask.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.EmailTask.Address.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.EmailTask.Address} returns this
 */
proto.palm.nut.v1.EmailTask.Address.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.nut.v1.EmailTask.Address.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.EmailTask.Address} returns this
 */
proto.palm.nut.v1.EmailTask.Address.prototype.setEmail = function(value) {
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
proto.palm.nut.v1.EmailTask.Attachment.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.EmailTask.Attachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.EmailTask.Attachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.EmailTask.Attachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payload: msg.getPayload_asB64()
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
 * @return {!proto.palm.nut.v1.EmailTask.Attachment}
 */
proto.palm.nut.v1.EmailTask.Attachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.EmailTask.Attachment;
  return proto.palm.nut.v1.EmailTask.Attachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.EmailTask.Attachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.EmailTask.Attachment}
 */
proto.palm.nut.v1.EmailTask.Attachment.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContentType(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.palm.nut.v1.EmailTask.Attachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.EmailTask.Attachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.EmailTask.Attachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.EmailTask.Attachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.EmailTask.Attachment} returns this
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content_type = 2;
 * @return {string}
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.EmailTask.Attachment} returns this
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes payload = 3;
 * @return {!(string|Uint8Array)}
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes payload = 3;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.palm.nut.v1.EmailTask.Attachment} returns this
 */
proto.palm.nut.v1.EmailTask.Attachment.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string subject = 1;
 * @return {string}
 */
proto.palm.nut.v1.EmailTask.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.EmailTask} returns this
 */
proto.palm.nut.v1.EmailTask.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.palm.nut.v1.EmailTask.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.EmailTask} returns this
 */
proto.palm.nut.v1.EmailTask.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ContentType content_type = 3;
 * @return {!proto.palm.nut.v1.EmailTask.ContentType}
 */
proto.palm.nut.v1.EmailTask.prototype.getContentType = function() {
  return /** @type {!proto.palm.nut.v1.EmailTask.ContentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.palm.nut.v1.EmailTask.ContentType} value
 * @return {!proto.palm.nut.v1.EmailTask} returns this
 */
proto.palm.nut.v1.EmailTask.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Address to = 11;
 * @return {?proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.EmailTask.prototype.getTo = function() {
  return /** @type{?proto.palm.nut.v1.EmailTask.Address} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.EmailTask.Address, 11));
};


/**
 * @param {?proto.palm.nut.v1.EmailTask.Address|undefined} value
 * @return {!proto.palm.nut.v1.EmailTask} returns this
*/
proto.palm.nut.v1.EmailTask.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.EmailTask} returns this
 */
proto.palm.nut.v1.EmailTask.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.EmailTask.prototype.hasTo = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Address cc = 12;
 * @return {!Array<!proto.palm.nut.v1.EmailTask.Address>}
 */
proto.palm.nut.v1.EmailTask.prototype.getCcList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.EmailTask.Address, 12));
};


/**
 * @param {!Array<!proto.palm.nut.v1.EmailTask.Address>} value
 * @return {!proto.palm.nut.v1.EmailTask} returns this
*/
proto.palm.nut.v1.EmailTask.prototype.setCcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.palm.nut.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.EmailTask.prototype.addCc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.palm.nut.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.EmailTask} returns this
 */
proto.palm.nut.v1.EmailTask.prototype.clearCcList = function() {
  return this.setCcList([]);
};


/**
 * repeated Address bcc = 13;
 * @return {!Array<!proto.palm.nut.v1.EmailTask.Address>}
 */
proto.palm.nut.v1.EmailTask.prototype.getBccList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.EmailTask.Address, 13));
};


/**
 * @param {!Array<!proto.palm.nut.v1.EmailTask.Address>} value
 * @return {!proto.palm.nut.v1.EmailTask} returns this
*/
proto.palm.nut.v1.EmailTask.prototype.setBccList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.palm.nut.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.EmailTask.prototype.addBcc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.palm.nut.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.EmailTask} returns this
 */
proto.palm.nut.v1.EmailTask.prototype.clearBccList = function() {
  return this.setBccList([]);
};


/**
 * repeated Attachment attachments = 21;
 * @return {!Array<!proto.palm.nut.v1.EmailTask.Attachment>}
 */
proto.palm.nut.v1.EmailTask.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.EmailTask.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.EmailTask.Attachment, 21));
};


/**
 * @param {!Array<!proto.palm.nut.v1.EmailTask.Attachment>} value
 * @return {!proto.palm.nut.v1.EmailTask} returns this
*/
proto.palm.nut.v1.EmailTask.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.palm.nut.v1.EmailTask.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.EmailTask.Attachment}
 */
proto.palm.nut.v1.EmailTask.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.palm.nut.v1.EmailTask.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.EmailTask} returns this
 */
proto.palm.nut.v1.EmailTask.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
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
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteTwilioTestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteTwilioTestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteTwilioTestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profile: (f = msg.getProfile()) && proto.palm.nut.v1.TwilioProfile.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.SiteTwilioTestRequest}
 */
proto.palm.nut.v1.SiteTwilioTestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteTwilioTestRequest;
  return proto.palm.nut.v1.SiteTwilioTestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteTwilioTestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteTwilioTestRequest}
 */
proto.palm.nut.v1.SiteTwilioTestRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMessage(value);
      break;
    case 9:
      var value = new proto.palm.nut.v1.TwilioProfile;
      reader.readMessage(value,proto.palm.nut.v1.TwilioProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
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
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteTwilioTestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteTwilioTestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteTwilioTestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.nut.v1.TwilioProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string to = 1;
 * @return {string}
 */
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteTwilioTestRequest} returns this
 */
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteTwilioTestRequest} returns this
 */
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TwilioProfile profile = 9;
 * @return {?proto.palm.nut.v1.TwilioProfile}
 */
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.getProfile = function() {
  return /** @type{?proto.palm.nut.v1.TwilioProfile} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.TwilioProfile, 9));
};


/**
 * @param {?proto.palm.nut.v1.TwilioProfile|undefined} value
 * @return {!proto.palm.nut.v1.SiteTwilioTestRequest} returns this
*/
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteTwilioTestRequest} returns this
 */
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteTwilioTestRequest.prototype.hasProfile = function() {
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
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteSmtpTestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteSmtpTestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSmtpTestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: (f = msg.getTo()) && proto.palm.nut.v1.EmailTask.Address.toObject(includeInstance, f),
    subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    profile: (f = msg.getProfile()) && proto.palm.nut.v1.SmtpProfile.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteSmtpTestRequest;
  return proto.palm.nut.v1.SiteSmtpTestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteSmtpTestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.nut.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 9:
      var value = new proto.palm.nut.v1.SmtpProfile;
      reader.readMessage(value,proto.palm.nut.v1.SmtpProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
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
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteSmtpTestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteSmtpTestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSmtpTestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.palm.nut.v1.SmtpProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional EmailTask.Address to = 1;
 * @return {?proto.palm.nut.v1.EmailTask.Address}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.getTo = function() {
  return /** @type{?proto.palm.nut.v1.EmailTask.Address} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.EmailTask.Address, 1));
};


/**
 * @param {?proto.palm.nut.v1.EmailTask.Address|undefined} value
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest} returns this
*/
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest} returns this
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest} returns this
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest} returns this
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SmtpProfile profile = 9;
 * @return {?proto.palm.nut.v1.SmtpProfile}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.getProfile = function() {
  return /** @type{?proto.palm.nut.v1.SmtpProfile} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SmtpProfile, 9));
};


/**
 * @param {?proto.palm.nut.v1.SmtpProfile|undefined} value
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest} returns this
*/
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteSmtpTestRequest} returns this
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteSmtpTestRequest.prototype.hasProfile = function() {
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
proto.palm.nut.v1.SiteSetLogoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteSetLogoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteSetLogoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetLogoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteSetLogoRequest}
 */
proto.palm.nut.v1.SiteSetLogoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteSetLogoRequest;
  return proto.palm.nut.v1.SiteSetLogoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteSetLogoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteSetLogoRequest}
 */
proto.palm.nut.v1.SiteSetLogoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteSetLogoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteSetLogoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteSetLogoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetLogoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteSetLogoRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSetLogoRequest} returns this
 */
proto.palm.nut.v1.SiteSetLogoRequest.prototype.setUrl = function(value) {
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
proto.palm.nut.v1.SiteSetCopyrightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteSetCopyrightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteSetCopyrightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetCopyrightRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteSetCopyrightRequest}
 */
proto.palm.nut.v1.SiteSetCopyrightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteSetCopyrightRequest;
  return proto.palm.nut.v1.SiteSetCopyrightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteSetCopyrightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteSetCopyrightRequest}
 */
proto.palm.nut.v1.SiteSetCopyrightRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteSetCopyrightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteSetCopyrightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteSetCopyrightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetCopyrightRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteSetCopyrightRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSetCopyrightRequest} returns this
 */
proto.palm.nut.v1.SiteSetCopyrightRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.repeatedFields_ = [1];



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
proto.palm.nut.v1.SiteSetKeywordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteSetKeywordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteSetKeywordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteSetKeywordsRequest}
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteSetKeywordsRequest;
  return proto.palm.nut.v1.SiteSetKeywordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteSetKeywordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteSetKeywordsRequest}
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteSetKeywordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteSetKeywordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteSetKeywordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteSetKeywordsRequest.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.nut.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.nut.v1.SiteSetKeywordsRequest.prototype.clearItemsList = function() {
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
proto.palm.nut.v1.SiteSetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteSetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteSetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lang: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 11, ""),
    subhead: jspb.Message.getFieldWithDefault(msg, 12, ""),
    description: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.palm.nut.v1.SiteSetInfoRequest}
 */
proto.palm.nut.v1.SiteSetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteSetInfoRequest;
  return proto.palm.nut.v1.SiteSetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteSetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteSetInfoRequest}
 */
proto.palm.nut.v1.SiteSetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubhead(value);
      break;
    case 13:
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
proto.palm.nut.v1.SiteSetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteSetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteSetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteSetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLang();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSubhead();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string lang = 1;
 * @return {string}
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSetInfoRequest} returns this
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 11;
 * @return {string}
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSetInfoRequest} returns this
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string subhead = 12;
 * @return {string}
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.getSubhead = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSetInfoRequest} returns this
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.setSubhead = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string description = 13;
 * @return {string}
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteSetInfoRequest} returns this
 */
proto.palm.nut.v1.SiteSetInfoRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SiteLayoutResponse.repeatedFields_ = [3,9];



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
proto.palm.nut.v1.SiteLayoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteLayoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteLayoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteLayoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subhead: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keywordsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    author: (f = msg.getAuthor()) && proto.palm.nut.v1.SiteLayoutResponse.Author.toObject(includeInstance, f),
    copyright: jspb.Message.getFieldWithDefault(msg, 6, ""),
    logo: jspb.Message.getFieldWithDefault(msg, 7, ""),
    languagesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.palm.nut.v1.SiteLayoutResponse}
 */
proto.palm.nut.v1.SiteLayoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteLayoutResponse;
  return proto.palm.nut.v1.SiteLayoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteLayoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteLayoutResponse}
 */
proto.palm.nut.v1.SiteLayoutResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.nut.v1.SiteLayoutResponse.Author;
      reader.readMessage(value,proto.palm.nut.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader);
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
proto.palm.nut.v1.SiteLayoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteLayoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteLayoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteLayoutResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.nut.v1.SiteLayoutResponse.Author.serializeBinaryToWriter
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
proto.palm.nut.v1.SiteLayoutResponse.Author.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteLayoutResponse.Author.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteLayoutResponse.Author} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteLayoutResponse.Author.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteLayoutResponse.Author}
 */
proto.palm.nut.v1.SiteLayoutResponse.Author.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteLayoutResponse.Author;
  return proto.palm.nut.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteLayoutResponse.Author} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteLayoutResponse.Author}
 */
proto.palm.nut.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteLayoutResponse.Author.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteLayoutResponse.Author.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteLayoutResponse.Author} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteLayoutResponse.Author.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteLayoutResponse.Author.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse.Author} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.Author.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteLayoutResponse.Author.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse.Author} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.Author.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subhead = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getSubhead = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.setSubhead = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string keywords = 3;
 * @return {!Array<string>}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getKeywordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.setKeywordsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.addKeywords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.clearKeywordsList = function() {
  return this.setKeywordsList([]);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Author author = 5;
 * @return {?proto.palm.nut.v1.SiteLayoutResponse.Author}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getAuthor = function() {
  return /** @type{?proto.palm.nut.v1.SiteLayoutResponse.Author} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteLayoutResponse.Author, 5));
};


/**
 * @param {?proto.palm.nut.v1.SiteLayoutResponse.Author|undefined} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
*/
proto.palm.nut.v1.SiteLayoutResponse.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string copyright = 6;
 * @return {string}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getCopyright = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.setCopyright = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string logo = 7;
 * @return {string}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.setLogo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string languages = 9;
 * @return {!Array<string>}
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SiteLayoutResponse} returns this
 */
proto.palm.nut.v1.SiteLayoutResponse.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
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
proto.palm.nut.v1.GoogleProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.GoogleProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.GoogleProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.GoogleProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteVerifyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reCaptcha: (f = msg.getReCaptcha()) && proto.palm.nut.v1.GoogleProfile.ReCaptcha.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.GoogleProfile}
 */
proto.palm.nut.v1.GoogleProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.GoogleProfile;
  return proto.palm.nut.v1.GoogleProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.GoogleProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.GoogleProfile}
 */
proto.palm.nut.v1.GoogleProfile.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.nut.v1.GoogleProfile.ReCaptcha;
      reader.readMessage(value,proto.palm.nut.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader);
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
proto.palm.nut.v1.GoogleProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.GoogleProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.GoogleProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.GoogleProfile.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.nut.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter
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
proto.palm.nut.v1.GoogleProfile.ReCaptcha.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.GoogleProfile.ReCaptcha.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.GoogleProfile.ReCaptcha} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.GoogleProfile.ReCaptcha.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.nut.v1.GoogleProfile.ReCaptcha.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.GoogleProfile.ReCaptcha;
  return proto.palm.nut.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.GoogleProfile.ReCaptcha} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.nut.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.GoogleProfile.ReCaptcha.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.GoogleProfile.ReCaptcha} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.GoogleProfile.ReCaptcha.prototype.getSiteKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.GoogleProfile.ReCaptcha} returns this
 */
proto.palm.nut.v1.GoogleProfile.ReCaptcha.prototype.setSiteKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret = 2;
 * @return {string}
 */
proto.palm.nut.v1.GoogleProfile.ReCaptcha.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.GoogleProfile.ReCaptcha} returns this
 */
proto.palm.nut.v1.GoogleProfile.ReCaptcha.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string site_verify_id = 1;
 * @return {string}
 */
proto.palm.nut.v1.GoogleProfile.prototype.getSiteVerifyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.GoogleProfile} returns this
 */
proto.palm.nut.v1.GoogleProfile.prototype.setSiteVerifyId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.GoogleProfile} returns this
 */
proto.palm.nut.v1.GoogleProfile.prototype.clearSiteVerifyId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.GoogleProfile.prototype.hasSiteVerifyId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReCaptcha re_captcha = 2;
 * @return {?proto.palm.nut.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.nut.v1.GoogleProfile.prototype.getReCaptcha = function() {
  return /** @type{?proto.palm.nut.v1.GoogleProfile.ReCaptcha} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.GoogleProfile.ReCaptcha, 2));
};


/**
 * @param {?proto.palm.nut.v1.GoogleProfile.ReCaptcha|undefined} value
 * @return {!proto.palm.nut.v1.GoogleProfile} returns this
*/
proto.palm.nut.v1.GoogleProfile.prototype.setReCaptcha = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.GoogleProfile} returns this
 */
proto.palm.nut.v1.GoogleProfile.prototype.clearReCaptcha = function() {
  return this.setReCaptcha(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.GoogleProfile.prototype.hasReCaptcha = function() {
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
proto.palm.nut.v1.BaiduProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.BaiduProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.BaiduProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.BaiduProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteVerify: (f = msg.getSiteVerify()) && proto.palm.nut.v1.BaiduProfile.SiteVerify.toObject(includeInstance, f)
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
 * @return {!proto.palm.nut.v1.BaiduProfile}
 */
proto.palm.nut.v1.BaiduProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.BaiduProfile;
  return proto.palm.nut.v1.BaiduProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.BaiduProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.BaiduProfile}
 */
proto.palm.nut.v1.BaiduProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.BaiduProfile.SiteVerify;
      reader.readMessage(value,proto.palm.nut.v1.BaiduProfile.SiteVerify.deserializeBinaryFromReader);
      msg.setSiteVerify(value);
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
proto.palm.nut.v1.BaiduProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.BaiduProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.BaiduProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.BaiduProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSiteVerify();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.BaiduProfile.SiteVerify.serializeBinaryToWriter
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
proto.palm.nut.v1.BaiduProfile.SiteVerify.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.BaiduProfile.SiteVerify.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.BaiduProfile.SiteVerify} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.nut.v1.BaiduProfile.SiteVerify}
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.BaiduProfile.SiteVerify;
  return proto.palm.nut.v1.BaiduProfile.SiteVerify.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.BaiduProfile.SiteVerify} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.BaiduProfile.SiteVerify}
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.palm.nut.v1.BaiduProfile.SiteVerify.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.BaiduProfile.SiteVerify.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.BaiduProfile.SiteVerify} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.BaiduProfile.SiteVerify} returns this
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.BaiduProfile.SiteVerify} returns this
 */
proto.palm.nut.v1.BaiduProfile.SiteVerify.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SiteVerify site_verify = 1;
 * @return {?proto.palm.nut.v1.BaiduProfile.SiteVerify}
 */
proto.palm.nut.v1.BaiduProfile.prototype.getSiteVerify = function() {
  return /** @type{?proto.palm.nut.v1.BaiduProfile.SiteVerify} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.BaiduProfile.SiteVerify, 1));
};


/**
 * @param {?proto.palm.nut.v1.BaiduProfile.SiteVerify|undefined} value
 * @return {!proto.palm.nut.v1.BaiduProfile} returns this
*/
proto.palm.nut.v1.BaiduProfile.prototype.setSiteVerify = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.BaiduProfile} returns this
 */
proto.palm.nut.v1.BaiduProfile.prototype.clearSiteVerify = function() {
  return this.setSiteVerify(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.BaiduProfile.prototype.hasSiteVerify = function() {
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
proto.palm.nut.v1.BingProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.BingProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.BingProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.BingProfile.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.BingProfile}
 */
proto.palm.nut.v1.BingProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.BingProfile;
  return proto.palm.nut.v1.BingProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.BingProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.BingProfile}
 */
proto.palm.nut.v1.BingProfile.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.BingProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.BingProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.BingProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.BingProfile.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.BingProfile.prototype.getSiteVerifyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.BingProfile} returns this
 */
proto.palm.nut.v1.BingProfile.prototype.setSiteVerifyId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.BingProfile} returns this
 */
proto.palm.nut.v1.BingProfile.prototype.clearSiteVerifyId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.BingProfile.prototype.hasSiteVerifyId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SmsTask.repeatedFields_ = [2];



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
proto.palm.nut.v1.SmsTask.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SmsTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SmsTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SmsTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
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
 * @return {!proto.palm.nut.v1.SmsTask}
 */
proto.palm.nut.v1.SmsTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SmsTask;
  return proto.palm.nut.v1.SmsTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SmsTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SmsTask}
 */
proto.palm.nut.v1.SmsTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTo(value);
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
proto.palm.nut.v1.SmsTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SmsTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SmsTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SmsTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
 * optional string from = 1;
 * @return {string}
 */
proto.palm.nut.v1.SmsTask.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SmsTask} returns this
 */
proto.palm.nut.v1.SmsTask.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string to = 2;
 * @return {!Array<string>}
 */
proto.palm.nut.v1.SmsTask.prototype.getToList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.nut.v1.SmsTask} returns this
 */
proto.palm.nut.v1.SmsTask.prototype.setToList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SmsTask} returns this
 */
proto.palm.nut.v1.SmsTask.prototype.addTo = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SmsTask} returns this
 */
proto.palm.nut.v1.SmsTask.prototype.clearToList = function() {
  return this.setToList([]);
};


/**
 * optional string body = 3;
 * @return {string}
 */
proto.palm.nut.v1.SmsTask.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SmsTask} returns this
 */
proto.palm.nut.v1.SmsTask.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SiteStatusResponse.repeatedFields_ = [21];



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
proto.palm.nut.v1.SiteStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postgresql: (f = msg.getPostgresql()) && proto.palm.nut.v1.SiteStatusResponse.PostgreSql.toObject(includeInstance, f),
    mysql: (f = msg.getMysql()) && proto.palm.nut.v1.SiteStatusResponse.MySql.toObject(includeInstance, f),
    redis: (f = msg.getRedis()) && proto.palm.nut.v1.SiteStatusResponse.Redis.toObject(includeInstance, f),
    rabbitmq: (f = msg.getRabbitmq()) && proto.palm.nut.v1.SiteStatusResponse.RabbitMq.toObject(includeInstance, f),
    opensearch: (f = msg.getOpensearch()) && proto.palm.nut.v1.SiteStatusResponse.OpenSearch.toObject(includeInstance, f),
    system: (f = msg.getSystem()) && proto.palm.nut.v1.SiteStatusResponse.System.toObject(includeInstance, f),
    healthesList: jspb.Message.toObjectList(msg.getHealthesList(),
    proto.palm.nut.v1.SiteStatusResponse.Health.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse}
 */
proto.palm.nut.v1.SiteStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse;
  return proto.palm.nut.v1.SiteStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse}
 */
proto.palm.nut.v1.SiteStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.SiteStatusResponse.PostgreSql;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader);
      msg.setPostgresql(value);
      break;
    case 2:
      var value = new proto.palm.nut.v1.SiteStatusResponse.MySql;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader);
      msg.setMysql(value);
      break;
    case 3:
      var value = new proto.palm.nut.v1.SiteStatusResponse.Redis;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader);
      msg.setRedis(value);
      break;
    case 4:
      var value = new proto.palm.nut.v1.SiteStatusResponse.RabbitMq;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader);
      msg.setRabbitmq(value);
      break;
    case 5:
      var value = new proto.palm.nut.v1.SiteStatusResponse.OpenSearch;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.OpenSearch.deserializeBinaryFromReader);
      msg.setOpensearch(value);
      break;
    case 11:
      var value = new proto.palm.nut.v1.SiteStatusResponse.System;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.System.deserializeBinaryFromReader);
      msg.setSystem(value);
      break;
    case 21:
      var value = new proto.palm.nut.v1.SiteStatusResponse.Health;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.Health.deserializeBinaryFromReader);
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
proto.palm.nut.v1.SiteStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostgresql();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter
    );
  }
  f = message.getMysql();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.nut.v1.SiteStatusResponse.MySql.serializeBinaryToWriter
    );
  }
  f = message.getRedis();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.nut.v1.SiteStatusResponse.Redis.serializeBinaryToWriter
    );
  }
  f = message.getRabbitmq();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.palm.nut.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter
    );
  }
  f = message.getOpensearch();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.palm.nut.v1.SiteStatusResponse.OpenSearch.serializeBinaryToWriter
    );
  }
  f = message.getSystem();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.nut.v1.SiteStatusResponse.System.serializeBinaryToWriter
    );
  }
  f = message.getHealthesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.palm.nut.v1.SiteStatusResponse.Health.serializeBinaryToWriter
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
proto.palm.nut.v1.SiteStatusResponse.Database.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.Database.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Database} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Database.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Database}
 */
proto.palm.nut.v1.SiteStatusResponse.Database.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.Database;
  return proto.palm.nut.v1.SiteStatusResponse.Database.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Database} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Database}
 */
proto.palm.nut.v1.SiteStatusResponse.Database.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteStatusResponse.Database.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.Database.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Database} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Database.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteStatusResponse.Database.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Database} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Database.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string size = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.Database.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Database} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Database.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.repeatedFields_ = [9];



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
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.PostgreSql.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    now: (f = msg.getNow()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    databasesList: jspb.Message.toObjectList(msg.getDatabasesList(),
    proto.palm.nut.v1.SiteStatusResponse.Database.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.PostgreSql;
  return proto.palm.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.nut.v1.SiteStatusResponse.Database;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.Database.deserializeBinaryFromReader);
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
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.nut.v1.SiteStatusResponse.Database.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp now = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.getNow = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.setNow = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.clearNow = function() {
  return this.setNow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.hasNow = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Database databases = 9;
 * @return {!Array<!proto.palm.nut.v1.SiteStatusResponse.Database>}
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.getDatabasesList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.SiteStatusResponse.Database>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.Database, 9));
};


/**
 * @param {!Array<!proto.palm.nut.v1.SiteStatusResponse.Database>} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.setDatabasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Database=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Database}
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.addDatabases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.palm.nut.v1.SiteStatusResponse.Database, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.PostgreSql.prototype.clearDatabasesList = function() {
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
proto.palm.nut.v1.SiteStatusResponse.MySql.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.MySql.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.MySql} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.MySql.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.MySql}
 */
proto.palm.nut.v1.SiteStatusResponse.MySql.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.MySql;
  return proto.palm.nut.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.MySql} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.MySql}
 */
proto.palm.nut.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteStatusResponse.MySql.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.MySql.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.MySql} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.MySql.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteStatusResponse.MySql.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.MySql} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.MySql.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.MySql.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.MySql} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.MySql.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.repeatedFields_ = [2];



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
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.Redis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Redis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.SiteStatusResponse.Redis.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.Redis;
  return proto.palm.nut.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Redis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.nut.v1.SiteStatusResponse.Redis.Item;
      reader.readMessage(value,proto.palm.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.Redis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Redis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.nut.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.Redis.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.Redis.Item;
  return proto.palm.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ttl = 2;
 * @return {number}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.Item.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string info = 1;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.palm.nut.v1.SiteStatusResponse.Redis.Item>}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.SiteStatusResponse.Redis.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.Redis.Item, 2));
};


/**
 * @param {!Array<!proto.palm.nut.v1.SiteStatusResponse.Redis.Item>} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.palm.nut.v1.SiteStatusResponse.Redis.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Redis} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Redis.prototype.clearItemsList = function() {
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
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.RabbitMq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.RabbitMq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.RabbitMq;
  return proto.palm.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.RabbitMq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.RabbitMq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.RabbitMq} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.RabbitMq.prototype.setProtocol = function(value) {
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
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.OpenSearch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.OpenSearch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.OpenSearch}
 */
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.OpenSearch;
  return proto.palm.nut.v1.SiteStatusResponse.OpenSearch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.OpenSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.OpenSearch}
 */
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setInfo(value);
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
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.OpenSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.OpenSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfo();
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
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.OpenSearch} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string info = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.OpenSearch} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.OpenSearch.prototype.setInfo = function(value) {
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
proto.palm.nut.v1.SiteStatusResponse.Health.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.Health.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Health} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Health.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Health}
 */
proto.palm.nut.v1.SiteStatusResponse.Health.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.Health;
  return proto.palm.nut.v1.SiteStatusResponse.Health.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Health} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Health}
 */
proto.palm.nut.v1.SiteStatusResponse.Health.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteStatusResponse.Health.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.Health.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Health} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.Health.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteStatusResponse.Health.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Health} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Health.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.Health.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Health} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.Health.prototype.setStatus = function(value) {
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
proto.palm.nut.v1.SiteStatusResponse.System.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.SiteStatusResponse.System.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.SiteStatusResponse.System} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.System.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System}
 */
proto.palm.nut.v1.SiteStatusResponse.System.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.SiteStatusResponse.System;
  return proto.palm.nut.v1.SiteStatusResponse.System.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.System} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System}
 */
proto.palm.nut.v1.SiteStatusResponse.System.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.SiteStatusResponse.System.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.SiteStatusResponse.System.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.SiteStatusResponse.System} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.SiteStatusResponse.System.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cpu = 2;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getCpu = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setCpu = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string memory = 3;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getMemory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setMemory = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string boot = 4;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getBoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setBoot = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string disk = 5;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getDisk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setDisk = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string load = 6;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getLoad = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setLoad = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fs = 7;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getFs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setFs = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string swap = 8;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getSwap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setSwap = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string uptime = 9;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getUptime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setUptime = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string network = 10;
 * @return {string}
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse.System} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.System.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional PostgreSql postgresql = 1;
 * @return {?proto.palm.nut.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.getPostgresql = function() {
  return /** @type{?proto.palm.nut.v1.SiteStatusResponse.PostgreSql} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.PostgreSql, 1));
};


/**
 * @param {?proto.palm.nut.v1.SiteStatusResponse.PostgreSql|undefined} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.prototype.setPostgresql = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.clearPostgresql = function() {
  return this.setPostgresql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.hasPostgresql = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MySql mysql = 2;
 * @return {?proto.palm.nut.v1.SiteStatusResponse.MySql}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.getMysql = function() {
  return /** @type{?proto.palm.nut.v1.SiteStatusResponse.MySql} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.MySql, 2));
};


/**
 * @param {?proto.palm.nut.v1.SiteStatusResponse.MySql|undefined} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.prototype.setMysql = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.clearMysql = function() {
  return this.setMysql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.hasMysql = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Redis redis = 3;
 * @return {?proto.palm.nut.v1.SiteStatusResponse.Redis}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.getRedis = function() {
  return /** @type{?proto.palm.nut.v1.SiteStatusResponse.Redis} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.Redis, 3));
};


/**
 * @param {?proto.palm.nut.v1.SiteStatusResponse.Redis|undefined} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.prototype.setRedis = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.clearRedis = function() {
  return this.setRedis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.hasRedis = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RabbitMq rabbitmq = 4;
 * @return {?proto.palm.nut.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.getRabbitmq = function() {
  return /** @type{?proto.palm.nut.v1.SiteStatusResponse.RabbitMq} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.RabbitMq, 4));
};


/**
 * @param {?proto.palm.nut.v1.SiteStatusResponse.RabbitMq|undefined} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.prototype.setRabbitmq = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.clearRabbitmq = function() {
  return this.setRabbitmq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.hasRabbitmq = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OpenSearch opensearch = 5;
 * @return {?proto.palm.nut.v1.SiteStatusResponse.OpenSearch}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.getOpensearch = function() {
  return /** @type{?proto.palm.nut.v1.SiteStatusResponse.OpenSearch} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.OpenSearch, 5));
};


/**
 * @param {?proto.palm.nut.v1.SiteStatusResponse.OpenSearch|undefined} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.prototype.setOpensearch = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.clearOpensearch = function() {
  return this.setOpensearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.hasOpensearch = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional System system = 11;
 * @return {?proto.palm.nut.v1.SiteStatusResponse.System}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.getSystem = function() {
  return /** @type{?proto.palm.nut.v1.SiteStatusResponse.System} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.System, 11));
};


/**
 * @param {?proto.palm.nut.v1.SiteStatusResponse.System|undefined} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.prototype.setSystem = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.clearSystem = function() {
  return this.setSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Health healthes = 21;
 * @return {!Array<!proto.palm.nut.v1.SiteStatusResponse.Health>}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.getHealthesList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.SiteStatusResponse.Health>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.SiteStatusResponse.Health, 21));
};


/**
 * @param {!Array<!proto.palm.nut.v1.SiteStatusResponse.Health>} value
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
*/
proto.palm.nut.v1.SiteStatusResponse.prototype.setHealthesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.palm.nut.v1.SiteStatusResponse.Health=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.SiteStatusResponse.Health}
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.addHealthes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.palm.nut.v1.SiteStatusResponse.Health, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.SiteStatusResponse} returns this
 */
proto.palm.nut.v1.SiteStatusResponse.prototype.clearHealthesList = function() {
  return this.setHealthesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.repeatedFields_ = [11];



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
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.ShorterLinkIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.ShorterLinkIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.palm.nut.v1.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.ShorterLinkIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.ShorterLinkIndexResponse;
  return proto.palm.nut.v1.ShorterLinkIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.ShorterLinkIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.Pagination;
      reader.readMessage(value,proto.palm.nut.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 11:
      var value = new proto.palm.nut.v1.ShorterLinkIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.ShorterLinkIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.ShorterLinkIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.ShorterLinkIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.nut.v1.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.palm.nut.v1.ShorterLinkIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.ShorterLinkIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    details: jspb.Message.getFieldWithDefault(msg, 3, ""),
    code: jspb.Message.getFieldWithDefault(msg, 9, ""),
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
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.ShorterLinkIndexResponse.Item;
  return proto.palm.nut.v1.ShorterLinkIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.ShorterLinkIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      9,
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
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string code = 9;
 * @return {string}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} returns this
*/
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.palm.nut.v1.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse} returns this
*/
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse} returns this
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.nut.v1.ShorterLinkIndexResponse.Item>}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.ShorterLinkIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.ShorterLinkIndexResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.nut.v1.ShorterLinkIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse} returns this
*/
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse.Item}
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.nut.v1.ShorterLinkIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.ShorterLinkIndexResponse} returns this
 */
proto.palm.nut.v1.ShorterLinkIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.nut.v1.ShorterLinkCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.ShorterLinkCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.ShorterLinkCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.palm.nut.v1.ShorterLinkCreateRequest}
 */
proto.palm.nut.v1.ShorterLinkCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.ShorterLinkCreateRequest;
  return proto.palm.nut.v1.ShorterLinkCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.ShorterLinkCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.ShorterLinkCreateRequest}
 */
proto.palm.nut.v1.ShorterLinkCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDetails(value);
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
proto.palm.nut.v1.ShorterLinkCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.ShorterLinkCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.ShorterLinkCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
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
proto.palm.nut.v1.ShorterLinkCreateRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.ShorterLinkCreateRequest} returns this
 */
proto.palm.nut.v1.ShorterLinkCreateRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.palm.nut.v1.ShorterLinkCreateRequest.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.ShorterLinkCreateRequest} returns this
 */
proto.palm.nut.v1.ShorterLinkCreateRequest.prototype.setDetails = function(value) {
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
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.ShorterLinkUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.ShorterLinkUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    details: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.palm.nut.v1.ShorterLinkUpdateRequest}
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.ShorterLinkUpdateRequest;
  return proto.palm.nut.v1.ShorterLinkUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.ShorterLinkUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.ShorterLinkUpdateRequest}
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
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
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.ShorterLinkUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.ShorterLinkUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetails();
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
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.ShorterLinkUpdateRequest} returns this
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.ShorterLinkUpdateRequest} returns this
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.ShorterLinkUpdateRequest} returns this
 */
proto.palm.nut.v1.ShorterLinkUpdateRequest.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.TagIndexResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.TagIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.TagIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.TagIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.TagIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.TagIndexResponse}
 */
proto.palm.nut.v1.TagIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.TagIndexResponse;
  return proto.palm.nut.v1.TagIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.TagIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.TagIndexResponse}
 */
proto.palm.nut.v1.TagIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.TagIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.TagIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.TagIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.TagIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.TagIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.TagIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.TagIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.TagIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.TagIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item}
 */
proto.palm.nut.v1.TagIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.TagIndexResponse.Item;
  return proto.palm.nut.v1.TagIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.TagIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item}
 */
proto.palm.nut.v1.TagIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCode(value);
      break;
    case 3:
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
proto.palm.nut.v1.TagIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.TagIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.TagIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      3,
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
proto.palm.nut.v1.TagIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 3;
 * @return {number}
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item} returns this
*/
proto.palm.nut.v1.TagIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item} returns this
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.TagIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.TagIndexResponse.Item>}
 */
proto.palm.nut.v1.TagIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.TagIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.TagIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.TagIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.TagIndexResponse} returns this
*/
proto.palm.nut.v1.TagIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.TagIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.TagIndexResponse.Item}
 */
proto.palm.nut.v1.TagIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.TagIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.TagIndexResponse} returns this
 */
proto.palm.nut.v1.TagIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.nut.v1.TagCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.TagCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.TagCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.palm.nut.v1.TagCreateRequest}
 */
proto.palm.nut.v1.TagCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.TagCreateRequest;
  return proto.palm.nut.v1.TagCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.TagCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.TagCreateRequest}
 */
proto.palm.nut.v1.TagCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.TagCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.TagCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.TagCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
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
 * optional string code = 1;
 * @return {string}
 */
proto.palm.nut.v1.TagCreateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.TagCreateRequest} returns this
 */
proto.palm.nut.v1.TagCreateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.nut.v1.TagCreateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.TagCreateRequest} returns this
 */
proto.palm.nut.v1.TagCreateRequest.prototype.setPriority = function(value) {
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
proto.palm.nut.v1.TagUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.TagUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.TagUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.palm.nut.v1.TagUpdateRequest}
 */
proto.palm.nut.v1.TagUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.TagUpdateRequest;
  return proto.palm.nut.v1.TagUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.TagUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.TagUpdateRequest}
 */
proto.palm.nut.v1.TagUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCode(value);
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
proto.palm.nut.v1.TagUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.TagUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.TagUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.TagUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
proto.palm.nut.v1.TagUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.TagUpdateRequest} returns this
 */
proto.palm.nut.v1.TagUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.TagUpdateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.TagUpdateRequest} returns this
 */
proto.palm.nut.v1.TagUpdateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.nut.v1.TagUpdateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.TagUpdateRequest} returns this
 */
proto.palm.nut.v1.TagUpdateRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.nut.v1.CategoryIndexResponse.repeatedFields_ = [1];



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
proto.palm.nut.v1.CategoryIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.CategoryIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.CategoryIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.nut.v1.CategoryIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.nut.v1.CategoryIndexResponse}
 */
proto.palm.nut.v1.CategoryIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.CategoryIndexResponse;
  return proto.palm.nut.v1.CategoryIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.CategoryIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.CategoryIndexResponse}
 */
proto.palm.nut.v1.CategoryIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.nut.v1.CategoryIndexResponse.Item;
      reader.readMessage(value,proto.palm.nut.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.nut.v1.CategoryIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.CategoryIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.CategoryIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.nut.v1.CategoryIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.CategoryIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.CategoryIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    left: jspb.Message.getFieldWithDefault(msg, 3, 0),
    right: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item}
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.CategoryIndexResponse.Item;
  return proto.palm.nut.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.CategoryIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item}
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeft(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRight(value);
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
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.CategoryIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.CategoryIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getLeft();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRight();
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
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 left = 3;
 * @return {number}
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.setLeft = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 right = 4;
 * @return {number}
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.getRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.setRight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item} returns this
*/
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.CategoryIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.nut.v1.CategoryIndexResponse.Item>}
 */
proto.palm.nut.v1.CategoryIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.nut.v1.CategoryIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.nut.v1.CategoryIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.nut.v1.CategoryIndexResponse.Item>} value
 * @return {!proto.palm.nut.v1.CategoryIndexResponse} returns this
*/
proto.palm.nut.v1.CategoryIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.nut.v1.CategoryIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.nut.v1.CategoryIndexResponse.Item}
 */
proto.palm.nut.v1.CategoryIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.nut.v1.CategoryIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.nut.v1.CategoryIndexResponse} returns this
 */
proto.palm.nut.v1.CategoryIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.nut.v1.CategoryCreateRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.palm.nut.v1.CategoryCreateRequest.ByCase = {
  BY_NOT_SET: 0,
  LEFT: 2,
  PARENT: 3
};

/**
 * @return {proto.palm.nut.v1.CategoryCreateRequest.ByCase}
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.getByCase = function() {
  return /** @type {proto.palm.nut.v1.CategoryCreateRequest.ByCase} */(jspb.Message.computeOneofCase(this, proto.palm.nut.v1.CategoryCreateRequest.oneofGroups_[0]));
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
proto.palm.nut.v1.CategoryCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.CategoryCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.CategoryCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    left: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parent: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.palm.nut.v1.CategoryCreateRequest}
 */
proto.palm.nut.v1.CategoryCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.CategoryCreateRequest;
  return proto.palm.nut.v1.CategoryCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.CategoryCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.CategoryCreateRequest}
 */
proto.palm.nut.v1.CategoryCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParent(value);
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
proto.palm.nut.v1.CategoryCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.CategoryCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.CategoryCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 left = 2;
 * @return {number}
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.setLeft = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.CategoryCreateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.clearLeft = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.nut.v1.CategoryCreateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.hasLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 parent = 3;
 * @return {number}
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.getParent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.setParent = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.palm.nut.v1.CategoryCreateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.nut.v1.CategoryCreateRequest} returns this
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.clearParent = function() {
  return jspb.Message.setOneofField(this, 3, proto.palm.nut.v1.CategoryCreateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.nut.v1.CategoryCreateRequest.prototype.hasParent = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.palm.nut.v1.CategoryUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.nut.v1.CategoryUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.nut.v1.CategoryUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.palm.nut.v1.CategoryUpdateRequest}
 */
proto.palm.nut.v1.CategoryUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.nut.v1.CategoryUpdateRequest;
  return proto.palm.nut.v1.CategoryUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.nut.v1.CategoryUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.nut.v1.CategoryUpdateRequest}
 */
proto.palm.nut.v1.CategoryUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.nut.v1.CategoryUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.nut.v1.CategoryUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.nut.v1.CategoryUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.nut.v1.CategoryUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.nut.v1.CategoryUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.nut.v1.CategoryUpdateRequest} returns this
 */
proto.palm.nut.v1.CategoryUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.nut.v1.CategoryUpdateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.nut.v1.CategoryUpdateRequest} returns this
 */
proto.palm.nut.v1.CategoryUpdateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.palm.nut.v1);
