#include "palm/crypto.hpp"

#include <boost/date_time/gregorian/gregorian.hpp>
#include <boost/date_time/posix_time/posix_time.hpp>
#include <boost/date_time/posix_time/posix_time_io.hpp>
#include <boost/date_time/time_facet.hpp>

std::filesystem::path palm::timestamp(const std::filesystem::path& folder,
                                      const std::string& prefix,
                                      std::optional<std::string> extension) {
  auto file = folder / (prefix + "-" + palm::timestamp());
  if (extension) {
    file.replace_extension(extension.value());
  }
  return file;
}

std::string palm::timestamp() {
  //   const std::chrono::time_point<std::chrono::system_clock> now =
  //       std::chrono::system_clock::now();
  //   const std::time_t tc = std::chrono::system_clock::to_time_t(now);
  //   std::stringstream ss;
  //   ss << std::put_time(std::localtime(&tc), "%Y%m%d%H%M%S");
  //   return ss.str();

  std::ostringstream ss;
  ss.imbue(std::locale(std::cout.getloc(),
                       new boost::posix_time::time_facet("%Y%m%d%H%M%S%f")));
  ss << boost::posix_time::microsec_clock::local_time();
  return ss.str();
}
