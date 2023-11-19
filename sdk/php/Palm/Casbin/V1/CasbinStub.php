<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// f2292d7:
// https://github.com/casbin-rs/casbin-grpc/blob/main/api/protos/casbin.proto
namespace Palm\Casbin\V1;

/**
 * The Casbin service definition.
 */
class CasbinStub {

    /**
     * @param \Palm\Casbin\V1\NewEnforcerRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\NewEnforcerReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function NewEnforcer(
        \Palm\Casbin\V1\NewEnforcerRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\NewEnforcerReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\NewAdapterRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\NewAdapterReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function NewAdapter(
        \Palm\Casbin\V1\NewAdapterRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\NewAdapterReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EnforceRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function Enforce(
        \Palm\Casbin\V1\EnforceRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\EmptyReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function LoadPolicy(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\EmptyReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\EmptyReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function SavePolicy(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\EmptyReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddNamedPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemovePolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemoveNamedPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemoveFilteredPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemoveFilteredNamedPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetPolicy(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetNamedPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetFilteredPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetFilteredNamedPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddGroupingPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddNamedGroupingPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemoveGroupingPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemoveNamedGroupingPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemoveFilteredGroupingPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function RemoveFilteredNamedGroupingPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetGroupingPolicy(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetNamedGroupingPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetFilteredGroupingPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetFilteredNamedGroupingPolicy(
        \Palm\Casbin\V1\FilteredPolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllSubjects(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllNamedSubjects(
        \Palm\Casbin\V1\SimpleGetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllObjects(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllNamedObjects(
        \Palm\Casbin\V1\SimpleGetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllActions(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllNamedActions(
        \Palm\Casbin\V1\SimpleGetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllRoles(
        \Palm\Casbin\V1\EmptyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetAllNamedRoles(
        \Palm\Casbin\V1\SimpleGetRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasNamedPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasGroupingPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasNamedGroupingPolicy(
        \Palm\Casbin\V1\PolicyRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetRolesForUser(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetImplicitRolesForUser(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\ArrayReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetUsersForRole(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\ArrayReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasRoleForUser(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddRoleForUser(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteRoleForUser(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteRolesForUser(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteUser(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\EmptyReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeleteRole(
        \Palm\Casbin\V1\UserRoleRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\EmptyReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetPermissionsForUser(
        \Palm\Casbin\V1\PermissionRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\Array2DReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function GetImplicitPermissionsForUser(
        \Palm\Casbin\V1\PermissionRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\Array2DReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermission(
        \Palm\Casbin\V1\PermissionRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function AddPermissionForUser(
        \Palm\Casbin\V1\PermissionRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionForUser(
        \Palm\Casbin\V1\PermissionRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function DeletePermissionsForUser(
        \Palm\Casbin\V1\PermissionRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $request client request
     * @param \Grpc\ServerContext $context server request context
     * @return \Palm\Casbin\V1\BoolReply for response data, null if if error occured
     *     initial metadata (if any) and status (if not ok) should be set to $context
     */
    public function HasPermissionForUser(
        \Palm\Casbin\V1\PermissionRequest $request,
        \Grpc\ServerContext $context
    ): ?\Palm\Casbin\V1\BoolReply {
        $context->setStatus(\Grpc\Status::unimplemented());
        return null;
    }

    /**
     * Get the method descriptors of the service for server registration
     *
     * @return array of \Grpc\MethodDescriptor for the service methods
     */
    public final function getMethodDescriptors(): array
    {
        return [
            '/palm.casbin.v1.Casbin/NewEnforcer' => new \Grpc\MethodDescriptor(
                $this,
                'NewEnforcer',
                '\Palm\Casbin\V1\NewEnforcerRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/NewAdapter' => new \Grpc\MethodDescriptor(
                $this,
                'NewAdapter',
                '\Palm\Casbin\V1\NewAdapterRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/Enforce' => new \Grpc\MethodDescriptor(
                $this,
                'Enforce',
                '\Palm\Casbin\V1\EnforceRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/LoadPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'LoadPolicy',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/SavePolicy' => new \Grpc\MethodDescriptor(
                $this,
                'SavePolicy',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/AddPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'AddPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/AddNamedPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'AddNamedPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemovePolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemovePolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemoveNamedPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemoveNamedPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemoveFilteredPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemoveFilteredPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemoveFilteredNamedPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemoveFilteredNamedPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetPolicy',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetNamedPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetNamedPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetFilteredPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetFilteredPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetFilteredNamedPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetFilteredNamedPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/AddGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'AddGroupingPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/AddNamedGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'AddNamedGroupingPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemoveGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemoveGroupingPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemoveNamedGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemoveNamedGroupingPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemoveFilteredGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemoveFilteredGroupingPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/RemoveFilteredNamedGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'RemoveFilteredNamedGroupingPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetGroupingPolicy',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetNamedGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetNamedGroupingPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetFilteredGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetFilteredGroupingPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetFilteredNamedGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'GetFilteredNamedGroupingPolicy',
                '\Palm\Casbin\V1\FilteredPolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllSubjects' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllSubjects',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllNamedSubjects' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllNamedSubjects',
                '\Palm\Casbin\V1\SimpleGetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllObjects' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllObjects',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllNamedObjects' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllNamedObjects',
                '\Palm\Casbin\V1\SimpleGetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllActions' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllActions',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllNamedActions' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllNamedActions',
                '\Palm\Casbin\V1\SimpleGetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllRoles' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllRoles',
                '\Palm\Casbin\V1\EmptyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetAllNamedRoles' => new \Grpc\MethodDescriptor(
                $this,
                'GetAllNamedRoles',
                '\Palm\Casbin\V1\SimpleGetRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/HasPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'HasPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/HasNamedPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'HasNamedPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/HasGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'HasGroupingPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/HasNamedGroupingPolicy' => new \Grpc\MethodDescriptor(
                $this,
                'HasNamedGroupingPolicy',
                '\Palm\Casbin\V1\PolicyRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetRolesForUser',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetImplicitRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitRolesForUser',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetUsersForRole' => new \Grpc\MethodDescriptor(
                $this,
                'GetUsersForRole',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/HasRoleForUser' => new \Grpc\MethodDescriptor(
                $this,
                'HasRoleForUser',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/AddRoleForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddRoleForUser',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/DeleteRoleForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRoleForUser',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/DeleteRolesForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRolesForUser',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/DeleteUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteUser',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/DeleteRole' => new \Grpc\MethodDescriptor(
                $this,
                'DeleteRole',
                '\Palm\Casbin\V1\UserRoleRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetPermissionsForUser',
                '\Palm\Casbin\V1\PermissionRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/GetImplicitPermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'GetImplicitPermissionsForUser',
                '\Palm\Casbin\V1\PermissionRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/DeletePermission' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermission',
                '\Palm\Casbin\V1\PermissionRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/AddPermissionForUser' => new \Grpc\MethodDescriptor(
                $this,
                'AddPermissionForUser',
                '\Palm\Casbin\V1\PermissionRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/DeletePermissionForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionForUser',
                '\Palm\Casbin\V1\PermissionRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/DeletePermissionsForUser' => new \Grpc\MethodDescriptor(
                $this,
                'DeletePermissionsForUser',
                '\Palm\Casbin\V1\PermissionRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
            '/palm.casbin.v1.Casbin/HasPermissionForUser' => new \Grpc\MethodDescriptor(
                $this,
                'HasPermissionForUser',
                '\Palm\Casbin\V1\PermissionRequest',
                \Grpc\MethodDescriptor::UNARY_CALL
            ),
        ];
    }

}
