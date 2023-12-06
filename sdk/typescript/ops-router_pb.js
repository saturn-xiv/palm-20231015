// source: ops-router.proto
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
goog.exportSymbol('proto.palm.ops.router.v1.Contact', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Dhcp', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Dmz', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Dns', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Host', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Host.Owner', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Lan', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Dnsmasq', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Dnsmasq.Item', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Dmz', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Guest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Lan', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Lan.Client', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Wan', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.IpCase', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterCreateUserRequest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterIndexRuleResponse', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterIndexRuleResponse.Item', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.PayloadCase', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterIndexUserResponse', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterIndexUserResponse.Item', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterSetDmzRequest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterSetLanRequest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterSetWanRequest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterStatusResponse', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterStatusResponse.Ip', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.RouterUpdateHostRequest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.InBound', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.Nat', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.Nat.Destination', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.Nat.Source', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.OutBound', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.OutBound.Host', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.OutBound.PayloadCase', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.OutBound.Speed', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.OutBound.Time', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.PayloadCase', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Rule.Protocol', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Static', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.UserLogsResponse', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.UserProfile', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.UserSignInRequest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.UserSignInResponse', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.UserUpdateRequest', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Wan', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.Wan.IpCase', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.WanPool', null, global);
goog.exportSymbol('proto.palm.ops.router.v1.WanPool.Item', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.displayName = 'proto.palm.ops.router.v1.Profile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Profile.Network.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.displayName = 'proto.palm.ops.router.v1.Profile.Network';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Wan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Profile.Network.Wan.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Wan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Wan.displayName = 'proto.palm.ops.router.v1.Profile.Network.Wan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.displayName = 'proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.displayName = 'proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.oneofGroups_);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.displayName = 'proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Dmz = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Profile.Network.Dmz.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Dmz, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Dmz.displayName = 'proto.palm.ops.router.v1.Profile.Network.Dmz';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Lan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Profile.Network.Lan.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Lan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Lan.displayName = 'proto.palm.ops.router.v1.Profile.Network.Lan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Lan.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Lan.Client.displayName = 'proto.palm.ops.router.v1.Profile.Network.Lan.Client';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Network.Guest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Profile.Network.Guest.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Network.Guest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Network.Guest.displayName = 'proto.palm.ops.router.v1.Profile.Network.Guest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Dnsmasq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Profile.Dnsmasq.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Dnsmasq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Dnsmasq.displayName = 'proto.palm.ops.router.v1.Profile.Dnsmasq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Profile.Dnsmasq.Item.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Dnsmasq.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Dnsmasq.Item.displayName = 'proto.palm.ops.router.v1.Profile.Dnsmasq.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.displayName = 'proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.displayName = 'proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Contact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Contact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Contact.displayName = 'proto.palm.ops.router.v1.Contact';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterSetLanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterSetLanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterSetLanRequest.displayName = 'proto.palm.ops.router.v1.RouterSetLanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterSetDmzRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterSetDmzRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterSetDmzRequest.displayName = 'proto.palm.ops.router.v1.RouterSetDmzRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterSetWanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterSetWanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterSetWanRequest.displayName = 'proto.palm.ops.router.v1.RouterSetWanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.WanPool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.WanPool.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.WanPool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.WanPool.displayName = 'proto.palm.ops.router.v1.WanPool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.WanPool.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.WanPool.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.WanPool.Item.displayName = 'proto.palm.ops.router.v1.WanPool.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterCreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterCreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterCreateUserRequest.displayName = 'proto.palm.ops.router.v1.RouterCreateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterIndexUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.RouterIndexUserResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterIndexUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterIndexUserResponse.displayName = 'proto.palm.ops.router.v1.RouterIndexUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterIndexUserResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterIndexUserResponse.Item.displayName = 'proto.palm.ops.router.v1.RouterIndexUserResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterUpdateHostRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterUpdateHostRequest.displayName = 'proto.palm.ops.router.v1.RouterUpdateHostRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.RouterIndexRuleResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterIndexRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterIndexRuleResponse.displayName = 'proto.palm.ops.router.v1.RouterIndexRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.oneofGroups_);
};
goog.inherits(proto.palm.ops.router.v1.RouterIndexRuleResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.displayName = 'proto.palm.ops.router.v1.RouterIndexRuleResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Host.displayName = 'proto.palm.ops.router.v1.Host';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Host.Owner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Host.Owner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Host.Owner.displayName = 'proto.palm.ops.router.v1.Host.Owner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.ops.router.v1.Rule.oneofGroups_);
};
goog.inherits(proto.palm.ops.router.v1.Rule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.displayName = 'proto.palm.ops.router.v1.Rule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.InBound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Rule.InBound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.InBound.displayName = 'proto.palm.ops.router.v1.Rule.InBound';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.OutBound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.ops.router.v1.Rule.OutBound.oneofGroups_);
};
goog.inherits(proto.palm.ops.router.v1.Rule.OutBound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.OutBound.displayName = 'proto.palm.ops.router.v1.Rule.OutBound';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.OutBound.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Rule.OutBound.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.OutBound.Host.displayName = 'proto.palm.ops.router.v1.Rule.OutBound.Host';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Rule.OutBound.Speed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.OutBound.Speed.displayName = 'proto.palm.ops.router.v1.Rule.OutBound.Speed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.OutBound.Time = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Rule.OutBound.Time, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.OutBound.Time.displayName = 'proto.palm.ops.router.v1.Rule.OutBound.Time';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.Nat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Rule.Nat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.Nat.displayName = 'proto.palm.ops.router.v1.Rule.Nat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.Nat.Source = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Rule.Nat.Source, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.Nat.Source.displayName = 'proto.palm.ops.router.v1.Rule.Nat.Source';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Rule.Nat.Destination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Rule.Nat.Destination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Rule.Nat.Destination.displayName = 'proto.palm.ops.router.v1.Rule.Nat.Destination';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.RouterStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterStatusResponse.displayName = 'proto.palm.ops.router.v1.RouterStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.RouterStatusResponse.Ip, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.RouterStatusResponse.Ip.displayName = 'proto.palm.ops.router.v1.RouterStatusResponse.Ip';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Lan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Lan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Lan.displayName = 'proto.palm.ops.router.v1.Lan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Dmz = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Dmz, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Dmz.displayName = 'proto.palm.ops.router.v1.Dmz';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Wan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.palm.ops.router.v1.Wan.oneofGroups_);
};
goog.inherits(proto.palm.ops.router.v1.Wan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Wan.displayName = 'proto.palm.ops.router.v1.Wan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Dhcp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Dhcp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Dhcp.displayName = 'proto.palm.ops.router.v1.Dhcp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Static = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.Static, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Static.displayName = 'proto.palm.ops.router.v1.Static';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.Dns = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.Dns.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.Dns, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.Dns.displayName = 'proto.palm.ops.router.v1.Dns';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.UserProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.UserProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.UserProfile.displayName = 'proto.palm.ops.router.v1.UserProfile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.UserSignInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.UserSignInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.UserSignInRequest.displayName = 'proto.palm.ops.router.v1.UserSignInRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.UserSignInResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.UserSignInResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.UserSignInResponse.displayName = 'proto.palm.ops.router.v1.UserSignInResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.UserUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.ops.router.v1.UserUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.UserUpdateRequest.displayName = 'proto.palm.ops.router.v1.UserUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.ops.router.v1.UserLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.ops.router.v1.UserLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.palm.ops.router.v1.UserLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.ops.router.v1.UserLogsResponse.displayName = 'proto.palm.ops.router.v1.UserLogsResponse';
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
proto.palm.ops.router.v1.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
    network: (f = msg.getNetwork()) && proto.palm.ops.router.v1.Profile.Network.toObject(includeInstance, f),
    dnsmasq: (f = msg.getDnsmasq()) && proto.palm.ops.router.v1.Profile.Dnsmasq.toObject(includeInstance, f),
    hostname: jspb.Message.getFieldWithDefault(msg, 99, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile}
 */
proto.palm.ops.router.v1.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile;
  return proto.palm.ops.router.v1.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile}
 */
proto.palm.ops.router.v1.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Profile.Network;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.deserializeBinaryFromReader);
      msg.setNetwork(value);
      break;
    case 2:
      var value = new proto.palm.ops.router.v1.Profile.Dnsmasq;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Dnsmasq.deserializeBinaryFromReader);
      msg.setDnsmasq(value);
      break;
    case 99:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetwork();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.Profile.Network.serializeBinaryToWriter
    );
  }
  f = message.getDnsmasq();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.ops.router.v1.Profile.Dnsmasq.serializeBinaryToWriter
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      99,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Network.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.toObject = function(includeInstance, msg) {
  var f, obj = {
    wanList: jspb.Message.toObjectList(msg.getWanList(),
    proto.palm.ops.router.v1.Profile.Network.Wan.toObject, includeInstance),
    dmz: (f = msg.getDmz()) && proto.palm.ops.router.v1.Profile.Network.Dmz.toObject(includeInstance, f),
    lan: (f = msg.getLan()) && proto.palm.ops.router.v1.Profile.Network.Lan.toObject(includeInstance, f),
    guest: (f = msg.getGuest()) && proto.palm.ops.router.v1.Profile.Network.Guest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Network}
 */
proto.palm.ops.router.v1.Profile.Network.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network;
  return proto.palm.ops.router.v1.Profile.Network.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network}
 */
