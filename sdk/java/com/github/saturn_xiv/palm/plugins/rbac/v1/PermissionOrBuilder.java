// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: rbac.proto

package com.github.saturn_xiv.palm.plugins.rbac.v1;

public interface PermissionOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.rbac.v1.Permission)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.rbac.v1.Resource object = 1;</code>
   * @return Whether the object field is set.
   */
  boolean hasObject();
  /**
   * <code>.palm.rbac.v1.Resource object = 1;</code>
   * @return The object.
   */
  com.github.saturn_xiv.palm.plugins.rbac.v1.Resource getObject();
  /**
   * <code>.palm.rbac.v1.Resource object = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.rbac.v1.ResourceOrBuilder getObjectOrBuilder();

  /**
   * <code>string action = 2;</code>
   * @return The action.
   */
  java.lang.String getAction();
  /**
   * <code>string action = 2;</code>
   * @return The bytes for action.
   */
  com.google.protobuf.ByteString
      getActionBytes();

  /**
   * <code>int32 user = 11;</code>
   * @return Whether the user field is set.
   */
  boolean hasUser();
  /**
   * <code>int32 user = 11;</code>
   * @return The user.
   */
  int getUser();

  /**
   * <code>string role = 12;</code>
   * @return Whether the role field is set.
   */
  boolean hasRole();
  /**
   * <code>string role = 12;</code>
   * @return The role.
   */
  java.lang.String getRole();
  /**
   * <code>string role = 12;</code>
   * @return The bytes for role.
   */
  com.google.protobuf.ByteString
      getRoleBytes();

  public com.github.saturn_xiv.palm.plugins.rbac.v1.Permission.SubjectCase getSubjectCase();
}