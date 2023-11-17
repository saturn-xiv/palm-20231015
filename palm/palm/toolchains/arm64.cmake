set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_SYSTEM_PROCESSOR aarch64)

set(target aarch64-linux-gnu)

set(CMAKE_C_COMPILER /usr/bin/clang)
set(CMAKE_C_COMPILER_TARGET ${target})
set(CMAKE_CXX_COMPILER /usr/bin/clang++)
set(CMAKE_CXX_COMPILER_TARGET ${target})
set(CMAKE_C_FLAGS "-ccc-gcc-name /usr/bin/${target}-gcc")
set(CMAKE_CXX_FLAGS "-stdlib=libstdc++ -ccc-gcc-name /usr/bin/${target}-gcc")
set(CMAKE_EXE_LINKER_FLAGS "--ld-path=mold -Wl,--build-id=sha1")

set(CMAKE_SYSROOT /usr/${target})
set(CMAKE_FIND_ROOT_PATH /usr/${target})
set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
