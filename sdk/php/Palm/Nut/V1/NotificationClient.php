<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Nut\V1;

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
     * @param \Palm\Nut\V1\Pager $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Index(\Palm\Nut\V1\Pager $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Notification/Index',
        $argument,
        ['\Palm\Nut\V1\IndexNotificationResponse', 'decode'],
        $metadata, $options);
    }

}
