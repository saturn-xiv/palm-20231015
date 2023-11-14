<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Auth\V1;

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
     * @param \Palm\Auth\V1\GoogleSignInUrlRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignInUrl(\Palm\Auth\V1\GoogleSignInUrlRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Google/SignInUrl',
        $argument,
        ['\Palm\Auth\V1\GoogleSignInUrlResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Auth\V1\SignInByGoogleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignIn(\Palm\Auth\V1\SignInByGoogleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Google/SignIn',
        $argument,
        ['\Palm\Auth\V1\UserSignInResponse', 'decode'],
        $metadata, $options);
    }

}
