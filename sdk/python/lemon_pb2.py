# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lemon.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0blemon.proto\x12\rpalm.lemon.v1\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\"H\n\x11SiteLayoutRequest\x12\x0e\n\x06locale\x18\x01 \x01(\t\x12#\n\x05theme\x18\x02 \x01(\x0e\x32\x14.palm.lemon.v1.Theme\"\xd2\x02\n\x12SiteLayoutResponse\x12\x36\n\x0b\x63lean_white\x18\x01 \x01(\x0b\x32\x1f.palm.lemon.v1.CleanWhiteLayoutH\x00\x12+\n\x05\x64ocsy\x18\x02 \x01(\x0b\x32\x1a.palm.lemon.v1.DocsyLayoutH\x00\x12-\n\x06gantry\x18\x03 \x01(\x0b\x32\x1b.palm.lemon.v1.GantryLayoutH\x00\x12-\n\x06hinode\x18\x04 \x01(\x0b\x32\x1b.palm.lemon.v1.HinodeLayoutH\x00\x12\x33\n\tuniversal\x18\x05 \x01(\x0b\x32\x1e.palm.lemon.v1.UniversalLayoutH\x00\x12:\n\rx_corporation\x18\x06 \x01(\x0b\x32!.palm.lemon.v1.XCorporationLayoutH\x00\x42\x08\n\x06layout\"\x8d\x01\n\x0fSiteRssResponse\x12\x38\n\x05items\x18\x01 \x03(\x0b\x32).palm.lemon.v1.SiteRssResponse.ItemsEntry\x1a@\n\nItemsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12!\n\x05value\x18\x02 \x01(\x0b\x32\x12.palm.lemon.v1.Rss:\x02\x38\x01\"\x99\x01\n\x13SiteSitemapResponse\x12<\n\x05items\x18\x01 \x03(\x0b\x32-.palm.lemon.v1.SiteSitemapResponse.ItemsEntry\x1a\x44\n\nItemsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12%\n\x05value\x18\x02 \x01(\x0b\x32\x16.palm.lemon.v1.Sitemap:\x02\x38\x01\"#\n\x13SiteShowPageRequest\x12\x0c\n\x04slug\x18\x01 \x01(\t\"\x99\x01\n\x14SiteShowPageResponse\x12!\n\x04page\x18\x01 \x01(\x0b\x32\x13.palm.lemon.v1.Page\x12\x39\n\x07related\x18\x02 \x03(\x0b\x32(.palm.lemon.v1.SiteShowPageResponse.Link\x1a#\n\x04Link\x12\x0c\n\x04slug\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\"J\n\x13SiteHomePageRequest\x12\x0e\n\x06locale\x18\x01 \x01(\t\x12#\n\x05theme\x18\x02 \x01(\x0e\x32\x14.palm.lemon.v1.Theme\"\xe1\x02\n\x14SiteHomePageResponse\x12\x38\n\x0b\x63lean_white\x18\x01 \x01(\x0b\x32!.palm.lemon.v1.CleanWhiteHomePageH\x00\x12-\n\x05\x64ocsy\x18\x02 \x01(\x0b\x32\x1c.palm.lemon.v1.DocsyHomePageH\x00\x12/\n\x06gantry\x18\x03 \x01(\x0b\x32\x1d.palm.lemon.v1.GantryHomePageH\x00\x12/\n\x06hinode\x18\x04 \x01(\x0b\x32\x1d.palm.lemon.v1.HinodeHomePageH\x00\x12\x35\n\tuniversal\x18\x05 \x01(\x0b\x32 .palm.lemon.v1.UniversalHomePageH\x00\x12<\n\rx_corporation\x18\x06 \x01(\x0b\x32#.palm.lemon.v1.XCorporationHomePageH\x00\x42\t\n\x07payload\"\x12\n\x10\x43leanWhiteLayout\"\r\n\x0b\x44ocsyLayout\"\x0e\n\x0cGantryLayout\"\x0e\n\x0cHinodeLayout\"\x11\n\x0fUniversalLayout\"\x14\n\x12XCorporationLayout\"\x14\n\x12\x43leanWhiteHomePage\"\x0f\n\rDocsyHomePage\"\x10\n\x0eGantryHomePage\"\x10\n\x0eHinodeHomePage\"\x13\n\x11UniversalHomePage\"\x16\n\x14XCorporationHomePage\"\xc9\x01\n\x03Rss\x12\x0c\n\x04home\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12&\n\x05links\x18\t \x03(\x0b\x32\x17.palm.lemon.v1.Rss.Link\x1ah\n\x04Link\x12\x0c\n\x04path\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12.\n\nupdated_at\x18\t \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\xc4\x03\n\x07Sitemap\x12\x0c\n\x04home\x18\x01 \x01(\t\x12/\n\x06urlset\x18\x0b \x01(\x0b\x32\x1d.palm.lemon.v1.Sitemap.UrlSetH\x00\x12-\n\x05index\x18\x0c \x01(\x0b\x32\x1c.palm.lemon.v1.Sitemap.IndexH\x00\x1a\xf4\x01\n\x04Link\x12\x0c\n\x04path\x18\x01 \x01(\t\x12;\n\x0b\x63hange_freq\x18\x02 \x01(\x0e\x32&.palm.lemon.v1.Sitemap.Link.ChangeFreq\x12\x10\n\x08priority\x18\x03 \x01(\x02\x12.\n\nupdated_at\x18\t \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"_\n\nChangeFreq\x12\t\n\x05Never\x10\x00\x12\n\n\x06\x41lways\x10\x01\x12\n\n\x06Hourly\x10\x02\x12\t\n\x05\x44\x61ily\x10\x03\x12\n\n\x06Weekly\x10\x04\x12\x0b\n\x07Monthly\x10\x05\x12\n\n\x06Yearly\x10\x06\x1a\x34\n\x06UrlSet\x12*\n\x05links\x18\x01 \x03(\x0b\x32\x1b.palm.lemon.v1.Sitemap.Link\x1a\x16\n\x05Index\x12\r\n\x05links\x18\x01 \x03(\tB\x06\n\x04\x62ody\"#\n\x04Page\x12\x0c\n\x04slug\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t*[\n\x05Theme\x12\r\n\tUniversal\x10\x00\x12\x0e\n\nCleanWhite\x10\x01\x12\t\n\x05\x44ocsy\x10\x02\x12\n\n\x06Gantry\x10\x03\x12\n\n\x06Hinode\x10\x04\x12\x10\n\x0cXCorporation\x10\x05\x32\x92\x03\n\x04Site\x12O\n\x06Layout\x12 .palm.lemon.v1.SiteLayoutRequest\x1a!.palm.lemon.v1.SiteLayoutResponse\"\x00\x12\x42\n\x03Rss\x12\x19.google.protobuf.Duration\x1a\x1e.palm.lemon.v1.SiteRssResponse\"\x00\x12G\n\x07Sitemap\x12\x16.google.protobuf.Empty\x1a\".palm.lemon.v1.SiteSitemapResponse\"\x00\x12U\n\x08ShowPage\x12\".palm.lemon.v1.SiteShowPageRequest\x1a#.palm.lemon.v1.SiteShowPageResponse\"\x00\x12U\n\x08HomePage\x12\".palm.lemon.v1.SiteHomePageRequest\x1a#.palm.lemon.v1.SiteHomePageResponse\"\x00\x42/\n+com.github.saturn_xiv.palm.plugins.lemon.v1P\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'lemon_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n+com.github.saturn_xiv.palm.plugins.lemon.v1P\001'
  _SITERSSRESPONSE_ITEMSENTRY._options = None
  _SITERSSRESPONSE_ITEMSENTRY._serialized_options = b'8\001'
  _SITESITEMAPRESPONSE_ITEMSENTRY._options = None
  _SITESITEMAPRESPONSE_ITEMSENTRY._serialized_options = b'8\001'
  _THEME._serialized_start=2388
  _THEME._serialized_end=2479
  _SITELAYOUTREQUEST._serialized_start=124
  _SITELAYOUTREQUEST._serialized_end=196
  _SITELAYOUTRESPONSE._serialized_start=199
  _SITELAYOUTRESPONSE._serialized_end=537
  _SITERSSRESPONSE._serialized_start=540
  _SITERSSRESPONSE._serialized_end=681
  _SITERSSRESPONSE_ITEMSENTRY._serialized_start=617
  _SITERSSRESPONSE_ITEMSENTRY._serialized_end=681
  _SITESITEMAPRESPONSE._serialized_start=684
  _SITESITEMAPRESPONSE._serialized_end=837
  _SITESITEMAPRESPONSE_ITEMSENTRY._serialized_start=769
  _SITESITEMAPRESPONSE_ITEMSENTRY._serialized_end=837
  _SITESHOWPAGEREQUEST._serialized_start=839
  _SITESHOWPAGEREQUEST._serialized_end=874
  _SITESHOWPAGERESPONSE._serialized_start=877
  _SITESHOWPAGERESPONSE._serialized_end=1030
  _SITESHOWPAGERESPONSE_LINK._serialized_start=995
  _SITESHOWPAGERESPONSE_LINK._serialized_end=1030
  _SITEHOMEPAGEREQUEST._serialized_start=1032
  _SITEHOMEPAGEREQUEST._serialized_end=1106
  _SITEHOMEPAGERESPONSE._serialized_start=1109
  _SITEHOMEPAGERESPONSE._serialized_end=1462
  _CLEANWHITELAYOUT._serialized_start=1464
  _CLEANWHITELAYOUT._serialized_end=1482
  _DOCSYLAYOUT._serialized_start=1484
  _DOCSYLAYOUT._serialized_end=1497
  _GANTRYLAYOUT._serialized_start=1499
  _GANTRYLAYOUT._serialized_end=1513
  _HINODELAYOUT._serialized_start=1515
  _HINODELAYOUT._serialized_end=1529
  _UNIVERSALLAYOUT._serialized_start=1531
  _UNIVERSALLAYOUT._serialized_end=1548
  _XCORPORATIONLAYOUT._serialized_start=1550
  _XCORPORATIONLAYOUT._serialized_end=1570
  _CLEANWHITEHOMEPAGE._serialized_start=1572
  _CLEANWHITEHOMEPAGE._serialized_end=1592
  _DOCSYHOMEPAGE._serialized_start=1594
  _DOCSYHOMEPAGE._serialized_end=1609
  _GANTRYHOMEPAGE._serialized_start=1611
  _GANTRYHOMEPAGE._serialized_end=1627
  _HINODEHOMEPAGE._serialized_start=1629
  _HINODEHOMEPAGE._serialized_end=1645
  _UNIVERSALHOMEPAGE._serialized_start=1647
  _UNIVERSALHOMEPAGE._serialized_end=1666
  _XCORPORATIONHOMEPAGE._serialized_start=1668
  _XCORPORATIONHOMEPAGE._serialized_end=1690
  _RSS._serialized_start=1693
  _RSS._serialized_end=1894
  _RSS_LINK._serialized_start=1790
  _RSS_LINK._serialized_end=1894
  _SITEMAP._serialized_start=1897
  _SITEMAP._serialized_end=2349
  _SITEMAP_LINK._serialized_start=2019
  _SITEMAP_LINK._serialized_end=2263
  _SITEMAP_LINK_CHANGEFREQ._serialized_start=2168
  _SITEMAP_LINK_CHANGEFREQ._serialized_end=2263
  _SITEMAP_URLSET._serialized_start=2265
  _SITEMAP_URLSET._serialized_end=2317
  _SITEMAP_INDEX._serialized_start=2319
  _SITEMAP_INDEX._serialized_end=2341
  _PAGE._serialized_start=2351
  _PAGE._serialized_end=2386
  _SITE._serialized_start=2482
  _SITE._serialized_end=2884
# @@protoc_insertion_point(module_scope)