
#include "palm/mint.hpp"

#include <boost/log/trivial.hpp>

#include <sodium.h>

int main(int argc, char** argv) {
  if (sodium_init() < 0) {
    BOOST_LOG_TRIVIAL(error) << "failed to init libsodium";
    return EXIT_FAILURE;
  }

  palm::mint::Application app(argc, argv);
  return EXIT_SUCCESS;
}
