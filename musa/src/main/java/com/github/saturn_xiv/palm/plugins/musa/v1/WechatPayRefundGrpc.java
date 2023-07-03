package com.github.saturn_xiv.palm.plugins.musa.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.56.1)",
    comments = "Source: musa.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatPayRefundGrpc {

  private WechatPayRefundGrpc() {}

  public static final String SERVICE_NAME = "palm.musa.v1.WechatPayRefund";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> getCreateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Create",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> getCreateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> getCreateMethod;
    if ((getCreateMethod = WechatPayRefundGrpc.getCreateMethod) == null) {
      synchronized (WechatPayRefundGrpc.class) {
        if ((getCreateMethod = WechatPayRefundGrpc.getCreateMethod) == null) {
          WechatPayRefundGrpc.getCreateMethod = getCreateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Create"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayRefundMethodDescriptorSupplier("Create"))
              .build();
        }
      }
    }
    return getCreateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> getQueryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Query",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> getQueryMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> getQueryMethod;
    if ((getQueryMethod = WechatPayRefundGrpc.getQueryMethod) == null) {
      synchronized (WechatPayRefundGrpc.class) {
        if ((getQueryMethod = WechatPayRefundGrpc.getQueryMethod) == null) {
          WechatPayRefundGrpc.getQueryMethod = getQueryMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Query"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayRefundMethodDescriptorSupplier("Query"))
              .build();
        }
      }
    }
    return getQueryMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WechatPayRefundStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayRefundStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayRefundStub>() {
        @java.lang.Override
        public WechatPayRefundStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayRefundStub(channel, callOptions);
        }
      };
    return WechatPayRefundStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WechatPayRefundBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayRefundBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayRefundBlockingStub>() {
        @java.lang.Override
        public WechatPayRefundBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayRefundBlockingStub(channel, callOptions);
        }
      };
    return WechatPayRefundBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WechatPayRefundFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayRefundFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayRefundFutureStub>() {
        @java.lang.Override
        public WechatPayRefundFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayRefundFutureStub(channel, callOptions);
        }
      };
    return WechatPayRefundFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void create(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateMethod(), responseObserver);
    }

    /**
     */
    default void query(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getQueryMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service WechatPayRefund.
   */
  public static abstract class WechatPayRefundImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return WechatPayRefundGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service WechatPayRefund.
   */
  public static final class WechatPayRefundStub
      extends io.grpc.stub.AbstractAsyncStub<WechatPayRefundStub> {
    private WechatPayRefundStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayRefundStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayRefundStub(channel, callOptions);
    }

    /**
     */
    public void create(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void query(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getQueryMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service WechatPayRefund.
   */
  public static final class WechatPayRefundBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<WechatPayRefundBlockingStub> {
    private WechatPayRefundBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayRefundBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayRefundBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse create(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse query(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getQueryMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service WechatPayRefund.
   */
  public static final class WechatPayRefundFutureStub
      extends io.grpc.stub.AbstractFutureStub<WechatPayRefundFutureStub> {
    private WechatPayRefundFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayRefundFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayRefundFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> create(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse> query(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getQueryMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE = 0;
  private static final int METHODID_QUERY = 1;

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
        case METHODID_CREATE:
          serviceImpl.create((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse>) responseObserver);
          break;
        case METHODID_QUERY:
          serviceImpl.query((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse>) responseObserver);
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
          getCreateMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayCreateRefundRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse>(
                service, METHODID_CREATE)))
        .addMethod(
          getQueryMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryRefundRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayRefundResponse>(
                service, METHODID_QUERY)))
        .build();
  }

  private static abstract class WechatPayRefundBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WechatPayRefundBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("WechatPayRefund");
    }
  }

  private static final class WechatPayRefundFileDescriptorSupplier
      extends WechatPayRefundBaseDescriptorSupplier {
    WechatPayRefundFileDescriptorSupplier() {}
  }

  private static final class WechatPayRefundMethodDescriptorSupplier
      extends WechatPayRefundBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    WechatPayRefundMethodDescriptorSupplier(String methodName) {
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
      synchronized (WechatPayRefundGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WechatPayRefundFileDescriptorSupplier())
              .addMethod(getCreateMethod())
              .addMethod(getQueryMethod())
              .build();
        }
      }
    }
    return result;
  }
}
