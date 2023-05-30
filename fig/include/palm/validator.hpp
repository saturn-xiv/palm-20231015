#pragma once

// #include <regex>
// #include <string>

// namespace palm {
// namespace validator {
// inline void email(const std::string& s) {
//   const static std::regex re(
//       R"([_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4}))",
//       std::regex::extended);
//   std::smatch rs;
//   if (!std::regex_match(s, rs, re)) {
//     throw std::invalid_argument("invalid email address");
//   }
// }
// inline void password(const std::string& s) {
//   if (s.length() < 6) {
//     throw std::invalid_argument("invalid password");
//   }
// }
// inline void code(const std::string& s) {
//   const static std::regex re(R"([\._A-Za-z0-9-]{2,250})", std::regex::extended);
//   std::smatch rs;
//   if (!std::regex_match(s, rs, re)) {
//     throw std::invalid_argument("invalid code");
//   }
// }
// inline void url(const std::string& s) {
//   const static std::regex re(
//       R"(^(([^:\/?#]+):)?(//([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?)",
//       std::regex::extended);
//   std::smatch rs;
//   if (!std::regex_match(s, rs, re)) {
//     throw std::invalid_argument("malformed url.");
//   }
// }
// }  // namespace validator
// }  // namespace palm
