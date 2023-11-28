<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Orchid\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatOauth2Client extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Orchid\V1\WechatOauth2QrConnectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function QrConnect(\Palm\Orchid\V1\WechatOauth2QrConnectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.orchid.v1.WechatOauth2/QrConnect',
        $argument,
        ['\Palm\Orchid\V1\WechatOauth2QrConnectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Orchid\V1\WechatOauth2LoginRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Login(\Palm\Orchid\V1\WechatOauth2LoginRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.orchid.v1.WechatOauth2/Login',
        $argument,
        ['\Palm\Orchid\V1\WechatOauth2LoginResponse', 'decode'],
        $metadata, $options);
    }

}
