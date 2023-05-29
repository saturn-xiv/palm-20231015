#pragma once

#include <memory>
#include <string>

#include <grpcpp/grpcpp.h>

#include "ops-metrics.grpc.pb.h"

namespace palm {
namespace ops {
namespace metrics {

class ReportService final : public v1::Report::Service {
  grpc::Status Heartbeat(grpc::ServerContext* context,
                         const v1::ReportHeartbeatRequest* request,
                         google::protobuf::Empty* response) override;
  grpc::Status Journal(grpc::ServerContext* context,
                       const v1::ReportJournalRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Nginx(grpc::ServerContext* context,
                     const v1::ReportNginxRequest* request,
                     google::protobuf::Empty* response) override;
};

class ReportClient final {
 public:
  ReportClient(std::shared_ptr<grpc::Channel> channel)
      : _stub(v1::Report::NewStub(channel)) {}

  void nginx_error(const std::string& line);

 private:
  std::unique_ptr<v1::Report::Stub> _stub;
};
}  // namespace metrics
}  // namespace ops
}  // namespace palm
