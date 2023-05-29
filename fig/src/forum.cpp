#include "palm/forum.hpp"

void palm::forum::controllers::mount(
    httplib::Server &server, std::shared_ptr<soci::connection_pool> postgresql,
    std::shared_ptr<palm::redis::Pool> redis) {
  server.Get(R"(/([-a-zA-Z]{2,7})/forum/)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("forum home", "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/forum/topics/hot)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("hot topics", "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/forum/topics/latest)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("latest topics", "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/forum/topics/(\d+))",
             [&](const httplib::Request &request, httplib::Response &response) {
               auto numbers = request.matches[1];
               // TODO
               response.set_content(numbers, "text/plain");
             });
}
