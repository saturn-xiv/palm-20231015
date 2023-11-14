<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Auth\V1;

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
     * @param \Palm\Auth\V1\LocaleCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Auth\V1\LocaleCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Locale/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Auth\V1\LocaleUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Auth\V1\LocaleUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Locale/Update',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Auth\V1\LocaleByLangAndCodeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ByLangAndCode(\Palm\Auth\V1\LocaleByLangAndCodeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Locale/ByLangAndCode',
        $argument,
        ['\Palm\Auth\V1\LocaleIndexResponse\Item', 'decode'],
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
        return $this->_simpleRequest('/palm.auth.v1.Locale/ById',
        $argument,
        ['\Palm\Auth\V1\LocaleIndexResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Auth\V1\LocaleByLangRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ByLang(\Palm\Auth\V1\LocaleByLangRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Locale/ByLang',
        $argument,
        ['\Palm\Auth\V1\LocaleListResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Auth\V1\LocaleByCodeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ByCode(\Palm\Auth\V1\LocaleByCodeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Locale/ByCode',
        $argument,
        ['\Palm\Auth\V1\LocaleListResponse', 'decode'],
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
        return $this->_simpleRequest('/palm.auth.v1.Locale/Index',
        $argument,
        ['\Palm\Auth\V1\LocaleIndexResponse', 'decode'],
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
        return $this->_simpleRequest('/palm.auth.v1.Locale/Destroy',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
