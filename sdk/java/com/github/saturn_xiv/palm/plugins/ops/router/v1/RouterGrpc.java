package com.github.saturn_xiv.palm.plugins.ops.router.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: ops-router.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class RouterGrpc {

  private RouterGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.ops.router.v1.Router";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getRebootMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Reboot",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getRebootMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.google.protobuf.Empty> getRebootMethod;
    if ((getRebootMethod = RouterGrpc.getRebootMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getRebootMethod = RouterGrpc.getRebootMethod) == null) {
          RouterGrpc.getRebootMethod = getRebootMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Reboot"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("Reboot"))
              .build();
        }
      }
    }
    return getRebootMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getApplyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Apply",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Empty> getApplyMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.google.protobuf.Empty> getApplyMethod;
    if ((getApplyMethod = RouterGrpc.getApplyMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getApplyMethod = RouterGrpc.getApplyMethod) == null) {
          RouterGrpc.getApplyMethod = getApplyMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Apply"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("Apply"))
              .build();
        }
      }
    }
    return getApplyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse> getStatusMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Status",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse> getStatusMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse> getStatusMethod;
    if ((getStatusMethod = RouterGrpc.getStatusMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getStatusMethod = RouterGrpc.getStatusMethod) == null) {
          RouterGrpc.getStatusMethod = getStatusMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Status"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("Status"))
              .build();
        }
      }
    }
    return getStatusMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns,
      com.google.protobuf.Empty> getSetDnsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetDns",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns,
      com.google.protobuf.Empty> getSetDnsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns, com.google.protobuf.Empty> getSetDnsMethod;
    if ((getSetDnsMethod = RouterGrpc.getSetDnsMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getSetDnsMethod = RouterGrpc.getSetDnsMethod) == null) {
          RouterGrpc.getSetDnsMethod = getSetDnsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetDns"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("SetDns"))
              .build();
        }
      }
    }
    return getSetDnsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest,
      com.google.protobuf.Empty> getSetWanMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetWan",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest,
      com.google.protobuf.Empty> getSetWanMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest, com.google.protobuf.Empty> getSetWanMethod;
    if ((getSetWanMethod = RouterGrpc.getSetWanMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getSetWanMethod = RouterGrpc.getSetWanMethod) == null) {
          RouterGrpc.getSetWanMethod = getSetWanMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetWan"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("SetWan"))
              .build();
        }
      }
    }
    return getSetWanMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool,
      com.google.protobuf.Empty> getSetWanPoolMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetWanPool",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool,
      com.google.protobuf.Empty> getSetWanPoolMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool, com.google.protobuf.Empty> getSetWanPoolMethod;
    if ((getSetWanPoolMethod = RouterGrpc.getSetWanPoolMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getSetWanPoolMethod = RouterGrpc.getSetWanPoolMethod) == null) {
          RouterGrpc.getSetWanPoolMethod = getSetWanPoolMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetWanPool"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("SetWanPool"))
              .build();
        }
      }
    }
    return getSetWanPoolMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest,
      com.google.protobuf.Empty> getSetLanMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetLan",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest,
      com.google.protobuf.Empty> getSetLanMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest, com.google.protobuf.Empty> getSetLanMethod;
    if ((getSetLanMethod = RouterGrpc.getSetLanMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getSetLanMethod = RouterGrpc.getSetLanMethod) == null) {
          RouterGrpc.getSetLanMethod = getSetLanMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetLan"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("SetLan"))
              .build();
        }
      }
    }
    return getSetLanMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest,
      com.google.protobuf.Empty> getSetDmzMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SetDmz",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest,
      com.google.protobuf.Empty> getSetDmzMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest, com.google.protobuf.Empty> getSetDmzMethod;
    if ((getSetDmzMethod = RouterGrpc.getSetDmzMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getSetDmzMethod = RouterGrpc.getSetDmzMethod) == null) {
          RouterGrpc.getSetDmzMethod = getSetDmzMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SetDmz"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("SetDmz"))
              .build();
        }
      }
    }
    return getSetDmzMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule,
      com.google.protobuf.Empty> getCreateRuleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateRule",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule,
      com.google.protobuf.Empty> getCreateRuleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule, com.google.protobuf.Empty> getCreateRuleMethod;
    if ((getCreateRuleMethod = RouterGrpc.getCreateRuleMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getCreateRuleMethod = RouterGrpc.getCreateRuleMethod) == null) {
          RouterGrpc.getCreateRuleMethod = getCreateRuleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateRule"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("CreateRule"))
              .build();
        }
      }
    }
    return getCreateRuleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item,
      com.google.protobuf.Empty> getUpdateRuleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateRule",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item,
      com.google.protobuf.Empty> getUpdateRuleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item, com.google.protobuf.Empty> getUpdateRuleMethod;
    if ((getUpdateRuleMethod = RouterGrpc.getUpdateRuleMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getUpdateRuleMethod = RouterGrpc.getUpdateRuleMethod) == null) {
          RouterGrpc.getUpdateRuleMethod = getUpdateRuleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateRule"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("UpdateRule"))
              .build();
        }
      }
    }
    return getUpdateRuleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse> getIndexRuleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "IndexRule",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse> getIndexRuleMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse> getIndexRuleMethod;
    if ((getIndexRuleMethod = RouterGrpc.getIndexRuleMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getIndexRuleMethod = RouterGrpc.getIndexRuleMethod) == null) {
          RouterGrpc.getIndexRuleMethod = getIndexRuleMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "IndexRule"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("IndexRule"))
              .build();
        }
      }
    }
    return getIndexRuleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest,
      com.google.protobuf.Empty> getUpdateHostMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateHost",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest,
      com.google.protobuf.Empty> getUpdateHostMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest, com.google.protobuf.Empty> getUpdateHostMethod;
    if ((getUpdateHostMethod = RouterGrpc.getUpdateHostMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getUpdateHostMethod = RouterGrpc.getUpdateHostMethod) == null) {
          RouterGrpc.getUpdateHostMethod = getUpdateHostMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateHost"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("UpdateHost"))
              .build();
        }
      }
    }
    return getUpdateHostMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse> getIndexUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "IndexUser",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse> getIndexUserMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse> getIndexUserMethod;
    if ((getIndexUserMethod = RouterGrpc.getIndexUserMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getIndexUserMethod = RouterGrpc.getIndexUserMethod) == null) {
          RouterGrpc.getIndexUserMethod = getIndexUserMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "IndexUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("IndexUser"))
              .build();
        }
      }
    }
    return getIndexUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item,
      com.google.protobuf.Empty> getUpdateUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateUser",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item,
      com.google.protobuf.Empty> getUpdateUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item, com.google.protobuf.Empty> getUpdateUserMethod;
    if ((getUpdateUserMethod = RouterGrpc.getUpdateUserMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getUpdateUserMethod = RouterGrpc.getUpdateUserMethod) == null) {
          RouterGrpc.getUpdateUserMethod = getUpdateUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("UpdateUser"))
              .build();
        }
      }
    }
    return getUpdateUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest,
      com.google.protobuf.Empty> getCreateUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateUser",
      requestType = com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest,
      com.google.protobuf.Empty> getCreateUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest, com.google.protobuf.Empty> getCreateUserMethod;
    if ((getCreateUserMethod = RouterGrpc.getCreateUserMethod) == null) {
      synchronized (RouterGrpc.class) {
        if ((getCreateUserMethod = RouterGrpc.getCreateUserMethod) == null) {
          RouterGrpc.getCreateUserMethod = getCreateUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RouterMethodDescriptorSupplier("CreateUser"))
              .build();
        }
      }
    }
    return getCreateUserMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static RouterStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<RouterStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<RouterStub>() {
        @java.lang.Override
        public RouterStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new RouterStub(channel, callOptions);
        }
      };
    return RouterStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static RouterBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<RouterBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<RouterBlockingStub>() {
        @java.lang.Override
        public RouterBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new RouterBlockingStub(channel, callOptions);
        }
      };
    return RouterBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static RouterFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<RouterFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<RouterFutureStub>() {
        @java.lang.Override
        public RouterFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new RouterFutureStub(channel, callOptions);
        }
      };
    return RouterFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void reboot(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRebootMethod(), responseObserver);
    }

    /**
     */
    default void apply(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getApplyMethod(), responseObserver);
    }

    /**
     */
    default void status(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStatusMethod(), responseObserver);
    }

    /**
     */
    default void setDns(com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetDnsMethod(), responseObserver);
    }

    /**
     */
    default void setWan(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetWanMethod(), responseObserver);
    }

    /**
     */
    default void setWanPool(com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetWanPoolMethod(), responseObserver);
    }

    /**
     */
    default void setLan(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetLanMethod(), responseObserver);
    }

    /**
     */
    default void setDmz(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSetDmzMethod(), responseObserver);
    }

    /**
     */
    default void createRule(com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateRuleMethod(), responseObserver);
    }

    /**
     */
    default void updateRule(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateRuleMethod(), responseObserver);
    }

    /**
     */
    default void indexRule(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexRuleMethod(), responseObserver);
    }

    /**
     */
    default void updateHost(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateHostMethod(), responseObserver);
    }

    /**
     */
    default void indexUser(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndexUserMethod(), responseObserver);
    }

    /**
     */
    default void updateUser(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateUserMethod(), responseObserver);
    }

    /**
     */
    default void createUser(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateUserMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Router.
   */
  public static abstract class RouterImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return RouterGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Router.
   */
  public static final class RouterStub
      extends io.grpc.stub.AbstractAsyncStub<RouterStub> {
    private RouterStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected RouterStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new RouterStub(channel, callOptions);
    }

    /**
     */
    public void reboot(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRebootMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void apply(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getApplyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void status(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStatusMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setDns(com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetDnsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setWan(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetWanMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setWanPool(com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetWanPoolMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setLan(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetLanMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setDmz(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSetDmzMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createRule(com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateRuleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateRule(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateRuleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void indexRule(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexRuleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateHost(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateHostMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void indexUser(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndexUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateUser(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createUser(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateUserMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Router.
   */
  public static final class RouterBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<RouterBlockingStub> {
    private RouterBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected RouterBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new RouterBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty reboot(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRebootMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty apply(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getApplyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse status(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStatusMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setDns(com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetDnsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setWan(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetWanMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setWanPool(com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetWanPoolMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setLan(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetLanMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty setDmz(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSetDmzMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty createRule(com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateRuleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty updateRule(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateRuleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse indexRule(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexRuleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty updateHost(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateHostMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse indexUser(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndexUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty updateUser(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty createUser(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateUserMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Router.
   */
  public static final class RouterFutureStub
      extends io.grpc.stub.AbstractFutureStub<RouterFutureStub> {
    private RouterFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected RouterFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new RouterFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> reboot(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRebootMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> apply(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getApplyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse> status(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStatusMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setDns(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetDnsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setWan(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetWanMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setWanPool(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetWanPoolMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setLan(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetLanMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> setDmz(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSetDmzMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> createRule(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateRuleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> updateRule(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateRuleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse> indexRule(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndexRuleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> updateHost(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateHostMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse> indexUser(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndexUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> updateUser(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> createUser(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateUserMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_REBOOT = 0;
  private static final int METHODID_APPLY = 1;
  private static final int METHODID_STATUS = 2;
  private static final int METHODID_SET_DNS = 3;
  private static final int METHODID_SET_WAN = 4;
  private static final int METHODID_SET_WAN_POOL = 5;
  private static final int METHODID_SET_LAN = 6;
  private static final int METHODID_SET_DMZ = 7;
  private static final int METHODID_CREATE_RULE = 8;
  private static final int METHODID_UPDATE_RULE = 9;
  private static final int METHODID_INDEX_RULE = 10;
  private static final int METHODID_UPDATE_HOST = 11;
  private static final int METHODID_INDEX_USER = 12;
  private static final int METHODID_UPDATE_USER = 13;
  private static final int METHODID_CREATE_USER = 14;

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
        case METHODID_REBOOT:
          serviceImpl.reboot((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_APPLY:
          serviceImpl.apply((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_STATUS:
          serviceImpl.status((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse>) responseObserver);
          break;
        case METHODID_SET_DNS:
          serviceImpl.setDns((com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_WAN:
          serviceImpl.setWan((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_WAN_POOL:
          serviceImpl.setWanPool((com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_LAN:
          serviceImpl.setLan((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_SET_DMZ:
          serviceImpl.setDmz((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_CREATE_RULE:
          serviceImpl.createRule((com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UPDATE_RULE:
          serviceImpl.updateRule((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_INDEX_RULE:
          serviceImpl.indexRule((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse>) responseObserver);
          break;
        case METHODID_UPDATE_HOST:
          serviceImpl.updateHost((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_INDEX_USER:
          serviceImpl.indexUser((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse>) responseObserver);
          break;
        case METHODID_UPDATE_USER:
          serviceImpl.updateUser((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_CREATE_USER:
          serviceImpl.createUser((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
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
          getRebootMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.google.protobuf.Empty>(
                service, METHODID_REBOOT)))
        .addMethod(
          getApplyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.google.protobuf.Empty>(
                service, METHODID_APPLY)))
        .addMethod(
          getStatusMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterStatusResponse>(
                service, METHODID_STATUS)))
        .addMethod(
          getSetDnsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.Dns,
              com.google.protobuf.Empty>(
                service, METHODID_SET_DNS)))
        .addMethod(
          getSetWanMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetWanRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_WAN)))
        .addMethod(
          getSetWanPoolMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.WanPool,
              com.google.protobuf.Empty>(
                service, METHODID_SET_WAN_POOL)))
        .addMethod(
          getSetLanMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetLanRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_LAN)))
        .addMethod(
          getSetDmzMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterSetDmzRequest,
              com.google.protobuf.Empty>(
                service, METHODID_SET_DMZ)))
        .addMethod(
          getCreateRuleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.Rule,
              com.google.protobuf.Empty>(
                service, METHODID_CREATE_RULE)))
        .addMethod(
          getUpdateRuleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse.Item,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE_RULE)))
        .addMethod(
          getIndexRuleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexRuleResponse>(
                service, METHODID_INDEX_RULE)))
        .addMethod(
          getUpdateHostMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE_HOST)))
        .addMethod(
          getIndexUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse>(
                service, METHODID_INDEX_USER)))
        .addMethod(
          getUpdateUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterIndexUserResponse.Item,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE_USER)))
        .addMethod(
          getCreateUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CREATE_USER)))
        .build();
  }

  private static abstract class RouterBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    RouterBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Router");
    }
  }

  private static final class RouterFileDescriptorSupplier
      extends RouterBaseDescriptorSupplier {
    RouterFileDescriptorSupplier() {}
  }

  private static final class RouterMethodDescriptorSupplier
      extends RouterBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    RouterMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (RouterGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new RouterFileDescriptorSupplier())
              .addMethod(getRebootMethod())
              .addMethod(getApplyMethod())
              .addMethod(getStatusMethod())
              .addMethod(getSetDnsMethod())
              .addMethod(getSetWanMethod())
              .addMethod(getSetWanPoolMethod())
              .addMethod(getSetLanMethod())
              .addMethod(getSetDmzMethod())
              .addMethod(getCreateRuleMethod())
              .addMethod(getUpdateRuleMethod())
              .addMethod(getIndexRuleMethod())
              .addMethod(getUpdateHostMethod())
              .addMethod(getIndexUserMethod())
              .addMethod(getUpdateUserMethod())
              .addMethod(getCreateUserMethod())
              .build();
        }
      }
    }
    return result;
  }
}
