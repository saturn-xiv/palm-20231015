<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto

namespace Palm\Fig\V1\IndexNotificationResponse;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.fig.v1.IndexNotificationResponse.Item</code>
 */
class Item extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created_at = 19;</code>
     */
    protected $created_at = null;
    protected $message;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Fig\V1\EmailTask $email
     *     @type \Palm\Fig\V1\SmsTask $sms
     *     @type \Google\Protobuf\Timestamp $created_at
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Fig::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask email = 1;</code>
     * @return \Palm\Fig\V1\EmailTask|null
     */
    public function getEmail()
    {
        return $this->readOneof(1);
    }

    public function hasEmail()
    {
        return $this->hasOneof(1);
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask email = 1;</code>
     * @param \Palm\Fig\V1\EmailTask $var
     * @return $this
     */
    public function setEmail($var)
    {
        GPBUtil::checkMessage($var, \Palm\Fig\V1\EmailTask::class);
        $this->writeOneof(1, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.SmsTask sms = 2;</code>
     * @return \Palm\Fig\V1\SmsTask|null
     */
    public function getSms()
    {
        return $this->readOneof(2);
    }

    public function hasSms()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.SmsTask sms = 2;</code>
     * @param \Palm\Fig\V1\SmsTask $var
     * @return $this
     */
    public function setSms($var)
    {
        GPBUtil::checkMessage($var, \Palm\Fig\V1\SmsTask::class);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created_at = 19;</code>
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
     * Generated from protobuf field <code>.google.protobuf.Timestamp created_at = 19;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setCreatedAt($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->created_at = $var;

        return $this;
    }

    /**
     * @return string
     */
    public function getMessage()
    {
        return $this->whichOneof("message");
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Item::class, \Palm\Fig\V1\IndexNotificationResponse_Item::class);
