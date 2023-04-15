package com.github.saturn_xiv.palm.plugins.musa;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks.WechatPayNotificationReceiver;
import com.wechat.pay.java.service.payments.model.Transaction;
import com.wechat.pay.java.service.refund.model.RefundNotification;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitmqConfiguration {
    @Bean(name = "palm.musa.rabbitmq.exchange.wechat-pay.refund")
    Exchange wechatPayNotificationRefundExchange() {
        return new FanoutExchange(WECHAT_PAY_REFUND, true, false);
    }

    @Bean(name = "palm.musa.rabbitmq.exchange.wechat-pay.transaction")
    Exchange wechatPayNotificationTransactionExchange() {
        return new FanoutExchange(WECHAT_PAY_TRANSACTION, true, false);
    }

    @Bean(name = "palm.musa.rabbitmq.queue.wechat-pay.refund")
    Queue wechatPayNotificationRefundQueue() {
        return new Queue(WECHAT_PAY_REFUND, true, false, false);
    }

    @Bean(name = "palm.musa.rabbitmq.queue.wechat-pay.transaction")
    Queue wechatPayNotificationTransactionQueue() {
        return new Queue(WECHAT_PAY_TRANSACTION, true, false, false);
    }

    @Bean(name = "palm.musa.rabbitmq.binding.wechat-pay.refund")
    Binding wechatPayNotificationRefundBinding(
            @Qualifier("palm.musa.rabbitmq.queue.wechat-pay.refund") Queue queue,
            @Qualifier("palm.musa.rabbitmq.exchange.wechat-pay.refund") FanoutExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange);
    }

    @Bean(name = "palm.musa.rabbitmq.binding.wechat-pay.transaction")
    Binding wechatPayNotificationTransactionBinding(
            @Qualifier("palm.musa.rabbitmq.queue.wechat-pay.transaction") Queue queue,
            @Qualifier("palm.musa.rabbitmq.exchange.wechat-pay.transaction") FanoutExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange);
    }


    @Bean(name = "palm.musa.rabbitmq.message-listener.wechat-pay.transaction")
    MessageListenerAdapter wechatPayNotificationTransactionListener() {
        return new MessageListenerAdapter(
                new WechatPayNotificationReceiver<>(clients, Transaction.class, "wechat-pay-transaction"),
                "receiveMessage"
        );
    }

    @Bean(name = "palm.musa.rabbitmq.message-listener.wechat-pay.refund")
    MessageListenerAdapter wechatPayNotificationRefundListener() {
        return new MessageListenerAdapter(
                new WechatPayNotificationReceiver<>(clients, RefundNotification.class, "wechat-pay-refund"),
                "receiveMessage"
        );
    }

    @Bean(name = "palm.musa.rabbitmq.message-listener-container.wechat-pay.refund")
    SimpleMessageListenerContainer wechatPayMessageNotificationRefundListenerContainer(
            ConnectionFactory connectionFactory,
            @Qualifier("palm.musa.rabbitmq.message-listener.wechat-pay.refund") MessageListenerAdapter listenerAdapter

    ) {
        var container = new SimpleMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.setQueueNames(WECHAT_PAY_REFUND);
        container.setMessageListener(listenerAdapter);
        return container;
    }

    @Bean(name = "palm.musa.rabbitmq.message-listener-container.wechat-pay.transaction")
    SimpleMessageListenerContainer wechatPayMessageNotificationTransactionListenerContainer(
            ConnectionFactory connectionFactory,
            @Qualifier("palm.musa.rabbitmq.message-listener.wechat-pay.transaction") MessageListenerAdapter listenerAdapter

    ) {
        var container = new SimpleMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.setQueueNames(WECHAT_PAY_TRANSACTION);
        container.setMessageListener(listenerAdapter);
        return container;
    }

    @Value("${app.loquat.clients}")
    String[] clients;

    public final static String WECHAT_PAY_TRANSACTION = "wechat-pay.transaction";
    public final static String WECHAT_PAY_REFUND = "wechat-pay.refund";
}
