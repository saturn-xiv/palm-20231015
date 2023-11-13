package com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers;

import com.wechat.pay.java.service.transferbatch.TransferBatchService;
import com.wechat.pay.java.service.transferbatch.model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class WechatPayBatchTransferHelper {

    public InitiateBatchTransferResponse create(String appId, String outBatchNo,
                                                String batchName, String batchRemark,
                                                long totalAmount, int totalNum, List<TransferDetailInput> transferDetailList,
                                                String transferSceneId) {
        logger.info("create transfer batch ({},{})", appId, outBatchNo);
        final var request = new InitiateBatchTransferRequest();
        request.setAppid(appId);
        request.setOutBatchNo(outBatchNo);
        request.setBatchName(batchName);
        request.setBatchRemark(batchRemark);
        request.setTotalAmount(totalAmount);
        request.setTotalNum(totalNum);
        request.setTransferDetailList(transferDetailList);
        request.setTransferSceneId(transferSceneId);

        return transferBatchService.initiateBatchTransfer(request);
    }

    public TransferBatchEntity query(String outBatchNo, int offset, int limit, String detailsStatus) {
        logger.info("query transfer batch ({},[{},{}],{})", outBatchNo, offset, limit, detailsStatus);
        final var request = new GetTransferBatchByOutNoRequest();
        request.setOutBatchNo(outBatchNo);
        request.setNeedQueryDetail(true);
        request.setLimit(limit);
        request.setOffset(offset);
        request.setDetailStatus(detailsStatus);
        return transferBatchService.getTransferBatchByOutNo(request);
    }

    public TransferDetailEntity query(String outBatchNo, String outDetailNo) {
        logger.info("query transfer detail ({},{})", outBatchNo, outDetailNo);
        final var request = new GetTransferDetailByOutNoRequest();
        request.setOutBatchNo(outBatchNo);
        request.setOutDetailNo(outDetailNo);

        return transferBatchService.getTransferDetailByOutNo(request);
    }

    public WechatPayBatchTransferHelper(TransferBatchService transferBatchService) {
        this.transferBatchService = transferBatchService;
    }

    private TransferBatchService transferBatchService;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayBatchTransferHelper.class);
}
