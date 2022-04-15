#pragma once

#include <chrono>
#include <cstdint>
#include <ctime>
#include <deque>
#include <mutex>
#include <set>
#include <sstream>
#include <stdexcept>
#include <utility>
#include <vector>

#include <Poco/Redis/Client.h>
#include <hiredis/hiredis.h>
#include <boost/log/trivial.hpp>
#include <boost/property_tree/ptree.hpp>

namespace palm {
class Cache {};
namespace redis {

class Factory {
 public:
  Factory(const boost::property_tree::ptree& config);
  size_t size() { return this->pool_size; };
  redisContext* create() const;

 private:
  std::string host;
  uint16_t port;
  uint8_t db;
  size_t pool_size;
};

class Pool {
 public:
  Pool(Pool const&) = delete;
  void operator=(Pool const&) = delete;

  static Pool& instance() {
    static Pool it;
    return it;
  }
  inline redisContext* borrow() {
    const std::lock_guard<std::mutex> lock(this->locker);

    if (this->pool.size() == 0) {
      for (auto it : this->borrowed) {
        if (it->err) {
          BOOST_LOG_TRIVIAL(error) << it->errstr;
          redisFree(it);
          it = nullptr;
        }
        if (it == nullptr) {
          BOOST_LOG_TRIVIAL(warning)
              << R"(creating new cache connection to replace discarded connection)";
          redisContext* con = this->factory->create();
          this->borrowed.erase(it);
          this->borrowed.insert(con);
          return con;
        }
      }

      throw std::runtime_error("no available connection in cache pool");
    }

    redisContext* it = this->pool.front();
    this->pool.pop_front();
    this->borrowed.insert(it);
    return it;
  }

  inline void release(redisContext* it) {
    const std::lock_guard<std::mutex> lock(this->locker);
    this->pool.push_back(it);
    this->borrowed.erase(it);
  }

  void open(std::shared_ptr<Factory> factory) {
    const std::lock_guard<std::mutex> lock(this->locker);

    while (this->pool.size() < factory->size()) {
      this->pool.push_back(factory->create());
    }
    this->factory = factory;
  }
  size_t idle() {
    const std::lock_guard<std::mutex> lock(this->locker);
    return this->pool.size();
  }

 private:
  Pool() {}

  std::deque<redisContext*> pool;
  std::set<redisContext*> borrowed;
  std::shared_ptr<Factory> factory;
  std::mutex locker;
};

class PooledConnection {
 public:
  PooledConnection() { this->db = Pool::instance().borrow(); }
  ~PooledConnection() { Pool::instance().release(this->db); }
  inline std::optional<std::string> get(const std::string& key) {
    redisReply* reply =
        (redisReply*)redisCommand(this->db, "GET %s", key.c_str());
    if (reply == nullptr) {
      return std::nullopt;
    }
    std::string it = reply->str;
    freeReplyObject(reply);
    return it;
  }
  inline void set(const std::string& key, const std::string& value,
                  const std::chrono::seconds& ttl =
                      std::chrono::duration_cast<std::chrono::seconds>(
                          std::chrono::days(1))) {
    redisReply* reply = (redisReply*)redisCommand(
        this->db, "SET %s %s EX %d", key.c_str(), value.c_str(), ttl.count());
    if (reply == nullptr) {
      throw std::runtime_error(this->db->errstr);
    }
    BOOST_LOG_TRIVIAL(debug) << reply->str;
    freeReplyObject(reply);
  }
  std::vector<std::pair<std::string, int64_t>> all();
  void clear();

 private:
  redisContext* db;
};
}  // namespace redis
}  // namespace palm
