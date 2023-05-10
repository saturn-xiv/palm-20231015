//
// User.cpp
//
// This file has been generated from mappers/auth.xml. Do not edit.
//


#include "palm/auth/models/User.h"


using namespace std::string_literals;
using namespace Poco::Data::Keywords;


namespace palm {
namespace auth {
namespace models {


User::User(ID id):
	Poco::ActiveRecord::ActiveRecord<Poco::Int32>(id)
{
}


User::User(const User& other):
	Poco::ActiveRecord::ActiveRecord<Poco::Int32>(other),
	_nickname(other._nickname),
	_real_name(other._real_name)
{
}


User::Ptr User::find(Poco::ActiveRecord::Context::Ptr pContext, const ID& id)
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(pContext->statementPlaceholderProvider());
	User::Ptr pObject(new User);

	pContext->session()
		<< "SELECT id, nickname, real_name"
		<< "  FROM users"
		<< "  WHERE id = " << pSPP->next(),
		into(pObject->mutableID()),
		into(*pObject),
		bind(id),
		now;

	return withContext(pObject, pContext);
}


void User::insert()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "INSERT INTO users (id, nickname, real_name)"
		<< "  VALUES (NULL, " << pSPP->next() << ", " << pSPP->next() << ")",
		use(*this),
		now;
	updateID(context()->session());
}


void User::update()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "UPDATE users"
		<< "  SET nickname = " << pSPP->next() << ", real_name = " << pSPP->next()
		<< "  WHERE id = " << pSPP->next(),
		use(*this),
		bind(id()),
		now;
}


void User::remove()
{
	Poco::ActiveRecord::StatementPlaceholderProvider::Ptr pSPP(context()->statementPlaceholderProvider());

	context()->session()
		<< "DELETE FROM users"
		<< "  WHERE id = " << pSPP->next(),
		bind(id()),
		now;
}


const std::vector<std::string>& User::columns()
{
	static const std::vector<std::string> cols =
	{
		"id"s,
		"nickname"s,
		"real_name"s,
	};

	return cols;
}


const std::string& User::table()
{
	static const std::string t = "users";
	return t;
}


} } } // namespace palm::auth::models
