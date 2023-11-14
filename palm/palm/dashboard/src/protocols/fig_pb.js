// source: fig.proto
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
var auth_pb = require('./auth_pb.js');
goog.object.extend(proto, auth_pb);
goog.exportSymbol('proto.palm.fig.v1.BaiduProfile', null, global);
goog.exportSymbol('proto.palm.fig.v1.BaiduProfile.SiteVerify', null, global);
goog.exportSymbol('proto.palm.fig.v1.CategoryCreateRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.CategoryCreateRequest.ByCase', null, global);
goog.exportSymbol('proto.palm.fig.v1.CategoryIndexResponse', null, global);
goog.exportSymbol('proto.palm.fig.v1.CategoryIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.fig.v1.CategoryUpdateRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.EmailTask', null, global);
goog.exportSymbol('proto.palm.fig.v1.EmailTask.Address', null, global);
goog.exportSymbol('proto.palm.fig.v1.EmailTask.Attachment', null, global);
goog.exportSymbol('proto.palm.fig.v1.EmailTask.Body', null, global);
goog.exportSymbol('proto.palm.fig.v1.GoogleProfile', null, global);
goog.exportSymbol('proto.palm.fig.v1.GoogleProfile.ReCaptcha', null, global);
goog.exportSymbol('proto.palm.fig.v1.IndexNotificationResponse', null, global);
goog.exportSymbol('proto.palm.fig.v1.IndexNotificationResponse.Item', null, global);
goog.exportSymbol('proto.palm.fig.v1.IndexNotificationResponse.Item.MessageCase', null, global);
goog.exportSymbol('proto.palm.fig.v1.IndexNowPingRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.IndexNowProfile', null, global);
goog.exportSymbol('proto.palm.fig.v1.LeaveWordIndexResponse', null, global);
goog.exportSymbol('proto.palm.fig.v1.LeaveWordIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.fig.v1.ShorterLinkCreateRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.ShorterLinkIndexResponse', null, global);
goog.exportSymbol('proto.palm.fig.v1.ShorterLinkIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.fig.v1.ShorterLinkUpdateRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteInstallRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteLayoutResponse', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteLayoutResponse.Author', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteMaintenanceModeRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteSetCopyrightRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteSetInfoRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteSetKeywordsRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteSetLogoRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteSmtpPingRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.Database', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.Health', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.MySql', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.OpenSearch', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.PostgreSql', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.RabbitMq', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.Redis', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.Redis.Item', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteStatusResponse.System', null, global);
goog.exportSymbol('proto.palm.fig.v1.SiteTwilioPingRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SitemapPingRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.SmsTask', null, global);
goog.exportSymbol('proto.palm.fig.v1.SmtpProfile', null, global);
goog.exportSymbol('proto.palm.fig.v1.SmtpProfile.AuthMethod', null, global);
goog.exportSymbol('proto.palm.fig.v1.TagCreateRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.TagIndexResponse', null, global);
goog.exportSymbol('proto.palm.fig.v1.TagIndexResponse.Item', null, global);
goog.exportSymbol('proto.palm.fig.v1.TagUpdateRequest', null, global);
goog.exportSymbol('proto.palm.fig.v1.TwilioProfile', null, global);
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
proto.palm.fig.v1.IndexNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.IndexNotificationResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.IndexNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.IndexNotificationResponse.displayName = 'proto.palm.fig.v1.IndexNotificationResponse';
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
proto.palm.fig.v1.IndexNotificationResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.fig.v1.IndexNotificationResponse.Item.oneofGroups_);
};
goog.inherits(proto.palm.fig.v1.IndexNotificationResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.IndexNotificationResponse.Item.displayName = 'proto.palm.fig.v1.IndexNotificationResponse.Item';
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
proto.palm.fig.v1.LeaveWordIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.LeaveWordIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.LeaveWordIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.LeaveWordIndexResponse.displayName = 'proto.palm.fig.v1.LeaveWordIndexResponse';
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
proto.palm.fig.v1.LeaveWordIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.LeaveWordIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.LeaveWordIndexResponse.Item.displayName = 'proto.palm.fig.v1.LeaveWordIndexResponse.Item';
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
proto.palm.fig.v1.IndexNowProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.IndexNowProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.IndexNowProfile.displayName = 'proto.palm.fig.v1.IndexNowProfile';
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
proto.palm.fig.v1.IndexNowPingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.IndexNowPingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.IndexNowPingRequest.displayName = 'proto.palm.fig.v1.IndexNowPingRequest';
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
proto.palm.fig.v1.SitemapPingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SitemapPingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SitemapPingRequest.displayName = 'proto.palm.fig.v1.SitemapPingRequest';
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
proto.palm.fig.v1.SiteMaintenanceModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteMaintenanceModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteMaintenanceModeRequest.displayName = 'proto.palm.fig.v1.SiteMaintenanceModeRequest';
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
proto.palm.fig.v1.SiteInstallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteInstallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteInstallRequest.displayName = 'proto.palm.fig.v1.SiteInstallRequest';
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
proto.palm.fig.v1.TwilioProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.TwilioProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.TwilioProfile.displayName = 'proto.palm.fig.v1.TwilioProfile';
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
proto.palm.fig.v1.SmtpProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.SmtpProfile.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.SmtpProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SmtpProfile.displayName = 'proto.palm.fig.v1.SmtpProfile';
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
proto.palm.fig.v1.EmailTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.EmailTask.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.EmailTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.EmailTask.displayName = 'proto.palm.fig.v1.EmailTask';
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
proto.palm.fig.v1.EmailTask.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.EmailTask.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.EmailTask.Address.displayName = 'proto.palm.fig.v1.EmailTask.Address';
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
proto.palm.fig.v1.EmailTask.Body = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.EmailTask.Body, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.EmailTask.Body.displayName = 'proto.palm.fig.v1.EmailTask.Body';
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
proto.palm.fig.v1.EmailTask.Attachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.EmailTask.Attachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.EmailTask.Attachment.displayName = 'proto.palm.fig.v1.EmailTask.Attachment';
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
proto.palm.fig.v1.SiteTwilioPingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteTwilioPingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteTwilioPingRequest.displayName = 'proto.palm.fig.v1.SiteTwilioPingRequest';
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
proto.palm.fig.v1.SiteSmtpPingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteSmtpPingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteSmtpPingRequest.displayName = 'proto.palm.fig.v1.SiteSmtpPingRequest';
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
proto.palm.fig.v1.SiteSetLogoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteSetLogoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteSetLogoRequest.displayName = 'proto.palm.fig.v1.SiteSetLogoRequest';
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
proto.palm.fig.v1.SiteSetCopyrightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteSetCopyrightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteSetCopyrightRequest.displayName = 'proto.palm.fig.v1.SiteSetCopyrightRequest';
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
proto.palm.fig.v1.SiteSetKeywordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.SiteSetKeywordsRequest.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.SiteSetKeywordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteSetKeywordsRequest.displayName = 'proto.palm.fig.v1.SiteSetKeywordsRequest';
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
proto.palm.fig.v1.SiteSetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteSetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteSetInfoRequest.displayName = 'proto.palm.fig.v1.SiteSetInfoRequest';
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
proto.palm.fig.v1.SiteLayoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.SiteLayoutResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.SiteLayoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteLayoutResponse.displayName = 'proto.palm.fig.v1.SiteLayoutResponse';
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
proto.palm.fig.v1.SiteLayoutResponse.Author = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteLayoutResponse.Author, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteLayoutResponse.Author.displayName = 'proto.palm.fig.v1.SiteLayoutResponse.Author';
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
proto.palm.fig.v1.GoogleProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.GoogleProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.GoogleProfile.displayName = 'proto.palm.fig.v1.GoogleProfile';
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
proto.palm.fig.v1.GoogleProfile.ReCaptcha = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.GoogleProfile.ReCaptcha, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.GoogleProfile.ReCaptcha.displayName = 'proto.palm.fig.v1.GoogleProfile.ReCaptcha';
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
proto.palm.fig.v1.BaiduProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.BaiduProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.BaiduProfile.displayName = 'proto.palm.fig.v1.BaiduProfile';
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
proto.palm.fig.v1.BaiduProfile.SiteVerify = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.BaiduProfile.SiteVerify, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.BaiduProfile.SiteVerify.displayName = 'proto.palm.fig.v1.BaiduProfile.SiteVerify';
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
proto.palm.fig.v1.SmsTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.SmsTask.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.SmsTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SmsTask.displayName = 'proto.palm.fig.v1.SmsTask';
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
proto.palm.fig.v1.SiteStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.SiteStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.displayName = 'proto.palm.fig.v1.SiteStatusResponse';
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
proto.palm.fig.v1.SiteStatusResponse.Database = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.Database, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.Database.displayName = 'proto.palm.fig.v1.SiteStatusResponse.Database';
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
proto.palm.fig.v1.SiteStatusResponse.PostgreSql = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.SiteStatusResponse.PostgreSql.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.PostgreSql, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.PostgreSql.displayName = 'proto.palm.fig.v1.SiteStatusResponse.PostgreSql';
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
proto.palm.fig.v1.SiteStatusResponse.MySql = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.MySql, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.MySql.displayName = 'proto.palm.fig.v1.SiteStatusResponse.MySql';
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
proto.palm.fig.v1.SiteStatusResponse.Redis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.SiteStatusResponse.Redis.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.Redis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.Redis.displayName = 'proto.palm.fig.v1.SiteStatusResponse.Redis';
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
proto.palm.fig.v1.SiteStatusResponse.Redis.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.Redis.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.Redis.Item.displayName = 'proto.palm.fig.v1.SiteStatusResponse.Redis.Item';
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
proto.palm.fig.v1.SiteStatusResponse.RabbitMq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.RabbitMq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.RabbitMq.displayName = 'proto.palm.fig.v1.SiteStatusResponse.RabbitMq';
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
proto.palm.fig.v1.SiteStatusResponse.OpenSearch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.OpenSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.OpenSearch.displayName = 'proto.palm.fig.v1.SiteStatusResponse.OpenSearch';
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
proto.palm.fig.v1.SiteStatusResponse.Health = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.Health, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.Health.displayName = 'proto.palm.fig.v1.SiteStatusResponse.Health';
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
proto.palm.fig.v1.SiteStatusResponse.System = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.SiteStatusResponse.System, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.SiteStatusResponse.System.displayName = 'proto.palm.fig.v1.SiteStatusResponse.System';
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
proto.palm.fig.v1.ShorterLinkIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.ShorterLinkIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.ShorterLinkIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.ShorterLinkIndexResponse.displayName = 'proto.palm.fig.v1.ShorterLinkIndexResponse';
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
proto.palm.fig.v1.ShorterLinkIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.ShorterLinkIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.ShorterLinkIndexResponse.Item.displayName = 'proto.palm.fig.v1.ShorterLinkIndexResponse.Item';
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
proto.palm.fig.v1.ShorterLinkCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.ShorterLinkCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.ShorterLinkCreateRequest.displayName = 'proto.palm.fig.v1.ShorterLinkCreateRequest';
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
proto.palm.fig.v1.ShorterLinkUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.ShorterLinkUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.ShorterLinkUpdateRequest.displayName = 'proto.palm.fig.v1.ShorterLinkUpdateRequest';
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
proto.palm.fig.v1.TagIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.TagIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.TagIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.TagIndexResponse.displayName = 'proto.palm.fig.v1.TagIndexResponse';
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
proto.palm.fig.v1.TagIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.TagIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.TagIndexResponse.Item.displayName = 'proto.palm.fig.v1.TagIndexResponse.Item';
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
proto.palm.fig.v1.TagCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.TagCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.TagCreateRequest.displayName = 'proto.palm.fig.v1.TagCreateRequest';
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
proto.palm.fig.v1.TagUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.TagUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.TagUpdateRequest.displayName = 'proto.palm.fig.v1.TagUpdateRequest';
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
proto.palm.fig.v1.CategoryIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.fig.v1.CategoryIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.fig.v1.CategoryIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.CategoryIndexResponse.displayName = 'proto.palm.fig.v1.CategoryIndexResponse';
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
proto.palm.fig.v1.CategoryIndexResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.CategoryIndexResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.CategoryIndexResponse.Item.displayName = 'proto.palm.fig.v1.CategoryIndexResponse.Item';
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
proto.palm.fig.v1.CategoryCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.fig.v1.CategoryCreateRequest.oneofGroups_);
};
goog.inherits(proto.palm.fig.v1.CategoryCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.CategoryCreateRequest.displayName = 'proto.palm.fig.v1.CategoryCreateRequest';
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
proto.palm.fig.v1.CategoryUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.fig.v1.CategoryUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.fig.v1.CategoryUpdateRequest.displayName = 'proto.palm.fig.v1.CategoryUpdateRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.IndexNotificationResponse.repeatedFields_ = [1];



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
proto.palm.fig.v1.IndexNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.IndexNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.IndexNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.fig.v1.IndexNotificationResponse.Item.toObject, includeInstance),
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
 * @return {!proto.palm.fig.v1.IndexNotificationResponse}
 */
