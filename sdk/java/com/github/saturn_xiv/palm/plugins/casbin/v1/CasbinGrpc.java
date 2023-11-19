package com.github.saturn_xiv.palm.plugins.casbin.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Casbin service definition.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: casbin.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class CasbinGrpc {

  private CasbinGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.casbin.v1.Casbin";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply> getNewEnforcerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "NewEnforcer",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply> getNewEnforcerMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply> getNewEnforcerMethod;
    if ((getNewEnforcerMethod = CasbinGrpc.getNewEnforcerMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getNewEnforcerMethod = CasbinGrpc.getNewEnforcerMethod) == null) {
          CasbinGrpc.getNewEnforcerMethod = getNewEnforcerMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "NewEnforcer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("NewEnforcer"))
              .build();
        }
      }
    }
    return getNewEnforcerMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply> getNewAdapterMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "NewAdapter",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply> getNewAdapterMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply> getNewAdapterMethod;
    if ((getNewAdapterMethod = CasbinGrpc.getNewAdapterMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getNewAdapterMethod = CasbinGrpc.getNewAdapterMethod) == null) {
          CasbinGrpc.getNewAdapterMethod = getNewAdapterMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "NewAdapter"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("NewAdapter"))
              .build();
        }
      }
    }
    return getNewAdapterMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getEnforceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Enforce",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getEnforceMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getEnforceMethod;
    if ((getEnforceMethod = CasbinGrpc.getEnforceMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getEnforceMethod = CasbinGrpc.getEnforceMethod) == null) {
          CasbinGrpc.getEnforceMethod = getEnforceMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Enforce"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("Enforce"))
              .build();
        }
      }
    }
    return getEnforceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getLoadPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "LoadPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getLoadPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getLoadPolicyMethod;
    if ((getLoadPolicyMethod = CasbinGrpc.getLoadPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getLoadPolicyMethod = CasbinGrpc.getLoadPolicyMethod) == null) {
          CasbinGrpc.getLoadPolicyMethod = getLoadPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "LoadPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("LoadPolicy"))
              .build();
        }
      }
    }
    return getLoadPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getSavePolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SavePolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getSavePolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getSavePolicyMethod;
    if ((getSavePolicyMethod = CasbinGrpc.getSavePolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getSavePolicyMethod = CasbinGrpc.getSavePolicyMethod) == null) {
          CasbinGrpc.getSavePolicyMethod = getSavePolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SavePolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("SavePolicy"))
              .build();
        }
      }
    }
    return getSavePolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddPolicyMethod;
    if ((getAddPolicyMethod = CasbinGrpc.getAddPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getAddPolicyMethod = CasbinGrpc.getAddPolicyMethod) == null) {
          CasbinGrpc.getAddPolicyMethod = getAddPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("AddPolicy"))
              .build();
        }
      }
    }
    return getAddPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddNamedPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddNamedPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddNamedPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddNamedPolicyMethod;
    if ((getAddNamedPolicyMethod = CasbinGrpc.getAddNamedPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getAddNamedPolicyMethod = CasbinGrpc.getAddNamedPolicyMethod) == null) {
          CasbinGrpc.getAddNamedPolicyMethod = getAddNamedPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddNamedPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("AddNamedPolicy"))
              .build();
        }
      }
    }
    return getAddNamedPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemovePolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemovePolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemovePolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemovePolicyMethod;
    if ((getRemovePolicyMethod = CasbinGrpc.getRemovePolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemovePolicyMethod = CasbinGrpc.getRemovePolicyMethod) == null) {
          CasbinGrpc.getRemovePolicyMethod = getRemovePolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemovePolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemovePolicy"))
              .build();
        }
      }
    }
    return getRemovePolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveNamedPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveNamedPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveNamedPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveNamedPolicyMethod;
    if ((getRemoveNamedPolicyMethod = CasbinGrpc.getRemoveNamedPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemoveNamedPolicyMethod = CasbinGrpc.getRemoveNamedPolicyMethod) == null) {
          CasbinGrpc.getRemoveNamedPolicyMethod = getRemoveNamedPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveNamedPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemoveNamedPolicy"))
              .build();
        }
      }
    }
    return getRemoveNamedPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveFilteredPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredPolicyMethod;
    if ((getRemoveFilteredPolicyMethod = CasbinGrpc.getRemoveFilteredPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemoveFilteredPolicyMethod = CasbinGrpc.getRemoveFilteredPolicyMethod) == null) {
          CasbinGrpc.getRemoveFilteredPolicyMethod = getRemoveFilteredPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveFilteredPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemoveFilteredPolicy"))
              .build();
        }
      }
    }
    return getRemoveFilteredPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredNamedPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveFilteredNamedPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredNamedPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredNamedPolicyMethod;
    if ((getRemoveFilteredNamedPolicyMethod = CasbinGrpc.getRemoveFilteredNamedPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemoveFilteredNamedPolicyMethod = CasbinGrpc.getRemoveFilteredNamedPolicyMethod) == null) {
          CasbinGrpc.getRemoveFilteredNamedPolicyMethod = getRemoveFilteredNamedPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveFilteredNamedPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemoveFilteredNamedPolicy"))
              .build();
        }
      }
    }
    return getRemoveFilteredNamedPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetPolicyMethod;
    if ((getGetPolicyMethod = CasbinGrpc.getGetPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetPolicyMethod = CasbinGrpc.getGetPolicyMethod) == null) {
          CasbinGrpc.getGetPolicyMethod = getGetPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetPolicy"))
              .build();
        }
      }
    }
    return getGetPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetNamedPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNamedPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetNamedPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetNamedPolicyMethod;
    if ((getGetNamedPolicyMethod = CasbinGrpc.getGetNamedPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetNamedPolicyMethod = CasbinGrpc.getGetNamedPolicyMethod) == null) {
          CasbinGrpc.getGetNamedPolicyMethod = getGetNamedPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetNamedPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetNamedPolicy"))
              .build();
        }
      }
    }
    return getGetNamedPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetFilteredPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredPolicyMethod;
    if ((getGetFilteredPolicyMethod = CasbinGrpc.getGetFilteredPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetFilteredPolicyMethod = CasbinGrpc.getGetFilteredPolicyMethod) == null) {
          CasbinGrpc.getGetFilteredPolicyMethod = getGetFilteredPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetFilteredPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetFilteredPolicy"))
              .build();
        }
      }
    }
    return getGetFilteredPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredNamedPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetFilteredNamedPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredNamedPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredNamedPolicyMethod;
    if ((getGetFilteredNamedPolicyMethod = CasbinGrpc.getGetFilteredNamedPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetFilteredNamedPolicyMethod = CasbinGrpc.getGetFilteredNamedPolicyMethod) == null) {
          CasbinGrpc.getGetFilteredNamedPolicyMethod = getGetFilteredNamedPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetFilteredNamedPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetFilteredNamedPolicy"))
              .build();
        }
      }
    }
    return getGetFilteredNamedPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddGroupingPolicyMethod;
    if ((getAddGroupingPolicyMethod = CasbinGrpc.getAddGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getAddGroupingPolicyMethod = CasbinGrpc.getAddGroupingPolicyMethod) == null) {
          CasbinGrpc.getAddGroupingPolicyMethod = getAddGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("AddGroupingPolicy"))
              .build();
        }
      }
    }
    return getAddGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddNamedGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddNamedGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddNamedGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddNamedGroupingPolicyMethod;
    if ((getAddNamedGroupingPolicyMethod = CasbinGrpc.getAddNamedGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getAddNamedGroupingPolicyMethod = CasbinGrpc.getAddNamedGroupingPolicyMethod) == null) {
          CasbinGrpc.getAddNamedGroupingPolicyMethod = getAddNamedGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddNamedGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("AddNamedGroupingPolicy"))
              .build();
        }
      }
    }
    return getAddNamedGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveGroupingPolicyMethod;
    if ((getRemoveGroupingPolicyMethod = CasbinGrpc.getRemoveGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemoveGroupingPolicyMethod = CasbinGrpc.getRemoveGroupingPolicyMethod) == null) {
          CasbinGrpc.getRemoveGroupingPolicyMethod = getRemoveGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemoveGroupingPolicy"))
              .build();
        }
      }
    }
    return getRemoveGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveNamedGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveNamedGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveNamedGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveNamedGroupingPolicyMethod;
    if ((getRemoveNamedGroupingPolicyMethod = CasbinGrpc.getRemoveNamedGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemoveNamedGroupingPolicyMethod = CasbinGrpc.getRemoveNamedGroupingPolicyMethod) == null) {
          CasbinGrpc.getRemoveNamedGroupingPolicyMethod = getRemoveNamedGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveNamedGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemoveNamedGroupingPolicy"))
              .build();
        }
      }
    }
    return getRemoveNamedGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveFilteredGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredGroupingPolicyMethod;
    if ((getRemoveFilteredGroupingPolicyMethod = CasbinGrpc.getRemoveFilteredGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemoveFilteredGroupingPolicyMethod = CasbinGrpc.getRemoveFilteredGroupingPolicyMethod) == null) {
          CasbinGrpc.getRemoveFilteredGroupingPolicyMethod = getRemoveFilteredGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveFilteredGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemoveFilteredGroupingPolicy"))
              .build();
        }
      }
    }
    return getRemoveFilteredGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredNamedGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveFilteredNamedGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredNamedGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getRemoveFilteredNamedGroupingPolicyMethod;
    if ((getRemoveFilteredNamedGroupingPolicyMethod = CasbinGrpc.getRemoveFilteredNamedGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getRemoveFilteredNamedGroupingPolicyMethod = CasbinGrpc.getRemoveFilteredNamedGroupingPolicyMethod) == null) {
          CasbinGrpc.getRemoveFilteredNamedGroupingPolicyMethod = getRemoveFilteredNamedGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveFilteredNamedGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("RemoveFilteredNamedGroupingPolicy"))
              .build();
        }
      }
    }
    return getRemoveFilteredNamedGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetGroupingPolicyMethod;
    if ((getGetGroupingPolicyMethod = CasbinGrpc.getGetGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetGroupingPolicyMethod = CasbinGrpc.getGetGroupingPolicyMethod) == null) {
          CasbinGrpc.getGetGroupingPolicyMethod = getGetGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetGroupingPolicy"))
              .build();
        }
      }
    }
    return getGetGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetNamedGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNamedGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetNamedGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetNamedGroupingPolicyMethod;
    if ((getGetNamedGroupingPolicyMethod = CasbinGrpc.getGetNamedGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetNamedGroupingPolicyMethod = CasbinGrpc.getGetNamedGroupingPolicyMethod) == null) {
          CasbinGrpc.getGetNamedGroupingPolicyMethod = getGetNamedGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetNamedGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetNamedGroupingPolicy"))
              .build();
        }
      }
    }
    return getGetNamedGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetFilteredGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredGroupingPolicyMethod;
    if ((getGetFilteredGroupingPolicyMethod = CasbinGrpc.getGetFilteredGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetFilteredGroupingPolicyMethod = CasbinGrpc.getGetFilteredGroupingPolicyMethod) == null) {
          CasbinGrpc.getGetFilteredGroupingPolicyMethod = getGetFilteredGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetFilteredGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetFilteredGroupingPolicy"))
              .build();
        }
      }
    }
    return getGetFilteredGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredNamedGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetFilteredNamedGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredNamedGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetFilteredNamedGroupingPolicyMethod;
    if ((getGetFilteredNamedGroupingPolicyMethod = CasbinGrpc.getGetFilteredNamedGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetFilteredNamedGroupingPolicyMethod = CasbinGrpc.getGetFilteredNamedGroupingPolicyMethod) == null) {
          CasbinGrpc.getGetFilteredNamedGroupingPolicyMethod = getGetFilteredNamedGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetFilteredNamedGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetFilteredNamedGroupingPolicy"))
              .build();
        }
      }
    }
    return getGetFilteredNamedGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllSubjectsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllSubjects",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllSubjectsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllSubjectsMethod;
    if ((getGetAllSubjectsMethod = CasbinGrpc.getGetAllSubjectsMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllSubjectsMethod = CasbinGrpc.getGetAllSubjectsMethod) == null) {
          CasbinGrpc.getGetAllSubjectsMethod = getGetAllSubjectsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllSubjects"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllSubjects"))
              .build();
        }
      }
    }
    return getGetAllSubjectsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedSubjectsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllNamedSubjects",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedSubjectsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedSubjectsMethod;
    if ((getGetAllNamedSubjectsMethod = CasbinGrpc.getGetAllNamedSubjectsMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllNamedSubjectsMethod = CasbinGrpc.getGetAllNamedSubjectsMethod) == null) {
          CasbinGrpc.getGetAllNamedSubjectsMethod = getGetAllNamedSubjectsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllNamedSubjects"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllNamedSubjects"))
              .build();
        }
      }
    }
    return getGetAllNamedSubjectsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllObjectsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllObjects",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllObjectsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllObjectsMethod;
    if ((getGetAllObjectsMethod = CasbinGrpc.getGetAllObjectsMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllObjectsMethod = CasbinGrpc.getGetAllObjectsMethod) == null) {
          CasbinGrpc.getGetAllObjectsMethod = getGetAllObjectsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllObjects"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllObjects"))
              .build();
        }
      }
    }
    return getGetAllObjectsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedObjectsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllNamedObjects",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedObjectsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedObjectsMethod;
    if ((getGetAllNamedObjectsMethod = CasbinGrpc.getGetAllNamedObjectsMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllNamedObjectsMethod = CasbinGrpc.getGetAllNamedObjectsMethod) == null) {
          CasbinGrpc.getGetAllNamedObjectsMethod = getGetAllNamedObjectsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllNamedObjects"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllNamedObjects"))
              .build();
        }
      }
    }
    return getGetAllNamedObjectsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllActionsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllActions",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllActionsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllActionsMethod;
    if ((getGetAllActionsMethod = CasbinGrpc.getGetAllActionsMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllActionsMethod = CasbinGrpc.getGetAllActionsMethod) == null) {
          CasbinGrpc.getGetAllActionsMethod = getGetAllActionsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllActions"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllActions"))
              .build();
        }
      }
    }
    return getGetAllActionsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedActionsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllNamedActions",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedActionsMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedActionsMethod;
    if ((getGetAllNamedActionsMethod = CasbinGrpc.getGetAllNamedActionsMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllNamedActionsMethod = CasbinGrpc.getGetAllNamedActionsMethod) == null) {
          CasbinGrpc.getGetAllNamedActionsMethod = getGetAllNamedActionsMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllNamedActions"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllNamedActions"))
              .build();
        }
      }
    }
    return getGetAllNamedActionsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllRolesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllRoles",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllRolesMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllRolesMethod;
    if ((getGetAllRolesMethod = CasbinGrpc.getGetAllRolesMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllRolesMethod = CasbinGrpc.getGetAllRolesMethod) == null) {
          CasbinGrpc.getGetAllRolesMethod = getGetAllRolesMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllRoles"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllRoles"))
              .build();
        }
      }
    }
    return getGetAllRolesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedRolesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllNamedRoles",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedRolesMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetAllNamedRolesMethod;
    if ((getGetAllNamedRolesMethod = CasbinGrpc.getGetAllNamedRolesMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetAllNamedRolesMethod = CasbinGrpc.getGetAllNamedRolesMethod) == null) {
          CasbinGrpc.getGetAllNamedRolesMethod = getGetAllNamedRolesMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllNamedRoles"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetAllNamedRoles"))
              .build();
        }
      }
    }
    return getGetAllNamedRolesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasPolicyMethod;
    if ((getHasPolicyMethod = CasbinGrpc.getHasPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getHasPolicyMethod = CasbinGrpc.getHasPolicyMethod) == null) {
          CasbinGrpc.getHasPolicyMethod = getHasPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("HasPolicy"))
              .build();
        }
      }
    }
    return getHasPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasNamedPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasNamedPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasNamedPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasNamedPolicyMethod;
    if ((getHasNamedPolicyMethod = CasbinGrpc.getHasNamedPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getHasNamedPolicyMethod = CasbinGrpc.getHasNamedPolicyMethod) == null) {
          CasbinGrpc.getHasNamedPolicyMethod = getHasNamedPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasNamedPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("HasNamedPolicy"))
              .build();
        }
      }
    }
    return getHasNamedPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasGroupingPolicyMethod;
    if ((getHasGroupingPolicyMethod = CasbinGrpc.getHasGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getHasGroupingPolicyMethod = CasbinGrpc.getHasGroupingPolicyMethod) == null) {
          CasbinGrpc.getHasGroupingPolicyMethod = getHasGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("HasGroupingPolicy"))
              .build();
        }
      }
    }
    return getHasGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasNamedGroupingPolicyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasNamedGroupingPolicy",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasNamedGroupingPolicyMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasNamedGroupingPolicyMethod;
    if ((getHasNamedGroupingPolicyMethod = CasbinGrpc.getHasNamedGroupingPolicyMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getHasNamedGroupingPolicyMethod = CasbinGrpc.getHasNamedGroupingPolicyMethod) == null) {
          CasbinGrpc.getHasNamedGroupingPolicyMethod = getHasNamedGroupingPolicyMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasNamedGroupingPolicy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("HasNamedGroupingPolicy"))
              .build();
        }
      }
    }
    return getHasNamedGroupingPolicyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetRolesForUserMethod;
    if ((getGetRolesForUserMethod = CasbinGrpc.getGetRolesForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetRolesForUserMethod = CasbinGrpc.getGetRolesForUserMethod) == null) {
          CasbinGrpc.getGetRolesForUserMethod = getGetRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetRolesForUser"))
              .build();
        }
      }
    }
    return getGetRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetImplicitRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetImplicitRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetImplicitRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetImplicitRolesForUserMethod;
    if ((getGetImplicitRolesForUserMethod = CasbinGrpc.getGetImplicitRolesForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetImplicitRolesForUserMethod = CasbinGrpc.getGetImplicitRolesForUserMethod) == null) {
          CasbinGrpc.getGetImplicitRolesForUserMethod = getGetImplicitRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetImplicitRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetImplicitRolesForUser"))
              .build();
        }
      }
    }
    return getGetImplicitRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetUsersForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetUsersForRole",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetUsersForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getGetUsersForRoleMethod;
    if ((getGetUsersForRoleMethod = CasbinGrpc.getGetUsersForRoleMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetUsersForRoleMethod = CasbinGrpc.getGetUsersForRoleMethod) == null) {
          CasbinGrpc.getGetUsersForRoleMethod = getGetUsersForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetUsersForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetUsersForRole"))
              .build();
        }
      }
    }
    return getGetUsersForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasRoleForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasRoleForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasRoleForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasRoleForUserMethod;
    if ((getHasRoleForUserMethod = CasbinGrpc.getHasRoleForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getHasRoleForUserMethod = CasbinGrpc.getHasRoleForUserMethod) == null) {
          CasbinGrpc.getHasRoleForUserMethod = getHasRoleForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasRoleForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("HasRoleForUser"))
              .build();
        }
      }
    }
    return getHasRoleForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddRoleForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddRoleForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddRoleForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddRoleForUserMethod;
    if ((getAddRoleForUserMethod = CasbinGrpc.getAddRoleForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getAddRoleForUserMethod = CasbinGrpc.getAddRoleForUserMethod) == null) {
          CasbinGrpc.getAddRoleForUserMethod = getAddRoleForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddRoleForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("AddRoleForUser"))
              .build();
        }
      }
    }
    return getAddRoleForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteRoleForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteRoleForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteRoleForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteRoleForUserMethod;
    if ((getDeleteRoleForUserMethod = CasbinGrpc.getDeleteRoleForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getDeleteRoleForUserMethod = CasbinGrpc.getDeleteRoleForUserMethod) == null) {
          CasbinGrpc.getDeleteRoleForUserMethod = getDeleteRoleForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteRoleForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("DeleteRoleForUser"))
              .build();
        }
      }
    }
    return getDeleteRoleForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteRolesForUserMethod;
    if ((getDeleteRolesForUserMethod = CasbinGrpc.getDeleteRolesForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getDeleteRolesForUserMethod = CasbinGrpc.getDeleteRolesForUserMethod) == null) {
          CasbinGrpc.getDeleteRolesForUserMethod = getDeleteRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("DeleteRolesForUser"))
              .build();
        }
      }
    }
    return getDeleteRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeleteUserMethod;
    if ((getDeleteUserMethod = CasbinGrpc.getDeleteUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getDeleteUserMethod = CasbinGrpc.getDeleteUserMethod) == null) {
          CasbinGrpc.getDeleteUserMethod = getDeleteUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("DeleteUser"))
              .build();
        }
      }
    }
    return getDeleteUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getDeleteRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteRole",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getDeleteRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> getDeleteRoleMethod;
    if ((getDeleteRoleMethod = CasbinGrpc.getDeleteRoleMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getDeleteRoleMethod = CasbinGrpc.getDeleteRoleMethod) == null) {
          CasbinGrpc.getDeleteRoleMethod = getDeleteRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("DeleteRole"))
              .build();
        }
      }
    }
    return getDeleteRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetPermissionsForUserMethod;
    if ((getGetPermissionsForUserMethod = CasbinGrpc.getGetPermissionsForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetPermissionsForUserMethod = CasbinGrpc.getGetPermissionsForUserMethod) == null) {
          CasbinGrpc.getGetPermissionsForUserMethod = getGetPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetPermissionsForUser"))
              .build();
        }
      }
    }
    return getGetPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetImplicitPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetImplicitPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetImplicitPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGetImplicitPermissionsForUserMethod;
    if ((getGetImplicitPermissionsForUserMethod = CasbinGrpc.getGetImplicitPermissionsForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getGetImplicitPermissionsForUserMethod = CasbinGrpc.getGetImplicitPermissionsForUserMethod) == null) {
          CasbinGrpc.getGetImplicitPermissionsForUserMethod = getGetImplicitPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetImplicitPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("GetImplicitPermissionsForUser"))
              .build();
        }
      }
    }
    return getGetImplicitPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeletePermission",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionMethod;
    if ((getDeletePermissionMethod = CasbinGrpc.getDeletePermissionMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getDeletePermissionMethod = CasbinGrpc.getDeletePermissionMethod) == null) {
          CasbinGrpc.getDeletePermissionMethod = getDeletePermissionMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeletePermission"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("DeletePermission"))
              .build();
        }
      }
    }
    return getDeletePermissionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddPermissionForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddPermissionForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddPermissionForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getAddPermissionForUserMethod;
    if ((getAddPermissionForUserMethod = CasbinGrpc.getAddPermissionForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getAddPermissionForUserMethod = CasbinGrpc.getAddPermissionForUserMethod) == null) {
          CasbinGrpc.getAddPermissionForUserMethod = getAddPermissionForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddPermissionForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("AddPermissionForUser"))
              .build();
        }
      }
    }
    return getAddPermissionForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeletePermissionForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionForUserMethod;
    if ((getDeletePermissionForUserMethod = CasbinGrpc.getDeletePermissionForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getDeletePermissionForUserMethod = CasbinGrpc.getDeletePermissionForUserMethod) == null) {
          CasbinGrpc.getDeletePermissionForUserMethod = getDeletePermissionForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeletePermissionForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("DeletePermissionForUser"))
              .build();
        }
      }
    }
    return getDeletePermissionForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeletePermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getDeletePermissionsForUserMethod;
    if ((getDeletePermissionsForUserMethod = CasbinGrpc.getDeletePermissionsForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getDeletePermissionsForUserMethod = CasbinGrpc.getDeletePermissionsForUserMethod) == null) {
          CasbinGrpc.getDeletePermissionsForUserMethod = getDeletePermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeletePermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("DeletePermissionsForUser"))
              .build();
        }
      }
    }
    return getDeletePermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasPermissionForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasPermissionForUser",
      requestType = com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
      com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasPermissionForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> getHasPermissionForUserMethod;
    if ((getHasPermissionForUserMethod = CasbinGrpc.getHasPermissionForUserMethod) == null) {
      synchronized (CasbinGrpc.class) {
        if ((getHasPermissionForUserMethod = CasbinGrpc.getHasPermissionForUserMethod) == null) {
          CasbinGrpc.getHasPermissionForUserMethod = getHasPermissionForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest, com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasPermissionForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply.getDefaultInstance()))
              .setSchemaDescriptor(new CasbinMethodDescriptorSupplier("HasPermissionForUser"))
              .build();
        }
      }
    }
    return getHasPermissionForUserMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static CasbinStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CasbinStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CasbinStub>() {
        @java.lang.Override
        public CasbinStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CasbinStub(channel, callOptions);
        }
      };
    return CasbinStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static CasbinBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CasbinBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CasbinBlockingStub>() {
        @java.lang.Override
        public CasbinBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CasbinBlockingStub(channel, callOptions);
        }
      };
    return CasbinBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static CasbinFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CasbinFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CasbinFutureStub>() {
        @java.lang.Override
        public CasbinFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CasbinFutureStub(channel, callOptions);
        }
      };
    return CasbinFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Casbin service definition.
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void newEnforcer(com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getNewEnforcerMethod(), responseObserver);
    }

    /**
     */
    default void newAdapter(com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getNewAdapterMethod(), responseObserver);
    }

    /**
     */
    default void enforce(com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getEnforceMethod(), responseObserver);
    }

    /**
     */
    default void loadPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLoadPolicyMethod(), responseObserver);
    }

    /**
     */
    default void savePolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSavePolicyMethod(), responseObserver);
    }

    /**
     */
    default void addPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddPolicyMethod(), responseObserver);
    }

    /**
     */
    default void addNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddNamedPolicyMethod(), responseObserver);
    }

    /**
     */
    default void removePolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemovePolicyMethod(), responseObserver);
    }

    /**
     */
    default void removeNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveNamedPolicyMethod(), responseObserver);
    }

    /**
     */
    default void removeFilteredPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveFilteredPolicyMethod(), responseObserver);
    }

    /**
     */
    default void removeFilteredNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveFilteredNamedPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetNamedPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getFilteredPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetFilteredPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getFilteredNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetFilteredNamedPolicyMethod(), responseObserver);
    }

    /**
     */
    default void addGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void addNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddNamedGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void removeGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void removeNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveNamedGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void removeFilteredGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveFilteredGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void removeFilteredNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveFilteredNamedGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetNamedGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getFilteredGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetFilteredGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getFilteredNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetFilteredNamedGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getAllSubjects(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllSubjectsMethod(), responseObserver);
    }

    /**
     */
    default void getAllNamedSubjects(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllNamedSubjectsMethod(), responseObserver);
    }

    /**
     */
    default void getAllObjects(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllObjectsMethod(), responseObserver);
    }

    /**
     */
    default void getAllNamedObjects(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllNamedObjectsMethod(), responseObserver);
    }

    /**
     */
    default void getAllActions(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllActionsMethod(), responseObserver);
    }

    /**
     */
    default void getAllNamedActions(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllNamedActionsMethod(), responseObserver);
    }

    /**
     */
    default void getAllRoles(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllRolesMethod(), responseObserver);
    }

    /**
     */
    default void getAllNamedRoles(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllNamedRolesMethod(), responseObserver);
    }

    /**
     */
    default void hasPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasPolicyMethod(), responseObserver);
    }

    /**
     */
    default void hasNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasNamedPolicyMethod(), responseObserver);
    }

    /**
     */
    default void hasGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void hasNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasNamedGroupingPolicyMethod(), responseObserver);
    }

    /**
     */
    default void getRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetImplicitRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void getUsersForRole(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetUsersForRoleMethod(), responseObserver);
    }

    /**
     */
    default void hasRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasRoleForUserMethod(), responseObserver);
    }

    /**
     */
    default void addRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddRoleForUserMethod(), responseObserver);
    }

    /**
     */
    default void deleteRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteRoleForUserMethod(), responseObserver);
    }

    /**
     */
    default void deleteRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void deleteUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteUserMethod(), responseObserver);
    }

    /**
     */
    default void deleteRole(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteRoleMethod(), responseObserver);
    }

    /**
     */
    default void getPermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetImplicitPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void deletePermission(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeletePermissionMethod(), responseObserver);
    }

    /**
     */
    default void addPermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddPermissionForUserMethod(), responseObserver);
    }

    /**
     */
    default void deletePermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeletePermissionForUserMethod(), responseObserver);
    }

    /**
     */
    default void deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeletePermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void hasPermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasPermissionForUserMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Casbin.
   * <pre>
   * The Casbin service definition.
   * </pre>
   */
  public static abstract class CasbinImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return CasbinGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Casbin.
   * <pre>
   * The Casbin service definition.
   * </pre>
   */
  public static final class CasbinStub
      extends io.grpc.stub.AbstractAsyncStub<CasbinStub> {
    private CasbinStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CasbinStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CasbinStub(channel, callOptions);
    }

    /**
     */
    public void newEnforcer(com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getNewEnforcerMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void newAdapter(com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getNewAdapterMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void enforce(com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getEnforceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void loadPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLoadPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void savePolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSavePolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddNamedPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removePolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemovePolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveNamedPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeFilteredPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveFilteredPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeFilteredNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveFilteredNamedPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetNamedPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getFilteredPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetFilteredPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getFilteredNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetFilteredNamedPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddNamedGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveNamedGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeFilteredGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveFilteredGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeFilteredNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveFilteredNamedGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetNamedGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getFilteredGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetFilteredGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getFilteredNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetFilteredNamedGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllSubjects(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllSubjectsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllNamedSubjects(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllNamedSubjectsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllObjects(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllObjectsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllNamedObjects(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllNamedObjectsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllActions(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllActionsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllNamedActions(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllNamedActionsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllRoles(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllRolesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllNamedRoles(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllNamedRolesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasNamedPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasNamedGroupingPolicyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetImplicitRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getUsersForRole(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetUsersForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasRoleForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddRoleForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteRoleForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteRole(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getPermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetImplicitPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deletePermission(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeletePermissionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addPermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddPermissionForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deletePermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeletePermissionForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeletePermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasPermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasPermissionForUserMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Casbin.
   * <pre>
   * The Casbin service definition.
   * </pre>
   */
  public static final class CasbinBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<CasbinBlockingStub> {
    private CasbinBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CasbinBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CasbinBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply newEnforcer(com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getNewEnforcerMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply newAdapter(com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getNewAdapterMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply enforce(com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getEnforceMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply loadPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLoadPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply savePolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSavePolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply addPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply addNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddNamedPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removePolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemovePolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removeNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveNamedPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removeFilteredPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveFilteredPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removeFilteredNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveFilteredNamedPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetNamedPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getFilteredPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetFilteredPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getFilteredNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetFilteredNamedPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply addGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply addNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddNamedGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removeGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removeNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveNamedGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removeFilteredGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveFilteredGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply removeFilteredNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveFilteredNamedGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetNamedGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getFilteredGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetFilteredGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getFilteredNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetFilteredNamedGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllSubjects(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllSubjectsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllNamedSubjects(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllNamedSubjectsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllObjects(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllObjectsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllNamedObjects(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllNamedObjectsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllActions(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllActionsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllNamedActions(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllNamedActionsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllRoles(com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllRolesMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getAllNamedRoles(com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllNamedRolesMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply hasPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply hasNamedPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasNamedPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply hasGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply hasNamedGroupingPolicy(com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasNamedGroupingPolicyMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetImplicitRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply getUsersForRole(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetUsersForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply hasRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasRoleForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply addRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddRoleForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply deleteRoleForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteRoleForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply deleteRolesForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply deleteUser(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply deleteRole(com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getPermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetImplicitPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply deletePermission(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeletePermissionMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply addPermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddPermissionForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply deletePermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeletePermissionForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeletePermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply hasPermissionForUser(com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasPermissionForUserMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Casbin.
   * <pre>
   * The Casbin service definition.
   * </pre>
   */
  public static final class CasbinFutureStub
      extends io.grpc.stub.AbstractFutureStub<CasbinFutureStub> {
    private CasbinFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CasbinFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CasbinFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply> newEnforcer(
        com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getNewEnforcerMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply> newAdapter(
        com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getNewAdapterMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> enforce(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getEnforceMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> loadPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLoadPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> savePolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSavePolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> addPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> addNamedPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddNamedPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removePolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemovePolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removeNamedPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveNamedPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removeFilteredPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveFilteredPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removeFilteredNamedPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveFilteredNamedPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getNamedPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetNamedPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getFilteredPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetFilteredPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getFilteredNamedPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetFilteredNamedPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> addGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> addNamedGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddNamedGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removeGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removeNamedGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveNamedGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removeFilteredGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveFilteredGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> removeFilteredNamedGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveFilteredNamedGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getNamedGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetNamedGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getFilteredGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetFilteredGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getFilteredNamedGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetFilteredNamedGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllSubjects(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllSubjectsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllNamedSubjects(
        com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllNamedSubjectsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllObjects(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllObjectsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllNamedObjects(
        com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllNamedObjectsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllActions(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllActionsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllNamedActions(
        com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllNamedActionsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllRoles(
        com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllRolesMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getAllNamedRoles(
        com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllNamedRolesMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> hasPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> hasNamedPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasNamedPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> hasGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> hasNamedGroupingPolicy(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasNamedGroupingPolicyMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getRolesForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getImplicitRolesForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetImplicitRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply> getUsersForRole(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetUsersForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> hasRoleForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasRoleForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> addRoleForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddRoleForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> deleteRoleForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteRoleForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> deleteRolesForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> deleteUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply> deleteRole(
        com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply> getImplicitPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetImplicitPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> deletePermission(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeletePermissionMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> addPermissionForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddPermissionForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> deletePermissionForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeletePermissionForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> deletePermissionsForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeletePermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply> hasPermissionForUser(
        com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasPermissionForUserMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_NEW_ENFORCER = 0;
  private static final int METHODID_NEW_ADAPTER = 1;
  private static final int METHODID_ENFORCE = 2;
  private static final int METHODID_LOAD_POLICY = 3;
  private static final int METHODID_SAVE_POLICY = 4;
  private static final int METHODID_ADD_POLICY = 5;
  private static final int METHODID_ADD_NAMED_POLICY = 6;
  private static final int METHODID_REMOVE_POLICY = 7;
  private static final int METHODID_REMOVE_NAMED_POLICY = 8;
  private static final int METHODID_REMOVE_FILTERED_POLICY = 9;
  private static final int METHODID_REMOVE_FILTERED_NAMED_POLICY = 10;
  private static final int METHODID_GET_POLICY = 11;
  private static final int METHODID_GET_NAMED_POLICY = 12;
  private static final int METHODID_GET_FILTERED_POLICY = 13;
  private static final int METHODID_GET_FILTERED_NAMED_POLICY = 14;
  private static final int METHODID_ADD_GROUPING_POLICY = 15;
  private static final int METHODID_ADD_NAMED_GROUPING_POLICY = 16;
  private static final int METHODID_REMOVE_GROUPING_POLICY = 17;
  private static final int METHODID_REMOVE_NAMED_GROUPING_POLICY = 18;
  private static final int METHODID_REMOVE_FILTERED_GROUPING_POLICY = 19;
  private static final int METHODID_REMOVE_FILTERED_NAMED_GROUPING_POLICY = 20;
  private static final int METHODID_GET_GROUPING_POLICY = 21;
  private static final int METHODID_GET_NAMED_GROUPING_POLICY = 22;
  private static final int METHODID_GET_FILTERED_GROUPING_POLICY = 23;
  private static final int METHODID_GET_FILTERED_NAMED_GROUPING_POLICY = 24;
  private static final int METHODID_GET_ALL_SUBJECTS = 25;
  private static final int METHODID_GET_ALL_NAMED_SUBJECTS = 26;
  private static final int METHODID_GET_ALL_OBJECTS = 27;
  private static final int METHODID_GET_ALL_NAMED_OBJECTS = 28;
  private static final int METHODID_GET_ALL_ACTIONS = 29;
  private static final int METHODID_GET_ALL_NAMED_ACTIONS = 30;
  private static final int METHODID_GET_ALL_ROLES = 31;
  private static final int METHODID_GET_ALL_NAMED_ROLES = 32;
  private static final int METHODID_HAS_POLICY = 33;
  private static final int METHODID_HAS_NAMED_POLICY = 34;
  private static final int METHODID_HAS_GROUPING_POLICY = 35;
  private static final int METHODID_HAS_NAMED_GROUPING_POLICY = 36;
  private static final int METHODID_GET_ROLES_FOR_USER = 37;
  private static final int METHODID_GET_IMPLICIT_ROLES_FOR_USER = 38;
  private static final int METHODID_GET_USERS_FOR_ROLE = 39;
  private static final int METHODID_HAS_ROLE_FOR_USER = 40;
  private static final int METHODID_ADD_ROLE_FOR_USER = 41;
  private static final int METHODID_DELETE_ROLE_FOR_USER = 42;
  private static final int METHODID_DELETE_ROLES_FOR_USER = 43;
  private static final int METHODID_DELETE_USER = 44;
  private static final int METHODID_DELETE_ROLE = 45;
  private static final int METHODID_GET_PERMISSIONS_FOR_USER = 46;
  private static final int METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER = 47;
  private static final int METHODID_DELETE_PERMISSION = 48;
  private static final int METHODID_ADD_PERMISSION_FOR_USER = 49;
  private static final int METHODID_DELETE_PERMISSION_FOR_USER = 50;
  private static final int METHODID_DELETE_PERMISSIONS_FOR_USER = 51;
  private static final int METHODID_HAS_PERMISSION_FOR_USER = 52;

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
        case METHODID_NEW_ENFORCER:
          serviceImpl.newEnforcer((com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply>) responseObserver);
          break;
        case METHODID_NEW_ADAPTER:
          serviceImpl.newAdapter((com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply>) responseObserver);
          break;
        case METHODID_ENFORCE:
          serviceImpl.enforce((com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_LOAD_POLICY:
          serviceImpl.loadPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>) responseObserver);
          break;
        case METHODID_SAVE_POLICY:
          serviceImpl.savePolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>) responseObserver);
          break;
        case METHODID_ADD_POLICY:
          serviceImpl.addPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_ADD_NAMED_POLICY:
          serviceImpl.addNamedPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_POLICY:
          serviceImpl.removePolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_NAMED_POLICY:
          serviceImpl.removeNamedPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_FILTERED_POLICY:
          serviceImpl.removeFilteredPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_FILTERED_NAMED_POLICY:
          serviceImpl.removeFilteredNamedPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_GET_POLICY:
          serviceImpl.getPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_NAMED_POLICY:
          serviceImpl.getNamedPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_FILTERED_POLICY:
          serviceImpl.getFilteredPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_FILTERED_NAMED_POLICY:
          serviceImpl.getFilteredNamedPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_ADD_GROUPING_POLICY:
          serviceImpl.addGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_ADD_NAMED_GROUPING_POLICY:
          serviceImpl.addNamedGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_GROUPING_POLICY:
          serviceImpl.removeGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_NAMED_GROUPING_POLICY:
          serviceImpl.removeNamedGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_FILTERED_GROUPING_POLICY:
          serviceImpl.removeFilteredGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_REMOVE_FILTERED_NAMED_GROUPING_POLICY:
          serviceImpl.removeFilteredNamedGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_GET_GROUPING_POLICY:
          serviceImpl.getGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_NAMED_GROUPING_POLICY:
          serviceImpl.getNamedGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_FILTERED_GROUPING_POLICY:
          serviceImpl.getFilteredGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_FILTERED_NAMED_GROUPING_POLICY:
          serviceImpl.getFilteredNamedGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_ALL_SUBJECTS:
          serviceImpl.getAllSubjects((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_ALL_NAMED_SUBJECTS:
          serviceImpl.getAllNamedSubjects((com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_ALL_OBJECTS:
          serviceImpl.getAllObjects((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_ALL_NAMED_OBJECTS:
          serviceImpl.getAllNamedObjects((com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_ALL_ACTIONS:
          serviceImpl.getAllActions((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_ALL_NAMED_ACTIONS:
          serviceImpl.getAllNamedActions((com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_ALL_ROLES:
          serviceImpl.getAllRoles((com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_ALL_NAMED_ROLES:
          serviceImpl.getAllNamedRoles((com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_HAS_POLICY:
          serviceImpl.hasPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_HAS_NAMED_POLICY:
          serviceImpl.hasNamedPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_HAS_GROUPING_POLICY:
          serviceImpl.hasGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_HAS_NAMED_GROUPING_POLICY:
          serviceImpl.hasNamedGroupingPolicy((com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_GET_ROLES_FOR_USER:
          serviceImpl.getRolesForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_IMPLICIT_ROLES_FOR_USER:
          serviceImpl.getImplicitRolesForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_GET_USERS_FOR_ROLE:
          serviceImpl.getUsersForRole((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>) responseObserver);
          break;
        case METHODID_HAS_ROLE_FOR_USER:
          serviceImpl.hasRoleForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_ADD_ROLE_FOR_USER:
          serviceImpl.addRoleForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_DELETE_ROLE_FOR_USER:
          serviceImpl.deleteRoleForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_DELETE_ROLES_FOR_USER:
          serviceImpl.deleteRolesForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_DELETE_USER:
          serviceImpl.deleteUser((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_DELETE_ROLE:
          serviceImpl.deleteRole((com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>) responseObserver);
          break;
        case METHODID_GET_PERMISSIONS_FOR_USER:
          serviceImpl.getPermissionsForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER:
          serviceImpl.getImplicitPermissionsForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>) responseObserver);
          break;
        case METHODID_DELETE_PERMISSION:
          serviceImpl.deletePermission((com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_ADD_PERMISSION_FOR_USER:
          serviceImpl.addPermissionForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_DELETE_PERMISSION_FOR_USER:
          serviceImpl.deletePermissionForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_DELETE_PERMISSIONS_FOR_USER:
          serviceImpl.deletePermissionsForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
          break;
        case METHODID_HAS_PERMISSION_FOR_USER:
          serviceImpl.hasPermissionForUser((com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>) responseObserver);
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
          getNewEnforcerMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.NewEnforcerReply>(
                service, METHODID_NEW_ENFORCER)))
        .addMethod(
          getNewAdapterMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.NewAdapterReply>(
                service, METHODID_NEW_ADAPTER)))
        .addMethod(
          getEnforceMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EnforceRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_ENFORCE)))
        .addMethod(
          getLoadPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>(
                service, METHODID_LOAD_POLICY)))
        .addMethod(
          getSavePolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>(
                service, METHODID_SAVE_POLICY)))
        .addMethod(
          getAddPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_ADD_POLICY)))
        .addMethod(
          getAddNamedPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_ADD_NAMED_POLICY)))
        .addMethod(
          getRemovePolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_POLICY)))
        .addMethod(
          getRemoveNamedPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_NAMED_POLICY)))
        .addMethod(
          getRemoveFilteredPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_FILTERED_POLICY)))
        .addMethod(
          getRemoveFilteredNamedPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_FILTERED_NAMED_POLICY)))
        .addMethod(
          getGetPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_POLICY)))
        .addMethod(
          getGetNamedPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_NAMED_POLICY)))
        .addMethod(
          getGetFilteredPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_FILTERED_POLICY)))
        .addMethod(
          getGetFilteredNamedPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_FILTERED_NAMED_POLICY)))
        .addMethod(
          getAddGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_ADD_GROUPING_POLICY)))
        .addMethod(
          getAddNamedGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_ADD_NAMED_GROUPING_POLICY)))
        .addMethod(
          getRemoveGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_GROUPING_POLICY)))
        .addMethod(
          getRemoveNamedGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_NAMED_GROUPING_POLICY)))
        .addMethod(
          getRemoveFilteredGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_FILTERED_GROUPING_POLICY)))
        .addMethod(
          getRemoveFilteredNamedGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_REMOVE_FILTERED_NAMED_GROUPING_POLICY)))
        .addMethod(
          getGetGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_GROUPING_POLICY)))
        .addMethod(
          getGetNamedGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_NAMED_GROUPING_POLICY)))
        .addMethod(
          getGetFilteredGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_FILTERED_GROUPING_POLICY)))
        .addMethod(
          getGetFilteredNamedGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.FilteredPolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_FILTERED_NAMED_GROUPING_POLICY)))
        .addMethod(
          getGetAllSubjectsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_SUBJECTS)))
        .addMethod(
          getGetAllNamedSubjectsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_NAMED_SUBJECTS)))
        .addMethod(
          getGetAllObjectsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_OBJECTS)))
        .addMethod(
          getGetAllNamedObjectsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_NAMED_OBJECTS)))
        .addMethod(
          getGetAllActionsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_ACTIONS)))
        .addMethod(
          getGetAllNamedActionsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_NAMED_ACTIONS)))
        .addMethod(
          getGetAllRolesMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_ROLES)))
        .addMethod(
          getGetAllNamedRolesMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.SimpleGetRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ALL_NAMED_ROLES)))
        .addMethod(
          getHasPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_HAS_POLICY)))
        .addMethod(
          getHasNamedPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_HAS_NAMED_POLICY)))
        .addMethod(
          getHasGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_HAS_GROUPING_POLICY)))
        .addMethod(
          getHasNamedGroupingPolicyMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PolicyRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_HAS_NAMED_GROUPING_POLICY)))
        .addMethod(
          getGetRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_ROLES_FOR_USER)))
        .addMethod(
          getGetImplicitRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_IMPLICIT_ROLES_FOR_USER)))
        .addMethod(
          getGetUsersForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.ArrayReply>(
                service, METHODID_GET_USERS_FOR_ROLE)))
        .addMethod(
          getHasRoleForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_HAS_ROLE_FOR_USER)))
        .addMethod(
          getAddRoleForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_ADD_ROLE_FOR_USER)))
        .addMethod(
          getDeleteRoleForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_DELETE_ROLE_FOR_USER)))
        .addMethod(
          getDeleteRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_DELETE_ROLES_FOR_USER)))
        .addMethod(
          getDeleteUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_DELETE_USER)))
        .addMethod(
          getDeleteRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.UserRoleRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.EmptyReply>(
                service, METHODID_DELETE_ROLE)))
        .addMethod(
          getGetPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_PERMISSIONS_FOR_USER)))
        .addMethod(
          getGetImplicitPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.Array2DReply>(
                service, METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER)))
        .addMethod(
          getDeletePermissionMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_DELETE_PERMISSION)))
        .addMethod(
          getAddPermissionForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_ADD_PERMISSION_FOR_USER)))
        .addMethod(
          getDeletePermissionForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_DELETE_PERMISSION_FOR_USER)))
        .addMethod(
          getDeletePermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_DELETE_PERMISSIONS_FOR_USER)))
        .addMethod(
          getHasPermissionForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.casbin.v1.PermissionRequest,
              com.github.saturn_xiv.palm.plugins.casbin.v1.BoolReply>(
                service, METHODID_HAS_PERMISSION_FOR_USER)))
        .build();
  }

  private static abstract class CasbinBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    CasbinBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.casbin.v1.CasbinOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Casbin");
    }
  }

  private static final class CasbinFileDescriptorSupplier
      extends CasbinBaseDescriptorSupplier {
    CasbinFileDescriptorSupplier() {}
  }

  private static final class CasbinMethodDescriptorSupplier
      extends CasbinBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    CasbinMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (CasbinGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new CasbinFileDescriptorSupplier())
              .addMethod(getNewEnforcerMethod())
              .addMethod(getNewAdapterMethod())
              .addMethod(getEnforceMethod())
              .addMethod(getLoadPolicyMethod())
              .addMethod(getSavePolicyMethod())
              .addMethod(getAddPolicyMethod())
              .addMethod(getAddNamedPolicyMethod())
              .addMethod(getRemovePolicyMethod())
              .addMethod(getRemoveNamedPolicyMethod())
              .addMethod(getRemoveFilteredPolicyMethod())
              .addMethod(getRemoveFilteredNamedPolicyMethod())
              .addMethod(getGetPolicyMethod())
              .addMethod(getGetNamedPolicyMethod())
              .addMethod(getGetFilteredPolicyMethod())
              .addMethod(getGetFilteredNamedPolicyMethod())
              .addMethod(getAddGroupingPolicyMethod())
              .addMethod(getAddNamedGroupingPolicyMethod())
              .addMethod(getRemoveGroupingPolicyMethod())
              .addMethod(getRemoveNamedGroupingPolicyMethod())
              .addMethod(getRemoveFilteredGroupingPolicyMethod())
              .addMethod(getRemoveFilteredNamedGroupingPolicyMethod())
              .addMethod(getGetGroupingPolicyMethod())
              .addMethod(getGetNamedGroupingPolicyMethod())
              .addMethod(getGetFilteredGroupingPolicyMethod())
              .addMethod(getGetFilteredNamedGroupingPolicyMethod())
              .addMethod(getGetAllSubjectsMethod())
              .addMethod(getGetAllNamedSubjectsMethod())
              .addMethod(getGetAllObjectsMethod())
              .addMethod(getGetAllNamedObjectsMethod())
              .addMethod(getGetAllActionsMethod())
              .addMethod(getGetAllNamedActionsMethod())
              .addMethod(getGetAllRolesMethod())
              .addMethod(getGetAllNamedRolesMethod())
              .addMethod(getHasPolicyMethod())
              .addMethod(getHasNamedPolicyMethod())
              .addMethod(getHasGroupingPolicyMethod())
              .addMethod(getHasNamedGroupingPolicyMethod())
              .addMethod(getGetRolesForUserMethod())
              .addMethod(getGetImplicitRolesForUserMethod())
              .addMethod(getGetUsersForRoleMethod())
              .addMethod(getHasRoleForUserMethod())
              .addMethod(getAddRoleForUserMethod())
              .addMethod(getDeleteRoleForUserMethod())
              .addMethod(getDeleteRolesForUserMethod())
              .addMethod(getDeleteUserMethod())
              .addMethod(getDeleteRoleMethod())
              .addMethod(getGetPermissionsForUserMethod())
              .addMethod(getGetImplicitPermissionsForUserMethod())
              .addMethod(getDeletePermissionMethod())
              .addMethod(getAddPermissionForUserMethod())
              .addMethod(getDeletePermissionForUserMethod())
              .addMethod(getDeletePermissionsForUserMethod())
              .addMethod(getHasPermissionForUserMethod())
              .build();
        }
      }
    }
    return result;
  }
}
