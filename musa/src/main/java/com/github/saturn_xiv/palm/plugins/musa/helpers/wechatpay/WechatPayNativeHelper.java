package com.github.saturn_xiv.palm.plugins.musa.helpers.wechatpay;

import com.wechat.pay.java.service.payments.model.Transaction;
import com.wechat.pay.java.service.payments.nativepay.NativePayService;
import com.wechat.pay.java.service.payments.nativepay.model.Amount;
import com.wechat.pay.java.service.payments.nativepay.model.CloseOrderRequest;
import com.wechat.pay.java.service.payments.nativepay.model.PrepayRequest;
import com.wechat.pay.java.service.payments.nativepay.model.QueryOrderByIdRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class WechatPayNativeHelper {
    public String prepay(String appId, String description, String outTradeNo,
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
        final var response = service.prepay(request);
        return response.getCodeUrl();
    }


    public Transaction queryOrderById(String transactionId) {
        final var request = new QueryOrderByIdRequest();
        request.setMchid(merchantId);
        request.setTransactionId(transactionId);
        return service.queryOrderById(request);
    }


    public void closeOrder(String outTradeNo) {
        final var request = new CloseOrderRequest();
        request.setMchid(merchantId);
        request.setOutTradeNo(outTradeNo);
        service.closeOrder(request);
    }


    public WechatPayNativeHelper(String merchantId, NativePayService service) {
        this.service = service;
        this.merchantId = merchantId;
    }

    private final NativePayService service;
    private final String merchantId;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeHelper.class);
}
