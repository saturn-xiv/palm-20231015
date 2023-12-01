<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1\CategoryIndexResponse;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.CategoryIndexResponse.Item</code>
 */
class Item extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string code = 2;</code>
     */
    protected $code = '';
    /**
     * Generated from protobuf field <code>int32 left = 3;</code>
     */
    protected $left = 0;
    /**
     * Generated from protobuf field <code>int32 right = 4;</code>
     */
    protected $right = 0;
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp updated_at = 11;</code>
     */
    protected $updated_at = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $code
     *     @type int $left
     *     @type int $right
     *     @type \Google\Protobuf\Timestamp $updated_at
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkInt32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string code = 2;</code>
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Generated from protobuf field <code>string code = 2;</code>
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
     * Generated from protobuf field <code>int32 left = 3;</code>
     * @return int
     */
    public function getLeft()
    {
        return $this->left;
    }

    /**
     * Generated from protobuf field <code>int32 left = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setLeft($var)
    {
        GPBUtil::checkInt32($var);
        $this->left = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 right = 4;</code>
     * @return int
     */
    public function getRight()
    {
        return $this->right;
    }

    /**
     * Generated from protobuf field <code>int32 right = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setRight($var)
    {
        GPBUtil::checkInt32($var);
        $this->right = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp updated_at = 11;</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    public function hasUpdatedAt()
    {
        return isset($this->updated_at);
    }

    public function clearUpdatedAt()
    {
        unset($this->updated_at);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp updated_at = 11;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setUpdatedAt($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->updated_at = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Item::class, \Palm\Metasequoia\V1\CategoryIndexResponse_Item::class);
