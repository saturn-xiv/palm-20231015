<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: casbin.proto

namespace Palm\Casbin\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.casbin.v1.NewAdapterReply</code>
 */
class NewAdapterReply extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 handler = 1;</code>
     */
    protected $handler = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $handler
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Casbin::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 handler = 1;</code>
     * @return int
     */
    public function getHandler()
    {
        return $this->handler;
    }

    /**
     * Generated from protobuf field <code>int32 handler = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setHandler($var)
    {
        GPBUtil::checkInt32($var);
        $this->handler = $var;

        return $this;
    }

}

