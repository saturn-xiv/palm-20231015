package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.Notification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository("palm.musa.repository.wechat-pay.notification")
public interface WechatPayNotificationRepository extends CrudRepository<Notification, Integer> {
    Notification findById(int id);

    long countByUid(String uid);

    List<Notification> findAllByUid(String uid);

    List<Notification> findAllByResourceType(String resourceType);

    List<Notification> findAllByEventType(String eventType);

    List<Notification> findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanEqual(Date start, Date end);
}
