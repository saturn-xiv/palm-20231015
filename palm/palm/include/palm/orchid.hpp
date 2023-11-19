#pragma once

#include "orchid.grpc.pb.h"
#include "palm/env.hpp"
#include "palm/loquat.hpp"
#include "palm/utils.hpp"

namespace palm {
namespace orchid {
class Application {
 public:
  Application(int argc, char** argv);

 private:
  void launch(uint16_t port, const palm::Tls& tls) const;
};
class WechatMiniProgramServiceImpl final
    : public palm::orchid::v1::WechatMiniProgram::Service {
 public:
  WechatMiniProgramServiceImpl()
      : palm::orchid::v1::WechatMiniProgram::Service() {}

  grpc::Status Login(
      grpc::ServerContext* context,
      const palm::orchid::v1::WechatMiniProgramLoginRequest* request,
      palm::orchid::v1::WechatMiniProgramLoginResponse* reply) override;
  grpc::Status PhoneNumber(
      grpc::ServerContext* context,
      const palm::orchid::v1::WechatMiniProgramPhoneNumberRequest* request,
      palm::orchid::v1::WechatMiniProgramPhoneNumberResponse* reply) override;
};
class WechatOauth2ServiceImpl final
    : public palm::orchid::v1::WechatOauth2::Service {
 public:
  WechatOauth2ServiceImpl() : palm::orchid::v1::WechatOauth2::Service() {}

  grpc::Status QrConnect(
      grpc::ServerContext* context,
      const palm::orchid::v1::WechatOauth2QrConnectRequest* request,
      palm::orchid::v1::WechatOauth2QrConnectResponse* reply) override;
  grpc::Status Login(
      grpc::ServerContext* context,
      const palm::orchid::v1::WechatOauth2LoginRequest* request,
      palm::orchid::v1::WechatOauth2LoginResponse* reply) override;
};

}  // namespace orchid
}  // namespace palm
