#ifndef HugoCleanWhiteHandler_INCLUDED
#define HugoCleanWhiteHandler_INCLUDED


#include "Poco/Net/HTTPRequestHandler.h"


namespace palm {
namespace themes {


class HugoCleanWhiteHandler: public Poco::Net::HTTPRequestHandler
{
public:
	void handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response);
};


} } // namespace palm::themes


#endif // HugoCleanWhiteHandler_INCLUDED
