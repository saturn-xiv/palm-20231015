package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayRefundHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
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
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var outRefundNo = WechatPayClient.outNo(OutNoType.REFUND);
        final var notifyUrl = WechatPayClient.notifyUrl(request.getNotifyHost(), WechatPayNotifyAction.REFUND);
        final var currency = WechatPayClient.currency(request.getAmount().getCurrency());
        final var response = refundHelper.create(request.getOutTradeNo(), outRefundNo,
                request.getAmount().getRefund(), request.getAmount().getTotal(), currency,
                request.getReason(), notifyUrl);
        billService.addRefund(request.getOutTradeNo(), outRefundNo, request.getAmount(), request.getReason());

//        TODO
        responseObserver.onNext(WechatPayRefundResponse.newBuilder()
                .setOutRefundNo(response.getOutRefundNo())
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void query(WechatPayQueryRefundResponse request, StreamObserver<WechatPayRefundResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var response = refundHelper.queryByOutRefundNo(request.getOutRefundNo());
//        TODO
        responseObserver.onNext(WechatPayRefundResponse.newBuilder()
                .setOutRefundNo(response.getOutRefundNo())
                .build());
        responseObserver.onCompleted();
    }

    @PostConstruct
    void startUp() {
        refundHelper = new WechatPayRefundHelper(client.refundService());
    }


    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayBillService billService;

    private WechatPayRefundHelper refundHelper;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayRefundServiceImpl.class);
}
