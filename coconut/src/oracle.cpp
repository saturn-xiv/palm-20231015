#include "coconut/oracle.hpp"
#include "coconut/nut.hpp"

#include <cstdlib>

#include <spdlog/spdlog.h>

coconut::Oracle::Oracle(const toml::table& root) {
  this->sid = root["sid"].value_or("orclcdb");
  this->user = root["user"].value<std::string>().value();
  this->password = root["password"].value<std::string>().value();
  spdlog::warn(
      R"RAW(please make sure: select directory_path from dba_directories where directory_name='DATA_PUMP_DIR')RAW");
  this->directory_path = root["directory-path"].value<std::string>().value();
}

void coconut::Oracle::dump(const std::filesystem::path& target,
                           const size_t keep) const {
  const std::string cur = this->sid + "-" + coconut::timestamp();

  std::filesystem::path dmp(cur);
  dmp.replace_extension("dmp");
  std::filesystem::path log(cur);
  log.replace_extension("exp.log");

  spdlog::info("dump oracle://{}@:127.0.0.1:1521/{} to {}/{}", this->user,
               this->sid, this->directory_path, cur);
  {
    std::stringstream ss;
    ss << "expdp " << this->user << "/" << this->password << " full=Y "
       << " dumpfile=" << dmp.string() << " logfile=" << log.string();
    const auto cmd = ss.str();
    spdlog::debug("{}", cmd);
    const auto ok = std::system(cmd.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("backup oracle to " + this->directory_path);
    }
  }

  {
    const auto root = target / cur;
    std::filesystem::create_directories(root);

    for (const auto& it : {dmp, log}) {
      const auto file = this->directory_path / it;
      spdlog::info("move {}  into {}", file.string(), root.string());
      std::filesystem::copy(file, root);
      std::filesystem::remove(file);
    }
  }
  {
    const std::string it = target.string();
    spdlog::debug("change workdir to {}", it);
    const auto ok = chdir(it.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("change to folder " + it);
    }
  }

  coconut::tar(cur);

  spdlog::info(R"RAW(USAGE:
$ cd {0}
$ tar xf {1}.tar.xz
$ cp -v {1}/{1}.dmp {2}
$ impdp "{3}/CHANGE-TO-PASSWORD" dumpfile={1}.dmp logfile={1}.imp.log schemas={3} REMAP_SCHEMA={3}:CHANGE-TO-NEW-USER )RAW",
               target.string(), cur, this->directory_path, this->user);

  coconut::keep(target, keep);
}
