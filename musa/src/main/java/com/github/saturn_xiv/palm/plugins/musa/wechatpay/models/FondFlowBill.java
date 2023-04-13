package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;
import java.util.Date;

@Entity(name = "wechat-pay.fund-flow-bill")
@Table(name = "wechat_pay_fund_flow_bills")
public class FondFlowBill implements Serializable {
    public enum AccountType {
        BASIC, OPERATION, FEES
    }

    @Id
    @Column(nullable = false)
    private Integer id;


    @Length(min = 1, max = 255)
    @Column(name = "app_id", nullable = false)
    private String appId;

    @Length(min = 1, max = 10)
    @Column(name = "bill_date", nullable = false)
    private String billDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_type", nullable = false)
    private AccountType accountType;


    @Enumerated(EnumType.STRING)
    @Column(name = "tar_type")
    private TarType tar_type;

    @Column(name = "created_at", nullable = false)
    private Date createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getBillDate() {
        return billDate;
    }

    public void setBillDate(String billDate) {
        this.billDate = billDate;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public TarType getTar_type() {
        return tar_type;
    }

    public void setTar_type(TarType tar_type) {
        this.tar_type = tar_type;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
