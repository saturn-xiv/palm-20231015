// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

package com.github.saturn_xiv.palm.plugins.musa.v1;

public interface WechatPayQueryBatchTransferResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.musa.v1.WechatPayQueryBatchTransferResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.musa.v1.WechatPayQueryBatchTransferResponse.Batch batch = 1;</code>
   * @return Whether the batch field is set.
   */
  boolean hasBatch();
  /**
   * <code>.palm.musa.v1.WechatPayQueryBatchTransferResponse.Batch batch = 1;</code>
   * @return The batch.
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.Batch getBatch();
  /**
   * <code>.palm.musa.v1.WechatPayQueryBatchTransferResponse.Batch batch = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.BatchOrBuilder getBatchOrBuilder();

  /**
   * <code>repeated .palm.musa.v1.WechatPayQueryBatchTransferResponse.Detail details = 9;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.Detail> 
      getDetailsList();
  /**
   * <code>repeated .palm.musa.v1.WechatPayQueryBatchTransferResponse.Detail details = 9;</code>
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.Detail getDetails(int index);
  /**
   * <code>repeated .palm.musa.v1.WechatPayQueryBatchTransferResponse.Detail details = 9;</code>
   */
  int getDetailsCount();
  /**
   * <code>repeated .palm.musa.v1.WechatPayQueryBatchTransferResponse.Detail details = 9;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.DetailOrBuilder> 
      getDetailsOrBuilderList();
  /**
   * <code>repeated .palm.musa.v1.WechatPayQueryBatchTransferResponse.Detail details = 9;</code>
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.DetailOrBuilder getDetailsOrBuilder(
      int index);
}
