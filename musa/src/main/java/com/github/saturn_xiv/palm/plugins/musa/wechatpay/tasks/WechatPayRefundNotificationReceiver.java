package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import com.github.saturn_xiv.palm.plugins.musa.RabbitmqConfiguration;
import com.wechat.pay.java.service.refund.model.RefundNotification;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component("palm.musa.task.wechat-pay.receiver.notification.refund")
public class WechatPayRefundNotificationReceiver extends WechatPayNotificationReceiver<RefundNotification> {
    public WechatPayRefundNotificationReceiver(@Value("${app.wechatpay.merchant-id}") String merchantId,
                                               @Value("${app.loquat.clients}") String[] clients) {
        super(merchantId, clients, RefundNotification.class);
    }

    @RabbitListener(queues = RabbitmqConfiguration.WECHAT_PAY_REFUND)
    public void handleMessage(Message message) throws IOException {
        super.receiveMessage(message);
    }
}
