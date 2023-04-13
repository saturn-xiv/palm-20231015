package com.github.saturn_xiv.palm.plugins.musa.services.impl;

import com.github.saturn_xiv.palm.plugins.musa.repositories.WechatPayBillRepository;
import com.github.saturn_xiv.palm.plugins.musa.services.WechatPayBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.wechat-pay.bill")
public class WechatPayBillServiceImpl implements WechatPayBillService {
    @Autowired
    WechatPayBillRepository repository;
}