proto.palm.ops.router.v1.Profile.Network.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Profile.Network.Wan;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Wan.deserializeBinaryFromReader);
      msg.addWan(value);
      break;
    case 2:
      var value = new proto.palm.ops.router.v1.Profile.Network.Dmz;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Dmz.deserializeBinaryFromReader);
      msg.setDmz(value);
      break;
    case 3:
      var value = new proto.palm.ops.router.v1.Profile.Network.Lan;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Lan.deserializeBinaryFromReader);
      msg.setLan(value);
      break;
    case 4:
      var value = new proto.palm.ops.router.v1.Profile.Network.Guest;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Guest.deserializeBinaryFromReader);
      msg.setGuest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWanList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.ops.router.v1.Profile.Network.Wan.serializeBinaryToWriter
    );
  }
  f = message.getDmz();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.ops.router.v1.Profile.Network.Dmz.serializeBinaryToWriter
    );
  }
  f = message.getLan();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.ops.router.v1.Profile.Network.Lan.serializeBinaryToWriter
    );
  }
  f = message.getGuest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.palm.ops.router.v1.Profile.Network.Guest.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Network.Wan.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Wan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.toObject = function(includeInstance, msg) {
  var f, obj = {
    interfacesList: jspb.Message.toObjectList(msg.getInterfacesList(),
    proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Wan;
  return proto.palm.ops.router.v1.Profile.Network.Wan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.deserializeBinaryFromReader);
      msg.addInterfaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Wan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterfacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.serializeBinaryToWriter
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
proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp;
  return proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gateway: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dns: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp;
  return proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGateway(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGateway();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDns();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string gateway = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.getGateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.setGateway = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.getDns = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.prototype.setDns = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.oneofGroups_ = [[11,12]];

/**
 * @enum {number}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.IpCase = {
  IP_NOT_SET: 0,
  DHCP: 11,
  STATIC_IP: 12
};

/**
 * @return {proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.IpCase}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.getIpCase = function() {
  return /** @type {proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.IpCase} */(jspb.Message.computeOneofCase(this, proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.oneofGroups_[0]));
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
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    device: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dhcp: (f = msg.getDhcp()) && proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.toObject(includeInstance, f),
    staticIp: (f = msg.getStaticIp()) && proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.toObject(includeInstance, f),
    metric: jspb.Message.getFieldWithDefault(msg, 99, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet;
  return proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDevice(value);
      break;
    case 11:
      var value = new proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.deserializeBinaryFromReader);
      msg.setDhcp(value);
      break;
    case 12:
      var value = new proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.deserializeBinaryFromReader);
      msg.setStaticIp(value);
      break;
    case 99:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMetric(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDhcp();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp.serializeBinaryToWriter
    );
  }
  f = message.getStaticIp();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp.serializeBinaryToWriter
    );
  }
  f = message.getMetric();
  if (f !== 0) {
    writer.writeUint32(
      99,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Dhcp dhcp = 11;
 * @return {?proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.getDhcp = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp, 11));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Network.Wan.Dhcp|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} returns this
*/
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.setDhcp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.clearDhcp = function() {
  return this.setDhcp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.hasDhcp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional StaticIp static_ip = 12;
 * @return {?proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.getStaticIp = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp, 12));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Network.Wan.StaticIp|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} returns this
*/
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.setStaticIp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.clearStaticIp = function() {
  return this.setStaticIp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.hasStaticIp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 metric = 99;
 * @return {number}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.getMetric = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 99, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet.prototype.setMetric = function(value) {
  return jspb.Message.setProto3IntField(this, 99, value);
};


/**
 * repeated Ethernet interfaces = 1;
 * @return {!Array<!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet>}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.prototype.getInterfacesList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet, 1));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet>} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan} returns this
*/
proto.palm.ops.router.v1.Profile.Network.Wan.prototype.setInterfacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet}
 */
proto.palm.ops.router.v1.Profile.Network.Wan.prototype.addInterfaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.ops.router.v1.Profile.Network.Wan.Ethernet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Wan.prototype.clearInterfacesList = function() {
  return this.setInterfacesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Dmz.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Dmz} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    device: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    allowHostsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Dmz;
  return proto.palm.ops.router.v1.Profile.Network.Dmz.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Dmz} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDevice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowHosts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Dmz.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Dmz} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAllowHostsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string allow_hosts = 9;
 * @return {!Array<string>}
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.getAllowHostsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.setAllowHostsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.addAllowHosts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Dmz} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Dmz.prototype.clearAllowHostsList = function() {
  return this.setAllowHostsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Network.Lan.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Lan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Lan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Lan.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    device: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientsList: jspb.Message.toObjectList(msg.getClientsList(),
    proto.palm.ops.router.v1.Profile.Network.Lan.Client.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Lan;
  return proto.palm.ops.router.v1.Profile.Network.Lan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Lan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDevice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 9:
      var value = new proto.palm.ops.router.v1.Profile.Network.Lan.Client;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Network.Lan.Client.deserializeBinaryFromReader);
      msg.addClients(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Lan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Lan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Lan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.palm.ops.router.v1.Profile.Network.Lan.Client.serializeBinaryToWriter
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
proto.palm.ops.router.v1.Profile.Network.Lan.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Lan.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Lan.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan.Client}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Lan.Client;
  return proto.palm.ops.router.v1.Profile.Network.Lan.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Lan.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan.Client}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.palm.ops.router.v1.Profile.Network.Lan.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Lan.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Lan.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
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
 * optional string user = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan.Client} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan.Client} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Lan.Client.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Client clients = 9;
 * @return {!Array<!proto.palm.ops.router.v1.Profile.Network.Lan.Client>}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.getClientsList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Profile.Network.Lan.Client>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Lan.Client, 9));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Profile.Network.Lan.Client>} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan} returns this
*/
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.setClientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Profile.Network.Lan.Client=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan.Client}
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.addClients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.palm.ops.router.v1.Profile.Network.Lan.Client, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Lan} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Lan.prototype.clearClientsList = function() {
  return this.setClientsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Network.Guest.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Network.Guest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Network.Guest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Guest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    device: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockHostsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Network.Guest;
  return proto.palm.ops.router.v1.Profile.Network.Guest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Guest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDevice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlockHosts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Network.Guest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Network.Guest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Network.Guest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockHostsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string block_hosts = 9;
 * @return {!Array<string>}
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.getBlockHostsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.setBlockHostsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.addBlockHosts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Network.Guest} returns this
 */
proto.palm.ops.router.v1.Profile.Network.Guest.prototype.clearBlockHostsList = function() {
  return this.setBlockHostsList([]);
};


/**
 * repeated Wan wan = 1;
 * @return {!Array<!proto.palm.ops.router.v1.Profile.Network.Wan>}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.getWanList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Profile.Network.Wan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Wan, 1));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Profile.Network.Wan>} value
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
*/
proto.palm.ops.router.v1.Profile.Network.prototype.setWanList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Profile.Network.Wan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Network.Wan}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.addWan = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.ops.router.v1.Profile.Network.Wan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
 */
proto.palm.ops.router.v1.Profile.Network.prototype.clearWanList = function() {
  return this.setWanList([]);
};


/**
 * optional Dmz dmz = 2;
 * @return {?proto.palm.ops.router.v1.Profile.Network.Dmz}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.getDmz = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Network.Dmz} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Dmz, 2));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Network.Dmz|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
*/
proto.palm.ops.router.v1.Profile.Network.prototype.setDmz = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
 */
proto.palm.ops.router.v1.Profile.Network.prototype.clearDmz = function() {
  return this.setDmz(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.hasDmz = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Lan lan = 3;
 * @return {?proto.palm.ops.router.v1.Profile.Network.Lan}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.getLan = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Network.Lan} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Lan, 3));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Network.Lan|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
*/
proto.palm.ops.router.v1.Profile.Network.prototype.setLan = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
 */
proto.palm.ops.router.v1.Profile.Network.prototype.clearLan = function() {
  return this.setLan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.hasLan = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Guest guest = 4;
 * @return {?proto.palm.ops.router.v1.Profile.Network.Guest}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.getGuest = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Network.Guest} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Network.Guest, 4));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Network.Guest|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
*/
proto.palm.ops.router.v1.Profile.Network.prototype.setGuest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile.Network} returns this
 */
