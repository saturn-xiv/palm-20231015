// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface NotificationIndexResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.NotificationIndexResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item> 
      getItemsList();
  /**
   * <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item getItems(int index);
  /**
   * <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
   */
  int getItemsCount();
  /**
   * <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.ItemOrBuilder> 
      getItemsOrBuilderList();
  /**
   * <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.ItemOrBuilder getItemsOrBuilder(
      int index);

  /**
   * <code>.palm.metasequoia.v1.Pagination pagination = 9;</code>
   * @return Whether the pagination field is set.
   */
  boolean hasPagination();
  /**
   * <code>.palm.metasequoia.v1.Pagination pagination = 9;</code>
   * @return The pagination.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pagination getPagination();
  /**
   * <code>.palm.metasequoia.v1.Pagination pagination = 9;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.PaginationOrBuilder getPaginationOrBuilder();
}