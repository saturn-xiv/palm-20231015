#include "palm/orm.hpp"

#include <boost/lexical_cast.hpp>
#include <boost/property_tree/ini_parser.hpp>

std::shared_ptr<Poco::Data::SessionPool> palm::sqlite3::open(
    const std::filesystem::path& file, const std::chrono::seconds& timeout,
    const bool wal_mode) {
  Poco::Data::SQLite::Connector::registerConnector();
  std::stringstream url;
  {
    url << file.string();
    // url << "db=" << file.string();
    // url << " timeout=" << timeout.count();
    // url << " shared_cache=true";
    // url << " synchronous=off";
  }
  std::shared_ptr<Poco::Data::SessionPool> pool =
      std::make_shared<Poco::Data::SessionPool>("SQLite", url.str());

  {
    Poco::Data::Session db(pool->get());

    db << "PRAGMA foreign_keys = ON";
    if (wal_mode) {
      db << "PRAGMA journal_mode = WAL";
    }
  }

  return pool;
}

std::shared_ptr<Poco::Data::SessionPool> palm::mysql::Config::open() const {
  Poco::Data::MySQL::Connector::registerConnector();
  // http://soci.sourceforge.net/doc/release/4.0/backends/mysql/
  std::stringstream url;
  {
    url << "host=" << this->host;
    url << " port=" << this->port;
    url << " dbname=" << this->database;
    url << " user=" << this->user;
    if (this->password) {
      url << " password=" << this->password.value();
    }
    url << " charset=utf8";
    url << " reconnect=1";
    url << " connect_timeout=" << this->timeout.count();
  }
  std::shared_ptr<Poco::Data::SessionPool> pool =
      std::make_shared<Poco::Data::SessionPool>("MySQL", url.str());
  return pool;
}

std::shared_ptr<Poco::Data::SessionPool> palm::postgresql::Config::open()
    const {
  Poco::Data::PostgreSQL::Connector::registerConnector();
  // https://www.postgresql.org/docs/14/libpq-connect.html#LIBPQ-CONNSTRING
  std::stringstream url;
  {
    url << "host=" << this->host;
    url << " port=" << this->port;
    url << " dbname=" << this->database;
    url << " user=" << this->user;
    if (this->password) {
      url << " password=" << this->password.value();
    }
    url << " sslmode=disable";
    url << " connect_timeout=" << this->timeout.count();
  }
  std::shared_ptr<Poco::Data::SessionPool> pool =
      std::make_shared<Poco::Data::SessionPool>("PostgreSQL", url.str());
  return pool;
}

palm::mysql::Config::Config(const boost::property_tree::ptree& config) {
  this->host = config.get("mysql.host", "127.0.0.1");
  this->port = config.get("mysql.port", 3306);
  this->user = config.get("mysql.user", "root");
  {
    auto it = config.get_optional<std::string>("mysql.password");
    if (it.has_value()) {
      this->password = it.get();
    }
  }
  this->database = config.get<std::string>("mysql.db-name");
  {
    size_t it = config.get("mysql.connection-timeout", 12);
    this->timeout = std::chrono::seconds(it);
  }
  this->pool_size = config.get("mysql.pool-size", 32);
}

palm::postgresql::Config::Config(const boost::property_tree::ptree& config) {
  this->host = config.get("postgresql.host", "127.0.0.1");
  this->port = config.get("postgresql.port", 5432);
  this->user = config.get("postgresql.user", "postgres");
  {
    auto it = config.get_optional<std::string>("postgresql.password");
    if (it.has_value()) {
      this->password = it.get();
    }
  }
  this->database = config.get<std::string>("postgresql.db-name");
  {
    size_t it = config.get("postgresql.connection-timeout", 12);
    this->timeout = std::chrono::seconds(it);
  }
  this->pool_size = config.get("postgresql.pool-size", 32);
}

void palm::orm::Query::load(const std::filesystem::path& root) {
  const std::lock_guard<std::mutex> lock(this->locker);
  for (const auto& it : std::filesystem::directory_iterator(root / "queries")) {
    const std::string file = it.path().string();
    BOOST_LOG_TRIVIAL(debug) << "load query file from " << file;
    boost::property_tree::ptree tree;
    boost::property_tree::read_ini(file, tree);
    this->trees[file] = tree;
  }
}

