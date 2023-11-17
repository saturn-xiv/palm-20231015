#include "palm/utils.hpp"
#include "palm/env.hpp"
#include "palm/version.hpp"

#include <boost/algorithm/string/join.hpp>
#include <boost/date_time/posix_time/posix_time.hpp>
#include <boost/lexical_cast.hpp>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_generators.hpp>
#include <boost/uuid/uuid_io.hpp>

#include <event2/event.h>
#include <google/protobuf/message.h>
#include <grpcpp/grpcpp.h>
#include <openssl/opensslv.h>
#include <thrift/version.h>

std::string palm::uuid() {
  boost::uuids::uuid uuid = boost::uuids::random_generator()();
  std::string it = boost::lexical_cast<std::string>(uuid);
  return it;
}

std::string palm::join(const std::vector<std::string> items,
                       const std::string& sep) {
  return boost::algorithm::join(items, sep);
}

std::chrono::system_clock::time_point palm::to_time_point(
    const std::string& s) {
  const boost::posix_time::ptime ts = boost::posix_time::time_from_string(s);
  auto seconds = boost::posix_time::to_time_t(ts);
  boost::posix_time::time_duration td = ts.time_of_day();
  auto microseconds = td.fractional_seconds();
  auto d =
      std::chrono::seconds{seconds} + std::chrono::microseconds{microseconds};
  std::chrono::system_clock::time_point tp{
      std::chrono::duration_cast<std::chrono::system_clock::duration>(d)};
  return tp;
}

void palm::init(bool debug) {
  spdlog::set_level(debug ? spdlog::level::debug : spdlog::level::info);

  spdlog::debug("run on debug mode {} ({})", palm::GIT_VERSION,
                palm::BUILD_TIME);

  spdlog::debug("OpenSSL v{}", OPENSSL_VERSION_STR);
  spdlog::debug("libevent v{}", event_get_version());
  spdlog::debug(
      "Protocol Buffers v{}",
      google::protobuf::internal::VersionString(GOOGLE_PROTOBUF_VERSION));
  spdlog::debug("Thrift v{}", THRIFT_VERSION);
}
