package com.github.saturn_xiv.palm.plugins.ops.mail.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.1)",
    comments = "Source: ops-mail.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class MailGrpc {

  private MailGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.ops.mail.v1.Mail";

  // Static method descriptors that strictly reflect the proto.
  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MailStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MailStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MailStub>() {
        @java.lang.Override
        public MailStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MailStub(channel, callOptions);
        }
      };
    return MailStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MailBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MailBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MailBlockingStub>() {
        @java.lang.Override
        public MailBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MailBlockingStub(channel, callOptions);
        }
      };
    return MailBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MailFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MailFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MailFutureStub>() {
        @java.lang.Override
        public MailFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MailFutureStub(channel, callOptions);
        }
      };
    return MailFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {
  }

  /**
   * Base class for the server implementation of the service Mail.
   */
  public static abstract class MailImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return MailGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Mail.
   */
  public static final class MailStub
      extends io.grpc.stub.AbstractAsyncStub<MailStub> {
    private MailStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MailStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MailStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Mail.
   */
  public static final class MailBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<MailBlockingStub> {
    private MailBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MailBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MailBlockingStub(channel, callOptions);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Mail.
   */
  public static final class MailFutureStub
      extends io.grpc.stub.AbstractFutureStub<MailFutureStub> {
    private MailFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MailFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MailFutureStub(channel, callOptions);
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

  private static abstract class MailBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MailBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.mail.v1.OpsMail.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Mail");
    }
  }

  private static final class MailFileDescriptorSupplier
      extends MailBaseDescriptorSupplier {
    MailFileDescriptorSupplier() {}
  }

  private static final class MailMethodDescriptorSupplier
      extends MailBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    MailMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (MailGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MailFileDescriptorSupplier())
              .build();
        }
      }
    }
    return result;
  }
}
