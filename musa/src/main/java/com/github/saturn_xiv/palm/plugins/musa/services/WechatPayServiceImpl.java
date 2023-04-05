package com.github.saturn_xiv.palm.plugins.musa.services;

import com.github.saturn_xiv.palm.plugins.musa.helpers.WechatPayHelper;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayGrpc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.wechat-pay")
public class WechatPayServiceImpl extends WechatPayGrpc.WechatPayImplBase {
    @Autowired
    WechatPayHelper wechatPayHelper;
}
