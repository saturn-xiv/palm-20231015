#pragma once

#include "coconut/env.hpp"

namespace coconut {
namespace web {

class Author {
 public:
  friend class Page;
  friend class Site;

 private:
  std::string email;
  std::string name;
};

class Page {
 public:
  friend class Site;
  void html(const std::string& theme, const std::filesystem::path& file);

 private:
  std::string title;
  std::optional<std::string> summary;
  std::string body;
  std::vector<std::string> tags;
  std::optional<Author> author;
  std::time_t published_at;
};

class Site {
 public:
  void html(const std::string& theme, const std::filesystem::path& target);
  void sitemap_xml(const std::filesystem::path& file) const;
  void rss_xml(const std::filesystem::path& file) const;

 private:
  std::string language;
  std::string title;
  std::string description;
  std::vector<std::string> keywords;
  std::optional<Author> author;
  std::vector<Page> pages;
  std::time_t published_at;
};

class Config {
 public:
  Config(const toml::table& root);
  void dump(const std::filesystem::path& target, const size_t keep) const;

  void sitemap_xml(const std::filesystem::path& file) const;
  void robots_txt(const std::filesystem::path& file) const;
  void html(const std::filesystem::path& target);

 private:
  std::string domain;
  std::string theme;
  std::string default_language;
  std::vector<std::string> languages;
  std::time_t published_at;
};

}  // namespace web
}  // namespace coconut
