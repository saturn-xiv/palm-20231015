namespace cpp loquat.v1
namespace java com.github.saturn_xiv.palm.plugins.loquat.v1

service Jwt {
    string sign(1:string subject, 2:string audience, 3:i64 ttl);
    string verify(1:string token, 2:string audience);
}

service Hmac {
    binary sign(1:binary plain);
    void verify(1:binary code, 2:binary plain);
}

service Aes {
    binary encrypt(1:binary plain);
    binary decrypt(1:binary code);
}

service Health {
  void check();
}
