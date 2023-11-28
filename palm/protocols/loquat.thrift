namespace cpp loquat.v1
namespace java com.github.saturn_xiv.palm.plugins.loquat.v1

struct JwtVerfifyResponse{
    1:string subject,
    2:string payload,
}

service Jwt {
    string sign(1:string app_id, 2:string issuer, 3:string subject, 4:string audience, 5:i64 ttl, 6: string payload);
    JwtVerfifyResponse verify(1:string app_id, 2:string token, 3:string issuer, 4:string audience);
}

service Hmac {
    binary sign(1:string app_id, 2:binary plain);
    void verify(1:string app_id, 2:binary code, 3:binary plain);
}

service Aes {
    binary encrypt(1:string app_id, 2:binary plain);
    binary decrypt(1:string app_id, 2:binary code);
}

service Health {
  void check();
}
