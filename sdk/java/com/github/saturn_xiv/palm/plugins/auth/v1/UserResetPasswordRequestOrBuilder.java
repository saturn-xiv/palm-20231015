// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: auth.proto

package com.github.saturn_xiv.palm.plugins.auth.v1;

public interface UserResetPasswordRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.auth.v1.UserResetPasswordRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string token = 1;</code>
   * @return The token.
   */
  java.lang.String getToken();
  /**
   * <code>string token = 1;</code>
   * @return The bytes for token.
   */
  com.google.protobuf.ByteString
      getTokenBytes();

  /**
   * <code>string password = 2;</code>
   * @return The password.
   */
  java.lang.String getPassword();
  /**
   * <code>string password = 2;</code>
   * @return The bytes for password.
   */
  com.google.protobuf.ByteString
      getPasswordBytes();
}
