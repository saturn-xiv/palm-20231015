<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto

namespace Palm\Ops\Router\V1\Profile\Dnsmasq;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.ops.router.v1.Profile.Dnsmasq.Item</code>
 */
class Item extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string device = 1;</code>
     */
    protected $device = '';
    /**
     * Generated from protobuf field <code>string address = 2;</code>
     */
    protected $address = '';
    /**
     * Generated from protobuf field <code>.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange dhcp_range = 3;</code>
     */
    protected $dhcp_range = null;
    /**
     * Generated from protobuf field <code>repeated .palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp static_ips = 4;</code>
     */
    private $static_ips;
    /**
     * Generated from protobuf field <code>repeated string dns_servers = 99;</code>
     */
    private $dns_servers;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $device
     *     @type string $address
     *     @type \Palm\Ops\Router\V1\Profile\Dnsmasq\Item\DhcpRange $dhcp_range
     *     @type array<\Palm\Ops\Router\V1\Profile\Dnsmasq\Item\StaticIp>|\Google\Protobuf\Internal\RepeatedField $static_ips
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $dns_servers
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
     * Generated from protobuf field <code>string address = 2;</code>
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Generated from protobuf field <code>string address = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setAddress($var)
    {
        GPBUtil::checkString($var, True);
        $this->address = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange dhcp_range = 3;</code>
     * @return \Palm\Ops\Router\V1\Profile\Dnsmasq\Item\DhcpRange|null
     */
    public function getDhcpRange()
    {
        return $this->dhcp_range;
    }

    public function hasDhcpRange()
    {
        return isset($this->dhcp_range);
    }

    public function clearDhcpRange()
    {
        unset($this->dhcp_range);
    }

    /**
     * Generated from protobuf field <code>.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange dhcp_range = 3;</code>
     * @param \Palm\Ops\Router\V1\Profile\Dnsmasq\Item\DhcpRange $var
     * @return $this
     */
    public function setDhcpRange($var)
    {
        GPBUtil::checkMessage($var, \Palm\Ops\Router\V1\Profile\Dnsmasq\Item\DhcpRange::class);
        $this->dhcp_range = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp static_ips = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getStaticIps()
    {
        return $this->static_ips;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp static_ips = 4;</code>
     * @param array<\Palm\Ops\Router\V1\Profile\Dnsmasq\Item\StaticIp>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setStaticIps($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Ops\Router\V1\Profile\Dnsmasq\Item\StaticIp::class);
        $this->static_ips = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string dns_servers = 99;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getDnsServers()
    {
        return $this->dns_servers;
    }

    /**
     * Generated from protobuf field <code>repeated string dns_servers = 99;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setDnsServers($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->dns_servers = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Item::class, \Palm\Ops\Router\V1\Profile_Dnsmasq_Item::class);

