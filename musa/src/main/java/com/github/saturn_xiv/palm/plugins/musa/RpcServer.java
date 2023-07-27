package com.github.saturn_xiv.palm.plugins.musa;

import com.github.saturn_xiv.palm.plugins.musa.interceptors.ExceptionServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import io.grpc.InsecureServerCredentials;
import io.grpc.Server;
import io.grpc.netty.NettyServerBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.concurrent.TimeUnit;

@Component("palm.musa.server.rpc")
public class RpcServer {

    void run() throws InterruptedException {
        server.awaitTermination();
    }

    @PostConstruct
    void startUp() throws IOException {
        logger.info("Start gRPC server on http://{}:{}", address, port);
        server = NettyServerBuilder.forAddress(
                        new InetSocketAddress(address, port),
                        InsecureServerCredentials.create())
                .addService(wechatPayBillService)
                .addService(wechatPayJsapiService)
                .addService(wechatPayNativeService)
                .addService(wechatPayRefundService)
                .addService(wechatPayTransferService)
                .addService(healthService)
                .intercept(tokenServerInterceptor)
                .intercept(exceptionServerInterceptor)
                .build().start();
    }

    @PreDestroy
    void shutDown() throws InterruptedException {
        logger.warn("Showdown gRPC server");
        server.shutdown().awaitTermination(1, TimeUnit.MINUTES);
    }

    @Value("${app.rpc.port}")
    int port;
    @Value("${app.rpc.address}")
    String address;

    @Autowired
    HealthGrpc.HealthImplBase healthService;
    @Autowired
    WechatPayNativeGrpc.WechatPayNativeImplBase wechatPayNativeService;
    @Autowired
    WechatPayJsapiGrpc.WechatPayJsapiImplBase wechatPayJsapiService;
    @Autowired
    WechatPayBillGrpc.WechatPayBillImplBase wechatPayBillService;
    @Autowired
    WechatPayRefundGrpc.WechatPayRefundImplBase wechatPayRefundService;
    @Autowired
    WechatPayTransferGrpc.WechatPayTransferImplBase wechatPayTransferService;
    @Autowired
    TokenServerInterceptor tokenServerInterceptor;
    @Autowired
    ExceptionServerInterceptor exceptionServerInterceptor;

    private Server server;

    private final static Logger logger = LoggerFactory.getLogger(RpcServer.class);

    public void setPort(int port) {
        this.port = port;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
