<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

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
     * @param \Palm\Metasequoia\V1\GoogleSignInUrlRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignInUrl(\Palm\Metasequoia\V1\GoogleSignInUrlRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Google/SignInUrl',
        $argument,
        ['\Palm\Metasequoia\V1\GoogleSignInUrlResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\SignInByGoogleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignIn(\Palm\Metasequoia\V1\SignInByGoogleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Google/SignIn',
        $argument,
        ['\Palm\Metasequoia\V1\UserSignInResponse', 'decode'],
        $metadata, $options);
    }

}
