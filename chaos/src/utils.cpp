#include "palm/utils.hpp"

#include <boost/log/expressions.hpp>

void palm::init_logger(bool debug) {
  boost::log::core::get()->set_filter(
      boost::log::trivial::severity >=
      (debug ? boost::log::trivial::debug : boost::log::trivial::info));
  BOOST_LOG_TRIVIAL(debug) << "enable debug logging";
}
