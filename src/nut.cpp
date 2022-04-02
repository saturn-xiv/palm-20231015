#include "palm/nut.hpp"

#include <boost/log/expressions.hpp>

grpc::Status palm::nut::SiteService::Refresh(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    palm::nut::v1::LayoutResponse* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SiteService::SetAuthor(
    grpc::ServerContext* context,
    const palm::nut::v1::LayoutResponse_Site_Author* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SiteService::SetCopyright(
    grpc::ServerContext* context,
    const palm::nut::v1::SiteSetCopyrightRequest* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SiteService::SetKeywords(
    grpc::ServerContext* context,
    const palm::nut::v1::SiteSetKeywordsRequest* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SiteService::SetInfo(
    grpc::ServerContext* context,
    const palm::nut::v1::SiteSetInfoRequest* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SiteService::GetInfo(
    grpc::ServerContext* context,
    const palm::nut::v1::SiteGetInfoRequest* request,
    palm::nut::v1::LayoutResponse_Site* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::LocaleService::Index(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    palm::nut::v1::LocaleIndexResponse* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::LocaleService::ByLang(
    grpc::ServerContext* context,
    const palm::nut::v1::LocaleIndexRequest* request,
    palm::nut::v1::LocaleIndexResponse* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::LocaleService::Set(
    grpc::ServerContext* context,
    const palm::nut::v1::LocaleSetRequest* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SmtpService::Get(grpc::ServerContext* context,
                                         const google::protobuf::Empty* request,
                                         palm::nut::v1::SmtpProfile* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SmtpService::Set(
    grpc::ServerContext* context, const palm::nut::v1::SmtpProfile* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::SmtpService::Ping(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::TwilioService::Get(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    palm::nut::v1::TwilioProfile* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::TwilioService::Set(
    grpc::ServerContext* context, const palm::nut::v1::TwilioProfile* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::TwilioService::Ping(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::GoogleService::Get(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    palm::nut::v1::GoogleProfile* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::GoogleService::Set(
    grpc::ServerContext* context, const palm::nut::v1::GoogleProfile* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::GoogleService::Ping(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::BaiduService::Get(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    palm::nut::v1::BaiduProfile* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::BaiduService::Set(
    grpc::ServerContext* context, const palm::nut::v1::BaiduProfile* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::BaiduService::Ping(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::WechatPayService::Get(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    palm::nut::v1::WechatPayProfile* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::WechatPayService::Set(
    grpc::ServerContext* context,
    const palm::nut::v1::WechatPayProfile* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::WechatPayService::Ping(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::AliPayService::Get(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    palm::nut::v1::AliPayProfile* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::AliPayService::Set(
    grpc::ServerContext* context, const palm::nut::v1::AliPayProfile* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::AliPayService::Ping(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}

void palm::init_logger(bool debug) {
  boost::log::core::get()->set_filter(
      boost::log::trivial::severity >=
      (debug ? boost::log::trivial::debug : boost::log::trivial::info));
  BOOST_LOG_TRIVIAL(debug) << "run on debug mode";
}
