find_package(Libevent CONFIG REQUIRED)
find_package(re2 CONFIG REQUIRED)
find_package(gRPC CONFIG REQUIRED)

FetchContent_Declare(thrift
  GIT_REPOSITORY    "https://github.com/apache/thrift.git"
  GIT_TAG           "v0.19.0"
)
FetchContent_MakeAvailable(thrift)

file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

add_library(gourd STATIC ${SOURCE_LIST})
target_link_directories(gourd PRIVATE ${CMAKE_CURRENT_BINARY_DIR}/lib)

target_link_libraries(gourd PUBLIC dl m
  re2::re2
  gRPC::grpc gRPC::grpc++ gRPC::grpc++_alts # gRPC::grpc++_reflection
  libevent::core libevent::extra libevent::pthreads
  thrift thriftnb thriftz
)

target_include_directories(gourd PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/src
  
  ${thrift_SOURCE_DIR}/lib/cpp/src
  ${thrift_SOURCE_DIR}/compiler/cpp/src
  ${thrift_BINARY_DIR}
)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/src"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