proto.palm.fig.v1.IndexNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.IndexNotificationResponse;
  return proto.palm.fig.v1.IndexNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.IndexNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.IndexNotificationResponse}
 */
proto.palm.fig.v1.IndexNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.IndexNotificationResponse.Item;
      reader.readMessage(value,proto.palm.fig.v1.IndexNotificationResponse.Item.deserializeBinaryFromReader);
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
proto.palm.fig.v1.IndexNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.IndexNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.IndexNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.fig.v1.IndexNotificationResponse.Item.serializeBinaryToWriter
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



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.MessageCase = {
  MESSAGE_NOT_SET: 0,
  EMAIL: 1,
  SMS: 2
};

/**
 * @return {proto.palm.fig.v1.IndexNotificationResponse.Item.MessageCase}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.getMessageCase = function() {
  return /** @type {proto.palm.fig.v1.IndexNotificationResponse.Item.MessageCase} */(jspb.Message.computeOneofCase(this, proto.palm.fig.v1.IndexNotificationResponse.Item.oneofGroups_[0]));
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
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.IndexNotificationResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.IndexNotificationResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: (f = msg.getEmail()) && proto.palm.fig.v1.EmailTask.toObject(includeInstance, f),
    sms: (f = msg.getSms()) && proto.palm.fig.v1.SmsTask.toObject(includeInstance, f),
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
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.IndexNotificationResponse.Item;
  return proto.palm.fig.v1.IndexNotificationResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.IndexNotificationResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.EmailTask;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 2:
      var value = new proto.palm.fig.v1.SmsTask;
      reader.readMessage(value,proto.palm.fig.v1.SmsTask.deserializeBinaryFromReader);
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
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.IndexNotificationResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.IndexNotificationResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.fig.v1.EmailTask.serializeBinaryToWriter
    );
  }
  f = message.getSms();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.fig.v1.SmsTask.serializeBinaryToWriter
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
 * @return {?proto.palm.fig.v1.EmailTask}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.getEmail = function() {
  return /** @type{?proto.palm.fig.v1.EmailTask} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.EmailTask, 1));
};


/**
 * @param {?proto.palm.fig.v1.EmailTask|undefined} value
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item} returns this
*/
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.setEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.palm.fig.v1.IndexNotificationResponse.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item} returns this
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SmsTask sms = 2;
 * @return {?proto.palm.fig.v1.SmsTask}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.getSms = function() {
  return /** @type{?proto.palm.fig.v1.SmsTask} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SmsTask, 2));
};


/**
 * @param {?proto.palm.fig.v1.SmsTask|undefined} value
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item} returns this
*/
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.setSms = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.palm.fig.v1.IndexNotificationResponse.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item} returns this
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.clearSms = function() {
  return this.setSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.hasSms = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item} returns this
*/
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item} returns this
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.IndexNotificationResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.fig.v1.IndexNotificationResponse.Item>}
 */
proto.palm.fig.v1.IndexNotificationResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.IndexNotificationResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.IndexNotificationResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.fig.v1.IndexNotificationResponse.Item>} value
 * @return {!proto.palm.fig.v1.IndexNotificationResponse} returns this
*/
proto.palm.fig.v1.IndexNotificationResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.fig.v1.IndexNotificationResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.IndexNotificationResponse.Item}
 */
proto.palm.fig.v1.IndexNotificationResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.fig.v1.IndexNotificationResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.IndexNotificationResponse} returns this
 */
proto.palm.fig.v1.IndexNotificationResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional palm.nut.v1.Pagination pagination = 9;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.fig.v1.IndexNotificationResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, nut_pb.Pagination, 9));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.fig.v1.IndexNotificationResponse} returns this
*/
proto.palm.fig.v1.IndexNotificationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.IndexNotificationResponse} returns this
 */
proto.palm.fig.v1.IndexNotificationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.IndexNotificationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.LeaveWordIndexResponse.repeatedFields_ = [1];



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
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.LeaveWordIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.LeaveWordIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.LeaveWordIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.fig.v1.LeaveWordIndexResponse.Item.toObject, includeInstance),
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
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.LeaveWordIndexResponse;
  return proto.palm.fig.v1.LeaveWordIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.LeaveWordIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.LeaveWordIndexResponse.Item;
      reader.readMessage(value,proto.palm.fig.v1.LeaveWordIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.LeaveWordIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.LeaveWordIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.LeaveWordIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.fig.v1.LeaveWordIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.LeaveWordIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lang: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: (f = msg.getContent()) && nut_pb.MediaContent.toObject(includeInstance, f),
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
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.LeaveWordIndexResponse.Item;
  return proto.palm.fig.v1.LeaveWordIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new nut_pb.MediaContent;
      reader.readMessage(value,nut_pb.MediaContent.deserializeBinaryFromReader);
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
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.LeaveWordIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
      nut_pb.MediaContent.serializeBinaryToWriter
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
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string lang = 2;
 * @return {string}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional palm.nut.v1.MediaContent content = 8;
 * @return {?proto.palm.nut.v1.MediaContent}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.getContent = function() {
  return /** @type{?proto.palm.nut.v1.MediaContent} */ (
    jspb.Message.getWrapperField(this, nut_pb.MediaContent, 8));
};


/**
 * @param {?proto.palm.nut.v1.MediaContent|undefined} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
*/
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.hasContent = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
*/
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
*/
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.Item.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.fig.v1.LeaveWordIndexResponse.Item>}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.LeaveWordIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.LeaveWordIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.fig.v1.LeaveWordIndexResponse.Item>} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse} returns this
*/
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.fig.v1.LeaveWordIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse.Item}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.fig.v1.LeaveWordIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional palm.nut.v1.Pagination pagination = 9;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, nut_pb.Pagination, 9));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse} returns this
*/
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.LeaveWordIndexResponse} returns this
 */
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.LeaveWordIndexResponse.prototype.hasPagination = function() {
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
proto.palm.fig.v1.IndexNowProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.IndexNowProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.IndexNowProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNowProfile.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.IndexNowProfile}
 */
