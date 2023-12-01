<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Ops\Router\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class RouterClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Reboot(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/Reboot',
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
    public function Apply(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/Apply',
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
    public function Status(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/Status',
        $argument,
        ['\Palm\Ops\Router\V1\RouterStatusResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\Dns $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetDns(\Palm\Ops\Router\V1\Dns $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/SetDns',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\RouterSetWanRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetWan(\Palm\Ops\Router\V1\RouterSetWanRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/SetWan',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\WanPool $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetWanPool(\Palm\Ops\Router\V1\WanPool $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/SetWanPool',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\RouterSetLanRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetLan(\Palm\Ops\Router\V1\RouterSetLanRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/SetLan',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\RouterSetDmzRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetDmz(\Palm\Ops\Router\V1\RouterSetDmzRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/SetDmz',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\Rule $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateRule(\Palm\Ops\Router\V1\Rule $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/CreateRule',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\RouterIndexRuleResponse\Item $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateRule(\Palm\Ops\Router\V1\RouterIndexRuleResponse\Item $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/UpdateRule',
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
    public function IndexRule(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/IndexRule',
        $argument,
        ['\Palm\Ops\Router\V1\RouterIndexRuleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\RouterUpdateHostRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateHost(\Palm\Ops\Router\V1\RouterUpdateHostRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/UpdateHost',
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
    public function IndexUser(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/IndexUser',
        $argument,
        ['\Palm\Ops\Router\V1\RouterIndexUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\RouterIndexUserResponse\Item $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateUser(\Palm\Ops\Router\V1\RouterIndexUserResponse\Item $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/UpdateUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Router\V1\RouterCreateUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateUser(\Palm\Ops\Router\V1\RouterCreateUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.router.v1.Router/CreateUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
