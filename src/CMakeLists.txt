file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/include/palm/*.hpp")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/src/*.cpp")

add_library(palm STATIC ${SOURCE_LIST})

target_include_directories(palm PUBLIC
  ${palm_SOURCE_DIR}/include
  ${casbin_SOURCE_DIR}/include
  ${nlohmann_json_SOURCE_DIR}/single_include
  ${hiredis_SOURCE_DIR}
  ${soci_SOURCE_DIR}/include
  ${soci_BINARY_DIR}/include
  ${rabbitmq_c_SOURCE_DIR}/librabbitmq
  ${cppcodec_SOURCE_DIR}
)
target_link_directories(palm PUBLIC
  ${palm_BINARY_DIR}/lib
  ${rabbitmq_c_BINARY_DIR}/librabbitmq
)

target_link_libraries(palm PUBLIC 
  ${Boost_DATE_TIME_LIBRARY} ${Boost_LOG_LIBRARY} ${Boost_LOG_SETUP_LIBRARY} ${Boost_PROGRAM_OPTIONS_LIBRARY}
  ${PostgreSQL_LIBRARIES} ${SQLite3_LIBRARIES}
  mysqlclient hiredis_static 
  loquat casbin
)

if(CMAKE_BUILD_TYPE MATCHES Debug)
  target_link_libraries(palm PUBLIC 
    soci_cored soci_postgresqld soci_mysqld soci_sqlite3d
    rabbitmqd  
  )
else()
  target_link_libraries(palm PUBLIC 
    soci_core soci_postgresql soci_mysql soci_sqlite3
    rabbitmq
  )
endif()

source_group(
  TREE "${PROJECT_SOURCE_DIR}/include"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)

