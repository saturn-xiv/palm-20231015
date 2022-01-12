use askama::Template;

// https://developers.google.com/search/docs/advanced/robots/create-robots-txt

#[derive(Template)]
#[template(path = "robots.txt", ext = "txt")]
pub struct RobotsTxt<'a> {
    pub domain: &'a str,
}
