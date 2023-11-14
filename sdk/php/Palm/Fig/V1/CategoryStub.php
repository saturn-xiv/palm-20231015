<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Fig\V1;

/**
 */
class CategoryStub {

    /**
     * @param \Palm\Fig\V1\CategoryCreateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Create(
        \Palm\Fig\V1\CategoryCreateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Fig\V1\CategoryUpdateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Update(
        \Palm\Fig\V1\CategoryUpdateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
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
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Fig\V1\CategoryIndexResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Fig\V1\CategoryIndexResponse {
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
            '/palm.fig.v1.Category/Create' => new \Grpc\MethodDescriptor(
                $this,
                'Create',
                '\Palm\Fig\V1\CategoryCreateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.fig.v1.Category/Update' => new \Grpc\MethodDescriptor(
                $this,
                'Update',
                '\Palm\Fig\V1\CategoryUpdateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.fig.v1.Category/Destroy' => new \Grpc\MethodDescriptor(
                $this,
                'Destroy',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.fig.v1.Category/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
