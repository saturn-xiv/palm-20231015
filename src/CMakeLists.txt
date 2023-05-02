file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/include/palm/*.hpp")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_library(palm STATIC ${SOURCE_LIST})

FetchContent_Declare(spdlog
  GIT_REPOSITORY  "https://github.com/gabime/spdlog.git"
  GIT_TAG         "v1.11.0"
)
FetchContent_Declare(tomlplusplus
  GIT_REPOSITORY  "https://github.com/marzer/tomlplusplus.git"
  GIT_TAG         "v3.3.0"
)
FetchContent_Declare(nlohmann_json
  GIT_REPOSITORY  "https://github.com/nlohmann/json.git"
  GIT_TAG         "v3.11.2"
)
FetchContent_Declare(httplib
  GIT_REPOSITORY  "https://github.com/yhirose/cpp-httplib.git"
  GIT_TAG         "v0.12.2"
)
FetchContent_Declare(inja 
  GIT_REPOSITORY  "https://github.com/pantor/inja.git"
  GIT_TAG         "v3.4.0"
)
FetchContent_Declare(argparse
  GIT_REPOSITORY  "https://github.com/p-ranav/argparse.git"
  GIT_TAG         "557948f"
)

FetchContent_MakeAvailable(spdlog argparse tomlplusplus nlohmann_json httplib inja)

target_include_directories(palm PUBLIC
  ${PROJECT_SOURCE_DIR}/include

  ${spdlog_SOURCE_DIR}/include
  ${argparse_SOURCE_DIR}/include
  ${httplib_SOURCE_DIR}
  ${tomlplusplus_SOURCE_DIR}/include
  ${inja_SOURCE_DIR}/single_include
  ${inja_SOURCE_DIR}/third_party/include
)

target_link_libraries(palm PUBLIC bamboo
  nlohmann_json::nlohmann_json
)

source_group(
  TREE "${PROJECT_SOURCE_DIR}/include"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)

