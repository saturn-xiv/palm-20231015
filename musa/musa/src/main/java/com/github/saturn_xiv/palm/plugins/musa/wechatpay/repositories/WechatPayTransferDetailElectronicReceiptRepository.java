package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer.ReceiptSignatureStatus;
import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.transfer.TransferDetailElectronicReceipt;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("palm.musa.repository.wechat-pay.transfer-detail-electronic-receipt")
public interface WechatPayTransferDetailElectronicReceiptRepository extends CrudRepository<TransferDetailElectronicReceipt, Integer> {
    TransferDetailElectronicReceipt findByOutBatchNoAndOutDetailNoAndAcceptType(String outBatchNo, String outDetailNo, String acceptType);

    List<TransferDetailElectronicReceipt> findBySignatureStatus(ReceiptSignatureStatus signatureStatus);
}
