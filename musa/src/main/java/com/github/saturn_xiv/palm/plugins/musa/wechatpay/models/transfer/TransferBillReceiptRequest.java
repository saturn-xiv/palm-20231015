package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

public class TransferBillReceiptRequest implements Serializable {
    public TransferBillReceiptRequest(String outBatchNo) {
        this.outBatchNo = outBatchNo;
    }

    @JsonProperty("out_batch_no")
    private String outBatchNo;

    public String getOutBatchNo() {
        return outBatchNo;
    }

    public void setOutBatchNo(String outBatchNo) {
        this.outBatchNo = outBatchNo;
    }
}
