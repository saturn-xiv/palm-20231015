<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Musa\V1;

/**
 */
class WechatPayNativeClient extends \Grpc\BaseStub {

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
        return $this->_simpleRequest('/palm.musa.v1.WechatPayNative/Prepay',
        $argument,
        ['\Palm\Musa\V1\WechatPayNativeQrCodeUrlResponse', 'decode'],
        $metadata, $options);
    }

}
