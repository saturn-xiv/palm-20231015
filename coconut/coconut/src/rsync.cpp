#include "coconut/rsync.hpp"
#include "coconut/nut.hpp"

coconut::Rsync::Rsync(const toml::table& root) {
  this->host = root["host"].value<std::string>();
  this->port = root["port"].value_or(22);
  this->user = root["user"].value_or("root");
  this->password = root["password"].value<std::string>();
  this->source = root["source"].value<std::string>().value();

  {
    std::optional<std::string> key = root["key"].value<std::string>();
    this->set_key(key);
  }
}
void coconut::Rsync::set_key(std::optional<std::string> key) {
  if (key) {
    this->key = key.value();
  } else {
    const auto home = coconut::home(".ssh");
    for (const auto& it : {"id_ed25519", "id_rsa"}) {
      const auto file = home / it;
      if (std::filesystem::is_regular_file(file)) {
        this->key = file;
        break;
      }
    }
  }
}

void coconut::Rsync::dump(const std::filesystem::path& target,
                          const size_t keep) const {
  const std::string cur = std::filesystem::path(this->source).stem().string() +
                          "-" + coconut::timestamp();
  const auto root = target / cur;
  {
    const std::string it = target.string();
    spdlog::debug("change workdir to {}", it);
    const auto ok = chdir(it.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("switch to folder " + it);
    }
  }

  if (this->host) {
    const auto host = this->host.value();
    std::stringstream ss;

    if (this->password) {
      ss << "sshpass -p " << this->password.value()
         << " rsync -a -z -q -e 'ssh -o StrictHostKeyChecking=yes -p "
         << this->port << " -l " << this->user << "' ";
    } else {
      ss << "rsync -a -z -q -e 'ssh -o StrictHostKeyChecking=yes -p "
         << this->port << " -l " << this->user << " -i "
         << this->key.value_or("id_rsa").string() << "' ";
    }
    ss << host << ":" << this->source << " " << root.string();
    const auto cmd = ss.str();
    spdlog::debug("{}", cmd);
    const auto ok = std::system(cmd.c_str());
    if (ok != EXIT_SUCCESS) {
      throw std::runtime_error("backup " + host + ":" + this->source);
    }
  } else {
    spdlog::info("copy folder {} to {}", this->source, root.string());
    std::filesystem::copy(this->source, root);
  }

  coconut::tar(cur);
  coconut::keep(target, keep);
}
