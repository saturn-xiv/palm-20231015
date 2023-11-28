package com.github.saturn_xiv.palm.plugins.lemon.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: lemon.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class SiteGrpc {

  private SiteGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.lemon.v1.Site";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse> getLayoutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Layout",
      requestType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse> getLayoutMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse> getLayoutMethod;
    if ((getLayoutMethod = SiteGrpc.getLayoutMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getLayoutMethod = SiteGrpc.getLayoutMethod) == null) {
          SiteGrpc.getLayoutMethod = getLayoutMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Layout"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("Layout"))
              .build();
        }
      }
    }
    return getLayoutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Duration,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse> getRssMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Rss",
      requestType = com.google.protobuf.Duration.class,
      responseType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Duration,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse> getRssMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Duration, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse> getRssMethod;
    if ((getRssMethod = SiteGrpc.getRssMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getRssMethod = SiteGrpc.getRssMethod) == null) {
          SiteGrpc.getRssMethod = getRssMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Duration, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Rss"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Duration.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("Rss"))
              .build();
        }
      }
    }
    return getRssMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse> getSitemapMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Sitemap",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse> getSitemapMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse> getSitemapMethod;
    if ((getSitemapMethod = SiteGrpc.getSitemapMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getSitemapMethod = SiteGrpc.getSitemapMethod) == null) {
          SiteGrpc.getSitemapMethod = getSitemapMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Sitemap"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("Sitemap"))
              .build();
        }
      }
    }
    return getSitemapMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse> getShowPageMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ShowPage",
      requestType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse> getShowPageMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse> getShowPageMethod;
    if ((getShowPageMethod = SiteGrpc.getShowPageMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getShowPageMethod = SiteGrpc.getShowPageMethod) == null) {
          SiteGrpc.getShowPageMethod = getShowPageMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ShowPage"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("ShowPage"))
              .build();
        }
      }
    }
    return getShowPageMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse> getHomePageMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HomePage",
      requestType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest,
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse> getHomePageMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse> getHomePageMethod;
    if ((getHomePageMethod = SiteGrpc.getHomePageMethod) == null) {
      synchronized (SiteGrpc.class) {
        if ((getHomePageMethod = SiteGrpc.getHomePageMethod) == null) {
          SiteGrpc.getHomePageMethod = getHomePageMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HomePage"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SiteMethodDescriptorSupplier("HomePage"))
              .build();
        }
      }
    }
    return getHomePageMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SiteStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SiteStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SiteStub>() {
        @java.lang.Override
        public SiteStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SiteStub(channel, callOptions);
        }
      };
    return SiteStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SiteBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SiteBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SiteBlockingStub>() {
        @java.lang.Override
        public SiteBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SiteBlockingStub(channel, callOptions);
        }
      };
    return SiteBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SiteFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SiteFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SiteFutureStub>() {
        @java.lang.Override
        public SiteFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SiteFutureStub(channel, callOptions);
        }
      };
    return SiteFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void layout(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLayoutMethod(), responseObserver);
    }

    /**
     */
    default void rss(com.google.protobuf.Duration request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRssMethod(), responseObserver);
    }

    /**
     */
    default void sitemap(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSitemapMethod(), responseObserver);
    }

    /**
     */
    default void showPage(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getShowPageMethod(), responseObserver);
    }

    /**
     */
    default void homePage(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHomePageMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Site.
   */
  public static abstract class SiteImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return SiteGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Site.
   */
  public static final class SiteStub
      extends io.grpc.stub.AbstractAsyncStub<SiteStub> {
    private SiteStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SiteStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SiteStub(channel, callOptions);
    }

    /**
     */
    public void layout(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLayoutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void rss(com.google.protobuf.Duration request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRssMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sitemap(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSitemapMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void showPage(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getShowPageMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void homePage(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHomePageMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Site.
   */
  public static final class SiteBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<SiteBlockingStub> {
    private SiteBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SiteBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SiteBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse layout(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLayoutMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse rss(com.google.protobuf.Duration request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRssMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse sitemap(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSitemapMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse showPage(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getShowPageMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse homePage(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHomePageMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Site.
   */
  public static final class SiteFutureStub
      extends io.grpc.stub.AbstractFutureStub<SiteFutureStub> {
    private SiteFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SiteFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SiteFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse> layout(
        com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLayoutMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse> rss(
        com.google.protobuf.Duration request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRssMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse> sitemap(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSitemapMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse> showPage(
        com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getShowPageMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse> homePage(
        com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHomePageMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_LAYOUT = 0;
  private static final int METHODID_RSS = 1;
  private static final int METHODID_SITEMAP = 2;
  private static final int METHODID_SHOW_PAGE = 3;
  private static final int METHODID_HOME_PAGE = 4;

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
        case METHODID_LAYOUT:
          serviceImpl.layout((com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse>) responseObserver);
          break;
        case METHODID_RSS:
          serviceImpl.rss((com.google.protobuf.Duration) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse>) responseObserver);
          break;
        case METHODID_SITEMAP:
          serviceImpl.sitemap((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse>) responseObserver);
          break;
        case METHODID_SHOW_PAGE:
          serviceImpl.showPage((com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse>) responseObserver);
          break;
        case METHODID_HOME_PAGE:
          serviceImpl.homePage((com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse>) responseObserver);
          break;
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
        .addMethod(
          getLayoutMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutRequest,
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteLayoutResponse>(
                service, METHODID_LAYOUT)))
        .addMethod(
          getRssMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Duration,
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse>(
                service, METHODID_RSS)))
        .addMethod(
          getSitemapMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteSitemapResponse>(
                service, METHODID_SITEMAP)))
        .addMethod(
          getShowPageMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageRequest,
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteShowPageResponse>(
                service, METHODID_SHOW_PAGE)))
        .addMethod(
          getHomePageMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest,
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageResponse>(
                service, METHODID_HOME_PAGE)))
        .build();
  }

  private static abstract class SiteBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SiteBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Site");
    }
  }

  private static final class SiteFileDescriptorSupplier
      extends SiteBaseDescriptorSupplier {
    SiteFileDescriptorSupplier() {}
  }

  private static final class SiteMethodDescriptorSupplier
      extends SiteBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    SiteMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (SiteGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SiteFileDescriptorSupplier())
              .addMethod(getLayoutMethod())
              .addMethod(getRssMethod())
              .addMethod(getSitemapMethod())
              .addMethod(getShowPageMethod())
              .addMethod(getHomePageMethod())
              .build();
        }
      }
    }
    return result;
  }
}
