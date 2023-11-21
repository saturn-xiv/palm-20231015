<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rbac.proto

namespace Palm\Rbac\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.rbac.v1.PermissionsForRoleRequest</code>
 */
class PermissionsForRoleRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string role = 1;</code>
     */
    protected $role = '';
    /**
     * Generated from protobuf field <code>repeated .palm.rbac.v1.Permission items = 2;</code>
     */
    private $items;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $role
     *     @type array<\Palm\Rbac\V1\Permission>|\Google\Protobuf\Internal\RepeatedField $items
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Rbac::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string role = 1;</code>
     * @return string
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Generated from protobuf field <code>string role = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setRole($var)
    {
        GPBUtil::checkString($var, True);
        $this->role = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.rbac.v1.Permission items = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getItems()
    {
        return $this->items;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.rbac.v1.Permission items = 2;</code>
     * @param array<\Palm\Rbac\V1\Permission>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setItems($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Rbac\V1\Permission::class);
        $this->items = $arr;

        return $this;
    }

}

