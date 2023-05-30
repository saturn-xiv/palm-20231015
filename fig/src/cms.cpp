#include "palm/cms.hpp"

// void palm::cms::controllers::mount(
//     httplib::Server &server, std::shared_ptr<soci::connection_pool> postgresql,
//     std::shared_ptr<palm::redis::Pool> redis) {
//   server.Get(R"(/([-a-zA-Z]{2,7})/cms/)",
//              [&](const httplib::Request &request, httplib::Response &response) {
//                // TODO
//                response.set_content("cms home", "text/plain");
//              });
//   server.Get(R"(/([-a-zA-Z]{2,7})/cms/articles/hot)",
//              [&](const httplib::Request &request, httplib::Response &response) {
//                // TODO
//                response.set_content("hot articles", "text/plain");
//              });
//   server.Get(R"(/([-a-zA-Z]{2,7})/cms/articles/latest)",
//              [&](const httplib::Request &request, httplib::Response &response) {
//                // TODO
//                response.set_content("latest articles", "text/plain");
//              });
//   server.Get(R"(/([-a-zA-Z]{2,7})/cms/articles/(\d+))",
//              [&](const httplib::Request &request, httplib::Response &response) {
//                auto numbers = request.matches[1];
//                // TODO
//                response.set_content(numbers, "text/plain");
//              });
// }
