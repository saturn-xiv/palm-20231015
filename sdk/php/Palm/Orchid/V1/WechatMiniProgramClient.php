<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Orchid\V1;

/**
 * ----------------------------------------------------------------------------
 */
class WechatMiniProgramClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Orchid\V1\WechatMiniProgramLoginRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Login(\Palm\Orchid\V1\WechatMiniProgramLoginRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.orchid.v1.WechatMiniProgram/Login',
        $argument,
        ['\Palm\Orchid\V1\WechatMiniProgramLoginResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Orchid\V1\WechatMiniProgramPhoneNumberRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PhoneNumber(\Palm\Orchid\V1\WechatMiniProgramPhoneNumberRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.orchid.v1.WechatMiniProgram/PhoneNumber',
        $argument,
        ['\Palm\Orchid\V1\WechatMiniProgramPhoneNumberResponse', 'decode'],
        $metadata, $options);
    }

}
