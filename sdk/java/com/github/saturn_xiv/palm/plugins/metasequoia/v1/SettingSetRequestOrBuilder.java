// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface SettingSetRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.SettingSetRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>bool global = 1;</code>
   * @return The global.
   */
  boolean getGlobal();

  /**
   * <code>string key = 2;</code>
   * @return The key.
   */
  java.lang.String getKey();
  /**
   * <code>string key = 2;</code>
   * @return The bytes for key.
   */
  com.google.protobuf.ByteString
      getKeyBytes();

  /**
   * <code>bytes value = 3;</code>
   * @return The value.
   */
  com.google.protobuf.ByteString getValue();
}