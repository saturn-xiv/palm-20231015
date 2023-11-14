<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Fig\V1;

/**
 */
class TagClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Fig\V1\TagCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Fig\V1\TagCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Tag/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\TagUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Fig\V1\TagUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Tag/Update',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Destroy(\Palm\Nut\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Tag/Destroy',
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
    public function Index(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Tag/Index',
        $argument,
        ['\Palm\Fig\V1\TagIndexResponse', 'decode'],
        $metadata, $options);
    }

}
