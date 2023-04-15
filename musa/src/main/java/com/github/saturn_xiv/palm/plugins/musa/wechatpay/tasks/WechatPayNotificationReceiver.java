package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;

import java.io.IOException;
import java.sql.SQLException;


public class WechatPayNotificationReceiver<T> {
    public WechatPayNotificationReceiver(String[] clients, Class<T> clazz) {
        this.clients = clients;
        this.clazz = clazz;
    }

    public void receiveMessage(Message message) throws IOException, SQLException {
        logger.info("handle message {}@{}", message.getMessageProperties().getMessageId(), message.getMessageProperties().getMessageId());
        var gson = new Gson();
        final var context = gson.fromJson(new String(message.getBody()), clazz);

        for (var client : clients) {
            var handler = new WechatPayNotificationHandler(client);
            handler.execute(context);
        }
    }


    private final String[] clients;
    private final Class<T> clazz;


    private final static Logger logger = LoggerFactory.getLogger(WechatPayNotificationReceiver.class);
}
