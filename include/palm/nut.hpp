#pragma once

#include "nut.grpc.pb.h"
#include "palm/orm.hpp"

namespace palm {
namespace nut {

class SiteService final : public palm::nut::v1::Site::Service {
 public:
  SiteService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~SiteService() override {}
  grpc::Status Refresh(grpc::ServerContext* context,
                       const google::protobuf::Empty* request,
                       palm::nut::v1::LayoutResponse* response) override;
  grpc::Status SetAuthor(
      grpc::ServerContext* context,
      const palm::nut::v1::LayoutResponse_Site_Author* request,
      google::protobuf::Empty* response) override;
  grpc::Status SetCopyright(
      grpc::ServerContext* context,
      const palm::nut::v1::SiteSetCopyrightRequest* request,
      google::protobuf::Empty* response) override;
  grpc::Status SetKeywords(grpc::ServerContext* context,
                           const palm::nut::v1::SiteSetKeywordsRequest* request,
                           google::protobuf::Empty* response) override;
  grpc::Status SetInfo(grpc::ServerContext* context,
                       const palm::nut::v1::SiteSetInfoRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status GetInfo(grpc::ServerContext* context,
                       const palm::nut::v1::SiteGetInfoRequest* request,
                       palm::nut::v1::LayoutResponse_Site* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};
class LocaleService final : public palm::nut::v1::Locale::Service {
 public:
  LocaleService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~LocaleService() override {}
  grpc::Status Index(grpc::ServerContext* context,
                     const google::protobuf::Empty* request,
                     palm::nut::v1::LocaleIndexResponse* response) override;
  grpc::Status ByLang(grpc::ServerContext* context,
                      const palm::nut::v1::LocaleIndexRequest* request,
                      palm::nut::v1::LocaleIndexResponse* response) override;
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::nut::v1::LocaleSetRequest* request,
                   google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};
class SmtpService final : public palm::nut::v1::Smtp::Service {
 public:
  SmtpService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~SmtpService() override {}
  grpc::Status Get(grpc::ServerContext* context,
                   const google::protobuf::Empty* request,
                   palm::nut::v1::SmtpProfile* response) override;
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::nut::v1::SmtpProfile* request,
                   google::protobuf::Empty* response) override;
  grpc::Status Ping(grpc::ServerContext* context,
                    const google::protobuf::Empty* request,
                    google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};
class TwilioService final : public palm::nut::v1::Twilio::Service {
 public:
  TwilioService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~TwilioService() override {}
  grpc::Status Get(grpc::ServerContext* context,
                   const google::protobuf::Empty* request,
                   palm::nut::v1::TwilioProfile* response) override;
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::nut::v1::TwilioProfile* request,
                   google::protobuf::Empty* response) override;
  grpc::Status Ping(grpc::ServerContext* context,
                    const google::protobuf::Empty* request,
                    google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};
class GoogleService final : public palm::nut::v1::Google::Service {
 public:
  GoogleService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~GoogleService() override {}
  grpc::Status Get(grpc::ServerContext* context,
                   const google::protobuf::Empty* request,
                   palm::nut::v1::GoogleProfile* response) override;
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::nut::v1::GoogleProfile* request,
                   google::protobuf::Empty* response) override;
  grpc::Status Ping(grpc::ServerContext* context,
                    const google::protobuf::Empty* request,
                    google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};
class BaiduService final : public palm::nut::v1::Baidu::Service {
 public:
  BaiduService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~BaiduService() override {}
  grpc::Status Get(grpc::ServerContext* context,
                   const google::protobuf::Empty* request,
                   palm::nut::v1::BaiduProfile* response) override;
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::nut::v1::BaiduProfile* request,
                   google::protobuf::Empty* response) override;
  grpc::Status Ping(grpc::ServerContext* context,
                    const google::protobuf::Empty* request,
                    google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};
class WechatPayService final : public palm::nut::v1::WechatPay::Service {
 public:
  WechatPayService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~WechatPayService() override {}
  grpc::Status Get(grpc::ServerContext* context,
                   const google::protobuf::Empty* request,
                   palm::nut::v1::WechatPayProfile* response) override;
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::nut::v1::WechatPayProfile* request,
                   google::protobuf::Empty* response) override;
  grpc::Status Ping(grpc::ServerContext* context,
                    const google::protobuf::Empty* request,
                    google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};
class AliPayService final : public palm::nut::v1::AliPay::Service {
 public:
  AliPayService(std::shared_ptr<palm::orm::Factory> db) : db(db) {}
  ~AliPayService() override {}
  grpc::Status Get(grpc::ServerContext* context,
                   const google::protobuf::Empty* request,
                   palm::nut::v1::AliPayProfile* response) override;
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::nut::v1::AliPayProfile* request,
                   google::protobuf::Empty* response) override;
  grpc::Status Ping(grpc::ServerContext* context,
                    const google::protobuf::Empty* request,
                    google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<palm::orm::Factory> db;
};

}  // namespace nut
void init_logger(bool debug = false);
}  // namespace palm
