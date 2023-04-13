package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayFondFlowBillRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayTradeBillRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.wechat-pay.bill")
public class WechatPayBillServiceImpl implements WechatPayBillService {
    @Autowired
    WechatPayTradeBillRepository tradeBillRepository;
    @Autowired
    WechatPayFondFlowBillRepository fondFlowBillRepository;
}
