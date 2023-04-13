package com.github.saturn_xiv.palm.plugins.musa.helpers.wechatpay;

import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import com.wechat.pay.java.service.payments.jsapi.model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class WechatPayJsapiHelper {
    public PrepayWithRequestPaymentResponse prepay(String appId, String mchId, String description, String outTradeNo,
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
        return service.prepayWithRequestPayment(request);
    }


    public void closeOrder(String mchId, String outTradeNo) {
        final var request = new CloseOrderRequest();
        request.setMchid(mchId);
        request.setOutTradeNo(outTradeNo);
        service.closeOrder(request);
    }

    public void queryOrderById(String mchId, String transactionId) {
        final var request = new QueryOrderByIdRequest();
        request.setMchid(mchId);
        request.setTransactionId(transactionId);
        final var response = service.queryOrderById(request);
    }

    public WechatPayJsapiHelper(JsapiServiceExtension service) {
        this.service = service;
    }

    private final JsapiServiceExtension service;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayJsapiHelper.class);
}
