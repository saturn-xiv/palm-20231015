--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6
-- Dumped by pg_dump version 13.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: forum_bans; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_bans (
    id integer NOT NULL,
    username character varying(200),
    ip character varying(255),
    email character varying(80),
    message character varying(255),
    expire integer,
    ban_creator integer DEFAULT 0 NOT NULL
);


--
-- Name: forum_bans_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_bans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_bans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_bans_id_seq OWNED BY public.forum_bans.id;


--
-- Name: forum_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_categories (
    id integer NOT NULL,
    cat_name character varying(80) DEFAULT 'New Category'::character varying NOT NULL,
    disp_position integer DEFAULT 0 NOT NULL
);


--
-- Name: forum_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_categories_id_seq OWNED BY public.forum_categories.id;


--
-- Name: forum_censoring; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_censoring (
    id integer NOT NULL,
    search_for character varying(60) DEFAULT ''::character varying NOT NULL,
    replace_with character varying(60) DEFAULT ''::character varying NOT NULL
);


--
-- Name: forum_censoring_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_censoring_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_censoring_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_censoring_id_seq OWNED BY public.forum_censoring.id;


--
-- Name: forum_config; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_config (
    conf_name character varying(255) DEFAULT ''::character varying NOT NULL,
    conf_value text
);


--
-- Name: forum_forum_perms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_forum_perms (
    group_id integer DEFAULT 0 NOT NULL,
    forum_id integer DEFAULT 0 NOT NULL,
    read_forum smallint DEFAULT 1 NOT NULL,
    post_replies smallint DEFAULT 1 NOT NULL,
    post_topics smallint DEFAULT 1 NOT NULL
);


--
-- Name: forum_forum_subscriptions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_forum_subscriptions (
    user_id integer DEFAULT 0 NOT NULL,
    forum_id integer DEFAULT 0 NOT NULL
);


--
-- Name: forum_forums; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_forums (
    id integer NOT NULL,
    forum_name character varying(80) DEFAULT 'New forum'::character varying NOT NULL,
    forum_desc text,
    redirect_url character varying(100),
    moderators text,
    num_topics integer DEFAULT 0 NOT NULL,
    num_posts integer DEFAULT 0 NOT NULL,
    last_post integer,
    last_post_id integer,
    last_poster character varying(200),
    sort_by smallint DEFAULT 0 NOT NULL,
    disp_position integer DEFAULT 0 NOT NULL,
    cat_id integer DEFAULT 0 NOT NULL
);


--
-- Name: forum_forums_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_forums_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_forums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_forums_id_seq OWNED BY public.forum_forums.id;


--
-- Name: forum_groups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_groups (
    g_id integer NOT NULL,
    g_title character varying(50) DEFAULT ''::character varying NOT NULL,
    g_user_title character varying(50),
    g_promote_min_posts integer DEFAULT 0 NOT NULL,
    g_promote_next_group integer DEFAULT 0 NOT NULL,
    g_moderator smallint DEFAULT 0 NOT NULL,
    g_mod_edit_users smallint DEFAULT 0 NOT NULL,
    g_mod_rename_users smallint DEFAULT 0 NOT NULL,
    g_mod_change_passwords smallint DEFAULT 0 NOT NULL,
    g_mod_ban_users smallint DEFAULT 0 NOT NULL,
    g_mod_promote_users smallint DEFAULT 0 NOT NULL,
    g_read_board smallint DEFAULT 1 NOT NULL,
    g_view_users smallint DEFAULT 1 NOT NULL,
    g_post_replies smallint DEFAULT 1 NOT NULL,
    g_post_topics smallint DEFAULT 1 NOT NULL,
    g_edit_posts smallint DEFAULT 1 NOT NULL,
    g_delete_posts smallint DEFAULT 1 NOT NULL,
    g_delete_topics smallint DEFAULT 1 NOT NULL,
    g_post_links smallint DEFAULT 1 NOT NULL,
    g_set_title smallint DEFAULT 1 NOT NULL,
    g_search smallint DEFAULT 1 NOT NULL,
    g_search_users smallint DEFAULT 1 NOT NULL,
    g_send_email smallint DEFAULT 1 NOT NULL,
    g_post_flood smallint DEFAULT 30 NOT NULL,
    g_search_flood smallint DEFAULT 30 NOT NULL,
    g_email_flood smallint DEFAULT 60 NOT NULL,
    g_report_flood smallint DEFAULT 60 NOT NULL
);


