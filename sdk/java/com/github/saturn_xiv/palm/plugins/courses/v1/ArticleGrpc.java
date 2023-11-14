package com.github.saturn_xiv.palm.plugins.courses.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: courses.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ArticleGrpc {

  private ArticleGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.courses.v1.Article";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ArticleStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ArticleStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ArticleStub>() {
        @java.lang.Override
        public ArticleStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ArticleStub(channel, callOptions);
        }
      };
    return ArticleStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ArticleBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ArticleBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ArticleBlockingStub>() {
        @java.lang.Override
        public ArticleBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ArticleBlockingStub(channel, callOptions);
        }
      };
    return ArticleBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ArticleFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ArticleFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ArticleFutureStub>() {
        @java.lang.Override
        public ArticleFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ArticleFutureStub(channel, callOptions);
        }
      };
    return ArticleFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Article.
   */
  public static abstract class ArticleImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return ArticleGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Article.
   */
  public static final class ArticleStub
      extends io.grpc.stub.AbstractAsyncStub<ArticleStub> {
    private ArticleStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ArticleStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ArticleStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Article.
   */
  public static final class ArticleBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<ArticleBlockingStub> {
    private ArticleBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ArticleBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ArticleBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Article.
   */
  public static final class ArticleFutureStub
      extends io.grpc.stub.AbstractFutureStub<ArticleFutureStub> {
    private ArticleFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ArticleFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ArticleFutureStub(channel, callOptions);
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

  private static abstract class ArticleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ArticleBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.courses.v1.Courses.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Article");
    }
  }

  private static final class ArticleFileDescriptorSupplier
      extends ArticleBaseDescriptorSupplier {
    ArticleFileDescriptorSupplier() {}
  }

  private static final class ArticleMethodDescriptorSupplier
      extends ArticleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    ArticleMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (ArticleGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ArticleFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
