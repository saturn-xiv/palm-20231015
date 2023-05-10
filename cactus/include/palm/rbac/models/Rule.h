//
// Rule.h
//
// This file has been generated from mappers/rbac.xml. Do not edit.
//


#ifndef palm_rbac_models_Rule_INCLUDED
#define palm_rbac_models_Rule_INCLUDED


#include "Poco/ActiveRecord/ActiveRecord.h"


namespace palm {
namespace rbac {
namespace models {


class Rule: public Poco::ActiveRecord::ActiveRecord<Poco::Int32>
{
public:
	using Ptr = Poco::AutoPtr<Rule>;

	explicit Rule(ID id);
	Rule() = default;
	Rule(const Rule& other);
	~Rule() = default;

	const std::string& ptype() const;
	Rule& ptype(const std::string& value);

	const std::string& v0() const;
	Rule& v0(const std::string& value);

	const std::string& v1() const;
	Rule& v1(const std::string& value);

	const std::string& v2() const;
	Rule& v2(const std::string& value);

	const std::string& v3() const;
	Rule& v3(const std::string& value);

	const std::string& v4() const;
	Rule& v4(const std::string& value);

	const std::string& v5() const;
	Rule& v5(const std::string& value);

	static Ptr find(Poco::ActiveRecord::Context::Ptr pContext, const ID& id);

	void insert();
	void update();
	void remove();

	static const std::vector<std::string>& columns();
	static const std::string& table();

private:
	std::string _ptype;
	std::string _v0;
	std::string _v1;
	std::string _v2;
	std::string _v3;
	std::string _v4;
	std::string _v5;

	friend class Poco::Data::TypeHandler<Rule>;
};


inline const std::string& Rule::ptype() const
{
	return _ptype;
}


inline Rule& Rule::ptype(const std::string& value)
{
	_ptype = value;
	return *this;
}


inline const std::string& Rule::v0() const
{
	return _v0;
}


inline Rule& Rule::v0(const std::string& value)
{
	_v0 = value;
	return *this;
}


inline const std::string& Rule::v1() const
{
	return _v1;
}


inline Rule& Rule::v1(const std::string& value)
{
	_v1 = value;
	return *this;
}


inline const std::string& Rule::v2() const
{
	return _v2;
}


inline Rule& Rule::v2(const std::string& value)
{
	_v2 = value;
	return *this;
}


inline const std::string& Rule::v3() const
{
	return _v3;
}


inline Rule& Rule::v3(const std::string& value)
{
	_v3 = value;
	return *this;
}


inline const std::string& Rule::v4() const
{
	return _v4;
}


inline Rule& Rule::v4(const std::string& value)
{
	_v4 = value;
	return *this;
}


inline const std::string& Rule::v5() const
{
	return _v5;
}


inline Rule& Rule::v5(const std::string& value)
{
	_v5 = value;
	return *this;
}


} } } // namespace palm::rbac::models


namespace Poco {
namespace Data {


template <>
class TypeHandler<palm::rbac::models::Rule>
{
public:
	static std::size_t size()
	{
		return 7;
	}

	static void bind(std::size_t pos, const palm::rbac::models::Rule& ar, AbstractBinder::Ptr pBinder, AbstractBinder::Direction dir)
	{
		TypeHandler<std::string>::bind(pos++, ar._ptype, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._v0, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._v1, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._v2, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._v3, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._v4, pBinder, dir);
		TypeHandler<std::string>::bind(pos++, ar._v5, pBinder, dir);
}

	static void extract(std::size_t pos, palm::rbac::models::Rule& ar, const palm::rbac::models::Rule& deflt, AbstractExtractor::Ptr pExtr)
	{
		TypeHandler<std::string>::extract(pos++, ar._ptype, deflt._ptype, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._v0, deflt._v0, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._v1, deflt._v1, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._v2, deflt._v2, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._v3, deflt._v3, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._v4, deflt._v4, pExtr);
		TypeHandler<std::string>::extract(pos++, ar._v5, deflt._v5, pExtr);
}

	static void prepare(std::size_t pos, const palm::rbac::models::Rule& ar, AbstractPreparator::Ptr pPrep)
	{
		TypeHandler<std::string>::prepare(pos++, ar._ptype, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._v0, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._v1, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._v2, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._v3, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._v4, pPrep);
		TypeHandler<std::string>::prepare(pos++, ar._v5, pPrep);
	}
};


} } // namespace Poco::Data


#endif // palm_rbac_models_Rule_INCLUDED
