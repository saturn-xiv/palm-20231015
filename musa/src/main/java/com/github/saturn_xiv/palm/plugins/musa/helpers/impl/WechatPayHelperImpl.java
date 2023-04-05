package com.github.saturn_xiv.palm.plugins.musa.helpers.impl;

import com.github.saturn_xiv.palm.plugins.musa.helpers.WechatPayHelper;
import com.wechat.pay.java.core.RSAAutoCertificateConfig;
import com.wechat.pay.java.core.exception.ServiceException;
import com.wechat.pay.java.service.payments.nativepay.NativePayService;
import com.wechat.pay.java.service.payments.nativepay.model.Amount;
import com.wechat.pay.java.service.payments.nativepay.model.CloseOrderRequest;
import com.wechat.pay.java.service.payments.nativepay.model.PrepayRequest;
import com.wechat.pay.java.service.payments.nativepay.model.QueryOrderByIdRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.helper.wechat-pay")
public class WechatPayHelperImpl implements WechatPayHelper {

    @Override
    public String getCodeUrl(String appId, String mchId, String description, String outTradeNo,
                             String amountCurrency, int amountTotal, String notifyUrl) {
        final var amount = new Amount();
        amount.setTotal(amountTotal);
        amount.setCurrency(amountCurrency);

        final var request = new PrepayRequest();
        request.setAmount(amount);
        request.setAppid(appId);
        request.setMchid(mchId);
        request.setDescription(description);
        request.setNotifyUrl(notifyUrl);
        request.setOutTradeNo(outTradeNo);
        final var response = service.prepay(request);
        return response.getCodeUrl();
    }

    @Override
    public String queryOrderById(String mchId, String transactionId) {
        final var request = new QueryOrderByIdRequest();
        request.setMchid(mchId);
        request.setTransactionId(transactionId);
        try {
            final var result = service.queryOrderById(request);
            return result.getTradeState().name();
        } catch (ServiceException e) {
            logger.error("code={} message={}", e.getErrorCode(), e.getErrorMessage(), e);
        }
        return null;
    }

    @Override
    public void closeOrder(String mchId, String outTradeNo) {
        final var request = new CloseOrderRequest();
        request.setMchid(mchId);
        request.setOutTradeNo(outTradeNo);
        service.closeOrder(request);
    }

    @PostConstruct
    void startUp() {
        var config = new RSAAutoCertificateConfig.Builder()
                .merchantId(merchantId)
                .privateKeyFromPath(privateKeyPath)
                .merchantSerialNumber(merchantSerialNumber)
                .apiV3Key(apiV3Key)
                .build();
        service = new NativePayService.Builder().config(config).build();
    }

    @Value("${app.wechat.merchant-id}")
    String merchantId;
    @Value("${app.wechat.private-key-path}")
    String privateKeyPath;
    @Value("${app.wechat.merchant-serial-number}")
    String merchantSerialNumber;
    @Value("${app.wechat.api-v3-key}")
    String apiV3Key;

    private NativePayService service;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayHelperImpl.class);
}
