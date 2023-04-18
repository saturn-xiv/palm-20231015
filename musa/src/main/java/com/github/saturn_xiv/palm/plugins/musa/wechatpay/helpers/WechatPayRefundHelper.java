package com.github.saturn_xiv.palm.plugins.musa.wechatpay.helpers;

import com.wechat.pay.java.service.refund.RefundService;
import com.wechat.pay.java.service.refund.model.AmountReq;
import com.wechat.pay.java.service.refund.model.CreateRequest;
import com.wechat.pay.java.service.refund.model.QueryByOutRefundNoRequest;
import com.wechat.pay.java.service.refund.model.Refund;

public class WechatPayRefundHelper {

    public Refund create(String outTradeNo, String outRefundNo,
                         long refundAmount, long amountTotal, String amountCurrency,
                         String reason, String notifyUrl) {
        final var amount = new AmountReq();
        amount.setCurrency(amountCurrency);
        amount.setRefund(refundAmount);
        amount.setTotal(amountTotal);

        final var request = new CreateRequest();
        request.setAmount(amount);
        request.setOutTradeNo(outTradeNo);
        request.setOutRefundNo(outRefundNo);
        request.setReason(reason);
        request.setNotifyUrl(notifyUrl);
        return refundService.create(request);
    }

    public Refund queryByOutRefundNo(String outRefundNo) {
        final var request = new QueryByOutRefundNoRequest();
        request.setOutRefundNo(outRefundNo);
        return refundService.queryByOutRefundNo(request);
    }

    public WechatPayRefundHelper(RefundService refundService) {
        this.refundService = refundService;
    }

    private RefundService refundService;
}
