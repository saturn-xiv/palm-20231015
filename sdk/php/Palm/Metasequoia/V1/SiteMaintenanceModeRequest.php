<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.SiteMaintenanceModeRequest</code>
 */
class SiteMaintenanceModeRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.google.protobuf.Duration ttl = 1;</code>
     */
    protected $ttl = null;
    /**
     * Generated from protobuf field <code>string reason = 2;</code>
     */
    protected $reason = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Google\Protobuf\Duration $ttl
     *     @type string $reason
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Duration ttl = 1;</code>
     * @return \Google\Protobuf\Duration|null
     */
    public function getTtl()
    {
        return $this->ttl;
    }

    public function hasTtl()
    {
        return isset($this->ttl);
    }

    public function clearTtl()
    {
        unset($this->ttl);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Duration ttl = 1;</code>
     * @param \Google\Protobuf\Duration $var
     * @return $this
     */
    public function setTtl($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Duration::class);
        $this->ttl = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string reason = 2;</code>
     * @return string
     */
    public function getReason()
    {
        return $this->reason;
    }

    /**
     * Generated from protobuf field <code>string reason = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setReason($var)
    {
        GPBUtil::checkString($var, True);
        $this->reason = $var;

        return $this;
    }

}
