cmake_minimum_required(VERSION 3.21)
include(FetchContent)

project(
    coconut
    VERSION 2022.11.14
    LANGUAGES CXX)

# ---------------------------------------------------------

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXE_LINKER_FLAGS "-static -s -Wl,--build-id=sha1")

include(../third.cmake)
# ---------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

add_executable(coconut ${SOURCE_LIST})

target_include_directories(coconut PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/include
  ${CMAKE_CURRENT_SOURCE_DIR}/../include
  
  ${tomlplusplus_SOURCE_DIR}/include
  ${spdlog_SOURCE_DIR}/include
  ${taywee_args_SOURCE_DIR}
  ${inja_SOURCE_DIR}/single_include
  ${inja_SOURCE_DIR}/third_party/include
)

