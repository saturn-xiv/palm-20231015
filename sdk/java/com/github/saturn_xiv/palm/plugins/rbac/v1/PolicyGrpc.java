package com.github.saturn_xiv.palm.plugins.rbac.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.59.0)",
    comments = "Source: rbac.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class PolicyGrpc {

  private PolicyGrpc() {}

  public static final java.lang.String SERVICE_NAME = "palm.rbac.v1.Policy";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getGetAllUsersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllUsers",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getGetAllUsersMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getGetAllUsersMethod;
    if ((getGetAllUsersMethod = PolicyGrpc.getGetAllUsersMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetAllUsersMethod = PolicyGrpc.getGetAllUsersMethod) == null) {
          PolicyGrpc.getGetAllUsersMethod = getGetAllUsersMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllUsers"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetAllUsers"))
              .build();
        }
      }
    }
    return getGetAllUsersMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse> getGetAllResourcesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllResources",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse> getGetAllResourcesMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse> getGetAllResourcesMethod;
    if ((getGetAllResourcesMethod = PolicyGrpc.getGetAllResourcesMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetAllResourcesMethod = PolicyGrpc.getGetAllResourcesMethod) == null) {
          PolicyGrpc.getGetAllResourcesMethod = getGetAllResourcesMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllResources"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetAllResources"))
              .build();
        }
      }
    }
    return getGetAllResourcesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse> getGetAllOperationsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllOperations",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse> getGetAllOperationsMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse> getGetAllOperationsMethod;
    if ((getGetAllOperationsMethod = PolicyGrpc.getGetAllOperationsMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetAllOperationsMethod = PolicyGrpc.getGetAllOperationsMethod) == null) {
          PolicyGrpc.getGetAllOperationsMethod = getGetAllOperationsMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllOperations"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetAllOperations"))
              .build();
        }
      }
    }
    return getGetAllOperationsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetAllRolesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllRoles",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetAllRolesMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetAllRolesMethod;
    if ((getGetAllRolesMethod = PolicyGrpc.getGetAllRolesMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetAllRolesMethod = PolicyGrpc.getGetAllRolesMethod) == null) {
          PolicyGrpc.getGetAllRolesMethod = getGetAllRolesMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllRoles"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetAllRoles"))
              .build();
        }
      }
    }
    return getGetAllRolesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse> getGetAllRulesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllRules",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse> getGetAllRulesMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse> getGetAllRulesMethod;
    if ((getGetAllRulesMethod = PolicyGrpc.getGetAllRulesMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetAllRulesMethod = PolicyGrpc.getGetAllRulesMethod) == null) {
          PolicyGrpc.getGetAllRulesMethod = getGetAllRulesMethod =
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllRules"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetAllRules"))
              .build();
        }
      }
    }
    return getGetAllRulesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetRolesForUserMethod;
    if ((getGetRolesForUserMethod = PolicyGrpc.getGetRolesForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetRolesForUserMethod = PolicyGrpc.getGetRolesForUserMethod) == null) {
          PolicyGrpc.getGetRolesForUserMethod = getGetRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetRolesForUser"))
              .build();
        }
      }
    }
    return getGetRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetImplicitRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetImplicitRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetImplicitRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getGetImplicitRolesForUserMethod;
    if ((getGetImplicitRolesForUserMethod = PolicyGrpc.getGetImplicitRolesForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetImplicitRolesForUserMethod = PolicyGrpc.getGetImplicitRolesForUserMethod) == null) {
          PolicyGrpc.getGetImplicitRolesForUserMethod = getGetImplicitRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetImplicitRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetImplicitRolesForUser"))
              .build();
        }
      }
    }
    return getGetImplicitRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getGetUsersForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetUsersForRole",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getGetUsersForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getGetUsersForRoleMethod;
    if ((getGetUsersForRoleMethod = PolicyGrpc.getGetUsersForRoleMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetUsersForRoleMethod = PolicyGrpc.getGetUsersForRoleMethod) == null) {
          PolicyGrpc.getGetUsersForRoleMethod = getGetUsersForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetUsersForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetUsersForRole"))
              .build();
        }
      }
    }
    return getGetUsersForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest,
      com.google.protobuf.Empty> getDeleteRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest,
      com.google.protobuf.Empty> getDeleteRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest, com.google.protobuf.Empty> getDeleteRolesForUserMethod;
    if ((getDeleteRolesForUserMethod = PolicyGrpc.getDeleteRolesForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getDeleteRolesForUserMethod = PolicyGrpc.getDeleteRolesForUserMethod) == null) {
          PolicyGrpc.getDeleteRolesForUserMethod = getDeleteRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("DeleteRolesForUser"))
              .build();
        }
      }
    }
    return getDeleteRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest,
      com.google.protobuf.Empty> getAddRolesForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddRolesForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest,
      com.google.protobuf.Empty> getAddRolesForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest, com.google.protobuf.Empty> getAddRolesForUserMethod;
    if ((getAddRolesForUserMethod = PolicyGrpc.getAddRolesForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getAddRolesForUserMethod = PolicyGrpc.getAddRolesForUserMethod) == null) {
          PolicyGrpc.getAddRolesForUserMethod = getAddRolesForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddRolesForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("AddRolesForUser"))
              .build();
        }
      }
    }
    return getAddRolesForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.google.protobuf.Empty> getDeleteUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.google.protobuf.Empty> getDeleteUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.google.protobuf.Empty> getDeleteUserMethod;
    if ((getDeleteUserMethod = PolicyGrpc.getDeleteUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getDeleteUserMethod = PolicyGrpc.getDeleteUserMethod) == null) {
          PolicyGrpc.getDeleteUserMethod = getDeleteUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("DeleteUser"))
              .build();
        }
      }
    }
    return getDeleteUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
      com.google.protobuf.Empty> getDeleteRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteRole",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
      com.google.protobuf.Empty> getDeleteRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest, com.google.protobuf.Empty> getDeleteRoleMethod;
    if ((getDeleteRoleMethod = PolicyGrpc.getDeleteRoleMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getDeleteRoleMethod = PolicyGrpc.getDeleteRoleMethod) == null) {
          PolicyGrpc.getDeleteRoleMethod = getDeleteRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("DeleteRole"))
              .build();
        }
      }
    }
    return getDeleteRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest,
      com.google.protobuf.Empty> getAddPermissionsForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddPermissionsForRole",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest,
      com.google.protobuf.Empty> getAddPermissionsForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest, com.google.protobuf.Empty> getAddPermissionsForRoleMethod;
    if ((getAddPermissionsForRoleMethod = PolicyGrpc.getAddPermissionsForRoleMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getAddPermissionsForRoleMethod = PolicyGrpc.getAddPermissionsForRoleMethod) == null) {
          PolicyGrpc.getAddPermissionsForRoleMethod = getAddPermissionsForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddPermissionsForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("AddPermissionsForRole"))
              .build();
        }
      }
    }
    return getAddPermissionsForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest,
      com.google.protobuf.Empty> getDeletePermissionsForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeletePermissionsForRole",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest,
      com.google.protobuf.Empty> getDeletePermissionsForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest, com.google.protobuf.Empty> getDeletePermissionsForRoleMethod;
    if ((getDeletePermissionsForRoleMethod = PolicyGrpc.getDeletePermissionsForRoleMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getDeletePermissionsForRoleMethod = PolicyGrpc.getDeletePermissionsForRoleMethod) == null) {
          PolicyGrpc.getDeletePermissionsForRoleMethod = getDeletePermissionsForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeletePermissionsForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("DeletePermissionsForRole"))
              .build();
        }
      }
    }
    return getDeletePermissionsForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest,
      com.google.protobuf.Empty> getAddPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest,
      com.google.protobuf.Empty> getAddPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest, com.google.protobuf.Empty> getAddPermissionsForUserMethod;
    if ((getAddPermissionsForUserMethod = PolicyGrpc.getAddPermissionsForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getAddPermissionsForUserMethod = PolicyGrpc.getAddPermissionsForUserMethod) == null) {
          PolicyGrpc.getAddPermissionsForUserMethod = getAddPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("AddPermissionsForUser"))
              .build();
        }
      }
    }
    return getAddPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest,
      com.google.protobuf.Empty> getDeletePermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeletePermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest,
      com.google.protobuf.Empty> getDeletePermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest, com.google.protobuf.Empty> getDeletePermissionsForUserMethod;
    if ((getDeletePermissionsForUserMethod = PolicyGrpc.getDeletePermissionsForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getDeletePermissionsForUserMethod = PolicyGrpc.getDeletePermissionsForUserMethod) == null) {
          PolicyGrpc.getDeletePermissionsForUserMethod = getDeletePermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeletePermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("DeletePermissionsForUser"))
              .build();
        }
      }
    }
    return getDeletePermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetPermissionsForUserMethod;
    if ((getGetPermissionsForUserMethod = PolicyGrpc.getGetPermissionsForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetPermissionsForUserMethod = PolicyGrpc.getGetPermissionsForUserMethod) == null) {
          PolicyGrpc.getGetPermissionsForUserMethod = getGetPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetPermissionsForUser"))
              .build();
        }
      }
    }
    return getGetPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetPermissionsForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPermissionsForRole",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetPermissionsForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetPermissionsForRoleMethod;
    if ((getGetPermissionsForRoleMethod = PolicyGrpc.getGetPermissionsForRoleMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetPermissionsForRoleMethod = PolicyGrpc.getGetPermissionsForRoleMethod) == null) {
          PolicyGrpc.getGetPermissionsForRoleMethod = getGetPermissionsForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetPermissionsForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetPermissionsForRole"))
              .build();
        }
      }
    }
    return getGetPermissionsForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetImplicitPermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetImplicitPermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.class,
      responseType = com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
      com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetImplicitPermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getGetImplicitPermissionsForUserMethod;
    if ((getGetImplicitPermissionsForUserMethod = PolicyGrpc.getGetImplicitPermissionsForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getGetImplicitPermissionsForUserMethod = PolicyGrpc.getGetImplicitPermissionsForUserMethod) == null) {
          PolicyGrpc.getGetImplicitPermissionsForUserMethod = getGetImplicitPermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest, com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetImplicitPermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("GetImplicitPermissionsForUser"))
              .build();
        }
      }
    }
    return getGetImplicitPermissionsForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest,
      com.google.protobuf.Empty> getHasRoleForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasRoleForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest,
      com.google.protobuf.Empty> getHasRoleForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest, com.google.protobuf.Empty> getHasRoleForUserMethod;
    if ((getHasRoleForUserMethod = PolicyGrpc.getHasRoleForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getHasRoleForUserMethod = PolicyGrpc.getHasRoleForUserMethod) == null) {
          PolicyGrpc.getHasRoleForUserMethod = getHasRoleForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasRoleForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("HasRoleForUser"))
              .build();
        }
      }
    }
    return getHasRoleForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest,
      com.google.protobuf.Empty> getHasPermissionForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HasPermissionForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest,
      com.google.protobuf.Empty> getHasPermissionForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest, com.google.protobuf.Empty> getHasPermissionForUserMethod;
    if ((getHasPermissionForUserMethod = PolicyGrpc.getHasPermissionForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getHasPermissionForUserMethod = PolicyGrpc.getHasPermissionForUserMethod) == null) {
          PolicyGrpc.getHasPermissionForUserMethod = getHasPermissionForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HasPermissionForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("HasPermissionForUser"))
              .build();
        }
      }
    }
    return getHasPermissionForUserMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest,
      com.google.protobuf.Empty> getUpdatePermissionsForRoleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdatePermissionsForRole",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest,
      com.google.protobuf.Empty> getUpdatePermissionsForRoleMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest, com.google.protobuf.Empty> getUpdatePermissionsForRoleMethod;
    if ((getUpdatePermissionsForRoleMethod = PolicyGrpc.getUpdatePermissionsForRoleMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getUpdatePermissionsForRoleMethod = PolicyGrpc.getUpdatePermissionsForRoleMethod) == null) {
          PolicyGrpc.getUpdatePermissionsForRoleMethod = getUpdatePermissionsForRoleMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdatePermissionsForRole"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("UpdatePermissionsForRole"))
              .build();
        }
      }
    }
    return getUpdatePermissionsForRoleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest,
      com.google.protobuf.Empty> getUpdatePermissionsForUserMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdatePermissionsForUser",
      requestType = com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest,
      com.google.protobuf.Empty> getUpdatePermissionsForUserMethod() {
    io.grpc.MethodDescriptor<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest, com.google.protobuf.Empty> getUpdatePermissionsForUserMethod;
    if ((getUpdatePermissionsForUserMethod = PolicyGrpc.getUpdatePermissionsForUserMethod) == null) {
      synchronized (PolicyGrpc.class) {
        if ((getUpdatePermissionsForUserMethod = PolicyGrpc.getUpdatePermissionsForUserMethod) == null) {
          PolicyGrpc.getUpdatePermissionsForUserMethod = getUpdatePermissionsForUserMethod =
              io.grpc.MethodDescriptor.<com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdatePermissionsForUser"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PolicyMethodDescriptorSupplier("UpdatePermissionsForUser"))
              .build();
        }
      }
    }
    return getUpdatePermissionsForUserMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PolicyStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PolicyStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PolicyStub>() {
        @java.lang.Override
        public PolicyStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PolicyStub(channel, callOptions);
        }
      };
    return PolicyStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PolicyBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PolicyBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PolicyBlockingStub>() {
        @java.lang.Override
        public PolicyBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PolicyBlockingStub(channel, callOptions);
        }
      };
    return PolicyBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PolicyFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PolicyFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PolicyFutureStub>() {
        @java.lang.Override
        public PolicyFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PolicyFutureStub(channel, callOptions);
        }
      };
    return PolicyFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
   * </pre>
   */
  public interface AsyncService {

    /**
     */
    default void getAllUsers(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllUsersMethod(), responseObserver);
    }

    /**
     */
    default void getAllResources(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllResourcesMethod(), responseObserver);
    }

    /**
     */
    default void getAllOperations(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllOperationsMethod(), responseObserver);
    }

    /**
     */
    default void getAllRoles(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllRolesMethod(), responseObserver);
    }

    /**
     */
    default void getAllRules(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllRulesMethod(), responseObserver);
    }

    /**
     */
    default void getRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetImplicitRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void getUsersForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetUsersForRoleMethod(), responseObserver);
    }

    /**
     */
    default void deleteRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void addRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddRolesForUserMethod(), responseObserver);
    }

    /**
     */
    default void deleteUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteUserMethod(), responseObserver);
    }

    /**
     */
    default void deleteRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteRoleMethod(), responseObserver);
    }

    /**
     */
    default void addPermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddPermissionsForRoleMethod(), responseObserver);
    }

    /**
     */
    default void deletePermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeletePermissionsForRoleMethod(), responseObserver);
    }

    /**
     */
    default void addPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeletePermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void getPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void getPermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetPermissionsForRoleMethod(), responseObserver);
    }

    /**
     */
    default void getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetImplicitPermissionsForUserMethod(), responseObserver);
    }

    /**
     */
    default void hasRoleForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasRoleForUserMethod(), responseObserver);
    }

    /**
     */
    default void hasPermissionForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getHasPermissionForUserMethod(), responseObserver);
    }

    /**
     */
    default void updatePermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdatePermissionsForRoleMethod(), responseObserver);
    }

    /**
     */
    default void updatePermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdatePermissionsForUserMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service Policy.
   * <pre>
   * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
   * </pre>
   */
  public static abstract class PolicyImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return PolicyGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service Policy.
   * <pre>
   * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
   * </pre>
   */
  public static final class PolicyStub
      extends io.grpc.stub.AbstractAsyncStub<PolicyStub> {
    private PolicyStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PolicyStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PolicyStub(channel, callOptions);
    }

    /**
     */
    public void getAllUsers(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllUsersMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllResources(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllResourcesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllOperations(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllOperationsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllRoles(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllRolesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllRules(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllRulesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetImplicitRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getUsersForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetUsersForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddRolesForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addPermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddPermissionsForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deletePermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeletePermissionsForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeletePermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getPermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetPermissionsForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request,
        io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetImplicitPermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasRoleForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasRoleForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hasPermissionForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getHasPermissionForUserMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updatePermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdatePermissionsForRoleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updatePermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdatePermissionsForUserMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service Policy.
   * <pre>
   * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
   * </pre>
   */
  public static final class PolicyBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<PolicyBlockingStub> {
    private PolicyBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PolicyBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PolicyBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse getAllUsers(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllUsersMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse getAllResources(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllResourcesMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse getAllOperations(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllOperationsMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse getAllRoles(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllRolesMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse getAllRules(com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllRulesMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse getRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse getImplicitRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetImplicitRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse getUsersForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetUsersForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deleteRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty addRolesForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddRolesForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deleteUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deleteRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty addPermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddPermissionsForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deletePermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeletePermissionsForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty addPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty deletePermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeletePermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse getPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse getPermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetPermissionsForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse getImplicitPermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetImplicitPermissionsForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty hasRoleForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasRoleForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty hasPermissionForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getHasPermissionForUserMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty updatePermissionsForRole(com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdatePermissionsForRoleMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty updatePermissionsForUser(com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdatePermissionsForUserMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service Policy.
   * <pre>
   * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
   * </pre>
   */
  public static final class PolicyFutureStub
      extends io.grpc.stub.AbstractFutureStub<PolicyFutureStub> {
    private PolicyFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PolicyFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PolicyFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getAllUsers(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllUsersMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse> getAllResources(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllResourcesMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse> getAllOperations(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllOperationsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getAllRoles(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllRolesMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse> getAllRules(
        com.google.protobuf.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllRulesMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getRolesForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse> getImplicitRolesForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetImplicitRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse> getUsersForRole(
        com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetUsersForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deleteRolesForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> addRolesForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddRolesForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deleteUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deleteRole(
        com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> addPermissionsForRole(
        com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddPermissionsForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deletePermissionsForRole(
        com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeletePermissionsForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> addPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> deletePermissionsForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeletePermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getPermissionsForRole(
        com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetPermissionsForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse> getImplicitPermissionsForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetImplicitPermissionsForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> hasRoleForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasRoleForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> hasPermissionForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getHasPermissionForUserMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> updatePermissionsForRole(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdatePermissionsForRoleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> updatePermissionsForUser(
        com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdatePermissionsForUserMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_ALL_USERS = 0;
  private static final int METHODID_GET_ALL_RESOURCES = 1;
  private static final int METHODID_GET_ALL_OPERATIONS = 2;
  private static final int METHODID_GET_ALL_ROLES = 3;
  private static final int METHODID_GET_ALL_RULES = 4;
  private static final int METHODID_GET_ROLES_FOR_USER = 5;
  private static final int METHODID_GET_IMPLICIT_ROLES_FOR_USER = 6;
  private static final int METHODID_GET_USERS_FOR_ROLE = 7;
  private static final int METHODID_DELETE_ROLES_FOR_USER = 8;
  private static final int METHODID_ADD_ROLES_FOR_USER = 9;
  private static final int METHODID_DELETE_USER = 10;
  private static final int METHODID_DELETE_ROLE = 11;
  private static final int METHODID_ADD_PERMISSIONS_FOR_ROLE = 12;
  private static final int METHODID_DELETE_PERMISSIONS_FOR_ROLE = 13;
  private static final int METHODID_ADD_PERMISSIONS_FOR_USER = 14;
  private static final int METHODID_DELETE_PERMISSIONS_FOR_USER = 15;
  private static final int METHODID_GET_PERMISSIONS_FOR_USER = 16;
  private static final int METHODID_GET_PERMISSIONS_FOR_ROLE = 17;
  private static final int METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER = 18;
  private static final int METHODID_HAS_ROLE_FOR_USER = 19;
  private static final int METHODID_HAS_PERMISSION_FOR_USER = 20;
  private static final int METHODID_UPDATE_PERMISSIONS_FOR_ROLE = 21;
  private static final int METHODID_UPDATE_PERMISSIONS_FOR_USER = 22;

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
        case METHODID_GET_ALL_USERS:
          serviceImpl.getAllUsers((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse>) responseObserver);
          break;
        case METHODID_GET_ALL_RESOURCES:
          serviceImpl.getAllResources((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse>) responseObserver);
          break;
        case METHODID_GET_ALL_OPERATIONS:
          serviceImpl.getAllOperations((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse>) responseObserver);
          break;
        case METHODID_GET_ALL_ROLES:
          serviceImpl.getAllRoles((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>) responseObserver);
          break;
        case METHODID_GET_ALL_RULES:
          serviceImpl.getAllRules((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse>) responseObserver);
          break;
        case METHODID_GET_ROLES_FOR_USER:
          serviceImpl.getRolesForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>) responseObserver);
          break;
        case METHODID_GET_IMPLICIT_ROLES_FOR_USER:
          serviceImpl.getImplicitRolesForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>) responseObserver);
          break;
        case METHODID_GET_USERS_FOR_ROLE:
          serviceImpl.getUsersForRole((com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse>) responseObserver);
          break;
        case METHODID_DELETE_ROLES_FOR_USER:
          serviceImpl.deleteRolesForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_ADD_ROLES_FOR_USER:
          serviceImpl.addRolesForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE_USER:
          serviceImpl.deleteUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE_ROLE:
          serviceImpl.deleteRole((com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_ADD_PERMISSIONS_FOR_ROLE:
          serviceImpl.addPermissionsForRole((com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE_PERMISSIONS_FOR_ROLE:
          serviceImpl.deletePermissionsForRole((com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_ADD_PERMISSIONS_FOR_USER:
          serviceImpl.addPermissionsForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_DELETE_PERMISSIONS_FOR_USER:
          serviceImpl.deletePermissionsForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_GET_PERMISSIONS_FOR_USER:
          serviceImpl.getPermissionsForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>) responseObserver);
          break;
        case METHODID_GET_PERMISSIONS_FOR_ROLE:
          serviceImpl.getPermissionsForRole((com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>) responseObserver);
          break;
        case METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER:
          serviceImpl.getImplicitPermissionsForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest) request,
              (io.grpc.stub.StreamObserver<com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>) responseObserver);
          break;
        case METHODID_HAS_ROLE_FOR_USER:
          serviceImpl.hasRoleForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_HAS_PERMISSION_FOR_USER:
          serviceImpl.hasPermissionForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UPDATE_PERMISSIONS_FOR_ROLE:
          serviceImpl.updatePermissionsForRole((com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_UPDATE_PERMISSIONS_FOR_USER:
          serviceImpl.updatePermissionsForUser((com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest) request,
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
          getGetAllUsersMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse>(
                service, METHODID_GET_ALL_USERS)))
        .addMethod(
          getGetAllResourcesMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.rbac.v1.ResourcesResponse>(
                service, METHODID_GET_ALL_RESOURCES)))
        .addMethod(
          getGetAllOperationsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.rbac.v1.OperationsResponse>(
                service, METHODID_GET_ALL_OPERATIONS)))
        .addMethod(
          getGetAllRolesMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>(
                service, METHODID_GET_ALL_ROLES)))
        .addMethod(
          getGetAllRulesMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.google.protobuf.Empty,
              com.github.saturn_xiv.palm.plugins.rbac.v1.RulesResponse>(
                service, METHODID_GET_ALL_RULES)))
        .addMethod(
          getGetRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
              com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>(
                service, METHODID_GET_ROLES_FOR_USER)))
        .addMethod(
          getGetImplicitRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
              com.github.saturn_xiv.palm.plugins.rbac.v1.RolesResponse>(
                service, METHODID_GET_IMPLICIT_ROLES_FOR_USER)))
        .addMethod(
          getGetUsersForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
              com.github.saturn_xiv.palm.plugins.rbac.v1.UsersResponse>(
                service, METHODID_GET_USERS_FOR_ROLE)))
        .addMethod(
          getDeleteRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_ROLES_FOR_USER)))
        .addMethod(
          getAddRolesForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserRolesRequest,
              com.google.protobuf.Empty>(
                service, METHODID_ADD_ROLES_FOR_USER)))
        .addMethod(
          getDeleteUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_USER)))
        .addMethod(
          getDeleteRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_ROLE)))
        .addMethod(
          getAddPermissionsForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest,
              com.google.protobuf.Empty>(
                service, METHODID_ADD_PERMISSIONS_FOR_ROLE)))
        .addMethod(
          getDeletePermissionsForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.RolePermissionsRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_PERMISSIONS_FOR_ROLE)))
        .addMethod(
          getAddPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest,
              com.google.protobuf.Empty>(
                service, METHODID_ADD_PERMISSIONS_FOR_USER)))
        .addMethod(
          getDeletePermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserPermissionsRequest,
              com.google.protobuf.Empty>(
                service, METHODID_DELETE_PERMISSIONS_FOR_USER)))
        .addMethod(
          getGetPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
              com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>(
                service, METHODID_GET_PERMISSIONS_FOR_USER)))
        .addMethod(
          getGetPermissionsForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.RoleRequest,
              com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>(
                service, METHODID_GET_PERMISSIONS_FOR_ROLE)))
        .addMethod(
          getGetImplicitPermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UserRequest,
              com.github.saturn_xiv.palm.plugins.rbac.v1.PermissionsResponse>(
                service, METHODID_GET_IMPLICIT_PERMISSIONS_FOR_USER)))
        .addMethod(
          getHasRoleForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.HasRoleForUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_HAS_ROLE_FOR_USER)))
        .addMethod(
          getHasPermissionForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.HasPermissionForUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_HAS_PERMISSION_FOR_USER)))
        .addMethod(
          getUpdatePermissionsForRoleMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForRoleRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE_PERMISSIONS_FOR_ROLE)))
        .addMethod(
          getUpdatePermissionsForUserMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.github.saturn_xiv.palm.plugins.rbac.v1.UpdatePermissionsForUserRequest,
              com.google.protobuf.Empty>(
                service, METHODID_UPDATE_PERMISSIONS_FOR_USER)))
        .build();
  }

  private static abstract class PolicyBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PolicyBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.saturn_xiv.palm.plugins.rbac.v1.Rbac.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Policy");
    }
  }

  private static final class PolicyFileDescriptorSupplier
      extends PolicyBaseDescriptorSupplier {
    PolicyFileDescriptorSupplier() {}
  }

  private static final class PolicyMethodDescriptorSupplier
      extends PolicyBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    PolicyMethodDescriptorSupplier(java.lang.String methodName) {
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
      synchronized (PolicyGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PolicyFileDescriptorSupplier())
              .addMethod(getGetAllUsersMethod())
              .addMethod(getGetAllResourcesMethod())
              .addMethod(getGetAllOperationsMethod())
              .addMethod(getGetAllRolesMethod())
              .addMethod(getGetAllRulesMethod())
              .addMethod(getGetRolesForUserMethod())
              .addMethod(getGetImplicitRolesForUserMethod())
              .addMethod(getGetUsersForRoleMethod())
              .addMethod(getDeleteRolesForUserMethod())
              .addMethod(getAddRolesForUserMethod())
              .addMethod(getDeleteUserMethod())
              .addMethod(getDeleteRoleMethod())
              .addMethod(getAddPermissionsForRoleMethod())
              .addMethod(getDeletePermissionsForRoleMethod())
              .addMethod(getAddPermissionsForUserMethod())
              .addMethod(getDeletePermissionsForUserMethod())
              .addMethod(getGetPermissionsForUserMethod())
              .addMethod(getGetPermissionsForRoleMethod())
              .addMethod(getGetImplicitPermissionsForUserMethod())
              .addMethod(getHasRoleForUserMethod())
              .addMethod(getHasPermissionForUserMethod())
              .addMethod(getUpdatePermissionsForRoleMethod())
              .addMethod(getUpdatePermissionsForUserMethod())
              .build();
        }
      }
    }
    return result;
  }
}
