package com.github.saturn_xiv.palm.plugins.nut.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: nut.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class TagGrpc {

  private TagGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.nut.v1.Tag";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest,
      com.google.protobuf.Empty> getCreateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Create",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest,
      com.google.protobuf.Empty> getCreateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest, com.google.protobuf.Empty> getCreateMethod;
    if ((getCreateMethod = TagGrpc.getCreateMethod) == null) {
      synchronized (TagGrpc.class) {
        if ((getCreateMethod = TagGrpc.getCreateMethod) == null) {
          TagGrpc.getCreateMethod = getCreateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Create"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new TagMethodDescriptorSupplier("Create"))
              .build();
        }
      }
    }
    return getCreateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Update",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest,
      com.google.protobuf.Empty> getUpdateMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest, com.google.protobuf.Empty> getUpdateMethod;
    if ((getUpdateMethod = TagGrpc.getUpdateMethod) == null) {
      synchronized (TagGrpc.class) {
        if ((getUpdateMethod = TagGrpc.getUpdateMethod) == null) {
          TagGrpc.getUpdateMethod = getUpdateMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Update"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new TagMethodDescriptorSupplier("Update"))
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
    if ((getDestroyMethod = TagGrpc.getDestroyMethod) == null) {
      synchronized (TagGrpc.class) {
        if ((getDestroyMethod = TagGrpc.getDestroyMethod) == null) {
          TagGrpc.getDestroyMethod = getDestroyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Destroy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new TagMethodDescriptorSupplier("Destroy"))
              .build();
        }
      }
    }
    return getDestroyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse> getIndexMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Index",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse> getIndexMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse> getIndexMethod;
    if ((getIndexMethod = TagGrpc.getIndexMethod) == null) {
      synchronized (TagGrpc.class) {
        if ((getIndexMethod = TagGrpc.getIndexMethod) == null) {
          TagGrpc.getIndexMethod = getIndexMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Index"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TagMethodDescriptorSupplier("Index"))
              .build();
        }
      }
    }
    return getIndexMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TagStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TagStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TagStub>() {
        @java.lang.Override
        public TagStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TagStub(channel, callOptions);
        }
      };
    return TagStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TagBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TagBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TagBlockingStub>() {
        @java.lang.Override
        public TagBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TagBlockingStub(channel, callOptions);
        }
      };
    return TagBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TagFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TagFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TagFutureStub>() {
        @java.lang.Override
        public TagFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TagFutureStub(channel, callOptions);
        }
      };
    return TagFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void create(com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateMethod(), responseObserver);
    }

    /**
     */
    default void update(com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest request,
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
    default void index(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Tag.
   */
  public static abstract class TagImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return TagGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Tag.
   */
  public static final class TagStub
      extends io.grpc.stub.AbstractAsyncStub<TagStub> {
    private TagStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TagStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TagStub(channel, callOptions);
    }

    /**
     */
    public void create(com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void update(com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest request,
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
    public void index(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Tag.
   */
  public static final class TagBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<TagBlockingStub> {
    private TagBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TagBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TagBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty create(com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty update(com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest request) {
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
    public com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse index(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Tag.
   */
  public static final class TagFutureStub
      extends io.grpc.stub.AbstractFutureStub<TagFutureStub> {
    private TagFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TagFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TagFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> create(
        com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> update(
        com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest request) {
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
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse> index(
        com.google.protobuf.Empty request) {
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
          serviceImpl.create((com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UPDATE:
          serviceImpl.update((com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DESTROY:
          serviceImpl.destroy((com.github.saturn_xiv.palm.plugins.nut.v1.IdRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_INDEX:
          serviceImpl.index((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse>) responseObserver);
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
              com.github.saturn_xiv.palm.plugins.nut.v1.TagCreateRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CREATE)))
        .addMethod(
          getUpdateMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.nut.v1.TagUpdateRequest,
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
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.nut.v1.TagIndexResponse>(
                service, METHODID_INDEX)))
        .build();
  }

  private static abstract class TagBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TagBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Tag");
    }
  }

  private static final class TagFileDescriptorSupplier
      extends TagBaseDescriptorSupplier {
    TagFileDescriptorSupplier() {}
  }

  private static final class TagMethodDescriptorSupplier
      extends TagBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    TagMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (TagGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TagFileDescriptorSupplier())
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
