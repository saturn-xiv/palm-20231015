package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;
import java.util.Date;


@Entity(name = "wechat-pay.transfer.detail-electronic-receipt")
@Table(name = "wechat_pay_transfer_detail_electronic_receipts")
public class TransferDetailElectronicReceipts implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;
    @Length(min = 1, max = 31)
    @Column(name = "accept_type", nullable = false)
    private String acceptType;
    @Length(min = 1, max = 32)
    @Column(name = "out_batch_no")
    private String outBatchNo;
    @Length(min = 1, max = 32)
    @Column(name = "out_detail_no", nullable = false)
    private String outDetailNo;
    @Column(nullable = false)
    private byte[] content;
    @Column(name = "created_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
