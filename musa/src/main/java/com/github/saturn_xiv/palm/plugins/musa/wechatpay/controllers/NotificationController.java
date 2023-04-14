package com.github.saturn_xiv.palm.plugins.musa.wechatpay.controllers;


import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController("palm.musa.controller.wechat-pay.notification")
@RequestMapping("/api/wechat-pay/notification")
public class NotificationController {
    @PostMapping("/refund")
    public String refund() {
        return "";
    }

    @PostMapping("/pay")
    public String pay() {
        return "";
    }

    @Resource
    WechatPayBillService billService;
}
