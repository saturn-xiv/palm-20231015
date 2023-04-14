package com.github.saturn_xiv.palm.plugins.musa.wechatpay.controllers;


import com.github.saturn_xiv.palm.plugins.musa.helpers.QueueHelper;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("palm.musa.controller.wechat-pay.notification")
@RequestMapping("/api/wechat-pay/notification")
public class NotificationController {
    @PostMapping("/refund")
    public String refund() {
        return "";
    }

    @PostMapping("/pay")
    public String pay() {
        var response = WechatPayNotificationTransactionResponse.newBuilder().build();
        queueHelper.publish(response);
        return "";
    }

    @Autowired
    WechatPayBillService billService;
    @Autowired
    QueueHelper queueHelper;
}
