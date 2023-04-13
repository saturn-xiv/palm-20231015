package com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers;

import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import com.wechat.pay.java.service.payments.jsapi.model.*;
import com.wechat.pay.java.service.payments.model.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class WechatPayJsapiHelper {


    public PrepayWithRequestPaymentResponse prepayWithRequestPayment(String appId, String payerOpenId, String outTradeNo,
                                                                     String amountCurrency, int amountTotal, String description, String notifyUrl) {

        final var amount = new Amount();
        amount.setTotal(amountTotal);
        amount.setCurrency(amountCurrency);

        final var payer = new Payer();
        payer.setOpenid(payerOpenId);

        final var request = new PrepayRequest();
        request.setPayer(payer);
        request.setAmount(amount);
        request.setAppid(appId);
        request.setMchid(merchantId);
        request.setDescription(description);
        request.setNotifyUrl(notifyUrl);
        request.setOutTradeNo(outTradeNo);

        return service.prepayWithRequestPayment(request);
    }


    public void closeOrder(String outTradeNo) {
        final var request = new CloseOrderRequest();
        request.setMchid(merchantId);
        request.setOutTradeNo(outTradeNo);
        service.closeOrder(request);
    }

    public Transaction queryOrderByOutTradeNo(String outTradeNo) {
        final var request = new QueryOrderByOutTradeNoRequest();
        request.setMchid(merchantId);
        request.setOutTradeNo(outTradeNo);
        return service.queryOrderByOutTradeNo(request);
    }

    public Transaction queryOrderById(String transactionId) {
        final var request = new QueryOrderByIdRequest();
        request.setMchid(merchantId);
        request.setTransactionId(transactionId);
        return service.queryOrderById(request);
    }

    public WechatPayJsapiHelper(String merchantId, JsapiServiceExtension service) {
        this.merchantId = merchantId;
        this.service = service;
    }

    private final JsapiServiceExtension service;
    private final String merchantId;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayJsapiHelper.class);
}
