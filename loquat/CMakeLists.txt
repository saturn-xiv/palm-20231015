cmake_minimum_required(VERSION 3.16)
include(ExternalProject)
include(FetchContent)

project(
    loquat
    VERSION 2023.4.12
    DESCRIPTION "A cryptographic rpc service(google tink)."
    LANGUAGES C CXX)
# --------------------------------------------------------

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# --------------------------------------------------------

execute_process(COMMAND git describe --tags --always --dirty
    OUTPUT_VARIABLE GIT_REV
    ERROR_QUIET
)
string(STRIP "${GIT_REV}" GIT_REV)
string(TIMESTAMP BUILD_TIME UTC)
configure_file(include/loquat/version.h.in ${PROJECT_SOURCE_DIR}/include/loquat/version.hpp)

# --------------------------------------------------------

find_package(OpenSSL REQUIRED)
# find_package(Libevent REQUIRED)

# --------------------------------------------------------
FetchContent_Declare(spdlog
  GIT_REPOSITORY  "https://github.com/gabime/spdlog.git"
  GIT_TAG         "v1.11.0"
)
FetchContent_Declare(tomlplusplus
  GIT_REPOSITORY  "https://github.com/marzer/tomlplusplus.git"
  GIT_TAG         "v3.3.0"
)
FetchContent_Declare(nlohmann_json
  GIT_REPOSITORY  "https://github.com/nlohmann/json.git"
  GIT_TAG         "v3.11.2"
)
FetchContent_Declare(httplib
  GIT_REPOSITORY  "https://github.com/yhirose/cpp-httplib.git"
  GIT_TAG         "v0.12.3"
)
FetchContent_Declare(argparse
  GIT_REPOSITORY  "https://github.com/p-ranav/argparse.git"
  GIT_TAG         "557948f"
)
FetchContent_Declare(tink
  GIT_REPOSITORY  "https://github.com/tink-crypto/tink-cc.git"
  GIT_TAG         "6b16bea" # TODO openssl v3 v2.0.0
)
FetchContent_MakeAvailable(spdlog argparse tomlplusplus nlohmann_json httplib tink)

# --------------------------------------------------------

add_subdirectory(gourd)

# --------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_executable(loquat ${SOURCE_LIST})
set_target_properties(loquat PROPERTIES LINK_FLAGS_RELEASE -s)

target_link_libraries(loquat gourd
  ${OPENSSL_LIBRARIES}
  tink::static tink::jwt::jwt_key_templates tink::jwt::jwt_mac tink::jwt::jwt_mac_config
  absl::base absl::flags absl::flags_parse
  nlohmann_json::nlohmann_json
)

target_include_directories(loquat PUBLIC
  ${PROJECT_SOURCE_DIR}/include
    
  ${spdlog_SOURCE_DIR}/include
  ${argparse_SOURCE_DIR}/include
  ${httplib_SOURCE_DIR}
  ${tomlplusplus_SOURCE_DIR}/include  
)


