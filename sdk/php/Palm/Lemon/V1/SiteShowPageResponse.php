<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lemon.proto

namespace Palm\Lemon\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.lemon.v1.SiteShowPageResponse</code>
 */
class SiteShowPageResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.palm.lemon.v1.Page page = 1;</code>
     */
    protected $page = null;
    /**
     * Generated from protobuf field <code>repeated .palm.lemon.v1.SiteShowPageResponse.Link related = 2;</code>
     */
    private $related;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Lemon\V1\Page $page
     *     @type array<\Palm\Lemon\V1\SiteShowPageResponse\Link>|\Google\Protobuf\Internal\RepeatedField $related
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Lemon::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.lemon.v1.Page page = 1;</code>
     * @return \Palm\Lemon\V1\Page|null
     */
    public function getPage()
    {
        return $this->page;
    }

    public function hasPage()
    {
        return isset($this->page);
    }

    public function clearPage()
    {
        unset($this->page);
    }

    /**
     * Generated from protobuf field <code>.palm.lemon.v1.Page page = 1;</code>
     * @param \Palm\Lemon\V1\Page $var
     * @return $this
     */
    public function setPage($var)
    {
        GPBUtil::checkMessage($var, \Palm\Lemon\V1\Page::class);
        $this->page = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.lemon.v1.SiteShowPageResponse.Link related = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRelated()
    {
        return $this->related;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.lemon.v1.SiteShowPageResponse.Link related = 2;</code>
     * @param array<\Palm\Lemon\V1\SiteShowPageResponse\Link>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRelated($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Lemon\V1\SiteShowPageResponse\Link::class);
        $this->related = $arr;

        return $this;
    }

}

