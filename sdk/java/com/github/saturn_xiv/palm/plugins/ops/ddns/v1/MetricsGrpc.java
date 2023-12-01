package com.github.saturn_xiv.palm.plugins.ops.ddns.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: ops-ddns.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class MetricsGrpc {

  private MetricsGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.ops.ddns.v1.Metrics";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MetricsStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MetricsStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MetricsStub>() {
        @java.lang.Override
        public MetricsStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MetricsStub(channel, callOptions);
        }
      };
    return MetricsStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MetricsBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MetricsBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MetricsBlockingStub>() {
        @java.lang.Override
        public MetricsBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MetricsBlockingStub(channel, callOptions);
        }
      };
    return MetricsBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MetricsFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MetricsFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MetricsFutureStub>() {
        @java.lang.Override
        public MetricsFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MetricsFutureStub(channel, callOptions);
        }
      };
    return MetricsFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Metrics.
   */
  public static abstract class MetricsImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return MetricsGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Metrics.
   */
  public static final class MetricsStub
      extends io.grpc.stub.AbstractAsyncStub<MetricsStub> {
    private MetricsStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MetricsStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MetricsStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Metrics.
   */
  public static final class MetricsBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<MetricsBlockingStub> {
    private MetricsBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MetricsBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MetricsBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Metrics.
   */
  public static final class MetricsFutureStub
      extends io.grpc.stub.AbstractFutureStub<MetricsFutureStub> {
    private MetricsFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MetricsFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MetricsFutureStub(channel, callOptions);
    }
  }


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
        .build();
  }

  private static abstract class MetricsBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MetricsBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.ddns.v1.OpsDdns.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Metrics");
    }
  }

  private static final class MetricsFileDescriptorSupplier
      extends MetricsBaseDescriptorSupplier {
    MetricsFileDescriptorSupplier() {}
  }

  private static final class MetricsMethodDescriptorSupplier
      extends MetricsBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    MetricsMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (MetricsGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MetricsFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