proto.palm.fig.v1.IndexNowProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.IndexNowProfile;
  return proto.palm.fig.v1.IndexNowProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.IndexNowProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.IndexNowProfile}
 */
proto.palm.fig.v1.IndexNowProfile.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.IndexNowProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.IndexNowProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.IndexNowProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNowProfile.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.IndexNowProfile.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.IndexNowProfile} returns this
 */
proto.palm.fig.v1.IndexNowProfile.prototype.setKey = function(value) {
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
proto.palm.fig.v1.IndexNowPingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.IndexNowPingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.IndexNowPingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNowPingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.IndexNowPingRequest}
 */
proto.palm.fig.v1.IndexNowPingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.IndexNowPingRequest;
  return proto.palm.fig.v1.IndexNowPingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.IndexNowPingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.IndexNowPingRequest}
 */
proto.palm.fig.v1.IndexNowPingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.IndexNowPingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.IndexNowPingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.IndexNowPingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.IndexNowPingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.IndexNowPingRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.IndexNowPingRequest} returns this
 */
proto.palm.fig.v1.IndexNowPingRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string home = 9;
 * @return {string}
 */
proto.palm.fig.v1.IndexNowPingRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.IndexNowPingRequest} returns this
 */
proto.palm.fig.v1.IndexNowPingRequest.prototype.setHome = function(value) {
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
proto.palm.fig.v1.SitemapPingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SitemapPingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SitemapPingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SitemapPingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SitemapPingRequest}
 */
proto.palm.fig.v1.SitemapPingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SitemapPingRequest;
  return proto.palm.fig.v1.SitemapPingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SitemapPingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SitemapPingRequest}
 */
proto.palm.fig.v1.SitemapPingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SitemapPingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SitemapPingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SitemapPingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SitemapPingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SitemapPingRequest.prototype.getHome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SitemapPingRequest} returns this
 */
proto.palm.fig.v1.SitemapPingRequest.prototype.setHome = function(value) {
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
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteMaintenanceModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteMaintenanceModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ttl: (f = msg.getTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
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
 * @return {!proto.palm.fig.v1.SiteMaintenanceModeRequest}
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteMaintenanceModeRequest;
  return proto.palm.fig.v1.SiteMaintenanceModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteMaintenanceModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteMaintenanceModeRequest}
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTtl(value);
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
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteMaintenanceModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteMaintenanceModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTtl();
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
 * optional google.protobuf.Duration ttl = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.fig.v1.SiteMaintenanceModeRequest} returns this
*/
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteMaintenanceModeRequest} returns this
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteMaintenanceModeRequest} returns this
 */
proto.palm.fig.v1.SiteMaintenanceModeRequest.prototype.setReason = function(value) {
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
proto.palm.fig.v1.SiteInstallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteInstallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteInstallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteInstallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && auth_pb.UserSignUpRequest.toObject(includeInstance, f)
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
 * @return {!proto.palm.fig.v1.SiteInstallRequest}
 */
proto.palm.fig.v1.SiteInstallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteInstallRequest;
  return proto.palm.fig.v1.SiteInstallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteInstallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteInstallRequest}
 */
proto.palm.fig.v1.SiteInstallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new auth_pb.UserSignUpRequest;
      reader.readMessage(value,auth_pb.UserSignUpRequest.deserializeBinaryFromReader);
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
proto.palm.fig.v1.SiteInstallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteInstallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteInstallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteInstallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      auth_pb.UserSignUpRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional palm.auth.v1.UserSignUpRequest user = 1;
 * @return {?proto.palm.auth.v1.UserSignUpRequest}
 */
proto.palm.fig.v1.SiteInstallRequest.prototype.getUser = function() {
  return /** @type{?proto.palm.auth.v1.UserSignUpRequest} */ (
    jspb.Message.getWrapperField(this, auth_pb.UserSignUpRequest, 1));
};


/**
 * @param {?proto.palm.auth.v1.UserSignUpRequest|undefined} value
 * @return {!proto.palm.fig.v1.SiteInstallRequest} returns this
*/
proto.palm.fig.v1.SiteInstallRequest.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteInstallRequest} returns this
 */
proto.palm.fig.v1.SiteInstallRequest.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteInstallRequest.prototype.hasUser = function() {
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
proto.palm.fig.v1.TwilioProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.TwilioProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.TwilioProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TwilioProfile.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.TwilioProfile}
 */
proto.palm.fig.v1.TwilioProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.TwilioProfile;
  return proto.palm.fig.v1.TwilioProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.TwilioProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.TwilioProfile}
 */
proto.palm.fig.v1.TwilioProfile.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.TwilioProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.TwilioProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.TwilioProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TwilioProfile.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.TwilioProfile.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.TwilioProfile} returns this
 */
proto.palm.fig.v1.TwilioProfile.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_sid = 2;
 * @return {string}
 */
proto.palm.fig.v1.TwilioProfile.prototype.getAccountSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.TwilioProfile} returns this
 */
proto.palm.fig.v1.TwilioProfile.prototype.setAccountSid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string auth_token = 3;
 * @return {string}
 */
proto.palm.fig.v1.TwilioProfile.prototype.getAuthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.TwilioProfile} returns this
 */
proto.palm.fig.v1.TwilioProfile.prototype.setAuthToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sms_status_callback = 9;
 * @return {string}
 */
proto.palm.fig.v1.TwilioProfile.prototype.getSmsStatusCallback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.TwilioProfile} returns this
 */
proto.palm.fig.v1.TwilioProfile.prototype.setSmsStatusCallback = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.fig.v1.TwilioProfile} returns this
 */
proto.palm.fig.v1.TwilioProfile.prototype.clearSmsStatusCallback = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.TwilioProfile.prototype.hasSmsStatusCallback = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.SmtpProfile.repeatedFields_ = [8,9];



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
proto.palm.fig.v1.SmtpProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SmtpProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SmtpProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SmtpProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    authMethod: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ccList: jspb.Message.toObjectList(msg.getCcList(),
    proto.palm.fig.v1.EmailTask.Address.toObject, includeInstance),
    bccList: jspb.Message.toObjectList(msg.getBccList(),
    proto.palm.fig.v1.EmailTask.Address.toObject, includeInstance),
    from: (f = msg.getFrom()) && proto.palm.fig.v1.EmailTask.Address.toObject(includeInstance, f),
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
 * @return {!proto.palm.fig.v1.SmtpProfile}
 */
proto.palm.fig.v1.SmtpProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SmtpProfile;
  return proto.palm.fig.v1.SmtpProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SmtpProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SmtpProfile}
 */
proto.palm.fig.v1.SmtpProfile.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.palm.fig.v1.SmtpProfile.AuthMethod} */ (reader.readEnum());
      msg.setAuthMethod(value);
      break;
    case 8:
      var value = new proto.palm.fig.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addCc(value);
      break;
    case 9:
      var value = new proto.palm.fig.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addBcc(value);
      break;
    case 11:
      var value = new proto.palm.fig.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.setFrom(value);
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
proto.palm.fig.v1.SmtpProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SmtpProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SmtpProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SmtpProfile.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getBccList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter
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
proto.palm.fig.v1.SmtpProfile.AuthMethod = {
  NONE: 0,
  LOGIN: 1,
  STARTTLS: 2
};

/**
 * optional string host = 1;
 * @return {string}
 */
proto.palm.fig.v1.SmtpProfile.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
 */
proto.palm.fig.v1.SmtpProfile.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.palm.fig.v1.SmtpProfile.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
 */
proto.palm.fig.v1.SmtpProfile.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AuthMethod auth_method = 3;
 * @return {!proto.palm.fig.v1.SmtpProfile.AuthMethod}
 */
proto.palm.fig.v1.SmtpProfile.prototype.getAuthMethod = function() {
  return /** @type {!proto.palm.fig.v1.SmtpProfile.AuthMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.palm.fig.v1.SmtpProfile.AuthMethod} value
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
 */
proto.palm.fig.v1.SmtpProfile.prototype.setAuthMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated EmailTask.Address cc = 8;
 * @return {!Array<!proto.palm.fig.v1.EmailTask.Address>}
 */
proto.palm.fig.v1.SmtpProfile.prototype.getCcList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.EmailTask.Address, 8));
};


/**
 * @param {!Array<!proto.palm.fig.v1.EmailTask.Address>} value
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
*/
proto.palm.fig.v1.SmtpProfile.prototype.setCcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.palm.fig.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.SmtpProfile.prototype.addCc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.palm.fig.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
 */
proto.palm.fig.v1.SmtpProfile.prototype.clearCcList = function() {
  return this.setCcList([]);
};


/**
 * repeated EmailTask.Address bcc = 9;
 * @return {!Array<!proto.palm.fig.v1.EmailTask.Address>}
 */
proto.palm.fig.v1.SmtpProfile.prototype.getBccList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.EmailTask.Address, 9));
};


/**
 * @param {!Array<!proto.palm.fig.v1.EmailTask.Address>} value
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
*/
proto.palm.fig.v1.SmtpProfile.prototype.setBccList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.palm.fig.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.SmtpProfile.prototype.addBcc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.palm.fig.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
 */
proto.palm.fig.v1.SmtpProfile.prototype.clearBccList = function() {
  return this.setBccList([]);
};


