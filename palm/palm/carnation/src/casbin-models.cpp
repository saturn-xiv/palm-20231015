#include "carnation/casbin.hpp"

#include <boost/algorithm/string.hpp>

std::optional<carnation::models::policy::New>
carnation::models::policy::New::from_line(const std::string& p_type,
                                          const std::vector<std::string> rule) {
  carnation::models::policy::New it;
  {
    const std::string s = boost::trim_copy(p_type);
    if (s.empty()) {
      spdlog::error("empty ptype");
      return std::nullopt;
    }
    it.p_type = s;
  }
  if (rule.empty()) {
    spdlog::error("empty rule");
    return std::nullopt;
  }

  {
    const std::string s = boost::trim_copy(rule[0]);
    if (s.empty()) {
      spdlog::error("empty first line");
      return std::nullopt;
    }
    it.v0 = s;
  }

  if (rule.size() > 1) {
    it.v1 = boost::trim_copy(rule[1]);
  }

  if (rule.size() > 2) {
    it.v2 = boost::trim_copy(rule[2]);
  }

  if (rule.size() > 3) {
    it.v3 = boost::trim_copy(rule[3]);
  }

  if (rule.size() > 4) {
    it.v4 = boost::trim_copy(rule[4]);
  }

  if (rule.size() > 5) {
    it.v5 = boost::trim_copy(rule[5]);
  }
  if (rule.size() > 6) {
    spdlog::warn("rule is too big({})", rule.size());
  }
  return {it};
}

std::vector<std::string> carnation::models::policy::Item::to_line() const {
  std::vector<std::string> line;
  line.push_back(this->v0);

  if (this->v1.empty()) {
    return line;
  }
  line.push_back(this->v1);

  if (this->v2.empty()) {
    return line;
  }
  line.push_back(this->v2);

  if (this->v3.empty()) {
    return line;
  }
  line.push_back(this->v3);

  if (this->v4.empty()) {
    return line;
  }
  line.push_back(this->v4);

  if (this->v5.empty()) {
    return line;
  }
  line.push_back(this->v5);
  return line;
}

// https://github.com/casbin-rs/diesel-adapter/blob/master/src/adapter.rs#L93
std::optional<std::pair<bool, std::vector<std::string>>>
carnation::models::policy::Item::to_filtered_line(
    casbin::Filter* filter) const {
  bool is_filtered = true;
  auto policy = this->to_line();

  if (boost::starts_with(this->p_type, "p")) {
    for (std::vector<std::string>::size_type i = 0; i != filter->P.size();
         i++) {
      const auto rule = filter->P[i];
      if (!rule.empty() && rule != policy[i]) {
        is_filtered = false;
      }
    }

    std::pair<bool, std::vector<std::string>> it;
    it.first = is_filtered;
    it.second = policy;
    return {it};
  }

  if (boost::starts_with(this->p_type, "g")) {
    for (std::vector<std::string>::size_type i = 0; i != filter->G.size();
         i++) {
      const auto rule = filter->G[i];
      if (!rule.empty() && rule != policy[i]) {
        is_filtered = false;
      }
    }

    std::pair<bool, std::vector<std::string>> it;
    it.first = is_filtered;
    it.second = policy;
    return {it};
  }

  return std::nullopt;
}
