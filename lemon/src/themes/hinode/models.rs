use askama::Template;

#[derive(Template)]
#[template(path = "hinode/home.html")]
pub struct Home {}

#[derive(Template)]
#[template(path = "hinode/page.html")]
pub struct Page {
    pub body: String,
    pub title: String,
}

#[derive(Template)]
#[template(path = "hinode/by-author.html")]
pub struct ByAuthor {
    pub title: String,
}

#[derive(Template)]
#[template(path = "hinode/by-tag.html")]
pub struct ByTag {
    pub title: String,
}
