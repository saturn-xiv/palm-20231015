<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Cms\V1;

/**
 * ----------------------------------------------------------------------------
 */
class NotificationStub {

    /**
     * @param \Palm\Cms\V1\NotificationCreateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Create(
        \Palm\Cms\V1\NotificationCreateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Cms\V1\NotificationUpdateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Update(
        \Palm\Cms\V1\NotificationUpdateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\Pager $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Cms\V1\NotificationIndexResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Palm\Nut\V1\Pager $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Cms\V1\NotificationIndexResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Cms\V1\NotificationIndexResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Show(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Cms\V1\NotificationIndexResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Destory(
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
            '/palm.cms.v1.Notification/Create' => new \Grpc\MethodDescriptor(
                $this,
                'Create',
                '\Palm\Cms\V1\NotificationCreateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.cms.v1.Notification/Update' => new \Grpc\MethodDescriptor(
                $this,
                'Update',
                '\Palm\Cms\V1\NotificationUpdateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.cms.v1.Notification/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Palm\Nut\V1\Pager',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.cms.v1.Notification/Show' => new \Grpc\MethodDescriptor(
                $this,
                'Show',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.cms.v1.Notification/Destory' => new \Grpc\MethodDescriptor(
                $this,
                'Destory',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
