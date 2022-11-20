use super::super::Result;

// https://help.baidu.com/question?prod_id=99&class=0&id=3046
pub async fn ping(home: &str, rss: &[String]) -> Result<()> {
    // TODO
    //           const auto items =
    //       palm::nut::dao::baidu::ping_request_body(db, request->home());
    //   for (const auto& [lang, body] : items) {
    //     cpr::Response it =
    //         cpr::Post(cpr::Url{"https://ping.baidu.com/ping/RPC2"},
    //                   cpr::Header{{"Content-Type", "text/xml"}}, cpr::Body{body});
    //     if (it.status_code != cpr::status::HTTP_OK) {
    //       BOOST_LOG_TRIVIAL(error) << "ping baidu(" << lang << "): " << it.text;
    //       return grpc::Status(grpc::StatusCode::INTERNAL, it.text);
    //     }
    //     BOOST_LOG_TRIVIAL(debug) << it.text;
    //   }
    Ok(())
}
