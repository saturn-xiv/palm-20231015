// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.musa.v1;

public interface WechatPayTransferGetElectronicReceiptRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
   * @return The enum numeric value on the wire for acceptType.
   */
  int getAcceptTypeValue();
  /**
   * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
   * @return The acceptType.
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType getAcceptType();

  /**
   * <code>optional string out_batch_no = 2;</code>
   * @return Whether the outBatchNo field is set.
   */
  boolean hasOutBatchNo();
  /**
   * <code>optional string out_batch_no = 2;</code>
   * @return The outBatchNo.
   */
  java.lang.String getOutBatchNo();
  /**
   * <code>optional string out_batch_no = 2;</code>
   * @return The bytes for outBatchNo.
   */
  com.google.protobuf.ByteString
      getOutBatchNoBytes();

  /**
   * <code>string out_detail_no = 3;</code>
   * @return The outDetailNo.
   */
  java.lang.String getOutDetailNo();
  /**
   * <code>string out_detail_no = 3;</code>
   * @return The bytes for outDetailNo.
   */
  com.google.protobuf.ByteString
      getOutDetailNoBytes();
}
