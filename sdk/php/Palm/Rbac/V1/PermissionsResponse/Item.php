<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rbac.proto

namespace Palm\Rbac\V1\PermissionsResponse;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.rbac.v1.PermissionsResponse.Item</code>
 */
class Item extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string operation = 1;</code>
     */
    protected $operation = '';
    /**
     * Generated from protobuf field <code>.palm.rbac.v1.ResourcesResponse.Item resource = 2;</code>
     */
    protected $resource = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $operation
     *     @type \Palm\Rbac\V1\ResourcesResponse\Item $resource
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Rbac::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string operation = 1;</code>
     * @return string
     */
    public function getOperation()
    {
        return $this->operation;
    }

    /**
     * Generated from protobuf field <code>string operation = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setOperation($var)
    {
        GPBUtil::checkString($var, True);
        $this->operation = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.rbac.v1.ResourcesResponse.Item resource = 2;</code>
     * @return \Palm\Rbac\V1\ResourcesResponse\Item|null
     */
    public function getResource()
    {
        return $this->resource;
    }

    public function hasResource()
    {
        return isset($this->resource);
    }

    public function clearResource()
    {
        unset($this->resource);
    }

    /**
     * Generated from protobuf field <code>.palm.rbac.v1.ResourcesResponse.Item resource = 2;</code>
     * @param \Palm\Rbac\V1\ResourcesResponse\Item $var
     * @return $this
     */
    public function setResource($var)
    {
        GPBUtil::checkMessage($var, \Palm\Rbac\V1\ResourcesResponse\Item::class);
        $this->resource = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Item::class, \Palm\Rbac\V1\PermissionsResponse_Item::class);

