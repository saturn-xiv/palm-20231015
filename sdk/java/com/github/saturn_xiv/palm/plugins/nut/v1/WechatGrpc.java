package com.github.saturn_xiv.palm.plugins.nut.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * ----------------------------------------------------------------------------
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: nut.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatGrpc {

  private WechatGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.nut.v1.Wechat";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse> getOauth2SignInStateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Oauth2SignInState",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse> getOauth2SignInStateMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse> getOauth2SignInStateMethod;
    if ((getOauth2SignInStateMethod = WechatGrpc.getOauth2SignInStateMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getOauth2SignInStateMethod = WechatGrpc.getOauth2SignInStateMethod) == null) {
          WechatGrpc.getOauth2SignInStateMethod = getOauth2SignInStateMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Oauth2SignInState"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("Oauth2SignInState"))
              .build();
        }
      }
    }
    return getOauth2SignInStateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> getOauth2SignInUrlMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Oauth2SignInUrl",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> getOauth2SignInUrlMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> getOauth2SignInUrlMethod;
    if ((getOauth2SignInUrlMethod = WechatGrpc.getOauth2SignInUrlMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getOauth2SignInUrlMethod = WechatGrpc.getOauth2SignInUrlMethod) == null) {
          WechatGrpc.getOauth2SignInUrlMethod = getOauth2SignInUrlMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Oauth2SignInUrl"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("Oauth2SignInUrl"))
              .build();
        }
      }
    }
    return getOauth2SignInUrlMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request,
      com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse> getSignInByOauth2Method;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignInByOauth2",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request,
      com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse> getSignInByOauth2Method() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request, com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse> getSignInByOauth2Method;
    if ((getSignInByOauth2Method = WechatGrpc.getSignInByOauth2Method) == null) {
      synchronized (WechatGrpc.class) {
        if ((getSignInByOauth2Method = WechatGrpc.getSignInByOauth2Method) == null) {
          WechatGrpc.getSignInByOauth2Method = getSignInByOauth2Method =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request, com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SignInByOauth2"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("SignInByOauth2"))
              .build();
        }
      }
    }
    return getSignInByOauth2Method;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> getAllOauth2UserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AllOauth2User",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> getAllOauth2UserMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> getAllOauth2UserMethod;
    if ((getAllOauth2UserMethod = WechatGrpc.getAllOauth2UserMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getAllOauth2UserMethod = WechatGrpc.getAllOauth2UserMethod) == null) {
          WechatGrpc.getAllOauth2UserMethod = getAllOauth2UserMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AllOauth2User"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("AllOauth2User"))
              .build();
        }
      }
    }
    return getAllOauth2UserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDestroyOauth2UserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DestroyOauth2User",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDestroyOauth2UserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getDestroyOauth2UserMethod;
    if ((getDestroyOauth2UserMethod = WechatGrpc.getDestroyOauth2UserMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getDestroyOauth2UserMethod = WechatGrpc.getDestroyOauth2UserMethod) == null) {
          WechatGrpc.getDestroyOauth2UserMethod = getDestroyOauth2UserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DestroyOauth2User"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("DestroyOauth2User"))
              .build();
        }
      }
    }
    return getDestroyOauth2UserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest,
      com.google.protobuf.Empty> getBindOauth2UserByIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "BindOauth2UserById",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest,
      com.google.protobuf.Empty> getBindOauth2UserByIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest, com.google.protobuf.Empty> getBindOauth2UserByIdMethod;
    if ((getBindOauth2UserByIdMethod = WechatGrpc.getBindOauth2UserByIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getBindOauth2UserByIdMethod = WechatGrpc.getBindOauth2UserByIdMethod) == null) {
          WechatGrpc.getBindOauth2UserByIdMethod = getBindOauth2UserByIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "BindOauth2UserById"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("BindOauth2UserById"))
              .build();
        }
      }
    }
    return getBindOauth2UserByIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest,
      com.google.protobuf.Empty> getBindOauth2UserByAccountMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "BindOauth2UserByAccount",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest,
      com.google.protobuf.Empty> getBindOauth2UserByAccountMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest, com.google.protobuf.Empty> getBindOauth2UserByAccountMethod;
    if ((getBindOauth2UserByAccountMethod = WechatGrpc.getBindOauth2UserByAccountMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getBindOauth2UserByAccountMethod = WechatGrpc.getBindOauth2UserByAccountMethod) == null) {
          WechatGrpc.getBindOauth2UserByAccountMethod = getBindOauth2UserByAccountMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "BindOauth2UserByAccount"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("BindOauth2UserByAccount"))
              .build();
        }
      }
    }
    return getBindOauth2UserByAccountMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getGetOauth2UserByIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetOauth2UserById",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getGetOauth2UserByIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getGetOauth2UserByIdMethod;
    if ((getGetOauth2UserByIdMethod = WechatGrpc.getGetOauth2UserByIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getGetOauth2UserByIdMethod = WechatGrpc.getGetOauth2UserByIdMethod) == null) {
          WechatGrpc.getGetOauth2UserByIdMethod = getGetOauth2UserByIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetOauth2UserById"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("GetOauth2UserById"))
              .build();
        }
      }
    }
    return getGetOauth2UserByIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getGetOauth2UserByOpenIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetOauth2UserByOpenId",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getGetOauth2UserByOpenIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getGetOauth2UserByOpenIdMethod;
    if ((getGetOauth2UserByOpenIdMethod = WechatGrpc.getGetOauth2UserByOpenIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getGetOauth2UserByOpenIdMethod = WechatGrpc.getGetOauth2UserByOpenIdMethod) == null) {
          WechatGrpc.getGetOauth2UserByOpenIdMethod = getGetOauth2UserByOpenIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetOauth2UserByOpenId"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("GetOauth2UserByOpenId"))
              .build();
        }
      }
    }
    return getGetOauth2UserByOpenIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> getGetOauth2UserByUnionIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetOauth2UserByUnionId",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> getGetOauth2UserByUnionIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> getGetOauth2UserByUnionIdMethod;
    if ((getGetOauth2UserByUnionIdMethod = WechatGrpc.getGetOauth2UserByUnionIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getGetOauth2UserByUnionIdMethod = WechatGrpc.getGetOauth2UserByUnionIdMethod) == null) {
          WechatGrpc.getGetOauth2UserByUnionIdMethod = getGetOauth2UserByUnionIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetOauth2UserByUnionId"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("GetOauth2UserByUnionId"))
              .build();
        }
      }
    }
    return getGetOauth2UserByUnionIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> getAllMiniProgramUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AllMiniProgramUser",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> getAllMiniProgramUserMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> getAllMiniProgramUserMethod;
    if ((getAllMiniProgramUserMethod = WechatGrpc.getAllMiniProgramUserMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getAllMiniProgramUserMethod = WechatGrpc.getAllMiniProgramUserMethod) == null) {
          WechatGrpc.getAllMiniProgramUserMethod = getAllMiniProgramUserMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AllMiniProgramUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("AllMiniProgramUser"))
              .build();
        }
      }
    }
    return getAllMiniProgramUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDestroyMiniProgramUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DestroyMiniProgramUser",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDestroyMiniProgramUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getDestroyMiniProgramUserMethod;
    if ((getDestroyMiniProgramUserMethod = WechatGrpc.getDestroyMiniProgramUserMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getDestroyMiniProgramUserMethod = WechatGrpc.getDestroyMiniProgramUserMethod) == null) {
          WechatGrpc.getDestroyMiniProgramUserMethod = getDestroyMiniProgramUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DestroyMiniProgramUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("DestroyMiniProgramUser"))
              .build();
        }
      }
    }
    return getDestroyMiniProgramUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest,
      com.google.protobuf.Empty> getBindMiniProgramUserByIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "BindMiniProgramUserById",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest,
      com.google.protobuf.Empty> getBindMiniProgramUserByIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest, com.google.protobuf.Empty> getBindMiniProgramUserByIdMethod;
    if ((getBindMiniProgramUserByIdMethod = WechatGrpc.getBindMiniProgramUserByIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getBindMiniProgramUserByIdMethod = WechatGrpc.getBindMiniProgramUserByIdMethod) == null) {
          WechatGrpc.getBindMiniProgramUserByIdMethod = getBindMiniProgramUserByIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "BindMiniProgramUserById"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("BindMiniProgramUserById"))
              .build();
        }
      }
    }
    return getBindMiniProgramUserByIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getGetMiniProgramUserByIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetMiniProgramUserById",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getGetMiniProgramUserByIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getGetMiniProgramUserByIdMethod;
    if ((getGetMiniProgramUserByIdMethod = WechatGrpc.getGetMiniProgramUserByIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getGetMiniProgramUserByIdMethod = WechatGrpc.getGetMiniProgramUserByIdMethod) == null) {
          WechatGrpc.getGetMiniProgramUserByIdMethod = getGetMiniProgramUserByIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetMiniProgramUserById"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("GetMiniProgramUserById"))
              .build();
        }
      }
    }
    return getGetMiniProgramUserByIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getGetMiniProgramUserByOpenIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetMiniProgramUserByOpenId",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getGetMiniProgramUserByOpenIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getGetMiniProgramUserByOpenIdMethod;
    if ((getGetMiniProgramUserByOpenIdMethod = WechatGrpc.getGetMiniProgramUserByOpenIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getGetMiniProgramUserByOpenIdMethod = WechatGrpc.getGetMiniProgramUserByOpenIdMethod) == null) {
          WechatGrpc.getGetMiniProgramUserByOpenIdMethod = getGetMiniProgramUserByOpenIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetMiniProgramUserByOpenId"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("GetMiniProgramUserByOpenId"))
              .build();
        }
      }
    }
    return getGetMiniProgramUserByOpenIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> getGetMiniProgramUserByUnionIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetMiniProgramUserByUnionId",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest,
      com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> getGetMiniProgramUserByUnionIdMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> getGetMiniProgramUserByUnionIdMethod;
    if ((getGetMiniProgramUserByUnionIdMethod = WechatGrpc.getGetMiniProgramUserByUnionIdMethod) == null) {
      synchronized (WechatGrpc.class) {
        if ((getGetMiniProgramUserByUnionIdMethod = WechatGrpc.getGetMiniProgramUserByUnionIdMethod) == null) {
          WechatGrpc.getGetMiniProgramUserByUnionIdMethod = getGetMiniProgramUserByUnionIdMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest, com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetMiniProgramUserByUnionId"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMethodDescriptorSupplier("GetMiniProgramUserByUnionId"))
              .build();
        }
      }
    }
    return getGetMiniProgramUserByUnionIdMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WechatStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatStub>() {
        @java.lang.Override
        public WechatStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatStub(channel, callOptions);
        }
      };
    return WechatStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WechatBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatBlockingStub>() {
        @java.lang.Override
        public WechatBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatBlockingStub(channel, callOptions);
        }
      };
    return WechatBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WechatFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatFutureStub>() {
        @java.lang.Override
        public WechatFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatFutureStub(channel, callOptions);
        }
      };
    return WechatFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void oauth2SignInState(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOauth2SignInStateMethod(), responseObserver);
    }

    /**
     */
    default void oauth2SignInUrl(com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOauth2SignInUrlMethod(), responseObserver);
    }

    /**
     */
    default void signInByOauth2(com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignInByOauth2Method(), responseObserver);
    }

    /**
     */
    default void allOauth2User(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAllOauth2UserMethod(), responseObserver);
    }

    /**
     */
    default void destroyOauth2User(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDestroyOauth2UserMethod(), responseObserver);
    }

    /**
     */
    default void bindOauth2UserById(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getBindOauth2UserByIdMethod(), responseObserver);
    }

    /**
     */
    default void bindOauth2UserByAccount(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getBindOauth2UserByAccountMethod(), responseObserver);
    }

    /**
     */
    default void getOauth2UserById(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetOauth2UserByIdMethod(), responseObserver);
    }

    /**
     */
    default void getOauth2UserByOpenId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetOauth2UserByOpenIdMethod(), responseObserver);
    }

    /**
     */
    default void getOauth2UserByUnionId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetOauth2UserByUnionIdMethod(), responseObserver);
    }

    /**
     */
    default void allMiniProgramUser(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAllMiniProgramUserMethod(), responseObserver);
    }

    /**
     */
    default void destroyMiniProgramUser(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDestroyMiniProgramUserMethod(), responseObserver);
    }

    /**
     */
    default void bindMiniProgramUserById(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getBindMiniProgramUserByIdMethod(), responseObserver);
    }

    /**
     */
    default void getMiniProgramUserById(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetMiniProgramUserByIdMethod(), responseObserver);
    }

    /**
     */
    default void getMiniProgramUserByOpenId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetMiniProgramUserByOpenIdMethod(), responseObserver);
    }

    /**
     */
    default void getMiniProgramUserByUnionId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetMiniProgramUserByUnionIdMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Wechat.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static abstract class WechatImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return WechatGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Wechat.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class WechatStub
      extends io.grpc.stub.AbstractAsyncStub<WechatStub> {
    private WechatStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatStub(channel, callOptions);
    }

    /**
     */
    public void oauth2SignInState(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOauth2SignInStateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void oauth2SignInUrl(com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOauth2SignInUrlMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void signInByOauth2(com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSignInByOauth2Method(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void allOauth2User(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAllOauth2UserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void destroyOauth2User(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDestroyOauth2UserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void bindOauth2UserById(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getBindOauth2UserByIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void bindOauth2UserByAccount(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getBindOauth2UserByAccountMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getOauth2UserById(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetOauth2UserByIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getOauth2UserByOpenId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetOauth2UserByOpenIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getOauth2UserByUnionId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetOauth2UserByUnionIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void allMiniProgramUser(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAllMiniProgramUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void destroyMiniProgramUser(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDestroyMiniProgramUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void bindMiniProgramUserById(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getBindMiniProgramUserByIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getMiniProgramUserById(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetMiniProgramUserByIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getMiniProgramUserByOpenId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetMiniProgramUserByOpenIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getMiniProgramUserByUnionId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetMiniProgramUserByUnionIdMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Wechat.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class WechatBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<WechatBlockingStub> {
    private WechatBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse oauth2SignInState(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOauth2SignInStateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse oauth2SignInUrl(com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOauth2SignInUrlMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse signInByOauth2(com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignInByOauth2Method(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse allOauth2User(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAllOauth2UserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty destroyOauth2User(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDestroyOauth2UserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty bindOauth2UserById(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getBindOauth2UserByIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty bindOauth2UserByAccount(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getBindOauth2UserByAccountMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item getOauth2UserById(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetOauth2UserByIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item getOauth2UserByOpenId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetOauth2UserByOpenIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse getOauth2UserByUnionId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetOauth2UserByUnionIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse allMiniProgramUser(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAllMiniProgramUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty destroyMiniProgramUser(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDestroyMiniProgramUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty bindMiniProgramUserById(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getBindMiniProgramUserByIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item getMiniProgramUserById(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetMiniProgramUserByIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item getMiniProgramUserByOpenId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetMiniProgramUserByOpenIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse getMiniProgramUserByUnionId(com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetMiniProgramUserByUnionIdMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Wechat.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class WechatFutureStub
      extends io.grpc.stub.AbstractFutureStub<WechatFutureStub> {
    private WechatFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse> oauth2SignInState(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOauth2SignInStateMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> oauth2SignInUrl(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOauth2SignInUrlMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse> signInByOauth2(
        com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSignInByOauth2Method(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> allOauth2User(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAllOauth2UserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> destroyOauth2User(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDestroyOauth2UserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> bindOauth2UserById(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getBindOauth2UserByIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> bindOauth2UserByAccount(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getBindOauth2UserByAccountMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getOauth2UserById(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetOauth2UserByIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item> getOauth2UserByOpenId(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetOauth2UserByOpenIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse> getOauth2UserByUnionId(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetOauth2UserByUnionIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> allMiniProgramUser(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAllMiniProgramUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> destroyMiniProgramUser(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDestroyMiniProgramUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> bindMiniProgramUserById(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getBindMiniProgramUserByIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getMiniProgramUserById(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetMiniProgramUserByIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item> getMiniProgramUserByOpenId(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetMiniProgramUserByOpenIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse> getMiniProgramUserByUnionId(
        com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetMiniProgramUserByUnionIdMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_OAUTH2SIGN_IN_STATE = 0;
  private static final int METHODID_OAUTH2SIGN_IN_URL = 1;
  private static final int METHODID_SIGN_IN_BY_OAUTH2 = 2;
  private static final int METHODID_ALL_OAUTH2USER = 3;
  private static final int METHODID_DESTROY_OAUTH2USER = 4;
  private static final int METHODID_BIND_OAUTH2USER_BY_ID = 5;
  private static final int METHODID_BIND_OAUTH2USER_BY_ACCOUNT = 6;
  private static final int METHODID_GET_OAUTH2USER_BY_ID = 7;
  private static final int METHODID_GET_OAUTH2USER_BY_OPEN_ID = 8;
  private static final int METHODID_GET_OAUTH2USER_BY_UNION_ID = 9;
  private static final int METHODID_ALL_MINI_PROGRAM_USER = 10;
  private static final int METHODID_DESTROY_MINI_PROGRAM_USER = 11;
  private static final int METHODID_BIND_MINI_PROGRAM_USER_BY_ID = 12;
  private static final int METHODID_GET_MINI_PROGRAM_USER_BY_ID = 13;
  private static final int METHODID_GET_MINI_PROGRAM_USER_BY_OPEN_ID = 14;
  private static final int METHODID_GET_MINI_PROGRAM_USER_BY_UNION_ID = 15;

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
        case METHODID_OAUTH2SIGN_IN_STATE:
          serviceImpl.oauth2SignInState((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse>) responseObserver);
          break;
        case METHODID_OAUTH2SIGN_IN_URL:
          serviceImpl.oauth2SignInUrl((com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse>) responseObserver);
          break;
        case METHODID_SIGN_IN_BY_OAUTH2:
          serviceImpl.signInByOauth2((com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse>) responseObserver);
          break;
        case METHODID_ALL_OAUTH2USER:
          serviceImpl.allOauth2User((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse>) responseObserver);
          break;
        case METHODID_DESTROY_OAUTH2USER:
          serviceImpl.destroyOauth2User((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_BIND_OAUTH2USER_BY_ID:
          serviceImpl.bindOauth2UserById((com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_BIND_OAUTH2USER_BY_ACCOUNT:
          serviceImpl.bindOauth2UserByAccount((com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_OAUTH2USER_BY_ID:
          serviceImpl.getOauth2UserById((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item>) responseObserver);
          break;
        case METHODID_GET_OAUTH2USER_BY_OPEN_ID:
          serviceImpl.getOauth2UserByOpenId((com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item>) responseObserver);
          break;
        case METHODID_GET_OAUTH2USER_BY_UNION_ID:
          serviceImpl.getOauth2UserByUnionId((com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse>) responseObserver);
          break;
        case METHODID_ALL_MINI_PROGRAM_USER:
          serviceImpl.allMiniProgramUser((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse>) responseObserver);
          break;
        case METHODID_DESTROY_MINI_PROGRAM_USER:
          serviceImpl.destroyMiniProgramUser((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_BIND_MINI_PROGRAM_USER_BY_ID:
          serviceImpl.bindMiniProgramUserById((com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_MINI_PROGRAM_USER_BY_ID:
          serviceImpl.getMiniProgramUserById((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item>) responseObserver);
          break;
        case METHODID_GET_MINI_PROGRAM_USER_BY_OPEN_ID:
          serviceImpl.getMiniProgramUserByOpenId((com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item>) responseObserver);
          break;
        case METHODID_GET_MINI_PROGRAM_USER_BY_UNION_ID:
          serviceImpl.getMiniProgramUserByUnionId((com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse>) responseObserver);
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
          getOauth2SignInStateMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInStateResponse>(
                service, METHODID_OAUTH2SIGN_IN_STATE)))
        .addMethod(
          getOauth2SignInUrlMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatOauth2SignInUrlRequest,
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse>(
                service, METHODID_OAUTH2SIGN_IN_URL)))
        .addMethod(
          getSignInByOauth2Method(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.SignInByWechatOauth2Request,
              com.github.saturn_xiv.palm.plugins.nut.v1.UserSignInResponse>(
                service, METHODID_SIGN_IN_BY_OAUTH2)))
        .addMethod(
          getAllOauth2UserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse>(
                service, METHODID_ALL_OAUTH2USER)))
        .addMethod(
          getDestroyOauth2UserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DESTROY_OAUTH2USER)))
        .addMethod(
          getBindOauth2UserByIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_BIND_OAUTH2USER_BY_ID)))
        .addMethod(
          getBindOauth2UserByAccountMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByAccountRequest,
              com.google.protobuf.Empty>(
                service, METHODID_BIND_OAUTH2USER_BY_ACCOUNT)))
        .addMethod(
          getGetOauth2UserByIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item>(
                service, METHODID_GET_OAUTH2USER_BY_ID)))
        .addMethod(
          getGetOauth2UserByOpenIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse.Item>(
                service, METHODID_GET_OAUTH2USER_BY_OPEN_ID)))
        .addMethod(
          getGetOauth2UserByUnionIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllOauth2UserResponse>(
                service, METHODID_GET_OAUTH2USER_BY_UNION_ID)))
        .addMethod(
          getAllMiniProgramUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse>(
                service, METHODID_ALL_MINI_PROGRAM_USER)))
        .addMethod(
          getDestroyMiniProgramUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DESTROY_MINI_PROGRAM_USER)))
        .addMethod(
          getBindMiniProgramUserByIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserBindByIdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_BIND_MINI_PROGRAM_USER_BY_ID)))
        .addMethod(
          getGetMiniProgramUserByIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item>(
                service, METHODID_GET_MINI_PROGRAM_USER_BY_ID)))
        .addMethod(
          getGetMiniProgramUserByOpenIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByOpenIdRequest,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse.Item>(
                service, METHODID_GET_MINI_PROGRAM_USER_BY_OPEN_ID)))
        .addMethod(
          getGetMiniProgramUserByUnionIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatUserQueryByUnionIdRequest,
              com.github.saturn_xiv.palm.plugins.nut.v1.WechatAllMiniProgramUserResponse>(
                service, METHODID_GET_MINI_PROGRAM_USER_BY_UNION_ID)))
        .build();
  }

  private static abstract class WechatBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WechatBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Wechat");
    }
  }

  private static final class WechatFileDescriptorSupplier
      extends WechatBaseDescriptorSupplier {
    WechatFileDescriptorSupplier() {}
  }

  private static final class WechatMethodDescriptorSupplier
      extends WechatBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    WechatMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (WechatGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WechatFileDescriptorSupplier())
              .addMethod(getOauth2SignInStateMethod())
              .addMethod(getOauth2SignInUrlMethod())
              .addMethod(getSignInByOauth2Method())
              .addMethod(getAllOauth2UserMethod())
              .addMethod(getDestroyOauth2UserMethod())
              .addMethod(getBindOauth2UserByIdMethod())
              .addMethod(getBindOauth2UserByAccountMethod())
              .addMethod(getGetOauth2UserByIdMethod())
              .addMethod(getGetOauth2UserByOpenIdMethod())
              .addMethod(getGetOauth2UserByUnionIdMethod())
              .addMethod(getAllMiniProgramUserMethod())
              .addMethod(getDestroyMiniProgramUserMethod())
              .addMethod(getBindMiniProgramUserByIdMethod())
              .addMethod(getGetMiniProgramUserByIdMethod())
              .addMethod(getGetMiniProgramUserByOpenIdMethod())
              .addMethod(getGetMiniProgramUserByUnionIdMethod())
              .build();
        }
      }
    }
    return result;
  }
}
