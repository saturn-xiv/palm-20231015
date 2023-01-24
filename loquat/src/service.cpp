#include "loquat/service.hpp"

#include <iostream>
#include <memory>
#include <ostream>
#include <string>

#include <tink/aead.h>
#include <tink/aead/aead_config.h>
#include <tink/config.h>
#include <tink/json_keyset_reader.h>
#include <tink/keyset_handle.h>
#include <tink/util/status.h>
