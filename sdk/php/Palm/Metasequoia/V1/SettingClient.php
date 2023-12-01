<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class SettingClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Metasequoia\V1\SettingSetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Set(\Palm\Metasequoia\V1\SettingSetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Setting/Set',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\SettingGetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Palm\Metasequoia\V1\SettingGetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Setting/Get',
        $argument,
        ['\Palm\Metasequoia\V1\SettingsResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\SettingByUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ByUser(\Palm\Metasequoia\V1\SettingByUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Setting/ByUser',
        $argument,
        ['\Palm\Metasequoia\V1\SettingsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function My(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Setting/My',
        $argument,
        ['\Palm\Metasequoia\V1\SettingsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Global(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Setting/Global',
        $argument,
        ['\Palm\Metasequoia\V1\SettingsResponse', 'decode'],
        $metadata, $options);
    }

}
