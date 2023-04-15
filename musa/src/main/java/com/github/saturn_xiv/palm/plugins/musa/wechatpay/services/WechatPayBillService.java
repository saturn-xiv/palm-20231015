package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services;

import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.FundFlowBill;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TradeBill;

public interface WechatPayBillService {
    void addFundFlowBill(String billDate, WechatPayFundFlowBillRequest.AccountType accountType, WechatPayTarType tarType, byte[] content);

    void addTradeBill(String billDate, WechatPayTradeBillRequest.BillType billType, WechatPayTarType tarType, byte[] content);

    FundFlowBill getFundFlowBill(String billDate, WechatPayFundFlowBillRequest.AccountType accountType);

    TradeBill getTradeBill(String billDate, WechatPayTradeBillRequest.BillType billType);

    void addOrder(String appId, String payerOpenId, String outTradeNo, WechatPayPrepayRequest.Amount amount, String description);

    void addRefund(String outTradeNo, String outRefundNo, WechatPayCreateRefundRequest.Amount amount, String reason);


    void addNotification(com.wechat.pay.java.core.notification.Notification notification, String resource);
}
