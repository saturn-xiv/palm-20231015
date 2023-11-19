<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto

namespace Palm\Fig\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.fig.v1.ShorterLinkIndexResponse</code>
 */
class ShorterLinkIndexResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.palm.nut.v1.Pagination pagination = 1;</code>
     */
    protected $pagination = null;
    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.ShorterLinkIndexResponse.Item items = 11;</code>
     */
    private $items;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Nut\V1\Pagination $pagination
     *     @type array<\Palm\Fig\V1\ShorterLinkIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $items
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Fig::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.Pagination pagination = 1;</code>
     * @return \Palm\Nut\V1\Pagination|null
     */
    public function getPagination()
    {
        return $this->pagination;
    }

    public function hasPagination()
    {
        return isset($this->pagination);
    }

    public function clearPagination()
    {
        unset($this->pagination);
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.Pagination pagination = 1;</code>
     * @param \Palm\Nut\V1\Pagination $var
     * @return $this
     */
    public function setPagination($var)
    {
        GPBUtil::checkMessage($var, \Palm\Nut\V1\Pagination::class);
        $this->pagination = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.ShorterLinkIndexResponse.Item items = 11;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getItems()
    {
        return $this->items;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.ShorterLinkIndexResponse.Item items = 11;</code>
     * @param array<\Palm\Fig\V1\ShorterLinkIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setItems($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Fig\V1\ShorterLinkIndexResponse\Item::class);
        $this->items = $arr;

        return $this;
    }

}
