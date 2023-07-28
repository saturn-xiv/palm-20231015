package com.github.saturn_xiv.palm.plugins.musa.wechatpay;

import com.github.saturn_xiv.palm.plugins.musa.v1.*;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.BillDownloadResponse;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.OutNoType;
import com.wechat.pay.java.core.RSAAutoCertificateConfig;
import com.wechat.pay.java.core.RSAConfig;
import com.wechat.pay.java.core.http.*;
import com.wechat.pay.java.core.notification.NotificationParser;
import com.wechat.pay.java.core.util.IOUtil;
import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import com.wechat.pay.java.service.payments.nativepay.NativePayService;
import com.wechat.pay.java.service.refund.RefundService;
import com.wechat.pay.java.service.transferbatch.TransferBatchService;
import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.TimeZone;

@Component("palm.musa.model.wechatpay")
public class WechatPayClient {

    public byte[] downloadFundFlowBill(String billDate, String accountType) throws IllegalArgumentException {
        logger.info("download wechat-pay fund flow bill {} {}", billDate, accountType);
        final var url = UriComponentsBuilder.fromUriString(API_HOME + "/bill/fundflowbill")
                .queryParam("bill_date", billDate)
                .queryParam("account_type", accountType)
                .build().toUriString();
        return downloadBill(url);
    }

    public byte[] downloadTradeBill(String billDate, String billType) throws IllegalArgumentException {
        logger.info("download wechat-pay trade bill {} {}", billDate, billType);
        final var url = UriComponentsBuilder.fromUriString(API_HOME + "/bill/tradebill")
                .queryParam("bill_date", billDate)
                .queryParam("bill_type", billType)
                .build().toUriString();
        return downloadBill(url);
    }

