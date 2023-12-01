package com.github.saturn_xiv.palm.plugins.orchid.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * ----------------------------------------------------------------------------
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: orchid.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class WechatMiniProgramGrpc {

  private WechatMiniProgramGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.orchid.v1.WechatMiniProgram";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse> getLoginMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Login",
      requestType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse> getLoginMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse> getLoginMethod;
    if ((getLoginMethod = WechatMiniProgramGrpc.getLoginMethod) == null) {
      synchronized (WechatMiniProgramGrpc.class) {
        if ((getLoginMethod = WechatMiniProgramGrpc.getLoginMethod) == null) {
          WechatMiniProgramGrpc.getLoginMethod = getLoginMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Login"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMiniProgramMethodDescriptorSupplier("Login"))
              .build();
        }
      }
    }
    return getLoginMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse> getPhoneNumberMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PhoneNumber",
      requestType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest,
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse> getPhoneNumberMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse> getPhoneNumberMethod;
    if ((getPhoneNumberMethod = WechatMiniProgramGrpc.getPhoneNumberMethod) == null) {
      synchronized (WechatMiniProgramGrpc.class) {
        if ((getPhoneNumberMethod = WechatMiniProgramGrpc.getPhoneNumberMethod) == null) {
          WechatMiniProgramGrpc.getPhoneNumberMethod = getPhoneNumberMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PhoneNumber"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse.getDefaultInstance()))
              .setSchemaDescriptor(new WechatMiniProgramMethodDescriptorSupplier("PhoneNumber"))
              .build();
        }
      }
    }
    return getPhoneNumberMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WechatMiniProgramStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatMiniProgramStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatMiniProgramStub>() {
        @java.lang.Override
        public WechatMiniProgramStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatMiniProgramStub(channel, callOptions);
        }
      };
    return WechatMiniProgramStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WechatMiniProgramBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatMiniProgramBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatMiniProgramBlockingStub>() {
        @java.lang.Override
        public WechatMiniProgramBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatMiniProgramBlockingStub(channel, callOptions);
        }
      };
    return WechatMiniProgramBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WechatMiniProgramFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WechatMiniProgramFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WechatMiniProgramFutureStub>() {
        @java.lang.Override
        public WechatMiniProgramFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WechatMiniProgramFutureStub(channel, callOptions);
        }
      };
    return WechatMiniProgramFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void login(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLoginMethod(), responseObserver);
    }

    /**
     */
    default void phoneNumber(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPhoneNumberMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service WechatMiniProgram.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static abstract class WechatMiniProgramImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return WechatMiniProgramGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service WechatMiniProgram.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class WechatMiniProgramStub
      extends io.grpc.stub.AbstractAsyncStub<WechatMiniProgramStub> {
    private WechatMiniProgramStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatMiniProgramStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatMiniProgramStub(channel, callOptions);
    }

    /**
     */
    public void login(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLoginMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void phoneNumber(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPhoneNumberMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service WechatMiniProgram.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class WechatMiniProgramBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<WechatMiniProgramBlockingStub> {
    private WechatMiniProgramBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatMiniProgramBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatMiniProgramBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse login(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLoginMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse phoneNumber(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPhoneNumberMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service WechatMiniProgram.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class WechatMiniProgramFutureStub
      extends io.grpc.stub.AbstractFutureStub<WechatMiniProgramFutureStub> {
    private WechatMiniProgramFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WechatMiniProgramFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WechatMiniProgramFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse> login(
        com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLoginMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse> phoneNumber(
        com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPhoneNumberMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_LOGIN = 0;
  private static final int METHODID_PHONE_NUMBER = 1;

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
        case METHODID_LOGIN:
          serviceImpl.login((com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse>) responseObserver);
          break;
        case METHODID_PHONE_NUMBER:
          serviceImpl.phoneNumber((com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse>) responseObserver);
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
          getLoginMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginRequest,
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse>(
                service, METHODID_LOGIN)))
        .addMethod(
          getPhoneNumberMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberRequest,
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramPhoneNumberResponse>(
                service, METHODID_PHONE_NUMBER)))
        .build();
  }

  private static abstract class WechatMiniProgramBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WechatMiniProgramBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("WechatMiniProgram");
    }
  }

  private static final class WechatMiniProgramFileDescriptorSupplier
      extends WechatMiniProgramBaseDescriptorSupplier {
    WechatMiniProgramFileDescriptorSupplier() {}
  }

  private static final class WechatMiniProgramMethodDescriptorSupplier
      extends WechatMiniProgramBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    WechatMiniProgramMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (WechatMiniProgramGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WechatMiniProgramFileDescriptorSupplier())
              .addMethod(getLoginMethod())
              .addMethod(getPhoneNumberMethod())
              .build();
        }
      }
    }
    return result;
  }
}
