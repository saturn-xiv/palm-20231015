<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto

namespace Palm\Ops\Router\V1\Profile\Network\Lan;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.ops.router.v1.Profile.Network.Lan.Client</code>
 */
class Client extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string user = 1;</code>
     */
    protected $user = '';
    /**
     * Generated from protobuf field <code>string password = 2;</code>
     */
    protected $password = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $user
     *     @type string $password
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\OpsRouter::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string user = 1;</code>
     * @return string
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Generated from protobuf field <code>string user = 1;</code>
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
     * Generated from protobuf field <code>string password = 2;</code>
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Generated from protobuf field <code>string password = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setPassword($var)
    {
        GPBUtil::checkString($var, True);
        $this->password = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Client::class, \Palm\Ops\Router\V1\Profile_Network_Lan_Client::class);

