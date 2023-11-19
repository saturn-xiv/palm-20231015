#include "palm/loquat.hpp"

#include <thrift/protocol/TBinaryProtocol.h>
#include <thrift/transport/TSSLSocket.h>
#include <thrift/transport/TTransportUtils.h>

static const std::string PROJECT_NAME = "loquat";
palm::loquat::Config::Config(const toml::table& node) {
  this->_host = node["host"].value_or("127.0.0.1");
  this->_port = node["port"].value_or(8080);
  this->_ca_file = node["ca-file"].value_or("ca.crt");
  this->_key_file = node["key-file"].value_or(PROJECT_NAME + ".key");
  this->_cert_file = node["cert-file"].value_or(PROJECT_NAME + ".crt");
}

std::shared_ptr<apache::thrift::protocol::TMultiplexedProtocol>
palm::loquat::Config::open(const std::string& name) const {
  std::shared_ptr<apache::thrift::transport::TSSLSocketFactory>
      sslSocketFactory =
          std::make_shared<apache::thrift::transport::TSSLSocketFactory>();
  {
    spdlog::debug("load cert from {}, key from {}, ca from {}",
                  this->_cert_file, this->_key_file, this->_ca_file);
    sslSocketFactory->ciphers("ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH");
    sslSocketFactory->authenticate(true);
    sslSocketFactory->loadCertificate(this->_cert_file.c_str());
    sslSocketFactory->loadPrivateKey(this->_key_file.c_str());
    sslSocketFactory->loadTrustedCertificates(this->_ca_file.c_str());
  }

  spdlog::debug("open tcps://{}:{}", this->_host, this->_port);
  std::shared_ptr<apache::thrift::transport::TSSLSocket> socket =
      sslSocketFactory->createSocket(this->_host, this->_port);
  socket->open();

  std::shared_ptr<apache::thrift::transport::TFramedTransport> framedTransport =
      std::make_shared<apache::thrift::transport::TFramedTransport>(socket);
  std::shared_ptr<apache::thrift::protocol::TBinaryProtocol> binaryProtocol =
      std::make_shared<apache::thrift::protocol::TBinaryProtocol>(
          framedTransport);
  std::shared_ptr<apache::thrift::protocol::TMultiplexedProtocol> protocol =
      std::make_shared<apache::thrift::protocol::TMultiplexedProtocol>(
          binaryProtocol, name);
  return protocol;
}
