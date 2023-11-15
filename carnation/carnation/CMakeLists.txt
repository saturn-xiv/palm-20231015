cmake_minimum_required(VERSION 3.21)
include(FetchContent)

project(
    carnation
    VERSION 2023.1.15
    DESCRIPTION "A auth & rbac service."
    LANGUAGES CXX)

# ---------------------------------------------------------

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXE_LINKER_FLAGS "-static -Wl,--build-id=sha1")

# --------------------------------------------------------

execute_process(COMMAND git describe --tags --always --dirty
    OUTPUT_VARIABLE GIT_REV
    ERROR_QUIET
)
string(STRIP "${GIT_REV}" GIT_REV)
string(TIMESTAMP BUILD_TIME UTC)
configure_file(include/carnation/version.h.in ${PROJECT_SOURCE_DIR}/include/carnation/version.hpp)

# ---------------------------------------------------------
FetchContent_Declare(tomlplusplus 
  GIT_REPOSITORY  "https://github.com/marzer/tomlplusplus.git"
  GIT_TAG         "v3.4.0"
)

FetchContent_Declare(spdlog 
  GIT_REPOSITORY  "https://github.com/gabime/spdlog.git"
  GIT_TAG         "v1.12.0"
)

FetchContent_Declare(argparse
  GIT_REPOSITORY  "https://github.com/p-ranav/argparse.git"
  GIT_TAG         "v3.0"
)

FetchContent_Declare(mailio
  GIT_REPOSITORY    "https://github.com/karastojko/mailio.git"
  GIT_TAG           "9e67f32"
)

FetchContent_Declare(casbin
  GIT_REPOSITORY    "https://github.com/casbin/casbin-cpp.git"
  GIT_TAG           "4deab3b"
)

FetchContent_Declare(libpqxx
  GIT_REPOSITORY    "https://github.com/jtv/libpqxx.git"
  GIT_TAG           "7586846"
)

FetchContent_MakeAvailable(tomlplusplus spdlog argparse mailio casbin libpqxx)
# ---------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_executable(carnation ${SOURCE_LIST})
set_target_properties(carnation PROPERTIES LINK_FLAGS_RELEASE -s)

target_link_libraries(carnation PUBLIC
  casbin mailio pqxx
)

target_include_directories(carnation PUBLIC
  ${PROJECT_SOURCE_DIR}/include
  ${PROJECT_SOURCE_DIR}/../include
    
  ${tomlplusplus_SOURCE_DIR}/include
  ${spdlog_SOURCE_DIR}/include
  ${argparse_SOURCE_DIR}/include
  ${mailio_SOURCE_DIR}/include
  ${casbin_SOURCE_DIR}/include
)

