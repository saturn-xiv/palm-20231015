package com.github.saturn_xiv.palm.plugins.orchid.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: orchid.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatOauth2Grpc {

  private WechatOauth2Grpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.orchid.v1.WechatOauth2";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> getQrConnectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "QrConnect",
      requestType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> getQrConnectMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> getQrConnectMethod;
    if ((getQrConnectMethod = WechatOauth2Grpc.getQrConnectMethod) == null) {
      synchronized (WechatOauth2Grpc.class) {
        if ((getQrConnectMethod = WechatOauth2Grpc.getQrConnectMethod) == null) {
          WechatOauth2Grpc.getQrConnectMethod = getQrConnectMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "QrConnect"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatOauth2MethodDescriptorSupplier("QrConnect"))
              .build();
        }
      }
    }
    return getQrConnectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse> getLoginMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Login",
      requestType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse> getLoginMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse> getLoginMethod;
    if ((getLoginMethod = WechatOauth2Grpc.getLoginMethod) == null) {
      synchronized (WechatOauth2Grpc.class) {
        if ((getLoginMethod = WechatOauth2Grpc.getLoginMethod) == null) {
          WechatOauth2Grpc.getLoginMethod = getLoginMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Login"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatOauth2MethodDescriptorSupplier("Login"))
              .build();
        }
      }
    }
    return getLoginMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WechatOauth2Stub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatOauth2Stub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatOauth2Stub>() {
        @java.lang.Override
        public WechatOauth2Stub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatOauth2Stub(channel, callOptions);
        }
      };
    return WechatOauth2Stub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WechatOauth2BlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatOauth2BlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatOauth2BlockingStub>() {
        @java.lang.Override
        public WechatOauth2BlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatOauth2BlockingStub(channel, callOptions);
        }
      };
    return WechatOauth2BlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WechatOauth2FutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatOauth2FutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatOauth2FutureStub>() {
        @java.lang.Override
        public WechatOauth2FutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatOauth2FutureStub(channel, callOptions);
        }
      };
    return WechatOauth2FutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void qrConnect(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getQrConnectMethod(), responseObserver);
    }

    /**
     */
    default void login(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLoginMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service WechatOauth2.
   */
  public static abstract class WechatOauth2ImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return WechatOauth2Grpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service WechatOauth2.
   */
  public static final class WechatOauth2Stub
      extends io.grpc.stub.AbstractAsyncStub<WechatOauth2Stub> {
    private WechatOauth2Stub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatOauth2Stub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatOauth2Stub(channel, callOptions);
    }

    /**
     */
    public void qrConnect(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getQrConnectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void login(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLoginMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service WechatOauth2.
   */
  public static final class WechatOauth2BlockingStub
      extends io.grpc.stub.AbstractBlockingStub<WechatOauth2BlockingStub> {
    private WechatOauth2BlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatOauth2BlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatOauth2BlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse qrConnect(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getQrConnectMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse login(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLoginMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service WechatOauth2.
   */
  public static final class WechatOauth2FutureStub
      extends io.grpc.stub.AbstractFutureStub<WechatOauth2FutureStub> {
    private WechatOauth2FutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatOauth2FutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatOauth2FutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse> qrConnect(
        com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getQrConnectMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse> login(
        com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLoginMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_QR_CONNECT = 0;
  private static final int METHODID_LOGIN = 1;

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
        case METHODID_QR_CONNECT:
          serviceImpl.qrConnect((com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse>) responseObserver);
          break;
        case METHODID_LOGIN:
          serviceImpl.login((com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse>) responseObserver);
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
          getQrConnectMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest,
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectResponse>(
                service, METHODID_QR_CONNECT)))
        .addMethod(
          getLoginMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginRequest,
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse>(
                service, METHODID_LOGIN)))
        .build();
  }

  private static abstract class WechatOauth2BaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WechatOauth2BaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("WechatOauth2");
    }
  }

  private static final class WechatOauth2FileDescriptorSupplier
      extends WechatOauth2BaseDescriptorSupplier {
    WechatOauth2FileDescriptorSupplier() {}
  }

  private static final class WechatOauth2MethodDescriptorSupplier
      extends WechatOauth2BaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    WechatOauth2MethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (WechatOauth2Grpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WechatOauth2FileDescriptorSupplier())
              .addMethod(getQrConnectMethod())
              .addMethod(getLoginMethod())
              .build();
        }
      }
    }
    return result;
  }
}
