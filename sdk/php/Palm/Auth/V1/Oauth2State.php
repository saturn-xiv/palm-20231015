<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto

namespace Palm\Auth\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.auth.v1.Oauth2State</code>
 */
class Oauth2State extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string goto = 1;</code>
     */
    protected $goto = '';
    /**
     * Generated from protobuf field <code>string host = 2;</code>
     */
    protected $host = '';
    /**
     * Generated from protobuf field <code>optional string user = 3;</code>
     */
    protected $user = null;
    /**
     * Generated from protobuf field <code>string id = 9;</code>
     */
    protected $id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $goto
     *     @type string $host
     *     @type string $user
     *     @type string $id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Auth::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string goto = 1;</code>
     * @return string
     */
    public function getGoto()
    {
        return $this->goto;
    }

    /**
     * Generated from protobuf field <code>string goto = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setGoto($var)
    {
        GPBUtil::checkString($var, True);
        $this->goto = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string host = 2;</code>
     * @return string
     */
    public function getHost()
    {
        return $this->host;
    }

    /**
     * Generated from protobuf field <code>string host = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setHost($var)
    {
        GPBUtil::checkString($var, True);
        $this->host = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string user = 3;</code>
     * @return string
     */
    public function getUser()
    {
        return isset($this->user) ? $this->user : '';
    }

    public function hasUser()
    {
        return isset($this->user);
    }

    public function clearUser()
    {
        unset($this->user);
    }

    /**
     * Generated from protobuf field <code>optional string user = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setUser($var)
    {
        GPBUtil::checkString($var, True);
        $this->user = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string id = 9;</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 9;</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

}

