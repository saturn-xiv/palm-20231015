<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Orchid\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class WechatOauth2Stub {

    /**
     * @param \Palm\Orchid\V1\WechatOauth2QrConnectRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Orchid\V1\WechatOauth2QrConnectResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function QrConnect(
        \Palm\Orchid\V1\WechatOauth2QrConnectRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Orchid\V1\WechatOauth2QrConnectResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Orchid\V1\WechatOauth2LoginRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Orchid\V1\WechatOauth2LoginResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Login(
        \Palm\Orchid\V1\WechatOauth2LoginRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Orchid\V1\WechatOauth2LoginResponse {
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
            '/palm.orchid.v1.WechatOauth2/QrConnect' => new \Grpc\MethodDescriptor(
                $this,
                'QrConnect',
                '\Palm\Orchid\V1\WechatOauth2QrConnectRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.orchid.v1.WechatOauth2/Login' => new \Grpc\MethodDescriptor(
                $this,
                'Login',
                '\Palm\Orchid\V1\WechatOauth2LoginRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
