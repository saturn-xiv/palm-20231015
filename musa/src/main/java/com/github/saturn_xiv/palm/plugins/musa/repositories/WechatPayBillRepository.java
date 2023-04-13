package com.github.saturn_xiv.palm.plugins.musa.repositories;

import com.github.saturn_xiv.palm.plugins.musa.models.WechatPayBill;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WechatPayBillRepository extends CrudRepository<WechatPayBill, Integer> {
    WechatPayBill findById(int id);

    List<WechatPayBill> findByOutTradeNo(String outTradeNo);
}
