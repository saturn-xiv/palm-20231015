file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.h")
file(GLOB PAGE_SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")
file(GLOB GRPC_SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cc")

add_library(bamboo STATIC ${PAGE_SOURCE_LIST} ${GRPC_SOURCE_LIST})

find_package(OpenSSL REQUIRED)


FetchContent_Declare(Poco
    GIT_REPOSITORY  "https://github.com/pocoproject/poco.git"
    GIT_TAG         "poco-1.12.4-release"
)
FetchContent_MakeAvailable(Poco)

target_include_directories(bamboo PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/src/
)

target_link_libraries(bamboo PUBLIC
  dl m ${OPENSSL_LIBRARIES}
  Poco::Foundation Poco::Net  
  re2::re2 c-ares::cares
  gRPC::gpr gRPC::grpc gRPC::grpc++ gRPC::grpc++_alts # gRPC::grpc++_reflection
)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/src"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
