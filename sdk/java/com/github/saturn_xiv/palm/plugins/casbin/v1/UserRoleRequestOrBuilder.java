// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: casbin.proto

package com.github.saturn_xiv.palm.plugins.casbin.v1;

public interface UserRoleRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.casbin.v1.UserRoleRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 enforcerHandler = 1;</code>
   * @return The enforcerHandler.
   */
  int getEnforcerHandler();

  /**
   * <code>string user = 2;</code>
   * @return The user.
   */
  java.lang.String getUser();
  /**
   * <code>string user = 2;</code>
   * @return The bytes for user.
   */
  com.google.protobuf.ByteString
      getUserBytes();

  /**
   * <code>string role = 3;</code>
   * @return The role.
   */
  java.lang.String getRole();
  /**
   * <code>string role = 3;</code>
   * @return The bytes for role.
   */
  com.google.protobuf.ByteString
      getRoleBytes();
}
