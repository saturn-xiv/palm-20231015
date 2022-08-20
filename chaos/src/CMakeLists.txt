set(Boost_USE_STATIC_LIBS ON)
find_package(Boost REQUIRED
  log log_setup date_time chrono timer json system iostreams program_options unit_test_framework
)

file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/include/palm/*.hpp")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_library(palm STATIC ${SOURCE_LIST})

target_include_directories(palm PUBLIC
  ${PROJECT_SOURCE_DIR}/include
)

target_link_libraries(palm PUBLIC coco)

source_group(
  TREE "${PROJECT_SOURCE_DIR}/include"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)

