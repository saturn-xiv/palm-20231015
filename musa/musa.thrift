namespace cpp musa.v1
namespace java com.github.saturn_xiv.palm.plugins.musa.v1

service WechatPay {
    string query(1:string subject, 2:string audience, 3:i64 ttl);    
}

service Health {
  void check();
}

