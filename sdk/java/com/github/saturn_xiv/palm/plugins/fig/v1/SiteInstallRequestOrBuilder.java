// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: fig.proto

package com.github.saturn_xiv.palm.plugins.fig.v1;

public interface SiteInstallRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.fig.v1.SiteInstallRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.auth.v1.UserSignUpRequest user = 1;</code>
   * @return Whether the user field is set.
   */
  boolean hasUser();
  /**
   * <code>.palm.auth.v1.UserSignUpRequest user = 1;</code>
   * @return The user.
   */
  com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest getUser();
  /**
   * <code>.palm.auth.v1.UserSignUpRequest user = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequestOrBuilder getUserOrBuilder();
}