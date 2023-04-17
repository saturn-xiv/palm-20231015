package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import com.github.saturn_xiv.palm.plugins.musa.RabbitmqConfiguration;
import com.wechat.pay.java.service.payments.model.Transaction;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component("palm.musa.task.wechat-pay.receiver.notification.translation")
public class WechatPayTranslationNotificationReceiver extends WechatPayNotificationReceiver<Transaction> {
    public WechatPayTranslationNotificationReceiver(@Value("${app.loquat.clients}") String[] clients) {
        super(clients, Transaction.class);
    }

    @RabbitListener(queues = RabbitmqConfiguration.WECHAT_PAY_TRANSACTION)
    public void handleMessage(Message message) throws IOException {
        super.receiveMessage(message);
    }
}
