package com.github.saturn_xiv.palm.plugins.musa.helpers;

public interface WechatPayHelper {
    String getCodeUrl(String appId, String mchId, String description, String outTradeNo,
                      String amountCurrency, int amountTotal, String notifyUrl);

    String queryOrderById(String mchId, String transactionId);

    void closeOrder(String mchId, String outTradeNo);
}
