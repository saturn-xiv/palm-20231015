// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface RbacHasRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.RbacHasRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 user = 1;</code>
   * @return The user.
   */
  int getUser();

  /**
   * <code>.palm.metasequoia.v1.Role role = 2;</code>
   * @return Whether the role field is set.
   */
  boolean hasRole();
  /**
   * <code>.palm.metasequoia.v1.Role role = 2;</code>
   * @return The role.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role getRole();
  /**
   * <code>.palm.metasequoia.v1.Role role = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder getRoleOrBuilder();
}
