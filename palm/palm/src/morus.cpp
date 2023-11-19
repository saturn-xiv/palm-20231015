#include "palm/morus.hpp"

#include <magic_enum.hpp>

std::string palm::morus::MarkdownClient::markdown_to_html(
    const std::string& text, bool sanitize) {
  grpc::ClientContext context;
  palm::morus::v1::MarkdownToHtmlRequest request;
  request.set_payload(text);
  request.set_sanitize(sanitize);
  palm::morus::v1::MarkdownToHtmlResponse response;

  grpc::Status status = this->_stub->ToHtml(&context, request, &response);
  if (status.ok()) {
    return response.payload();
  }
  spdlog::error("markdown to html: {} {}",
                magic_enum::enum_name(status.error_code()),
                status.error_message());
  throw std::runtime_error(status.error_message());
}
