#include "palm/s3.hpp"
#include "palm/utils.hpp"

using namespace std::chrono_literals;

palm::minio::Config::Config(const toml::table& node) {
  this->_endpoint = node["endpoint"].value<std::string>().value();
  this->_access_key = node["access-key"].value<std::string>().value();
  this->_secret_key = node["secret-key"].value<std::string>().value();
  this->_namespace = node["namespace"].value<std::string>().value();
}

std::vector<std::string> palm::minio::Client::list_buckets() {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);
  ::minio::s3::ListBucketsResponse res = client.ListBuckets();
  if (res) {
    std::vector<std::string> items;
    for (const auto& bucket : res.buckets) {
      spdlog::debug("find bucket: {}", bucket.name);
      if (bucket.name.starts_with(this->_namespace)) {
        items.push_back(bucket.name.substr(this->_namespace.length()));
      }
    }
    return items;
  }

  const std::string err = res.Error().String();
  spdlog::error("unable to list buckets: {}", err);
  throw std::runtime_error(err);
}

std::vector<std::string> palm::minio::Client::list_objects(
    const std::string& bucket) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);

  ::minio::s3::ListObjectsArgs args;
  args.bucket = this->bucket(bucket);
  ::minio::s3::ListObjectsResult result = client.ListObjects(args);
  std::vector<std::string> items;
  for (; result; result++) {
    ::minio::s3::Item item = *result;
    if (item) {
      items.push_back(item.name);
    } else {
      spdlog::error("list objects: {}", item.Error().String());
    }
  }
  return items;
}

// FIXME always return true
bool palm::minio::Client::is_bucket_exists(const std::string& bucket) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);

  ::minio::s3::BucketExistsArgs args;
  args.bucket = this->bucket(bucket);

  ::minio::s3::BucketExistsResponse res = client.BucketExists(args);

  if (res) {
    spdlog::warn("{} {}", args.bucket, res.exist);
    return res.exist;
  } else {
    const std::string err = res.Error().String();
    spdlog::error("unable to do bucket existence check: {}", err);
    throw std::runtime_error(err);
  }
}

std::map<std::string, std::string> palm::minio::Client::get_bucket_tags(
    const std::string& bucket) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);
  ::minio::s3::GetBucketTagsArgs args;
  args.bucket = this->bucket(bucket);

  ::minio::s3::GetBucketTagsResponse res = client.GetBucketTags(args);

  if (res) {
    std::map<std::string, std::string> items;
    for (auto& [key, value] : res.tags) {
      items[key] = value;
    }
    return items;
  } else {
    const std::string err = res.Error().String();
    spdlog::error("unable to get bucket tags: {}", err);
    throw std::runtime_error(err);
  }
}
void palm::minio::Client::create_bucket(
    const std::string& bucket, const std::map<std::string, std::string> tags,
    bool is_public) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);

  ::minio::s3::MakeBucketArgs args;
  args.bucket = this->bucket(bucket);
  ::minio::s3::MakeBucketResponse res = client.MakeBucket(args);

  if (!res) {
    const std::string err = res.Error().String();
    spdlog::error("unable to create bucket: {}", err);
    throw std::runtime_error(err);
  }

  if (is_public) {
    ::minio::s3::SetBucketPolicyArgs args;
    args.bucket = this->bucket(bucket);
    // FIXME
    args.policy = R"policy(
    {
        "Version": "2023-11-16",
        "Statement": [
            {
                "Action": ["s3:GetBucketLocation"],
                "Effect": "Allow",
                "Principal": {
                    "AWS": ["*"]
                },
                "Resource": ["arn:aws:s3:::"]
            },
            {
                "Action": ["s3:GetObject"],
                "Effect": "Allow",
                "Principal": {
                    "AWS": ["*"]
                },
                "Resource": ["arn:aws:s3:::*"]
            }
        ]
    }
)policy";

    ::minio::s3::SetBucketPolicyResponse res = client.SetBucketPolicy(args);

    if (!res) {
      const std::string err = res.Error().String();
      spdlog::error("unable to set a public download policy: {}", err);
      throw std::runtime_error(err);
    }
  }

  if (tags.size() > 0) {
    ::minio::s3::SetBucketTagsArgs args;
    args.bucket = this->bucket(bucket);
    for (const auto& it : tags) {
      args.tags[it.first] = it.second;
    }

    ::minio::s3::SetBucketTagsResponse res = client.SetBucketTags(args);

    if (!res) {
      const std::string err = res.Error().String();
      spdlog::error("unable to do set bucket tags {}", err);
      throw std::runtime_error(err);
    }
  }
}
void palm::minio::Client::remove_bucket(const std::string& bucket) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);

  ::minio::s3::RemoveBucketArgs args;
  args.bucket = this->bucket(bucket);
  ::minio::s3::RemoveBucketResponse res = client.RemoveBucket(args);
  if (res) {
    return;
  }
  const std::string err = res.Error().String();
  spdlog::error("unable to remove bucket: {}", err);
  throw std::runtime_error(err);
}
void palm::minio::Client::remove_object(const std::string& bucket,
                                        const std::string& object) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);
  ::minio::s3::RemoveObjectArgs args;
  args.bucket = this->bucket(bucket);
  args.object = object;

  ::minio::s3::RemoveObjectResponse res = client.RemoveObject(args);

  if (res) {
    return;
  }
  const std::string err = res.Error().String();
  spdlog::error("unable to remove object: {}", err);
  throw std::runtime_error(err);
}