--
-- Name: forum_groups_g_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_groups_g_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_groups_g_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_groups_g_id_seq OWNED BY public.forum_groups.g_id;


--
-- Name: forum_online; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_online (
    user_id integer DEFAULT 1 NOT NULL,
    ident character varying(200) DEFAULT ''::character varying NOT NULL,
    logged integer DEFAULT 0 NOT NULL,
    idle smallint DEFAULT 0 NOT NULL,
    last_post integer,
    last_search integer
);


--
-- Name: forum_posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_posts (
    id integer NOT NULL,
    poster character varying(200) DEFAULT ''::character varying NOT NULL,
    poster_id integer DEFAULT 1 NOT NULL,
    poster_ip character varying(39),
    poster_email character varying(80),
    message text,
    hide_smilies smallint DEFAULT 0 NOT NULL,
    posted integer DEFAULT 0 NOT NULL,
    edited integer,
    edited_by character varying(200),
    topic_id integer DEFAULT 0 NOT NULL
);


--
-- Name: forum_posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_posts_id_seq OWNED BY public.forum_posts.id;


--
-- Name: forum_reports; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_reports (
    id integer NOT NULL,
    post_id integer DEFAULT 0 NOT NULL,
    topic_id integer DEFAULT 0 NOT NULL,
    forum_id integer DEFAULT 0 NOT NULL,
    reported_by integer DEFAULT 0 NOT NULL,
    created integer DEFAULT 0 NOT NULL,
    message text,
    zapped integer,
    zapped_by integer
);


--
-- Name: forum_reports_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_reports_id_seq OWNED BY public.forum_reports.id;


--
-- Name: forum_search_cache; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_search_cache (
    id integer DEFAULT 0 NOT NULL,
    ident character varying(200) DEFAULT ''::character varying NOT NULL,
    search_data text
);


--
-- Name: forum_search_matches; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_search_matches (
    post_id integer DEFAULT 0 NOT NULL,
    word_id integer DEFAULT 0 NOT NULL,
    subject_match smallint DEFAULT 0 NOT NULL
);


--
-- Name: forum_search_words; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_search_words (
    id integer NOT NULL,
    word character varying(20) DEFAULT ''::character varying NOT NULL
);


--
-- Name: forum_search_words_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_search_words_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_search_words_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_search_words_id_seq OWNED BY public.forum_search_words.id;


--
-- Name: forum_topic_subscriptions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_topic_subscriptions (
    user_id integer DEFAULT 0 NOT NULL,
    topic_id integer DEFAULT 0 NOT NULL
);


--
-- Name: forum_topics; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_topics (
    id integer NOT NULL,
    poster character varying(200) DEFAULT ''::character varying NOT NULL,
    subject character varying(255) DEFAULT ''::character varying NOT NULL,
    posted integer DEFAULT 0 NOT NULL,
    first_post_id integer DEFAULT 0 NOT NULL,
    last_post integer DEFAULT 0 NOT NULL,
    last_post_id integer DEFAULT 0 NOT NULL,
    last_poster character varying(200),
    num_views integer DEFAULT 0 NOT NULL,
    num_replies integer DEFAULT 0 NOT NULL,
    closed smallint DEFAULT 0 NOT NULL,
    sticky smallint DEFAULT 0 NOT NULL,
    moved_to integer,
    forum_id integer DEFAULT 0 NOT NULL
);


