package com.github.saturn_xiv.palm.plugins.musa.models;

import com.wechat.pay.java.core.RSAAutoCertificateConfig;
import com.wechat.pay.java.core.exception.ServiceException;
import com.wechat.pay.java.service.payments.nativepay.NativePayService;
import com.wechat.pay.java.service.payments.nativepay.model.Amount;
import com.wechat.pay.java.service.payments.nativepay.model.CloseOrderRequest;
import com.wechat.pay.java.service.payments.nativepay.model.PrepayRequest;
import com.wechat.pay.java.service.payments.nativepay.model.QueryOrderByIdRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.Serializable;
import java.nio.file.Paths;
import java.util.Properties;

public class WechatPayConfig implements Serializable {

    public String getCodeUrl(String appId, String mchId, String description, String outTradeNo,
                             String amountCurrency, int amountTotal, String notifyUrl) {
        var service = this.open();

        final var amount = new Amount();
        amount.setTotal(amountTotal);
        amount.setCurrency(amountCurrency);

        final var request = new PrepayRequest();
        request.setAmount(amount);
        request.setAppid(appId);
        request.setMchid(mchId);
        request.setDescription(description);
        request.setNotifyUrl(notifyUrl);
        request.setOutTradeNo(outTradeNo);
        final var response = service.prepay(request);
        return response.getCodeUrl();
    }


    public String queryOrderById(String mchId, String transactionId) {
        var service = this.open();

        final var request = new QueryOrderByIdRequest();
        request.setMchid(mchId);
        request.setTransactionId(transactionId);
        try {
            final var result = service.queryOrderById(request);
            return result.getTradeState().name();
        } catch (ServiceException e) {
            logger.error("code={} message={}", e.getErrorCode(), e.getErrorMessage(), e);
        }
        return null;
    }


    public void closeOrder(String mchId, String outTradeNo) {
        var service = this.open();

        final var request = new CloseOrderRequest();
        request.setMchid(mchId);
        request.setOutTradeNo(outTradeNo);
        service.closeOrder(request);
    }

    public WechatPayConfig(String project) throws IOException {
        var props = new Properties();
        try (var file = new FileInputStream(Paths.get("wechat-pay", (project + ".properties")).toFile())) {
            props.load(file);
        }
        this.merchantId = props.getProperty("wechat.merchant-id");
        this.privateKeyPath = props.getProperty("wechat.private-key-path");
        this.merchantSerialNumber = props.getProperty("wechat.merchant-serial-number");
        this.apiV3Key = props.getProperty("wechat.api-v3-key");

    }

    public NativePayService open() {
        var config = new RSAAutoCertificateConfig.Builder()
                .merchantId(merchantId)
                .privateKeyFromPath(privateKeyPath)
                .merchantSerialNumber(merchantSerialNumber)
                .apiV3Key(apiV3Key)
                .build();
        return new NativePayService.Builder().config(config).build();
    }


    final private String merchantId;
    final private String privateKeyPath;
    final private String merchantSerialNumber;
    final private String apiV3Key;

    private final static Logger logger = LoggerFactory.getLogger(WechatPayConfig.class);
}