proto.palm.ops.router.v1.Profile.Network.prototype.clearGuest = function() {
  return this.setGuest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.Network.prototype.hasGuest = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Dnsmasq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.ops.router.v1.Profile.Dnsmasq.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Dnsmasq;
  return proto.palm.ops.router.v1.Profile.Dnsmasq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Profile.Dnsmasq.Item;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Dnsmasq.Item.deserializeBinaryFromReader);
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
proto.palm.ops.router.v1.Profile.Dnsmasq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Dnsmasq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.ops.router.v1.Profile.Dnsmasq.Item.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.repeatedFields_ = [4,99];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Dnsmasq.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dhcpRange: (f = msg.getDhcpRange()) && proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.toObject(includeInstance, f),
    staticIpsList: jspb.Message.toObjectList(msg.getStaticIpsList(),
    proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.toObject, includeInstance),
    dnsServersList: (f = jspb.Message.getRepeatedField(msg, 99)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Dnsmasq.Item;
  return proto.palm.ops.router.v1.Profile.Dnsmasq.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.deserializeBinaryFromReader);
      msg.setDhcpRange(value);
      break;
    case 4:
      var value = new proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp;
      reader.readMessage(value,proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.deserializeBinaryFromReader);
      msg.addStaticIps(value);
      break;
    case 99:
      var value = /** @type {string} */ (reader.readString());
      msg.addDnsServers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Dnsmasq.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDhcpRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.serializeBinaryToWriter
    );
  }
  f = message.getStaticIpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.serializeBinaryToWriter
    );
  }
  f = message.getDnsServersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      99,
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
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    begin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    end: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange;
  return proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBegin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBegin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string begin = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.prototype.getBegin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.prototype.setBegin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string end = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.prototype.getEnd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange.prototype.setEnd = function(value) {
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
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.toObject = function(includeInstance, msg) {
  var f, obj = {
    mac: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp;
  return proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMac(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMac();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string mac = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.prototype.getMac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.prototype.setMac = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ip = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DhcpRange dhcp_range = 3;
 * @return {?proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.getDhcpRange = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange, 3));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
*/
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.setDhcpRange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.clearDhcpRange = function() {
  return this.setDhcpRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.hasDhcpRange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated StaticIp static_ips = 4;
 * @return {!Array<!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp>}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.getStaticIpsList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp, 4));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp>} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
*/
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.setStaticIpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.addStaticIps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.clearStaticIpsList = function() {
  return this.setStaticIpsList([]);
};


/**
 * repeated string dns_servers = 99;
 * @return {!Array<string>}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.getDnsServersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 99));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.setDnsServersList = function(value) {
  return jspb.Message.setField(this, 99, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.addDnsServers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 99, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.Item.prototype.clearDnsServersList = function() {
  return this.setDnsServersList([]);
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.ops.router.v1.Profile.Dnsmasq.Item>}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Profile.Dnsmasq.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Profile.Dnsmasq.Item, 1));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Profile.Dnsmasq.Item>} value
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq} returns this
*/
proto.palm.ops.router.v1.Profile.Dnsmasq.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq.Item}
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.ops.router.v1.Profile.Dnsmasq.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Profile.Dnsmasq} returns this
 */
proto.palm.ops.router.v1.Profile.Dnsmasq.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional Network network = 1;
 * @return {?proto.palm.ops.router.v1.Profile.Network}
 */
proto.palm.ops.router.v1.Profile.prototype.getNetwork = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Network} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Network, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Network|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile} returns this
*/
proto.palm.ops.router.v1.Profile.prototype.setNetwork = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile} returns this
 */
proto.palm.ops.router.v1.Profile.prototype.clearNetwork = function() {
  return this.setNetwork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.prototype.hasNetwork = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dnsmasq dnsmasq = 2;
 * @return {?proto.palm.ops.router.v1.Profile.Dnsmasq}
 */
proto.palm.ops.router.v1.Profile.prototype.getDnsmasq = function() {
  return /** @type{?proto.palm.ops.router.v1.Profile.Dnsmasq} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Profile.Dnsmasq, 2));
};


/**
 * @param {?proto.palm.ops.router.v1.Profile.Dnsmasq|undefined} value
 * @return {!proto.palm.ops.router.v1.Profile} returns this
*/
proto.palm.ops.router.v1.Profile.prototype.setDnsmasq = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Profile} returns this
 */
proto.palm.ops.router.v1.Profile.prototype.clearDnsmasq = function() {
  return this.setDnsmasq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Profile.prototype.hasDnsmasq = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string hostname = 99;
 * @return {string}
 */
proto.palm.ops.router.v1.Profile.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 99, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Profile} returns this
 */
proto.palm.ops.router.v1.Profile.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 99, value);
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
proto.palm.ops.router.v1.Contact.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Contact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Contact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Contact.toObject = function(includeInstance, msg) {
  var f, obj = {
    phone: jspb.Message.getFieldWithDefault(msg, 1, ""),
    wechat: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 99, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Contact}
 */
proto.palm.ops.router.v1.Contact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Contact;
  return proto.palm.ops.router.v1.Contact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Contact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Contact}
 */
proto.palm.ops.router.v1.Contact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWechat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 99:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Contact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Contact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Contact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Contact.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 99));
  if (f != null) {
    writer.writeString(
      99,
      f
    );
  }
};


/**
 * optional string phone = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Contact.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.setPhone = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.clearPhone = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Contact.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string wechat = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Contact.prototype.getWechat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.setWechat = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.clearWechat = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Contact.prototype.hasWechat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.Contact.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Contact.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string address = 99;
 * @return {string}
 */
proto.palm.ops.router.v1.Contact.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 99, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 99, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Contact} returns this
 */
proto.palm.ops.router.v1.Contact.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 99, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Contact.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterSetLanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterSetLanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterSetLanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.palm.ops.router.v1.Lan.toObject(includeInstance, f),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterSetLanRequest}
 */
proto.palm.ops.router.v1.RouterSetLanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterSetLanRequest;
  return proto.palm.ops.router.v1.RouterSetLanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterSetLanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterSetLanRequest}
 */
proto.palm.ops.router.v1.RouterSetLanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Lan;
      reader.readMessage(value,proto.palm.ops.router.v1.Lan.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterSetLanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterSetLanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterSetLanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.Lan.serializeBinaryToWriter
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Lan payload = 1;
 * @return {?proto.palm.ops.router.v1.Lan}
 */
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.getPayload = function() {
  return /** @type{?proto.palm.ops.router.v1.Lan} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Lan, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.Lan|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterSetLanRequest} returns this
*/
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterSetLanRequest} returns this
 */
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.RouterSetLanRequest} returns this
 */
proto.palm.ops.router.v1.RouterSetLanRequest.prototype.setEnable = function(value) {
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
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterSetDmzRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterSetDmzRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.palm.ops.router.v1.Dmz.toObject(includeInstance, f),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterSetDmzRequest}
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterSetDmzRequest;
  return proto.palm.ops.router.v1.RouterSetDmzRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterSetDmzRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterSetDmzRequest}
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Dmz;
      reader.readMessage(value,proto.palm.ops.router.v1.Dmz.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterSetDmzRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterSetDmzRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.Dmz.serializeBinaryToWriter
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Dmz payload = 1;
 * @return {?proto.palm.ops.router.v1.Dmz}
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.getPayload = function() {
  return /** @type{?proto.palm.ops.router.v1.Dmz} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Dmz, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.Dmz|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterSetDmzRequest} returns this
*/
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterSetDmzRequest} returns this
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.RouterSetDmzRequest} returns this
 */
proto.palm.ops.router.v1.RouterSetDmzRequest.prototype.setEnable = function(value) {
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
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterSetWanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterSetWanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterSetWanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.palm.ops.router.v1.Wan.toObject(includeInstance, f),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterSetWanRequest}
 */
proto.palm.ops.router.v1.RouterSetWanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterSetWanRequest;
  return proto.palm.ops.router.v1.RouterSetWanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterSetWanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterSetWanRequest}
 */
proto.palm.ops.router.v1.RouterSetWanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Wan;
      reader.readMessage(value,proto.palm.ops.router.v1.Wan.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterSetWanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterSetWanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterSetWanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.Wan.serializeBinaryToWriter
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Wan payload = 1;
 * @return {?proto.palm.ops.router.v1.Wan}
 */
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.getPayload = function() {
  return /** @type{?proto.palm.ops.router.v1.Wan} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Wan, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.Wan|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterSetWanRequest} returns this
*/
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterSetWanRequest} returns this
 */
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.RouterSetWanRequest} returns this
 */
proto.palm.ops.router.v1.RouterSetWanRequest.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.WanPool.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.WanPool.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.WanPool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.WanPool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.WanPool.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.ops.router.v1.WanPool.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.WanPool}
 */
proto.palm.ops.router.v1.WanPool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.WanPool;
  return proto.palm.ops.router.v1.WanPool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.WanPool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.WanPool}
 */
proto.palm.ops.router.v1.WanPool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.WanPool.Item;
      reader.readMessage(value,proto.palm.ops.router.v1.WanPool.Item.deserializeBinaryFromReader);
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
proto.palm.ops.router.v1.WanPool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.WanPool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.WanPool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.WanPool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.ops.router.v1.WanPool.Item.serializeBinaryToWriter
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
proto.palm.ops.router.v1.WanPool.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.WanPool.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.WanPool.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.WanPool.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    weight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.WanPool.Item}
 */
proto.palm.ops.router.v1.WanPool.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.WanPool.Item;
  return proto.palm.ops.router.v1.WanPool.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.WanPool.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.WanPool.Item}
 */
proto.palm.ops.router.v1.WanPool.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.WanPool.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.WanPool.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.WanPool.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.WanPool.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.WanPool.Item.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.WanPool.Item} returns this
 */
proto.palm.ops.router.v1.WanPool.Item.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 weight = 2;
 * @return {number}
 */
proto.palm.ops.router.v1.WanPool.Item.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.WanPool.Item} returns this
 */
proto.palm.ops.router.v1.WanPool.Item.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.ops.router.v1.WanPool.Item>}
 */
proto.palm.ops.router.v1.WanPool.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.WanPool.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.WanPool.Item, 1));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.WanPool.Item>} value
 * @return {!proto.palm.ops.router.v1.WanPool} returns this
*/
proto.palm.ops.router.v1.WanPool.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.ops.router.v1.WanPool.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.WanPool.Item}
 */
proto.palm.ops.router.v1.WanPool.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.ops.router.v1.WanPool.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.WanPool} returns this
 */
