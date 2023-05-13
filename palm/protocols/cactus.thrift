namespace cpp cactus.v1
namespace java com.github.saturn_xiv.palm.plugins.cactus.v1

enum Action {
    WechatPayNativePrepay = 1101;
    WechatPayJsapiPrepay = 1201;
    WechatPayJsapiQueryOrderByOutTradeNo = 1202;
    WechatPayJsapiQueryOrderById = 1203;
    WechatPayJsapiCloseOrder = 1204;
    WechatPayBillTrade = 1301;
    WechatPayBillFundFlow = 1302;
    WechatPayRefundCreate = 1401;
    WechatPayRefundQuery = 1402;
    WechatPayTransferCreate = 1501;
    WechatPayTransferQuery = 1502;    
    WechatMiniProgramLogin = 2101;
    WechatMiniProgramPhoneNumber = 2102;
    WechatOauth2QrConnect = 2201;
    WechatOauth2Login = 2202;
}

service Rpc {
    binary call(1:Action action, 2:binary request);
}

service Health {
    void check();
}
