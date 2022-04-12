file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/loquat/cpp/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/loquat/cpp/*.cc")

add_library(loquat STATIC ${SOURCE_LIST})

target_include_directories(loquat PUBLIC
  ${palm_SOURCE_DIR}/loquat/cpp/
)
target_link_directories(loquat PUBLIC
  ${grpc_BINARY_DIR}
  ${grpc_BINARY_DIR}/third_party/protobuf
)

target_link_libraries(loquat PUBLIC
  dl crypt m
  ${ZLIB_LIBRARIES} ${OPENSSL_LIBRARIES}
  protobuf grpc++ grpc++_reflection
)

source_group(
  TREE "${PROJECT_SOURCE_DIR}/loquat/cpp"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
