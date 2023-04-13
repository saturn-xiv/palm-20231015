package com.github.saturn_xiv.palm.plugins.musa.services;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.helpers.wechatpay.WechatPayJsapiHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.models.WechatPayConfig;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayJsapiPrepayIdResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.wechat-pay.jsapi")
public class WechatPayJsapiServiceImpl extends WechatPayJsapiGrpc.WechatPayJsapiImplBase {

    @Override
    public void prepayId(WechatPayPrepayRequest request, StreamObserver<WechatPayJsapiPrepayIdResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        var currency = WechatPayConfig.currency(request.getAmount().getCurrenty());
        var response = wechatPay.prepay(request.getAppId(), request.getMchId(),
                request.getDescription(),
                request.getOutTradeNo(),
                currency, request.getAmount().getTotal(),
                request.getNotifyUrl());

        responseObserver.onNext(WechatPayJsapiPrepayIdResponse.newBuilder()
                .setAppId(response.getAppId())
                .setTimeStamp(response.getTimeStamp())
                .setNonceStr(response.getNonceStr())
                .setPackage(response.getPackageVal())
                .setSignType(response.getSignType())
                .setPaySign(response.getPaySign())
                .build());
        responseObserver.onCompleted();
    }

    @PostConstruct
    void init() {
        wechatPay = new WechatPayJsapiHelper(config.jsapiService());
    }

    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayConfig config;

    private WechatPayJsapiHelper wechatPay;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayJsapiHelper.class);
}
