#pragma once

#include "lily.grpc.pb.h"
#include "palm/utils.hpp"

namespace palm {
namespace lily {
class TexClient {
 public:
  TexClient(std::shared_ptr<grpc::Channel> channel)
      : _stub(palm::lily::v1::Tex::NewStub(channel)) {}

  palm::lily::v1::S3File to_pdf(const palm::lily::v1::TexToRequest& request);
  palm::lily::v1::S3File to_word(const palm::lily::v1::TexToRequest& request);

 private:
  std::unique_ptr<palm::lily::v1::Tex::Stub> _stub;
};
}  // namespace lily
}  // namespace palm
