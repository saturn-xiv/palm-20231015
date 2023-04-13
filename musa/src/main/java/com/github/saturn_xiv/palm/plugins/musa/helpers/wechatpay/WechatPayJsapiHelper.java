package com.github.saturn_xiv.palm.plugins.musa.helpers.wechatpay;

import com.wechat.pay.java.core.http.DefaultHttpClientBuilder;
import com.wechat.pay.java.core.http.HttpMethod;
import com.wechat.pay.java.core.http.HttpRequest;
import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import com.wechat.pay.java.service.payments.jsapi.model.*;
import com.wechat.pay.java.service.payments.model.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.util.UriComponentsBuilder;

import java.text.SimpleDateFormat;
import java.util.Date;

public class WechatPayJsapiHelper {
    public void downloadTradeBill(Date date) {
        final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        final var url = UriComponentsBuilder.fromUriString("https://api.mch.weixin.qq.com/v3/bill/tradebill")
                .queryParam("bill_date", format.format(date))
                .build().toUriString();

        var client = new DefaultHttpClientBuilder().build();


        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.GET)
                .url(url)
                .build();
//        TODO

    }

    public PrepayWithRequestPaymentResponse prepayWithRequestPayment(String appId, String description, String outTradeNo,
                                                                     String amountCurrency, int amountTotal, String notifyUrl) {

        final var amount = new Amount();
        amount.setTotal(amountTotal);
        amount.setCurrency(amountCurrency);

        final var request = new PrepayRequest();
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
