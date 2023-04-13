package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.FondFlowBill;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TradeBill;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WechatPayFondFlowBillRepository extends CrudRepository<FondFlowBill, Integer> {
    TradeBill findById(int id);

    FondFlowBill findByAppIdAndBillDateAndAccountType(String appId, String buildDate, FondFlowBill.AccountType accountType);

    List<FondFlowBill> findByAppId(String appId);

    List<FondFlowBill> findByBillDate(String buildDate);
}
