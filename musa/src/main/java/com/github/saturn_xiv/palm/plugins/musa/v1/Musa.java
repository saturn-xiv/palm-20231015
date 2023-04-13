// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

package com.github.saturn_xiv.palm.plugins.musa.v1;

public final class Musa {
    private Musa() {
    }

    public static void registerAllExtensions(
            com.google.protobuf.ExtensionRegistryLite registry) {
    }

    public static void registerAllExtensions(
            com.google.protobuf.ExtensionRegistry registry) {
        registerAllExtensions(
                (com.google.protobuf.ExtensionRegistryLite) registry);
    }

    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayPrepayRequest_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayPrepayRequest_fieldAccessorTable;
    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_fieldAccessorTable;
    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayCloseOrderRequest_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayCloseOrderRequest_fieldAccessorTable;
    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_fieldAccessorTable;
    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_fieldAccessorTable;
    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayNotificationRequest_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayNotificationRequest_fieldAccessorTable;
    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayNotificationTransactionResponse_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayNotificationTransactionResponse_fieldAccessorTable;
    static final com.google.protobuf.Descriptors.Descriptor
            internal_static_palm_musa_v1_WechatPayNotificationRefundResponse_descriptor;
    static final
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
            internal_static_palm_musa_v1_WechatPayNotificationRefundResponse_fieldAccessorTable;

    public static com.google.protobuf.Descriptors.FileDescriptor
    getDescriptor() {
        return descriptor;
    }

    private static com.google.protobuf.Descriptors.FileDescriptor
            descriptor;

