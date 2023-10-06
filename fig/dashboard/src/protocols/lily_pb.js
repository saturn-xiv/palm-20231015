// source: lily.proto
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

goog.exportSymbol('proto.palm.lily.v1.EpubBuildRequest', null, global);
goog.exportSymbol('proto.palm.lily.v1.ExcelModel', null, global);
goog.exportSymbol('proto.palm.lily.v1.ExcelModel.Sheet', null, global);
goog.exportSymbol('proto.palm.lily.v1.ExcelModel.Sheet.Cell', null, global);
goog.exportSymbol('proto.palm.lily.v1.File', null, global);
goog.exportSymbol('proto.palm.lily.v1.TexToRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.lily.v1.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.lily.v1.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.lily.v1.File.displayName = 'proto.palm.lily.v1.File';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.lily.v1.ExcelModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.lily.v1.ExcelModel.repeatedFields_, null);
};
goog.inherits(proto.palm.lily.v1.ExcelModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.lily.v1.ExcelModel.displayName = 'proto.palm.lily.v1.ExcelModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.lily.v1.ExcelModel.Sheet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.palm.lily.v1.ExcelModel.Sheet.repeatedFields_, null);
};
goog.inherits(proto.palm.lily.v1.ExcelModel.Sheet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.lily.v1.ExcelModel.Sheet.displayName = 'proto.palm.lily.v1.ExcelModel.Sheet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.lily.v1.ExcelModel.Sheet.Cell, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.lily.v1.ExcelModel.Sheet.Cell.displayName = 'proto.palm.lily.v1.ExcelModel.Sheet.Cell';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.lily.v1.TexToRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.lily.v1.TexToRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.lily.v1.TexToRequest.displayName = 'proto.palm.lily.v1.TexToRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.palm.lily.v1.EpubBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.palm.lily.v1.EpubBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.palm.lily.v1.EpubBuildRequest.displayName = 'proto.palm.lily.v1.EpubBuildRequest';
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
proto.palm.lily.v1.File.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.lily.v1.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.lily.v1.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.lily.v1.File}
 */
proto.palm.lily.v1.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.lily.v1.File;
  return proto.palm.lily.v1.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.lily.v1.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.lily.v1.File}
 */
proto.palm.lily.v1.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.lily.v1.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.lily.v1.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.lily.v1.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
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
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string bucket = 1;
 * @return {string}
 */
proto.palm.lily.v1.File.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.lily.v1.File} returns this
 */
proto.palm.lily.v1.File.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.palm.lily.v1.File.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.lily.v1.File} returns this
 */
proto.palm.lily.v1.File.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content_type = 9;
 * @return {string}
 */
proto.palm.lily.v1.File.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.lily.v1.File} returns this
 */
proto.palm.lily.v1.File.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.lily.v1.ExcelModel.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.lily.v1.ExcelModel.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.lily.v1.ExcelModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.lily.v1.ExcelModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.ExcelModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    sheetsList: jspb.Message.toObjectList(msg.getSheetsList(),
    proto.palm.lily.v1.ExcelModel.Sheet.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.lily.v1.ExcelModel}
 */
proto.palm.lily.v1.ExcelModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.lily.v1.ExcelModel;
  return proto.palm.lily.v1.ExcelModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.lily.v1.ExcelModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.lily.v1.ExcelModel}
 */
proto.palm.lily.v1.ExcelModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.palm.lily.v1.ExcelModel.Sheet;
      reader.readMessage(value,proto.palm.lily.v1.ExcelModel.Sheet.deserializeBinaryFromReader);
      msg.addSheets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.lily.v1.ExcelModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.lily.v1.ExcelModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.lily.v1.ExcelModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.ExcelModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSheetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.palm.lily.v1.ExcelModel.Sheet.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.palm.lily.v1.ExcelModel.Sheet.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.palm.lily.v1.ExcelModel.Sheet.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.lily.v1.ExcelModel.Sheet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.ExcelModel.Sheet.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cellsList: jspb.Message.toObjectList(msg.getCellsList(),
    proto.palm.lily.v1.ExcelModel.Sheet.Cell.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet}
 */
proto.palm.lily.v1.ExcelModel.Sheet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.lily.v1.ExcelModel.Sheet;
  return proto.palm.lily.v1.ExcelModel.Sheet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet}
 */
