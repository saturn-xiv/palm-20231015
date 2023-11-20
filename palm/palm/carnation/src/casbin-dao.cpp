#include "carnation/casbin.hpp"

void carnation::dao::remove_policy(pqxx::work& tx, const std::string& p_type,
                                   const std::string& v0, const std::string& v1,
                                   const std::string& v2, const std::string& v3,
                                   const std::string& v4,
                                   const std::string& v5) {
  // TODO
}
void carnation::dao::remove_filtered_policy(
    pqxx::work& tx, const std::string& p_type, const std::string& v0,
    const std::string& v1, const std::string& v2, const std::string& v3,
    const std::string& v4, const std::string& v5) {
  // TODO
}
void carnation::dao::remove_filtered_policy(
    pqxx::work& tx, const std::string& p_type, const std::string& v1,
    const std::string& v2, const std::string& v3, const std::string& v4,
    const std::string& v5) {
  // TODO
}
void carnation::dao::remove_filtered_policy(
    pqxx::work& tx, const std::string& p_type, const std::string& v2,
    const std::string& v3, const std::string& v4, const std::string& v5) {
  // TODO
}
void carnation::dao::remove_filtered_policy(pqxx::work& tx,
                                            const std::string& p_type,
                                            const std::string& v3,
                                            const std::string& v4,
                                            const std::string& v5) {
  // TODO
}
void carnation::dao::remove_filtered_policy(pqxx::work& tx,
                                            const std::string& p_type,
                                            const std::string& v4,
                                            const std::string& v5) {
  // TODO
}
void carnation::dao::remove_filtered_policy(pqxx::work& tx,
                                            const std::string& p_type,
                                            const std::string& v5) {
  // TODO
}
void carnation::dao::clear_policy(pqxx::work& tx) {
  // TODO
}
void carnation::dao::save_policy(pqxx::work& tx) {
  // TODO
}
std::vector<carnation::models::policy::Item> carnation::dao::load_policy(
    pqxx::work& tx) {
  std::vector<carnation::models::policy::Item> items;
  // TODO
  return items;
}
void carnation::dao::add_policy(pqxx::work& tx, const std::string& p_type,
                                const std::string& v0, const std::string& v1,
                                const std::string& v2, const std::string& v3,
                                const std::string& v4, const std::string& v5) {
  // TODO
}
