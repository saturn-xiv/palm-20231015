package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.FundFlowBill;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("palm.musa.repository.wechat-pay.fund-flow-bill")
public interface WechatPayFundFlowBillRepository extends CrudRepository<FundFlowBill, Integer> {
    FundFlowBill findById(int id);

    FundFlowBill findByBillDateAndAccountType(String buildDate, int accountType);

    List<FundFlowBill> findAllByAccountType(int accountType);

    List<FundFlowBill> findAllByBillDate(String buildDate);
}
