package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.BillDownloadResponse;

import java.io.Serializable;

public class TransferBillReceiptResponse implements Serializable {
    public boolean isFinished() {
        return "FINISHED".equals(this.signatureStatus);
    }

    public BillDownloadResponse toBillDownloadResponse() {
        var it = new BillDownloadResponse();
        it.setHashType(hashType);
        it.setHashValue(hashValue);
        it.setDownloadUrl(downloadUrl);
        return it;
    }

    @JsonProperty("out_batch_no")
    private String outBatchNo;
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
    @JsonProperty("create_time")
    private String createTime;
    @JsonProperty("update_time")
    private String updateTime;


    public String getOutBatchNo() {
        return outBatchNo;
    }

    public void setOutBatchNo(String outBatchNo) {
        this.outBatchNo = outBatchNo;
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

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }
}