--
-- Name: forum_topics_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_topics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_topics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_topics_id_seq OWNED BY public.forum_topics.id;


--
-- Name: forum_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.forum_users (
    id integer NOT NULL,
    group_id integer DEFAULT 3 NOT NULL,
    username character varying(200) DEFAULT ''::character varying NOT NULL,
    password character varying(40) DEFAULT ''::character varying NOT NULL,
    email character varying(80) DEFAULT ''::character varying NOT NULL,
    title character varying(50),
    realname character varying(40),
    url character varying(100),
    jabber character varying(80),
    icq character varying(12),
    msn character varying(80),
    aim character varying(30),
    yahoo character varying(30),
    location character varying(30),
    signature text,
    disp_topics smallint,
    disp_posts smallint,
    email_setting smallint DEFAULT 1 NOT NULL,
    notify_with_post smallint DEFAULT 0 NOT NULL,
    auto_notify smallint DEFAULT 0 NOT NULL,
    show_smilies smallint DEFAULT 1 NOT NULL,
    show_img smallint DEFAULT 1 NOT NULL,
    show_img_sig smallint DEFAULT 1 NOT NULL,
    show_avatars smallint DEFAULT 1 NOT NULL,
    show_sig smallint DEFAULT 1 NOT NULL,
    timezone real DEFAULT 0 NOT NULL,
    dst smallint DEFAULT 0 NOT NULL,
    time_format smallint DEFAULT 0 NOT NULL,
    date_format smallint DEFAULT 0 NOT NULL,
    language character varying(25) DEFAULT 'English'::character varying NOT NULL,
    style character varying(25) DEFAULT 'Air'::character varying NOT NULL,
    num_posts integer DEFAULT 0 NOT NULL,
    last_post integer,
    last_search integer,
    last_email_sent integer,
    last_report_sent integer,
    registered integer DEFAULT 0 NOT NULL,
    registration_ip character varying(39) DEFAULT '0.0.0.0'::character varying NOT NULL,
    last_visit integer DEFAULT 0 NOT NULL,
    admin_note character varying(30),
    activate_string character varying(80),
    activate_key character varying(8)
);


--
-- Name: forum_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.forum_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forum_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.forum_users_id_seq OWNED BY public.forum_users.id;


--
-- Name: forum_bans id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_bans ALTER COLUMN id SET DEFAULT nextval('public.forum_bans_id_seq'::regclass);


--
-- Name: forum_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_categories ALTER COLUMN id SET DEFAULT nextval('public.forum_categories_id_seq'::regclass);


--
-- Name: forum_censoring id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_censoring ALTER COLUMN id SET DEFAULT nextval('public.forum_censoring_id_seq'::regclass);


--
-- Name: forum_forums id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_forums ALTER COLUMN id SET DEFAULT nextval('public.forum_forums_id_seq'::regclass);


--
-- Name: forum_groups g_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_groups ALTER COLUMN g_id SET DEFAULT nextval('public.forum_groups_g_id_seq'::regclass);


--
-- Name: forum_posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_posts ALTER COLUMN id SET DEFAULT nextval('public.forum_posts_id_seq'::regclass);


--
-- Name: forum_reports id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_reports ALTER COLUMN id SET DEFAULT nextval('public.forum_reports_id_seq'::regclass);


--
-- Name: forum_search_words id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_search_words ALTER COLUMN id SET DEFAULT nextval('public.forum_search_words_id_seq'::regclass);


--
-- Name: forum_topics id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_topics ALTER COLUMN id SET DEFAULT nextval('public.forum_topics_id_seq'::regclass);


--
-- Name: forum_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_users ALTER COLUMN id SET DEFAULT nextval('public.forum_users_id_seq'::regclass);


--
-- Data for Name: forum_bans; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_categories VALUES (1, 'Test category', 1);


