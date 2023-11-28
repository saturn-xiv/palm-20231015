<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Nut\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class LocaleStub {

    /**
     * @param \Palm\Nut\V1\LocaleCreateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Create(
        \Palm\Nut\V1\LocaleCreateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\LocaleUpdateRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Update(
        \Palm\Nut\V1\LocaleUpdateRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\LocaleByLangAndCodeRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Nut\V1\LocaleIndexResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ByLangAndCode(
        \Palm\Nut\V1\LocaleByLangAndCodeRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Nut\V1\LocaleIndexResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Nut\V1\LocaleIndexResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ById(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Nut\V1\LocaleIndexResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\LocaleByLangRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Nut\V1\LocaleListResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ByLang(
        \Palm\Nut\V1\LocaleByLangRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Nut\V1\LocaleListResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\LocaleByCodeRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Nut\V1\LocaleListResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ByCode(
        \Palm\Nut\V1\LocaleByCodeRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Nut\V1\LocaleListResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\Pager $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Nut\V1\LocaleIndexResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Index(
        \Palm\Nut\V1\Pager $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Nut\V1\LocaleIndexResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Nut\V1\IdRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Destroy(
        \Palm\Nut\V1\IdRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
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
            '/palm.nut.v1.Locale/Create' => new \Grpc\MethodDescriptor(
                $this,
                'Create',
                '\Palm\Nut\V1\LocaleCreateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.Locale/Update' => new \Grpc\MethodDescriptor(
                $this,
                'Update',
                '\Palm\Nut\V1\LocaleUpdateRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.Locale/ByLangAndCode' => new \Grpc\MethodDescriptor(
                $this,
                'ByLangAndCode',
                '\Palm\Nut\V1\LocaleByLangAndCodeRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.Locale/ById' => new \Grpc\MethodDescriptor(
                $this,
                'ById',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.Locale/ByLang' => new \Grpc\MethodDescriptor(
                $this,
                'ByLang',
                '\Palm\Nut\V1\LocaleByLangRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.Locale/ByCode' => new \Grpc\MethodDescriptor(
                $this,
                'ByCode',
                '\Palm\Nut\V1\LocaleByCodeRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.Locale/Index' => new \Grpc\MethodDescriptor(
                $this,
                'Index',
                '\Palm\Nut\V1\Pager',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.nut.v1.Locale/Destroy' => new \Grpc\MethodDescriptor(
                $this,
                'Destroy',
                '\Palm\Nut\V1\IdRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
