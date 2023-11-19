#pragma once

#include "casbin.grpc.pb.h"
#include "palm/cache.hpp"
#include "palm/orm.hpp"

namespace carnation {

class CasbinServiceImpl final : public palm::casbin::v1::Casbin::Service {
 public:
  CasbinServiceImpl() : palm::casbin::v1::Casbin::Service() {}
  grpc::Status NewEnforcer(grpc::ServerContext* context,
                           const palm::casbin::v1::NewEnforcerRequest* request,
                           palm::casbin::v1::NewEnforcerReply* reply) override {
  }
  /*
    rpc NewEnforcer() returns () {}
    rpc NewAdapter(NewAdapterRequest) returns (NewAdapterReply) {}

    rpc Enforce(EnforceRequest) returns (BoolReply) {}

    rpc LoadPolicy(EmptyRequest) returns (EmptyReply) {}
    rpc SavePolicy(EmptyRequest) returns (EmptyReply) {}

    rpc AddPolicy(PolicyRequest) returns (BoolReply) {}
    rpc AddNamedPolicy(PolicyRequest) returns (BoolReply) {}
    rpc RemovePolicy(PolicyRequest) returns (BoolReply) {}
    rpc RemoveNamedPolicy(PolicyRequest) returns (BoolReply) {}
    rpc RemoveFilteredPolicy(FilteredPolicyRequest) returns (BoolReply) {}
    rpc RemoveFilteredNamedPolicy(FilteredPolicyRequest) returns (BoolReply) {}
    rpc GetPolicy(EmptyRequest) returns (Array2DReply) {}
    rpc GetNamedPolicy(PolicyRequest) returns (Array2DReply) {}
    rpc GetFilteredPolicy(FilteredPolicyRequest) returns (Array2DReply) {}
    rpc GetFilteredNamedPolicy(FilteredPolicyRequest) returns (Array2DReply) {}

    rpc AddGroupingPolicy(PolicyRequest) returns (BoolReply) {}
    rpc AddNamedGroupingPolicy(PolicyRequest) returns (BoolReply) {}
    rpc RemoveGroupingPolicy(PolicyRequest) returns (BoolReply) {}
    rpc RemoveNamedGroupingPolicy(PolicyRequest) returns (BoolReply) {}
    rpc RemoveFilteredGroupingPolicy(FilteredPolicyRequest) returns (BoolReply)
    {} rpc RemoveFilteredNamedGroupingPolicy(FilteredPolicyRequest) returns
    (BoolReply) {} rpc GetGroupingPolicy(EmptyRequest) returns (Array2DReply) {}
    rpc GetNamedGroupingPolicy(PolicyRequest) returns (Array2DReply) {}
    rpc GetFilteredGroupingPolicy(FilteredPolicyRequest) returns (Array2DReply)
    {} rpc GetFilteredNamedGroupingPolicy(FilteredPolicyRequest) returns
    (Array2DReply) {}

    rpc GetAllSubjects(EmptyRequest) returns (ArrayReply) {}
    rpc GetAllNamedSubjects(SimpleGetRequest) returns (ArrayReply) {}
    rpc GetAllObjects(EmptyRequest) returns (ArrayReply) {}
    rpc GetAllNamedObjects(SimpleGetRequest) returns (ArrayReply) {}
    rpc GetAllActions(EmptyRequest) returns (ArrayReply) {}
    rpc GetAllNamedActions(SimpleGetRequest) returns (ArrayReply) {}
    rpc GetAllRoles(EmptyRequest) returns (ArrayReply) {}
    rpc GetAllNamedRoles(SimpleGetRequest) returns (ArrayReply) {}

    rpc HasPolicy(PolicyRequest) returns (BoolReply) {}
    rpc HasNamedPolicy(PolicyRequest) returns (BoolReply) {}
    rpc HasGroupingPolicy(PolicyRequest) returns (BoolReply) {}
    rpc HasNamedGroupingPolicy(PolicyRequest) returns (BoolReply) {}

    rpc GetRolesForUser(UserRoleRequest) returns (ArrayReply) {}
    rpc GetImplicitRolesForUser(UserRoleRequest) returns (ArrayReply) {}
    rpc GetUsersForRole(UserRoleRequest) returns (ArrayReply) {}
    rpc HasRoleForUser(UserRoleRequest) returns (BoolReply) {}
    rpc AddRoleForUser(UserRoleRequest) returns (BoolReply) {}
    rpc DeleteRoleForUser(UserRoleRequest) returns (BoolReply) {}
    rpc DeleteRolesForUser(UserRoleRequest) returns (BoolReply) {}
    rpc DeleteUser(UserRoleRequest) returns (BoolReply) {}
    rpc DeleteRole(UserRoleRequest) returns (EmptyReply) {}

    rpc GetPermissionsForUser(PermissionRequest) returns (Array2DReply) {}
    rpc GetImplicitPermissionsForUser(PermissionRequest) returns (Array2DReply)
    {} rpc DeletePermission(PermissionRequest) returns (BoolReply) {} rpc
    AddPermissionForUser(PermissionRequest) returns (BoolReply) {} rpc
    DeletePermissionForUser(PermissionRequest) returns (BoolReply) {} rpc
    DeletePermissionsForUser(PermissionRequest) returns (BoolReply) {} rpc
    HasPermissionForUser(PermissionRequest) returns (BoolReply) {}
    */

 private:
};
}  // namespace carnation
