package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl.rpc;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.Error;
import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayTransferBatchHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.wechat.pay.java.core.exception.ServiceException;
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
    public void execute(WechatPayExecuteTransferRequest request,
                        StreamObserver<WechatPayExecuteTransferResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        List<WechatPayExecuteTransferResponse.Detail> transferDetailList = new ArrayList<>();
        List<TransferDetailInput> transferDetailInputList = new ArrayList<>();
        long totalAmount = 0;
        for (var it : request.getDetailsList()) {

            final var outDetailsNo = WechatPayClient.outNo(OutNoType.BATCH_TRANSFER_DETAIL);

            totalAmount += it.getAmount();
            {
                var tdi = new TransferDetailInput();
                tdi.setTransferAmount(it.getAmount());
                tdi.setTransferRemark(it.getRemark());
                tdi.setOutDetailNo(outDetailsNo);
                tdi.setOpenid(it.getOpenId());
                tdi.setUserName(it.getUsername());
                logger.debug("add detail ({},{}) {} {} {}",
                        it.getUsername(), it.getOpenId(), outDetailsNo, it.getAmount(), it.getRemark());
                transferDetailInputList.add(tdi);
            }
            transferDetailList.add(WechatPayExecuteTransferResponse.Detail.newBuilder()
                    .setOpenId(it.getOpenId())
                    .setOutDetailNo(outDetailsNo)
                    .build());
        }

        final var outTransferNo = request.getBatch().hasOutNo() ?
                request.getBatch().getOutNo() : WechatPayClient.outNo(OutNoType.BATCH_TRANSFER);
        logger.info("execute transfer {} for {} with amount {}",
                outTransferNo, request.getBatch().getName(), totalAmount);

        try {
            final var response = transferBatchHelper.create(request.getAppId(), outTransferNo,
                    request.getBatch().getName(), request.getBatch().getRemark(),
                    totalAmount, transferDetailInputList.size(), transferDetailInputList,
                    request.getSceneId());

            responseObserver.onNext(WechatPayExecuteTransferResponse.newBuilder()
                    .setOutBatchNo(response.getOutBatchNo())
                    .addAllDetails(transferDetailList)
                    .setSucceeded(
                            WechatPayExecuteTransferResponse.Succeeded.newBuilder()
                                    .setCreateTime(response.getCreateTime())
                                    .setBatchId(response.getBatchId())
                                    .build()
                    ).build());
        } catch (ServiceException e) {
            logger.error("{} {} {}", e.getHttpStatusCode(), e.getErrorCode(), e.getErrorMessage());
            responseObserver.onNext(WechatPayExecuteTransferResponse.newBuilder()
                    .setOutBatchNo(outTransferNo)
                    .addAllDetails(transferDetailList)
                    .setError(Error.newBuilder()
                            .setCode(e.getErrorCode())
                            .setMessage(e.getErrorMessage())
                            .build()
                    ).build());
        }
        responseObserver.onCompleted();
    }

    @Override
    public void query(WechatPayQueryTransferRequest request,
                      StreamObserver<WechatPayQueryTransferResponse> responseObserver) {
        jwt.verify(TokenServerInterceptor.TOKEN.get());

        logger.info("query transfer {} ({}, {})", request.getOutBatchNo(), request.getOffset(), request.getLimit());
        final var response = transferBatchHelper.query(
                request.getOutBatchNo(),
                request.getOffset(), request.getLimit(),
                WechatPayClient.batchTransferDetailStatus(request.getDetailStatus())
        );


        List<WechatPayQueryTransferResponse.Detail> transferDetailList = new ArrayList<>();
        for (var it : response.getTransferDetailList()) {
            transferDetailList.add(
                    WechatPayQueryTransferResponse.Detail.newBuilder()
                            .setOutDetailNo(it.getOutDetailNo())
                            .setStatus(it.getDetailStatus())
                            .build()
            );
        }
        var tb = WechatPayQueryTransferResponse.Batch.newBuilder()
                .setStatus(response.getTransferBatch().getBatchStatus())
                .setType(response.getTransferBatch().getBatchType());
        if (response.getTransferBatch().getCloseReason() != null) {
            tb.setCloseReason(response.getTransferBatch().getCloseReason().name());
        }

        responseObserver.onNext(WechatPayQueryTransferResponse.newBuilder()
                .setBatch(tb.build())
                .addAllDetails(transferDetailList)
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