/**
 * optional EmailTask.Address from = 11;
 * @return {?proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.SmtpProfile.prototype.getFrom = function() {
  return /** @type{?proto.palm.fig.v1.EmailTask.Address} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.EmailTask.Address, 11));
};


/**
 * @param {?proto.palm.fig.v1.EmailTask.Address|undefined} value
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
*/
proto.palm.fig.v1.SmtpProfile.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
 */
proto.palm.fig.v1.SmtpProfile.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SmtpProfile.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string password = 12;
 * @return {string}
 */
proto.palm.fig.v1.SmtpProfile.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SmtpProfile} returns this
 */
proto.palm.fig.v1.SmtpProfile.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.EmailTask.repeatedFields_ = [2,3,13];



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
proto.palm.fig.v1.EmailTask.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.EmailTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.EmailTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: (f = msg.getTo()) && proto.palm.fig.v1.EmailTask.Address.toObject(includeInstance, f),
    ccList: jspb.Message.toObjectList(msg.getCcList(),
    proto.palm.fig.v1.EmailTask.Address.toObject, includeInstance),
    bccList: jspb.Message.toObjectList(msg.getBccList(),
    proto.palm.fig.v1.EmailTask.Address.toObject, includeInstance),
    subject: jspb.Message.getFieldWithDefault(msg, 11, ""),
    body: (f = msg.getBody()) && proto.palm.fig.v1.EmailTask.Body.toObject(includeInstance, f),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.palm.fig.v1.EmailTask.Attachment.toObject, includeInstance)
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
 * @return {!proto.palm.fig.v1.EmailTask}
 */
proto.palm.fig.v1.EmailTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.EmailTask;
  return proto.palm.fig.v1.EmailTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.EmailTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.EmailTask}
 */
proto.palm.fig.v1.EmailTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 2:
      var value = new proto.palm.fig.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addCc(value);
      break;
    case 3:
      var value = new proto.palm.fig.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader);
      msg.addBcc(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 12:
      var value = new proto.palm.fig.v1.EmailTask.Body;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Body.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 13:
      var value = new proto.palm.fig.v1.EmailTask.Attachment;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Attachment.deserializeBinaryFromReader);
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
proto.palm.fig.v1.EmailTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.EmailTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.EmailTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getCcList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getBccList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.palm.fig.v1.EmailTask.Body.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.palm.fig.v1.EmailTask.Attachment.serializeBinaryToWriter
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
proto.palm.fig.v1.EmailTask.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.EmailTask.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.EmailTask.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.Address.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.EmailTask.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.EmailTask.Address;
  return proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.EmailTask.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.EmailTask.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.EmailTask.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.EmailTask.Address.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.EmailTask.Address} returns this
 */
proto.palm.fig.v1.EmailTask.Address.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.fig.v1.EmailTask.Address.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.EmailTask.Address} returns this
 */
proto.palm.fig.v1.EmailTask.Address.prototype.setEmail = function(value) {
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
proto.palm.fig.v1.EmailTask.Body.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.EmailTask.Body.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.EmailTask.Body} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.Body.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    html: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.palm.fig.v1.EmailTask.Body}
 */
proto.palm.fig.v1.EmailTask.Body.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.EmailTask.Body;
  return proto.palm.fig.v1.EmailTask.Body.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.EmailTask.Body} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.EmailTask.Body}
 */
proto.palm.fig.v1.EmailTask.Body.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHtml(value);
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
proto.palm.fig.v1.EmailTask.Body.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.EmailTask.Body.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.EmailTask.Body} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.Body.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHtml();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.palm.fig.v1.EmailTask.Body.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.EmailTask.Body} returns this
 */
proto.palm.fig.v1.EmailTask.Body.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool html = 2;
 * @return {boolean}
 */
proto.palm.fig.v1.EmailTask.Body.prototype.getHtml = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.fig.v1.EmailTask.Body} returns this
 */
proto.palm.fig.v1.EmailTask.Body.prototype.setHtml = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.palm.fig.v1.EmailTask.Attachment.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.EmailTask.Attachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.EmailTask.Attachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.Attachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.palm.fig.v1.EmailTask.Attachment}
 */
proto.palm.fig.v1.EmailTask.Attachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.EmailTask.Attachment;
  return proto.palm.fig.v1.EmailTask.Attachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.EmailTask.Attachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.EmailTask.Attachment}
 */
proto.palm.fig.v1.EmailTask.Attachment.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.EmailTask.Attachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.EmailTask.Attachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.EmailTask.Attachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.EmailTask.Attachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.fig.v1.EmailTask.Attachment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.EmailTask.Attachment} returns this
 */
proto.palm.fig.v1.EmailTask.Attachment.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.palm.fig.v1.EmailTask.Attachment.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.palm.fig.v1.EmailTask.Attachment.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.palm.fig.v1.EmailTask.Attachment.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.palm.fig.v1.EmailTask.Attachment} returns this
 */
proto.palm.fig.v1.EmailTask.Attachment.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Address to = 1;
 * @return {?proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.EmailTask.prototype.getTo = function() {
  return /** @type{?proto.palm.fig.v1.EmailTask.Address} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.EmailTask.Address, 1));
};


/**
 * @param {?proto.palm.fig.v1.EmailTask.Address|undefined} value
 * @return {!proto.palm.fig.v1.EmailTask} returns this
*/
proto.palm.fig.v1.EmailTask.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.EmailTask} returns this
 */
proto.palm.fig.v1.EmailTask.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.EmailTask.prototype.hasTo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Address cc = 2;
 * @return {!Array<!proto.palm.fig.v1.EmailTask.Address>}
 */
proto.palm.fig.v1.EmailTask.prototype.getCcList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.EmailTask.Address, 2));
};


/**
 * @param {!Array<!proto.palm.fig.v1.EmailTask.Address>} value
 * @return {!proto.palm.fig.v1.EmailTask} returns this
*/
proto.palm.fig.v1.EmailTask.prototype.setCcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.palm.fig.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.EmailTask.prototype.addCc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.palm.fig.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.EmailTask} returns this
 */
proto.palm.fig.v1.EmailTask.prototype.clearCcList = function() {
  return this.setCcList([]);
};


/**
 * repeated Address bcc = 3;
 * @return {!Array<!proto.palm.fig.v1.EmailTask.Address>}
 */
proto.palm.fig.v1.EmailTask.prototype.getBccList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.EmailTask.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.EmailTask.Address, 3));
};


/**
 * @param {!Array<!proto.palm.fig.v1.EmailTask.Address>} value
 * @return {!proto.palm.fig.v1.EmailTask} returns this
*/
proto.palm.fig.v1.EmailTask.prototype.setBccList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.palm.fig.v1.EmailTask.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.EmailTask.prototype.addBcc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.palm.fig.v1.EmailTask.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.EmailTask} returns this
 */
proto.palm.fig.v1.EmailTask.prototype.clearBccList = function() {
  return this.setBccList([]);
};


/**
 * optional string subject = 11;
 * @return {string}
 */
proto.palm.fig.v1.EmailTask.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.EmailTask} returns this
 */
proto.palm.fig.v1.EmailTask.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional Body body = 12;
 * @return {?proto.palm.fig.v1.EmailTask.Body}
 */
proto.palm.fig.v1.EmailTask.prototype.getBody = function() {
  return /** @type{?proto.palm.fig.v1.EmailTask.Body} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.EmailTask.Body, 12));
};


/**
 * @param {?proto.palm.fig.v1.EmailTask.Body|undefined} value
 * @return {!proto.palm.fig.v1.EmailTask} returns this
*/
proto.palm.fig.v1.EmailTask.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.EmailTask} returns this
 */
proto.palm.fig.v1.EmailTask.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.EmailTask.prototype.hasBody = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated Attachment attachments = 13;
 * @return {!Array<!proto.palm.fig.v1.EmailTask.Attachment>}
 */
proto.palm.fig.v1.EmailTask.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.EmailTask.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.EmailTask.Attachment, 13));
};


/**
 * @param {!Array<!proto.palm.fig.v1.EmailTask.Attachment>} value
 * @return {!proto.palm.fig.v1.EmailTask} returns this
*/
proto.palm.fig.v1.EmailTask.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.palm.fig.v1.EmailTask.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.EmailTask.Attachment}
 */
proto.palm.fig.v1.EmailTask.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.palm.fig.v1.EmailTask.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.EmailTask} returns this
 */
proto.palm.fig.v1.EmailTask.prototype.clearAttachmentsList = function() {
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
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteTwilioPingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteTwilioPingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteTwilioPingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profile: (f = msg.getProfile()) && proto.palm.fig.v1.TwilioProfile.toObject(includeInstance, f)
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
 * @return {!proto.palm.fig.v1.SiteTwilioPingRequest}
 */
proto.palm.fig.v1.SiteTwilioPingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteTwilioPingRequest;
  return proto.palm.fig.v1.SiteTwilioPingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteTwilioPingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteTwilioPingRequest}
 */
