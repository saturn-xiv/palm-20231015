#include "palm/nut.hpp"

grpc::Status palm::nut::LocaleServiceImpl::Set(
    grpc::ServerContext* context,
    const palm::plugins::nut::v1::LocaleSetRequest* request,
    google::protobuf::Empty* reply) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::LocaleServiceImpl::Get(
    grpc::ServerContext* context,
    const palm::plugins::nut::v1::LocaleGetRequest* request,
    palm::plugins::nut::v1::LocaleIndexResponse_Item* reply) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::LocaleServiceImpl::Index(
    grpc::ServerContext* context, const palm::plugins::nut::v1::Pager* request,
    palm::plugins::nut::v1::LocaleIndexResponse* reply) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::nut::LocaleServiceImpl::Destroy(
    grpc::ServerContext* context,
    const palm::plugins::nut::v1::IdRequest* request,
    google::protobuf::Empty* reply) {
  // TODO
  return grpc::Status::OK;
}
