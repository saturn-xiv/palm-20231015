<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Lemon\V1;

/**
 */
class SiteStub {

    /**
     * @param \Palm\Lemon\V1\SiteLayoutRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Lemon\V1\SiteLayoutResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Layout(
        \Palm\Lemon\V1\SiteLayoutRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Lemon\V1\SiteLayoutResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\Duration $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Lemon\V1\SiteRssResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Rss(
        \Google\Protobuf\Duration $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Lemon\V1\SiteRssResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Lemon\V1\SiteSitemapResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Sitemap(
        \Google\Protobuf\GPBEmpty $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Lemon\V1\SiteSitemapResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Lemon\V1\SiteShowPageRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Lemon\V1\SiteShowPageResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function ShowPage(
        \Palm\Lemon\V1\SiteShowPageRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Lemon\V1\SiteShowPageResponse {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Lemon\V1\SiteHomePageRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Lemon\V1\SiteHomePageResponse for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HomePage(
        \Palm\Lemon\V1\SiteHomePageRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Lemon\V1\SiteHomePageResponse {
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
            '/palm.lemon.v1.Site/Layout' => new \Grpc\MethodDescriptor(
                $this,
                'Layout',
                '\Palm\Lemon\V1\SiteLayoutRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.lemon.v1.Site/Rss' => new \Grpc\MethodDescriptor(
                $this,
                'Rss',
                '\Google\Protobuf\Duration',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.lemon.v1.Site/Sitemap' => new \Grpc\MethodDescriptor(
                $this,
                'Sitemap',
                '\Google\Protobuf\GPBEmpty',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.lemon.v1.Site/ShowPage' => new \Grpc\MethodDescriptor(
                $this,
                'ShowPage',
                '\Palm\Lemon\V1\SiteShowPageRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.lemon.v1.Site/HomePage' => new \Grpc\MethodDescriptor(
                $this,
                'HomePage',
                '\Palm\Lemon\V1\SiteHomePageRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
