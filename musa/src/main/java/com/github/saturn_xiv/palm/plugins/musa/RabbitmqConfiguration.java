package com.github.saturn_xiv.palm.plugins.musa;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationRefundResponse;
import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayNotificationTransactionResponse;
import org.springframework.amqp.core.Exchange;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitmqConfiguration {
    @Bean
    public Exchange createWechatPayNotificationRefundExchange() {
        final var name = WechatPayNotificationTransactionResponse.class.getCanonicalName();
        return new FanoutExchange(name, true, false);
    }

    @Bean
    public Exchange createWechatPayNotificationPayExchange() {
        final var name = WechatPayNotificationRefundResponse.class.getCanonicalName();
        return new FanoutExchange(name, true, false);
    }
}
