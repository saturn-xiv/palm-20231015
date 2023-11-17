#pragma once

#include "palm/env.hpp"

#include <mutex>
#include <queue>

#include <pqxx/pqxx>

namespace palm {

namespace postgresql {

class Pool {
 public:
  Pool(const std::string& url, size_t pool_size);
  inline size_t idle_size() {
    std::lock_guard<std::mutex> guard(_mutex);
    return this->_queue.size();
  }
  inline std::unique_ptr<pqxx::connection> get() {
    std::lock_guard<std::mutex> guard(_mutex);
    if (this->_queue.empty()) {
      spdlog::error("postgresql pool is empty");
      return nullptr;
    }
    std::unique_ptr<pqxx::connection> it = std::move(this->_queue.front());
    this->_queue.pop();
    return it;
  }
  inline void release(std::unique_ptr<pqxx::connection> it) {
    if (it == nullptr) {
      spdlog::error("empty postgresql connection");
      return;
    }
    std::lock_guard<std::mutex> guard(_mutex);
    this->_queue.push(std::move(it));
  }

 private:
  std::queue<std::unique_ptr<pqxx::connection>> _queue;
  std::mutex _mutex;
};
class PooledConnection {
 public:
  PooledConnection(std::shared_ptr<Pool> pool) : _pool(pool), db(pool->get()) {}

  ~PooledConnection() {
    { this->_pool->release(std::move(this->db)); }
  }
  std::unique_ptr<pqxx::connection> db;

 private:
  std::shared_ptr<Pool> _pool;
};
// https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-PARAMKEYWORDS
// https://www.pgpool.net/mediawiki/index.php/Main_Page
class Config {
 public:
  Config(const toml::table& node);
  std::shared_ptr<Pool> open();

  friend std::ostream& operator<<(std::ostream& os, const Config& it) {
    os << "postgresql://" << it._user << "@" << it._host << ":" << it._port
       << "/" << it._dbname;
    return os;
  }

 private:
  std::string _host;
  uint16_t _port;
  std::string _dbname;
  std::string _user;
  std::optional<std::string> _password;
  size_t _pool_size;
};

}  // namespace postgresql

namespace mysql {}

namespace sqlite3 {}

}  // namespace palm
