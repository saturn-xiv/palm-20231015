FetchContent_Declare(thrift
  GIT_REPOSITORY    "https://github.com/apache/thrift.git"
  GIT_TAG           "v0.18.1"
)
FetchContent_MakeAvailable(thrift)

file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

add_library(gourd STATIC ${SOURCE_LIST})

target_include_directories(gourd PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/src
  ${thrift_SOURCE_DIR}/lib/cpp/src
  ${thrift_BINARY_DIR}
)

target_link_libraries(gourd PUBLIC thrift thriftnb)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/src"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
