package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

public class TransferElectronicReceiptRequest implements Serializable {
    public TransferElectronicReceiptRequest(String acceptType, String outBatchNo, String outDetailNo) {
        this.acceptType = acceptType;
        this.outBatchNo = outBatchNo;
        this.outDetailNo = outDetailNo;
    }

    @JsonProperty("accept_type")
    private String acceptType;
    @JsonProperty("out_batch_no")
    private String outBatchNo;
    @JsonProperty("out_detail_no")
    private String outDetailNo;

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
}
