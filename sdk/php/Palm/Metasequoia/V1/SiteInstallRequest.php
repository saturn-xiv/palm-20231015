<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.SiteInstallRequest</code>
 */
class SiteInstallRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.UserSignUpByEmailRequest user = 1;</code>
     */
    protected $user = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Metasequoia\V1\UserSignUpByEmailRequest $user
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.UserSignUpByEmailRequest user = 1;</code>
     * @return \Palm\Metasequoia\V1\UserSignUpByEmailRequest|null
     */
    public function getUser()
    {
        return $this->user;
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
     * Generated from protobuf field <code>.palm.metasequoia.v1.UserSignUpByEmailRequest user = 1;</code>
     * @param \Palm\Metasequoia\V1\UserSignUpByEmailRequest $var
     * @return $this
     */
    public function setUser($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\UserSignUpByEmailRequest::class);
        $this->user = $var;

        return $this;
    }

}

