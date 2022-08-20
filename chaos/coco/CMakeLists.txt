file(GLOB HEADER_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/coco/src/*.h")
file(GLOB SOURCE_LIST CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/coco/src/*.cc")

add_library(coco STATIC ${SOURCE_LIST})

target_include_directories(coco PUBLIC
  ${PROJECT_SOURCE_DIR}/coco/src
)

target_link_libraries(coco PUBLIC 
  dl crypt m 
  ${CONAN_LIBS}
)

