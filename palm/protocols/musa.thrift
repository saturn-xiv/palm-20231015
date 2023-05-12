namespace cpp musa.v1
namespace java com.github.saturn_xiv.palm.plugins.musa.v1

enum WechatPayAction {
    CreateTransfer = 601;
    QueryTransfer = 602;
}

service WechatPay {
    binary call(1:WechatPayAction name, 2:binary request);
}

service Health {
  void check();
}