proto.palm.ops.router.v1.WanPool.prototype.clearItemsList = function() {
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
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterCreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterCreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contact: (f = msg.getContact()) && proto.palm.ops.router.v1.Contact.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterCreateUserRequest}
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterCreateUserRequest;
  return proto.palm.ops.router.v1.RouterCreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterCreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterCreateUserRequest}
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.ops.router.v1.Contact;
      reader.readMessage(value,proto.palm.ops.router.v1.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterCreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterCreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.ops.router.v1.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterCreateUserRequest} returns this
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Contact contact = 2;
 * @return {?proto.palm.ops.router.v1.Contact}
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.getContact = function() {
  return /** @type{?proto.palm.ops.router.v1.Contact} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Contact, 2));
};


/**
 * @param {?proto.palm.ops.router.v1.Contact|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterCreateUserRequest} returns this
*/
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterCreateUserRequest} returns this
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterCreateUserRequest.prototype.hasContact = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterIndexUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterIndexUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.ops.router.v1.RouterIndexUserResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterIndexUserResponse;
  return proto.palm.ops.router.v1.RouterIndexUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterIndexUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.RouterIndexUserResponse.Item;
      reader.readMessage(value,proto.palm.ops.router.v1.RouterIndexUserResponse.Item.deserializeBinaryFromReader);
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
proto.palm.ops.router.v1.RouterIndexUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterIndexUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterIndexUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.ops.router.v1.RouterIndexUserResponse.Item.serializeBinaryToWriter
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
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterIndexUserResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contact: (f = msg.getContact()) && proto.palm.ops.router.v1.Contact.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterIndexUserResponse.Item;
  return proto.palm.ops.router.v1.RouterIndexUserResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.ops.router.v1.Contact;
      reader.readMessage(value,proto.palm.ops.router.v1.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterIndexUserResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.ops.router.v1.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Contact contact = 3;
 * @return {?proto.palm.ops.router.v1.Contact}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.getContact = function() {
  return /** @type{?proto.palm.ops.router.v1.Contact} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Contact, 3));
};


/**
 * @param {?proto.palm.ops.router.v1.Contact|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item} returns this
*/
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.Item.prototype.hasContact = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.ops.router.v1.RouterIndexUserResponse.Item>}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.RouterIndexUserResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.RouterIndexUserResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.RouterIndexUserResponse.Item>} value
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse} returns this
*/
proto.palm.ops.router.v1.RouterIndexUserResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse.Item}
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.ops.router.v1.RouterIndexUserResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.RouterIndexUserResponse} returns this
 */
proto.palm.ops.router.v1.RouterIndexUserResponse.prototype.clearItemsList = function() {
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
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterUpdateHostRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterUpdateHostRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    user: jspb.Message.getFieldWithDefault(msg, 2, 0),
    group: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fixed: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    zone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    location: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterUpdateHostRequest;
  return proto.palm.ops.router.v1.RouterUpdateHostRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterUpdateHostRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFixed(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterUpdateHostRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterUpdateHostRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUser();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFixed();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      8,
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user = 2;
 * @return {number}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string group = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ip = 4;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool fixed = 5;
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.getFixed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.setFixed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string zone = 8;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string location = 9;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterUpdateHostRequest} returns this
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterUpdateHostRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterIndexRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterIndexRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterIndexRuleResponse;
  return proto.palm.ops.router.v1.RouterIndexRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterIndexRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.RouterIndexRuleResponse.Item;
      reader.readMessage(value,proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.deserializeBinaryFromReader);
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
proto.palm.ops.router.v1.RouterIndexRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterIndexRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterIndexRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.serializeBinaryToWriter
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
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.oneofGroups_ = [[11,12,13]];

/**
 * @enum {number}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  IN: 11,
  OUT: 12,
  NAT: 13
};

/**
 * @return {proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.PayloadCase}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.getPayloadCase = function() {
  return /** @type {proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.oneofGroups_[0]));
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
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    group: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pb_in: (f = msg.getIn()) && proto.palm.ops.router.v1.Rule.InBound.toObject(includeInstance, f),
    out: (f = msg.getOut()) && proto.palm.ops.router.v1.Rule.OutBound.toObject(includeInstance, f),
    nat: (f = msg.getNat()) && proto.palm.ops.router.v1.Rule.Nat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterIndexRuleResponse.Item;
  return proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 11:
      var value = new proto.palm.ops.router.v1.Rule.InBound;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.InBound.deserializeBinaryFromReader);
      msg.setIn(value);
      break;
    case 12:
      var value = new proto.palm.ops.router.v1.Rule.OutBound;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.OutBound.deserializeBinaryFromReader);
      msg.setOut(value);
      break;
    case 13:
      var value = new proto.palm.ops.router.v1.Rule.Nat;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.Nat.deserializeBinaryFromReader);
      msg.setNat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIn();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.ops.router.v1.Rule.InBound.serializeBinaryToWriter
    );
  }
  f = message.getOut();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.palm.ops.router.v1.Rule.OutBound.serializeBinaryToWriter
    );
  }
  f = message.getNat();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.palm.ops.router.v1.Rule.Nat.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string group = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Rule.InBound in = 11;
 * @return {?proto.palm.ops.router.v1.Rule.InBound}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.getIn = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.InBound} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.InBound, 11));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.InBound|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
*/
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.setIn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.clearIn = function() {
  return this.setIn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.hasIn = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Rule.OutBound out = 12;
 * @return {?proto.palm.ops.router.v1.Rule.OutBound}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.getOut = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.OutBound} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.OutBound, 12));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.OutBound|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
*/
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.setOut = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.clearOut = function() {
  return this.setOut(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.hasOut = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Rule.Nat nat = 13;
 * @return {?proto.palm.ops.router.v1.Rule.Nat}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.getNat = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.Nat} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.Nat, 13));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.Nat|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
*/
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.setNat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item} returns this
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.clearNat = function() {
  return this.setNat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.Item.prototype.hasNat = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item>}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.RouterIndexRuleResponse.Item, 1));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item>} value
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse} returns this
*/
proto.palm.ops.router.v1.RouterIndexRuleResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse.Item}
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.ops.router.v1.RouterIndexRuleResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.RouterIndexRuleResponse} returns this
 */
proto.palm.ops.router.v1.RouterIndexRuleResponse.prototype.clearItemsList = function() {
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
proto.palm.ops.router.v1.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mac: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fixed: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    group: jspb.Message.getFieldWithDefault(msg, 9, ""),
    location: jspb.Message.getFieldWithDefault(msg, 11, ""),
    owner: (f = msg.getOwner()) && proto.palm.ops.router.v1.Host.Owner.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Host}
 */
proto.palm.ops.router.v1.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Host;
  return proto.palm.ops.router.v1.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Host}
 */
proto.palm.ops.router.v1.Host.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setMac(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFixed(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 12:
      var value = new proto.palm.ops.router.v1.Host.Owner;
      reader.readMessage(value,proto.palm.ops.router.v1.Host.Owner.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Host.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMac();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFixed();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      9,
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
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.palm.ops.router.v1.Host.Owner.serializeBinaryToWriter
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
proto.palm.ops.router.v1.Host.Owner.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Host.Owner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Host.Owner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Host.Owner.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contact: (f = msg.getContact()) && proto.palm.ops.router.v1.Contact.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Host.Owner}
 */
proto.palm.ops.router.v1.Host.Owner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Host.Owner;
  return proto.palm.ops.router.v1.Host.Owner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Host.Owner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Host.Owner}
 */
proto.palm.ops.router.v1.Host.Owner.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.ops.router.v1.Contact;
      reader.readMessage(value,proto.palm.ops.router.v1.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Host.Owner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Host.Owner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Host.Owner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Host.Owner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.ops.router.v1.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Host.Owner.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Host.Owner} returns this
 */
proto.palm.ops.router.v1.Host.Owner.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Contact contact = 2;
 * @return {?proto.palm.ops.router.v1.Contact}
 */
proto.palm.ops.router.v1.Host.Owner.prototype.getContact = function() {
  return /** @type{?proto.palm.ops.router.v1.Contact} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Contact, 2));
};


/**
 * @param {?proto.palm.ops.router.v1.Contact|undefined} value
 * @return {!proto.palm.ops.router.v1.Host.Owner} returns this
*/
proto.palm.ops.router.v1.Host.Owner.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Host.Owner} returns this
 */
proto.palm.ops.router.v1.Host.Owner.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Host.Owner.prototype.hasContact = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.palm.ops.router.v1.Host.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Host.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string mac = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.Host.prototype.getMac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.setMac = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ip = 4;
 * @return {string}
 */
proto.palm.ops.router.v1.Host.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool fixed = 5;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Host.prototype.getFixed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.setFixed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string group = 9;
 * @return {string}
 */
proto.palm.ops.router.v1.Host.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string location = 11;
 * @return {string}
 */
proto.palm.ops.router.v1.Host.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Host.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Owner owner = 12;
 * @return {?proto.palm.ops.router.v1.Host.Owner}
 */
proto.palm.ops.router.v1.Host.prototype.getOwner = function() {
  return /** @type{?proto.palm.ops.router.v1.Host.Owner} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Host.Owner, 12));
};


/**
 * @param {?proto.palm.ops.router.v1.Host.Owner|undefined} value
 * @return {!proto.palm.ops.router.v1.Host} returns this
*/
proto.palm.ops.router.v1.Host.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Host} returns this
 */
proto.palm.ops.router.v1.Host.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Host.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.ops.router.v1.Rule.oneofGroups_ = [[11,12,13]];

/**
 * @enum {number}
 */
proto.palm.ops.router.v1.Rule.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  IN: 11,
  OUT: 12,
  NAT: 13
};

