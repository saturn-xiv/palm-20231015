<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nut.proto

namespace Palm\Nut\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.nut.v1.CategoryIndexResponse</code>
 */
class CategoryIndexResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .palm.nut.v1.CategoryIndexResponse.Item items = 1;</code>
     */
    private $items;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Palm\Nut\V1\CategoryIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $items
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Nut::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .palm.nut.v1.CategoryIndexResponse.Item items = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getItems()
    {
        return $this->items;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.nut.v1.CategoryIndexResponse.Item items = 1;</code>
     * @param array<\Palm\Nut\V1\CategoryIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setItems($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Nut\V1\CategoryIndexResponse\Item::class);
        $this->items = $arr;

        return $this;
    }

}

