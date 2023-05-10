#include "HugoDocsyHandler.h"
#include "Poco/Net/HTTPServerRequest.h"
#include "Poco/Net/HTTPServerResponse.h"
#include "Poco/Net/HTMLForm.h"
#line 2 "/home/jeremy/workspace/saturn-xiv/palm-poco/themes/hugo-docsy/home.cpsp"

    #include "Poco/DateTime.h"
    #include "Poco/DateTimeFormatter.h"
    #include "Poco/DateTimeFormat.h"


    using Poco::DateTime;
    using Poco::DateTimeFormatter;
    using Poco::DateTimeFormat;


using namespace std::string_literals;


namespace palm {
namespace themes {


void HugoDocsyHandler::handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response)
{
	response.setChunkedTransferEncoding(true);
	response.setContentType("text/html"s);

	Poco::Net::HTMLForm form(request, request.stream());
	std::ostream& responseStream = response.send();
	responseStream << "\n";
#line 13 "/home/jeremy/workspace/saturn-xiv/palm-poco/themes/hugo-docsy/home.cpsp"

    DateTime now;
    std::string dt(DateTimeFormatter::format(now, DateTimeFormat::SORTABLE_FORMAT));
	responseStream << "\n";
	responseStream << "<html>\n";
	responseStream << "<head>\n";
	responseStream << "<title>Time Sample hugu docsy</title>\n";
	responseStream << "</head>\n";
	responseStream << "<body>\n";
	responseStream << "<h1>Time Sample</h1>\n";
	responseStream << "<p>";
#line 23 "/home/jeremy/workspace/saturn-xiv/palm-poco/themes/hugo-docsy/home.cpsp"
	responseStream << ( dt );
	responseStream << "</p>\n";
	responseStream << "</body>\n";
	responseStream << "</html>\n";
}


} } // namespace palm::themes
