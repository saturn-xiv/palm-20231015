package com.github.saturn_xiv.palm.plugins.musa.wechatpay.controllers;


import com.github.saturn_xiv.palm.plugins.musa.RabbitmqConfiguration;
import com.github.saturn_xiv.palm.plugins.musa.helpers.QueueHelper;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.NotificationResponse;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.services.WechatPayBillService;
import com.wechat.pay.java.core.http.Constant;
import com.wechat.pay.java.core.notification.NotificationParser;
import com.wechat.pay.java.core.notification.RequestParam;
import com.wechat.pay.java.service.payments.model.Transaction;
import com.wechat.pay.java.service.refund.model.RefundNotification;
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
    public ResponseEntity<NotificationResponse> refund(
            @RequestHeader(value = Constant.WECHAT_PAY_SERIAL) String serial,
            @RequestHeader(value = Constant.WECHAT_PAY_NONCE) String nonce,
            @RequestHeader(value = Constant.WECHAT_PAY_TIMESTAMP) String timestamp,
            @RequestHeader(value = Constant.WECHAT_PAY_SIGNATURE) String signature,
            @RequestHeader(value = WECHAT_PAY_SIGNATURE_TYPE) String signatureType,
            @RequestBody String body
    ) {

        try {
            final var param = new RequestParam.Builder()
                    .serialNumber(serial)
                    .nonce(nonce)
                    .signature(signature)
                    .signType(signatureType)
                    .timestamp(timestamp)
                    .body(body)
                    .build();
            RefundNotification message = notificationParser.parse(param, RefundNotification.class);
            queueHelper.publish(RabbitmqConfiguration.WECHAT_PAY_REFUND,
                    MediaType.APPLICATION_JSON, message.toString().getBytes());
            return new ResponseEntity<>(NotificationResponse.success(), HttpStatus.OK);

        } catch (Exception e) {
            logger.error("receive refund notification ", e);
            return new ResponseEntity<>(NotificationResponse.fail(e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/transaction")
    public ResponseEntity<NotificationResponse> transaction(@RequestHeader(value = Constant.WECHAT_PAY_SERIAL) String serial,
                                                            @RequestHeader(value = Constant.WECHAT_PAY_NONCE) String nonce,
                                                            @RequestHeader(value = Constant.WECHAT_PAY_TIMESTAMP) String timestamp,
                                                            @RequestHeader(value = Constant.WECHAT_PAY_SIGNATURE) String signature,
                                                            @RequestHeader(value = WECHAT_PAY_SIGNATURE_TYPE) String signatureType,
                                                            @RequestBody String body) {
        try {
            final var param = new RequestParam.Builder()
                    .serialNumber(serial)
                    .nonce(nonce)
                    .signature(signature)
                    .signType(signatureType)
                    .timestamp(timestamp)
                    .body(body)
                    .build();
            Transaction message = notificationParser.parse(param, Transaction.class);
            queueHelper.publish(RabbitmqConfiguration.WECHAT_PAY_TRANSACTION,
                    MediaType.APPLICATION_JSON, message.toString().getBytes());

            return new ResponseEntity<>(NotificationResponse.success(), HttpStatus.OK);

        } catch (Exception e) {
            logger.error("receive transaction notification ", e);
            return new ResponseEntity<>(NotificationResponse.fail(e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostConstruct
    void init() {
        notificationParser = client.notificationParser();
    }

    @Autowired
    WechatPayBillService billService;
    @Autowired
    QueueHelper queueHelper;
    @Autowired
    WechatPayClient client;
    private NotificationParser notificationParser;
    private final static Logger logger = LoggerFactory.getLogger(NotificationController.class);
    private final static String WECHAT_PAY_SIGNATURE_TYPE = "Wechatpay-Signature-Type";
}
