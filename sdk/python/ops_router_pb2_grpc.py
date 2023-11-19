# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
import ops_router_pb2 as ops__router__pb2


class RouterStub(object):
    """----------------------------------------------------------------------------

    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Reboot = channel.unary_unary(
                '/palm.ops.router.v1.Router/Reboot',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.Apply = channel.unary_unary(
                '/palm.ops.router.v1.Router/Apply',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.Status = channel.unary_unary(
                '/palm.ops.router.v1.Router/Status',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=ops__router__pb2.RouterStatusResponse.FromString,
                )
        self.SetDns = channel.unary_unary(
                '/palm.ops.router.v1.Router/SetDns',
                request_serializer=ops__router__pb2.Dns.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.SetWan = channel.unary_unary(
                '/palm.ops.router.v1.Router/SetWan',
                request_serializer=ops__router__pb2.RouterSetWanRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.SetWanPool = channel.unary_unary(
                '/palm.ops.router.v1.Router/SetWanPool',
                request_serializer=ops__router__pb2.WanPool.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.SetLan = channel.unary_unary(
                '/palm.ops.router.v1.Router/SetLan',
                request_serializer=ops__router__pb2.RouterSetLanRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.SetDmz = channel.unary_unary(
                '/palm.ops.router.v1.Router/SetDmz',
                request_serializer=ops__router__pb2.RouterSetDmzRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.CreateRule = channel.unary_unary(
                '/palm.ops.router.v1.Router/CreateRule',
                request_serializer=ops__router__pb2.Rule.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.UpdateRule = channel.unary_unary(
                '/palm.ops.router.v1.Router/UpdateRule',
                request_serializer=ops__router__pb2.RouterIndexRuleResponse.Item.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.IndexRule = channel.unary_unary(
                '/palm.ops.router.v1.Router/IndexRule',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=ops__router__pb2.RouterIndexRuleResponse.FromString,
                )
        self.UpdateHost = channel.unary_unary(
                '/palm.ops.router.v1.Router/UpdateHost',
                request_serializer=ops__router__pb2.RouterUpdateHostRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.IndexUser = channel.unary_unary(
                '/palm.ops.router.v1.Router/IndexUser',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=ops__router__pb2.RouterIndexUserResponse.FromString,
                )
        self.UpdateUser = channel.unary_unary(
                '/palm.ops.router.v1.Router/UpdateUser',
                request_serializer=ops__router__pb2.RouterIndexUserResponse.Item.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.CreateUser = channel.unary_unary(
                '/palm.ops.router.v1.Router/CreateUser',
                request_serializer=ops__router__pb2.RouterCreateUserRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )


class RouterServicer(object):
    """----------------------------------------------------------------------------

    """

    def Reboot(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Apply(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Status(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetDns(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetWan(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetWanPool(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetLan(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetDmz(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateRule(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateRule(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def IndexRule(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateHost(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def IndexUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_RouterServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Reboot': grpc.unary_unary_rpc_method_handler(
                    servicer.Reboot,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'Apply': grpc.unary_unary_rpc_method_handler(
                    servicer.Apply,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'Status': grpc.unary_unary_rpc_method_handler(
                    servicer.Status,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=ops__router__pb2.RouterStatusResponse.SerializeToString,
            ),
            'SetDns': grpc.unary_unary_rpc_method_handler(
                    servicer.SetDns,
                    request_deserializer=ops__router__pb2.Dns.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'SetWan': grpc.unary_unary_rpc_method_handler(
                    servicer.SetWan,
                    request_deserializer=ops__router__pb2.RouterSetWanRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'SetWanPool': grpc.unary_unary_rpc_method_handler(
                    servicer.SetWanPool,
                    request_deserializer=ops__router__pb2.WanPool.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'SetLan': grpc.unary_unary_rpc_method_handler(
                    servicer.SetLan,
                    request_deserializer=ops__router__pb2.RouterSetLanRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'SetDmz': grpc.unary_unary_rpc_method_handler(
                    servicer.SetDmz,
                    request_deserializer=ops__router__pb2.RouterSetDmzRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'CreateRule': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateRule,
                    request_deserializer=ops__router__pb2.Rule.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'UpdateRule': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateRule,
                    request_deserializer=ops__router__pb2.RouterIndexRuleResponse.Item.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'IndexRule': grpc.unary_unary_rpc_method_handler(
                    servicer.IndexRule,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=ops__router__pb2.RouterIndexRuleResponse.SerializeToString,
            ),
            'UpdateHost': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateHost,
                    request_deserializer=ops__router__pb2.RouterUpdateHostRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'IndexUser': grpc.unary_unary_rpc_method_handler(
                    servicer.IndexUser,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=ops__router__pb2.RouterIndexUserResponse.SerializeToString,
            ),
            'UpdateUser': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateUser,
                    request_deserializer=ops__router__pb2.RouterIndexUserResponse.Item.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'CreateUser': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateUser,
                    request_deserializer=ops__router__pb2.RouterCreateUserRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'palm.ops.router.v1.Router', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Router(object):
    """----------------------------------------------------------------------------

    """

    @staticmethod
    def Reboot(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/Reboot',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Apply(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/Apply',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Status(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/Status',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ops__router__pb2.RouterStatusResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetDns(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/SetDns',
            ops__router__pb2.Dns.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetWan(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/SetWan',
            ops__router__pb2.RouterSetWanRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetWanPool(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/SetWanPool',
            ops__router__pb2.WanPool.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetLan(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/SetLan',
            ops__router__pb2.RouterSetLanRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetDmz(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/SetDmz',
            ops__router__pb2.RouterSetDmzRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateRule(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/CreateRule',
            ops__router__pb2.Rule.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateRule(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/UpdateRule',
            ops__router__pb2.RouterIndexRuleResponse.Item.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def IndexRule(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/IndexRule',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ops__router__pb2.RouterIndexRuleResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateHost(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/UpdateHost',
            ops__router__pb2.RouterUpdateHostRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def IndexUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/IndexUser',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ops__router__pb2.RouterIndexUserResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/UpdateUser',
            ops__router__pb2.RouterIndexUserResponse.Item.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.Router/CreateUser',
            ops__router__pb2.RouterCreateUserRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class UserStub(object):
    """----------------------------------------------------------------------------

    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SignIn = channel.unary_unary(
                '/palm.ops.router.v1.User/SignIn',
                request_serializer=ops__router__pb2.UserSignInRequest.SerializeToString,
                response_deserializer=ops__router__pb2.UserSignInResponse.FromString,
                )
        self.Refresh = channel.unary_unary(
                '/palm.ops.router.v1.User/Refresh',
                request_serializer=google_dot_protobuf_dot_duration__pb2.Duration.SerializeToString,
                response_deserializer=ops__router__pb2.UserSignInResponse.FromString,
                )
        self.Update = channel.unary_unary(
                '/palm.ops.router.v1.User/Update',
                request_serializer=ops__router__pb2.UserUpdateRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.SignOut = channel.unary_unary(
                '/palm.ops.router.v1.User/SignOut',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.Logs = channel.unary_unary(
                '/palm.ops.router.v1.User/Logs',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=ops__router__pb2.UserLogsResponse.FromString,
                )


class UserServicer(object):
    """----------------------------------------------------------------------------

    """

    def SignIn(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Refresh(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Update(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SignOut(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Logs(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_UserServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SignIn': grpc.unary_unary_rpc_method_handler(
                    servicer.SignIn,
                    request_deserializer=ops__router__pb2.UserSignInRequest.FromString,
                    response_serializer=ops__router__pb2.UserSignInResponse.SerializeToString,
            ),
            'Refresh': grpc.unary_unary_rpc_method_handler(
                    servicer.Refresh,
                    request_deserializer=google_dot_protobuf_dot_duration__pb2.Duration.FromString,
                    response_serializer=ops__router__pb2.UserSignInResponse.SerializeToString,
            ),
            'Update': grpc.unary_unary_rpc_method_handler(
                    servicer.Update,
                    request_deserializer=ops__router__pb2.UserUpdateRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'SignOut': grpc.unary_unary_rpc_method_handler(
                    servicer.SignOut,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'Logs': grpc.unary_unary_rpc_method_handler(
                    servicer.Logs,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=ops__router__pb2.UserLogsResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'palm.ops.router.v1.User', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class User(object):
    """----------------------------------------------------------------------------

    """

    @staticmethod
    def SignIn(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.User/SignIn',
            ops__router__pb2.UserSignInRequest.SerializeToString,
            ops__router__pb2.UserSignInResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Refresh(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.User/Refresh',
            google_dot_protobuf_dot_duration__pb2.Duration.SerializeToString,
            ops__router__pb2.UserSignInResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Update(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.User/Update',
            ops__router__pb2.UserUpdateRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SignOut(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.User/SignOut',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Logs(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/palm.ops.router.v1.User/Logs',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ops__router__pb2.UserLogsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)