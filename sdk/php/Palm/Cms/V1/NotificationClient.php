<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Cms\V1;

/**
 * ----------------------------------------------------------------------------
 */
class NotificationClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Cms\V1\NotificationCreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Palm\Cms\V1\NotificationCreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Notification/Create',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Cms\V1\NotificationUpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Palm\Cms\V1\NotificationUpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Notification/Update',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
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
        return $this->_simpleRequest('/palm.cms.v1.Notification/Index',
        $argument,
        ['\Palm\Cms\V1\NotificationIndexResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Show(\Palm\Nut\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Notification/Show',
        $argument,
        ['\Palm\Cms\V1\NotificationIndexResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Destory(\Palm\Nut\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.cms.v1.Notification/Destory',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
