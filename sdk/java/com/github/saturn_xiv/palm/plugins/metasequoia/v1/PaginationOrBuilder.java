// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface PaginationOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.Pagination)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int64 page = 1;</code>
   * @return The page.
   */
  long getPage();

  /**
   * <code>int64 size = 2;</code>
   * @return The size.
   */
  long getSize();

  /**
   * <code>int64 total = 3;</code>
   * @return The total.
   */
  long getTotal();

  /**
   * <code>bool has_next = 11;</code>
   * @return The hasNext.
   */
  boolean getHasNext();

  /**
   * <code>bool has_previous = 12;</code>
   * @return The hasPrevious.
   */
  boolean getHasPrevious();
}
