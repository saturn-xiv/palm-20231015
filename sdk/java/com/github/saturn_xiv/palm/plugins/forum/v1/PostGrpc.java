package com.github.saturn_xiv.palm.plugins.forum.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: forum.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class PostGrpc {

  private PostGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.forum.v1.Post";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PostStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PostStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PostStub>() {
        @java.lang.Override
        public PostStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PostStub(channel, callOptions);
        }
      };
    return PostStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PostBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PostBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PostBlockingStub>() {
        @java.lang.Override
        public PostBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PostBlockingStub(channel, callOptions);
        }
      };
    return PostBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PostFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PostFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PostFutureStub>() {
        @java.lang.Override
        public PostFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PostFutureStub(channel, callOptions);
        }
      };
    return PostFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Post.
   */
  public static abstract class PostImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return PostGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Post.
   */
  public static final class PostStub
      extends io.grpc.stub.AbstractAsyncStub<PostStub> {
    private PostStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PostStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PostStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Post.
   */
  public static final class PostBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<PostBlockingStub> {
    private PostBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PostBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PostBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Post.
   */
  public static final class PostFutureStub
      extends io.grpc.stub.AbstractFutureStub<PostFutureStub> {
    private PostFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PostFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PostFutureStub(channel, callOptions);
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

  private static abstract class PostBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PostBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.forum.v1.Forum.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Post");
    }
  }

  private static final class PostFileDescriptorSupplier
      extends PostBaseDescriptorSupplier {
    PostFileDescriptorSupplier() {}
  }

  private static final class PostMethodDescriptorSupplier
      extends PostBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    PostMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (PostGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PostFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
