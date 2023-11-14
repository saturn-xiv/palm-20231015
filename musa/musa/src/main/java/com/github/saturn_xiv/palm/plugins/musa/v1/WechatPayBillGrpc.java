package com.github.saturn_xiv.palm.plugins.musa.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: musa.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatPayBillGrpc {

  private WechatPayBillGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.musa.v1.WechatPayBill";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> getTradeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Trade",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> getTradeMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> getTradeMethod;
    if ((getTradeMethod = WechatPayBillGrpc.getTradeMethod) == null) {
      synchronized (WechatPayBillGrpc.class) {
        if ((getTradeMethod = WechatPayBillGrpc.getTradeMethod) == null) {
          WechatPayBillGrpc.getTradeMethod = getTradeMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Trade"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayBillMethodDescriptorSupplier("Trade"))
              .build();
        }
      }
    }
    return getTradeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> getFundFlowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "FundFlow",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> getFundFlowMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> getFundFlowMethod;
    if ((getFundFlowMethod = WechatPayBillGrpc.getFundFlowMethod) == null) {
      synchronized (WechatPayBillGrpc.class) {
        if ((getFundFlowMethod = WechatPayBillGrpc.getFundFlowMethod) == null) {
          WechatPayBillGrpc.getFundFlowMethod = getFundFlowMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "FundFlow"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayBillMethodDescriptorSupplier("FundFlow"))
              .build();
        }
      }
    }
    return getFundFlowMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WechatPayBillStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayBillStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayBillStub>() {
        @java.lang.Override
        public WechatPayBillStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayBillStub(channel, callOptions);
        }
      };
    return WechatPayBillStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WechatPayBillBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayBillBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayBillBlockingStub>() {
        @java.lang.Override
        public WechatPayBillBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayBillBlockingStub(channel, callOptions);
        }
      };
    return WechatPayBillBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WechatPayBillFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatPayBillFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatPayBillFutureStub>() {
        @java.lang.Override
        public WechatPayBillFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatPayBillFutureStub(channel, callOptions);
        }
      };
    return WechatPayBillFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void trade(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradeMethod(), responseObserver);
    }

    /**
     */
    default void fundFlow(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getFundFlowMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service WechatPayBill.
   */
  public static abstract class WechatPayBillImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return WechatPayBillGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service WechatPayBill.
   */
  public static final class WechatPayBillStub
      extends io.grpc.stub.AbstractAsyncStub<WechatPayBillStub> {
    private WechatPayBillStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayBillStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayBillStub(channel, callOptions);
    }

    /**
     */
    public void trade(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTradeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void fundFlow(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getFundFlowMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service WechatPayBill.
   */
  public static final class WechatPayBillBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<WechatPayBillBlockingStub> {
    private WechatPayBillBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayBillBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayBillBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse trade(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTradeMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse fundFlow(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFundFlowMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service WechatPayBill.
   */
  public static final class WechatPayBillFutureStub
      extends io.grpc.stub.AbstractFutureStub<WechatPayBillFutureStub> {
    private WechatPayBillFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatPayBillFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatPayBillFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> trade(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTradeMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse> fundFlow(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getFundFlowMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_TRADE = 0;
  private static final int METHODID_FUND_FLOW = 1;

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
        case METHODID_TRADE:
          serviceImpl.trade((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse>) responseObserver);
          break;
        case METHODID_FUND_FLOW:
          serviceImpl.fundFlow((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse>) responseObserver);
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
          getTradeMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse>(
                service, METHODID_TRADE)))
        .addMethod(
          getFundFlowMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse>(
                service, METHODID_FUND_FLOW)))
        .build();
  }

  private static abstract class WechatPayBillBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WechatPayBillBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("WechatPayBill");
    }
  }

  private static final class WechatPayBillFileDescriptorSupplier
      extends WechatPayBillBaseDescriptorSupplier {
    WechatPayBillFileDescriptorSupplier() {}
  }

  private static final class WechatPayBillMethodDescriptorSupplier
      extends WechatPayBillBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    WechatPayBillMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (WechatPayBillGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WechatPayBillFileDescriptorSupplier())
              .addMethod(getTradeMethod())
              .addMethod(getFundFlowMethod())
              .build();
        }
      }
    }
    return result;
  }
}
