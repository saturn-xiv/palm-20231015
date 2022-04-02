#include "palm/auth.hpp"

void palm::auth::Adapter::LoadPolicy(
    const std::shared_ptr<casbin::Model>& model) {
  // TODO
}
void palm::auth::Adapter::SavePolicy(
    const std::shared_ptr<casbin::Model>& model) {
  // TODO
}
void palm::auth::Adapter::AddPolicy(std::string sec, std::string p_type,
                                    std::vector<std::string> rule) {
  // TODO
}
void palm::auth::Adapter::RemovePolicy(std::string sec, std::string p_type,
                                       std::vector<std::string> rule) {
  // TODO
}
void palm::auth::Adapter::RemoveFilteredPolicy(
    std::string sec, std::string ptype, int field_index,
    std::vector<std::string> field_values) {
  // TODO
}
bool palm::auth::Adapter::IsFiltered() {
  // TODO
  return false;
}

grpc::Status palm::auth::AttachmentService::Index(
    grpc::ServerContext* context, const google::protobuf::Duration* request,
    palm::auth::v1::AttachmentIndexResponse* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::AttachmentService::Show(
    grpc::ServerContext* context,
    const palm::auth::v1::AttachmentShowRequest* request,
    palm::auth::v1::AttachmentIndexResponse_Item* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::AttachmentService::Upload(
    grpc::ServerContext* context,
    const palm::auth::v1::AttachmentUploadRequest* request,
    palm::auth::v1::AttachmentIndexResponse_Item* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::AttachmentService::Destory(
    grpc::ServerContext* context,
    const palm::auth::v1::AttachmentShowRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}

grpc::Status palm::auth::UserService::SignIn(
    grpc::ServerContext* context, const palm::auth::v1::SignInRequest* request,
    palm::auth::v1::SignInResponse* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::SignUp(
    grpc::ServerContext* context, const palm::auth::v1::SignUpRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::ConfirmByEmail(
    grpc::ServerContext* context, const palm::auth::v1::EmailRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::ConfirmByToken(
    grpc::ServerContext* context, const palm::auth::v1::TokenForm* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::UnlockByEmail(
    grpc::ServerContext* context, const palm::auth::v1::EmailRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::UnlockByToken(
    grpc::ServerContext* context, const palm::auth::v1::TokenForm* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::ForgotPassword(
    grpc::ServerContext* context, const palm::auth::v1::EmailRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::ResetPassword(
    grpc::ServerContext* context,
    const palm::auth::v1::ResetPasswordRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::ChangePassword(
    grpc::ServerContext* context,
    const palm::auth::v1::ChangePasswordRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::SetProfile(
    grpc::ServerContext* context, const palm::auth::v1::ProfileRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::SignOut(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::Logs(
    grpc::ServerContext* context, const google::protobuf::Duration* request,
    palm::auth::v1::UserIndexResponse* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::Index(
    grpc::ServerContext* context, const google::protobuf::Duration* request,
    palm::auth::v1::UserIndexResponse* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::Show(
    grpc::ServerContext* context, const palm::auth::v1::UserRequest* request,
    palm::auth::v1::UserIndexResponse_Item* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::Lock(
    grpc::ServerContext* context, const palm::auth::v1::UserRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::Unlock(
    grpc::ServerContext* context, const palm::auth::v1::UserRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::Enable(
    grpc::ServerContext* context, const palm::auth::v1::UserRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
grpc::Status palm::auth::UserService::Disable(
    grpc::ServerContext* context, const palm::auth::v1::UserRequest* request,
    google::protobuf::Empty* response) {
  //  TODO
  return grpc::Status::OK;
}
