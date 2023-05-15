UNAME_S := $(shell uname -s)
EXE = babel

SOURCES = src/main.cpp src/babel.cpp protocols/babel.grpc.pb.cc protocols/babel.pb.cc
SOURCES += imgui/imgui.cpp imgui/imgui_demo.cpp imgui/imgui_draw.cpp imgui/imgui_tables.cpp imgui/imgui_widgets.cpp
SOURCES += imgui/backends/imgui_impl_glfw.cpp imgui/backends/imgui_impl_opengl3.cpp

OBJS = $(addsuffix .o, $(basename $(notdir $(SOURCES))))

CXXFLAGS = -std=c++17 -O2 -s
CXXFLAGS += -DBOOST_LOG_DYN_LINK -lboost_system -lboost_log -lpthread
CXXFLAGS += -Iimgui -Iimgui/backends -Iprotocols -Isrc


ifeq ($(UNAME_S), Linux)
	LIBS = -lGL `pkg-config --static --libs glfw3` `pkg-config --static --libs protobuf grpc grpc++`
	CXXFLAGS += `pkg-config --cflags glfw3` `pkg-config --cflags protobuf grpc grpc++`
endif


%.o:src/%.cpp src/babel.hpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:protocols/%.cc protocols/%.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:imgui/%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:imgui/backends/%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

all: $(EXE)
	@echo Build complete for $(UNAME_S)

$(EXE): $(OBJS)
	$(CXX) -o $@ $^ $(CXXFLAGS) $(LIBS)

clean:
	rm -f $(EXE) $(OBJS)
