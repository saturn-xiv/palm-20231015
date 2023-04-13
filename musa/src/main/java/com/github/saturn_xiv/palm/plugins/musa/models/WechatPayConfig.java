package com.github.saturn_xiv.palm.plugins.musa.models;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import com.wechat.pay.java.core.RSAAutoCertificateConfig;
import com.wechat.pay.java.core.RSAConfig;
import com.wechat.pay.java.core.notification.NotificationParser;
import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import com.wechat.pay.java.service.payments.nativepay.NativePayService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component("palm.musa.model.wechatpay")
public class WechatPayConfig {

    public static String currency(WechatPayPrepayRequest.Amount.Currency currency) {
        switch (currency) {
            default:
                return "CNY";
        }
    }

    public JsapiServiceExtension jsapiService() {
        return new JsapiServiceExtension.Builder().config(config).signType("RSA").build();
    }

    public NativePayService nativePayService() {
        return new NativePayService.Builder().config(config).build();
    }

    public NotificationParser notificationParser() {
        return new NotificationParser(config);
    }

    @PostConstruct
    void startUp() {
        config = new RSAAutoCertificateConfig.Builder()
                .merchantId(merchantId)
                .privateKeyFromPath(privateKeyPath)
                .merchantSerialNumber(merchantSerialNumber)
                .apiV3Key(apiV3Key)
                .build();
    }

    private RSAConfig open() {
        return new RSAConfig.Builder()
                .merchantId(merchantId)
                .privateKeyFromPath(privateKeyPath)
                .merchantSerialNumber(merchantSerialNumber)
                .wechatPayCertificatesFromPath(certificatePath)
                .build();
    }


    @Value("${app.wechatpay.merchant-id}")
    String merchantId;
    @Value("${app.wechatpay.private-key-path}")
    String privateKeyPath;
    @Value("${app.wechatpay.certificate-path}")
    String certificatePath;
    @Value("${app.wechatpay.merchant-serial-number}")
    String merchantSerialNumber;
    @Value("${app.wechatpay.api-v3-key}")
    String apiV3Key;

    private RSAAutoCertificateConfig config;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayConfig.class);

    public String getMerchantId() {
        return merchantId;
    }
}
