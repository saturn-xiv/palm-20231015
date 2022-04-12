#pragma once

#include "palm/orm.hpp"

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
      std::shared_ptr<soci::session> db) const = 0;
  virtual std::shared_ptr<palm::rss::Channel> rss(
      std::shared_ptr<soci::session> db, const std::string& lang) const = 0;
};
}  // namespace palm
