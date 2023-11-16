#include "palm/email.hpp"

#include <filesystem>

#include <mailio/mailboxes.hpp>
#include <mailio/message.hpp>
#include <mailio/smtp.hpp>

// https://support.google.com/a/answer/176600?hl=en
// https://service.mail.qq.com/detail/0/427
palm::smtp::Config::Config(const toml::table& node) {
  this->_host = node["host"].value_or("smtp.gmail.com");
  this->_port = node["port"].value_or(465);
  this->_password = node["password"].value<std::string>().value();
  {
    const auto tmp = node["from"];
    if (tmp) {
      const auto from = tmp.as_table();
      this->_from = std::make_shared<palm::smtp::Address>(*from);
    } else {
      spdlog::error("can't load smtp from option");
    }
  }
  {
    const auto tmp = node["cc"];
    if (tmp) {
      const auto cc = tmp.as_array();
      for (const auto& it : *cc) {
        const auto node = it.as_table();
        palm::smtp::Address tmp(*node);
        this->_cc.push_back(tmp);
      }
    } else {
      spdlog::warn("empty smtp cc option");
    }
  }
  {
    const auto tmp = node["bcc"];
    const auto bcc = tmp.as_array();
    if (bcc) {
      for (const auto& it : *bcc) {
        const auto node = it.as_table();
        palm::smtp::Address tmp(*node);
        this->_cc.push_back(tmp);
      }
    } else {
      spdlog::warn("empty smtp bcc option");
    }
  }
}

palm::smtp::Address::Address(const toml::table& node) {
  this->username = node["username"].value<std::string>().value();
  this->email = node["email"].value<std::string>().value();
}

void palm::smtp::Config::send(
    const palm::smtp::Address& to, const std::vector<Address> cc,
    const std::vector<Address> bcc, const std::string& subject,
    const std::string& content, bool is_html,
    std::vector<std::pair<std::string, std::string>> attachments) const {
  spdlog::info("send email from {} to {}: {}", this->_from->email, to.email,
               subject);
  mailio::message msg;
  msg.from(mailio::mail_address(to.username, to.email));
  {
    for (const auto& it : cc) {
      msg.add_cc_recipient(
          mailio::mail_address(mailio::mail_address(it.username, it.email)));
    }
    for (const auto& it : this->_cc) {
      msg.add_cc_recipient(
          mailio::mail_address(mailio::mail_address(it.username, it.email)));
    }
  }
  {
    for (const auto& it : bcc) {
      msg.add_bcc_recipient(
          mailio::mail_address(mailio::mail_address(it.username, it.email)));
    }
    for (const auto& it : this->_bcc) {
      msg.add_bcc_recipient(
          mailio::mail_address(mailio::mail_address(it.username, it.email)));
    }
  }

  msg.subject(subject);
  if (is_html) {
    mailio::mime it;
    it.content_type(mailio::message::media_type_t::TEXT, "html", "utf-8");
    it.content_transfer_encoding(
        mailio::mime::content_transfer_encoding_t::BIT_8);
    it.content(content);

    msg.add_part(it);
  } else {
    msg.content(content);
  }

  //   static std::vector<std::string> IMAGES{".png", ".jpg", ".jpeg"};
  for (const auto& att : attachments) {
    spdlog::debug("append attachment {}", att.first);
    const std::string ext = std::filesystem::path(att.first).extension();

    mailio::mime it;
    if (ext == ".txt" || ext == ".log") {
      it.content_type(mailio::message::media_type_t::TEXT, "txt");
      it.content_disposition(mailio::mime::content_disposition_t::INLINE);
    } else if (ext == ".htm" || ext == ".html") {
      it.content_type(mailio::message::media_type_t::TEXT, "html");
      it.content_disposition(mailio::mime::content_disposition_t::INLINE);
    } else if (ext == ".png") {
      it.content_type(mailio::message::media_type_t::IMAGE, "png");
      it.content_disposition(mailio::mime::content_disposition_t::INLINE);
    } else if (ext == ".png" || ext == ".jpeg") {
      it.content_type(mailio::message::media_type_t::IMAGE, "jpeg");
      it.content_disposition(mailio::mime::content_disposition_t::INLINE);
    } else if (ext == ".svg") {
      it.content_type(mailio::message::media_type_t::IMAGE, "svg");
      it.content_disposition(mailio::mime::content_disposition_t::INLINE);
    } else if (ext == ".pdf") {
      it.content_type(mailio::message::media_type_t::APPLICATION, "pdf");
      it.content_disposition(mailio::mime::content_disposition_t::INLINE);
    } else if (ext == ".mp3") {
      it.content_type(mailio::message::media_type_t::AUDIO, "mp3");
      it.content_disposition(mailio::mime::content_disposition_t::ATTACHMENT);
    } else if (ext == ".wav") {
      it.content_type(mailio::message::media_type_t::AUDIO, "wav");
      it.content_disposition(mailio::mime::content_disposition_t::ATTACHMENT);
    } else if (ext == ".mp4") {
      it.content_type(mailio::message::media_type_t::VIDEO, "mp4");
      it.content_disposition(mailio::mime::content_disposition_t::ATTACHMENT);
    } else {
      spdlog::warn("unknown attachment type {}", att.first);
      it.content_disposition(mailio::mime::content_disposition_t::ATTACHMENT);
    }
    it.content_transfer_encoding(
        mailio::mime::content_transfer_encoding_t::BASE_64);
    it.content(att.second);
    it.name(att.first);
  }

  mailio::smtps conn(this->_host, this->_port);
  conn.authenticate(this->_from->email, this->_password,
                    mailio::smtps::auth_method_t::START_TLS);
  conn.submit(msg);
}
