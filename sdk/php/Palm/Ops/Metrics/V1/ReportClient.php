<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Ops\Metrics\V1;

/**
 */
class ReportClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Ops\Metrics\V1\ReportHeartbeatRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Heartbeat(\Palm\Ops\Metrics\V1\ReportHeartbeatRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.metrics.v1.Report/Heartbeat',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Metrics\V1\ReportJournalRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Journal(\Palm\Ops\Metrics\V1\ReportJournalRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.metrics.v1.Report/Journal',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Ops\Metrics\V1\ReportNginxRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Nginx(\Palm\Ops\Metrics\V1\ReportNginxRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.ops.metrics.v1.Report/Nginx',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
