use std::any::type_name;
use std::fmt;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::num::ParseIntError;
use std::result::Result as StdResult;
use std::str::FromStr;

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
    const SEP: &str = "://";

    pub fn new<T>(id: Option<i32>) -> Self {
        Self {
            r#type: type_name::<T>().to_string(),
            id,
        }
    }
}

impl fmt::Display for v1::resources_response::Item {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.id {
            Some(id) => write!(f, "{}{}{}", self.r#type, Self::SEP, id),
            None => write!(f, "{}", self.r#type),
        }
    }
}

impl FromStr for v1::resources_response::Item {
    type Err = ParseIntError;

    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        let it = match s.find(Self::SEP) {
            Some(i) => Self {
                r#type: s[..i].to_string(),
                id: Some(s[(i + Self::SEP.len())..].parse()?),
            },
            None => Self {
                r#type: s.to_string(),
                id: None,
            },
        };
        Ok(it)
    }
}

impl From<v1::permissions_response::Item> for Vec<String> {
    fn from(x: v1::permissions_response::Item) -> Self {
        let mut it = Vec::new();
        if let Some(ref resource) = x.resource {
            let object = resource.to_string();
            it.push(object);
        }
        {
            let action = to_code!(x.operation);
            it.push(action);
        }
        it
    }
}

impl v1::permissions_response::Item {
    pub fn to_rules(args: &[Self]) -> Vec<Vec<String>> {
        args.iter().map(|x| x.clone().into()).collect::<_>()
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
