//
// User.h
//
// This file has been generated from mappers/auth.xml. Do not edit.
//


#ifndef palm_auth_models_User_INCLUDED
#define palm_auth_models_User_INCLUDED


#include "Poco/ActiveRecord/ActiveRecord.h"


namespace palm {
namespace auth {
namespace models {


class User: public Poco::ActiveRecord::ActiveRecord<Poco::Int32>
{
public:
	using Ptr = Poco::AutoPtr<User>;

	explicit User(ID id);
	User() = default;
	User(const User& other);
	~User() = default;

	const std::string& nickname() const;
	User& nickname(const std::string& value);

	const std::string& real_name() const;
	User& real_name(const std::string& value);

	static Ptr find(Poco::ActiveRecord::Context::Ptr pContext, const ID& id);

	void insert();
	void update();
	void remove();

	static const std::vector<std::string>& columns();
	static const std::string& table();

private:
	std::string _nickname;
	std::string _real_name;

	friend class Poco::Data::TypeHandler<User>;
};


inline const std::string& User::nickname() const
{
	return _nickname;
}


inline User& User::nickname(const std::string& value)
{
	_nickname = value;
	return *this;
}


inline const std::string& User::real_name() const
{
	return _real_name;
}


inline User& User::real_name(const std::string& value)
{
	_real_name = value;
	return *this;
}


} } } // namespace palm::auth::models


namespace Poco {
namespace Data {


template <>
class TypeHandler<palm::auth::models::User>
{
public:
	static std::size_t size()
	{
		return 2;
	}

	static void bind(std::size_t pos, const palm::auth::models::User& ar, AbstractBinder::Ptr pBinder, AbstractBinder::Direction dir)
	{
		TypeHandler<std::string>::bind(pos++, ar._nickname, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._real_name, pBinder, dir);
}

	static void extract(std::size_t pos, palm::auth::models::User& ar, const palm::auth::models::User& deflt, AbstractExtractor::Ptr pExtr)
	{
		TypeHandler<std::string>::extract(pos++, ar._nickname, deflt._nickname, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._real_name, deflt._real_name, pExtr);
}

	static void prepare(std::size_t pos, const palm::auth::models::User& ar, AbstractPreparator::Ptr pPrep)
	{
		TypeHandler<std::string>::prepare(pos++, ar._nickname, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._real_name, pPrep);
	}
};


} } // namespace Poco::Data


#endif // palm_auth_models_User_INCLUDED
