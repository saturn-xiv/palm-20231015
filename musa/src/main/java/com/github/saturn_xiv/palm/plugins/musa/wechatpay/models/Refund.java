package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;
import java.util.Date;

@Entity(name = "wechat-pay.refund")
@Table(name = "wechat_pay_refunds")
public class Refund implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;
    @Length(min = 6, max = 32)
    @Column(name = "out_trade_no", nullable = false)
    private String outTradeNo;
    @Length(min = 6, max = 64)
    @Column(name = "out_refund_no", nullable = false)
    private String outRefundNo;
    @Length(min = 1, max = 80)
    @Column(nullable = false)
    private String reason;
    @Column(name = "amount_total", nullable = false)
    private int amountTotal;
    @Column(name = "amount_refund", nullable = false)
    private int amountRefund;
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

    public String getOutTradeNo() {
        return outTradeNo;
    }

    public void setOutTradeNo(String outTradeNo) {
        this.outTradeNo = outTradeNo;
    }

    public String getOutRefundNo() {
        return outRefundNo;
    }

    public void setOutRefundNo(String outRefundNo) {
        this.outRefundNo = outRefundNo;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public int getAmountTotal() {
        return amountTotal;
    }

    public void setAmountTotal(int amountTotal) {
        this.amountTotal = amountTotal;
    }

    public int getAmountRefund() {
        return amountRefund;
    }

    public void setAmountRefund(int amountRefund) {
        this.amountRefund = amountRefund;
    }

    public int getAmountCurrency() {
        return amountCurrency;
    }

    public void setAmountCurrency(int amountCurrency) {
        this.amountCurrency = amountCurrency;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
