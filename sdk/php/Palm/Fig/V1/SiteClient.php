<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Fig\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class SiteClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Fig\V1\SiteMaintenanceModeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetMaintenanceMode(\Palm\Fig\V1\SiteMaintenanceModeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetMaintenanceMode',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteInstallRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Install(\Palm\Fig\V1\SiteInstallRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/Install',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ClearCache(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/ClearCache',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Layout(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/Layout',
        $argument,
        ['\Palm\Fig\V1\SiteLayoutResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteLayoutResponse\Author $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetAuthor(\Palm\Fig\V1\SiteLayoutResponse\Author $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetAuthor',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteSetCopyrightRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetCopyright(\Palm\Fig\V1\SiteSetCopyrightRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetCopyright',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteSetKeywordsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetKeywords(\Palm\Fig\V1\SiteSetKeywordsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetKeywords',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteSetInfoRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetInfo(\Palm\Fig\V1\SiteSetInfoRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetInfo',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteSetLogoRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetLogo(\Palm\Fig\V1\SiteSetLogoRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetLogo',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\TwilioProfile $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetTwilio(\Palm\Fig\V1\TwilioProfile $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetTwilio',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetTwilio(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/GetTwilio',
        $argument,
        ['\Palm\Fig\V1\TwilioProfile', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteTwilioPingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PingTwilio(\Palm\Fig\V1\SiteTwilioPingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/PingTwilio',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SmtpProfile $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetSmtp(\Palm\Fig\V1\SmtpProfile $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetSmtp',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetSmtp(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/GetSmtp',
        $argument,
        ['\Palm\Fig\V1\SmtpProfile', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SiteSmtpPingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PingSmtp(\Palm\Fig\V1\SiteSmtpPingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/PingSmtp',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\IndexNowProfile $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetIndexNow(\Palm\Fig\V1\IndexNowProfile $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetIndexNow',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetIndexNow(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/GetIndexNow',
        $argument,
        ['\Palm\Fig\V1\IndexNowProfile', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\IndexNowPingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PingIndexNow(\Palm\Fig\V1\IndexNowPingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/PingIndexNow',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\GoogleProfile $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetGoogle(\Palm\Fig\V1\GoogleProfile $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetGoogle',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetGoogle(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/GetGoogle',
        $argument,
        ['\Palm\Fig\V1\GoogleProfile', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SitemapPingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PingGoogle(\Palm\Fig\V1\SitemapPingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/PingGoogle',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\BaiduProfile $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SetBaidu(\Palm\Fig\V1\BaiduProfile $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/SetBaidu',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetBaidu(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/GetBaidu',
        $argument,
        ['\Palm\Fig\V1\BaiduProfile', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Fig\V1\SitemapPingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PingBaidu(\Palm\Fig\V1\SitemapPingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/PingBaidu',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Status(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.fig.v1.Site/Status',
        $argument,
        ['\Palm\Fig\V1\SiteStatusResponse', 'decode'],
        $metadata, $options);
    }

}
