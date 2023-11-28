<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Nut\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class LocaleClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Nut\V1\LocaleCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Nut\V1\LocaleCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Locale/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\LocaleUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Nut\V1\LocaleUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Locale/Update',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\LocaleByLangAndCodeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ByLangAndCode(\Palm\Nut\V1\LocaleByLangAndCodeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Locale/ByLangAndCode',
        $argument,
        ['\Palm\Nut\V1\LocaleIndexResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ById(\Palm\Nut\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Locale/ById',
        $argument,
        ['\Palm\Nut\V1\LocaleIndexResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\LocaleByLangRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ByLang(\Palm\Nut\V1\LocaleByLangRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Locale/ByLang',
        $argument,
        ['\Palm\Nut\V1\LocaleListResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\LocaleByCodeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ByCode(\Palm\Nut\V1\LocaleByCodeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Locale/ByCode',
        $argument,
        ['\Palm\Nut\V1\LocaleListResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\Pager $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Index(\Palm\Nut\V1\Pager $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Locale/Index',
        $argument,
        ['\Palm\Nut\V1\LocaleIndexResponse', 'decode'],
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
        return $this->_simpleRequest('/palm.nut.v1.Locale/Destroy',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
