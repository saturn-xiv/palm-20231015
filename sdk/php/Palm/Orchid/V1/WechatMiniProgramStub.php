<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Orchid\V1;

/**
 * ----------------------------------------------------------------------------
 */
class WechatMiniProgramStub {

    /**
     * @param \Palm\Orchid\V1\WechatMiniProgramLoginRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Orchid\V1\WechatMiniProgramLoginResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Login(
        \Palm\Orchid\V1\WechatMiniProgramLoginRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Orchid\V1\WechatMiniProgramLoginResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Orchid\V1\WechatMiniProgramPhoneNumberRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Orchid\V1\WechatMiniProgramPhoneNumberResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function PhoneNumber(
        \Palm\Orchid\V1\WechatMiniProgramPhoneNumberRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Orchid\V1\WechatMiniProgramPhoneNumberResponse {
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
            '/palm.orchid.v1.WechatMiniProgram/Login' => new \Grpc\MethodDescriptor(
                $this,
                'Login',
                '\Palm\Orchid\V1\WechatMiniProgramLoginRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.orchid.v1.WechatMiniProgram/PhoneNumber' => new \Grpc\MethodDescriptor(
                $this,
                'PhoneNumber',
                '\Palm\Orchid\V1\WechatMiniProgramPhoneNumberRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
