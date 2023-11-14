<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto

namespace Palm\Auth\V1\WechatAllOauth2UserResponse;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.auth.v1.WechatAllOauth2UserResponse.Item</code>
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
     * Generated from protobuf field <code>string nickname = 11;</code>
     */
    protected $nickname = '';
    /**
     * Generated from protobuf field <code>int32 sex = 12;</code>
     */
    protected $sex = 0;
    /**
     * Generated from protobuf field <code>string city = 13;</code>
     */
    protected $city = '';
    /**
     * Generated from protobuf field <code>string province = 14;</code>
     */
    protected $province = '';
    /**
     * Generated from protobuf field <code>string country = 15;</code>
     */
    protected $country = '';
    /**
     * Generated from protobuf field <code>optional string head_img_url = 16;</code>
     */
    protected $head_img_url = null;
    /**
     * Generated from protobuf field <code>repeated string privilege = 17;</code>
     */
    private $privilege;
    /**
     * Generated from protobuf field <code>string lang = 18;</code>
     */
    protected $lang = '';

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
     *     @type int $sex
     *     @type string $city
     *     @type string $province
     *     @type string $country
     *     @type string $head_img_url
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $privilege
     *     @type string $lang
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Auth::initOnce();
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
     * Generated from protobuf field <code>string nickname = 11;</code>
     * @return string
     */
    public function getNickname()
    {
        return $this->nickname;
    }

    /**
     * Generated from protobuf field <code>string nickname = 11;</code>
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
     * Generated from protobuf field <code>int32 sex = 12;</code>
     * @return int
     */
    public function getSex()
    {
        return $this->sex;
    }

    /**
     * Generated from protobuf field <code>int32 sex = 12;</code>
     * @param int $var
     * @return $this
     */
    public function setSex($var)
    {
        GPBUtil::checkInt32($var);
        $this->sex = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string city = 13;</code>
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Generated from protobuf field <code>string city = 13;</code>
     * @param string $var
     * @return $this
     */
    public function setCity($var)
    {
        GPBUtil::checkString($var, True);
        $this->city = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string province = 14;</code>
     * @return string
     */
    public function getProvince()
    {
        return $this->province;
    }

    /**
     * Generated from protobuf field <code>string province = 14;</code>
     * @param string $var
     * @return $this
     */
    public function setProvince($var)
    {
        GPBUtil::checkString($var, True);
        $this->province = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string country = 15;</code>
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Generated from protobuf field <code>string country = 15;</code>
     * @param string $var
     * @return $this
     */
    public function setCountry($var)
    {
        GPBUtil::checkString($var, True);
        $this->country = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string head_img_url = 16;</code>
     * @return string
     */
    public function getHeadImgUrl()
    {
        return isset($this->head_img_url) ? $this->head_img_url : '';
    }

    public function hasHeadImgUrl()
    {
        return isset($this->head_img_url);
    }

    public function clearHeadImgUrl()
    {
        unset($this->head_img_url);
    }

    /**
     * Generated from protobuf field <code>optional string head_img_url = 16;</code>
     * @param string $var
     * @return $this
     */
    public function setHeadImgUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->head_img_url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string privilege = 17;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPrivilege()
    {
        return $this->privilege;
    }

    /**
     * Generated from protobuf field <code>repeated string privilege = 17;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPrivilege($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->privilege = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string lang = 18;</code>
     * @return string
     */
    public function getLang()
    {
        return $this->lang;
    }

    /**
     * Generated from protobuf field <code>string lang = 18;</code>
     * @param string $var
     * @return $this
     */
    public function setLang($var)
    {
        GPBUtil::checkString($var, True);
        $this->lang = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Item::class, \Palm\Auth\V1\WechatAllOauth2UserResponse_Item::class);

