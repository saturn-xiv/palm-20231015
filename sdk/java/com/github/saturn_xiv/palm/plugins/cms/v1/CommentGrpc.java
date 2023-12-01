package com.github.saturn_xiv.palm.plugins.cms.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: cms.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class CommentGrpc {

  private CommentGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.cms.v1.Comment";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest,
      com.google.protobuf.Empty> getCreateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Create",
      requestType = com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest,
      com.google.protobuf.Empty> getCreateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest, com.google.protobuf.Empty> getCreateMethod;
    if ((getCreateMethod = CommentGrpc.getCreateMethod) == null) {
      synchronized (CommentGrpc.class) {
        if ((getCreateMethod = CommentGrpc.getCreateMethod) == null) {
          CommentGrpc.getCreateMethod = getCreateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Create"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new CommentMethodDescriptorSupplier("Create"))
              .build();
        }
      }
    }
    return getCreateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Update",
      requestType = com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest, com.google.protobuf.Empty> getUpdateMethod;
    if ((getUpdateMethod = CommentGrpc.getUpdateMethod) == null) {
      synchronized (CommentGrpc.class) {
        if ((getUpdateMethod = CommentGrpc.getUpdateMethod) == null) {
          CommentGrpc.getUpdateMethod = getUpdateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Update"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new CommentMethodDescriptorSupplier("Update"))
              .build();
        }
      }
    }
    return getUpdateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager,
      com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse> getIndexMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Index",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager.class,
      responseType = com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager,
      com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse> getIndexMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager, com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse> getIndexMethod;
    if ((getIndexMethod = CommentGrpc.getIndexMethod) == null) {
      synchronized (CommentGrpc.class) {
        if ((getIndexMethod = CommentGrpc.getIndexMethod) == null) {
          CommentGrpc.getIndexMethod = getIndexMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager, com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Index"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CommentMethodDescriptorSupplier("Index"))
              .build();
        }
      }
    }
    return getIndexMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest,
      com.google.protobuf.Empty> getDestoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Destory",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest,
      com.google.protobuf.Empty> getDestoryMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest, com.google.protobuf.Empty> getDestoryMethod;
    if ((getDestoryMethod = CommentGrpc.getDestoryMethod) == null) {
      synchronized (CommentGrpc.class) {
        if ((getDestoryMethod = CommentGrpc.getDestoryMethod) == null) {
          CommentGrpc.getDestoryMethod = getDestoryMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Destory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new CommentMethodDescriptorSupplier("Destory"))
              .build();
        }
      }
    }
    return getDestoryMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static CommentStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CommentStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CommentStub>() {
        @java.lang.Override
        public CommentStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CommentStub(channel, callOptions);
        }
      };
    return CommentStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static CommentBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CommentBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CommentBlockingStub>() {
        @java.lang.Override
        public CommentBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CommentBlockingStub(channel, callOptions);
        }
      };
    return CommentBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static CommentFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CommentFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CommentFutureStub>() {
        @java.lang.Override
        public CommentFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CommentFutureStub(channel, callOptions);
        }
      };
    return CommentFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void create(com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateMethod(), responseObserver);
    }

    /**
     */
    default void update(com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateMethod(), responseObserver);
    }

    /**
     */
    default void index(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexMethod(), responseObserver);
    }

    /**
     */
    default void destory(com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDestoryMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Comment.
   */
  public static abstract class CommentImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return CommentGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Comment.
   */
  public static final class CommentStub
      extends io.grpc.stub.AbstractAsyncStub<CommentStub> {
    private CommentStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CommentStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CommentStub(channel, callOptions);
    }

    /**
     */
    public void create(com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void update(com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void index(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void destory(com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDestoryMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Comment.
   */
  public static final class CommentBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<CommentBlockingStub> {
    private CommentBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CommentBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CommentBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty create(com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty update(com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse index(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty destory(com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDestoryMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Comment.
   */
  public static final class CommentFutureStub
      extends io.grpc.stub.AbstractFutureStub<CommentFutureStub> {
    private CommentFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CommentFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CommentFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> create(
        com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> update(
        com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse> index(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> destory(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDestoryMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE = 0;
  private static final int METHODID_UPDATE = 1;
  private static final int METHODID_INDEX = 2;
  private static final int METHODID_DESTORY = 3;

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
          serviceImpl.create((com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UPDATE:
          serviceImpl.update((com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_INDEX:
          serviceImpl.index((com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse>) responseObserver);
          break;
        case METHODID_DESTORY:
          serviceImpl.destory((com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
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
              com.github.saturn_xiv.palm.plugins.cms.v1.CommentCreateRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CREATE)))
        .addMethod(
          getUpdateMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.cms.v1.CommentUpdateRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE)))
        .addMethod(
          getIndexMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.Pager,
              com.github.saturn_xiv.palm.plugins.cms.v1.CommentIndexResponse>(
                service, METHODID_INDEX)))
        .addMethod(
          getDestoryMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.IdRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DESTORY)))
        .build();
  }

  private static abstract class CommentBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    CommentBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.cms.v1.Cms.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Comment");
    }
  }

  private static final class CommentFileDescriptorSupplier
      extends CommentBaseDescriptorSupplier {
    CommentFileDescriptorSupplier() {}
  }

  private static final class CommentMethodDescriptorSupplier
      extends CommentBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    CommentMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (CommentGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new CommentFileDescriptorSupplier())
              .addMethod(getCreateMethod())
              .addMethod(getUpdateMethod())
              .addMethod(getIndexMethod())
              .addMethod(getDestoryMethod())
              .build();
        }
      }
    }
    return result;
  }
}
