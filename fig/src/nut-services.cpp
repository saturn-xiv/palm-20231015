#include "palm/nut-services.hpp"
#include "palm/fig.hpp"
#include "palm/nut-sql.hpp"
#include "palm/validator.hpp"
#include "palm/version.hpp"

// #include <Poco/URI.h>

// grpc::Status palm::nut::services::Locale::Set(
//     grpc::ServerContext* context, const v1::LocaleSetRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto code = palm::to_code(request->code());
//   palm::validator::code(code);
//   {
//     soci::transaction tr(db);
//     auto it = palm::nut::dao::locale::get(db, request->lang(), code);
//     if (it) {
//       palm::nut::dao::locale::update(db, it->id, request->message());
//     } else {
//       palm::nut::dao::locale::create(db, request->lang(), code,
//                                      request->message());
//     }
//     tr.commit();
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Locale::Get(
//     grpc::ServerContext* context,
//     const palm::nut::v1::LocaleGetRequest* request,
//     palm::nut::v1::LocaleIndexResponse_Item* response) {
//   soci::session db(*this->_postgresql);
//   auto it = palm::nut::dao::locale::get(db, request->lang(), request->code());
//   if (!it) {
//     return grpc::Status(grpc::StatusCode::NOT_FOUND, "");
//   }
//   it->set(response);

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Locale::ByLang(
//     grpc::ServerContext* context,
//     const palm::nut::v1::LocaleByLangRequest* request,
//     palm::nut::v1::LocaleByLangResponse* response) {
//   soci::session db(*this->_postgresql);
//   auto items = palm::nut::dao::locale::get(db, request->lang());
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }

//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Locale::Index(
//     grpc::ServerContext* context, const palm::nut::v1::Pager* request,
//     palm::nut::v1::LocaleIndexResponse* response) {
//   soci::session db(*this->_postgresql);
//   const auto total = palm::nut::dao::locale::total(db);
//   const auto pagination = response->mutable_pagination();
//   const auto page = palm::nut::set(request, total, pagination);
//   auto items = palm::nut::dao::locale::get(db, page.first, page.second);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Locale::Destroy(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::locale::destroy(db, request->id());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Category::Create(
//     grpc::ServerContext* context,
//     const palm::nut::v1::CategoryCreateRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto code = palm::to_code(request->code());
//   palm::validator::code(code);
//   {
//     soci::transaction tr(db);
//     if (request->has_left()) {
//       palm::nut::dao::category::append(db, code, request->left());
//     } else if (request->has_parent()) {
//       palm::nut::dao::category::create(db, code, request->parent());
//     } else {
//       return grpc::Status(grpc::StatusCode::INVALID_ARGUMENT, "");
//     }

//     tr.commit();
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Category::Update(
//     grpc::ServerContext* context,
//     const palm::nut::v1::CategoryUpdateRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto code = palm::to_code(request->code());
//   palm::validator::code(code);
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::category::update(db, request->id(), code);
//     tr.commit();
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Category::Destroy(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     {
//       const auto items =
//           palm::nut::dao::category::offsprings(db, request->id());
//       if (!items.empty()) {
//         std::stringstream ss;
//         ss << "category(" << request->id() << ") has offsprings";
//         return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, ss.str());
//       }
//     }
//     palm::nut::dao::category::destroy(db, request->id());
//     tr.commit();
//   }

//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Category::Index(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::CategoryIndexResponse* response) {
//   soci::session db(*this->_postgresql);

//   auto items = palm::nut::dao::category::get(db);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Tag::Create(
//     grpc::ServerContext* context,
//     const palm::nut::v1::TagCreateRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto code = palm::to_code(request->code());
//   palm::validator::code(code);
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::tag::create(db, code, request->priority());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Tag::Update(
//     grpc::ServerContext* context,
//     const palm::nut::v1::TagUpdateRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto code = palm::to_code(request->code());
//   palm::validator::code(code);
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::tag::update(db, request->id(), code, request->priority());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Tag::Destroy(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::tag::destroy(db, request->id());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Tag::Index(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::TagIndexResponse* response) {
//   soci::session db(*this->_postgresql);
//   auto items = palm::nut::dao::tag::get(db);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::ShorterLink::Create(
//     grpc::ServerContext* context,
//     const palm::nut::v1::ShorterLinkCreateRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::shorter_link::create(db, request->url(),
//                                          request->details());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::ShorterLink::Update(
//     grpc::ServerContext* context,
//     const palm::nut::v1::ShorterLinkUpdateRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::shorter_link::update(db, request->id(), request->url(),
//                                          request->details());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::ShorterLink::Destroy(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::shorter_link::destroy(db, request->id());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::ShorterLink::Index(
//     grpc::ServerContext* context, const palm::nut::v1::Pager* request,
//     palm::nut::v1::ShorterLinkIndexResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto total = palm::nut::dao::shorter_link::total(db);
//   const auto pagination = response->mutable_pagination();
//   const auto page = palm::nut::set(request, total, pagination);
//   auto items = palm::nut::dao::shorter_link::get(db, page.first, page.second);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Site::SetMaintenanceMode(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteMaintenanceModeRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   palm::nut::dao::setting::set(db, *this->_secret_box,
//                                boost::typeindex::type_id_with_cvr<
//                                    palm::nut::v1::SiteMaintenanceModeRequest>()
//                                    .pretty_name(),
//                                request);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::Install(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteInstallRequest* request,
//     google::protobuf::Empty* response) {
//   const std::string client_ip = context->peer();
//   soci::session db(*this->_postgresql);

//   {
//     soci::transaction tr(db);

//     BOOST_LOG_TRIVIAL(info) << "check db is empty";
//     {
//       const auto c = palm::nut::dao::user::total(db);
//       if (c > 0) {
//         return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//       }
//     }

//     const std::string email = palm::to_code(request->user().email());
//     palm::validator::email(email);
//     const std::string nickname = palm::to_code(request->user().nickname());
//     palm::validator::code(nickname);
//     BOOST_LOG_TRIVIAL(info)
//         << "create the first account " << nickname << "<" << email << ">";
//     palm::nut::dao::user::create(db, request->user().real_name(), nickname,
//                                  email, request->user().password(),
//                                  request->user().lang(),
//                                  request->user().time_zone());
//     const auto user = palm::nut::dao::user::by_email(db, email);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "signed up.");

//     BOOST_LOG_TRIVIAL(info) << "confirm user " << user->nickname;
//     {
//       palm::nut::dao::user::confirm(db, user->id);
//       palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//           db, user->id, client_ip, "confirmed.");
//     }

//     BOOST_LOG_TRIVIAL(info)
//         << "apply " << palm::nut::dao::role::Item::ROOT << " and "
//         << palm::nut::dao::role::Item::ADMINISTRATOR << " to user "
//         << user->nickname;
//     {
//       db << palm::nut::dao::role::CREATE,
//           soci::use(palm::nut::dao::role::Item::ROOT,
//                     palm::nut::dao::CODE_COLUMN),
//           soci::use(1, palm::nut::dao::LEFT_COLUMN),
//           soci::use(2, palm::nut::dao::RIGHT_COLUMN);
//       const auto root =
//           palm::nut::dao::role::get(db, palm::nut::dao::role::Item::ROOT);
//       palm::nut::dao::role::append(
//           db, palm::nut::dao::role::Item::ADMINISTRATOR, root->id);
//       const auto admin = palm::nut::dao::role::get(
//           db, palm::nut::dao::role::Item::ADMINISTRATOR);

//       {
//         const std::time_t now_t = std::time(nullptr);
//         const auto now = std::localtime(&now_t);
//         std::tm nbf{};
//         {
//           nbf.tm_year = now->tm_year;
//           nbf.tm_mon = now->tm_mon;
//           nbf.tm_mday = now->tm_mday;
//         }
//         std::tm exp{};
//         {
//           exp.tm_year = now->tm_year + 1000;
//           exp.tm_mon = now->tm_mon;
//           exp.tm_mday = now->tm_mday;
//         }
//         palm::nut::dao::role::user::associate(db, root->id, user->id, nbf, exp);
//         palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//             db, user->id, client_ip, "apply role " + root->code + ".");
//         palm::nut::dao::role::user::associate(db, admin->id, user->id, nbf,
//                                               exp);
//         palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//             db, user->id, client_ip, "apply role " + admin->code + ".");
//       }
//     }
//     BOOST_LOG_TRIVIAL(info) << "add default category";
//     {
//       db << palm::nut::dao::category::CREATE,
//           soci::use(palm::nut::dao::category::Item::DEFAULT,
//                     palm::nut::dao::CODE_COLUMN),
//           soci::use(1, palm::nut::dao::LEFT_COLUMN),
//           soci::use(2, palm::nut::dao::RIGHT_COLUMN);
//     }

//     BOOST_LOG_TRIVIAL(info) << "set default site info";
//     {
//       {
//         v1::SiteLayoutResponse_Author it;
//         palm::nut::dao::setting::set(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteLayoutResponse_Author>(), &it);
//       }
//       {
//         v1::SiteSetLogoRequest it;
//         palm::nut::dao::setting::set(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteSetLogoRequest>(), &it);
//       }
//       {
//         v1::SiteSetCopyrightRequest it;
//         palm::nut::dao::setting::set(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteSetCopyrightRequest>(), &it);
//       }
//       {
//         v1::SiteSetKeywordsRequest it;
//         palm::nut::dao::setting::set(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteSetKeywordsRequest>(), &it);
//       }
//       for (const auto& lang : palm::nut::dao::locale::languages(db)) {
//         v1::SiteSetInfoRequest it;
//         palm::nut::dao::setting::set(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteSetInfoRequest>(lang), &it);
//       }

//       tr.commit();
//     }
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Site::ClearCache(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   this->_redis->clear();
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Site::Layout(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::SiteLayoutResponse* response) {
//   soci::session db(*this->_postgresql);
//   const auto user = palm::nut::handlers::current_user<grpc::ServerContext*>(
//       context, db, *this->_jwt);
//   const auto lang =
//       palm::nut::handlers::locale<grpc::ServerContext*>(context, user);

//   if (this->_redis->get<std::string, palm::nut::v1::SiteLayoutResponse>(
//           lang, response)) {
//     return grpc::Status::OK;
//   }

//   {
//     const auto it =
//         palm::nut::dao::setting::get<palm::SecretBox,
//                                      palm::nut::v1::SiteSetLogoRequest>(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteSetLogoRequest>());
//     response->set_logo(it->url());
//   }
//   {
//     const auto it =
//         palm::nut::dao::setting::get<palm::SecretBox,
//                                      palm::nut::v1::SiteSetCopyrightRequest>(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteSetCopyrightRequest>());
//     response->set_copyright(it->payload());
//   }
//   {
//     const auto it =
//         palm::nut::dao::setting::get<palm::SecretBox,
//                                      palm::nut::v1::SiteSetKeywordsRequest>(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteSetKeywordsRequest>());
//     for (auto const v : it->items()) {
//       std::string* k = response->add_keywords();
//       *k = v;
//     }
//   }
//   {
//     const auto it =
//         palm::nut::dao::setting::get<palm::SecretBox,
//                                      palm::nut::v1::SiteLayoutResponse_Author>(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::SiteLayoutResponse_Author>());
//     auto author = response->mutable_author();
//     author->set_email(it->email());
//     author->set_name(it->name());
//   }
//   {
//     this->_i18n->t(lang, palm::nut::dao::locale::SITE_TITLE);
//     this->_i18n->t(lang, palm::nut::dao::locale::SITE_SUBHEAD);
//     this->_i18n->t(lang, palm::nut::dao::locale::SITE_DESCRIPTION);
//   }
//   {
//     for (const auto& lang : palm::nut::dao::locale::languages(db)) {
//       auto it = response->add_languages();
//       *it = lang;
//     }
//   }

//   this->_redis->set<std::string, palm::nut::v1::SiteLayoutResponse>(lang,
//                                                                     *response);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetAuthor(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteLayoutResponse::Author* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::SiteLayoutResponse_Author>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetCopyright(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteSetCopyrightRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::SiteSetCopyrightRequest>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetKeywords(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteSetKeywordsRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::SiteSetKeywordsRequest>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetInfo(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteSetInfoRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::locale::set(db, request->lang(),
//                                 palm::nut::dao::locale::SITE_TITLE,
//                                 request->title());
//     palm::nut::dao::locale::set(db, request->lang(),
//                                 palm::nut::dao::locale::SITE_SUBHEAD,
//                                 request->subhead());
//     palm::nut::dao::locale::set(db, request->lang(),
//                                 palm::nut::dao::locale::SITE_DESCRIPTION,
//                                 request->description());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetLogo(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteSetLogoRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::SiteSetLogoRequest>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetMinio(
//     grpc::ServerContext* context, const palm::nut::v1::MinioProfile* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::MinioProfile>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::GetMinio(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::MinioProfile* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto it =
//       palm::nut::dao::setting::get<palm::SecretBox, v1::MinioProfile>(
//           db, *this->_secret_box,
//           palm::nut::dao::setting::key<v1::MinioProfile>());
//   response->CopyFrom(*it);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::TestMinio(
//     grpc::ServerContext* context, const palm::nut::v1::MinioProfile* request,
//     palm::nut::v1::SiteMinioTestResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto cfg = palm::nut::open(*request);
//   const auto items = cfg->buckets();
//   for (const auto& it : items) {
//     auto iv = response->add_buckets();
//     *iv = it;
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetTwilio(
//     grpc::ServerContext* context, const palm::nut::v1::TwilioProfile* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::TwilioProfile>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::GetTwilio(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::TwilioProfile* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto it =
//       palm::nut::dao::setting::get<palm::SecretBox, v1::TwilioProfile>(
//           db, *this->_secret_box,
//           palm::nut::dao::setting::key<v1::TwilioProfile>());
//   response->CopyFrom(*it);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::TestTwilio(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteTwilioTestRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto cfg = palm::nut::open(request->profile());
//   cfg->sms(request->to(), request->message());
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetSmtp(
//     grpc::ServerContext* context, const palm::nut::v1::SmtpProfile* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box, palm::nut::dao::setting::key<v1::SmtpProfile>(),
//         request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::GetSmtp(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::SmtpProfile* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto it =
//       palm::nut::dao::setting::get<palm::SecretBox, v1::SmtpProfile>(
//           db, *this->_secret_box,
//           palm::nut::dao::setting::key<v1::SmtpProfile>());
//   response->CopyFrom(*it);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::TestSmtp(
//     grpc::ServerContext* context,
//     const palm::nut::v1::SiteSmtpTestRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto cfg = palm::nut::open(request->profile());
//   {
//     palm::smtp::Address to;
//     to.name = request->to().name();
//     to.email = request->to().email();
//     cfg->send(to, request->subject(), request->content(), false);
//   };
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetBing(
//     grpc::ServerContext* context, const palm::nut::v1::BingProfile* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box, palm::nut::dao::setting::key<v1::BingProfile>(),
//         request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::GetBing(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::BingProfile* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto it =
//       palm::nut::dao::setting::get<palm::SecretBox, v1::BingProfile>(
//           db, *this->_secret_box,
//           palm::nut::dao::setting::key<v1::BingProfile>());
//   response->CopyFrom(*it);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetIndexNow(
//     grpc::ServerContext* context, const palm::nut::v1::IndexNowProfile* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::IndexNowProfile>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::GetIndexNow(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::IndexNowProfile* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto it =
//       palm::nut::dao::setting::get<palm::SecretBox, v1::IndexNowProfile>(
//           db, *this->_secret_box,
//           palm::nut::dao::setting::key<v1::IndexNowProfile>());
//   response->CopyFrom(*it);
//   return grpc::Status::OK;
// }

// // https://www.indexnow.org/documentation
// grpc::Status palm::nut::services::Site::PingIndexNow(
//     grpc::ServerContext* context, const v1::IndexNowPingRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   static const size_t LIMIT = 10000;

//   const auto items = palm::fig::dao::sitemap(db);
//   for (size_t i = 0; i < items.size(); i += LIMIT) {
//     nlohmann::json body;
//     {
//       const std::string home = request->home();
//       {
//         Poco::URI uri(home);
//         body["host"] = uri.getHost();
//       }
//       body["key"] = request->key();
//       {
//         std::vector<std::string> urls;
//         for (size_t j = 0; j < LIMIT; j++) {
//           const auto k = i * LIMIT + j;
//           if (k >= items.size()) {
//             break;
//           }
//           urls.push_back(items[k].loc);
//         }
//         body["urlList"] = urls;
//       }
//     }
//     cpr::Response it = cpr::Post(
//         cpr::Url{"https://api.indexnow.org/indexnow"},
//         cpr::Header{{"Content-Type", "application/json; charset=utf-8"}},
//         cpr::Body{body.dump()});
//     if (it.status_code != cpr::status::HTTP_OK) {
//       BOOST_LOG_TRIVIAL(error) << "ping IndexNow: " << it.text;
//       return grpc::Status(grpc::StatusCode::INTERNAL, it.text);
//     }
//     BOOST_LOG_TRIVIAL(debug) << it.text;
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::SetGoogle(
//     grpc::ServerContext* context, const palm::nut::v1::GoogleProfile* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::GoogleProfile>(), request);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::GetGoogle(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::GoogleProfile* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto it =
//       palm::nut::dao::setting::get<palm::SecretBox, v1::GoogleProfile>(
//           db, *this->_secret_box,
//           palm::nut::dao::setting::key<v1::GoogleProfile>());
//   response->CopyFrom(*it);
//   return grpc::Status::OK;
// }

// // https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap
// grpc::Status palm::nut::services::Site::PingGoogle(
//     grpc::ServerContext* context, const v1::SitemapPingRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   cpr::Response it =
//       cpr::Get(cpr::Url{"https://www.google.com/ping"},
//                cpr::Parameters{{"sitemap", request->home() + "/sitemap.xml"}});

//   if (it.status_code != cpr::status::HTTP_OK) {
//     BOOST_LOG_TRIVIAL(error) << it.status_code << " " << it.text;
//     return grpc::Status(grpc::StatusCode::INTERNAL, it.text);
//   }
//   BOOST_LOG_TRIVIAL(debug) << it.text;

//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Site::SetBaidu(
//     grpc::ServerContext* context, const palm::nut::v1::BaiduProfile* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::setting::set(
//         db, *this->_secret_box,
//         palm::nut::dao::setting::key<v1::BaiduProfile>(), request);
//     tr.commit();
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::GetBaidu(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::BaiduProfile* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto it =
//       palm::nut::dao::setting::get<palm::SecretBox, v1::BaiduProfile>(
//           db, *this->_secret_box,
//           palm::nut::dao::setting::key<v1::BaiduProfile>());
//   response->CopyFrom(*it);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::PingBaidu(
//     grpc::ServerContext* context, const v1::SitemapPingRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   // https://help.baidu.com/question?prod_id=99&class=0&id=3046
//   const auto items =
//       palm::nut::dao::baidu::ping_request_body(db, request->home());
//   for (const auto& [lang, body] : items) {
//     cpr::Response it =
//         cpr::Post(cpr::Url{"https://ping.baidu.com/ping/RPC2"},
//                   cpr::Header{{"Content-Type", "text/xml"}}, cpr::Body{body});
//     if (it.status_code != cpr::status::HTTP_OK) {
//       BOOST_LOG_TRIVIAL(error) << "ping baidu(" << lang << "): " << it.text;
//       return grpc::Status(grpc::StatusCode::INTERNAL, it.text);
//     }
//     BOOST_LOG_TRIVIAL(debug) << it.text;
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Site::Status(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::SiteStatusResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   // TODO
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::LeaveWord::Create(
//     grpc::ServerContext* context, const palm::nut::v1::MediaContent* request,
//     google::protobuf::Empty* response) {
//   soci::session db(*this->_postgresql);
//   const auto user = palm::nut::handlers::current_user(context, db, *this->_jwt);
//   const auto lang = palm::nut::handlers::locale(context, user);
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::leave_word::create(db, lang, context->peer(),
//                                        request->editor(), request->body());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::LeaveWord::Destroy(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     palm::nut::dao::leave_word::destroy(db, request->id());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::LeaveWord::Index(
//     grpc::ServerContext* context, const palm::nut::v1::Pager* request,
//     palm::nut::v1::LeaveWordIndexResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto total = palm::nut::dao::leave_word::total(db);
//   const auto pagination = response->mutable_pagination();
//   const auto page = palm::nut::set(request, total, pagination);
//   auto items = palm::nut::dao::leave_word::get(db, page.first, page.second);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Notification::Index(
//     grpc::ServerContext* context, const palm::nut::v1::Pager* request,
//     palm::nut::v1::IndexNotificationResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   // TODO
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Policy::AddRole(
//     grpc::ServerContext* context,
//     const palm::nut::v1::PolicyAddRoleRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const std::string code = palm::to_code(request->code());
//   palm::validator::code(code);
//   {
//     soci::transaction tr(db);
//     if (request->has_left()) {
//       palm::nut::dao::role::append(db, code, request->left());
//     } else if (request->has_parent()) {
//       palm::nut::dao::role::create(db, code, request->parent());
//     } else {
//       return grpc::Status(grpc::StatusCode::INVALID_ARGUMENT, "");
//     }

//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetAllRoles(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     palm::nut::v1::PolicyRoleListResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto items = palm::nut::dao::role::get(db);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::DeleteRole(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     const auto role = palm::nut::dao::role::get(db, request->id());
//     {
//       const auto items = palm::nut::dao::role::offsprings(db, role->id);
//       if (!items.empty()) {
//         return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//       }
//     }
//     {
//       const auto items = palm::nut::dao::role::user::by_role(db, role->id);
//       if (!items.empty()) {
//         return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//       }
//     }
//     palm::nut::dao::role::destroy(db, role->id);
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetRolesForUser(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyRolesForUserResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto items = palm::nut::dao::role::user::by_user(db, request->id());
//   for (auto& it : items) {
//     const auto role = palm::nut::dao::role::get(db, it.role_id);
//     auto iv = response->add_items();
//     palm::nut::dao::role::set(role.value(), it, iv);
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetUsersForRole(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyUsersForRoleResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto items = palm::nut::dao::role::user::by_role(db, request->id());
//   for (auto& it : items) {
//     const auto user = palm::nut::dao::user::by_id(db, it.user_id);
//     auto iv = response->add_items();
//     palm::nut::dao::role::set(user.value(), it, iv);
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::AddRolesForUser(
//     grpc::ServerContext* context,
//     const palm::nut::v1::PolicyAddRolesForUserRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const time_t not_before =
//       google::protobuf::util::TimeUtil::TimestampToTimeT(request->not_before());
//   const time_t expired_at =
//       google::protobuf::util::TimeUtil::TimestampToTimeT(request->expired_at());

//   auto nbf = std::gmtime(&not_before);
//   auto exp = std::gmtime(&expired_at);

//   {
//     soci::transaction tr(db);
//     const auto user = palm::nut::dao::user::by_id(db, request->user());
//     for (const auto it : request->roles()) {
//       const auto role = palm::nut::dao::role::get(db, it);
//       palm::nut::dao::role::user::associate(db, role->id, user->id, *nbf, *exp);
//     }
//     tr.commit();
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::DeleteRolesForUser(
//     grpc::ServerContext* context,
//     const palm::nut::v1::PolicyDeleteRolesForUserRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);
//     const auto user = palm::nut::dao::user::by_id(db, request->user());
//     for (const auto it : request->roles()) {
//       const auto role = palm::nut::dao::role::get(db, it);
//       palm::nut::dao::role::user::dissociate(db, role->id, user->id);
//     }
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetImplicitRolesForUser(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyImplicitRolesForUserResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   for (const auto& it :
//        palm::nut::dao::implicit_roles_for_user(db, request->id())) {
//     auto iv = response->add_items();
//     *iv = it.code;
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetImplicitUsersForRole(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyImplicitUsersForRoleResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   for (auto& it : palm::nut::dao::implicit_users_for_role(db, request->id())) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetPermissionsForUser(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyPermissionList* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());
//   auto items =
//       palm::nut::dao::permission::by_subject<palm::nut::dao::user::Item>(
//           db, user->id);

//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetPermissionsForRole(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyPermissionList* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto role = palm::nut::dao::role::get(db, request->id());
//   auto items =
//       palm::nut::dao::permission::by_subject<palm::nut::dao::role::Item>(
//           db, role->id);

//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetImplicitPermissionsForUser(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyPermissionList* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   for (auto& it :
//        palm::nut::dao::implicit_permissions_for_user(db, request->id())) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::GetImplicitPermissionsForRole(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::PolicyPermissionList* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   for (auto& it :
//        palm::nut::dao::implicit_permissions_for_role(db, request->id())) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::AddPermissions(
//     grpc::ServerContext* context,
//     const palm::nut::v1::PolicyPermissionList* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);

//     for (const auto it : request->items()) {
//       if (it.has_user()) {
//         if (it.resource().has_id()) {
//           palm::nut::dao::permission::create<palm::nut::dao::user::Item>(
//               db, it.user(), it.operation(), it.resource().type(),
//               it.resource().id());
//         } else {
//           palm::nut::dao::permission::create<palm::nut::dao::user::Item>(
//               db, it.user(), it.operation(), it.resource().type());
//         }
//       } else if (it.has_role()) {
//         if (it.resource().has_id()) {
//           palm::nut::dao::permission::create<palm::nut::dao::role::Item>(
//               db, it.role(), it.operation(), it.resource().type(),
//               it.resource().id());
//         } else {
//           palm::nut::dao::permission::create<palm::nut::dao::role::Item>(
//               db, it.role(), it.operation(), it.resource().type());
//         }
//       }
//     }

//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Policy::DeletePermissions(
//     grpc::ServerContext* context,
//     const palm::nut::v1::PolicyPermissionList* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   {
//     soci::transaction tr(db);

//     for (const auto it : request->items()) {
//       if (it.has_user()) {
//         if (it.resource().has_id()) {
//           const auto iv =
//               palm::nut::dao::permission::get<palm::nut::dao::user::Item>(
//                   db, it.user(), it.operation(), it.resource().type(),
//                   it.resource().id());
//           palm::nut::dao::permission::destroy(db, iv->id);
//         } else {
//           const auto iv =
//               palm::nut::dao::permission::get<palm::nut::dao::user::Item>(
//                   db, it.user(), it.operation(), it.resource().type());
//           palm::nut::dao::permission::destroy(db, iv->id);
//         }
//       } else if (it.has_role()) {
//         if (it.resource().has_id()) {
//           const auto iv =
//               palm::nut::dao::permission::get<palm::nut::dao::role::Item>(
//                   db, it.role(), it.operation(), it.resource().type(),
//                   it.resource().id());
//           palm::nut::dao::permission::destroy(db, iv->id);
//         } else {
//           const auto iv =
//               palm::nut::dao::permission::get<palm::nut::dao::role::Item>(
//                   db, it.role(), it.operation(), it.resource().type());
//           palm::nut::dao::permission::destroy(db, iv->id);
//         }
//       }
//     }

//     tr.commit();
//   }
//   return grpc::Status::OK;
// }

// grpc::Status palm::nut::services::Attachment::Destroy(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   const auto it = palm::nut::dao::attachment::get(db, request->id());
//   if (current_user->id() == it->id || current_user->is_administrator()) {
//     {
//       soci::transaction tr(db);
//       palm::nut::dao::attachment::destroy(db, it->id);
//       tr.commit();
//     }
//     const auto cfg =
//         palm::nut::dao::setting::get<palm::SecretBox, v1::MinioProfile>(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::MinioProfile>());
//     const auto cli = palm::nut::open(cfg.value());
//     cli->remove(it->bucket, it->name);
//     return grpc::Status::OK;
//   }
//   return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
// }
// grpc::Status palm::nut::services::Attachment::Index(
//     grpc::ServerContext* context, const palm::nut::v1::Pager* request,
//     palm::nut::v1::AttachmentIndexResponse* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   const auto is_admin = current_user->is_administrator();
//   const auto total =
//       is_admin ? palm::nut::dao::attachment::total(db)
//                : palm::nut::dao::attachment::total(db, current_user->id());
//   const auto pagination = response->mutable_pagination();
//   const auto page = palm::nut::set(request, total, pagination);
//   auto items =
//       is_admin ? palm::nut::dao::attachment::get(db, page.first, page.second)
//                : palm::nut::dao::attachment::get(db, current_user->id(),
//                                                  page.first, page.second);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::Attachment::Show(
//     grpc::ServerContext* context,
//     const palm::nut::v1::AttachmentShowRequest* request,
//     palm::nut::v1::AttachmentShowResponse* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   auto it = palm::nut::dao::attachment::get(db, request->id());

//   if (current_user->id() == it->id || current_user->is_administrator()) {
//     {
//       auto iv = response->mutable_item();
//       it->set(iv);
//     }

//     const auto cfg =
//         palm::nut::dao::setting::get<palm::SecretBox, v1::MinioProfile>(
//             db, *this->_secret_box,
//             palm::nut::dao::setting::key<v1::MinioProfile>());
//     const auto cli = palm::nut::open(cfg.value());
//     const std::string url = cli->get(
//         it->bucket, it->name, std::chrono::seconds(request->ttl().seconds()));
//     response->set_url(url);

//     return grpc::Status::OK;
//   }
//   return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
// }

// grpc::Status palm::nut::services::User::SignIn(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserSignInRequest* request,
//     palm::nut::v1::UserSignInResponse* response) {
//   soci::session db(*this->_postgresql);

//   const auto user = this->get_user(db, &request->query());
//   if (!user->verify_password(request->password())) {
//     return grpc::Status(grpc::StatusCode::UNAUTHENTICATED, "");
//   }
//   if (!user->is_available()) {
//     return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::sign_in(db, user->id, client_ip);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "signed in.");
//     tr.commit();
//   }
//   this->build_sign_in_response(db, user, &request->ttl(), response);

//   return grpc::Status::OK;
// }
// void palm::nut::services::User::build_sign_in_response(
//     soci::session& db, const std::optional<palm::nut::dao::user::Item> user,
//     const google::protobuf::Duration* ttl,
//     palm::nut::v1::UserSignInResponse* response) {
//   {
//     auto it = response->mutable_payload();
//     user->set(it);
//   }
//   {
//     const auto token =
//         this->sum_token(user, palm::nut::dao::user::Item::SIGN_IN,
//                         std::chrono::seconds{ttl->seconds()});
//     response->set_token(token);
//   }

//   for (auto& it : palm::nut::dao::implicit_roles_for_user(db, user->id)) {
//     auto iv = response->add_roles();
//     *iv = it.code;
//   }
//   for (auto& it : palm::nut::dao::implicit_permissions_for_user(db, user->id)) {
//     auto iv = response->add_permissions();
//     it.set(iv);
//   }
// }

// grpc::Status palm::nut::services::User::SignUp(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserSignUpRequest* request,
//     google::protobuf::Empty* response) {
//   const std::string client_ip = context->peer();
//   soci::session db(*this->_postgresql);

//   const std::string email = palm::to_code(request->email());
//   palm::validator::email(email);
//   const std::string nickname = palm::to_code(request->nickname());
//   palm::validator::code(nickname);
//   const std::string password = request->password();
//   palm::validator::password(password);
//   {
//     soci::transaction tr(db);

//     BOOST_LOG_TRIVIAL(info)
//         << "sign up account " << nickname << "<" << email << ">";
//     palm::nut::dao::user::create(db, request->real_name(), nickname, email,
//                                  password, request->lang(),
//                                  request->time_zone());
//     const auto user = palm::nut::dao::user::by_email(db, email);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "signed up.");

//     tr.commit();
//     this->send_email(user, palm::nut::dao::user::Item::CONFIRM);
//   }

//   return grpc::Status::OK;
// }
// std::string palm::nut::services::User::sum_token(
//     const std::optional<palm::nut::dao::user::Item> user,
//     const std::string& action, const std::chrono::seconds& ttl) {
//   nlohmann::json payload;
//   payload[palm::nut::dao::ACTION_COLUMN] = action;
//   return this->_jwt->encode(user->uid, palm::PROJECT_NAME, payload, ttl);
// }
// void palm::nut::services::User::send_email(
//     const std::optional<palm::nut::dao::user::Item> user,
//     const std::string& action) {
//   nlohmann::json js;
//   {
//     js["username"] = user->real_name;
//     js["action"] = action;
//     js["token"] =
//         this->sum_token(user, action,
//                         std::chrono::duration_cast<std::chrono::seconds>(
//                             std::chrono::hours(1)));
//   }

//   palm::nut::v1::EmailTask task;
//   {
//     {
//       auto it = task.mutable_to();
//       it->set_email(user->email);
//       it->set_name(user->real_name);
//     }
//     const std::string prefix = "nut.emails.user.";
//     {
//       const auto it =
//           this->_i18n->t(user->lang, prefix + action + ".subject", js);
//       task.set_subject(it);
//     }
//     {
//       const auto it =
//           this->_i18n->t(user->lang, prefix + action + ".content", js);
//       task.set_content(it);
//     }
//     task.set_content_type(palm::nut::v1::EmailTask_ContentType_Html);
//   }

//   auto con = this->_rabbitmq->open();
//   con->produce(task);
// }
// std::optional<palm::nut::dao::user::Item> palm::nut::services::User::get_user(
//     soci::session& db, const palm::nut::v1::UserQueryRequest* request) {
//   if (request->has_email()) {
//     const std::string email = palm::to_code(request->email());
//     const auto it = palm::nut::dao::user::by_email(db, email);
//     return it;
//   }
//   if (request->has_nickname()) {
//     const std::string nickname = palm::to_code(request->nickname());
//     const auto it = palm::nut::dao::user::by_nickname(db, nickname);
//     return it;
//   }
//   return std::nullopt;
// }
// grpc::Status palm::nut::services::User::ConfirmByEmail(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserQueryRequest* request,
//     google::protobuf::Empty* response) {
//   soci::session db(*this->_postgresql);

//   const auto user = this->get_user(db, request);
//   if (user->confirmed_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//   }
//   this->send_email(user, palm::nut::dao::user::Item::CONFIRM);

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::ConfirmByToken(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserTokenRequest* request,
//     google::protobuf::Empty* response) {
//   const auto it = this->_jwt->decode(request->payload(), palm::PROJECT_NAME);
//   {
//     const auto payload = std::get<2>(it);
//     if (payload[palm::nut::dao::ACTION_COLUMN] !=
//         palm::nut::dao::user::Item::CONFIRM) {
//       return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//     }
//   }
//   soci::session db(*this->_postgresql);
//   const auto user = palm::nut::dao::user::by_uid(db, std::get<0>(it));
//   if (user->confirmed_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::confirm(db, user->id);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "confirmed.");
//     tr.commit();
//   }

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::UnlockByEmail(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserQueryRequest* request,
//     google::protobuf::Empty* response) {
//   soci::session db(*this->_postgresql);

//   const auto user = this->get_user(db, request);
//   if (!user->locked_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//   }
//   this->send_email(user, palm::nut::dao::user::Item::UNLOCK);

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::UnlockByToken(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserTokenRequest* request,
//     google::protobuf::Empty* response) {
//   const auto it = this->_jwt->decode(request->payload(), palm::PROJECT_NAME);
//   {
//     const auto payload = std::get<2>(it);
//     if (payload[palm::nut::dao::ACTION_COLUMN] !=
//         palm::nut::dao::user::Item::UNLOCK) {
//       return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//     }
//   }
//   soci::session db(*this->_postgresql);
//   const auto user = palm::nut::dao::user::by_uid(db, std::get<0>(it));
//   if (!user->locked_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::unlock(db, user->id);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "unlocked.");
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::ForgotPassword(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserQueryRequest* request,
//     google::protobuf::Empty* response) {
//   soci::session db(*this->_postgresql);

//   const auto user = this->get_user(db, request);
//   if (!user->is_available()) {
//     return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//   }
//   this->send_email(user, palm::nut::dao::user::Item::RESET_PASSWORD);

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::ResetPassword(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserResetPasswordRequest* request,
//     google::protobuf::Empty* response) {
//   const auto it = this->_jwt->decode(request->token(), palm::PROJECT_NAME);
//   {
//     const auto payload = std::get<2>(it);
//     if (payload[palm::nut::dao::ACTION_COLUMN] !=
//         palm::nut::dao::user::Item::RESET_PASSWORD) {
//       return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//     }
//   }
//   soci::session db(*this->_postgresql);
//   const auto user = palm::nut::dao::user::by_uid(db, std::get<0>(it));
//   if (!user->is_available()) {
//     return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//   }
//   const std::string client_ip = context->peer();
//   const std::string password = request->password();
//   palm::validator::password(password);
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::set_password(db, user->id, password);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "reset password.");
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Refresh(
//     grpc::ServerContext* context, const google::protobuf::Duration* request,
//     palm::nut::v1::UserSignInResponse* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   const auto user = palm::nut::dao::user::by_id(db, current_user->id());
//   this->build_sign_in_response(db, user, request, response);
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::SetProfile(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserSetProfileRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::set_profile(db, current_user->id(),
//                                       request->real_name(), request->avatar(),
//                                       request->lang(), request->time_zone());
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, current_user->id(), client_ip, "update profile.");
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::ChangePassword(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserChangePasswordRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   {
//     const auto user = palm::nut::dao::user::by_id(db, current_user->id());
//     if (!user->verify_password(request->current_password())) {
//       return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, "");
//     }
//   }

//   const std::string client_ip = context->peer();
//   const std::string password = request->new_password();
//   palm::validator::password(password);
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::set_password(db, current_user->id(), password);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, current_user->id(), client_ip, "change password.");
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Logs(
//     grpc::ServerContext* context, const palm::nut::v1::Pager* request,
//     palm::nut::v1::UserLogsResponse* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   const auto total = palm::nut::dao::log::total(db, current_user->id());
//   const auto pagination = response->mutable_pagination();
//   const auto page = palm::nut::set(request, total, pagination);
//   auto items =
//       palm::nut::dao::log::get(db, current_user->id(), page.first, page.second);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::SignOut(
//     grpc::ServerContext* context, const google::protobuf::Empty* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_SIGN_IN(context, *this->_postgresql, *this->_jwt)

//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);

//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, current_user->id(), client_ip, "sign out.");
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Index(
//     grpc::ServerContext* context, const palm::nut::v1::Pager* request,
//     palm::nut::v1::UserIndexResponse* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   const auto total = palm::nut::dao::user::total(db);
//   const auto pagination = response->mutable_pagination();
//   const auto page = palm::nut::set(request, total, pagination);
//   auto items = palm::nut::dao::user::all(db, page.first, page.second);
//   for (auto& it : items) {
//     auto iv = response->add_items();
//     it.set(iv);
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Show(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     palm::nut::v1::UserIndexResponse::Item* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());
//   user->set(response);

//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Disable(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());
//   if (user->deleted_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::disable(db, user->id);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "disable by " + current_user->nickname());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Enable(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());
//   if (!user->deleted_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::enable(db, user->id);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "enable by " + current_user->nickname());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Lock(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());
//   if (user->locked_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::lock(db, user->id);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "lock by " + current_user->nickname());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Unlock(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());
//   if (!user->locked_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::unlock(db, user->id);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "unlock by " + current_user->nickname());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::Confirm(
//     grpc::ServerContext* context, const palm::nut::v1::IdRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());
//   if (user->confirmed_at.has_value()) {
//     return grpc::Status(grpc::StatusCode::RESOURCE_EXHAUSTED, "");
//   }
//   const std::string client_ip = context->peer();
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::confirm(db, user->id);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "confirm by " + current_user->nickname());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }
// grpc::Status palm::nut::services::User::SetPassword(
//     grpc::ServerContext* context,
//     const palm::nut::v1::UserSetPasswordRequest* request,
//     google::protobuf::Empty* response) {
//   PALM_NUT_MUST_ADMINISTRATOR(context, *this->_postgresql, *this->_jwt)

//   auto user = palm::nut::dao::user::by_id(db, request->id());

//   const std::string client_ip = context->peer();
//   const std::string password = request->password();
//   palm::validator::password(password);
//   {
//     soci::transaction tr(db);
//     palm::nut::dao::user::set_password(db, user->id, password);
//     palm::nut::dao::log::add<palm::nut::dao::user::Item>(
//         db, user->id, client_ip, "set password by " + current_user->nickname());
//     tr.commit();
//   }
//   return grpc::Status::OK;
// }

// std::shared_ptr<palm::Minio> palm::nut::open(
//     const palm::nut::v1::MinioProfile& profile) {
//   std::optional<std::string> region =
//       profile.has_region() ? std::optional<std::string>{profile.region()}
//                            : std::nullopt;
//   std::shared_ptr<palm::Minio> it = std::make_shared<palm::Minio>(
//       profile.host(), static_cast<uint16_t>(profile.port()), profile.https(),
//       profile.access_key(), profile.secret_key(), region);
//   return it;
// }

// std::shared_ptr<palm::twilio::Config> palm::nut::open(
//     const palm::nut::v1::TwilioProfile& profile) {
//   std::optional<std::string> sms_status_callback =
//       profile.has_sms_status_callback()
//           ? std::optional<std::string>{profile.sms_status_callback()}
//           : std::nullopt;
//   std::shared_ptr<palm::twilio::Config> it =
//       std::make_shared<palm::twilio::Config>(
//           profile.account_sid(), profile.auth_token(), profile.from(),
//           sms_status_callback);
//   return it;
// }
// std::shared_ptr<palm::smtp::Config> palm::nut::open(
//     const palm::nut::v1::SmtpProfile& profile) {
//   std::shared_ptr<palm::smtp::Address> user =
//       std::make_shared<palm::smtp::Address>();
//   {
//     user->name = profile.user().name();
//     user->email = profile.user().email();
//   }
//   std::vector<palm::smtp::Address> cc;
//   for (const auto& it : profile.cc()) {
//     palm::smtp::Address iv;
//     iv.name = it.name();
//     iv.email = it.email();
//     cc.push_back(iv);
//   }
//   std::vector<palm::smtp::Address> bcc;
//   for (const auto& it : profile.bcc()) {
//     palm::smtp::Address iv;
//     iv.name = it.name();
//     iv.email = it.email();
//     bcc.push_back(iv);
//   }
//   std::shared_ptr<palm::smtp::Config> it = std::make_shared<palm::smtp::Config>(
//       profile.host(), static_cast<uint16_t>(profile.port()),
//       profile.auth_method(), user, profile.password(), cc, bcc);
//   return it;
// }
