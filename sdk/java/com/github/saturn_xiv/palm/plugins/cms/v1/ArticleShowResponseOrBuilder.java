// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cms.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.cms.v1;

public interface ArticleShowResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.cms.v1.ArticleShowResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.cms.v1.ArticleIndexResponse.Item item = 1;</code>
   * @return Whether the item field is set.
   */
  boolean hasItem();
  /**
   * <code>.palm.cms.v1.ArticleIndexResponse.Item item = 1;</code>
   * @return The item.
   */
  com.github.saturn_xiv.palm.plugins.cms.v1.ArticleIndexResponse.Item getItem();
  /**
   * <code>.palm.cms.v1.ArticleIndexResponse.Item item = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.cms.v1.ArticleIndexResponse.ItemOrBuilder getItemOrBuilder();

  /**
   * <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse.Item> 
      getCommentsList();
  /**
   * <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse.Item getComments(int index);
  /**
   * <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
   */
  int getCommentsCount();
  /**
   * <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse.ItemOrBuilder> 
      getCommentsOrBuilderList();
  /**
   * <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse.ItemOrBuilder getCommentsOrBuilder(
      int index);
}