proto.palm.fig.v1.SiteTwilioPingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.fig.v1.TwilioProfile;
      reader.readMessage(value,proto.palm.fig.v1.TwilioProfile.deserializeBinaryFromReader);
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
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteTwilioPingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteTwilioPingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteTwilioPingRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.fig.v1.TwilioProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string to = 1;
 * @return {string}
 */
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteTwilioPingRequest} returns this
 */
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteTwilioPingRequest} returns this
 */
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TwilioProfile profile = 9;
 * @return {?proto.palm.fig.v1.TwilioProfile}
 */
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.getProfile = function() {
  return /** @type{?proto.palm.fig.v1.TwilioProfile} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.TwilioProfile, 9));
};


/**
 * @param {?proto.palm.fig.v1.TwilioProfile|undefined} value
 * @return {!proto.palm.fig.v1.SiteTwilioPingRequest} returns this
*/
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteTwilioPingRequest} returns this
 */
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteTwilioPingRequest.prototype.hasProfile = function() {
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
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteSmtpPingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteSmtpPingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSmtpPingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: (f = msg.getTo()) && proto.palm.fig.v1.EmailTask.Address.toObject(includeInstance, f),
    subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    profile: (f = msg.getProfile()) && proto.palm.fig.v1.SmtpProfile.toObject(includeInstance, f)
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
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteSmtpPingRequest;
  return proto.palm.fig.v1.SiteSmtpPingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteSmtpPingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.EmailTask.Address;
      reader.readMessage(value,proto.palm.fig.v1.EmailTask.Address.deserializeBinaryFromReader);
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
      var value = new proto.palm.fig.v1.SmtpProfile;
      reader.readMessage(value,proto.palm.fig.v1.SmtpProfile.deserializeBinaryFromReader);
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
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteSmtpPingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteSmtpPingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSmtpPingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.fig.v1.EmailTask.Address.serializeBinaryToWriter
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
      proto.palm.fig.v1.SmtpProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional EmailTask.Address to = 1;
 * @return {?proto.palm.fig.v1.EmailTask.Address}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.getTo = function() {
  return /** @type{?proto.palm.fig.v1.EmailTask.Address} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.EmailTask.Address, 1));
};


/**
 * @param {?proto.palm.fig.v1.EmailTask.Address|undefined} value
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest} returns this
*/
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest} returns this
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest} returns this
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest} returns this
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SmtpProfile profile = 9;
 * @return {?proto.palm.fig.v1.SmtpProfile}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.getProfile = function() {
  return /** @type{?proto.palm.fig.v1.SmtpProfile} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SmtpProfile, 9));
};


/**
 * @param {?proto.palm.fig.v1.SmtpProfile|undefined} value
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest} returns this
*/
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteSmtpPingRequest} returns this
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteSmtpPingRequest.prototype.hasProfile = function() {
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
proto.palm.fig.v1.SiteSetLogoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteSetLogoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteSetLogoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetLogoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteSetLogoRequest}
 */
proto.palm.fig.v1.SiteSetLogoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteSetLogoRequest;
  return proto.palm.fig.v1.SiteSetLogoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteSetLogoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteSetLogoRequest}
 */
proto.palm.fig.v1.SiteSetLogoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteSetLogoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteSetLogoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteSetLogoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetLogoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteSetLogoRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSetLogoRequest} returns this
 */
proto.palm.fig.v1.SiteSetLogoRequest.prototype.setUrl = function(value) {
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
proto.palm.fig.v1.SiteSetCopyrightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteSetCopyrightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteSetCopyrightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetCopyrightRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteSetCopyrightRequest}
 */
proto.palm.fig.v1.SiteSetCopyrightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteSetCopyrightRequest;
  return proto.palm.fig.v1.SiteSetCopyrightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteSetCopyrightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteSetCopyrightRequest}
 */
proto.palm.fig.v1.SiteSetCopyrightRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteSetCopyrightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteSetCopyrightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteSetCopyrightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetCopyrightRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteSetCopyrightRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSetCopyrightRequest} returns this
 */
proto.palm.fig.v1.SiteSetCopyrightRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.repeatedFields_ = [1];



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
proto.palm.fig.v1.SiteSetKeywordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteSetKeywordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteSetKeywordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteSetKeywordsRequest}
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteSetKeywordsRequest;
  return proto.palm.fig.v1.SiteSetKeywordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteSetKeywordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteSetKeywordsRequest}
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteSetKeywordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteSetKeywordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteSetKeywordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteSetKeywordsRequest.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.fig.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SiteSetKeywordsRequest} returns this
 */
proto.palm.fig.v1.SiteSetKeywordsRequest.prototype.clearItemsList = function() {
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
proto.palm.fig.v1.SiteSetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteSetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteSetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteSetInfoRequest}
 */
proto.palm.fig.v1.SiteSetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteSetInfoRequest;
  return proto.palm.fig.v1.SiteSetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteSetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteSetInfoRequest}
 */
proto.palm.fig.v1.SiteSetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteSetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteSetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteSetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteSetInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteSetInfoRequest.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSetInfoRequest} returns this
 */
proto.palm.fig.v1.SiteSetInfoRequest.prototype.setLang = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 11;
 * @return {string}
 */
proto.palm.fig.v1.SiteSetInfoRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSetInfoRequest} returns this
 */
proto.palm.fig.v1.SiteSetInfoRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string subhead = 12;
 * @return {string}
 */
proto.palm.fig.v1.SiteSetInfoRequest.prototype.getSubhead = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSetInfoRequest} returns this
 */
proto.palm.fig.v1.SiteSetInfoRequest.prototype.setSubhead = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string description = 13;
 * @return {string}
 */
proto.palm.fig.v1.SiteSetInfoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteSetInfoRequest} returns this
 */
proto.palm.fig.v1.SiteSetInfoRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.SiteLayoutResponse.repeatedFields_ = [3,9];



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
proto.palm.fig.v1.SiteLayoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteLayoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteLayoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteLayoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subhead: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keywordsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    author: (f = msg.getAuthor()) && proto.palm.fig.v1.SiteLayoutResponse.Author.toObject(includeInstance, f),
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
 * @return {!proto.palm.fig.v1.SiteLayoutResponse}
 */
proto.palm.fig.v1.SiteLayoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteLayoutResponse;
  return proto.palm.fig.v1.SiteLayoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteLayoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteLayoutResponse}
 */
proto.palm.fig.v1.SiteLayoutResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.fig.v1.SiteLayoutResponse.Author;
      reader.readMessage(value,proto.palm.fig.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader);
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
proto.palm.fig.v1.SiteLayoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteLayoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteLayoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteLayoutResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.fig.v1.SiteLayoutResponse.Author.serializeBinaryToWriter
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
proto.palm.fig.v1.SiteLayoutResponse.Author.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteLayoutResponse.Author.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteLayoutResponse.Author} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteLayoutResponse.Author.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteLayoutResponse.Author}
 */
proto.palm.fig.v1.SiteLayoutResponse.Author.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteLayoutResponse.Author;
  return proto.palm.fig.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteLayoutResponse.Author} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteLayoutResponse.Author}
 */
proto.palm.fig.v1.SiteLayoutResponse.Author.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteLayoutResponse.Author.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteLayoutResponse.Author.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteLayoutResponse.Author} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteLayoutResponse.Author.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteLayoutResponse.Author.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse.Author} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.Author.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteLayoutResponse.Author.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse.Author} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.Author.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subhead = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getSubhead = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.setSubhead = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string keywords = 3;
 * @return {!Array<string>}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getKeywordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.setKeywordsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.addKeywords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.clearKeywordsList = function() {
  return this.setKeywordsList([]);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Author author = 5;
 * @return {?proto.palm.fig.v1.SiteLayoutResponse.Author}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getAuthor = function() {
  return /** @type{?proto.palm.fig.v1.SiteLayoutResponse.Author} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SiteLayoutResponse.Author, 5));
};


/**
 * @param {?proto.palm.fig.v1.SiteLayoutResponse.Author|undefined} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
*/
proto.palm.fig.v1.SiteLayoutResponse.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string copyright = 6;
 * @return {string}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getCopyright = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.setCopyright = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string logo = 7;
 * @return {string}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.setLogo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string languages = 9;
 * @return {!Array<string>}
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SiteLayoutResponse} returns this
 */
proto.palm.fig.v1.SiteLayoutResponse.prototype.clearLanguagesList = function() {
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
proto.palm.fig.v1.GoogleProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.GoogleProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.GoogleProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.GoogleProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteVerifyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reCaptcha: (f = msg.getReCaptcha()) && proto.palm.fig.v1.GoogleProfile.ReCaptcha.toObject(includeInstance, f)
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
 * @return {!proto.palm.fig.v1.GoogleProfile}
 */
proto.palm.fig.v1.GoogleProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.GoogleProfile;
  return proto.palm.fig.v1.GoogleProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.GoogleProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.GoogleProfile}
 */
proto.palm.fig.v1.GoogleProfile.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.fig.v1.GoogleProfile.ReCaptcha;
      reader.readMessage(value,proto.palm.fig.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader);
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
proto.palm.fig.v1.GoogleProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.GoogleProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.GoogleProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.GoogleProfile.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.fig.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter
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
proto.palm.fig.v1.GoogleProfile.ReCaptcha.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.GoogleProfile.ReCaptcha.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.GoogleProfile.ReCaptcha} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.GoogleProfile.ReCaptcha.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.fig.v1.GoogleProfile.ReCaptcha.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.GoogleProfile.ReCaptcha;
  return proto.palm.fig.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.GoogleProfile.ReCaptcha} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.fig.v1.GoogleProfile.ReCaptcha.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.GoogleProfile.ReCaptcha.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.GoogleProfile.ReCaptcha} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.GoogleProfile.ReCaptcha.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.GoogleProfile.ReCaptcha.prototype.getSiteKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.GoogleProfile.ReCaptcha} returns this
 */
proto.palm.fig.v1.GoogleProfile.ReCaptcha.prototype.setSiteKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret = 2;
 * @return {string}
 */
proto.palm.fig.v1.GoogleProfile.ReCaptcha.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.GoogleProfile.ReCaptcha} returns this
 */
