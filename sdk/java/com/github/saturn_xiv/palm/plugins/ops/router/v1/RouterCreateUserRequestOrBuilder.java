// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-router.proto

package com.github.saturn_xiv.palm.plugins.ops.router.v1;

public interface RouterCreateUserRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.ops.router.v1.RouterCreateUserRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string name = 1;</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 1;</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>.palm.ops.router.v1.Contact contact = 2;</code>
   * @return Whether the contact field is set.
   */
  boolean hasContact();
  /**
   * <code>.palm.ops.router.v1.Contact contact = 2;</code>
   * @return The contact.
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact getContact();
  /**
   * <code>.palm.ops.router.v1.Contact contact = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.ContactOrBuilder getContactOrBuilder();
}