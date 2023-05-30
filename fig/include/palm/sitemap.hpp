#pragma once

// #include <ctime>
// #include <memory>
// #include <optional>
// #include <string>
// #include <vector>

// namespace palm {
// // https://www.sitemaps.org/protocol.html#
// namespace sitemap {
// enum class ChangeFreq { Always, Hourly, Daily, Weekly, Monthly, Yearly, Never };
// inline static const std::string XMLNS =
//     "http://www.sitemaps.org/schemas/sitemap/0.9";

// struct Url {
//   std::string loc;
//   std::optional<std::tm> last_mod;
//   std::optional<ChangeFreq> change_freq;
//   std::optional<float> priority;
// };

// struct UrlSet {
//   std::string build(const std::string& home) const;

//   std::vector<Url> items;
// };

// struct Sitemap {
//   std::string loc;
//   std::optional<std::tm> last_mod;
// };

// struct SitemapIndex {
//   std::string build(const std::string& home) const;

//   std::vector<Sitemap> items;
// };

// }  // namespace sitemap
// }  // namespace palm
