package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: metasequoia.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class LocaleGrpc {

  private LocaleGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.metasequoia.v1.Locale";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest,
      com.google.protobuf.Empty> getSetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Set",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest,
      com.google.protobuf.Empty> getSetMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest, com.google.protobuf.Empty> getSetMethod;
    if ((getSetMethod = LocaleGrpc.getSetMethod) == null) {
      synchronized (LocaleGrpc.class) {
        if ((getSetMethod = LocaleGrpc.getSetMethod) == null) {
          LocaleGrpc.getSetMethod = getSetMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Set"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new LocaleMethodDescriptorSupplier("Set"))
              .build();
        }
      }
    }
    return getSetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item> getGetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Get",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item> getGetMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item> getGetMethod;
    if ((getGetMethod = LocaleGrpc.getGetMethod) == null) {
      synchronized (LocaleGrpc.class) {
        if ((getGetMethod = LocaleGrpc.getGetMethod) == null) {
          LocaleGrpc.getGetMethod = getGetMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Get"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item.getDefaultInstance()))
              .setSchemaDescriptor(new LocaleMethodDescriptorSupplier("Get"))
              .build();
        }
      }
    }
    return getGetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse> getByLangMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ByLang",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse> getByLangMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse> getByLangMethod;
    if ((getByLangMethod = LocaleGrpc.getByLangMethod) == null) {
      synchronized (LocaleGrpc.class) {
        if ((getByLangMethod = LocaleGrpc.getByLangMethod) == null) {
          LocaleGrpc.getByLangMethod = getByLangMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ByLang"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new LocaleMethodDescriptorSupplier("ByLang"))
              .build();
        }
      }
    }
    return getByLangMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static LocaleStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LocaleStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LocaleStub>() {
        @java.lang.Override
        public LocaleStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LocaleStub(channel, callOptions);
        }
      };
    return LocaleStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static LocaleBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LocaleBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LocaleBlockingStub>() {
        @java.lang.Override
        public LocaleBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LocaleBlockingStub(channel, callOptions);
        }
      };
    return LocaleBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static LocaleFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LocaleFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LocaleFutureStub>() {
        @java.lang.Override
        public LocaleFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LocaleFutureStub(channel, callOptions);
        }
      };
    return LocaleFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void set(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetMethod(), responseObserver);
    }

    /**
     */
    default void get(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetMethod(), responseObserver);
    }

    /**
     */
    default void byLang(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getByLangMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Locale.
   */
  public static abstract class LocaleImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return LocaleGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Locale.
   */
  public static final class LocaleStub
      extends io.grpc.stub.AbstractAsyncStub<LocaleStub> {
    private LocaleStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LocaleStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LocaleStub(channel, callOptions);
    }

    /**
     */
    public void set(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void get(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void byLang(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getByLangMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Locale.
   */
  public static final class LocaleBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<LocaleBlockingStub> {
    private LocaleBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LocaleBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LocaleBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty set(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item get(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse byLang(com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getByLangMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Locale.
   */
  public static final class LocaleFutureStub
      extends io.grpc.stub.AbstractFutureStub<LocaleFutureStub> {
    private LocaleFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LocaleFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LocaleFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> set(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item> get(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse> byLang(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getByLangMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SET = 0;
  private static final int METHODID_GET = 1;
  private static final int METHODID_BY_LANG = 2;

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
        case METHODID_SET:
          serviceImpl.set((com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET:
          serviceImpl.get((com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item>) responseObserver);
          break;
        case METHODID_BY_LANG:
          serviceImpl.byLang((com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse>) responseObserver);
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
          getSetMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleSetRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET)))
        .addMethod(
          getGetMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleGetRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse.Item>(
                service, METHODID_GET)))
        .addMethod(
          getByLangMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocaleByLangRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.LocalesResponse>(
                service, METHODID_BY_LANG)))
        .build();
  }

  private static abstract class LocaleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    LocaleBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Locale");
    }
  }

  private static final class LocaleFileDescriptorSupplier
      extends LocaleBaseDescriptorSupplier {
    LocaleFileDescriptorSupplier() {}
  }

  private static final class LocaleMethodDescriptorSupplier
      extends LocaleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    LocaleMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (LocaleGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new LocaleFileDescriptorSupplier())
              .addMethod(getSetMethod())
              .addMethod(getGetMethod())
              .addMethod(getByLangMethod())
              .build();
        }
      }
    }
    return result;
  }
}
