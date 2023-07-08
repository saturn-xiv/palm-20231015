cmake_minimum_required(VERSION 3.16)
include(ExternalProject)
include(FetchContent)

project(
    lemon
    VERSION 2023.6.23
    DESCRIPTION "A web-frontend application."
    LANGUAGES C CXX)
# --------------------------------------------------------

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# --------------------------------------------------------

execute_process(COMMAND git describe --tags --always --dirty
    OUTPUT_VARIABLE GIT_REV
    ERROR_QUIET
)
string(STRIP "${GIT_REV}" GIT_REV)
string(TIMESTAMP BUILD_TIME UTC)
configure_file(include/lemon/version.h.in ${PROJECT_SOURCE_DIR}/include/lemon/version.hpp)

# --------------------------------------------------------

FetchContent_Declare(spdlog
  GIT_REPOSITORY  "https://github.com/gabime/spdlog.git"
  GIT_TAG         "v1.12.0"
)
FetchContent_Declare(tomlplusplus
  GIT_REPOSITORY  "https://github.com/marzer/tomlplusplus.git"
  GIT_TAG         "v3.3.0"
)
FetchContent_Declare(argparse
  GIT_REPOSITORY  "https://github.com/p-ranav/argparse.git"
  GIT_TAG         "557948f"
)
FetchContent_Declare(inja
  GIT_REPOSITORY  "https://github.com/pantor/inja.git"
  GIT_TAG         "v3.4.0"
)
FetchContent_Declare(httplib
  GIT_REPOSITORY  "https://github.com/yhirose/cpp-httplib.git"
  GIT_TAG         "v0.13.1"
)

FetchContent_Declare(magic_enum
  GIT_REPOSITORY  "https://github.com/Neargye/magic_enum.git"
  GIT_TAG         "v0.9.3"
)

FetchContent_MakeAvailable(spdlog argparse tomlplusplus inja httplib magic_enum)

# --------------------------------------------------------

add_subdirectory(gourd)

# --------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_executable(lemon ${SOURCE_LIST})
set_target_properties(lemon PROPERTIES LINK_FLAGS_RELEASE -s)

target_link_libraries(lemon gourd)

target_include_directories(lemon PUBLIC
  ${PROJECT_SOURCE_DIR}/include
    
  ${spdlog_SOURCE_DIR}/include
  ${argparse_SOURCE_DIR}/include
  ${tomlplusplus_SOURCE_DIR}/include
  ${httplib_SOURCE_DIR}
  ${inja_SOURCE_DIR}/include
  ${inja_SOURCE_DIR}/third_party/include
  ${magic_enum_SOURCE_DIR}/include
)


