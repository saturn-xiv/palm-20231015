set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_SYSTEM_PROCESSOR x86_64)

set(target x86_64-linux-gnu)

set(CMAKE_C_COMPILER /usr/bin/clang)
set(CMAKE_C_COMPILER_TARGET ${target})
set(CMAKE_CXX_COMPILER /usr/bin/clang++)
set(CMAKE_CXX_COMPILER_TARGET ${target})
set(CMAKE_CXX_FLAGS "-stdlib=libstdc++")
set(CMAKE_EXE_LINKER_FLAGS "--ld-path=mold -Wl,--build-id=sha1")
