package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayJsapiHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.google.protobuf.Empty;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.rpc.wechat-pay.jsapi")
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

        final var outTradeNo = WechatPayClient.outNo(OutNoType.TRADE);
        final var notifyUrl = WechatPayClient.notifyUrl(request.getNotifyHost(), WechatPayNotifyAction.TRANSCATION);
        var response = wechatPay.prepayWithRequestPayment(request.getAppId(), request.getPayerOpenId(),
                outTradeNo,
                WechatPayClient.currency(request.getAmount().getCurrency()), request.getAmount().getTotal(), request.getDescription(),
                notifyUrl);

        storageService.addOrder(request.getAppId(), request.getPayerOpenId(), outTradeNo, request.getAmount(),
                request.getDescription());

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
        wechatPay = new WechatPayJsapiHelper(client.getMerchantId(), client.jsapiService());
    }

    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayStorageService storageService;

    private WechatPayJsapiHelper wechatPay;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayJsapiHelper.class);
}
