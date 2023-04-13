package com.github.saturn_xiv.palm.plugins.musa.helpers.wechatpay;

import com.wechat.pay.java.core.exception.ServiceException;
import com.wechat.pay.java.service.payments.nativepay.NativePayService;
import com.wechat.pay.java.service.payments.nativepay.model.Amount;
import com.wechat.pay.java.service.payments.nativepay.model.CloseOrderRequest;
import com.wechat.pay.java.service.payments.nativepay.model.PrepayRequest;
import com.wechat.pay.java.service.payments.nativepay.model.QueryOrderByIdRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class WechatPayNativeHelper {
    public String prepayCodeUrl(String appId, String mchId, String description, String outTradeNo,
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


    public void closeOrder(String mchId, String outTradeNo) {
        final var request = new CloseOrderRequest();
        request.setMchid(mchId);
        request.setOutTradeNo(outTradeNo);
        service.closeOrder(request);
    }


    public WechatPayNativeHelper(NativePayService service) {
        this.service = service;
    }

    private final NativePayService service;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayNativeHelper.class);
}
