package com.github.saturn_xiv.palm.plugins.musa.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 *
 */
@javax.annotation.Generated(
        value = "by gRPC proto compiler (version 1.53.0)",
        comments = "Source: musa.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatPayJsapiGrpc {

    private WechatPayJsapiGrpc() {
    }

    public static final String SERVICE_NAME = "palm.musa.v1.WechatPayJsapi";

    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest,
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse> getPrepayIdMethod;

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "PrepayId",
            requestType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest.class,
            responseType = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest,
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse> getPrepayIdMethod() {
        io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse> getPrepayIdMethod;
        if ((getPrepayIdMethod = WechatPayJsapiGrpc.getPrepayIdMethod) == null) {
            synchronized (WechatPayJsapiGrpc.class) {
                if ((getPrepayIdMethod = WechatPayJsapiGrpc.getPrepayIdMethod) == null) {
                    WechatPayJsapiGrpc.getPrepayIdMethod = getPrepayIdMethod =
                            io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepayId"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse.getDefaultInstance()))
                                    .setSchemaDescriptor(new WechatPayJsapiMethodDescriptorSupplier("PrepayId"))
                                    .build();
                }
            }
        }
        return getPrepayIdMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static WechatPayJsapiStub newStub(io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<WechatPayJsapiStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<WechatPayJsapiStub>() {
                    @java.lang.Override
                    public WechatPayJsapiStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new WechatPayJsapiStub(channel, callOptions);
                    }
                };
        return WechatPayJsapiStub.newStub(factory, channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static WechatPayJsapiBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<WechatPayJsapiBlockingStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<WechatPayJsapiBlockingStub>() {
                    @java.lang.Override
                    public WechatPayJsapiBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new WechatPayJsapiBlockingStub(channel, callOptions);
                    }
                };
        return WechatPayJsapiBlockingStub.newStub(factory, channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static WechatPayJsapiFutureStub newFutureStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<WechatPayJsapiFutureStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<WechatPayJsapiFutureStub>() {
                    @java.lang.Override
                    public WechatPayJsapiFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new WechatPayJsapiFutureStub(channel, callOptions);
                    }
                };
        return WechatPayJsapiFutureStub.newStub(factory, channel);
    }

    /**
     *
     */
    public static abstract class WechatPayJsapiImplBase implements io.grpc.BindableService {

        /**
         *
         */
        public void prepayId(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request,
                             io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse> responseObserver) {
            io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepayIdMethod(), responseObserver);
        }

        @java.lang.Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getPrepayIdMethod(),
                            io.grpc.stub.ServerCalls.asyncUnaryCall(
                                    new MethodHandlers<
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest,
                                            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse>(
                                            this, METHODID_PREPAY_ID)))
                    .build();
        }
    }

    /**
     *
     */
    public static final class WechatPayJsapiStub extends io.grpc.stub.AbstractAsyncStub<WechatPayJsapiStub> {
        private WechatPayJsapiStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @java.lang.Override
        protected WechatPayJsapiStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new WechatPayJsapiStub(channel, callOptions);
        }

        /**
         *
         */
        public void prepayId(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request,
                             io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse> responseObserver) {
            io.grpc.stub.ClientCalls.asyncUnaryCall(
                    getChannel().newCall(getPrepayIdMethod(), getCallOptions()), request, responseObserver);
        }
    }

    /**
     *
     */
    public static final class WechatPayJsapiBlockingStub extends io.grpc.stub.AbstractBlockingStub<WechatPayJsapiBlockingStub> {
        private WechatPayJsapiBlockingStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @java.lang.Override
        protected WechatPayJsapiBlockingStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new WechatPayJsapiBlockingStub(channel, callOptions);
        }

        /**
         *
         */
        public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse prepayId(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request) {
            return io.grpc.stub.ClientCalls.blockingUnaryCall(
                    getChannel(), getPrepayIdMethod(), getCallOptions(), request);
        }
    }

    /**
     *
     */
    public static final class WechatPayJsapiFutureStub extends io.grpc.stub.AbstractFutureStub<WechatPayJsapiFutureStub> {
        private WechatPayJsapiFutureStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @java.lang.Override
        protected WechatPayJsapiFutureStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new WechatPayJsapiFutureStub(channel, callOptions);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse> prepayId(
                com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest request) {
            return io.grpc.stub.ClientCalls.futureUnaryCall(
                    getChannel().newCall(getPrepayIdMethod(), getCallOptions()), request);
        }
    }

    private static final int METHODID_PREPAY_ID = 0;

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final WechatPayJsapiImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(WechatPayJsapiImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @java.lang.Override
        @java.lang.SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_PREPAY_ID:
                    serviceImpl.prepayId((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest) request,
                            (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse>) responseObserver);
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

    private static abstract class WechatPayJsapiBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        WechatPayJsapiBaseDescriptorSupplier() {
        }

        @java.lang.Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.getDescriptor();
        }

        @java.lang.Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("WechatPayJsapi");
        }
    }

    private static final class WechatPayJsapiFileDescriptorSupplier
            extends WechatPayJsapiBaseDescriptorSupplier {
        WechatPayJsapiFileDescriptorSupplier() {
        }
    }

    private static final class WechatPayJsapiMethodDescriptorSupplier
            extends WechatPayJsapiBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        WechatPayJsapiMethodDescriptorSupplier(String methodName) {
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
            synchronized (WechatPayJsapiGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new WechatPayJsapiFileDescriptorSupplier())
                            .addMethod(getPrepayIdMethod())
                            .build();
                }
            }
        }
        return result;
    }
}
