import threading
import logging

from time import sleep
from concurrent import futures
from pathlib import Path

import grpc
from grpc_health.v1 import health_pb2, health, health_pb2_grpc

from . import lily_pb2_grpc, excel, tex, s3


class Rpc:
    def __init__(self, config, s3, cache, queue):
        self.addr = '0.0.0.0:%d' % (config['port'])
        self.max_workers = config['max-workers']
        self.s3 = s3
        self.cache = cache
        self.queue = queue

        ca_file = config['ca-file']
        cert_file = config['cert-file']
        key_file = config['key-file']
        logging.debug("load ca(%s), cert(%s), key(%s)",
                      ca_file, cert_file, key_file)
        self.credentials = grpc.ssl_server_credentials(
            (
                (Path(key_file).read_bytes(), Path(cert_file).read_bytes()),
            ),
            Path(ca_file).read_bytes(),
            require_client_auth=True
        )

    def start(self):
        server = grpc.server(futures.ThreadPoolExecutor(
            max_workers=self.max_workers))
        lily_pb2_grpc.add_ExcelServicer_to_server(excel.Service(), server)
        lily_pb2_grpc.add_TexServicer_to_server(
            tex.Service(self.s3, self.cache, self.queue), server)
        lily_pb2_grpc.add_S3Servicer_to_server(s3.Service(self.s3), server)
        Rpc._rpc_setup_health_thread(server)

        server.add_secure_port(self.addr, self.credentials)
        server.start()
        logging.info(
            "Lily gRPC server started, listening on tcps:://%s with %d threads", self.addr, self.max_workers)
        try:
            server.wait_for_termination()
        except KeyboardInterrupt:
            logging.warning('exited...')
            server.stop(0)

    def _rpc_health_checker(servicer, name):
        while True:
            servicer.set(name, health_pb2.HealthCheckResponse.SERVING)
            sleep(5)

    def _rpc_setup_health_thread(server):
        servicer = health.HealthServicer(
            experimental_non_blocking=True,
            experimental_thread_pool=futures.ThreadPoolExecutor(max_workers=2)
        )
        health_pb2_grpc.add_HealthServicer_to_server(servicer, server)
        health_checker_thread = threading.Thread(
            target=Rpc._rpc_health_checker,
            args=(servicer, 'palm.lily'),
            daemon=True
        )
        health_checker_thread.start()