/**
 * @return {proto.palm.ops.router.v1.Rule.PayloadCase}
 */
proto.palm.ops.router.v1.Rule.prototype.getPayloadCase = function() {
  return /** @type {proto.palm.ops.router.v1.Rule.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.palm.ops.router.v1.Rule.oneofGroups_[0]));
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
proto.palm.ops.router.v1.Rule.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    group: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pb_in: (f = msg.getIn()) && proto.palm.ops.router.v1.Rule.InBound.toObject(includeInstance, f),
    out: (f = msg.getOut()) && proto.palm.ops.router.v1.Rule.OutBound.toObject(includeInstance, f),
    nat: (f = msg.getNat()) && proto.palm.ops.router.v1.Rule.Nat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule}
 */
proto.palm.ops.router.v1.Rule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule;
  return proto.palm.ops.router.v1.Rule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule}
 */
proto.palm.ops.router.v1.Rule.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setGroup(value);
      break;
    case 11:
      var value = new proto.palm.ops.router.v1.Rule.InBound;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.InBound.deserializeBinaryFromReader);
      msg.setIn(value);
      break;
    case 12:
      var value = new proto.palm.ops.router.v1.Rule.OutBound;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.OutBound.deserializeBinaryFromReader);
      msg.setOut(value);
      break;
    case 13:
      var value = new proto.palm.ops.router.v1.Rule.Nat;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.Nat.deserializeBinaryFromReader);
      msg.setNat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIn();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.ops.router.v1.Rule.InBound.serializeBinaryToWriter
    );
  }
  f = message.getOut();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.palm.ops.router.v1.Rule.OutBound.serializeBinaryToWriter
    );
  }
  f = message.getNat();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.palm.ops.router.v1.Rule.Nat.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.palm.ops.router.v1.Rule.Protocol = {
  ICMP: 0,
  TCP: 1,
  UDP: 2
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
proto.palm.ops.router.v1.Rule.InBound.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.InBound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.InBound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.InBound.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tcp: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0),
    source: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.InBound}
 */
proto.palm.ops.router.v1.Rule.InBound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.InBound;
  return proto.palm.ops.router.v1.Rule.InBound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.InBound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.InBound}
 */
proto.palm.ops.router.v1.Rule.InBound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTcp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.InBound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.InBound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.InBound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTcp();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Rule.InBound} returns this
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool tcp = 2;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.getTcp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.InBound} returns this
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.setTcp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 port = 3;
 * @return {number}
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Rule.InBound} returns this
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string source = 4;
 * @return {string}
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Rule.InBound} returns this
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.setSource = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.InBound} returns this
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.clearSource = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.InBound.prototype.hasSource = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.ops.router.v1.Rule.OutBound.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.palm.ops.router.v1.Rule.OutBound.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  HOST: 1,
  SPEED: 2,
  TIME: 3
};

/**
 * @return {proto.palm.ops.router.v1.Rule.OutBound.PayloadCase}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.getPayloadCase = function() {
  return /** @type {proto.palm.ops.router.v1.Rule.OutBound.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.palm.ops.router.v1.Rule.OutBound.oneofGroups_[0]));
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
proto.palm.ops.router.v1.Rule.OutBound.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.OutBound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.OutBound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = msg.getHost()) && proto.palm.ops.router.v1.Rule.OutBound.Host.toObject(includeInstance, f),
    speed: (f = msg.getSpeed()) && proto.palm.ops.router.v1.Rule.OutBound.Speed.toObject(includeInstance, f),
    time: (f = msg.getTime()) && proto.palm.ops.router.v1.Rule.OutBound.Time.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound}
 */
proto.palm.ops.router.v1.Rule.OutBound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.OutBound;
  return proto.palm.ops.router.v1.Rule.OutBound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound}
 */
proto.palm.ops.router.v1.Rule.OutBound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Rule.OutBound.Host;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.OutBound.Host.deserializeBinaryFromReader);
      msg.setHost(value);
      break;
    case 2:
      var value = new proto.palm.ops.router.v1.Rule.OutBound.Speed;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.OutBound.Speed.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 3:
      var value = new proto.palm.ops.router.v1.Rule.OutBound.Time;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.OutBound.Time.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.OutBound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.Rule.OutBound.Host.serializeBinaryToWriter
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.ops.router.v1.Rule.OutBound.Speed.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.ops.router.v1.Rule.OutBound.Time.serializeBinaryToWriter
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
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.OutBound.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: jspb.Message.getFieldWithDefault(msg, 1, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Host}
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.OutBound.Host;
  return proto.palm.ops.router.v1.Rule.OutBound.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Host}
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.palm.ops.router.v1.Rule.Protocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.OutBound.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string to = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Host} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Protocol protocol = 2;
 * @return {!proto.palm.ops.router.v1.Rule.Protocol}
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.getProtocol = function() {
  return /** @type {!proto.palm.ops.router.v1.Rule.Protocol} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.palm.ops.router.v1.Rule.Protocol} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Host} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 port = 3;
 * @return {number}
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Host} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Host.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.OutBound.Speed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Speed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.toObject = function(includeInstance, msg) {
  var f, obj = {
    up: jspb.Message.getFieldWithDefault(msg, 1, 0),
    down: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Speed}
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.OutBound.Speed;
  return proto.palm.ops.router.v1.Rule.OutBound.Speed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Speed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Speed}
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.OutBound.Speed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Speed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 up = 1;
 * @return {number}
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.getUp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Speed} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.setUp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Speed} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.clearUp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.hasUp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 down = 2;
 * @return {number}
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.getDown = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Speed} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.setDown = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Speed} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.clearDown = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Speed.prototype.hasDown = function() {
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
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.OutBound.Time.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Time} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    monday: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    tuesday: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    wednesday: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    thursday: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    friday: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    saturday: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    sunday: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.OutBound.Time;
  return proto.palm.ops.router.v1.Rule.OutBound.Time.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Time} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMonday(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTuesday(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWednesday(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setThursday(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFriday(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSaturday(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSunday(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.OutBound.Time.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.OutBound.Time} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMonday();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getTuesday();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getWednesday();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getThursday();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getFriday();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getSaturday();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getSunday();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp from = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
*/
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp to = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
*/
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool monday = 11;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getMonday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setMonday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool tuesday = 12;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getTuesday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setTuesday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool wednesday = 13;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getWednesday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setWednesday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool thursday = 14;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getThursday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setThursday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool friday = 15;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getFriday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setFriday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool saturday = 16;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getSaturday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setSaturday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool sunday = 17;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.getSunday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound.Time} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.Time.prototype.setSunday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional Host host = 1;
 * @return {?proto.palm.ops.router.v1.Rule.OutBound.Host}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.getHost = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.OutBound.Host} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.OutBound.Host, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.OutBound.Host|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound} returns this
*/
proto.palm.ops.router.v1.Rule.OutBound.prototype.setHost = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.palm.ops.router.v1.Rule.OutBound.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.clearHost = function() {
  return this.setHost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Speed speed = 2;
 * @return {?proto.palm.ops.router.v1.Rule.OutBound.Speed}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.getSpeed = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.OutBound.Speed} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.OutBound.Speed, 2));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.OutBound.Speed|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound} returns this
*/
proto.palm.ops.router.v1.Rule.OutBound.prototype.setSpeed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.palm.ops.router.v1.Rule.OutBound.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Time time = 3;
 * @return {?proto.palm.ops.router.v1.Rule.OutBound.Time}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.getTime = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.OutBound.Time} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.OutBound.Time, 3));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.OutBound.Time|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule.OutBound} returns this
*/
proto.palm.ops.router.v1.Rule.OutBound.prototype.setTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.palm.ops.router.v1.Rule.OutBound.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.OutBound} returns this
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.OutBound.prototype.hasTime = function() {
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
proto.palm.ops.router.v1.Rule.Nat.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.Nat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.Nat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.Nat.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && proto.palm.ops.router.v1.Rule.Nat.Source.toObject(includeInstance, f),
    tcp: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    destination: (f = msg.getDestination()) && proto.palm.ops.router.v1.Rule.Nat.Destination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.Nat}
 */
proto.palm.ops.router.v1.Rule.Nat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.Nat;
  return proto.palm.ops.router.v1.Rule.Nat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.Nat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.Nat}
 */
proto.palm.ops.router.v1.Rule.Nat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.Rule.Nat.Source;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.Nat.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTcp(value);
      break;
    case 3:
      var value = new proto.palm.ops.router.v1.Rule.Nat.Destination;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.Nat.Destination.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.Nat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.Nat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.Nat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.Rule.Nat.Source.serializeBinaryToWriter
    );
  }
  f = message.getTcp();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.palm.ops.router.v1.Rule.Nat.Destination.serializeBinaryToWriter
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
proto.palm.ops.router.v1.Rule.Nat.Source.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.Nat.Source.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.Nat.Source} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.Nat.Source.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Source}
 */
proto.palm.ops.router.v1.Rule.Nat.Source.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.Nat.Source;
  return proto.palm.ops.router.v1.Rule.Nat.Source.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.Nat.Source} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Source}
 */
proto.palm.ops.router.v1.Rule.Nat.Source.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.Nat.Source.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.Nat.Source.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.Nat.Source} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.Nat.Source.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Rule.Nat.Source.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Source} returns this
 */
