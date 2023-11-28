<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nut.proto

namespace Palm\Nut\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.nut.v1.MediaContent</code>
 */
class MediaContent extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent.Editor editor = 1;</code>
     */
    protected $editor = 0;
    /**
     * Generated from protobuf field <code>string body = 2;</code>
     */
    protected $body = '';
    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent.Status status = 3;</code>
     */
    protected $status = 0;
    /**
     * Generated from protobuf field <code>optional .google.protobuf.Timestamp published_at = 11;</code>
     */
    protected $published_at = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $editor
     *     @type string $body
     *     @type int $status
     *     @type \Google\Protobuf\Timestamp $published_at
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Nut::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent.Editor editor = 1;</code>
     * @return int
     */
    public function getEditor()
    {
        return $this->editor;
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent.Editor editor = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setEditor($var)
    {
        GPBUtil::checkEnum($var, \Palm\Nut\V1\MediaContent\Editor::class);
        $this->editor = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string body = 2;</code>
     * @return string
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * Generated from protobuf field <code>string body = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setBody($var)
    {
        GPBUtil::checkString($var, True);
        $this->body = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent.Status status = 3;</code>
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>.palm.nut.v1.MediaContent.Status status = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkEnum($var, \Palm\Nut\V1\MediaContent\Status::class);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .google.protobuf.Timestamp published_at = 11;</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getPublishedAt()
    {
        return $this->published_at;
    }

    public function hasPublishedAt()
    {
        return isset($this->published_at);
    }

    public function clearPublishedAt()
    {
        unset($this->published_at);
    }

    /**
     * Generated from protobuf field <code>optional .google.protobuf.Timestamp published_at = 11;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setPublishedAt($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->published_at = $var;

        return $this;
    }

}

