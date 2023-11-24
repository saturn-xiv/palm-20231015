// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: rbac.proto

package com.github.saturn_xiv.palm.plugins.rbac.v1;

public interface PermissionsForUserRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.rbac.v1.PermissionsForUserRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 user = 1;</code>
   * @return The user.
   */
  int getUser();

  /**
   * <code>repeated .palm.rbac.v1.Permission items = 2;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.rbac.v1.Permission> 
      getItemsList();
  /**
   * <code>repeated .palm.rbac.v1.Permission items = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.rbac.v1.Permission getItems(int index);
  /**
   * <code>repeated .palm.rbac.v1.Permission items = 2;</code>
   */
  int getItemsCount();
  /**
   * <code>repeated .palm.rbac.v1.Permission items = 2;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionOrBuilder> 
      getItemsOrBuilderList();
  /**
   * <code>repeated .palm.rbac.v1.Permission items = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionOrBuilder getItemsOrBuilder(
      int index);
}