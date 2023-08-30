import os
import sys
import logging


class Interface:
    def __init__(self, address, listen_port, private_key):
        self.address = address
        self.listen_port = listen_port
        self.private_key = private_key

    def write(self, file):
        file.write('[Interface]\n')
        file.write('Address = %s\n' % self.network)
        file.write('ListenPort = %d\n' % self.listen_port)
        self.write('PrivateKey = %s\n' % self.private_key)


class Peer:
    def __init__(self, public_key, allow_ips, endpoint=None):
        self.public_key = public_key
        self.allow_ips = allow_ips
        self.endpoint = endpoint

    def write(self, file):
        file.write('[Peer]\n')
        file.write('PublicKey = %s\n' % self.public_key)
        file.write('AllowedIPs = %d\n' % self.allow_ips)
        if self.endpoint is not None:
            file.write('Endpoint = %s\n' % self.endpoint)


class Config:
    def __init__(self, interface, peers):
        self.interface = interface
        self.peers = peers

    def write(self, filename):
        logging.warn("generate %s", filename)
        with open(filename, "w") as file:
            self.interface.write(file)
            for peer in self.peers:
                peer.write(file)


class KeyPair:
    def __init__(self, target, name):
        if os.path.exists(target):
            if not os.path.isdir(target):
                logging.error("%s exists and isn't a folder", target)
                sys.exit(1)
        else:
            os.makedirs(target)
        pub = os.path.join(target, name + ".pub")
        key = os.path.join(target, name + ".key")
        if not os.path.exists(key) or not os.path.exists(pub):
            logging.warn("couldn't find key-pair for %s/%s", target, name)
            os.system("wg genkey | (umask 0077 && tee %s) | wg pubkey > %s" % (
                key, pub))
        with open(pub, 'r') as fd:
            self.pub = fd.read()
        with open(key, 'r') as fd:
            self.key = fd.read()
