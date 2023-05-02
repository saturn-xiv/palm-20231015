// This autogenerated skeleton file illustrates how to build a server.
// You should copy it to another filename to avoid overwriting it.

#include "Aes.h"
#include <thrift/protocol/TBinaryProtocol.h>
#include <thrift/server/TSimpleServer.h>
#include <thrift/transport/TServerSocket.h>
#include <thrift/transport/TBufferTransports.h>

using namespace ::apache::thrift;
using namespace ::apache::thrift::protocol;
using namespace ::apache::thrift::transport;
using namespace ::apache::thrift::server;

using namespace  ::loquat::v1;

class AesHandler : virtual public AesIf {
 public:
  AesHandler() {
    // Your initialization goes here
  }

  void encrypt(std::string& _return, const std::string& auth, const std::string& plain) {
    // Your implementation goes here
    printf("encrypt\n");
  }

  void decrypt(std::string& _return, const std::string& auth, const std::string& code) {
    // Your implementation goes here
    printf("decrypt\n");
  }

};

int main(int argc, char **argv) {
  int port = 9090;
  ::std::shared_ptr<AesHandler> handler(new AesHandler());
  ::std::shared_ptr<TProcessor> processor(new AesProcessor(handler));
  ::std::shared_ptr<TServerTransport> serverTransport(new TServerSocket(port));
  ::std::shared_ptr<TTransportFactory> transportFactory(new TBufferedTransportFactory());
  ::std::shared_ptr<TProtocolFactory> protocolFactory(new TBinaryProtocolFactory());

  TSimpleServer server(processor, serverTransport, transportFactory, protocolFactory);
  server.serve();
  return 0;
}

