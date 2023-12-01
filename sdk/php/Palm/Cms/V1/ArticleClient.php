<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Cms\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class ArticleClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Cms\V1\ArticleCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Cms\V1\ArticleCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Article/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Cms\V1\ArticleUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Cms\V1\ArticleUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Article/Update',
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
        return $this->_simpleRequest('/palm.cms.v1.Article/Index',
        $argument,
        ['\Palm\Cms\V1\ArticleIndexResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Show(\Palm\Metasequoia\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Article/Show',
        $argument,
        ['\Palm\Cms\V1\ArticleShowResponse', 'decode'],
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
        return $this->_simpleRequest('/palm.cms.v1.Article/Destory',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
