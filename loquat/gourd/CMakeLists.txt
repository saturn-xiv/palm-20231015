FetchContent_Declare(libevent
  GIT_REPOSITORY    "https://github.com/libevent/libevent.git"
  GIT_TAG           "release-2.1.12-stable"
  PATCH_COMMAND     patch < ${CMAKE_CURRENT_LIST_DIR}/scripts/libevent-remove-uninstall.patch || true
)
FetchContent_Declare(thrift
  GIT_REPOSITORY    "https://github.com/apache/thrift.git"
  GIT_TAG           "v0.18.1"
)
FetchContent_MakeAvailable(libevent thrift)

file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

add_library(gourd STATIC ${SOURCE_LIST})
target_link_directories(gourd PRIVATE ${CMAKE_CURRENT_BINARY_DIR}/lib)

target_link_libraries(gourd
  event_static thrift thriftnb thriftz
)

target_include_directories(gourd PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/src

  ${libevent_SOURCE_DIR}/include
  ${libevent_BINARY_DIR}/include
  ${thrift_SOURCE_DIR}/lib/cpp/src
  ${thrift_BINARY_DIR}
)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/src"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
