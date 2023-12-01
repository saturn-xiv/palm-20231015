<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 * ----------------------------------------------------------------------------
 */
class WechatClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Oauth2SignInState(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/Oauth2SignInState',
        $argument,
        ['\Palm\Metasequoia\V1\WechatOauth2SignInStateResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatOauth2SignInUrlRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Oauth2SignInUrl(\Palm\Metasequoia\V1\WechatOauth2SignInUrlRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/Oauth2SignInUrl',
        $argument,
        ['\Palm\Orchid\V1\WechatOauth2QrConnectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\SignInByWechatOauth2Request $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignInByOauth2(\Palm\Metasequoia\V1\SignInByWechatOauth2Request $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/SignInByOauth2',
        $argument,
        ['\Palm\Metasequoia\V1\UserSignInResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AllOauth2User(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/AllOauth2User',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllOauth2UserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DestroyOauth2User(\Palm\Metasequoia\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/DestroyOauth2User',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatUserBindByIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function BindOauth2UserById(\Palm\Metasequoia\V1\WechatUserBindByIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/BindOauth2UserById',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatUserBindByAccountRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function BindOauth2UserByAccount(\Palm\Metasequoia\V1\WechatUserBindByAccountRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/BindOauth2UserByAccount',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetOauth2UserById(\Palm\Metasequoia\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/GetOauth2UserById',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllOauth2UserResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatUserQueryByOpenIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetOauth2UserByOpenId(\Palm\Metasequoia\V1\WechatUserQueryByOpenIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/GetOauth2UserByOpenId',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllOauth2UserResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatUserQueryByUnionIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetOauth2UserByUnionId(\Palm\Metasequoia\V1\WechatUserQueryByUnionIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/GetOauth2UserByUnionId',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllOauth2UserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AllMiniProgramUser(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/AllMiniProgramUser',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllMiniProgramUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DestroyMiniProgramUser(\Palm\Metasequoia\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/DestroyMiniProgramUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatUserBindByIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function BindMiniProgramUserById(\Palm\Metasequoia\V1\WechatUserBindByIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/BindMiniProgramUserById',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\IdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetMiniProgramUserById(\Palm\Metasequoia\V1\IdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/GetMiniProgramUserById',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllMiniProgramUserResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatUserQueryByOpenIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetMiniProgramUserByOpenId(\Palm\Metasequoia\V1\WechatUserQueryByOpenIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/GetMiniProgramUserByOpenId',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllMiniProgramUserResponse\Item', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Metasequoia\V1\WechatUserQueryByUnionIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetMiniProgramUserByUnionId(\Palm\Metasequoia\V1\WechatUserQueryByUnionIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.metasequoia.v1.Wechat/GetMiniProgramUserByUnionId',
        $argument,
        ['\Palm\Metasequoia\V1\WechatAllMiniProgramUserResponse', 'decode'],
        $metadata, $options);
    }

}
