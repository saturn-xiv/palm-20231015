package com.github.saturn_xiv.palm.plugins.musa;

import org.springframework.amqp.core.*;
import org.springframework.beans.factory.annotation.Qualifier;
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


    public final static String WECHAT_PAY_TRANSACTION = "wechat-pay.transaction";
    public final static String WECHAT_PAY_REFUND = "wechat-pay.refund";
}
