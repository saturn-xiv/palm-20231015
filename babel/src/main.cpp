#include "babel.hpp"

#include <sys/utsname.h>

#include <grpcpp/grpcpp.h>
#include <boost/log/expressions.hpp>

#include "version.hpp"

int main(int argc, char **argv) {
  boost::log::core::get()->set_filter(boost::log::trivial::severity >=
                                      boost::log::trivial::debug);
  BOOST_LOG_TRIVIAL(info) << "startup " << babel::GIT_VERSION << "("
                          << babel::BUILD_TIME << ")";
  {
    {
      utsname it;
      uname(&it);
      BOOST_LOG_TRIVIAL(debug)
          << it.sysname << " " << it.nodename << " " << it.release << " "
          << it.version << " " << it.machine;
    }

    BOOST_LOG_TRIVIAL(debug) << "Dear ImGui v" << IMGUI_VERSION;
    BOOST_LOG_TRIVIAL(debug) << "Boost v" << BOOST_LIB_VERSION;
    BOOST_LOG_TRIVIAL(debug)
        << "Protocol Buffers v"
        << google::protobuf::internal::VersionString(GOOGLE_PROTOBUF_VERSION);
    BOOST_LOG_TRIVIAL(debug) << "gRPC v" << grpc::Version();
  }
  palm::babel::Application app(argc, argv);
  BOOST_LOG_TRIVIAL(warning) << "shutdown";
  return EXIT_SUCCESS;
}
