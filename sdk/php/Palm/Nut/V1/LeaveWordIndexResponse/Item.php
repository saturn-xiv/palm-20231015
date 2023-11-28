<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nut.proto

namespace Palm\Nut\V1\LeaveWordIndexResponse;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.nut.v1.LeaveWordIndexResponse.Item</code>
 */
class Item extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string lang = 2;</code>
     */
    protected $lang = '';
    /**
     * Generated from protobuf field <code>string ip = 3;</code>
     */
    protected $ip = '';
    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent content = 8;</code>
     */
    protected $content = null;
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp updated_at = 11;</code>
     */
    protected $updated_at = null;
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created_at = 12;</code>
     */
    protected $created_at = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $lang
     *     @type string $ip
     *     @type \Palm\Nut\V1\MediaContent $content
     *     @type \Google\Protobuf\Timestamp $updated_at
     *     @type \Google\Protobuf\Timestamp $created_at
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Nut::initOnce();
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
     * Generated from protobuf field <code>string lang = 2;</code>
     * @return string
     */
    public function getLang()
    {
        return $this->lang;
    }

    /**
     * Generated from protobuf field <code>string lang = 2;</code>
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
     * Generated from protobuf field <code>string ip = 3;</code>
     * @return string
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * Generated from protobuf field <code>string ip = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setIp($var)
    {
        GPBUtil::checkString($var, True);
        $this->ip = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent content = 8;</code>
     * @return \Palm\Nut\V1\MediaContent|null
     */
    public function getContent()
    {
        return $this->content;
    }

    public function hasContent()
    {
        return isset($this->content);
    }

    public function clearContent()
    {
        unset($this->content);
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent content = 8;</code>
     * @param \Palm\Nut\V1\MediaContent $var
     * @return $this
     */
    public function setContent($var)
    {
        GPBUtil::checkMessage($var, \Palm\Nut\V1\MediaContent::class);
        $this->content = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp updated_at = 11;</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    public function hasUpdatedAt()
    {
        return isset($this->updated_at);
    }

    public function clearUpdatedAt()
    {
        unset($this->updated_at);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp updated_at = 11;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setUpdatedAt($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->updated_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created_at = 12;</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    public function hasCreatedAt()
    {
        return isset($this->created_at);
    }

    public function clearCreatedAt()
    {
        unset($this->created_at);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created_at = 12;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setCreatedAt($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->created_at = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Item::class, \Palm\Nut\V1\LeaveWordIndexResponse_Item::class);

