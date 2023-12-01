<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.NotificationIndexResponse</code>
 */
class NotificationIndexResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
     */
    private $items;
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.Pagination pagination = 9;</code>
     */
    protected $pagination = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Palm\Metasequoia\V1\NotificationIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $items
     *     @type \Palm\Metasequoia\V1\Pagination $pagination
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getItems()
    {
        return $this->items;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.metasequoia.v1.NotificationIndexResponse.Item items = 1;</code>
     * @param array<\Palm\Metasequoia\V1\NotificationIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setItems($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Metasequoia\V1\NotificationIndexResponse\Item::class);
        $this->items = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.Pagination pagination = 9;</code>
     * @return \Palm\Metasequoia\V1\Pagination|null
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
     * Generated from protobuf field <code>.palm.metasequoia.v1.Pagination pagination = 9;</code>
     * @param \Palm\Metasequoia\V1\Pagination $var
     * @return $this
     */
    public function setPagination($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\Pagination::class);
        $this->pagination = $var;

        return $this;
    }

}

