<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Cms\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class CommentStub {

    /**
     * @param \Palm\Cms\V1\CommentCreateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Create(
        \Palm\Cms\V1\CommentCreateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Cms\V1\CommentUpdateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Update(
        \Palm\Cms\V1\CommentUpdateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\Pager $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Cms\V1\CommentIndexResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Palm\Metasequoia\V1\Pager $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Cms\V1\CommentIndexResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Destory(
        \Palm\Metasequoia\V1\IdRequest $request,
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
            '/palm.cms.v1.Comment/Create' => new \Grpc\MethodDescriptor(
                $this,
                'Create',
                '\Palm\Cms\V1\CommentCreateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.cms.v1.Comment/Update' => new \Grpc\MethodDescriptor(
                $this,
                'Update',
                '\Palm\Cms\V1\CommentUpdateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.cms.v1.Comment/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Palm\Metasequoia\V1\Pager',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.cms.v1.Comment/Destory' => new \Grpc\MethodDescriptor(
                $this,
                'Destory',
                '\Palm\Metasequoia\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
