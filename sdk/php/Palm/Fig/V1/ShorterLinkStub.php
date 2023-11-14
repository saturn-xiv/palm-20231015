<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Fig\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class ShorterLinkStub {

    /**
     * @param \Palm\Fig\V1\ShorterLinkCreateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Create(
        \Palm\Fig\V1\ShorterLinkCreateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Fig\V1\ShorterLinkUpdateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Update(
        \Palm\Fig\V1\ShorterLinkUpdateRequest $request,
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
     * @param \Palm\Nut\V1\Pager $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Fig\V1\ShorterLinkIndexResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Palm\Nut\V1\Pager $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Fig\V1\ShorterLinkIndexResponse {
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
            '/palm.fig.v1.ShorterLink/Create' => new \Grpc\MethodDescriptor(
                $this,
                'Create',
                '\Palm\Fig\V1\ShorterLinkCreateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.fig.v1.ShorterLink/Update' => new \Grpc\MethodDescriptor(
                $this,
                'Update',
                '\Palm\Fig\V1\ShorterLinkUpdateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.fig.v1.ShorterLink/Destroy' => new \Grpc\MethodDescriptor(
                $this,
                'Destroy',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.fig.v1.ShorterLink/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Palm\Nut\V1\Pager',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