proto.palm.ops.router.v1.Rule.Nat.Source.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 3;
 * @return {number}
 */
proto.palm.ops.router.v1.Rule.Nat.Source.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Source} returns this
 */
proto.palm.ops.router.v1.Rule.Nat.Source.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.palm.ops.router.v1.Rule.Nat.Destination.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Rule.Nat.Destination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Rule.Nat.Destination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Destination}
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Rule.Nat.Destination;
  return proto.palm.ops.router.v1.Rule.Nat.Destination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Rule.Nat.Destination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Destination}
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Rule.Nat.Destination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Rule.Nat.Destination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Destination} returns this
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 3;
 * @return {number}
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Rule.Nat.Destination} returns this
 */
proto.palm.ops.router.v1.Rule.Nat.Destination.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Source source = 1;
 * @return {?proto.palm.ops.router.v1.Rule.Nat.Source}
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.getSource = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.Nat.Source} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.Nat.Source, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.Nat.Source|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule.Nat} returns this
*/
proto.palm.ops.router.v1.Rule.Nat.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.Nat} returns this
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool tcp = 2;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.getTcp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Rule.Nat} returns this
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.setTcp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Destination destination = 3;
 * @return {?proto.palm.ops.router.v1.Rule.Nat.Destination}
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.getDestination = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.Nat.Destination} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.Nat.Destination, 3));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.Nat.Destination|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule.Nat} returns this
*/
proto.palm.ops.router.v1.Rule.Nat.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule.Nat} returns this
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.Nat.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Rule.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Rule} returns this
 */
proto.palm.ops.router.v1.Rule.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Rule.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Rule} returns this
 */
proto.palm.ops.router.v1.Rule.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional InBound in = 11;
 * @return {?proto.palm.ops.router.v1.Rule.InBound}
 */
proto.palm.ops.router.v1.Rule.prototype.getIn = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.InBound} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.InBound, 11));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.InBound|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule} returns this
*/
proto.palm.ops.router.v1.Rule.prototype.setIn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.palm.ops.router.v1.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule} returns this
 */
proto.palm.ops.router.v1.Rule.prototype.clearIn = function() {
  return this.setIn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.prototype.hasIn = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional OutBound out = 12;
 * @return {?proto.palm.ops.router.v1.Rule.OutBound}
 */
proto.palm.ops.router.v1.Rule.prototype.getOut = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.OutBound} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.OutBound, 12));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.OutBound|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule} returns this
*/
proto.palm.ops.router.v1.Rule.prototype.setOut = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.palm.ops.router.v1.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule} returns this
 */
proto.palm.ops.router.v1.Rule.prototype.clearOut = function() {
  return this.setOut(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.prototype.hasOut = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Nat nat = 13;
 * @return {?proto.palm.ops.router.v1.Rule.Nat}
 */
proto.palm.ops.router.v1.Rule.prototype.getNat = function() {
  return /** @type{?proto.palm.ops.router.v1.Rule.Nat} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Rule.Nat, 13));
};


/**
 * @param {?proto.palm.ops.router.v1.Rule.Nat|undefined} value
 * @return {!proto.palm.ops.router.v1.Rule} returns this
*/
proto.palm.ops.router.v1.Rule.prototype.setNat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.palm.ops.router.v1.Rule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Rule} returns this
 */
proto.palm.ops.router.v1.Rule.prototype.clearNat = function() {
  return this.setNat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Rule.prototype.hasNat = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.RouterStatusResponse.repeatedFields_ = [14,21,22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    interfacesMap: (f = msg.getInterfacesMap()) ? f.toObject(includeInstance, undefined) : [],
    lan: (f = msg.getLan()) && proto.palm.ops.router.v1.Lan.toObject(includeInstance, f),
    dmz: (f = msg.getDmz()) && proto.palm.ops.router.v1.Dmz.toObject(includeInstance, f),
    dns: (f = msg.getDns()) && proto.palm.ops.router.v1.Dns.toObject(includeInstance, f),
    wanList: jspb.Message.toObjectList(msg.getWanList(),
    proto.palm.ops.router.v1.Wan.toObject, includeInstance),
    wanPool: (f = msg.getWanPool()) && proto.palm.ops.router.v1.WanPool.toObject(includeInstance, f),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.palm.ops.router.v1.Rule.toObject, includeInstance),
    hostsList: jspb.Message.toObjectList(msg.getHostsList(),
    proto.palm.ops.router.v1.Host.toObject, includeInstance),
    ip: (f = msg.getIp()) && proto.palm.ops.router.v1.RouterStatusResponse.Ip.toObject(includeInstance, f),
    firewall: jspb.Message.getFieldWithDefault(msg, 98, ""),
    uptime: (f = msg.getUptime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse}
 */
proto.palm.ops.router.v1.RouterStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterStatusResponse;
  return proto.palm.ops.router.v1.RouterStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse}
 */
proto.palm.ops.router.v1.RouterStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getInterfacesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 11:
      var value = new proto.palm.ops.router.v1.Lan;
      reader.readMessage(value,proto.palm.ops.router.v1.Lan.deserializeBinaryFromReader);
      msg.setLan(value);
      break;
    case 12:
      var value = new proto.palm.ops.router.v1.Dmz;
      reader.readMessage(value,proto.palm.ops.router.v1.Dmz.deserializeBinaryFromReader);
      msg.setDmz(value);
      break;
    case 13:
      var value = new proto.palm.ops.router.v1.Dns;
      reader.readMessage(value,proto.palm.ops.router.v1.Dns.deserializeBinaryFromReader);
      msg.setDns(value);
      break;
    case 14:
      var value = new proto.palm.ops.router.v1.Wan;
      reader.readMessage(value,proto.palm.ops.router.v1.Wan.deserializeBinaryFromReader);
      msg.addWan(value);
      break;
    case 15:
      var value = new proto.palm.ops.router.v1.WanPool;
      reader.readMessage(value,proto.palm.ops.router.v1.WanPool.deserializeBinaryFromReader);
      msg.setWanPool(value);
      break;
    case 21:
      var value = new proto.palm.ops.router.v1.Rule;
      reader.readMessage(value,proto.palm.ops.router.v1.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 22:
      var value = new proto.palm.ops.router.v1.Host;
      reader.readMessage(value,proto.palm.ops.router.v1.Host.deserializeBinaryFromReader);
      msg.addHosts(value);
      break;
    case 97:
      var value = new proto.palm.ops.router.v1.RouterStatusResponse.Ip;
      reader.readMessage(value,proto.palm.ops.router.v1.RouterStatusResponse.Ip.deserializeBinaryFromReader);
      msg.setIp(value);
      break;
    case 98:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirewall(value);
      break;
    case 99:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setUptime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterfacesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getLan();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.palm.ops.router.v1.Lan.serializeBinaryToWriter
    );
  }
  f = message.getDmz();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.palm.ops.router.v1.Dmz.serializeBinaryToWriter
    );
  }
  f = message.getDns();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.palm.ops.router.v1.Dns.serializeBinaryToWriter
    );
  }
  f = message.getWanList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.palm.ops.router.v1.Wan.serializeBinaryToWriter
    );
  }
  f = message.getWanPool();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.palm.ops.router.v1.WanPool.serializeBinaryToWriter
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.palm.ops.router.v1.Rule.serializeBinaryToWriter
    );
  }
  f = message.getHostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.palm.ops.router.v1.Host.serializeBinaryToWriter
    );
  }
  f = message.getIp();
  if (f != null) {
    writer.writeMessage(
      97,
      f,
      proto.palm.ops.router.v1.RouterStatusResponse.Ip.serializeBinaryToWriter
    );
  }
  f = message.getFirewall();
  if (f.length > 0) {
    writer.writeString(
      98,
      f
    );
  }
  f = message.getUptime();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
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
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.RouterStatusResponse.Ip.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.RouterStatusResponse.Ip} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    route: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rule: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse.Ip}
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.RouterStatusResponse.Ip;
  return proto.palm.ops.router.v1.RouterStatusResponse.Ip.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.RouterStatusResponse.Ip} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse.Ip}
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoute(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.RouterStatusResponse.Ip.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.RouterStatusResponse.Ip} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoute();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRule();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse.Ip} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string route = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.getRoute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse.Ip} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.setRoute = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string rule = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.getRule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse.Ip} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.Ip.prototype.setRule = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> interfaces = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getInterfacesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearInterfacesMap = function() {
  this.getInterfacesMap().clear();
  return this;
};


