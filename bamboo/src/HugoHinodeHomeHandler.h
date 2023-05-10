#ifndef HugoHinodeHomeHandler_INCLUDED
#define HugoHinodeHomeHandler_INCLUDED


#include "Poco/Net/HTTPRequestHandler.h"


namespace palm {
namespace themes {


class HugoHinodeHomeHandler: public Poco::Net::HTTPRequestHandler
{
public:
	void handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response);
};


} } // namespace palm::themes


#endif // HugoHinodeHomeHandler_INCLUDED
