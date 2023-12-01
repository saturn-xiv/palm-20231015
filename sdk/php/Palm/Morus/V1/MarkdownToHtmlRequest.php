<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: morus.proto

namespace Palm\Morus\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.morus.v1.MarkdownToHtmlRequest</code>
 */
class MarkdownToHtmlRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string payload = 1;</code>
     */
    protected $payload = '';
    /**
     * Generated from protobuf field <code>bool sanitize = 2;</code>
     */
    protected $sanitize = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $payload
     *     @type bool $sanitize
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Morus::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string payload = 1;</code>
     * @return string
     */
    public function getPayload()
    {
        return $this->payload;
    }

    /**
     * Generated from protobuf field <code>string payload = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setPayload($var)
    {
        GPBUtil::checkString($var, True);
        $this->payload = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool sanitize = 2;</code>
     * @return bool
     */
    public function getSanitize()
    {
        return $this->sanitize;
    }

    /**
     * Generated from protobuf field <code>bool sanitize = 2;</code>
     * @param bool $var
     * @return $this
     */
    public function setSanitize($var)
    {
        GPBUtil::checkBool($var);
        $this->sanitize = $var;

        return $this;
    }

}