    private byte[] downloadBill(final String url) throws IllegalArgumentException {
        final var client = this.client();

        HttpHeaders headers = new HttpHeaders();
        headers.addHeader(Constant.ACCEPT, MediaType.APPLICATION_JSON.getValue());
        headers.addHeader(Constant.CONTENT_TYPE, MediaType.APPLICATION_JSON.getValue());

        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.GET)
                .headers(headers)
                .url(url)
                .build();
        final var httpResponse = client.execute(request, BillDownloadResponse.class);
        final var response = httpResponse.getServiceResponse();
        try (InputStream stream = client.download(response.getDownloadUrl())) {
            final var content = IOUtil.toByteArray(stream);
            if (!response.verify(content)) {
                throw new IllegalArgumentException("signature bill failed");
            }

            return content;
        } catch (IOException e) {
            logger.error("download {} ", response.getDownloadUrl(), e);
            throw new IllegalArgumentException("can't download the bill");
        }
    }

    private HttpClient client() {
        return new DefaultHttpClientBuilder().config(config).build();
    }

    public static String currency(WechatPayCurrency currency) {
        return switch (currency) {
            case CNY -> "CNY";
            case UNRECOGNIZED -> null;
        };
    }

    public static String notifyUrl(String host, WechatPayNotifyAction action) {
        final var it = switch (action) {
            case TRANSCATION -> "transaction";
            case REFUND -> "refund";
            case UNRECOGNIZED -> "nil";
        };
        return "https://" + host + "/api/wechat-pay/notification/" + it;
    }

    public static String billDate(WechatPayBillDate date) {
        LocalDate it = LocalDate.of(date.getYear(), date.getMonth(), date.getDay());
        return billDate(it);
    }

    public static String billDate(LocalDate date) {
        final DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return date.format(format);
    }

    public static String billDate(Date date) {
        final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        return format.format(date);
    }

    public static boolean canDownload(WechatPayBillDate date) {
        final var zone = TimeZone.getTimeZone("Asia/Shanghai").toZoneId();
        LocalDateTime now = LocalDateTime.now(zone);
        LocalDateTime end = now.withHour(10).withMinute(5).withSecond(0);
        LocalDateTime begin = end.minusMonths(3);
        if (end.isAfter(now)) {
            end = end.minusDays(1);
        }
        LocalDate it = LocalDate.of(date.getYear(), date.getMonth(), date.getDay());
        logger.debug("{}, {} vs {} vs {}, {} {}", now,
                begin.toLocalDate(), it, end.toLocalDate(),
                it.isBefore(begin.toLocalDate()),
                it.isAfter(end.toLocalDate()));
        return !it.isBefore(begin.toLocalDate()) && !it.isAfter(end.toLocalDate());
    }

    public static Set<String> latestBillDates() {
        final DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        Set<String> items = new HashSet<>();
        final var now = LocalDate.now();
        final var begin = now.minusMonths(3);
        for (var it = now; it.isAfter(begin); it = it.minusDays(1)) {
            items.add(it.format(format));
        }
        return items;

    }

    public static String billType(WechatPayTradeBillRequest.BillType billType) {
        return switch (billType) {
            case ALL -> "ALL";
            case SUCCESS -> "SUCCESS";
            case REFUND -> "REFUND";
            case UNRECOGNIZED -> null;
        };
    }

    public static String accountType(WechatPayFundFlowBillRequest.AccountType accountType) {
        return switch (accountType) {
            case FEES -> "FEES";
            case BASIC -> "BASIC";
            case OPERATION -> "OPERATION";
            case UNRECOGNIZED -> null;
        };
    }

    public static String tarType(WechatPayTarType tarType) {
        return switch (tarType) {
            case GZIP -> "GZIP";
            case UNRECOGNIZED -> null;
        };
    }


    public static String outNo(OutNoType type) {
        final var id = dateFormat.format(new Date()) + RandomStringUtils.randomAlphabetic(14).toUpperCase();
        return switch (type) {
            case TRADE -> "T" + id;
            case REFUND -> "R" + id;
            case BATCH_TRANSFER -> "B" + id;
            case BATCH_TRANSFER_DETAIL -> "D" + id;
        };

    }

    public static String batchTransferDetailStatus(WechatPayQueryBatchTransferRequest.DetailStatus status) {
        return switch (status) {
            case WAIT_PAY -> "WAIT_PAY";
            case SUCCESS -> "SUCCESS";
            case ALL -> "ALL";
            case FAIL -> "FAIL";
            case UNRECOGNIZED -> null;
        };
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

    public RefundService refundService() {
        return new RefundService.Builder().config(config).build();
    }


    public TransferBatchService transferBatchService() {
        return new TransferBatchService.Builder().config(config).build();
    }

    @PostConstruct
    void startUp() {
        logger.info("load merchant {}", merchantId);
        config = new RSAAutoCertificateConfig.Builder()
                .merchantId(merchantId)
                .privateKeyFromPath(privateKeyPath())
                .merchantSerialNumber(merchantSerialNumber)
                .apiV3Key(apiV3Key)
                .build();
    }

    private RSAConfig open() {
        return new RSAConfig.Builder()
                .merchantId(merchantId)
                .privateKeyFromPath(privateKeyPath())
                .merchantSerialNumber(merchantSerialNumber)
                .wechatPayCertificatesFromPath(certificatePath())
                .build();
    }

    private String privateKeyPath() {
        return Paths.get(ROOT, merchantId, "apiclient_key.pem").toString();
    }

    private String certificatePath() {
        return Paths.get(ROOT, merchantId, "apiclient_cert.p12").toString();
    }

    final static String ROOT = "wechatpay";


    @Value("${app.wechatpay.merchant-id}")
    String merchantId;
    @Value("${app.wechatpay.merchant-serial-number}")
    String merchantSerialNumber;
    @Value("${app.wechatpay.api-v3-key}")
    String apiV3Key;

    private RSAAutoCertificateConfig config;

    final static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");

    private final static Logger logger = LoggerFactory.getLogger(WechatPayClient.class);
    private final static String API_HOME = "https://api.mch.weixin.qq.com/v3";

    public String getMerchantId() {
        return merchantId;
    }


}
