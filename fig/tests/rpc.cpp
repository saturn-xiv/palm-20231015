#define BOOST_TEST_MODULE rpc
#include <boost/test/unit_test.hpp>

#include "palm/nut.hpp"

static std::string jwt_token() { return std::getenv("JWT_TOKEN"); }
inline static const std::string LANGUAGE = "en-US";

BOOST_AUTO_TEST_CASE(http_) {
  const std::string host = "http://localhost:8888";

  const std::string token = jwt_token();
  const cpr::Bearer auth{token};
  const cpr::Cookies cookies{{palm::nut::handlers::LOCALE, LANGUAGE},
                             {palm::nut::handlers::TOKEN, token}};
  const cpr::Header header{
      {palm::nut::handlers::ACCEPT_LANGUAGE, LANGUAGE},
      {palm::nut::handlers::X_FORWARDED_FOR, "192.168.0.10,192.168.0.11"},
      {palm::nut::handlers::X_REAL_IP, "192.168.0.12"},
      {palm::nut::handlers::X_APPENGINE_REMOTE_ADDR, "192.168.0.13"}};
  cpr::Parameters parameters =
      cpr::Parameters{{palm::nut::handlers::LOCALE, LANGUAGE},
                      {palm::nut::handlers::TOKEN, token}};
  {
    cpr::Response response =
        cpr::Get(cpr::Url{host + "/"}, auth, header, cookies, parameters);
    BOOST_TEST(response.status_code == cpr::status::HTTP_OK);
    std::cout << response.text << std::endl;
  }
  {
    cpr::Response response = cpr::Post(cpr::Url{host + "/api/attachments"},
                                       auth, header, cookies, parameters);
    BOOST_TEST(response.status_code == cpr::status::HTTP_OK);
    std::cout << response.text << std::endl;
  }
}

class LocaleClient final {
 public:
  LocaleClient(std::shared_ptr<grpc::Channel> channel)
      : _stub(palm::nut::v1::Locale::NewStub(channel)) {}

  void by_lang(const std::string& lang) {
    palm::nut::v1::LocaleByLangRequest request;
    request.set_lang(lang);
    palm::nut::v1::LocaleByLangResponse response;

    grpc::ClientContext context;
    grpc::Status status = this->_stub->ByLang(&context, request, &response);

    if (!status.ok()) {
      BOOST_LOG_TRIVIAL(error)
          << "(" << status.error_code() << ")" << status.error_message();
      return;
    }
    for (const auto it : response.items()) {
      std::cout << it.lang() << ": " << it.message() << std::endl;
    }
  }

 private:
  std::unique_ptr<palm::nut::v1::Locale::Stub> _stub;
};

BOOST_AUTO_TEST_CASE(grpc_) {
  const std::string host = "127.0.0.1:9999";
  {
    LocaleClient cli(
        grpc::CreateChannel(host, grpc::InsecureChannelCredentials()));
    cli.by_lang(LANGUAGE);
  }
}
