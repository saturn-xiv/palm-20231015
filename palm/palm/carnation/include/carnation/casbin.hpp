#pragma once

#include "casbin.grpc.pb.h"
#include "palm/cache.hpp"
#include "palm/orm.hpp"
#include "palm/queue.hpp"

#include <casbin/casbin.h>

namespace carnation {
namespace models {
namespace policy {
struct Item {
  std::vector<std::string> to_line() const;
  std::optional<std::pair<bool, std::vector<std::string>>> to_filtered_line(
      casbin::Filter* filter) const;

  friend std::ostream& operator<<(std::ostream& os, const Item& it) {
    os << it.p_type << "," << it.v0 << "," << it.v1 << "," << it.v2 << ","
       << it.v3 << "," << it.v4 << "," << it.v5;
    return os;
  }

  int32_t id;
  std::string p_type;
  std::string v0;
  std::string v1;
  std::string v2;
  std::string v3;
  std::string v4;
  std::string v5;
};
struct New {
  static std::optional<New> from_line(const std::string& p_type,
                                      const std::vector<std::string> rule);

  std::string p_type;
  std::string v0;
  std::string v1;
  std::string v2;
  std::string v3;
  std::string v4;
  std::string v5;
};
}  // namespace policy
}  // namespace models

namespace dao {
void remove_policy(pqxx::work& tx, const std::string& p_type,
                   const std::string& v0, const std::string& v1,
                   const std::string& v2, const std::string& v3,
                   const std::string& v4, const std::string& v5);
void remove_filtered_policy(pqxx::work& tx, const std::string& p_type,
                            const std::string& v0, const std::string& v1,
                            const std::string& v2, const std::string& v3,
                            const std::string& v4, const std::string& v5);
void remove_filtered_policy(pqxx::work& tx, const std::string& p_type,
                            const std::string& v1, const std::string& v2,
                            const std::string& v3, const std::string& v4,
                            const std::string& v5);
void remove_filtered_policy(pqxx::work& tx, const std::string& p_type,
                            const std::string& v2, const std::string& v3,
                            const std::string& v4, const std::string& v5);
void remove_filtered_policy(pqxx::work& tx, const std::string& p_type,
                            const std::string& v3, const std::string& v4,
                            const std::string& v5);
void remove_filtered_policy(pqxx::work& tx, const std::string& p_type,
                            const std::string& v4, const std::string& v5);
void remove_filtered_policy(pqxx::work& tx, const std::string& p_type,
                            const std::string& v5);
void clear_policy(pqxx::work& tx);
void save_policy(pqxx::work& tx);
std::vector<carnation::models::policy::Item> load_policy(pqxx::work& tx);
void add_policy(pqxx::work& tx, const std::string& p_type,
                const std::string& v0, const std::string& v1,
                const std::string& v2, const std::string& v3,
                const std::string& v4, const std::string& v5);
}  // namespace dao

namespace adapters {
class PostgreSqlAdapter final : public ::casbin::BatchAdapter,
                                public ::casbin::FilteredAdapter {
 public:
  PostgreSqlAdapter(std::shared_ptr<palm::postgresql::Pool> pool)
      : ::casbin::BatchAdapter(), ::casbin::FilteredAdapter{}, _pool(pool) {
    this->filtered = false;
  }

  void LoadPolicy(const std::shared_ptr<casbin::Model>& model) override;
  void SavePolicy(const std::shared_ptr<casbin::Model>& model) override;
  void AddPolicy(std::string sec, std::string p_type,
                 std::vector<std::string> rule) override;
  void RemovePolicy(std::string sec, std::string p_type,
                    std::vector<std::string> rule) override;
  void RemoveFilteredPolicy(std::string sec, std::string p_type,
                            int field_index,
                            std::vector<std::string> field_values) override;
  bool IsFiltered() override;
  bool IsValid() override;

  void AddPolicies(std::string sec, std::string p_type,
                   std::vector<std::vector<std::string>> rules) override;
  void RemovePolicies(std::string sec, std::string p_type,
                      std::vector<std::vector<std::string>> rules) override;

 private:
  std::shared_ptr<palm::postgresql::Pool> _pool;
};
}  // namespace adapters

namespace watchers {
class RabbitMqWatcher final : public ::casbin::Watcher {
 public:
  template <typename Func>
  void SetUpdateCallback(Func func) {}
  void Update();
  void Close();

 private:
};
}  // namespace watchers

namespace services {
class CasbinServiceImpl final : public palm::casbin::v1::Casbin::Service {
 public:
  CasbinServiceImpl() : palm::casbin::v1::Casbin::Service() {}
  grpc::Status NewEnforcer(grpc::ServerContext* context,
                           const palm::casbin::v1::NewEnforcerRequest* request,
                           palm::casbin::v1::NewEnforcerReply* reply) override;

  grpc::Status NewAdapter(grpc::ServerContext* context,
                          const palm::casbin::v1::NewAdapterRequest* request,
                          palm::casbin::v1::NewAdapterReply* response) override;

  grpc::Status Enforce(grpc::ServerContext* context,
                       const palm::casbin::v1::EnforceRequest* request,
                       palm::casbin::v1::BoolReply* response) override;

  grpc::Status LoadPolicy(grpc::ServerContext* context,
                          const palm::casbin::v1::EmptyRequest* request,
                          palm::casbin::v1::EmptyReply* response) override;
  grpc::Status SavePolicy(grpc::ServerContext* context,
                          const palm::casbin::v1::EmptyRequest* request,
                          palm::casbin::v1::EmptyReply* response) override;

