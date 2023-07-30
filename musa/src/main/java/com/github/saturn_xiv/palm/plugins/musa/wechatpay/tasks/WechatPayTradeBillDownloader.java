package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;


import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.wechat.pay.java.core.exception.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Duration;

@Component("palm.musa.task.wechat-pay.downloader.trade-bill")
public class WechatPayTradeBillDownloader {
    @Scheduled(cron = "${app.wechatpay.trade-bill.downloader-cron}")
    public void execute() throws InterruptedException {
        logger.info("start to download trade bills");
        for (var billDate : WechatPayClient.latestBillDates()) {
            for (var billType : WechatPayTradeBillRequest.BillType.values()) {
                if (billType == WechatPayTradeBillRequest.BillType.UNRECOGNIZED) {
                    continue;
                }
                logger.info("download wechat-pay trade bills ({},{})", billDate, billType);
                if (wechatPayStorageService.getTradeBill(billDate, billType) == null) {
                    try {
                        final var content = wechatPayClient.downloadTradeBill(billDate, WechatPayClient.billType(billType));
                        wechatPayStorageService.addTradeBill(billDate, billType, null, content);
                    } catch (ServiceException e) {
                        logger.error("{} {} {}", e.getHttpStatusCode(), e.getErrorCode(), e.getErrorMessage());
                    }
                }

                Thread.sleep(Duration.ofSeconds(5));
            }
        }
    }


    @Autowired
    WechatPayStorageService wechatPayStorageService;
    @Autowired
    WechatPayClient wechatPayClient;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayFundFlowBillDownloader.class);
}