/**
 * optional Lan lan = 11;
 * @return {?proto.palm.ops.router.v1.Lan}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getLan = function() {
  return /** @type{?proto.palm.ops.router.v1.Lan} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Lan, 11));
};


/**
 * @param {?proto.palm.ops.router.v1.Lan|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setLan = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearLan = function() {
  return this.setLan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.hasLan = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Dmz dmz = 12;
 * @return {?proto.palm.ops.router.v1.Dmz}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getDmz = function() {
  return /** @type{?proto.palm.ops.router.v1.Dmz} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Dmz, 12));
};


/**
 * @param {?proto.palm.ops.router.v1.Dmz|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setDmz = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearDmz = function() {
  return this.setDmz(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.hasDmz = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Dns dns = 13;
 * @return {?proto.palm.ops.router.v1.Dns}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getDns = function() {
  return /** @type{?proto.palm.ops.router.v1.Dns} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Dns, 13));
};


/**
 * @param {?proto.palm.ops.router.v1.Dns|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setDns = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearDns = function() {
  return this.setDns(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.hasDns = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated Wan wan = 14;
 * @return {!Array<!proto.palm.ops.router.v1.Wan>}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getWanList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Wan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Wan, 14));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Wan>} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setWanList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Wan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Wan}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.addWan = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.palm.ops.router.v1.Wan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearWanList = function() {
  return this.setWanList([]);
};


/**
 * optional WanPool wan_pool = 15;
 * @return {?proto.palm.ops.router.v1.WanPool}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getWanPool = function() {
  return /** @type{?proto.palm.ops.router.v1.WanPool} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.WanPool, 15));
};


/**
 * @param {?proto.palm.ops.router.v1.WanPool|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setWanPool = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearWanPool = function() {
  return this.setWanPool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.hasWanPool = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated Rule rules = 21;
 * @return {!Array<!proto.palm.ops.router.v1.Rule>}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Rule, 21));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Rule>} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Rule}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.palm.ops.router.v1.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * repeated Host hosts = 22;
 * @return {!Array<!proto.palm.ops.router.v1.Host>}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getHostsList = function() {
  return /** @type{!Array<!proto.palm.ops.router.v1.Host>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.ops.router.v1.Host, 22));
};


/**
 * @param {!Array<!proto.palm.ops.router.v1.Host>} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setHostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.palm.ops.router.v1.Host=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Host}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.addHosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.palm.ops.router.v1.Host, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearHostsList = function() {
  return this.setHostsList([]);
};


/**
 * optional Ip ip = 97;
 * @return {?proto.palm.ops.router.v1.RouterStatusResponse.Ip}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getIp = function() {
  return /** @type{?proto.palm.ops.router.v1.RouterStatusResponse.Ip} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.RouterStatusResponse.Ip, 97));
};


/**
 * @param {?proto.palm.ops.router.v1.RouterStatusResponse.Ip|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setIp = function(value) {
  return jspb.Message.setWrapperField(this, 97, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearIp = function() {
  return this.setIp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.hasIp = function() {
  return jspb.Message.getField(this, 97) != null;
};


/**
 * optional string firewall = 98;
 * @return {string}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getFirewall = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 98, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setFirewall = function(value) {
  return jspb.Message.setProto3StringField(this, 98, value);
};


/**
 * optional google.protobuf.Duration uptime = 99;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.getUptime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 99));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
*/
proto.palm.ops.router.v1.RouterStatusResponse.prototype.setUptime = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.RouterStatusResponse} returns this
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.clearUptime = function() {
  return this.setUptime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.RouterStatusResponse.prototype.hasUptime = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.palm.ops.router.v1.Lan.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Lan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Lan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Lan.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mac: jspb.Message.getFieldWithDefault(msg, 2, ""),
    metric: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Lan}
 */
proto.palm.ops.router.v1.Lan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Lan;
  return proto.palm.ops.router.v1.Lan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Lan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Lan}
 */
proto.palm.ops.router.v1.Lan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMac(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMetric(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Lan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Lan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Lan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Lan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMac();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetric();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Lan.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Lan} returns this
 */
proto.palm.ops.router.v1.Lan.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mac = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Lan.prototype.getMac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Lan} returns this
 */
proto.palm.ops.router.v1.Lan.prototype.setMac = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 metric = 3;
 * @return {number}
 */
proto.palm.ops.router.v1.Lan.prototype.getMetric = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Lan} returns this
 */
proto.palm.ops.router.v1.Lan.prototype.setMetric = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 11;
 * @return {string}
 */
proto.palm.ops.router.v1.Lan.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Lan} returns this
 */
proto.palm.ops.router.v1.Lan.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
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
proto.palm.ops.router.v1.Dmz.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Dmz.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Dmz} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Dmz.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mac: jspb.Message.getFieldWithDefault(msg, 2, ""),
    metric: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Dmz}
 */
proto.palm.ops.router.v1.Dmz.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Dmz;
  return proto.palm.ops.router.v1.Dmz.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Dmz} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Dmz}
 */
proto.palm.ops.router.v1.Dmz.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMac(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMetric(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Dmz.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Dmz.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Dmz} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Dmz.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMac();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetric();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Dmz.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Dmz} returns this
 */
proto.palm.ops.router.v1.Dmz.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mac = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.Dmz.prototype.getMac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Dmz} returns this
 */
proto.palm.ops.router.v1.Dmz.prototype.setMac = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 metric = 3;
 * @return {number}
 */
proto.palm.ops.router.v1.Dmz.prototype.getMetric = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Dmz} returns this
 */
proto.palm.ops.router.v1.Dmz.prototype.setMetric = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 11;
 * @return {string}
 */
proto.palm.ops.router.v1.Dmz.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Dmz} returns this
 */
proto.palm.ops.router.v1.Dmz.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.palm.ops.router.v1.Wan.oneofGroups_ = [[21,22]];

/**
 * @enum {number}
 */
proto.palm.ops.router.v1.Wan.IpCase = {
  IP_NOT_SET: 0,
  DHCP: 21,
  STATIC: 22
};

/**
 * @return {proto.palm.ops.router.v1.Wan.IpCase}
 */
proto.palm.ops.router.v1.Wan.prototype.getIpCase = function() {
  return /** @type {proto.palm.ops.router.v1.Wan.IpCase} */(jspb.Message.computeOneofCase(this, proto.palm.ops.router.v1.Wan.oneofGroups_[0]));
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
proto.palm.ops.router.v1.Wan.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Wan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Wan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Wan.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metric: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 9, ""),
    mac: jspb.Message.getFieldWithDefault(msg, 11, ""),
    dhcp: (f = msg.getDhcp()) && proto.palm.ops.router.v1.Dhcp.toObject(includeInstance, f),
    pb_static: (f = msg.getStatic()) && proto.palm.ops.router.v1.Static.toObject(includeInstance, f),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 99, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Wan}
 */
proto.palm.ops.router.v1.Wan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Wan;
  return proto.palm.ops.router.v1.Wan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Wan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Wan}
 */
proto.palm.ops.router.v1.Wan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMetric(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMac(value);
      break;
    case 21:
      var value = new proto.palm.ops.router.v1.Dhcp;
      reader.readMessage(value,proto.palm.ops.router.v1.Dhcp.deserializeBinaryFromReader);
      msg.setDhcp(value);
      break;
    case 22:
      var value = new proto.palm.ops.router.v1.Static;
      reader.readMessage(value,proto.palm.ops.router.v1.Static.deserializeBinaryFromReader);
      msg.setStatic(value);
      break;
    case 99:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Wan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Wan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Wan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Wan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetric();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMac();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDhcp();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.palm.ops.router.v1.Dhcp.serializeBinaryToWriter
    );
  }
  f = message.getStatic();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.palm.ops.router.v1.Static.serializeBinaryToWriter
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      99,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Wan.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Wan} returns this
 */
proto.palm.ops.router.v1.Wan.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 metric = 2;
 * @return {number}
 */
proto.palm.ops.router.v1.Wan.prototype.getMetric = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.ops.router.v1.Wan} returns this
 */
proto.palm.ops.router.v1.Wan.prototype.setMetric = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 9;
 * @return {string}
 */
proto.palm.ops.router.v1.Wan.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Wan} returns this
 */
proto.palm.ops.router.v1.Wan.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string mac = 11;
 * @return {string}
 */
proto.palm.ops.router.v1.Wan.prototype.getMac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Wan} returns this
 */
proto.palm.ops.router.v1.Wan.prototype.setMac = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional Dhcp dhcp = 21;
 * @return {?proto.palm.ops.router.v1.Dhcp}
 */
proto.palm.ops.router.v1.Wan.prototype.getDhcp = function() {
  return /** @type{?proto.palm.ops.router.v1.Dhcp} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Dhcp, 21));
};


/**
 * @param {?proto.palm.ops.router.v1.Dhcp|undefined} value
 * @return {!proto.palm.ops.router.v1.Wan} returns this
*/
proto.palm.ops.router.v1.Wan.prototype.setDhcp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.palm.ops.router.v1.Wan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Wan} returns this
 */
proto.palm.ops.router.v1.Wan.prototype.clearDhcp = function() {
  return this.setDhcp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Wan.prototype.hasDhcp = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Static static = 22;
 * @return {?proto.palm.ops.router.v1.Static}
 */
proto.palm.ops.router.v1.Wan.prototype.getStatic = function() {
  return /** @type{?proto.palm.ops.router.v1.Static} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.Static, 22));
};


/**
 * @param {?proto.palm.ops.router.v1.Static|undefined} value
 * @return {!proto.palm.ops.router.v1.Wan} returns this
*/
proto.palm.ops.router.v1.Wan.prototype.setStatic = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.palm.ops.router.v1.Wan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.Wan} returns this
 */
proto.palm.ops.router.v1.Wan.prototype.clearStatic = function() {
  return this.setStatic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Wan.prototype.hasStatic = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool enable = 99;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Wan.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 99, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Wan} returns this
 */
proto.palm.ops.router.v1.Wan.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 99, value);
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
proto.palm.ops.router.v1.Dhcp.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Dhcp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Dhcp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Dhcp.toObject = function(includeInstance, msg) {
  var f, obj = {
    v6: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Dhcp}
 */
proto.palm.ops.router.v1.Dhcp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Dhcp;
  return proto.palm.ops.router.v1.Dhcp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Dhcp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Dhcp}
 */
