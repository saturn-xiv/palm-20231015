package com.github.saturn_xiv.palm.plugins.nut.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: nut.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ShorterLinkGrpc {

  private ShorterLinkGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.nut.v1.ShorterLink";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest,
      com.google.protobuf.Empty> getCreateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Create",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest,
      com.google.protobuf.Empty> getCreateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest, com.google.protobuf.Empty> getCreateMethod;
    if ((getCreateMethod = ShorterLinkGrpc.getCreateMethod) == null) {
      synchronized (ShorterLinkGrpc.class) {
        if ((getCreateMethod = ShorterLinkGrpc.getCreateMethod) == null) {
          ShorterLinkGrpc.getCreateMethod = getCreateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Create"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new ShorterLinkMethodDescriptorSupplier("Create"))
              .build();
        }
      }
    }
    return getCreateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Update",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest, com.google.protobuf.Empty> getUpdateMethod;
    if ((getUpdateMethod = ShorterLinkGrpc.getUpdateMethod) == null) {
      synchronized (ShorterLinkGrpc.class) {
        if ((getUpdateMethod = ShorterLinkGrpc.getUpdateMethod) == null) {
          ShorterLinkGrpc.getUpdateMethod = getUpdateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Update"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new ShorterLinkMethodDescriptorSupplier("Update"))
              .build();
        }
      }
    }
    return getUpdateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDestroyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Destroy",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
      com.google.protobuf.Empty> getDestroyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty> getDestroyMethod;
    if ((getDestroyMethod = ShorterLinkGrpc.getDestroyMethod) == null) {
      synchronized (ShorterLinkGrpc.class) {
        if ((getDestroyMethod = ShorterLinkGrpc.getDestroyMethod) == null) {
          ShorterLinkGrpc.getDestroyMethod = getDestroyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Destroy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new ShorterLinkMethodDescriptorSupplier("Destroy"))
              .build();
        }
      }
    }
    return getDestroyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse> getIndexMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Index",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.Pager.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse> getIndexMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse> getIndexMethod;
    if ((getIndexMethod = ShorterLinkGrpc.getIndexMethod) == null) {
      synchronized (ShorterLinkGrpc.class) {
        if ((getIndexMethod = ShorterLinkGrpc.getIndexMethod) == null) {
          ShorterLinkGrpc.getIndexMethod = getIndexMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Index"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.Pager.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ShorterLinkMethodDescriptorSupplier("Index"))
              .build();
        }
      }
    }
    return getIndexMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ShorterLinkStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ShorterLinkStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ShorterLinkStub>() {
        @java.lang.Override
        public ShorterLinkStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ShorterLinkStub(channel, callOptions);
        }
      };
    return ShorterLinkStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ShorterLinkBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ShorterLinkBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ShorterLinkBlockingStub>() {
        @java.lang.Override
        public ShorterLinkBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ShorterLinkBlockingStub(channel, callOptions);
        }
      };
    return ShorterLinkBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ShorterLinkFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ShorterLinkFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ShorterLinkFutureStub>() {
        @java.lang.Override
        public ShorterLinkFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ShorterLinkFutureStub(channel, callOptions);
        }
      };
    return ShorterLinkFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void create(com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateMethod(), responseObserver);
    }

    /**
     */
    default void update(com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateMethod(), responseObserver);
    }

    /**
     */
    default void destroy(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDestroyMethod(), responseObserver);
    }

    /**
     */
    default void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service ShorterLink.
   */
  public static abstract class ShorterLinkImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return ShorterLinkGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service ShorterLink.
   */
  public static final class ShorterLinkStub
      extends io.grpc.stub.AbstractAsyncStub<ShorterLinkStub> {
    private ShorterLinkStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ShorterLinkStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ShorterLinkStub(channel, callOptions);
    }

    /**
     */
    public void create(com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void update(com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void destroy(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDestroyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service ShorterLink.
   */
  public static final class ShorterLinkBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<ShorterLinkBlockingStub> {
    private ShorterLinkBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ShorterLinkBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ShorterLinkBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty create(com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty update(com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty destroy(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDestroyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service ShorterLink.
   */
  public static final class ShorterLinkFutureStub
      extends io.grpc.stub.AbstractFutureStub<ShorterLinkFutureStub> {
    private ShorterLinkFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ShorterLinkFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ShorterLinkFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> create(
        com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> update(
        com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> destroy(
        com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDestroyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse> index(
        com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE = 0;
  private static final int METHODID_UPDATE = 1;
  private static final int METHODID_DESTROY = 2;
  private static final int METHODID_INDEX = 3;

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
          serviceImpl.create((com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UPDATE:
          serviceImpl.update((com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DESTROY:
          serviceImpl.destroy((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_INDEX:
          serviceImpl.index((com.github.saturn_xiv.palm.plugins.nut.v1.Pager) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse>) responseObserver);
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
              com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkCreateRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CREATE)))
        .addMethod(
          getUpdateMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkUpdateRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE)))
        .addMethod(
          getDestroyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DESTROY)))
        .addMethod(
          getIndexMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
              com.github.saturn_xiv.palm.plugins.nut.v1.ShorterLinkIndexResponse>(
                service, METHODID_INDEX)))
        .build();
  }

  private static abstract class ShorterLinkBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ShorterLinkBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("ShorterLink");
    }
  }

  private static final class ShorterLinkFileDescriptorSupplier
      extends ShorterLinkBaseDescriptorSupplier {
    ShorterLinkFileDescriptorSupplier() {}
  }

  private static final class ShorterLinkMethodDescriptorSupplier
      extends ShorterLinkBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    ShorterLinkMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (ShorterLinkGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ShorterLinkFileDescriptorSupplier())
              .addMethod(getCreateMethod())
              .addMethod(getUpdateMethod())
              .addMethod(getDestroyMethod())
              .addMethod(getIndexMethod())
              .build();
        }
      }
    }
    return result;
  }
}
