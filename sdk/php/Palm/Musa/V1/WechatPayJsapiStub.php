<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayJsapiStub {

    /**
     * @param \Palm\Musa\V1\WechatPayPrepayRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayJsapiPrepayIdResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Prepay(
        \Palm\Musa\V1\WechatPayPrepayRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayJsapiPrepayIdResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryOrderByOutTradeNoRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayTradeResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function QueryOrderByOutTradeNo(
        \Palm\Musa\V1\WechatPayQueryOrderByOutTradeNoRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayTradeResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryOrderByIdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayTradeResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function QueryOrderById(
        \Palm\Musa\V1\WechatPayQueryOrderByIdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayTradeResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayCloseOrderRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function CloseOrder(
        \Palm\Musa\V1\WechatPayCloseOrderRequest $request,
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
            '/palm.musa.v1.WechatPayJsapi/Prepay' => new \Grpc\MethodDescriptor(
                $this,
                'Prepay',
                '\Palm\Musa\V1\WechatPayPrepayRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayJsapi/QueryOrderByOutTradeNo' => new \Grpc\MethodDescriptor(
                $this,
                'QueryOrderByOutTradeNo',
                '\Palm\Musa\V1\WechatPayQueryOrderByOutTradeNoRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayJsapi/QueryOrderById' => new \Grpc\MethodDescriptor(
                $this,
                'QueryOrderById',
                '\Palm\Musa\V1\WechatPayQueryOrderByIdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayJsapi/CloseOrder' => new \Grpc\MethodDescriptor(
                $this,
                'CloseOrder',
                '\Palm\Musa\V1\WechatPayCloseOrderRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
