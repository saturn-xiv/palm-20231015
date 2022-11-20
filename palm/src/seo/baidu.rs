use std::io::Write;

use hyper::StatusCode;
use reqwest::header::CONTENT_TYPE;
use xml::writer::{EmitterConfig, EventWriter, Result as XmlResult, XmlEvent};

use super::super::{HttpError, Result, ToXml};

pub struct Body {
    pub title: String,
    pub rss: String,
    pub home: String,
}

impl ToXml for Body {
    fn write<W: Write>(&self, wrt: &mut EventWriter<W>) -> XmlResult<()> {
        wrt.write(XmlEvent::start_element("methodCall"))?;
        {
            wrt.write(XmlEvent::start_element("methodName"))?;
            wrt.write(XmlEvent::characters("weblogUpdates.extendedPing"))?;
            wrt.write(XmlEvent::end_element())?;
        }

        {
            wrt.write(XmlEvent::start_element("params"))?;
            for it in &[self.title.clone(), self.home.clone(), self.rss.clone()] {
                wrt.write(XmlEvent::start_element("param"))?;
                {
                    wrt.write(XmlEvent::start_element("value"))?;
                    {
                        wrt.write(XmlEvent::start_element("string"))?;
                        wrt.write(XmlEvent::characters(it))?;
                        wrt.write(XmlEvent::end_element())?;
                    }
                    wrt.write(XmlEvent::end_element())?;
                }
                wrt.write(XmlEvent::end_element())?;
            }
            wrt.write(XmlEvent::end_element())?;
        }
        wrt.write(XmlEvent::end_element())?;

        Ok(())
    }
}

// https://help.baidu.com/question?prod_id=99&class=0&id=3046
pub async fn ping(home: &str, title: &str, rss: &str) -> Result<()> {
    let mut body = Vec::new();
    {
        let mut writer = EmitterConfig::new()
            .perform_indent(true)
            .create_writer(&mut body);
        Body {
            title: title.to_string(),
            home: home.to_string(),
            rss: format!("{}{}", home, rss),
        }
        .write(&mut writer)?;
    }

    let cli = reqwest::Client::new();
    let res = cli
        .get("https://ping.baidu.com/ping/RPC2")
        .header(CONTENT_TYPE, "text/xml")
        .body(body)
        .send()
        .await?;

    debug!("{:#?}", res);
    if res.status() == reqwest::StatusCode::OK {
        return Ok(());
    }
    Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
    // TODO
    //           const auto items =
    //       palm::nut::dao::baidu::ping_request_body(db, request->home());
    //   for (const auto& [lang, body] : items) {
    //     cpr::Response it =
    //         cpr::Post(cpr::Url{},
    //                   cpr::Header{{"Content-Type", }}, cpr::Body{body});
    //     if (it.status_code != cpr::status::HTTP_OK) {
    //       BOOST_LOG_TRIVIAL(error) << "ping baidu(" << lang << "): " << it.text;
    //       return grpc::Status(grpc::StatusCode::INTERNAL, it.text);
    //     }
    //     BOOST_LOG_TRIVIAL(debug) << it.text;
    //   }
}
