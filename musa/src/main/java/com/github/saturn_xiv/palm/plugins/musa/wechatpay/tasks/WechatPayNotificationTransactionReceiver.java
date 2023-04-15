package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("palm.musa.task.wechat-pay.receiver.transaction")
public class WechatPayNotificationTransactionReceiver {

    public void receiveMessage(Message message) {
        logger.info("handle message {}@{}", message.getMessageProperties().getMessageId(), message.getMessageProperties().getMessageId());
    }

    @Value("${app.loquat.clients}")
    String[] clients;
    @Autowired
    WechatPayStorageService storageService;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayNotificationTransactionReceiver.class);
}
