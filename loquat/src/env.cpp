#include "loquat/env.hpp"

#include <exception>
#include <fstream>

#include <tink/aead.h>
#include <tink/aead/aead_config.h>
#include <tink/aead/aes_gcm_key_manager.h>
#include <tink/binary_keyset_reader.h>
#include <tink/binary_keyset_writer.h>
#include <tink/cleartext_keyset_handle.h>
#include <tink/config.h>
#include <tink/jwt/jwt_key_templates.h>
#include <tink/util/status.h>

std::string loquat::Keyset::jwt_signature(const std::string& audience,
                                          const std::chrono::seconds& ttl) {
  auto keyset = this->load(crypto::tink::JwtHs512Template());
  return "";
}
std::optional<std::string> loquat::Keyset::verified_jwt(
    const std::string& token) {
  // TODO
  return std::nullopt;
}

std::unique_ptr<crypto::tink::KeysetHandle> loquat::Keyset::load(
    const google::crypto::tink::KeyTemplate& tpl) {
  const std::lock_guard<std::mutex> lock(this->_locker);

  const auto file = this->keyset();
  if (std::filesystem::exists(file)) {
    spdlog::debug("load keyset from {}", file.string());
    std::unique_ptr<std::ifstream> out =
        std::make_unique<std::ifstream>(file, std::ios_base::binary);
    auto reader_r = crypto::tink::BinaryKeysetReader::New(std::move(out));
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
      std::unique_ptr<std::ofstream> out =
          std::make_unique<std::ofstream>(file, std::ios_base::binary);
      auto writer_r = crypto::tink::BinaryKeysetWriter::New(std::move(out));
      this->check(writer_r);
      auto writer = std::move(writer_r.ValueOrDie());
      const auto status = keyset_handler->WriteNoSecret(writer.get());
      this->check(status);
    }
    return keyset_handler;
  }
}
