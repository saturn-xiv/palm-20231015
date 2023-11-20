#include "carnation/casbin.hpp"

inline static const std::string UP = R"SQL(
CREATE TABLE IF NOT EXISTS casbin_rule (
    id SERIAL PRIMARY KEY,
    ptype VARCHAR NOT NULL,
    v0 VARCHAR NOT NULL,
    v1 VARCHAR NOT NULL,
    v2 VARCHAR NOT NULL,
    v3 VARCHAR NOT NULL,
    v4 VARCHAR NOT NULL,
    v5 VARCHAR NOT NULL,
    CONSTRAINT idx_casbin_rule UNIQUE(ptype, v0, v1, v2, v3, v4, v5)
);
)SQL";

void carnation::adapters::PostgreSqlAdapter::LoadPolicy(
    const std::shared_ptr<casbin::Model>& model) {
  palm::postgresql::PooledConnection con(this->_pool);
  {
    pqxx::work tx{*con.db};
    const auto items = carnation::dao::load_policy(tx);
    for (const auto& it : items) {
      std::stringstream ss;
      ss << it;
      const std::string line = ss.str();
      casbin::LoadPolicyLine(line, model);
    }
    tx.commit();
  }
}

static void save_policy(pqxx::work& tx,
                        const std::shared_ptr<casbin::Model>& model,
                        const std::string& section) {
  for (std::unordered_map<std::string,
                          std::shared_ptr<casbin::Assertion>>::iterator it =
           model->m[section].assertion_map.begin();
       it != model->m[section].assertion_map.end(); it++) {
    for (int i = 0; i < it->second->policy.size(); i++) {
      auto p = carnation::models::policy::New::from_line(it->first,
                                                         it->second->policy[i]);
      if (p) {
        carnation::dao::add_policy(tx, p->p_type, p->v0, p->v1, p->v2, p->v3,
                                   p->v4, p->v5);
      }
    }
  }
}

void carnation::adapters::PostgreSqlAdapter::SavePolicy(
    const std::shared_ptr<casbin::Model>& model) {
  palm::postgresql::PooledConnection con(this->_pool);
  {
    pqxx::work tx{*con.db};
    carnation::dao::clear_policy(tx);
    save_policy(tx, model, "p");
    save_policy(tx, model, "g");
    tx.commit();
  }
}
void carnation::adapters::PostgreSqlAdapter::AddPolicy(
    std::string sec, std::string p_type, std::vector<std::string> rule) {
  const auto p = carnation::models::policy::New::from_line(p_type, rule);
  if (p) {
    palm::postgresql::PooledConnection con(this->_pool);
    {
      pqxx::work tx{*con.db};
      carnation::dao::add_policy(tx, p->p_type, p->v0, p->v1, p->v2, p->v3,
                                 p->v4, p->v5);
      tx.commit();
    }
  }
}
void carnation::adapters::PostgreSqlAdapter::RemovePolicy(
    std::string sec, std::string p_type, std::vector<std::string> rule) {
  const auto p = carnation::models::policy::New::from_line(p_type, rule);
  if (p) {
    palm::postgresql::PooledConnection con(this->_pool);
    {
      pqxx::work tx{*con.db};
      carnation::dao::remove_policy(tx, p->p_type, p->v0, p->v1, p->v2, p->v3,
                                    p->v4, p->v5);
      tx.commit();
    }
  }
}
void carnation::adapters::PostgreSqlAdapter::RemoveFilteredPolicy(
    std::string sec, std::string p_type, int field_index,
    std::vector<std::string> field_values) {
  palm::postgresql::PooledConnection con(this->_pool);
  {
    pqxx::work tx{*con.db};

    const auto policies = carnation::dao::load_policy(tx);
    // for (const auto& policy : policies) {
    //   auto line = policy.to_filtered_line();
    // }
    // TODO

    tx.commit();
  }
}
bool carnation::adapters::PostgreSqlAdapter::IsFiltered() {
  return this->filtered;
}
bool carnation::adapters::PostgreSqlAdapter::IsValid() { return true; }

void carnation::adapters::PostgreSqlAdapter::AddPolicies(
    std::string sec, std::string p_type,
    std::vector<std::vector<std::string>> rules) {
  palm::postgresql::PooledConnection con(this->_pool);
  {
    pqxx::work tx{*con.db};
    for (const auto& rule : rules) {
      const auto p = carnation::models::policy::New::from_line(p_type, rule);
      if (p) {
        carnation::dao::add_policy(tx, p->p_type, p->v0, p->v1, p->v2, p->v3,
                                   p->v4, p->v5);
      }
    }
    tx.commit();
  }
}
void carnation::adapters::PostgreSqlAdapter::RemovePolicies(
    std::string sec, std::string p_type,
    std::vector<std::vector<std::string>> rules) {
  palm::postgresql::PooledConnection con(this->_pool);
  {
    pqxx::work tx{*con.db};
    for (const auto& rule : rules) {
      const auto p = carnation::models::policy::New::from_line(p_type, rule);
      if (p) {
        carnation::dao::remove_policy(tx, p->p_type, p->v0, p->v1, p->v2, p->v3,
                                      p->v4, p->v5);
      }
    }
    tx.commit();
  }
}
