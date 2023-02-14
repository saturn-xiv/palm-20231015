namespace cpp loquat
namespace java loquat

service Jwt {
    string sign(1:string auth, 2:string subject, 3:i64 ttl),
    string verify(1:string auth, 2:string token),
}

service Hmac {
    binary sign(1:string auth, 2:binary plain),
    void verify(1:string auth, 2:binary code, 3:binary plain),
}

service Aes {
    binary encrypt(1:string auth, 2:binary plain),
    binary decrypt(1:string auth, 2:binary code),
}
