#include <catch2/catch_test_macros.hpp>

#include "palm/crypto.hpp"

TEST_CASE("OpenSSL", "[ssl]") {
  REQUIRE(sodium_init() >= 0);

  SECTION("serial") {
    for (const int32_t i : {42, 678, 9865, 65523, 65535, 1234567, INT16_MAX,
                            (INT32_MAX - 1), INT32_MAX}) {
      {
        const auto s = palm::hex::to(i);
        const auto v = palm::hex::from(s);
        std::cout << "hex(" << i << "): " << s << std::endl;
        REQUIRE(i == v);
      }
      {
        const auto s = palm::serial::to(i);
        const auto v = palm::serial::from(s);
        std::cout << "sid(" << i << "): " << s << std::endl;
        REQUIRE(i == v);
      }
    }
  }

  SECTION("secret-box") {
    const auto key = palm::SecretBox::generate_key();
    std::cout << "key: " << palm::base64::to(key) << std::endl;
    REQUIRE(key.size() > 0);
    {
      const auto v2 = palm::SecretBox::generate_key();
      std::cout << "key: " << palm::base64::to(v2) << std::endl;
      REQUIRE(key.size() == v2.size());
      REQUIRE(key != v2);
    }

    const std::string plain = "hello, palm!";

    {
      const palm::SecretBox box(key);
      const std::vector<uint8_t> it(plain.begin(), plain.end());
      const auto v1 = box.encrypt(it);
      std::cout << "encrypt: " << palm::base64::to(v1.first) << "\t"
                << palm::base64::to(v1.second) << std::endl;
      REQUIRE(v1.first.size() > 0);
      REQUIRE(v1.second.size() > 0);
      {
        const auto tmp = box.decrypt(v1.first, v1.second);
        const std::string buf(tmp.begin(), tmp.end());
        std::cout << "decrypt: " << buf << std::endl;
        REQUIRE(buf == plain);
      }
      {
        const auto v2 = box.encrypt(it);
        std::cout << "encrypt: " << palm::base64::to(v2.first) << "\t"
                  << palm::base64::to(v2.second) << std::endl;
        REQUIRE(v1.first.size() == v2.first.size());
        REQUIRE(v1.first != v2.first);
        REQUIRE(v1.second.size() == v2.second.size());
        REQUIRE(v1.second != v2.second);
      }
    }
  }

  SECTION("hashing") {
    const std::string plain = "hello, palm!";
    std::cout << "hash: " << plain << std::endl;
    const auto v1 = palm::hashing::sum(plain);
    std::cout << v1.size() << " " << v1 << std::endl;
    const auto v2 = palm::hashing::sum(plain);
    std::cout << v2.size() << " " << v2 << std::endl;

    REQUIRE(v1.size() > 0);
    REQUIRE(v1.size() == v2.size());
    REQUIRE(v1 != v2);
    REQUIRE(palm::hashing::verify(plain, v1));
  }

  SECTION("random") {
    for (int i = 0; i < 10; i++) {
      std::cout << "--------- " << i << " --------" << std::endl;
      std::cout << "uuid:\t" << palm::uuid() << std::endl;
      std::cout << "bytes:\t" << palm::base64::to(palm::random::bytes(32))
                << std::endl;
      std::cout << "string:\t" << palm::random::string(16) << std::endl;
      std::cout << "uint32: \t" << palm::random::uint32() << std::endl;
      std::cout << "uint32(256): \t" << palm::random::uint32(256) << std::endl;
    }
  }

  SECTION("hmac512") {
    const palm::Hmac it("ticn2mE1i+TUZw9wIUbb2FjYzRfgaNWpijq7tqNzmAY=");
    for (int i = 0; i < 10; i++) {
      const auto data1 = palm::random::bytes(64);
      const auto data2 = palm::random::bytes(64);
      const auto salt1 = palm::random::bytes(8);
      const auto salt2 = palm::random::bytes(8);
      const auto hs11 = palm::base64::to(it.sha512(data1, salt1));
      const auto hs21 = palm::base64::to(it.sha512(data2, salt1));
      const auto hs12 = palm::base64::to(it.sha512(data1, salt2));
      const auto hs11_0 = palm::base64::to(it.sha512(data1, salt1));

      std::cout << "data 1: " << palm::base64::to(data1)
                << "\ndata 2: " << palm::base64::to(data2)
                << "\nsalt 1: " << palm::base64::to(salt1)
                << "\nsalt 2: " << palm::base64::to(salt2)
                << "\n sum 1 1: " << hs11 << "\n sum 2 1: " << hs21
                << "\n sum 1 2: " << hs12 << "\n sum 1 1(r): " << hs11_0
                << std::endl;

      REQUIRE(hs11 != hs12);
      REQUIRE(hs21 != hs12);
      REQUIRE(hs11 == hs11_0);
    }
  }

  SECTION("ssha512") {
    const size_t salt_len = 16;
    for (int i = 0; i < 10; i++) {
      std::stringstream ss;
      ss << "Hello, " << i << "!";
      const std::string data = ss.str();
      {
        const auto passwd1 = palm::ssha512::sum(data, salt_len);
        const auto passwd2 = palm::ssha512::sum(data, salt_len);
        REQUIRE(passwd1 != passwd2);
      }
      const auto passwd = palm::ssha512::sum(data, salt_len);
      REQUIRE(palm::ssha512::verify(passwd, data));
      REQUIRE(!palm::ssha512::verify(passwd, "hi"));
      std::cout << "doveadm pw -s SSHA512 -p '" << data << "'" << std::endl;
      std::cout << "doveadm pw -p '" << data << "' -t '" << passwd << "'"
                << std::endl;
    }
  }

  SECTION("aes") {
    const palm::Aes aes("+2Mhl9cH4MXsMsyTbvqETFg42IQiuDobw8SkQEXkVBE=");
    for (int i = 0; i < 9; i++) {
      const auto plain = palm::random::bytes(23 + i);
      {
        const auto code1 = aes.encrypt(plain);
        const auto code2 = aes.encrypt(plain);
        REQUIRE(code1.first.size() == code2.first.size());
        REQUIRE(code1.second.size() == code2.second.size());
        REQUIRE(palm::base64::to(code1.first) != palm::base64::to(code2.first));
        REQUIRE(palm::base64::to(code1.second) !=
                palm::base64::to(code2.second));
      }
      {
        const auto code = aes.encrypt(plain);
        const auto it = aes.decrypt(code.first, code.second);
        REQUIRE(plain.size() == it.size());
        REQUIRE(palm::base64::to(plain) == palm::base64::to(it));
      }
    }
  }

  SECTION("jwt") {
    const palm::Jwt jwt("wM7PfXLXdOhswHZcyNUbzBDEu6jt8FJPApt67tiY3Ko=");
    const std::string uid = "uid";
    const std::string aud = "palm";
    const std::string sub = "unit test";
    for (int i = 0; i < 3; i++) {
      nlohmann::json payload;
      std::stringstream ss;
      ss << "hello, " << i << "!";
      payload[uid] = ss.str();

      std::string token1 = jwt.encode(aud, sub, payload, std::chrono::hours(1));
      std::this_thread::sleep_for(std::chrono::seconds(2));
      {
        std::string token2 =
            jwt.encode(aud, sub, payload, std::chrono::hours(1));
        REQUIRE(token2 != token1);
      }
      auto [aud1, _, payload1] = jwt.decode(token1, sub);
      REQUIRE(aud == aud1);
      {
        const std::string uid1 = payload1[uid];
        const std::string uid0 = payload[uid];
        REQUIRE(uid0 == uid1);
      }

      std::cout << "token: " << token1 << "\n" << payload1 << std::endl;
    }
  }

  SECTION("gravatar") {
    const std::string email = "MyEmailAddress@example.com ";
    const auto logo = palm::gravatar(email);
    REQUIRE(logo ==
            "https://www.gravatar.com/avatar/0bc83cb571cd1c50ba6f3e8a78ef1346");
    std::cout << logo << std::endl;
  }
}

TEST_CASE("tink", "[loquat]") {
  REQUIRE(sodium_init() >= 0);

  SECTION("serial") {}
}
