<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto

namespace Palm\Fig\V1\SiteStatusResponse;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.fig.v1.SiteStatusResponse.OpenSearch</code>
 */
class OpenSearch extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string url = 1;</code>
     */
    protected $url = '';
    /**
     * Generated from protobuf field <code>string info = 2;</code>
     */
    protected $info = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $url
     *     @type string $info
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Fig::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string url = 1;</code>
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Generated from protobuf field <code>string url = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string info = 2;</code>
     * @return string
     */
    public function getInfo()
    {
        return $this->info;
    }

    /**
     * Generated from protobuf field <code>string info = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setInfo($var)
    {
        GPBUtil::checkString($var, True);
        $this->info = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(OpenSearch::class, \Palm\Fig\V1\SiteStatusResponse_OpenSearch::class);
