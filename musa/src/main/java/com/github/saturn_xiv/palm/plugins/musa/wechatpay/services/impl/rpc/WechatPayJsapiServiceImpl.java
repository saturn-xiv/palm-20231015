package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayJsapiHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.google.protobuf.Empty;
import com.wechat.pay.java.service.payments.model.Transaction;
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
        logger.warn("close order {}, reason: {}", request.getOutTradeNo(), request.getReason());
        wechatPay.closeOrder(request.getOutTradeNo());

        responseObserver.onNext(Empty.newBuilder()
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void queryOrderById(WechatPayQueryOrderByIdRequest request,
                               StreamObserver<WechatPayTradeResponse> responseObserver) {
        logger.info("query order by transaction id {}", request.getTransactionId());
        final var response = wechatPay.queryOrderById(request.getTransactionId());

        responseObserver.onNext(transaction2response(response));
        responseObserver.onCompleted();
    }

    @Override
    public void queryOrderByOutTradeNo(WechatPayQueryOrderByOutTradeNoRequest request,
                                       StreamObserver<WechatPayTradeResponse> responseObserver) {
        logger.info("query order by out-trade-no {}", request.getOutTradeNo());
        final var response = wechatPay.queryOrderByOutTradeNo(request.getOutTradeNo());

        responseObserver.onNext(transaction2response(response));
        responseObserver.onCompleted();
    }

    @Override
    public void prepay(WechatPayPrepayRequest request,
                       StreamObserver<WechatPayJsapiPrepayIdResponse> responseObserver) {
        final var outTradeNo = request.hasOutTradeNo()
                ? request.getOutTradeNo() : WechatPayClient.outNo(OutNoType.TRADE);
        final var notifyUrl = WechatPayClient.notifyUrl(request.getNotifyHost(), WechatPayNotifyAction.TRANSCATION);

        logger.info("prepay jsapi out-trade-no {}", outTradeNo);
        var response = wechatPay.prepayWithRequestPayment(request.getAppId(),
                request.getPayerOpenId(),
                outTradeNo,
                WechatPayClient.currency(request.getAmount().getCurrency()),
                request.getAmount().getTotal(),
                request.getDescription(),
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

    WechatPayTradeResponse transaction2response(Transaction transaction) {
        return WechatPayTradeResponse.newBuilder()
                .setTradeState(transaction.getTradeState().name())
                .setTradeStateDesc(transaction.getTradeStateDesc())
                .build();
    }


    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayStorageService storageService;

    private WechatPayJsapiHelper wechatPay;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayJsapiHelper.class);
}
