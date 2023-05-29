#include "coconut/postgresql.hpp"
#include "coconut/nut.hpp"

#include <cstdlib>

#include <spdlog/spdlog.h>

coconut::PostgreSql::PostgreSql(const toml::table& root) {
  this->host = root["host"].value_or("127.0.0.1");
  this->port = root["port"].value_or(5432);
  this->user = root["user"].value_or("postgres");
  this->password = root["password"].value<std::string>();
  this->name = root["name"].value<std::string>().value();
}

void coconut::PostgreSql::dump(const std::filesystem::path& target,
                               const size_t keep) const {
  const std::string cur = this->name + "-" + coconut::timestamp();
  const std::filesystem::path root = target / cur;
  {
    std::filesystem::create_directories(root);
    const std::string it = root.string();
    spdlog::debug("change workdir to {}", it);
    const auto ok = chdir(it.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("change to folder " + it);
    }
  }

  spdlog::info("dump postgresql://{}@{}:{}/{} to {}", this->user, this->host,
               this->port, this->name, root.string());
  std::stringstream dbs;
  dbs << "postgresql://" << this->user << ":" << this->password.value_or("")
      << "@" << this->host << ":" << this->port << "/" << this->name;

  {
    std::filesystem::path name("schema.sql");
    auto tmp = root / name;

    std::stringstream ss;
    ss << "pg_dump -O -s -w -d " << dbs.str() << " -f " << tmp.string();
    const auto cmd = ss.str();
    spdlog::debug("{}", cmd);
    const auto ok = std::system(cmd.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("backup postgresql schema");
    }
  }
  {
    std::filesystem::path name("data.dump");
    auto tmp = root / name;

    std::stringstream ss;
    ss << "pg_dump -Fc -O -a -w -d " << dbs.str() << " -f " << tmp.string();
    const auto cmd = ss.str();
    spdlog::debug("{}", cmd);
    const auto ok = std::system(cmd.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("backup postgresql data");
    }
  }
  {
    const std::string it = std::filesystem::absolute(target).string();
    spdlog::debug("change workdir to {}", it);
    const auto ok = chdir(it.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("change to folder " + it);
    }
    coconut::tar(cur);
  }

  spdlog::info(R"RAW(USAGE:
$ cd {0}
$ tar xf {1}.tar.xz
$ cd {1}
$ psql -h {2} -p {3} -U {4} -d {5} < schema.sql
$ pg_restore -Fc -h {2} -p {3} -U {4} -d {5} < data.dump )RAW",
               target.string(), cur, this->host, this->port, this->user,
               this->name);

  coconut::keep(target, keep);
}
