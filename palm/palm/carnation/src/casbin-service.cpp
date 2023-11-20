#include "carnation/casbin.hpp"

grpc::Status carnation::CasbinServiceImpl::NewEnforcer(
    grpc::ServerContext* context,
    const palm::casbin::v1::NewEnforcerRequest* request,
    palm::casbin::v1::NewEnforcerReply* reply) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::NewAdapter(
    grpc::ServerContext* context,
    const palm::casbin::v1::NewAdapterRequest* request,
    palm::casbin::v1::NewAdapterReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::Enforce(
    grpc::ServerContext* context,
    const palm::casbin::v1::EnforceRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::LoadPolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::EmptyReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::SavePolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::EmptyReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::AddPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::AddNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemovePolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemoveNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemoveFilteredPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemoveFilteredNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetPolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetFilteredPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetFilteredNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::AddGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::AddNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemoveGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemoveNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemoveFilteredGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::RemoveFilteredNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetGroupingPolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetFilteredGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetFilteredNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::GetAllSubjects(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetAllNamedSubjects(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetAllObjects(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetAllNamedObjects(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetAllActions(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetAllNamedActions(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetAllRoles(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetAllNamedRoles(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::HasPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::HasNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::HasGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::HasNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::GetDomains(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::GetRolesForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetImplicitRolesForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetUsersForRole(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::HasRoleForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::AddRoleForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::DeleteRoleForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::DeleteRolesForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::DeleteUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::DeleteRole(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::EmptyReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::CasbinServiceImpl::GetPermissionsForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::GetImplicitPermissionsForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::DeletePermission(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::AddPermissionForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::DeletePermissionForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::DeletePermissionsForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::CasbinServiceImpl::HasPermissionForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
