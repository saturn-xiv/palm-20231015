<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto

namespace Palm\Auth\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.auth.v1.UserSignUpRequest</code>
 */
class UserSignUpRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string real_name = 1;</code>
     */
    protected $real_name = '';
    /**
     * Generated from protobuf field <code>string nickname = 2;</code>
     */
    protected $nickname = '';
    /**
     * Generated from protobuf field <code>string email = 3;</code>
     */
    protected $email = '';
    /**
     * Generated from protobuf field <code>string password = 4;</code>
     */
    protected $password = '';
    /**
     * Generated from protobuf field <code>string lang = 11;</code>
     */
    protected $lang = '';
    /**
     * Generated from protobuf field <code>string timezone = 12;</code>
     */
    protected $timezone = '';
    /**
     * Generated from protobuf field <code>string home = 21;</code>
     */
    protected $home = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $real_name
     *     @type string $nickname
     *     @type string $email
     *     @type string $password
     *     @type string $lang
     *     @type string $timezone
     *     @type string $home
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Auth::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string real_name = 1;</code>
     * @return string
     */
    public function getRealName()
    {
        return $this->real_name;
    }

    /**
     * Generated from protobuf field <code>string real_name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setRealName($var)
    {
        GPBUtil::checkString($var, True);
        $this->real_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string nickname = 2;</code>
     * @return string
     */
    public function getNickname()
    {
        return $this->nickname;
    }

    /**
     * Generated from protobuf field <code>string nickname = 2;</code>
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
     * Generated from protobuf field <code>string email = 3;</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Generated from protobuf field <code>string email = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setEmail($var)
    {
        GPBUtil::checkString($var, True);
        $this->email = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string password = 4;</code>
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Generated from protobuf field <code>string password = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setPassword($var)
    {
        GPBUtil::checkString($var, True);
        $this->password = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string lang = 11;</code>
     * @return string
     */
    public function getLang()
    {
        return $this->lang;
    }

    /**
     * Generated from protobuf field <code>string lang = 11;</code>
     * @param string $var
     * @return $this
     */
    public function setLang($var)
    {
        GPBUtil::checkString($var, True);
        $this->lang = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string timezone = 12;</code>
     * @return string
     */
    public function getTimezone()
    {
        return $this->timezone;
    }

    /**
     * Generated from protobuf field <code>string timezone = 12;</code>
     * @param string $var
     * @return $this
     */
    public function setTimezone($var)
    {
        GPBUtil::checkString($var, True);
        $this->timezone = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string home = 21;</code>
     * @return string
     */
    public function getHome()
    {
        return $this->home;
    }

    /**
     * Generated from protobuf field <code>string home = 21;</code>
     * @param string $var
     * @return $this
     */
    public function setHome($var)
    {
        GPBUtil::checkString($var, True);
        $this->home = $var;

        return $this;
    }

}
