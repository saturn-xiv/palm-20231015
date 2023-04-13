package com.github.saturn_xiv.palm.plugins.musa.services;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.helpers.wechatpay.WechatPayJsapiHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.models.WechatPayConfig;
import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.google.protobuf.Empty;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.wechat-pay.jsapi")
public class WechatPayJsapiServiceImpl extends WechatPayJsapiGrpc.WechatPayJsapiImplBase {

    @Override
    public void closeOrder(WechatPayCloseOrderRequest request, StreamObserver<Empty> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        logger.warn("close order {}, reason: {}", request.getOutTradeNo(), request.getReason());
        wechatPay.closeOrder(request.getOutTradeNo());

        responseObserver.onNext(Empty.newBuilder()
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void queryOrderById(WechatPayQueryOrderByIdRequest request, StreamObserver<WechatPayTradeResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var response = wechatPay.queryOrderById(request.getId());
        //        TODO
        responseObserver.onNext(WechatPayTradeResponse.newBuilder()
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void queryOrderByOutTradeNo(WechatPayQueryOrderByOutTradeNoRequest request, StreamObserver<WechatPayTradeResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var response = wechatPay.queryOrderByOutTradeNo(request.getNo());
//        TODO
        responseObserver.onNext(WechatPayTradeResponse.newBuilder()
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void prepay(WechatPayPrepayRequest request, StreamObserver<WechatPayJsapiPrepayIdResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var outTradeNo = WechatPayConfig.outTradeNo();
        var currency = WechatPayConfig.currency(request.getAmount().getCurrenty());
        var response = wechatPay.prepayWithRequestPayment(request.getAppId(),
                request.getDescription(),
                outTradeNo,
                currency, request.getAmount().getTotal(),
                request.getNotifyUrl());

        responseObserver.onNext(WechatPayJsapiPrepayIdResponse.newBuilder()
                .setAppId(response.getAppId())
                .setOutTradeNo(outTradeNo)
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
        wechatPay = new WechatPayJsapiHelper(config.getMerchantId(), config.jsapiService());
    }

    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayConfig config;

    private WechatPayJsapiHelper wechatPay;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayJsapiHelper.class);
}
