#ifndef HugoUniversalHandler_INCLUDED
#define HugoUniversalHandler_INCLUDED


#include "Poco/Net/HTTPRequestHandler.h"


namespace palm {
namespace themes {


class HugoUniversalHandler: public Poco::Net::HTTPRequestHandler
{
public:
	void handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response);
};


} } // namespace palm::themes


#endif // HugoUniversalHandler_INCLUDED
