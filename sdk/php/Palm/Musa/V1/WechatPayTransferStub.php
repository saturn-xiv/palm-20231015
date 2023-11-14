<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayTransferStub {

    /**
     * @param \Palm\Musa\V1\WechatPayExecuteBatchTransferRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayExecuteBatchTransferResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ExecuteBatch(
        \Palm\Musa\V1\WechatPayExecuteBatchTransferRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayExecuteBatchTransferResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryBatchTransferRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayQueryBatchTransferResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function QueryBatch(
        \Palm\Musa\V1\WechatPayQueryBatchTransferRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayQueryBatchTransferResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryTransferDetailRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayQueryTransferDetailResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function QueryDetail(
        \Palm\Musa\V1\WechatPayQueryTransferDetailRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayQueryTransferDetailResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayTransferGetBillReceiptRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayTransferGetReceiptResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetBillReceipt(
        \Palm\Musa\V1\WechatPayTransferGetBillReceiptRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayTransferGetReceiptResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Musa\V1\WechatPayTransferGetElectronicReceiptRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Musa\V1\WechatPayTransferGetReceiptResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetElectronicReceipt(
        \Palm\Musa\V1\WechatPayTransferGetElectronicReceiptRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Musa\V1\WechatPayTransferGetReceiptResponse {
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
            '/palm.musa.v1.WechatPayTransfer/ExecuteBatch' => new \Grpc\MethodDescriptor(
                $this,
                'ExecuteBatch',
                '\Palm\Musa\V1\WechatPayExecuteBatchTransferRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayTransfer/QueryBatch' => new \Grpc\MethodDescriptor(
                $this,
                'QueryBatch',
                '\Palm\Musa\V1\WechatPayQueryBatchTransferRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayTransfer/QueryDetail' => new \Grpc\MethodDescriptor(
                $this,
                'QueryDetail',
                '\Palm\Musa\V1\WechatPayQueryTransferDetailRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayTransfer/GetBillReceipt' => new \Grpc\MethodDescriptor(
                $this,
                'GetBillReceipt',
                '\Palm\Musa\V1\WechatPayTransferGetBillReceiptRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.musa.v1.WechatPayTransfer/GetElectronicReceipt' => new \Grpc\MethodDescriptor(
                $this,
                'GetElectronicReceipt',
                '\Palm\Musa\V1\WechatPayTransferGetElectronicReceiptRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