  grpc::Status AddPolicy(grpc::ServerContext* context,
                         const palm::casbin::v1::PolicyRequest* request,
                         palm::casbin::v1::BoolReply* response) override;
  grpc::Status AddNamedPolicy(grpc::ServerContext* context,
                              const palm::casbin::v1::PolicyRequest* request,
                              palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemovePolicy(grpc::ServerContext* context,
                            const palm::casbin::v1::PolicyRequest* request,
                            palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemoveNamedPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemoveFilteredPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemoveFilteredNamedPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status GetPolicy(grpc::ServerContext* context,
                         const palm::casbin::v1::EmptyRequest* request,
                         palm::casbin::v1::Array2DReply* response) override;
  grpc::Status GetNamedPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::Array2DReply* response) override;
  grpc::Status GetFilteredPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::Array2DReply* response) override;
  grpc::Status GetFilteredNamedPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::Array2DReply* response) override;

  grpc::Status AddGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status AddNamedGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemoveGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemoveNamedGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemoveFilteredGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status RemoveFilteredNamedGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status GetGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::EmptyRequest* request,
      palm::casbin::v1::Array2DReply* response) override;
  grpc::Status GetNamedGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::Array2DReply* response) override;
  grpc::Status GetFilteredGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::Array2DReply* response) override;
  grpc::Status GetFilteredNamedGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::FilteredPolicyRequest* request,
      palm::casbin::v1::Array2DReply* response) override;

  grpc::Status GetAllSubjects(grpc::ServerContext* context,
                              const palm::casbin::v1::EmptyRequest* request,
                              palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetAllNamedSubjects(
      grpc::ServerContext* context,
      const palm::casbin::v1::SimpleGetRequest* request,
      palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetAllObjects(grpc::ServerContext* context,
                             const palm::casbin::v1::EmptyRequest* request,
                             palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetAllNamedObjects(
      grpc::ServerContext* context,
      const palm::casbin::v1::SimpleGetRequest* request,
      palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetAllActions(grpc::ServerContext* context,
                             const palm::casbin::v1::EmptyRequest* request,
                             palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetAllNamedActions(
      grpc::ServerContext* context,
      const palm::casbin::v1::SimpleGetRequest* request,
      palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetAllRoles(grpc::ServerContext* context,
                           const palm::casbin::v1::EmptyRequest* request,
                           palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetAllNamedRoles(
      grpc::ServerContext* context,
      const palm::casbin::v1::SimpleGetRequest* request,
      palm::casbin::v1::ArrayReply* response) override;

  grpc::Status HasPolicy(grpc::ServerContext* context,
                         const palm::casbin::v1::PolicyRequest* request,
                         palm::casbin::v1::BoolReply* response) override;
  grpc::Status HasNamedPolicy(grpc::ServerContext* context,
                              const palm::casbin::v1::PolicyRequest* request,
                              palm::casbin::v1::BoolReply* response) override;
  grpc::Status HasGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status HasNamedGroupingPolicy(
      grpc::ServerContext* context,
      const palm::casbin::v1::PolicyRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status GetDomains(grpc::ServerContext* context,
                          const palm::casbin::v1::UserRoleRequest* request,
                          palm::casbin::v1::ArrayReply* response) override;

  grpc::Status GetRolesForUser(grpc::ServerContext* context,
                               const palm::casbin::v1::UserRoleRequest* request,
                               palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetImplicitRolesForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::UserRoleRequest* request,
      palm::casbin::v1::ArrayReply* response) override;
  grpc::Status GetUsersForRole(grpc::ServerContext* context,
                               const palm::casbin::v1::UserRoleRequest* request,
                               palm::casbin::v1::ArrayReply* response) override;
  grpc::Status HasRoleForUser(grpc::ServerContext* context,
                              const palm::casbin::v1::UserRoleRequest* request,
                              palm::casbin::v1::BoolReply* response) override;
  grpc::Status AddRoleForUser(grpc::ServerContext* context,
                              const palm::casbin::v1::UserRoleRequest* request,
                              palm::casbin::v1::BoolReply* response) override;
  grpc::Status DeleteRoleForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::UserRoleRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status DeleteRolesForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::UserRoleRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status DeleteUser(grpc::ServerContext* context,
                          const palm::casbin::v1::UserRoleRequest* request,
                          palm::casbin::v1::BoolReply* response) override;
  grpc::Status DeleteRole(grpc::ServerContext* context,
                          const palm::casbin::v1::UserRoleRequest* request,
                          palm::casbin::v1::EmptyReply* response) override;

  grpc::Status GetPermissionsForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::PermissionRequest* request,
      palm::casbin::v1::Array2DReply* response) override;
  grpc::Status GetImplicitPermissionsForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::PermissionRequest* request,
      palm::casbin::v1::Array2DReply* response) override;
  grpc::Status DeletePermission(
      grpc::ServerContext* context,
      const palm::casbin::v1::PermissionRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status AddPermissionForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::PermissionRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status DeletePermissionForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::PermissionRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status DeletePermissionsForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::PermissionRequest* request,
      palm::casbin::v1::BoolReply* response) override;
  grpc::Status HasPermissionForUser(
      grpc::ServerContext* context,
      const palm::casbin::v1::PermissionRequest* request,
      palm::casbin::v1::BoolReply* response) override;

 private:
};
}  // namespace services
}  // namespace carnation
