file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/include/carnation/*.hpp")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

find_package(OpenSSL REQUIRED)
find_package(PostgreSQL REQUIRED)
find_package(libpqxx CONFIG REQUIRED)
find_package(unofficial-libmariadb CONFIG REQUIRED)
find_package(unofficial-sqlite3 CONFIG REQUIRED)
find_package(redis++ CONFIG REQUIRED)
find_package(spdlog CONFIG REQUIRED)
find_package(argparse CONFIG REQUIRED)
find_package(magic_enum CONFIG REQUIRED)
find_package(rabbitmq-c CONFIG REQUIRED)

find_package(PkgConfig REQUIRED)
pkg_check_modules(tomlplusplus REQUIRED IMPORTED_TARGET tomlplusplus)

# ---------------------------------------------------------

FetchContent_Declare(casbin
  GIT_REPOSITORY    "https://github.com/casbin/casbin-cpp.git"
  GIT_TAG           "4deab3b"
)

FetchContent_MakeAvailable(casbin)
# ---------------------------------------------------------

file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

add_executable(carnation 
  ${SOURCE_LIST}
  ${PROJECT_SOURCE_DIR}/src/utils.cpp
  "${PROJECT_SOURCE_DIR}/src/orm-postgresql.cpp"
  "${PROJECT_SOURCE_DIR}/src/orm-mysql.cpp"
  "${PROJECT_SOURCE_DIR}/src/orm-sqlite3.cpp"
  "${PROJECT_SOURCE_DIR}/src/cache-redis.cpp"
  "${PROJECT_SOURCE_DIR}/src/queue-rabbitmq.cpp"
)
set_target_properties(carnation PROPERTIES LINK_FLAGS_RELEASE -s)

target_link_libraries(carnation PUBLIC gourd casbin
  OpenSSL::SSL OpenSSL::Crypto
  spdlog::spdlog argparse::argparse magic_enum::magic_enum    
  PkgConfig::tomlplusplus 
  PostgreSQL::PostgreSQL libpqxx::pqxx unofficial::libmariadb unofficial::sqlite3::sqlite3 
  redis++::redis++_static
  rabbitmq::rabbitmq-static
)

target_include_directories(carnation PUBLIC
  ${PROJECT_SOURCE_DIR}/include
  ${CMAKE_CURRENT_SOURCE_DIR}/include
      
  ${tomlplusplus_SOURCE_DIR}/include
  ${spdlog_SOURCE_DIR}/include
  ${argparse_SOURCE_DIR}/include
  ${casbin_SOURCE_DIR}/include
)

