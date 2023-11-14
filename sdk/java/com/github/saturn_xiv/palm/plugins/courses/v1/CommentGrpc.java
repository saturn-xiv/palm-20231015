package com.github.saturn_xiv.palm.plugins.courses.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: courses.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class CommentGrpc {

  private CommentGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.courses.v1.Comment";

  // Static method descriptors that strictly reflect the proto.
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

  private static abstract class CommentBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    CommentBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.courses.v1.Courses.getDescriptor();
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
              .build();
        }
      }
    }
    return result;
  }
}
