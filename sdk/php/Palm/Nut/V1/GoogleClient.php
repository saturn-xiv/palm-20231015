<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Nut\V1;

/**
 * ----------------------------------------------------------------------------
 */
class GoogleClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Nut\V1\GoogleSignInUrlRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignInUrl(\Palm\Nut\V1\GoogleSignInUrlRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Google/SignInUrl',
        $argument,
        ['\Palm\Nut\V1\GoogleSignInUrlResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\SignInByGoogleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignIn(\Palm\Nut\V1\SignInByGoogleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Google/SignIn',
        $argument,
        ['\Palm\Nut\V1\UserSignInResponse', 'decode'],
        $metadata, $options);
    }

}
