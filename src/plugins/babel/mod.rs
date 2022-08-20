pub mod chinese;
pub mod pali;
pub mod sanskrit;
pub mod tibetan;

use std::fmt::{Debug, Display};

use serde::{de::DeserializeOwned, Serialize};

pub trait Letter: Serialize + DeserializeOwned + Display + Default + Debug + Clone {
    fn id(&self) -> u32;
}
