// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.musa.v1;

public interface WechatPayFundFlowBillRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.musa.v1.WechatPayFundFlowBillRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.musa.v1.WechatPayBillDate bill_date = 1;</code>
   * @return Whether the billDate field is set.
   */
  boolean hasBillDate();
  /**
   * <code>.palm.musa.v1.WechatPayBillDate bill_date = 1;</code>
   * @return The billDate.
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate getBillDate();
  /**
   * <code>.palm.musa.v1.WechatPayBillDate bill_date = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDateOrBuilder getBillDateOrBuilder();

  /**
   * <code>.palm.musa.v1.WechatPayFundFlowBillRequest.AccountType account_type = 2;</code>
   * @return The enum numeric value on the wire for accountType.
   */
  int getAccountTypeValue();
  /**
   * <code>.palm.musa.v1.WechatPayFundFlowBillRequest.AccountType account_type = 2;</code>
   * @return The accountType.
   */
  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest.AccountType getAccountType();
}
