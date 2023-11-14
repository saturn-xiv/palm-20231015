package com.github.saturn_xiv.palm.plugins.cms.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: cms.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class FolderGrpc {

  private FolderGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.cms.v1.Folder";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static FolderStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<FolderStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<FolderStub>() {
        @java.lang.Override
        public FolderStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new FolderStub(channel, callOptions);
        }
      };
    return FolderStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static FolderBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<FolderBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<FolderBlockingStub>() {
        @java.lang.Override
        public FolderBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new FolderBlockingStub(channel, callOptions);
        }
      };
    return FolderBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static FolderFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<FolderFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<FolderFutureStub>() {
        @java.lang.Override
        public FolderFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new FolderFutureStub(channel, callOptions);
        }
      };
    return FolderFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Folder.
   */
  public static abstract class FolderImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return FolderGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Folder.
   */
  public static final class FolderStub
      extends io.grpc.stub.AbstractAsyncStub<FolderStub> {
    private FolderStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FolderStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new FolderStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Folder.
   */
  public static final class FolderBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<FolderBlockingStub> {
    private FolderBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FolderBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new FolderBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Folder.
   */
  public static final class FolderFutureStub
      extends io.grpc.stub.AbstractFutureStub<FolderFutureStub> {
    private FolderFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FolderFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new FolderFutureStub(channel, callOptions);
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

  private static abstract class FolderBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    FolderBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.cms.v1.Cms.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Folder");
    }
  }

  private static final class FolderFileDescriptorSupplier
      extends FolderBaseDescriptorSupplier {
    FolderFileDescriptorSupplier() {}
  }

  private static final class FolderMethodDescriptorSupplier
      extends FolderBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    FolderMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (FolderGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new FolderFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
