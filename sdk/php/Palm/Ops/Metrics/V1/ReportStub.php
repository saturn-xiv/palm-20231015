<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Ops\Metrics\V1;

/**
 */
class ReportStub {

    /**
     * @param \Palm\Ops\Metrics\V1\ReportHeartbeatRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Heartbeat(
        \Palm\Ops\Metrics\V1\ReportHeartbeatRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Ops\Metrics\V1\ReportJournalRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Journal(
        \Palm\Ops\Metrics\V1\ReportJournalRequest $request,
        \Grpc\ServerContext $context
    ): ?\Google\Protobuf\GPBEmpty {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Ops\Metrics\V1\ReportNginxRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Google\Protobuf\GPBEmpty for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Nginx(
        \Palm\Ops\Metrics\V1\ReportNginxRequest $request,
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
            '/palm.ops.metrics.v1.Report/Heartbeat' => new \Grpc\MethodDescriptor(
                $this,
                'Heartbeat',
                '\Palm\Ops\Metrics\V1\ReportHeartbeatRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.ops.metrics.v1.Report/Journal' => new \Grpc\MethodDescriptor(
                $this,
                'Journal',
                '\Palm\Ops\Metrics\V1\ReportJournalRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.ops.metrics.v1.Report/Nginx' => new \Grpc\MethodDescriptor(
                $this,
                'Nginx',
                '\Palm\Ops\Metrics\V1\ReportNginxRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
