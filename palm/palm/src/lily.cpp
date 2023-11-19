#include "palm/lily.hpp"

palm::lily::v1::S3File palm::lily::TexClient::to_word(
    const palm::lily::v1::TexToRequest& request) {
  grpc::ClientContext context;
  palm::lily::v1::S3File response;
  grpc::Status status = this->_stub->ToWord(&context, request, &response);
  palm::check(status, __PRETTY_FUNCTION__);
  return std::move(response);
}
palm::lily::v1::S3File palm::lily::TexClient::to_pdf(
    const palm::lily::v1::TexToRequest& request) {
  grpc::ClientContext context;
  palm::lily::v1::S3File response;
  grpc::Status status = this->_stub->ToPdf(&context, request, &response);
  palm::check(status, __PRETTY_FUNCTION__);
  return std::move(response);
}
