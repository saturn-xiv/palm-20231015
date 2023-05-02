#include "coconut/nut.hpp"

std::string coconut::timestamp() {
  const std::chrono::time_point<std::chrono::system_clock> now =
      std::chrono::system_clock::now();
  const std::time_t tc = std::chrono::system_clock::to_time_t(now);

  std::stringstream ss;
  ss << std::put_time(std::localtime(&tc), "%Y%m%d%H%M%S");
  return ss.str();
}

void coconut::tar(const std::filesystem::path& folder) {
  std::filesystem::path tar = folder;
  tar.replace_extension("tar");

  std::stringstream ss;
  ss << "tar --remove-files -cf " << tar.string() << " " << folder.string();
  const auto cmd = ss.str();
  spdlog::debug("{}", cmd);
  const auto ok = std::system(cmd.c_str());
  if (ok != EXIT_SUCCESS) {
    throw std::runtime_error("tar folder " + folder.string());
  }
  coconut::xz(tar);
}

void coconut::xz(const std::filesystem::path& file) {
  std::stringstream ss;
  ss << "xz -9 " << file.string();
  const auto cmd = ss.str();
  spdlog::debug("{}", cmd);
  const auto ok = std::system(cmd.c_str());
  if (ok != EXIT_SUCCESS) {
    throw std::runtime_error("compress file {}" + file.string());
  }
}

void coconut::keep(const std::filesystem::path& target, const size_t count) {
  std::vector<std::filesystem::path> items;
  for (const auto& it : std::filesystem::directory_iterator(target)) {
    const auto file = it.path();
    if (std::filesystem::is_regular_file(file)) {
      spdlog::debug("find file {}", file.string());
      items.push_back(file);
    }
  }
  std::sort(items.begin(), items.end(),
            [](const auto& a, const auto& b) -> bool {
              return std::filesystem::last_write_time(a) >
                     std::filesystem::last_write_time(b);
            });

  spdlog::info("find {} backup files", items.size());
  if (items.size() > count) {
    for (auto it = items.begin() + count; it != items.end(); ++it) {
      spdlog::warn("remove file {}", it->string());
      std::filesystem::remove(*it);
    }
  }
}

std::filesystem::path coconut::home(const std::filesystem::path& file) {
  const std::filesystem::path home = getenv("HOME");
  return home / file;
}
