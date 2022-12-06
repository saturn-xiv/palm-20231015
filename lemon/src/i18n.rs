use std::collections::BTreeMap;

use language_tags::LanguageTag;
use palm::Result;

// pub const EN_US: &str = include_str!("theme/i18n/en.yaml");
pub struct I18n {
    pub lang: LanguageTag,
    pub items: BTreeMap<String, String>,
}

impl I18n {
    pub fn new(_buf: &str) -> Result<Self> {
        todo!()
    }
}
