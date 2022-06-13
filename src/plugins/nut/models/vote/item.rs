use std::any::type_name;

use chrono::Utc;
use diesel::{delete, insert_into, prelude::*, update};

use super::super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::super::schema::vote_items;

pub trait Dao {
    fn get<T>(&mut self, resource_id: i32) -> Result<i32>;
    fn update<T>(&mut self, resource_id: i32, score: i32) -> Result<()>;
    fn destroy<T>(&mut self, resource_id: i32) -> Result<()>;
    fn by_resource<T>(&mut self, offset: i64, limit: i64) -> Result<Vec<(i32, i32)>>;
    fn count<T>(&mut self) -> Result<i64>;
}

impl Dao for Connection {
    fn get<T>(&mut self, resource_id: i32) -> Result<i32> {
        Ok(vote_items::dsl::vote_items
            .select(vote_items::dsl::score)
            .filter(vote_items::dsl::resource_type.eq(type_name::<T>()))
            .filter(vote_items::dsl::resource_id.eq(resource_id))
            .first::<i32>(self)?)
    }
    fn update<T>(&mut self, resource_id: i32, score: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        match vote_items::dsl::vote_items
            .select((vote_items::dsl::id, vote_items::dsl::score))
            .filter(vote_items::dsl::resource_type.eq(type_name::<T>()))
            .filter(vote_items::dsl::resource_id.eq(resource_id))
            .first::<(i32, i32)>(self)
        {
            Ok((id, sc)) => {
                let it = vote_items::dsl::vote_items.filter(vote_items::dsl::id.eq(id));
                update(it)
                    .set((
                        vote_items::dsl::score.eq(sc + score),
                        vote_items::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(vote_items::dsl::vote_items)
                    .values((
                        vote_items::dsl::resource_type.eq(type_name::<T>()),
                        vote_items::dsl::resource_id.eq(resource_id),
                        vote_items::dsl::score.eq(score),
                        vote_items::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };
        Ok(())
    }

    fn destroy<T>(&mut self, resource_id: i32) -> Result<()> {
        delete(
            vote_items::dsl::vote_items
                .filter(vote_items::dsl::resource_type.eq(type_name::<T>()))
                .filter(vote_items::dsl::resource_id.eq(resource_id)),
        )
        .execute(self)?;
        Ok(())
    }
    fn by_resource<T>(&mut self, offset: i64, limit: i64) -> Result<Vec<(i32, i32)>> {
        Ok(vote_items::dsl::vote_items
            .select((vote_items::dsl::resource_id, vote_items::dsl::score))
            .filter(vote_items::dsl::resource_type.eq(type_name::<T>()))
            .order((
                vote_items::dsl::score.desc(),
                vote_items::dsl::updated_at.desc(),
            ))
            .offset(offset)
            .limit(limit)
            .load::<(i32, i32)>(self)?)
    }
    fn count<T>(&mut self) -> Result<i64> {
        let it = vote_items::dsl::vote_items
            .filter(vote_items::dsl::resource_type.eq(type_name::<T>()))
            .count()
            .first(self)?;
        Ok(it)
    }
}