--
-- Data for Name: forum_censoring; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_config; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_config VALUES ('o_cur_version', '1.5.11');
INSERT INTO public.forum_config VALUES ('o_database_revision', '21');
INSERT INTO public.forum_config VALUES ('o_searchindex_revision', '2');
INSERT INTO public.forum_config VALUES ('o_parser_revision', '2');
INSERT INTO public.forum_config VALUES ('o_board_title', 'My FluxBB Forum');
INSERT INTO public.forum_config VALUES ('o_board_desc', '<p><span>Unfortunately no one can be told what FluxBB is - you have to see it for yourself.</span></p>');
INSERT INTO public.forum_config VALUES ('o_default_timezone', '0');
INSERT INTO public.forum_config VALUES ('o_time_format', 'H:i:s');
INSERT INTO public.forum_config VALUES ('o_date_format', 'Y-m-d');
INSERT INTO public.forum_config VALUES ('o_timeout_visit', '1800');
INSERT INTO public.forum_config VALUES ('o_timeout_online', '300');
INSERT INTO public.forum_config VALUES ('o_redirect_delay', '1');
INSERT INTO public.forum_config VALUES ('o_show_version', '0');
INSERT INTO public.forum_config VALUES ('o_show_user_info', '1');
INSERT INTO public.forum_config VALUES ('o_show_post_count', '1');
INSERT INTO public.forum_config VALUES ('o_signatures', '1');
INSERT INTO public.forum_config VALUES ('o_smilies', '1');
INSERT INTO public.forum_config VALUES ('o_smilies_sig', '1');
INSERT INTO public.forum_config VALUES ('o_make_links', '1');
INSERT INTO public.forum_config VALUES ('o_default_lang', 'English');
INSERT INTO public.forum_config VALUES ('o_default_style', 'Air');
INSERT INTO public.forum_config VALUES ('o_default_user_group', '4');
INSERT INTO public.forum_config VALUES ('o_topic_review', '15');
INSERT INTO public.forum_config VALUES ('o_disp_topics_default', '30');
INSERT INTO public.forum_config VALUES ('o_disp_posts_default', '25');
INSERT INTO public.forum_config VALUES ('o_indent_num_spaces', '4');
INSERT INTO public.forum_config VALUES ('o_quote_depth', '3');
INSERT INTO public.forum_config VALUES ('o_quickpost', '1');
INSERT INTO public.forum_config VALUES ('o_users_online', '1');
INSERT INTO public.forum_config VALUES ('o_censoring', '0');
INSERT INTO public.forum_config VALUES ('o_show_dot', '0');
INSERT INTO public.forum_config VALUES ('o_topic_views', '1');
INSERT INTO public.forum_config VALUES ('o_quickjump', '1');
INSERT INTO public.forum_config VALUES ('o_gzip', '0');
INSERT INTO public.forum_config VALUES ('o_additional_navlinks', '');
INSERT INTO public.forum_config VALUES ('o_report_method', '0');
INSERT INTO public.forum_config VALUES ('o_regs_report', '0');
INSERT INTO public.forum_config VALUES ('o_default_email_setting', '1');
INSERT INTO public.forum_config VALUES ('o_mailing_list', 'change-me@gmail.com');
INSERT INTO public.forum_config VALUES ('o_avatars', '1');
INSERT INTO public.forum_config VALUES ('o_avatars_dir', 'img/avatars');
INSERT INTO public.forum_config VALUES ('o_avatars_width', '60');
INSERT INTO public.forum_config VALUES ('o_avatars_height', '60');
INSERT INTO public.forum_config VALUES ('o_avatars_size', '10240');
INSERT INTO public.forum_config VALUES ('o_search_all_forums', '1');
INSERT INTO public.forum_config VALUES ('o_base_url', 'http://localhost:8088/forum');
INSERT INTO public.forum_config VALUES ('o_admin_email', 'change-me@gmail.com');
INSERT INTO public.forum_config VALUES ('o_webmaster_email', 'change-me@gmail.com');
INSERT INTO public.forum_config VALUES ('o_forum_subscriptions', '1');
INSERT INTO public.forum_config VALUES ('o_topic_subscriptions', '1');
INSERT INTO public.forum_config VALUES ('o_smtp_host', NULL);
INSERT INTO public.forum_config VALUES ('o_smtp_user', NULL);
INSERT INTO public.forum_config VALUES ('o_smtp_pass', NULL);
INSERT INTO public.forum_config VALUES ('o_smtp_ssl', '0');
INSERT INTO public.forum_config VALUES ('o_regs_allow', '1');
INSERT INTO public.forum_config VALUES ('o_regs_verify', '0');
INSERT INTO public.forum_config VALUES ('o_announcement', '0');
INSERT INTO public.forum_config VALUES ('o_announcement_message', 'Enter your announcement here.');
INSERT INTO public.forum_config VALUES ('o_rules', '0');
INSERT INTO public.forum_config VALUES ('o_rules_message', 'Enter your rules here');
INSERT INTO public.forum_config VALUES ('o_maintenance', '0');
INSERT INTO public.forum_config VALUES ('o_maintenance_message', 'The forums are temporarily down for maintenance. Please try again in a few minutes.');
INSERT INTO public.forum_config VALUES ('o_default_dst', '0');
INSERT INTO public.forum_config VALUES ('o_feed_type', '2');
INSERT INTO public.forum_config VALUES ('o_feed_ttl', '0');
INSERT INTO public.forum_config VALUES ('p_message_bbcode', '1');
INSERT INTO public.forum_config VALUES ('p_message_img_tag', '1');
INSERT INTO public.forum_config VALUES ('p_message_all_caps', '1');
INSERT INTO public.forum_config VALUES ('p_subject_all_caps', '1');
INSERT INTO public.forum_config VALUES ('p_sig_all_caps', '1');
INSERT INTO public.forum_config VALUES ('p_sig_bbcode', '1');
INSERT INTO public.forum_config VALUES ('p_sig_img_tag', '0');
INSERT INTO public.forum_config VALUES ('p_sig_length', '400');
INSERT INTO public.forum_config VALUES ('p_sig_lines', '4');
INSERT INTO public.forum_config VALUES ('p_allow_banned_email', '1');
INSERT INTO public.forum_config VALUES ('p_allow_dupe_email', '0');
INSERT INTO public.forum_config VALUES ('p_force_guest_email', '1');


