//
// Rule.cpp
//
// This file has been generated from mappers/rbac.xml. Do not edit.
//


#include "palm/rbac/models/Rule.h"


using namespace std::string_literals;
using namespace Poco::Data::Keywords;


namespace palm {
namespace rbac {
namespace models {


Rule::Rule(ID id):
	Poco::ActiveRecord::ActiveRecord<Poco::Int32>(id)
{
}


Rule::Rule(const Rule& other):
	Poco::ActiveRecord::ActiveRecord<Poco::Int32>(other),
	_ptype(other._ptype),
	_v0(other._v0),
	_v1(other._v1),
	_v2(other._v2),
	_v3(other._v3),
	_v4(other._v4),
	_v5(other._v5)
{
}


Rule::Ptr Rule::find(Poco::ActiveRecord::Context::Ptr pContext, const ID& id)
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(pContext->statementPlaceholderProvider());
	Rule::Ptr pObject(new Rule);

	pContext->session()
		<< "SELECT id, ptype, v0, v1, v2, v3, v4, v5"
		<< "  FROM users"
		<< "  WHERE id = " << pSPP->next(),
		into(pObject->mutableID()),
		into(*pObject),
		bind(id),
		now;

	return withContext(pObject, pContext);
}


void Rule::insert()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "INSERT INTO users (id, ptype, v0, v1, v2, v3, v4, v5)"
		<< "  VALUES (NULL, " << pSPP->next() << ", " << pSPP->next() << ", " << pSPP->next() << ", " << pSPP->next() << ", " << pSPP->next() << ", " << pSPP->next() << ", " << pSPP->next() << ")",
		use(*this),
		now;
	updateID(context()->session());
}


void Rule::update()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "UPDATE users"
		<< "  SET ptype = " << pSPP->next() << ", v0 = " << pSPP->next() << ", v1 = " << pSPP->next() << ", v2 = " << pSPP->next() << ", v3 = " << pSPP->next() << ", v4 = " << pSPP->next() << ", v5 = " << pSPP->next()
		<< "  WHERE id = " << pSPP->next(),
		use(*this),
		bind(id()),
		now;
}


void Rule::remove()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "DELETE FROM users"
		<< "  WHERE id = " << pSPP->next(),
		bind(id()),
		now;
}


const std::vector<std::string>& Rule::columns()
{
	static const std::vector<std::string> cols =
	{
		"id"s,
		"ptype"s,
		"v0"s,
		"v1"s,
		"v2"s,
		"v3"s,
		"v4"s,
		"v5"s,
	};

	return cols;
}


const std::string& Rule::table()
{
	static const std::string t = "users";
	return t;
}


} } } // namespace palm::rbac::models
