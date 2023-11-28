package com.github.saturn_xiv.palm.plugins.ops.router.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: ops-router.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class UserGrpc {

  private UserGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.ops.router.v1.User";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> getSignInMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignIn",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> getSignInMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> getSignInMethod;
    if ((getSignInMethod = UserGrpc.getSignInMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getSignInMethod = UserGrpc.getSignInMethod) == null) {
          UserGrpc.getSignInMethod = getSignInMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SignIn"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("SignIn"))
              .build();
        }
      }
    }
    return getSignInMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Duration,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> getRefreshMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Refresh",
      requestType = com.google.protobuf.Duration.class,
      responseType = com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Duration,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> getRefreshMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Duration, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> getRefreshMethod;
    if ((getRefreshMethod = UserGrpc.getRefreshMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getRefreshMethod = UserGrpc.getRefreshMethod) == null) {
          UserGrpc.getRefreshMethod = getRefreshMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Duration, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Refresh"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Duration.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Refresh"))
              .build();
        }
      }
    }
    return getRefreshMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Update",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest, com.google.protobuf.Empty> getUpdateMethod;
    if ((getUpdateMethod = UserGrpc.getUpdateMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getUpdateMethod = UserGrpc.getUpdateMethod) == null) {
          UserGrpc.getUpdateMethod = getUpdateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Update"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Update"))
              .build();
        }
      }
    }
    return getUpdateMethod;
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

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse> getLogsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Logs",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse> getLogsMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse> getLogsMethod;
    if ((getLogsMethod = UserGrpc.getLogsMethod) == null) {
      synchronized (UserGrpc.class) {
        if ((getLogsMethod = UserGrpc.getLogsMethod) == null) {
          UserGrpc.getLogsMethod = getLogsMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Logs"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new UserMethodDescriptorSupplier("Logs"))
              .build();
        }
      }
    }
    return getLogsMethod;
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
    default void signIn(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignInMethod(), responseObserver);
    }

    /**
     */
    default void refresh(com.google.protobuf.Duration request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRefreshMethod(), responseObserver);
    }

    /**
     */
    default void update(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateMethod(), responseObserver);
    }

    /**
     */
    default void signOut(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignOutMethod(), responseObserver);
    }

    /**
     */
    default void logs(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLogsMethod(), responseObserver);
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
    public void signIn(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void refresh(com.google.protobuf.Duration request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRefreshMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void update(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateMethod(), getCallOptions()), request, responseObserver);
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
    public void logs(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLogsMethod(), getCallOptions()), request, responseObserver);
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
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse signIn(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignInMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse refresh(com.google.protobuf.Duration request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRefreshMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty update(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty signOut(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignOutMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse logs(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLogsMethod(), getCallOptions(), request);
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
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> signIn(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse> refresh(
        com.google.protobuf.Duration request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRefreshMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> update(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateMethod(), getCallOptions()), request);
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
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse> logs(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLogsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SIGN_IN = 0;
  private static final int METHODID_REFRESH = 1;
  private static final int METHODID_UPDATE = 2;
  private static final int METHODID_SIGN_OUT = 3;
  private static final int METHODID_LOGS = 4;

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
          serviceImpl.signIn((com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse>) responseObserver);
          break;
        case METHODID_REFRESH:
          serviceImpl.refresh((com.google.protobuf.Duration) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse>) responseObserver);
          break;
        case METHODID_UPDATE:
          serviceImpl.update((com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SIGN_OUT:
          serviceImpl.signOut((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_LOGS:
          serviceImpl.logs((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse>) responseObserver);
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
              com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInRequest,
              com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse>(
                service, METHODID_SIGN_IN)))
        .addMethod(
          getRefreshMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Duration,
              com.github.saturn_xiv.palm.plugins.ops.router.v1.UserSignInResponse>(
                service, METHODID_REFRESH)))
        .addMethod(
          getUpdateMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE)))
        .addMethod(
          getSignOutMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.google.protobuf.Empty>(
                service, METHODID_SIGN_OUT)))
        .addMethod(
          getLogsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.ops.router.v1.UserLogsResponse>(
                service, METHODID_LOGS)))
        .build();
  }

  private static abstract class UserBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    UserBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.getDescriptor();
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
              .addMethod(getRefreshMethod())
              .addMethod(getUpdateMethod())
              .addMethod(getSignOutMethod())
              .addMethod(getLogsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
