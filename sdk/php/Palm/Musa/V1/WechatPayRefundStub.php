<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayRefundStub {

    /**
     * @param \Palm\Musa\V1\WechatPayCreateRefundRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayRefundResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Create(
        \Palm\Musa\V1\WechatPayCreateRefundRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayRefundResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryRefundRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayRefundResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Query(
        \Palm\Musa\V1\WechatPayQueryRefundRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayRefundResponse {
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
            '/palm.musa.v1.WechatPayRefund/Create' => new \Grpc\MethodDescriptor(
                $this,
                'Create',
                '\Palm\Musa\V1\WechatPayCreateRefundRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayRefund/Query' => new \Grpc\MethodDescriptor(
                $this,
                'Query',
                '\Palm\Musa\V1\WechatPayQueryRefundRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
