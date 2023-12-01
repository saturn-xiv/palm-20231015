<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.CategoryCreateRequest</code>
 */
class CategoryCreateRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string code = 1;</code>
     */
    protected $code = '';
    protected $by;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $code
     *     @type int $left
     *     @type int $parent
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string code = 1;</code>
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Generated from protobuf field <code>string code = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 left = 2;</code>
     * @return int
     */
    public function getLeft()
    {
        return $this->readOneof(2);
    }

    public function hasLeft()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>int32 left = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setLeft($var)
    {
        GPBUtil::checkInt32($var);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 parent = 3;</code>
     * @return int
     */
    public function getParent()
    {
        return $this->readOneof(3);
    }

    public function hasParent()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>int32 parent = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setParent($var)
    {
        GPBUtil::checkInt32($var);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getBy()
    {
        return $this->whichOneof("by");
    }

}

