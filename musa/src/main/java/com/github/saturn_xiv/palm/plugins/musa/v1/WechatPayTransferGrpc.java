package com.github.saturn_xiv.palm.plugins.musa.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.56.1)",
    comments = "Source: musa.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatPayTransferGrpc {

  private WechatPayTransferGrpc() {}

  public static final String SERVICE_NAME = "palm.musa.v1.WechatPayTransfer";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse> getExecuteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Execute",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse> getExecuteMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse> getExecuteMethod;
    if ((getExecuteMethod = WechatPayTransferGrpc.getExecuteMethod) == null) {
      synchronized (WechatPayTransferGrpc.class) {
        if ((getExecuteMethod = WechatPayTransferGrpc.getExecuteMethod) == null) {
          WechatPayTransferGrpc.getExecuteMethod = getExecuteMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Execute"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayTransferMethodDescriptorSupplier("Execute"))
              .build();
        }
      }
    }
    return getExecuteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse> getQueryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Query",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse> getQueryMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse> getQueryMethod;
    if ((getQueryMethod = WechatPayTransferGrpc.getQueryMethod) == null) {
      synchronized (WechatPayTransferGrpc.class) {
        if ((getQueryMethod = WechatPayTransferGrpc.getQueryMethod) == null) {
          WechatPayTransferGrpc.getQueryMethod = getQueryMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Query"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayTransferMethodDescriptorSupplier("Query"))
              .build();
        }
      }
    }
    return getQueryMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WechatPayTransferStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayTransferStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayTransferStub>() {
        @java.lang.Override
        public WechatPayTransferStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayTransferStub(channel, callOptions);
        }
      };
    return WechatPayTransferStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WechatPayTransferBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayTransferBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayTransferBlockingStub>() {
        @java.lang.Override
        public WechatPayTransferBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayTransferBlockingStub(channel, callOptions);
        }
      };
    return WechatPayTransferBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WechatPayTransferFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayTransferFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayTransferFutureStub>() {
        @java.lang.Override
        public WechatPayTransferFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayTransferFutureStub(channel, callOptions);
        }
      };
    return WechatPayTransferFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void execute(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getExecuteMethod(), responseObserver);
    }

    /**
     */
    default void query(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getQueryMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service WechatPayTransfer.
   */
  public static abstract class WechatPayTransferImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return WechatPayTransferGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service WechatPayTransfer.
   */
  public static final class WechatPayTransferStub
      extends io.grpc.stub.AbstractAsyncStub<WechatPayTransferStub> {
    private WechatPayTransferStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayTransferStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayTransferStub(channel, callOptions);
    }

    /**
     */
    public void execute(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getExecuteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void query(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getQueryMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service WechatPayTransfer.
   */
  public static final class WechatPayTransferBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<WechatPayTransferBlockingStub> {
    private WechatPayTransferBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayTransferBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayTransferBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse execute(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getExecuteMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse query(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getQueryMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service WechatPayTransfer.
   */
  public static final class WechatPayTransferFutureStub
      extends io.grpc.stub.AbstractFutureStub<WechatPayTransferFutureStub> {
    private WechatPayTransferFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayTransferFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayTransferFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse> execute(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getExecuteMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse> query(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getQueryMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_EXECUTE = 0;
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
        case METHODID_EXECUTE:
          serviceImpl.execute((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse>) responseObserver);
          break;
        case METHODID_QUERY:
          serviceImpl.query((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse>) responseObserver);
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
          getExecuteMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteTransferResponse>(
                service, METHODID_EXECUTE)))
        .addMethod(
          getQueryMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferResponse>(
                service, METHODID_QUERY)))
        .build();
  }

  private static abstract class WechatPayTransferBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WechatPayTransferBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("WechatPayTransfer");
    }
  }

  private static final class WechatPayTransferFileDescriptorSupplier
      extends WechatPayTransferBaseDescriptorSupplier {
    WechatPayTransferFileDescriptorSupplier() {}
  }

  private static final class WechatPayTransferMethodDescriptorSupplier
      extends WechatPayTransferBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    WechatPayTransferMethodDescriptorSupplier(String methodName) {
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
      synchronized (WechatPayTransferGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WechatPayTransferFileDescriptorSupplier())
              .addMethod(getExecuteMethod())
              .addMethod(getQueryMethod())
              .build();
        }
      }
    }
    return result;
  }
}
