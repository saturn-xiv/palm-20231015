<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayBillStub {

    /**
     * @param \Palm\Musa\V1\WechatPayTradeBillRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayBillResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Trade(
        \Palm\Musa\V1\WechatPayTradeBillRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayBillResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayFundFlowBillRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayBillResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function FundFlow(
        \Palm\Musa\V1\WechatPayFundFlowBillRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayBillResponse {
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
            '/palm.musa.v1.WechatPayBill/Trade' => new \Grpc\MethodDescriptor(
                $this,
                'Trade',
                '\Palm\Musa\V1\WechatPayTradeBillRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayBill/FundFlow' => new \Grpc\MethodDescriptor(
                $this,
                'FundFlow',
                '\Palm\Musa\V1\WechatPayFundFlowBillRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
