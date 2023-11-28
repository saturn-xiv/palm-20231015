<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 */
class WechatPayNativeStub {

    /**
     * @param \Palm\Musa\V1\WechatPayPrepayRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayNativeQrCodeUrlResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Prepay(
        \Palm\Musa\V1\WechatPayPrepayRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayNativeQrCodeUrlResponse {
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
            '/palm.musa.v1.WechatPayNative/Prepay' => new \Grpc\MethodDescriptor(
                $this,
                'Prepay',
                '\Palm\Musa\V1\WechatPayPrepayRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
