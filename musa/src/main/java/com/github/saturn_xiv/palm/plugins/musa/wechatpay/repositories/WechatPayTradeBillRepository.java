package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TradeBill;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WechatPayTradeBillRepository extends CrudRepository<TradeBill, Integer> {
    TradeBill findById(int id);

    List<TradeBill> findByAppIdAndBillDateAndBillType(String appId, String billDate, TradeBill.BillType billType);

    List<TradeBill> findByAppId(String appId);

    List<TradeBill> findByBillDate(String billDate);

}
