package com.github.saturn_xiv.palm.plugins.ops.mail.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: ops-mail.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class VpnGrpc {

  private VpnGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.ops.mail.v1.Vpn";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static VpnStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<VpnStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<VpnStub>() {
        @java.lang.Override
        public VpnStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new VpnStub(channel, callOptions);
        }
      };
    return VpnStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static VpnBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<VpnBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<VpnBlockingStub>() {
        @java.lang.Override
        public VpnBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new VpnBlockingStub(channel, callOptions);
        }
      };
    return VpnBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static VpnFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<VpnFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<VpnFutureStub>() {
        @java.lang.Override
        public VpnFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new VpnFutureStub(channel, callOptions);
        }
      };
    return VpnFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Vpn.
   */
  public static abstract class VpnImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return VpnGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Vpn.
   */
  public static final class VpnStub
      extends io.grpc.stub.AbstractAsyncStub<VpnStub> {
    private VpnStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VpnStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new VpnStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Vpn.
   */
  public static final class VpnBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<VpnBlockingStub> {
    private VpnBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VpnBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new VpnBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Vpn.
   */
  public static final class VpnFutureStub
      extends io.grpc.stub.AbstractFutureStub<VpnFutureStub> {
    private VpnFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VpnFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new VpnFutureStub(channel, callOptions);
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

  private static abstract class VpnBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    VpnBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.mail.v1.OpsMail.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Vpn");
    }
  }

  private static final class VpnFileDescriptorSupplier
      extends VpnBaseDescriptorSupplier {
    VpnFileDescriptorSupplier() {}
  }

  private static final class VpnMethodDescriptorSupplier
      extends VpnBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    VpnMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (VpnGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new VpnFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
