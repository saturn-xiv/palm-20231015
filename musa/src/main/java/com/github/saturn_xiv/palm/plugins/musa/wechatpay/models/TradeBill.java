package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;
import java.util.Date;

@Entity(name = "wechat-pay.trade.bill")
@Table(name = "wechat_pay_trade_bills")
public class TradeBill implements Serializable {
    public enum BillType {
        ALL, SUCCESS, REFUND
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
    @Column(name = "bill_type", nullable = false)
    private BillType billType;


    @Enumerated(EnumType.STRING)
    @Column(name = "tar_type")
    private TarType tarType;

    @NotNull
    @Column(name = "created_at", nullable = false)
    private Date createdAt;

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

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public BillType getBillType() {
        return billType;
    }

    public void setBillType(BillType billType) {
        this.billType = billType;
    }

    public TarType getTarType() {
        return tarType;
    }

    public void setTarType(TarType tarType) {
        this.tarType = tarType;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
