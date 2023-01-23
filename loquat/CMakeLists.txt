cmake_minimum_required(VERSION 3.21)
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
find_package(OpenSSL REQUIRED)

add_subdirectory(3rd/tink)
add_subdirectory(3rd/grpc)
# --------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/src/*.cpp")

add_executable(loquat ${SOURCE_LIST})
set_target_properties(loquat PROPERTIES LINK_FLAGS_RELEASE -s)
target_link_libraries(loquat tink::static)

target_include_directories(loquat PUBLIC
  ${palm_SOURCE_DIR}/include
  
)


