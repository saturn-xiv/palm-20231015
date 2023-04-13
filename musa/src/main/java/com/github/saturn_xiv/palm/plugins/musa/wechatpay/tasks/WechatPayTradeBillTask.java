package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;


import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component("palm.musa.task.wechat-pay.trade-bill")
public class WechatPayTradeBillTask {
    @Scheduled(cron = "${app.tasks.wechatpay.trade-bill}")
    public void execute() {
        logger.info("start to download trade bill");
        final var body = wechatPayClient.downloadTradeBill(new Date());
    }


    @Autowired
    WechatPayBillService wechatPayBillService;
    @Autowired
    WechatPayClient wechatPayClient;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayFundFlowBillTask.class);
}
