// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

package com.github.saturn_xiv.palm.plugins.musa.v1;

public interface WechatPayTradeBillRequestOrBuilder extends
        // @@protoc_insertion_point(interface_extends:palm.musa.v1.WechatPayTradeBillRequest)
        com.google.protobuf.MessageOrBuilder {

    /**
     * <code>string bill_date = 1;</code>
     *
     * @return The billDate.
     */
    java.lang.String getBillDate();

    /**
     * <code>string bill_date = 1;</code>
     *
     * @return The bytes for billDate.
     */
    com.google.protobuf.ByteString
    getBillDateBytes();

    /**
     * <code>.palm.musa.v1.WechatPayTradeBillRequest.BillType bill_type = 2;</code>
     *
     * @return The enum numeric value on the wire for billType.
     */
    int getBillTypeValue();

    /**
     * <code>.palm.musa.v1.WechatPayTradeBillRequest.BillType bill_type = 2;</code>
     *
     * @return The billType.
     */
    com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest.BillType getBillType();
}
