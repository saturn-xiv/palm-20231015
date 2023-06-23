find_package(Libevent CONFIG REQUIRED)

FetchContent_Declare(grpc
  GIT_REPOSITORY    "https://github.com/grpc/grpc.git"
  GIT_TAG           "v1.56.0"
)
FetchContent_MakeAvailable(grpc)

file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cc")

add_library(gourd STATIC ${SOURCE_LIST})
# target_link_directories(gourd PRIVATE ${CMAKE_CURRENT_BINARY_DIR}/lib)

target_link_libraries(gourd PUBLIC
  grpc++
)

# target_include_directories(gourd PUBLIC
#   ${CMAKE_CURRENT_SOURCE_DIR}/src
  
#   ${thrift_SOURCE_DIR}/lib/cpp/src
#   ${thrift_SOURCE_DIR}/compiler/cpp/src
#   ${thrift_BINARY_DIR}
# )

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/src"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
