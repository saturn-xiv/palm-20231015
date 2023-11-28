package com.github.saturn_xiv.palm.plugins.babel.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: babel.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class TibetanGrpc {

  private TibetanGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.babel.v1.Tibetan";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TibetanStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TibetanStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TibetanStub>() {
        @java.lang.Override
        public TibetanStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TibetanStub(channel, callOptions);
        }
      };
    return TibetanStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TibetanBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TibetanBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TibetanBlockingStub>() {
        @java.lang.Override
        public TibetanBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TibetanBlockingStub(channel, callOptions);
        }
      };
    return TibetanBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TibetanFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TibetanFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TibetanFutureStub>() {
        @java.lang.Override
        public TibetanFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TibetanFutureStub(channel, callOptions);
        }
      };
    return TibetanFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Tibetan.
   */
  public static abstract class TibetanImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return TibetanGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Tibetan.
   */
  public static final class TibetanStub
      extends io.grpc.stub.AbstractAsyncStub<TibetanStub> {
    private TibetanStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TibetanStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TibetanStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Tibetan.
   */
  public static final class TibetanBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<TibetanBlockingStub> {
    private TibetanBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TibetanBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TibetanBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Tibetan.
   */
  public static final class TibetanFutureStub
      extends io.grpc.stub.AbstractFutureStub<TibetanFutureStub> {
    private TibetanFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TibetanFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TibetanFutureStub(channel, callOptions);
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

  private static abstract class TibetanBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TibetanBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.babel.v1.Babel.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Tibetan");
    }
  }

  private static final class TibetanFileDescriptorSupplier
      extends TibetanBaseDescriptorSupplier {
    TibetanFileDescriptorSupplier() {}
  }

  private static final class TibetanMethodDescriptorSupplier
      extends TibetanBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    TibetanMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (TibetanGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TibetanFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
