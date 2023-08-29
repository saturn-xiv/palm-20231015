import os
import sys
import logging
import tomllib
import ipaddress
import configparser

from .env import KeyPair

VERSION = '2023.8.29'

# https://wiki.archlinux.org/title/WireGuard
# https://www.wireguard.com/quickstart/


class Peer:
    def __init__(self, name, id):
        self.name = name
        self.id = id


class Config:
    def __init__(self,  network, listen_port, peers):
        self.network = ipaddress.ip_network(network)
        if not self.network.is_private:
            logging.error("bad network %s", network)
            sys.exit(1)
        self.listen_port = listen_port
        if listen_port < 1000 or listen_port > 65535:
            logging.error("bad listen port %d", listen_port)
            sys.exit(1)
        self.peers = peers
        # if len(self.network.hosts()) - 2 < len(peers):
        #     logging.error("network isn't enough %s", self.network.hosts())
        #     sys.exit(1)

    def write(self, target):
        logging.warn("write to folder %s", target)
        logging.info("generate server.conf for %s", self.network)

        server_key = KeyPair(target, "server")
        with open(os.path.join(target, "server.conf"), "w") as fd:
            fd.write('[Interface]\n')
            # fd.write('Address = %s\n' % self.network)
            # fd.write('ListenPort = %d\n' % self.listen_port)
            # fd.write('PrivateKey = %s\n' % self.private_key)
            # cfg = configparser.RawConfigParser()
            # cfg.optionxform = lambda option: option
            # cfg["Interface"] = {}
            # ife = cfg["Interface"]
            # ife['Address'] = ''
            # ife['ListenPort'] = str(self.listen_port)
            # ife['PrivateKey'] = server_key.key
            # for peer in self.peers:
            #     cfg['Peer'] = {}
            #     itp = cfg['Peer']
            #     itp['PublicKey'] = peer.name
            # cfg.write(fd)


def load(file):
    logging.info('load configuration from %s', file)
    with open(file, "rb") as fd:
        config = tomllib.load(fd)
        peers = []
        # for name in config['peers']:
        #     it = Peer(name, config['peers'][name]['id'])
        #     logging.debug('find peer %s %s', it.name, it.id)
        #     peers.append(it)
        return Config(config['server']['network'], config['server']['listen-port'], peers)
