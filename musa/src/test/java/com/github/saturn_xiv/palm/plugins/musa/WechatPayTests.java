package com.github.saturn_xiv.palm.plugins.musa;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

// https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_8.shtml
public class WechatPayTests {
    @Test
    void fundFlowBill() {
        System.out.println("test wechat-pay fund flow bill");
        Assertions.assertEquals(4, 2 + 2);
    }

    @Test
    void tradeBill() {
        System.out.println("test wechat-pay trade bill");
        Assertions.assertEquals(4, 2 * 2);
    }
}
