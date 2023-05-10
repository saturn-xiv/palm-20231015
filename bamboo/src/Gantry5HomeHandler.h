#ifndef Gantry5HomeHandler_INCLUDED
#define Gantry5HomeHandler_INCLUDED


#include "Poco/Net/HTTPRequestHandler.h"


namespace palm {
namespace themes {


class Gantry5HomeHandler: public Poco::Net::HTTPRequestHandler
{
public:
	void handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response);
};


} } // namespace palm::themes


#endif // Gantry5HomeHandler_INCLUDED
