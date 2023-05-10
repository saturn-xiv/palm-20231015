#include "Gantry5HomeHandler.h"
#include "Poco/Net/HTTPServerRequest.h"
#include "Poco/Net/HTTPServerResponse.h"
#include "Poco/Net/HTMLForm.h"

    #include "Poco/DateTime.h"
    #include "Poco/DateTimeFormatter.h"
    #include "Poco/DateTimeFormat.h"


    using Poco::DateTime;
    using Poco::DateTimeFormatter;
    using Poco::DateTimeFormat;


using namespace std::string_literals;


namespace palm {
namespace themes {


void Gantry5HomeHandler::handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response)
{
	response.setChunkedTransferEncoding(true);
	response.setContentType("text/html"s);

	Poco::Net::HTMLForm form(request, request.stream());
	std::ostream& responseStream = response.send();
	responseStream << "\n";

    DateTime now;
    std::string dt(DateTimeFormatter::format(now, DateTimeFormat::SORTABLE_FORMAT));
	responseStream << "\n";
	responseStream << "<html>\n";
	responseStream << "<head>\n";
	responseStream << "<title>Time Sample Gantry5</title>\n";
	responseStream << "</head>\n";
	responseStream << "<body>\n";
	responseStream << "<h1>Time Sample</h1>\n";
	responseStream << "<p>";
	responseStream << ( dt );
	responseStream << "</p>\n";
	responseStream << "</body>\n";
	responseStream << "</html>\n";
}


} } // namespace palm::themes