proto.palm.fig.v1.GoogleProfile.ReCaptcha.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string site_verify_id = 1;
 * @return {string}
 */
proto.palm.fig.v1.GoogleProfile.prototype.getSiteVerifyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.GoogleProfile} returns this
 */
proto.palm.fig.v1.GoogleProfile.prototype.setSiteVerifyId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.fig.v1.GoogleProfile} returns this
 */
proto.palm.fig.v1.GoogleProfile.prototype.clearSiteVerifyId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.GoogleProfile.prototype.hasSiteVerifyId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReCaptcha re_captcha = 2;
 * @return {?proto.palm.fig.v1.GoogleProfile.ReCaptcha}
 */
proto.palm.fig.v1.GoogleProfile.prototype.getReCaptcha = function() {
  return /** @type{?proto.palm.fig.v1.GoogleProfile.ReCaptcha} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.GoogleProfile.ReCaptcha, 2));
};


/**
 * @param {?proto.palm.fig.v1.GoogleProfile.ReCaptcha|undefined} value
 * @return {!proto.palm.fig.v1.GoogleProfile} returns this
*/
proto.palm.fig.v1.GoogleProfile.prototype.setReCaptcha = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.GoogleProfile} returns this
 */
proto.palm.fig.v1.GoogleProfile.prototype.clearReCaptcha = function() {
  return this.setReCaptcha(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.GoogleProfile.prototype.hasReCaptcha = function() {
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
proto.palm.fig.v1.BaiduProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.BaiduProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.BaiduProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.BaiduProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    siteVerify: (f = msg.getSiteVerify()) && proto.palm.fig.v1.BaiduProfile.SiteVerify.toObject(includeInstance, f)
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
 * @return {!proto.palm.fig.v1.BaiduProfile}
 */
proto.palm.fig.v1.BaiduProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.BaiduProfile;
  return proto.palm.fig.v1.BaiduProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.BaiduProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.BaiduProfile}
 */
proto.palm.fig.v1.BaiduProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.BaiduProfile.SiteVerify;
      reader.readMessage(value,proto.palm.fig.v1.BaiduProfile.SiteVerify.deserializeBinaryFromReader);
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
proto.palm.fig.v1.BaiduProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.BaiduProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.BaiduProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.BaiduProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSiteVerify();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.fig.v1.BaiduProfile.SiteVerify.serializeBinaryToWriter
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
proto.palm.fig.v1.BaiduProfile.SiteVerify.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.BaiduProfile.SiteVerify.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.BaiduProfile.SiteVerify} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.BaiduProfile.SiteVerify.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.BaiduProfile.SiteVerify}
 */
proto.palm.fig.v1.BaiduProfile.SiteVerify.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.BaiduProfile.SiteVerify;
  return proto.palm.fig.v1.BaiduProfile.SiteVerify.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.BaiduProfile.SiteVerify} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.BaiduProfile.SiteVerify}
 */
proto.palm.fig.v1.BaiduProfile.SiteVerify.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.BaiduProfile.SiteVerify.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.BaiduProfile.SiteVerify.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.BaiduProfile.SiteVerify} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.BaiduProfile.SiteVerify.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.BaiduProfile.SiteVerify.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.BaiduProfile.SiteVerify} returns this
 */
proto.palm.fig.v1.BaiduProfile.SiteVerify.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.palm.fig.v1.BaiduProfile.SiteVerify.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.BaiduProfile.SiteVerify} returns this
 */
proto.palm.fig.v1.BaiduProfile.SiteVerify.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SiteVerify site_verify = 1;
 * @return {?proto.palm.fig.v1.BaiduProfile.SiteVerify}
 */
proto.palm.fig.v1.BaiduProfile.prototype.getSiteVerify = function() {
  return /** @type{?proto.palm.fig.v1.BaiduProfile.SiteVerify} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.BaiduProfile.SiteVerify, 1));
};


/**
 * @param {?proto.palm.fig.v1.BaiduProfile.SiteVerify|undefined} value
 * @return {!proto.palm.fig.v1.BaiduProfile} returns this
*/
proto.palm.fig.v1.BaiduProfile.prototype.setSiteVerify = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.BaiduProfile} returns this
 */
proto.palm.fig.v1.BaiduProfile.prototype.clearSiteVerify = function() {
  return this.setSiteVerify(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.BaiduProfile.prototype.hasSiteVerify = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.SmsTask.repeatedFields_ = [2];



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
proto.palm.fig.v1.SmsTask.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SmsTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SmsTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SmsTask.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SmsTask}
 */
proto.palm.fig.v1.SmsTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SmsTask;
  return proto.palm.fig.v1.SmsTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SmsTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SmsTask}
 */
proto.palm.fig.v1.SmsTask.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SmsTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SmsTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SmsTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SmsTask.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SmsTask.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SmsTask} returns this
 */
proto.palm.fig.v1.SmsTask.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string to = 2;
 * @return {!Array<string>}
 */
proto.palm.fig.v1.SmsTask.prototype.getToList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.fig.v1.SmsTask} returns this
 */
proto.palm.fig.v1.SmsTask.prototype.setToList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.SmsTask} returns this
 */
proto.palm.fig.v1.SmsTask.prototype.addTo = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SmsTask} returns this
 */
proto.palm.fig.v1.SmsTask.prototype.clearToList = function() {
  return this.setToList([]);
};


/**
 * optional string body = 3;
 * @return {string}
 */
proto.palm.fig.v1.SmsTask.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SmsTask} returns this
 */
proto.palm.fig.v1.SmsTask.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.SiteStatusResponse.repeatedFields_ = [21];



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
proto.palm.fig.v1.SiteStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postgresql: (f = msg.getPostgresql()) && proto.palm.fig.v1.SiteStatusResponse.PostgreSql.toObject(includeInstance, f),
    mysql: (f = msg.getMysql()) && proto.palm.fig.v1.SiteStatusResponse.MySql.toObject(includeInstance, f),
    redis: (f = msg.getRedis()) && proto.palm.fig.v1.SiteStatusResponse.Redis.toObject(includeInstance, f),
    rabbitmq: (f = msg.getRabbitmq()) && proto.palm.fig.v1.SiteStatusResponse.RabbitMq.toObject(includeInstance, f),
    opensearch: (f = msg.getOpensearch()) && proto.palm.fig.v1.SiteStatusResponse.OpenSearch.toObject(includeInstance, f),
    system: (f = msg.getSystem()) && proto.palm.fig.v1.SiteStatusResponse.System.toObject(includeInstance, f),
    healthesList: jspb.Message.toObjectList(msg.getHealthesList(),
    proto.palm.fig.v1.SiteStatusResponse.Health.toObject, includeInstance)
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse}
 */
proto.palm.fig.v1.SiteStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse;
  return proto.palm.fig.v1.SiteStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse}
 */
proto.palm.fig.v1.SiteStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.SiteStatusResponse.PostgreSql;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader);
      msg.setPostgresql(value);
      break;
    case 2:
      var value = new proto.palm.fig.v1.SiteStatusResponse.MySql;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader);
      msg.setMysql(value);
      break;
    case 3:
      var value = new proto.palm.fig.v1.SiteStatusResponse.Redis;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader);
      msg.setRedis(value);
      break;
    case 4:
      var value = new proto.palm.fig.v1.SiteStatusResponse.RabbitMq;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader);
      msg.setRabbitmq(value);
      break;
    case 5:
      var value = new proto.palm.fig.v1.SiteStatusResponse.OpenSearch;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.OpenSearch.deserializeBinaryFromReader);
      msg.setOpensearch(value);
      break;
    case 11:
      var value = new proto.palm.fig.v1.SiteStatusResponse.System;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.System.deserializeBinaryFromReader);
      msg.setSystem(value);
      break;
    case 21:
      var value = new proto.palm.fig.v1.SiteStatusResponse.Health;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.Health.deserializeBinaryFromReader);
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
proto.palm.fig.v1.SiteStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostgresql();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.fig.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter
    );
  }
  f = message.getMysql();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.fig.v1.SiteStatusResponse.MySql.serializeBinaryToWriter
    );
  }
  f = message.getRedis();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.fig.v1.SiteStatusResponse.Redis.serializeBinaryToWriter
    );
  }
  f = message.getRabbitmq();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.palm.fig.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter
    );
  }
  f = message.getOpensearch();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.palm.fig.v1.SiteStatusResponse.OpenSearch.serializeBinaryToWriter
    );
  }
  f = message.getSystem();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.fig.v1.SiteStatusResponse.System.serializeBinaryToWriter
    );
  }
  f = message.getHealthesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.palm.fig.v1.SiteStatusResponse.Health.serializeBinaryToWriter
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
proto.palm.fig.v1.SiteStatusResponse.Database.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.Database.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Database} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Database.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Database}
 */
proto.palm.fig.v1.SiteStatusResponse.Database.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.Database;
  return proto.palm.fig.v1.SiteStatusResponse.Database.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Database} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Database}
 */
