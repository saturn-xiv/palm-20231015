<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.LocaleByLangRequest</code>
 */
class LocaleByLangRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string lang = 1;</code>
     */
    protected $lang = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $lang
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string lang = 1;</code>
     * @return string
     */
    public function getLang()
    {
        return $this->lang;
    }

    /**
     * Generated from protobuf field <code>string lang = 1;</code>
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