    static {
        java.lang.String[] descriptorData = {
                "\n\nmusa.proto\022\014palm.musa.v1\032\033google/proto" +
                        "buf/empty.proto\"\252\002\n\026WechatPayPrepayReque" +
                        "st\022\016\n\006app_id\030\001 \001(\t\022\016\n\006mch_id\030\002 \001(\t\022\024\n\014ou" +
                        "t_trade_no\030\003 \001(\t\022;\n\006amount\030\004 \001(\0132+.palm." +
                        "musa.v1.WechatPayPrepayRequest.Amount\022\023\n" +
                        "\013description\030\t \001(\t\022\022\n\nnotify_url\030\013 \001(\t\032t" +
                        "\n\006Amount\022\r\n\005total\030\001 \001(\005\022F\n\010currenty\030\002 \001(" +
                        "\01624.palm.musa.v1.WechatPayPrepayRequest." +
                        "Amount.Currency\"\023\n\010Currency\022\007\n\003CNY\020\000\"B\n\032" +
                        "WechatPayCloseOrderRequest\022\016\n\006mch_id\030\001 \001" +
                        "(\t\022\024\n\014out_trade_no\030\002 \001(\t\"/\n WechatPayNat" +
                        "iveQrCodeUrlResponse\022\013\n\003url\030\001 \001(\t\"\215\001\n\036We" +
                        "chatPayJsapiPrepayIdResponse\022\016\n\006app_id\030\001" +
                        " \001(\t\022\022\n\ntime_stamp\030\002 \001(\t\022\021\n\tnonce_str\030\003 " +
                        "\001(\t\022\017\n\007package\030\004 \001(\t\022\021\n\tsign_type\030\005 \001(\t\022" +
                        "\020\n\010pay_sign\030\006 \001(\t\"x\n\034WechatPayNotificati" +
                        "onRequest\022\025\n\rserial_number\030\001 \001(\t\022\r\n\005nonc" +
                        "e\030\002 \001(\t\022\021\n\tsignature\030\003 \001(\t\022\021\n\ttimestamp\030" +
                        "\004 \001(\t\022\014\n\004body\030\005 \001(\t\"*\n(WechatPayNotifica" +
                        "tionTransactionResponse\"%\n#WechatPayNoti" +
                        "ficationRefundResponse2v\n\017WechatPayNativ" +
                        "e\022c\n\tQrCodeUrl\022$.palm.musa.v1.WechatPayP" +
                        "repayRequest\032..palm.musa.v1.WechatPayNat" +
                        "iveQrCodeUrlResponse\"\0002r\n\016WechatPayJsapi" +
                        "\022`\n\010PrepayId\022$.palm.musa.v1.WechatPayPre" +
                        "payRequest\032,.palm.musa.v1.WechatPayJsapi" +
                        "PrepayIdResponse\"\0002\367\001\n\025WechatPayNotifica" +
                        "tion\022s\n\013transaction\022*.palm.musa.v1.Wecha" +
                        "tPayNotificationRequest\0326.palm.musa.v1.W" +
                        "echatPayNotificationTransactionResponse\"" +
                        "\000\022i\n\006refund\022*.palm.musa.v1.WechatPayNoti" +
                        "ficationRequest\0321.palm.musa.v1.WechatPay" +
                        "NotificationRefundResponse\"\0002C\n\006Health\0229" +
                        "\n\005Check\022\026.google.protobuf.Empty\032\026.google" +
                        ".protobuf.Empty\"\000B.\n*com.github.saturn_x" +
                        "iv.palm.plugins.musa.v1P\001b\006proto3"
        };
        descriptor = com.google.protobuf.Descriptors.FileDescriptor
                .internalBuildGeneratedFileFrom(descriptorData,
                        new com.google.protobuf.Descriptors.FileDescriptor[]{
                                com.google.protobuf.EmptyProto.getDescriptor(),
                        });
        internal_static_palm_musa_v1_WechatPayPrepayRequest_descriptor =
                getDescriptor().getMessageTypes().get(0);
        internal_static_palm_musa_v1_WechatPayPrepayRequest_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayPrepayRequest_descriptor,
                new java.lang.String[]{"AppId", "MchId", "OutTradeNo", "Amount", "Description", "NotifyUrl",});
        internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_descriptor =
                internal_static_palm_musa_v1_WechatPayPrepayRequest_descriptor.getNestedTypes().get(0);
        internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_descriptor,
                new java.lang.String[]{"Total", "Currenty",});
        internal_static_palm_musa_v1_WechatPayCloseOrderRequest_descriptor =
                getDescriptor().getMessageTypes().get(1);
        internal_static_palm_musa_v1_WechatPayCloseOrderRequest_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayCloseOrderRequest_descriptor,
                new java.lang.String[]{"MchId", "OutTradeNo",});
        internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_descriptor =
                getDescriptor().getMessageTypes().get(2);
        internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_descriptor,
                new java.lang.String[]{"Url",});
        internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_descriptor =
                getDescriptor().getMessageTypes().get(3);
        internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_descriptor,
                new java.lang.String[]{"AppId", "TimeStamp", "NonceStr", "Package", "SignType", "PaySign",});
        internal_static_palm_musa_v1_WechatPayNotificationRequest_descriptor =
                getDescriptor().getMessageTypes().get(4);
        internal_static_palm_musa_v1_WechatPayNotificationRequest_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayNotificationRequest_descriptor,
                new java.lang.String[]{"SerialNumber", "Nonce", "Signature", "Timestamp", "Body",});
        internal_static_palm_musa_v1_WechatPayNotificationTransactionResponse_descriptor =
                getDescriptor().getMessageTypes().get(5);
        internal_static_palm_musa_v1_WechatPayNotificationTransactionResponse_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayNotificationTransactionResponse_descriptor,
                new java.lang.String[]{});
        internal_static_palm_musa_v1_WechatPayNotificationRefundResponse_descriptor =
                getDescriptor().getMessageTypes().get(6);
        internal_static_palm_musa_v1_WechatPayNotificationRefundResponse_fieldAccessorTable = new
                com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
                internal_static_palm_musa_v1_WechatPayNotificationRefundResponse_descriptor,
                new java.lang.String[]{});
        com.google.protobuf.EmptyProto.getDescriptor();
    }

    // @@protoc_insertion_point(outer_class_scope)
}
