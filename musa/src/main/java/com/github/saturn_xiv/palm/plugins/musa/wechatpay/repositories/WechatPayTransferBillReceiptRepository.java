package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer.ReceiptSignatureStatus;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer.TransferBillReceipt;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("palm.musa.repository.wechat-pay.transfer-bill-receipt")
public interface WechatPayTransferBillReceiptRepository extends CrudRepository<TransferBillReceipt, Integer> {
    TransferBillReceipt findByOutBatchNo(String outBatchNo);

    List<TransferBillReceipt> findBySignatureStatus(ReceiptSignatureStatus signatureStatus);
}