proto.palm.fig.v1.SiteStatusResponse.Database.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteStatusResponse.Database.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.Database.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Database} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Database.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteStatusResponse.Database.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Database} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Database.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string size = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.Database.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Database} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Database.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.repeatedFields_ = [9];



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
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.PostgreSql.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    now: (f = msg.getNow()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    databasesList: jspb.Message.toObjectList(msg.getDatabasesList(),
    proto.palm.fig.v1.SiteStatusResponse.Database.toObject, includeInstance)
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.PostgreSql;
  return proto.palm.fig.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.fig.v1.SiteStatusResponse.Database;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.Database.deserializeBinaryFromReader);
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
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.fig.v1.SiteStatusResponse.Database.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp now = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.getNow = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.setNow = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.clearNow = function() {
  return this.setNow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.hasNow = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Database databases = 9;
 * @return {!Array<!proto.palm.fig.v1.SiteStatusResponse.Database>}
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.getDatabasesList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.SiteStatusResponse.Database>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.Database, 9));
};


/**
 * @param {!Array<!proto.palm.fig.v1.SiteStatusResponse.Database>} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.setDatabasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Database=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Database}
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.addDatabases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.palm.fig.v1.SiteStatusResponse.Database, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.PostgreSql} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.PostgreSql.prototype.clearDatabasesList = function() {
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
proto.palm.fig.v1.SiteStatusResponse.MySql.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.MySql.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.MySql} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.MySql.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.MySql}
 */
proto.palm.fig.v1.SiteStatusResponse.MySql.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.MySql;
  return proto.palm.fig.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.MySql} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.MySql}
 */
proto.palm.fig.v1.SiteStatusResponse.MySql.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteStatusResponse.MySql.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.MySql.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.MySql} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.MySql.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteStatusResponse.MySql.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.MySql} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.MySql.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.MySql.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.MySql} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.MySql.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.repeatedFields_ = [2];



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
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.Redis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Redis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.fig.v1.SiteStatusResponse.Redis.Item.toObject, includeInstance)
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.Redis;
  return proto.palm.fig.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Redis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.fig.v1.SiteStatusResponse.Redis.Item;
      reader.readMessage(value,proto.palm.fig.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader);
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
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.Redis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Redis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.fig.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter
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
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.Redis.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    node: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.Redis.Item;
  return proto.palm.fig.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
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
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNode();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string node = 1;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.getNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.setNode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ttl = 3;
 * @return {number}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.Item.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string info = 1;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.palm.fig.v1.SiteStatusResponse.Redis.Item>}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.SiteStatusResponse.Redis.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.Redis.Item, 2));
};


/**
 * @param {!Array<!proto.palm.fig.v1.SiteStatusResponse.Redis.Item>} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis.Item}
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.palm.fig.v1.SiteStatusResponse.Redis.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Redis} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Redis.prototype.clearItemsList = function() {
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
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.RabbitMq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.RabbitMq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    heartbeat: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.RabbitMq;
  return proto.palm.fig.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.RabbitMq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeartbeat(value);
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
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.RabbitMq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeartbeat();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string protocol = 1;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.RabbitMq} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 heartbeat = 2;
 * @return {number}
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.prototype.getHeartbeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.RabbitMq} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.RabbitMq.prototype.setHeartbeat = function(value) {
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
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.OpenSearch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.OpenSearch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.OpenSearch}
 */
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.OpenSearch;
  return proto.palm.fig.v1.SiteStatusResponse.OpenSearch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.OpenSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.OpenSearch}
 */
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.OpenSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.OpenSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.OpenSearch} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string info = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.OpenSearch} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.OpenSearch.prototype.setInfo = function(value) {
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
proto.palm.fig.v1.SiteStatusResponse.Health.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.Health.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Health} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Health.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Health}
 */
proto.palm.fig.v1.SiteStatusResponse.Health.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.Health;
  return proto.palm.fig.v1.SiteStatusResponse.Health.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Health} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Health}
 */
proto.palm.fig.v1.SiteStatusResponse.Health.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteStatusResponse.Health.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.Health.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Health} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.Health.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteStatusResponse.Health.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Health} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Health.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.Health.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Health} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.Health.prototype.setStatus = function(value) {
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
proto.palm.fig.v1.SiteStatusResponse.System.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.SiteStatusResponse.System.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.SiteStatusResponse.System} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.System.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System}
 */
proto.palm.fig.v1.SiteStatusResponse.System.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.SiteStatusResponse.System;
  return proto.palm.fig.v1.SiteStatusResponse.System.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.System} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System}
 */
proto.palm.fig.v1.SiteStatusResponse.System.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.SiteStatusResponse.System.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.SiteStatusResponse.System.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.SiteStatusResponse.System} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.SiteStatusResponse.System.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cpu = 2;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getCpu = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setCpu = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string memory = 3;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getMemory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setMemory = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string boot = 4;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getBoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setBoot = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string disk = 5;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getDisk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setDisk = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string load = 6;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getLoad = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setLoad = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fs = 7;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getFs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setFs = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string swap = 8;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getSwap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setSwap = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string uptime = 9;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getUptime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setUptime = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string network = 10;
 * @return {string}
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse.System} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.System.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional PostgreSql postgresql = 1;
 * @return {?proto.palm.fig.v1.SiteStatusResponse.PostgreSql}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.getPostgresql = function() {
  return /** @type{?proto.palm.fig.v1.SiteStatusResponse.PostgreSql} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.PostgreSql, 1));
};


/**
 * @param {?proto.palm.fig.v1.SiteStatusResponse.PostgreSql|undefined} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.prototype.setPostgresql = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.clearPostgresql = function() {
  return this.setPostgresql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.hasPostgresql = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MySql mysql = 2;
 * @return {?proto.palm.fig.v1.SiteStatusResponse.MySql}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.getMysql = function() {
  return /** @type{?proto.palm.fig.v1.SiteStatusResponse.MySql} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.MySql, 2));
};


/**
 * @param {?proto.palm.fig.v1.SiteStatusResponse.MySql|undefined} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.prototype.setMysql = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.clearMysql = function() {
  return this.setMysql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.hasMysql = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Redis redis = 3;
 * @return {?proto.palm.fig.v1.SiteStatusResponse.Redis}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.getRedis = function() {
  return /** @type{?proto.palm.fig.v1.SiteStatusResponse.Redis} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.Redis, 3));
};


/**
 * @param {?proto.palm.fig.v1.SiteStatusResponse.Redis|undefined} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.prototype.setRedis = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.clearRedis = function() {
  return this.setRedis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.hasRedis = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RabbitMq rabbitmq = 4;
 * @return {?proto.palm.fig.v1.SiteStatusResponse.RabbitMq}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.getRabbitmq = function() {
  return /** @type{?proto.palm.fig.v1.SiteStatusResponse.RabbitMq} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.RabbitMq, 4));
};


/**
 * @param {?proto.palm.fig.v1.SiteStatusResponse.RabbitMq|undefined} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.prototype.setRabbitmq = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.clearRabbitmq = function() {
  return this.setRabbitmq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.hasRabbitmq = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OpenSearch opensearch = 5;
 * @return {?proto.palm.fig.v1.SiteStatusResponse.OpenSearch}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.getOpensearch = function() {
  return /** @type{?proto.palm.fig.v1.SiteStatusResponse.OpenSearch} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.OpenSearch, 5));
};


/**
 * @param {?proto.palm.fig.v1.SiteStatusResponse.OpenSearch|undefined} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.prototype.setOpensearch = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.clearOpensearch = function() {
  return this.setOpensearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.hasOpensearch = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional System system = 11;
 * @return {?proto.palm.fig.v1.SiteStatusResponse.System}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.getSystem = function() {
  return /** @type{?proto.palm.fig.v1.SiteStatusResponse.System} */ (
    jspb.Message.getWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.System, 11));
};


/**
 * @param {?proto.palm.fig.v1.SiteStatusResponse.System|undefined} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.prototype.setSystem = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.clearSystem = function() {
  return this.setSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Health healthes = 21;
 * @return {!Array<!proto.palm.fig.v1.SiteStatusResponse.Health>}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.getHealthesList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.SiteStatusResponse.Health>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.SiteStatusResponse.Health, 21));
};


/**
 * @param {!Array<!proto.palm.fig.v1.SiteStatusResponse.Health>} value
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
*/
proto.palm.fig.v1.SiteStatusResponse.prototype.setHealthesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.palm.fig.v1.SiteStatusResponse.Health=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.SiteStatusResponse.Health}
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.addHealthes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.palm.fig.v1.SiteStatusResponse.Health, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.SiteStatusResponse} returns this
 */
proto.palm.fig.v1.SiteStatusResponse.prototype.clearHealthesList = function() {
  return this.setHealthesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.repeatedFields_ = [11];



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
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.ShorterLinkIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.ShorterLinkIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && nut_pb.Pagination.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.fig.v1.ShorterLinkIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.ShorterLinkIndexResponse;
  return proto.palm.fig.v1.ShorterLinkIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.ShorterLinkIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.fig.v1.ShorterLinkIndexResponse.Item;
      reader.readMessage(value,proto.palm.fig.v1.ShorterLinkIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.ShorterLinkIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.ShorterLinkIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.palm.fig.v1.ShorterLinkIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.ShorterLinkIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.ShorterLinkIndexResponse.Item;
  return proto.palm.fig.v1.ShorterLinkIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.ShorterLinkIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string code = 9;
 * @return {string}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} returns this
*/
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item} returns this
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional palm.nut.v1.Pagination pagination = 1;
 * @return {?proto.palm.nut.v1.Pagination}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.getPagination = function() {
  return /** @type{?proto.palm.nut.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, nut_pb.Pagination, 1));
};


/**
 * @param {?proto.palm.nut.v1.Pagination|undefined} value
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse} returns this
*/
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse} returns this
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 11;
 * @return {!Array<!proto.palm.fig.v1.ShorterLinkIndexResponse.Item>}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.ShorterLinkIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.ShorterLinkIndexResponse.Item, 11));
};


