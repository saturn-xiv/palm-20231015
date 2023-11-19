// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: casbin.proto

package com.github.saturn_xiv.palm.plugins.casbin.v1;

public interface ArrayReplyOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.casbin.v1.ArrayReply)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated string array = 1;</code>
   * @return A list containing the array.
   */
  java.util.List<java.lang.String>
      getArrayList();
  /**
   * <code>repeated string array = 1;</code>
   * @return The count of array.
   */
  int getArrayCount();
  /**
   * <code>repeated string array = 1;</code>
   * @param index The index of the element to return.
   * @return The array at the given index.
   */
  java.lang.String getArray(int index);
  /**
   * <code>repeated string array = 1;</code>
   * @param index The index of the value to return.
   * @return The bytes of the array at the given index.
   */
  com.google.protobuf.ByteString
      getArrayBytes(int index);
}
