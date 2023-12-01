package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillGrpc;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.google.protobuf.ByteString;
import com.google.rpc.Code;
import com.google.rpc.Status;
import io.grpc.protobuf.StatusProto;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.rpc.wechat-pay.bill")
public class WechatPayBillServiceImpl extends WechatPayBillGrpc.WechatPayBillImplBase {
    @Override
    public void trade(WechatPayTradeBillRequest request, StreamObserver<WechatPayBillResponse> responseObserver) {
        final var billDate = WechatPayClient.billDate(request.getBillDate());
        var it = storageService.getTradeBill(billDate, request.getBillType());
        byte[] content;
        if (it == null) {
            if (!WechatPayClient.canDownload(request.getBillDate())) {
                logger.error("invalid bill date {}", billDate);
                responseObserver.onError(StatusProto.toStatusRuntimeException(
                        Status.newBuilder().setCode(Code.INVALID_ARGUMENT.getNumber()).build()
                ));
                return;
            }
            content = client.downloadTradeBill(billDate, WechatPayClient.billType(request.getBillType()));
            storageService.addTradeBill(billDate, request.getBillType(), null, content);
        } else {
            content = it.getContent();
        }

        responseObserver.onNext(WechatPayBillResponse.newBuilder().setContent(ByteString.copyFrom(content)).build());
        responseObserver.onCompleted();
    }

    @Override
    public void fundFlow(WechatPayFundFlowBillRequest request,
                         StreamObserver<WechatPayBillResponse> responseObserver) {
        final var billDate = WechatPayClient.billDate(request.getBillDate());
        var it = storageService.getFundFlowBill(billDate, request.getAccountType());
        byte[] content;
        if (it == null) {
            logger.info("download fund-flow bill {}@{}", request.getBillDate(), request.getAccountType());
            if (!WechatPayClient.canDownload(request.getBillDate())) {
                logger.error("invalid bill date {}", billDate);
                responseObserver.onError(StatusProto.toStatusRuntimeException(
                        Status.newBuilder().setCode(Code.INVALID_ARGUMENT.getNumber()).build()
                ));
                return;
            }
            content = client.downloadFundFlowBill(billDate, WechatPayClient.accountType(request.getAccountType()));
            storageService.addFundFlowBill(billDate, request.getAccountType(), null, content);

        } else {
            content = it.getContent();
        }
        responseObserver.onNext(WechatPayBillResponse.newBuilder().setContent(ByteString.copyFrom(content)).build());
        responseObserver.onCompleted();
    }


    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayStorageService storageService;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeServiceImpl.class);
}
