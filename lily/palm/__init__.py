
import logging
from time import sleep
from concurrent import futures
import threading

import psycopg
import pika
import grpc
from redis.cluster import RedisCluster
from grpc_health.v1 import health_pb2, health, health_pb2_grpc

from . import lily_pb2_grpc, excel, tex


VERSION = '2023.10.6'


class RedisClient:
    def __init__(self, config):
        self.namespace = config['namespace']
        self.connection = RedisCluster(
            host=config['host'], port=config['port'])
        logging.info('redis cluster nodes with namespace(%s) in %s', self.namespace, list(
            map(lambda x: '%s:%d(%s)' % (x.host, x.port, x.server_type), self.connection.get_nodes())))

    def set(self, key, val, ttl=0):
        self.connection.setex(self._key(key), ttl, val)

    def get(self, key):
        return self.connection.get(self._key(key))

    def _key(self, k):
        return '%s://%s' % (self.namespace, k)


class MinioClient:
    def __init__(self, config):
        pass


class RpcServer:
    def __init__(self, config):
        self.addr = '0.0.0.0:%d' % (config['port'])
        self.max_workers = config['max-workers']

    def start(self):
        server = grpc.server(futures.ThreadPoolExecutor(
            max_workers=self.max_workers))
        lily_pb2_grpc.add_ExcelServicer_to_server(excel.Service(), server)
        lily_pb2_grpc.add_TexServicer_to_server(tex.Service(), server)
        RpcServer._rpc_setup_health_thread(server)
        server.add_insecure_port(self.addr)
        server.start()
        logging.info(
            "Lily gRPC server started, listening on %s with %d threads", self.addr, self.max_workers)
        try:
            server.wait_for_termination()
        except KeyboardInterrupt:
            logging.warn('exited...')
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
            target=RpcServer._rpc_health_checker,
            args=(servicer, 'palm.lily'),
            daemon=True
        )
        health_checker_thread.start()

# -----------------------------------------------------------------------------


# https://pika.readthedocs.io/en/stable/modules/parameters.html
def rabbitmq_parameters(config):
    credentials = pika.PlainCredentials(config['user'], config['password'])
    parameters = pika.ConnectionParameters(
        config['host'],
        config['port'],
        config['virtual-host'],
        credentials)
    return parameters


# https://www.postgresql.org/docs/current/libpq-connect.html
def postgresql_url(config):
    logging.debug('open postgresql://%s@%s:%d/%s',
                  config['user'], config['host'], config['port'], config['name'])
    url = 'host=%s port=%d user=%s password=%s dbname=%s sslmode=disable' % (
        config['host'], config['port'], config['user'], config['password'], config['name'])
    with psycopg.connect(url) as db:
        cur = db.cursor()
        cur.execute('SELECT VERSION(), CURRENT_TIMESTAMP')
        row = cur.fetchone()
        if row:
            logging.debug("%s %s", row[0], row[1])
    return url
