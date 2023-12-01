<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Ops\Router\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class UserClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Ops\Router\V1\UserSignInRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignIn(\Palm\Ops\Router\V1\UserSignInRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.User/SignIn',
        $argument,
        ['\Palm\Ops\Router\V1\UserSignInResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\Duration $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Refresh(\Google\Protobuf\Duration $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.User/Refresh',
        $argument,
        ['\Palm\Ops\Router\V1\UserSignInResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\UserUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Ops\Router\V1\UserUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.User/Update',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignOut(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.User/SignOut',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Logs(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.User/Logs',
        $argument,
        ['\Palm\Ops\Router\V1\UserLogsResponse', 'decode'],
        $metadata, $options);
    }

}
