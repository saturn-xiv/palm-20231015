find_package(Protobuf CONFIG REQUIRED)
find_package(gRPC CONFIG REQUIRED)

file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cc")

add_library(lemon STATIC ${SOURCE_LIST})

target_link_libraries(lemon PUBLIC
  dl m
  re2::re2 c-ares::cares
  gRPC::gpr gRPC::grpc gRPC::grpc++ gRPC::grpc++_alts # gRPC::grpc++_reflection
)

target_include_directories(lemon PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/src
)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/src"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
