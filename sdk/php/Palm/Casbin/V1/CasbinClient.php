<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// f2292d7:
// https://github.com/casbin-rs/casbin-grpc/blob/main/api/protos/casbin.proto
namespace Palm\Casbin\V1;

/**
 * The Casbin service definition.
 */
class CasbinClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Casbin\V1\NewEnforcerRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function NewEnforcer(\Palm\Casbin\V1\NewEnforcerRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/NewEnforcer',
        $argument,
        ['\Palm\Casbin\V1\NewEnforcerReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\NewAdapterRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function NewAdapter(\Palm\Casbin\V1\NewAdapterRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/NewAdapter',
        $argument,
        ['\Palm\Casbin\V1\NewAdapterReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EnforceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Enforce(\Palm\Casbin\V1\EnforceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/Enforce',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function LoadPolicy(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/LoadPolicy',
        $argument,
        ['\Palm\Casbin\V1\EmptyReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SavePolicy(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/SavePolicy',
        $argument,
        ['\Palm\Casbin\V1\EmptyReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/AddPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddNamedPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/AddNamedPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemovePolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemovePolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveNamedPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemoveNamedPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveFilteredPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemoveFilteredPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveFilteredNamedPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemoveFilteredNamedPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetPolicy(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetNamedPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetNamedPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetFilteredPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetFilteredPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetFilteredNamedPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetFilteredNamedPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddGroupingPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/AddGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddNamedGroupingPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/AddNamedGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveGroupingPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemoveGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveNamedGroupingPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemoveNamedGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveFilteredGroupingPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemoveFilteredGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveFilteredNamedGroupingPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/RemoveFilteredNamedGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetGroupingPolicy(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetNamedGroupingPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetNamedGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetFilteredGroupingPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetFilteredGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\FilteredPolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetFilteredNamedGroupingPolicy(\Palm\Casbin\V1\FilteredPolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetFilteredNamedGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllSubjects(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllSubjects',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllNamedSubjects(\Palm\Casbin\V1\SimpleGetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllNamedSubjects',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllObjects(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllObjects',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllNamedObjects(\Palm\Casbin\V1\SimpleGetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllNamedObjects',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllActions(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllActions',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllNamedActions(\Palm\Casbin\V1\SimpleGetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllNamedActions',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\EmptyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllRoles(\Palm\Casbin\V1\EmptyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllRoles',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\SimpleGetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllNamedRoles(\Palm\Casbin\V1\SimpleGetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetAllNamedRoles',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/HasPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasNamedPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/HasNamedPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasGroupingPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/HasGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PolicyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasNamedGroupingPolicy(\Palm\Casbin\V1\PolicyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/HasNamedGroupingPolicy',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetRolesForUser(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetRolesForUser',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetImplicitRolesForUser(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetImplicitRolesForUser',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUsersForRole(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetUsersForRole',
        $argument,
        ['\Palm\Casbin\V1\ArrayReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasRoleForUser(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/HasRoleForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddRoleForUser(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/AddRoleForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteRoleForUser(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/DeleteRoleForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteRolesForUser(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/DeleteRolesForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteUser(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/DeleteUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\UserRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteRole(\Palm\Casbin\V1\UserRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/DeleteRole',
        $argument,
        ['\Palm\Casbin\V1\EmptyReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetPermissionsForUser(\Palm\Casbin\V1\PermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetPermissionsForUser',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetImplicitPermissionsForUser(\Palm\Casbin\V1\PermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/GetImplicitPermissionsForUser',
        $argument,
        ['\Palm\Casbin\V1\Array2DReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePermission(\Palm\Casbin\V1\PermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/DeletePermission',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddPermissionForUser(\Palm\Casbin\V1\PermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/AddPermissionForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePermissionForUser(\Palm\Casbin\V1\PermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/DeletePermissionForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePermissionsForUser(\Palm\Casbin\V1\PermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/DeletePermissionsForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Casbin\V1\PermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasPermissionForUser(\Palm\Casbin\V1\PermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.casbin.v1.Casbin/HasPermissionForUser',
        $argument,
        ['\Palm\Casbin\V1\BoolReply', 'decode'],
        $metadata, $options);
    }

}
