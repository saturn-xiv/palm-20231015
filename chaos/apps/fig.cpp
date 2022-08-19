#include <cstdlib>

#include "palm/fig.hpp"

int main(int argc, char** argv) {
  palm::fig::Application app;
  app.launch(argc, argv);
  return EXIT_SUCCESS;
}
