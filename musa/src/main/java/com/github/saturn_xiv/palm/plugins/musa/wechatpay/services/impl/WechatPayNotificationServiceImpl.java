package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.wechat.pay.java.core.notification.NotificationParser;
import com.wechat.pay.java.core.notification.RequestParam;
import com.wechat.pay.java.service.payments.model.Transaction;
import com.wechat.pay.java.service.refund.model.RefundNotification;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.wechat-pay.notification")
public class WechatPayNotificationServiceImpl extends WechatPayNotificationGrpc.WechatPayNotificationImplBase {
    @Override
    public void transaction(WechatPayNotificationRequest request, StreamObserver<WechatPayNotificationTransactionResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var param = new RequestParam.Builder()
                .serialNumber(request.getSerialNumber())
                .nonce(request.getNonce())
                .signature(request.getSignature())
                .timestamp(request.getTimestamp())
                .body(request.getBody())
                .build();

        final var message = notificationParser.parse(param, Transaction.class);
//        TODO
        responseObserver.onNext(WechatPayNotificationTransactionResponse.newBuilder().build());
        responseObserver.onCompleted();
    }

    @Override
    public void refund(WechatPayNotificationRequest request, StreamObserver<WechatPayNotificationRefundResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var param = new RequestParam.Builder()
                .serialNumber(request.getSerialNumber())
                .nonce(request.getNonce())
                .signature(request.getSignature())
                .timestamp(request.getTimestamp())
                .body(request.getBody())
                .build();

        final var message = notificationParser.parse(param, RefundNotification.class);
//        TODO
        responseObserver.onNext(WechatPayNotificationRefundResponse.newBuilder().build());
        responseObserver.onCompleted();
    }


    @PostConstruct
    void init() {
        notificationParser = config.notificationParser();
    }


    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayClient config;

    private NotificationParser notificationParser;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeServiceImpl.class);
}
