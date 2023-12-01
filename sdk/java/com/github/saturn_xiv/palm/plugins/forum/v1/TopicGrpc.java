package com.github.saturn_xiv.palm.plugins.forum.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: forum.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class TopicGrpc {

  private TopicGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.forum.v1.Topic";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TopicStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TopicStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TopicStub>() {
        @java.lang.Override
        public TopicStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TopicStub(channel, callOptions);
        }
      };
    return TopicStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TopicBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TopicBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TopicBlockingStub>() {
        @java.lang.Override
        public TopicBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TopicBlockingStub(channel, callOptions);
        }
      };
    return TopicBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TopicFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TopicFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TopicFutureStub>() {
        @java.lang.Override
        public TopicFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TopicFutureStub(channel, callOptions);
        }
      };
    return TopicFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Topic.
   */
  public static abstract class TopicImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return TopicGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Topic.
   */
  public static final class TopicStub
      extends io.grpc.stub.AbstractAsyncStub<TopicStub> {
    private TopicStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TopicStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TopicStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Topic.
   */
  public static final class TopicBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<TopicBlockingStub> {
    private TopicBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TopicBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TopicBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Topic.
   */
  public static final class TopicFutureStub
      extends io.grpc.stub.AbstractFutureStub<TopicFutureStub> {
    private TopicFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TopicFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TopicFutureStub(channel, callOptions);
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

  private static abstract class TopicBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TopicBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.forum.v1.Forum.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Topic");
    }
  }

  private static final class TopicFileDescriptorSupplier
      extends TopicBaseDescriptorSupplier {
    TopicFileDescriptorSupplier() {}
  }

  private static final class TopicMethodDescriptorSupplier
      extends TopicBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    TopicMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (TopicGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TopicFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
