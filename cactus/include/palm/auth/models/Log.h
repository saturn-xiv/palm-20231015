//
// Log.h
//
// This file has been generated from mappers/auth.xml. Do not edit.
//


#ifndef palm_auth_models_Log_INCLUDED
#define palm_auth_models_Log_INCLUDED


#include "Poco/ActiveRecord/ActiveRecord.h"


namespace palm {
namespace auth {
namespace models {


class Log: public Poco::ActiveRecord::ActiveRecord<Poco::Int32>
{
public:
	using Ptr = Poco::AutoPtr<Log>;

	explicit Log(ID id);
	Log() = default;
	Log(const Log& other);
	~Log() = default;

	Poco::Int32 user_id() const;
	Log& user_id(Poco::Int32 value);

	const std::string& message() const;
	Log& message(const std::string& value);

	static Ptr find(Poco::ActiveRecord::Context::Ptr pContext, const ID& id);

	void insert();
	void update();
	void remove();

	static const std::vector<std::string>& columns();
	static const std::string& table();

private:
	Poco::Int32 _user_id = 0;
	std::string _message;

	friend class Poco::Data::TypeHandler<Log>;
};


inline Poco::Int32 Log::user_id() const
{
	return _user_id;
}


inline Log& Log::user_id(Poco::Int32 value)
{
	_user_id = value;
	return *this;
}


inline const std::string& Log::message() const
{
	return _message;
}


inline Log& Log::message(const std::string& value)
{
	_message = value;
	return *this;
}


} } } // namespace palm::auth::models


namespace Poco {
namespace Data {


template <>
class TypeHandler<palm::auth::models::Log>
{
public:
	static std::size_t size()
	{
		return 2;
	}

	static void bind(std::size_t pos, const palm::auth::models::Log& ar, AbstractBinder::Ptr pBinder, AbstractBinder::Direction dir)
	{
		TypeHandler<Poco::Int32>::bind(pos++, ar._user_id, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._message, pBinder, dir);
}

	static void extract(std::size_t pos, palm::auth::models::Log& ar, const palm::auth::models::Log& deflt, AbstractExtractor::Ptr pExtr)
	{
		TypeHandler<Poco::Int32>::extract(pos++, ar._user_id, deflt._user_id, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._message, deflt._message, pExtr);
}

	static void prepare(std::size_t pos, const palm::auth::models::Log& ar, AbstractPreparator::Ptr pPrep)
	{
		TypeHandler<Poco::Int32>::prepare(pos++, ar._user_id, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._message, pPrep);
	}
};


} } // namespace Poco::Data


#endif // palm_auth_models_Log_INCLUDED
