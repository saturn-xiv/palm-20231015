// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: orchid.proto

package com.github.saturn_xiv.palm.plugins.orchid.v1;

public final class Orchid {
  private Orchid() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatMiniProgramLoginRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatMiniProgramLoginRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatOauth2QrConnectResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatOauth2QrConnectResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatOauth2LoginResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatOauth2LoginResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_orchid_v1_WechatOauth2LoginRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_orchid_v1_WechatOauth2LoginRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\014orchid.proto\022\016palm.orchid.v1\"=\n\035Wechat" +
      "MiniProgramLoginRequest\022\016\n\006app_id\030\001 \001(\t\022" +
      "\014\n\004code\030\002 \001(\t\"V\n\036WechatMiniProgramLoginR" +
      "esponse\022\017\n\007unionid\030\001 \001(\t\022\016\n\006openid\030\002 \001(\t" +
      "\022\023\n\013session_key\030\003 \001(\t\"C\n#WechatMiniProgr" +
      "amPhoneNumberRequest\022\016\n\006app_id\030\001 \001(\t\022\014\n\004" +
      "code\030\002 \001(\t\"\201\001\n$WechatMiniProgramPhoneNum" +
      "berResponse\022\024\n\014phone_number\030\001 \001(\t\022\031\n\021pur" +
      "e_phone_number\030\002 \001(\t\022\024\n\014country_code\030\003 \001" +
      "(\t\022\022\n\nwater_mark\030\004 \001(\004\"\300\001\n\034WechatOauth2Q" +
      "rConnectRequest\022\016\n\006app_id\030\001 \001(\t\022\024\n\014redir" +
      "ect_uri\030\002 \001(\t\022\r\n\005state\030\003 \001(\t\022G\n\010language" +
      "\030\t \001(\01625.palm.orchid.v1.WechatOauth2QrCo" +
      "nnectRequest.Language\"\"\n\010Language\022\006\n\002EN\020" +
      "\000\022\006\n\002CN\020\001\022\006\n\002TW\020\002\",\n\035WechatOauth2QrConne" +
      "ctResponse\022\013\n\003url\030\001 \001(\t\"\223\002\n\031WechatOauth2" +
      "LoginResponse\022\017\n\007unionid\030\001 \001(\t\022\016\n\006openid" +
      "\030\002 \001(\t\022\020\n\010nickname\030\013 \001(\t\022:\n\003sex\030\014 \001(\0162-." +
      "palm.orchid.v1.WechatOauth2LoginResponse" +
      ".Sex\022\020\n\010province\030\r \001(\t\022\014\n\004city\030\016 \001(\t\022\017\n\007" +
      "country\030\017 \001(\t\022\027\n\nheadimgurl\030\020 \001(\tH\000\210\001\001\022\021" +
      "\n\tprivilege\030\021 \003(\t\"\033\n\003Sex\022\010\n\004MALE\020\000\022\n\n\006FE" +
      "MALE\020\001B\r\n\013_headimgurl\"\220\001\n\030WechatOauth2Lo" +
      "ginRequest\022\016\n\006app_id\030\001 \001(\t\022\014\n\004code\030\002 \001(\t" +
      "\022\r\n\005state\030\003 \001(\t\022G\n\010language\030\t \001(\01625.palm" +
      ".orchid.v1.WechatOauth2QrConnectRequest." +
      "Language2\371\001\n\021WechatMiniProgram\022h\n\005Login\022" +
      "-.palm.orchid.v1.WechatMiniProgramLoginR" +
      "equest\032..palm.orchid.v1.WechatMiniProgra" +
      "mLoginResponse\"\000\022z\n\013PhoneNumber\0223.palm.o" +
      "rchid.v1.WechatMiniProgramPhoneNumberReq" +
      "uest\0324.palm.orchid.v1.WechatMiniProgramP" +
      "honeNumberResponse\"\0002\332\001\n\014WechatOauth2\022j\n" +
      "\tQrConnect\022,.palm.orchid.v1.WechatOauth2" +
      "QrConnectRequest\032-.palm.orchid.v1.Wechat" +
      "Oauth2QrConnectResponse\"\000\022^\n\005Login\022(.pal" +
      "m.orchid.v1.WechatOauth2LoginRequest\032).p" +
      "alm.orchid.v1.WechatOauth2LoginResponse\"" +
      "\000B0\n,com.github.saturn_xiv.palm.plugins." +
      "orchid.v1P\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_palm_orchid_v1_WechatMiniProgramLoginRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_palm_orchid_v1_WechatMiniProgramLoginRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatMiniProgramLoginRequest_descriptor,
        new java.lang.String[] { "AppId", "Code", });
    internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_descriptor,
        new java.lang.String[] { "Unionid", "Openid", "SessionKey", });
    internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberRequest_descriptor,
        new java.lang.String[] { "AppId", "Code", });
    internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatMiniProgramPhoneNumberResponse_descriptor,
        new java.lang.String[] { "PhoneNumber", "PurePhoneNumber", "CountryCode", "WaterMark", });
    internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_descriptor,
        new java.lang.String[] { "AppId", "RedirectUri", "State", "Language", });
    internal_static_palm_orchid_v1_WechatOauth2QrConnectResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_palm_orchid_v1_WechatOauth2QrConnectResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatOauth2QrConnectResponse_descriptor,
        new java.lang.String[] { "Url", });
    internal_static_palm_orchid_v1_WechatOauth2LoginResponse_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_palm_orchid_v1_WechatOauth2LoginResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatOauth2LoginResponse_descriptor,
        new java.lang.String[] { "Unionid", "Openid", "Nickname", "Sex", "Province", "City", "Country", "Headimgurl", "Privilege", "Headimgurl", });
    internal_static_palm_orchid_v1_WechatOauth2LoginRequest_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_palm_orchid_v1_WechatOauth2LoginRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_orchid_v1_WechatOauth2LoginRequest_descriptor,
        new java.lang.String[] { "AppId", "Code", "State", "Language", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}