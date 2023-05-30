#include "palm/sitemap.hpp"

// #include <boost/log/trivial.hpp>
// #include <boost/property_tree/xml_parser.hpp>

// #include <Poco/DateTime.h>
// #include <Poco/DateTimeFormat.h>
// #include <Poco/DateTimeFormatter.h>

// std::string palm::sitemap::SitemapIndex::build(const std::string& home) const {
//   boost::property_tree::ptree tree;
//   {
//     boost::property_tree::ptree root;

//     root.put("<xmlattr>.xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

//     for (const auto& it : this->items) {
//       boost::property_tree::ptree item;
//       item.put("loc", home + it.loc);
//       if (it.last_mod.has_value()) {
//         Poco::DateTime t(it.last_mod.value());
//         item.put("lastmod", Poco::DateTimeFormatter::format(
//                                 t, Poco::DateTimeFormat::ISO8601_FORMAT));
//       }
//       root.add_child("sitemap", item);
//     }

//     tree.put_child("sitemapindex", root);
//   }
//   std::stringstream ss;
//   boost::property_tree::xml_parser::write_xml(ss, tree);
//   return ss.str();
// }

// std::string palm::sitemap::UrlSet::build(const std::string& home) const {
//   boost::property_tree::ptree tree;
//   {
//     boost::property_tree::ptree root;

//     root.put("<xmlattr>.xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

//     for (const auto& it : this->items) {
//       boost::property_tree::ptree item;
//       item.put("loc", home + it.loc);
//       if (it.last_mod.has_value()) {
//         Poco::DateTime t(it.last_mod.value());
//         item.put("lastmod", Poco::DateTimeFormatter::format(
//                                 t, Poco::DateTimeFormat::ISO8601_FORMAT));
//       }
//       if (it.change_freq.has_value()) {
//         const std::string k = "changefreq";
//         switch (it.change_freq.value()) {
//           case palm::sitemap::ChangeFreq::Always:
//             item.put(k, "always");
//             break;
//           case palm::sitemap::ChangeFreq::Hourly:
//             item.put(k, "hourly");
//             break;
//           case palm::sitemap::ChangeFreq::Daily:
//             item.put(k, "daily");
//             break;
//           case palm::sitemap::ChangeFreq::Weekly:
//             item.put(k, "weekly");
//             break;
//           case palm::sitemap::ChangeFreq::Monthly:
//             item.put(k, "monthly");
//             break;
//           case palm::sitemap::ChangeFreq::Yearly:
//             item.put(k, "yearly");
//             break;
//           case palm::sitemap::ChangeFreq::Never:
//             item.put(k, "never");
//             break;
//         }
//       }
//       if (it.priority.has_value()) {
//         const auto priority = it.priority.value();
//         if (priority > 0.0 && priority < 1.0) {
//           std::stringstream ss;
//           ss << std::fixed << std::setprecision(1) << priority;
//           item.put("priority", ss.str());
//         }
//       }
//       root.add_child("url", item);
//     }

//     tree.put_child("urlset", root);
//   }
//   std::stringstream ss;
//   boost::property_tree::xml_parser::write_xml(ss, tree);
//   return ss.str();
// }
