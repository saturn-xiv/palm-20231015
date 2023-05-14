#include "babel.hpp"

#include <boost/log/expressions.hpp>

int main(int argc, char **argv)
{
    boost::log::core::get()->set_filter(boost::log::trivial::severity >= boost::log::trivial::debug);
    BOOST_LOG_TRIVIAL(info) << "startup";
    palm::babel::Application app(argc, argv);
    BOOST_LOG_TRIVIAL(warning) << "shutdown";
    return EXIT_SUCCESS;
}
