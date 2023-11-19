#pragma once

#include "morus.grpc.pb.h"
#include "palm/utils.hpp"

namespace palm {
namespace morus {
class MarkdownClient {
 public:
  MarkdownClient(std::shared_ptr<grpc::Channel> channel)
      : _stub(palm::morus::v1::Markdown::NewStub(channel)) {}

  std::string markdown_to_html(const std::string& text, bool sanitize = true);

 private:
  std::unique_ptr<palm::morus::v1::Markdown::Stub> _stub;
};
}  // namespace morus
}  // namespace palm
