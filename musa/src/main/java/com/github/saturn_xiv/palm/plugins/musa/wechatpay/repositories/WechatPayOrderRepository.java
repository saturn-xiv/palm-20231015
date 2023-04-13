package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WechatPayOrderRepository extends CrudRepository<Order, Integer> {
    Order findById(int id);

    Order findByOutTradeNo(String outTradeNo);

    List<Order> findByAppId(String appId);

    List<Order> findByAppIdAndPayerOpenId(String appId, String payerOpenId);

}
