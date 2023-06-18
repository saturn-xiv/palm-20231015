use std::ops::{Deref, DerefMut};

use casbin::{MgmtApi, RbacApi};
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    rbac::{Permission, Resource, Role, Subject},
    HttpError, Result,
};
use validator::Validate;

use super::super::models::{
    casbin_rule::{Dao as CasbinRuleDao, Item as CasbinRule},
    user::{Dao as UserDao, Item as User},
};
use super::{user::UserItem, Context, CurrentUserAdapter};

pub async fn all_users(context: &Context) -> Result<Vec<UserItem>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let mut items = Vec::new();
    {
        let enf = enf.lock().await;
        for it in enf.get_all_subjects().iter() {
            if let Ok(ref it) = <User as Subject>::from(it) {
                let it = UserDao::by_nickname(db, it)?;
                items.push(UserItem::new(&it));
            }
        }
    }
    Ok(items)
}

#[derive(GraphQLObject)]
#[graphql(name = "RbacResourceItem")]
pub struct ResourceItem {
    pub id: Option<i32>,
    pub r#type: String,
}

impl ResourceItem {
    pub fn new(x: &Resource) -> Self {
        Self {
            id: x.id,
            r#type: x.r#type.clone(),
        }
    }
}

impl ResourceItem {
    pub async fn all(context: &Context) -> Result<Vec<Self>> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();
        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let mut items = Vec::new();
        {
            let enf = enf.lock().await;
            for it in enf.get_all_objects().iter() {
                let it = it.parse::<Resource>()?;
                items.push(Self::new(&it));
            }
        }
        Ok(items)
    }
}

pub async fn all_operations(context: &Context) -> Result<Vec<String>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let items = {
        let enf = enf.lock().await;
        enf.get_all_actions()
    };
    Ok(items)
}

pub async fn all_roles(context: &Context) -> Result<Vec<String>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let mut items = Vec::new();
    {
        let enf = enf.lock().await;
        for it in enf.get_all_subjects().iter() {
            if let Ok(ref it) = <Role as Subject>::from(it) {
                items.push(it.clone());
            }
        }
    }
    Ok(items)
}

pub async fn roles_for_user(context: &Context, id: i32) -> Result<Vec<String>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let mut items = Vec::new();
    {
        let user = UserDao::by_id(db, id)?;
        let user = Subject::to(&user);
        let mut enf = enf.lock().await;

        for it in enf.get_roles_for_user(&user, None).iter() {
            if let Ok(ref it) = <Role as Subject>::from(it) {
                items.push(it.clone());
            }
        }
    }
    Ok(items)
}

pub async fn implicit_roles_for_user(context: &Context, id: i32) -> Result<Vec<String>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let mut items = Vec::new();
    {
        let user = UserDao::by_id(db, id)?;
        let user = Subject::to(&user);
        let mut enf = enf.lock().await;

        for it in enf.get_implicit_roles_for_user(&user, None).iter() {
            if let Ok(ref it) = <Role as Subject>::from(it) {
                items.push(it.clone());
            }
        }
    }
    Ok(items)
}

pub async fn users_by_role(context: &Context, role: &str) -> Result<Vec<UserItem>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let mut items = Vec::new();
    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);
        let enf = enf.lock().await;
        for it in enf.get_users_for_role(&role, None).iter() {
            if let Ok(ref it) = <User as Subject>::from(it) {
                let it = UserDao::by_nickname(db, it)?;
                items.push(UserItem::new(&it));
            }
        }
    }
    Ok(items)
}

pub async fn delete_roles_for_user(context: &Context, user: i32, roles: &[String]) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut items = Vec::new();
        for role in roles.iter() {
            let role: Role = role.parse()?;
            items.push(Subject::to(&role));
        }

        let mut enf = enf.lock().await;
        for role in items.iter() {
            enf.delete_role_for_user(&user, role, None).await?;
        }
    }
    Ok(())
}

pub async fn add_roles_for_user(context: &Context, user: i32, roles: &[String]) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut items = Vec::new();
        for role in roles.iter() {
            let role: Role = role.parse()?;
            items.push(Subject::to(&role));
        }

        let mut enf = enf.lock().await;
        enf.add_roles_for_user(&user, items, None).await?;
    }
    Ok(())
}

pub async fn delete_user(context: &Context, user: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        enf.delete_user(&user).await?;
    }
    Ok(())
}

