#pragma once

#include "palm/env.hpp"

#include <cpr/cpr.h>

namespace palm {
namespace twilio {

namespace sms {
struct Response {
  std::string account_sid;
  std::string api_version;
  std::string body;
  std::string date_created;
  std::optional<std::string> date_sent;
  std::string date_updated;
  std::string direction;
  std::optional<int32_t> error_code;
  std::optional<std::string> error_message;
  std::string from;
  std::optional<std::string> messaging_service_sid;
  std::string num_media;
  std::string num_segments;
  std::optional<std::string> price;
  std::optional<std::string> price_unit;
  std::string sid;
  std::string status;
  std::map<std::string, std::string> subresource_uris;
  std::string to;
  std::string uri;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Response, account_sid, api_version, body,
                                   date_created, date_sent, date_updated,
                                   direction, error_code, error_message, from,
                                   messaging_service_sid, num_media,
                                   num_segments, price, price_unit, sid, status,
                                   subresource_uris, to, uri)

// https://www.twilio.com/docs/sms/tutorials/how-to-confirm-delivery-java
struct DeliveryStatusCallbackForm {
  std::string AccountSid;
  std::string From;
  std::string MessageSid;
  std::string MessageStatus;
  std::string SmsSid;
  std::string SmsStatus;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(DeliveryStatusCallbackForm, AccountSid, From,
                                   MessageSid, MessageStatus, SmsSid, SmsStatus)

// https://www.twilio.com/docs/usage/webhooks/sms-webhooks
// Your status delivery URL will receive an HTTP POST request with the
// application/x-www-form-urlencoded content type.
struct IncomingMessagesCallbackForm {
  std::string To;
  std::string AccountSid;
  std::string ApiVersion;
  std::string MessageStatus;
  std::string SmsSid;
  std::string From;
  std::string MessageSid;
  std::optional<std::string> SmsStatus;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(IncomingMessagesCallbackForm, To, AccountSid,
                                   ApiVersion, MessageStatus, SmsSid, From,
                                   MessageSid, SmsStatus)

struct ReplyForm {
  std::string ToCountry;
  std::string ToState;
  std::string SmsMessageSid;
  std::string NumMedia;
  std::string ToCity;
  std::string FromZip;
  std::string SmsSid;
  std::string FromState;
  std::string SmsStatus;
  std::string FromCity;
  std::string Body;
  std::string FromCountry;
  std::string To;
  std::string ToZip;
  std::string NumSegments;
  std::string MessageSid;
  std::string AccountSid;
  std::string From;
  std::string ApiVersion;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(ReplyForm, ToCountry, ToState, SmsMessageSid,
                                   NumMedia, ToCity, FromZip, SmsSid, FromState,
                                   SmsStatus, FromCity, Body, FromCountry, To,
                                   ToZip, NumSegments, MessageSid, AccountSid,
                                   From, ApiVersion)

}  // namespace sms

namespace voice {
struct VoiceForm {
  std::string Called;
  std::string ToState;
  std::string CallerCountry;
  std::string Direction;
  std::string CallerState;
  std::string ToZip;
  std::string CallSid;
  std::string To;
  std::string CallerZip;
  std::string ToCountry;
  std::string StirVerstat;
  std::string ApiVersion;
  std::string CalledZip;
  std::string CallStatus;
  std::string CalledCity;
  std::string From;
  std::string AccountSid;
  std::string CalledCountry;
  std::string CallerCity;
  std::string Caller;
  std::string FromCountry;
  std::string ToCity;
  std::string FromCity;
  std::string CalledState;
  std::string FromZip;
  std::string FromState;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(VoiceForm, Called, ToState, CallerCountry,
                                   Direction, CallerState, ToZip, CallSid, To,
                                   CallerZip, ToCountry, StirVerstat,
                                   ApiVersion, CalledZip, CallStatus,
                                   CalledCity, From, AccountSid, CalledCountry,
                                   CallerCity, Caller, FromCountry, ToCity,
                                   FromCity, CalledState, FromZip, FromState)
}  // namespace voice

// https://www.twilio.com/docs/glossary/what-is-twilio-markup-language-twiml
class TwiML {
 public:
  virtual std::string xml() const = 0;
};

struct InComingPhoneCall final : TwiML {
  std::string xml() const override;
  std::string say;
};
struct InComingSmsMessage final : TwiML {
  std::string xml() const override;
  std::string message;
};

// https://www.twilio.com/docs/api
// https://support.twilio.com/hc/en-us/articles/223136047-Configure-a-Twilio-Phone-Number-to-Receive-and-Respond-to-Messages
class Config {
 public:
  Config(const toml::table& root);
  Config(const std::string& account_sid, const std::string& auth_token,
         const std::string& from,
         const std::optional<std::string> sms_status_callback = std::nullopt)
      : _account_sid(account_sid),
        _auth_token(auth_token),
        _from(from),
        _sms_status_callback(sms_status_callback) {}
  std::optional<sms::Response> sms(const std::string& to,
                                   const std::string& message);

 private:
  inline cpr::Url sms_url() const {
    std::stringstream ss;
    ss << "https://api.twilio.com/2010-04-01/Accounts/" << this->_account_sid
       << "/Messages.json";
    return cpr::Url{ss.str()};
  }
  inline cpr::Authentication authentication() {
    return cpr::Authentication{this->_account_sid, this->_auth_token,
                               cpr::AuthMode::BASIC};
  }

  std::string _account_sid;
  std::string _auth_token;
  std::string _from;
  std::optional<std::string> _sms_status_callback;
};
}  // namespace twilio
}  // namespace palm
