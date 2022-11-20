use super::super::Result;

// https://www.indexnow.org/documentation
pub async fn ping(home: &str, key: &str, links: &[String]) -> Result<()> {
    let limit = 10_000;
    /*
      static const size_t LIMIT = 10000;

    const auto items = palm::fig::dao::sitemap(db);
    for (size_t i = 0; i < items.size(); i += LIMIT) {
      nlohmann::json body;
      {
        const std::string home = request->home();
        {
          Poco::URI uri(home);
          body["host"] = uri.getHost();
        }
        body["key"] = request->key();
        {
          std::vector<std::string> urls;
          for (size_t j = 0; j < LIMIT; j++) {
            const auto k = i * LIMIT + j;
            if (k >= items.size()) {
              break;
            }
            urls.push_back(items[k].loc);
          }
          body["urlList"] = urls;
        }
      }
      cpr::Response it = cpr::Post(
          cpr::Url{"https://api.indexnow.org/indexnow"},
          cpr::Header{{"Content-Type", "application/json; charset=utf-8"}},
          cpr::Body{body.dump()});
      if (it.status_code != cpr::status::HTTP_OK) {
        BOOST_LOG_TRIVIAL(error) << "ping IndexNow: " << it.text;
        return grpc::Status(grpc::StatusCode::INTERNAL, it.text);
      }
      BOOST_LOG_TRIVIAL(debug) << it.text;
    }
      */
    Ok(())
}