proto.palm.lily.v1.ExcelModel.Sheet.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.palm.lily.v1.ExcelModel.Sheet.Cell;
      reader.readMessage(value,proto.palm.lily.v1.ExcelModel.Sheet.Cell.deserializeBinaryFromReader);
      msg.addCells(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.lily.v1.ExcelModel.Sheet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.lily.v1.ExcelModel.Sheet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.ExcelModel.Sheet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.palm.lily.v1.ExcelModel.Sheet.Cell.serializeBinaryToWriter
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
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.lily.v1.ExcelModel.Sheet.Cell.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet.Cell} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.toObject = function(includeInstance, msg) {
  var f, obj = {
    row: jspb.Message.getFieldWithDefault(msg, 1, 0),
    col: jspb.Message.getFieldWithDefault(msg, 2, 0),
    val: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet.Cell}
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.lily.v1.ExcelModel.Sheet.Cell;
  return proto.palm.lily.v1.ExcelModel.Sheet.Cell.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet.Cell} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet.Cell}
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRow(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.lily.v1.ExcelModel.Sheet.Cell.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet.Cell} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRow();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCol();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getVal();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 row = 1;
 * @return {number}
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.getRow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet.Cell} returns this
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.setRow = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 col = 2;
 * @return {number}
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.getCol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet.Cell} returns this
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.setCol = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string val = 3;
 * @return {string}
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.getVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet.Cell} returns this
 */
proto.palm.lily.v1.ExcelModel.Sheet.Cell.prototype.setVal = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.palm.lily.v1.ExcelModel.Sheet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet} returns this
 */
proto.palm.lily.v1.ExcelModel.Sheet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Cell cells = 2;
 * @return {!Array<!proto.palm.lily.v1.ExcelModel.Sheet.Cell>}
 */
proto.palm.lily.v1.ExcelModel.Sheet.prototype.getCellsList = function() {
  return /** @type{!Array<!proto.palm.lily.v1.ExcelModel.Sheet.Cell>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.lily.v1.ExcelModel.Sheet.Cell, 2));
};


/**
 * @param {!Array<!proto.palm.lily.v1.ExcelModel.Sheet.Cell>} value
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet} returns this
*/
proto.palm.lily.v1.ExcelModel.Sheet.prototype.setCellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet.Cell=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet.Cell}
 */
proto.palm.lily.v1.ExcelModel.Sheet.prototype.addCells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.palm.lily.v1.ExcelModel.Sheet.Cell, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet} returns this
 */
proto.palm.lily.v1.ExcelModel.Sheet.prototype.clearCellsList = function() {
  return this.setCellsList([]);
};


/**
 * repeated Sheet sheets = 1;
 * @return {!Array<!proto.palm.lily.v1.ExcelModel.Sheet>}
 */
proto.palm.lily.v1.ExcelModel.prototype.getSheetsList = function() {
  return /** @type{!Array<!proto.palm.lily.v1.ExcelModel.Sheet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.palm.lily.v1.ExcelModel.Sheet, 1));
};


/**
 * @param {!Array<!proto.palm.lily.v1.ExcelModel.Sheet>} value
 * @return {!proto.palm.lily.v1.ExcelModel} returns this
*/
proto.palm.lily.v1.ExcelModel.prototype.setSheetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.palm.lily.v1.ExcelModel.Sheet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.palm.lily.v1.ExcelModel.Sheet}
 */
proto.palm.lily.v1.ExcelModel.prototype.addSheets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.palm.lily.v1.ExcelModel.Sheet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.palm.lily.v1.ExcelModel} returns this
 */
proto.palm.lily.v1.ExcelModel.prototype.clearSheetsList = function() {
  return this.setSheetsList([]);
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
proto.palm.lily.v1.TexToRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.lily.v1.TexToRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.lily.v1.TexToRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.TexToRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesMap: (f = msg.getFilesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.palm.lily.v1.TexToRequest}
 */
proto.palm.lily.v1.TexToRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.lily.v1.TexToRequest;
  return proto.palm.lily.v1.TexToRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.lily.v1.TexToRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.lily.v1.TexToRequest}
 */
proto.palm.lily.v1.TexToRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getFilesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.palm.lily.v1.TexToRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.lily.v1.TexToRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.lily.v1.TexToRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.TexToRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * map<string, bytes> files = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.palm.lily.v1.TexToRequest.prototype.getFilesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.palm.lily.v1.TexToRequest} returns this
 */
proto.palm.lily.v1.TexToRequest.prototype.clearFilesMap = function() {
  this.getFilesMap().clear();
  return this;
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
proto.palm.lily.v1.EpubBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.palm.lily.v1.EpubBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.palm.lily.v1.EpubBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.EpubBuildRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.palm.lily.v1.EpubBuildRequest}
 */
proto.palm.lily.v1.EpubBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.palm.lily.v1.EpubBuildRequest;
  return proto.palm.lily.v1.EpubBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.palm.lily.v1.EpubBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.palm.lily.v1.EpubBuildRequest}
 */
proto.palm.lily.v1.EpubBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.palm.lily.v1.EpubBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.palm.lily.v1.EpubBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.palm.lily.v1.EpubBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.palm.lily.v1.EpubBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.palm.lily.v1);
