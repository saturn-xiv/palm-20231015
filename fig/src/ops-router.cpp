#include "palm/ops-router.hpp"
#include "palm/validator.hpp"
#include "palm/version.hpp"

std::optional<palm::ops::router::dao::setting::Item>
palm::ops::router::dao::setting::by_key(soci::session& db,
                                        const std::string& key) {
  boost::optional<palm::ops::router::dao::setting::Item> it;
  db << BY_KEY, soci::use(key, palm::nut::dao::KEY_COLUMN), soci::into(it);
  if (it.has_value()) {
    return it.get();
  }
  return std::nullopt;
}
void palm::ops::router::dao::setting::create(soci::session& db,
                                             const std::string& key,
                                             const std::string& value) {
  db << CREATE, soci::use(key, palm::nut::dao::KEY_COLUMN),
      soci::use(value, palm::nut::dao::VALUE_COLUMN);
}
void palm::ops::router::dao::setting::update(soci::session& db,
                                             const int32_t id,
                                             const std::string& value) {
  db << UPDATE, soci::use(id, palm::nut::dao::ID_COLUMN),
      soci::use(value, palm::nut::dao::VALUE_COLUMN);
}

#define PALM_OPS_ROUTER_MUST_SIGN_IN(context)                   \
  const auto current_user = this->current_user(context);        \
  if (!current_user) {                                          \
    return grpc::Status(grpc::StatusCode::UNAUTHENTICATED, ""); \
  }

std::optional<palm::ops::router::v1::UserProfile>
palm::ops::router::services::User::current_user(grpc::ServerContext* context) {
  const auto token = palm::Jwt::token(context);
  if (token.has_value()) {
    const auto it = this->_jwt->decode(token.value(), palm::PROJECT_NAME);
    {
      const auto payload = std::get<2>(it);
      if (payload[palm::nut::dao::ACTION_COLUMN] ==
          palm::nut::dao::user::Item::SIGN_IN) {
        const auto user =
            palm::ops::router::dao::setting::get<std::string, v1::UserProfile>(
                *this->_db);
        if (user.has_value() && user->nickname() == std::get<0>(it)) {
          return user;
        }
      } else {
        BOOST_LOG_TRIVIAL(error) << "not a valid token";
      }
    }
  }
  return std::nullopt;
}

grpc::Status palm::ops::router::services::User::SignIn(
    grpc::ServerContext* context, const v1::UserSignInRequest* request,
    v1::UserSignInResponse* response) {
  const auto user =
      palm::ops::router::dao::setting::get<std::string, v1::UserProfile>(
          *this->_db);
  if (user.has_value() && user->nickname() == request->user().nickname() &&
      palm::hashing::verify(request->user().password(), user->password())) {
    BOOST_LOG_TRIVIAL(info) << user->nickname() << " sign in";
    {
      nlohmann::json payload;
      payload[palm::nut::dao::ACTION_COLUMN] =
          palm::nut::dao::user::Item::SIGN_IN;
      const std::string token =
          this->_jwt->encode(user->nickname(), palm::PROJECT_NAME, payload,
                             std::chrono::seconds{request->ttl().seconds()});
      response->set_token(token);
    }
    return grpc::Status::OK;
  }
  return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
}
grpc::Status palm::ops::router::services::User::Refresh(
    grpc::ServerContext* context, const google::protobuf::Duration* request,
    v1::UserSignInResponse* response) {
  PALM_OPS_ROUTER_MUST_SIGN_IN(context)

  {
    nlohmann::json payload;
    payload[palm::nut::dao::ACTION_COLUMN] =
        palm::nut::dao::user::Item::SIGN_IN;
    const std::string token =
        this->_jwt->encode(current_user->nickname(), palm::PROJECT_NAME,
                           payload, std::chrono::seconds{request->seconds()});
    response->set_token(token);
  }
  return grpc::Status::OK;
}

grpc::Status palm::ops::router::services::User::Update(
    grpc::ServerContext* context, const v1::UserUpdateRequest* request,
    google::protobuf::Empty* response) {
  PALM_OPS_ROUTER_MUST_SIGN_IN(context)

  const auto nickname = palm::to_code(request->new_().nickname());
  palm::validator::code(nickname);
  const auto password = request->new_().password();
  palm::validator::password(password);

  if (current_user->nickname() == nickname &&
      palm::hashing::verify(request->current().password(),
                            current_user->password())) {
    BOOST_LOG_TRIVIAL(warning) << current_user->nickname() << " update profile";
    {
      v1::UserProfile it;
      it.set_nickname(nickname);
      it.set_password(password);
      soci::transaction tr(*this->_db);
      palm::ops::router::dao::setting::set<std::string,
                                           palm::ops::router::v1::UserProfile>(
          *this->_db, it);
      tr.commit();
    }
    return grpc::Status::OK;
  }
  return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
}
grpc::Status palm::ops::router::services::User::SignOut(
    grpc::ServerContext* context, const google::protobuf::Empty* request,
    google::protobuf::Empty* response) {
  PALM_OPS_ROUTER_MUST_SIGN_IN(context)

  BOOST_LOG_TRIVIAL(info) << current_user->nickname() << " sign out";
  return grpc::Status::OK;
}
grpc::Status palm::ops::router::services::User::Logs(
    grpc::ServerContext* context, const google::protobuf::Duration* request,
    v1::UserLogsResponse* response) {
  PALM_OPS_ROUTER_MUST_SIGN_IN(context)

  {
    std::stringstream ss;
    ss << "journalctl --utc --all " << request->seconds();
    const auto out = palm::shell(ss.str());
    std::vector<std::string> lines;
    boost::split(lines, out, boost::is_any_of("\n"));
    for (const auto& it : lines) {
      auto item = response->add_items();
      *item = it;
    }
  }
  return grpc::Status::OK;
}
