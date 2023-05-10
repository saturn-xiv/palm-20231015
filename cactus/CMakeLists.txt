file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

find_package(PostgreSQL REQUIRED)

add_library(cactus STATIC ${SOURCE_LIST})

target_include_directories(cactus PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/include/
)

target_link_libraries(cactus PUBLIC
  ${PostgreSQL_LIBRARIES}
  Poco::ActiveRecord
)

source_group(
  TREE "${CMAKE_CURRENT_SOURCE_DIR}/src"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)
