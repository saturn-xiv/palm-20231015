<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Cms\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class CommentClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Cms\V1\CommentCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Cms\V1\CommentCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Comment/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Cms\V1\CommentUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Cms\V1\CommentUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Comment/Update',
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
        return $this->_simpleRequest('/palm.cms.v1.Comment/Index',
        $argument,
        ['\Palm\Cms\V1\CommentIndexResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Destory(\Palm\Metasequoia\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Comment/Destory',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
