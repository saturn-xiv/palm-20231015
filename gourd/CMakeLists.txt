file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/cpp/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/cpp/*.cc")

FetchContent_Declare(gRPC
    GIT_REPOSITORY  "https://github.com/grpc/grpc.git"
    GIT_TAG         "v1.54.1"
)
FetchContent_MakeAvailable(gRPC)

add_library(gourd STATIC ${SOURCE_LIST})

target_include_directories(gourd PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/cpp/
)

target_link_libraries(gourd PUBLIC
  dl crypt m
  grpc++
)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/cpp"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
