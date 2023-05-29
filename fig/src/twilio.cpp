#include "palm/twilio.hpp"

#include <boost/log/trivial.hpp>
#include <boost/property_tree/xml_parser.hpp>

palm::twilio::Config::Config(const toml::table& root) {
  this->_from = root["from"].value<std::string>().value();
  this->_account_sid = root["account-sid"].value<std::string>().value();
  this->_auth_token = root["auth-token"].value<std::string>().value();
  this->_sms_status_callback = root["sms-status-callback"].value<std::string>();
}

std::optional<palm::twilio::sms::Response> palm::twilio::Config::sms(
    const std::string& to, const std::string& message) {
  BOOST_LOG_TRIVIAL(debug) << "send sms message to " << to;

  cpr::Payload payload{{"To", to}, {"Body", message}, {"From", this->_from}};
  if (this->_sms_status_callback.has_value()) {
    payload.Add({"StatusCallback", this->_sms_status_callback.value()});
  }
  cpr::Response response =
      cpr::Post(this->sms_url(), this->authentication(), payload);
  if (response.status_code != cpr::status::HTTP_CREATED) {
    BOOST_LOG_TRIVIAL(error) << response.text;
    return std::nullopt;
  }
  BOOST_LOG_TRIVIAL(debug) << response.text;
  auto js = nlohmann::json::parse(response.text);
  palm::twilio::sms::Response it;
  nlohmann::from_json(js, it);
  return it;
}

std::string palm::twilio::InComingPhoneCall::xml() const {
  boost::property_tree::ptree tree;
  tree.put("Response.Say", this->say);
  std::stringstream ss;
  boost::property_tree::xml_parser::write_xml(ss, tree);
  return ss.str();
}

std::string palm::twilio::InComingSmsMessage::xml() const {
  boost::property_tree::ptree tree;
  tree.put("Response.Message", this->message);
  std::stringstream ss;
  boost::property_tree::xml_parser::write_xml(ss, tree);
  return ss.str();
}
