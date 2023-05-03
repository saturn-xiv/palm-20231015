file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/cpp/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/cpp/*.cc")

add_library(bamboo STATIC ${SOURCE_LIST})

find_package(Protobuf CONFIG REQUIRED)
find_package(gRPC CONFIG REQUIRED)

target_include_directories(bamboo PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/cpp/
)

target_link_libraries(bamboo PUBLIC
  dl crypt m
  re2::re2 c-ares::cares
  gRPC::gpr gRPC::grpc gRPC::grpc++ gRPC::grpc++_alts # gRPC::grpc++_reflection
)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/cpp"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
