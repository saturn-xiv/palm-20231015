cmake_minimum_required(VERSION 3.21)
include(ExternalProject)
include(FetchContent)

project(
    palm
    VERSION 2023.5.29
    DESCRIPTION "A total free education & translation & ops solution."
    LANGUAGES CXX
)
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
configure_file(include/palm/version.h.in ${PROJECT_SOURCE_DIR}/include/palm/version.hpp)

# --------------------------------------------------------

add_subdirectory(${CMAKE_CURRENT_SOURCE_DIR}/../gourd ${CMAKE_CURRENT_BINARY_DIR}/gourd)
add_subdirectory(${CMAKE_CURRENT_SOURCE_DIR}/../lemon ${CMAKE_CURRENT_BINARY_DIR}/lemon)
add_subdirectory(src)
add_subdirectory(apps)
add_subdirectory(tests)
