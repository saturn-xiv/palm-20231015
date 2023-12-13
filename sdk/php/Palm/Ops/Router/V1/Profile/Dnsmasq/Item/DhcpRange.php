<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto

namespace Palm\Ops\Router\V1\Profile\Dnsmasq\Item;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange</code>
 */
class DhcpRange extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string begin = 1;</code>
     */
    protected $begin = '';
    /**
     * Generated from protobuf field <code>string end = 2;</code>
     */
    protected $end = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $begin
     *     @type string $end
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\OpsRouter::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string begin = 1;</code>
     * @return string
     */
    public function getBegin()
    {
        return $this->begin;
    }

    /**
     * Generated from protobuf field <code>string begin = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setBegin($var)
    {
        GPBUtil::checkString($var, True);
        $this->begin = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string end = 2;</code>
     * @return string
     */
    public function getEnd()
    {
        return $this->end;
    }

    /**
     * Generated from protobuf field <code>string end = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setEnd($var)
    {
        GPBUtil::checkString($var, True);
        $this->end = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(DhcpRange::class, \Palm\Ops\Router\V1\Profile_Dnsmasq_Item_DhcpRange::class);
