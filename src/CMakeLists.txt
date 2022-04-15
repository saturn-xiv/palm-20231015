file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/include/palm/*.hpp")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${palm_SOURCE_DIR}/src/*.cpp")

add_library(palm STATIC ${SOURCE_LIST})


FetchContent_Declare(
    casbin
    GIT_REPOSITORY  "https://github.com/casbin/casbin-cpp.git"
    GIT_TAG         "v1.50.0"
)
FetchContent_MakeAvailable(casbin)

target_include_directories(palm PUBLIC
  ${palm_SOURCE_DIR}/include
  ${casbin_SOURCE_DIR}/include
)

target_link_libraries(palm PUBLIC casbin loquat)

source_group(
  TREE "${PROJECT_SOURCE_DIR}/include"
  PREFIX "Header Files"
  FILES ${HEADER_LIST}
)

