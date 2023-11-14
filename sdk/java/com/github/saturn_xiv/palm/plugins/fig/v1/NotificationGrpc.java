package com.github.saturn_xiv.palm.plugins.fig.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * ----------------------------------------------------------------------------
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: fig.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class NotificationGrpc {

  private NotificationGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.fig.v1.Notification";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse> getIndexMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Index",
      requestType = com.github.saturn_xiv.palm.plugins.nut.v1.Pager.class,
      responseType = com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager,
      com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse> getIndexMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse> getIndexMethod;
    if ((getIndexMethod = NotificationGrpc.getIndexMethod) == null) {
      synchronized (NotificationGrpc.class) {
        if ((getIndexMethod = NotificationGrpc.getIndexMethod) == null) {
          NotificationGrpc.getIndexMethod = getIndexMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.nut.v1.Pager, com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Index"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.nut.v1.Pager.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new NotificationMethodDescriptorSupplier("Index"))
              .build();
        }
      }
    }
    return getIndexMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static NotificationStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<NotificationStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<NotificationStub>() {
        @java.lang.Override
        public NotificationStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new NotificationStub(channel, callOptions);
        }
      };
    return NotificationStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static NotificationBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<NotificationBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<NotificationBlockingStub>() {
        @java.lang.Override
        public NotificationBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new NotificationBlockingStub(channel, callOptions);
        }
      };
    return NotificationBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static NotificationFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<NotificationFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<NotificationFutureStub>() {
        @java.lang.Override
        public NotificationFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new NotificationFutureStub(channel, callOptions);
        }
      };
    return NotificationFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Notification.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static abstract class NotificationImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return NotificationGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Notification.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class NotificationStub
      extends io.grpc.stub.AbstractAsyncStub<NotificationStub> {
    private NotificationStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NotificationStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new NotificationStub(channel, callOptions);
    }

    /**
     */
    public void index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Notification.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class NotificationBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<NotificationBlockingStub> {
    private NotificationBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NotificationBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new NotificationBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse index(com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Notification.
   * <pre>
   * ----------------------------------------------------------------------------
   * </pre>
   */
  public static final class NotificationFutureStub
      extends io.grpc.stub.AbstractFutureStub<NotificationFutureStub> {
    private NotificationFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NotificationFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new NotificationFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse> index(
        com.github.saturn_xiv.palm.plugins.nut.v1.Pager request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndexMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_INDEX = 0;

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
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse>) responseObserver);
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
              com.github.saturn_xiv.palm.plugins.fig.v1.IndexNotificationResponse>(
                service, METHODID_INDEX)))
        .build();
  }

  private static abstract class NotificationBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    NotificationBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.fig.v1.Fig.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Notification");
    }
  }

  private static final class NotificationFileDescriptorSupplier
      extends NotificationBaseDescriptorSupplier {
    NotificationFileDescriptorSupplier() {}
  }

  private static final class NotificationMethodDescriptorSupplier
      extends NotificationBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    NotificationMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (NotificationGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new NotificationFileDescriptorSupplier())
              .addMethod(getIndexMethod())
              .build();
        }
      }
    }
    return result;
  }
}
