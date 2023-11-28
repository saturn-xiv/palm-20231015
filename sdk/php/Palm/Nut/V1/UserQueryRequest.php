<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nut.proto

namespace Palm\Nut\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.nut.v1.UserQueryRequest</code>
 */
class UserQueryRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string home = 9;</code>
     */
    protected $home = '';
    protected $user;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $nickname
     *     @type string $email
     *     @type string $home
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Nut::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string nickname = 1;</code>
     * @return string
     */
    public function getNickname()
    {
        return $this->readOneof(1);
    }

    public function hasNickname()
    {
        return $this->hasOneof(1);
    }

    /**
     * Generated from protobuf field <code>string nickname = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setNickname($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(1, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>string email = 2;</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->readOneof(2);
    }

    public function hasEmail()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>string email = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setEmail($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>string home = 9;</code>
     * @return string
     */
    public function getHome()
    {
        return $this->home;
    }

    /**
     * Generated from protobuf field <code>string home = 9;</code>
     * @param string $var
     * @return $this
     */
    public function setHome($var)
    {
        GPBUtil::checkString($var, True);
        $this->home = $var;

        return $this;
    }

    /**
     * @return string
     */
    public function getUser()
    {
        return $this->whichOneof("user");
    }

}

