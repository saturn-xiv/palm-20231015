package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("palm.musa.task.wechat-pay.fund-flow-bill")
public class WechatPayFundFlowBillTask {
    @Scheduled(cron = "${app.tasks.wechatpay.fund-flow-bill}")
    public void execute() {
        logger.info("start wechat-pay download fund flow bill");
        for (var billDate : WechatPayClient.latestBillDates()) {
            for (var accountType : WechatPayFundFlowBillRequest.AccountType.values()) {
                if (wechatPayBillService.getFundFlowBill(billDate, accountType) == null) {
                    logger.info("fetch wechat pay fund flow bill  {} {}", billDate, accountType);
                    final var content = wechatPayClient.downloadTradeBill(billDate, WechatPayClient.accountType(accountType));
                    wechatPayBillService.addFundFlowBill(billDate, accountType, null, content);
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
