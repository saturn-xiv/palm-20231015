package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("palm.musa.repository.wechat-pay.order")
public interface WechatPayOrderRepository extends CrudRepository<Order, Integer> {
    Order findById(int id);

    List<Order> findAllByOutTradeNo(String outTradeNo);

    List<Order> findAllByAppId(String appId);

    List<Order> findAllByAppIdAndPayerOpenId(String appId, String payerOpenId);

}
