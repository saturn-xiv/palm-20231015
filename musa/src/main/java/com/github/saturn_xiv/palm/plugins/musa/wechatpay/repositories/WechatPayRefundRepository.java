package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.Refund;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("palm.musa.repository.wechat-pay.refund")
public interface WechatPayRefundRepository extends CrudRepository<Refund, Integer> {
    Refund findById(int id);

    Refund findByOutRefundNo(String outRefundNo);

    List<Refund> findAllByOutTradeNo(String outTradeNo);
}
