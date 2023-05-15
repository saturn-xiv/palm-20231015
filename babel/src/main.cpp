#include "babel.hpp"

#include <boost/log/expressions.hpp>
#include <grpcpp/grpcpp.h>

int main(int argc, char **argv)
{
    boost::log::core::get()->set_filter(boost::log::trivial::severity >= boost::log::trivial::debug);
    BOOST_LOG_TRIVIAL(info) << "startup";
    {
        BOOST_LOG_TRIVIAL(debug) << "Boost v" << BOOST_LIB_VERSION;
        BOOST_LOG_TRIVIAL(debug) << "Protocol Buffers v" << google::protobuf::internal::VersionString(GOOGLE_PROTOBUF_VERSION);
        BOOST_LOG_TRIVIAL(debug) << "gRPC v" << grpc::Version();
    }
    palm::babel::Application app(argc, argv);
    BOOST_LOG_TRIVIAL(warning) << "shutdown";
    return EXIT_SUCCESS;
}
