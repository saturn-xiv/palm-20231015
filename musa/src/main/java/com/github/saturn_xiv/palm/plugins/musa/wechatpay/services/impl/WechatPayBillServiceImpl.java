package com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.impl;

import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.FundFlowBill;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.Order;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.Refund;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TradeBill;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayFundFlowBillRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayOrderRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayRefundRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories.WechatPayTradeBillRepository;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component("palm.musa.service.wechat-pay.bill")
public class WechatPayBillServiceImpl implements WechatPayBillService {

    @Override
    public void addRefund(String outTradeNo, String outRefundNo, WechatPayCreateRefundRequest.Amount amount, String reason) {
        var it = new Refund();
        it.setOutRefundNo(outRefundNo);
        it.setOutTradeNo(outTradeNo);
        it.setAmountTotal(amount.getTotal());
        it.setAmountRefund(amount.getRefund());
        it.setAmountCurrency(amount.getCurrency().getNumber());
        it.setReason(reason);
        it.setCreatedAt(new Date());
        refundRepository.save(it);
    }

    @Override
    public void addOrder(String appId, String payerOpenId, String outTradeNo, WechatPayPrepayRequest.Amount amount, String description) {
        var it = new Order();
        it.setAppId(appId);
        it.setPayerOpenId(payerOpenId);
        it.setOutTradeNo(outTradeNo);
        it.setAmountTotal(amount.getTotal());
        it.setAmountCurrency(amount.getCurrency().getNumber());
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
    @Autowired
    WechatPayRefundRepository refundRepository;


}
