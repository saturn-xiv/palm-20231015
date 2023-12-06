package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.60.0)",
    comments = "Source: metasequoia.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class SettingGrpc {

  private SettingGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.metasequoia.v1.Setting";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest,
      com.google.protobuf.Empty> getSetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Set",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest,
      com.google.protobuf.Empty> getSetMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest, com.google.protobuf.Empty> getSetMethod;
    if ((getSetMethod = SettingGrpc.getSetMethod) == null) {
      synchronized (SettingGrpc.class) {
        if ((getSetMethod = SettingGrpc.getSetMethod) == null) {
          SettingGrpc.getSetMethod = getSetMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Set"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new SettingMethodDescriptorSupplier("Set"))
              .build();
        }
      }
    }
    return getSetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item> getGetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Get",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item> getGetMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item> getGetMethod;
    if ((getGetMethod = SettingGrpc.getGetMethod) == null) {
      synchronized (SettingGrpc.class) {
        if ((getGetMethod = SettingGrpc.getGetMethod) == null) {
          SettingGrpc.getGetMethod = getGetMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Get"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item.getDefaultInstance()))
              .setSchemaDescriptor(new SettingMethodDescriptorSupplier("Get"))
              .build();
        }
      }
    }
    return getGetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getByUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ByUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getByUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getByUserMethod;
    if ((getByUserMethod = SettingGrpc.getByUserMethod) == null) {
      synchronized (SettingGrpc.class) {
        if ((getByUserMethod = SettingGrpc.getByUserMethod) == null) {
          SettingGrpc.getByUserMethod = getByUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ByUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SettingMethodDescriptorSupplier("ByUser"))
              .build();
        }
      }
    }
    return getByUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getMyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "My",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getMyMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getMyMethod;
    if ((getMyMethod = SettingGrpc.getMyMethod) == null) {
      synchronized (SettingGrpc.class) {
        if ((getMyMethod = SettingGrpc.getMyMethod) == null) {
          SettingGrpc.getMyMethod = getMyMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "My"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SettingMethodDescriptorSupplier("My"))
              .build();
        }
      }
    }
    return getMyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getGlobalMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Global",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getGlobalMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> getGlobalMethod;
    if ((getGlobalMethod = SettingGrpc.getGlobalMethod) == null) {
      synchronized (SettingGrpc.class) {
        if ((getGlobalMethod = SettingGrpc.getGlobalMethod) == null) {
          SettingGrpc.getGlobalMethod = getGlobalMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Global"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SettingMethodDescriptorSupplier("Global"))
              .build();
        }
      }
    }
    return getGlobalMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SettingStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SettingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SettingStub>() {
        @java.lang.Override
        public SettingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SettingStub(channel, callOptions);
        }
      };
    return SettingStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SettingBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SettingBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SettingBlockingStub>() {
        @java.lang.Override
        public SettingBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SettingBlockingStub(channel, callOptions);
        }
      };
    return SettingBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SettingFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SettingFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SettingFutureStub>() {
        @java.lang.Override
        public SettingFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SettingFutureStub(channel, callOptions);
        }
      };
    return SettingFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void set(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetMethod(), responseObserver);
    }

    /**
     */
    default void get(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetMethod(), responseObserver);
    }

    /**
     */
    default void byUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getByUserMethod(), responseObserver);
    }

    /**
     */
    default void my(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMyMethod(), responseObserver);
    }

    /**
     */
    default void global(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGlobalMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Setting.
   */
  public static abstract class SettingImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return SettingGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Setting.
   */
  public static final class SettingStub
      extends io.grpc.stub.AbstractAsyncStub<SettingStub> {
    private SettingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SettingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SettingStub(channel, callOptions);
    }

    /**
     */
    public void set(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void get(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void byUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getByUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void my(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void global(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGlobalMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Setting.
   */
  public static final class SettingBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<SettingBlockingStub> {
    private SettingBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SettingBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SettingBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty set(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item get(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse byUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getByUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse my(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse global(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGlobalMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Setting.
   */
  public static final class SettingFutureStub
      extends io.grpc.stub.AbstractFutureStub<SettingFutureStub> {
    private SettingFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SettingFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SettingFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> set(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item> get(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> byUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getByUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> my(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse> global(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGlobalMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SET = 0;
  private static final int METHODID_GET = 1;
  private static final int METHODID_BY_USER = 2;
  private static final int METHODID_MY = 3;
  private static final int METHODID_GLOBAL = 4;

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
        case METHODID_SET:
          serviceImpl.set((com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET:
          serviceImpl.get((com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item>) responseObserver);
          break;
        case METHODID_BY_USER:
          serviceImpl.byUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>) responseObserver);
          break;
        case METHODID_MY:
          serviceImpl.my((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>) responseObserver);
          break;
        case METHODID_GLOBAL:
          serviceImpl.global((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>) responseObserver);
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
          getSetMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingSetRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET)))
        .addMethod(
          getGetMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingGetRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse.Item>(
                service, METHODID_GET)))
        .addMethod(
          getByUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingByUserRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>(
                service, METHODID_BY_USER)))
        .addMethod(
          getMyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>(
                service, METHODID_MY)))
        .addMethod(
          getGlobalMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SettingsResponse>(
                service, METHODID_GLOBAL)))
        .build();
  }

  private static abstract class SettingBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SettingBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Setting");
    }
  }

  private static final class SettingFileDescriptorSupplier
      extends SettingBaseDescriptorSupplier {
    SettingFileDescriptorSupplier() {}
  }

  private static final class SettingMethodDescriptorSupplier
      extends SettingBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    SettingMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (SettingGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SettingFileDescriptorSupplier())
              .addMethod(getSetMethod())
              .addMethod(getGetMethod())
              .addMethod(getByUserMethod())
              .addMethod(getMyMethod())
              .addMethod(getGlobalMethod())
              .build();
        }
      }
    }
    return result;
  }
}
