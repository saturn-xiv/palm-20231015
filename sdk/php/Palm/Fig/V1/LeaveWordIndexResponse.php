<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto

namespace Palm\Fig\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.fig.v1.LeaveWordIndexResponse</code>
 */
class LeaveWordIndexResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.LeaveWordIndexResponse.Item items = 1;</code>
     */
    private $items;
    /**
     * Generated from protobuf field <code>.palm.nut.v1.Pagination pagination = 9;</code>
     */
    protected $pagination = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Palm\Fig\V1\LeaveWordIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $items
     *     @type \Palm\Nut\V1\Pagination $pagination
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Fig::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.LeaveWordIndexResponse.Item items = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getItems()
    {
        return $this->items;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.LeaveWordIndexResponse.Item items = 1;</code>
     * @param array<\Palm\Fig\V1\LeaveWordIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setItems($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Fig\V1\LeaveWordIndexResponse\Item::class);
        $this->items = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.Pagination pagination = 9;</code>
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
     * Generated from protobuf field <code>.palm.nut.v1.Pagination pagination = 9;</code>
     * @param \Palm\Nut\V1\Pagination $var
     * @return $this
     */
    public function setPagination($var)
    {
        GPBUtil::checkMessage($var, \Palm\Nut\V1\Pagination::class);
        $this->pagination = $var;

        return $this;
    }

}

