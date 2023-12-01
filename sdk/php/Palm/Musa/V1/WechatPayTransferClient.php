<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayTransferClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayExecuteBatchTransferRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ExecuteBatch(\Palm\Musa\V1\WechatPayExecuteBatchTransferRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayTransfer/ExecuteBatch',
        $argument,
        ['\Palm\Musa\V1\WechatPayExecuteBatchTransferResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryBatchTransferRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function QueryBatch(\Palm\Musa\V1\WechatPayQueryBatchTransferRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayTransfer/QueryBatch',
        $argument,
        ['\Palm\Musa\V1\WechatPayQueryBatchTransferResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryTransferDetailRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function QueryDetail(\Palm\Musa\V1\WechatPayQueryTransferDetailRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayTransfer/QueryDetail',
        $argument,
        ['\Palm\Musa\V1\WechatPayQueryTransferDetailResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayTransferGetBillReceiptRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetBillReceipt(\Palm\Musa\V1\WechatPayTransferGetBillReceiptRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayTransfer/GetBillReceipt',
        $argument,
        ['\Palm\Musa\V1\WechatPayTransferGetReceiptResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayTransferGetElectronicReceiptRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetElectronicReceipt(\Palm\Musa\V1\WechatPayTransferGetElectronicReceiptRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayTransfer/GetElectronicReceipt',
        $argument,
        ['\Palm\Musa\V1\WechatPayTransferGetReceiptResponse', 'decode'],
        $metadata, $options);
    }

}
