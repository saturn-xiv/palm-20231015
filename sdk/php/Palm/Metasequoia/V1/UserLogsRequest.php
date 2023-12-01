<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.UserLogsRequest</code>
 */
class UserLogsRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional string plugin = 1;</code>
     */
    protected $plugin = null;
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp from = 2;</code>
     */
    protected $from = null;
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp to = 3;</code>
     */
    protected $to = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $plugin
     *     @type \Google\Protobuf\Timestamp $from
     *     @type \Google\Protobuf\Timestamp $to
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional string plugin = 1;</code>
     * @return string
     */
    public function getPlugin()
    {
        return isset($this->plugin) ? $this->plugin : '';
    }

    public function hasPlugin()
    {
        return isset($this->plugin);
    }

    public function clearPlugin()
    {
        unset($this->plugin);
    }

    /**
     * Generated from protobuf field <code>optional string plugin = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setPlugin($var)
    {
        GPBUtil::checkString($var, True);
        $this->plugin = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp from = 2;</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getFrom()
    {
        return $this->from;
    }

    public function hasFrom()
    {
        return isset($this->from);
    }

    public function clearFrom()
    {
        unset($this->from);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp from = 2;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setFrom($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->from = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp to = 3;</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getTo()
    {
        return $this->to;
    }

    public function hasTo()
    {
        return isset($this->to);
    }

    public function clearTo()
    {
        unset($this->to);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp to = 3;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setTo($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->to = $var;

        return $this;
    }

}
