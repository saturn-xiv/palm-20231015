use chrono::NaiveDate;
use serde::{Deserialize, Serialize};

// https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Currency {
    pub country: String,
    pub code: String,
    pub name: String,
    pub id: u16,
    pub fund: bool,
    pub unit: u8,
}

#[derive(Serialize, Deserialize)]
pub struct Iso4217 {
    pub items: Vec<Currency>,
    pub published_at: NaiveDate,
}

pub struct ISO_4217 {}

pub struct CcyTbl {}

pub struct CcyNtry {
    pub CtryNm: String,
    pub CcyNm: CcyNm,
    pub Ccy: String,
    pub CcyNbr: u16,
    pub CcyMnrUnts: u8,
}

pub struct CcyNm {
    pub IsFund: bool,
    pub value: String,
}
