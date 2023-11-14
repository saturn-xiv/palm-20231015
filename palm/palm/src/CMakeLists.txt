file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/include/palm/*.hpp")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_library(palm STATIC ${SOURCE_LIST})

find_package(OpenSSL REQUIRED)
find_package(Poco REQUIRED Util)
find_package(PahoMqttCpp CONFIG REQUIRED)
find_package(rabbitmq-c CONFIG REQUIRED)
find_package(cpr CONFIG REQUIRED)
find_package(aws-cpp-sdk-s3 CONFIG REQUIRED)
find_package(aws-cpp-sdk-sqs CONFIG REQUIRED)
find_package(Libssh2 CONFIG REQUIRED)
find_package(LibLZMA REQUIRED)
find_package(Libevent CONFIG REQUIRED)
# find_package(unofficial-git2 CONFIG REQUIRED)
find_package(SailC++ CONFIG REQUIRED)
find_package(pugixml CONFIG REQUIRED)
find_package(tomlplusplus CONFIG REQUIRED)
find_package(yaml-cpp CONFIG REQUIRED)
find_package(nlohmann_json CONFIG REQUIRED)
find_package(mstch CONFIG REQUIRED)
find_package(inja CONFIG REQUIRED)
find_package(PostgreSQL REQUIRED)
find_package(libpqxx CONFIG REQUIRED)
find_package(unofficial-libmariadb CONFIG REQUIRED)
find_package(unofficial-sqlite3 CONFIG REQUIRED)
find_package(redis++ CONFIG REQUIRED)
find_package(Flatbuffers CONFIG REQUIRED)
find_package(spdlog CONFIG REQUIRED)
find_package(argparse CONFIG REQUIRED)
find_package(magic_enum CONFIG REQUIRED)
find_package(Lua REQUIRED)

find_path(CPPCODEC_INCLUDE_DIRS "cppcodec/base32_crockford.hpp")
find_path(CPP_HTTPLIB_INCLUDE_DIRS "httplib.h")

find_library(MINIO_LIBRARY miniocpp)
find_library(CURLPP_LIBRARY curlpp)
find_library(INIH_LIBRARY inih)

FetchContent_Declare(mailio
  GIT_REPOSITORY    "https://github.com/karastojko/mailio.git"
  GIT_TAG           "0.23.0"
)
FetchContent_MakeAvailable(casbin)


FetchContent_Declare(casbin
  GIT_REPOSITORY    "https://github.com/casbin/casbin-cpp.git"
  GIT_TAG           "v1.54.2"
)
FetchContent_MakeAvailable(mailio casbin)

target_include_directories(palm PUBLIC
  ${PROJECT_SOURCE_DIR}/include

  ${CPPCODEC_INCLUDE_DIRS}
  ${CPP_HTTPLIB_INCLUDE_DIRS}
  ${LUA_INCLUDE_DIR}
  
  ${mailio_SOURCE_DIR}/include
  ${casbin_SOURCE_DIR}/include
)

target_link_libraries(palm PUBLIC bamboo gourd
  mailio casbin
  
  OpenSSL::SSL OpenSSL::Crypto
  Poco::Util

  spdlog::spdlog argparse::argparse magic_enum::magic_enum

  libevent::core libevent::extra libevent::pthreads
  Libssh2::libssh2 LibLZMA::LibLZMA # unofficial::git2::git2
  ${LUA_LIBRARIES}

  PahoMqttCpp::paho-mqttpp3-static rabbitmq::rabbitmq-static
    
  aws-cpp-sdk-s3 aws-cpp-sdk-sqs 
  ${MINIO_LIBRARY} CURL::libcurl ${CURLPP_LIBRARY} ${INIH_LIBRARY}
  cpr::cpr SAIL::sail-c++
  pugixml::static tomlplusplus::tomlplusplus yaml-cpp nlohmann_json::nlohmann_json
  mstch::mstch pantor::inja
  PostgreSQL::PostgreSQL libpqxx::pqxx unofficial::libmariadb unofficial::sqlite3::sqlite3 
  redis++::redis++_static 

  flatbuffers::flatbuffers
)

source_group(
  TREE "${PROJECT_SOURCE_DIR}/include"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)

