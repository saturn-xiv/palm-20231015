cmake_minimum_required(VERSION 3.16)
include(ExternalProject)
include(FetchContent)

project(
    palm
    VERSION 2023.1.20
    DESCRIPTION "Cryptographic service."
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
FetchContent_Declare(spdlog
  GIT_REPOSITORY  "https://github.com/gabime/spdlog.git"
  GIT_TAG         "v1.11.0"
)
FetchContent_Declare(tomlplusplus
  GIT_REPOSITORY  "https://github.com/marzer/tomlplusplus.git"
  GIT_TAG         "v3.2.0"
)
FetchContent_Declare(nlohmann_json
  GIT_REPOSITORY  "https://github.com/nlohmann/json.git"
  GIT_TAG         "v3.11.2"
)
FetchContent_Declare(httplib
  GIT_REPOSITORY  "https://github.com/yhirose/cpp-httplib.git"
  GIT_TAG         "v0.11.4"
)
FetchContent_Declare(tink
  GIT_REPOSITORY  "https://github.com/google/tink.git"
  GIT_TAG         "v1.7.0"
)

FetchContent_MakeAvailable(spdlog tomlplusplus nlohmann_json httplib tink)
# --------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/src/*.cpp")

add_executable(loquat ${SOURCE_LIST})
set_target_properties(loquat PROPERTIES LINK_FLAGS_RELEASE -s)
target_link_libraries(loquat
  tink::static 
  tink::jwt::jwt_key_templates tink::jwt::jwt_mac tink::jwt::jwt_mac_config
  absl::base absl::flags absl::flags_parse
  nlohmann_json::nlohmann_json
)

target_include_directories(loquat PUBLIC
  ${palm_SOURCE_DIR}/include
  ${spdlog_SOURCE_DIR}/include
  ${httplib_SOURCE_DIR}
  ${tomlplusplus_SOURCE_DIR}
)


