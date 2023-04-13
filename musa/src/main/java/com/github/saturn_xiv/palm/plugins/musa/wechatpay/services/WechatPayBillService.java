package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTarType;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.FundFlowBill;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TradeBill;

public interface WechatPayBillService {
    void addFundFlowBill(String billDate, WechatPayFundFlowBillRequest.AccountType accountType, WechatPayTarType tarType, byte[] content);

    void addTradeBill(String billDate, WechatPayTradeBillRequest.BillType billType, WechatPayTarType tarType, byte[] content);

    FundFlowBill getFundFlowBill(String billDate, WechatPayFundFlowBillRequest.AccountType accountType);

    TradeBill getTradeBill(String billDate, WechatPayTradeBillRequest.BillType billType);

    void addOrder(String appId, String payerOpenId, String outTradeNo, int amountTotal, WechatPayPrepayRequest.Amount.Currency amountCurrency, String description);

}
