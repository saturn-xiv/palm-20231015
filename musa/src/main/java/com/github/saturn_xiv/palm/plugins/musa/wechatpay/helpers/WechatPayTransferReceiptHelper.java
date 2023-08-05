package com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.WechatPayClient;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer.TransferBillReceiptRequest;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer.TransferBillReceiptResponse;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer.TransferElectronicReceiptRequest;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.wechat.pay.java.core.http.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.util.UriComponentsBuilder;

public class WechatPayTransferReceiptHelper {
    public WechatPayTransferReceiptHelper(HttpClient client) {
        this.client = client;
    }

    public TransferBillReceiptResponse requestTransferElectronicReceipt(String acceptType, String outBatchNo, String outDetailNo) throws IllegalArgumentException {
        logger.info("request wechat-pay transfer electronic receipt ({},{},{})", acceptType, outBatchNo, outDetailNo);
        final var url = UriComponentsBuilder.fromUriString(WechatPayClient.apiHome("/transfer-detail/electronic-receipts"))
                .build().toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.addHeader(Constant.ACCEPT, MediaType.APPLICATION_JSON.getValue());
        headers.addHeader(Constant.CONTENT_TYPE, MediaType.APPLICATION_JSON.getValue());

        var body = new JsonRequestBody.Builder().body(new Gson().toJson(new TransferElectronicReceiptRequest(acceptType, outBatchNo, outDetailNo))).build();

        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.POST)
                .headers(headers)
                .url(url)
                .body(body)
                .build();
        final var httpResponse = client.execute(request, TransferBillReceiptResponse.class);
        final var response = httpResponse.getServiceResponse();
        logger.debug("{}", new GsonBuilder().setPrettyPrinting().create().toJson(response));
        return response;
    }

    public TransferBillReceiptResponse queryTransferElectronicReceipt(String acceptType, String outBatchNo, String outDetailNo) throws IllegalArgumentException {
        logger.info("query wechat-pay transfer electronic receipt ({},{},{})", acceptType, outBatchNo, outDetailNo);
        final var url = UriComponentsBuilder.fromUriString(WechatPayClient.apiHome("/transfer-detail/electronic-receipts"))
                .queryParam("out_batch_no", outBatchNo)
                .queryParam("out_detail_no", outDetailNo)
                .queryParam("accept_type", acceptType)
                .build().toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.addHeader(Constant.ACCEPT, MediaType.APPLICATION_JSON.getValue());
        headers.addHeader(Constant.CONTENT_TYPE, MediaType.APPLICATION_JSON.getValue());

        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.GET)
                .headers(headers)
                .url(url)
                .build();
        final var httpResponse = client.execute(request, TransferBillReceiptResponse.class);
        final var response = httpResponse.getServiceResponse();
        logger.debug("{}", new GsonBuilder().setPrettyPrinting().create().toJson(response));
        return response;
    }

    public TransferBillReceiptResponse requestTransferBillReceipt(String outBatchNo) throws IllegalArgumentException {
        logger.info("request wechat-pay transfer bill receipt {}", outBatchNo);
        final var url = UriComponentsBuilder.fromUriString(WechatPayClient.apiHome("/transfer/bill-receipt"))
                .build().toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.addHeader(Constant.ACCEPT, MediaType.APPLICATION_JSON.getValue());
        headers.addHeader(Constant.CONTENT_TYPE, MediaType.APPLICATION_JSON.getValue());

        var body = new JsonRequestBody.Builder().body(new Gson().toJson(new TransferBillReceiptRequest(outBatchNo))).build();

        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.POST)
                .headers(headers)
                .url(url)
                .body(body)
                .build();
        final var httpResponse = client.execute(request, TransferBillReceiptResponse.class);
        final var response = httpResponse.getServiceResponse();
        logger.debug("{}", new GsonBuilder().setPrettyPrinting().create().toJson(response));
        return response;
    }

    public TransferBillReceiptResponse queryTransferBillReceipt(String outBatchNo) throws IllegalArgumentException {
        logger.info("query wechat-pay transfer bill receipt {}", outBatchNo);
        final var url = UriComponentsBuilder.fromUriString(WechatPayClient.apiHome("/transfer/bill-receipt/" + outBatchNo))
                .build().toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.addHeader(Constant.ACCEPT, MediaType.APPLICATION_JSON.getValue());
        headers.addHeader(Constant.CONTENT_TYPE, MediaType.APPLICATION_JSON.getValue());

        var request = new HttpRequest.Builder()
                .httpMethod(HttpMethod.POST)
                .headers(headers)
                .url(url)
                .build();
        final var httpResponse = client.execute(request, TransferBillReceiptResponse.class);
        final var response = httpResponse.getServiceResponse();
        logger.debug("{}", new GsonBuilder().setPrettyPrinting().create().toJson(response));
        return response;
    }

    private HttpClient client;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayTransferReceiptHelper.class);
}
