package com.github.saturn_xiv.palm.plugins.musa.wechatpay.models;

import java.io.Serializable;

public record NotificationResponse(String code, String message) implements Serializable {
    public static NotificationResponse success() {
        return new NotificationResponse("SUCCESS", null);
    }

    public static NotificationResponse fail(String reason) {
        return new NotificationResponse(
                "FAIL",
                reason == null ? "Unknown" : (reason.length() < MAX_MESSAGE_LEN ? reason : reason.substring(0, MAX_MESSAGE_LEN))
        );
    }

    private static final int MAX_MESSAGE_LEN = 64;
}
