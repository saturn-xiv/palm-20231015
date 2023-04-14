package com.github.saturn_xiv.palm.plugins.musa;

import org.springframework.amqp.core.Exchange;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitmqConfiguration {
    @Bean
    public Exchange createWechatPayNotificationRefundExchange() {
        return new FanoutExchange(WECHAT_PAY_TRANSACTION, true, false);
    }

    @Bean
    public Exchange createWechatPayNotificationPayExchange() {

        return new FanoutExchange(WECHAT_PAY_REFUND, true, false);
    }

    public final static String WECHAT_PAY_TRANSACTION = "wechat-pay.transaction";
    public final static String WECHAT_PAY_REFUND = "wechat-pay.refund";
}
