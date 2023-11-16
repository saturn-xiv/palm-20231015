#pragma once

#include "palm/env.hpp"

#include <utility>

namespace palm {
namespace smtp {
struct Address {
  Address() {}
  Address(const toml::table& node);
  friend std::ostream& operator<<(std::ostream& os, const Address& it) {
    os << it.username << "<" << it.email << ">";
    return os;
  }
  std::string email;
  std::string username;
};
class Config {
 public:
  Config(const toml::table& node);
  void send(
      const Address& to, const std::vector<Address> cc,
      const std::vector<Address> bcc, const std::string& subject,
      const std::string& content, bool is_html,
      const std::vector<std::pair<std::string, std::string>> attachments) const;

  friend std::ostream& operator<<(std::ostream& os, const Config& it) {
    os << it._host << ":" << it._port;
    return os;
  }

 private:
  std::string _host;
  uint16_t _port;
  std::shared_ptr<Address> _from;
  std::string _password;
  std::vector<Address> _cc;
  std::vector<Address> _bcc;
};
}  // namespace smtp
}  // namespace palm
