#pragma once

#include "nut.grpc.pb.h"
#include "palm/cache.hpp"
#include "palm/crypto.hpp"
#include "palm/jwt.hpp"
#include "palm/orm.hpp"
#include "palm/queue.hpp"
#include "palm/search-engine.hpp"

namespace palm {
namespace nut {
class LocaleServiceImpl final : public palm::plugins::nut::v1::Locale::Service {
  grpc::Status Set(grpc::ServerContext* context,
                   const palm::plugins::nut::v1::LocaleSetRequest* request,
                   google::protobuf::Empty* reply) override;
  grpc::Status Get(
      grpc::ServerContext* context,
      const palm::plugins::nut::v1::LocaleGetRequest* request,
      palm::plugins::nut::v1::LocaleIndexResponse_Item* reply) override;
  grpc::Status Index(
      grpc::ServerContext* context,
      const palm::plugins::nut::v1::Pager* request,
      palm::plugins::nut::v1::LocaleIndexResponse* reply) override;
  grpc::Status Destroy(grpc::ServerContext* context,
                       const palm::plugins::nut::v1::IdRequest* request,
                       google::protobuf::Empty* reply) override;
};
}  // namespace nut
}  // namespace palm
