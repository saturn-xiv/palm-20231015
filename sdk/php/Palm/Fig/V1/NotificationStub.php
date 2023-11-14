<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Fig\V1;

/**
 * ----------------------------------------------------------------------------
 */
class NotificationStub {

    /**
     * @param \Palm\Nut\V1\Pager $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Fig\V1\IndexNotificationResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Palm\Nut\V1\Pager $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Fig\V1\IndexNotificationResponse {
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
            '/palm.fig.v1.Notification/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Palm\Nut\V1\Pager',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
