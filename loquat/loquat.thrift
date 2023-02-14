namespace cpp loquat
namespace java loquat

service Jwt {
    string sign(1:string auth, 2:string subject, 3:i64 ttl),
    string verify(1:string auth, 2:string token),
}

service Hmac {
    string sign(1:string auth, 2:string plain),
    void verify(1:string auth, 2:string code, 3:string plain),
}

service Aes {
    string encrypt(1:string auth, 2:string plain),
    string decrypt(1:string auth, 2:string code),
}
