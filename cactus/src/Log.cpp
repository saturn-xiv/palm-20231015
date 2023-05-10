//
// Log.cpp
//
// This file has been generated from mappers/auth.xml. Do not edit.
//


#include "palm/auth/models/Log.h"


using namespace std::string_literals;
using namespace Poco::Data::Keywords;


namespace palm {
namespace auth {
namespace models {


Log::Log(ID id):
	Poco::ActiveRecord::ActiveRecord<Poco::Int32>(id)
{
}


Log::Log(const Log& other):
	Poco::ActiveRecord::ActiveRecord<Poco::Int32>(other),
	_user_id(other._user_id),
	_message(other._message)
{
}


Log::Ptr Log::find(Poco::ActiveRecord::Context::Ptr pContext, const ID& id)
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(pContext->statementPlaceholderProvider());
	Log::Ptr pObject(new Log);

	pContext->session()
		<< "SELECT id, user_id, message"
		<< "  FROM logs"
		<< "  WHERE id = " << pSPP->next(),
		into(pObject->mutableID()),
		into(*pObject),
		bind(id),
		now;

	return withContext(pObject, pContext);
}


void Log::insert()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "INSERT INTO logs (id, user_id, message)"
		<< "  VALUES (NULL, " << pSPP->next() << ", " << pSPP->next() << ")",
		use(*this),
		now;
	updateID(context()->session());
}


void Log::update()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "UPDATE logs"
		<< "  SET user_id = " << pSPP->next() << ", message = " << pSPP->next()
		<< "  WHERE id = " << pSPP->next(),
		use(*this),
		bind(id()),
		now;
}


void Log::remove()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "DELETE FROM logs"
		<< "  WHERE id = " << pSPP->next(),
		bind(id()),
		now;
}


const std::vector<std::string>& Log::columns()
{
	static const std::vector<std::string> cols =
	{
		"id"s,
		"user_id"s,
		"message"s,
	};

	return cols;
}


const std::string& Log::table()
{
	static const std::string t = "logs";
	return t;
}


} } } // namespace palm::auth::models
