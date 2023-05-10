#ifndef GravXCorporationHandler_INCLUDED
#define GravXCorporationHandler_INCLUDED


#include "Poco/Net/HTTPRequestHandler.h"


namespace palm {
namespace themes {


class GravXCorporationHandler: public Poco::Net::HTTPRequestHandler
{
public:
	void handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response);
};


} } // namespace palm::themes


#endif // GravXCorporationHandler_INCLUDED
