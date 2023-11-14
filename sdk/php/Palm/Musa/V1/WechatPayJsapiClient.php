<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatPayJsapiClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayPrepayRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Prepay(\Palm\Musa\V1\WechatPayPrepayRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayJsapi/Prepay',
        $argument,
        ['\Palm\Musa\V1\WechatPayJsapiPrepayIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryOrderByOutTradeNoRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function QueryOrderByOutTradeNo(\Palm\Musa\V1\WechatPayQueryOrderByOutTradeNoRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayJsapi/QueryOrderByOutTradeNo',
        $argument,
        ['\Palm\Musa\V1\WechatPayTradeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayQueryOrderByIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function QueryOrderById(\Palm\Musa\V1\WechatPayQueryOrderByIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayJsapi/QueryOrderById',
        $argument,
        ['\Palm\Musa\V1\WechatPayTradeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Musa\V1\WechatPayCloseOrderRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CloseOrder(\Palm\Musa\V1\WechatPayCloseOrderRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.musa.v1.WechatPayJsapi/CloseOrder',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
