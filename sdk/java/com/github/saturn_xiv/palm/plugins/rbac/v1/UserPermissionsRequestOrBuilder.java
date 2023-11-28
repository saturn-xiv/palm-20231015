// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: rbac.proto

package com.github.saturn_xiv.palm.plugins.rbac.v1;

public interface UserPermissionsRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.rbac.v1.UserPermissionsRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 user = 1;</code>
   * @return The user.
   */
  int getUser();

  /**
   * <code>repeated .palm.rbac.v1.PermissionsResponse.Item permissions = 2;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.Item> 
      getPermissionsList();
  /**
   * <code>repeated .palm.rbac.v1.PermissionsResponse.Item permissions = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.Item getPermissions(int index);
  /**
   * <code>repeated .palm.rbac.v1.PermissionsResponse.Item permissions = 2;</code>
   */
  int getPermissionsCount();
  /**
   * <code>repeated .palm.rbac.v1.PermissionsResponse.Item permissions = 2;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.ItemOrBuilder> 
      getPermissionsOrBuilderList();
  /**
   * <code>repeated .palm.rbac.v1.PermissionsResponse.Item permissions = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.ItemOrBuilder getPermissionsOrBuilder(
      int index);
}
