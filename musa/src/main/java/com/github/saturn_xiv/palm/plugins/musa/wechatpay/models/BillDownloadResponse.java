package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wechat.pay.java.core.util.ShaUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;

public class BillDownloadResponse implements Serializable {
    public boolean verify(final byte[] content) {
        switch (hashType) {
            case "SHA1" -> {
                return ShaUtil.getSha1HexString(content).equals(hashValue);
            }
            case "SHA256" -> {
                return ShaUtil.getSha256HexString(content).equals(hashValue);
            }
            default -> {
                logger.error("unknown signature algorithm {}", hashType);
                return false;
            }
        }
    }

    @JsonProperty("hash_type")
    private String hashType;
    @JsonProperty("hash_value")
    private String hashValue;
    @JsonProperty("download_url")
    private String downloadUrl;
    private final static Logger logger = LoggerFactory.getLogger(BillDownloadResponse.class);

    public String getHashType() {
        return hashType;
    }

    public void setHashType(String hashType) {
        this.hashType = hashType;
    }

    public String getHashValue() {
        return hashValue;
    }

    public void setHashValue(String hashValue) {
        this.hashValue = hashValue;
    }

    public String getDownloadUrl() {
        return downloadUrl;
    }

    public void setDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
    }
}
