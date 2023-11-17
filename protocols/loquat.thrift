namespace cpp loquat.v1
namespace java com.github.saturn_xiv.palm.plugins.loquat.v1

service Jwt {
    string sign(1:string id, 2:string issuer, 3:string subject, 4:string audience, 5:i64 ttl, 6: string payload);
    string verify(1:string id, 2:string token, 3:string issuer, 4:string subject, 5:string audience);
}

service Hmac {
    binary sign(1:string id, 2:binary plain);
    void verify(1:string app, 2:binary code, 3:binary plain);
}

service Aes {
    binary encrypt(1:string id, 2:binary plain);
    binary decrypt(1:string id, 2:binary code);
}

service Health {
  void check();
}
