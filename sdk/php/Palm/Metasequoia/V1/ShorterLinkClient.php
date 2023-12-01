<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class ShorterLinkClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Metasequoia\V1\ShorterLinkCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Metasequoia\V1\ShorterLinkCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.ShorterLink/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\ShorterLinkUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Metasequoia\V1\ShorterLinkUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.ShorterLink/Update',
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
        return $this->_simpleRequest('/palm.metasequoia.v1.ShorterLink/Destroy',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\Pager $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Index(\Palm\Metasequoia\V1\Pager $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.ShorterLink/Index',
        $argument,
        ['\Palm\Metasequoia\V1\ShorterLinkIndexResponse', 'decode'],
        $metadata, $options);
    }

}
