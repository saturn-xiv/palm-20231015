-- MariaDB dump 10.19  Distrib 10.7.3-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: forum
-- ------------------------------------------------------
-- Server version	10.7.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `forum_bans`
--

DROP TABLE IF EXISTS `forum_bans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_bans` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `expire` int(10) unsigned DEFAULT NULL,
  `ban_creator` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `forum_bans_username_idx` (`username`(25))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_bans`
--

LOCK TABLES `forum_bans` WRITE;
/*!40000 ALTER TABLE `forum_bans` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_bans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_categories`
--

DROP TABLE IF EXISTS `forum_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(80) NOT NULL DEFAULT 'New Category',
  `disp_position` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_categories`
--

LOCK TABLES `forum_categories` WRITE;
/*!40000 ALTER TABLE `forum_categories` DISABLE KEYS */;
INSERT INTO `forum_categories` VALUES
(1,'Test category',1);
/*!40000 ALTER TABLE `forum_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_censoring`
--

DROP TABLE IF EXISTS `forum_censoring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_censoring` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `search_for` varchar(60) NOT NULL DEFAULT '',
  `replace_with` varchar(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_censoring`
--

LOCK TABLES `forum_censoring` WRITE;
/*!40000 ALTER TABLE `forum_censoring` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_censoring` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_config`
--

DROP TABLE IF EXISTS `forum_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_config` (
  `conf_name` varchar(255) NOT NULL DEFAULT '',
  `conf_value` text DEFAULT NULL,
  PRIMARY KEY (`conf_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_config`
--

LOCK TABLES `forum_config` WRITE;
/*!40000 ALTER TABLE `forum_config` DISABLE KEYS */;
INSERT INTO `forum_config` VALUES
('o_additional_navlinks',''),
('o_admin_email','jitang.zheng@gmail.com'),
('o_announcement','0'),
('o_announcement_message','Enter your announcement here.'),
('o_avatars','1'),
('o_avatars_dir','img/avatars'),
('o_avatars_height','60'),
('o_avatars_size','10240'),
('o_avatars_width','60'),
('o_base_url','http://localhost:8088/forum'),
('o_board_desc','<p><span>Unfortunately no one can be told what FluxBB is - you have to see it for yourself.</span></p>'),
('o_board_title','My FluxBB Forum'),
('o_censoring','0'),
('o_cur_version','1.5.11'),
('o_database_revision','21'),
('o_date_format','Y-m-d'),
('o_default_dst','0'),
('o_default_email_setting','1'),
('o_default_lang','English'),
('o_default_style','Air'),
('o_default_timezone','0'),
('o_default_user_group','4'),
('o_disp_posts_default','25'),
('o_disp_topics_default','30'),
('o_feed_ttl','0'),
('o_feed_type','2'),
('o_forum_subscriptions','1'),
('o_gzip','0'),
('o_indent_num_spaces','4'),
('o_mailing_list','jitang.zheng@gmail.com'),
('o_maintenance','0'),
('o_maintenance_message','The forums are temporarily down for maintenance. Please try again in a few minutes.'),
('o_make_links','1'),
('o_parser_revision','2'),
('o_quickjump','1'),
('o_quickpost','1'),
('o_quote_depth','3'),
('o_redirect_delay','1'),
('o_regs_allow','1'),
('o_regs_report','0'),
('o_regs_verify','0'),
('o_report_method','0'),
('o_rules','0'),
('o_rules_message','Enter your rules here'),
('o_searchindex_revision','2'),
('o_search_all_forums','1'),
('o_show_dot','0'),
('o_show_post_count','1'),
('o_show_user_info','1'),
('o_show_version','0'),
('o_signatures','1'),
('o_smilies','1'),
('o_smilies_sig','1'),
('o_smtp_host',NULL),
('o_smtp_pass',NULL),
('o_smtp_ssl','0'),
('o_smtp_user',NULL),
('o_timeout_online','300'),
('o_timeout_visit','1800'),
('o_time_format','H:i:s'),
('o_topic_review','15'),
('o_topic_subscriptions','1'),
('o_topic_views','1'),
('o_users_online','1'),
('o_webmaster_email','jitang.zheng@gmail.com'),
('p_allow_banned_email','1'),
('p_allow_dupe_email','0'),
('p_force_guest_email','1'),
('p_message_all_caps','1'),
('p_message_bbcode','1'),
('p_message_img_tag','1'),
('p_sig_all_caps','1'),
('p_sig_bbcode','1'),
('p_sig_img_tag','0'),
('p_sig_length','400'),
('p_sig_lines','4'),
('p_subject_all_caps','1');
/*!40000 ALTER TABLE `forum_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_forum_perms`
--

DROP TABLE IF EXISTS `forum_forum_perms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_forum_perms` (
  `group_id` int(10) NOT NULL DEFAULT 0,
  `forum_id` int(10) NOT NULL DEFAULT 0,
  `read_forum` tinyint(1) NOT NULL DEFAULT 1,
  `post_replies` tinyint(1) NOT NULL DEFAULT 1,
  `post_topics` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`group_id`,`forum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_forum_perms`
--

LOCK TABLES `forum_forum_perms` WRITE;
/*!40000 ALTER TABLE `forum_forum_perms` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_forum_perms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_forum_subscriptions`
--

DROP TABLE IF EXISTS `forum_forum_subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_forum_subscriptions` (
  `user_id` int(10) unsigned NOT NULL DEFAULT 0,
  `forum_id` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`,`forum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_forum_subscriptions`
--

LOCK TABLES `forum_forum_subscriptions` WRITE;
/*!40000 ALTER TABLE `forum_forum_subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_forum_subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_forums`
--

DROP TABLE IF EXISTS `forum_forums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_forums` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `forum_name` varchar(80) NOT NULL DEFAULT 'New forum',
  `forum_desc` text DEFAULT NULL,
  `redirect_url` varchar(100) DEFAULT NULL,
  `moderators` text DEFAULT NULL,
  `num_topics` mediumint(8) unsigned NOT NULL DEFAULT 0,
  `num_posts` mediumint(8) unsigned NOT NULL DEFAULT 0,
  `last_post` int(10) unsigned DEFAULT NULL,
  `last_post_id` int(10) unsigned DEFAULT NULL,
  `last_poster` varchar(200) DEFAULT NULL,
  `sort_by` tinyint(1) NOT NULL DEFAULT 0,
  `disp_position` int(10) NOT NULL DEFAULT 0,
  `cat_id` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_forums`
--

LOCK TABLES `forum_forums` WRITE;
/*!40000 ALTER TABLE `forum_forums` DISABLE KEYS */;
INSERT INTO `forum_forums` VALUES
(1,'Test forum','This is just a test forum',NULL,NULL,1,1,1648816913,1,'admin',0,1,1);
/*!40000 ALTER TABLE `forum_forums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_groups`
--

DROP TABLE IF EXISTS `forum_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_groups` (
  `g_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `g_title` varchar(50) NOT NULL DEFAULT '',
  `g_user_title` varchar(50) DEFAULT NULL,
  `g_promote_min_posts` int(10) unsigned NOT NULL DEFAULT 0,
  `g_promote_next_group` int(10) unsigned NOT NULL DEFAULT 0,
  `g_moderator` tinyint(1) NOT NULL DEFAULT 0,
  `g_mod_edit_users` tinyint(1) NOT NULL DEFAULT 0,
  `g_mod_rename_users` tinyint(1) NOT NULL DEFAULT 0,
  `g_mod_change_passwords` tinyint(1) NOT NULL DEFAULT 0,
  `g_mod_ban_users` tinyint(1) NOT NULL DEFAULT 0,
  `g_mod_promote_users` tinyint(1) NOT NULL DEFAULT 0,
  `g_read_board` tinyint(1) NOT NULL DEFAULT 1,
  `g_view_users` tinyint(1) NOT NULL DEFAULT 1,
  `g_post_replies` tinyint(1) NOT NULL DEFAULT 1,
  `g_post_topics` tinyint(1) NOT NULL DEFAULT 1,
  `g_edit_posts` tinyint(1) NOT NULL DEFAULT 1,
  `g_delete_posts` tinyint(1) NOT NULL DEFAULT 1,
  `g_delete_topics` tinyint(1) NOT NULL DEFAULT 1,
  `g_post_links` tinyint(1) NOT NULL DEFAULT 1,
  `g_set_title` tinyint(1) NOT NULL DEFAULT 1,
  `g_search` tinyint(1) NOT NULL DEFAULT 1,
  `g_search_users` tinyint(1) NOT NULL DEFAULT 1,
  `g_send_email` tinyint(1) NOT NULL DEFAULT 1,
  `g_post_flood` smallint(6) NOT NULL DEFAULT 30,
  `g_search_flood` smallint(6) NOT NULL DEFAULT 30,
  `g_email_flood` smallint(6) NOT NULL DEFAULT 60,
  `g_report_flood` smallint(6) NOT NULL DEFAULT 60,
  PRIMARY KEY (`g_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_groups`
--

LOCK TABLES `forum_groups` WRITE;
/*!40000 ALTER TABLE `forum_groups` DISABLE KEYS */;
INSERT INTO `forum_groups` VALUES
(1,'Administrators','Administrator',0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0),
(2,'Moderators','Moderator',0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0),
(3,'Guests',NULL,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,60,30,0,0),
(4,'Members',NULL,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,60,30,60,60);
/*!40000 ALTER TABLE `forum_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_online`
--

DROP TABLE IF EXISTS `forum_online`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_online` (
  `user_id` int(10) unsigned NOT NULL DEFAULT 1,
  `ident` varchar(200) NOT NULL DEFAULT '',
  `logged` int(10) unsigned NOT NULL DEFAULT 0,
  `idle` tinyint(1) NOT NULL DEFAULT 0,
  `last_post` int(10) unsigned DEFAULT NULL,
  `last_search` int(10) unsigned DEFAULT NULL,
  UNIQUE KEY `forum_online_user_id_ident_idx` (`user_id`,`ident`(25)),
  KEY `forum_online_ident_idx` (`ident`(25)),
  KEY `forum_online_logged_idx` (`logged`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_online`
--

LOCK TABLES `forum_online` WRITE;
/*!40000 ALTER TABLE `forum_online` DISABLE KEYS */;
INSERT INTO `forum_online` VALUES
(2,'admin',1648816968,0,NULL,NULL);
/*!40000 ALTER TABLE `forum_online` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_posts`
--

DROP TABLE IF EXISTS `forum_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `poster` varchar(200) NOT NULL DEFAULT '',
  `poster_id` int(10) unsigned NOT NULL DEFAULT 1,
  `poster_ip` varchar(39) DEFAULT NULL,
  `poster_email` varchar(80) DEFAULT NULL,
  `message` mediumtext DEFAULT NULL,
  `hide_smilies` tinyint(1) NOT NULL DEFAULT 0,
  `posted` int(10) unsigned NOT NULL DEFAULT 0,
  `edited` int(10) unsigned DEFAULT NULL,
  `edited_by` varchar(200) DEFAULT NULL,
  `topic_id` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `forum_posts_topic_id_idx` (`topic_id`),
  KEY `forum_posts_multi_idx` (`poster_id`,`topic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_posts`
--

LOCK TABLES `forum_posts` WRITE;
/*!40000 ALTER TABLE `forum_posts` DISABLE KEYS */;
INSERT INTO `forum_posts` VALUES
(1,'admin',2,'127.0.0.1',NULL,'If you are looking at this (which I guess you are), the install of FluxBB appears to have worked! Now log in and head over to the administration control panel to configure your forum.',0,1648816913,NULL,NULL,1);
/*!40000 ALTER TABLE `forum_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_reports`
--

DROP TABLE IF EXISTS `forum_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_reports` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned NOT NULL DEFAULT 0,
  `topic_id` int(10) unsigned NOT NULL DEFAULT 0,
  `forum_id` int(10) unsigned NOT NULL DEFAULT 0,
  `reported_by` int(10) unsigned NOT NULL DEFAULT 0,
  `created` int(10) unsigned NOT NULL DEFAULT 0,
  `message` text DEFAULT NULL,
  `zapped` int(10) unsigned DEFAULT NULL,
  `zapped_by` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `forum_reports_zapped_idx` (`zapped`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_reports`
--

LOCK TABLES `forum_reports` WRITE;
/*!40000 ALTER TABLE `forum_reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_search_cache`
--

DROP TABLE IF EXISTS `forum_search_cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_search_cache` (
  `id` int(10) unsigned NOT NULL DEFAULT 0,
  `ident` varchar(200) NOT NULL DEFAULT '',
  `search_data` mediumtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `forum_search_cache_ident_idx` (`ident`(8))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_search_cache`
--

LOCK TABLES `forum_search_cache` WRITE;
/*!40000 ALTER TABLE `forum_search_cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_search_cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_search_matches`
--

DROP TABLE IF EXISTS `forum_search_matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_search_matches` (
  `post_id` int(10) unsigned NOT NULL DEFAULT 0,
  `word_id` int(10) unsigned NOT NULL DEFAULT 0,
  `subject_match` tinyint(1) NOT NULL DEFAULT 0,
  KEY `forum_search_matches_word_id_idx` (`word_id`),
  KEY `forum_search_matches_post_id_idx` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_search_matches`
--

LOCK TABLES `forum_search_matches` WRITE;
/*!40000 ALTER TABLE `forum_search_matches` DISABLE KEYS */;
INSERT INTO `forum_search_matches` VALUES
(1,1,0),
(1,2,0),
(1,3,0),
(1,4,0),
(1,5,0),
(1,6,0),
(1,7,0),
(1,8,0),
(1,9,0),
(1,10,0),
(1,11,0),
(1,12,0),
(1,13,0),
(1,14,1),
(1,15,1);
/*!40000 ALTER TABLE `forum_search_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_search_words`
--

DROP TABLE IF EXISTS `forum_search_words`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_search_words` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `word` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`word`),
  KEY `forum_search_words_id_idx` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_search_words`
--

LOCK TABLES `forum_search_words` WRITE;
/*!40000 ALTER TABLE `forum_search_words` DISABLE KEYS */;
INSERT INTO `forum_search_words` VALUES
(1,'looking'),
(2,'guess'),
(3,'install'),
(4,'fluxbb'),
(5,'appears'),
(6,'worked'),
(7,'log'),
(8,'head'),
(9,'administration'),
(10,'control'),
(11,'panel'),
(12,'configure'),
(13,'forum'),
(14,'test'),
(15,'topic');
/*!40000 ALTER TABLE `forum_search_words` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_topic_subscriptions`
--

DROP TABLE IF EXISTS `forum_topic_subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_topic_subscriptions` (
  `user_id` int(10) unsigned NOT NULL DEFAULT 0,
  `topic_id` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`,`topic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_topic_subscriptions`
--

LOCK TABLES `forum_topic_subscriptions` WRITE;
/*!40000 ALTER TABLE `forum_topic_subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `forum_topic_subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_topics`
--

DROP TABLE IF EXISTS `forum_topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_topics` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `poster` varchar(200) NOT NULL DEFAULT '',
  `subject` varchar(255) NOT NULL DEFAULT '',
  `posted` int(10) unsigned NOT NULL DEFAULT 0,
  `first_post_id` int(10) unsigned NOT NULL DEFAULT 0,
  `last_post` int(10) unsigned NOT NULL DEFAULT 0,
  `last_post_id` int(10) unsigned NOT NULL DEFAULT 0,
  `last_poster` varchar(200) DEFAULT NULL,
  `num_views` mediumint(8) unsigned NOT NULL DEFAULT 0,
  `num_replies` mediumint(8) unsigned NOT NULL DEFAULT 0,
  `closed` tinyint(1) NOT NULL DEFAULT 0,
  `sticky` tinyint(1) NOT NULL DEFAULT 0,
  `moved_to` int(10) unsigned DEFAULT NULL,
  `forum_id` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `forum_topics_forum_id_idx` (`forum_id`),
  KEY `forum_topics_moved_to_idx` (`moved_to`),
  KEY `forum_topics_last_post_idx` (`last_post`),
  KEY `forum_topics_first_post_id_idx` (`first_post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_topics`
--

LOCK TABLES `forum_topics` WRITE;
/*!40000 ALTER TABLE `forum_topics` DISABLE KEYS */;
INSERT INTO `forum_topics` VALUES
(1,'admin','Test topic',1648816913,1,1648816913,1,'admin',0,0,0,0,NULL,1);
/*!40000 ALTER TABLE `forum_topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_users`
--

DROP TABLE IF EXISTS `forum_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(10) unsigned NOT NULL DEFAULT 3,
  `username` varchar(200) NOT NULL DEFAULT '',
  `password` varchar(40) NOT NULL DEFAULT '',
  `email` varchar(80) NOT NULL DEFAULT '',
  `title` varchar(50) DEFAULT NULL,
  `realname` varchar(40) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `jabber` varchar(80) DEFAULT NULL,
  `icq` varchar(12) DEFAULT NULL,
  `msn` varchar(80) DEFAULT NULL,
  `aim` varchar(30) DEFAULT NULL,
  `yahoo` varchar(30) DEFAULT NULL,
  `location` varchar(30) DEFAULT NULL,
  `signature` text DEFAULT NULL,
  `disp_topics` tinyint(3) unsigned DEFAULT NULL,
  `disp_posts` tinyint(3) unsigned DEFAULT NULL,
  `email_setting` tinyint(1) NOT NULL DEFAULT 1,
  `notify_with_post` tinyint(1) NOT NULL DEFAULT 0,
  `auto_notify` tinyint(1) NOT NULL DEFAULT 0,
  `show_smilies` tinyint(1) NOT NULL DEFAULT 1,
  `show_img` tinyint(1) NOT NULL DEFAULT 1,
  `show_img_sig` tinyint(1) NOT NULL DEFAULT 1,
  `show_avatars` tinyint(1) NOT NULL DEFAULT 1,
  `show_sig` tinyint(1) NOT NULL DEFAULT 1,
  `timezone` float NOT NULL DEFAULT 0,
  `dst` tinyint(1) NOT NULL DEFAULT 0,
  `time_format` tinyint(1) NOT NULL DEFAULT 0,
  `date_format` tinyint(1) NOT NULL DEFAULT 0,
  `language` varchar(25) NOT NULL DEFAULT 'English',
  `style` varchar(25) NOT NULL DEFAULT 'Air',
  `num_posts` int(10) unsigned NOT NULL DEFAULT 0,
  `last_post` int(10) unsigned DEFAULT NULL,
  `last_search` int(10) unsigned DEFAULT NULL,
  `last_email_sent` int(10) unsigned DEFAULT NULL,
  `last_report_sent` int(10) unsigned DEFAULT NULL,
  `registered` int(10) unsigned NOT NULL DEFAULT 0,
  `registration_ip` varchar(39) NOT NULL DEFAULT '0.0.0.0',
  `last_visit` int(10) unsigned NOT NULL DEFAULT 0,
  `admin_note` varchar(30) DEFAULT NULL,
  `activate_string` varchar(80) DEFAULT NULL,
  `activate_key` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `forum_users_username_idx` (`username`(25)),
  KEY `forum_users_registered_idx` (`registered`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_users`
--

LOCK TABLES `forum_users` WRITE;
/*!40000 ALTER TABLE `forum_users` DISABLE KEYS */;
INSERT INTO `forum_users` VALUES
(1,3,'Guest','Guest','Guest',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,1,1,1,1,1,0,0,0,0,'English','Air',0,NULL,NULL,NULL,NULL,0,'0.0.0.0',0,NULL,NULL,NULL),
(2,1,'admin','f729170314bd5a497585fe8a579f4b6e90c4ed89','jitang.zheng@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,1,1,1,1,1,0,0,0,0,'English','Air',1,1648816913,NULL,NULL,NULL,1648816913,'127.0.0.1',1648816913,NULL,NULL,NULL);
/*!40000 ALTER TABLE `forum_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-01  6:06:06
