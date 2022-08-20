set(Boost_USE_STATIC_LIBS ON)
find_package(Boost REQUIRED
  log log_setup date_time chrono timer json system iostreams program_options unit_test_framework
)

file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/include/palm/*.hpp")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_library(palm STATIC ${SOURCE_LIST})

target_include_directories(palm PUBLIC
  /usr/include/postgresql
  
  ${palm_SOURCE_DIR}/include
  ${tomlplusplus_SOURCE_DIR}/include/toml++
  ${inja_SOURCE_DIR}/single_include/inja
  ${inja_SOURCE_DIR}/third_party/include
  ${redisplusplus_SOURCE_DIR}/src
  ${soci_SOURCE_DIR}/include
  ${soci_BINARY_DIR}/include
)

target_link_libraries(palm PUBLIC 
  coco ${Boost_LIBRARIES}
  redis++_static cpr::cpr
  soci_core_static soci_postgresql_static soci_mysql_static soci_sqlite3_static
)

source_group(
  TREE "${PROJECT_SOURCE_DIR}/include"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)

