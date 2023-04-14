package com.github.saturn_xiv.palm.plugins.musa.helpers;

import com.google.protobuf.GeneratedMessageV3;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.MessageBuilder;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component("palm.musa.helper.queue")
public class QueueHelper {
    //    https://www.rabbitmq.com/tutorials/tutorial-three-python.html
    public <T extends GeneratedMessageV3> void publish(T message) {
        send(message.getClass().getCanonicalName(), "", message);
    }

    //    https://www.rabbitmq.com/tutorials/tutorial-two-python.html
    public <T extends GeneratedMessageV3> void produce(T message) {
        send("", message.getClass().getCanonicalName(), message);
    }

    private <T extends GeneratedMessageV3> void send(String exchange, String routingKey, T message) {
        final var id = UUID.randomUUID().toString();
        final var msg = MessageBuilder.withBody(message.toByteArray())
                .setContentType(MediaType.APPLICATION_PROTOBUF.toString())
                .setMessageId(id)
                .setTimestamp(new Date()).build();
        logger.info("send message({}) to ({}, {})", id, exchange, routingKey);
        rabbitTemplate.convertAndSend(exchange, routingKey, msg);
    }

    @Autowired
    RabbitTemplate rabbitTemplate;
    private final static Logger logger = LoggerFactory.getLogger(QueueHelper.class);
}
