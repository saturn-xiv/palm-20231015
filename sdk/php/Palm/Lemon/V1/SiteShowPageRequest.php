<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lemon.proto

namespace Palm\Lemon\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.lemon.v1.SiteShowPageRequest</code>
 */
class SiteShowPageRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string slug = 1;</code>
     */
    protected $slug = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $slug
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Lemon::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string slug = 1;</code>
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Generated from protobuf field <code>string slug = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setSlug($var)
    {
        GPBUtil::checkString($var, True);
        $this->slug = $var;

        return $this;
    }

}

