<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Auth\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class AttachmentClient extends \Grpc\BaseStub {

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
        return $this->_simpleRequest('/palm.auth.v1.Attachment/Index',
        $argument,
        ['\Palm\Auth\V1\AttachmentIndexResponse', 'decode'],
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
        return $this->_simpleRequest('/palm.auth.v1.Attachment/Destroy',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Auth\V1\AttachmentShowRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Show(\Palm\Auth\V1\AttachmentShowRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.auth.v1.Attachment/Show',
        $argument,
        ['\Palm\Auth\V1\AttachmentShowResponse', 'decode'],
        $metadata, $options);
    }

}
