<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Metasequoia\V1;

/**
 * ----------------------------------------------------------------------------
 *
 */
class SettingStub {

    /**
     * @param \Palm\Metasequoia\V1\SettingSetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Set(
        \Palm\Metasequoia\V1\SettingSetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\SettingGetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\SettingsResponse\Item for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Get(
        \Palm\Metasequoia\V1\SettingGetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\SettingsResponse\Item {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Metasequoia\V1\SettingByUserRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\SettingsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ByUser(
        \Palm\Metasequoia\V1\SettingByUserRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\SettingsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\SettingsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function My(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\SettingsResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Metasequoia\V1\SettingsResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Global(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Metasequoia\V1\SettingsResponse {
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
            '/palm.metasequoia.v1.Setting/Set' => new \Grpc\MethodDescriptor(
                $this,
                'Set',
                '\Palm\Metasequoia\V1\SettingSetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Setting/Get' => new \Grpc\MethodDescriptor(
                $this,
                'Get',
                '\Palm\Metasequoia\V1\SettingGetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Setting/ByUser' => new \Grpc\MethodDescriptor(
                $this,
                'ByUser',
                '\Palm\Metasequoia\V1\SettingByUserRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Setting/My' => new \Grpc\MethodDescriptor(
                $this,
                'My',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.metasequoia.v1.Setting/Global' => new \Grpc\MethodDescriptor(
                $this,
                'Global',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
