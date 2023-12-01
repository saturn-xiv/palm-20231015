<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 */
class CategoryClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Metasequoia\V1\CategoryCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Metasequoia\V1\CategoryCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Category/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\CategoryUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Metasequoia\V1\CategoryUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Category/Update',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Destroy(\Palm\Metasequoia\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Category/Destroy',
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
        return $this->_simpleRequest('/palm.metasequoia.v1.Category/Index',
        $argument,
        ['\Palm\Metasequoia\V1\CategoryIndexResponse', 'decode'],
        $metadata, $options);
    }

}
