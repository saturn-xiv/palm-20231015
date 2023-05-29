#pragma once

#include <string>

namespace palm {
namespace nut {
namespace dao {

namespace locale {
inline static const std::string CREATE =
    R"SQL(INSERT INTO locales(lang, code, message, updated_at) VALUES(:lang, :code, :message, CURRENT_TIMESTAMP))SQL";
inline static const std::string UPDATE =
    R"SQL(UPDATE locales SET message = :message, updated_at = CURRENT_TIMESTAMP, version = version+1 WHERE id = :id)SQL";
inline static const std::string BY_LANG_AND_CODE =
    R"SQL(SELECT * FROM locales WHERE lang = :lang AND code = :code LIMIT 1)SQL";
inline static const std::string BY_ID =
    R"SQL(SELECT * FROM locales WHERE id = :id LIMIT 1)SQL";
inline static const std::string BY_LANG =
    R"SQL(SELECT * FROM locales WHERE lang = :lang ORDER BY code ASC)SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM locales ORDER BY code ASC, lang ASC OFFSET :offset LIMIT :limit)SQL";
inline static const std::string LANGUAGES =
    R"SQL(SELECT DISTINCT lang FROM locales ORDER BY lang ASC)SQL";
inline static const std::string DELETE_BY_ID =
    R"SQL(DELETE FROM locales WHERE id = :id)SQL";
inline static const std::string IS_EXISTS =
    R"SQL(SELECT COUNT(*) FROM locales WHERE lang = :lang AND code = :code)SQL";
inline static const std::string TOTAL = R"SQL(SELECT COUNT(*) FROM locales)SQL";
}  // namespace locale

namespace tag {}

namespace category {
inline static const std::string OFFSPRINGS =
    R"SQL(SELECT * FROM categories WHERE "left" > :left AND "right" < :right ORDER BY "left" ASC)SQL";
inline static const std::string PARENTS =
    R"SQL(SELECT * FROM categories WHERE "left" < :left AND "right" > :right ORDER BY "left" ASC)SQL";
inline static const std::string BY_ID =
    R"SQL(SELECT * FROM categories WHERE id=:id LIMIT 1)SQL";
inline static const std::string BY_CODE =
    R"SQL(SELECT * FROM categories WHERE code=:code LIMIT 1)SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM categories ORDER BY "left" ASC)SQL";

inline static const std::string CREATE =
    R"SQL(INSERT INTO categories(code, "left", "right", updated_at) VALUES(:code, :left, :right, CURRENT_TIMESTAMP))SQL";
inline static const std::string CREATE_L =
    R"SQL(UPDATE categories SET "left"="left"+2, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "left" > :left)SQL";
inline static const std::string CREATE_R =
    R"SQL(UPDATE categories SET "right"="right"+2, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "right" > :right)SQL";

inline static const std::string UPDATE =
    R"SQL(UPDATE categories SET code=:code, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";

inline static const std::string DESTROY =
    R"SQL(DELETE FROM categories WHERE "left" BETWEEN :left AND :right)SQL";
inline static const std::string DESTROY_L =
    R"SQL(UPDATE categories SET "left"="left"-:width, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "left" > :right)SQL";
inline static const std::string DESTROY_R =
    R"SQL(UPDATE categories SET "right"="right"-:width, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "right" > :right)SQL";

inline static const std::string TOTAL =
    R"SQL(SELECT COUNT(*) FROM categories)SQL";
}  // namespace category

namespace tag {
inline static const std::string CREATE =
    R"SQL(INSERT INTO tags(code, priority, updated_at) VALUES(:id, :priority, CURRENT_TIMESTAMP))SQL";
inline static const std::string UPDATE =
    R"SQL(UPDATE tags SET code=:code, priority=:priority, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string BY_ID =
    R"SQL(SELECT * FROM tags WHERE id=:id LIMIT 1)SQL";
inline static const std::string BY_CODE =
    R"SQL(SELECT * FROM tags WHERE code=:code LIMIT 1)SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM tags ORDER BY priority ASC)SQL";
inline static const std::string DESTROY =
    R"SQL(DELETE FROM tags WHERE id=:id)SQL";
}  // namespace tag

namespace shorter_link {
inline static const std::string CREATE =
    R"SQL(INSERT INTO shorter_links(url, details, updated_at) VALUES(:url, :details, CURRENT_TIMESTAMP))SQL";
inline static const std::string UPDATE =
    R"SQL(UPDATE shorter_links SET url=:url, details=:details, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string BY_ID =
    R"SQL(SELECT * FROM shorter_links WHERE id=:id LIMIT 1)SQL";
inline static const std::string BY_URL =
    R"SQL(SELECT * FROM shorter_links WHERE url=:url LIMIT 1)SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM shorter_links ORDER BY updated_at DESC OFFSET :offset LIMIT :limit)SQL";
inline static const std::string DESTROY =
    R"SQL(DELETE FROM shorter_links WHERE id=:id)SQL";
inline static const std::string TOTAL =
    R"SQL(SELECT COUNT(*) FROM shorter_links WHERE id=:id)SQL";
}  // namespace shorter_link

namespace setting {
inline static const std::string CREATE =
    R"SQL(INSERT INTO settings("key", user_id, value, salt, updated_at) VALUES(:key, :user_id, :value, :salt, CURRENT_TIMESTAMP))SQL";
inline static const std::string UPDATE =
    R"SQL(UPDATE settings SET value=:value, salt=:salt, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string BY_KEY =
    R"SQL(SELECT * FROM settings WHERE "key"=:key AND user_id IS NULL LIMIT 1)SQL";
inline static const std::string BY_KEY_AND_USER =
    R"SQL(SELECT * FROM settings WHERE "key"=:key AND user_id=:user_id LIMIT 1)SQL";
}  // namespace setting

namespace log {
inline static const std::string TOTAL = R"SQL(SELECT COUNT(*) FROM users)SQL";
inline static const std::string CREATE =
    R"SQL(INSERT INTO logs(user_id, level, ip, message, resource_type, resource_id) VALUES(:user_id, :level, :ip, :message, :resource_type, :resource_id))SQL";
inline static const std::string BY_USER =
    R"SQL(SELECT * FROM logs WHERE user_id=:user_id ORDER BY created_at DESC OFFSET :offset LIMIT :limit)SQL";
}  // namespace log

namespace user {
inline static const std::string CREATE =
    R"SQL(INSERT INTO users(real_name, nickname, email, password, salt, uid, provider_type, provider_id, access_token, avatar, lang, time_zone, updated_at) VALUES(:real_name, :nickname, :email, :password, :salt, :uid, :provider_type, :provider_id, :access_token, :avatar, :lang, :time_zone, CURRENT_TIMESTAMP))SQL";
inline static const std::string SET_PROFILE =
    R"SQL(UPDATE users SET real_name=:real_name, avatar=:avatar, lang=:lang, time_zone=:time_zone, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string SIGN_IN =
    R"SQL(UPDATE users SET current_sign_in_ip=:current_sign_in_ip, current_sign_in_at=CURRENT_TIMESTAMP, sign_in_count=sign_in_count_1, last_sign_in_at=current_sign_in_at, last_sign_in_ip=current_sign_in_ip, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string CONFIRM =
    R"SQL(UPDATE users SET confirmed_at=CURRENT_TIMESTAMP, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string ENABLE =
    R"SQL(UPDATE users SET deleted_at=NULL, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string DISABLE =
    R"SQL(UPDATE users SET deleted_at=CURRENT_TIMESTAMP, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string LOCK =
    R"SQL(UPDATE users SET locked_at=CURRENT_TIMESTAMP, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string UNLOCK =
    R"SQL(UPDATE users SET locked_at=NULL, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string SET_PASSWORD =
    R"SQL(UPDATE users SET password=:password, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM users ORDER BY updated_at DESC OFFSET :offset LIMIT :limit)SQL";
inline static const std::string TOTAL = R"SQL(SELECT COUNT(*) FROM users)SQL";
inline static const std::string BY_ID =
    R"SQL(SELECT * FROM users WHERE id=:id LIMIT 1)SQL";
inline static const std::string BY_NICKNAME =
    R"SQL(SELECT * FROM users WHERE nickname=:nickname LIMIT 1)SQL";
inline static const std::string BY_UID =
    R"SQL(SELECT * FROM users WHERE uid=:uid LIMIT 1)SQL";
inline static const std::string BY_EMAIL =
    R"SQL(SELECT * FROM users WHERE email=:email LIMIT 1)SQL";
inline static const std::string BY_PROVIDER =
    R"SQL(SELECT * FROM users WHERE provider_type=:provider_type AND provider_id=:provider_id LIMIT 1)SQL";
}  // namespace user

namespace role {
inline static const std::string OFFSPRINGS =
    R"SQL(SELECT * FROM roles WHERE "left" > :left AND "right" < :right ORDER BY "left" ASC)SQL";
inline static const std::string PARENTS =
    R"SQL(SELECT * FROM roles WHERE "left" < :left AND "right" > :right ORDER BY "left" ASC)SQL";
inline static const std::string BY_ID =
    R"SQL(SELECT * FROM roles WHERE id=:id LIMIT 1)SQL";
inline static const std::string BY_CODE =
    R"SQL(SELECT * FROM roles WHERE code=:code LIMIT 1)SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM roles ORDER BY "left" ASC)SQL";

inline static const std::string CREATE =
    R"SQL(INSERT INTO roles(code, "left", "right", updated_at) VALUES(:code, :left, :right, CURRENT_TIMESTAMP))SQL";
inline static const std::string CREATE_L =
    R"SQL(UPDATE roles SET "left"="left"+2, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "left" > :left)SQL";
inline static const std::string CREATE_R =
    R"SQL(UPDATE roles SET "right"="right"+2, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "right" > :right)SQL";

inline static const std::string UPDATE =
    R"SQL(UPDATE roles SET code=:code, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";

inline static const std::string DESTROY =
    R"SQL(DELETE FROM roles WHERE "left" BETWEEN :left AND :right)SQL";
inline static const std::string DESTROY_L =
    R"SQL(UPDATE roles SET "left"="left"-:width, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "left" > :right)SQL";
inline static const std::string DESTROY_R =
    R"SQL(UPDATE roles SET "right"="right"-:width, version=version+1, updated_at=CURRENT_TIMESTAMP WHERE "right" > :right)SQL";

inline static const std::string TOTAL = R"SQL(SELECT COUNT(*) FROM roles)SQL";

namespace user {
inline static const std::string GET =
    R"SQL(SELECT * FROM roles_users WHERE role_id=:role_id AND user_id=:user_id LIMIT 1)SQL";
inline static const std::string BY_ROLE =
    R"SQL(SELECT * FROM roles_users WHERE role_id=:role_id ORDER BY updated_at DESC)SQL";
inline static const std::string BY_USER =
    R"SQL(SELECT * FROM roles_users WHERE user_id=:user_id ORDER BY updated_at DESC)SQL";
inline static const std::string CREATE =
    R"SQL(INSERT INTO roles_users(role_id, user_id, not_before, expired_at, updated_at) VALUES(:role_id, :user_id, :not_before, :expired_at, CURRENT_TIMESTAMP))SQL";
inline static const std::string DESTROY =
    R"SQL(DELETE FROM roles_users WHERE user_id=:user_id AND role_id=:role_id)SQL";

}  // namespace user

}  // namespace role

namespace permission {
inline static const std::string CREATE =
    R"SQL(INSERT INTO permissions(subject_type, subject_id, operation, resource_type, resource_id) VALUES(:subject_type, :subject_id, :operation, :resource_type, :resource_id))SQL";
inline static const std::string BY_SUBJECT_OPERATION_RESOURCE_WITH_ID =
    R"SQL(SELECT * FROM permissions WHERE subject_type=:subject_type AND subject_id=:subject_id AND operation=:operation AND resource_type=:resource_type AND resource_id=:resource_id LIMIT 1)SQL";
inline static const std::string BY_SUBJECT_OPERATION_RESOURCE_WITHOUT_ID =
    R"SQL(SELECT * FROM permissions WHERE subject_type=:subject_type AND subject_id=:subject_id AND operation=:operation AND resource_type=:resource_type AND resource_id IS NULL LIMIT 1)SQL";
inline static const std::string BY_SUBJECT =
    R"SQL(SELECT * FROM permissions WHERE subject_type=:subject_type AND subject_id=:subject_id ORDER BY created_at DESC)SQL";
inline static const std::string DESTROY =
    R"SQL(DELETE FROM permissions WHERE id=:id)SQL";
}  // namespace permission

namespace attachment {
inline static const std::string CREATE =
    R"SQL(INSERT INTO attachments(user_id, bucket, name, title, size, content_type, status, updated_at) VALUES(:user_id, :bucket, :name, :title, :size, :content_type, :status, CURRENT_TIMESTAMP))SQL";
inline static const std::string BY_USER =
    R"SQL(SELECT * FROM attachments WHERE user_id=:user_id ORDER BY updated_at DESC OFFSET :offset LIMIT :limit)SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM attachments ORDER BY updated_at DESC OFFSET :offset LIMIT :limit)SQL";
inline static const std::string BY_ID =
    R"SQL(SELECT * FROM attachments WHERE id=:id LIMIT 1)SQL";
inline static const std::string DESTROY =
    R"SQL(DELETE FROM attachments WHERE id=:id)SQL";
inline static const std::string TOTAL_BY_USER =
    R"SQL(SELECT COUNT(*) FROM attachments WHERE user_id=:user_id)SQL";
inline static const std::string TOTAL =
    R"SQL(SELECT COUNT(*) FROM attachments)SQL";
}  // namespace attachment

namespace leave_word {
inline static const std::string TOTAL =
    R"SQL(SELECT COUNT(*) FROM leave_words)SQL";
inline static const std::string CREATE =
    R"SQL(INSERT INTO leave_words(lang, ip, editor, body, status) VALUES(:lang, :ip, :editor, :body, :status))SQL";
inline static const std::string DESTROY =
    R"SQL(DELETE FROM leave_words WHERE id=:id)SQL";
inline static const std::string SET_STATUS =
    R"SQL(UPDATE SET leave_words SET status=:status, published_at=NULL, version=version+1, updated_at=CURRENT_TIMESTAMP )SQL";
inline static const std::string PUBLISH =
    R"SQL(UPDATE SET leave_words SET status=:status, published_at=CURRENT_TIMESTAMP, version=version+1, updated_at=CURRENT_TIMESTAMP )SQL";
inline static const std::string ALL =
    R"SQL(SELECT * FROM leave_words ORDER BY updated_at DESC OFFSET :offset LIMIT :limit)SQL";
}  // namespace leave_word

}  // namespace dao
}  // namespace nut
}  // namespace palm