palm::orm::Schema::Schema(const std::filesystem::path& root,
                          Poco::Data::Session& db)
    : db(db) {
  const auto top = root / "migrations";

  {
    std::ifstream fs;
    std::ios_base::iostate mask = fs.exceptions() | std::ios::failbit;
    fs.exceptions(mask);
    fs.open(top / "initial-setup.sql");
    std::string sql((std::istreambuf_iterator<char>(fs)),
                    std::istreambuf_iterator<char>());
    this->db << sql;
  }

  const auto& query = palm::orm::Query::instance();
  const std::string sql_by_version = query.get("schema-migrations.by-version");
  const std::string sql_create = query.get("schema-migrations.create");
  for (const auto& it : std::filesystem::directory_iterator(top)) {
    const auto node = it.path();
    if (!std::filesystem::is_directory(node)) {
      continue;
    }
    BOOST_LOG_TRIVIAL(debug) << "load migration files from " << node;

    Migration mig;
    {
      std::string fn = node.filename();
      const size_t POS = 14;
      mig.version = boost::lexical_cast<long long>(fn.substr(0, POS));
      mig.name = fn.substr(POS + 1);
    }

    {
      std::ifstream fs;
      std::ios_base::iostate mask = fs.exceptions() | std::ios::failbit;
      fs.exceptions(mask);
      fs.open(node / "up.sql");
      mig.up = std::string((std::istreambuf_iterator<char>(fs)),
                           std::istreambuf_iterator<char>());
    }
    {
      std::ifstream fs;
      std::ios_base::iostate mask = fs.exceptions() | std::ios::failbit;
      fs.exceptions(mask);
      fs.open(node / "down.sql");
      mig.down = std::string((std::istreambuf_iterator<char>(fs)),
                             std::istreambuf_iterator<char>());
    }

    {
      boost::optional<Migration> cur;
      //   TODO

      //   this->db << sql_by_version, Poco::Data::Keywords::use(mig),
      //       Poco::Data::Keywords::into(cur);

      //   if (cur.is_initialized()) {
      //     if (cur->name != mig.name || cur->up != mig.up ||
      //         cur->down != mig.down) {
      //       std::stringstream ss;
      //       ss << "bad migration record " << cur->version;
      //       throw std::runtime_error(ss.str());
      //     }
      //   } else {
      //     BOOST_LOG_TRIVIAL(warning) << "can't found, save it";
      //     this->db << sql_create,
      //         Poco::Data::Keywords::use(mig.version, "version"),
      //         Poco::Data::Keywords::use(mig.name, "name"),
      //         Poco::Data::Keywords::use(mig.up, "up"),
      //         Poco::Data::Keywords::use(mig.down, "down");
      //   }
    }
  }
}

void palm::orm::Schema::migrate() {
  // TODO
  //   const palm::orm::Query& query = palm::orm::Query::instance();
  //   const std::string sql_all = query.get("schema-migrations.all");
  //   const std::string sql_set_run_on =
  //   query.get("schema-migrations.migrate");
  //   soci::rowset<palm::orm::Migration> rows = (this->db->prepare << sql_all);

  //   for (const auto& it : rows) {
  //     if (it.run_on) {
  //       continue;
  //     }
  //     {
  //       BOOST_LOG_TRIVIAL(info) << "run migration " << it;
  //       soci::transaction tr(*this->db);
  //       (*this->db) << it.up;
  //       (*this->db) << sql_set_run_on, soci::use(it);
  //       tr.commit();
  //     }
  //   }
}

void palm::orm::Schema::rollback() {
  // TODO
  //   const palm::orm::Query& query = palm::orm::Query::instance();

  //   boost::optional<Migration> cur;

  //   (*this->db) << query.get("schema-migrations.latest"), soci::into(cur);
  //   if (cur.is_initialized()) {
  //     BOOST_LOG_TRIVIAL(info) << "rollback migration " << (*cur);
  //     soci::transaction tr(*this->db);
  //     (*this->db) << cur->down;
  //     (*this->db) << query.get("schema-migrations.rollback"), soci::use(cur);
  //     tr.commit();
  //   } else {
  //     BOOST_LOG_TRIVIAL(info) << "database is empty";
  //   }
}

void palm::orm::Schema::status(std::ostream& out) {
  // TODO
  //   const palm::orm::Query& query = palm::orm::Query::instance();
  //   const std::string sql_all = query.get("schema-migrations.all");

  //   soci::rowset<palm::orm::Migration> rows = (this->db->prepare << sql_all);
  //   const auto flags = out.flags();
  //   out << std::setiosflags(std::ios::left);
  //   out << std::setw(14) << "VERSION"
  //       << " " << std::setw(32) << "NAME"
  //       << " "
  //       << "RUN ON" << std::endl;
  //   for (const auto& it : rows) {
  //     out << it.version << " " << std::setw(32) << it.name << " ";
  //     if (it.run_on.is_initialized()) {
  //       out << std::asctime(&it.run_on.get());
  //     } else {
  //       out << "Pending" << std::endl;
  //     }
  //   }
  //   out << std::setiosflags(flags);
}