pub async fn delete_role(context: &Context, role: &str) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        enf.delete_role(&role).await?;
    }
    Ok(())
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "RbacPermissionRequest")]
pub struct PermissionRequest {
    #[validate(length(min = 1, max = 63))]
    pub operation: String,
    #[validate(length(min = 1, max = 127))]
    pub resource_type: String,
    pub resource_id: Option<i32>,
}

impl From<PermissionRequest> for Permission {
    fn from(x: PermissionRequest) -> Self {
        Self {
            operation: x.operation.clone(),
            resource: Resource {
                r#type: x.resource_type.clone(),
                id: x.resource_id,
            },
        }
    }
}

pub async fn add_permissions_for_role(
    context: &Context,
    role: &str,
    permissions: &[PermissionRequest],
) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&role, permission).await?;
        }
    }
    Ok(())
}

pub async fn delete_permissions_for_role(
    context: &Context,
    role: &str,
    permissions: &[PermissionRequest],
) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&role, permission).await?;
        }
    }
    Ok(())
}

pub async fn add_permissions_for_user(
    context: &Context,
    user: i32,
    permissions: &[PermissionRequest],
) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&user, permission).await?;
        }
    }
    Ok(())
}

pub async fn delete_permissions_for_user(
    context: &Context,
    user: i32,
    permissions: &[PermissionRequest],
) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&user, permission).await?;
        }
    }
    Ok(())
}

#[derive(GraphQLObject)]
#[graphql(name = "RbacPermissionItem")]
pub struct PermissionItem {
    pub operation: String,
    pub resource_id: Option<i32>,
    pub resource_type: String,
}

impl PermissionItem {
    pub fn new(x: &Permission) -> Self {
        Self {
            operation: x.operation.clone(),
            resource_type: x.resource.r#type.clone(),
            resource_id: x.resource.id,
        }
    }
}

pub async fn get_permissions_for_user(context: &Context, user: i32) -> Result<Vec<PermissionItem>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let permissions = {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let enf = enf.lock().await;
        enf.get_permissions_for_user(&user, None)
    };

    let mut items = Vec::new();
    for it in permissions.iter() {
        let it = Permission::new(it)?;
        items.push(PermissionItem::new(&it));
    }

    Ok(items)
}

pub async fn get_implicit_permissions_for_user(
    context: &Context,
    user: i32,
) -> Result<Vec<PermissionItem>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let permissions = {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        enf.get_implicit_permissions_for_user(&user, None)
    };

    let mut items = Vec::new();
    for it in permissions.iter() {
        let it = Permission::new(it)?;
        items.push(PermissionItem::new(&it));
    }

    Ok(items)
}

pub async fn get_permissions_for_role(
    context: &Context,
    role: &str,
) -> Result<Vec<PermissionItem>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let permissions = {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let enf = enf.lock().await;
        enf.get_permissions_for_user(&role, None)
    };

    let mut items = Vec::new();
    for it in permissions.iter() {
        let it = Permission::new(it)?;
        items.push(PermissionItem::new(&it));
    }

    Ok(items)
}

pub async fn update_permissions_for_user(
    context: &Context,
    user: i32,
    removed: &[PermissionRequest],
    saved: &[PermissionRequest],
) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        for x in removed.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&user, permission).await?;
        }
        for x in saved.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&user, permission).await?;
        }
    }
    Ok(())
}
pub async fn update_permissions_for_role(
    context: &Context,
    role: &str,
    removed: &[PermissionRequest],
    saved: &[PermissionRequest],
) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        for x in removed.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&role, permission).await?;
        }
        for x in saved.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&role, permission).await?;
        }
    }
    Ok(())
}

#[derive(GraphQLObject)]
#[graphql(name = "CasbinRuleItem")]
pub struct CasbinRuleItem {
    pub id: i32,
    pub ptype: String,
    pub v0: String,
    pub v1: String,
    pub v2: String,
    pub v3: String,
    pub v4: String,
    pub v5: String,
}

impl CasbinRuleItem {
    pub fn new(x: &CasbinRule) -> Self {
        Self {
            id: x.id,
            ptype: x.ptype.clone(),
            v0: x.v0.clone(),
            v1: x.v1.clone(),
            v2: x.v2.clone(),
            v3: x.v3.clone(),
            v4: x.v4.clone(),
            v5: x.v5.clone(),
        }
    }
}

pub async fn casbin_rules(context: &Context) -> Result<Vec<CasbinRuleItem>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();

    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let items = CasbinRuleDao::all(db)?
        .iter()
        .map(CasbinRuleItem::new)
        .collect();
    Ok(items)
}
