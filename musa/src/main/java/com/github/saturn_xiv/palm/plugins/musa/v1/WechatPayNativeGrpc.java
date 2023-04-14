package com.github.saturn_xiv.palm.plugins.musa.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.53.0)",
    comments = "Source: musa.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatPayNativeGrpc {

  private WechatPayNativeGrpc() {}

  public static final String SERVICE_NAME = "palm.musa.v1.WechatPayNative";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse> getPrepayMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Prepay",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse> getPrepayMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse> getPrepayMethod;
    if ((getPrepayMethod = WechatPayNativeGrpc.getPrepayMethod) == null) {
      synchronized (WechatPayNativeGrpc.class) {
        if ((getPrepayMethod = WechatPayNativeGrpc.getPrepayMethod) == null) {
          WechatPayNativeGrpc.getPrepayMethod = getPrepayMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Prepay"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayNativeMethodDescriptorSupplier("Prepay"))
              .build();
        }
      }
    }
    return getPrepayMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WechatPayNativeStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayNativeStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayNativeStub>() {
        @java.lang.Override
        public WechatPayNativeStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayNativeStub(channel, callOptions);
        }
      };
    return WechatPayNativeStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WechatPayNativeBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayNativeBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayNativeBlockingStub>() {
        @java.lang.Override
        public WechatPayNativeBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayNativeBlockingStub(channel, callOptions);
        }
      };
    return WechatPayNativeBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WechatPayNativeFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayNativeFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayNativeFutureStub>() {
        @java.lang.Override
        public WechatPayNativeFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayNativeFutureStub(channel, callOptions);
        }
      };
    return WechatPayNativeFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class WechatPayNativeImplBase implements io.grpc.BindableService {

    /**
     */
    public void prepay(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepayMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getPrepayMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest,
                com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse>(
                  this, METHODID_PREPAY)))
          .build();
    }
  }

  /**
   */
  public static final class WechatPayNativeStub extends io.grpc.stub.AbstractAsyncStub<WechatPayNativeStub> {
    private WechatPayNativeStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayNativeStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayNativeStub(channel, callOptions);
    }

    /**
     */
    public void prepay(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepayMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class WechatPayNativeBlockingStub extends io.grpc.stub.AbstractBlockingStub<WechatPayNativeBlockingStub> {
    private WechatPayNativeBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayNativeBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayNativeBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse prepay(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepayMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class WechatPayNativeFutureStub extends io.grpc.stub.AbstractFutureStub<WechatPayNativeFutureStub> {
    private WechatPayNativeFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayNativeFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayNativeFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse> prepay(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepayMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_PREPAY = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final WechatPayNativeImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(WechatPayNativeImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_PREPAY:
          serviceImpl.prepay((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse>) responseObserver);
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

  private static abstract class WechatPayNativeBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WechatPayNativeBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("WechatPayNative");
    }
  }

  private static final class WechatPayNativeFileDescriptorSupplier
      extends WechatPayNativeBaseDescriptorSupplier {
    WechatPayNativeFileDescriptorSupplier() {}
  }

  private static final class WechatPayNativeMethodDescriptorSupplier
      extends WechatPayNativeBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    WechatPayNativeMethodDescriptorSupplier(String methodName) {
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
      synchronized (WechatPayNativeGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WechatPayNativeFileDescriptorSupplier())
              .addMethod(getPrepayMethod())
              .build();
        }
      }
    }
    return result;
  }
}
