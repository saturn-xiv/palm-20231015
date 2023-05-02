#include "coconut/mysql.hpp"
#include "coconut/nut.hpp"

coconut::MySql::MySql(const toml::table& root) {
  this->host = root["host"].value_or("127.0.0.1");
  this->port = root["port"].value_or(3306);
  this->user = root["user"].value_or("root");
  this->password = root["password"].value<std::string>();
  this->name = root["name"].value<std::string>().value();
}

void coconut::MySql::dump(const std::filesystem::path& target,
                          const size_t keep) const {
  {
    const std::string it = target.string();
    spdlog::debug("change workdir to {}", it);
    const auto ok = chdir(it.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("change to folder {}" + it);
    }
  }

  std::filesystem::path name(this->name + "-" + coconut::timestamp());
  name.replace_extension("sql");

  auto sql = target / name;

  spdlog::info("dump mysql://{}@{}:{}/{} to {}", this->user, this->host,
               this->port, this->name, sql.string());
  {
    std::stringstream ss;
    ss << "mysqldump"
       << " -h " << this->host << " -P " << this->port << " -u " << this->user;
    if (this->password) {
      ss << " -p" << this->password.value();
    }
    ss << " " << this->name << " > " << sql.string();
    const auto cmd = ss.str();
    spdlog::debug("{}", cmd);
    const auto ok = std::system(cmd.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("backup mysql");
    }
  }
  coconut::xz(sql);

  spdlog::info(R"RAW(USAGE:
$ cd {0}
$ unxz {1}.xz
$ mysql -h {2} -P {3} -u {4} -p {5} < {1} )RAW",
               target.string(), sql.string(), this->host, this->port,
               this->user, this->name);

  coconut::keep(target, keep);
}
