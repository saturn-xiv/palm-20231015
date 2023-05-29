UNAME_S := $(shell uname -s)
EXE = babel

PROTOCOLS = ../lemon/src

SOURCES = src/main.cpp src/babel.cpp $(PROTOCOLS)/babel.grpc.pb.cc $(PROTOCOLS)/babel.pb.cc
SOURCES += imgui/imgui.cpp imgui/imgui_demo.cpp imgui/imgui_draw.cpp imgui/imgui_tables.cpp imgui/imgui_widgets.cpp
SOURCES += imgui/backends/imgui_impl_glfw.cpp imgui/backends/imgui_impl_opengl3.cpp

OBJS = $(addsuffix .o, $(basename $(notdir $(SOURCES))))

CXXFLAGS = -O2 -s
CXXFLAGS += -DBOOST_LOG_DYN_LINK -lboost_system -lboost_log -lpthread
CXXFLAGS += -Iimgui -Iimgui/backends -I$(PROTOCOLS) -Isrc


ifeq ($(UNAME_S), Linux)
	LIBS = -lGL `pkg-config --static --libs glfw3` `pkg-config --static --libs protobuf grpc grpc++`
	CXXFLAGS += `pkg-config --cflags glfw3` `pkg-config --cflags protobuf grpc grpc++`
endif

CXXFLAGS += -std=c++17

%.o:src/%.cpp src/babel.hpp src/version.hpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:$(PROTOCOLS)/%.cc $(PROTOCOLS)/%.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:imgui/%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:imgui/backends/%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

all: $(EXE)
	@echo Build complete for $(UNAME_S)

$(EXE): $(OBJS)
	$(CXX) -o $@ $^ $(CXXFLAGS) $(LIBS)

src/version.hpp:
	echo '#pragma once' > $@
	echo 'namespace babel {' >> $@
	echo "inline static const std::string GIT_VERSION = \"$(shell git describe --tags --always --dirty)\";" >> $@
	echo "inline static const std::string BUILD_TIME = \"$(shell date -u)\";" >> $@
	echo '}' >> $@

clean:
	-rm $(EXE) $(OBJS) src/version.hpp
