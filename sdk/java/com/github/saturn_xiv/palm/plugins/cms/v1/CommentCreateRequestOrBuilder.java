// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cms.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.cms.v1;

public interface CommentCreateRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.cms.v1.CommentCreateRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 article = 1;</code>
   * @return The article.
   */
  int getArticle();

  /**
   * <code>.palm.metasequoia.v1.MediaContent body = 2;</code>
   * @return Whether the body field is set.
   */
  boolean hasBody();
  /**
   * <code>.palm.metasequoia.v1.MediaContent body = 2;</code>
   * @return The body.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.MediaContent getBody();
  /**
   * <code>.palm.metasequoia.v1.MediaContent body = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.MediaContentOrBuilder getBodyOrBuilder();
}
