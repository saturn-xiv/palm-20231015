#pragma once

#include <Poco/Data/Session.h>
#include <Poco/Data/SessionPool.h>
#include <casbin/casbin.h>

#include "auth.grpc.pb.h"
#include "palm/cache.hpp"
#include "palm/crypt.hpp"
#include "palm/queue.hpp"

namespace palm {
namespace auth {
class Adapter final : public casbin::Adapter {
 public:
  Adapter(Poco::Data::Session pgsql) : pgsql(pgsql) {}
  void LoadPolicy(const std::shared_ptr<casbin::Model>& model) override;
  void SavePolicy(const std::shared_ptr<casbin::Model>& model) override;
  void AddPolicy(std::string sec, std::string p_type,
                 std::vector<std::string> rule) override;
  void RemovePolicy(std::string sec, std::string p_type,
                    std::vector<std::string> rule) override;
  void RemoveFilteredPolicy(std::string sec, std::string ptype, int field_index,
                            std::vector<std::string> field_values) override;
  bool IsFiltered() override;

 private:
  Poco::Data::Session pgsql;
};

class UserService final : public palm::auth::v1::User::Service {
 public:
  UserService(std::shared_ptr<Poco::Data::SessionPool> pgsql) : pgsql(pgsql) {}
  ~UserService() override {}
  grpc::Status SignIn(grpc::ServerContext* context,
                      const palm::auth::v1::SignInRequest* request,
                      palm::auth::v1::SignInResponse* response) override;
  grpc::Status SignUp(grpc::ServerContext* context,
                      const palm::auth::v1::SignUpRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status ConfirmByEmail(grpc::ServerContext* context,
                              const palm::auth::v1::EmailRequest* request,
                              google::protobuf::Empty* response) override;
  grpc::Status ConfirmByToken(grpc::ServerContext* context,
                              const palm::auth::v1::TokenForm* request,
                              google::protobuf::Empty* response) override;
  grpc::Status UnlockByEmail(grpc::ServerContext* context,
                             const palm::auth::v1::EmailRequest* request,
                             google::protobuf::Empty* response) override;
  grpc::Status UnlockByToken(grpc::ServerContext* context,
                             const palm::auth::v1::TokenForm* request,
                             google::protobuf::Empty* response) override;
  grpc::Status ForgotPassword(grpc::ServerContext* context,
                              const palm::auth::v1::EmailRequest* request,
                              google::protobuf::Empty* response) override;
  grpc::Status ResetPassword(
      grpc::ServerContext* context,
      const palm::auth::v1::ResetPasswordRequest* request,
      google::protobuf::Empty* response) override;
  grpc::Status ChangePassword(
      grpc::ServerContext* context,
      const palm::auth::v1::ChangePasswordRequest* request,
      google::protobuf::Empty* response) override;
  grpc::Status SetProfile(grpc::ServerContext* context,
                          const palm::auth::v1::ProfileRequest* request,
                          google::protobuf::Empty* response) override;
  grpc::Status SignOut(grpc::ServerContext* context,
                       const google::protobuf::Empty* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Logs(grpc::ServerContext* context,
                    const google::protobuf::Duration* request,
                    palm::auth::v1::UserIndexResponse* response) override;
  grpc::Status Index(grpc::ServerContext* context,
                     const google::protobuf::Duration* request,
                     palm::auth::v1::UserIndexResponse* response) override;
  grpc::Status Show(grpc::ServerContext* context,
                    const palm::auth::v1::UserRequest* request,
                    palm::auth::v1::UserIndexResponse_Item* response) override;
  grpc::Status Lock(grpc::ServerContext* context,
                    const palm::auth::v1::UserRequest* request,
                    google::protobuf::Empty* response) override;
  grpc::Status Unlock(grpc::ServerContext* context,
                      const palm::auth::v1::UserRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Enable(grpc::ServerContext* context,
                      const palm::auth::v1::UserRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Disable(grpc::ServerContext* context,
                       const palm::auth::v1::UserRequest* request,
                       google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<Poco::Data::SessionPool> pgsql;
};

class AttachmentService final : public palm::auth::v1::Attachment::Service {
 public:
  AttachmentService(std::shared_ptr<Poco::Data::SessionPool> pgsql)
      : pgsql(pgsql) {}
  ~AttachmentService() override {}
  grpc::Status Index(
      grpc::ServerContext* context, const google::protobuf::Duration* request,
      palm::auth::v1::AttachmentIndexResponse* response) override;
  grpc::Status Show(
      grpc::ServerContext* context,
      const palm::auth::v1::AttachmentShowRequest* request,
      palm::auth::v1::AttachmentIndexResponse_Item* response) override;
  grpc::Status Upload(
      grpc::ServerContext* context,
      const palm::auth::v1::AttachmentUploadRequest* request,
      palm::auth::v1::AttachmentIndexResponse_Item* response) override;
  grpc::Status Destory(grpc::ServerContext* context,
                       const palm::auth::v1::AttachmentShowRequest* request,
                       google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<Poco::Data::SessionPool> pgsql;
};

}  // namespace auth
}  // namespace palm
