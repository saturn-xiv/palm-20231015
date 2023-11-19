<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lemon.proto

namespace Palm\Lemon\V1\Sitemap;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.lemon.v1.Sitemap.UrlSet</code>
 */
class UrlSet extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .palm.lemon.v1.Sitemap.Link links = 1;</code>
     */
    private $links;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Palm\Lemon\V1\Sitemap\Link>|\Google\Protobuf\Internal\RepeatedField $links
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Lemon::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .palm.lemon.v1.Sitemap.Link links = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLinks()
    {
        return $this->links;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.lemon.v1.Sitemap.Link links = 1;</code>
     * @param array<\Palm\Lemon\V1\Sitemap\Link>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setLinks($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Lemon\V1\Sitemap\Link::class);
        $this->links = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(UrlSet::class, \Palm\Lemon\V1\Sitemap_UrlSet::class);
