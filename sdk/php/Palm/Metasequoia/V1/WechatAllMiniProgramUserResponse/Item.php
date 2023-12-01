<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1\WechatAllMiniProgramUserResponse;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.WechatAllMiniProgramUserResponse.Item</code>
 */
class Item extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>int32 user_id = 2;</code>
     */
    protected $user_id = 0;
    /**
     * Generated from protobuf field <code>string union_id = 3;</code>
     */
    protected $union_id = '';
    /**
     * Generated from protobuf field <code>string app_id = 4;</code>
     */
    protected $app_id = '';
    /**
     * Generated from protobuf field <code>string open_id = 5;</code>
     */
    protected $open_id = '';
    /**
     * Generated from protobuf field <code>optional string nickname = 11;</code>
     */
    protected $nickname = null;
    /**
     * Generated from protobuf field <code>optional string avatar_url = 12;</code>
     */
    protected $avatar_url = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type int $user_id
     *     @type string $union_id
     *     @type string $app_id
     *     @type string $open_id
     *     @type string $nickname
     *     @type string $avatar_url
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
     * Generated from protobuf field <code>int32 user_id = 2;</code>
     * @return int
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>int32 user_id = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkInt32($var);
        $this->user_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string union_id = 3;</code>
     * @return string
     */
    public function getUnionId()
    {
        return $this->union_id;
    }

    /**
     * Generated from protobuf field <code>string union_id = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setUnionId($var)
    {
        GPBUtil::checkString($var, True);
        $this->union_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string app_id = 4;</code>
     * @return string
     */
    public function getAppId()
    {
        return $this->app_id;
    }

    /**
     * Generated from protobuf field <code>string app_id = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setAppId($var)
    {
        GPBUtil::checkString($var, True);
        $this->app_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string open_id = 5;</code>
     * @return string
     */
    public function getOpenId()
    {
        return $this->open_id;
    }

    /**
     * Generated from protobuf field <code>string open_id = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setOpenId($var)
    {
        GPBUtil::checkString($var, True);
        $this->open_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string nickname = 11;</code>
     * @return string
     */
    public function getNickname()
    {
        return isset($this->nickname) ? $this->nickname : '';
    }

    public function hasNickname()
    {
        return isset($this->nickname);
    }

    public function clearNickname()
    {
        unset($this->nickname);
    }

    /**
     * Generated from protobuf field <code>optional string nickname = 11;</code>
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
     * Generated from protobuf field <code>optional string avatar_url = 12;</code>
     * @return string
     */
    public function getAvatarUrl()
    {
        return isset($this->avatar_url) ? $this->avatar_url : '';
    }

    public function hasAvatarUrl()
    {
        return isset($this->avatar_url);
    }

    public function clearAvatarUrl()
    {
        unset($this->avatar_url);
    }

    /**
     * Generated from protobuf field <code>optional string avatar_url = 12;</code>
     * @param string $var
     * @return $this
     */
    public function setAvatarUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->avatar_url = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Item::class, \Palm\Metasequoia\V1\WechatAllMiniProgramUserResponse_Item::class);

