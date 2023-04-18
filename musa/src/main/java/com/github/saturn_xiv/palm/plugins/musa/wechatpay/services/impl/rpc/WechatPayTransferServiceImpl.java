package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayTransferBatchHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.wechat.pay.java.service.transferbatch.model.TransferDetailInput;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component("palm.musa.service.rpc.wechat-pay.transfer")
public class WechatPayTransferServiceImpl extends WechatPayTransferGrpc.WechatPayTransferImplBase {
    @Override
    public void create(WechatPayCreateTransferRequest request, StreamObserver<WechatPayCreateTransferResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        List<WechatPayCreateTransferResponse.TransferDetail> transferDetailList = new ArrayList<>();
        List<TransferDetailInput> transferDetailInputList = new ArrayList<>();
        long totalAmount = 0;
        for (var it : request.getTransferDetailListList()) {

            final var outDetailsNo = WechatPayClient.outNo(OutNoType.BATCH_TRANSFER_DETAIL);

            totalAmount += it.getTransferAmount();
            {
                var tdi = new TransferDetailInput();
                tdi.setTransferAmount(it.getTransferAmount());
                tdi.setTransferRemark(it.getTransferRemark());
                tdi.setOutDetailNo(outDetailsNo);
                tdi.setOpenid(it.getOpenId());
                tdi.setUserName(it.getUserName());
                transferDetailInputList.add(tdi);
            }
            transferDetailList.add(WechatPayCreateTransferResponse.TransferDetail.newBuilder()
                    .setOpenId(it.getOpenId())
                    .setOutDetailNo(outDetailsNo)
                    .build());
        }

        final var response = transferBatchHelper.create(request.getAppId(), WechatPayClient.outNo(OutNoType.BATCH_TRANSFER),
                request.getBatch().getName(), request.getBatch().getRemark(),
                totalAmount, transferDetailInputList.size(), transferDetailInputList,
                request.getTransferSceneId());


        responseObserver.onNext(WechatPayCreateTransferResponse.newBuilder()
                .setOutBatchNo(response.getOutBatchNo())
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void query(WechatPayQueryTransferRequest request, StreamObserver<WechatPayQueryTransferResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        final var response = transferBatchHelper.query(
                request.getOutBatchNo(),
                request.getOffset(), request.getLimit(),
                WechatPayClient.batchTransferDetailStatus(request.getDetailStatus())
        );


        List<WechatPayQueryTransferResponse.TransferDetail> transferDetailList = new ArrayList<>();
        for (var it : response.getTransferDetailList()) {
            transferDetailList.add(
                    WechatPayQueryTransferResponse.TransferDetail.newBuilder()
                            .setOutDetailNo(it.getOutDetailNo())
                            .setDetailStatus(it.getDetailStatus())
                            .build()
            );
        }
        var tb = WechatPayQueryTransferResponse.TransferBatch.newBuilder()
                .setBatchStatus(response.getTransferBatch().getBatchStatus())
                .setBatchType(response.getTransferBatch().getBatchType());
        if (response.getTransferBatch().getCloseReason() != null) {
            tb.setCloseReason(response.getTransferBatch().getCloseReason().name());
        }

        responseObserver.onNext(WechatPayQueryTransferResponse.newBuilder()
                .setTransferBatch(tb.build())
                .addAllTransferDetailList(transferDetailList)
                .build());
        responseObserver.onCompleted();

    }

    @PostConstruct
    void startUp() {
        transferBatchHelper = new WechatPayTransferBatchHelper(client.transferBatchService());
    }

    @Autowired
    JwtHelper jwt;
    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayStorageService storageService;

    private WechatPayTransferBatchHelper transferBatchHelper;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayTransferServiceImpl.class);
}
