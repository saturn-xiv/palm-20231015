package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNativeQrCodeUrlResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotifyAction;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayNativeHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.rpc.wechat-pay.native")
public class WechatPayNativeServiceImpl extends WechatPayNativeGrpc.WechatPayNativeImplBase {
    @Override
    public void prepay(WechatPayPrepayRequest request,
                       StreamObserver<WechatPayNativeQrCodeUrlResponse> responseObserver) {
        final var outTradeNo = WechatPayClient.outNo(OutNoType.TRADE);
        final var notifyUrl = WechatPayClient.notifyUrl(request.getNotifyHost(), WechatPayNotifyAction.TRANSCATION);

        logger.info("prepay native out-trade-no {}", outTradeNo);
        var currency = WechatPayClient.currency(request.getAmount().getCurrency());
        var url = wechatPay.prepay(request.getAppId(),
                request.getDescription(),
                outTradeNo,
                currency, request.getAmount().getTotal(),
                notifyUrl);
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
    WechatPayClient client;
    @Autowired
    WechatPayStorageService storageService;

    private WechatPayNativeHelper wechatPay;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeServiceImpl.class);

}
