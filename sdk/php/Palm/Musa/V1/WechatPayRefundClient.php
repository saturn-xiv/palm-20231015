<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayRefundClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayCreateRefundRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Musa\V1\WechatPayCreateRefundRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayRefund/Create',
        $argument,
        ['\Palm\Musa\V1\WechatPayRefundResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryRefundRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Query(\Palm\Musa\V1\WechatPayQueryRefundRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayRefund/Query',
        $argument,
        ['\Palm\Musa\V1\WechatPayRefundResponse', 'decode'],
        $metadata, $options);
    }

}
