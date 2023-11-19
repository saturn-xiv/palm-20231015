<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto

namespace Palm\Fig\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.fig.v1.EmailTask</code>
 */
class EmailTask extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask.Address to = 1;</code>
     */
    protected $to = null;
    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Address cc = 2;</code>
     */
    private $cc;
    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Address bcc = 3;</code>
     */
    private $bcc;
    /**
     * Generated from protobuf field <code>string subject = 11;</code>
     */
    protected $subject = '';
    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask.Body body = 12;</code>
     */
    protected $body = null;
    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Attachment attachments = 13;</code>
     */
    private $attachments;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Fig\V1\EmailTask\Address $to
     *     @type array<\Palm\Fig\V1\EmailTask\Address>|\Google\Protobuf\Internal\RepeatedField $cc
     *     @type array<\Palm\Fig\V1\EmailTask\Address>|\Google\Protobuf\Internal\RepeatedField $bcc
     *     @type string $subject
     *     @type \Palm\Fig\V1\EmailTask\Body $body
     *     @type array<\Palm\Fig\V1\EmailTask\Attachment>|\Google\Protobuf\Internal\RepeatedField $attachments
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Fig::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask.Address to = 1;</code>
     * @return \Palm\Fig\V1\EmailTask\Address|null
     */
    public function getTo()
    {
        return $this->to;
    }

    public function hasTo()
    {
        return isset($this->to);
    }

    public function clearTo()
    {
        unset($this->to);
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask.Address to = 1;</code>
     * @param \Palm\Fig\V1\EmailTask\Address $var
     * @return $this
     */
    public function setTo($var)
    {
        GPBUtil::checkMessage($var, \Palm\Fig\V1\EmailTask\Address::class);
        $this->to = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Address cc = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCc()
    {
        return $this->cc;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Address cc = 2;</code>
     * @param array<\Palm\Fig\V1\EmailTask\Address>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCc($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Fig\V1\EmailTask\Address::class);
        $this->cc = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Address bcc = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getBcc()
    {
        return $this->bcc;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Address bcc = 3;</code>
     * @param array<\Palm\Fig\V1\EmailTask\Address>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setBcc($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Fig\V1\EmailTask\Address::class);
        $this->bcc = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string subject = 11;</code>
     * @return string
     */
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * Generated from protobuf field <code>string subject = 11;</code>
     * @param string $var
     * @return $this
     */
    public function setSubject($var)
    {
        GPBUtil::checkString($var, True);
        $this->subject = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask.Body body = 12;</code>
     * @return \Palm\Fig\V1\EmailTask\Body|null
     */
    public function getBody()
    {
        return $this->body;
    }

    public function hasBody()
    {
        return isset($this->body);
    }

    public function clearBody()
    {
        unset($this->body);
    }

    /**
     * Generated from protobuf field <code>.palm.fig.v1.EmailTask.Body body = 12;</code>
     * @param \Palm\Fig\V1\EmailTask\Body $var
     * @return $this
     */
    public function setBody($var)
    {
        GPBUtil::checkMessage($var, \Palm\Fig\V1\EmailTask\Body::class);
        $this->body = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Attachment attachments = 13;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAttachments()
    {
        return $this->attachments;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.fig.v1.EmailTask.Attachment attachments = 13;</code>
     * @param array<\Palm\Fig\V1\EmailTask\Attachment>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAttachments($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Fig\V1\EmailTask\Attachment::class);
        $this->attachments = $arr;

        return $this;
    }

}
