<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Nut\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class LeaveWordStub {

    /**
     * @param \Palm\Nut\V1\MediaContent $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Create(
        \Palm\Nut\V1\MediaContent $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\Pager $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Nut\V1\LeaveWordIndexResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Palm\Nut\V1\Pager $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Nut\V1\LeaveWordIndexResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Nut\V1\LeaveWordIndexResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Show(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Nut\V1\LeaveWordIndexResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Destroy(
        \Palm\Nut\V1\IdRequest $request,
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
            '/palm.nut.v1.LeaveWord/Create' => new \Grpc\MethodDescriptor(
                $this,
                'Create',
                '\Palm\Nut\V1\MediaContent',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.LeaveWord/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Palm\Nut\V1\Pager',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.LeaveWord/Show' => new \Grpc\MethodDescriptor(
                $this,
                'Show',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.LeaveWord/Destroy' => new \Grpc\MethodDescriptor(
                $this,
                'Destroy',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
