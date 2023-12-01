// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cms.proto

package com.github.saturn_xiv.palm.plugins.cms.v1;

public interface ArticleUpdateRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.cms.v1.ArticleUpdateRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 id = 1;</code>
   * @return The id.
   */
  int getId();

  /**
   * <code>string title = 2;</code>
   * @return The title.
   */
  java.lang.String getTitle();
  /**
   * <code>string title = 2;</code>
   * @return The bytes for title.
   */
  com.google.protobuf.ByteString
      getTitleBytes();

  /**
   * <code>string summary = 3;</code>
   * @return The summary.
   */
  java.lang.String getSummary();
  /**
   * <code>string summary = 3;</code>
   * @return The bytes for summary.
   */
  com.google.protobuf.ByteString
      getSummaryBytes();

  /**
   * <code>string body = 4;</code>
   * @return The body.
   */
  java.lang.String getBody();
  /**
   * <code>string body = 4;</code>
   * @return The bytes for body.
   */
  com.google.protobuf.ByteString
      getBodyBytes();

  /**
   * <code>repeated int32 tags = 5;</code>
   * @return A list containing the tags.
   */
  java.util.List<java.lang.Integer> getTagsList();
  /**
   * <code>repeated int32 tags = 5;</code>
   * @return The count of tags.
   */
  int getTagsCount();
  /**
   * <code>repeated int32 tags = 5;</code>
   * @param index The index of the element to return.
   * @return The tags at the given index.
   */
  int getTags(int index);
}
