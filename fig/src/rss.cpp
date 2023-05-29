#include "palm/rss.hpp"

#include <boost/log/trivial.hpp>
#include <boost/property_tree/xml_parser.hpp>

#include <Poco/DateTime.h>
#include <Poco/DateTimeFormat.h>
#include <Poco/DateTimeFormatter.h>

std::string palm::rss::Channel::build(const std::string& home) const {
  boost::property_tree::ptree tree;
  {
    boost::property_tree::ptree rss;
    rss.put("<xmlattr>.version", "2.0");
    {
      boost::property_tree::ptree channel;
      channel.put("title", this->title);
      channel.put("description", this->description);
      channel.put("link", home + this->link);
      channel.put("copyright", this->copyright);
      {
        Poco::DateTime it(this->last_build_date);
        channel.put("lastBuildDate",
                    Poco::DateTimeFormatter::format(
                        it, Poco::DateTimeFormat::RFC1123_FORMAT));
      }
      {
        Poco::DateTime it(this->pub_date);
        channel.put("pubDate", Poco::DateTimeFormatter::format(
                                   it, Poco::DateTimeFormat::RFC1123_FORMAT));
      }

      if (this->ttl > std::chrono::minutes(1)) {
        channel.put("ttl", this->ttl.count());
      }

      for (const auto& it : this->items) {
        boost::property_tree::ptree item;
        item.put("title", it.title);
        item.put("description", it.description);
        item.put("link", home + it.link);
        item.put("guid", it.guid);
        item.put("guid.<xmlattr>.isPermaLink", true);
        {
          Poco::DateTime dt(it.pub_date);
          item.put("pubDate", Poco::DateTimeFormatter::format(
                                  dt, Poco::DateTimeFormat::RFC1123_FORMAT));
        }
        channel.add_child("item", item);
      }

      rss.put_child("channel", channel);
    }

    tree.put_child("rss", rss);
  }
  std::stringstream ss;
  boost::property_tree::xml_parser::write_xml(ss, tree);
  return ss.str();
}
