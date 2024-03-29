package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;
import java.util.Date;

@Entity(name = "wechat-pay.fund-flow-bill")
@Table(name = "wechat_pay_fund_flow_bills")
public class FundFlowBill implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;
    @Length(min = 1, max = 10)
    @Column(name = "bill_date", nullable = false)
    private String billDate;
    @Column(name = "account_type", nullable = false)
    private int accountType;
    @Column(name = "tar_type")
    private Integer tarType;
    @Column(nullable = false)
    @JsonIgnore
    private byte[] content;
    @Column(name = "created_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getBillDate() {
        return billDate;
    }

    public void setBillDate(String billDate) {
        this.billDate = billDate;
    }


    public int getAccountType() {
        return accountType;
    }

    public void setAccountType(int accountType) {
        this.accountType = accountType;
    }

    public Integer getTarType() {
        return tarType;
    }

    public void setTarType(Integer tarType) {
        this.tarType = tarType;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
