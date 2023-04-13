package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayFundFlowBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTarType;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTradeBillRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.FundFlowBill;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.Order;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TradeBill;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayFundFlowBillRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayOrderRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayTradeBillRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component("palm.musa.service.wechat-pay.bill")
public class WechatPayBillServiceImpl implements WechatPayBillService {

    @Override
    public void addOrder(String appId, String payerOpenId, String outTradeNo, int amountTotal, WechatPayPrepayRequest.Amount.Currency amountCurrency, String description) {
        var it = new Order();
        it.setAppId(appId);
        it.setPayerOpenId(payerOpenId);
        it.setOutTradeNo(outTradeNo);
        it.setAmountTotal(amountTotal);
        it.setAmountCurrency(amountCurrency.getNumber());
        it.setDescription(description);
        it.setCreatedAt(new Date());
        orderRepository.save(it);
    }

    @Override
    public FundFlowBill getFundFlowBill(String billDate, WechatPayFundFlowBillRequest.AccountType accountType) {
        return fundFlowBillRepository.findByBillDateAndAccountType(billDate, accountType.getNumber());
    }

    @Override
    public TradeBill getTradeBill(String billDate, WechatPayTradeBillRequest.BillType billType) {
        return tradeBillRepository.findByBillDateAndBillType(billDate, billType.getNumber());
    }

    @Override
    public void addFundFlowBill(String billDate, WechatPayFundFlowBillRequest.AccountType accountType, WechatPayTarType tarType, byte[] content) {
        var it = new FundFlowBill();

        it.setBillDate(billDate);
        it.setAccountType(accountType.getNumber());
        it.setTarType(tarType.getNumber());
        it.setContent(content);
        it.setCreatedAt(new Date());
        fundFlowBillRepository.save(it);
    }

    @Override
    public void addTradeBill(String billDate, WechatPayTradeBillRequest.BillType billType, WechatPayTarType tarType, byte[] content) {
        var it = new TradeBill();
        it.setBillDate(billDate);
        it.setBillType(billType.getNumber());
        it.setTarType(tarType.getNumber());
        it.setContent(content);
        it.setCreatedAt(new Date());
        tradeBillRepository.save(it);
    }

    @Autowired
    WechatPayTradeBillRepository tradeBillRepository;
    @Autowired
    WechatPayFundFlowBillRepository fundFlowBillRepository;
    @Autowired
    WechatPayOrderRepository orderRepository;


}
