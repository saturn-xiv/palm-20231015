cmake_minimum_required(VERSION 3.21)
include(FetchContent)

project(
    coconut
    VERSION 2023.5.2
    DESCRIPTION "A backup tool."
    LANGUAGES CXX)

# ---------------------------------------------------------

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXE_LINKER_FLAGS "-static -s -Wl,--build-id=sha1")

# --------------------------------------------------------

execute_process(COMMAND git describe --tags --always --dirty
    OUTPUT_VARIABLE GIT_REV
    ERROR_QUIET
)
string(STRIP "${GIT_REV}" GIT_REV)
string(TIMESTAMP BUILD_TIME UTC)
configure_file(include/coconut/version.h.in ${PROJECT_SOURCE_DIR}/include/coconut/version.hpp)

# ---------------------------------------------------------
FetchContent_Declare(tomlplusplus 
  GIT_REPOSITORY  "https://github.com/marzer/tomlplusplus.git"
  GIT_TAG         "v3.3.0"
)

FetchContent_Declare(spdlog 
  GIT_REPOSITORY  "https://github.com/gabime/spdlog.git"
  GIT_TAG         "v1.11.0"
)

FetchContent_Declare(argparse
  GIT_REPOSITORY  "https://github.com/p-ranav/argparse.git"
  GIT_TAG         "557948f"
)

FetchContent_Declare(inja 
  GIT_REPOSITORY  "https://github.com/pantor/inja.git"
  GIT_TAG         "v3.4.0"
)

FetchContent_MakeAvailable(tomlplusplus inja spdlog argparse)
# ---------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_executable(coconut ${SOURCE_LIST})

target_include_directories(coconut PUBLIC
  ${PROJECT_SOURCE_DIR}/include
  ${PROJECT_SOURCE_DIR}/../include
    
  ${tomlplusplus_SOURCE_DIR}/include
  ${spdlog_SOURCE_DIR}/include
  ${argparse_SOURCE_DIR}/include
  ${inja_SOURCE_DIR}/single_include
  ${inja_SOURCE_DIR}/third_party/include
)

