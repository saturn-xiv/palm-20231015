package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;


import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("palm.musa.task.wechat-pay.trade-bill")
public class WechatPayTradeBillTask {
    @Scheduled(cron = "${app.tasks.wechatpay.trade-bill}")
    public void execute() {
        logger.info("start to download trade bill");
        for (var billDate : WechatPayClient.latestBillDates()) {
            for (var billType : WechatPayTradeBillRequest.BillType.values()) {
                if (wechatPayBillService.getTradeBill(billDate, billType) == null) {
                    logger.info("fetch wechat pay trade bill {} {}", billDate, billType);
                    final var content = wechatPayClient.downloadTradeBill(billDate, WechatPayClient.billType(billType));
                    wechatPayBillService.addTradeBill(billDate, billType, null, content);
                }
            }
        }
    }


    @Autowired
    WechatPayBillService wechatPayBillService;
    @Autowired
    WechatPayClient wechatPayClient;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayFundFlowBillTask.class);
}
