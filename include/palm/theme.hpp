#pragma once

#include <memory>
#include <string>
#include <vector>

namespace palm {

namespace sitemap {
class Item {};
}  // namespace sitemap

namespace rss {
class Item {};
class Channel {};
}  // namespace rss

class Plugin {
 public:
  virtual std::vector<palm::sitemap::Item> sitemap(
      const std::string& lang) const = 0;
  virtual std::shared_ptr<palm::rss::Channel> rss(
      const std::string& lang) const = 0;
};
}  // namespace palm
