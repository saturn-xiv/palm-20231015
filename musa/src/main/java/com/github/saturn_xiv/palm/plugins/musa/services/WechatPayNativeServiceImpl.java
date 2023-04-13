package com.github.saturn_xiv.palm.plugins.musa.services;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.helpers.wechatpay.WechatPayNativeHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.models.WechatPayConfig;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.wechat-pay.native")
public class WechatPayNativeServiceImpl extends WechatPayNativeGrpc.WechatPayNativeImplBase {
    @Override
    public void qrCodeUrl(WechatPayPrepayRequest request, StreamObserver<WechatPayNativeQrCodeUrlResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        var currency = WechatPayConfig.currency(request.getAmount().getCurrenty());
        var url = wechatPay.prepayCodeUrl(request.getAppId(), request.getMchId(),
                request.getDescription(),
                request.getOutTradeNo(),
                currency, request.getAmount().getTotal(),
                request.getNotifyUrl());
        responseObserver.onNext(WechatPayNativeQrCodeUrlResponse.newBuilder().setUrl(url).build());
        responseObserver.onCompleted();
    }


    @PostConstruct
    void init() {
        wechatPay = new WechatPayNativeHelper(config.nativePayService());
    }


    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayConfig config;

    private WechatPayNativeHelper wechatPay;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeServiceImpl.class);

}
