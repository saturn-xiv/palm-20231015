package com.github.saturn_xiv.palm.plugins.musa.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: musa.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatPayTransferGrpc {

  private WechatPayTransferGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.musa.v1.WechatPayTransfer";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse> getExecuteBatchMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ExecuteBatch",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse> getExecuteBatchMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse> getExecuteBatchMethod;
    if ((getExecuteBatchMethod = WechatPayTransferGrpc.getExecuteBatchMethod) == null) {
      synchronized (WechatPayTransferGrpc.class) {
        if ((getExecuteBatchMethod = WechatPayTransferGrpc.getExecuteBatchMethod) == null) {
          WechatPayTransferGrpc.getExecuteBatchMethod = getExecuteBatchMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ExecuteBatch"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayTransferMethodDescriptorSupplier("ExecuteBatch"))
              .build();
        }
      }
    }
    return getExecuteBatchMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse> getQueryBatchMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "QueryBatch",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse> getQueryBatchMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse> getQueryBatchMethod;
    if ((getQueryBatchMethod = WechatPayTransferGrpc.getQueryBatchMethod) == null) {
      synchronized (WechatPayTransferGrpc.class) {
        if ((getQueryBatchMethod = WechatPayTransferGrpc.getQueryBatchMethod) == null) {
          WechatPayTransferGrpc.getQueryBatchMethod = getQueryBatchMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "QueryBatch"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayTransferMethodDescriptorSupplier("QueryBatch"))
              .build();
        }
      }
    }
    return getQueryBatchMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse> getQueryDetailMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "QueryDetail",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse> getQueryDetailMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse> getQueryDetailMethod;
    if ((getQueryDetailMethod = WechatPayTransferGrpc.getQueryDetailMethod) == null) {
      synchronized (WechatPayTransferGrpc.class) {
        if ((getQueryDetailMethod = WechatPayTransferGrpc.getQueryDetailMethod) == null) {
          WechatPayTransferGrpc.getQueryDetailMethod = getQueryDetailMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "QueryDetail"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayTransferMethodDescriptorSupplier("QueryDetail"))
              .build();
        }
      }
    }
    return getQueryDetailMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getGetBillReceiptMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetBillReceipt",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getGetBillReceiptMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getGetBillReceiptMethod;
    if ((getGetBillReceiptMethod = WechatPayTransferGrpc.getGetBillReceiptMethod) == null) {
      synchronized (WechatPayTransferGrpc.class) {
        if ((getGetBillReceiptMethod = WechatPayTransferGrpc.getGetBillReceiptMethod) == null) {
          WechatPayTransferGrpc.getGetBillReceiptMethod = getGetBillReceiptMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetBillReceipt"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayTransferMethodDescriptorSupplier("GetBillReceipt"))
              .build();
        }
      }
    }
    return getGetBillReceiptMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getGetElectronicReceiptMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetElectronicReceipt",
      requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest,
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getGetElectronicReceiptMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getGetElectronicReceiptMethod;
    if ((getGetElectronicReceiptMethod = WechatPayTransferGrpc.getGetElectronicReceiptMethod) == null) {
      synchronized (WechatPayTransferGrpc.class) {
        if ((getGetElectronicReceiptMethod = WechatPayTransferGrpc.getGetElectronicReceiptMethod) == null) {
          WechatPayTransferGrpc.getGetElectronicReceiptMethod = getGetElectronicReceiptMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetElectronicReceipt"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatPayTransferMethodDescriptorSupplier("GetElectronicReceipt"))
              .build();
        }
      }
    }
    return getGetElectronicReceiptMethod;
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
    default void executeBatch(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getExecuteBatchMethod(), responseObserver);
    }

    /**
     */
    default void queryBatch(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getQueryBatchMethod(), responseObserver);
    }

    /**
     */
    default void queryDetail(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getQueryDetailMethod(), responseObserver);
    }

    /**
     */
    default void getBillReceipt(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetBillReceiptMethod(), responseObserver);
    }

    /**
     */
    default void getElectronicReceipt(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetElectronicReceiptMethod(), responseObserver);
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
    public void executeBatch(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getExecuteBatchMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void queryBatch(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getQueryBatchMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void queryDetail(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getQueryDetailMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getBillReceipt(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetBillReceiptMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getElectronicReceipt(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetElectronicReceiptMethod(), getCallOptions()), request, responseObserver);
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
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse executeBatch(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getExecuteBatchMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse queryBatch(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getQueryBatchMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse queryDetail(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getQueryDetailMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse getBillReceipt(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetBillReceiptMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse getElectronicReceipt(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetElectronicReceiptMethod(), getCallOptions(), request);
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
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse> executeBatch(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getExecuteBatchMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse> queryBatch(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getQueryBatchMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse> queryDetail(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getQueryDetailMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getBillReceipt(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetBillReceiptMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse> getElectronicReceipt(
        com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetElectronicReceiptMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_EXECUTE_BATCH = 0;
  private static final int METHODID_QUERY_BATCH = 1;
  private static final int METHODID_QUERY_DETAIL = 2;
  private static final int METHODID_GET_BILL_RECEIPT = 3;
  private static final int METHODID_GET_ELECTRONIC_RECEIPT = 4;

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
        case METHODID_EXECUTE_BATCH:
          serviceImpl.executeBatch((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse>) responseObserver);
          break;
        case METHODID_QUERY_BATCH:
          serviceImpl.queryBatch((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse>) responseObserver);
          break;
        case METHODID_QUERY_DETAIL:
          serviceImpl.queryDetail((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse>) responseObserver);
          break;
        case METHODID_GET_BILL_RECEIPT:
          serviceImpl.getBillReceipt((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse>) responseObserver);
          break;
        case METHODID_GET_ELECTRONIC_RECEIPT:
          serviceImpl.getElectronicReceipt((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse>) responseObserver);
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
          getExecuteBatchMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayExecuteBatchTransferResponse>(
                service, METHODID_EXECUTE_BATCH)))
        .addMethod(
          getQueryBatchMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferResponse>(
                service, METHODID_QUERY_BATCH)))
        .addMethod(
          getQueryDetailMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryTransferDetailResponse>(
                service, METHODID_QUERY_DETAIL)))
        .addMethod(
          getGetBillReceiptMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetBillReceiptRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse>(
                service, METHODID_GET_BILL_RECEIPT)))
        .addMethod(
          getGetElectronicReceiptMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest,
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetReceiptResponse>(
                service, METHODID_GET_ELECTRONIC_RECEIPT)))
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
    private final java.lang.String methodName;

    WechatPayTransferMethodDescriptorSupplier(java.lang.String methodName) {
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
              .addMethod(getExecuteBatchMethod())
              .addMethod(getQueryBatchMethod())
              .addMethod(getQueryDetailMethod())
              .addMethod(getGetBillReceiptMethod())
              .addMethod(getGetElectronicReceiptMethod())
              .build();
        }
      }
    }
    return result;
  }
}
