#pragma once

#include <boost/log/trivial.hpp>

#include <imgui.h>
#include <imgui_impl_glfw.h>
#include <imgui_impl_opengl3.h>
#define GL_SILENCE_DEPRECATION
#if defined(IMGUI_IMPL_OPENGL_ES2)
#include <GLES2/gl2.h>
#endif
#include <GLFW/glfw3.h>

#include "babel.grpc.pb.h"

namespace palm
{
    namespace babel
    {
        class Application
        {
        public:
            Application(int argc, char **argv);
        };
        class Client
        {
        public:
            Client(std::string host = "127.0.0.1", uint16_t port = 80) : host(host), port(port) {}

        private:
            std::string host;
            uint16_t port;
        };
    }
}
