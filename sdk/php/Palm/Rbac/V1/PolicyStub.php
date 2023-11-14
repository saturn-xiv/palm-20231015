<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Rbac\V1;

/**
 * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
 */
class PolicyStub {

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\UsersResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllUsers(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\UsersResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\ResourcesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllResources(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\ResourcesResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\OperationsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllOperations(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\OperationsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\RolesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllRoles(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\RolesResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\RulesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllRules(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\RulesResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\RolesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetRolesForUser(
        \Palm\Rbac\V1\UserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\RolesResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\RolesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetImplicitRolesForUser(
        \Palm\Rbac\V1\UserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\RolesResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\RoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\UsersResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetUsersForRole(
        \Palm\Rbac\V1\RoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\UsersResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserRolesRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteRolesForUser(
        \Palm\Rbac\V1\UserRolesRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserRolesRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddRolesForUser(
        \Palm\Rbac\V1\UserRolesRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteUser(
        \Palm\Rbac\V1\UserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\RoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteRole(
        \Palm\Rbac\V1\RoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\RolePermissionsRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPermissionsForRole(
        \Palm\Rbac\V1\RolePermissionsRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\RolePermissionsRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionsForRole(
        \Palm\Rbac\V1\RolePermissionsRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserPermissionsRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPermissionsForUser(
        \Palm\Rbac\V1\UserPermissionsRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserPermissionsRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionsForUser(
        \Palm\Rbac\V1\UserPermissionsRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\PermissionsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetPermissionsForUser(
        \Palm\Rbac\V1\UserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\PermissionsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\RoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\PermissionsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetPermissionsForRole(
        \Palm\Rbac\V1\RoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\PermissionsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\PermissionsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetImplicitPermissionsForUser(
        \Palm\Rbac\V1\UserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\PermissionsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\HasRoleForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasRoleForUser(
        \Palm\Rbac\V1\HasRoleForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\HasPermissionForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasPermissionForUser(
        \Palm\Rbac\V1\HasPermissionForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UpdatePermissionsForRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function UpdatePermissionsForRole(
        \Palm\Rbac\V1\UpdatePermissionsForRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\UpdatePermissionsForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function UpdatePermissionsForUser(
        \Palm\Rbac\V1\UpdatePermissionsForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * Get the method descriptors of the service for server registration
     *
     * @return array of \Grpc\MethodDescriptor for the service methods
     */
    public final function getMethodDescriptors(): array
    {
        return [
            '/palm.rbac.v1.Policy/GetAllUsers' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllUsers',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetAllResources' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllResources',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetAllOperations' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllOperations',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetAllRoles' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllRoles',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetAllRules' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllRules',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetRolesForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetImplicitRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitRolesForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetUsersForRole' => new \Grpc\MethodDescriptor(
                $this,
                'GetUsersForRole',
                '\Palm\Rbac\V1\RoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/DeleteRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRolesForUser',
                '\Palm\Rbac\V1\UserRolesRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/AddRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddRolesForUser',
                '\Palm\Rbac\V1\UserRolesRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/DeleteUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/DeleteRole' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRole',
                '\Palm\Rbac\V1\RoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/AddPermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'AddPermissionsForRole',
                '\Palm\Rbac\V1\RolePermissionsRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/DeletePermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionsForRole',
                '\Palm\Rbac\V1\RolePermissionsRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/AddPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddPermissionsForUser',
                '\Palm\Rbac\V1\UserPermissionsRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/DeletePermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionsForUser',
                '\Palm\Rbac\V1\UserPermissionsRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetPermissionsForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetPermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'GetPermissionsForRole',
                '\Palm\Rbac\V1\RoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/GetImplicitPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitPermissionsForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/HasRoleForUser' => new \Grpc\MethodDescriptor(
                $this,
                'HasRoleForUser',
                '\Palm\Rbac\V1\HasRoleForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/HasPermissionForUser' => new \Grpc\MethodDescriptor(
                $this,
                'HasPermissionForUser',
                '\Palm\Rbac\V1\HasPermissionForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/UpdatePermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'UpdatePermissionsForRole',
                '\Palm\Rbac\V1\UpdatePermissionsForRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Policy/UpdatePermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'UpdatePermissionsForUser',
                '\Palm\Rbac\V1\UpdatePermissionsForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
