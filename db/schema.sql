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
-- Name: attachment_resources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.attachment_resources (
    id integer NOT NULL,
    attachment_id integer NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: attachment_resources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.attachment_resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: attachment_resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.attachment_resources_id_seq OWNED BY public.attachment_resources.id;


--
-- Name: attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.attachments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    bucket character varying(63) NOT NULL,
    name character varying(63) NOT NULL,
    title character varying(127) NOT NULL,
    size bigint NOT NULL,
    content_type character varying(63) NOT NULL,
    status integer NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.attachments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.attachments_id_seq OWNED BY public.attachments.id;


--
-- Name: casbin_rule; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.casbin_rule (
    id integer NOT NULL,
    ptype character varying NOT NULL,
    v0 character varying NOT NULL,
    v1 character varying NOT NULL,
    v2 character varying NOT NULL,
    v3 character varying NOT NULL,
    v4 character varying NOT NULL,
    v5 character varying NOT NULL
);


--
-- Name: casbin_rule_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.casbin_rule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: casbin_rule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.casbin_rule_id_seq OWNED BY public.casbin_rule.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    code character varying(63) NOT NULL,
    "left" integer NOT NULL,
    "right" integer NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: category_resources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.category_resources (
    id integer NOT NULL,
    category_id integer NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    sort_order integer DEFAULT 100 NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: category_resources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.category_resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: category_resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.category_resources_id_seq OWNED BY public.category_resources.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    username character varying(63) NOT NULL,
    ip character varying(45) NOT NULL,
    comment_id integer,
    content text NOT NULL,
    content_editor character varying(15) NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: crawler_logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.crawler_logs (
    id integer NOT NULL,
    url character varying(255) NOT NULL,
    body bytea NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: crawler_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.crawler_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: crawler_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.crawler_logs_id_seq OWNED BY public.crawler_logs.id;


--
-- Name: excel_files; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.excel_files (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: excel_files_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.excel_files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: excel_files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.excel_files_id_seq OWNED BY public.excel_files.id;


--
-- Name: excel_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.excel_items (
    id bigint NOT NULL,
    sheet_id integer NOT NULL,
    "row" character varying(255) NOT NULL,
    "column" character varying(255) NOT NULL,
    value character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: excel_items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.excel_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: excel_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.excel_items_id_seq OWNED BY public.excel_items.id;


--
-- Name: excel_sheets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.excel_sheets (
    id integer NOT NULL,
    file_id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: excel_sheets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.excel_sheets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: excel_sheets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.excel_sheets_id_seq OWNED BY public.excel_sheets.id;


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    user_id integer NOT NULL,
    subject character varying(127) NOT NULL,
    url character varying(255) NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- Name: feedbacks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.feedbacks (
    id integer NOT NULL,
    user_id integer NOT NULL,
    username character varying(63) NOT NULL,
    mobile character varying(15) NOT NULL,
    email character varying(127) NOT NULL,
    content text NOT NULL,
    content_editor character varying(15) NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    status character varying(15) NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: feedbacks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.feedbacks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: feedbacks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.feedbacks_id_seq OWNED BY public.feedbacks.id;


--
-- Name: footprints; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.footprints (
    id integer NOT NULL,
    user_id integer NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: footprints_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.footprints_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: footprints_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.footprints_id_seq OWNED BY public.footprints.id;


--
-- Name: google_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.google_users (
    id integer NOT NULL,
    user_id integer NOT NULL,
    sub character varying(127) NOT NULL,
    code bytea NOT NULL,
    token character varying(127) NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: google_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.google_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: google_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.google_users_id_seq OWNED BY public.google_users.id;


--
-- Name: issues; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.issues (
    id integer NOT NULL,
    lang character varying(15) NOT NULL,
    question character varying(255) NOT NULL,
    answer text NOT NULL,
    answer_editor character varying(15) NOT NULL,
    resource_type character varying(255) NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: issues_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.issues_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: issues_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.issues_id_seq OWNED BY public.issues.id;


--
-- Name: leave_words; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.leave_words (
    id integer NOT NULL,
    lang character varying(15) NOT NULL,
    ip character varying(45) NOT NULL,
    body text NOT NULL,
    body_editor integer NOT NULL,
    status integer NOT NULL,
    published_at timestamp without time zone,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: leave_words_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.leave_words_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: leave_words_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.leave_words_id_seq OWNED BY public.leave_words.id;


--
-- Name: locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.locales (
    id integer NOT NULL,
    lang character varying(8) NOT NULL,
    code character varying(255) NOT NULL,
    message text NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.locales_id_seq OWNED BY public.locales.id;


--
-- Name: logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.logs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    level integer NOT NULL,
    ip character varying(45) NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer,
    message text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: logs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;


--
-- Name: menus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.menus (
    id integer NOT NULL,
    code character varying(63) NOT NULL,
    location character varying(31) NOT NULL,
    "left" integer NOT NULL,
    "right" integer NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: menus_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.menus_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: menus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.menus_id_seq OWNED BY public.menus.id;


--
-- Name: notifications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notifications (
    id integer NOT NULL,
    user_id integer NOT NULL,
    subject character varying(127) NOT NULL,
    body character varying(511) NOT NULL,
    url character varying(255) NOT NULL,
    status character varying(15) NOT NULL,
    read_at timestamp without time zone,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.notifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.notifications_id_seq OWNED BY public.notifications.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying(128) NOT NULL
);


--
-- Name: search_histories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.search_histories (
    id integer NOT NULL,
    user_id integer NOT NULL,
    ip character varying(45) NOT NULL,
    keyword character varying(63) NOT NULL,
    "from" character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: search_histories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.search_histories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: search_histories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.search_histories_id_seq OWNED BY public.search_histories.id;


--
-- Name: settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.settings (
    id integer NOT NULL,
    key character varying(255) NOT NULL,
    user_id integer,
    salt bytea,
    value bytea NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: settings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.settings_id_seq OWNED BY public.settings.id;


--
-- Name: shorter_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shorter_links (
    id integer NOT NULL,
    url character varying(255) NOT NULL,
    summary character varying(511) DEFAULT ''::character varying NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: shorter_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shorter_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shorter_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shorter_links_id_seq OWNED BY public.shorter_links.id;


--
-- Name: tag_resources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tag_resources (
    id integer NOT NULL,
    tag_id integer NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    sort_order integer DEFAULT 100 NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: tag_resources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tag_resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tag_resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tag_resources_id_seq OWNED BY public.tag_resources.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    code character varying(63) NOT NULL,
    sort_order integer DEFAULT 100 NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: twilio_sms_logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.twilio_sms_logs (
    id integer NOT NULL,
    "from" character varying(31) NOT NULL,
    "to" character varying(31) NOT NULL,
    body bytea NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: twilio_sms_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.twilio_sms_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: twilio_sms_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.twilio_sms_logs_id_seq OWNED BY public.twilio_sms_logs.id;


--
-- Name: user_bans; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_bans (
    id integer NOT NULL,
    user_id integer NOT NULL,
    ip character varying(45) NOT NULL,
    reason character varying(255) NOT NULL,
    expired_at timestamp without time zone NOT NULL,
    creator_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: user_bans_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_bans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_bans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_bans_id_seq OWNED BY public.user_bans.id;


--
-- Name: user_contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_contacts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    key character varying(255) NOT NULL,
    value bytea NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: user_contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_contacts_id_seq OWNED BY public.user_contacts.id;


--
-- Name: user_sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    uid character varying(36) NOT NULL,
    provider_type character varying(31) NOT NULL,
    provider_id integer NOT NULL,
    ip character varying(45) NOT NULL,
    expired_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: user_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_sessions_id_seq OWNED BY public.user_sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    real_name character varying(63) NOT NULL,
    nickname character varying(63) NOT NULL,
    email character varying(127) NOT NULL,
    password bytea,
    salt bytea NOT NULL,
    avatar character varying(255) NOT NULL,
    lang character varying(8) DEFAULT 'en-US'::character varying NOT NULL,
    timezone character varying(32) DEFAULT 'UTC'::character varying NOT NULL,
    status character varying(16) NOT NULL,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying(45),
    last_sign_in_at timestamp without time zone,
    last_sign_in_ip character varying(45),
    confirmed_at timestamp without time zone,
    locked_at timestamp without time zone,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: vote_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vote_items (
    id integer NOT NULL,
    star_ integer NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: vote_items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.vote_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: vote_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.vote_items_id_seq OWNED BY public.vote_items.id;


--
-- Name: vote_logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vote_logs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    ip character varying(45) NOT NULL,
    star_ integer NOT NULL,
    comment text NOT NULL,
    comment_editor character varying(15) NOT NULL,
    resource_type character varying(255) NOT NULL,
    resource_id integer NOT NULL,
    status character varying(15) NOT NULL,
    deleted_at timestamp without time zone,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: vote_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.vote_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: vote_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.vote_logs_id_seq OWNED BY public.vote_logs.id;


--
-- Name: wechat_mini_program_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.wechat_mini_program_users (
    id integer NOT NULL,
    user_id integer NOT NULL,
    union_id character varying(127) NOT NULL,
    app_id character varying(63) NOT NULL,
    open_id character varying(127) NOT NULL,
    nickname character varying(63),
    avatar_url character varying(255),
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: wechat_mini_program_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.wechat_mini_program_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: wechat_mini_program_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.wechat_mini_program_users_id_seq OWNED BY public.wechat_mini_program_users.id;


--
-- Name: wechat_oauth2_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.wechat_oauth2_users (
    id integer NOT NULL,
    user_id integer NOT NULL,
    union_id character varying(127) NOT NULL,
    app_id character varying(63) NOT NULL,
    open_id character varying(127) NOT NULL,
    nickname character varying(63) NOT NULL,
    sex integer NOT NULL,
    city character varying(63) NOT NULL,
    province character varying(63) NOT NULL,
    country character varying(63) NOT NULL,
    head_img_url character varying(255),
    privilege bytea NOT NULL,
    lang character varying(8) NOT NULL,
    version integer DEFAULT 0 NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: wechat_oauth2_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.wechat_oauth2_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: wechat_oauth2_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.wechat_oauth2_users_id_seq OWNED BY public.wechat_oauth2_users.id;


--
-- Name: attachment_resources id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.attachment_resources ALTER COLUMN id SET DEFAULT nextval('public.attachment_resources_id_seq'::regclass);


--
-- Name: attachments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.attachments ALTER COLUMN id SET DEFAULT nextval('public.attachments_id_seq'::regclass);


--
-- Name: casbin_rule id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.casbin_rule ALTER COLUMN id SET DEFAULT nextval('public.casbin_rule_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: category_resources id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category_resources ALTER COLUMN id SET DEFAULT nextval('public.category_resources_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: crawler_logs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.crawler_logs ALTER COLUMN id SET DEFAULT nextval('public.crawler_logs_id_seq'::regclass);


--
-- Name: excel_files id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.excel_files ALTER COLUMN id SET DEFAULT nextval('public.excel_files_id_seq'::regclass);


--
-- Name: excel_items id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.excel_items ALTER COLUMN id SET DEFAULT nextval('public.excel_items_id_seq'::regclass);


--
-- Name: excel_sheets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.excel_sheets ALTER COLUMN id SET DEFAULT nextval('public.excel_sheets_id_seq'::regclass);


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- Name: feedbacks id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.feedbacks ALTER COLUMN id SET DEFAULT nextval('public.feedbacks_id_seq'::regclass);


--
-- Name: footprints id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.footprints ALTER COLUMN id SET DEFAULT nextval('public.footprints_id_seq'::regclass);


--
-- Name: google_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.google_users ALTER COLUMN id SET DEFAULT nextval('public.google_users_id_seq'::regclass);


--
-- Name: issues id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues ALTER COLUMN id SET DEFAULT nextval('public.issues_id_seq'::regclass);


--
-- Name: leave_words id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leave_words ALTER COLUMN id SET DEFAULT nextval('public.leave_words_id_seq'::regclass);


--
-- Name: locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.locales ALTER COLUMN id SET DEFAULT nextval('public.locales_id_seq'::regclass);


--
-- Name: logs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);


--
-- Name: menus id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menus ALTER COLUMN id SET DEFAULT nextval('public.menus_id_seq'::regclass);


--
-- Name: notifications id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notifications ALTER COLUMN id SET DEFAULT nextval('public.notifications_id_seq'::regclass);


--
-- Name: search_histories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.search_histories ALTER COLUMN id SET DEFAULT nextval('public.search_histories_id_seq'::regclass);


--
-- Name: settings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.settings ALTER COLUMN id SET DEFAULT nextval('public.settings_id_seq'::regclass);


--
-- Name: shorter_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorter_links ALTER COLUMN id SET DEFAULT nextval('public.shorter_links_id_seq'::regclass);


--
-- Name: tag_resources id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tag_resources ALTER COLUMN id SET DEFAULT nextval('public.tag_resources_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: twilio_sms_logs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.twilio_sms_logs ALTER COLUMN id SET DEFAULT nextval('public.twilio_sms_logs_id_seq'::regclass);


--
-- Name: user_bans id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_bans ALTER COLUMN id SET DEFAULT nextval('public.user_bans_id_seq'::regclass);


--
-- Name: user_contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_contacts ALTER COLUMN id SET DEFAULT nextval('public.user_contacts_id_seq'::regclass);


--
-- Name: user_sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_sessions ALTER COLUMN id SET DEFAULT nextval('public.user_sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: vote_items id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vote_items ALTER COLUMN id SET DEFAULT nextval('public.vote_items_id_seq'::regclass);


--
-- Name: vote_logs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vote_logs ALTER COLUMN id SET DEFAULT nextval('public.vote_logs_id_seq'::regclass);


--
-- Name: wechat_mini_program_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.wechat_mini_program_users ALTER COLUMN id SET DEFAULT nextval('public.wechat_mini_program_users_id_seq'::regclass);


--
-- Name: wechat_oauth2_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.wechat_oauth2_users ALTER COLUMN id SET DEFAULT nextval('public.wechat_oauth2_users_id_seq'::regclass);


--
-- Name: attachment_resources attachment_resources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.attachment_resources
    ADD CONSTRAINT attachment_resources_pkey PRIMARY KEY (id);


--
-- Name: attachments attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.attachments
    ADD CONSTRAINT attachments_pkey PRIMARY KEY (id);


--
-- Name: casbin_rule casbin_rule_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.casbin_rule
    ADD CONSTRAINT casbin_rule_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: category_resources category_resources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category_resources
    ADD CONSTRAINT category_resources_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: crawler_logs crawler_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.crawler_logs
    ADD CONSTRAINT crawler_logs_pkey PRIMARY KEY (id);


--
-- Name: excel_files excel_files_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.excel_files
    ADD CONSTRAINT excel_files_pkey PRIMARY KEY (id);


--
-- Name: excel_items excel_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.excel_items
    ADD CONSTRAINT excel_items_pkey PRIMARY KEY (id);


--
-- Name: excel_sheets excel_sheets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.excel_sheets
    ADD CONSTRAINT excel_sheets_pkey PRIMARY KEY (id);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: feedbacks feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT feedbacks_pkey PRIMARY KEY (id);


--
-- Name: footprints footprints_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.footprints
    ADD CONSTRAINT footprints_pkey PRIMARY KEY (id);


--
-- Name: google_users google_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.google_users
    ADD CONSTRAINT google_users_pkey PRIMARY KEY (id);


--
-- Name: issues issues_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues
    ADD CONSTRAINT issues_pkey PRIMARY KEY (id);


--
-- Name: leave_words leave_words_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leave_words
    ADD CONSTRAINT leave_words_pkey PRIMARY KEY (id);


--
-- Name: locales locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.locales
    ADD CONSTRAINT locales_pkey PRIMARY KEY (id);


--
-- Name: logs logs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);


--
-- Name: menus menus_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_pkey PRIMARY KEY (id);


--
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: search_histories search_histories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.search_histories
    ADD CONSTRAINT search_histories_pkey PRIMARY KEY (id);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (id);


--
-- Name: shorter_links shorter_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorter_links
    ADD CONSTRAINT shorter_links_pkey PRIMARY KEY (id);


--
-- Name: tag_resources tag_resources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tag_resources
    ADD CONSTRAINT tag_resources_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: twilio_sms_logs twilio_sms_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.twilio_sms_logs
    ADD CONSTRAINT twilio_sms_logs_pkey PRIMARY KEY (id);


--
-- Name: casbin_rule unique_key_diesel_adapter; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.casbin_rule
    ADD CONSTRAINT unique_key_diesel_adapter UNIQUE (ptype, v0, v1, v2, v3, v4, v5);


--
-- Name: user_bans user_bans_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_bans
    ADD CONSTRAINT user_bans_pkey PRIMARY KEY (id);


--
-- Name: user_contacts user_contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_contacts
    ADD CONSTRAINT user_contacts_pkey PRIMARY KEY (id);


--
-- Name: user_sessions user_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_sessions
    ADD CONSTRAINT user_sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vote_items vote_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vote_items
    ADD CONSTRAINT vote_items_pkey PRIMARY KEY (id);


--
-- Name: vote_logs vote_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vote_logs
    ADD CONSTRAINT vote_logs_pkey PRIMARY KEY (id);


--
-- Name: wechat_mini_program_users wechat_mini_program_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.wechat_mini_program_users
    ADD CONSTRAINT wechat_mini_program_users_pkey PRIMARY KEY (id);


--
-- Name: wechat_oauth2_users wechat_oauth2_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.wechat_oauth2_users
    ADD CONSTRAINT wechat_oauth2_users_pkey PRIMARY KEY (id);


--
-- Name: idx_attachment_resources; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_attachment_resources ON public.attachment_resources USING btree (attachment_id, resource_type, resource_id);


--
-- Name: idx_attachment_resources_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_attachment_resources_resource_type ON public.attachment_resources USING btree (resource_type);


--
-- Name: idx_attachments_bucket; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_attachments_bucket ON public.attachments USING btree (bucket);


--
-- Name: idx_attachments_bucket_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_attachments_bucket_name ON public.attachments USING btree (bucket, name);


--
-- Name: idx_attachments_content_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_attachments_content_type ON public.attachments USING btree (content_type);


--
-- Name: idx_attachments_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_attachments_name ON public.attachments USING btree (name);


--
-- Name: idx_attachments_title; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_attachments_title ON public.attachments USING btree (title);


--
-- Name: idx_categories_code; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_categories_code ON public.categories USING btree (code);


--
-- Name: idx_categories_left_right; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_categories_left_right ON public.categories USING btree ("left", "right");


--
-- Name: idx_category_resources; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_category_resources ON public.category_resources USING btree (category_id, resource_type, resource_id);


--
-- Name: idx_category_resources_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_category_resources_resource_type ON public.category_resources USING btree (resource_type);


--
-- Name: idx_comments_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_comments_ip ON public.comments USING btree (ip);


--
-- Name: idx_comments_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_comments_resource_type ON public.comments USING btree (resource_type);


--
-- Name: idx_comments_username; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_comments_username ON public.comments USING btree (username);


--
-- Name: idx_content_editor; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_content_editor ON public.comments USING btree (content_editor);


--
-- Name: idx_crawler_logs_url; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_crawler_logs_url ON public.crawler_logs USING btree (url);


--
-- Name: idx_excel_files_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_excel_files_name ON public.excel_files USING btree (name);


--
-- Name: idx_excel_items_column; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_excel_items_column ON public.excel_items USING btree ("column");


--
-- Name: idx_excel_items_row; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_excel_items_row ON public.excel_items USING btree ("row");


--
-- Name: idx_excel_items_value; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_excel_items_value ON public.excel_items USING btree (value);


--
-- Name: idx_excel_sheets_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_excel_sheets_name ON public.excel_sheets USING btree (name);


--
-- Name: idx_favorites_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_favorites_resource_type ON public.favorites USING btree (resource_type);


--
-- Name: idx_favorites_subject; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_favorites_subject ON public.favorites USING btree (subject);


--
-- Name: idx_favorites_url; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_favorites_url ON public.favorites USING btree (url);


--
-- Name: idx_favorites_user_url; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_favorites_user_url ON public.favorites USING btree (user_id, url);


--
-- Name: idx_feedbacks_content_editor; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_feedbacks_content_editor ON public.feedbacks USING btree (content_editor);


--
-- Name: idx_feedbacks_email; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_feedbacks_email ON public.feedbacks USING btree (email);


--
-- Name: idx_feedbacks_mobile; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_feedbacks_mobile ON public.feedbacks USING btree (mobile);


--
-- Name: idx_feedbacks_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_feedbacks_resource_type ON public.feedbacks USING btree (resource_type);


--
-- Name: idx_feedbacks_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_feedbacks_status ON public.feedbacks USING btree (status);


--
-- Name: idx_feedbacks_username; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_feedbacks_username ON public.feedbacks USING btree (username);


--
-- Name: idx_footprints_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_footprints_resource_type ON public.footprints USING btree (resource_type);


--
-- Name: idx_google_users_sub; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_google_users_sub ON public.google_users USING btree (sub);


--
-- Name: idx_issues_lang; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_issues_lang ON public.issues USING btree (lang);


--
-- Name: idx_issues_question; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_issues_question ON public.issues USING btree (question);


--
-- Name: idx_issues_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_issues_resource_type ON public.issues USING btree (resource_type);


--
-- Name: idx_leave_words_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_leave_words_ip ON public.leave_words USING btree (ip);


--
-- Name: idx_leave_words_lang; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_leave_words_lang ON public.leave_words USING btree (lang);


--
-- Name: idx_locales_code; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_locales_code ON public.locales USING btree (code);


--
-- Name: idx_locales_lang; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_locales_lang ON public.locales USING btree (lang);


--
-- Name: idx_locales_lang_code; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_locales_lang_code ON public.locales USING btree (lang, code);


--
-- Name: idx_logs_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_logs_ip ON public.logs USING btree (ip);


--
-- Name: idx_logs_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_logs_resource_type ON public.logs USING btree (resource_type);


--
-- Name: idx_menus; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_menus ON public.menus USING btree (code, location);


--
-- Name: idx_menus_code; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_menus_code ON public.menus USING btree (code);


--
-- Name: idx_menus_location; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_menus_location ON public.menus USING btree (location);


--
-- Name: idx_notifications_subject; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_notifications_subject ON public.notifications USING btree (subject);


--
-- Name: idx_search_histories_from; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_search_histories_from ON public.search_histories USING btree ("from");


--
-- Name: idx_search_histories_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_search_histories_ip ON public.search_histories USING btree (ip);


--
-- Name: idx_search_histories_keyword; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_search_histories_keyword ON public.search_histories USING btree (keyword);


--
-- Name: idx_setting_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_setting_key ON public.settings USING btree (key, user_id) WHERE (user_id IS NOT NULL);


--
-- Name: idx_settings_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_settings_key ON public.settings USING btree (key) WHERE (user_id IS NULL);


--
-- Name: idx_shorter_links_summary; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_shorter_links_summary ON public.shorter_links USING btree (summary);


--
-- Name: idx_shorter_links_url; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_shorter_links_url ON public.shorter_links USING btree (url);


--
-- Name: idx_tag_resources; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_tag_resources ON public.tag_resources USING btree (tag_id, resource_type, resource_id);


--
-- Name: idx_tag_resources_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_tag_resources_resource_type ON public.tag_resources USING btree (resource_type);


--
-- Name: idx_tags_code; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_tags_code ON public.tags USING btree (code);


--
-- Name: idx_twilio_sms_logs_from; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_twilio_sms_logs_from ON public.twilio_sms_logs USING btree ("from");


--
-- Name: idx_twilio_sms_logs_to; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_twilio_sms_logs_to ON public.twilio_sms_logs USING btree ("to");


--
-- Name: idx_user_bans_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_bans_ip ON public.user_bans USING btree (ip);


--
-- Name: idx_user_bans_reason; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_bans_reason ON public.user_bans USING btree (reason);


--
-- Name: idx_user_contacts_key; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_contacts_key ON public.user_contacts USING btree (key);


--
-- Name: idx_user_contacts_user_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_user_contacts_user_key ON public.user_contacts USING btree (user_id, key);


--
-- Name: idx_user_sessions_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_sessions_ip ON public.user_sessions USING btree (ip);


--
-- Name: idx_user_sessions_provider_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_user_sessions_provider_type ON public.user_sessions USING btree (provider_type);


--
-- Name: idx_user_sessions_uid; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_user_sessions_uid ON public.user_sessions USING btree (uid);


--
-- Name: idx_users_current_sign_in_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_users_current_sign_in_ip ON public.users USING btree (current_sign_in_ip) WHERE (current_sign_in_ip IS NOT NULL);


--
-- Name: idx_users_email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_users_email ON public.users USING btree (email);


--
-- Name: idx_users_lang; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_users_lang ON public.users USING btree (lang);


--
-- Name: idx_users_last_sign_in_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_users_last_sign_in_ip ON public.users USING btree (last_sign_in_ip) WHERE (last_sign_in_ip IS NOT NULL);


--
-- Name: idx_users_nickname; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_users_nickname ON public.users USING btree (nickname);


--
-- Name: idx_users_real_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_users_real_name ON public.users USING btree (real_name);


--
-- Name: idx_users_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_users_status ON public.users USING btree (status);


--
-- Name: idx_users_timezone; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_users_timezone ON public.users USING btree (timezone);


--
-- Name: idx_vote_items; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_vote_items ON public.vote_items USING btree (resource_type, resource_id);


--
-- Name: idx_vote_items_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_vote_items_resource_type ON public.vote_items USING btree (resource_type);


--
-- Name: idx_vote_logs; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_vote_logs ON public.vote_logs USING btree (user_id, resource_type, resource_id);


--
-- Name: idx_vote_logs_comment_editor; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_vote_logs_comment_editor ON public.vote_logs USING btree (comment_editor);


--
-- Name: idx_vote_logs_ip; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_vote_logs_ip ON public.vote_logs USING btree (ip);


--
-- Name: idx_vote_logs_resource_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_vote_logs_resource_type ON public.vote_logs USING btree (resource_type);


--
-- Name: idx_vote_logs_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_vote_logs_status ON public.vote_logs USING btree (status);


--
-- Name: idx_wechat_mini_program_users_app_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_mini_program_users_app_id ON public.wechat_mini_program_users USING btree (app_id);


--
-- Name: idx_wechat_mini_program_users_app_id_and_open_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_mini_program_users_app_id_and_open_id ON public.wechat_mini_program_users USING btree (app_id, open_id);


--
-- Name: idx_wechat_mini_program_users_nickname; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_mini_program_users_nickname ON public.wechat_mini_program_users USING btree (nickname) WHERE (nickname IS NOT NULL);


--
-- Name: idx_wechat_mini_program_users_open_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_mini_program_users_open_id ON public.wechat_mini_program_users USING btree (open_id);


--
-- Name: idx_wechat_mini_program_users_union_id; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_wechat_mini_program_users_union_id ON public.wechat_mini_program_users USING btree (union_id);


--
-- Name: idx_wechat_oauth2_users_app_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_oauth2_users_app_id ON public.wechat_oauth2_users USING btree (app_id);


--
-- Name: idx_wechat_oauth2_users_app_id_and_open_id; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_wechat_oauth2_users_app_id_and_open_id ON public.wechat_oauth2_users USING btree (app_id, open_id);


--
-- Name: idx_wechat_oauth2_users_city; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_oauth2_users_city ON public.wechat_oauth2_users USING btree (city);


--
-- Name: idx_wechat_oauth2_users_country; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_oauth2_users_country ON public.wechat_oauth2_users USING btree (country);


--
-- Name: idx_wechat_oauth2_users_lang; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_oauth2_users_lang ON public.wechat_oauth2_users USING btree (lang);


--
-- Name: idx_wechat_oauth2_users_nickname; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_oauth2_users_nickname ON public.wechat_oauth2_users USING btree (nickname);


--
-- Name: idx_wechat_oauth2_users_open_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_oauth2_users_open_id ON public.wechat_oauth2_users USING btree (open_id);


--
-- Name: idx_wechat_oauth2_users_province; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_wechat_oauth2_users_province ON public.wechat_oauth2_users USING btree (province);


--
-- Name: idx_wechat_oauth2_users_union_id; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_wechat_oauth2_users_union_id ON public.wechat_oauth2_users USING btree (union_id);


--
-- PostgreSQL database dump complete
--


--
-- Dbmate schema migrations
--

INSERT INTO public.schema_migrations (version) VALUES
    ('20230624020150'),
    ('20230624020158'),
    ('20230624020202'),
    ('20230624021906'),
    ('20230624021933'),
    ('20230624021937'),
    ('20230624022026'),
    ('20230624022033'),
    ('20230624022122'),
    ('20230624022128'),
    ('20230624022135'),
    ('20230624022143'),
    ('20230624022150'),
    ('20230624022156'),
    ('20230624022202'),
    ('20230624022208'),
    ('20230624022216'),
    ('20230624022222'),
    ('20230624022226'),
    ('20230624022231'),
    ('20230624022252'),
    ('20230624022300'),
    ('20230705010727');
