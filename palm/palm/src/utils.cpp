#include "palm/utils.hpp"

#include <boost/algorithm/string/join.hpp>
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
