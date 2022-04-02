#pragma once

#include <boost/property_tree/ptree.hpp>

namespace palm {
namespace fig {
class Application {
 public:
  Application(int argc, char** argv);
  void rpc(const boost::property_tree::ptree& tree) const;
  void web(const boost::property_tree::ptree& tree) const;
  void worker(const boost::property_tree::ptree& tree) const;

 private:
};
}  // namespace fig
}  // namespace palm
