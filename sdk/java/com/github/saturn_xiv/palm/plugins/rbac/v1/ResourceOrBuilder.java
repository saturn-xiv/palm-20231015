// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: rbac.proto

package com.github.saturn_xiv.palm.plugins.rbac.v1;

public interface ResourceOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.rbac.v1.Resource)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string type = 1;</code>
   * @return The type.
   */
  java.lang.String getType();
  /**
   * <code>string type = 1;</code>
   * @return The bytes for type.
   */
  com.google.protobuf.ByteString
      getTypeBytes();

  /**
   * <code>optional string id = 2;</code>
   * @return Whether the id field is set.
   */
  boolean hasId();
  /**
   * <code>optional string id = 2;</code>
   * @return The id.
   */
  java.lang.String getId();
  /**
   * <code>optional string id = 2;</code>
   * @return The bytes for id.
   */
  com.google.protobuf.ByteString
      getIdBytes();
}