#include "palm/morus.hpp"

std::string palm::morus::MarkdownClient::markdown_to_html(
    const std::string& text, bool sanitize) {
  grpc::ClientContext context;
  palm::morus::v1::MarkdownToHtmlRequest request;
  request.set_payload(text);
  request.set_sanitize(sanitize);
  palm::morus::v1::MarkdownToHtmlResponse response;

  grpc::Status status = this->_stub->ToHtml(&context, request, &response);
  palm::check(status, __PRETTY_FUNCTION__);
  return response.payload();
}
