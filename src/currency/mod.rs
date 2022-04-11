use chrono::{NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use xml::reader::{EventReader, XmlEvent};

use super::Result;

// https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml
#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Currency {
    pub country: String,
    pub code: String,
    pub name: String,
    pub id: i32,
    pub fund: bool,
    pub unit: Option<i32>,
}

#[derive(Serialize, Deserialize)]
pub struct Iso4217 {
    pub items: Vec<Currency>,
    pub published_at: NaiveDate,
}

impl Iso4217 {
    pub fn new() -> Result<Self> {
        let reader = EventReader::from_str(include_str!("list_one.xml"));

        let mut iso = Self {
            items: Vec::new(),
            published_at: Utc::now().naive_local().date(),
        };

        let mut depth = 0;
        let mut key = "nil".to_string();
        let mut cur = Currency::default();
        for it in reader {
            let it = it?;
            if let XmlEvent::StartElement {
                ref name,
                ref attributes,
                ..
            } = it
            {
                key = name.local_name.clone();
                if depth == 0 && name.local_name == "ISO_4217" {
                    for it in attributes {
                        if it.name.local_name == "Pblshd" {
                            iso.published_at = NaiveDate::parse_from_str(&it.value, "%B %e, %Y")?;
                        }
                    }
                }
                if depth == 3 && name.local_name == "CcyNm" {
                    for it in attributes {
                        if it.name.local_name == "IsFund" && it.value == "true" {
                            cur.fund = true;
                        }
                    }
                }

                depth += 1;
            }
            if let XmlEvent::Characters(ref value) = it {
                if depth == 4 {
                    if key == "CtryNm" {
                        cur.country = value.clone();
                    }
                    if key == "CcyNm" {
                        cur.name = value.clone();
                    }
                    if key == "Ccy" {
                        cur.code = value.clone();
                    }
                    if key == "CcyNbr" {
                        cur.id = value.parse()?;
                    }
                    if key == "CcyMnrUnts" {
                        cur.unit = if value == "N.A." {
                            None
                        } else {
                            Some(value.parse()?)
                        };
                    }
                }
            }

            if let XmlEvent::EndElement { ref name, .. } = it {
                if depth == 3 && name.local_name == "CcyNtry" {
                    iso.items.push(cur.clone());
                    cur = Currency::default();
                }
                depth -= 1;
            }
        }
        Ok(iso)
    }
}
