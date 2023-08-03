package com.github.saturn_xiv.palm.plugins.musa.wechatpay.repositories;

import com.github.saturn_xiv.palm.plugins.musa.wechatpay.models.TransferDetailElectronicReceipts;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("palm.musa.repository.wechat-pay.transfer-detail-electronic-receipt")
public interface WechatPayTransferDetailElectronicReceiptsRepository extends CrudRepository<TransferDetailElectronicReceipts, Integer> {
    TransferDetailElectronicReceipts findByOutBatchNoAndOutDetailNoAndAcceptType(String outBatchNo, String outDetailNo, String acceptType);
}
