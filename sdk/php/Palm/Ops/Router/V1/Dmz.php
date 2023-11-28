<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto

namespace Palm\Ops\Router\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.ops.router.v1.Dmz</code>
 */
class Dmz extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string device = 1;</code>
     */
    protected $device = '';
    /**
     * Generated from protobuf field <code>string mac = 2;</code>
     */
    protected $mac = '';
    /**
     * Generated from protobuf field <code>uint32 metric = 3;</code>
     */
    protected $metric = 0;
    /**
     * Generated from protobuf field <code>string address = 11;</code>
     */
    protected $address = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $device
     *     @type string $mac
     *     @type int $metric
     *     @type string $address
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\OpsRouter::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string device = 1;</code>
     * @return string
     */
    public function getDevice()
    {
        return $this->device;
    }

    /**
     * Generated from protobuf field <code>string device = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setDevice($var)
    {
        GPBUtil::checkString($var, True);
        $this->device = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string mac = 2;</code>
     * @return string
     */
    public function getMac()
    {
        return $this->mac;
    }

    /**
     * Generated from protobuf field <code>string mac = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setMac($var)
    {
        GPBUtil::checkString($var, True);
        $this->mac = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 metric = 3;</code>
     * @return int
     */
    public function getMetric()
    {
        return $this->metric;
    }

    /**
     * Generated from protobuf field <code>uint32 metric = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setMetric($var)
    {
        GPBUtil::checkUint32($var);
        $this->metric = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string address = 11;</code>
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Generated from protobuf field <code>string address = 11;</code>
     * @param string $var
     * @return $this
     */
    public function setAddress($var)
    {
        GPBUtil::checkString($var, True);
        $this->address = $var;

        return $this;
    }

}

