use std::path::{Path, PathBuf};

use palm::Result;
use serde::{Deserialize, Serialize};

use super::super::super::models::{page::Page, tag::Tag, Config};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Theme {
    pub global: Config,
}

impl Theme {
    pub fn new<P: AsRef<Path>>(_root: P) -> Result<Self> {
        // TODO
        todo!()
    }
}
impl super::super::super::models::Theme for Theme {
    fn tag(&self, _tag: &Tag) -> Result<String> {
        // TODO
        todo!()
    }
    fn page(&self, _page: &Page) -> Result<String> {
        // TODO
        todo!()
    }
    fn assets() -> Vec<PathBuf> {
        vec![]
    }
}
