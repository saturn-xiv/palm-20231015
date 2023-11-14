<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Auth\V1;

/**
 * ----------------------------------------------------------------------------
 */
class GoogleStub {

    /**
     * @param \Palm\Auth\V1\GoogleSignInUrlRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\GoogleSignInUrlResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function SignInUrl(
        \Palm\Auth\V1\GoogleSignInUrlRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\GoogleSignInUrlResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Auth\V1\SignInByGoogleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Auth\V1\UserSignInResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function SignIn(
        \Palm\Auth\V1\SignInByGoogleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Auth\V1\UserSignInResponse {
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
            '/palm.auth.v1.Google/SignInUrl' => new \Grpc\MethodDescriptor(
                $this,
                'SignInUrl',
                '\Palm\Auth\V1\GoogleSignInUrlRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.auth.v1.Google/SignIn' => new \Grpc\MethodDescriptor(
                $this,
                'SignIn',
                '\Palm\Auth\V1\SignInByGoogleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
