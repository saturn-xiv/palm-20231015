package com.github.saturn_xiv.palm.plugins.musa;

import com.github.saturn_xiv.palm.plugins.musa.v1.HealthGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayGrpc;
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
        logger.debug("{} {}", wechatPayService == null, healthService == null);
        server = Grpc.newServerBuilderForPort(port, InsecureServerCredentials.create())
                .addService(wechatPayService)
                .addService(healthService)
                .build().start();
        logger.info("start gRPC server on http://0.0.0.0:{}", port);

    }

    @PreDestroy
    void shutDown() throws InterruptedException {
        logger.warn("showdown gRPC server");
        server.shutdown().awaitTermination(1, TimeUnit.MINUTES);
    }

    @Value("${app.rpc.port}")
    int port;

    @Autowired
    HealthGrpc.HealthImplBase healthService;
    @Autowired
    WechatPayGrpc.WechatPayImplBase wechatPayService;

    private Server server;

    private final static Logger logger = LoggerFactory.getLogger(RpcServer.class);

}
