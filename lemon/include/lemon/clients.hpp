#pragma once

#include "lemon/env.hpp"

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winconsistent-missing-override"
#include <grpcpp/support/proto_buffer_reader.h>
#include <grpcpp/support/proto_buffer_writer.h>
#pragma clang diagnostic pop

#include "babel.grpc.pb.h"
#include "cbeta.grpc.pb.h"
#include "chats.grpc.pb.h"
#include "cms.grpc.pb.h"
#include "courses.grpc.pb.h"
#include "cscd.grpc.pb.h"
#include "forum.grpc.pb.h"
#include "mall.grpc.pb.h"
#include "musa.grpc.pb.h"
#include "nut.grpc.pb.h"
#include "ops-ddns.grpc.pb.h"
#include "ops-mail.grpc.pb.h"
#include "ops-metrics.grpc.pb.h"
#include "ops-router.grpc.pb.h"
#include "ops-vpn.grpc.pb.h"
#include "orchid.grpc.pb.h"
#include "rbac.grpc.pb.h"

#include <grpcpp/grpcpp.h>

namespace palm {

namespace nut {
class LocaleClient {
 public:
  LocaleClient(std::shared_ptr<grpc::Channel> channel)
      : _stub(palm::nut::v1::Local::NewStub(channel)) {}

 private:
  std::unique_ptr<palm::nut::v1::Locale::Stub> _stub;
};
}  // namespace nut

namespace cms {}

namespace forum {}

}  // namespace palm
