<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 */
class LocaleStub {

    /**
     * @param \Palm\Metasequoia\V1\LocaleSetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Set(
        \Palm\Metasequoia\V1\LocaleSetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\LocaleGetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\LocalesResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Get(
        \Palm\Metasequoia\V1\LocaleGetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\LocalesResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\LocaleByLangRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\LocalesResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ByLang(
        \Palm\Metasequoia\V1\LocaleByLangRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\LocalesResponse {
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
            '/palm.metasequoia.v1.Locale/Set' => new \Grpc\MethodDescriptor(
                $this,
                'Set',
                '\Palm\Metasequoia\V1\LocaleSetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Locale/Get' => new \Grpc\MethodDescriptor(
                $this,
                'Get',
                '\Palm\Metasequoia\V1\LocaleGetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Locale/ByLang' => new \Grpc\MethodDescriptor(
                $this,
                'ByLang',
                '\Palm\Metasequoia\V1\LocaleByLangRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
