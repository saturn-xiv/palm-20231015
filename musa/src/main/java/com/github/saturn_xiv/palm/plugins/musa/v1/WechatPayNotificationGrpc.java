package com.github.saturn_xiv.palm.plugins.musa.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 *
 */
@javax.annotation.Generated(
        value = "by gRPC proto compiler (version 1.53.0)",
        comments = "Source: musa.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatPayNotificationGrpc {

    private WechatPayNotificationGrpc() {
    }

    public static final String SERVICE_NAME = "palm.musa.v1.WechatPayNotification";

    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest,
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse> getTransactionMethod;

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "Transaction",
            requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest.class,
            responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest,
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse> getTransactionMethod() {
        io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse> getTransactionMethod;
        if ((getTransactionMethod = WechatPayNotificationGrpc.getTransactionMethod) == null) {
            synchronized (WechatPayNotificationGrpc.class) {
                if ((getTransactionMethod = WechatPayNotificationGrpc.getTransactionMethod) == null) {
                    WechatPayNotificationGrpc.getTransactionMethod = getTransactionMethod =
                            io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Transaction"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse.getDefaultInstance()))
                                    .setSchemaDescriptor(new WechatPayNotificationMethodDescriptorSupplier("Transaction"))
                                    .build();
                }
            }
        }
        return getTransactionMethod;
    }

    private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest,
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse> getRefundMethod;

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "Refund",
            requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest.class,
            responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest,
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse> getRefundMethod() {
        io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse> getRefundMethod;
        if ((getRefundMethod = WechatPayNotificationGrpc.getRefundMethod) == null) {
            synchronized (WechatPayNotificationGrpc.class) {
                if ((getRefundMethod = WechatPayNotificationGrpc.getRefundMethod) == null) {
                    WechatPayNotificationGrpc.getRefundMethod = getRefundMethod =
                            io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Refund"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse.getDefaultInstance()))
                                    .setSchemaDescriptor(new WechatPayNotificationMethodDescriptorSupplier("Refund"))
                                    .build();
                }
            }
        }
        return getRefundMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static WechatPayNotificationStub newStub(io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<WechatPayNotificationStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<WechatPayNotificationStub>() {
                    @java.lang.Override
                    public WechatPayNotificationStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new WechatPayNotificationStub(channel, callOptions);
                    }
                };
        return WechatPayNotificationStub.newStub(factory, channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static WechatPayNotificationBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<WechatPayNotificationBlockingStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<WechatPayNotificationBlockingStub>() {
                    @java.lang.Override
                    public WechatPayNotificationBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new WechatPayNotificationBlockingStub(channel, callOptions);
                    }
                };
        return WechatPayNotificationBlockingStub.newStub(factory, channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static WechatPayNotificationFutureStub newFutureStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<WechatPayNotificationFutureStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<WechatPayNotificationFutureStub>() {
                    @java.lang.Override
                    public WechatPayNotificationFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new WechatPayNotificationFutureStub(channel, callOptions);
                    }
                };
        return WechatPayNotificationFutureStub.newStub(factory, channel);
    }

    /**
     *
     */
    public static abstract class WechatPayNotificationImplBase implements io.grpc.BindableService {

        /**
         *
         */
        public void transaction(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request,
                                io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse> responseObserver) {
            io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTransactionMethod(), responseObserver);
        }

        /**
         *
         */
        public void refund(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request,
                           io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse> responseObserver) {
            io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRefundMethod(), responseObserver);
        }

        @java.lang.Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getTransactionMethod(),
                            io.grpc.stub.ServerCalls.asyncUnaryCall(
                                    new MethodHandlers<
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest,
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse>(
                                            this, METHODID_TRANSACTION)))
                    .addMethod(
                            getRefundMethod(),
                            io.grpc.stub.ServerCalls.asyncUnaryCall(
                                    new MethodHandlers<
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest,
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse>(
                                            this, METHODID_REFUND)))
                    .build();
        }
    }

    /**
     *
     */
    public static final class WechatPayNotificationStub extends io.grpc.stub.AbstractAsyncStub<WechatPayNotificationStub> {
        private WechatPayNotificationStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @java.lang.Override
        protected WechatPayNotificationStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new WechatPayNotificationStub(channel, callOptions);
        }

        /**
         *
         */
        public void transaction(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request,
                                io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse> responseObserver) {
            io.grpc.stub.ClientCalls.asyncUnaryCall(
                    getChannel().newCall(getTransactionMethod(), getCallOptions()), request, responseObserver);
        }

        /**
         *
         */
        public void refund(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request,
                           io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse> responseObserver) {
            io.grpc.stub.ClientCalls.asyncUnaryCall(
                    getChannel().newCall(getRefundMethod(), getCallOptions()), request, responseObserver);
        }
    }

    /**
     *
     */
    public static final class WechatPayNotificationBlockingStub extends io.grpc.stub.AbstractBlockingStub<WechatPayNotificationBlockingStub> {
        private WechatPayNotificationBlockingStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @java.lang.Override
        protected WechatPayNotificationBlockingStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new WechatPayNotificationBlockingStub(channel, callOptions);
        }

        /**
         *
         */
        public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse transaction(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request) {
            return io.grpc.stub.ClientCalls.blockingUnaryCall(
                    getChannel(), getTransactionMethod(), getCallOptions(), request);
        }

        /**
         *
         */
        public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse refund(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request) {
            return io.grpc.stub.ClientCalls.blockingUnaryCall(
                    getChannel(), getRefundMethod(), getCallOptions(), request);
        }
    }

    /**
     *
     */
    public static final class WechatPayNotificationFutureStub extends io.grpc.stub.AbstractFutureStub<WechatPayNotificationFutureStub> {
        private WechatPayNotificationFutureStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @java.lang.Override
        protected WechatPayNotificationFutureStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new WechatPayNotificationFutureStub(channel, callOptions);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse> transaction(
                com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request) {
            return io.grpc.stub.ClientCalls.futureUnaryCall(
                    getChannel().newCall(getTransactionMethod(), getCallOptions()), request);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse> refund(
                com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest request) {
            return io.grpc.stub.ClientCalls.futureUnaryCall(
                    getChannel().newCall(getRefundMethod(), getCallOptions()), request);
        }
    }

    private static final int METHODID_TRANSACTION = 0;
    private static final int METHODID_REFUND = 1;

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final WechatPayNotificationImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(WechatPayNotificationImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @java.lang.Override
        @java.lang.SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_TRANSACTION:
                    serviceImpl.transaction((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest) request,
                            (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse>) responseObserver);
                    break;
                case METHODID_REFUND:
                    serviceImpl.refund((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest) request,
                            (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse>) responseObserver);
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

    private static abstract class WechatPayNotificationBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        WechatPayNotificationBaseDescriptorSupplier() {
        }

        @java.lang.Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.getDescriptor();
        }

        @java.lang.Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("WechatPayNotification");
        }
    }

    private static final class WechatPayNotificationFileDescriptorSupplier
            extends WechatPayNotificationBaseDescriptorSupplier {
        WechatPayNotificationFileDescriptorSupplier() {
        }
    }

    private static final class WechatPayNotificationMethodDescriptorSupplier
            extends WechatPayNotificationBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        WechatPayNotificationMethodDescriptorSupplier(String methodName) {
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
            synchronized (WechatPayNotificationGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new WechatPayNotificationFileDescriptorSupplier())
                            .addMethod(getTransactionMethod())
                            .addMethod(getRefundMethod())
                            .build();
                }
            }
        }
        return result;
    }
}
