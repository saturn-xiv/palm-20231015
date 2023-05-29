#include "palm/nut.hpp"
#include "palm/nut-sql.hpp"

#include <cstdio>

#include <boost/log/expressions.hpp>

bool palm::is_stopped() {
  std::filesystem::path file(".stop");
  const auto ok = std::filesystem::exists(file);
  if (ok) {
    BOOST_LOG_TRIVIAL(error)
        << "stopped file " << file << " exists, will be exited";
  }
  return ok;
}

void palm::init_logger(bool debug) {
  boost::log::core::get()->set_filter(
      boost::log::trivial::severity >=
      (debug ? boost::log::trivial::debug : boost::log::trivial::info));
  BOOST_LOG_TRIVIAL(debug) << "run on debug mode";
}

std::string palm::shell(const std::string& command) {
  std::array<char, 128> buffer;
  std::string result;
  std::unique_ptr<FILE, decltype(&pclose)> pipe(popen(command.c_str(), "r"),
                                                pclose);
  if (!pipe) {
    throw std::runtime_error("popen() failed!");
  }
  while (fgets(buffer.data(), buffer.size(), pipe.get()) != nullptr) {
    result += buffer.data();
  }
  return result;
}
