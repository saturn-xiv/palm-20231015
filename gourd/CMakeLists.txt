file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/gourd/cpp/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/gourd/cpp/*.cc")

add_library(gourd STATIC ${SOURCE_LIST})

target_include_directories(gourd PUBLIC
  ${palm_SOURCE_DIR}/gourd/cpp/
)

target_link_libraries(gourd PUBLIC
  dl crypt m
)

source_group(
  TREE "${PROJECT_SOURCE_DIR}/gourd/cpp"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
