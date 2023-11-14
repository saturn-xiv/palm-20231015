package com.github.saturn_xiv.palm.plugins.auth.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: auth.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class UserGrpc {

  private UserGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.auth.v1.User";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> getSignInMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignIn",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> getSignInMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest, com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> getSignInMethod;
    if ((getSignInMethod = UserGrpc.getSignInMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getSignInMethod = UserGrpc.getSignInMethod) == null) {
          UserGrpc.getSignInMethod = getSignInMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest, com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SignIn"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("SignIn"))
              .build();
        }
      }
    }
    return getSignInMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest,
      com.google.protobuf.Empty> getSignUpMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignUp",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest,
      com.google.protobuf.Empty> getSignUpMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest, com.google.protobuf.Empty> getSignUpMethod;
    if ((getSignUpMethod = UserGrpc.getSignUpMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getSignUpMethod = UserGrpc.getSignUpMethod) == null) {
          UserGrpc.getSignUpMethod = getSignUpMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SignUp"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("SignUp"))
              .build();
        }
      }
    }
    return getSignUpMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
      com.google.protobuf.Empty> getConfirmByEmailMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ConfirmByEmail",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
      com.google.protobuf.Empty> getConfirmByEmailMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest, com.google.protobuf.Empty> getConfirmByEmailMethod;
    if ((getConfirmByEmailMethod = UserGrpc.getConfirmByEmailMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getConfirmByEmailMethod = UserGrpc.getConfirmByEmailMethod) == null) {
          UserGrpc.getConfirmByEmailMethod = getConfirmByEmailMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ConfirmByEmail"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("ConfirmByEmail"))
              .build();
        }
      }
    }
    return getConfirmByEmailMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest,
      com.google.protobuf.Empty> getConfirmByTokenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ConfirmByToken",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest,
      com.google.protobuf.Empty> getConfirmByTokenMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest, com.google.protobuf.Empty> getConfirmByTokenMethod;
    if ((getConfirmByTokenMethod = UserGrpc.getConfirmByTokenMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getConfirmByTokenMethod = UserGrpc.getConfirmByTokenMethod) == null) {
          UserGrpc.getConfirmByTokenMethod = getConfirmByTokenMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ConfirmByToken"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("ConfirmByToken"))
              .build();
        }
      }
    }
    return getConfirmByTokenMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
      com.google.protobuf.Empty> getUnlockByEmailMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UnlockByEmail",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
      com.google.protobuf.Empty> getUnlockByEmailMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest, com.google.protobuf.Empty> getUnlockByEmailMethod;
    if ((getUnlockByEmailMethod = UserGrpc.getUnlockByEmailMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getUnlockByEmailMethod = UserGrpc.getUnlockByEmailMethod) == null) {
          UserGrpc.getUnlockByEmailMethod = getUnlockByEmailMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UnlockByEmail"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("UnlockByEmail"))
              .build();
        }
      }
    }
    return getUnlockByEmailMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest,
      com.google.protobuf.Empty> getUnlockByTokenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UnlockByToken",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest,
      com.google.protobuf.Empty> getUnlockByTokenMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest, com.google.protobuf.Empty> getUnlockByTokenMethod;
    if ((getUnlockByTokenMethod = UserGrpc.getUnlockByTokenMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getUnlockByTokenMethod = UserGrpc.getUnlockByTokenMethod) == null) {
          UserGrpc.getUnlockByTokenMethod = getUnlockByTokenMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UnlockByToken"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("UnlockByToken"))
              .build();
        }
      }
    }
    return getUnlockByTokenMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
      com.google.protobuf.Empty> getForgotPasswordMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ForgotPassword",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
      com.google.protobuf.Empty> getForgotPasswordMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest, com.google.protobuf.Empty> getForgotPasswordMethod;
    if ((getForgotPasswordMethod = UserGrpc.getForgotPasswordMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getForgotPasswordMethod = UserGrpc.getForgotPasswordMethod) == null) {
          UserGrpc.getForgotPasswordMethod = getForgotPasswordMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ForgotPassword"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("ForgotPassword"))
              .build();
        }
      }
    }
    return getForgotPasswordMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest,
      com.google.protobuf.Empty> getResetPasswordMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ResetPassword",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest,
      com.google.protobuf.Empty> getResetPasswordMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest, com.google.protobuf.Empty> getResetPasswordMethod;
    if ((getResetPasswordMethod = UserGrpc.getResetPasswordMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getResetPasswordMethod = UserGrpc.getResetPasswordMethod) == null) {
          UserGrpc.getResetPasswordMethod = getResetPasswordMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ResetPassword"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("ResetPassword"))
              .build();
        }
      }
    }
    return getResetPasswordMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Duration,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> getRefreshMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Refresh",
      requestType = com.google.protobuf.Duration.class,
      responseType = com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Duration,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> getRefreshMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Duration, com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> getRefreshMethod;
    if ((getRefreshMethod = UserGrpc.getRefreshMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getRefreshMethod = UserGrpc.getRefreshMethod) == null) {
          UserGrpc.getRefreshMethod = getRefreshMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Duration, com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Refresh"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Duration.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Refresh"))
              .build();
        }
      }
    }
    return getRefreshMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse> getLogsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Logs",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.Pager.class,
      responseType = com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse> getLogsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse> getLogsMethod;
    if ((getLogsMethod = UserGrpc.getLogsMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getLogsMethod = UserGrpc.getLogsMethod) == null) {
          UserGrpc.getLogsMethod = getLogsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Logs"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.Pager.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Logs"))
              .build();
        }
      }
    }
    return getLogsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest,
      com.google.protobuf.Empty> getSetProfileMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetProfile",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest,
      com.google.protobuf.Empty> getSetProfileMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest, com.google.protobuf.Empty> getSetProfileMethod;
    if ((getSetProfileMethod = UserGrpc.getSetProfileMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getSetProfileMethod = UserGrpc.getSetProfileMethod) == null) {
          UserGrpc.getSetProfileMethod = getSetProfileMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetProfile"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("SetProfile"))
              .build();
        }
      }
    }
    return getSetProfileMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest,
      com.google.protobuf.Empty> getChangePasswordMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ChangePassword",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest,
      com.google.protobuf.Empty> getChangePasswordMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest, com.google.protobuf.Empty> getChangePasswordMethod;
    if ((getChangePasswordMethod = UserGrpc.getChangePasswordMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getChangePasswordMethod = UserGrpc.getChangePasswordMethod) == null) {
          UserGrpc.getChangePasswordMethod = getChangePasswordMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ChangePassword"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("ChangePassword"))
              .build();
        }
      }
    }
    return getChangePasswordMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getSignOutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignOut",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getSignOutMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.google.protobuf.Empty> getSignOutMethod;
    if ((getSignOutMethod = UserGrpc.getSignOutMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getSignOutMethod = UserGrpc.getSignOutMethod) == null) {
          UserGrpc.getSignOutMethod = getSignOutMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SignOut"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("SignOut"))
              .build();
        }
      }
    }
    return getSignOutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse> getIndexMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Index",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.Pager.class,
      responseType = com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse> getIndexMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse> getIndexMethod;
    if ((getIndexMethod = UserGrpc.getIndexMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getIndexMethod = UserGrpc.getIndexMethod) == null) {
          UserGrpc.getIndexMethod = getIndexMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Index"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.Pager.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Index"))
              .build();
        }
      }
    }
    return getIndexMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item> getShowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Show",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item> getShowMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item> getShowMethod;
    if ((getShowMethod = UserGrpc.getShowMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getShowMethod = UserGrpc.getShowMethod) == null) {
          UserGrpc.getShowMethod = getShowMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Show"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Show"))
              .build();
        }
      }
    }
    return getShowMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDisableMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Disable",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDisableMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getDisableMethod;
    if ((getDisableMethod = UserGrpc.getDisableMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getDisableMethod = UserGrpc.getDisableMethod) == null) {
          UserGrpc.getDisableMethod = getDisableMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Disable"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Disable"))
              .build();
        }
      }
    }
    return getDisableMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getEnableMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Enable",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getEnableMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getEnableMethod;
    if ((getEnableMethod = UserGrpc.getEnableMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getEnableMethod = UserGrpc.getEnableMethod) == null) {
          UserGrpc.getEnableMethod = getEnableMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Enable"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Enable"))
              .build();
        }
      }
    }
    return getEnableMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getLockMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Lock",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getLockMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getLockMethod;
    if ((getLockMethod = UserGrpc.getLockMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getLockMethod = UserGrpc.getLockMethod) == null) {
          UserGrpc.getLockMethod = getLockMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Lock"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Lock"))
              .build();
        }
      }
    }
    return getLockMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getUnlockMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Unlock",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getUnlockMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getUnlockMethod;
    if ((getUnlockMethod = UserGrpc.getUnlockMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getUnlockMethod = UserGrpc.getUnlockMethod) == null) {
          UserGrpc.getUnlockMethod = getUnlockMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Unlock"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Unlock"))
              .build();
        }
      }
    }
    return getUnlockMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getConfirmMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Confirm",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getConfirmMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getConfirmMethod;
    if ((getConfirmMethod = UserGrpc.getConfirmMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getConfirmMethod = UserGrpc.getConfirmMethod) == null) {
          UserGrpc.getConfirmMethod = getConfirmMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Confirm"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Confirm"))
              .build();
        }
      }
    }
    return getConfirmMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDeleteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Delete",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDeleteMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getDeleteMethod;
    if ((getDeleteMethod = UserGrpc.getDeleteMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getDeleteMethod = UserGrpc.getDeleteMethod) == null) {
          UserGrpc.getDeleteMethod = getDeleteMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Delete"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Delete"))
              .build();
        }
      }
    }
    return getDeleteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest,
      com.google.protobuf.Empty> getSetPasswordMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetPassword",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest,
      com.google.protobuf.Empty> getSetPasswordMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest, com.google.protobuf.Empty> getSetPasswordMethod;
    if ((getSetPasswordMethod = UserGrpc.getSetPasswordMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getSetPasswordMethod = UserGrpc.getSetPasswordMethod) == null) {
          UserGrpc.getSetPasswordMethod = getSetPasswordMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetPassword"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("SetPassword"))
              .build();
        }
      }
    }
    return getSetPasswordMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static UserStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<UserStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<UserStub>() {
        @java.lang.Override
        public UserStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new UserStub(channel, callOptions);
        }
      };
    return UserStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static UserBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<UserBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<UserBlockingStub>() {
        @java.lang.Override
        public UserBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new UserBlockingStub(channel, callOptions);
        }
      };
    return UserBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static UserFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<UserFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<UserFutureStub>() {
        @java.lang.Override
        public UserFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new UserFutureStub(channel, callOptions);
        }
      };
    return UserFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void signIn(com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignInMethod(), responseObserver);
    }

    /**
     */
    default void signUp(com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignUpMethod(), responseObserver);
    }

    /**
     */
    default void confirmByEmail(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getConfirmByEmailMethod(), responseObserver);
    }

    /**
     */
    default void confirmByToken(com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getConfirmByTokenMethod(), responseObserver);
    }

    /**
     */
    default void unlockByEmail(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUnlockByEmailMethod(), responseObserver);
    }

    /**
     */
    default void unlockByToken(com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUnlockByTokenMethod(), responseObserver);
    }

    /**
     */
    default void forgotPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getForgotPasswordMethod(), responseObserver);
    }

    /**
     */
    default void resetPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getResetPasswordMethod(), responseObserver);
    }

    /**
     */
    default void refresh(com.google.protobuf.Duration request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRefreshMethod(), responseObserver);
    }

    /**
     */
    default void logs(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLogsMethod(), responseObserver);
    }

    /**
     */
    default void setProfile(com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetProfileMethod(), responseObserver);
    }

    /**
     */
    default void changePassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getChangePasswordMethod(), responseObserver);
    }

    /**
     */
    default void signOut(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignOutMethod(), responseObserver);
    }

    /**
     */
    default void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexMethod(), responseObserver);
    }

    /**
     */
    default void show(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getShowMethod(), responseObserver);
    }

    /**
     */
    default void disable(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDisableMethod(), responseObserver);
    }

    /**
     */
    default void enable(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getEnableMethod(), responseObserver);
    }

    /**
     */
    default void lock(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLockMethod(), responseObserver);
    }

    /**
     */
    default void unlock(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUnlockMethod(), responseObserver);
    }

    /**
     */
    default void confirm(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getConfirmMethod(), responseObserver);
    }

    /**
     */
    default void delete(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteMethod(), responseObserver);
    }

    /**
     */
    default void setPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetPasswordMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service User.
   */
  public static abstract class UserImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return UserGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service User.
   */
  public static final class UserStub
      extends io.grpc.stub.AbstractAsyncStub<UserStub> {
    private UserStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new UserStub(channel, callOptions);
    }

    /**
     */
    public void signIn(com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void signUp(com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSignUpMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void confirmByEmail(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getConfirmByEmailMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void confirmByToken(com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getConfirmByTokenMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void unlockByEmail(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUnlockByEmailMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void unlockByToken(com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUnlockByTokenMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void forgotPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getForgotPasswordMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void resetPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getResetPasswordMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void refresh(com.google.protobuf.Duration request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRefreshMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void logs(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLogsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setProfile(com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetProfileMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void changePassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getChangePasswordMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void signOut(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSignOutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void show(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getShowMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void disable(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDisableMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void enable(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getEnableMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void lock(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLockMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void unlock(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUnlockMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void confirm(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getConfirmMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void delete(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetPasswordMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service User.
   */
  public static final class UserBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<UserBlockingStub> {
    private UserBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new UserBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse signIn(com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignInMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty signUp(com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignUpMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty confirmByEmail(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getConfirmByEmailMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty confirmByToken(com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getConfirmByTokenMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty unlockByEmail(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUnlockByEmailMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty unlockByToken(com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUnlockByTokenMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty forgotPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getForgotPasswordMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty resetPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getResetPasswordMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse refresh(com.google.protobuf.Duration request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRefreshMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse logs(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLogsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setProfile(com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetProfileMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty changePassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getChangePasswordMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty signOut(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignOutMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item show(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getShowMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty disable(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDisableMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty enable(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getEnableMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty lock(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLockMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty unlock(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUnlockMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty confirm(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getConfirmMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty delete(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setPassword(com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetPasswordMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service User.
   */
  public static final class UserFutureStub
      extends io.grpc.stub.AbstractFutureStub<UserFutureStub> {
    private UserFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new UserFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> signIn(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> signUp(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSignUpMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> confirmByEmail(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getConfirmByEmailMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> confirmByToken(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getConfirmByTokenMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> unlockByEmail(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUnlockByEmailMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> unlockByToken(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUnlockByTokenMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> forgotPassword(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getForgotPasswordMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> resetPassword(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getResetPasswordMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse> refresh(
        com.google.protobuf.Duration request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRefreshMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse> logs(
        com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLogsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setProfile(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetProfileMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> changePassword(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getChangePasswordMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> signOut(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSignOutMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse> index(
        com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item> show(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getShowMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> disable(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDisableMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> enable(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getEnableMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> lock(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLockMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> unlock(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUnlockMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> confirm(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getConfirmMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> delete(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setPassword(
        com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetPasswordMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SIGN_IN = 0;
  private static final int METHODID_SIGN_UP = 1;
  private static final int METHODID_CONFIRM_BY_EMAIL = 2;
  private static final int METHODID_CONFIRM_BY_TOKEN = 3;
  private static final int METHODID_UNLOCK_BY_EMAIL = 4;
  private static final int METHODID_UNLOCK_BY_TOKEN = 5;
  private static final int METHODID_FORGOT_PASSWORD = 6;
  private static final int METHODID_RESET_PASSWORD = 7;
  private static final int METHODID_REFRESH = 8;
  private static final int METHODID_LOGS = 9;
  private static final int METHODID_SET_PROFILE = 10;
  private static final int METHODID_CHANGE_PASSWORD = 11;
  private static final int METHODID_SIGN_OUT = 12;
  private static final int METHODID_INDEX = 13;
  private static final int METHODID_SHOW = 14;
  private static final int METHODID_DISABLE = 15;
  private static final int METHODID_ENABLE = 16;
  private static final int METHODID_LOCK = 17;
  private static final int METHODID_UNLOCK = 18;
  private static final int METHODID_CONFIRM = 19;
  private static final int METHODID_DELETE = 20;
  private static final int METHODID_SET_PASSWORD = 21;

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
        case METHODID_SIGN_IN:
          serviceImpl.signIn((com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse>) responseObserver);
          break;
        case METHODID_SIGN_UP:
          serviceImpl.signUp((com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_CONFIRM_BY_EMAIL:
          serviceImpl.confirmByEmail((com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_CONFIRM_BY_TOKEN:
          serviceImpl.confirmByToken((com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UNLOCK_BY_EMAIL:
          serviceImpl.unlockByEmail((com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UNLOCK_BY_TOKEN:
          serviceImpl.unlockByToken((com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_FORGOT_PASSWORD:
          serviceImpl.forgotPassword((com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_RESET_PASSWORD:
          serviceImpl.resetPassword((com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_REFRESH:
          serviceImpl.refresh((com.google.protobuf.Duration) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse>) responseObserver);
          break;
        case METHODID_LOGS:
          serviceImpl.logs((com.github.saturn_xiv.palm.plugins.nut.v1.Pager) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse>) responseObserver);
          break;
        case METHODID_SET_PROFILE:
          serviceImpl.setProfile((com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_CHANGE_PASSWORD:
          serviceImpl.changePassword((com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SIGN_OUT:
          serviceImpl.signOut((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_INDEX:
          serviceImpl.index((com.github.saturn_xiv.palm.plugins.nut.v1.Pager) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse>) responseObserver);
          break;
        case METHODID_SHOW:
          serviceImpl.show((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item>) responseObserver);
          break;
        case METHODID_DISABLE:
          serviceImpl.disable((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_ENABLE:
          serviceImpl.enable((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_LOCK:
          serviceImpl.lock((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UNLOCK:
          serviceImpl.unlock((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_CONFIRM:
          serviceImpl.confirm((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE:
          serviceImpl.delete((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_PASSWORD:
          serviceImpl.setPassword((com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
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
          getSignInMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInRequest,
              com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse>(
                service, METHODID_SIGN_IN)))
        .addMethod(
          getSignUpMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserSignUpRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SIGN_UP)))
        .addMethod(
          getConfirmByEmailMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CONFIRM_BY_EMAIL)))
        .addMethod(
          getConfirmByTokenMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CONFIRM_BY_TOKEN)))
        .addMethod(
          getUnlockByEmailMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UNLOCK_BY_EMAIL)))
        .addMethod(
          getUnlockByTokenMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserTokenRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UNLOCK_BY_TOKEN)))
        .addMethod(
          getForgotPasswordMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserQueryRequest,
              com.google.protobuf.Empty>(
                service, METHODID_FORGOT_PASSWORD)))
        .addMethod(
          getResetPasswordMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserResetPasswordRequest,
              com.google.protobuf.Empty>(
                service, METHODID_RESET_PASSWORD)))
        .addMethod(
          getRefreshMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Duration,
              com.github.saturn_xiv.palm.plugins.auth.v1.UserSignInResponse>(
                service, METHODID_REFRESH)))
        .addMethod(
          getLogsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
              com.github.saturn_xiv.palm.plugins.auth.v1.UserLogsResponse>(
                service, METHODID_LOGS)))
        .addMethod(
          getSetProfileMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserSetProfileRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_PROFILE)))
        .addMethod(
          getChangePasswordMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserChangePasswordRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CHANGE_PASSWORD)))
        .addMethod(
          getSignOutMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.google.protobuf.Empty>(
                service, METHODID_SIGN_OUT)))
        .addMethod(
          getIndexMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
              com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse>(
                service, METHODID_INDEX)))
        .addMethod(
          getShowMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.github.saturn_xiv.palm.plugins.auth.v1.UserIndexResponse.Item>(
                service, METHODID_SHOW)))
        .addMethod(
          getDisableMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DISABLE)))
        .addMethod(
          getEnableMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_ENABLE)))
        .addMethod(
          getLockMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_LOCK)))
        .addMethod(
          getUnlockMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UNLOCK)))
        .addMethod(
          getConfirmMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CONFIRM)))
        .addMethod(
          getDeleteMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE)))
        .addMethod(
          getSetPasswordMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.UserSetPasswordRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_PASSWORD)))
        .build();
  }

  private static abstract class UserBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    UserBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("User");
    }
  }

  private static final class UserFileDescriptorSupplier
      extends UserBaseDescriptorSupplier {
    UserFileDescriptorSupplier() {}
  }

  private static final class UserMethodDescriptorSupplier
      extends UserBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    UserMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (UserGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new UserFileDescriptorSupplier())
              .addMethod(getSignInMethod())
              .addMethod(getSignUpMethod())
              .addMethod(getConfirmByEmailMethod())
              .addMethod(getConfirmByTokenMethod())
              .addMethod(getUnlockByEmailMethod())
              .addMethod(getUnlockByTokenMethod())
              .addMethod(getForgotPasswordMethod())
              .addMethod(getResetPasswordMethod())
              .addMethod(getRefreshMethod())
              .addMethod(getLogsMethod())
              .addMethod(getSetProfileMethod())
              .addMethod(getChangePasswordMethod())
              .addMethod(getSignOutMethod())
              .addMethod(getIndexMethod())
              .addMethod(getShowMethod())
              .addMethod(getDisableMethod())
              .addMethod(getEnableMethod())
              .addMethod(getLockMethod())
              .addMethod(getUnlockMethod())
              .addMethod(getConfirmMethod())
              .addMethod(getDeleteMethod())
              .addMethod(getSetPasswordMethod())
              .build();
        }
      }
    }
    return result;
  }
}
