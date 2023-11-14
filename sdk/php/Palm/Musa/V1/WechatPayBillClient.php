<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayBillClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayTradeBillRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Trade(\Palm\Musa\V1\WechatPayTradeBillRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayBill/Trade',
        $argument,
        ['\Palm\Musa\V1\WechatPayBillResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayFundFlowBillRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function FundFlow(\Palm\Musa\V1\WechatPayFundFlowBillRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayBill/FundFlow',
        $argument,
        ['\Palm\Musa\V1\WechatPayBillResponse', 'decode'],
        $metadata, $options);
    }

}