--
-- Data for Name: forum_forum_perms; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_forum_subscriptions; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_forums; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_forums VALUES (1, 'Test forum', 'This is just a test forum', NULL, NULL, 1, 1, 1648917939, 1, 'admin', 0, 1, 1);


--
-- Data for Name: forum_groups; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_groups VALUES (1, 'Administrators', 'Administrator', 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
INSERT INTO public.forum_groups VALUES (2, 'Moderators', 'Moderator', 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
INSERT INTO public.forum_groups VALUES (3, 'Guests', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 60, 30, 0, 0);
INSERT INTO public.forum_groups VALUES (4, 'Members', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 60, 30, 60, 60);


--
-- Data for Name: forum_online; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_posts VALUES (1, 'admin', 2, '127.0.0.1', NULL, 'If you are looking at this (which I guess you are), the install of FluxBB appears to have worked! Now log in and head over to the administration control panel to configure your forum.', 0, 1648917939, NULL, NULL, 1);


--
-- Data for Name: forum_reports; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_search_cache; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_search_matches; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_search_matches VALUES (1, 1, 0);
INSERT INTO public.forum_search_matches VALUES (1, 2, 0);
INSERT INTO public.forum_search_matches VALUES (1, 3, 0);
INSERT INTO public.forum_search_matches VALUES (1, 4, 0);
INSERT INTO public.forum_search_matches VALUES (1, 5, 0);
INSERT INTO public.forum_search_matches VALUES (1, 6, 0);
INSERT INTO public.forum_search_matches VALUES (1, 7, 0);
INSERT INTO public.forum_search_matches VALUES (1, 8, 0);
INSERT INTO public.forum_search_matches VALUES (1, 9, 0);
INSERT INTO public.forum_search_matches VALUES (1, 10, 0);
INSERT INTO public.forum_search_matches VALUES (1, 11, 0);
INSERT INTO public.forum_search_matches VALUES (1, 12, 0);
INSERT INTO public.forum_search_matches VALUES (1, 13, 0);
INSERT INTO public.forum_search_matches VALUES (1, 14, 1);
INSERT INTO public.forum_search_matches VALUES (1, 15, 1);


--
-- Data for Name: forum_search_words; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_search_words VALUES (1, 'looking');
INSERT INTO public.forum_search_words VALUES (2, 'guess');
INSERT INTO public.forum_search_words VALUES (3, 'install');
INSERT INTO public.forum_search_words VALUES (4, 'fluxbb');
INSERT INTO public.forum_search_words VALUES (5, 'appears');
INSERT INTO public.forum_search_words VALUES (6, 'worked');
INSERT INTO public.forum_search_words VALUES (7, 'log');
INSERT INTO public.forum_search_words VALUES (8, 'head');
INSERT INTO public.forum_search_words VALUES (9, 'administration');
INSERT INTO public.forum_search_words VALUES (10, 'control');
INSERT INTO public.forum_search_words VALUES (11, 'panel');
INSERT INTO public.forum_search_words VALUES (12, 'configure');
INSERT INTO public.forum_search_words VALUES (13, 'forum');
INSERT INTO public.forum_search_words VALUES (14, 'test');
INSERT INTO public.forum_search_words VALUES (15, 'topic');


--
-- Data for Name: forum_topic_subscriptions; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: forum_topics; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_topics VALUES (1, 'admin', 'Test topic', 1648917939, 1, 1648917939, 1, 'admin', 0, 0, 0, 0, NULL, 1);


--
-- Data for Name: forum_users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.forum_users VALUES (1, 3, 'Guest', 'Guest', 'Guest', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 'English', 'Air', 0, NULL, NULL, NULL, NULL, 0, '0.0.0.0', 0, NULL, NULL, NULL);
INSERT INTO public.forum_users VALUES (2, 1, 'admin', 'f729170314bd5a497585fe8a579f4b6e90c4ed89', 'change-me@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 'English', 'Air', 1, 1648917939, NULL, NULL, NULL, 1648917939, '127.0.0.1', 1648917939, NULL, NULL, NULL);


--
-- Name: forum_bans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_bans_id_seq', 1, false);


--
-- Name: forum_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_categories_id_seq', 1, true);


--
-- Name: forum_censoring_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_censoring_id_seq', 1, false);


--
-- Name: forum_forums_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_forums_id_seq', 1, true);


--
-- Name: forum_groups_g_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_groups_g_id_seq', 4, true);


--
-- Name: forum_posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_posts_id_seq', 1, true);


--
-- Name: forum_reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_reports_id_seq', 1, false);


--
-- Name: forum_search_words_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_search_words_id_seq', 15, true);


--
-- Name: forum_topics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_topics_id_seq', 1, true);


--
-- Name: forum_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.forum_users_id_seq', 2, true);


--
-- Name: forum_bans forum_bans_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_bans
    ADD CONSTRAINT forum_bans_pkey PRIMARY KEY (id);


--
-- Name: forum_categories forum_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_categories
    ADD CONSTRAINT forum_categories_pkey PRIMARY KEY (id);


--
-- Name: forum_censoring forum_censoring_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_censoring
    ADD CONSTRAINT forum_censoring_pkey PRIMARY KEY (id);


--
-- Name: forum_config forum_config_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_config
    ADD CONSTRAINT forum_config_pkey PRIMARY KEY (conf_name);


--
-- Name: forum_forum_perms forum_forum_perms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_forum_perms
    ADD CONSTRAINT forum_forum_perms_pkey PRIMARY KEY (group_id, forum_id);


--
-- Name: forum_forum_subscriptions forum_forum_subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_forum_subscriptions
    ADD CONSTRAINT forum_forum_subscriptions_pkey PRIMARY KEY (user_id, forum_id);


--
-- Name: forum_forums forum_forums_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_forums
    ADD CONSTRAINT forum_forums_pkey PRIMARY KEY (id);


--
-- Name: forum_groups forum_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_groups
    ADD CONSTRAINT forum_groups_pkey PRIMARY KEY (g_id);


--
-- Name: forum_online forum_online_user_id_ident_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_online
    ADD CONSTRAINT forum_online_user_id_ident_key UNIQUE (user_id, ident);


--
-- Name: forum_posts forum_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_posts
    ADD CONSTRAINT forum_posts_pkey PRIMARY KEY (id);


--
-- Name: forum_reports forum_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_reports
    ADD CONSTRAINT forum_reports_pkey PRIMARY KEY (id);


--
-- Name: forum_search_cache forum_search_cache_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_search_cache
    ADD CONSTRAINT forum_search_cache_pkey PRIMARY KEY (id);


--
-- Name: forum_search_words forum_search_words_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_search_words
    ADD CONSTRAINT forum_search_words_pkey PRIMARY KEY (word);


--
-- Name: forum_topic_subscriptions forum_topic_subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_topic_subscriptions
    ADD CONSTRAINT forum_topic_subscriptions_pkey PRIMARY KEY (user_id, topic_id);


--
-- Name: forum_topics forum_topics_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_topics
    ADD CONSTRAINT forum_topics_pkey PRIMARY KEY (id);


--
-- Name: forum_users forum_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_users
    ADD CONSTRAINT forum_users_pkey PRIMARY KEY (id);


--
-- Name: forum_users forum_users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.forum_users
    ADD CONSTRAINT forum_users_username_key UNIQUE (username);


--
-- Name: forum_bans_username_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_bans_username_idx ON public.forum_bans USING btree (username);


--
-- Name: forum_online_ident_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_online_ident_idx ON public.forum_online USING btree (ident);


--
-- Name: forum_online_logged_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_online_logged_idx ON public.forum_online USING btree (logged);


--
-- Name: forum_posts_multi_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_posts_multi_idx ON public.forum_posts USING btree (poster_id, topic_id);


--
-- Name: forum_posts_topic_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_posts_topic_id_idx ON public.forum_posts USING btree (topic_id);


--
-- Name: forum_reports_zapped_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_reports_zapped_idx ON public.forum_reports USING btree (zapped);


--
-- Name: forum_search_cache_ident_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_search_cache_ident_idx ON public.forum_search_cache USING btree (ident);


--
-- Name: forum_search_matches_post_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_search_matches_post_id_idx ON public.forum_search_matches USING btree (post_id);


--
-- Name: forum_search_matches_word_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_search_matches_word_id_idx ON public.forum_search_matches USING btree (word_id);


--
-- Name: forum_search_words_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_search_words_id_idx ON public.forum_search_words USING btree (id);


--
-- Name: forum_topics_first_post_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_topics_first_post_id_idx ON public.forum_topics USING btree (first_post_id);


--
-- Name: forum_topics_forum_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_topics_forum_id_idx ON public.forum_topics USING btree (forum_id);


--
-- Name: forum_topics_last_post_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_topics_last_post_idx ON public.forum_topics USING btree (last_post);


--
-- Name: forum_topics_moved_to_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_topics_moved_to_idx ON public.forum_topics USING btree (moved_to);


--
-- Name: forum_users_registered_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX forum_users_registered_idx ON public.forum_users USING btree (registered);


--
-- PostgreSQL database dump complete
--

