package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;
import java.util.Date;

@Entity(name = "wechat-pay.order")
@Table(name = "wechat_pay_orders")
public class Order implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;
    @Length(min = 1, max = 255)
    @Column(name = "app_id", nullable = false)
    private String appId;
    @Length(min = 1, max = 255)
    @Column(name = "payer_openId", nullable = false)
    private String payerOpenId;
    @Length(min = 6, max = 32)
    @Column(name = "out_trade_no", nullable = false)
    private String outTradeNo;
    @Length(min = 1, max = 127)
    @Column(nullable = false)
    private String description;
    @Length(min = 12)
    @Column(nullable = false)
    private String response;
    @Column(name = "amount_total", nullable = false)
    private int amountTotal;
    @Column(name = "amount_currency", nullable = false)
    private int amountCurrency;
    @Column(name = "created_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
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

    public String getPayerOpenId() {
        return payerOpenId;
    }

    public void setPayerOpenId(String payerOpenId) {
        this.payerOpenId = payerOpenId;
    }

    public String getOutTradeNo() {
        return outTradeNo;
    }

    public void setOutTradeNo(String outTradeNo) {
        this.outTradeNo = outTradeNo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAmountTotal() {
        return amountTotal;
    }

    public void setAmountTotal(int amountTotal) {
        this.amountTotal = amountTotal;
    }

    public int getAmountCurrency() {
        return amountCurrency;
    }

    public void setAmountCurrency(int amountCurrency) {
        this.amountCurrency = amountCurrency;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
