package com.github.saturn_xiv.palm.plugins.nut.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: nut.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class SiteGrpc {

  private SiteGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.nut.v1.Site";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest,
      com.google.protobuf.Empty> getSetMaintenanceModeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetMaintenanceMode",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest,
      com.google.protobuf.Empty> getSetMaintenanceModeMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest, com.google.protobuf.Empty> getSetMaintenanceModeMethod;
    if ((getSetMaintenanceModeMethod = SiteGrpc.getSetMaintenanceModeMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetMaintenanceModeMethod = SiteGrpc.getSetMaintenanceModeMethod) == null) {
          SiteGrpc.getSetMaintenanceModeMethod = getSetMaintenanceModeMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetMaintenanceMode"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetMaintenanceMode"))
              .build();
        }
      }
    }
    return getSetMaintenanceModeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest,
      com.google.protobuf.Empty> getInstallMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Install",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest,
      com.google.protobuf.Empty> getInstallMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest, com.google.protobuf.Empty> getInstallMethod;
    if ((getInstallMethod = SiteGrpc.getInstallMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getInstallMethod = SiteGrpc.getInstallMethod) == null) {
          SiteGrpc.getInstallMethod = getInstallMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Install"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("Install"))
              .build();
        }
      }
    }
    return getInstallMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getClearCacheMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ClearCache",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getClearCacheMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.google.protobuf.Empty> getClearCacheMethod;
    if ((getClearCacheMethod = SiteGrpc.getClearCacheMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getClearCacheMethod = SiteGrpc.getClearCacheMethod) == null) {
          SiteGrpc.getClearCacheMethod = getClearCacheMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ClearCache"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("ClearCache"))
              .build();
        }
      }
    }
    return getClearCacheMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse> getLayoutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Layout",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse> getLayoutMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse> getLayoutMethod;
    if ((getLayoutMethod = SiteGrpc.getLayoutMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getLayoutMethod = SiteGrpc.getLayoutMethod) == null) {
          SiteGrpc.getLayoutMethod = getLayoutMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Layout"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("Layout"))
              .build();
        }
      }
    }
    return getLayoutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author,
      com.google.protobuf.Empty> getSetAuthorMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetAuthor",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author,
      com.google.protobuf.Empty> getSetAuthorMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author, com.google.protobuf.Empty> getSetAuthorMethod;
    if ((getSetAuthorMethod = SiteGrpc.getSetAuthorMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetAuthorMethod = SiteGrpc.getSetAuthorMethod) == null) {
          SiteGrpc.getSetAuthorMethod = getSetAuthorMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetAuthor"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetAuthor"))
              .build();
        }
      }
    }
    return getSetAuthorMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest,
      com.google.protobuf.Empty> getSetCopyrightMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetCopyright",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest,
      com.google.protobuf.Empty> getSetCopyrightMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest, com.google.protobuf.Empty> getSetCopyrightMethod;
    if ((getSetCopyrightMethod = SiteGrpc.getSetCopyrightMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetCopyrightMethod = SiteGrpc.getSetCopyrightMethod) == null) {
          SiteGrpc.getSetCopyrightMethod = getSetCopyrightMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetCopyright"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetCopyright"))
              .build();
        }
      }
    }
    return getSetCopyrightMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest,
      com.google.protobuf.Empty> getSetKeywordsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetKeywords",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest,
      com.google.protobuf.Empty> getSetKeywordsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest, com.google.protobuf.Empty> getSetKeywordsMethod;
    if ((getSetKeywordsMethod = SiteGrpc.getSetKeywordsMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetKeywordsMethod = SiteGrpc.getSetKeywordsMethod) == null) {
          SiteGrpc.getSetKeywordsMethod = getSetKeywordsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetKeywords"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetKeywords"))
              .build();
        }
      }
    }
    return getSetKeywordsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest,
      com.google.protobuf.Empty> getSetInfoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetInfo",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest,
      com.google.protobuf.Empty> getSetInfoMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest, com.google.protobuf.Empty> getSetInfoMethod;
    if ((getSetInfoMethod = SiteGrpc.getSetInfoMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetInfoMethod = SiteGrpc.getSetInfoMethod) == null) {
          SiteGrpc.getSetInfoMethod = getSetInfoMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetInfo"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetInfo"))
              .build();
        }
      }
    }
    return getSetInfoMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest,
      com.google.protobuf.Empty> getSetLogoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetLogo",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest,
      com.google.protobuf.Empty> getSetLogoMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest, com.google.protobuf.Empty> getSetLogoMethod;
    if ((getSetLogoMethod = SiteGrpc.getSetLogoMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetLogoMethod = SiteGrpc.getSetLogoMethod) == null) {
          SiteGrpc.getSetLogoMethod = getSetLogoMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetLogo"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetLogo"))
              .build();
        }
      }
    }
    return getSetLogoMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile,
      com.google.protobuf.Empty> getSetTwilioMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetTwilio",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile,
      com.google.protobuf.Empty> getSetTwilioMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile, com.google.protobuf.Empty> getSetTwilioMethod;
    if ((getSetTwilioMethod = SiteGrpc.getSetTwilioMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetTwilioMethod = SiteGrpc.getSetTwilioMethod) == null) {
          SiteGrpc.getSetTwilioMethod = getSetTwilioMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetTwilio"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetTwilio"))
              .build();
        }
      }
    }
    return getSetTwilioMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile> getGetTwilioMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetTwilio",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile> getGetTwilioMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile> getGetTwilioMethod;
    if ((getGetTwilioMethod = SiteGrpc.getGetTwilioMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getGetTwilioMethod = SiteGrpc.getGetTwilioMethod) == null) {
          SiteGrpc.getGetTwilioMethod = getGetTwilioMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetTwilio"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("GetTwilio"))
              .build();
        }
      }
    }
    return getGetTwilioMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest,
      com.google.protobuf.Empty> getPingTwilioMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PingTwilio",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest,
      com.google.protobuf.Empty> getPingTwilioMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest, com.google.protobuf.Empty> getPingTwilioMethod;
    if ((getPingTwilioMethod = SiteGrpc.getPingTwilioMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getPingTwilioMethod = SiteGrpc.getPingTwilioMethod) == null) {
          SiteGrpc.getPingTwilioMethod = getPingTwilioMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PingTwilio"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("PingTwilio"))
              .build();
        }
      }
    }
    return getPingTwilioMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile,
      com.google.protobuf.Empty> getSetSmtpMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetSmtp",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile,
      com.google.protobuf.Empty> getSetSmtpMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile, com.google.protobuf.Empty> getSetSmtpMethod;
    if ((getSetSmtpMethod = SiteGrpc.getSetSmtpMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetSmtpMethod = SiteGrpc.getSetSmtpMethod) == null) {
          SiteGrpc.getSetSmtpMethod = getSetSmtpMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetSmtp"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetSmtp"))
              .build();
        }
      }
    }
    return getSetSmtpMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile> getGetSmtpMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetSmtp",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile> getGetSmtpMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile> getGetSmtpMethod;
    if ((getGetSmtpMethod = SiteGrpc.getGetSmtpMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getGetSmtpMethod = SiteGrpc.getGetSmtpMethod) == null) {
          SiteGrpc.getGetSmtpMethod = getGetSmtpMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetSmtp"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("GetSmtp"))
              .build();
        }
      }
    }
    return getGetSmtpMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest,
      com.google.protobuf.Empty> getPingSmtpMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PingSmtp",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest,
      com.google.protobuf.Empty> getPingSmtpMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest, com.google.protobuf.Empty> getPingSmtpMethod;
    if ((getPingSmtpMethod = SiteGrpc.getPingSmtpMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getPingSmtpMethod = SiteGrpc.getPingSmtpMethod) == null) {
          SiteGrpc.getPingSmtpMethod = getPingSmtpMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PingSmtp"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("PingSmtp"))
              .build();
        }
      }
    }
    return getPingSmtpMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile,
      com.google.protobuf.Empty> getSetIndexNowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetIndexNow",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile,
      com.google.protobuf.Empty> getSetIndexNowMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile, com.google.protobuf.Empty> getSetIndexNowMethod;
    if ((getSetIndexNowMethod = SiteGrpc.getSetIndexNowMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetIndexNowMethod = SiteGrpc.getSetIndexNowMethod) == null) {
          SiteGrpc.getSetIndexNowMethod = getSetIndexNowMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetIndexNow"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetIndexNow"))
              .build();
        }
      }
    }
    return getSetIndexNowMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile> getGetIndexNowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetIndexNow",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile> getGetIndexNowMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile> getGetIndexNowMethod;
    if ((getGetIndexNowMethod = SiteGrpc.getGetIndexNowMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getGetIndexNowMethod = SiteGrpc.getGetIndexNowMethod) == null) {
          SiteGrpc.getGetIndexNowMethod = getGetIndexNowMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetIndexNow"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("GetIndexNow"))
              .build();
        }
      }
    }
    return getGetIndexNowMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest,
      com.google.protobuf.Empty> getPingIndexNowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PingIndexNow",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest,
      com.google.protobuf.Empty> getPingIndexNowMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest, com.google.protobuf.Empty> getPingIndexNowMethod;
    if ((getPingIndexNowMethod = SiteGrpc.getPingIndexNowMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getPingIndexNowMethod = SiteGrpc.getPingIndexNowMethod) == null) {
          SiteGrpc.getPingIndexNowMethod = getPingIndexNowMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PingIndexNow"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("PingIndexNow"))
              .build();
        }
      }
    }
    return getPingIndexNowMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile,
      com.google.protobuf.Empty> getSetGoogleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetGoogle",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile,
      com.google.protobuf.Empty> getSetGoogleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile, com.google.protobuf.Empty> getSetGoogleMethod;
    if ((getSetGoogleMethod = SiteGrpc.getSetGoogleMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetGoogleMethod = SiteGrpc.getSetGoogleMethod) == null) {
          SiteGrpc.getSetGoogleMethod = getSetGoogleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetGoogle"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetGoogle"))
              .build();
        }
      }
    }
    return getSetGoogleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile> getGetGoogleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetGoogle",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile> getGetGoogleMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile> getGetGoogleMethod;
    if ((getGetGoogleMethod = SiteGrpc.getGetGoogleMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getGetGoogleMethod = SiteGrpc.getGetGoogleMethod) == null) {
          SiteGrpc.getGetGoogleMethod = getGetGoogleMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetGoogle"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("GetGoogle"))
              .build();
        }
      }
    }
    return getGetGoogleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest,
      com.google.protobuf.Empty> getPingGoogleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PingGoogle",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest,
      com.google.protobuf.Empty> getPingGoogleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest, com.google.protobuf.Empty> getPingGoogleMethod;
    if ((getPingGoogleMethod = SiteGrpc.getPingGoogleMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getPingGoogleMethod = SiteGrpc.getPingGoogleMethod) == null) {
          SiteGrpc.getPingGoogleMethod = getPingGoogleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PingGoogle"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("PingGoogle"))
              .build();
        }
      }
    }
    return getPingGoogleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile,
      com.google.protobuf.Empty> getSetBaiduMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetBaidu",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile,
      com.google.protobuf.Empty> getSetBaiduMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile, com.google.protobuf.Empty> getSetBaiduMethod;
    if ((getSetBaiduMethod = SiteGrpc.getSetBaiduMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSetBaiduMethod = SiteGrpc.getSetBaiduMethod) == null) {
          SiteGrpc.getSetBaiduMethod = getSetBaiduMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetBaidu"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("SetBaidu"))
              .build();
        }
      }
    }
    return getSetBaiduMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile> getGetBaiduMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetBaidu",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile> getGetBaiduMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile> getGetBaiduMethod;
    if ((getGetBaiduMethod = SiteGrpc.getGetBaiduMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getGetBaiduMethod = SiteGrpc.getGetBaiduMethod) == null) {
          SiteGrpc.getGetBaiduMethod = getGetBaiduMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetBaidu"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("GetBaidu"))
              .build();
        }
      }
    }
    return getGetBaiduMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest,
      com.google.protobuf.Empty> getPingBaiduMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PingBaidu",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest,
      com.google.protobuf.Empty> getPingBaiduMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest, com.google.protobuf.Empty> getPingBaiduMethod;
    if ((getPingBaiduMethod = SiteGrpc.getPingBaiduMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getPingBaiduMethod = SiteGrpc.getPingBaiduMethod) == null) {
          SiteGrpc.getPingBaiduMethod = getPingBaiduMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PingBaidu"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("PingBaidu"))
              .build();
        }
      }
    }
    return getPingBaiduMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse> getStatusMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Status",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse> getStatusMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse> getStatusMethod;
    if ((getStatusMethod = SiteGrpc.getStatusMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getStatusMethod = SiteGrpc.getStatusMethod) == null) {
          SiteGrpc.getStatusMethod = getStatusMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Status"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("Status"))
              .build();
        }
      }
    }
    return getStatusMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SiteStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SiteStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SiteStub>() {
        @java.lang.Override
        public SiteStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SiteStub(channel, callOptions);
        }
      };
    return SiteStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SiteBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SiteBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SiteBlockingStub>() {
        @java.lang.Override
        public SiteBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SiteBlockingStub(channel, callOptions);
        }
      };
    return SiteBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SiteFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SiteFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SiteFutureStub>() {
        @java.lang.Override
        public SiteFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SiteFutureStub(channel, callOptions);
        }
      };
    return SiteFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void setMaintenanceMode(com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetMaintenanceModeMethod(), responseObserver);
    }

    /**
     */
    default void install(com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getInstallMethod(), responseObserver);
    }

    /**
     */
    default void clearCache(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getClearCacheMethod(), responseObserver);
    }

    /**
     */
    default void layout(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLayoutMethod(), responseObserver);
    }

    /**
     */
    default void setAuthor(com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetAuthorMethod(), responseObserver);
    }

    /**
     */
    default void setCopyright(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetCopyrightMethod(), responseObserver);
    }

    /**
     */
    default void setKeywords(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetKeywordsMethod(), responseObserver);
    }

    /**
     */
    default void setInfo(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetInfoMethod(), responseObserver);
    }

    /**
     */
    default void setLogo(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetLogoMethod(), responseObserver);
    }

    /**
     */
    default void setTwilio(com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetTwilioMethod(), responseObserver);
    }

    /**
     */
    default void getTwilio(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetTwilioMethod(), responseObserver);
    }

    /**
     */
    default void pingTwilio(com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPingTwilioMethod(), responseObserver);
    }

    /**
     */
    default void setSmtp(com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetSmtpMethod(), responseObserver);
    }

    /**
     */
    default void getSmtp(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetSmtpMethod(), responseObserver);
    }

    /**
     */
    default void pingSmtp(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPingSmtpMethod(), responseObserver);
    }

    /**
     */
    default void setIndexNow(com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetIndexNowMethod(), responseObserver);
    }

    /**
     */
    default void getIndexNow(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetIndexNowMethod(), responseObserver);
    }

    /**
     */
    default void pingIndexNow(com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPingIndexNowMethod(), responseObserver);
    }

    /**
     */
    default void setGoogle(com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetGoogleMethod(), responseObserver);
    }

    /**
     */
    default void getGoogle(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetGoogleMethod(), responseObserver);
    }

    /**
     */
    default void pingGoogle(com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPingGoogleMethod(), responseObserver);
    }

    /**
     */
    default void setBaidu(com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetBaiduMethod(), responseObserver);
    }

    /**
     */
    default void getBaidu(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetBaiduMethod(), responseObserver);
    }

    /**
     */
    default void pingBaidu(com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPingBaiduMethod(), responseObserver);
    }

    /**
     */
    default void status(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStatusMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Site.
   */
  public static abstract class SiteImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return SiteGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Site.
   */
  public static final class SiteStub
      extends io.grpc.stub.AbstractAsyncStub<SiteStub> {
    private SiteStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SiteStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SiteStub(channel, callOptions);
    }

    /**
     */
    public void setMaintenanceMode(com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetMaintenanceModeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void install(com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getInstallMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void clearCache(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getClearCacheMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void layout(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLayoutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setAuthor(com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetAuthorMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setCopyright(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetCopyrightMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setKeywords(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetKeywordsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setInfo(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetInfoMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setLogo(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetLogoMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setTwilio(com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetTwilioMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getTwilio(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetTwilioMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void pingTwilio(com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPingTwilioMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setSmtp(com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetSmtpMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getSmtp(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetSmtpMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void pingSmtp(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPingSmtpMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setIndexNow(com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetIndexNowMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getIndexNow(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetIndexNowMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void pingIndexNow(com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPingIndexNowMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setGoogle(com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetGoogleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getGoogle(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetGoogleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void pingGoogle(com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPingGoogleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setBaidu(com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetBaiduMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getBaidu(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetBaiduMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void pingBaidu(com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPingBaiduMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void status(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStatusMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Site.
   */
  public static final class SiteBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<SiteBlockingStub> {
    private SiteBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SiteBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SiteBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty setMaintenanceMode(com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetMaintenanceModeMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty install(com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getInstallMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty clearCache(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getClearCacheMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse layout(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLayoutMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setAuthor(com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetAuthorMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setCopyright(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetCopyrightMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setKeywords(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetKeywordsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setInfo(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetInfoMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setLogo(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetLogoMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setTwilio(com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetTwilioMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile getTwilio(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetTwilioMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty pingTwilio(com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPingTwilioMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setSmtp(com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetSmtpMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile getSmtp(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetSmtpMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty pingSmtp(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPingSmtpMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setIndexNow(com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetIndexNowMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile getIndexNow(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetIndexNowMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty pingIndexNow(com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPingIndexNowMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setGoogle(com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetGoogleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile getGoogle(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetGoogleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty pingGoogle(com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPingGoogleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setBaidu(com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetBaiduMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile getBaidu(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetBaiduMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty pingBaidu(com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPingBaiduMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse status(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStatusMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Site.
   */
  public static final class SiteFutureStub
      extends io.grpc.stub.AbstractFutureStub<SiteFutureStub> {
    private SiteFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SiteFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SiteFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setMaintenanceMode(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetMaintenanceModeMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> install(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getInstallMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> clearCache(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getClearCacheMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse> layout(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLayoutMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setAuthor(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetAuthorMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setCopyright(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetCopyrightMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setKeywords(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetKeywordsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setInfo(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetInfoMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setLogo(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetLogoMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setTwilio(
        com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetTwilioMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile> getTwilio(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetTwilioMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> pingTwilio(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPingTwilioMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setSmtp(
        com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetSmtpMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile> getSmtp(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetSmtpMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> pingSmtp(
        com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPingSmtpMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setIndexNow(
        com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetIndexNowMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile> getIndexNow(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetIndexNowMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> pingIndexNow(
        com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPingIndexNowMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setGoogle(
        com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetGoogleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile> getGoogle(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetGoogleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> pingGoogle(
        com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPingGoogleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setBaidu(
        com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetBaiduMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile> getBaidu(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetBaiduMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> pingBaidu(
        com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPingBaiduMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse> status(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStatusMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SET_MAINTENANCE_MODE = 0;
  private static final int METHODID_INSTALL = 1;
  private static final int METHODID_CLEAR_CACHE = 2;
  private static final int METHODID_LAYOUT = 3;
  private static final int METHODID_SET_AUTHOR = 4;
  private static final int METHODID_SET_COPYRIGHT = 5;
  private static final int METHODID_SET_KEYWORDS = 6;
  private static final int METHODID_SET_INFO = 7;
  private static final int METHODID_SET_LOGO = 8;
  private static final int METHODID_SET_TWILIO = 9;
  private static final int METHODID_GET_TWILIO = 10;
  private static final int METHODID_PING_TWILIO = 11;
  private static final int METHODID_SET_SMTP = 12;
  private static final int METHODID_GET_SMTP = 13;
  private static final int METHODID_PING_SMTP = 14;
  private static final int METHODID_SET_INDEX_NOW = 15;
  private static final int METHODID_GET_INDEX_NOW = 16;
  private static final int METHODID_PING_INDEX_NOW = 17;
  private static final int METHODID_SET_GOOGLE = 18;
  private static final int METHODID_GET_GOOGLE = 19;
  private static final int METHODID_PING_GOOGLE = 20;
  private static final int METHODID_SET_BAIDU = 21;
  private static final int METHODID_GET_BAIDU = 22;
  private static final int METHODID_PING_BAIDU = 23;
  private static final int METHODID_STATUS = 24;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AsyncService serviceImpl;
    private final int methodId;

    MethodHandlers(AsyncService serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SET_MAINTENANCE_MODE:
          serviceImpl.setMaintenanceMode((com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_INSTALL:
          serviceImpl.install((com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_CLEAR_CACHE:
          serviceImpl.clearCache((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_LAYOUT:
          serviceImpl.layout((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse>) responseObserver);
          break;
        case METHODID_SET_AUTHOR:
          serviceImpl.setAuthor((com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_COPYRIGHT:
          serviceImpl.setCopyright((com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_KEYWORDS:
          serviceImpl.setKeywords((com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_INFO:
          serviceImpl.setInfo((com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_LOGO:
          serviceImpl.setLogo((com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_TWILIO:
          serviceImpl.setTwilio((com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_TWILIO:
          serviceImpl.getTwilio((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile>) responseObserver);
          break;
        case METHODID_PING_TWILIO:
          serviceImpl.pingTwilio((com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_SMTP:
          serviceImpl.setSmtp((com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_SMTP:
          serviceImpl.getSmtp((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile>) responseObserver);
          break;
        case METHODID_PING_SMTP:
          serviceImpl.pingSmtp((com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_INDEX_NOW:
          serviceImpl.setIndexNow((com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_INDEX_NOW:
          serviceImpl.getIndexNow((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile>) responseObserver);
          break;
        case METHODID_PING_INDEX_NOW:
          serviceImpl.pingIndexNow((com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_GOOGLE:
          serviceImpl.setGoogle((com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_GOOGLE:
          serviceImpl.getGoogle((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile>) responseObserver);
          break;
        case METHODID_PING_GOOGLE:
          serviceImpl.pingGoogle((com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_BAIDU:
          serviceImpl.setBaidu((com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_BAIDU:
          serviceImpl.getBaidu((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile>) responseObserver);
          break;
        case METHODID_PING_BAIDU:
          serviceImpl.pingBaidu((com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_STATUS:
          serviceImpl.status((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  public static final io.grpc.ServerServiceDefinition bindService(AsyncService service) {
    return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
        .addMethod(
          getSetMaintenanceModeMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteMaintenanceModeRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_MAINTENANCE_MODE)))
        .addMethod(
          getInstallMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteInstallRequest,
              com.google.protobuf.Empty>(
                service, METHODID_INSTALL)))
        .addMethod(
          getClearCacheMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.google.protobuf.Empty>(
                service, METHODID_CLEAR_CACHE)))
        .addMethod(
          getLayoutMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse>(
                service, METHODID_LAYOUT)))
        .addMethod(
          getSetAuthorMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteLayoutResponse.Author,
              com.google.protobuf.Empty>(
                service, METHODID_SET_AUTHOR)))
        .addMethod(
          getSetCopyrightMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_COPYRIGHT)))
        .addMethod(
          getSetKeywordsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetKeywordsRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_KEYWORDS)))
        .addMethod(
          getSetInfoMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetInfoRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_INFO)))
        .addMethod(
          getSetLogoMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetLogoRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_LOGO)))
        .addMethod(
          getSetTwilioMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile,
              com.google.protobuf.Empty>(
                service, METHODID_SET_TWILIO)))
        .addMethod(
          getGetTwilioMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.TwilioProfile>(
                service, METHODID_GET_TWILIO)))
        .addMethod(
          getPingTwilioMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteTwilioPingRequest,
              com.google.protobuf.Empty>(
                service, METHODID_PING_TWILIO)))
        .addMethod(
          getSetSmtpMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile,
              com.google.protobuf.Empty>(
                service, METHODID_SET_SMTP)))
        .addMethod(
          getGetSmtpMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.SmtpProfile>(
                service, METHODID_GET_SMTP)))
        .addMethod(
          getPingSmtpMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteSmtpPingRequest,
              com.google.protobuf.Empty>(
                service, METHODID_PING_SMTP)))
        .addMethod(
          getSetIndexNowMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile,
              com.google.protobuf.Empty>(
                service, METHODID_SET_INDEX_NOW)))
        .addMethod(
          getGetIndexNowMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowProfile>(
                service, METHODID_GET_INDEX_NOW)))
        .addMethod(
          getPingIndexNowMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IndexNowPingRequest,
              com.google.protobuf.Empty>(
                service, METHODID_PING_INDEX_NOW)))
        .addMethod(
          getSetGoogleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile,
              com.google.protobuf.Empty>(
                service, METHODID_SET_GOOGLE)))
        .addMethod(
          getGetGoogleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.GoogleProfile>(
                service, METHODID_GET_GOOGLE)))
        .addMethod(
          getPingGoogleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest,
              com.google.protobuf.Empty>(
                service, METHODID_PING_GOOGLE)))
        .addMethod(
          getSetBaiduMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile,
              com.google.protobuf.Empty>(
                service, METHODID_SET_BAIDU)))
        .addMethod(
          getGetBaiduMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.BaiduProfile>(
                service, METHODID_GET_BAIDU)))
        .addMethod(
          getPingBaiduMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SitemapPingRequest,
              com.google.protobuf.Empty>(
                service, METHODID_PING_BAIDU)))
        .addMethod(
          getStatusMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteStatusResponse>(
                service, METHODID_STATUS)))
        .build();
  }

  private static abstract class SiteBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SiteBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Site");
    }
  }

  private static final class SiteFileDescriptorSupplier
      extends SiteBaseDescriptorSupplier {
    SiteFileDescriptorSupplier() {}
  }

  private static final class SiteMethodDescriptorSupplier
      extends SiteBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    SiteMethodDescriptorSupplier(java.lang.String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (SiteGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SiteFileDescriptorSupplier())
              .addMethod(getSetMaintenanceModeMethod())
              .addMethod(getInstallMethod())
              .addMethod(getClearCacheMethod())
              .addMethod(getLayoutMethod())
              .addMethod(getSetAuthorMethod())
              .addMethod(getSetCopyrightMethod())
              .addMethod(getSetKeywordsMethod())
              .addMethod(getSetInfoMethod())
              .addMethod(getSetLogoMethod())
              .addMethod(getSetTwilioMethod())
              .addMethod(getGetTwilioMethod())
              .addMethod(getPingTwilioMethod())
              .addMethod(getSetSmtpMethod())
              .addMethod(getGetSmtpMethod())
              .addMethod(getPingSmtpMethod())
              .addMethod(getSetIndexNowMethod())
              .addMethod(getGetIndexNowMethod())
              .addMethod(getPingIndexNowMethod())
              .addMethod(getSetGoogleMethod())
              .addMethod(getGetGoogleMethod())
              .addMethod(getPingGoogleMethod())
              .addMethod(getSetBaiduMethod())
              .addMethod(getGetBaiduMethod())
              .addMethod(getPingBaiduMethod())
              .addMethod(getStatusMethod())
              .build();
        }
      }
    }
    return result;
  }
}