/**
 * @param {!Array<!proto.palm.fig.v1.ShorterLinkIndexResponse.Item>} value
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse} returns this
*/
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse.Item}
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.palm.fig.v1.ShorterLinkIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.ShorterLinkIndexResponse} returns this
 */
proto.palm.fig.v1.ShorterLinkIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.fig.v1.ShorterLinkCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.ShorterLinkCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.ShorterLinkCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkCreateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.ShorterLinkCreateRequest}
 */
proto.palm.fig.v1.ShorterLinkCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.ShorterLinkCreateRequest;
  return proto.palm.fig.v1.ShorterLinkCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.ShorterLinkCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.ShorterLinkCreateRequest}
 */
proto.palm.fig.v1.ShorterLinkCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.ShorterLinkCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.ShorterLinkCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.ShorterLinkCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkCreateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.ShorterLinkCreateRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.ShorterLinkCreateRequest} returns this
 */
proto.palm.fig.v1.ShorterLinkCreateRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.palm.fig.v1.ShorterLinkCreateRequest.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.ShorterLinkCreateRequest} returns this
 */
proto.palm.fig.v1.ShorterLinkCreateRequest.prototype.setDetails = function(value) {
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
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.ShorterLinkUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.ShorterLinkUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.ShorterLinkUpdateRequest}
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.ShorterLinkUpdateRequest;
  return proto.palm.fig.v1.ShorterLinkUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.ShorterLinkUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.ShorterLinkUpdateRequest}
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.ShorterLinkUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.ShorterLinkUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.ShorterLinkUpdateRequest} returns this
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.ShorterLinkUpdateRequest} returns this
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.ShorterLinkUpdateRequest} returns this
 */
proto.palm.fig.v1.ShorterLinkUpdateRequest.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.TagIndexResponse.repeatedFields_ = [1];



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
proto.palm.fig.v1.TagIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.TagIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.TagIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.fig.v1.TagIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.fig.v1.TagIndexResponse}
 */
proto.palm.fig.v1.TagIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.TagIndexResponse;
  return proto.palm.fig.v1.TagIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.TagIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.TagIndexResponse}
 */
proto.palm.fig.v1.TagIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.TagIndexResponse.Item;
      reader.readMessage(value,proto.palm.fig.v1.TagIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.fig.v1.TagIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.TagIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.TagIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.fig.v1.TagIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.fig.v1.TagIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.TagIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.TagIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagIndexResponse.Item.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item}
 */
proto.palm.fig.v1.TagIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.TagIndexResponse.Item;
  return proto.palm.fig.v1.TagIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.TagIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item}
 */
proto.palm.fig.v1.TagIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.TagIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.TagIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.TagIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.TagIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item} returns this
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item} returns this
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 3;
 * @return {number}
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item} returns this
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item} returns this
*/
proto.palm.fig.v1.TagIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item} returns this
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.TagIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.fig.v1.TagIndexResponse.Item>}
 */
proto.palm.fig.v1.TagIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.TagIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.TagIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.fig.v1.TagIndexResponse.Item>} value
 * @return {!proto.palm.fig.v1.TagIndexResponse} returns this
*/
proto.palm.fig.v1.TagIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.fig.v1.TagIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.TagIndexResponse.Item}
 */
proto.palm.fig.v1.TagIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.fig.v1.TagIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.TagIndexResponse} returns this
 */
proto.palm.fig.v1.TagIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.fig.v1.TagCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.TagCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.TagCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagCreateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.TagCreateRequest}
 */
proto.palm.fig.v1.TagCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.TagCreateRequest;
  return proto.palm.fig.v1.TagCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.TagCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.TagCreateRequest}
 */
proto.palm.fig.v1.TagCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.TagCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.TagCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.TagCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagCreateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.TagCreateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.TagCreateRequest} returns this
 */
proto.palm.fig.v1.TagCreateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.fig.v1.TagCreateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.TagCreateRequest} returns this
 */
proto.palm.fig.v1.TagCreateRequest.prototype.setPriority = function(value) {
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
proto.palm.fig.v1.TagUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.TagUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.TagUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagUpdateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.TagUpdateRequest}
 */
proto.palm.fig.v1.TagUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.TagUpdateRequest;
  return proto.palm.fig.v1.TagUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.TagUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.TagUpdateRequest}
 */
proto.palm.fig.v1.TagUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.TagUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.TagUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.TagUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.TagUpdateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.TagUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.TagUpdateRequest} returns this
 */
proto.palm.fig.v1.TagUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.fig.v1.TagUpdateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.TagUpdateRequest} returns this
 */
proto.palm.fig.v1.TagUpdateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.palm.fig.v1.TagUpdateRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.TagUpdateRequest} returns this
 */
proto.palm.fig.v1.TagUpdateRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.fig.v1.CategoryIndexResponse.repeatedFields_ = [1];



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
proto.palm.fig.v1.CategoryIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.CategoryIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.CategoryIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.fig.v1.CategoryIndexResponse.Item.toObject, includeInstance)
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
 * @return {!proto.palm.fig.v1.CategoryIndexResponse}
 */
proto.palm.fig.v1.CategoryIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.CategoryIndexResponse;
  return proto.palm.fig.v1.CategoryIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.CategoryIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.CategoryIndexResponse}
 */
proto.palm.fig.v1.CategoryIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.fig.v1.CategoryIndexResponse.Item;
      reader.readMessage(value,proto.palm.fig.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader);
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
proto.palm.fig.v1.CategoryIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.CategoryIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.CategoryIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.fig.v1.CategoryIndexResponse.Item.serializeBinaryToWriter
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
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.CategoryIndexResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.CategoryIndexResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item}
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.CategoryIndexResponse.Item;
  return proto.palm.fig.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.CategoryIndexResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item}
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.CategoryIndexResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.CategoryIndexResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 left = 3;
 * @return {number}
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.setLeft = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 right = 4;
 * @return {number}
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.getRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.setRight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item} returns this
*/
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item} returns this
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.CategoryIndexResponse.Item.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.fig.v1.CategoryIndexResponse.Item>}
 */
proto.palm.fig.v1.CategoryIndexResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.fig.v1.CategoryIndexResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.fig.v1.CategoryIndexResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.fig.v1.CategoryIndexResponse.Item>} value
 * @return {!proto.palm.fig.v1.CategoryIndexResponse} returns this
*/
proto.palm.fig.v1.CategoryIndexResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.fig.v1.CategoryIndexResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.fig.v1.CategoryIndexResponse.Item}
 */
proto.palm.fig.v1.CategoryIndexResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.fig.v1.CategoryIndexResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.fig.v1.CategoryIndexResponse} returns this
 */
proto.palm.fig.v1.CategoryIndexResponse.prototype.clearItemsList = function() {
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
proto.palm.fig.v1.CategoryCreateRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.palm.fig.v1.CategoryCreateRequest.ByCase = {
  BY_NOT_SET: 0,
  LEFT: 2,
  PARENT: 3
};

/**
 * @return {proto.palm.fig.v1.CategoryCreateRequest.ByCase}
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.getByCase = function() {
  return /** @type {proto.palm.fig.v1.CategoryCreateRequest.ByCase} */(jspb.Message.computeOneofCase(this, proto.palm.fig.v1.CategoryCreateRequest.oneofGroups_[0]));
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
proto.palm.fig.v1.CategoryCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.CategoryCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.CategoryCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryCreateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.CategoryCreateRequest}
 */
proto.palm.fig.v1.CategoryCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.CategoryCreateRequest;
  return proto.palm.fig.v1.CategoryCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.CategoryCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.CategoryCreateRequest}
 */
proto.palm.fig.v1.CategoryCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.CategoryCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.CategoryCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.CategoryCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryCreateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.CategoryCreateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.CategoryCreateRequest} returns this
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 left = 2;
 * @return {number}
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.CategoryCreateRequest} returns this
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.setLeft = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.palm.fig.v1.CategoryCreateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.fig.v1.CategoryCreateRequest} returns this
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.clearLeft = function() {
  return jspb.Message.setOneofField(this, 2, proto.palm.fig.v1.CategoryCreateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.hasLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 parent = 3;
 * @return {number}
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.getParent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.CategoryCreateRequest} returns this
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.setParent = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.palm.fig.v1.CategoryCreateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.fig.v1.CategoryCreateRequest} returns this
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.clearParent = function() {
  return jspb.Message.setOneofField(this, 3, proto.palm.fig.v1.CategoryCreateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.fig.v1.CategoryCreateRequest.prototype.hasParent = function() {
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
proto.palm.fig.v1.CategoryUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.fig.v1.CategoryUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.fig.v1.CategoryUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryUpdateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.fig.v1.CategoryUpdateRequest}
 */
proto.palm.fig.v1.CategoryUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.fig.v1.CategoryUpdateRequest;
  return proto.palm.fig.v1.CategoryUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.fig.v1.CategoryUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.fig.v1.CategoryUpdateRequest}
 */
proto.palm.fig.v1.CategoryUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.fig.v1.CategoryUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.fig.v1.CategoryUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.fig.v1.CategoryUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.fig.v1.CategoryUpdateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.fig.v1.CategoryUpdateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.fig.v1.CategoryUpdateRequest} returns this
 */
proto.palm.fig.v1.CategoryUpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.palm.fig.v1.CategoryUpdateRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.fig.v1.CategoryUpdateRequest} returns this
 */
proto.palm.fig.v1.CategoryUpdateRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.palm.fig.v1);
