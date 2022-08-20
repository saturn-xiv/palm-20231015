#pragma once

#include <algorithm>
#include <chrono>
#include <climits>
#include <ctime>
#include <exception>
#include <filesystem>
#include <functional>
#include <iomanip>
#include <iostream>
#include <memory>
#include <numeric>
#include <optional>
#include <random>
#include <sstream>
#include <string>
#include <thread>
#include <typeinfo>
#include <unordered_map>
#include <vector>

#define BOOST_NO_CXX98_FUNCTION_BASE
#include <boost/algorithm/string.hpp>
#include <boost/asio/deadline_timer.hpp>
#include <boost/asio/io_service.hpp>
#include <boost/asio/strand.hpp>
#include <boost/date_time/posix_time/posix_time.hpp>
#include <boost/lexical_cast.hpp>
#include <boost/log/trivial.hpp>
#include <boost/optional.hpp>
#include <boost/type_index.hpp>

#define TOML_EXCEPTIONS 1
#include <toml.hpp>

#include <nlohmann/json.hpp>

namespace palm {
void init_logger(bool debug = false);
inline boost::posix_time::ptime now() {
  return boost::posix_time::microsec_clock::universal_time();
}
const static char* STD_TM_ISO8601_FORMAT = "%Y-%m-%dT%H:%M:%SZ";
}  // namespace palm

namespace nlohmann {
template <typename T>
struct adl_serializer<boost::optional<T>> {
  static void to_json(json& j, const boost::optional<T>& o) {
    if (o == boost::none) {
      j = nullptr;
    } else {
      j = *o;
    }
  }

  static void from_json(const json& j, boost::optional<T>& o) {
    if (j.is_null()) {
      o = boost::none;
    } else {
      o = j.get<T>();
    }
  }
};

inline void to_json(json& j, const std::tm& o) {
  std::ostringstream ss;
  ss << std::put_time(&o, palm::STD_TM_ISO8601_FORMAT);
  j = ss.str();
}

inline void from_json(const json& j, std::tm& o) {
  const std::string v = j;
  std::istringstream ss(v);
  ss >> std::get_time(&o, palm::STD_TM_ISO8601_FORMAT);
  if (ss.fail()) {
    BOOST_LOG_TRIVIAL(error) << "parse time failed " << v;
  }
}

}  // namespace nlohmann
