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

//    https://www.rabbitmq.com/tutorials/tutorial-three-python.html
//    https://www.rabbitmq.com/tutorials/tutorial-two-python.html
@Component("palm.musa.helper.queue")
public class QueueHelper {

    public <T extends GeneratedMessageV3> void publish(T message) {
        publish(message.getClass().getCanonicalName(), MediaType.APPLICATION_PROTOBUF, message.toByteArray());
    }

    public <T extends GeneratedMessageV3> void produce(T message) {
        produce(message.getClass().getCanonicalName(), MediaType.APPLICATION_PROTOBUF, message.toByteArray());
    }

    public void publish(String exchange, MediaType contentType, byte[] body) {
        send(exchange, "", contentType, body);
    }

    public void produce(String routingKey, MediaType contentType, byte[] body) {
        send("", routingKey, contentType, body);
    }

    private void send(String exchange, String routingKey, MediaType contentType, byte[] body) {
        final var id = UUID.randomUUID();
        final var msg = MessageBuilder.withBody(body)
                .setContentType(contentType.toString())
                .setMessageId(id.toString())
                .setTimestamp(new Date()).build();
        logger.info("send message({}, {})@({}, {})", id, contentType, exchange, routingKey);
        rabbitTemplate.convertAndSend(exchange, routingKey, msg);
    }

    @Autowired
    RabbitTemplate rabbitTemplate;
    private final static Logger logger = LoggerFactory.getLogger(QueueHelper.class);
}
