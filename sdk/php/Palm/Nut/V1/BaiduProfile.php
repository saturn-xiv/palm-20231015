<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nut.proto

namespace Palm\Nut\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.nut.v1.BaiduProfile</code>
 */
class BaiduProfile extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional .palm.nut.v1.BaiduProfile.SiteVerify site_verify = 1;</code>
     */
    protected $site_verify = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Nut\V1\BaiduProfile\SiteVerify $site_verify
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Nut::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional .palm.nut.v1.BaiduProfile.SiteVerify site_verify = 1;</code>
     * @return \Palm\Nut\V1\BaiduProfile\SiteVerify|null
     */
    public function getSiteVerify()
    {
        return $this->site_verify;
    }

    public function hasSiteVerify()
    {
        return isset($this->site_verify);
    }

    public function clearSiteVerify()
    {
        unset($this->site_verify);
    }

    /**
     * Generated from protobuf field <code>optional .palm.nut.v1.BaiduProfile.SiteVerify site_verify = 1;</code>
     * @param \Palm\Nut\V1\BaiduProfile\SiteVerify $var
     * @return $this
     */
    public function setSiteVerify($var)
    {
        GPBUtil::checkMessage($var, \Palm\Nut\V1\BaiduProfile\SiteVerify::class);
        $this->site_verify = $var;

        return $this;
    }

}

