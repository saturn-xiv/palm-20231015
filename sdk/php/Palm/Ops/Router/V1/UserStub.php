<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Ops\Router\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class UserStub {

    /**
     * @param \Palm\Ops\Router\V1\UserSignInRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Ops\Router\V1\UserSignInResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function SignIn(
        \Palm\Ops\Router\V1\UserSignInRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Ops\Router\V1\UserSignInResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\Duration $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Ops\Router\V1\UserSignInResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Refresh(
        \Google\Protobuf\Duration $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Ops\Router\V1\UserSignInResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Ops\Router\V1\UserUpdateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Update(
        \Palm\Ops\Router\V1\UserUpdateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function SignOut(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Ops\Router\V1\UserLogsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Logs(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Ops\Router\V1\UserLogsResponse {
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
            '/palm.ops.router.v1.User/SignIn' => new \Grpc\MethodDescriptor(
                $this,
                'SignIn',
                '\Palm\Ops\Router\V1\UserSignInRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.ops.router.v1.User/Refresh' => new \Grpc\MethodDescriptor(
                $this,
                'Refresh',
                '\Google\Protobuf\Duration',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.ops.router.v1.User/Update' => new \Grpc\MethodDescriptor(
                $this,
                'Update',
                '\Palm\Ops\Router\V1\UserUpdateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.ops.router.v1.User/SignOut' => new \Grpc\MethodDescriptor(
                $this,
                'SignOut',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.ops.router.v1.User/Logs' => new \Grpc\MethodDescriptor(
                $this,
                'Logs',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
