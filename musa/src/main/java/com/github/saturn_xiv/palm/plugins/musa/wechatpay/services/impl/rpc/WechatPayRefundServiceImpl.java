package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayRefundHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.wechat.pay.java.service.refund.model.Refund;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.service.rpc.wechat-pay.refund")
public class WechatPayRefundServiceImpl extends WechatPayRefundGrpc.WechatPayRefundImplBase {

    @Override
    public void create(WechatPayCreateRefundRequest request, StreamObserver<WechatPayRefundResponse> responseObserver) {
        final var outRefundNo = WechatPayClient.outNo(OutNoType.REFUND);
        final var notifyUrl = WechatPayClient.notifyUrl(request.getNotifyHost(), WechatPayNotifyAction.REFUND);
        final var currency = WechatPayClient.currency(request.getAmount().getCurrency());

        logger.info("create refund {}", outRefundNo);
        final var response = refundHelper.create(request.getOutTradeNo(), outRefundNo,
                request.getAmount().getRefund(), request.getAmount().getTotal(), currency,
                request.getReason(), notifyUrl);
        storageService.addRefund(request.getOutTradeNo(), outRefundNo, request.getAmount(), request.getReason());

        responseObserver.onNext(refund2response(response));
        responseObserver.onCompleted();
    }

    @Override
    public void query(WechatPayQueryRefundRequest request, StreamObserver<WechatPayRefundResponse> responseObserver) {
        logger.info("query refund out-refund-no {}", request.getOutRefundNo());
        final var response = refundHelper.queryByOutRefundNo(request.getOutRefundNo());

        responseObserver.onNext(refund2response(response));
        responseObserver.onCompleted();
    }

    @PostConstruct
    void startUp() {
        refundHelper = new WechatPayRefundHelper(client.refundService());
    }

    WechatPayRefundResponse refund2response(Refund refund) {
        return WechatPayRefundResponse.newBuilder()
                .setOutRefundNo(refund.getOutRefundNo())
                .setChannel(refund.getChannel().name())
                .setUserReceivedAccount(refund.getUserReceivedAccount())
                .setStatus(refund.getStatus().name())
                .setCreateTime(refund.getCreateTime())
                .build();
    }


    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayStorageService storageService;

    private WechatPayRefundHelper refundHelper;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayRefundServiceImpl.class);
}
