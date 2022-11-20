use super::super::Result;

pub struct Item {}

// https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap
pub async fn ping(home: &str) -> Result<()> {
    /*
        cpr::Response it =
        cpr::Get(cpr::Url{"https://www.google.com/ping"},
                 cpr::Parameters{{"sitemap", request->home() + "/sitemap.xml"}});

    if (it.status_code != cpr::status::HTTP_OK) {
      BOOST_LOG_TRIVIAL(error) << it.status_code << " " << it.text;
      return grpc::Status(grpc::StatusCode::INTERNAL, it.text);
    }
    BOOST_LOG_TRIVIAL(debug) << it.text;
       */
    Ok(())
}
