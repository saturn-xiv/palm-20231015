#pragma once

#include "palm/env.hpp"

#include <inja/inja.hpp>

namespace palm {
namespace content_types {
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
inline static const std::string TEXT_HTML_UTF8 = "text/html; charset=utf-8";
inline static const std::string APPLICATION_JSON_UTF8 =
    "application/json; charset=utf-8";
inline static const std::string APPLICATION_XML_UTF8 =
    "application/xml; charset=utf-8";
}  // namespace content_types
namespace themes {

inja::Environment load(const std::string& name);

class Bootstrap5 {};
class CleanWhite {};
class Docsy {};
class Gantry5 {};
class Hinode {};
class Universal {};
class XCorporation {};
}  // namespace themes
}  // namespace palm
