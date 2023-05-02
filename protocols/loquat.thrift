namespace cpp loquat.v1
namespace java com.github.saturn_xiv.palm.plugins.loquat.v1

service Jwt {
    string sign(1:string auth, 2:string subject, 3:string audience, 4:i64 ttl);
    string verify(1:string auth, 2:string token, 3:string audience);
}

service Hmac {
    binary sign(1:string auth, 2:binary plain);
    void verify(1:string auth, 2:binary code, 3:binary plain);
}

service Aes {
    binary encrypt(1:string auth, 2:binary plain);
    binary decrypt(1:string auth, 2:binary code);
}

service Health {
  void check(1:string auth);
}
