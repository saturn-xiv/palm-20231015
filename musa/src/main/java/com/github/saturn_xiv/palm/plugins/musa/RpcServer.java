package com.github.saturn_xiv.palm.plugins.musa;

import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import io.grpc.Grpc;
import io.grpc.InsecureServerCredentials;
import io.grpc.Server;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

@Component("palm.musa.server.rpc")
public class RpcServer {

    void run() throws InterruptedException {
        server.awaitTermination();
    }

    @PostConstruct
    void startUp() throws IOException {
        server = Grpc.newServerBuilderForPort(port, InsecureServerCredentials.create())
                .addService(wechatPayBillService)
                .addService(wechatPayJsapiService)
                .addService(wechatPayNativeService)
                .addService(wechatPayNotificationService)
                .addService(healthService)
                .intercept(tokenServerInterceptor)
                .build().start();
        logger.info("Start gRPC server on http://0.0.0.0:{}", port);
    }

    @PreDestroy
    void shutDown() throws InterruptedException {
        logger.warn("Showdown gRPC server");
        server.shutdown().awaitTermination(1, TimeUnit.MINUTES);
    }

    @Value("${app.rpc.port}")
    int port;

    @Autowired
    HealthGrpc.HealthImplBase healthService;
    @Autowired
    WechatPayNativeGrpc.WechatPayNativeImplBase wechatPayNativeService;
    @Autowired
    WechatPayJsapiGrpc.WechatPayJsapiImplBase wechatPayJsapiService;
    @Autowired
    WechatPayNotificationGrpc.WechatPayNotificationImplBase wechatPayNotificationService;
    @Autowired
    WechatPayBillGrpc.WechatPayBillImplBase wechatPayBillService;
    @Autowired
    TokenServerInterceptor tokenServerInterceptor;

    private Server server;

    private final static Logger logger = LoggerFactory.getLogger(RpcServer.class);

}
