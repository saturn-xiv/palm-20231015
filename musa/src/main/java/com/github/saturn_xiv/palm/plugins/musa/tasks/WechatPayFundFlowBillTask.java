package com.github.saturn_xiv.palm.plugins.musa.tasks;

import com.github.saturn_xiv.palm.plugins.musa.services.WechatPayBillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("palm.musa.task.wechat-pay.fund-flow-bill")
public class WechatPayFundFlowBillTask {
    @Scheduled(cron = "${app.tasks.wechatpay.fund-flow-bill}")
    public void execute() {
        logger.info("start wechat-pay download fnd flow bill");
    }

    @Autowired
    WechatPayBillService wechatPayBillService;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayFundFlowBillTask.class);
}
