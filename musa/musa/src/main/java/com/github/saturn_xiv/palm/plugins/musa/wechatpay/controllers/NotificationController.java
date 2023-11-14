package com.github.saturn_xiv.palm.plugins.musa.wechatpay.controllers;


import com.github.saturn_xiv.palm.plugins.musa.RabbitmqConfiguration;
import com.github.saturn_xiv.palm.plugins.musa.helpers.QueueHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.NotificationResponse;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayStorageService;
import com.google.gson.Gson;
import com.wechat.pay.java.core.exception.ServiceException;
import com.wechat.pay.java.core.http.Constant;
import com.wechat.pay.java.core.notification.Notification;
import com.wechat.pay.java.core.notification.NotificationParser;
import com.wechat.pay.java.core.notification.RequestParam;
import com.wechat.pay.java.service.payments.model.Transaction;
import com.wechat.pay.java.service.refund.model.RefundNotification;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;


@RestController("palm.musa.controller.wechat-pay.notification")
@RequestMapping("/api/wechat-pay/notification")
public class NotificationController {
    @PostMapping("/refund")
    public ResponseEntity<NotificationResponse> refund(@RequestHeader(value = Constant.WECHAT_PAY_SERIAL) String serial, @RequestHeader(value = Constant.WECHAT_PAY_NONCE) String nonce, @RequestHeader(value = Constant.WECHAT_PAY_TIMESTAMP) String timestamp, @RequestHeader(value = Constant.WECHAT_PAY_SIGNATURE) String signature, @RequestHeader(value = WECHAT_PAY_SIGNATURE_TYPE) String signatureType, @RequestBody String body) {
        logger.info("receive refund notification {} {} {}", serial, signatureType, timestamp);
        try {
            final var param = new RequestParam.Builder().serialNumber(serial).nonce(nonce).signature(signature).signType(signatureType).timestamp(timestamp).body(body).build();
            final RefundNotification resource = notificationParser.parse(param, RefundNotification.class);
            logger.info("refund: {}", ToStringBuilder.reflectionToString(resource));
            publish(RabbitmqConfiguration.WECHAT_PAY_REFUND, body, resource);
            return new ResponseEntity<>(NotificationResponse.success(), HttpStatus.OK);

        } catch (ServiceException e) {
            logger.error("{} {}", e.getErrorCode(), e.getMessage());
            return new ResponseEntity<>(NotificationResponse.success(), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("process refund notification ", e);
            return new ResponseEntity<>(NotificationResponse.fail(e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/transaction")
    public ResponseEntity<NotificationResponse> transaction(@RequestHeader(value = Constant.WECHAT_PAY_SERIAL) String serial, @RequestHeader(value = Constant.WECHAT_PAY_NONCE) String nonce, @RequestHeader(value = Constant.WECHAT_PAY_TIMESTAMP) String timestamp, @RequestHeader(value = Constant.WECHAT_PAY_SIGNATURE) String signature, @RequestHeader(value = WECHAT_PAY_SIGNATURE_TYPE) String signatureType, @RequestBody String body) {
        logger.info("receive transaction notification {} {} {}", serial, signatureType, timestamp);
        try {
            final var param = new RequestParam.Builder().serialNumber(serial).nonce(nonce).signature(signature).signType(signatureType).timestamp(timestamp).body(body).build();
            Transaction resource = notificationParser.parse(param, Transaction.class);

            logger.info("trade: {}", ToStringBuilder.reflectionToString(resource));
            publish(RabbitmqConfiguration.WECHAT_PAY_TRANSACTION, body, resource);

            return new ResponseEntity<>(NotificationResponse.success(), HttpStatus.OK);
        } catch (ServiceException e) {
            logger.error("{} {}", e.getErrorCode(), e.getMessage());
            return new ResponseEntity<>(NotificationResponse.success(), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("process transaction notification ", e);
            return new ResponseEntity<>(NotificationResponse.fail(e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    <T> void publish(String exchange, String body, T response) {

        Gson gson = new Gson();
        final var notification = gson.fromJson(body, Notification.class);
        final var resource = gson.toJson(response);
        storageService.addNotification(notification, resource);
        queueHelper.publish(exchange, MediaType.APPLICATION_JSON, resource.getBytes());
    }


    @PostConstruct
    void init() {
        notificationParser = client.notificationParser();
    }

    @Autowired
    WechatPayStorageService storageService;
    @Autowired
    QueueHelper queueHelper;
    @Autowired
    WechatPayClient client;
    private NotificationParser notificationParser;
    private final static Logger logger = LoggerFactory.getLogger(NotificationController.class);
    private final static String WECHAT_PAY_SIGNATURE_TYPE = "Wechatpay-Signature-Type";
}
