#pragma once

#include "lemon/clients.hpp"

namespace lemon {

namespace theme {
class Handler {
 public:
  virtual std::string home() = 0;
  virtual std::string home_by_lang(const std::string& lang) = 0;
};

class CleanWhite : public Handler {
 public:
  CleanWhite(const std::string& server) : _server(server) {}
  std::string home() override;
  std::string home_by_lang(const std::string& lang) override;

 private:
  const std::string _server;
};

class Docsy : public Handler {
 public:
  Docsy(const std::string& server) : _server(server) {}
  std::string home() override;
  std::string home_by_lang(const std::string& lang) override;

 private:
  const std::string _server;
};

class Gantry : public Handler {
 public:
  Gantry(const std::string& server) : _server(server) {}
  std::string home() override;
  std::string home_by_lang(const std::string& lang) override;

 private:
  const std::string _server;
};

class Hinode : public Handler {
 public:
  Hinode(const std::string& server) : _server(server) {}
  std::string home() override;
  std::string home_by_lang(const std::string& lang) override;

 private:
  const std::string _server;
};

class Universal : public Handler {
 public:
  Universal(const std::string& server) : _server(server) {}
  std::string home() override;
  std::string home_by_lang(const std::string& lang) override;

 private:
  const std::string _server;
};

class XCorporation : public Handler {
 public:
  XCorporation(const std::string& server) : _server(server) {}
  std::string home() override;
  std::string home_by_lang(const std::string& lang) override;

 private:
  const std::string _server;
};

}  // namespace theme
}  // namespace lemon