std::string palm::minio::Client::get_object_url(const std::string& bucket,
                                                const std::string& object) {
  return this->_endpoint + "/" + this->bucket(bucket) + "/" + object;
}
std::map<std::string, std::string> palm::minio::Client::get_object_tags(
    const std::string& bucket, const std::string& object) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);
  ::minio::s3::GetObjectTagsArgs args;
  args.bucket = this->bucket(bucket);
  args.object = this->bucket(object);

  ::minio::s3::GetObjectTagsResponse res = client.GetObjectTags(args);

  if (res) {
    std::map<std::string, std::string> items;
    for (auto& [key, value] : res.tags) {
      items[key] = value;
    }
    return items;
  }

  const std::string err = res.Error().String();
  spdlog::error("unable to get object tags: {}", err);
  throw std::runtime_error(err);
}
std::string palm::minio::Client::get_presigned_object_url(
    const std::string& bucket, const std::string& object,
    const std::chrono::seconds& ttl) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);
  ::minio::s3::GetPresignedObjectUrlArgs args;
  args.bucket = this->bucket(bucket);
  args.object = object;
  args.method = ::minio::http::Method::kGet;
  args.expiry_seconds = ttl.count();
  ::minio::s3::GetPresignedObjectUrlResponse res =
      client.GetPresignedObjectUrl(args);

  if (res) {
    return res.url;
  }
  const std::string err = res.Error().String();
  spdlog::error("unable to get presigned object url: {}", err);
  throw std::runtime_error(err);
}

std::string palm::minio::Client::put_object(
    const std::string& bucket, const std::filesystem::path& file,
    const std::map<std::string, std::string> tags) {
  ::minio::s3::Client client(this->_base_url, &this->_credential_provider);
  const std::string object = palm::uuid() + file.extension().string();
  spdlog::info("upload {} to {}/{}", file.string(), bucket, object);
  {
    std::ifstream ifs(file);

    ::minio::s3::PutObjectArgs args(ifs, std::filesystem::file_size(file), 0);
    args.bucket = this->bucket(bucket);
    args.object = object;
    ::minio::s3::PutObjectResponse res = client.PutObject(args);

    if (!res) {
      const std::string err = res.Error().String();
      spdlog::error("unable to do put object: {}", err);
      throw std::runtime_error(err);
    }
  }

  if (tags.size() > 0) {
    // FIXME not work
    ::minio::s3::SetObjectTagsArgs args;
    args.bucket = this->bucket(bucket);
    args.object = object;
    for (const auto& it : tags) {
      args.tags[it.first] = it.second;
    }

    ::minio::s3::SetObjectTagsResponse res = client.SetObjectTags(args);

    if (res) {
      const std::string err = res.Error().String();
      spdlog::error("unable to do set object tags: {}", err);
      throw std::runtime_error(err);
    }
  }

  return object;
}
