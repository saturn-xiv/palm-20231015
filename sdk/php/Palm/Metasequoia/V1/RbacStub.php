<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 */
class RbacStub {

    /**
     * @param \Palm\Metasequoia\V1\RbacCanRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Can(
        \Palm\Metasequoia\V1\RbacCanRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\RbacHasRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Has(
        \Palm\Metasequoia\V1\RbacHasRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\UserQueryRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\RbacRolesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetRolesForUser(
        \Palm\Metasequoia\V1\UserQueryRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\RbacRolesResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\UserQueryRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\RbacRolesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetImplicitRolesForUser(
        \Palm\Metasequoia\V1\UserQueryRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\RbacRolesResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\RbacRolesForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddRolesForUser(
        \Palm\Metasequoia\V1\RbacRolesForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\RbacRolesForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteRolesForUser(
        \Palm\Metasequoia\V1\RbacRolesForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\RbacPermissionsForRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPermissionsForRole(
        \Palm\Metasequoia\V1\RbacPermissionsForRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\RbacPermissionsForRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionsForRole(
        \Palm\Metasequoia\V1\RbacPermissionsForRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\UserQueryRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\RbacPermissionsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetPermissionsForUser(
        \Palm\Metasequoia\V1\UserQueryRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\RbacPermissionsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\UserQueryRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\RbacPermissionsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetImplicitPermissionsForUser(
        \Palm\Metasequoia\V1\UserQueryRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\RbacPermissionsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\RbacPermissionsForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPermissionsForUser(
        \Palm\Metasequoia\V1\RbacPermissionsForUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\RbacPermissionsForUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionsForUser(
        \Palm\Metasequoia\V1\RbacPermissionsForUserRequest $request,
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
            '/palm.metasequoia.v1.Rbac/Can' => new \Grpc\MethodDescriptor(
                $this,
                'Can',
                '\Palm\Metasequoia\V1\RbacCanRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/Has' => new \Grpc\MethodDescriptor(
                $this,
                'Has',
                '\Palm\Metasequoia\V1\RbacHasRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/GetRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetRolesForUser',
                '\Palm\Metasequoia\V1\UserQueryRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/GetImplicitRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitRolesForUser',
                '\Palm\Metasequoia\V1\UserQueryRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/AddRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddRolesForUser',
                '\Palm\Metasequoia\V1\RbacRolesForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/DeleteRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRolesForUser',
                '\Palm\Metasequoia\V1\RbacRolesForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/AddPermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'AddPermissionsForRole',
                '\Palm\Metasequoia\V1\RbacPermissionsForRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/DeletePermissionsForRole' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionsForRole',
                '\Palm\Metasequoia\V1\RbacPermissionsForRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/GetPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetPermissionsForUser',
                '\Palm\Metasequoia\V1\UserQueryRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/GetImplicitPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitPermissionsForUser',
                '\Palm\Metasequoia\V1\UserQueryRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/AddPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddPermissionsForUser',
                '\Palm\Metasequoia\V1\RbacPermissionsForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Rbac/DeletePermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionsForUser',
                '\Palm\Metasequoia\V1\RbacPermissionsForUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
