#include "palm/email.hpp"

#include <mailio/message.hpp>
#include <mailio/smtp.hpp>

palm::smtp::Address::Address(const toml::table& root) {
  this->name = root["name"].value<std::string>().value();
  this->email = root["email"].value<std::string>().value();
}

palm::smtp::Config::Config(const toml::table& root) {
  this->_host = root["host"].value_or("smtp.gmail.com");
  this->_port = root["port"].value_or(465);
  //   1: LOGIN 2: START_TLS
  this->_auth_method = root["auth-method"].value_or(1);
  {
    auto node = root["user"];
    this->_user = std::make_shared<Address>(*node.as_table());
  }
  this->_password = root["password"].value<std::string>().value();

  {
    auto node = root["cc"];
    if (node) {
      for (const auto& it : *node.as_array()) {
        Address to(*it.as_table());
        this->_cc.push_back(to);
      }
    }
  }
  {
    auto node = root["bcc"];
    if (node) {
      for (const auto& it : *node.as_array()) {
        Address to(*it.as_table());
        this->_bcc.push_back(to);
      }
    }
  }
}

void palm::smtp::Config::send(
    const Address& to, const std::string& subject, const std::string& content,
    const bool html, const std::vector<std::string>& attachments) const {
  mailio::message msg;

  if (html) {
    msg.content_transfer_encoding(
        mailio::mime::content_transfer_encoding_t::BASE_64);
    msg.content_type(mailio::message::media_type_t::TEXT, "html", "utf-8");
  }

  msg.from(mailio::mail_address(this->_user->name, this->_user->email));
  msg.add_recipient(mailio::mail_address(to.name, to.email));
  for (const auto& it : this->_cc) {
    msg.add_cc_recipient(mailio::mail_address(it.name, it.email));
  }
  for (const auto& it : this->_bcc) {
    msg.add_bcc_recipient(mailio::mail_address(it.name, it.email));
  }
  msg.subject(subject);
  msg.content(content);

  std::list<
      std::tuple<std::istream&, std::string, mailio::message::content_type_t>>
      items;
  for (const auto& it : attachments) {
    std::ifstream ifs(it, std::ios::binary);
    auto ift =
        std::make_tuple(std::ref(ifs), it, mailio::message::content_type_t());
    items.push_back(ift);
  }
  msg.attach(items);

  spdlog::info("send email '{}' to {} by {}:{}", subject, to.email, this->_host,
               this->_port);

  mailio::smtps con(this->_host, this->_port, std::chrono::minutes(1));

  con.authenticate(
      this->_user->email, this->_password,
      static_cast<mailio::smtps::auth_method_t>(this->_auth_method));
  con.submit(msg);
}
