package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * ----------------------------------------------------------------------------
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: metasequoia.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class GoogleGrpc {

  private GoogleGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.metasequoia.v1.Google";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse> getSignInUrlMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignInUrl",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse> getSignInUrlMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse> getSignInUrlMethod;
    if ((getSignInUrlMethod = GoogleGrpc.getSignInUrlMethod) == null) {
      synchronized (GoogleGrpc.class) {
        if ((getSignInUrlMethod = GoogleGrpc.getSignInUrlMethod) == null) {
          GoogleGrpc.getSignInUrlMethod = getSignInUrlMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SignInUrl"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse.getDefaultInstance()))
              .setSchemaDescriptor(new GoogleMethodDescriptorSupplier("SignInUrl"))
              .build();
        }
      }
    }
    return getSignInUrlMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse> getSignInMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignIn",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse> getSignInMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse> getSignInMethod;
    if ((getSignInMethod = GoogleGrpc.getSignInMethod) == null) {
      synchronized (GoogleGrpc.class) {
        if ((getSignInMethod = GoogleGrpc.getSignInMethod) == null) {
          GoogleGrpc.getSignInMethod = getSignInMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SignIn"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse.getDefaultInstance()))
              .setSchemaDescriptor(new GoogleMethodDescriptorSupplier("SignIn"))
              .build();
        }
      }
    }
    return getSignInMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static GoogleStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<GoogleStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<GoogleStub>() {
        @java.lang.Override
        public GoogleStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new GoogleStub(channel, callOptions);
        }
      };
    return GoogleStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static GoogleBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<GoogleBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<GoogleBlockingStub>() {
        @java.lang.Override
        public GoogleBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new GoogleBlockingStub(channel, callOptions);
        }
      };
    return GoogleBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static GoogleFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<GoogleFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<GoogleFutureStub>() {
        @java.lang.Override
        public GoogleFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new GoogleFutureStub(channel, callOptions);
        }
      };
    return GoogleFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void signInUrl(com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignInUrlMethod(), responseObserver);
    }

    /**
     */
    default void signIn(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSignInMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Google.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static abstract class GoogleImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return GoogleGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Google.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class GoogleStub
      extends io.grpc.stub.AbstractAsyncStub<GoogleStub> {
    private GoogleStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected GoogleStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new GoogleStub(channel, callOptions);
    }

    /**
     */
    public void signInUrl(com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSignInUrlMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void signIn(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Google.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class GoogleBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<GoogleBlockingStub> {
    private GoogleBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected GoogleBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new GoogleBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse signInUrl(com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignInUrlMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse signIn(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSignInMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Google.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class GoogleFutureStub
      extends io.grpc.stub.AbstractFutureStub<GoogleFutureStub> {
    private GoogleFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected GoogleFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new GoogleFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse> signInUrl(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSignInUrlMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse> signIn(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SIGN_IN_URL = 0;
  private static final int METHODID_SIGN_IN = 1;

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
        case METHODID_SIGN_IN_URL:
          serviceImpl.signInUrl((com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse>) responseObserver);
          break;
        case METHODID_SIGN_IN:
          serviceImpl.signIn((com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse>) responseObserver);
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
          getSignInUrlMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlResponse>(
                service, METHODID_SIGN_IN_URL)))
        .addMethod(
          getSignInMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SignInByGoogleRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserSignInResponse>(
                service, METHODID_SIGN_IN)))
        .build();
  }

  private static abstract class GoogleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    GoogleBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Google");
    }
  }

  private static final class GoogleFileDescriptorSupplier
      extends GoogleBaseDescriptorSupplier {
    GoogleFileDescriptorSupplier() {}
  }

  private static final class GoogleMethodDescriptorSupplier
      extends GoogleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    GoogleMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (GoogleGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new GoogleFileDescriptorSupplier())
              .addMethod(getSignInUrlMethod())
              .addMethod(getSignInMethod())
              .build();
        }
      }
    }
    return result;
  }
}
