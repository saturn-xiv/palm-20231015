<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto

namespace Palm\Auth\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.auth.v1.UserDetail</code>
 */
class UserDetail extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string nickname = 1;</code>
     */
    protected $nickname = '';
    /**
     * Generated from protobuf field <code>string real_name = 2;</code>
     */
    protected $real_name = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $nickname
     *     @type string $real_name
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Auth::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string nickname = 1;</code>
     * @return string
     */
    public function getNickname()
    {
        return $this->nickname;
    }

    /**
     * Generated from protobuf field <code>string nickname = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setNickname($var)
    {
        GPBUtil::checkString($var, True);
        $this->nickname = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string real_name = 2;</code>
     * @return string
     */
    public function getRealName()
    {
        return $this->real_name;
    }

    /**
     * Generated from protobuf field <code>string real_name = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setRealName($var)
    {
        GPBUtil::checkString($var, True);
        $this->real_name = $var;

        return $this;
    }

}

