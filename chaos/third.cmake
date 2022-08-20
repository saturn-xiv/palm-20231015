FetchContent_Declare(
    tomlplusplus
    GIT_REPOSITORY  "https://github.com/marzer/tomlplusplus.git"
    GIT_TAG         "v3.1.0"
)

FetchContent_Declare(
    soci
    GIT_REPOSITORY  "https://github.com/SOCI/soci.git"
    GIT_TAG         "v4.0.3"
)

FetchContent_Declare(
    redisplusplus
    GIT_REPOSITORY  "https://github.com/sewenew/redis-plus-plus.git"
    GIT_TAG         "1.3.5"
)

FetchContent_Declare(
    cpr
    GIT_REPOSITORY  "https://github.com/libcpr/cpr.git"
    GIT_TAG         "1.9.1"    
)

FetchContent_Declare(
    cpp_httplib
    GIT_REPOSITORY  "https://github.com/yhirose/cpp-httplib.git"
    GIT_TAG         "v0.11.1"
)

FetchContent_Declare(
    inja
    GIT_REPOSITORY  "https://github.com/pantor/inja.git"
    GIT_TAG         "v3.3.0"
)

FetchContent_MakeAvailable(
    tomlplusplus
    redisplusplus
    inja
    cpp_httplib
    soci
    cpr
)
