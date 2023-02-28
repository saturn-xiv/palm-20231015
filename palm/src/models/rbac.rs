use std::any::type_name;
use std::fmt;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::num::ParseIntError;
use std::result::Result as StdResult;
use std::str::FromStr;

use serde::{Deserialize, Serialize};

use super::super::{rbac::v1, to_code, Result};

impl v1::UserRequest {
    fn prefix() -> String {
        format!("{}://", type_name::<Self>())
    }
}

impl fmt::Display for v1::UserRequest {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}{}", Self::prefix(), self.id)
    }
}

impl FromStr for v1::UserRequest {
    type Err = ParseIntError;

    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        let id = s.strip_prefix(&Self::prefix()).unwrap_or_default();
        Ok(Self { id: id.parse()? })
    }
}

impl v1::RoleRequest {
    pub const ADMINISTRATOR: &str = "administrator";
    pub const ROOT: &str = "root";

    pub fn root() -> Self {
        Self {
            code: Self::ROOT.to_string(),
        }
    }
    pub fn administrator() -> Self {
        Self {
            code: Self::ADMINISTRATOR.to_string(),
        }
    }
}

impl v1::RoleRequest {
    fn prefix() -> String {
        format!("{}://", type_name::<Self>())
    }
}

impl fmt::Display for v1::RoleRequest {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}{}", Self::prefix(), to_code!(self.code))
    }
}

impl FromStr for v1::RoleRequest {
    type Err = IoError;

    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        if let Some(code) = s.strip_prefix(&Self::prefix()) {
            return Ok(Self {
                code: code.to_string(),
            });
        }

        Err(IoError::from(IoErrorKind::UnexpectedEof))
    }
}

impl v1::resources_response::Item {
    pub fn new<T>(id: Option<i32>) -> Self {
        Self {
            r#type: type_name::<T>().to_string(),
            id,
        }
    }
}

// FIXME protobuf <==> json/string
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
struct Resource {
    #[serde(rename = "t")]
    r#type: String,
    #[serde(rename = "i")]
    pub id: Option<i32>,
}
impl From<v1::resources_response::Item> for Resource {
    fn from(x: v1::resources_response::Item) -> Self {
        Self {
            r#type: x.r#type,
            id: x.id,
        }
    }
}
impl From<Resource> for v1::resources_response::Item {
    fn from(x: Resource) -> Self {
        Self {
            r#type: x.r#type,
            id: x.id,
        }
    }
}

impl FromStr for v1::resources_response::Item {
    type Err = serde_json::Error;
    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        let it: Resource = serde_json::from_str(s)?;
        Ok(it.into())
    }
}

impl v1::resources_response::Item {
    pub fn to_rule(&self) -> Result<String> {
        let it: Resource = self.clone().into();
        let s = serde_json::to_string(&it)?;
        Ok(s)
    }
}

impl v1::permissions_response::Item {
    pub fn to_rule(&self) -> Result<Vec<String>> {
        let mut it = Vec::new();
        if let Some(ref resource) = self.resource {
            let object = resource.to_rule()?;
            it.push(object);
        }
        {
            let action = to_code!(self.operation);
            it.push(action);
        }
        Ok(it)
    }

    pub fn new(arg: &Vec<String>) -> Result<Self> {
        match arg.len() {
            2 => Ok(Self {
                operation: arg[1].clone(),
                resource: None,
            }),
            3 => Ok(Self {
                resource: Some(arg[1].parse()?),
                operation: arg[2].clone(),
            }),
            _ => Err(Box::new(IoError::new(
                IoErrorKind::UnexpectedEof,
                format!("unexpected permission: {:?}", arg),
            ))),
        }
    }
}
