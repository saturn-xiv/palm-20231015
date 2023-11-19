<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto

namespace Palm\Ops\Router\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.ops.router.v1.Wan</code>
 */
class Wan extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string device = 1;</code>
     */
    protected $device = '';
    /**
     * Generated from protobuf field <code>uint32 metric = 2;</code>
     */
    protected $metric = 0;
    /**
     * Generated from protobuf field <code>string name = 9;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string mac = 11;</code>
     */
    protected $mac = '';
    /**
     * Generated from protobuf field <code>bool enable = 99;</code>
     */
    protected $enable = false;
    protected $ip;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $device
     *     @type int $metric
     *     @type string $name
     *     @type string $mac
     *     @type \Palm\Ops\Router\V1\Dhcp $dhcp
     *     @type \Palm\Ops\Router\V1\PBStatic $static
     *     @type bool $enable
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
     * Generated from protobuf field <code>uint32 metric = 2;</code>
     * @return int
     */
    public function getMetric()
    {
        return $this->metric;
    }

    /**
     * Generated from protobuf field <code>uint32 metric = 2;</code>
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
     * Generated from protobuf field <code>string name = 9;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 9;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string mac = 11;</code>
     * @return string
     */
    public function getMac()
    {
        return $this->mac;
    }

    /**
     * Generated from protobuf field <code>string mac = 11;</code>
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
     * Generated from protobuf field <code>.palm.ops.router.v1.Dhcp dhcp = 21;</code>
     * @return \Palm\Ops\Router\V1\Dhcp|null
     */
    public function getDhcp()
    {
        return $this->readOneof(21);
    }

    public function hasDhcp()
    {
        return $this->hasOneof(21);
    }

    /**
     * Generated from protobuf field <code>.palm.ops.router.v1.Dhcp dhcp = 21;</code>
     * @param \Palm\Ops\Router\V1\Dhcp $var
     * @return $this
     */
    public function setDhcp($var)
    {
        GPBUtil::checkMessage($var, \Palm\Ops\Router\V1\Dhcp::class);
        $this->writeOneof(21, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.ops.router.v1.Static static = 22;</code>
     * @return \Palm\Ops\Router\V1\PBStatic|null
     */
    public function getStatic()
    {
        return $this->readOneof(22);
    }

    public function hasStatic()
    {
        return $this->hasOneof(22);
    }

    /**
     * Generated from protobuf field <code>.palm.ops.router.v1.Static static = 22;</code>
     * @param \Palm\Ops\Router\V1\PBStatic $var
     * @return $this
     */
    public function setStatic($var)
    {
        GPBUtil::checkMessage($var, \Palm\Ops\Router\V1\PBStatic::class);
        $this->writeOneof(22, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool enable = 99;</code>
     * @return bool
     */
    public function getEnable()
    {
        return $this->enable;
    }

    /**
     * Generated from protobuf field <code>bool enable = 99;</code>
     * @param bool $var
     * @return $this
     */
    public function setEnable($var)
    {
        GPBUtil::checkBool($var);
        $this->enable = $var;

        return $this;
    }

    /**
     * @return string
     */
    public function getIp()
    {
        return $this->whichOneof("ip");
    }

}
