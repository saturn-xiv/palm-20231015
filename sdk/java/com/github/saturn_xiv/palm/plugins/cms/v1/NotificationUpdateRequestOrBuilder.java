// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cms.proto

package com.github.saturn_xiv.palm.plugins.cms.v1;

public interface NotificationUpdateRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.cms.v1.NotificationUpdateRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 id = 1;</code>
   * @return The id.
   */
  int getId();

  /**
   * <code>.palm.cms.v1.NotificationIndexResponse.Item.Level level = 2;</code>
   * @return The enum numeric value on the wire for level.
   */
  int getLevelValue();
  /**
   * <code>.palm.cms.v1.NotificationIndexResponse.Item.Level level = 2;</code>
   * @return The level.
   */
  com.github.saturn_xiv.palm.plugins.cms.v1.NotificationIndexResponse.Item.Level getLevel();

  /**
   * <code>string title = 3;</code>
   * @return The title.
   */
  java.lang.String getTitle();
  /**
   * <code>string title = 3;</code>
   * @return The bytes for title.
   */
  com.google.protobuf.ByteString
      getTitleBytes();

  /**
   * <code>string url = 4;</code>
   * @return The url.
   */
  java.lang.String getUrl();
  /**
   * <code>string url = 4;</code>
   * @return The bytes for url.
   */
  com.google.protobuf.ByteString
      getUrlBytes();
}
