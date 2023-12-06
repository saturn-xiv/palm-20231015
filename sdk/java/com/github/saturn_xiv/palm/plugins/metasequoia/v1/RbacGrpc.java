package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.60.0)",
    comments = "Source: metasequoia.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class RbacGrpc {

  private RbacGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.metasequoia.v1.Rbac";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest,
      com.google.protobuf.Empty> getCanMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Can",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest,
      com.google.protobuf.Empty> getCanMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest, com.google.protobuf.Empty> getCanMethod;
    if ((getCanMethod = RbacGrpc.getCanMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getCanMethod = RbacGrpc.getCanMethod) == null) {
          RbacGrpc.getCanMethod = getCanMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Can"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("Can"))
              .build();
        }
      }
    }
    return getCanMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest,
      com.google.protobuf.Empty> getHasMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Has",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest,
      com.google.protobuf.Empty> getHasMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest, com.google.protobuf.Empty> getHasMethod;
    if ((getHasMethod = RbacGrpc.getHasMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getHasMethod = RbacGrpc.getHasMethod) == null) {
          RbacGrpc.getHasMethod = getHasMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Has"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("Has"))
              .build();
        }
      }
    }
    return getHasMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getGetRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getGetRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getGetRolesForUserMethod;
    if ((getGetRolesForUserMethod = RbacGrpc.getGetRolesForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getGetRolesForUserMethod = RbacGrpc.getGetRolesForUserMethod) == null) {
          RbacGrpc.getGetRolesForUserMethod = getGetRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("GetRolesForUser"))
              .build();
        }
      }
    }
    return getGetRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getGetImplicitRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetImplicitRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getGetImplicitRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getGetImplicitRolesForUserMethod;
    if ((getGetImplicitRolesForUserMethod = RbacGrpc.getGetImplicitRolesForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getGetImplicitRolesForUserMethod = RbacGrpc.getGetImplicitRolesForUserMethod) == null) {
          RbacGrpc.getGetImplicitRolesForUserMethod = getGetImplicitRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetImplicitRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("GetImplicitRolesForUser"))
              .build();
        }
      }
    }
    return getGetImplicitRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest,
      com.google.protobuf.Empty> getAddRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest,
      com.google.protobuf.Empty> getAddRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest, com.google.protobuf.Empty> getAddRolesForUserMethod;
    if ((getAddRolesForUserMethod = RbacGrpc.getAddRolesForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getAddRolesForUserMethod = RbacGrpc.getAddRolesForUserMethod) == null) {
          RbacGrpc.getAddRolesForUserMethod = getAddRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("AddRolesForUser"))
              .build();
        }
      }
    }
    return getAddRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest,
      com.google.protobuf.Empty> getDeleteRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest,
      com.google.protobuf.Empty> getDeleteRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest, com.google.protobuf.Empty> getDeleteRolesForUserMethod;
    if ((getDeleteRolesForUserMethod = RbacGrpc.getDeleteRolesForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getDeleteRolesForUserMethod = RbacGrpc.getDeleteRolesForUserMethod) == null) {
          RbacGrpc.getDeleteRolesForUserMethod = getDeleteRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("DeleteRolesForUser"))
              .build();
        }
      }
    }
    return getDeleteRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest,
      com.google.protobuf.Empty> getAddPermissionsForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddPermissionsForRole",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest,
      com.google.protobuf.Empty> getAddPermissionsForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest, com.google.protobuf.Empty> getAddPermissionsForRoleMethod;
    if ((getAddPermissionsForRoleMethod = RbacGrpc.getAddPermissionsForRoleMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getAddPermissionsForRoleMethod = RbacGrpc.getAddPermissionsForRoleMethod) == null) {
          RbacGrpc.getAddPermissionsForRoleMethod = getAddPermissionsForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddPermissionsForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("AddPermissionsForRole"))
              .build();
        }
      }
    }
    return getAddPermissionsForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest,
      com.google.protobuf.Empty> getDeletePermissionsForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeletePermissionsForRole",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest,
      com.google.protobuf.Empty> getDeletePermissionsForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest, com.google.protobuf.Empty> getDeletePermissionsForRoleMethod;
    if ((getDeletePermissionsForRoleMethod = RbacGrpc.getDeletePermissionsForRoleMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getDeletePermissionsForRoleMethod = RbacGrpc.getDeletePermissionsForRoleMethod) == null) {
          RbacGrpc.getDeletePermissionsForRoleMethod = getDeletePermissionsForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeletePermissionsForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("DeletePermissionsForRole"))
              .build();
        }
      }
    }
    return getDeletePermissionsForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getGetPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getGetPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getGetPermissionsForUserMethod;
    if ((getGetPermissionsForUserMethod = RbacGrpc.getGetPermissionsForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getGetPermissionsForUserMethod = RbacGrpc.getGetPermissionsForUserMethod) == null) {
          RbacGrpc.getGetPermissionsForUserMethod = getGetPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("GetPermissionsForUser"))
              .build();
        }
      }
    }
    return getGetPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getGetImplicitPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetImplicitPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getGetImplicitPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getGetImplicitPermissionsForUserMethod;
    if ((getGetImplicitPermissionsForUserMethod = RbacGrpc.getGetImplicitPermissionsForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getGetImplicitPermissionsForUserMethod = RbacGrpc.getGetImplicitPermissionsForUserMethod) == null) {
          RbacGrpc.getGetImplicitPermissionsForUserMethod = getGetImplicitPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetImplicitPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("GetImplicitPermissionsForUser"))
              .build();
        }
      }
    }
    return getGetImplicitPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest,
      com.google.protobuf.Empty> getAddPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest,
      com.google.protobuf.Empty> getAddPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest, com.google.protobuf.Empty> getAddPermissionsForUserMethod;
    if ((getAddPermissionsForUserMethod = RbacGrpc.getAddPermissionsForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getAddPermissionsForUserMethod = RbacGrpc.getAddPermissionsForUserMethod) == null) {
          RbacGrpc.getAddPermissionsForUserMethod = getAddPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("AddPermissionsForUser"))
              .build();
        }
      }
    }
    return getAddPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest,
      com.google.protobuf.Empty> getDeletePermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeletePermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest,
      com.google.protobuf.Empty> getDeletePermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest, com.google.protobuf.Empty> getDeletePermissionsForUserMethod;
    if ((getDeletePermissionsForUserMethod = RbacGrpc.getDeletePermissionsForUserMethod) == null) {
      synchronized (RbacGrpc.class) {
        if ((getDeletePermissionsForUserMethod = RbacGrpc.getDeletePermissionsForUserMethod) == null) {
          RbacGrpc.getDeletePermissionsForUserMethod = getDeletePermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeletePermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new RbacMethodDescriptorSupplier("DeletePermissionsForUser"))
              .build();
        }
      }
    }
    return getDeletePermissionsForUserMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static RbacStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<RbacStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<RbacStub>() {
        @java.lang.Override
        public RbacStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new RbacStub(channel, callOptions);
        }
      };
    return RbacStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static RbacBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<RbacBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<RbacBlockingStub>() {
        @java.lang.Override
        public RbacBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new RbacBlockingStub(channel, callOptions);
        }
      };
    return RbacBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static RbacFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<RbacFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<RbacFutureStub>() {
        @java.lang.Override
        public RbacFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new RbacFutureStub(channel, callOptions);
        }
      };
    return RbacFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void can(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCanMethod(), responseObserver);
    }

    /**
     */
    default void has(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasMethod(), responseObserver);
    }

    /**
     */
    default void getRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetImplicitRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void addRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void deleteRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void addPermissionsForRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddPermissionsForRoleMethod(), responseObserver);
    }

    /**
     */
    default void deletePermissionsForRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeletePermissionsForRoleMethod(), responseObserver);
    }

    /**
     */
    default void getPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetImplicitPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void addPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeletePermissionsForUserMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Rbac.
   */
  public static abstract class RbacImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return RbacGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Rbac.
   */
  public static final class RbacStub
      extends io.grpc.stub.AbstractAsyncStub<RbacStub> {
    private RbacStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected RbacStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new RbacStub(channel, callOptions);
    }

    /**
     */
    public void can(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCanMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void has(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetImplicitRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addPermissionsForRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddPermissionsForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deletePermissionsForRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeletePermissionsForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetImplicitPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeletePermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Rbac.
   */
  public static final class RbacBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<RbacBlockingStub> {
    private RbacBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected RbacBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new RbacBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty can(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCanMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty has(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse getRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetImplicitRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty addRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deleteRolesForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty addPermissionsForRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddPermissionsForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deletePermissionsForRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeletePermissionsForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse getPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetImplicitPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty addPermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeletePermissionsForUserMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Rbac.
   */
  public static final class RbacFutureStub
      extends io.grpc.stub.AbstractFutureStub<RbacFutureStub> {
    private RbacFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected RbacFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new RbacFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> can(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCanMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> has(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getRolesForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse> getImplicitRolesForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetImplicitRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> addRolesForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deleteRolesForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> addPermissionsForRole(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddPermissionsForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deletePermissionsForRole(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeletePermissionsForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse> getImplicitPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetImplicitPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> addPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deletePermissionsForUser(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeletePermissionsForUserMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CAN = 0;
  private static final int METHODID_HAS = 1;
  private static final int METHODID_GET_ROLES_FOR_USER = 2;
  private static final int METHODID_GET_IMPLICIT_ROLES_FOR_USER = 3;
  private static final int METHODID_ADD_ROLES_FOR_USER = 4;
  private static final int METHODID_DELETE_ROLES_FOR_USER = 5;
  private static final int METHODID_ADD_PERMISSIONS_FOR_ROLE = 6;
  private static final int METHODID_DELETE_PERMISSIONS_FOR_ROLE = 7;
  private static final int METHODID_GET_PERMISSIONS_FOR_USER = 8;
  private static final int METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER = 9;
  private static final int METHODID_ADD_PERMISSIONS_FOR_USER = 10;
  private static final int METHODID_DELETE_PERMISSIONS_FOR_USER = 11;

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
        case METHODID_CAN:
          serviceImpl.can((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_HAS:
          serviceImpl.has((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_ROLES_FOR_USER:
          serviceImpl.getRolesForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse>) responseObserver);
          break;
        case METHODID_GET_IMPLICIT_ROLES_FOR_USER:
          serviceImpl.getImplicitRolesForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse>) responseObserver);
          break;
        case METHODID_ADD_ROLES_FOR_USER:
          serviceImpl.addRolesForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE_ROLES_FOR_USER:
          serviceImpl.deleteRolesForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_ADD_PERMISSIONS_FOR_ROLE:
          serviceImpl.addPermissionsForRole((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE_PERMISSIONS_FOR_ROLE:
          serviceImpl.deletePermissionsForRole((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_PERMISSIONS_FOR_USER:
          serviceImpl.getPermissionsForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse>) responseObserver);
          break;
        case METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER:
          serviceImpl.getImplicitPermissionsForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse>) responseObserver);
          break;
        case METHODID_ADD_PERMISSIONS_FOR_USER:
          serviceImpl.addPermissionsForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE_PERMISSIONS_FOR_USER:
          serviceImpl.deletePermissionsForUser((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest) request,
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
          getCanMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacCanRequest,
              com.google.protobuf.Empty>(
                service, METHODID_CAN)))
        .addMethod(
          getHasMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacHasRequest,
              com.google.protobuf.Empty>(
                service, METHODID_HAS)))
        .addMethod(
          getGetRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse>(
                service, METHODID_GET_ROLES_FOR_USER)))
        .addMethod(
          getGetImplicitRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesResponse>(
                service, METHODID_GET_IMPLICIT_ROLES_FOR_USER)))
        .addMethod(
          getAddRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_ADD_ROLES_FOR_USER)))
        .addMethod(
          getDeleteRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_ROLES_FOR_USER)))
        .addMethod(
          getAddPermissionsForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest,
              com.google.protobuf.Empty>(
                service, METHODID_ADD_PERMISSIONS_FOR_ROLE)))
        .addMethod(
          getDeletePermissionsForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_PERMISSIONS_FOR_ROLE)))
        .addMethod(
          getGetPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse>(
                service, METHODID_GET_PERMISSIONS_FOR_USER)))
        .addMethod(
          getGetImplicitPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserQueryRequest,
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsResponse>(
                service, METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER)))
        .addMethod(
          getAddPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_ADD_PERMISSIONS_FOR_USER)))
        .addMethod(
          getDeletePermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_PERMISSIONS_FOR_USER)))
        .build();
  }

  private static abstract class RbacBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    RbacBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Rbac");
    }
  }

  private static final class RbacFileDescriptorSupplier
      extends RbacBaseDescriptorSupplier {
    RbacFileDescriptorSupplier() {}
  }

  private static final class RbacMethodDescriptorSupplier
      extends RbacBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    RbacMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (RbacGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new RbacFileDescriptorSupplier())
              .addMethod(getCanMethod())
              .addMethod(getHasMethod())
              .addMethod(getGetRolesForUserMethod())
              .addMethod(getGetImplicitRolesForUserMethod())
              .addMethod(getAddRolesForUserMethod())
              .addMethod(getDeleteRolesForUserMethod())
              .addMethod(getAddPermissionsForRoleMethod())
              .addMethod(getDeletePermissionsForRoleMethod())
              .addMethod(getGetPermissionsForUserMethod())
              .addMethod(getGetImplicitPermissionsForUserMethod())
              .addMethod(getAddPermissionsForUserMethod())
              .addMethod(getDeletePermissionsForUserMethod())
              .build();
        }
      }
    }
    return result;
  }
}
