<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Nut\V1;

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
        return $this->_simpleRequest('/palm.nut.v1.Attachment/Index',
        $argument,
        ['\Palm\Nut\V1\AttachmentIndexResponse', 'decode'],
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
        return $this->_simpleRequest('/palm.nut.v1.Attachment/Destroy',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Nut\V1\AttachmentShowRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Show(\Palm\Nut\V1\AttachmentShowRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.nut.v1.Attachment/Show',
        $argument,
        ['\Palm\Nut\V1\AttachmentShowResponse', 'decode'],
        $metadata, $options);
    }

}
