#include "palm/minio.hpp"

#include <boost/date_time/local_time/local_time.hpp>
#include <boost/log/trivial.hpp>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_generators.hpp>
#include <boost/uuid/uuid_io.hpp>

#include <Poco/URI.h>

#define PALM_MINIO_OPEN_CLIENT(x)                                        \
  minio::s3::BaseUrl url(x->_host, x->_https);                           \
  url.port = x->_port;                                                   \
  minio::creds::StaticProvider provider(x->_access_key, x->_secret_key); \
  minio::s3::Client client = minio::s3::Client(url, &provider);

#define PALM_MINIO_CHECK_RESPONSE(x)                 \
  if (!x) {                                          \
    throw std::invalid_argument(x.Error().String()); \
  }

palm::Minio::Minio(const toml::table& root) {
  this->_host = root["host"].value_or("127.0.0.1");
  this->_port = root["port"].value_or(9000);
  this->_https = root["https"].value_or(false);
  this->_access_key = root["access-key"].value<std::string>().value();
  this->_secret_key = root["secret-key"].value<std::string>().value();
}

palm::Minio::Minio(const std::filesystem::path& file) {
  BOOST_LOG_TRIVIAL(info) << "load minio config from " << file.string();

  std::ifstream fd(file);
  const nlohmann::json js = nlohmann::json::parse(fd);
  {
    const std::string url = js["url"].get<std::string>();
    Poco::URI uri(url);
    this->_https = uri.getScheme() == "https";
    this->_port = uri.getPort();
    this->_host = uri.getHost();
  }

  this->_access_key = js["accessKey"].get<std::string>();
  this->_secret_key = js["secretKey"].get<std::string>();
}

void palm::Minio::remove(const std::string& bucket,
                         const std::string& name) const {
  BOOST_LOG_TRIVIAL(info) << "remove file " << bucket << "/" << name;
  PALM_MINIO_OPEN_CLIENT(this)

  minio::s3::RemoveObjectArgs args;
  args.bucket = bucket;
  args.object = name;

  minio::s3::RemoveObjectResponse response = client.RemoveObject(args);
  PALM_MINIO_CHECK_RESPONSE(response)
}

std::string palm::Minio::get(const std::string& bucket, const std::string& name,
                             const std::chrono::seconds& ttl) const {
  PALM_MINIO_OPEN_CLIENT(this)

  minio::s3::GetPresignedObjectUrlArgs args;
  args.bucket = bucket;
  args.object = name;
  args.method = minio::http::Method::kGet;
  args.expiry_seconds = ttl.count();
  minio::s3::GetPresignedObjectUrlResponse response =
      client.GetPresignedObjectUrl(args);

  PALM_MINIO_CHECK_RESPONSE(response)

  return response.url;
}

std::string palm::Minio::year_month() {
  // TODO cpp20 format
  // const auto now = std::chrono::system_clock::now();
  // std::cout << std::format("{:%Y}-{:%m}", now);
  const auto today = boost::posix_time::second_clock::local_time().date();
  boost::gregorian::date_facet* df = new boost::gregorian::date_facet("%Y-%m");
  std::stringstream ss;
  ss.imbue(std::locale{std::cout.getloc(), df});
  ss << today;
  return ss.str();
}

std::pair<std::string, std::string> palm::Minio::content_type(
    const std::filesystem::path& file) {
  const auto ext = file.extension();
  boost::uuids::uuid uid = boost::uuids::random_generator()();
  std::filesystem::path remote(boost::uuids::to_string(uid));
  remote.replace_extension(ext);

  // FIXME use /etc/mime.types
  std::string content_type = "application/octet-stream";
  if (ext == ".png") {
    content_type = "image/png";
  } else if (ext == ".jpg" || ext == ".jpeg") {
    content_type = "image/jpeg";
  } else if (ext == ".svg") {
    content_type = "image/svg+xml";
  } else if (ext == ".txt") {
    content_type = "text/plain";
  } else if (ext == ".csv") {
    content_type = "text/csv";
  } else if (ext == ".html" || ext == ".htm") {
    content_type = "text/html";
  } else if (ext == ".mp4") {
    content_type = "video/mp4";
  } else if (ext == ".pdf") {
    content_type = "application/pdf";
  } else if (ext == ".zip") {
    content_type = "application/zip";
  }
  std::pair<std::string, std::string> it(remote.string(), content_type);
  return it;
}

std::string palm::Minio::upload(const std::string& bucket,
                                const std::filesystem::path& file) const {
  const auto remote = content_type(file);
  BOOST_LOG_TRIVIAL(info) << "upload file " << file.string() << " to " << bucket
                          << "/" << remote.first;
  PALM_MINIO_OPEN_CLIENT(this)

  minio::s3::UploadObjectArgs args;
  args.bucket = bucket;
  args.object = remote.first;
  args.filename = file.string();
  args.content_type = remote.second;
  minio::s3::UploadObjectResponse response = client.UploadObject(args);

  PALM_MINIO_CHECK_RESPONSE(response)

  return remote.first;
}

bool palm::Minio::is_bucket_exist(const std::string& name) const {
  PALM_MINIO_OPEN_CLIENT(this)

  minio::s3::BucketExistsArgs args;
  args.bucket = name;
  minio::s3::BucketExistsResponse response = client.BucketExists(args);

  PALM_MINIO_CHECK_RESPONSE(response)

  return response.exist;
}
void palm::Minio::create_bucket(const std::string& name) const {
  BOOST_LOG_TRIVIAL(info) << "create bucket " << name;
  PALM_MINIO_OPEN_CLIENT(this)

  minio::s3::MakeBucketArgs args;
  args.bucket = name;
  minio::s3::MakeBucketResponse response = client.MakeBucket(args);

  PALM_MINIO_CHECK_RESPONSE(response)
}

std::vector<std::string> palm::Minio::buckets() const {
  PALM_MINIO_OPEN_CLIENT(this)

  minio::s3::ListBucketsResponse response = client.ListBuckets();
  std::vector<std::string> items;

  PALM_MINIO_CHECK_RESPONSE(response)

  for (const auto& it : response.buckets) {
    items.push_back(it.name);
  }
  return items;
}