proto.palm.ops.router.v1.Dhcp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setV6(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Dhcp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Dhcp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Dhcp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Dhcp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getV6();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool v6 = 1;
 * @return {boolean}
 */
proto.palm.ops.router.v1.Dhcp.prototype.getV6 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.palm.ops.router.v1.Dhcp} returns this
 */
proto.palm.ops.router.v1.Dhcp.prototype.setV6 = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.palm.ops.router.v1.Static.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Static.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Static} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Static.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gateway: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dns1: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dns2: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.Static}
 */
proto.palm.ops.router.v1.Static.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Static;
  return proto.palm.ops.router.v1.Static.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Static} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Static}
 */
proto.palm.ops.router.v1.Static.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGateway(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDns1(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDns2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.Static.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Static.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Static} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Static.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGateway();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDns1();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.palm.ops.router.v1.Static.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Static} returns this
 */
proto.palm.ops.router.v1.Static.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string gateway = 3;
 * @return {string}
 */
proto.palm.ops.router.v1.Static.prototype.getGateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Static} returns this
 */
proto.palm.ops.router.v1.Static.prototype.setGateway = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dns1 = 4;
 * @return {string}
 */
proto.palm.ops.router.v1.Static.prototype.getDns1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Static} returns this
 */
proto.palm.ops.router.v1.Static.prototype.setDns1 = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string dns2 = 5;
 * @return {string}
 */
proto.palm.ops.router.v1.Static.prototype.getDns2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.Static} returns this
 */
proto.palm.ops.router.v1.Static.prototype.setDns2 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.palm.ops.router.v1.Static} returns this
 */
proto.palm.ops.router.v1.Static.prototype.clearDns2 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.Static.prototype.hasDns2 = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.Dns.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.Dns.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.Dns.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.Dns} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Dns.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.ops.router.v1.Dns}
 */
proto.palm.ops.router.v1.Dns.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.Dns;
  return proto.palm.ops.router.v1.Dns.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.Dns} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.Dns}
 */
proto.palm.ops.router.v1.Dns.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.ops.router.v1.Dns.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.Dns.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.Dns} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.Dns.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.ops.router.v1.Dns.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.ops.router.v1.Dns} returns this
 */
proto.palm.ops.router.v1.Dns.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.Dns} returns this
 */
proto.palm.ops.router.v1.Dns.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.Dns} returns this
 */
proto.palm.ops.router.v1.Dns.prototype.clearItemsList = function() {
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
proto.palm.ops.router.v1.UserProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.UserProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.UserProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserProfile.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.ops.router.v1.UserProfile}
 */
proto.palm.ops.router.v1.UserProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.UserProfile;
  return proto.palm.ops.router.v1.UserProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.UserProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.UserProfile}
 */
proto.palm.ops.router.v1.UserProfile.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.ops.router.v1.UserProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.UserProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.UserProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserProfile.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.ops.router.v1.UserProfile.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.UserProfile} returns this
 */
proto.palm.ops.router.v1.UserProfile.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.palm.ops.router.v1.UserProfile.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.UserProfile} returns this
 */
proto.palm.ops.router.v1.UserProfile.prototype.setPassword = function(value) {
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
proto.palm.ops.router.v1.UserSignInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.UserSignInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.UserSignInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserSignInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.palm.ops.router.v1.UserProfile.toObject(includeInstance, f),
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
 * @return {!proto.palm.ops.router.v1.UserSignInRequest}
 */
proto.palm.ops.router.v1.UserSignInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.UserSignInRequest;
  return proto.palm.ops.router.v1.UserSignInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.UserSignInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.UserSignInRequest}
 */
proto.palm.ops.router.v1.UserSignInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.UserProfile;
      reader.readMessage(value,proto.palm.ops.router.v1.UserProfile.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 9:
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
proto.palm.ops.router.v1.UserSignInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.UserSignInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.UserSignInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserSignInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.UserProfile.serializeBinaryToWriter
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserProfile user = 1;
 * @return {?proto.palm.ops.router.v1.UserProfile}
 */
proto.palm.ops.router.v1.UserSignInRequest.prototype.getUser = function() {
  return /** @type{?proto.palm.ops.router.v1.UserProfile} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.UserProfile, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.UserProfile|undefined} value
 * @return {!proto.palm.ops.router.v1.UserSignInRequest} returns this
*/
proto.palm.ops.router.v1.UserSignInRequest.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.UserSignInRequest} returns this
 */
proto.palm.ops.router.v1.UserSignInRequest.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.UserSignInRequest.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration ttl = 9;
 * @return {?proto.google.protobuf.Duration}
 */
proto.palm.ops.router.v1.UserSignInRequest.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 9));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.palm.ops.router.v1.UserSignInRequest} returns this
*/
proto.palm.ops.router.v1.UserSignInRequest.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.UserSignInRequest} returns this
 */
proto.palm.ops.router.v1.UserSignInRequest.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.UserSignInRequest.prototype.hasTtl = function() {
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
proto.palm.ops.router.v1.UserSignInResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.UserSignInResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.UserSignInResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserSignInResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.ops.router.v1.UserSignInResponse}
 */
proto.palm.ops.router.v1.UserSignInResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.UserSignInResponse;
  return proto.palm.ops.router.v1.UserSignInResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.UserSignInResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.UserSignInResponse}
 */
proto.palm.ops.router.v1.UserSignInResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.ops.router.v1.UserSignInResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.UserSignInResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.UserSignInResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserSignInResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.ops.router.v1.UserSignInResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.ops.router.v1.UserSignInResponse} returns this
 */
proto.palm.ops.router.v1.UserSignInResponse.prototype.setToken = function(value) {
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
proto.palm.ops.router.v1.UserUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.UserUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.UserUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    current: (f = msg.getCurrent()) && proto.palm.ops.router.v1.UserProfile.toObject(includeInstance, f),
    pb_new: (f = msg.getNew()) && proto.palm.ops.router.v1.UserProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.ops.router.v1.UserUpdateRequest}
 */
proto.palm.ops.router.v1.UserUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.UserUpdateRequest;
  return proto.palm.ops.router.v1.UserUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.UserUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.UserUpdateRequest}
 */
proto.palm.ops.router.v1.UserUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.ops.router.v1.UserProfile;
      reader.readMessage(value,proto.palm.ops.router.v1.UserProfile.deserializeBinaryFromReader);
      msg.setCurrent(value);
      break;
    case 2:
      var value = new proto.palm.ops.router.v1.UserProfile;
      reader.readMessage(value,proto.palm.ops.router.v1.UserProfile.deserializeBinaryFromReader);
      msg.setNew(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.ops.router.v1.UserUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.UserUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.UserUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.palm.ops.router.v1.UserProfile.serializeBinaryToWriter
    );
  }
  f = message.getNew();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.palm.ops.router.v1.UserProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserProfile current = 1;
 * @return {?proto.palm.ops.router.v1.UserProfile}
 */
proto.palm.ops.router.v1.UserUpdateRequest.prototype.getCurrent = function() {
  return /** @type{?proto.palm.ops.router.v1.UserProfile} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.UserProfile, 1));
};


/**
 * @param {?proto.palm.ops.router.v1.UserProfile|undefined} value
 * @return {!proto.palm.ops.router.v1.UserUpdateRequest} returns this
*/
proto.palm.ops.router.v1.UserUpdateRequest.prototype.setCurrent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.UserUpdateRequest} returns this
 */
proto.palm.ops.router.v1.UserUpdateRequest.prototype.clearCurrent = function() {
  return this.setCurrent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.UserUpdateRequest.prototype.hasCurrent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserProfile new = 2;
 * @return {?proto.palm.ops.router.v1.UserProfile}
 */
proto.palm.ops.router.v1.UserUpdateRequest.prototype.getNew = function() {
  return /** @type{?proto.palm.ops.router.v1.UserProfile} */ (
    jspb.Message.getWrapperField(this, proto.palm.ops.router.v1.UserProfile, 2));
};


/**
 * @param {?proto.palm.ops.router.v1.UserProfile|undefined} value
 * @return {!proto.palm.ops.router.v1.UserUpdateRequest} returns this
*/
proto.palm.ops.router.v1.UserUpdateRequest.prototype.setNew = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.palm.ops.router.v1.UserUpdateRequest} returns this
 */
proto.palm.ops.router.v1.UserUpdateRequest.prototype.clearNew = function() {
  return this.setNew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.palm.ops.router.v1.UserUpdateRequest.prototype.hasNew = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.ops.router.v1.UserLogsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.ops.router.v1.UserLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.ops.router.v1.UserLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.ops.router.v1.UserLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserLogsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.ops.router.v1.UserLogsResponse}
 */
proto.palm.ops.router.v1.UserLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.ops.router.v1.UserLogsResponse;
  return proto.palm.ops.router.v1.UserLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.ops.router.v1.UserLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.ops.router.v1.UserLogsResponse}
 */
proto.palm.ops.router.v1.UserLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.ops.router.v1.UserLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.ops.router.v1.UserLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.ops.router.v1.UserLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.ops.router.v1.UserLogsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.palm.ops.router.v1.UserLogsResponse.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.palm.ops.router.v1.UserLogsResponse} returns this
 */
proto.palm.ops.router.v1.UserLogsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.palm.ops.router.v1.UserLogsResponse} returns this
 */
proto.palm.ops.router.v1.UserLogsResponse.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.ops.router.v1.UserLogsResponse} returns this
 */
proto.palm.ops.router.v1.UserLogsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


goog.object.extend(exports, proto.palm.ops.router.v1);
