<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Lemon\V1;

/**
 */
class SiteClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Lemon\V1\SiteLayoutRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Layout(\Palm\Lemon\V1\SiteLayoutRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.lemon.v1.Site/Layout',
        $argument,
        ['\Palm\Lemon\V1\SiteLayoutResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\Duration $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Rss(\Google\Protobuf\Duration $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.lemon.v1.Site/Rss',
        $argument,
        ['\Palm\Lemon\V1\SiteRssResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Sitemap(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.lemon.v1.Site/Sitemap',
        $argument,
        ['\Palm\Lemon\V1\SiteSitemapResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Lemon\V1\SiteShowPageRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ShowPage(\Palm\Lemon\V1\SiteShowPageRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.lemon.v1.Site/ShowPage',
        $argument,
        ['\Palm\Lemon\V1\SiteShowPageResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Lemon\V1\SiteHomePageRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HomePage(\Palm\Lemon\V1\SiteHomePageRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.lemon.v1.Site/HomePage',
        $argument,
        ['\Palm\Lemon\V1\SiteHomePageResponse', 'decode'],
        $metadata, $options);
    }

}
