package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;
import java.util.Date;


@Entity(name = "wechat-pay.transfer.bill-receipt")
@Table(name = "wechat_pay_transfer_bill_receipts")
public class TransferBillReceipt implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;
    @Length(min = 1, max = 32)
    @Column(name = "out_batch_no", nullable = false)
    private String outBatchNo;
    @Column(name = "signature_status", nullable = false)
    @Enumerated(EnumType.STRING)
    private ReceiptSignatureStatus signatureStatus;
    @JsonIgnore
    private byte[] content;
    private int version;
    @Column(name = "updated_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;
    @Column(name = "created_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOutBatchNo() {
        return outBatchNo;
    }

    public void setOutBatchNo(String outBatchNo) {
        this.outBatchNo = outBatchNo;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public Date getCreatedAt() {
        return createdAt;
    }


    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public ReceiptSignatureStatus getSignatureStatus() {
        return signatureStatus;
    }

    public void setSignatureStatus(ReceiptSignatureStatus signatureStatus) {
        this.signatureStatus = signatureStatus;
    }
}
