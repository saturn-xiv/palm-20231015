#include "palm/email.hpp"

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
    const bool html,
    const std::vector<std::tuple<std::string, mailio::message::media_type_t,
                                 std::string>>& attachments) const {
  mailio::message msg;

  msg.subject(subject);
  mailio::mime body;
  {
    body.content_transfer_encoding(
        mailio::mime::content_transfer_encoding_t::BASE_64);
    body.content_type(mailio::message::media_type_t::TEXT,
                      (html ? "html" : "plain"), "utf-8");
    body.content(content);
  }
  msg.add_part(body);

  msg.from(mailio::mail_address(this->_user->name, this->_user->email));
  msg.add_recipient(mailio::mail_address(to.name, to.email));
  for (const auto& it : this->_cc) {
    msg.add_cc_recipient(mailio::mail_address(it.name, it.email));
  }
  for (const auto& it : this->_bcc) {
    msg.add_bcc_recipient(mailio::mail_address(it.name, it.email));
  }

  // {
  //   std::list<
  //       std::tuple<std::istream&, std::string,
  //       mailio::message::content_type_t>> atts;
  //   for (const auto& [att_name, type_, sub_type] : attachments) {
  //     std::ifstream ifs(att_name, std::ios::binary);
  //     auto it =
  //         std::make_tuple(std::ref(ifs), att_name,
  //                         mailio::message::content_type_t(type_, sub_type));
  //     atts.push_back(it);
  //   }
  //   msg.attach(atts);
  // }

  for (const auto& [att_name, type_, sub_type] : attachments) {
    std::ifstream ifs(att_name, std::ios::binary);
    msg.attach(std::ref(ifs), att_name, type_, sub_type);
  }

  spdlog::info("send email '{}' to {} by {}:{}", subject, to.email, this->_host,
               this->_port);
  this->send(msg);
}

void palm::smtp::Config::send(const palm::nut::v1::EmailTask* task) const {
  mailio::message msg;

  msg.subject(task->subject());
  {
    mailio::mime body;
    {
      body.content_transfer_encoding(
          mailio::mime::content_transfer_encoding_t::BASE_64);
      body.content_type(mailio::message::media_type_t::TEXT,
                        (task->body().html() ? "html" : "plain"), "utf-8");
      body.content(task->body().text());
    }
    msg.add_part(body);
  }

  msg.from(mailio::mail_address(this->_user->name, this->_user->email));
  msg.add_recipient(
      mailio::mail_address(task->to().name(), task->to().email()));
  for (const auto& it : this->_cc) {
    msg.add_cc_recipient(mailio::mail_address(it.name, it.email));
  }
  for (const auto& it : task->cc()) {
    msg.add_cc_recipient(mailio::mail_address(it.name(), it.email()));
  }
  for (const auto& it : this->_bcc) {
    msg.add_bcc_recipient(mailio::mail_address(it.name, it.email));
  }
  for (const auto& it : task->bcc()) {
    msg.add_bcc_recipient(mailio::mail_address(it.name(), it.email()));
  }

  for (const auto& attachment : task->attachments()) {
    std::istringstream iss(attachment.payload());
    const auto type_ = Config::detect(attachment.name());
    msg.attach(std::ref(iss), attachment.name(), type_.first, type_.second);
  }

  spdlog::info("send email '{}' to {} by {}:{}", task->subject(),
               task->to().email(), this->_host, this->_port);
  this->send(msg);
}

void palm::smtp::Config::send(const mailio::message& msg) const {
  mailio::smtps con(this->_host, this->_port, std::chrono::minutes(1));
  con.authenticate(
      this->_user->email, this->_password,
      static_cast<mailio::smtps::auth_method_t>(this->_auth_method));
  con.submit(msg);
}

// https://www.iana.org/assignments/media-types/media-types.xhtml
std::pair<mailio::message::media_type_t, std::string>
palm::smtp::Config::detect(const std::string& name) {
  const auto ext = std::filesystem::path(name).extension();
  if (ext == ".htm" || ext == ".html") {
    return std::make_pair(mailio::message::media_type_t::TEXT, "html");
  }
  if (ext == ".js") {
    return std::make_pair(mailio::message::media_type_t::TEXT, "javascript");
  }
  if (ext == ".css") {
    return std::make_pair(mailio::message::media_type_t::TEXT, "css");
  }
  if (ext == ".csv") {
    return std::make_pair(mailio::message::media_type_t::TEXT, "csv");
  }
  if (ext == ".png") {
    return std::make_pair(mailio::message::media_type_t::IMAGE, "png");
  }
  if (ext == ".jpg" || ext == ".jpeg") {
    return std::make_pair(mailio::message::media_type_t::IMAGE, "jpeg");
  }
  if (ext == ".aac") {
    return std::make_pair(mailio::message::media_type_t::AUDIO, "aac");
  }
  if (ext == ".mp3") {
    return std::make_pair(mailio::message::media_type_t::AUDIO, "mp3");
  }
  if (ext == ".mp4") {
    return std::make_pair(mailio::message::media_type_t::VIDEO, "mp4");
  }
  if (ext == ".pdf") {
    return std::make_pair(mailio::message::media_type_t::APPLICATION, "pdf");
  }
  if (ext == ".doc") {
    return std::make_pair(mailio::message::media_type_t::APPLICATION, "msword");
  }
  if (ext == ".docx") {
    return std::make_pair(
        mailio::message::media_type_t::APPLICATION,
        "vnd.openxmlformats-officedocument.wordprocessingml.document");
  }
  if (ext == ".xls") {
    return std::make_pair(mailio::message::media_type_t::APPLICATION,
                          "ms-excel");
  }
  if (ext == ".xlsx") {
    return std::make_pair(
        mailio::message::media_type_t::APPLICATION,
        "vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  }
  if (ext == ".ppt") {
    return std::make_pair(mailio::message::media_type_t::APPLICATION,
                          "vnd.ms-powerpoint");
  }
  if (ext == ".pptx") {
    return std::make_pair(
        mailio::message::media_type_t::APPLICATION,
        "vnd.openxmlformats-officedocument.presentationml.presentation");
  }
  if (ext == ".epub") {
    return std::make_pair(mailio::message::media_type_t::APPLICATION,
                          "epub+zip");
  }
  spdlog::warn("unmatched ext {}", ext.string());
  return std::make_pair(mailio::message::media_type_t::NONE, "");
}
