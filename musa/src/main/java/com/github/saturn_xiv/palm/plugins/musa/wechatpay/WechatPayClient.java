package com.github.saturn_xiv.palm.plugins.musa.wechatpay;

import com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayPrepayRequest;
import com.wechat.pay.java.core.RSAAutoCertificateConfig;
import com.wechat.pay.java.core.RSAConfig;
import com.wechat.pay.java.core.http.DefaultHttpClientBuilder;
import com.wechat.pay.java.core.http.HttpMethod;
import com.wechat.pay.java.core.http.HttpRequest;
import com.wechat.pay.java.core.notification.NotificationParser;
import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import com.wechat.pay.java.service.payments.nativepay.NativePayService;
import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.PostConstruct;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component("palm.musa.model.wechatpay")
public class WechatPayClient {
    public String downloadFundFlowBill(Date date) {

        final var url = UriComponentsBuilder.fromUriString("https://api.mch.weixin.qq.com/v3/bill/fundflowbill")
                .queryParam("bill_date", billDate(date))
                .build().toUriString();

        var client = new DefaultHttpClientBuilder().build();


        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.GET)
                .url(url)
                .build();
//        TODO
        return null;
    }

    public String downloadTradeBill(Date date) {

        final var url = UriComponentsBuilder.fromUriString("https://api.mch.weixin.qq.com/v3/bill/tradebill")
                .queryParam("bill_date", billDate(date))
                .build().toUriString();

        var client = new DefaultHttpClientBuilder().build();


        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.GET)
                .url(url)
                .build();
//        TODO
        return null;
    }

    public static String billDate(Date date) {
        final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        return format.format(date);
    }

    public static String currency(WechatPayPrepayRequest.Amount.Currency currency) {
        switch (currency) {
            default:
                return "CNY";
        }
    }


    public static String outTradeNo() {
        return dateFormat.format(new Date()) + RandomStringUtils.randomAlphabetic(15).toUpperCase();
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

    final static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");

    private final static Logger logger = LoggerFactory.getLogger(WechatPayClient.class);

    public String getMerchantId() {
        return merchantId;
    }
}
