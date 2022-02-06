use std::fmt;

use chrono::NaiveDate;

pub struct Code {
    pub online: bool,
    pub store: String,
    pub sku: String,
    pub created_at: NaiveDate,
    pub salt: String,
}

impl fmt::Display for Code {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}{}{}{}{}",
            if self.online { 1 } else { 0 },
            self.store,
            self.sku,
            self.created_at.format("%Y%m%d"),
            self.salt
        )
    }
}

pub struct Price {
    pub currency: String,
    pub amount: f32,
}
