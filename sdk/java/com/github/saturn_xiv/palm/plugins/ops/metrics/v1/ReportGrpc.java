package com.github.saturn_xiv.palm.plugins.ops.metrics.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: ops-metrics.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ReportGrpc {

  private ReportGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.ops.metrics.v1.Report";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest,
      com.google.protobuf.Empty> getHeartbeatMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Heartbeat",
      requestType = com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest,
      com.google.protobuf.Empty> getHeartbeatMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest, com.google.protobuf.Empty> getHeartbeatMethod;
    if ((getHeartbeatMethod = ReportGrpc.getHeartbeatMethod) == null) {
      synchronized (ReportGrpc.class) {
        if ((getHeartbeatMethod = ReportGrpc.getHeartbeatMethod) == null) {
          ReportGrpc.getHeartbeatMethod = getHeartbeatMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Heartbeat"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new ReportMethodDescriptorSupplier("Heartbeat"))
              .build();
        }
      }
    }
    return getHeartbeatMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest,
      com.google.protobuf.Empty> getJournalMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Journal",
      requestType = com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest,
      com.google.protobuf.Empty> getJournalMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest, com.google.protobuf.Empty> getJournalMethod;
    if ((getJournalMethod = ReportGrpc.getJournalMethod) == null) {
      synchronized (ReportGrpc.class) {
        if ((getJournalMethod = ReportGrpc.getJournalMethod) == null) {
          ReportGrpc.getJournalMethod = getJournalMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Journal"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new ReportMethodDescriptorSupplier("Journal"))
              .build();
        }
      }
    }
    return getJournalMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest,
      com.google.protobuf.Empty> getNginxMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Nginx",
      requestType = com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest,
      com.google.protobuf.Empty> getNginxMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest, com.google.protobuf.Empty> getNginxMethod;
    if ((getNginxMethod = ReportGrpc.getNginxMethod) == null) {
      synchronized (ReportGrpc.class) {
        if ((getNginxMethod = ReportGrpc.getNginxMethod) == null) {
          ReportGrpc.getNginxMethod = getNginxMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Nginx"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new ReportMethodDescriptorSupplier("Nginx"))
              .build();
        }
      }
    }
    return getNginxMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ReportStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ReportStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ReportStub>() {
        @java.lang.Override
        public ReportStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ReportStub(channel, callOptions);
        }
      };
    return ReportStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ReportBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ReportBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ReportBlockingStub>() {
        @java.lang.Override
        public ReportBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ReportBlockingStub(channel, callOptions);
        }
      };
    return ReportBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ReportFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ReportFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ReportFutureStub>() {
        @java.lang.Override
        public ReportFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ReportFutureStub(channel, callOptions);
        }
      };
    return ReportFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void heartbeat(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHeartbeatMethod(), responseObserver);
    }

    /**
     */
    default void journal(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getJournalMethod(), responseObserver);
    }

    /**
     */
    default void nginx(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getNginxMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Report.
   */
  public static abstract class ReportImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return ReportGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Report.
   */
  public static final class ReportStub
      extends io.grpc.stub.AbstractAsyncStub<ReportStub> {
    private ReportStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ReportStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ReportStub(channel, callOptions);
    }

    /**
     */
    public void heartbeat(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHeartbeatMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void journal(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getJournalMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void nginx(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getNginxMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Report.
   */
  public static final class ReportBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<ReportBlockingStub> {
    private ReportBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ReportBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ReportBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty heartbeat(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHeartbeatMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty journal(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getJournalMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty nginx(com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getNginxMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Report.
   */
  public static final class ReportFutureStub
      extends io.grpc.stub.AbstractFutureStub<ReportFutureStub> {
    private ReportFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ReportFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ReportFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> heartbeat(
        com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHeartbeatMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> journal(
        com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getJournalMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> nginx(
        com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getNginxMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_HEARTBEAT = 0;
  private static final int METHODID_JOURNAL = 1;
  private static final int METHODID_NGINX = 2;

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
        case METHODID_HEARTBEAT:
          serviceImpl.heartbeat((com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_JOURNAL:
          serviceImpl.journal((com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_NGINX:
          serviceImpl.nginx((com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest) request,
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
          getHeartbeatMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportHeartbeatRequest,
              com.google.protobuf.Empty>(
                service, METHODID_HEARTBEAT)))
        .addMethod(
          getJournalMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportJournalRequest,
              com.google.protobuf.Empty>(
                service, METHODID_JOURNAL)))
        .addMethod(
          getNginxMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.metrics.v1.ReportNginxRequest,
              com.google.protobuf.Empty>(
                service, METHODID_NGINX)))
        .build();
  }

  private static abstract class ReportBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ReportBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.metrics.v1.OpsMetrics.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Report");
    }
  }

  private static final class ReportFileDescriptorSupplier
      extends ReportBaseDescriptorSupplier {
    ReportFileDescriptorSupplier() {}
  }

  private static final class ReportMethodDescriptorSupplier
      extends ReportBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    ReportMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (ReportGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ReportFileDescriptorSupplier())
              .addMethod(getHeartbeatMethod())
              .addMethod(getJournalMethod())
              .addMethod(getNginxMethod())
              .build();
        }
      }
    }
    return result;
  }
}
