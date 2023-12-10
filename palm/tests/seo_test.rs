use chrono::Utc;
use palm::ToXml;

const HOME: &'static str = "https://www.change-me.com";

fn build_links() -> Vec<palm::seo::Link> {
    let mut links = Vec::new();
    for it in 1..3 {
        links.push(palm::seo::Link {
            path: format!("/page/{}.xml", it),
            change_freq: sitemap::structs::ChangeFreq::Weekly.as_str().to_string(),
            priority: 0.2,
            title: format!("title {}", it),
            description: format!("description {}", it),
            updated_at: Utc::now().naive_utc(),
        });
    }
    links
}

#[test]
fn rss() {
    let links = build_links();
    let buf = palm::seo::rss(HOME, "title", "description", &links).unwrap();
    println!("{}", String::from_utf8(buf).unwrap());
}

#[test]
fn sitemap_index() {
    let mut links = Vec::new();
    for it in 1..3 {
        links.push(format!("/sitemap-{}.xml", it));
    }
    let buf = palm::seo::sitemap_index(HOME, &links).unwrap();
    println!("{}", String::from_utf8(buf).unwrap());
}

#[test]
fn sitemap_urlset() {
    let links = build_links();
    let buf = palm::seo::sitemap_urlset(HOME, &links).unwrap();
    println!("{}", String::from_utf8(buf).unwrap());
}

#[test]
fn baidu() {
    let mut body = Vec::new();
    {
        let mut writer = xml::EmitterConfig::new()
            .perform_indent(true)
            .create_writer(&mut body);
        palm::seo::baidu::Body {
            title: "Title".to_string(),
            home: HOME.to_string(),
            rss: format!("{}{}", HOME, "/rss.xml"),
        }
        .write(&mut writer)
        .unwrap();
    }
    println!("{}", String::from_utf8(body).unwrap());
}
