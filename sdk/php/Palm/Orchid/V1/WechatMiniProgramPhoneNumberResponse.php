<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: orchid.proto

namespace Palm\Orchid\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.orchid.v1.WechatMiniProgramPhoneNumberResponse</code>
 */
class WechatMiniProgramPhoneNumberResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string phone_number = 1;</code>
     */
    protected $phone_number = '';
    /**
     * Generated from protobuf field <code>string pure_phone_number = 2;</code>
     */
    protected $pure_phone_number = '';
    /**
     * Generated from protobuf field <code>string country_code = 3;</code>
     */
    protected $country_code = '';
    /**
     * Generated from protobuf field <code>uint64 water_mark = 4;</code>
     */
    protected $water_mark = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $phone_number
     *     @type string $pure_phone_number
     *     @type string $country_code
     *     @type int|string $water_mark
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Orchid::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string phone_number = 1;</code>
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phone_number;
    }

    /**
     * Generated from protobuf field <code>string phone_number = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setPhoneNumber($var)
    {
        GPBUtil::checkString($var, True);
        $this->phone_number = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string pure_phone_number = 2;</code>
     * @return string
     */
    public function getPurePhoneNumber()
    {
        return $this->pure_phone_number;
    }

    /**
     * Generated from protobuf field <code>string pure_phone_number = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setPurePhoneNumber($var)
    {
        GPBUtil::checkString($var, True);
        $this->pure_phone_number = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string country_code = 3;</code>
     * @return string
     */
    public function getCountryCode()
    {
        return $this->country_code;
    }

    /**
     * Generated from protobuf field <code>string country_code = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setCountryCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->country_code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint64 water_mark = 4;</code>
     * @return int|string
     */
    public function getWaterMark()
    {
        return $this->water_mark;
    }

    /**
     * Generated from protobuf field <code>uint64 water_mark = 4;</code>
     * @param int|string $var
     * @return $this
     */
    public function setWaterMark($var)
    {
        GPBUtil::checkUint64($var);
        $this->water_mark = $var;

        return $this;
    }

}

