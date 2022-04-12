find_package(ZLIB REQUIRED)
find_package(OpenSSL REQUIRED)
find_package(Boost REQUIRED COMPONENTS 
    date_time
    log
    log_setup
    program_options
    unit_test_framework
)
find_package(PostgreSQL REQUIRED)
find_package(SQLite3 REQUIRED)
find_package(CURL REQUIRED)

FetchContent_Declare(
    casbin
    GIT_REPOSITORY  "https://github.com/casbin/casbin-cpp.git"
    GIT_TAG         "v1.50.0"
)

FetchContent_Declare(
    soci
    GIT_REPOSITORY  "https://github.com/SOCI/soci.git"
    GIT_TAG         "v4.0.3"
)

FetchContent_Declare(
    gRPC
    GIT_REPOSITORY  "https://github.com/grpc/grpc.git"
    GIT_TAG         "v1.45.2"
)

FetchContent_Declare(
    cpr
    GIT_REPOSITORY  "https://github.com/libcpr/cpr.git"
    GIT_TAG         "1.8.1"
)

FetchContent_Declare(
    cpp_httplib
    GIT_REPOSITORY  "https://github.com/yhirose/cpp-httplib.git"
    GIT_TAG         "v0.10.4"
)

FetchContent_Declare(
    nlohmann_json
    GIT_REPOSITORY  "https://github.com/nlohmann/json.git"
    GIT_TAG         "v3.10.5"
)

FetchContent_Declare(
    hiredis
    GIT_REPOSITORY  "https://github.com/redis/hiredis.git"
    GIT_TAG         "d7683f3"
)

FetchContent_Declare(
    paho_mqtt
    GIT_REPOSITORY  "https://github.com/eclipse/paho.mqtt.c.git"
    GIT_TAG         "v1.3.10"
)

FetchContent_Declare(
    czmq
    GIT_REPOSITORY  "https://github.com/zeromq/czmq.git"
    GIT_TAG         "v4.2.1"
)

FetchContent_Declare(
    rabbitmq_c
    GIT_REPOSITORY  "https://github.com/alanxz/rabbitmq-c.git"
    GIT_TAG         "v0.11.0"
)

FetchContent_Declare(
    poco
    GIT_REPOSITORY  "https://github.com/pocoproject/poco.git"
    GIT_TAG         "poco-1.11.1-release"
)

FetchContent_Declare(
    cppcodec
    GIT_REPOSITORY  "https://github.com/tplgy/cppcodec.git"
    GIT_TAG         "9838f9e"
)

FetchContent_MakeAvailable(
    nlohmann_json
    gRPC poco casbin 
    soci hiredis
    cpr cpp_httplib   
    paho_mqtt czmq rabbitmq_c
    cppcodec
)
