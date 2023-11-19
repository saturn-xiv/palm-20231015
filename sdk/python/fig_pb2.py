# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto
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
import nut_pb2 as nut__pb2
import auth_pb2 as auth__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\tfig.proto\x12\x0bpalm.fig.v1\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\tnut.proto\x1a\nauth.proto\"\x96\x02\n\x19IndexNotificationResponse\x12:\n\x05items\x18\x01 \x03(\x0b\x32+.palm.fig.v1.IndexNotificationResponse.Item\x12+\n\npagination\x18\t \x01(\x0b\x32\x17.palm.nut.v1.Pagination\x1a\x8f\x01\n\x04Item\x12\'\n\x05\x65mail\x18\x01 \x01(\x0b\x32\x16.palm.fig.v1.EmailTaskH\x00\x12#\n\x03sms\x18\x02 \x01(\x0b\x32\x14.palm.fig.v1.SmsTaskH\x00\x12.\n\ncreated_at\x18\x13 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\t\n\x07message\"\xb9\x02\n\x16LeaveWordIndexResponse\x12\x37\n\x05items\x18\x01 \x03(\x0b\x32(.palm.fig.v1.LeaveWordIndexResponse.Item\x12+\n\npagination\x18\t \x01(\x0b\x32\x17.palm.nut.v1.Pagination\x1a\xb8\x01\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04lang\x18\x02 \x01(\t\x12\n\n\x02ip\x18\x03 \x01(\t\x12*\n\x07\x63ontent\x18\x08 \x01(\x0b\x32\x19.palm.nut.v1.MediaContent\x12.\n\nupdated_at\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12.\n\ncreated_at\x18\x0c \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\x1e\n\x0fIndexNowProfile\x12\x0b\n\x03key\x18\x01 \x01(\t\"0\n\x13IndexNowPingRequest\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x0c\n\x04home\x18\t \x01(\t\"\"\n\x12SitemapPingRequest\x12\x0c\n\x04home\x18\x01 \x01(\t\"T\n\x1aSiteMaintenanceModeRequest\x12&\n\x03ttl\x18\x01 \x01(\x0b\x32\x19.google.protobuf.Duration\x12\x0e\n\x06reason\x18\x02 \x01(\t\"C\n\x12SiteInstallRequest\x12-\n\x04user\x18\x01 \x01(\x0b\x32\x1f.palm.auth.v1.UserSignUpRequest\"\x80\x01\n\rTwilioProfile\x12\x0c\n\x04\x66rom\x18\x01 \x01(\t\x12\x13\n\x0b\x61\x63\x63ount_sid\x18\x02 \x01(\t\x12\x12\n\nauth_token\x18\x03 \x01(\t\x12 \n\x13sms_status_callback\x18\t \x01(\tH\x00\x88\x01\x01\x42\x16\n\x14_sms_status_callback\"\xad\x02\n\x0bSmtpProfile\x12\x0c\n\x04host\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x02 \x01(\r\x12\x38\n\x0b\x61uth_method\x18\x03 \x01(\x0e\x32#.palm.fig.v1.SmtpProfile.AuthMethod\x12*\n\x02\x63\x63\x18\x08 \x03(\x0b\x32\x1e.palm.fig.v1.EmailTask.Address\x12+\n\x03\x62\x63\x63\x18\t \x03(\x0b\x32\x1e.palm.fig.v1.EmailTask.Address\x12,\n\x04\x66rom\x18\x0b \x01(\x0b\x32\x1e.palm.fig.v1.EmailTask.Address\x12\x10\n\x08password\x18\x0c \x01(\t\"/\n\nAuthMethod\x12\x08\n\x04None\x10\x00\x12\t\n\x05Login\x10\x01\x12\x0c\n\x08StartTls\x10\x02\"\xfd\x02\n\tEmailTask\x12*\n\x02to\x18\x01 \x01(\x0b\x32\x1e.palm.fig.v1.EmailTask.Address\x12*\n\x02\x63\x63\x18\x02 \x03(\x0b\x32\x1e.palm.fig.v1.EmailTask.Address\x12+\n\x03\x62\x63\x63\x18\x03 \x03(\x0b\x32\x1e.palm.fig.v1.EmailTask.Address\x12\x0f\n\x07subject\x18\x0b \x01(\t\x12)\n\x04\x62ody\x18\x0c \x01(\x0b\x32\x1b.palm.fig.v1.EmailTask.Body\x12\x36\n\x0b\x61ttachments\x18\r \x03(\x0b\x32!.palm.fig.v1.EmailTask.Attachment\x1a&\n\x07\x41\x64\x64ress\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x1a\"\n\x04\x42ody\x12\x0c\n\x04text\x18\x01 \x01(\t\x12\x0c\n\x04html\x18\x02 \x01(\x08\x1a+\n\nAttachment\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07payload\x18\x02 \x01(\x0c\"a\n\x15SiteTwilioPingRequest\x12\n\n\x02to\x18\x01 \x01(\t\x12\x0f\n\x07message\x18\x02 \x01(\t\x12+\n\x07profile\x18\t \x01(\x0b\x32\x1a.palm.fig.v1.TwilioProfile\"\x8e\x01\n\x13SiteSmtpPingRequest\x12*\n\x02to\x18\x01 \x01(\x0b\x32\x1e.palm.fig.v1.EmailTask.Address\x12\x0f\n\x07subject\x18\x02 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x03 \x01(\t\x12)\n\x07profile\x18\t \x01(\x0b\x32\x18.palm.fig.v1.SmtpProfile\"!\n\x12SiteSetLogoRequest\x12\x0b\n\x03url\x18\x01 \x01(\t\"*\n\x17SiteSetCopyrightRequest\x12\x0f\n\x07payload\x18\x01 \x01(\t\"\'\n\x16SiteSetKeywordsRequest\x12\r\n\x05items\x18\x01 \x03(\t\"W\n\x12SiteSetInfoRequest\x12\x0c\n\x04lang\x18\x01 \x01(\t\x12\r\n\x05title\x18\x0b \x01(\t\x12\x0f\n\x07subhead\x18\x0c \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\r \x01(\t\"\xee\x01\n\x12SiteLayoutResponse\x12\r\n\x05title\x18\x01 \x01(\t\x12\x0f\n\x07subhead\x18\x02 \x01(\t\x12\x10\n\x08keywords\x18\x03 \x03(\t\x12\x13\n\x0b\x64\x65scription\x18\x04 \x01(\t\x12\x36\n\x06\x61uthor\x18\x05 \x01(\x0b\x32&.palm.fig.v1.SiteLayoutResponse.Author\x12\x11\n\tcopyright\x18\x06 \x01(\t\x12\x0c\n\x04logo\x18\x07 \x01(\t\x12\x11\n\tlanguages\x18\t \x03(\t\x1a%\n\x06\x41uthor\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\"\xbc\x01\n\rGoogleProfile\x12\x1b\n\x0esite_verify_id\x18\x01 \x01(\tH\x00\x88\x01\x01\x12=\n\nre_captcha\x18\x02 \x01(\x0b\x32$.palm.fig.v1.GoogleProfile.ReCaptchaH\x01\x88\x01\x01\x1a-\n\tReCaptcha\x12\x10\n\x08site_key\x18\x01 \x01(\t\x12\x0e\n\x06secret\x18\x02 \x01(\tB\x11\n\x0f_site_verify_idB\r\n\x0b_re_captcha\"\x89\x01\n\x0c\x42\x61iduProfile\x12>\n\x0bsite_verify\x18\x01 \x01(\x0b\x32$.palm.fig.v1.BaiduProfile.SiteVerifyH\x00\x88\x01\x01\x1a)\n\nSiteVerify\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x02 \x01(\tB\x0e\n\x0c_site_verify\"1\n\x07SmsTask\x12\x0c\n\x04\x66rom\x18\x01 \x01(\t\x12\n\n\x02to\x18\x02 \x03(\t\x12\x0c\n\x04\x62ody\x18\x03 \x01(\t\"\xa7\x08\n\x12SiteStatusResponse\x12>\n\npostgresql\x18\x01 \x01(\x0b\x32*.palm.fig.v1.SiteStatusResponse.PostgreSql\x12\x34\n\x05mysql\x18\x02 \x01(\x0b\x32%.palm.fig.v1.SiteStatusResponse.MySql\x12\x34\n\x05redis\x18\x03 \x01(\x0b\x32%.palm.fig.v1.SiteStatusResponse.Redis\x12:\n\x08rabbitmq\x18\x04 \x01(\x0b\x32(.palm.fig.v1.SiteStatusResponse.RabbitMq\x12>\n\nopensearch\x18\x05 \x01(\x0b\x32*.palm.fig.v1.SiteStatusResponse.OpenSearch\x12\x36\n\x06system\x18\x0b \x01(\x0b\x32&.palm.fig.v1.SiteStatusResponse.System\x12\x38\n\x08healthes\x18\x15 \x03(\x0b\x32&.palm.fig.v1.SiteStatusResponse.Health\x1a&\n\x08\x44\x61tabase\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04size\x18\x02 \x01(\t\x1a\x83\x01\n\nPostgreSql\x12\x0f\n\x07version\x18\x01 \x01(\t\x12\'\n\x03now\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12;\n\tdatabases\x18\t \x03(\x0b\x32(.palm.fig.v1.SiteStatusResponse.Database\x1a&\n\x05MySql\x12\x0c\n\x04size\x18\x01 \x01(\x04\x12\x0f\n\x07version\x18\x02 \x01(\t\x1a\x80\x01\n\x05Redis\x12\x0c\n\x04info\x18\x01 \x01(\t\x12\x39\n\x05items\x18\x02 \x03(\x0b\x32*.palm.fig.v1.SiteStatusResponse.Redis.Item\x1a.\n\x04Item\x12\x0c\n\x04node\x18\x01 \x01(\t\x12\x0b\n\x03key\x18\x02 \x01(\t\x12\x0b\n\x03ttl\x18\x03 \x01(\x03\x1a/\n\x08RabbitMq\x12\x10\n\x08protocol\x18\x01 \x01(\t\x12\x11\n\theartbeat\x18\x02 \x01(\r\x1a\'\n\nOpenSearch\x12\x0b\n\x03url\x18\x01 \x01(\t\x12\x0c\n\x04info\x18\x02 \x01(\t\x1a&\n\x06Health\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06status\x18\x02 \x01(\t\x1a\x9b\x01\n\x06System\x12\x0f\n\x07version\x18\x01 \x01(\t\x12\x0b\n\x03\x63pu\x18\x02 \x01(\t\x12\x0e\n\x06memory\x18\x03 \x01(\t\x12\x0c\n\x04\x62oot\x18\x04 \x01(\t\x12\x0c\n\x04\x64isk\x18\x05 \x01(\t\x12\x0c\n\x04load\x18\x06 \x01(\t\x12\n\n\x02\x66s\x18\x07 \x01(\t\x12\x0c\n\x04swap\x18\x08 \x01(\t\x12\x0e\n\x06uptime\x18\t \x01(\t\x12\x0f\n\x07network\x18\n \x01(\t\"\xf2\x01\n\x18ShorterLinkIndexResponse\x12+\n\npagination\x18\x01 \x01(\x0b\x32\x17.palm.nut.v1.Pagination\x12\x39\n\x05items\x18\x0b \x03(\x0b\x32*.palm.fig.v1.ShorterLinkIndexResponse.Item\x1an\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0b\n\x03url\x18\x02 \x01(\t\x12\x0f\n\x07\x64\x65tails\x18\x03 \x01(\t\x12\x0c\n\x04\x63ode\x18\t \x01(\t\x12.\n\nupdated_at\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"8\n\x18ShorterLinkCreateRequest\x12\x0b\n\x03url\x18\x01 \x01(\t\x12\x0f\n\x07\x64\x65tails\x18\x02 \x01(\t\"D\n\x18ShorterLinkUpdateRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0b\n\x03url\x18\x02 \x01(\t\x12\x0f\n\x07\x64\x65tails\x18\x03 \x01(\t\"\xa9\x01\n\x10TagIndexResponse\x12\x31\n\x05items\x18\x01 \x03(\x0b\x32\".palm.fig.v1.TagIndexResponse.Item\x1a\x62\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\x10\n\x08priority\x18\x03 \x01(\x05\x12.\n\nupdated_at\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"2\n\x10TagCreateRequest\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x10\n\x08priority\x18\x0b \x01(\x05\">\n\x10TagUpdateRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\x10\n\x08priority\x18\x0b \x01(\x05\"\xbe\x01\n\x15\x43\x61tegoryIndexResponse\x12\x36\n\x05items\x18\x01 \x03(\x0b\x32\'.palm.fig.v1.CategoryIndexResponse.Item\x1am\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\x0c\n\x04left\x18\x03 \x01(\x05\x12\r\n\x05right\x18\x04 \x01(\x05\x12.\n\nupdated_at\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"M\n\x15\x43\x61tegoryCreateRequest\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x0e\n\x04left\x18\x02 \x01(\x05H\x00\x12\x10\n\x06parent\x18\x03 \x01(\x05H\x00\x42\x04\n\x02\x62y\"1\n\x15\x43\x61tegoryUpdateRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t2U\n\x0cNotification\x12\x45\n\x05Index\x12\x12.palm.nut.v1.Pager\x1a&.palm.fig.v1.IndexNotificationResponse\"\x00\x32\x97\x02\n\tLeaveWord\x12=\n\x06\x43reate\x12\x19.palm.nut.v1.MediaContent\x1a\x16.google.protobuf.Empty\"\x00\x12\x42\n\x05Index\x12\x12.palm.nut.v1.Pager\x1a#.palm.fig.v1.LeaveWordIndexResponse\"\x00\x12J\n\x04Show\x12\x16.palm.nut.v1.IdRequest\x1a(.palm.fig.v1.LeaveWordIndexResponse.Item\"\x00\x12;\n\x07\x44\x65stroy\x12\x16.palm.nut.v1.IdRequest\x1a\x16.google.protobuf.Empty\"\x00\x32\xf3\r\n\x04Site\x12W\n\x12SetMaintenanceMode\x12\'.palm.fig.v1.SiteMaintenanceModeRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x44\n\x07Install\x12\x1f.palm.fig.v1.SiteInstallRequest\x1a\x16.google.protobuf.Empty\"\x00\x12>\n\nClearCache\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x12\x43\n\x06Layout\x12\x16.google.protobuf.Empty\x1a\x1f.palm.fig.v1.SiteLayoutResponse\"\x00\x12M\n\tSetAuthor\x12&.palm.fig.v1.SiteLayoutResponse.Author\x1a\x16.google.protobuf.Empty\"\x00\x12N\n\x0cSetCopyright\x12$.palm.fig.v1.SiteSetCopyrightRequest\x1a\x16.google.protobuf.Empty\"\x00\x12L\n\x0bSetKeywords\x12#.palm.fig.v1.SiteSetKeywordsRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x44\n\x07SetInfo\x12\x1f.palm.fig.v1.SiteSetInfoRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x44\n\x07SetLogo\x12\x1f.palm.fig.v1.SiteSetLogoRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x41\n\tSetTwilio\x12\x1a.palm.fig.v1.TwilioProfile\x1a\x16.google.protobuf.Empty\"\x00\x12\x41\n\tGetTwilio\x12\x16.google.protobuf.Empty\x1a\x1a.palm.fig.v1.TwilioProfile\"\x00\x12J\n\nPingTwilio\x12\".palm.fig.v1.SiteTwilioPingRequest\x1a\x16.google.protobuf.Empty\"\x00\x12=\n\x07SetSmtp\x12\x18.palm.fig.v1.SmtpProfile\x1a\x16.google.protobuf.Empty\"\x00\x12=\n\x07GetSmtp\x12\x16.google.protobuf.Empty\x1a\x18.palm.fig.v1.SmtpProfile\"\x00\x12\x46\n\x08PingSmtp\x12 .palm.fig.v1.SiteSmtpPingRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x45\n\x0bSetIndexNow\x12\x1c.palm.fig.v1.IndexNowProfile\x1a\x16.google.protobuf.Empty\"\x00\x12\x45\n\x0bGetIndexNow\x12\x16.google.protobuf.Empty\x1a\x1c.palm.fig.v1.IndexNowProfile\"\x00\x12J\n\x0cPingIndexNow\x12 .palm.fig.v1.IndexNowPingRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x41\n\tSetGoogle\x12\x1a.palm.fig.v1.GoogleProfile\x1a\x16.google.protobuf.Empty\"\x00\x12\x41\n\tGetGoogle\x12\x16.google.protobuf.Empty\x1a\x1a.palm.fig.v1.GoogleProfile\"\x00\x12G\n\nPingGoogle\x12\x1f.palm.fig.v1.SitemapPingRequest\x1a\x16.google.protobuf.Empty\"\x00\x12?\n\x08SetBaidu\x12\x19.palm.fig.v1.BaiduProfile\x1a\x16.google.protobuf.Empty\"\x00\x12?\n\x08GetBaidu\x12\x16.google.protobuf.Empty\x1a\x19.palm.fig.v1.BaiduProfile\"\x00\x12\x46\n\tPingBaidu\x12\x1f.palm.fig.v1.SitemapPingRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x43\n\x06Status\x12\x16.google.protobuf.Empty\x1a\x1f.palm.fig.v1.SiteStatusResponse\"\x00\x32\xa6\x02\n\x0bShorterLink\x12I\n\x06\x43reate\x12%.palm.fig.v1.ShorterLinkCreateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12I\n\x06Update\x12%.palm.fig.v1.ShorterLinkUpdateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12;\n\x07\x44\x65stroy\x12\x16.palm.nut.v1.IdRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x44\n\x05Index\x12\x12.palm.nut.v1.Pager\x1a%.palm.fig.v1.ShorterLinkIndexResponse\"\x00\x32\x8a\x02\n\x03Tag\x12\x41\n\x06\x43reate\x12\x1d.palm.fig.v1.TagCreateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x41\n\x06Update\x12\x1d.palm.fig.v1.TagUpdateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12;\n\x07\x44\x65stroy\x12\x16.palm.nut.v1.IdRequest\x1a\x16.google.protobuf.Empty\"\x00\x12@\n\x05Index\x12\x16.google.protobuf.Empty\x1a\x1d.palm.fig.v1.TagIndexResponse\"\x00\x32\x9e\x02\n\x08\x43\x61tegory\x12\x46\n\x06\x43reate\x12\".palm.fig.v1.CategoryCreateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x46\n\x06Update\x12\".palm.fig.v1.CategoryUpdateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12;\n\x07\x44\x65stroy\x12\x16.palm.nut.v1.IdRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x45\n\x05Index\x12\x16.google.protobuf.Empty\x1a\".palm.fig.v1.CategoryIndexResponse\"\x00\x42-\n)com.github.saturn_xiv.palm.plugins.fig.v1P\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'fig_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n)com.github.saturn_xiv.palm.plugins.fig.v1P\001'
  _INDEXNOTIFICATIONRESPONSE._serialized_start=144
  _INDEXNOTIFICATIONRESPONSE._serialized_end=422
  _INDEXNOTIFICATIONRESPONSE_ITEM._serialized_start=279
  _INDEXNOTIFICATIONRESPONSE_ITEM._serialized_end=422
  _LEAVEWORDINDEXRESPONSE._serialized_start=425
  _LEAVEWORDINDEXRESPONSE._serialized_end=738
  _LEAVEWORDINDEXRESPONSE_ITEM._serialized_start=554
  _LEAVEWORDINDEXRESPONSE_ITEM._serialized_end=738
  _INDEXNOWPROFILE._serialized_start=740
  _INDEXNOWPROFILE._serialized_end=770
  _INDEXNOWPINGREQUEST._serialized_start=772
  _INDEXNOWPINGREQUEST._serialized_end=820
  _SITEMAPPINGREQUEST._serialized_start=822
  _SITEMAPPINGREQUEST._serialized_end=856
  _SITEMAINTENANCEMODEREQUEST._serialized_start=858
  _SITEMAINTENANCEMODEREQUEST._serialized_end=942
  _SITEINSTALLREQUEST._serialized_start=944
  _SITEINSTALLREQUEST._serialized_end=1011
  _TWILIOPROFILE._serialized_start=1014
  _TWILIOPROFILE._serialized_end=1142
  _SMTPPROFILE._serialized_start=1145
  _SMTPPROFILE._serialized_end=1446
  _SMTPPROFILE_AUTHMETHOD._serialized_start=1399
  _SMTPPROFILE_AUTHMETHOD._serialized_end=1446
  _EMAILTASK._serialized_start=1449
  _EMAILTASK._serialized_end=1830
  _EMAILTASK_ADDRESS._serialized_start=1711
  _EMAILTASK_ADDRESS._serialized_end=1749
  _EMAILTASK_BODY._serialized_start=1751
  _EMAILTASK_BODY._serialized_end=1785
  _EMAILTASK_ATTACHMENT._serialized_start=1787
  _EMAILTASK_ATTACHMENT._serialized_end=1830
  _SITETWILIOPINGREQUEST._serialized_start=1832
  _SITETWILIOPINGREQUEST._serialized_end=1929
  _SITESMTPPINGREQUEST._serialized_start=1932
  _SITESMTPPINGREQUEST._serialized_end=2074
  _SITESETLOGOREQUEST._serialized_start=2076
  _SITESETLOGOREQUEST._serialized_end=2109
  _SITESETCOPYRIGHTREQUEST._serialized_start=2111
  _SITESETCOPYRIGHTREQUEST._serialized_end=2153
  _SITESETKEYWORDSREQUEST._serialized_start=2155
  _SITESETKEYWORDSREQUEST._serialized_end=2194
  _SITESETINFOREQUEST._serialized_start=2196
  _SITESETINFOREQUEST._serialized_end=2283
  _SITELAYOUTRESPONSE._serialized_start=2286
  _SITELAYOUTRESPONSE._serialized_end=2524
  _SITELAYOUTRESPONSE_AUTHOR._serialized_start=2487
  _SITELAYOUTRESPONSE_AUTHOR._serialized_end=2524
  _GOOGLEPROFILE._serialized_start=2527
  _GOOGLEPROFILE._serialized_end=2715
  _GOOGLEPROFILE_RECAPTCHA._serialized_start=2636
  _GOOGLEPROFILE_RECAPTCHA._serialized_end=2681
  _BAIDUPROFILE._serialized_start=2718
  _BAIDUPROFILE._serialized_end=2855
  _BAIDUPROFILE_SITEVERIFY._serialized_start=2798
  _BAIDUPROFILE_SITEVERIFY._serialized_end=2839
  _SMSTASK._serialized_start=2857
  _SMSTASK._serialized_end=2906
  _SITESTATUSRESPONSE._serialized_start=2909
  _SITESTATUSRESPONSE._serialized_end=3972
  _SITESTATUSRESPONSE_DATABASE._serialized_start=3341
  _SITESTATUSRESPONSE_DATABASE._serialized_end=3379
  _SITESTATUSRESPONSE_POSTGRESQL._serialized_start=3382
  _SITESTATUSRESPONSE_POSTGRESQL._serialized_end=3513
  _SITESTATUSRESPONSE_MYSQL._serialized_start=3515
  _SITESTATUSRESPONSE_MYSQL._serialized_end=3553
  _SITESTATUSRESPONSE_REDIS._serialized_start=3556
  _SITESTATUSRESPONSE_REDIS._serialized_end=3684
  _SITESTATUSRESPONSE_REDIS_ITEM._serialized_start=3638
  _SITESTATUSRESPONSE_REDIS_ITEM._serialized_end=3684
  _SITESTATUSRESPONSE_RABBITMQ._serialized_start=3686
  _SITESTATUSRESPONSE_RABBITMQ._serialized_end=3733
  _SITESTATUSRESPONSE_OPENSEARCH._serialized_start=3735
  _SITESTATUSRESPONSE_OPENSEARCH._serialized_end=3774
  _SITESTATUSRESPONSE_HEALTH._serialized_start=3776
  _SITESTATUSRESPONSE_HEALTH._serialized_end=3814
  _SITESTATUSRESPONSE_SYSTEM._serialized_start=3817
  _SITESTATUSRESPONSE_SYSTEM._serialized_end=3972
  _SHORTERLINKINDEXRESPONSE._serialized_start=3975
  _SHORTERLINKINDEXRESPONSE._serialized_end=4217
  _SHORTERLINKINDEXRESPONSE_ITEM._serialized_start=4107
  _SHORTERLINKINDEXRESPONSE_ITEM._serialized_end=4217
  _SHORTERLINKCREATEREQUEST._serialized_start=4219
  _SHORTERLINKCREATEREQUEST._serialized_end=4275
  _SHORTERLINKUPDATEREQUEST._serialized_start=4277
  _SHORTERLINKUPDATEREQUEST._serialized_end=4345
  _TAGINDEXRESPONSE._serialized_start=4348
  _TAGINDEXRESPONSE._serialized_end=4517
  _TAGINDEXRESPONSE_ITEM._serialized_start=4419
  _TAGINDEXRESPONSE_ITEM._serialized_end=4517
  _TAGCREATEREQUEST._serialized_start=4519
  _TAGCREATEREQUEST._serialized_end=4569
  _TAGUPDATEREQUEST._serialized_start=4571
  _TAGUPDATEREQUEST._serialized_end=4633
  _CATEGORYINDEXRESPONSE._serialized_start=4636
  _CATEGORYINDEXRESPONSE._serialized_end=4826
  _CATEGORYINDEXRESPONSE_ITEM._serialized_start=4717
  _CATEGORYINDEXRESPONSE_ITEM._serialized_end=4826
  _CATEGORYCREATEREQUEST._serialized_start=4828
  _CATEGORYCREATEREQUEST._serialized_end=4905
  _CATEGORYUPDATEREQUEST._serialized_start=4907
  _CATEGORYUPDATEREQUEST._serialized_end=4956
  _NOTIFICATION._serialized_start=4958
  _NOTIFICATION._serialized_end=5043
  _LEAVEWORD._serialized_start=5046
  _LEAVEWORD._serialized_end=5325
  _SITE._serialized_start=5328
  _SITE._serialized_end=7107
  _SHORTERLINK._serialized_start=7110
  _SHORTERLINK._serialized_end=7404
  _TAG._serialized_start=7407
  _TAG._serialized_end=7673
  _CATEGORY._serialized_start=7676
  _CATEGORY._serialized_end=7962
# @@protoc_insertion_point(module_scope)