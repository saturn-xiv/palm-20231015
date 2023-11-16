#include "palm/utils.hpp"

#include <boost/algorithm/string/join.hpp>
#include <boost/date_time/posix_time/posix_time.hpp>
#include <boost/lexical_cast.hpp>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_generators.hpp>
#include <boost/uuid/uuid_io.hpp>

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
