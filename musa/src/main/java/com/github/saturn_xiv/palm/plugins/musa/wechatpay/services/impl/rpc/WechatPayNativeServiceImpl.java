package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayNativeHelper;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.rpc.wechat-pay.native")
public class WechatPayNativeServiceImpl extends WechatPayNativeGrpc.WechatPayNativeImplBase {
    @Override
    public void prepay(WechatPayPrepayRequest request, StreamObserver<WechatPayNativeQrCodeUrlResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var outTradeNo = WechatPayClient.outTradeNo();
        var currency = WechatPayClient.currency(request.getAmount().getCurrenty());
        var url = wechatPay.prepay(request.getAppId(),
                request.getDescription(),
                outTradeNo,
                currency, request.getAmount().getTotal(),
                request.getNotifyUrl());
        responseObserver.onNext(WechatPayNativeQrCodeUrlResponse.newBuilder()
                .setOutTradeNo(outTradeNo)
                .setUrl(url).build());
        responseObserver.onCompleted();
    }


    @PostConstruct
    void init() {
        wechatPay = new WechatPayNativeHelper(client.getMerchantId(), client.nativePayService());
    }


    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayClient client;

    private WechatPayNativeHelper wechatPay;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeServiceImpl.class);

}
