<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Auth\V1;

/**
 * ----------------------------------------------------------------------------
 */
class WechatStub {

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatOauth2SignInStateResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Oauth2SignInState(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatOauth2SignInStateResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatOauth2SignInUrlRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Orchid\V1\WechatOauth2QrConnectResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Oauth2SignInUrl(
        \Palm\Auth\V1\WechatOauth2SignInUrlRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Orchid\V1\WechatOauth2QrConnectResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\SignInByWechatOauth2Request $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\UserSignInResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function SignInByOauth2(
        \Palm\Auth\V1\SignInByWechatOauth2Request $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\UserSignInResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllOauth2UserResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AllOauth2User(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllOauth2UserResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DestroyOauth2User(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatUserBindByIdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function BindOauth2UserById(
        \Palm\Auth\V1\WechatUserBindByIdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatUserBindByAccountRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function BindOauth2UserByAccount(
        \Palm\Auth\V1\WechatUserBindByAccountRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllOauth2UserResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetOauth2UserById(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllOauth2UserResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatUserQueryByOpenIdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllOauth2UserResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetOauth2UserByOpenId(
        \Palm\Auth\V1\WechatUserQueryByOpenIdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllOauth2UserResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatUserQueryByUnionIdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllOauth2UserResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetOauth2UserByUnionId(
        \Palm\Auth\V1\WechatUserQueryByUnionIdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllOauth2UserResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllMiniProgramUserResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AllMiniProgramUser(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllMiniProgramUserResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DestroyMiniProgramUser(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatUserBindByIdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function BindMiniProgramUserById(
        \Palm\Auth\V1\WechatUserBindByIdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllMiniProgramUserResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetMiniProgramUserById(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllMiniProgramUserResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatUserQueryByOpenIdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllMiniProgramUserResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetMiniProgramUserByOpenId(
        \Palm\Auth\V1\WechatUserQueryByOpenIdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllMiniProgramUserResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\WechatUserQueryByUnionIdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\WechatAllMiniProgramUserResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetMiniProgramUserByUnionId(
        \Palm\Auth\V1\WechatUserQueryByUnionIdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\WechatAllMiniProgramUserResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * Get the method descriptors of the service for server registration
     *
     * @return array of \Grpc\MethodDescriptor for the service methods
     */
    public final function getMethodDescriptors(): array
    {
        return [
            '/palm.auth.v1.Wechat/Oauth2SignInState' => new \Grpc\MethodDescriptor(
                $this,
                'Oauth2SignInState',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/Oauth2SignInUrl' => new \Grpc\MethodDescriptor(
                $this,
                'Oauth2SignInUrl',
                '\Palm\Auth\V1\WechatOauth2SignInUrlRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/SignInByOauth2' => new \Grpc\MethodDescriptor(
                $this,
                'SignInByOauth2',
                '\Palm\Auth\V1\SignInByWechatOauth2Request',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/AllOauth2User' => new \Grpc\MethodDescriptor(
                $this,
                'AllOauth2User',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/DestroyOauth2User' => new \Grpc\MethodDescriptor(
                $this,
                'DestroyOauth2User',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/BindOauth2UserById' => new \Grpc\MethodDescriptor(
                $this,
                'BindOauth2UserById',
                '\Palm\Auth\V1\WechatUserBindByIdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/BindOauth2UserByAccount' => new \Grpc\MethodDescriptor(
                $this,
                'BindOauth2UserByAccount',
                '\Palm\Auth\V1\WechatUserBindByAccountRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/GetOauth2UserById' => new \Grpc\MethodDescriptor(
                $this,
                'GetOauth2UserById',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/GetOauth2UserByOpenId' => new \Grpc\MethodDescriptor(
                $this,
                'GetOauth2UserByOpenId',
                '\Palm\Auth\V1\WechatUserQueryByOpenIdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/GetOauth2UserByUnionId' => new \Grpc\MethodDescriptor(
                $this,
                'GetOauth2UserByUnionId',
                '\Palm\Auth\V1\WechatUserQueryByUnionIdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/AllMiniProgramUser' => new \Grpc\MethodDescriptor(
                $this,
                'AllMiniProgramUser',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/DestroyMiniProgramUser' => new \Grpc\MethodDescriptor(
                $this,
                'DestroyMiniProgramUser',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/BindMiniProgramUserById' => new \Grpc\MethodDescriptor(
                $this,
                'BindMiniProgramUserById',
                '\Palm\Auth\V1\WechatUserBindByIdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/GetMiniProgramUserById' => new \Grpc\MethodDescriptor(
                $this,
                'GetMiniProgramUserById',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/GetMiniProgramUserByOpenId' => new \Grpc\MethodDescriptor(
                $this,
                'GetMiniProgramUserByOpenId',
                '\Palm\Auth\V1\WechatUserQueryByOpenIdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Wechat/GetMiniProgramUserByUnionId' => new \Grpc\MethodDescriptor(
                $this,
                'GetMiniProgramUserByUnionId',
                '\Palm\Auth\V1\WechatUserQueryByUnionIdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
