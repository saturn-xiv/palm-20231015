<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto

namespace Palm\Fig\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.fig.v1.SmsTask</code>
 */
class SmsTask extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string from = 1;</code>
     */
    protected $from = '';
    /**
     * Generated from protobuf field <code>repeated string to = 2;</code>
     */
    private $to;
    /**
     * Generated from protobuf field <code>string body = 3;</code>
     */
    protected $body = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $from
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $to
     *     @type string $body
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Fig::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string from = 1;</code>
     * @return string
     */
    public function getFrom()
    {
        return $this->from;
    }

    /**
     * Generated from protobuf field <code>string from = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setFrom($var)
    {
        GPBUtil::checkString($var, True);
        $this->from = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string to = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTo()
    {
        return $this->to;
    }

    /**
     * Generated from protobuf field <code>repeated string to = 2;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTo($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->to = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string body = 3;</code>
     * @return string
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * Generated from protobuf field <code>string body = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setBody($var)
    {
        GPBUtil::checkString($var, True);
        $this->body = $var;

        return $this;
    }

}
