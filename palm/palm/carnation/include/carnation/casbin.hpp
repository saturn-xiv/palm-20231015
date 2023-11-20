#pragma once

#include "casbin.grpc.pb.h"
#include "palm/cache.hpp"
#include "palm/orm.hpp"
#include "palm/queue.hpp"

namespace carnation {

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
}  // namespace carnation
