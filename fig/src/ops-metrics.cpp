#include "palm/ops-metrics.hpp"

#include <boost/log/trivial.hpp>

grpc::Status palm::ops::metrics::ReportService::Heartbeat(
    grpc::ServerContext* context,
    const palm::ops::metrics::v1::ReportHeartbeatRequest* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status palm::ops::metrics::ReportService::Journal(
    grpc::ServerContext* context,
    const palm::ops::metrics::v1::ReportJournalRequest* request,
    google::protobuf::Empty* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status palm::ops::metrics::ReportService::Nginx(
    grpc::ServerContext* context,
    const palm::ops::metrics::v1::ReportNginxRequest* request,
    google::protobuf::Empty* response) {
  // TODO
  if (request->has_error()) {
    std::cout << "receive nginx error " << request->error() << std::endl;
  }
  return grpc::Status::OK;
}

void palm::ops::metrics::ReportClient::nginx_error(const std::string& line) {
  palm::ops::metrics::v1::ReportNginxRequest request;
  {  // TODO
    request.set_error(line);
  }
  google::protobuf::Empty response;

  grpc::ClientContext context;
  grpc::Status status = this->_stub->Nginx(&context, request, &response);

  if (!status.ok()) {
    BOOST_LOG_TRIVIAL(error)
        << "(" << status.error_code() << ")" << status.error_message();
  }
}
