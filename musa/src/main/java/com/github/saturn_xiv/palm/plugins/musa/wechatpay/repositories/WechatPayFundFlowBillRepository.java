package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.FundFlowBill;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WechatPayFundFlowBillRepository extends CrudRepository<FundFlowBill, Integer> {
    FundFlowBill findById(int id);

    FundFlowBill findByBillDateAndAccountType(String buildDate, int accountType);

    List<FundFlowBill> findByAccountType(int accountType);

    List<FundFlowBill> findByBillDate(String buildDate);
}
