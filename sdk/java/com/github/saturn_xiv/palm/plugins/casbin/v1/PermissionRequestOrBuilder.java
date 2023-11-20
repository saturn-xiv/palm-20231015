// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: casbin.proto

package com.github.saturn_xiv.palm.plugins.casbin.v1;

public interface PermissionRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.casbin.v1.PermissionRequest)
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
   * <code>repeated string permissions = 3;</code>
   * @return A list containing the permissions.
   */
  java.util.List<java.lang.String>
      getPermissionsList();
  /**
   * <code>repeated string permissions = 3;</code>
   * @return The count of permissions.
   */
  int getPermissionsCount();
  /**
   * <code>repeated string permissions = 3;</code>
   * @param index The index of the element to return.
   * @return The permissions at the given index.
   */
  java.lang.String getPermissions(int index);
  /**
   * <code>repeated string permissions = 3;</code>
   * @param index The index of the value to return.
   * @return The bytes of the permissions at the given index.
   */
  com.google.protobuf.ByteString
      getPermissionsBytes(int index);

  /**
   * <code>repeated string domain = 4;</code>
   * @return A list containing the domain.
   */
  java.util.List<java.lang.String>
      getDomainList();
  /**
   * <code>repeated string domain = 4;</code>
   * @return The count of domain.
   */
  int getDomainCount();
  /**
   * <code>repeated string domain = 4;</code>
   * @param index The index of the element to return.
   * @return The domain at the given index.
   */
  java.lang.String getDomain(int index);
  /**
   * <code>repeated string domain = 4;</code>
   * @param index The index of the value to return.
   * @return The bytes of the domain at the given index.
   */
  com.google.protobuf.ByteString
      getDomainBytes(int index);
}
