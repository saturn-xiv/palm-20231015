#include "palm/cache.hpp"

palm::redis::Factory::Factory(const boost::property_tree::ptree& config) {
  this->host = config.get("redis.host", "127.0.0.1");
  this->port = config.get("redis.port", 6379);
  this->db = config.get("redis.db", 0);
  this->pool_size = config.get("redis.pool-size", 32);
}

redisContext* palm::redis::Factory::create() const {
  redisContext* it = redisConnect(this->host.c_str(), this->port);
  if (it == nullptr) {
    throw std::runtime_error("can't allocate redis context");
  }
  if (it->err) {
    throw std::runtime_error(it->errstr);
  }
  {
    auto reply = redisCommand(it, "SELECT %d", this->db);
    if (it->err) {
      throw std::runtime_error(it->errstr);
    }
    freeReplyObject(reply);
  }
  return it;
}

std::vector<std::pair<std::string, int64_t>>
palm::redis::PooledConnection::all() {
  std::vector<std::pair<std::string, int64_t>> items;
  redisReply* reply = (redisReply*)redisCommand(this->db, "KEYS *");
  if (this->db->err) {
    throw std::runtime_error(this->db->errstr);
  }
  for (size_t i = 0; i < reply->elements; i++) {
    const std::string k = reply->element[i]->str;
    redisReply* r = (redisReply*)redisCommand(this->db, "TTL %s", k.c_str());
    if (reply == nullptr) {
      throw std::runtime_error(this->db->errstr);
    }
    const size_t v = r->integer;
    freeReplyObject(r);
    items.push_back(std::make_pair(k, v));
  }
  freeReplyObject(reply);
  return items;
}
void palm::redis::PooledConnection::clear() {
  redisReply* reply = (redisReply*)redisCommand(this->db, "FLUSHDB");
  if (this->db->err) {
    throw std::runtime_error(this->db->errstr);
  }
  freeReplyObject(reply);
}
