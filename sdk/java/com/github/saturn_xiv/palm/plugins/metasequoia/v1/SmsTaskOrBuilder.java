// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface SmsTaskOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.SmsTask)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string from = 1;</code>
   * @return The from.
   */
  java.lang.String getFrom();
  /**
   * <code>string from = 1;</code>
   * @return The bytes for from.
   */
  com.google.protobuf.ByteString
      getFromBytes();

  /**
   * <code>repeated string to = 2;</code>
   * @return A list containing the to.
   */
  java.util.List<java.lang.String>
      getToList();
  /**
   * <code>repeated string to = 2;</code>
   * @return The count of to.
   */
  int getToCount();
  /**
   * <code>repeated string to = 2;</code>
   * @param index The index of the element to return.
   * @return The to at the given index.
   */
  java.lang.String getTo(int index);
  /**
   * <code>repeated string to = 2;</code>
   * @param index The index of the value to return.
   * @return The bytes of the to at the given index.
   */
  com.google.protobuf.ByteString
      getToBytes(int index);

  /**
   * <code>string body = 3;</code>
   * @return The body.
   */
  java.lang.String getBody();
  /**
   * <code>string body = 3;</code>
   * @return The bytes for body.
   */
  com.google.protobuf.ByteString
      getBodyBytes();
}
