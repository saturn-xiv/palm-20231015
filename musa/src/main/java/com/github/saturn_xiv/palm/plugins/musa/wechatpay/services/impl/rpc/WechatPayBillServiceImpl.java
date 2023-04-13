package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import com.google.protobuf.ByteString;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.rpc.wechat-pay.bill")
public class WechatPayBillServiceImpl extends WechatPayBillGrpc.WechatPayBillImplBase {
    @Override
    public void trade(WechatPayTradeBillRequest request, StreamObserver<WechatPayBillResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        var it = billService.getTradeBill(request.getBillDate(), request.getBillType());
        byte[] content;
        if (it == null) {
            content = client.downloadTradeBill(request.getBillDate(), WechatPayClient.billType(request.getBillType()));
            billService.addTradeBill(request.getBillDate(), request.getBillType(), null, content);

        } else {
            content = it.getContent();
        }

        responseObserver.onNext(WechatPayBillResponse.newBuilder().setContent(ByteString.copyFrom(content)).build());
        responseObserver.onCompleted();
    }

    @Override
    public void fundFlow(WechatPayFundFlowBillRequest request, StreamObserver<WechatPayBillResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        var it = billService.getFundFlowBill(request.getBillDate(), request.getAccountType());
        byte[] content;
        if (it == null) {
            content = client.downloadFundFlowBill(request.getBillDate(), WechatPayClient.accountType(request.getAccountType()));
            billService.addFundFlowBill(request.getBillDate(), request.getAccountType(), null, content);

        } else {
            content = it.getContent();
        }
        responseObserver.onNext(WechatPayBillResponse.newBuilder().setContent(ByteString.copyFrom(content)).build());
        responseObserver.onCompleted();
    }

    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayBillService billService;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeServiceImpl.class);
}
