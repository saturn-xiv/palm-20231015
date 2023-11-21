<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Palm\Rbac\V1;

/**
 */
class RbacClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Palm\Rbac\V1\UserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetRolesForUser(\Palm\Rbac\V1\UserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/GetRolesForUser',
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
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/GetImplicitRolesForUser',
        $argument,
        ['\Palm\Rbac\V1\RolesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RolesForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddRolesForUser(\Palm\Rbac\V1\RolesForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/AddRolesForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RolesForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteRolesForUser(\Palm\Rbac\V1\RolesForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/DeleteRolesForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\HasRoleForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function HasImplicitRoleForUser(\Palm\Rbac\V1\HasRoleForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/HasImplicitRoleForUser',
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
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/DeleteUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\PermissionsForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddPermissionsForUser(\Palm\Rbac\V1\PermissionsForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/AddPermissionsForUser',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\PermissionsForUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePermissionsForUser(\Palm\Rbac\V1\PermissionsForUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/DeletePermissionsForUser',
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
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/GetPermissionsForUser',
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
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/GetImplicitPermissionsForUser',
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
    public function HasImplicitPermissionsForUser(\Palm\Rbac\V1\UserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/HasImplicitPermissionsForUser',
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
    public function GetUsersForRole(\Palm\Rbac\V1\RoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/GetUsersForRole',
        $argument,
        ['\Palm\Rbac\V1\UsersResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\RoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetImplicitUsersForRole(\Palm\Rbac\V1\RoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/GetImplicitUsersForRole',
        $argument,
        ['\Palm\Rbac\V1\UsersResponse', 'decode'],
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
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/DeleteRole',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\PermissionsForRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddPermissionsForRole(\Palm\Rbac\V1\PermissionsForRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/AddPermissionsForRole',
        $argument,
        ['\Google\Protobuf\GPBEmpty', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Palm\Rbac\V1\PermissionsForRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePermissionsForRole(\Palm\Rbac\V1\PermissionsForRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/DeletePermissionsForRole',
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
    public function GetPermissionsForRole(\Palm\Rbac\V1\RoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/palm.rbac.v1.Rbac/GetPermissionsForRole',
        $argument,
        ['\Palm\Rbac\V1\PermissionsResponse', 'decode'],
        $metadata, $options);
    }

}
