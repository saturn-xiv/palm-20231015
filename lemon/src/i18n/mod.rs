use palm::Result;
use yaml_rust::{Yaml, YamlLoader};

pub const EN_US: &str = include_str!("en-US.yaml");
pub const ZH_HANS: &str = include_str!("zh-Hans.yaml");

pub struct I18n {
    pub items: Vec<(String, String, String)>,
}

impl I18n {
    pub fn new() -> Result<Self> {
        let mut items = Vec::new();
        {
            let it = YamlLoader::load_from_str(include_str!("languages.yaml"))?;
            let it = it.into_iter().next().unwrap_or(Yaml::BadValue);
            Self::loop_yaml(&mut items, "en-US", None, &it)?;
            Self::loop_yaml(&mut items, "zh-Hans", None, &it)?;
        }
        {
            let it = YamlLoader::load_from_str(include_str!("en-US.yaml"))?;
            let it = it.into_iter().next().unwrap_or(Yaml::BadValue);
            Self::loop_yaml(&mut items, "en-US", None, &it)?;
        }
        {
            let it = YamlLoader::load_from_str(include_str!("zh-Hans.yaml"))?;
            let it = it.into_iter().next().unwrap_or(Yaml::BadValue);
            Self::loop_yaml(&mut items, "zh-Hans", None, &it)?;
        }

        Ok(Self { items })
    }

    pub fn t(&self, lang: &str, code: &str) -> String {
        for (l, c, m) in self.items.iter() {
            if l == lang && c == code {
                return m.clone();
            }
        }
        format!("{lang}.{code}")
    }

    fn loop_yaml(
        items: &mut Vec<(String, String, String)>,
        lang: &str,
        prefix: Option<String>,
        node: &Yaml,
    ) -> Result<(usize, usize)> {
        let mut find = 0;
        let mut inserted = 0;
        let sep = ".";
        match node {
            Yaml::String(v) => {
                let k = match prefix {
                    Some(p) => p,
                    None => "".to_string(),
                };
                debug!("find {} {} => {}", lang, k, v);
                items.push((lang.to_string(), k, v.clone()));
            }
            Yaml::Hash(h) => {
                for (k, v) in h {
                    match k {
                        Yaml::String(k) => {
                            let (i, f) = Self::loop_yaml(
                                items,
                                lang,
                                Some(match prefix {
                                    Some(ref p) => {
                                        let mut v = String::new();
                                        v.push_str(p);
                                        v.push_str(sep);
                                        v.push_str(k);
                                        v
                                    }
                                    None => k.clone(),
                                }),
                                v,
                            )?;
                            inserted += i;
                            find += f;
                        }
                        k => {
                            error!("bad key {:?}", k);
                        }
                    }
                }
            }
            k => {
                error!("bad key {:?}", k);
            }
        };
        Ok((inserted, find))
    }
}
