package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayQueryBatchTransferRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayBatchTransferHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers.WechatPayTransferReceiptHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayTransferBillReceiptRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayTransferDetailElectronicReceiptRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.wechat.pay.java.core.exception.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Component("palm.musa.task.wechat-pay.downloader.batch-transfer-receipt")
public class WechatPayBatchTransferReceiptDownloader {
    @Scheduled(cron = "${app.wechatpay.batch-transfer-receipt.downloader-cron}")
    public void execute() throws InterruptedException {
        logger.info("start download wechat-pay batch transfer receipts");

        var transferReceiptHelper = new WechatPayTransferReceiptHelper(this.client.httpClient());
        var batchTransferHelper = new WechatPayBatchTransferHelper(this.client.batchTransferService());
        for (var it : transferBillReceiptRepository.findAll()) {
            switch (it.getSignatureStatus()) {
                case PENDING -> this.accept(batchTransferHelper, transferReceiptHelper, it.getOutBatchNo());
            }


//                if (it.getSignatureStatus() != ReceiptSignatureStatus.FINISHED) {
//                    this.execute(batchTransferHelper, transferReceiptHelper, it.getOutBatchNo(), it.getSignatureStatus());
//                }
//            } catch (Exception e) {
//                logger.error("fetch {}", it.getOutBatchNo(), e);
//            }

            Thread.sleep(Duration.ofMinutes(5));
        }
    }

    private void accept(WechatPayBatchTransferHelper batchTransferHelper,
                        WechatPayTransferReceiptHelper transferReceiptHelper,
                        String outBatchNo) {
        List<String> details = new ArrayList<>();
        final int BATCH = 100;
        for (int i = 0; ; i++) {
            var response = batchTransferHelper.query(
                    outBatchNo,
                    i * BATCH, BATCH,
                    WechatPayClient.batchTransferDetailStatus(WechatPayQueryBatchTransferRequest.DetailStatus.SUCCESS));
            if (!"FINISHED".equals(response.getTransferBatch().getBatchStatus())) {
                logger.error("batch transfer {}({}) isn't finished yet.",
                        outBatchNo, response.getTransferBatch().getBatchStatus());
                return;
            }
            for (var it : response.getTransferDetailList()) {
                details.add(it.getOutDetailNo());
            }
            if (response.getTransferDetailList().size() <= BATCH) {
                break;
            }
        }
        try {
            transferReceiptHelper.requestTransferBillReceipt(outBatchNo);
        } catch (ServiceException e) {
            if (!"RESOURCE_ALREADY_EXISTS".equals(e.getErrorCode())) {
                throw e;
            }
        }

        for (var detail : details) {
            try {
                transferReceiptHelper.requestTransferElectronicReceipt(
                        WechatPayClient.transferDetailElectronicReceiptAcceptType(
                                WechatPayTransferGetElectronicReceiptRequest.AcceptType.BATCH_TRANSFER),
                        outBatchNo, detail);
            } catch (ServiceException e) {
                if (!"RESOURCE_ALREADY_EXISTS".equals(e.getErrorCode())) {
                    throw e;
                }
            }
        }

        storageService.acceptBatchTransferReceipts(outBatchNo, details.toArray(new String[0]));
    }

    private void finishBatch(WechatPayTransferReceiptHelper transferReceiptHelper,
                             String outBatchNo) {
        final var response = transferReceiptHelper.queryTransferBillReceipt(outBatchNo);
        if (!"FINISHED".equals(response.getSignatureStatus())) {
            logger.error("batch receipt  {}({}) isn't finish yet", outBatchNo, response.getSignatureStatus());
            return;
        }
        final var content = client.downloadBill(response.toBillDownloadResponse());
        storageService.finishBatchTransferReceipt(response.getOutBatchNo(), content);
    }

    private void finishDetail(WechatPayTransferReceiptHelper transferReceiptHelper,
                              String outBatchNo,
                              String outDetailNo) {
        final var response = transferReceiptHelper.requestTransferElectronicReceipt(
                WechatPayClient.transferDetailElectronicReceiptAcceptType(
                        WechatPayTransferGetElectronicReceiptRequest.AcceptType.BATCH_TRANSFER),
                outBatchNo, outDetailNo);
        if (!"FINISHED".equals(response.getSignatureStatus())) {
            logger.error("detail receipt  [{},{}]({}) isn't finish yet", outBatchNo, outDetailNo, response.getSignatureStatus());
            return;
        }
        final var content = client.downloadBill(response.toBillDownloadResponse());
        storageService.finishDetailElectronicReceipt(
                response.getAcceptType(), response.getOutBatchNo(), response.getOutDetailNo(), content);
    }

    @Autowired
    WechatPayStorageService storageService;
    @Autowired
    WechatPayClient client;
    @Autowired
    WechatPayTransferBillReceiptRepository transferBillReceiptRepository;
    @Autowired
    WechatPayTransferDetailElectronicReceiptRepository transferDetailElectronicReceiptRepository;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayBatchTransferReceiptDownloader.class);
}
