package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TradeBill;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WechatPayTradeBillRepository extends CrudRepository<TradeBill, Integer> {
    TradeBill findById(int id);

    TradeBill findByBillDateAndBillType(String billDate, int billType);

    List<TradeBill> findByBillType(int billType);

    List<TradeBill> findByBillDate(String billDate);

}
