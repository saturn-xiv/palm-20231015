<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto

namespace Palm\Auth\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.auth.v1.WechatOauth2SignInUrlRequest</code>
 */
class WechatOauth2SignInUrlRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string app_id = 1;</code>
     */
    protected $app_id = '';
    /**
     * Generated from protobuf field <code>string redirect_uri = 2;</code>
     */
    protected $redirect_uri = '';
    /**
     * Generated from protobuf field <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 3;</code>
     */
    protected $language = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $app_id
     *     @type string $redirect_uri
     *     @type int $language
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Auth::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string app_id = 1;</code>
     * @return string
     */
    public function getAppId()
    {
        return $this->app_id;
    }

    /**
     * Generated from protobuf field <code>string app_id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setAppId($var)
    {
        GPBUtil::checkString($var, True);
        $this->app_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string redirect_uri = 2;</code>
     * @return string
     */
    public function getRedirectUri()
    {
        return $this->redirect_uri;
    }

    /**
     * Generated from protobuf field <code>string redirect_uri = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setRedirectUri($var)
    {
        GPBUtil::checkString($var, True);
        $this->redirect_uri = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 3;</code>
     * @return int
     */
    public function getLanguage()
    {
        return $this->language;
    }

    /**
     * Generated from protobuf field <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setLanguage($var)
    {
        GPBUtil::checkEnum($var, \Palm\Orchid\V1\WechatOauth2QrConnectRequest\Language::class);
        $this->language = $var;

        return $this;
    }

}

