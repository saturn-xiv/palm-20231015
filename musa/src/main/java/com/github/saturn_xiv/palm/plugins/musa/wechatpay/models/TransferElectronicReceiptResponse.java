package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

public class TransferElectronicReceiptResponse implements Serializable {

    public BillDownloadResponse toBillDownloadResponse() {
        var it = new BillDownloadResponse();
        it.setHashType(hashType);
        it.setHashValue(hashValue);
        it.setDownloadUrl(downloadUrl);
        return it;
    }

    @JsonProperty("accept_type")
    private String acceptType;
    @JsonProperty("out_batch_no")
    private String outBatchNo;
    @JsonProperty("out_detail_no")
    private String outDetailNo;
    @JsonProperty("signature_no")
    private String signatureNo;
    @JsonProperty("signature_status")
    private String signatureStatus;
    @JsonProperty("hash_type")
    private String hashType;
    @JsonProperty("hash_value")
    private String hashValue;
    @JsonProperty("download_url")
    private String downloadUrl;


    public String getAcceptType() {
        return acceptType;
    }

    public void setAcceptType(String acceptType) {
        this.acceptType = acceptType;
    }

    public String getOutBatchNo() {
        return outBatchNo;
    }

    public void setOutBatchNo(String outBatchNo) {
        this.outBatchNo = outBatchNo;
    }

    public String getOutDetailNo() {
        return outDetailNo;
    }

    public void setOutDetailNo(String outDetailNo) {
        this.outDetailNo = outDetailNo;
    }

    public String getSignatureNo() {
        return signatureNo;
    }

    public void setSignatureNo(String signatureNo) {
        this.signatureNo = signatureNo;
    }

    public String getSignatureStatus() {
        return signatureStatus;
    }

    public void setSignatureStatus(String signatureStatus) {
        this.signatureStatus = signatureStatus;
    }

    public String getHashType() {
        return hashType;
    }

    public void setHashType(String hashType) {
        this.hashType = hashType;
    }

    public String getHashValue() {
        return hashValue;
    }

    public void setHashValue(String hashValue) {
        this.hashValue = hashValue;
    }

    public String getDownloadUrl() {
        return downloadUrl;
    }

    public void setDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
    }
}
