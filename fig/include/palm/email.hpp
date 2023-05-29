#pragma once

#include <toml++/toml.h>

namespace palm {

namespace smtp {

struct Address {
  Address() {}
  Address(const toml::table& root);

  std::string name;
  std::string email;
};

// https://developers.google.com/gmail/imap/imap-smtp
class Config {
 public:
  Config(const toml::table& root);
  Config(const std::string& host, const uint16_t port,
         const int32_t auth_method, const std::shared_ptr<Address> user,
         const std::string& password, std::vector<Address> cc = {},
         std::vector<Address> bcc = {})
      : _host(host),
        _port(port),
        _auth_method(auth_method),
        _user(user),
        _password(password),
        _cc(cc),
        _bcc(bcc) {}
  void send(const Address& to, const std::string& subject,
            const std::string& content, const bool html = true,
            const std::vector<std::string>& attachments = {}) const;

 private:
  std::string _host;
  uint16_t _port;
  std::shared_ptr<Address> _user;
  std::string _password;
  std::vector<Address> _cc;
  std::vector<Address> _bcc;
  int32_t _auth_method;
};
}  // namespace smtp

}  // namespace palm
