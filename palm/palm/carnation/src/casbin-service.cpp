#include "carnation/casbin.hpp"

grpc::Status carnation::services::CasbinServiceImpl::NewEnforcer(
    grpc::ServerContext* context,
    const palm::casbin::v1::NewEnforcerRequest* request,
    palm::casbin::v1::NewEnforcerReply* reply) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::NewAdapter(
    grpc::ServerContext* context,
    const palm::casbin::v1::NewAdapterRequest* request,
    palm::casbin::v1::NewAdapterReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::Enforce(
    grpc::ServerContext* context,
    const palm::casbin::v1::EnforceRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::LoadPolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::EmptyReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::SavePolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::EmptyReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::AddPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::AddNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::RemovePolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::RemoveNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::RemoveFilteredPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::RemoveFilteredNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetPolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetFilteredPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetFilteredNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::AddGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::AddNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::RemoveGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::RemoveNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status
carnation::services::CasbinServiceImpl::RemoveFilteredGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status
carnation::services::CasbinServiceImpl::RemoveFilteredNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetGroupingPolicy(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetFilteredGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status
carnation::services::CasbinServiceImpl::GetFilteredNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::FilteredPolicyRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::GetAllSubjects(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetAllNamedSubjects(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetAllObjects(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetAllNamedObjects(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetAllActions(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetAllNamedActions(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetAllRoles(
    grpc::ServerContext* context, const palm::casbin::v1::EmptyRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetAllNamedRoles(
    grpc::ServerContext* context,
    const palm::casbin::v1::SimpleGetRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::HasPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::HasNamedPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::HasGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::HasNamedGroupingPolicy(
    grpc::ServerContext* context,
    const palm::casbin::v1::PolicyRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::GetDomains(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::GetRolesForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetImplicitRolesForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::GetUsersForRole(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::ArrayReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::HasRoleForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::AddRoleForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::DeleteRoleForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::DeleteRolesForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::DeleteUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::DeleteRole(
    grpc::ServerContext* context,
    const palm::casbin::v1::UserRoleRequest* request,
    palm::casbin::v1::EmptyReply* response) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status carnation::services::CasbinServiceImpl::GetPermissionsForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status
carnation::services::CasbinServiceImpl::GetImplicitPermissionsForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::Array2DReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::DeletePermission(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::AddPermissionForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::DeletePermissionForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::DeletePermissionsForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status carnation::services::CasbinServiceImpl::HasPermissionForUser(
    grpc::ServerContext* context,
    const palm::casbin::v1::PermissionRequest* request,
    palm::casbin::v1::BoolReply* response) {
  // TODO
  return grpc::Status::OK;
}
