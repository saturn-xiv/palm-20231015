-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 01, 2022 at 08:30 PM
-- Server version: 8.0.27-18
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forum`
--

-- --------------------------------------------------------

--
-- Table structure for table `bb_bans`
--

CREATE TABLE `bb_bans` (
  `id` int UNSIGNED NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `expire` int UNSIGNED DEFAULT NULL,
  `ban_creator` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `bb_categories`
--

CREATE TABLE `bb_categories` (
  `id` int UNSIGNED NOT NULL,
  `cat_name` varchar(80) NOT NULL DEFAULT 'New Category',
  `disp_position` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_categories`
--

INSERT INTO `bb_categories` (`id`, `cat_name`, `disp_position`) VALUES
(1, 'Test category', 1);

-- --------------------------------------------------------

--
-- Table structure for table `bb_censoring`
--

CREATE TABLE `bb_censoring` (
  `id` int UNSIGNED NOT NULL,
  `search_for` varchar(60) NOT NULL DEFAULT '',
  `replace_with` varchar(60) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `bb_config`
--

CREATE TABLE `bb_config` (
  `conf_name` varchar(255) NOT NULL DEFAULT '',
  `conf_value` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_config`
--

INSERT INTO `bb_config` (`conf_name`, `conf_value`) VALUES
('o_additional_navlinks', ''),
('o_admin_email', 'admin@change-me.com'),
('o_announcement', '0'),
('o_announcement_message', 'Enter your announcement here.'),
('o_avatars', '1'),
('o_avatars_dir', 'img/avatars'),
('o_avatars_height', '60'),
('o_avatars_size', '10240'),
('o_avatars_width', '60'),
('o_base_url', 'http://localhost:88/forum'),
('o_board_desc', '<p><span>Unfortunately no one can be told what FluxBB is - you have to see it for yourself.</span></p>'),
('o_board_title', 'My FluxBB Forum'),
('o_censoring', '0'),
('o_cur_version', '1.5.11'),
('o_database_revision', '21'),
('o_date_format', 'Y-m-d'),
('o_default_dst', '0'),
('o_default_email_setting', '1'),
('o_default_lang', 'English'),
('o_default_style', 'Air'),
('o_default_timezone', '0'),
('o_default_user_group', '4'),
('o_disp_posts_default', '25'),
('o_disp_topics_default', '30'),
('o_feed_ttl', '0'),
('o_feed_type', '2'),
('o_forum_subscriptions', '1'),
('o_gzip', '0'),
('o_indent_num_spaces', '4'),
('o_mailing_list', 'admin@change-me.com'),
('o_maintenance', '0'),
('o_maintenance_message', 'The forums are temporarily down for maintenance. Please try again in a few minutes.'),
('o_make_links', '1'),
('o_parser_revision', '2'),
('o_quickjump', '1'),
('o_quickpost', '1'),
('o_quote_depth', '3'),
('o_redirect_delay', '1'),
('o_regs_allow', '1'),
('o_regs_report', '0'),
('o_regs_verify', '0'),
('o_report_method', '0'),
('o_rules', '0'),
('o_rules_message', 'Enter your rules here'),
('o_searchindex_revision', '2'),
('o_search_all_forums', '1'),
('o_show_dot', '0'),
('o_show_post_count', '1'),
('o_show_user_info', '1'),
('o_show_version', '0'),
('o_signatures', '1'),
('o_smilies', '1'),
('o_smilies_sig', '1'),
('o_smtp_host', NULL),
('o_smtp_pass', NULL),
('o_smtp_ssl', '0'),
('o_smtp_user', NULL),
('o_timeout_online', '300'),
('o_timeout_visit', '1800'),
('o_time_format', 'H:i:s'),
('o_topic_review', '15'),
('o_topic_subscriptions', '1'),
('o_topic_views', '1'),
('o_users_online', '1'),
('o_webmaster_email', 'admin@change-me.com'),
('p_allow_banned_email', '1'),
('p_allow_dupe_email', '0'),
('p_force_guest_email', '1'),
('p_message_all_caps', '1'),
('p_message_bbcode', '1'),
('p_message_img_tag', '1'),
('p_sig_all_caps', '1'),
('p_sig_bbcode', '1'),
('p_sig_img_tag', '0'),
('p_sig_length', '400'),
('p_sig_lines', '4'),
('p_subject_all_caps', '1');

-- --------------------------------------------------------

--
-- Table structure for table `bb_forums`
--

CREATE TABLE `bb_forums` (
  `id` int UNSIGNED NOT NULL,
  `forum_name` varchar(80) NOT NULL DEFAULT 'New forum',
  `forum_desc` text,
  `redirect_url` varchar(100) DEFAULT NULL,
  `moderators` text,
  `num_topics` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `num_posts` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `last_post` int UNSIGNED DEFAULT NULL,
  `last_post_id` int UNSIGNED DEFAULT NULL,
  `last_poster` varchar(200) DEFAULT NULL,
  `sort_by` tinyint(1) NOT NULL DEFAULT '0',
  `disp_position` int NOT NULL DEFAULT '0',
  `cat_id` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_forums`
--

INSERT INTO `bb_forums` (`id`, `forum_name`, `forum_desc`, `redirect_url`, `moderators`, `num_topics`, `num_posts`, `last_post`, `last_post_id`, `last_poster`, `sort_by`, `disp_position`, `cat_id`) VALUES
(1, 'Test forum', 'This is just a test forum', NULL, NULL, 1, 1, 1651430029, 1, 'admin', 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bb_forum_perms`
--

CREATE TABLE `bb_forum_perms` (
  `group_id` int NOT NULL DEFAULT '0',
  `forum_id` int NOT NULL DEFAULT '0',
  `read_forum` tinyint(1) NOT NULL DEFAULT '1',
  `post_replies` tinyint(1) NOT NULL DEFAULT '1',
  `post_topics` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `bb_forum_subscriptions`
--

CREATE TABLE `bb_forum_subscriptions` (
  `user_id` int UNSIGNED NOT NULL DEFAULT '0',
  `forum_id` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `bb_groups`
--

CREATE TABLE `bb_groups` (
  `g_id` int UNSIGNED NOT NULL,
  `g_title` varchar(50) NOT NULL DEFAULT '',
  `g_user_title` varchar(50) DEFAULT NULL,
  `g_promote_min_posts` int UNSIGNED NOT NULL DEFAULT '0',
  `g_promote_next_group` int UNSIGNED NOT NULL DEFAULT '0',
  `g_moderator` tinyint(1) NOT NULL DEFAULT '0',
  `g_mod_edit_users` tinyint(1) NOT NULL DEFAULT '0',
  `g_mod_rename_users` tinyint(1) NOT NULL DEFAULT '0',
  `g_mod_change_passwords` tinyint(1) NOT NULL DEFAULT '0',
  `g_mod_ban_users` tinyint(1) NOT NULL DEFAULT '0',
  `g_mod_promote_users` tinyint(1) NOT NULL DEFAULT '0',
  `g_read_board` tinyint(1) NOT NULL DEFAULT '1',
  `g_view_users` tinyint(1) NOT NULL DEFAULT '1',
  `g_post_replies` tinyint(1) NOT NULL DEFAULT '1',
  `g_post_topics` tinyint(1) NOT NULL DEFAULT '1',
  `g_edit_posts` tinyint(1) NOT NULL DEFAULT '1',
  `g_delete_posts` tinyint(1) NOT NULL DEFAULT '1',
  `g_delete_topics` tinyint(1) NOT NULL DEFAULT '1',
  `g_post_links` tinyint(1) NOT NULL DEFAULT '1',
  `g_set_title` tinyint(1) NOT NULL DEFAULT '1',
  `g_search` tinyint(1) NOT NULL DEFAULT '1',
  `g_search_users` tinyint(1) NOT NULL DEFAULT '1',
  `g_send_email` tinyint(1) NOT NULL DEFAULT '1',
  `g_post_flood` smallint NOT NULL DEFAULT '30',
  `g_search_flood` smallint NOT NULL DEFAULT '30',
  `g_email_flood` smallint NOT NULL DEFAULT '60',
  `g_report_flood` smallint NOT NULL DEFAULT '60'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_groups`
--

INSERT INTO `bb_groups` (`g_id`, `g_title`, `g_user_title`, `g_promote_min_posts`, `g_promote_next_group`, `g_moderator`, `g_mod_edit_users`, `g_mod_rename_users`, `g_mod_change_passwords`, `g_mod_ban_users`, `g_mod_promote_users`, `g_read_board`, `g_view_users`, `g_post_replies`, `g_post_topics`, `g_edit_posts`, `g_delete_posts`, `g_delete_topics`, `g_post_links`, `g_set_title`, `g_search`, `g_search_users`, `g_send_email`, `g_post_flood`, `g_search_flood`, `g_email_flood`, `g_report_flood`) VALUES
(1, 'Administrators', 'Administrator', 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0),
(2, 'Moderators', 'Moderator', 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0),
(3, 'Guests', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 60, 30, 0, 0),
(4, 'Members', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 60, 30, 60, 60);

-- --------------------------------------------------------

--
-- Table structure for table `bb_online`
--

CREATE TABLE `bb_online` (
  `user_id` int UNSIGNED NOT NULL DEFAULT '1',
  `ident` varchar(200) NOT NULL DEFAULT '',
  `logged` int UNSIGNED NOT NULL DEFAULT '0',
  `idle` tinyint(1) NOT NULL DEFAULT '0',
  `last_post` int UNSIGNED DEFAULT NULL,
  `last_search` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_online`
--

INSERT INTO `bb_online` (`user_id`, `ident`, `logged`, `idle`, `last_post`, `last_search`) VALUES
(1, '127.0.0.1', 1651430047, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bb_posts`
--

CREATE TABLE `bb_posts` (
  `id` int UNSIGNED NOT NULL,
  `poster` varchar(200) NOT NULL DEFAULT '',
  `poster_id` int UNSIGNED NOT NULL DEFAULT '1',
  `poster_ip` varchar(39) DEFAULT NULL,
  `poster_email` varchar(80) DEFAULT NULL,
  `message` mediumtext,
  `hide_smilies` tinyint(1) NOT NULL DEFAULT '0',
  `posted` int UNSIGNED NOT NULL DEFAULT '0',
  `edited` int UNSIGNED DEFAULT NULL,
  `edited_by` varchar(200) DEFAULT NULL,
  `topic_id` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_posts`
--

INSERT INTO `bb_posts` (`id`, `poster`, `poster_id`, `poster_ip`, `poster_email`, `message`, `hide_smilies`, `posted`, `edited`, `edited_by`, `topic_id`) VALUES
(1, 'admin', 2, '127.0.0.1', NULL, 'If you are looking at this (which I guess you are), the install of FluxBB appears to have worked! Now log in and head over to the administration control panel to configure your forum.', 0, 1651430029, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bb_reports`
--

CREATE TABLE `bb_reports` (
  `id` int UNSIGNED NOT NULL,
  `post_id` int UNSIGNED NOT NULL DEFAULT '0',
  `topic_id` int UNSIGNED NOT NULL DEFAULT '0',
  `forum_id` int UNSIGNED NOT NULL DEFAULT '0',
  `reported_by` int UNSIGNED NOT NULL DEFAULT '0',
  `created` int UNSIGNED NOT NULL DEFAULT '0',
  `message` text,
  `zapped` int UNSIGNED DEFAULT NULL,
  `zapped_by` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `bb_search_cache`
--

CREATE TABLE `bb_search_cache` (
  `id` int UNSIGNED NOT NULL DEFAULT '0',
  `ident` varchar(200) NOT NULL DEFAULT '',
  `search_data` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `bb_search_matches`
--

CREATE TABLE `bb_search_matches` (
  `post_id` int UNSIGNED NOT NULL DEFAULT '0',
  `word_id` int UNSIGNED NOT NULL DEFAULT '0',
  `subject_match` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_search_matches`
--

INSERT INTO `bb_search_matches` (`post_id`, `word_id`, `subject_match`) VALUES
(1, 1, 0),
(1, 2, 0),
(1, 3, 0),
(1, 4, 0),
(1, 5, 0),
(1, 6, 0),
(1, 7, 0),
(1, 8, 0),
(1, 9, 0),
(1, 10, 0),
(1, 11, 0),
(1, 12, 0),
(1, 13, 0),
(1, 14, 1),
(1, 15, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bb_search_words`
--

CREATE TABLE `bb_search_words` (
  `id` int UNSIGNED NOT NULL,
  `word` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_search_words`
--

INSERT INTO `bb_search_words` (`id`, `word`) VALUES
(1, 'looking'),
(2, 'guess'),
(3, 'install'),
(4, 'fluxbb'),
(5, 'appears'),
(6, 'worked'),
(7, 'log'),
(8, 'head'),
(9, 'administration'),
(10, 'control'),
(11, 'panel'),
(12, 'configure'),
(13, 'forum'),
(14, 'test'),
(15, 'topic');

-- --------------------------------------------------------

--
-- Table structure for table `bb_topics`
--

CREATE TABLE `bb_topics` (
  `id` int UNSIGNED NOT NULL,
  `poster` varchar(200) NOT NULL DEFAULT '',
  `subject` varchar(255) NOT NULL DEFAULT '',
  `posted` int UNSIGNED NOT NULL DEFAULT '0',
  `first_post_id` int UNSIGNED NOT NULL DEFAULT '0',
  `last_post` int UNSIGNED NOT NULL DEFAULT '0',
  `last_post_id` int UNSIGNED NOT NULL DEFAULT '0',
  `last_poster` varchar(200) DEFAULT NULL,
  `num_views` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `num_replies` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `closed` tinyint(1) NOT NULL DEFAULT '0',
  `sticky` tinyint(1) NOT NULL DEFAULT '0',
  `moved_to` int UNSIGNED DEFAULT NULL,
  `forum_id` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_topics`
--

INSERT INTO `bb_topics` (`id`, `poster`, `subject`, `posted`, `first_post_id`, `last_post`, `last_post_id`, `last_poster`, `num_views`, `num_replies`, `closed`, `sticky`, `moved_to`, `forum_id`) VALUES
(1, 'admin', 'Test topic', 1651430029, 1, 1651430029, 1, 'admin', 0, 0, 0, 0, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bb_topic_subscriptions`
--

CREATE TABLE `bb_topic_subscriptions` (
  `user_id` int UNSIGNED NOT NULL DEFAULT '0',
  `topic_id` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `bb_users`
--

CREATE TABLE `bb_users` (
  `id` int UNSIGNED NOT NULL,
  `group_id` int UNSIGNED NOT NULL DEFAULT '3',
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
  `signature` text,
  `disp_topics` tinyint UNSIGNED DEFAULT NULL,
  `disp_posts` tinyint UNSIGNED DEFAULT NULL,
  `email_setting` tinyint(1) NOT NULL DEFAULT '1',
  `notify_with_post` tinyint(1) NOT NULL DEFAULT '0',
  `auto_notify` tinyint(1) NOT NULL DEFAULT '0',
  `show_smilies` tinyint(1) NOT NULL DEFAULT '1',
  `show_img` tinyint(1) NOT NULL DEFAULT '1',
  `show_img_sig` tinyint(1) NOT NULL DEFAULT '1',
  `show_avatars` tinyint(1) NOT NULL DEFAULT '1',
  `show_sig` tinyint(1) NOT NULL DEFAULT '1',
  `timezone` float NOT NULL DEFAULT '0',
  `dst` tinyint(1) NOT NULL DEFAULT '0',
  `time_format` tinyint(1) NOT NULL DEFAULT '0',
  `date_format` tinyint(1) NOT NULL DEFAULT '0',
  `language` varchar(25) NOT NULL DEFAULT 'English',
  `style` varchar(25) NOT NULL DEFAULT 'Air',
  `num_posts` int UNSIGNED NOT NULL DEFAULT '0',
  `last_post` int UNSIGNED DEFAULT NULL,
  `last_search` int UNSIGNED DEFAULT NULL,
  `last_email_sent` int UNSIGNED DEFAULT NULL,
  `last_report_sent` int UNSIGNED DEFAULT NULL,
  `registered` int UNSIGNED NOT NULL DEFAULT '0',
  `registration_ip` varchar(39) NOT NULL DEFAULT '0.0.0.0',
  `last_visit` int UNSIGNED NOT NULL DEFAULT '0',
  `admin_note` varchar(30) DEFAULT NULL,
  `activate_string` varchar(80) DEFAULT NULL,
  `activate_key` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `bb_users`
--

INSERT INTO `bb_users` (`id`, `group_id`, `username`, `password`, `email`, `title`, `realname`, `url`, `jabber`, `icq`, `msn`, `aim`, `yahoo`, `location`, `signature`, `disp_topics`, `disp_posts`, `email_setting`, `notify_with_post`, `auto_notify`, `show_smilies`, `show_img`, `show_img_sig`, `show_avatars`, `show_sig`, `timezone`, `dst`, `time_format`, `date_format`, `language`, `style`, `num_posts`, `last_post`, `last_search`, `last_email_sent`, `last_report_sent`, `registered`, `registration_ip`, `last_visit`, `admin_note`, `activate_string`, `activate_key`) VALUES
(1, 3, 'Guest', 'Guest', 'Guest', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 'English', 'Air', 0, NULL, NULL, NULL, NULL, 0, '0.0.0.0', 0, NULL, NULL, NULL),
(2, 1, 'admin', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'admin@change-me.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 'English', 'Air', 1, 1651430029, NULL, NULL, NULL, 1651430029, '127.0.0.1', 1651430029, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bb_bans`
--
ALTER TABLE `bb_bans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bb_bans_username_idx` (`username`(25));

--
-- Indexes for table `bb_categories`
--
ALTER TABLE `bb_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bb_censoring`
--
ALTER TABLE `bb_censoring`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bb_config`
--
ALTER TABLE `bb_config`
  ADD PRIMARY KEY (`conf_name`);

--
-- Indexes for table `bb_forums`
--
ALTER TABLE `bb_forums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bb_forum_perms`
--
ALTER TABLE `bb_forum_perms`
  ADD PRIMARY KEY (`group_id`,`forum_id`);

--
-- Indexes for table `bb_forum_subscriptions`
--
ALTER TABLE `bb_forum_subscriptions`
  ADD PRIMARY KEY (`user_id`,`forum_id`);

--
-- Indexes for table `bb_groups`
--
ALTER TABLE `bb_groups`
  ADD PRIMARY KEY (`g_id`);

--
-- Indexes for table `bb_online`
--
ALTER TABLE `bb_online`
  ADD UNIQUE KEY `bb_online_user_id_ident_idx` (`user_id`,`ident`(25)),
  ADD KEY `bb_online_ident_idx` (`ident`(25)),
  ADD KEY `bb_online_logged_idx` (`logged`);

--
-- Indexes for table `bb_posts`
--
ALTER TABLE `bb_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bb_posts_topic_id_idx` (`topic_id`),
  ADD KEY `bb_posts_multi_idx` (`poster_id`,`topic_id`);

--
-- Indexes for table `bb_reports`
--
ALTER TABLE `bb_reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bb_reports_zapped_idx` (`zapped`);

--
-- Indexes for table `bb_search_cache`
--
ALTER TABLE `bb_search_cache`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bb_search_cache_ident_idx` (`ident`(8));

--
-- Indexes for table `bb_search_matches`
--
ALTER TABLE `bb_search_matches`
  ADD KEY `bb_search_matches_word_id_idx` (`word_id`),
  ADD KEY `bb_search_matches_post_id_idx` (`post_id`);

--
-- Indexes for table `bb_search_words`
--
ALTER TABLE `bb_search_words`
  ADD PRIMARY KEY (`word`),
  ADD KEY `bb_search_words_id_idx` (`id`);

--
-- Indexes for table `bb_topics`
--
ALTER TABLE `bb_topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bb_topics_forum_id_idx` (`forum_id`),
  ADD KEY `bb_topics_moved_to_idx` (`moved_to`),
  ADD KEY `bb_topics_last_post_idx` (`last_post`),
  ADD KEY `bb_topics_first_post_id_idx` (`first_post_id`);

--
-- Indexes for table `bb_topic_subscriptions`
--
ALTER TABLE `bb_topic_subscriptions`
  ADD PRIMARY KEY (`user_id`,`topic_id`);

--
-- Indexes for table `bb_users`
--
ALTER TABLE `bb_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bb_users_username_idx` (`username`(25)),
  ADD KEY `bb_users_registered_idx` (`registered`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bb_bans`
--
ALTER TABLE `bb_bans`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bb_categories`
--
ALTER TABLE `bb_categories`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bb_censoring`
--
ALTER TABLE `bb_censoring`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bb_forums`
--
ALTER TABLE `bb_forums`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bb_groups`
--
ALTER TABLE `bb_groups`
  MODIFY `g_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bb_posts`
--
ALTER TABLE `bb_posts`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bb_reports`
--
ALTER TABLE `bb_reports`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bb_search_words`
--
ALTER TABLE `bb_search_words`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `bb_topics`
--
ALTER TABLE `bb_topics`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bb_users`
--
ALTER TABLE `bb_users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
