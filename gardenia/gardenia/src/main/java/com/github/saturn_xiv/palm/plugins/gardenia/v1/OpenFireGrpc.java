package com.github.saturn_xiv.palm.plugins.gardenia.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: gardenia.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class OpenFireGrpc {

  private OpenFireGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.gardenia.v1.OpenFire";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static OpenFireStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OpenFireStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OpenFireStub>() {
        @java.lang.Override
        public OpenFireStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OpenFireStub(channel, callOptions);
        }
      };
    return OpenFireStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static OpenFireBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OpenFireBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OpenFireBlockingStub>() {
        @java.lang.Override
        public OpenFireBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OpenFireBlockingStub(channel, callOptions);
        }
      };
    return OpenFireBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static OpenFireFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OpenFireFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OpenFireFutureStub>() {
        @java.lang.Override
        public OpenFireFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OpenFireFutureStub(channel, callOptions);
        }
      };
    return OpenFireFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service OpenFire.
   */
  public static abstract class OpenFireImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return OpenFireGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service OpenFire.
   */
  public static final class OpenFireStub
      extends io.grpc.stub.AbstractAsyncStub<OpenFireStub> {
    private OpenFireStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OpenFireStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OpenFireStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service OpenFire.
   */
  public static final class OpenFireBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<OpenFireBlockingStub> {
    private OpenFireBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OpenFireBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OpenFireBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service OpenFire.
   */
  public static final class OpenFireFutureStub
      extends io.grpc.stub.AbstractFutureStub<OpenFireFutureStub> {
    private OpenFireFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OpenFireFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OpenFireFutureStub(channel, callOptions);
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

  private static abstract class OpenFireBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    OpenFireBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.gardenia.v1.Gardenia.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("OpenFire");
    }
  }

  private static final class OpenFireFileDescriptorSupplier
      extends OpenFireBaseDescriptorSupplier {
    OpenFireFileDescriptorSupplier() {}
  }

  private static final class OpenFireMethodDescriptorSupplier
      extends OpenFireBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    OpenFireMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (OpenFireGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new OpenFireFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
