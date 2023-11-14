<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto

namespace Palm\Auth\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.auth.v1.WechatUserBindByIdRequest</code>
 */
class WechatUserBindByIdRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 user_id = 1;</code>
     */
    protected $user_id = 0;
    /**
     * Generated from protobuf field <code>int32 wechat_user_id = 2;</code>
     */
    protected $wechat_user_id = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $user_id
     *     @type int $wechat_user_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Auth::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 user_id = 1;</code>
     * @return int
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>int32 user_id = 1;</code>
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
     * Generated from protobuf field <code>int32 wechat_user_id = 2;</code>
     * @return int
     */
    public function getWechatUserId()
    {
        return $this->wechat_user_id;
    }

    /**
     * Generated from protobuf field <code>int32 wechat_user_id = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setWechatUserId($var)
    {
        GPBUtil::checkInt32($var);
        $this->wechat_user_id = $var;

        return $this;
    }

}

