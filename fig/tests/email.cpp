#define BOOST_TEST_MODULE email
#include <boost/test/unit_test.hpp>

#include "palm/email.hpp"

#include <iostream>

BOOST_AUTO_TEST_CASE(smtp_config) {
  toml::table root;
  root.insert("host", "smtp.google.com");
  root.insert("port", 587);
  root.insert("auth-method", 2);
  {
    toml::table it;
    it.insert("name", "Who am i");
    it.insert("email", "who-am-i@gmail.com");

    root.insert("user", it);
  }
  root.insert("password", "change-me");

  {
    toml::array cc;
    toml::array bcc;

    for (int i = 1; i < 5; i++) {
      {
        toml::table it;
        std::stringstream sn;
        sn << "User C " << i;
        std::stringstream sm;
        sm << "user.c." << i << "@gmail.com";
        it.insert("name", sn.str());
        it.insert("email", sm.str());
        cc.push_back(it);
      }
      {
        toml::table it;
        std::stringstream sn;
        sn << "User B " << i;
        std::stringstream sm;
        sm << "user.b." << i << "@gmail.com";
        it.insert("name", sn.str());
        it.insert("email", sm.str());
        bcc.push_back(it);
      }
    }

    root.insert("cc", cc);
    root.insert("bcc", bcc);
  }

  std::cout << root << std::endl;

  palm::smtp::Config cfg(root);
}

BOOST_AUTO_TEST_CASE(smtp_send) {
  toml::table root;
  {
    {
      toml::table it;
      it.insert("name", std::getenv("SMTP_FROM_NAME"));
      it.insert("email", std::getenv("SMTP_FROM_EMAIL"));

      root.insert("user", it);
    }
    root.insert("password", std::getenv("SMTP_FROM_PASSWORD"));
  }

  palm::smtp::Config cfg(root);
  palm::smtp::Address to;

  {
    to.name = std::getenv("SMTP_TO_NAME");
    to.email = std::getenv("SMTP_TO_EMAIL");
  }

  cfg.send(
      to, "It is a test email",
      "Hello, <b>Palm!</b>:<p><a href='https://www.google.com'>Google</a></p>",
      true, {"Makefile", "demo.png"});
}
