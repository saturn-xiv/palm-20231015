// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

package com.github.saturn_xiv.palm.plugins.musa.v1;

public final class Musa {
  private Musa() {}
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
    internal_static_palm_musa_v1_WechatPayTradeResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayTradeResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayQueryOrderByIdRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayQueryOrderByIdRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayQueryOrderByOutTradeNoRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayQueryOrderByOutTradeNoRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayBillDate_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayBillDate_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayBillResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayBillResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayTradeBillRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayTradeBillRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayFundFlowBillRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayFundFlowBillRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayCreateRefundRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayCreateRefundRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayCreateRefundRequest_Amount_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayCreateRefundRequest_Amount_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayQueryRefundResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayQueryRefundResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_musa_v1_WechatPayRefundResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_musa_v1_WechatPayRefundResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\nmusa.proto\022\014palm.musa.v1\032\033google/proto" +
      "buf/empty.proto\"\211\002\n\026WechatPayPrepayReque" +
      "st\022\016\n\006app_id\030\001 \001(\t\022\032\n\rpayer_open_id\030\002 \001(" +
      "\tH\000\210\001\001\022;\n\006amount\030\003 \001(\0132+.palm.musa.v1.We" +
      "chatPayPrepayRequest.Amount\022\023\n\013descripti" +
      "on\030\t \001(\t\022\023\n\013notify_host\030\013 \001(\t\032J\n\006Amount\022" +
      "\r\n\005total\030\001 \001(\005\0221\n\010currency\030\002 \001(\0162\037.palm." +
      "musa.v1.WechatPayCurrencyB\020\n\016_payer_open" +
      "_id\"B\n\032WechatPayCloseOrderRequest\022\024\n\014out" +
      "_trade_no\030\001 \001(\t\022\016\n\006reason\030\002 \001(\t\"E\n Wecha" +
      "tPayNativeQrCodeUrlResponse\022\013\n\003url\030\001 \001(\t" +
      "\022\024\n\014out_trade_no\030\002 \001(\t\"\030\n\026WechatPayTrade" +
      "Response\",\n\036WechatPayQueryOrderByIdReque" +
      "st\022\n\n\002id\030\001 \001(\t\"4\n&WechatPayQueryOrderByO" +
      "utTradeNoRequest\022\n\n\002no\030\001 \001(\t\"\243\001\n\036WechatP" +
      "ayJsapiPrepayIdResponse\022\016\n\006app_id\030\001 \001(\t\022" +
      "\022\n\ntime_stamp\030\002 \001(\t\022\021\n\tnonce_str\030\003 \001(\t\022\017" +
      "\n\007package\030\004 \001(\t\022\021\n\tsign_type\030\005 \001(\t\022\020\n\010pa" +
      "y_sign\030\006 \001(\t\022\024\n\014out_trade_no\030\013 \001(\t\"=\n\021We" +
      "chatPayBillDate\022\014\n\004year\030\001 \001(\005\022\r\n\005month\030\002" +
      " \001(\005\022\013\n\003day\030\003 \001(\005\"(\n\025WechatPayBillRespon" +
      "se\022\017\n\007content\030\001 \001(\014\"\302\001\n\031WechatPayTradeBi" +
      "llRequest\0222\n\tbill_date\030\001 \001(\0132\037.palm.musa" +
      ".v1.WechatPayBillDate\022C\n\tbill_type\030\002 \001(\016" +
      "20.palm.musa.v1.WechatPayTradeBillReques" +
      "t.BillType\",\n\010BillType\022\007\n\003ALL\020\000\022\013\n\007SUCCE" +
      "SS\020\001\022\n\n\006REFUND\020\002\"\323\001\n\034WechatPayFundFlowBi" +
      "llRequest\0222\n\tbill_date\030\001 \001(\0132\037.palm.musa" +
      ".v1.WechatPayBillDate\022L\n\014account_type\030\002 " +
      "\001(\01626.palm.musa.v1.WechatPayFundFlowBill" +
      "Request.AccountType\"1\n\013AccountType\022\t\n\005BA" +
      "SIC\020\000\022\r\n\tOPERATION\020\001\022\010\n\004FEES\020\002\"\370\001\n\034Wecha" +
      "tPayCreateRefundRequest\022\024\n\014out_trade_no\030" +
      "\001 \001(\t\022\016\n\006reason\030\002 \001(\t\022A\n\006amount\030\003 \001(\01321." +
      "palm.musa.v1.WechatPayCreateRefundReques" +
      "t.Amount\022\023\n\013notify_host\030\013 \001(\t\032Z\n\006Amount\022" +
      "\r\n\005total\030\001 \001(\005\022\016\n\006refund\030\002 \001(\005\0221\n\010curren" +
      "cy\030\003 \001(\0162\037.palm.musa.v1.WechatPayCurrenc" +
      "y\"5\n\034WechatPayQueryRefundResponse\022\025\n\rout" +
      "_refund_no\030\001 \001(\t\"0\n\027WechatPayRefundRespo" +
      "nse\022\025\n\rout_refund_no\030\001 \001(\t*\034\n\021WechatPayC" +
      "urrency\022\007\n\003CNY\020\000*4\n\025WechatPayNotifyActio" +
      "n\022\017\n\013TRANSCATION\020\000\022\n\n\006REFUND\020\001*\034\n\020Wechat" +
      "PayTarType\022\010\n\004GZIP\020\0002s\n\017WechatPayNative\022" +
      "`\n\006Prepay\022$.palm.musa.v1.WechatPayPrepay" +
      "Request\032..palm.musa.v1.WechatPayNativeQr" +
      "CodeUrlResponse\"\0002\242\003\n\016WechatPayJsapi\022^\n\006" +
      "Prepay\022$.palm.musa.v1.WechatPayPrepayReq" +
      "uest\032,.palm.musa.v1.WechatPayJsapiPrepay" +
      "IdResponse\"\000\022v\n\026QueryOrderByOutTradeNo\0224" +
      ".palm.musa.v1.WechatPayQueryOrderByOutTr" +
      "adeNoRequest\032$.palm.musa.v1.WechatPayTra" +
      "deResponse\"\000\022f\n\016QueryOrderById\022,.palm.mu" +
      "sa.v1.WechatPayQueryOrderByIdRequest\032$.p" +
      "alm.musa.v1.WechatPayTradeResponse\"\000\022P\n\n" +
      "CloseOrder\022(.palm.musa.v1.WechatPayClose" +
      "OrderRequest\032\026.google.protobuf.Empty\"\0002\307" +
      "\001\n\rWechatPayBill\022W\n\005Trade\022\'.palm.musa.v1" +
      ".WechatPayTradeBillRequest\032#.palm.musa.v" +
      "1.WechatPayBillResponse\"\000\022]\n\010FundFlow\022*." +
      "palm.musa.v1.WechatPayFundFlowBillReques" +
      "t\032#.palm.musa.v1.WechatPayBillResponse\"\000" +
      "2\316\001\n\017WechatPayRefund\022]\n\006Create\022*.palm.mu" +
      "sa.v1.WechatPayCreateRefundRequest\032%.pal" +
      "m.musa.v1.WechatPayRefundResponse\"\000\022\\\n\005Q" +
      "uery\022*.palm.musa.v1.WechatPayQueryRefund" +
      "Response\032%.palm.musa.v1.WechatPayRefundR" +
      "esponse\"\0002C\n\006Health\0229\n\005Check\022\026.google.pr" +
      "otobuf.Empty\032\026.google.protobuf.Empty\"\000B." +
      "\n*com.github.saturn_xiv.palm.plugins.mus" +
      "a.v1P\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.EmptyProto.getDescriptor(),
        });
    internal_static_palm_musa_v1_WechatPayPrepayRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_palm_musa_v1_WechatPayPrepayRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayPrepayRequest_descriptor,
        new java.lang.String[] { "AppId", "PayerOpenId", "Amount", "Description", "NotifyHost", "PayerOpenId", });
    internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_descriptor =
      internal_static_palm_musa_v1_WechatPayPrepayRequest_descriptor.getNestedTypes().get(0);
    internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayPrepayRequest_Amount_descriptor,
        new java.lang.String[] { "Total", "Currency", });
    internal_static_palm_musa_v1_WechatPayCloseOrderRequest_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_palm_musa_v1_WechatPayCloseOrderRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayCloseOrderRequest_descriptor,
        new java.lang.String[] { "OutTradeNo", "Reason", });
    internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayNativeQrCodeUrlResponse_descriptor,
        new java.lang.String[] { "Url", "OutTradeNo", });
    internal_static_palm_musa_v1_WechatPayTradeResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_palm_musa_v1_WechatPayTradeResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayTradeResponse_descriptor,
        new java.lang.String[] { });
    internal_static_palm_musa_v1_WechatPayQueryOrderByIdRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_palm_musa_v1_WechatPayQueryOrderByIdRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayQueryOrderByIdRequest_descriptor,
        new java.lang.String[] { "Id", });
    internal_static_palm_musa_v1_WechatPayQueryOrderByOutTradeNoRequest_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_palm_musa_v1_WechatPayQueryOrderByOutTradeNoRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayQueryOrderByOutTradeNoRequest_descriptor,
        new java.lang.String[] { "No", });
    internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayJsapiPrepayIdResponse_descriptor,
        new java.lang.String[] { "AppId", "TimeStamp", "NonceStr", "Package", "SignType", "PaySign", "OutTradeNo", });
    internal_static_palm_musa_v1_WechatPayBillDate_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_palm_musa_v1_WechatPayBillDate_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayBillDate_descriptor,
        new java.lang.String[] { "Year", "Month", "Day", });
    internal_static_palm_musa_v1_WechatPayBillResponse_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_palm_musa_v1_WechatPayBillResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayBillResponse_descriptor,
        new java.lang.String[] { "Content", });
    internal_static_palm_musa_v1_WechatPayTradeBillRequest_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_palm_musa_v1_WechatPayTradeBillRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayTradeBillRequest_descriptor,
        new java.lang.String[] { "BillDate", "BillType", });
    internal_static_palm_musa_v1_WechatPayFundFlowBillRequest_descriptor =
      getDescriptor().getMessageTypes().get(10);
    internal_static_palm_musa_v1_WechatPayFundFlowBillRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayFundFlowBillRequest_descriptor,
        new java.lang.String[] { "BillDate", "AccountType", });
    internal_static_palm_musa_v1_WechatPayCreateRefundRequest_descriptor =
      getDescriptor().getMessageTypes().get(11);
    internal_static_palm_musa_v1_WechatPayCreateRefundRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayCreateRefundRequest_descriptor,
        new java.lang.String[] { "OutTradeNo", "Reason", "Amount", "NotifyHost", });
    internal_static_palm_musa_v1_WechatPayCreateRefundRequest_Amount_descriptor =
      internal_static_palm_musa_v1_WechatPayCreateRefundRequest_descriptor.getNestedTypes().get(0);
    internal_static_palm_musa_v1_WechatPayCreateRefundRequest_Amount_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayCreateRefundRequest_Amount_descriptor,
        new java.lang.String[] { "Total", "Refund", "Currency", });
    internal_static_palm_musa_v1_WechatPayQueryRefundResponse_descriptor =
      getDescriptor().getMessageTypes().get(12);
    internal_static_palm_musa_v1_WechatPayQueryRefundResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayQueryRefundResponse_descriptor,
        new java.lang.String[] { "OutRefundNo", });
    internal_static_palm_musa_v1_WechatPayRefundResponse_descriptor =
      getDescriptor().getMessageTypes().get(13);
    internal_static_palm_musa_v1_WechatPayRefundResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_musa_v1_WechatPayRefundResponse_descriptor,
        new java.lang.String[] { "OutRefundNo", });
    com.google.protobuf.EmptyProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
