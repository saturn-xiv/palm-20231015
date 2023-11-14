package com.github.saturn_xiv.palm.plugins.babel.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: babel.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class SanskritGrpc {

  private SanskritGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.babel.v1.Sanskrit";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SanskritStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SanskritStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SanskritStub>() {
        @java.lang.Override
        public SanskritStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SanskritStub(channel, callOptions);
        }
      };
    return SanskritStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SanskritBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SanskritBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SanskritBlockingStub>() {
        @java.lang.Override
        public SanskritBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SanskritBlockingStub(channel, callOptions);
        }
      };
    return SanskritBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SanskritFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SanskritFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SanskritFutureStub>() {
        @java.lang.Override
        public SanskritFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SanskritFutureStub(channel, callOptions);
        }
      };
    return SanskritFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Sanskrit.
   */
  public static abstract class SanskritImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return SanskritGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Sanskrit.
   */
  public static final class SanskritStub
      extends io.grpc.stub.AbstractAsyncStub<SanskritStub> {
    private SanskritStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SanskritStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SanskritStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Sanskrit.
   */
  public static final class SanskritBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<SanskritBlockingStub> {
    private SanskritBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SanskritBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SanskritBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Sanskrit.
   */
  public static final class SanskritFutureStub
      extends io.grpc.stub.AbstractFutureStub<SanskritFutureStub> {
    private SanskritFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SanskritFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SanskritFutureStub(channel, callOptions);
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

  private static abstract class SanskritBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SanskritBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.babel.v1.Babel.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Sanskrit");
    }
  }

  private static final class SanskritFileDescriptorSupplier
      extends SanskritBaseDescriptorSupplier {
    SanskritFileDescriptorSupplier() {}
  }

  private static final class SanskritMethodDescriptorSupplier
      extends SanskritBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    SanskritMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (SanskritGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SanskritFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
