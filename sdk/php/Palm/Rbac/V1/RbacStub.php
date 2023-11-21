<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Rbac\V1;

/**
 */
class RbacStub {

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
     * @param \Palm\Rbac\V1\RolesForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddRolesForUser(
        \Palm\Rbac\V1\RolesForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\RolesForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteRolesForUser(
        \Palm\Rbac\V1\RolesForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\HasRoleForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasImplicitRoleForUser(
        \Palm\Rbac\V1\HasRoleForUserRequest $request,
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
     * @param \Palm\Rbac\V1\PermissionsForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPermissionsForUser(
        \Palm\Rbac\V1\PermissionsForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\PermissionsForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionsForUser(
        \Palm\Rbac\V1\PermissionsForUserRequest $request,
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
     * @param \Palm\Rbac\V1\UserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\PermissionsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasImplicitPermissionsForUser(
        \Palm\Rbac\V1\UserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\PermissionsResponse {
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
     * @param \Palm\Rbac\V1\RoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Rbac\V1\UsersResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetImplicitUsersForRole(
        \Palm\Rbac\V1\RoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Rbac\V1\UsersResponse {
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
     * @param \Palm\Rbac\V1\PermissionsForRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPermissionsForRole(
        \Palm\Rbac\V1\PermissionsForRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Rbac\V1\PermissionsForRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionsForRole(
        \Palm\Rbac\V1\PermissionsForRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
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
     * Get the method descriptors of the service for server registration
     *
     * @return array of \Grpc\MethodDescriptor for the service methods
     */
    public final function getMethodDescriptors(): array
    {
        return [
            '/palm.rbac.v1.Rbac/GetRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetRolesForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/GetImplicitRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitRolesForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/AddRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddRolesForUser',
                '\Palm\Rbac\V1\RolesForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/DeleteRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRolesForUser',
                '\Palm\Rbac\V1\RolesForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/HasImplicitRoleForUser' => new \Grpc\MethodDescriptor(
                $this,
                'HasImplicitRoleForUser',
                '\Palm\Rbac\V1\HasRoleForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/DeleteUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/AddPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddPermissionsForUser',
                '\Palm\Rbac\V1\PermissionsForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/DeletePermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionsForUser',
                '\Palm\Rbac\V1\PermissionsForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/GetPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetPermissionsForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/GetImplicitPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitPermissionsForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/HasImplicitPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'HasImplicitPermissionsForUser',
                '\Palm\Rbac\V1\UserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/GetUsersForRole' => new \Grpc\MethodDescriptor(
                $this,
                'GetUsersForRole',
                '\Palm\Rbac\V1\RoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/GetImplicitUsersForRole' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitUsersForRole',
                '\Palm\Rbac\V1\RoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/DeleteRole' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRole',
                '\Palm\Rbac\V1\RoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/AddPermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'AddPermissionsForRole',
                '\Palm\Rbac\V1\PermissionsForRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/DeletePermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionsForRole',
                '\Palm\Rbac\V1\PermissionsForRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.rbac.v1.Rbac/GetPermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'GetPermissionsForRole',
                '\Palm\Rbac\V1\RoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
