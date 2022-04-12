#define BOOST_TEST_MODULE json
#include <boost/test/unit_test.hpp>

#include "nut.pb.h"

#include <google/protobuf/util/json_util.h>

BOOST_AUTO_TEST_CASE(pb_js) {
  palm::nut::v1::LocaleSetRequest req1, req2;
  std::string js;
  {
    req1.set_code("hello");
    req1.set_lang("en-US");
    req1.set_message("Hello, world!");

    google::protobuf::util::JsonPrintOptions options;
    options.add_whitespace = true;
    options.always_print_primitive_fields = true;
    options.preserve_proto_field_names = true;

    google::protobuf::util::MessageToJsonString(req1, &js, options);
  }

  {
    google::protobuf::util::JsonParseOptions options;
    JsonStringToMessage(js, &req2, options);
  }
  std::cout << req1.lang() << "." << req1.code() << " => " << req1.message()
            << std::endl;
  std::cout << js << std::endl;
  std::cout << req2.lang() << "." << req2.code() << " => " << req2.message()
            << std::endl;

  BOOST_TEST(req1.code() == req2.code());
  BOOST_TEST(req1.lang() == req2.lang());
  BOOST_TEST(req1.message() == req2.message());
}
