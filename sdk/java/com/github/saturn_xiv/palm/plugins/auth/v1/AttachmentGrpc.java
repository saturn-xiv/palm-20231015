package com.github.saturn_xiv.palm.plugins.auth.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: auth.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class AttachmentGrpc {

  private AttachmentGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.auth.v1.Attachment";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse> getIndexMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Index",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.Pager.class,
      responseType = com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse> getIndexMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse> getIndexMethod;
    if ((getIndexMethod = AttachmentGrpc.getIndexMethod) == null) {
      synchronized (AttachmentGrpc.class) {
        if ((getIndexMethod = AttachmentGrpc.getIndexMethod) == null) {
          AttachmentGrpc.getIndexMethod = getIndexMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Index"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.Pager.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AttachmentMethodDescriptorSupplier("Index"))
              .build();
        }
      }
    }
    return getIndexMethod;
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
    if ((getDestroyMethod = AttachmentGrpc.getDestroyMethod) == null) {
      synchronized (AttachmentGrpc.class) {
        if ((getDestroyMethod = AttachmentGrpc.getDestroyMethod) == null) {
          AttachmentGrpc.getDestroyMethod = getDestroyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Destroy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new AttachmentMethodDescriptorSupplier("Destroy"))
              .build();
        }
      }
    }
    return getDestroyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest,
      com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse> getShowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Show",
      requestType = com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest,
      com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse> getShowMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse> getShowMethod;
    if ((getShowMethod = AttachmentGrpc.getShowMethod) == null) {
      synchronized (AttachmentGrpc.class) {
        if ((getShowMethod = AttachmentGrpc.getShowMethod) == null) {
          AttachmentGrpc.getShowMethod = getShowMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Show"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AttachmentMethodDescriptorSupplier("Show"))
              .build();
        }
      }
    }
    return getShowMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AttachmentStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AttachmentStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AttachmentStub>() {
        @java.lang.Override
        public AttachmentStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AttachmentStub(channel, callOptions);
        }
      };
    return AttachmentStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AttachmentBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AttachmentBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AttachmentBlockingStub>() {
        @java.lang.Override
        public AttachmentBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AttachmentBlockingStub(channel, callOptions);
        }
      };
    return AttachmentBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AttachmentFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AttachmentFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AttachmentFutureStub>() {
        @java.lang.Override
        public AttachmentFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AttachmentFutureStub(channel, callOptions);
        }
      };
    return AttachmentFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexMethod(), responseObserver);
    }

    /**
     */
    default void destroy(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDestroyMethod(), responseObserver);
    }

    /**
     */
    default void show(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getShowMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Attachment.
   */
  public static abstract class AttachmentImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return AttachmentGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Attachment.
   */
  public static final class AttachmentStub
      extends io.grpc.stub.AbstractAsyncStub<AttachmentStub> {
    private AttachmentStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AttachmentStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AttachmentStub(channel, callOptions);
    }

    /**
     */
    public void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request, responseObserver);
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
    public void show(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getShowMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Attachment.
   */
  public static final class AttachmentBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<AttachmentBlockingStub> {
    private AttachmentBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AttachmentBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AttachmentBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty destroy(com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDestroyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse show(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getShowMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Attachment.
   */
  public static final class AttachmentFutureStub
      extends io.grpc.stub.AbstractFutureStub<AttachmentFutureStub> {
    private AttachmentFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AttachmentFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AttachmentFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse> index(
        com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request);
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
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse> show(
        com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getShowMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_INDEX = 0;
  private static final int METHODID_DESTROY = 1;
  private static final int METHODID_SHOW = 2;

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
        case METHODID_INDEX:
          serviceImpl.index((com.github.saturn_xiv.palm.plugins.nut.v1.Pager) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse>) responseObserver);
          break;
        case METHODID_DESTROY:
          serviceImpl.destroy((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SHOW:
          serviceImpl.show((com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse>) responseObserver);
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
          getIndexMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
              com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse>(
                service, METHODID_INDEX)))
        .addMethod(
          getDestroyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DESTROY)))
        .addMethod(
          getShowMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowRequest,
              com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse>(
                service, METHODID_SHOW)))
        .build();
  }

  private static abstract class AttachmentBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    AttachmentBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Attachment");
    }
  }

  private static final class AttachmentFileDescriptorSupplier
      extends AttachmentBaseDescriptorSupplier {
    AttachmentFileDescriptorSupplier() {}
  }

  private static final class AttachmentMethodDescriptorSupplier
      extends AttachmentBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    AttachmentMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (AttachmentGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AttachmentFileDescriptorSupplier())
              .addMethod(getIndexMethod())
              .addMethod(getDestroyMethod())
              .addMethod(getShowMethod())
              .build();
        }
      }
    }
    return result;
  }
}
