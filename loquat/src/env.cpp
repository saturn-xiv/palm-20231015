#include "loquat/env.hpp"

#include <chrono>
#include <exception>
#include <fstream>

#include <tink/aead.h>
#include <tink/aead/aead_config.h>
#include <tink/aead/aes_gcm_key_manager.h>
#include <tink/binary_keyset_reader.h>
#include <tink/binary_keyset_writer.h>
#include <tink/cleartext_keyset_handle.h>
#include <tink/config.h>
#include <tink/jwt/internal/jwt_mac_impl.h>
#include <tink/jwt/internal/jwt_mac_internal.h>
#include <tink/jwt/jwt_key_templates.h>
#include <tink/jwt/jwt_validator.h>
#include <tink/jwt/raw_jwt.h>
#include <tink/util/status.h>

#define TOML_EXCEPTIONS 1
#include <toml.hpp>

loquat::Config::Config(const std::filesystem::path& file) {
  spdlog::info("load config from {}", file.string());
  std::ifstream in(file);
  const auto root = toml::parse(in);
  this->_port = root["port"].value_or(8080);
  this->_jwt_secret_key = root["jwt-secret-key"].value<std::string>();
  {
    const auto items = root["clients"].as_array();
    for (const auto& el : *items) {
      const auto it = el.as_string();
      const std::string id = it->get();
      this->_clients.push_back(id);
    }
    spdlog::debug("available clients: {}", absl::StrJoin(this->_clients, ", "));
  }
}

std::string loquat::Jwt::sign(const std::string& audience,
                              const std::chrono::seconds& ttl) {
  auto now = absl::Now();
  auto raw_r = crypto::tink::RawJwtBuilder()
                   .SetAudience(audience)
                   .SetNotBefore(now - absl::Seconds(1))
                   .SetIssuedAt(now)
                   .SetExpiration(now + absl::Seconds(ttl.count()))
                   .Build();
  this->check(raw_r);
  auto raw = std::move(raw_r.ValueOrDie());
  auto jwt = this->load();
  auto token_r = jwt->ComputeMacAndEncode(raw);
  this->check(token_r);
  auto token = std::move(token_r.ValueOrDie());
  return token;
}
std::optional<std::string> loquat::Jwt::verify(const std::string& token) {
  // TODO
  return std::nullopt;
}

std::unique_ptr<crypto::tink::JwtMac> loquat::Jwt::load() {
  auto keyset = this->Keyset::load(crypto::tink::JwtHs512Template());
  auto jwt_r = keyset->GetPrimitive<crypto::tink::JwtMac>();
  this->check(jwt_r);
  auto jwt = std::move(jwt_r.ValueOrDie());
  return jwt;
}

std::unique_ptr<crypto::tink::KeysetHandle> loquat::Keyset::load(
    const google::crypto::tink::KeyTemplate& tpl) {
  const std::lock_guard<std::mutex> lock(this->_locker);

  const auto file = this->keyset();
  if (std::filesystem::exists(file)) {
    spdlog::debug("load keyset from {}", file.string());

    if (std::filesystem::status(file).permissions() !=
        std::filesystem::perms::owner_read) {
      throw std::invalid_argument("key file too open");
    }

    std::unique_ptr<std::ifstream> in =
        std::make_unique<std::ifstream>(file, std::ios_base::binary);
    auto reader_r = crypto::tink::BinaryKeysetReader::New(std::move(in));
    this->check(reader_r);
    auto reader = std::move(reader_r.ValueOrDie());
    auto keyset_handle_r =
        crypto::tink::CleartextKeysetHandle::Read(std::move(reader));
    this->check(keyset_handle_r);
    auto keyset_handle = std::move(keyset_handle_r.ValueOrDie());
    return keyset_handle;

  } else {
    spdlog::warn("not exists, try to create {}", file.string());

    auto keyset_handle_r = crypto::tink::KeysetHandle::GenerateNew(tpl);
    this->check(keyset_handle_r);
    auto keyset_handler = std::move(keyset_handle_r.ValueOrDie());
    {
      std::unique_ptr<std::ofstream> out = std::make_unique<std::ofstream>();
      out->open(file, std::ios_base::binary);
      auto writer_r = crypto::tink::BinaryKeysetWriter::New(std::move(out));
      this->check(writer_r);
      auto writer = std::move(writer_r.ValueOrDie());
      const auto status = crypto::tink::CleartextKeysetHandle::Write(
          writer.get(), *keyset_handler.get());
      this->check(status);
    }
    std::filesystem::permissions(file, std::filesystem::perms::owner_read);
    return keyset_handler;
  }
}
