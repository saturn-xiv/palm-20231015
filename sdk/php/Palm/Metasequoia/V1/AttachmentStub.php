<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 */
class AttachmentStub {

    /**
     * @param \Palm\Metasequoia\V1\Pager $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\AttachmentIndexResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Palm\Metasequoia\V1\Pager $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\AttachmentIndexResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Destroy(
        \Palm\Metasequoia\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\AttachmentShowRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\AttachmentShowResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Show(
        \Palm\Metasequoia\V1\AttachmentShowRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\AttachmentShowResponse {
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
            '/palm.metasequoia.v1.Attachment/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Palm\Metasequoia\V1\Pager',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Attachment/Destroy' => new \Grpc\MethodDescriptor(
                $this,
                'Destroy',
                '\Palm\Metasequoia\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Attachment/Show' => new \Grpc\MethodDescriptor(
                $this,
                'Show',
                '\Palm\Metasequoia\V1\AttachmentShowRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
