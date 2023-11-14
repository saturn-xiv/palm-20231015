<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Rbac\V1;

/**
 * https://github.com/casbin/casbin-server/blob/master/proto/casbin.proto
 */
class PolicyClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllUsers(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetAllUsers',
        $argument,
        ['\Palm\Rbac\V1\UsersResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllResources(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetAllResources',
        $argument,
        ['\Palm\Rbac\V1\ResourcesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllOperations(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetAllOperations',
        $argument,
        ['\Palm\Rbac\V1\OperationsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllRoles(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetAllRoles',
        $argument,
        ['\Palm\Rbac\V1\RolesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Google\Protobuf\GPBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAllRules(\Google\Protobuf\GPBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetAllRules',
        $argument,
        ['\Palm\Rbac\V1\RulesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetRolesForUser(\Palm\Rbac\V1\UserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetRolesForUser',
        $argument,
        ['\Palm\Rbac\V1\RolesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetImplicitRolesForUser(\Palm\Rbac\V1\UserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetImplicitRolesForUser',
        $argument,
        ['\Palm\Rbac\V1\RolesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUsersForRole(\Palm\Rbac\V1\RoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetUsersForRole',
        $argument,
        ['\Palm\Rbac\V1\UsersResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserRolesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteRolesForUser(\Palm\Rbac\V1\UserRolesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/DeleteRolesForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserRolesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddRolesForUser(\Palm\Rbac\V1\UserRolesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/AddRolesForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteUser(\Palm\Rbac\V1\UserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/DeleteUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteRole(\Palm\Rbac\V1\RoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/DeleteRole',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RolePermissionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddPermissionsForRole(\Palm\Rbac\V1\RolePermissionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/AddPermissionsForRole',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RolePermissionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePermissionsForRole(\Palm\Rbac\V1\RolePermissionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/DeletePermissionsForRole',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserPermissionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddPermissionsForUser(\Palm\Rbac\V1\UserPermissionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/AddPermissionsForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserPermissionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePermissionsForUser(\Palm\Rbac\V1\UserPermissionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/DeletePermissionsForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetPermissionsForUser(\Palm\Rbac\V1\UserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetPermissionsForUser',
        $argument,
        ['\Palm\Rbac\V1\PermissionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetPermissionsForRole(\Palm\Rbac\V1\RoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetPermissionsForRole',
        $argument,
        ['\Palm\Rbac\V1\PermissionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetImplicitPermissionsForUser(\Palm\Rbac\V1\UserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/GetImplicitPermissionsForUser',
        $argument,
        ['\Palm\Rbac\V1\PermissionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\HasRoleForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasRoleForUser(\Palm\Rbac\V1\HasRoleForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/HasRoleForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\HasPermissionForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasPermissionForUser(\Palm\Rbac\V1\HasPermissionForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/HasPermissionForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UpdatePermissionsForRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdatePermissionsForRole(\Palm\Rbac\V1\UpdatePermissionsForRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/UpdatePermissionsForRole',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\UpdatePermissionsForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdatePermissionsForUser(\Palm\Rbac\V1\UpdatePermissionsForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Policy/UpdatePermissionsForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

}
