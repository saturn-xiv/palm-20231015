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

--
-- Name: soundex(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.soundex(input text) RETURNS text
    LANGUAGE plpgsql IMMUTABLE STRICT COST 500
    AS $$
DECLARE
  soundex text = '';
  char text;
  symbol text;
  last_symbol text = '';
  pos int = 1;
BEGIN
  WHILE length(soundex) < 4 LOOP
    char = upper(substr(input, pos, 1));
    pos = pos + 1;
    CASE char
    WHEN '' THEN
      -- End of input string
      IF soundex = '' THEN
        RETURN '';
      ELSE
        RETURN rpad(soundex, 4, '0');
      END IF;
    WHEN 'B', 'F', 'P', 'V' THEN
      symbol = '1';
    WHEN 'C', 'G', 'J', 'K', 'Q', 'S', 'X', 'Z' THEN
      symbol = '2';
    WHEN 'D', 'T' THEN
      symbol = '3';
    WHEN 'L' THEN
      symbol = '4';
    WHEN 'M', 'N' THEN
      symbol = '5';
    WHEN 'R' THEN
      symbol = '6';
    ELSE
      -- Not a consonant; no output, but next similar consonant will be re-recorded
      symbol = '';
    END CASE;

    IF soundex = '' THEN
      -- First character; only accept strictly English ASCII characters
      IF char ~>=~ 'A' AND char ~<=~ 'Z' THEN
        soundex = char;
        last_symbol = symbol;
      END IF;
    ELSIF last_symbol != symbol THEN
      soundex = soundex || symbol;
      last_symbol = symbol;
    END IF;
  END LOOP;

  RETURN soundex;
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cms_action_log_config; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_action_log_config (
    id integer NOT NULL,
    type_title character varying(255) DEFAULT ''::character varying NOT NULL,
    type_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    id_holder character varying(255),
    title_holder character varying(255),
    table_name character varying(255),
    text_prefix character varying(255)
);


--
-- Name: cms_action_log_config_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_action_log_config_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_action_log_config_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_action_log_config_id_seq OWNED BY public.cms_action_log_config.id;


--
-- Name: cms_action_logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_action_logs (
    id integer NOT NULL,
    message_language_key character varying(255) DEFAULT ''::character varying NOT NULL,
    message text NOT NULL,
    log_date timestamp without time zone NOT NULL,
    extension character varying(50) DEFAULT ''::character varying NOT NULL,
    user_id integer DEFAULT 0 NOT NULL,
    item_id integer DEFAULT 0 NOT NULL,
    ip_address character varying(40) DEFAULT '0.0.0.0'::character varying NOT NULL
);


--
-- Name: cms_action_logs_extensions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_action_logs_extensions (
    id integer NOT NULL,
    extension character varying(50) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_action_logs_extensions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_action_logs_extensions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_action_logs_extensions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_action_logs_extensions_id_seq OWNED BY public.cms_action_logs_extensions.id;


--
-- Name: cms_action_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_action_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_action_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_action_logs_id_seq OWNED BY public.cms_action_logs.id;


--
-- Name: cms_action_logs_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_action_logs_users (
    user_id integer NOT NULL,
    notify integer NOT NULL,
    extensions text NOT NULL
);


--
-- Name: cms_assets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_assets (
    id integer NOT NULL,
    parent_id bigint DEFAULT 0 NOT NULL,
    lft bigint DEFAULT 0 NOT NULL,
    rgt bigint DEFAULT 0 NOT NULL,
    level integer NOT NULL,
    name character varying(50) NOT NULL,
    title character varying(100) NOT NULL,
    rules character varying(5120) NOT NULL
);


--
-- Name: COLUMN cms_assets.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.id IS 'Primary Key';


--
-- Name: COLUMN cms_assets.parent_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.parent_id IS 'Nested set parent.';


--
-- Name: COLUMN cms_assets.lft; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.lft IS 'Nested set lft.';


--
-- Name: COLUMN cms_assets.rgt; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.rgt IS 'Nested set rgt.';


--
-- Name: COLUMN cms_assets.level; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.level IS 'The cached level in the nested tree.';


--
-- Name: COLUMN cms_assets.name; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.name IS 'The unique name for the asset.';


--
-- Name: COLUMN cms_assets.title; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.title IS 'The descriptive title for the asset.';


--
-- Name: COLUMN cms_assets.rules; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_assets.rules IS 'JSON encoded access control.';


--
-- Name: cms_assets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_assets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_assets_id_seq OWNED BY public.cms_assets.id;


--
-- Name: cms_associations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_associations (
    id integer NOT NULL,
    context character varying(50) NOT NULL,
    key character(32) NOT NULL
);


--
-- Name: COLUMN cms_associations.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_associations.id IS 'A reference to the associated item.';


--
-- Name: COLUMN cms_associations.context; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_associations.context IS 'The context of the associated item.';


--
-- Name: COLUMN cms_associations.key; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_associations.key IS 'The key for the association computed from an md5 on associated ids.';


--
-- Name: cms_banner_clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_banner_clients (
    id integer NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    contact character varying(255) DEFAULT ''::character varying NOT NULL,
    email character varying(255) DEFAULT ''::character varying NOT NULL,
    extrainfo text NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    metakey text,
    own_prefix smallint DEFAULT 0 NOT NULL,
    metakey_prefix character varying(255) DEFAULT ''::character varying NOT NULL,
    purchase_type smallint DEFAULT '-1'::integer NOT NULL,
    track_clicks smallint DEFAULT '-1'::integer NOT NULL,
    track_impressions smallint DEFAULT '-1'::integer NOT NULL
);


--
-- Name: cms_banner_clients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_banner_clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_banner_clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_banner_clients_id_seq OWNED BY public.cms_banner_clients.id;


--
-- Name: cms_banner_tracks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_banner_tracks (
    track_date timestamp without time zone NOT NULL,
    track_type bigint NOT NULL,
    banner_id bigint NOT NULL,
    count bigint DEFAULT 0 NOT NULL
);


--
-- Name: cms_banners; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_banners (
    id integer NOT NULL,
    cid bigint DEFAULT 0 NOT NULL,
    type bigint DEFAULT 0 NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    alias character varying(255) DEFAULT ''::character varying NOT NULL,
    imptotal bigint DEFAULT 0 NOT NULL,
    impmade bigint DEFAULT 0 NOT NULL,
    clicks bigint DEFAULT 0 NOT NULL,
    clickurl character varying(200) DEFAULT ''::character varying NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    catid bigint DEFAULT 0 NOT NULL,
    description text NOT NULL,
    custombannercode character varying(2048) NOT NULL,
    sticky smallint DEFAULT 0 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    metakey text,
    params text NOT NULL,
    own_prefix smallint DEFAULT 0 NOT NULL,
    metakey_prefix character varying(255) DEFAULT ''::character varying NOT NULL,
    purchase_type smallint DEFAULT '-1'::integer NOT NULL,
    track_clicks smallint DEFAULT '-1'::integer NOT NULL,
    track_impressions smallint DEFAULT '-1'::integer NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone,
    reset timestamp without time zone,
    created timestamp without time zone NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    created_by bigint DEFAULT 0 NOT NULL,
    created_by_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    modified timestamp without time zone NOT NULL,
    modified_by bigint DEFAULT 0 NOT NULL,
    version bigint DEFAULT 1 NOT NULL
);


--
-- Name: cms_banners_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_banners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_banners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_banners_id_seq OWNED BY public.cms_banners.id;


--
-- Name: cms_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_categories (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    parent_id integer DEFAULT 0 NOT NULL,
    lft bigint DEFAULT 0 NOT NULL,
    rgt bigint DEFAULT 0 NOT NULL,
    level integer DEFAULT 0 NOT NULL,
    path character varying(255) DEFAULT ''::character varying NOT NULL,
    extension character varying(50) DEFAULT ''::character varying NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    alias character varying(255) DEFAULT ''::character varying NOT NULL,
    note character varying(255) DEFAULT ''::character varying NOT NULL,
    description text,
    published smallint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    access bigint DEFAULT 0 NOT NULL,
    params text,
    metadesc character varying(1024) DEFAULT ''::character varying NOT NULL,
    metakey character varying(1024) DEFAULT ''::character varying NOT NULL,
    metadata character varying(2048) DEFAULT ''::character varying NOT NULL,
    created_user_id integer DEFAULT 0 NOT NULL,
    created_time timestamp without time zone NOT NULL,
    modified_user_id integer DEFAULT 0 NOT NULL,
    modified_time timestamp without time zone NOT NULL,
    hits integer DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    version bigint DEFAULT 1 NOT NULL
);


--
-- Name: COLUMN cms_categories.asset_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_categories.asset_id IS 'FK to the #__assets table.';


--
-- Name: COLUMN cms_categories.metadesc; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_categories.metadesc IS 'The meta description for the page.';


--
-- Name: COLUMN cms_categories.metakey; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_categories.metakey IS 'The keywords for the page.';


--
-- Name: COLUMN cms_categories.metadata; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_categories.metadata IS 'JSON encoded metadata properties.';


--
-- Name: cms_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_categories_id_seq OWNED BY public.cms_categories.id;


--
-- Name: cms_contact_details; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_contact_details (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    alias character varying(255) NOT NULL,
    con_position character varying(255),
    address text,
    suburb character varying(100),
    state character varying(100),
    country character varying(100),
    postcode character varying(100),
    telephone character varying(255),
    fax character varying(255),
    misc text,
    image character varying(255),
    email_to character varying(255),
    default_con smallint DEFAULT 0 NOT NULL,
    published smallint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    ordering bigint DEFAULT 0 NOT NULL,
    params text NOT NULL,
    user_id bigint DEFAULT 0 NOT NULL,
    catid bigint DEFAULT 0 NOT NULL,
    access bigint DEFAULT 0 NOT NULL,
    mobile character varying(255) DEFAULT ''::character varying NOT NULL,
    webpage character varying(255) DEFAULT ''::character varying NOT NULL,
    sortname1 character varying(255) DEFAULT ''::character varying NOT NULL,
    sortname2 character varying(255) DEFAULT ''::character varying NOT NULL,
    sortname3 character varying(255) DEFAULT ''::character varying NOT NULL,
    language character varying(7) NOT NULL,
    created timestamp without time zone NOT NULL,
    created_by integer DEFAULT 0 NOT NULL,
    created_by_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    modified timestamp without time zone NOT NULL,
    modified_by integer DEFAULT 0 NOT NULL,
    metakey text,
    metadesc text NOT NULL,
    metadata text NOT NULL,
    featured smallint DEFAULT 0 NOT NULL,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone,
    version bigint DEFAULT 1 NOT NULL,
    hits bigint DEFAULT 0 NOT NULL
);


--
-- Name: COLUMN cms_contact_details.featured; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_contact_details.featured IS 'Set if contact is featured.';


--
-- Name: cms_contact_details_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_contact_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_contact_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_contact_details_id_seq OWNED BY public.cms_contact_details.id;


--
-- Name: cms_content; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_content (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    alias character varying(255) DEFAULT ''::character varying NOT NULL,
    introtext text NOT NULL,
    fulltext text NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    catid bigint DEFAULT 0 NOT NULL,
    created timestamp without time zone NOT NULL,
    created_by bigint DEFAULT 0 NOT NULL,
    created_by_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    modified timestamp without time zone NOT NULL,
    modified_by bigint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone,
    images text NOT NULL,
    urls text NOT NULL,
    attribs character varying(5120) NOT NULL,
    version bigint DEFAULT 1 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    metakey text,
    metadesc text NOT NULL,
    access bigint DEFAULT 0 NOT NULL,
    hits bigint DEFAULT 0 NOT NULL,
    metadata text NOT NULL,
    featured smallint DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    note character varying(255) DEFAULT ''::character varying NOT NULL
);


--
-- Name: COLUMN cms_content.asset_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_content.asset_id IS 'FK to the #__assets table.';


--
-- Name: COLUMN cms_content.featured; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_content.featured IS 'Set if article is featured.';


--
-- Name: COLUMN cms_content.language; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_content.language IS 'The language code for the article.';


--
-- Name: cms_content_frontpage; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_content_frontpage (
    content_id bigint DEFAULT 0 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    featured_up timestamp without time zone,
    featured_down timestamp without time zone
);


--
-- Name: cms_content_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_content_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_content_id_seq OWNED BY public.cms_content.id;


--
-- Name: cms_content_rating; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_content_rating (
    content_id bigint DEFAULT 0 NOT NULL,
    rating_sum bigint DEFAULT 0 NOT NULL,
    rating_count bigint DEFAULT 0 NOT NULL,
    lastip character varying(50) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_content_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_content_types (
    type_id integer NOT NULL,
    type_title character varying(255) DEFAULT ''::character varying NOT NULL,
    type_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    "table" character varying(2048) DEFAULT ''::character varying NOT NULL,
    rules text NOT NULL,
    field_mappings text NOT NULL,
    router character varying(255) DEFAULT ''::character varying NOT NULL,
    content_history_options character varying(5120) DEFAULT NULL::character varying
);


--
-- Name: COLUMN cms_content_types.content_history_options; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_content_types.content_history_options IS 'JSON string for com_contenthistory options';


--
-- Name: cms_content_types_type_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_content_types_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_content_types_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_content_types_type_id_seq OWNED BY public.cms_content_types.type_id;


--
-- Name: cms_contentitem_tag_map; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_contentitem_tag_map (
    type_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    core_content_id integer NOT NULL,
    content_item_id integer NOT NULL,
    tag_id integer NOT NULL,
    tag_date timestamp without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone NOT NULL,
    type_id integer NOT NULL
);


--
-- Name: COLUMN cms_contentitem_tag_map.core_content_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_contentitem_tag_map.core_content_id IS 'PK from the core content table';


--
-- Name: COLUMN cms_contentitem_tag_map.content_item_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_contentitem_tag_map.content_item_id IS 'PK from the content type table';


--
-- Name: COLUMN cms_contentitem_tag_map.tag_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_contentitem_tag_map.tag_id IS 'PK from the tag table';


--
-- Name: COLUMN cms_contentitem_tag_map.tag_date; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_contentitem_tag_map.tag_date IS 'Date of most recent save for this tag-item';


--
-- Name: COLUMN cms_contentitem_tag_map.type_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_contentitem_tag_map.type_id IS 'PK from the content_type table';


--
-- Name: cms_extensions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_extensions (
    extension_id integer NOT NULL,
    package_id bigint DEFAULT 0 NOT NULL,
    name character varying(100) NOT NULL,
    type character varying(20) NOT NULL,
    element character varying(100) NOT NULL,
    changelogurl text,
    folder character varying(100) NOT NULL,
    client_id smallint NOT NULL,
    enabled smallint DEFAULT 0 NOT NULL,
    access bigint DEFAULT 1 NOT NULL,
    protected smallint DEFAULT 0 NOT NULL,
    locked smallint DEFAULT 0 NOT NULL,
    manifest_cache text NOT NULL,
    params text NOT NULL,
    custom_data text NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    ordering bigint DEFAULT 0,
    state bigint DEFAULT 0,
    note character varying(255)
);


--
-- Name: COLUMN cms_extensions.package_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_extensions.package_id IS 'Parent package ID for extensions installed as a package.';


--
-- Name: COLUMN cms_extensions.protected; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_extensions.protected IS 'Flag to indicate if the extension is protected. Protected extensions cannot be disabled.';


--
-- Name: COLUMN cms_extensions.locked; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_extensions.locked IS 'Flag to indicate if the extension is locked. Locked extensions cannot be uninstalled.';


--
-- Name: cms_extensions_extension_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_extensions_extension_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_extensions_extension_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_extensions_extension_id_seq OWNED BY public.cms_extensions.extension_id;


--
-- Name: cms_fields; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_fields (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    context character varying(255) DEFAULT ''::character varying NOT NULL,
    group_id bigint DEFAULT 0 NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    label character varying(255) DEFAULT ''::character varying NOT NULL,
    default_value text,
    type character varying(255) DEFAULT 'text'::character varying NOT NULL,
    note character varying(255) DEFAULT ''::character varying NOT NULL,
    description text NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    required smallint DEFAULT 0 NOT NULL,
    only_use_in_subform smallint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    ordering bigint DEFAULT 0 NOT NULL,
    params text NOT NULL,
    fieldparams text NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    created_time timestamp without time zone NOT NULL,
    created_user_id bigint DEFAULT 0 NOT NULL,
    modified_time timestamp without time zone NOT NULL,
    modified_by bigint DEFAULT 0 NOT NULL,
    access bigint DEFAULT 0 NOT NULL
);


--
-- Name: cms_fields_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_fields_categories (
    field_id bigint DEFAULT 0 NOT NULL,
    category_id bigint DEFAULT 0 NOT NULL
);


--
-- Name: cms_fields_groups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_fields_groups (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    context character varying(255) DEFAULT ''::character varying NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    note character varying(255) DEFAULT ''::character varying NOT NULL,
    description text NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    ordering integer DEFAULT 0 NOT NULL,
    params text NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    created timestamp without time zone NOT NULL,
    created_by bigint DEFAULT 0 NOT NULL,
    modified timestamp without time zone NOT NULL,
    modified_by bigint DEFAULT 0 NOT NULL,
    access bigint DEFAULT 1 NOT NULL
);


--
-- Name: cms_fields_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_fields_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_fields_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_fields_groups_id_seq OWNED BY public.cms_fields_groups.id;


--
-- Name: cms_fields_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_fields_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_fields_id_seq OWNED BY public.cms_fields.id;


--
-- Name: cms_fields_values; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_fields_values (
    field_id bigint DEFAULT 0 NOT NULL,
    item_id character varying(255) DEFAULT ''::character varying NOT NULL,
    value text
);


--
-- Name: cms_finder_filters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_filters (
    filter_id integer NOT NULL,
    title character varying(255) NOT NULL,
    alias character varying(255) NOT NULL,
    state smallint DEFAULT 1 NOT NULL,
    created timestamp without time zone NOT NULL,
    created_by integer DEFAULT 0 NOT NULL,
    created_by_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    modified timestamp without time zone NOT NULL,
    modified_by integer DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    map_count integer DEFAULT 0 NOT NULL,
    data text,
    params text
);


--
-- Name: cms_finder_filters_filter_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_finder_filters_filter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_finder_filters_filter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_finder_filters_filter_id_seq OWNED BY public.cms_finder_filters.filter_id;


--
-- Name: cms_finder_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_links (
    link_id integer NOT NULL,
    url character varying(255) NOT NULL,
    route character varying(400) NOT NULL,
    title character varying(400) DEFAULT NULL::character varying,
    description text,
    indexdate timestamp without time zone NOT NULL,
    md5sum character varying(32) DEFAULT NULL::character varying,
    published smallint DEFAULT 1 NOT NULL,
    state integer DEFAULT 1 NOT NULL,
    access integer DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    publish_start_date timestamp without time zone,
    publish_end_date timestamp without time zone,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    list_price numeric(8,2) DEFAULT 0 NOT NULL,
    sale_price numeric(8,2) DEFAULT 0 NOT NULL,
    type_id bigint NOT NULL,
    object bytea
);


--
-- Name: cms_finder_links_link_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_finder_links_link_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_finder_links_link_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_finder_links_link_id_seq OWNED BY public.cms_finder_links.link_id;


--
-- Name: cms_finder_links_terms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_links_terms (
    link_id integer NOT NULL,
    term_id integer NOT NULL,
    weight numeric(8,2) DEFAULT 0 NOT NULL
);


--
-- Name: cms_finder_logging; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_logging (
    searchterm character varying(255) DEFAULT ''::character varying NOT NULL,
    md5sum character varying(32) DEFAULT ''::character varying NOT NULL,
    query bytea NOT NULL,
    hits integer DEFAULT 1 NOT NULL,
    results integer DEFAULT 0 NOT NULL
);


--
-- Name: cms_finder_taxonomy; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_taxonomy (
    id integer NOT NULL,
    parent_id integer DEFAULT 0 NOT NULL,
    lft integer DEFAULT 0 NOT NULL,
    rgt integer DEFAULT 0 NOT NULL,
    level integer DEFAULT 0 NOT NULL,
    path character varying(400) DEFAULT ''::character varying NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    alias character varying(400) DEFAULT ''::character varying NOT NULL,
    state smallint DEFAULT 1 NOT NULL,
    access smallint DEFAULT 1 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_finder_taxonomy_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_finder_taxonomy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_finder_taxonomy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_finder_taxonomy_id_seq OWNED BY public.cms_finder_taxonomy.id;


--
-- Name: cms_finder_taxonomy_map; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_taxonomy_map (
    link_id integer NOT NULL,
    node_id integer NOT NULL
);


--
-- Name: cms_finder_terms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_terms (
    term_id integer NOT NULL,
    term character varying(75) NOT NULL,
    stem character varying(75) DEFAULT ''::character varying NOT NULL,
    common smallint DEFAULT 0 NOT NULL,
    phrase smallint DEFAULT 0 NOT NULL,
    weight numeric(8,2) DEFAULT 0 NOT NULL,
    soundex character varying(75) DEFAULT ''::character varying NOT NULL,
    links integer DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_finder_terms_common; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_terms_common (
    term character varying(75) NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    custom integer DEFAULT 0 NOT NULL
);


--
-- Name: cms_finder_terms_term_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_finder_terms_term_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_finder_terms_term_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_finder_terms_term_id_seq OWNED BY public.cms_finder_terms.term_id;


--
-- Name: cms_finder_tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_tokens (
    term character varying(75) NOT NULL,
    stem character varying(75) DEFAULT ''::character varying NOT NULL,
    common smallint DEFAULT 0 NOT NULL,
    phrase smallint DEFAULT 0 NOT NULL,
    weight numeric(8,2) DEFAULT 1 NOT NULL,
    context smallint DEFAULT 2 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_finder_tokens_aggregate; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_tokens_aggregate (
    term_id integer NOT NULL,
    term character varying(75) NOT NULL,
    stem character varying(75) DEFAULT ''::character varying NOT NULL,
    common smallint DEFAULT 0 NOT NULL,
    phrase smallint DEFAULT 0 NOT NULL,
    term_weight numeric(8,2) DEFAULT 0 NOT NULL,
    context smallint DEFAULT 2 NOT NULL,
    context_weight numeric(8,2) DEFAULT 0 NOT NULL,
    total_weight numeric(8,2) DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_finder_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_finder_types (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    mime character varying(100) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_finder_types_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_finder_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_finder_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_finder_types_id_seq OWNED BY public.cms_finder_types.id;


--
-- Name: cms_history; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_history (
    version_id integer NOT NULL,
    item_id character varying(50) NOT NULL,
    version_note character varying(255) DEFAULT ''::character varying NOT NULL,
    save_date timestamp with time zone NOT NULL,
    editor_user_id integer DEFAULT 0 NOT NULL,
    character_count integer DEFAULT 0 NOT NULL,
    sha1_hash character varying(50) DEFAULT ''::character varying NOT NULL,
    version_data text NOT NULL,
    keep_forever smallint DEFAULT 0 NOT NULL
);


--
-- Name: COLUMN cms_history.version_note; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_history.version_note IS 'Optional version name';


--
-- Name: COLUMN cms_history.character_count; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_history.character_count IS 'Number of characters in this version.';


--
-- Name: COLUMN cms_history.sha1_hash; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_history.sha1_hash IS 'SHA1 hash of the version_data column.';


--
-- Name: COLUMN cms_history.version_data; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_history.version_data IS 'json-encoded string of version data';


--
-- Name: COLUMN cms_history.keep_forever; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_history.keep_forever IS '0=auto delete; 1=keep';


--
-- Name: cms_history_version_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_history_version_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_history_version_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_history_version_id_seq OWNED BY public.cms_history.version_id;


--
-- Name: cms_languages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_languages (
    lang_id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    lang_code character varying(7) NOT NULL,
    title character varying(50) NOT NULL,
    title_native character varying(50) NOT NULL,
    sef character varying(50) NOT NULL,
    image character varying(50) NOT NULL,
    description character varying(512) NOT NULL,
    metakey text,
    metadesc text NOT NULL,
    sitename character varying(1024) DEFAULT ''::character varying NOT NULL,
    published bigint DEFAULT 0 NOT NULL,
    access integer DEFAULT 0 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL
);


--
-- Name: cms_languages_lang_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_languages_lang_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_languages_lang_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_languages_lang_id_seq OWNED BY public.cms_languages.lang_id;


--
-- Name: cms_mail_templates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_mail_templates (
    template_id character varying(127) DEFAULT ''::character varying NOT NULL,
    extension character varying(127) DEFAULT ''::character varying NOT NULL,
    language character(7) DEFAULT ''::bpchar NOT NULL,
    subject character varying(255) DEFAULT ''::character varying NOT NULL,
    body text NOT NULL,
    htmlbody text NOT NULL,
    attachments text NOT NULL,
    params text NOT NULL
);


--
-- Name: cms_menu; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_menu (
    id integer NOT NULL,
    menutype character varying(24) NOT NULL,
    title character varying(255) NOT NULL,
    alias character varying(255) NOT NULL,
    note character varying(255) DEFAULT ''::character varying NOT NULL,
    path character varying(1024) DEFAULT ''::character varying NOT NULL,
    link character varying(1024) NOT NULL,
    type character varying(16) NOT NULL,
    published smallint DEFAULT 0 NOT NULL,
    parent_id integer DEFAULT 1 NOT NULL,
    level integer DEFAULT 0 NOT NULL,
    component_id integer DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    "browserNav" smallint DEFAULT 0 NOT NULL,
    access bigint DEFAULT 0 NOT NULL,
    img character varying(255) DEFAULT ''::character varying NOT NULL,
    template_style_id integer DEFAULT 0 NOT NULL,
    params text NOT NULL,
    lft bigint DEFAULT 0 NOT NULL,
    rgt bigint DEFAULT 0 NOT NULL,
    home smallint DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    client_id smallint DEFAULT 0 NOT NULL,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone
);


--
-- Name: COLUMN cms_menu.menutype; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.menutype IS 'The type of menu this item belongs to. FK to #__menu_types.menutype';


--
-- Name: COLUMN cms_menu.title; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.title IS 'The display title of the menu item.';


--
-- Name: COLUMN cms_menu.alias; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.alias IS 'The SEF alias of the menu item.';


--
-- Name: COLUMN cms_menu.path; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.path IS 'The computed path of the menu item based on the alias field.';


--
-- Name: COLUMN cms_menu.link; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.link IS 'The actually link the menu item refers to.';


--
-- Name: COLUMN cms_menu.type; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.type IS 'The type of link: Component, URL, Alias, Separator';


--
-- Name: COLUMN cms_menu.published; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.published IS 'The published state of the menu link.';


--
-- Name: COLUMN cms_menu.parent_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.parent_id IS 'The parent menu item in the menu tree.';


--
-- Name: COLUMN cms_menu.level; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.level IS 'The relative level in the tree.';


--
-- Name: COLUMN cms_menu.component_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.component_id IS 'FK to #__extensions.id';


--
-- Name: COLUMN cms_menu.checked_out; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.checked_out IS 'FK to #__users.id';


--
-- Name: COLUMN cms_menu.checked_out_time; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.checked_out_time IS 'The time the menu item was checked out.';


--
-- Name: COLUMN cms_menu."browserNav"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu."browserNav" IS 'The click behaviour of the link.';


--
-- Name: COLUMN cms_menu.access; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.access IS 'The access level required to view the menu item.';


--
-- Name: COLUMN cms_menu.img; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.img IS 'The image of the menu item.';


--
-- Name: COLUMN cms_menu.params; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.params IS 'JSON encoded data for the menu item.';


--
-- Name: COLUMN cms_menu.lft; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.lft IS 'Nested set lft.';


--
-- Name: COLUMN cms_menu.rgt; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.rgt IS 'Nested set rgt.';


--
-- Name: COLUMN cms_menu.home; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_menu.home IS 'Indicates if this menu item is the home or default page.';


--
-- Name: cms_menu_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_menu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_menu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_menu_id_seq OWNED BY public.cms_menu.id;


--
-- Name: cms_menu_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_menu_types (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    menutype character varying(24) NOT NULL,
    title character varying(48) NOT NULL,
    description character varying(255) DEFAULT ''::character varying NOT NULL,
    client_id integer DEFAULT 0 NOT NULL
);


--
-- Name: cms_menu_types_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_menu_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_menu_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_menu_types_id_seq OWNED BY public.cms_menu_types.id;


--
-- Name: cms_messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_messages (
    message_id integer NOT NULL,
    user_id_from bigint DEFAULT 0 NOT NULL,
    user_id_to bigint DEFAULT 0 NOT NULL,
    folder_id smallint DEFAULT 0 NOT NULL,
    date_time timestamp without time zone NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    priority smallint DEFAULT 0 NOT NULL,
    subject character varying(255) DEFAULT ''::character varying NOT NULL,
    message text NOT NULL
);


--
-- Name: cms_messages_cfg; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_messages_cfg (
    user_id bigint DEFAULT 0 NOT NULL,
    cfg_name character varying(100) DEFAULT ''::character varying NOT NULL,
    cfg_value character varying(255) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_messages_message_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_messages_message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_messages_message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_messages_message_id_seq OWNED BY public.cms_messages.message_id;


--
-- Name: cms_modules; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_modules (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    title character varying(100) DEFAULT ''::character varying NOT NULL,
    note character varying(255) DEFAULT ''::character varying NOT NULL,
    content text,
    ordering bigint DEFAULT 0 NOT NULL,
    "position" character varying(50) DEFAULT ''::character varying NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone,
    published smallint DEFAULT 0 NOT NULL,
    module character varying(50) DEFAULT NULL::character varying,
    access bigint DEFAULT 0 NOT NULL,
    showtitle smallint DEFAULT 1 NOT NULL,
    params text NOT NULL,
    client_id smallint DEFAULT 0 NOT NULL,
    language character varying(7) NOT NULL
);


--
-- Name: cms_modules_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_modules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_modules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_modules_id_seq OWNED BY public.cms_modules.id;


--
-- Name: cms_modules_menu; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_modules_menu (
    moduleid bigint DEFAULT 0 NOT NULL,
    menuid bigint DEFAULT 0 NOT NULL
);


--
-- Name: cms_newsfeeds; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_newsfeeds (
    catid bigint DEFAULT 0 NOT NULL,
    id integer NOT NULL,
    name character varying(100) DEFAULT ''::character varying NOT NULL,
    alias character varying(100) DEFAULT ''::character varying NOT NULL,
    link character varying(2048) DEFAULT ''::character varying NOT NULL,
    published smallint DEFAULT 0 NOT NULL,
    numarticles bigint DEFAULT 1 NOT NULL,
    cache_time bigint DEFAULT 3600 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    ordering bigint DEFAULT 0 NOT NULL,
    rtl smallint DEFAULT 0 NOT NULL,
    access bigint DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    params text NOT NULL,
    created timestamp without time zone NOT NULL,
    created_by integer DEFAULT 0 NOT NULL,
    created_by_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    modified timestamp without time zone NOT NULL,
    modified_by integer DEFAULT 0 NOT NULL,
    metakey text,
    metadesc text NOT NULL,
    metadata text NOT NULL,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone,
    description text NOT NULL,
    version bigint DEFAULT 1 NOT NULL,
    hits bigint DEFAULT 0 NOT NULL,
    images text NOT NULL
);


--
-- Name: cms_newsfeeds_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_newsfeeds_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_newsfeeds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_newsfeeds_id_seq OWNED BY public.cms_newsfeeds.id;


--
-- Name: cms_overrider; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_overrider (
    id integer NOT NULL,
    constant character varying(255) NOT NULL,
    string text NOT NULL,
    file character varying(255) NOT NULL
);


--
-- Name: COLUMN cms_overrider.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_overrider.id IS 'Primary Key';


--
-- Name: cms_overrider_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_overrider_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_overrider_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_overrider_id_seq OWNED BY public.cms_overrider.id;


--
-- Name: cms_postinstall_messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_postinstall_messages (
    postinstall_message_id integer NOT NULL,
    extension_id bigint DEFAULT 700 NOT NULL,
    title_key character varying(255) DEFAULT ''::character varying NOT NULL,
    description_key character varying(255) DEFAULT ''::character varying NOT NULL,
    action_key character varying(255) DEFAULT ''::character varying NOT NULL,
    language_extension character varying(255) DEFAULT 'com_postinstall'::character varying NOT NULL,
    language_client_id smallint DEFAULT 1 NOT NULL,
    type character varying(10) DEFAULT 'link'::character varying NOT NULL,
    action_file character varying(255) DEFAULT ''::character varying,
    action character varying(255) DEFAULT ''::character varying,
    condition_file character varying(255) DEFAULT NULL::character varying,
    condition_method character varying(255) DEFAULT NULL::character varying,
    version_introduced character varying(255) DEFAULT '3.2.0'::character varying NOT NULL,
    enabled smallint DEFAULT 1 NOT NULL
);


--
-- Name: COLUMN cms_postinstall_messages.extension_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.extension_id IS 'FK to jos_extensions';


--
-- Name: COLUMN cms_postinstall_messages.title_key; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.title_key IS 'Lang key for the title';


--
-- Name: COLUMN cms_postinstall_messages.description_key; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.description_key IS 'Lang key for description';


--
-- Name: COLUMN cms_postinstall_messages.language_extension; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.language_extension IS 'Extension holding lang keys';


--
-- Name: COLUMN cms_postinstall_messages.type; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.type IS 'Message type - message, link, action';


--
-- Name: COLUMN cms_postinstall_messages.action_file; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.action_file IS 'RAD URI to the PHP file containing action method';


--
-- Name: COLUMN cms_postinstall_messages.action; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.action IS 'Action method name or URL';


--
-- Name: COLUMN cms_postinstall_messages.condition_file; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.condition_file IS 'RAD URI to file holding display condition method';


--
-- Name: COLUMN cms_postinstall_messages.condition_method; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.condition_method IS 'Display condition method, must return boolean';


--
-- Name: COLUMN cms_postinstall_messages.version_introduced; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_postinstall_messages.version_introduced IS 'Version when this message was introduced';


--
-- Name: cms_postinstall_messages_postinstall_message_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_postinstall_messages_postinstall_message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_postinstall_messages_postinstall_message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_postinstall_messages_postinstall_message_id_seq OWNED BY public.cms_postinstall_messages.postinstall_message_id;


--
-- Name: cms_privacy_consents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_privacy_consents (
    id integer NOT NULL,
    user_id bigint DEFAULT 0 NOT NULL,
    state smallint DEFAULT 1 NOT NULL,
    created timestamp without time zone NOT NULL,
    subject character varying(255) DEFAULT ''::character varying NOT NULL,
    body text NOT NULL,
    remind smallint DEFAULT 0 NOT NULL,
    token character varying(100) DEFAULT ''::character varying NOT NULL
);


--
-- Name: cms_privacy_consents_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_privacy_consents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_privacy_consents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_privacy_consents_id_seq OWNED BY public.cms_privacy_consents.id;


--
-- Name: cms_privacy_requests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_privacy_requests (
    id integer NOT NULL,
    email character varying(100) DEFAULT ''::character varying NOT NULL,
    requested_at timestamp without time zone NOT NULL,
    status smallint DEFAULT 0 NOT NULL,
    request_type character varying(25) DEFAULT ''::character varying NOT NULL,
    confirm_token character varying(100) DEFAULT ''::character varying NOT NULL,
    confirm_token_created_at timestamp without time zone
);


--
-- Name: cms_privacy_requests_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_privacy_requests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_privacy_requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_privacy_requests_id_seq OWNED BY public.cms_privacy_requests.id;


--
-- Name: cms_redirect_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_redirect_links (
    id integer NOT NULL,
    old_url character varying(2048) NOT NULL,
    new_url character varying(2048),
    referer character varying(2048) NOT NULL,
    comment character varying(255) DEFAULT ''::character varying NOT NULL,
    hits bigint DEFAULT 0 NOT NULL,
    published smallint NOT NULL,
    created_date timestamp without time zone NOT NULL,
    modified_date timestamp without time zone NOT NULL,
    header integer DEFAULT 301 NOT NULL
);


--
-- Name: cms_redirect_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_redirect_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_redirect_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_redirect_links_id_seq OWNED BY public.cms_redirect_links.id;


--
-- Name: cms_scheduler_tasks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_scheduler_tasks (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    title character varying(255) NOT NULL,
    type character varying(128) NOT NULL,
    execution_rules text,
    cron_rules text,
    state smallint DEFAULT 0 NOT NULL,
    last_exit_code integer DEFAULT 0 NOT NULL,
    last_execution timestamp without time zone,
    next_execution timestamp without time zone,
    times_executed integer DEFAULT 0 NOT NULL,
    times_failed integer DEFAULT 0,
    locked timestamp without time zone,
    priority smallint DEFAULT 0 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    cli_exclusive smallint DEFAULT 0 NOT NULL,
    params text NOT NULL,
    note text,
    created timestamp without time zone NOT NULL,
    created_by bigint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone
);


--
-- Name: cms_scheduler_tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_scheduler_tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_scheduler_tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_scheduler_tasks_id_seq OWNED BY public.cms_scheduler_tasks.id;


--
-- Name: cms_schemas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_schemas (
    extension_id bigint NOT NULL,
    version_id character varying(20) NOT NULL
);


--
-- Name: cms_session; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_session (
    session_id bytea NOT NULL,
    client_id smallint,
    guest smallint DEFAULT 1,
    "time" integer DEFAULT 0 NOT NULL,
    data text,
    userid bigint DEFAULT 0,
    username character varying(150) DEFAULT ''::character varying
);


--
-- Name: cms_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_tags (
    id integer NOT NULL,
    parent_id bigint DEFAULT 0 NOT NULL,
    lft bigint DEFAULT 0 NOT NULL,
    rgt bigint DEFAULT 0 NOT NULL,
    level integer DEFAULT 0 NOT NULL,
    path character varying(255) DEFAULT ''::character varying NOT NULL,
    title character varying(255) NOT NULL,
    alias character varying(255) DEFAULT ''::character varying NOT NULL,
    note character varying(255) DEFAULT ''::character varying NOT NULL,
    description text NOT NULL,
    published smallint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    access bigint DEFAULT 0 NOT NULL,
    params text NOT NULL,
    metadesc character varying(1024) NOT NULL,
    metakey character varying(1024) DEFAULT ''::character varying NOT NULL,
    metadata character varying(2048) NOT NULL,
    created_user_id integer DEFAULT 0 NOT NULL,
    created_time timestamp without time zone NOT NULL,
    created_by_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    modified_user_id integer DEFAULT 0 NOT NULL,
    modified_time timestamp without time zone NOT NULL,
    images text NOT NULL,
    urls text NOT NULL,
    hits integer DEFAULT 0 NOT NULL,
    language character varying(7) DEFAULT ''::character varying NOT NULL,
    version bigint DEFAULT 1 NOT NULL,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone
);


--
-- Name: cms_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_tags_id_seq OWNED BY public.cms_tags.id;


--
-- Name: cms_template_overrides; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_template_overrides (
    id integer NOT NULL,
    template character varying(50) DEFAULT ''::character varying NOT NULL,
    hash_id character varying(255) DEFAULT ''::character varying NOT NULL,
    extension_id bigint DEFAULT 0,
    state smallint DEFAULT 0 NOT NULL,
    action character varying(50) DEFAULT ''::character varying NOT NULL,
    client_id smallint DEFAULT 0 NOT NULL,
    created_date timestamp without time zone NOT NULL,
    modified_date timestamp without time zone
);


--
-- Name: cms_template_overrides_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_template_overrides_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_template_overrides_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_template_overrides_id_seq OWNED BY public.cms_template_overrides.id;


--
-- Name: cms_template_styles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_template_styles (
    id integer NOT NULL,
    template character varying(50) DEFAULT ''::character varying NOT NULL,
    client_id smallint DEFAULT 0 NOT NULL,
    home character varying(7) DEFAULT '0'::character varying NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    inheritable smallint DEFAULT 0 NOT NULL,
    parent character varying(50) DEFAULT ''::character varying,
    params text NOT NULL
);


--
-- Name: cms_template_styles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_template_styles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_template_styles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_template_styles_id_seq OWNED BY public.cms_template_styles.id;


--
-- Name: cms_ucm_base; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_ucm_base (
    ucm_id integer NOT NULL,
    ucm_item_id bigint NOT NULL,
    ucm_type_id bigint NOT NULL,
    ucm_language_id bigint NOT NULL
);


--
-- Name: cms_ucm_base_ucm_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_ucm_base_ucm_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_ucm_base_ucm_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_ucm_base_ucm_id_seq OWNED BY public.cms_ucm_base.ucm_id;


--
-- Name: cms_ucm_content; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_ucm_content (
    core_content_id integer NOT NULL,
    core_type_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    core_title character varying(255) DEFAULT ''::character varying NOT NULL,
    core_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    core_body text,
    core_state smallint DEFAULT 0 NOT NULL,
    core_checked_out_time timestamp without time zone,
    core_checked_out_user_id integer,
    core_access bigint DEFAULT 0 NOT NULL,
    core_params text,
    core_featured smallint DEFAULT 0 NOT NULL,
    core_metadata text,
    core_created_user_id bigint DEFAULT 0 NOT NULL,
    core_created_by_alias character varying(255) DEFAULT ''::character varying NOT NULL,
    core_created_time timestamp without time zone NOT NULL,
    core_modified_user_id bigint DEFAULT 0 NOT NULL,
    core_modified_time timestamp without time zone NOT NULL,
    core_language character varying(7) DEFAULT ''::character varying NOT NULL,
    core_publish_up timestamp without time zone,
    core_publish_down timestamp without time zone,
    core_content_item_id bigint DEFAULT 0 NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    core_images text,
    core_urls text,
    core_hits bigint DEFAULT 0 NOT NULL,
    core_version bigint DEFAULT 1 NOT NULL,
    core_ordering bigint DEFAULT 0 NOT NULL,
    core_metakey text,
    core_metadesc text,
    core_catid bigint DEFAULT 0 NOT NULL,
    core_type_id bigint DEFAULT 0 NOT NULL
);


--
-- Name: cms_ucm_content_core_content_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_ucm_content_core_content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_ucm_content_core_content_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_ucm_content_core_content_id_seq OWNED BY public.cms_ucm_content.core_content_id;


--
-- Name: cms_update_sites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_update_sites (
    update_site_id integer NOT NULL,
    name character varying(100) DEFAULT ''::character varying,
    type character varying(20) DEFAULT ''::character varying,
    location text NOT NULL,
    enabled bigint DEFAULT 0,
    last_check_timestamp bigint DEFAULT 0,
    extra_query character varying(1000) DEFAULT ''::character varying,
    checked_out integer,
    checked_out_time timestamp without time zone
);


--
-- Name: TABLE cms_update_sites; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.cms_update_sites IS 'Update Sites';


--
-- Name: cms_update_sites_extensions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_update_sites_extensions (
    update_site_id bigint DEFAULT 0 NOT NULL,
    extension_id bigint DEFAULT 0 NOT NULL
);


--
-- Name: TABLE cms_update_sites_extensions; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.cms_update_sites_extensions IS 'Links extensions to update sites';


--
-- Name: cms_update_sites_update_site_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_update_sites_update_site_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_update_sites_update_site_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_update_sites_update_site_id_seq OWNED BY public.cms_update_sites.update_site_id;


--
-- Name: cms_updates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_updates (
    update_id integer NOT NULL,
    update_site_id bigint DEFAULT 0,
    extension_id bigint DEFAULT 0,
    name character varying(100) DEFAULT ''::character varying,
    description text NOT NULL,
    element character varying(100) DEFAULT ''::character varying,
    type character varying(20) DEFAULT ''::character varying,
    folder character varying(20) DEFAULT ''::character varying,
    client_id smallint DEFAULT 0,
    version character varying(32) DEFAULT ''::character varying,
    data text NOT NULL,
    detailsurl text NOT NULL,
    infourl text NOT NULL,
    changelogurl text,
    extra_query character varying(1000) DEFAULT ''::character varying
);


--
-- Name: TABLE cms_updates; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.cms_updates IS 'Available Updates';


--
-- Name: cms_updates_update_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_updates_update_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_updates_update_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_updates_update_id_seq OWNED BY public.cms_updates.update_id;


--
-- Name: cms_user_keys; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_user_keys (
    id integer NOT NULL,
    user_id character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    series character varying(255) NOT NULL,
    "time" character varying(200) NOT NULL,
    uastring character varying(255) NOT NULL
);


--
-- Name: cms_user_keys_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_user_keys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_user_keys_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_user_keys_id_seq OWNED BY public.cms_user_keys.id;


--
-- Name: cms_user_notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_user_notes (
    id integer NOT NULL,
    user_id integer DEFAULT 0 NOT NULL,
    catid integer DEFAULT 0 NOT NULL,
    subject character varying(100) DEFAULT ''::character varying NOT NULL,
    body text NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    checked_out integer,
    checked_out_time timestamp without time zone,
    created_user_id integer DEFAULT 0 NOT NULL,
    created_time timestamp without time zone NOT NULL,
    modified_user_id integer DEFAULT 0 NOT NULL,
    modified_time timestamp without time zone NOT NULL,
    review_time timestamp without time zone,
    publish_up timestamp without time zone,
    publish_down timestamp without time zone
);


--
-- Name: cms_user_notes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_user_notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_user_notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_user_notes_id_seq OWNED BY public.cms_user_notes.id;


--
-- Name: cms_user_profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_user_profiles (
    user_id bigint NOT NULL,
    profile_key character varying(100) NOT NULL,
    profile_value text NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL
);


--
-- Name: TABLE cms_user_profiles; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.cms_user_profiles IS 'Simple user profile storage table';


--
-- Name: cms_user_usergroup_map; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_user_usergroup_map (
    user_id bigint DEFAULT 0 NOT NULL,
    group_id bigint DEFAULT 0 NOT NULL
);


--
-- Name: COLUMN cms_user_usergroup_map.user_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_user_usergroup_map.user_id IS 'Foreign Key to #__users.id';


--
-- Name: COLUMN cms_user_usergroup_map.group_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_user_usergroup_map.group_id IS 'Foreign Key to #__usergroups.id';


--
-- Name: cms_usergroups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_usergroups (
    id integer NOT NULL,
    parent_id bigint DEFAULT 0 NOT NULL,
    lft bigint DEFAULT 0 NOT NULL,
    rgt bigint DEFAULT 0 NOT NULL,
    title character varying(100) DEFAULT ''::character varying NOT NULL
);


--
-- Name: COLUMN cms_usergroups.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_usergroups.id IS 'Primary Key';


--
-- Name: COLUMN cms_usergroups.parent_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_usergroups.parent_id IS 'Adjacency List Reference Id';


--
-- Name: COLUMN cms_usergroups.lft; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_usergroups.lft IS 'Nested set lft.';


--
-- Name: COLUMN cms_usergroups.rgt; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_usergroups.rgt IS 'Nested set rgt.';


--
-- Name: cms_usergroups_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_usergroups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_usergroups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_usergroups_id_seq OWNED BY public.cms_usergroups.id;


--
-- Name: cms_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_users (
    id integer NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    username character varying(150) DEFAULT ''::character varying NOT NULL,
    email character varying(100) DEFAULT ''::character varying NOT NULL,
    password character varying(100) DEFAULT ''::character varying NOT NULL,
    block smallint DEFAULT 0 NOT NULL,
    "sendEmail" smallint DEFAULT 0,
    "registerDate" timestamp without time zone NOT NULL,
    "lastvisitDate" timestamp without time zone,
    activation character varying(100) DEFAULT ''::character varying NOT NULL,
    params text NOT NULL,
    "lastResetTime" timestamp without time zone,
    "resetCount" bigint DEFAULT 0 NOT NULL,
    "otpKey" character varying(1000) DEFAULT ''::character varying NOT NULL,
    otep character varying(1000) DEFAULT ''::character varying NOT NULL,
    "requireReset" smallint DEFAULT 0,
    "authProvider" character varying(100) DEFAULT ''::character varying NOT NULL
);


--
-- Name: COLUMN cms_users."lastResetTime"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_users."lastResetTime" IS 'Date of last password reset';


--
-- Name: COLUMN cms_users."resetCount"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_users."resetCount" IS 'Count of password resets since lastResetTime';


--
-- Name: COLUMN cms_users."requireReset"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_users."requireReset" IS 'Require user to reset password on next login';


--
-- Name: cms_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_users_id_seq OWNED BY public.cms_users.id;


--
-- Name: cms_viewlevels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_viewlevels (
    id integer NOT NULL,
    title character varying(100) DEFAULT ''::character varying NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    rules character varying(5120) NOT NULL
);


--
-- Name: COLUMN cms_viewlevels.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_viewlevels.id IS 'Primary Key';


--
-- Name: COLUMN cms_viewlevels.rules; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_viewlevels.rules IS 'JSON encoded access control.';


--
-- Name: cms_viewlevels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_viewlevels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_viewlevels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_viewlevels_id_seq OWNED BY public.cms_viewlevels.id;


--
-- Name: cms_webauthn_credentials; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_webauthn_credentials (
    id character varying(1000) NOT NULL,
    user_id character varying(128) NOT NULL,
    label character varying(190) NOT NULL,
    credential text NOT NULL
);


--
-- Name: cms_workflow_associations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_workflow_associations (
    item_id bigint DEFAULT 0 NOT NULL,
    stage_id bigint DEFAULT 0 NOT NULL,
    extension character varying(50) NOT NULL
);


--
-- Name: COLUMN cms_workflow_associations.item_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_workflow_associations.item_id IS 'Extension table id value';


--
-- Name: COLUMN cms_workflow_associations.stage_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.cms_workflow_associations.stage_id IS 'Foreign Key to #__workflow_stages.id';


--
-- Name: cms_workflow_stages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_workflow_stages (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    workflow_id bigint DEFAULT 0 NOT NULL,
    published smallint DEFAULT 0 NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    "default" smallint DEFAULT 0 NOT NULL,
    checked_out_time timestamp without time zone,
    checked_out integer
);


--
-- Name: cms_workflow_stages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_workflow_stages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_workflow_stages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_workflow_stages_id_seq OWNED BY public.cms_workflow_stages.id;


--
-- Name: cms_workflow_transitions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_workflow_transitions (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    workflow_id bigint DEFAULT 0 NOT NULL,
    published smallint DEFAULT 0 NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    from_stage_id bigint DEFAULT 0 NOT NULL,
    to_stage_id bigint DEFAULT 0 NOT NULL,
    options text NOT NULL,
    checked_out_time timestamp without time zone,
    checked_out integer
);


--
-- Name: cms_workflow_transitions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_workflow_transitions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_workflow_transitions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_workflow_transitions_id_seq OWNED BY public.cms_workflow_transitions.id;


--
-- Name: cms_workflows; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cms_workflows (
    id integer NOT NULL,
    asset_id bigint DEFAULT 0 NOT NULL,
    published smallint DEFAULT 0 NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    description text NOT NULL,
    extension character varying(50) NOT NULL,
    "default" smallint DEFAULT 0 NOT NULL,
    ordering bigint DEFAULT 0 NOT NULL,
    created timestamp without time zone NOT NULL,
    created_by bigint DEFAULT 0 NOT NULL,
    modified timestamp without time zone NOT NULL,
    modified_by bigint DEFAULT 0 NOT NULL,
    checked_out_time timestamp without time zone,
    checked_out integer
);


--
-- Name: cms_workflows_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cms_workflows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cms_workflows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cms_workflows_id_seq OWNED BY public.cms_workflows.id;


--
-- Name: cms_action_log_config id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_action_log_config ALTER COLUMN id SET DEFAULT nextval('public.cms_action_log_config_id_seq'::regclass);


--
-- Name: cms_action_logs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_action_logs ALTER COLUMN id SET DEFAULT nextval('public.cms_action_logs_id_seq'::regclass);


--
-- Name: cms_action_logs_extensions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_action_logs_extensions ALTER COLUMN id SET DEFAULT nextval('public.cms_action_logs_extensions_id_seq'::regclass);


--
-- Name: cms_assets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_assets ALTER COLUMN id SET DEFAULT nextval('public.cms_assets_id_seq'::regclass);


--
-- Name: cms_banner_clients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_banner_clients ALTER COLUMN id SET DEFAULT nextval('public.cms_banner_clients_id_seq'::regclass);


--
-- Name: cms_banners id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_banners ALTER COLUMN id SET DEFAULT nextval('public.cms_banners_id_seq'::regclass);


--
-- Name: cms_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_categories ALTER COLUMN id SET DEFAULT nextval('public.cms_categories_id_seq'::regclass);


--
-- Name: cms_contact_details id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_contact_details ALTER COLUMN id SET DEFAULT nextval('public.cms_contact_details_id_seq'::regclass);


--
-- Name: cms_content id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_content ALTER COLUMN id SET DEFAULT nextval('public.cms_content_id_seq'::regclass);


--
-- Name: cms_content_types type_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_content_types ALTER COLUMN type_id SET DEFAULT nextval('public.cms_content_types_type_id_seq'::regclass);


--
-- Name: cms_extensions extension_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_extensions ALTER COLUMN extension_id SET DEFAULT nextval('public.cms_extensions_extension_id_seq'::regclass);


--
-- Name: cms_fields id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_fields ALTER COLUMN id SET DEFAULT nextval('public.cms_fields_id_seq'::regclass);


--
-- Name: cms_fields_groups id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_fields_groups ALTER COLUMN id SET DEFAULT nextval('public.cms_fields_groups_id_seq'::regclass);


--
-- Name: cms_finder_filters filter_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_filters ALTER COLUMN filter_id SET DEFAULT nextval('public.cms_finder_filters_filter_id_seq'::regclass);


--
-- Name: cms_finder_links link_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_links ALTER COLUMN link_id SET DEFAULT nextval('public.cms_finder_links_link_id_seq'::regclass);


--
-- Name: cms_finder_taxonomy id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_taxonomy ALTER COLUMN id SET DEFAULT nextval('public.cms_finder_taxonomy_id_seq'::regclass);


--
-- Name: cms_finder_terms term_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_terms ALTER COLUMN term_id SET DEFAULT nextval('public.cms_finder_terms_term_id_seq'::regclass);


--
-- Name: cms_finder_types id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_types ALTER COLUMN id SET DEFAULT nextval('public.cms_finder_types_id_seq'::regclass);


--
-- Name: cms_history version_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_history ALTER COLUMN version_id SET DEFAULT nextval('public.cms_history_version_id_seq'::regclass);


--
-- Name: cms_languages lang_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_languages ALTER COLUMN lang_id SET DEFAULT nextval('public.cms_languages_lang_id_seq'::regclass);


--
-- Name: cms_menu id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_menu ALTER COLUMN id SET DEFAULT nextval('public.cms_menu_id_seq'::regclass);


--
-- Name: cms_menu_types id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_menu_types ALTER COLUMN id SET DEFAULT nextval('public.cms_menu_types_id_seq'::regclass);


--
-- Name: cms_messages message_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_messages ALTER COLUMN message_id SET DEFAULT nextval('public.cms_messages_message_id_seq'::regclass);


--
-- Name: cms_modules id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_modules ALTER COLUMN id SET DEFAULT nextval('public.cms_modules_id_seq'::regclass);


--
-- Name: cms_newsfeeds id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_newsfeeds ALTER COLUMN id SET DEFAULT nextval('public.cms_newsfeeds_id_seq'::regclass);


--
-- Name: cms_overrider id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_overrider ALTER COLUMN id SET DEFAULT nextval('public.cms_overrider_id_seq'::regclass);


--
-- Name: cms_postinstall_messages postinstall_message_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_postinstall_messages ALTER COLUMN postinstall_message_id SET DEFAULT nextval('public.cms_postinstall_messages_postinstall_message_id_seq'::regclass);


--
-- Name: cms_privacy_consents id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_privacy_consents ALTER COLUMN id SET DEFAULT nextval('public.cms_privacy_consents_id_seq'::regclass);


--
-- Name: cms_privacy_requests id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_privacy_requests ALTER COLUMN id SET DEFAULT nextval('public.cms_privacy_requests_id_seq'::regclass);


--
-- Name: cms_redirect_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_redirect_links ALTER COLUMN id SET DEFAULT nextval('public.cms_redirect_links_id_seq'::regclass);


--
-- Name: cms_scheduler_tasks id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_scheduler_tasks ALTER COLUMN id SET DEFAULT nextval('public.cms_scheduler_tasks_id_seq'::regclass);


--
-- Name: cms_tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_tags ALTER COLUMN id SET DEFAULT nextval('public.cms_tags_id_seq'::regclass);


--
-- Name: cms_template_overrides id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_template_overrides ALTER COLUMN id SET DEFAULT nextval('public.cms_template_overrides_id_seq'::regclass);


--
-- Name: cms_template_styles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_template_styles ALTER COLUMN id SET DEFAULT nextval('public.cms_template_styles_id_seq'::regclass);


--
-- Name: cms_ucm_base ucm_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_ucm_base ALTER COLUMN ucm_id SET DEFAULT nextval('public.cms_ucm_base_ucm_id_seq'::regclass);


--
-- Name: cms_ucm_content core_content_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_ucm_content ALTER COLUMN core_content_id SET DEFAULT nextval('public.cms_ucm_content_core_content_id_seq'::regclass);


--
-- Name: cms_update_sites update_site_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_update_sites ALTER COLUMN update_site_id SET DEFAULT nextval('public.cms_update_sites_update_site_id_seq'::regclass);


--
-- Name: cms_updates update_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_updates ALTER COLUMN update_id SET DEFAULT nextval('public.cms_updates_update_id_seq'::regclass);


--
-- Name: cms_user_keys id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_user_keys ALTER COLUMN id SET DEFAULT nextval('public.cms_user_keys_id_seq'::regclass);


--
-- Name: cms_user_notes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_user_notes ALTER COLUMN id SET DEFAULT nextval('public.cms_user_notes_id_seq'::regclass);


--
-- Name: cms_usergroups id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_usergroups ALTER COLUMN id SET DEFAULT nextval('public.cms_usergroups_id_seq'::regclass);


--
-- Name: cms_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_users ALTER COLUMN id SET DEFAULT nextval('public.cms_users_id_seq'::regclass);


--
-- Name: cms_viewlevels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_viewlevels ALTER COLUMN id SET DEFAULT nextval('public.cms_viewlevels_id_seq'::regclass);


--
-- Name: cms_workflow_stages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_workflow_stages ALTER COLUMN id SET DEFAULT nextval('public.cms_workflow_stages_id_seq'::regclass);


--
-- Name: cms_workflow_transitions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_workflow_transitions ALTER COLUMN id SET DEFAULT nextval('public.cms_workflow_transitions_id_seq'::regclass);


--
-- Name: cms_workflows id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_workflows ALTER COLUMN id SET DEFAULT nextval('public.cms_workflows_id_seq'::regclass);


--
-- Data for Name: cms_action_log_config; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_action_log_config VALUES (1, 'article', 'com_content.article', 'id', 'title', '#__content', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (2, 'article', 'com_content.form', 'id', 'title', '#__content', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (3, 'banner', 'com_banners.banner', 'id', 'name', '#__banners', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (4, 'user_note', 'com_users.note', 'id', 'subject', '#__user_notes', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (5, 'media', 'com_media.file', '', 'name', '', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (6, 'category', 'com_categories.category', 'id', 'title', '#__categories', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (7, 'menu', 'com_menus.menu', 'id', 'title', '#__menu_types', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (8, 'menu_item', 'com_menus.item', 'id', 'title', '#__menu', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (9, 'newsfeed', 'com_newsfeeds.newsfeed', 'id', 'name', '#__newsfeeds', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (10, 'link', 'com_redirect.link', 'id', 'old_url', '#__redirect_links', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (11, 'tag', 'com_tags.tag', 'id', 'title', '#__tags', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (12, 'style', 'com_templates.style', 'id', 'title', '#__template_styles', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (13, 'plugin', 'com_plugins.plugin', 'extension_id', 'name', '#__extensions', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (14, 'component_config', 'com_config.component', 'extension_id', 'name', '', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (15, 'contact', 'com_contact.contact', 'id', 'name', '#__contact_details', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (16, 'module', 'com_modules.module', 'id', 'title', '#__modules', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (17, 'access_level', 'com_users.level', 'id', 'title', '#__viewlevels', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (18, 'banner_client', 'com_banners.client', 'id', 'name', '#__banner_clients', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (19, 'application_config', 'com_config.application', '', 'name', '', 'PLG_ACTIONLOG_JOOMLA');
INSERT INTO public.cms_action_log_config VALUES (20, 'task', 'com_scheduler.task', 'id', 'title', '#__scheduler_tasks', 'PLG_ACTIONLOG_JOOMLA');


--
-- Data for Name: cms_action_logs; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_action_logs_extensions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_action_logs_extensions VALUES (1, 'com_banners');
INSERT INTO public.cms_action_logs_extensions VALUES (2, 'com_cache');
INSERT INTO public.cms_action_logs_extensions VALUES (3, 'com_categories');
INSERT INTO public.cms_action_logs_extensions VALUES (4, 'com_config');
INSERT INTO public.cms_action_logs_extensions VALUES (5, 'com_contact');
INSERT INTO public.cms_action_logs_extensions VALUES (6, 'com_content');
INSERT INTO public.cms_action_logs_extensions VALUES (7, 'com_installer');
INSERT INTO public.cms_action_logs_extensions VALUES (8, 'com_media');
INSERT INTO public.cms_action_logs_extensions VALUES (9, 'com_menus');
INSERT INTO public.cms_action_logs_extensions VALUES (10, 'com_messages');
INSERT INTO public.cms_action_logs_extensions VALUES (11, 'com_modules');
INSERT INTO public.cms_action_logs_extensions VALUES (12, 'com_newsfeeds');
INSERT INTO public.cms_action_logs_extensions VALUES (13, 'com_plugins');
INSERT INTO public.cms_action_logs_extensions VALUES (14, 'com_redirect');
INSERT INTO public.cms_action_logs_extensions VALUES (15, 'com_tags');
INSERT INTO public.cms_action_logs_extensions VALUES (16, 'com_templates');
INSERT INTO public.cms_action_logs_extensions VALUES (17, 'com_users');
INSERT INTO public.cms_action_logs_extensions VALUES (18, 'com_checkin');
INSERT INTO public.cms_action_logs_extensions VALUES (19, 'com_scheduler');


--
-- Data for Name: cms_action_logs_users; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_assets; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_assets VALUES (1, 0, 0, 165, 0, 'root.1', 'Root Asset', '{"core.login.site":{"6":1,"2":1},"core.login.admin":{"6":1},"core.login.api":{"8":1},"core.login.offline":{"6":1},"core.admin":{"8":1},"core.manage":{"7":1},"core.create":{"6":1,"3":1},"core.delete":{"6":1},"core.edit":{"6":1,"4":1},"core.edit.state":{"6":1,"5":1},"core.edit.own":{"6":1,"3":1}}');
INSERT INTO public.cms_assets VALUES (2, 1, 1, 2, 1, 'com_admin', 'com_admin', '{}');
INSERT INTO public.cms_assets VALUES (3, 1, 3, 6, 1, 'com_banners', 'com_banners', '{"core.admin":{"7":1},"core.manage":{"6":1}}');
INSERT INTO public.cms_assets VALUES (4, 1, 7, 8, 1, 'com_cache', 'com_cache', '{"core.admin":{"7":1},"core.manage":{"7":1}}');
INSERT INTO public.cms_assets VALUES (5, 1, 9, 10, 1, 'com_checkin', 'com_checkin', '{"core.admin":{"7":1},"core.manage":{"7":1}}');
INSERT INTO public.cms_assets VALUES (6, 1, 11, 12, 1, 'com_config', 'com_config', '{}');
INSERT INTO public.cms_assets VALUES (7, 1, 13, 16, 1, 'com_contact', 'com_contact', '{"core.admin":{"7":1},"core.manage":{"6":1}}');
INSERT INTO public.cms_assets VALUES (8, 1, 17, 38, 1, 'com_content', 'com_content', '{"core.admin":{"7":1},"core.manage":{"6":1},"core.create":{"3":1},"core.edit":{"4":1},"core.edit.state":{"5":1},"core.execute.transition":{"6":1,"5":1}}');
INSERT INTO public.cms_assets VALUES (9, 1, 39, 40, 1, 'com_cpanel', 'com_cpanel', '{}');
INSERT INTO public.cms_assets VALUES (10, 1, 41, 42, 1, 'com_installer', 'com_installer', '{"core.manage":{"7":0},"core.delete":{"7":0},"core.edit.state":{"7":0}}');
INSERT INTO public.cms_assets VALUES (11, 1, 43, 44, 1, 'com_languages', 'com_languages', '{"core.admin":{"7":1}}');
INSERT INTO public.cms_assets VALUES (12, 1, 45, 46, 1, 'com_login', 'com_login', '{}');
INSERT INTO public.cms_assets VALUES (14, 1, 47, 48, 1, 'com_massmail', 'com_massmail', '{}');
INSERT INTO public.cms_assets VALUES (15, 1, 49, 50, 1, 'com_media', 'com_media', '{"core.admin":{"7":1},"core.manage":{"6":1},"core.create":{"3":1},"core.delete":{"5":1}}');
INSERT INTO public.cms_assets VALUES (16, 1, 51, 54, 1, 'com_menus', 'com_menus', '{"core.admin":{"7":1}}');
INSERT INTO public.cms_assets VALUES (17, 1, 55, 56, 1, 'com_messages', 'com_messages', '{"core.admin":{"7":1},"core.manage":{"7":1}}');
INSERT INTO public.cms_assets VALUES (18, 1, 57, 130, 1, 'com_modules', 'com_modules', '{"core.admin":{"7":1}}');
INSERT INTO public.cms_assets VALUES (19, 1, 131, 134, 1, 'com_newsfeeds', 'com_newsfeeds', '{"core.admin":{"7":1},"core.manage":{"6":1}}');
INSERT INTO public.cms_assets VALUES (20, 1, 135, 136, 1, 'com_plugins', 'com_plugins', '{"core.admin":{"7":1}}');
INSERT INTO public.cms_assets VALUES (21, 1, 137, 138, 1, 'com_redirect', 'com_redirect', '{"core.admin":{"7":1}}');
INSERT INTO public.cms_assets VALUES (23, 1, 139, 140, 1, 'com_templates', 'com_templates', '{"core.admin":{"7":1}}');
INSERT INTO public.cms_assets VALUES (24, 1, 145, 148, 1, 'com_users', 'com_users', '{"core.admin":{"7":1}}');
INSERT INTO public.cms_assets VALUES (26, 1, 149, 150, 1, 'com_wrapper', 'com_wrapper', '{}');
INSERT INTO public.cms_assets VALUES (27, 8, 18, 19, 2, 'com_content.category.2', 'Uncategorised', '{}');
INSERT INTO public.cms_assets VALUES (28, 3, 4, 5, 2, 'com_banners.category.3', 'Uncategorised', '{}');
INSERT INTO public.cms_assets VALUES (29, 7, 14, 15, 2, 'com_contact.category.4', 'Uncategorised', '{}');
INSERT INTO public.cms_assets VALUES (30, 19, 132, 133, 2, 'com_newsfeeds.category.5', 'Uncategorised', '{}');
INSERT INTO public.cms_assets VALUES (32, 24, 146, 147, 2, 'com_users.category.7', 'Uncategorised', '{}');
INSERT INTO public.cms_assets VALUES (33, 1, 151, 152, 1, 'com_finder', 'com_finder', '{"core.admin":{"7":1},"core.manage":{"6":1}}');
INSERT INTO public.cms_assets VALUES (34, 1, 153, 154, 1, 'com_joomlaupdate', 'com_joomlaupdate', '{}');
INSERT INTO public.cms_assets VALUES (35, 1, 155, 156, 1, 'com_tags', 'com_tags', '{}');
INSERT INTO public.cms_assets VALUES (36, 1, 157, 158, 1, 'com_contenthistory', 'com_contenthistory', '{}');
INSERT INTO public.cms_assets VALUES (37, 1, 159, 160, 1, 'com_ajax', 'com_ajax', '{}');
INSERT INTO public.cms_assets VALUES (38, 1, 161, 162, 1, 'com_postinstall', 'com_postinstall', '{}');
INSERT INTO public.cms_assets VALUES (39, 18, 58, 59, 2, 'com_modules.module.1', 'Main Menu', '{}');
INSERT INTO public.cms_assets VALUES (40, 18, 60, 61, 2, 'com_modules.module.2', 'Login', '{}');
INSERT INTO public.cms_assets VALUES (41, 18, 62, 63, 2, 'com_modules.module.3', 'Popular Articles', '{}');
INSERT INTO public.cms_assets VALUES (42, 18, 64, 65, 2, 'com_modules.module.4', 'Recently Added Articles', '{}');
INSERT INTO public.cms_assets VALUES (43, 18, 66, 67, 2, 'com_modules.module.8', 'Toolbar', '{}');
INSERT INTO public.cms_assets VALUES (44, 18, 68, 69, 2, 'com_modules.module.9', 'Notifications', '{}');
INSERT INTO public.cms_assets VALUES (45, 18, 70, 71, 2, 'com_modules.module.10', 'Logged-in Users', '{}');
INSERT INTO public.cms_assets VALUES (46, 18, 72, 73, 2, 'com_modules.module.12', 'Admin Menu', '{}');
INSERT INTO public.cms_assets VALUES (48, 18, 78, 79, 2, 'com_modules.module.14', 'User Status', '{}');
INSERT INTO public.cms_assets VALUES (49, 18, 80, 81, 2, 'com_modules.module.15', 'Title', '{}');
INSERT INTO public.cms_assets VALUES (50, 18, 82, 83, 2, 'com_modules.module.16', 'Login Form', '{}');
INSERT INTO public.cms_assets VALUES (51, 18, 84, 85, 2, 'com_modules.module.17', 'Breadcrumbs', '{}');
INSERT INTO public.cms_assets VALUES (52, 18, 86, 87, 2, 'com_modules.module.79', 'Multilanguage status', '{}');
INSERT INTO public.cms_assets VALUES (53, 18, 90, 91, 2, 'com_modules.module.86', 'Joomla Version', '{}');
INSERT INTO public.cms_assets VALUES (54, 16, 52, 53, 2, 'com_menus.menu.1', 'Main Menu', '{}');
INSERT INTO public.cms_assets VALUES (55, 18, 94, 95, 2, 'com_modules.module.87', 'Sample Data', '{}');
INSERT INTO public.cms_assets VALUES (56, 8, 20, 37, 2, 'com_content.workflow.1', 'COM_WORKFLOW_BASIC_WORKFLOW', '{}');
INSERT INTO public.cms_assets VALUES (57, 56, 21, 22, 3, 'com_content.stage.1', 'COM_WORKFLOW_BASIC_STAGE', '{}');
INSERT INTO public.cms_assets VALUES (58, 56, 23, 24, 3, 'com_content.transition.1', 'Unpublish', '{}');
INSERT INTO public.cms_assets VALUES (59, 56, 25, 26, 3, 'com_content.transition.2', 'Publish', '{}');
INSERT INTO public.cms_assets VALUES (60, 56, 27, 28, 3, 'com_content.transition.3', 'Trash', '{}');
INSERT INTO public.cms_assets VALUES (61, 56, 29, 30, 3, 'com_content.transition.4', 'Archive', '{}');
INSERT INTO public.cms_assets VALUES (62, 56, 31, 32, 3, 'com_content.transition.5', 'Feature', '{}');
INSERT INTO public.cms_assets VALUES (63, 56, 33, 34, 3, 'com_content.transition.6', 'Unfeature', '{}');
INSERT INTO public.cms_assets VALUES (64, 56, 35, 36, 3, 'com_content.transition.7', 'Publish & Feature', '{}');
INSERT INTO public.cms_assets VALUES (65, 1, 141, 142, 1, 'com_privacy', 'com_privacy', '{}');
INSERT INTO public.cms_assets VALUES (66, 1, 143, 144, 1, 'com_actionlogs', 'com_actionlogs', '{}');
INSERT INTO public.cms_assets VALUES (67, 18, 74, 75, 2, 'com_modules.module.88', 'Latest Actions', '{}');
INSERT INTO public.cms_assets VALUES (68, 18, 76, 77, 2, 'com_modules.module.89', 'Privacy Dashboard', '{}');
INSERT INTO public.cms_assets VALUES (70, 18, 88, 89, 2, 'com_modules.module.103', 'Site', '{}');
INSERT INTO public.cms_assets VALUES (71, 18, 92, 93, 2, 'com_modules.module.104', 'System', '{}');
INSERT INTO public.cms_assets VALUES (72, 18, 96, 97, 2, 'com_modules.module.91', 'System Dashboard', '{}');
INSERT INTO public.cms_assets VALUES (73, 18, 98, 99, 2, 'com_modules.module.92', 'Content Dashboard', '{}');
INSERT INTO public.cms_assets VALUES (74, 18, 100, 101, 2, 'com_modules.module.93', 'Menus Dashboard', '{}');
INSERT INTO public.cms_assets VALUES (75, 18, 102, 103, 2, 'com_modules.module.94', 'Components Dashboard', '{}');
INSERT INTO public.cms_assets VALUES (76, 18, 104, 105, 2, 'com_modules.module.95', 'Users Dashboard', '{}');
INSERT INTO public.cms_assets VALUES (77, 18, 106, 107, 2, 'com_modules.module.99', 'Frontend Link', '{}');
INSERT INTO public.cms_assets VALUES (78, 18, 108, 109, 2, 'com_modules.module.100', 'Messages', '{}');
INSERT INTO public.cms_assets VALUES (79, 18, 110, 111, 2, 'com_modules.module.101', 'Post Install Messages', '{}');
INSERT INTO public.cms_assets VALUES (80, 18, 112, 113, 2, 'com_modules.module.102', 'User Status', '{}');
INSERT INTO public.cms_assets VALUES (82, 18, 114, 115, 2, 'com_modules.module.105', '3rd Party', '{}');
INSERT INTO public.cms_assets VALUES (83, 18, 116, 117, 2, 'com_modules.module.106', 'Help Dashboard', '{}');
INSERT INTO public.cms_assets VALUES (84, 18, 118, 119, 2, 'com_modules.module.107', 'Privacy Requests', '{}');
INSERT INTO public.cms_assets VALUES (85, 18, 120, 121, 2, 'com_modules.module.108', 'Privacy Status', '{}');
INSERT INTO public.cms_assets VALUES (86, 18, 122, 123, 2, 'com_modules.module.96', 'Popular Articles', '{}');
INSERT INTO public.cms_assets VALUES (87, 18, 124, 125, 2, 'com_modules.module.97', 'Recently Added Articles', '{}');
INSERT INTO public.cms_assets VALUES (88, 18, 126, 127, 2, 'com_modules.module.98', 'Logged-in Users', '{}');
INSERT INTO public.cms_assets VALUES (89, 18, 128, 129, 2, 'com_modules.module.90', 'Login Support', '{}');
INSERT INTO public.cms_assets VALUES (90, 1, 163, 164, 1, 'com_scheduler', 'com_scheduler', '{}');


--
-- Data for Name: cms_associations; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_banner_clients; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_banner_tracks; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_banners; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_categories VALUES (1, 0, 0, 0, 11, 0, '', 'system', 'ROOT', 'root', '', '', 1, NULL, NULL, 1, '{}', '', '', '{}', 476, '2022-04-02 09:44:29.471123', 476, '2022-04-02 09:44:29.471123', 0, '*', 1);
INSERT INTO public.cms_categories VALUES (2, 27, 1, 1, 2, 1, 'uncategorised', 'com_content', 'Uncategorised', 'uncategorised', '', '', 1, NULL, NULL, 1, '{"category_layout":"","image":"","workflow_id":"use_default"}', '', '', '{"author":"","robots":""}', 476, '2022-04-02 09:44:29.471123', 476, '2022-04-02 09:44:29.471123', 0, '*', 1);
INSERT INTO public.cms_categories VALUES (3, 28, 1, 3, 4, 1, 'uncategorised', 'com_banners', 'Uncategorised', 'uncategorised', '', '', 1, NULL, NULL, 1, '{"category_layout":"","image":""}', '', '', '{"author":"","robots":""}', 476, '2022-04-02 09:44:29.471123', 476, '2022-04-02 09:44:29.471123', 0, '*', 1);
INSERT INTO public.cms_categories VALUES (4, 29, 1, 5, 6, 1, 'uncategorised', 'com_contact', 'Uncategorised', 'uncategorised', '', '', 1, NULL, NULL, 1, '{"category_layout":"","image":""}', '', '', '{"author":"","robots":""}', 476, '2022-04-02 09:44:29.471123', 476, '2022-04-02 09:44:29.471123', 0, '*', 1);
INSERT INTO public.cms_categories VALUES (5, 30, 1, 7, 8, 1, 'uncategorised', 'com_newsfeeds', 'Uncategorised', 'uncategorised', '', '', 1, NULL, NULL, 1, '{"category_layout":"","image":""}', '', '', '{"author":"","robots":""}', 476, '2022-04-02 09:44:29.471123', 476, '2022-04-02 09:44:29.471123', 0, '*', 1);
INSERT INTO public.cms_categories VALUES (7, 32, 1, 9, 10, 1, 'uncategorised', 'com_users', 'Uncategorised', 'uncategorised', '', '', 1, NULL, NULL, 1, '{"category_layout":"","image":""}', '', '', '{"author":"","robots":""}', 476, '2022-04-02 09:44:29.471123', 476, '2022-04-02 09:44:29.471123', 0, '*', 1);


--
-- Data for Name: cms_contact_details; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_content; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_content_frontpage; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_content_rating; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_content_types; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_content_types VALUES (1, 'Article', 'com_content.article', '{"special":{"dbtable":"#__content","key":"id","type":"ArticleTable","prefix":"Joomla\\Component\\Content\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"title","core_state":"state","core_alias":"alias","core_created_time":"created","core_modified_time":"modified","core_body":"introtext", "core_hits":"hits","core_publish_up":"publish_up","core_publish_down":"publish_down","core_access":"access", "core_params":"attribs", "core_featured":"featured", "core_metadata":"metadata", "core_language":"language", "core_images":"images", "core_urls":"urls", "core_version":"version", "core_ordering":"ordering", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"catid", "asset_id":"asset_id", "note":"note"}, "special":{"fulltext":"fulltext"}}', 'ContentHelperRoute::getArticleRoute', '{"formFile":"administrator\/components\/com_content\/forms\/article.xml", "hideFields":["asset_id","checked_out","checked_out_time","version"],"ignoreChanges":["modified_by", "modified", "checked_out", "checked_out_time", "version", "hits", "ordering"],"convertToInt":["publish_up", "publish_down", "featured", "ordering"],"displayLookup":[{"sourceColumn":"catid","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"created_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"} ]}');
INSERT INTO public.cms_content_types VALUES (2, 'Contact', 'com_contact.contact', '{"special":{"dbtable":"#__contact_details","key":"id","type":"ContactTable","prefix":"Joomla\\Component\\Contact\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"name","core_state":"published","core_alias":"alias","core_created_time":"created","core_modified_time":"modified","core_body":"address", "core_hits":"hits","core_publish_up":"publish_up","core_publish_down":"publish_down","core_access":"access", "core_params":"params", "core_featured":"featured", "core_metadata":"metadata", "core_language":"language", "core_images":"image", "core_urls":"webpage", "core_version":"version", "core_ordering":"ordering", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"catid", "asset_id":"null"}, "special":{"con_position":"con_position","suburb":"suburb","state":"state","country":"country","postcode":"postcode","telephone":"telephone","fax":"fax","misc":"misc","email_to":"email_to","default_con":"default_con","user_id":"user_id","mobile":"mobile","sortname1":"sortname1","sortname2":"sortname2","sortname3":"sortname3"}}', 'ContactHelperRoute::getContactRoute', '{"formFile":"administrator\/components\/com_contact\/forms\/contact.xml","hideFields":["default_con","checked_out","checked_out_time","version"],"ignoreChanges":["modified_by", "modified", "checked_out", "checked_out_time", "version", "hits"],"convertToInt":["publish_up", "publish_down", "featured", "ordering"], "displayLookup":[ {"sourceColumn":"created_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"catid","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"} ] }');
INSERT INTO public.cms_content_types VALUES (3, 'Newsfeed', 'com_newsfeeds.newsfeed', '{"special":{"dbtable":"#__newsfeeds","key":"id","type":"NewsfeedTable","prefix":"Joomla\\Component\\Newsfeeds\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"name","core_state":"published","core_alias":"alias","core_created_time":"created","core_modified_time":"modified","core_body":"description", "core_hits":"hits","core_publish_up":"publish_up","core_publish_down":"publish_down","core_access":"access", "core_params":"params", "core_featured":"featured", "core_metadata":"metadata", "core_language":"language", "core_images":"images", "core_urls":"link", "core_version":"version", "core_ordering":"ordering", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"catid", "asset_id":"null"}, "special":{"numarticles":"numarticles","cache_time":"cache_time","rtl":"rtl"}}', 'NewsfeedsHelperRoute::getNewsfeedRoute', '{"formFile":"administrator\/components\/com_newsfeeds\/forms\/newsfeed.xml","hideFields":["asset_id","checked_out","checked_out_time","version"],"ignoreChanges":["modified_by", "modified", "checked_out", "checked_out_time", "version", "hits"],"convertToInt":["publish_up", "publish_down", "featured", "ordering"],"displayLookup":[{"sourceColumn":"catid","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"created_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"} ]}');
INSERT INTO public.cms_content_types VALUES (4, 'User', 'com_users.user', '{"special":{"dbtable":"#__users","key":"id","type":"User","prefix":"Joomla\\CMS\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"name","core_state":"null","core_alias":"username","core_created_time":"registerDate","core_modified_time":"lastvisitDate","core_body":"null", "core_hits":"null","core_publish_up":"null","core_publish_down":"null","access":"null", "core_params":"params", "core_featured":"null", "core_metadata":"null", "core_language":"null", "core_images":"null", "core_urls":"null", "core_version":"null", "core_ordering":"null", "core_metakey":"null", "core_metadesc":"null", "core_catid":"null", "asset_id":"null"}, "special":{}}', '', '');
INSERT INTO public.cms_content_types VALUES (5, 'Article Category', 'com_content.category', '{"special":{"dbtable":"#__categories","key":"id","type":"CategoryTable","prefix":"Joomla\\Component\\Categories\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"title","core_state":"published","core_alias":"alias","core_created_time":"created_time","core_modified_time":"modified_time","core_body":"description", "core_hits":"hits","core_publish_up":"null","core_publish_down":"null","core_access":"access", "core_params":"params", "core_featured":"null", "core_metadata":"metadata", "core_language":"language", "core_images":"null", "core_urls":"null", "core_version":"version", "core_ordering":"null", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"parent_id", "asset_id":"asset_id"}, "special":{"parent_id":"parent_id","lft":"lft","rgt":"rgt","level":"level","path":"path","extension":"extension","note":"note"}}', 'ContentHelperRoute::getCategoryRoute', '{"formFile":"administrator\/components\/com_categories\/forms\/category.xml", "hideFields":["asset_id","checked_out","checked_out_time","version","lft","rgt","level","path","extension"], "ignoreChanges":["modified_user_id", "modified_time", "checked_out", "checked_out_time", "version", "hits", "path"],"convertToInt":["publish_up", "publish_down"], "displayLookup":[{"sourceColumn":"created_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"parent_id","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"}]}');
INSERT INTO public.cms_content_types VALUES (6, 'Contact Category', 'com_contact.category', '{"special":{"dbtable":"#__categories","key":"id","type":"CategoryTable","prefix":"Joomla\\Component\\Categories\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"title","core_state":"published","core_alias":"alias","core_created_time":"created_time","core_modified_time":"modified_time","core_body":"description", "core_hits":"hits","core_publish_up":"null","core_publish_down":"null","core_access":"access", "core_params":"params", "core_featured":"null", "core_metadata":"metadata", "core_language":"language", "core_images":"null", "core_urls":"null", "core_version":"version", "core_ordering":"null", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"parent_id", "asset_id":"asset_id"}, "special":{"parent_id":"parent_id","lft":"lft","rgt":"rgt","level":"level","path":"path","extension":"extension","note":"note"}}', 'ContactHelperRoute::getCategoryRoute', '{"formFile":"administrator\/components\/com_categories\/forms\/category.xml", "hideFields":["asset_id","checked_out","checked_out_time","version","lft","rgt","level","path","extension"], "ignoreChanges":["modified_user_id", "modified_time", "checked_out", "checked_out_time", "version", "hits", "path"],"convertToInt":["publish_up", "publish_down"], "displayLookup":[{"sourceColumn":"created_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"parent_id","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"}]}');
INSERT INTO public.cms_content_types VALUES (7, 'Newsfeeds Category', 'com_newsfeeds.category', '{"special":{"dbtable":"#__categories","key":"id","type":"CategoryTable","prefix":"Joomla\\Component\\Categories\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"title","core_state":"published","core_alias":"alias","core_created_time":"created_time","core_modified_time":"modified_time","core_body":"description", "core_hits":"hits","core_publish_up":"null","core_publish_down":"null","core_access":"access", "core_params":"params", "core_featured":"null", "core_metadata":"metadata", "core_language":"language", "core_images":"null", "core_urls":"null", "core_version":"version", "core_ordering":"null", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"parent_id", "asset_id":"asset_id"}, "special":{"parent_id":"parent_id","lft":"lft","rgt":"rgt","level":"level","path":"path","extension":"extension","note":"note"}}', 'NewsfeedsHelperRoute::getCategoryRoute', '{"formFile":"administrator\/components\/com_categories\/forms\/category.xml", "hideFields":["asset_id","checked_out","checked_out_time","version","lft","rgt","level","path","extension"], "ignoreChanges":["modified_user_id", "modified_time", "checked_out", "checked_out_time", "version", "hits", "path"],"convertToInt":["publish_up", "publish_down"], "displayLookup":[{"sourceColumn":"created_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"parent_id","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"}]}');
INSERT INTO public.cms_content_types VALUES (8, 'Tag', 'com_tags.tag', '{"special":{"dbtable":"#__tags","key":"tag_id","type":"TagTable","prefix":"Joomla\\Component\\Tags\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"title","core_state":"published","core_alias":"alias","core_created_time":"created_time","core_modified_time":"modified_time","core_body":"description", "core_hits":"hits","core_publish_up":"null","core_publish_down":"null","core_access":"access", "core_params":"params", "core_featured":"featured", "core_metadata":"metadata", "core_language":"language", "core_images":"images", "core_urls":"urls", "core_version":"version", "core_ordering":"null", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"null", "asset_id":"null"}, "special":{"parent_id":"parent_id","lft":"lft","rgt":"rgt","level":"level","path":"path"}}', 'TagsHelperRoute::getTagRoute', '{"formFile":"administrator\/components\/com_tags\/forms\/tag.xml", "hideFields":["checked_out","checked_out_time","version", "lft", "rgt", "level", "path", "urls", "publish_up", "publish_down"],"ignoreChanges":["modified_user_id", "modified_time", "checked_out", "checked_out_time", "version", "hits", "path"],"convertToInt":["publish_up", "publish_down"], "displayLookup":[{"sourceColumn":"created_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"}, {"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"}, {"sourceColumn":"modified_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"}]}');
INSERT INTO public.cms_content_types VALUES (9, 'Banner', 'com_banners.banner', '{"special":{"dbtable":"#__banners","key":"id","type":"BannerTable","prefix":"Joomla\\Component\\Banners\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"name","core_state":"published","core_alias":"alias","core_created_time":"created","core_modified_time":"modified","core_body":"description", "core_hits":"null","core_publish_up":"publish_up","core_publish_down":"publish_down","core_access":"access", "core_params":"params", "core_featured":"null", "core_metadata":"metadata", "core_language":"language", "core_images":"images", "core_urls":"link", "core_version":"version", "core_ordering":"ordering", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"catid", "asset_id":"null"}, "special":{"imptotal":"imptotal", "impmade":"impmade", "clicks":"clicks", "clickurl":"clickurl", "custombannercode":"custombannercode", "cid":"cid", "purchase_type":"purchase_type", "track_impressions":"track_impressions", "track_clicks":"track_clicks"}}', '', '{"formFile":"administrator\/components\/com_banners\/forms\/banner.xml", "hideFields":["checked_out","checked_out_time","version", "reset"],"ignoreChanges":["modified_by", "modified", "checked_out", "checked_out_time", "version", "imptotal", "impmade", "reset"], "convertToInt":["publish_up", "publish_down", "ordering"], "displayLookup":[{"sourceColumn":"catid","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"}, {"sourceColumn":"cid","targetTable":"#__banner_clients","targetColumn":"id","displayColumn":"name"}, {"sourceColumn":"created_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"modified_by","targetTable":"#__users","targetColumn":"id","displayColumn":"name"} ]}');
INSERT INTO public.cms_content_types VALUES (10, 'Banners Category', 'com_banners.category', '{"special":{"dbtable":"#__categories","key":"id","type":"CategoryTable","prefix":"Joomla\\Component\\Categories\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"title","core_state":"published","core_alias":"alias","core_created_time":"created_time","core_modified_time":"modified_time","core_body":"description", "core_hits":"hits","core_publish_up":"null","core_publish_down":"null","core_access":"access", "core_params":"params", "core_featured":"null", "core_metadata":"metadata", "core_language":"language", "core_images":"null", "core_urls":"null", "core_version":"version", "core_ordering":"null", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"parent_id", "asset_id":"asset_id"}, "special": {"parent_id":"parent_id","lft":"lft","rgt":"rgt","level":"level","path":"path","extension":"extension","note":"note"}}', '', '{"formFile":"administrator\/components\/com_categories\/forms\/category.xml", "hideFields":["asset_id","checked_out","checked_out_time","version","lft","rgt","level","path","extension"], "ignoreChanges":["modified_user_id", "modified_time", "checked_out", "checked_out_time", "version", "hits", "path"], "convertToInt":["publish_up", "publish_down"], "displayLookup":[{"sourceColumn":"created_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"parent_id","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"}]}');
INSERT INTO public.cms_content_types VALUES (11, 'Banner Client', 'com_banners.client', '{"special":{"dbtable":"#__banner_clients","key":"id","type":"ClientTable","prefix":"Joomla\\Component\\Banners\\Administrator\\Table\\"}}', '', '', '', '{"formFile":"administrator\/components\/com_banners\/forms\/client.xml", "hideFields":["checked_out","checked_out_time"], "ignoreChanges":["checked_out", "checked_out_time"], "convertToInt":[], "displayLookup":[]}');
INSERT INTO public.cms_content_types VALUES (12, 'User Notes', 'com_users.note', '{"special":{"dbtable":"#__user_notes","key":"id","type":"NoteTable","prefix":"Joomla\\Component\\Users\\Administrator\\Table\\"}}', '', '', '', '{"formFile":"administrator\/components\/com_users\/forms\/note.xml", "hideFields":["checked_out","checked_out_time", "publish_up", "publish_down"],"ignoreChanges":["modified_user_id", "modified_time", "checked_out", "checked_out_time"], "convertToInt":["publish_up", "publish_down"],"displayLookup":[{"sourceColumn":"catid","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"}, {"sourceColumn":"created_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"}, {"sourceColumn":"user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"}, {"sourceColumn":"modified_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"}]}');
INSERT INTO public.cms_content_types VALUES (13, 'User Notes Category', 'com_users.category', '{"special":{"dbtable":"#__categories","key":"id","type":"CategoryTable","prefix":"Joomla\\Component\\Categories\\Administrator\\Table\\","config":"array()"},"common":{"dbtable":"#__ucm_content","key":"ucm_id","type":"Corecontent","prefix":"Joomla\\CMS\\Table\\","config":"array()"}}', '', '{"common":{"core_content_item_id":"id","core_title":"title","core_state":"published","core_alias":"alias","core_created_time":"created_time","core_modified_time":"modified_time","core_body":"description", "core_hits":"hits","core_publish_up":"null","core_publish_down":"null","core_access":"access", "core_params":"params", "core_featured":"null", "core_metadata":"metadata", "core_language":"language", "core_images":"null", "core_urls":"null", "core_version":"version", "core_ordering":"null", "core_metakey":"metakey", "core_metadesc":"metadesc", "core_catid":"parent_id", "asset_id":"asset_id"}, "special":{"parent_id":"parent_id","lft":"lft","rgt":"rgt","level":"level","path":"path","extension":"extension","note":"note"}}', '', '{"formFile":"administrator\/components\/com_categories\/forms\/category.xml", "hideFields":["checked_out","checked_out_time","version","lft","rgt","level","path","extension"], "ignoreChanges":["modified_user_id", "modified_time", "checked_out", "checked_out_time", "version", "hits", "path"], "convertToInt":["publish_up", "publish_down"], "displayLookup":[{"sourceColumn":"created_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"}, {"sourceColumn":"access","targetTable":"#__viewlevels","targetColumn":"id","displayColumn":"title"},{"sourceColumn":"modified_user_id","targetTable":"#__users","targetColumn":"id","displayColumn":"name"},{"sourceColumn":"parent_id","targetTable":"#__categories","targetColumn":"id","displayColumn":"title"}]}');


--
-- Data for Name: cms_contentitem_tag_map; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_extensions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_extensions VALUES (4, 0, 'com_cache', 'component', 'com_cache', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_cache","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CACHE_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (8, 0, 'com_cpanel', 'component', 'com_cpanel', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_cpanel","type":"component","creationDate":"Jun 2007","author":"Joomla! Project","copyright":"(C) 2007 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CPANEL_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (9, 0, 'com_installer', 'component', 'com_installer', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_installer","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_INSTALLER_XML_DESCRIPTION","group":""}', '{"cachetimeout":"6","minimum_stability":"4"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (10, 0, 'com_languages', 'component', 'com_languages', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_languages","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_LANGUAGES_XML_DESCRIPTION","group":""}', '{"administrator":"en-GB","site":"en-GB"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (11, 0, 'com_login', 'component', 'com_login', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_login","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_LOGIN_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (12, 0, 'com_media', 'component', 'com_media', NULL, '', 1, 1, 0, 1, 1, '{"name":"com_media","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"COM_MEDIA_XML_DESCRIPTION","group":"","filename":"media"}', '{"upload_maxsize":"10","file_path":"images","image_path":"images","restrict_uploads":"1","allowed_media_usergroup":"3","restrict_uploads_extensions":"bmp,gif,jpg,jpeg,png,ico,webp,mp3,m4a,mp4a,ogg,mp4,mp4v,mpeg,mov,odg,odp,ods,odt,pdf,png,ppt,txt,xcf,xls,csv","check_mime":"1","image_extensions":"bmp,gif,jpg,png,jpeg,webp","audio_extensions":"mp3,m4a,mp4a,ogg","video_extensions":"mp4,mp4v,mpeg,mov,webm","doc_extensions":"odg,odp,ods,odt,pdf,ppt,txt,xcf,xls,csv","ignore_extensions":"","upload_mime":"image\/jpeg,image\/gif,image\/png,image\/bmp,image\/webp,audio\/ogg,audio\/mpeg,audio\/mp4,video\/mp4,video\/webm,video\/mpeg,video\/quicktime,application\/msword,application\/excel,application\/pdf,application\/powerpoint,text\/plain,application\/x-zip"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (13, 0, 'com_menus', 'component', 'com_menus', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_menus","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_MENUS_XML_DESCRIPTION","group":"","filename":"menus"}', '{"page_title":"","show_page_heading":0,"page_heading":"","pageclass_sfx":""}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (14, 0, 'com_messages', 'component', 'com_messages', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_messages","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_MESSAGES_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (17, 0, 'com_plugins', 'component', 'com_plugins', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_plugins","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_PLUGINS_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (18, 0, 'com_templates', 'component', 'com_templates', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_templates","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_TEMPLATES_XML_DESCRIPTION","group":""}', '{"template_positions_display":"0","upload_limit":"10","image_formats":"gif,bmp,jpg,jpeg,png,webp","source_formats":"txt,less,ini,xml,js,php,css,scss,sass,json","font_formats":"woff,ttf,otf","compressed_formats":"zip"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (61, 0, 'mod_feed', 'module', 'mod_feed', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_feed","type":"module","creationDate":"July 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_FEED_XML_DESCRIPTION","group":"","filename":"mod_feed"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (62, 0, 'mod_latest', 'module', 'mod_latest', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_latest","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_LATEST_XML_DESCRIPTION","group":"","filename":"mod_latest"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (63, 0, 'mod_logged', 'module', 'mod_logged', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_logged","type":"module","creationDate":"January 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_LOGGED_XML_DESCRIPTION","group":"","filename":"mod_logged"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (21, 0, 'com_redirect', 'component', 'com_redirect', NULL, '', 1, 1, 0, 0, 1, '{"name":"com_redirect","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_REDIRECT_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (24, 0, 'com_joomlaupdate', 'component', 'com_joomlaupdate', NULL, '', 1, 1, 0, 1, 1, '{"name":"com_joomlaupdate","type":"component","creationDate":"August 2021","author":"Joomla! Project","copyright":"(C) 2012 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.3","description":"COM_JOOMLAUPDATE_XML_DESCRIPTION","group":""}', '{"updatesource":"default","customurl":""}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (25, 0, 'com_tags', 'component', 'com_tags', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_tags","type":"component","creationDate":"December 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_TAGS_XML_DESCRIPTION","group":"","filename":"tags"}', '{"tag_layout":"_:default","save_history":"1","history_limit":5,"show_tag_title":"0","tag_list_show_tag_image":"0","tag_list_show_tag_description":"0","tag_list_image":"","tag_list_orderby":"title","tag_list_orderby_direction":"ASC","show_headings":"0","tag_list_show_date":"0","tag_list_show_item_image":"0","tag_list_show_item_description":"0","tag_list_item_maximum_characters":0,"return_any_or_all":"1","include_children":"0","maximum":200,"tag_list_language_filter":"all","tags_layout":"_:default","all_tags_orderby":"title","all_tags_orderby_direction":"ASC","all_tags_show_tag_image":"0","all_tags_show_tag_description":"0","all_tags_tag_maximum_characters":20,"all_tags_show_tag_hits":"0","filter_field":"1","show_pagination_limit":"1","show_pagination":"2","show_pagination_results":"1","tag_field_ajax_mode":"1","show_feed_link":"1"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (26, 0, 'com_contenthistory', 'component', 'com_contenthistory', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_contenthistory","type":"component","creationDate":"May 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CONTENTHISTORY_XML_DESCRIPTION","group":"","filename":"contenthistory"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (27, 0, 'com_ajax', 'component', 'com_ajax', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_ajax","type":"component","creationDate":"August 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_AJAX_XML_DESCRIPTION","group":"","filename":"ajax"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (28, 0, 'com_postinstall', 'component', 'com_postinstall', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_postinstall","type":"component","creationDate":"September 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_POSTINSTALL_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (31, 0, 'com_privacy', 'component', 'com_privacy', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_privacy","type":"component","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"COM_PRIVACY_XML_DESCRIPTION","group":"","filename":"privacy"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (33, 0, 'com_workflow', 'component', 'com_workflow', NULL, '', 1, 1, 0, 1, 1, '{"name":"com_workflow","type":"component","creationDate":"June 2017","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_WORKFLOW_XML_DESCRIPTION","group":""}', '{}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (35, 0, 'COM_SCHEDULER', 'component', 'com_scheduler', NULL, '', 1, 1, 1, 0, 1, '{"name":"COM_SCHEDULER","type":"component","creationDate":"July 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1.0","description":"COM_SCHEDULER_XML_DESCRIPTION","group":""}', '{}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (39, 0, 'mod_articles_latest', 'module', 'mod_articles_latest', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_articles_latest","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_LATEST_NEWS_XML_DESCRIPTION","group":"","filename":"mod_articles_latest"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (42, 0, 'mod_breadcrumbs', 'module', 'mod_breadcrumbs', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_breadcrumbs","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_BREADCRUMBS_XML_DESCRIPTION","group":"","filename":"mod_breadcrumbs"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (46, 0, 'mod_login', 'module', 'mod_login', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_login","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_LOGIN_XML_DESCRIPTION","group":"","filename":"mod_login"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (50, 0, 'mod_related_items', 'module', 'mod_related_items', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_related_items","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_RELATED_XML_DESCRIPTION","group":"","filename":"mod_related_items"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (54, 0, 'mod_whosonline', 'module', 'mod_whosonline', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_whosonline","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_WHOSONLINE_XML_DESCRIPTION","group":"","filename":"mod_whosonline"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (57, 0, 'mod_articles_categories', 'module', 'mod_articles_categories', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_articles_categories","type":"module","creationDate":"February 2010","author":"Joomla! Project","copyright":"(C) 2010 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_ARTICLES_CATEGORIES_XML_DESCRIPTION","group":"","filename":"mod_articles_categories"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (68, 0, 'mod_quickicon', 'module', 'mod_quickicon', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_quickicon","type":"module","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_QUICKICON_XML_DESCRIPTION","group":"","filename":"mod_quickicon"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (72, 0, 'mod_user', 'module', 'mod_user', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_user","type":"module","creationDate":"July 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"MOD_USER_XML_DESCRIPTION","group":"","filename":"mod_user"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (75, 0, 'mod_multilangstatus', 'module', 'mod_multilangstatus', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_multilangstatus","type":"module","creationDate":"September 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_MULTILANGSTATUS_XML_DESCRIPTION","group":"","filename":"mod_multilangstatus"}', '{"cache":"0"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (78, 0, 'mod_tags_popular', 'module', 'mod_tags_popular', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_tags_popular","type":"module","creationDate":"January 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.1.0","description":"MOD_TAGS_POPULAR_XML_DESCRIPTION","group":"","filename":"mod_tags_popular"}', '{"maximum":"5","timeframe":"alltime","owncache":"1"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (81, 0, 'mod_latestactions', 'module', 'mod_latestactions', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_latestactions","type":"module","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"MOD_LATESTACTIONS_XML_DESCRIPTION","group":"","filename":"mod_latestactions"}', '{}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (84, 0, 'mod_privacy_status', 'module', 'mod_privacy_status', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_privacy_status","type":"module","creationDate":"July 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"MOD_PRIVACY_STATUS_XML_DESCRIPTION","group":"","filename":"mod_privacy_status"}', '{}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (88, 0, 'plg_authentication_cookie', 'plugin', 'cookie', NULL, 'authentication', 0, 1, 1, 0, 1, '{"name":"plg_authentication_cookie","type":"plugin","creationDate":"July 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_AUTHENTICATION_COOKIE_XML_DESCRIPTION","group":"","filename":"cookie"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (91, 0, 'plg_behaviour_taggable', 'plugin', 'taggable', NULL, 'behaviour', 0, 1, 1, 0, 1, '{"name":"plg_behaviour_taggable","type":"plugin","creationDate":"August 2015","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_BEHAVIOUR_TAGGABLE_XML_DESCRIPTION","group":"","filename":"taggable"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (92, 0, 'plg_behaviour_versionable', 'plugin', 'versionable', NULL, 'behaviour', 0, 1, 1, 0, 1, '{"name":"plg_behaviour_versionable","type":"plugin","creationDate":"August 2015","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_BEHAVIOUR_VERSIONABLE_XML_DESCRIPTION","group":"","filename":"versionable"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (95, 0, 'plg_content_confirmconsent', 'plugin', 'confirmconsent', NULL, 'content', 0, 0, 1, 0, 1, '{"name":"plg_content_confirmconsent","type":"plugin","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_CONTENT_CONFIRMCONSENT_XML_DESCRIPTION","group":"","filename":"confirmconsent"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (98, 0, 'plg_content_fields', 'plugin', 'fields', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_fields","type":"plugin","creationDate":"February 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_CONTENT_FIELDS_XML_DESCRIPTION","group":"","filename":"fields"}', '', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (102, 0, 'plg_content_pagebreak', 'plugin', 'pagebreak', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_pagebreak","type":"plugin","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_CONTENT_PAGEBREAK_XML_DESCRIPTION","group":"","filename":"pagebreak"}', '{"title":"1","multipage_toc":"1","showall":"1"}', '', NULL, NULL, 8, 0, NULL);
INSERT INTO public.cms_extensions VALUES (105, 0, 'plg_editors-xtd_article', 'plugin', 'article', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_article","type":"plugin","creationDate":"October 2009","author":"Joomla! Project","copyright":"(C) 2009 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_ARTICLE_XML_DESCRIPTION","group":"","filename":"article"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (108, 0, 'plg_editors-xtd_image', 'plugin', 'image', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_image","type":"plugin","creationDate":"August 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_IMAGE_XML_DESCRIPTION","group":"","filename":"image"}', '', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (112, 0, 'plg_editors-xtd_readmore', 'plugin', 'readmore', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_readmore","type":"plugin","creationDate":"March 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_READMORE_XML_DESCRIPTION","group":"","filename":"readmore"}', '', '', NULL, NULL, 8, 0, NULL);
INSERT INTO public.cms_extensions VALUES (114, 0, 'plg_editors_none', 'plugin', 'none', NULL, 'editors', 0, 1, 1, 1, 1, '{"name":"plg_editors_none","type":"plugin","creationDate":"September 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_NONE_XML_DESCRIPTION","group":"","filename":"none"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (116, 0, 'plg_extension_finder', 'plugin', 'finder', NULL, 'extension', 0, 1, 1, 0, 1, '{"name":"plg_extension_finder","type":"plugin","creationDate":"June 2018","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_EXTENSION_FINDER_XML_DESCRIPTION","group":"","filename":"finder"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (117, 0, 'plg_extension_joomla', 'plugin', 'joomla', NULL, 'extension', 0, 1, 1, 0, 1, '{"name":"plg_extension_joomla","type":"plugin","creationDate":"May 2010","author":"Joomla! Project","copyright":"(C) 2010 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_EXTENSION_JOOMLA_XML_DESCRIPTION","group":"","filename":"joomla"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (118, 0, 'plg_extension_namespacemap', 'plugin', 'namespacemap', NULL, 'extension', 0, 1, 1, 1, 1, '{"name":"plg_extension_namespacemap","type":"plugin","creationDate":"May 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_EXTENSION_NAMESPACEMAP_XML_DESCRIPTION","group":"","filename":"namespacemap"}', '{}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (121, 0, 'plg_fields_color', 'plugin', 'color', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_color","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_COLOR_XML_DESCRIPTION","group":"","filename":"color"}', '', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (125, 0, 'plg_fields_list', 'plugin', 'list', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_list","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_LIST_XML_DESCRIPTION","group":"","filename":"list"}', '', '', NULL, NULL, 7, 0, NULL);
INSERT INTO public.cms_extensions VALUES (128, 0, 'plg_fields_sql', 'plugin', 'sql', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_sql","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_SQL_XML_DESCRIPTION","group":"","filename":"sql"}', '', '', NULL, NULL, 10, 0, NULL);
INSERT INTO public.cms_extensions VALUES (131, 0, 'plg_fields_textarea', 'plugin', 'textarea', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_textarea","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_TEXTAREA_XML_DESCRIPTION","group":"","filename":"textarea"}', '', '', NULL, NULL, 13, 0, NULL);
INSERT INTO public.cms_extensions VALUES (135, 0, 'plg_filesystem_local', 'plugin', 'local', NULL, 'filesystem', 0, 1, 1, 0, 1, '{"name":"plg_filesystem_local","type":"plugin","creationDate":"April 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_FILESYSTEM_LOCAL_XML_DESCRIPTION","group":"","filename":"local"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (138, 0, 'plg_finder_content', 'plugin', 'content', NULL, 'finder', 0, 1, 1, 0, 1, '{"name":"plg_finder_content","type":"plugin","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_FINDER_CONTENT_XML_DESCRIPTION","group":"","filename":"content"}', '', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (142, 0, 'plg_installer_override', 'plugin', 'override', NULL, 'installer', 0, 1, 1, 0, 1, '{"name":"plg_installer_override","type":"plugin","creationDate":"June 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_INSTALLER_OVERRIDE_PLUGIN_XML_DESCRIPTION","group":"","filename":"override"}', '', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (145, 0, 'plg_installer_webinstaller', 'plugin', 'webinstaller', NULL, 'installer', 0, 1, 1, 0, 1, '{"name":"plg_installer_webinstaller","type":"plugin","creationDate":"April 2017","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_INSTALLER_WEBINSTALLER_XML_DESCRIPTION","group":"","filename":"webinstaller"}', '{"tab_position":"1"}', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (148, 0, 'plg_media-action_rotate', 'plugin', 'rotate', NULL, 'media-action', 0, 1, 1, 0, 1, '{"name":"plg_media-action_rotate","type":"plugin","creationDate":"January 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_MEDIA-ACTION_ROTATE_XML_DESCRIPTION","group":"","filename":"rotate"}', '{}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (152, 0, 'plg_privacy_content', 'plugin', 'content', NULL, 'privacy', 0, 1, 1, 0, 1, '{"name":"plg_privacy_content","type":"plugin","creationDate":"July 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_PRIVACY_CONTENT_XML_DESCRIPTION","group":"","filename":"content"}', '{}', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (155, 0, 'plg_quickicon_joomlaupdate', 'plugin', 'joomlaupdate', NULL, 'quickicon', 0, 1, 1, 0, 1, '{"name":"plg_quickicon_joomlaupdate","type":"plugin","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_QUICKICON_JOOMLAUPDATE_XML_DESCRIPTION","group":"","filename":"joomlaupdate"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (158, 0, 'plg_quickicon_downloadkey', 'plugin', 'downloadkey', NULL, 'quickicon', 0, 1, 1, 0, 1, '{"name":"plg_quickicon_downloadkey","type":"plugin","creationDate":"October 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_QUICKICON_DOWNLOADKEY_XML_DESCRIPTION","group":"","filename":"downloadkey"}', '', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (161, 0, 'plg_sampledata_blog', 'plugin', 'blog', NULL, 'sampledata', 0, 1, 1, 0, 1, '{"name":"plg_sampledata_blog","type":"plugin","creationDate":"July 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.8.0","description":"PLG_SAMPLEDATA_BLOG_XML_DESCRIPTION","group":"","filename":"blog"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (169, 0, 'plg_system_httpheaders', 'plugin', 'httpheaders', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_httpheaders","type":"plugin","creationDate":"October 2017","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_SYSTEM_HTTPHEADERS_XML_DESCRIPTION","group":"","filename":"httpheaders"}', '{}', '', NULL, NULL, 7, 0, NULL);
INSERT INTO public.cms_extensions VALUES (172, 0, 'plg_system_languagefilter', 'plugin', 'languagefilter', NULL, 'system', 0, 0, 1, 0, 1, '{"name":"plg_system_languagefilter","type":"plugin","creationDate":"July 2010","author":"Joomla! Project","copyright":"(C) 2010 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_SYSTEM_LANGUAGEFILTER_XML_DESCRIPTION","group":"","filename":"languagefilter"}', '', '', NULL, NULL, 10, 0, NULL);
INSERT INTO public.cms_extensions VALUES (176, 0, 'plg_system_privacyconsent', 'plugin', 'privacyconsent', NULL, 'system', 0, 0, 1, 0, 1, '{"name":"plg_system_privacyconsent","type":"plugin","creationDate":"April 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_SYSTEM_PRIVACYCONSENT_XML_DESCRIPTION","group":"","filename":"privacyconsent"}', '{}', '', NULL, NULL, 14, 0, NULL);
INSERT INTO public.cms_extensions VALUES (180, 0, 'plg_system_sef', 'plugin', 'sef', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_sef","type":"plugin","creationDate":"December 2007","author":"Joomla! Project","copyright":"(C) 2007 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_SEF_XML_DESCRIPTION","group":"","filename":"sef"}', '', '', NULL, NULL, 18, 0, NULL);
INSERT INTO public.cms_extensions VALUES (183, 0, 'plg_system_stats', 'plugin', 'stats', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_stats","type":"plugin","creationDate":"November 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.5.0","description":"PLG_SYSTEM_STATS_XML_DESCRIPTION","group":"","filename":"stats"}', '', '', NULL, NULL, 21, 0, NULL);
INSERT INTO public.cms_extensions VALUES (186, 0, 'plg_system_webauthn', 'plugin', 'webauthn', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_webauthn","type":"plugin","creationDate":"2019-07-02","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_SYSTEM_WEBAUTHN_DESCRIPTION","group":"","filename":"webauthn"}', '{}', '', NULL, NULL, 23, 0, NULL);
INSERT INTO public.cms_extensions VALUES (189, 0, 'plg_task_requests', 'plugin', 'requests', NULL, 'task', 0, 1, 1, 0, 0, '{"name":"plg_task_requests","type":"plugin","creationDate":"August 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1","description":"PLG_TASK_REQUESTS_XML_DESCRIPTION","group":"","filename":"requests"}', '{}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (193, 0, 'plg_user_contactcreator', 'plugin', 'contactcreator', NULL, 'user', 0, 0, 1, 0, 1, '{"name":"plg_user_contactcreator","type":"plugin","creationDate":"August 2009","author":"Joomla! Project","copyright":"(C) 2009 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_CONTACTCREATOR_XML_DESCRIPTION","group":"","filename":"contactcreator"}', '{"autowebpage":"","category":"4","autopublish":"0"}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (196, 0, 'plg_user_terms', 'plugin', 'terms', NULL, 'user', 0, 0, 1, 0, 1, '{"name":"plg_user_terms","type":"plugin","creationDate":"June 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_USER_TERMS_XML_DESCRIPTION","group":"","filename":"terms"}', '{}', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (197, 0, 'plg_user_token', 'plugin', 'token', NULL, 'user', 0, 1, 1, 0, 1, '{"name":"plg_user_token","type":"plugin","creationDate":"November 2019","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_USER_TOKEN_XML_DESCRIPTION","group":"","filename":"token"}', '{}', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (198, 0, 'plg_webservices_banners', 'plugin', 'banners', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_banners","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_BANNERS_XML_DESCRIPTION","group":"","filename":"banners"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (200, 0, 'plg_webservices_contact', 'plugin', 'contact', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_contact","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_CONTACT_XML_DESCRIPTION","group":"","filename":"contact"}', '{}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (204, 0, 'plg_webservices_media', 'plugin', 'media', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_media","type":"plugin","creationDate":"May 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1.0","description":"PLG_WEBSERVICES_MEDIA_XML_DESCRIPTION","group":"","filename":"media"}', '{}', '', NULL, NULL, 7, 0, NULL);
INSERT INTO public.cms_extensions VALUES (207, 0, 'plg_webservices_modules', 'plugin', 'modules', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_modules","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_MODULES_XML_DESCRIPTION","group":"","filename":"modules"}', '{}', '', NULL, NULL, 9, 0, NULL);
INSERT INTO public.cms_extensions VALUES (210, 0, 'plg_webservices_privacy', 'plugin', 'privacy', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_privacy","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_PRIVACY_XML_DESCRIPTION","group":"","filename":"privacy"}', '{}', '', NULL, NULL, 12, 0, NULL);
INSERT INTO public.cms_extensions VALUES (213, 0, 'plg_webservices_templates', 'plugin', 'templates', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_templates","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_TEMPLATES_XML_DESCRIPTION","group":"","filename":"templates"}', '{}', '', NULL, NULL, 15, 0, NULL);
INSERT INTO public.cms_extensions VALUES (1, 0, 'com_wrapper', 'component', 'com_wrapper', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_wrapper","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2007 Open Source Matters, Inc.\n\t","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_WRAPPER_XML_DESCRIPTION","group":"","filename":"wrapper"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (2, 0, 'com_admin', 'component', 'com_admin', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_admin","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_ADMIN_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (3, 0, 'com_banners', 'component', 'com_banners', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_banners","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_BANNERS_XML_DESCRIPTION","group":"","filename":"banners"}', '{"purchase_type":"3","track_impressions":"0","track_clicks":"0","metakey_prefix":"","save_history":"1","history_limit":10}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (5, 0, 'com_categories', 'component', 'com_categories', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_categories","type":"component","creationDate":"December 2007","author":"Joomla! Project","copyright":"(C) 2007 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CATEGORIES_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (6, 0, 'com_checkin', 'component', 'com_checkin', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_checkin","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CHECKIN_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (7, 0, 'com_contact', 'component', 'com_contact', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_contact","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CONTACT_XML_DESCRIPTION","group":"","filename":"contact"}', '{"contact_layout":"_:default","show_contact_category":"hide","save_history":"1","history_limit":10,"show_contact_list":"0","presentation_style":"sliders","show_tags":"1","show_info":"1","show_name":"1","show_position":"1","show_email":"0","show_street_address":"1","show_suburb":"1","show_state":"1","show_postcode":"1","show_country":"1","show_telephone":"1","show_mobile":"1","show_fax":"1","show_webpage":"1","show_image":"1","show_misc":"1","image":"","allow_vcard":"0","show_articles":"0","articles_display_num":"10","show_profile":"0","show_user_custom_fields":["-1"],"show_links":"0","linka_name":"","linkb_name":"","linkc_name":"","linkd_name":"","linke_name":"","contact_icons":"0","icon_address":"","icon_email":"","icon_telephone":"","icon_mobile":"","icon_fax":"","icon_misc":"","category_layout":"_:default","show_category_title":"1","show_description":"1","show_description_image":"0","maxLevel":"-1","show_subcat_desc":"1","show_empty_categories":"0","show_cat_items":"1","show_cat_tags":"1","show_base_description":"1","maxLevelcat":"-1","show_subcat_desc_cat":"1","show_empty_categories_cat":"0","show_cat_items_cat":"1","filter_field":"0","show_pagination_limit":"0","show_headings":"1","show_image_heading":"0","show_position_headings":"1","show_email_headings":"0","show_telephone_headings":"1","show_mobile_headings":"0","show_fax_headings":"0","show_suburb_headings":"1","show_state_headings":"1","show_country_headings":"1","show_pagination":"2","show_pagination_results":"1","initial_sort":"ordering","captcha":"","show_email_form":"1","show_email_copy":"0","banned_email":"","banned_subject":"","banned_text":"","validate_session":"1","custom_reply":"0","redirect":"","show_feed_link":"1","sef_ids":1,"custom_fields_enable":"1"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (15, 0, 'com_modules', 'component', 'com_modules', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_modules","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_MODULES_XML_DESCRIPTION","group":"","filename":"modules"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (16, 0, 'com_newsfeeds', 'component', 'com_newsfeeds', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_newsfeeds","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_NEWSFEEDS_XML_DESCRIPTION","group":"","filename":"newsfeeds"}', '{"newsfeed_layout":"_:default","save_history":"1","history_limit":5,"show_feed_image":"1","show_feed_description":"1","show_item_description":"1","feed_character_count":"0","feed_display_order":"des","float_first":"right","float_second":"right","show_tags":"1","category_layout":"_:default","show_category_title":"1","show_description":"1","show_description_image":"1","maxLevel":"-1","show_empty_categories":"0","show_subcat_desc":"1","show_cat_items":"1","show_cat_tags":"1","show_base_description":"1","maxLevelcat":"-1","show_empty_categories_cat":"0","show_subcat_desc_cat":"1","show_cat_items_cat":"1","filter_field":"1","show_pagination_limit":"1","show_headings":"1","show_articles":"0","show_link":"1","show_pagination":"1","show_pagination_results":"1","sef_ids":1}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (38, 0, 'mod_articles_archive', 'module', 'mod_articles_archive', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_articles_archive","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_ARTICLES_ARCHIVE_XML_DESCRIPTION","group":"","filename":"mod_articles_archive"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (40, 0, 'mod_articles_popular', 'module', 'mod_articles_popular', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_articles_popular","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_POPULAR_XML_DESCRIPTION","group":"","filename":"mod_articles_popular"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (41, 0, 'mod_banners', 'module', 'mod_banners', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_banners","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_BANNERS_XML_DESCRIPTION","group":"","filename":"mod_banners"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (43, 0, 'mod_custom', 'module', 'mod_custom', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_custom","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_CUSTOM_XML_DESCRIPTION","group":"","filename":"mod_custom"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (220, 0, 'files_joomla', 'file', 'joomla', NULL, '', 0, 1, 1, 1, 1, '{"name":"files_joomla","type":"file","creationDate":"March 2022","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1.2","description":"FILES_JOOMLA_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (222, 221, 'English (en-GB)', 'language', 'en-GB', NULL, '', 0, 1, 1, 1, 1, '{"name":"English (en-GB)","type":"language","creationDate":"March 2022","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1.2","description":"en-GB site language","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (19, 0, 'com_content', 'component', 'com_content', NULL, '', 1, 1, 0, 1, 1, '{"name":"com_content","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CONTENT_XML_DESCRIPTION","group":"","filename":"content"}', '{"article_layout":"_:default","show_title":"1","link_titles":"1","show_intro":"1","show_category":"1","link_category":"1","show_parent_category":"0","link_parent_category":"0","show_author":"1","link_author":"0","show_create_date":"0","show_modify_date":"0","show_publish_date":"1","show_item_navigation":"1","show_vote":"0","show_tags":"1","show_readmore":"1","show_readmore_title":"1","readmore_limit":"100","record_hits":"1","show_hits":"1","show_noauth":"0","show_publishing_options":"1","show_article_options":"1","save_history":"1","history_limit":10,"show_urls_images_frontend":"0","show_urls_images_backend":"1","targeta":0,"targetb":0,"targetc":0,"float_intro":"left","float_fulltext":"left","category_layout":"_:blog","show_category_title":"0","show_description":"0","show_description_image":"0","maxLevel":"1","show_empty_categories":"0","show_no_articles":"1","show_subcat_desc":"1","show_cat_num_articles":"0","show_base_description":"1","maxLevelcat":"-1","show_empty_categories_cat":"0","show_subcat_desc_cat":"1","show_cat_num_articles_cat":"1","num_leading_articles":"1","num_intro_articles":"4","num_links":"4","show_subcategory_content":"0","link_intro_image":"0","show_pagination_limit":"1","filter_field":"hide","show_headings":"1","list_show_date":"0","date_format":"","list_show_hits":"1","list_show_author":"1","orderby_pri":"order","orderby_sec":"rdate","order_date":"published","show_pagination":"2","show_pagination_results":"1","show_feed_link":"1","feed_summary":"0","sef_ids":1}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (20, 0, 'com_config', 'component', 'com_config', NULL, '', 1, 1, 0, 1, 1, '{"name":"com_config","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_CONFIG_XML_DESCRIPTION","group":"","filename":"config"}', '{"filters":{"1":{"filter_type":"NH","filter_tags":"","filter_attributes":""},"9":{"filter_type":"NH","filter_tags":"","filter_attributes":""},"6":{"filter_type":"BL","filter_tags":"","filter_attributes":""},"7":{"filter_type":"BL","filter_tags":"","filter_attributes":""},"2":{"filter_type":"NH","filter_tags":"","filter_attributes":""},"3":{"filter_type":"BL","filter_tags":"","filter_attributes":""},"4":{"filter_type":"BL","filter_tags":"","filter_attributes":""},"5":{"filter_type":"BL","filter_tags":"","filter_attributes":""},"8":{"filter_type":"NONE","filter_tags":"","filter_attributes":""}}}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (22, 0, 'com_users', 'component', 'com_users', NULL, '', 1, 1, 0, 1, 1, '{"name":"com_users","type":"component","creationDate":"April 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_USERS_XML_DESCRIPTION","group":"","filename":"users"}', '{"allowUserRegistration":"0","new_usertype":"2","guest_usergroup":"9","sendpassword":"0","useractivation":"2","mail_to_admin":"1","captcha":"","frontend_userparams":"1","site_language":"0","change_login_name":"0","reset_count":"10","reset_time":"1","minimum_length":"12","minimum_integers":"0","minimum_symbols":"0","minimum_uppercase":"0","save_history":"1","history_limit":5,"mailSubjectPrefix":"","mailBodySuffix":""}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (23, 0, 'com_finder', 'component', 'com_finder', NULL, '', 1, 1, 0, 0, 1, '{"name":"com_finder","type":"component","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_FINDER_XML_DESCRIPTION","group":"","filename":"finder"}', '{"enabled":"0","show_description":"1","description_length":255,"allow_empty_query":"0","show_url":"1","show_autosuggest":"1","show_suggested_query":"1","show_explained_query":"1","show_advanced":"1","show_advanced_tips":"1","expand_advanced":"0","show_date_filters":"0","sort_order":"relevance","sort_direction":"desc","highlight_terms":"1","opensearch_name":"","opensearch_description":"","batch_size":"50","memory_table_limit":30000,"title_multiplier":"1.7","text_multiplier":"0.7","meta_multiplier":"1.2","path_multiplier":"2.0","misc_multiplier":"0.3","stem":"1","stemmer":"snowball","enable_logging":"0"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (29, 0, 'com_fields', 'component', 'com_fields', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_fields","type":"component","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_FIELDS_XML_DESCRIPTION","group":"","filename":"fields"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (30, 0, 'com_associations', 'component', 'com_associations', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_associations","type":"component","creationDate":"January 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_ASSOCIATIONS_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (32, 0, 'com_actionlogs', 'component', 'com_actionlogs', NULL, '', 1, 1, 1, 0, 1, '{"name":"com_actionlogs","type":"component","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"COM_ACTIONLOGS_XML_DESCRIPTION","group":""}', '{"ip_logging":0,"csv_delimiter":",","loggable_extensions":["com_banners","com_cache","com_categories","com_checkin","com_config","com_contact","com_content","com_installer","com_media","com_menus","com_messages","com_modules","com_newsfeeds","com_plugins","com_redirect","com_tags","com_templates","com_users"]}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (34, 0, 'com_mails', 'component', 'com_mails', NULL, '', 1, 1, 1, 1, 1, '{"name":"com_mails","type":"component","creationDate":"January 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"COM_MAILS_XML_DESCRIPTION","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (36, 0, 'lib_joomla', 'library', 'joomla', NULL, '', 0, 1, 1, 1, 1, '{"name":"lib_joomla","type":"library","creationDate":"2008","author":"Joomla! Project","copyright":"(C) 2008 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"https:\/\/www.joomla.org","version":"13.1","description":"LIB_JOOMLA_XML_DESCRIPTION","group":"","filename":"joomla"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (37, 0, 'lib_phpass', 'library', 'phpass', NULL, '', 0, 1, 1, 1, 1, '{"name":"lib_phpass","type":"library","creationDate":"2004-2006","author":"Solar Designer","copyright":"","authorEmail":"solar@openwall.com","authorUrl":"https:\/\/www.openwall.com\/phpass\/","version":"0.3","description":"LIB_PHPASS_XML_DESCRIPTION","group":"","filename":"phpass"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (44, 0, 'mod_feed', 'module', 'mod_feed', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_feed","type":"module","creationDate":"July 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_FEED_XML_DESCRIPTION","group":"","filename":"mod_feed"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (45, 0, 'mod_footer', 'module', 'mod_footer', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_footer","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_FOOTER_XML_DESCRIPTION","group":"","filename":"mod_footer"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (47, 0, 'mod_menu', 'module', 'mod_menu', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_menu","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_MENU_XML_DESCRIPTION","group":"","filename":"mod_menu"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (48, 0, 'mod_articles_news', 'module', 'mod_articles_news', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_articles_news","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_ARTICLES_NEWS_XML_DESCRIPTION","group":"","filename":"mod_articles_news"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (49, 0, 'mod_random_image', 'module', 'mod_random_image', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_random_image","type":"module","creationDate":"July 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_RANDOM_IMAGE_XML_DESCRIPTION","group":"","filename":"mod_random_image"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (51, 0, 'mod_stats', 'module', 'mod_stats', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_stats","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_STATS_XML_DESCRIPTION","group":"","filename":"mod_stats"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (52, 0, 'mod_syndicate', 'module', 'mod_syndicate', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_syndicate","type":"module","creationDate":"May 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_SYNDICATE_XML_DESCRIPTION","group":"","filename":"mod_syndicate"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (53, 0, 'mod_users_latest', 'module', 'mod_users_latest', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_users_latest","type":"module","creationDate":"December 2009","author":"Joomla! Project","copyright":"(C) 2009 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_USERS_LATEST_XML_DESCRIPTION","group":"","filename":"mod_users_latest"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (55, 0, 'mod_wrapper', 'module', 'mod_wrapper', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_wrapper","type":"module","creationDate":"October 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_WRAPPER_XML_DESCRIPTION","group":"","filename":"mod_wrapper"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (56, 0, 'mod_articles_category', 'module', 'mod_articles_category', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_articles_category","type":"module","creationDate":"February 2010","author":"Joomla! Project","copyright":"(C) 2010 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_ARTICLES_CATEGORY_XML_DESCRIPTION","group":"","filename":"mod_articles_category"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (58, 0, 'mod_languages', 'module', 'mod_languages', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_languages","type":"module","creationDate":"February 2010","author":"Joomla! Project","copyright":"(C) 2010 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.5.0","description":"MOD_LANGUAGES_XML_DESCRIPTION","group":"","filename":"mod_languages"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (59, 0, 'mod_finder', 'module', 'mod_finder', NULL, '', 0, 1, 0, 0, 1, '{"name":"mod_finder","type":"module","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_FINDER_XML_DESCRIPTION","group":"","filename":"mod_finder"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (60, 0, 'mod_custom', 'module', 'mod_custom', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_custom","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_CUSTOM_XML_DESCRIPTION","group":"","filename":"mod_custom"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (64, 0, 'mod_login', 'module', 'mod_login', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_login","type":"module","creationDate":"March 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_LOGIN_XML_DESCRIPTION","group":"","filename":"mod_login"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (65, 0, 'mod_loginsupport', 'module', 'mod_loginsupport', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_loginsupport","type":"module","creationDate":"June 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"MOD_LOGINSUPPORT_XML_DESCRIPTION","group":"","filename":"mod_loginsupport"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (66, 0, 'mod_menu', 'module', 'mod_menu', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_menu","type":"module","creationDate":"March 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_MENU_XML_DESCRIPTION","group":"","filename":"mod_menu"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (67, 0, 'mod_popular', 'module', 'mod_popular', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_popular","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_POPULAR_XML_DESCRIPTION","group":"","filename":"mod_popular"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (69, 0, 'mod_frontend', 'module', 'mod_frontend', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_frontend","type":"module","creationDate":"July 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"MOD_FRONTEND_XML_DESCRIPTION","group":"","filename":"mod_frontend"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (70, 0, 'mod_messages', 'module', 'mod_messages', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_messages","type":"module","creationDate":"July 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"MOD_MESSAGES_XML_DESCRIPTION","group":"","filename":"mod_messages"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (71, 0, 'mod_post_installation_messages', 'module', 'mod_post_installation_messages', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_post_installation_messages","type":"module","creationDate":"July2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"MOD_POST_INSTALLATION_MESSAGES_XML_DESCRIPTION","group":"","filename":"mod_post_installation_messages"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (73, 0, 'mod_title', 'module', 'mod_title', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_title","type":"module","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_TITLE_XML_DESCRIPTION","group":"","filename":"mod_title"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (74, 0, 'mod_toolbar', 'module', 'mod_toolbar', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_toolbar","type":"module","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_TOOLBAR_XML_DESCRIPTION","group":"","filename":"mod_toolbar"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (76, 0, 'mod_version', 'module', 'mod_version', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_version","type":"module","creationDate":"January 2012","author":"Joomla! Project","copyright":"(C) 2012 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_VERSION_XML_DESCRIPTION","group":"","filename":"mod_version"}', '{"cache":"0"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (77, 0, 'mod_stats_admin', 'module', 'mod_stats_admin', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_stats_admin","type":"module","creationDate":"July 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_STATS_XML_DESCRIPTION","group":"","filename":"mod_stats_admin"}', '{"serverinfo":"0","siteinfo":"0","counter":"0","increase":"0","cache":"1","cache_time":"900","cachemode":"static"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (79, 0, 'mod_tags_similar', 'module', 'mod_tags_similar', NULL, '', 0, 1, 1, 0, 1, '{"name":"mod_tags_similar","type":"module","creationDate":"January 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.1.0","description":"MOD_TAGS_SIMILAR_XML_DESCRIPTION","group":"","filename":"mod_tags_similar"}', '{"maximum":"5","matchtype":"any","owncache":"1"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (80, 0, 'mod_sampledata', 'module', 'mod_sampledata', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_sampledata","type":"module","creationDate":"July 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.8.0","description":"MOD_SAMPLEDATA_XML_DESCRIPTION","group":"","filename":"mod_sampledata"}', '{}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (82, 0, 'mod_privacy_dashboard', 'module', 'mod_privacy_dashboard', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_privacy_dashboard","type":"module","creationDate":"June 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"MOD_PRIVACY_DASHBOARD_XML_DESCRIPTION","group":"","filename":"mod_privacy_dashboard"}', '{}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (83, 0, 'mod_submenu', 'module', 'mod_submenu', NULL, '', 1, 1, 1, 0, 1, '{"name":"mod_submenu","type":"module","creationDate":"February 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"MOD_SUBMENU_XML_DESCRIPTION","group":"","filename":"mod_submenu"}', '{}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (85, 0, 'plg_actionlog_joomla', 'plugin', 'joomla', NULL, 'actionlog', 0, 1, 1, 0, 1, '{"name":"plg_actionlog_joomla","type":"plugin","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_ACTIONLOG_JOOMLA_XML_DESCRIPTION","group":"","filename":"joomla"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (86, 0, 'plg_api-authentication_basic', 'plugin', 'basic', NULL, 'api-authentication', 0, 0, 1, 0, 1, '{"name":"plg_api-authentication_basic","type":"plugin","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_API-AUTHENTICATION_BASIC_XML_DESCRIPTION","group":"","filename":"basic"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (87, 0, 'plg_api-authentication_token', 'plugin', 'token', NULL, 'api-authentication', 0, 1, 1, 0, 1, '{"name":"plg_api-authentication_token","type":"plugin","creationDate":"November 2019","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_API-AUTHENTICATION_TOKEN_XML_DESCRIPTION","group":"","filename":"token"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (89, 0, 'plg_authentication_joomla', 'plugin', 'joomla', NULL, 'authentication', 0, 1, 1, 1, 1, '{"name":"plg_authentication_joomla","type":"plugin","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_AUTHENTICATION_JOOMLA_XML_DESCRIPTION","group":"","filename":"joomla"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (90, 0, 'plg_authentication_ldap', 'plugin', 'ldap', NULL, 'authentication', 0, 0, 1, 0, 1, '{"name":"plg_authentication_ldap","type":"plugin","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_LDAP_XML_DESCRIPTION","group":"","filename":"ldap"}', '{"host":"","port":"389","use_ldapV3":"0","negotiate_tls":"0","no_referrals":"0","auth_method":"bind","base_dn":"","search_string":"","users_dn":"","username":"admin","password":"bobby7","ldap_fullname":"fullName","ldap_email":"mail","ldap_uid":"uid"}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (93, 0, 'plg_captcha_recaptcha', 'plugin', 'recaptcha', NULL, 'captcha', 0, 0, 1, 0, 1, '{"name":"plg_captcha_recaptcha","type":"plugin","creationDate":"December 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.4.0","description":"PLG_CAPTCHA_RECAPTCHA_XML_DESCRIPTION","group":"","filename":"recaptcha"}', '{"public_key":"","private_key":"","theme":"clean"}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (94, 0, 'plg_captcha_recaptcha_invisible', 'plugin', 'recaptcha_invisible', NULL, 'captcha', 0, 0, 1, 0, 1, '{"name":"plg_captcha_recaptcha_invisible","type":"plugin","creationDate":"November 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.8","description":"PLG_CAPTCHA_RECAPTCHA_INVISIBLE_XML_DESCRIPTION","group":"","filename":"recaptcha_invisible"}', '{"public_key":"","private_key":"","theme":"clean"}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (96, 0, 'plg_content_contact', 'plugin', 'contact', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_contact","type":"plugin","creationDate":"January 2014","author":"Joomla! Project","copyright":"(C) 2014 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.2.2","description":"PLG_CONTENT_CONTACT_XML_DESCRIPTION","group":"","filename":"contact"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (97, 0, 'plg_content_emailcloak', 'plugin', 'emailcloak', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_emailcloak","type":"plugin","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_CONTENT_EMAILCLOAK_XML_DESCRIPTION","group":"","filename":"emailcloak"}', '{"mode":"1"}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (99, 0, 'plg_content_finder', 'plugin', 'finder', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_finder","type":"plugin","creationDate":"December 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_CONTENT_FINDER_XML_DESCRIPTION","group":"","filename":"finder"}', '', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (100, 0, 'plg_content_joomla', 'plugin', 'joomla', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_joomla","type":"plugin","creationDate":"November 2010","author":"Joomla! Project","copyright":"(C) 2010 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_CONTENT_JOOMLA_XML_DESCRIPTION","group":"","filename":"joomla"}', '', '', NULL, NULL, 6, 0, NULL);
INSERT INTO public.cms_extensions VALUES (101, 0, 'plg_content_loadmodule', 'plugin', 'loadmodule', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_loadmodule","type":"plugin","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_LOADMODULE_XML_DESCRIPTION","group":"","filename":"loadmodule"}', '{"style":"xhtml"}', '', NULL, NULL, 7, 0, NULL);
INSERT INTO public.cms_extensions VALUES (103, 0, 'plg_content_pagenavigation', 'plugin', 'pagenavigation', NULL, 'content', 0, 1, 1, 0, 1, '{"name":"plg_content_pagenavigation","type":"plugin","creationDate":"January 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_PAGENAVIGATION_XML_DESCRIPTION","group":"","filename":"pagenavigation"}', '{"position":"1"}', '', NULL, NULL, 9, 0, NULL);
INSERT INTO public.cms_extensions VALUES (104, 0, 'plg_content_vote', 'plugin', 'vote', NULL, 'content', 0, 0, 1, 0, 1, '{"name":"plg_content_vote","type":"plugin","creationDate":"November 2005","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_VOTE_XML_DESCRIPTION","group":"","filename":"vote"}', '', '', NULL, NULL, 10, 0, NULL);
INSERT INTO public.cms_extensions VALUES (106, 0, 'plg_editors-xtd_contact', 'plugin', 'contact', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_contact","type":"plugin","creationDate":"October 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_EDITORS-XTD_CONTACT_XML_DESCRIPTION","group":"","filename":"contact"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (107, 0, 'plg_editors-xtd_fields', 'plugin', 'fields', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_fields","type":"plugin","creationDate":"February 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_EDITORS-XTD_FIELDS_XML_DESCRIPTION","group":"","filename":"fields"}', '', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (109, 0, 'plg_editors-xtd_menu', 'plugin', 'menu', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_menu","type":"plugin","creationDate":"August 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_EDITORS-XTD_MENU_XML_DESCRIPTION","group":"","filename":"menu"}', '', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (110, 0, 'plg_editors-xtd_module', 'plugin', 'module', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_module","type":"plugin","creationDate":"October 2015","author":"Joomla! Project","copyright":"(C) 2015 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.5.0","description":"PLG_MODULE_XML_DESCRIPTION","group":"","filename":"module"}', '', '', NULL, NULL, 6, 0, NULL);
INSERT INTO public.cms_extensions VALUES (111, 0, 'plg_editors-xtd_pagebreak', 'plugin', 'pagebreak', NULL, 'editors-xtd', 0, 1, 1, 0, 1, '{"name":"plg_editors-xtd_pagebreak","type":"plugin","creationDate":"August 2004","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_EDITORSXTD_PAGEBREAK_XML_DESCRIPTION","group":"","filename":"pagebreak"}', '', '', NULL, NULL, 7, 0, NULL);
INSERT INTO public.cms_extensions VALUES (113, 0, 'plg_editors_codemirror', 'plugin', 'codemirror', NULL, 'editors', 0, 1, 1, 0, 1, '{"name":"plg_editors_codemirror","type":"plugin","creationDate":"28 March 2011","author":"Marijn Haverbeke","copyright":"Copyright (C) 2014 - 2021 by Marijn Haverbeke <marijnh@gmail.com> and others","authorEmail":"marijnh@gmail.com","authorUrl":"https:\/\/codemirror.net\/","version":"5.65.2","description":"PLG_CODEMIRROR_XML_DESCRIPTION","group":"","filename":"codemirror"}', '{"lineNumbers":"1","lineWrapping":"1","matchTags":"1","matchBrackets":"1","marker-gutter":"1","autoCloseTags":"1","autoCloseBrackets":"1","autoFocus":"1","theme":"default","tabmode":"indent"}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (165, 0, 'plg_system_cache', 'plugin', 'cache', NULL, 'system', 0, 0, 1, 0, 1, '{"name":"plg_system_cache","type":"plugin","creationDate":"February 2007","author":"Joomla! Project","copyright":"(C) 2007 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_CACHE_XML_DESCRIPTION","group":"","filename":"cache"}', '{"browsercache":"0","cachetime":"15"}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (139, 0, 'plg_finder_newsfeeds', 'plugin', 'newsfeeds', NULL, 'finder', 0, 1, 1, 0, 1, '{"name":"plg_finder_newsfeeds","type":"plugin","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_FINDER_NEWSFEEDS_XML_DESCRIPTION","group":"","filename":"newsfeeds"}', '', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (140, 0, 'plg_finder_tags', 'plugin', 'tags', NULL, 'finder', 0, 1, 1, 0, 1, '{"name":"plg_finder_tags","type":"plugin","creationDate":"February 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_FINDER_TAGS_XML_DESCRIPTION","group":"","filename":"tags"}', '', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (115, 0, 'plg_editors_tinymce', 'plugin', 'tinymce', NULL, 'editors', 0, 1, 1, 0, 1, '{"name":"plg_editors_tinymce","type":"plugin","creationDate":"2005-2021","author":"Tiny Technologies, Inc","copyright":"Tiny Technologies, Inc","authorEmail":"N\/A","authorUrl":"https:\/\/www.tiny.cloud","version":"5.10.3","description":"PLG_TINY_XML_DESCRIPTION","group":"","filename":"tinymce"}', '{"configuration":{"toolbars":{"2":{"toolbar1":["bold","underline","strikethrough","|","undo","redo","|","bullist","numlist","|","pastetext"]},"1":{"menu":["edit","insert","view","format","table","tools"],"toolbar1":["bold","italic","underline","strikethrough","|","alignleft","aligncenter","alignright","alignjustify","|","formatselect","|","bullist","numlist","|","outdent","indent","|","undo","redo","|","link","unlink","anchor","code","|","hr","table","|","subscript","superscript","|","charmap","pastetext","preview"]},"0":{"menu":["edit","insert","view","format","table","tools"],"toolbar1":["bold","italic","underline","strikethrough","|","alignleft","aligncenter","alignright","alignjustify","|","styleselect","|","formatselect","fontselect","fontsizeselect","|","searchreplace","|","bullist","numlist","|","outdent","indent","|","undo","redo","|","link","unlink","anchor","image","|","code","|","forecolor","backcolor","|","fullscreen","|","table","|","subscript","superscript","|","charmap","emoticons","media","hr","ltr","rtl","|","cut","copy","paste","pastetext","|","visualchars","visualblocks","nonbreaking","blockquote","template","|","print","preview","codesample","insertdatetime","removeformat"]}},"setoptions":{"2":{"access":["1"],"skin":"0","skin_admin":"0","mobile":"0","drag_drop":"1","path":"","entity_encoding":"raw","lang_mode":"1","text_direction":"ltr","content_css":"1","content_css_custom":"","relative_urls":"1","newlines":"0","use_config_textfilters":"0","invalid_elements":"script,applet,iframe","valid_elements":"","extended_elements":"","resizing":"1","resize_horizontal":"1","element_path":"1","wordcount":"1","image_advtab":"0","advlist":"1","autosave":"1","contextmenu":"1","custom_plugin":"","custom_button":""},"1":{"access":["6","2"],"skin":"0","skin_admin":"0","mobile":"0","drag_drop":"1","path":"","entity_encoding":"raw","lang_mode":"1","text_direction":"ltr","content_css":"1","content_css_custom":"","relative_urls":"1","newlines":"0","use_config_textfilters":"0","invalid_elements":"script,applet,iframe","valid_elements":"","extended_elements":"","resizing":"1","resize_horizontal":"1","element_path":"1","wordcount":"1","image_advtab":"0","advlist":"1","autosave":"1","contextmenu":"1","custom_plugin":"","custom_button":""},"0":{"access":["7","4","8"],"skin":"0","skin_admin":"0","mobile":"0","drag_drop":"1","path":"","entity_encoding":"raw","lang_mode":"1","text_direction":"ltr","content_css":"1","content_css_custom":"","relative_urls":"1","newlines":"0","use_config_textfilters":"0","invalid_elements":"script,applet,iframe","valid_elements":"","extended_elements":"","resizing":"1","resize_horizontal":"1","element_path":"1","wordcount":"1","image_advtab":"1","advlist":"1","autosave":"1","contextmenu":"1","custom_plugin":"","custom_button":""}}},"sets_amount":3,"html_height":"550","html_width":"750"}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (119, 0, 'plg_fields_calendar', 'plugin', 'calendar', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_calendar","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_CALENDAR_XML_DESCRIPTION","group":"","filename":"calendar"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (120, 0, 'plg_fields_checkboxes', 'plugin', 'checkboxes', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_checkboxes","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_CHECKBOXES_XML_DESCRIPTION","group":"","filename":"checkboxes"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (122, 0, 'plg_fields_editor', 'plugin', 'editor', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_editor","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_EDITOR_XML_DESCRIPTION","group":"","filename":"editor"}', '', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (123, 0, 'plg_fields_imagelist', 'plugin', 'imagelist', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_imagelist","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_IMAGELIST_XML_DESCRIPTION","group":"","filename":"imagelist"}', '', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (124, 0, 'plg_fields_integer', 'plugin', 'integer', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_integer","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_INTEGER_XML_DESCRIPTION","group":"","filename":"integer"}', '{"multiple":"0","first":"1","last":"100","step":"1"}', '', NULL, NULL, 6, 0, NULL);
INSERT INTO public.cms_extensions VALUES (126, 0, 'plg_fields_media', 'plugin', 'media', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_media","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_MEDIA_XML_DESCRIPTION","group":"","filename":"media"}', '', '', NULL, NULL, 8, 0, NULL);
INSERT INTO public.cms_extensions VALUES (127, 0, 'plg_fields_radio', 'plugin', 'radio', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_radio","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_RADIO_XML_DESCRIPTION","group":"","filename":"radio"}', '', '', NULL, NULL, 9, 0, NULL);
INSERT INTO public.cms_extensions VALUES (129, 0, 'plg_fields_subform', 'plugin', 'subform', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_subform","type":"plugin","creationDate":"June 2017","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_FIELDS_SUBFORM_XML_DESCRIPTION","group":"","filename":"subform"}', '', '', NULL, NULL, 11, 0, NULL);
INSERT INTO public.cms_extensions VALUES (130, 0, 'plg_fields_text', 'plugin', 'text', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_text","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_TEXT_XML_DESCRIPTION","group":"","filename":"text"}', '', '', NULL, NULL, 12, 0, NULL);
INSERT INTO public.cms_extensions VALUES (132, 0, 'plg_fields_url', 'plugin', 'url', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_url","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_URL_XML_DESCRIPTION","group":"","filename":"url"}', '', '', NULL, NULL, 14, 0, NULL);
INSERT INTO public.cms_extensions VALUES (133, 0, 'plg_fields_user', 'plugin', 'user', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_user","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_USER_XML_DESCRIPTION","group":"","filename":"user"}', '', '', NULL, NULL, 15, 0, NULL);
INSERT INTO public.cms_extensions VALUES (134, 0, 'plg_fields_usergrouplist', 'plugin', 'usergrouplist', NULL, 'fields', 0, 1, 1, 0, 1, '{"name":"plg_fields_usergrouplist","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_FIELDS_USERGROUPLIST_XML_DESCRIPTION","group":"","filename":"usergrouplist"}', '', '', NULL, NULL, 16, 0, NULL);
INSERT INTO public.cms_extensions VALUES (136, 0, 'plg_finder_categories', 'plugin', 'categories', NULL, 'finder', 0, 1, 1, 0, 1, '{"name":"plg_finder_categories","type":"plugin","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_FINDER_CATEGORIES_XML_DESCRIPTION","group":"","filename":"categories"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (137, 0, 'plg_finder_contacts', 'plugin', 'contacts', NULL, 'finder', 0, 1, 1, 0, 1, '{"name":"plg_finder_contacts","type":"plugin","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_FINDER_CONTACTS_XML_DESCRIPTION","group":"","filename":"contacts"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (141, 0, 'plg_installer_folderinstaller', 'plugin', 'folderinstaller', NULL, 'installer', 0, 1, 1, 0, 1, '{"name":"plg_installer_folderinstaller","type":"plugin","creationDate":"May 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.6.0","description":"PLG_INSTALLER_FOLDERINSTALLER_PLUGIN_XML_DESCRIPTION","group":"","filename":"folderinstaller"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (143, 0, 'plg_installer_packageinstaller', 'plugin', 'packageinstaller', NULL, 'installer', 0, 1, 1, 0, 1, '{"name":"plg_installer_packageinstaller","type":"plugin","creationDate":"May 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.6.0","description":"PLG_INSTALLER_PACKAGEINSTALLER_PLUGIN_XML_DESCRIPTION","group":"","filename":"packageinstaller"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (144, 0, 'plg_installer_urlinstaller', 'plugin', 'urlinstaller', NULL, 'installer', 0, 1, 1, 0, 1, '{"name":"plg_installer_urlinstaller","type":"plugin","creationDate":"May 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.6.0","description":"PLG_INSTALLER_URLINSTALLER_PLUGIN_XML_DESCRIPTION","group":"","filename":"urlinstaller"}', '', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (146, 0, 'plg_media-action_crop', 'plugin', 'crop', NULL, 'media-action', 0, 1, 1, 0, 1, '{"name":"plg_media-action_crop","type":"plugin","creationDate":"January 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_MEDIA-ACTION_CROP_XML_DESCRIPTION","group":"","filename":"crop"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (147, 0, 'plg_media-action_resize', 'plugin', 'resize', NULL, 'media-action', 0, 1, 1, 0, 1, '{"name":"plg_media-action_resize","type":"plugin","creationDate":"January 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_MEDIA-ACTION_RESIZE_XML_DESCRIPTION","group":"","filename":"resize"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (149, 0, 'plg_privacy_actionlogs', 'plugin', 'actionlogs', NULL, 'privacy', 0, 1, 1, 0, 1, '{"name":"plg_privacy_actionlogs","type":"plugin","creationDate":"July 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_PRIVACY_ACTIONLOGS_XML_DESCRIPTION","group":"","filename":"actionlogs"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (150, 0, 'plg_privacy_consents', 'plugin', 'consents', NULL, 'privacy', 0, 1, 1, 0, 1, '{"name":"plg_privacy_consents","type":"plugin","creationDate":"July 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_PRIVACY_CONSENTS_XML_DESCRIPTION","group":"","filename":"consents"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (151, 0, 'plg_privacy_contact', 'plugin', 'contact', NULL, 'privacy', 0, 1, 1, 0, 1, '{"name":"plg_privacy_contact","type":"plugin","creationDate":"July 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_PRIVACY_CONTACT_XML_DESCRIPTION","group":"","filename":"contact"}', '{}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (153, 0, 'plg_privacy_message', 'plugin', 'message', NULL, 'privacy', 0, 1, 1, 0, 1, '{"name":"plg_privacy_message","type":"plugin","creationDate":"July 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_PRIVACY_MESSAGE_XML_DESCRIPTION","group":"","filename":"message"}', '{}', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (154, 0, 'plg_privacy_user', 'plugin', 'user', NULL, 'privacy', 0, 1, 1, 0, 1, '{"name":"plg_privacy_user","type":"plugin","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_PRIVACY_USER_XML_DESCRIPTION","group":"","filename":"user"}', '{}', '', NULL, NULL, 6, 0, NULL);
INSERT INTO public.cms_extensions VALUES (156, 0, 'plg_quickicon_extensionupdate', 'plugin', 'extensionupdate', NULL, 'quickicon', 0, 1, 1, 0, 1, '{"name":"plg_quickicon_extensionupdate","type":"plugin","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_QUICKICON_EXTENSIONUPDATE_XML_DESCRIPTION","group":"","filename":"extensionupdate"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (157, 0, 'plg_quickicon_overridecheck', 'plugin', 'overridecheck', NULL, 'quickicon', 0, 1, 1, 0, 1, '{"name":"plg_quickicon_overridecheck","type":"plugin","creationDate":"June 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_QUICKICON_OVERRIDECHECK_XML_DESCRIPTION","group":"","filename":"overridecheck"}', '', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (159, 0, 'plg_quickicon_privacycheck', 'plugin', 'privacycheck', NULL, 'quickicon', 0, 1, 1, 0, 1, '{"name":"plg_quickicon_privacycheck","type":"plugin","creationDate":"June 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_QUICKICON_PRIVACYCHECK_XML_DESCRIPTION","group":"","filename":"privacycheck"}', '{}', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (160, 0, 'plg_quickicon_phpversioncheck', 'plugin', 'phpversioncheck', NULL, 'quickicon', 0, 1, 1, 0, 1, '{"name":"plg_quickicon_phpversioncheck","type":"plugin","creationDate":"August 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_QUICKICON_PHPVERSIONCHECK_XML_DESCRIPTION","group":"","filename":"phpversioncheck"}', '', '', NULL, NULL, 6, 0, NULL);
INSERT INTO public.cms_extensions VALUES (162, 0, 'plg_sampledata_multilang', 'plugin', 'multilang', NULL, 'sampledata', 0, 1, 1, 0, 1, '{"name":"plg_sampledata_multilang","type":"plugin","creationDate":"July 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_SAMPLEDATA_MULTILANG_XML_DESCRIPTION","group":"","filename":"multilang"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (163, 0, 'plg_system_accessibility', 'plugin', 'accessibility', NULL, 'system', 0, 0, 1, 0, 1, '{"name":"plg_system_accessibility","type":"plugin","creationDate":"2020-02-15","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_SYSTEM_ACCESSIBILITY_XML_DESCRIPTION","group":"","filename":"accessibility"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (164, 0, 'plg_system_actionlogs', 'plugin', 'actionlogs', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_actionlogs","type":"plugin","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_SYSTEM_ACTIONLOGS_XML_DESCRIPTION","group":"","filename":"actionlogs"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (166, 0, 'plg_system_debug', 'plugin', 'debug', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_debug","type":"plugin","creationDate":"December 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_DEBUG_XML_DESCRIPTION","group":"","filename":"debug"}', '{"profile":"1","queries":"1","memory":"1","language_files":"1","language_strings":"1","strip-first":"1","strip-prefix":"","strip-suffix":""}', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (167, 0, 'plg_system_fields', 'plugin', 'fields', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_fields","type":"plugin","creationDate":"March 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.7.0","description":"PLG_SYSTEM_FIELDS_XML_DESCRIPTION","group":"","filename":"fields"}', '', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (168, 0, 'plg_system_highlight', 'plugin', 'highlight', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_highlight","type":"plugin","creationDate":"August 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_SYSTEM_HIGHLIGHT_XML_DESCRIPTION","group":"","filename":"highlight"}', '', '', NULL, NULL, 6, 0, NULL);
INSERT INTO public.cms_extensions VALUES (170, 0, 'plg_system_jooa11y', 'plugin', 'jooa11y', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_jooa11y","type":"plugin","creationDate":"February 2022","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.2.0","description":"PLG_SYSTEM_JOOA11Y_XML_DESCRIPTION","group":"","filename":"jooa11y"}', '', '', NULL, NULL, 8, 0, NULL);
INSERT INTO public.cms_extensions VALUES (171, 0, 'plg_system_languagecode', 'plugin', 'languagecode', NULL, 'system', 0, 0, 1, 0, 1, '{"name":"plg_system_languagecode","type":"plugin","creationDate":"November 2011","author":"Joomla! Project","copyright":"(C) 2011 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_SYSTEM_LANGUAGECODE_XML_DESCRIPTION","group":"","filename":"languagecode"}', '', '', NULL, NULL, 9, 0, NULL);
INSERT INTO public.cms_extensions VALUES (173, 0, 'plg_system_log', 'plugin', 'log', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_log","type":"plugin","creationDate":"April 2007","author":"Joomla! Project","copyright":"(C) 2007 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_LOG_XML_DESCRIPTION","group":"","filename":"log"}', '', '', NULL, NULL, 11, 0, NULL);
INSERT INTO public.cms_extensions VALUES (174, 0, 'plg_system_logout', 'plugin', 'logout', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_logout","type":"plugin","creationDate":"April 2009","author":"Joomla! Project","copyright":"(C) 2009 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_SYSTEM_LOGOUT_XML_DESCRIPTION","group":"","filename":"logout"}', '', '', NULL, NULL, 12, 0, NULL);
INSERT INTO public.cms_extensions VALUES (175, 0, 'plg_system_logrotation', 'plugin', 'logrotation', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_logrotation","type":"plugin","creationDate":"May 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.9.0","description":"PLG_SYSTEM_LOGROTATION_XML_DESCRIPTION","group":"","filename":"logrotation"}', '{}', '', NULL, NULL, 13, 0, NULL);
INSERT INTO public.cms_extensions VALUES (177, 0, 'plg_system_redirect', 'plugin', 'redirect', NULL, 'system', 0, 0, 1, 0, 1, '{"name":"plg_system_redirect","type":"plugin","creationDate":"April 2009","author":"Joomla! Project","copyright":"(C) 2009 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_SYSTEM_REDIRECT_XML_DESCRIPTION","group":"","filename":"redirect"}', '', '', NULL, NULL, 15, 0, NULL);
INSERT INTO public.cms_extensions VALUES (178, 0, 'plg_system_remember', 'plugin', 'remember', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_remember","type":"plugin","creationDate":"April 2007","author":"Joomla! Project","copyright":"(C) 2007 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_REMEMBER_XML_DESCRIPTION","group":"","filename":"remember"}', '', '', NULL, NULL, 16, 0, NULL);
INSERT INTO public.cms_extensions VALUES (179, 0, 'PLG_SYSTEM_SCHEDULERUNNER', 'plugin', 'schedulerunner', NULL, 'system', 0, 1, 1, 0, 0, '{"name":"PLG_SYSTEM_SCHEDULERUNNER","type":"plugin","creationDate":"August 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1","description":"PLG_SYSTEM_SCHEDULERUNNER_XML_DESCRIPTION","group":"","filename":"schedulerunner"}', '{}', '', NULL, NULL, 17, 0, NULL);
INSERT INTO public.cms_extensions VALUES (181, 0, 'plg_system_sessiongc', 'plugin', 'sessiongc', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_sessiongc","type":"plugin","creationDate":"February 2018","author":"Joomla! Project","copyright":"(C) 2018 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.8.6","description":"PLG_SYSTEM_SESSIONGC_XML_DESCRIPTION","group":"","filename":"sessiongc"}', '', '', NULL, NULL, 19, 0, NULL);
INSERT INTO public.cms_extensions VALUES (182, 0, 'plg_system_skipto', 'plugin', 'skipto', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_skipto","type":"plugin","creationDate":"February 2020","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_SYSTEM_SKIPTO_XML_DESCRIPTION","group":"","filename":"skipto"}', '{}', '', NULL, NULL, 20, 0, NULL);
INSERT INTO public.cms_extensions VALUES (184, 0, 'plg_system_task_notification', 'plugin', 'tasknotification', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_task_notification","type":"plugin","creationDate":"September 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1","description":"PLG_SYSTEM_TASK_NOTIFICATION_XML_DESCRIPTION","group":"","filename":"tasknotification"}', '', '', NULL, NULL, 22, 0, NULL);
INSERT INTO public.cms_extensions VALUES (185, 0, 'plg_system_updatenotification', 'plugin', 'updatenotification', NULL, 'system', 0, 1, 1, 0, 1, '{"name":"plg_system_updatenotification","type":"plugin","creationDate":"May 2015","author":"Joomla! Project","copyright":"(C) 2015 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.5.0","description":"PLG_SYSTEM_UPDATENOTIFICATION_XML_DESCRIPTION","group":"","filename":"updatenotification"}', '', '', NULL, NULL, 23, 0, NULL);
INSERT INTO public.cms_extensions VALUES (187, 0, 'plg_task_check_files', 'plugin', 'checkfiles', NULL, 'task', 0, 1, 1, 0, 0, '{"name":"plg_task_check_files","type":"plugin","creationDate":"August 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1","description":"PLG_TASK_CHECK_FILES_XML_DESCRIPTION","group":"","filename":"checkfiles"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (188, 0, 'plg_task_demo_tasks', 'plugin', 'demotasks', NULL, 'task', 0, 1, 1, 0, 0, '{"name":"plg_task_demo_tasks","type":"plugin","creationDate":"July 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1","description":"PLG_TASK_DEMO_TASKS_XML_DESCRIPTION","group":"","filename":"demotasks"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (190, 0, 'plg_task_site_status', 'plugin', 'sitestatus', NULL, 'task', 0, 1, 1, 0, 0, '{"name":"plg_task_site_status","type":"plugin","creationDate":"August 2021","author":"Joomla! Project","copyright":"(C) 2021 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1","description":"PLG_TASK_SITE_STATUS_XML_DESCRIPTION","group":"","filename":"sitestatus"}', '{}', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (191, 0, 'plg_twofactorauth_totp', 'plugin', 'totp', NULL, 'twofactorauth', 0, 0, 1, 0, 1, '{"name":"plg_twofactorauth_totp","type":"plugin","creationDate":"August 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.2.0","description":"PLG_TWOFACTORAUTH_TOTP_XML_DESCRIPTION","group":"","filename":"totp"}', '', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (192, 0, 'plg_twofactorauth_yubikey', 'plugin', 'yubikey', NULL, 'twofactorauth', 0, 0, 1, 0, 1, '{"name":"plg_twofactorauth_yubikey","type":"plugin","creationDate":"September 2013","author":"Joomla! Project","copyright":"(C) 2013 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.2.0","description":"PLG_TWOFACTORAUTH_YUBIKEY_XML_DESCRIPTION","group":"","filename":"yubikey"}', '', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (194, 0, 'plg_user_joomla', 'plugin', 'joomla', NULL, 'user', 0, 1, 1, 0, 1, '{"name":"plg_user_joomla","type":"plugin","creationDate":"December 2006","author":"Joomla! Project","copyright":"(C) 2006 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_USER_JOOMLA_XML_DESCRIPTION","group":"","filename":"joomla"}', '{"autoregister":"1","mail_to_user":"1","forceLogout":"1"}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (195, 0, 'plg_user_profile', 'plugin', 'profile', NULL, 'user', 0, 0, 1, 0, 1, '{"name":"plg_user_profile","type":"plugin","creationDate":"January 2008","author":"Joomla! Project","copyright":"(C) 2008 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"3.0.0","description":"PLG_USER_PROFILE_XML_DESCRIPTION","group":"","filename":"profile"}', '{"register-require_address1":"1","register-require_address2":"1","register-require_city":"1","register-require_region":"1","register-require_country":"1","register-require_postal_code":"1","register-require_phone":"1","register-require_website":"1","register-require_favoritebook":"1","register-require_aboutme":"1","register-require_tos":"1","register-require_dob":"1","profile-require_address1":"1","profile-require_address2":"1","profile-require_city":"1","profile-require_region":"1","profile-require_country":"1","profile-require_postal_code":"1","profile-require_phone":"1","profile-require_website":"1","profile-require_favoritebook":"1","profile-require_aboutme":"1","profile-require_tos":"1","profile-require_dob":"1"}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (199, 0, 'plg_webservices_config', 'plugin', 'config', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_config","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_CONFIG_XML_DESCRIPTION","group":"","filename":"config"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (201, 0, 'plg_webservices_content', 'plugin', 'content', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_content","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_CONTENT_XML_DESCRIPTION","group":"","filename":"content"}', '{}', '', NULL, NULL, 4, 0, NULL);
INSERT INTO public.cms_extensions VALUES (202, 0, 'plg_webservices_installer', 'plugin', 'installer', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_installer","type":"plugin","creationDate":"June 2020","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_INSTALLER_XML_DESCRIPTION","group":"","filename":"installer"}', '{}', '', NULL, NULL, 5, 0, NULL);
INSERT INTO public.cms_extensions VALUES (203, 0, 'plg_webservices_languages', 'plugin', 'languages', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_languages","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_LANGUAGES_XML_DESCRIPTION","group":"","filename":"languages"}', '{}', '', NULL, NULL, 6, 0, NULL);
INSERT INTO public.cms_extensions VALUES (205, 0, 'plg_webservices_menus', 'plugin', 'menus', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_menus","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_MENUS_XML_DESCRIPTION","group":"","filename":"menus"}', '{}', '', NULL, NULL, 7, 0, NULL);
INSERT INTO public.cms_extensions VALUES (206, 0, 'plg_webservices_messages', 'plugin', 'messages', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_messages","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_MESSAGES_XML_DESCRIPTION","group":"","filename":"messages"}', '{}', '', NULL, NULL, 8, 0, NULL);
INSERT INTO public.cms_extensions VALUES (208, 0, 'plg_webservices_newsfeeds', 'plugin', 'newsfeeds', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_newsfeeds","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_NEWSFEEDS_XML_DESCRIPTION","group":"","filename":"newsfeeds"}', '{}', '', NULL, NULL, 10, 0, NULL);
INSERT INTO public.cms_extensions VALUES (209, 0, 'plg_webservices_plugins', 'plugin', 'plugins', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_plugins","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_PLUGINS_XML_DESCRIPTION","group":"","filename":"plugins"}', '{}', '', NULL, NULL, 11, 0, NULL);
INSERT INTO public.cms_extensions VALUES (211, 0, 'plg_webservices_redirect', 'plugin', 'redirect', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_redirect","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_REDIRECT_XML_DESCRIPTION","group":"","filename":"redirect"}', '{}', '', NULL, NULL, 13, 0, NULL);
INSERT INTO public.cms_extensions VALUES (212, 0, 'plg_webservices_tags', 'plugin', 'tags', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_tags","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_TAGS_XML_DESCRIPTION","group":"","filename":"tags"}', '{}', '', NULL, NULL, 14, 0, NULL);
INSERT INTO public.cms_extensions VALUES (214, 0, 'plg_webservices_users', 'plugin', 'users', NULL, 'webservices', 0, 1, 1, 0, 1, '{"name":"plg_webservices_users","type":"plugin","creationDate":"September 2019","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WEBSERVICES_USERS_XML_DESCRIPTION","group":"","filename":"users"}', '{}', '', NULL, NULL, 16, 0, NULL);
INSERT INTO public.cms_extensions VALUES (215, 0, 'plg_workflow_featuring', 'plugin', 'featuring', NULL, 'workflow', 0, 1, 1, 0, 1, '{"name":"plg_workflow_featuring","type":"plugin","creationDate":"March 2020","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WORKFLOW_FEATURING_XML_DESCRIPTION","group":"","filename":"featuring"}', '{}', '', NULL, NULL, 1, 0, NULL);
INSERT INTO public.cms_extensions VALUES (216, 0, 'plg_workflow_notification', 'plugin', 'notification', NULL, 'workflow', 0, 1, 1, 0, 1, '{"name":"plg_workflow_notification","type":"plugin","creationDate":"May 2020","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WORKFLOW_NOTIFICATION_XML_DESCRIPTION","group":"","filename":"notification"}', '{}', '', NULL, NULL, 2, 0, NULL);
INSERT INTO public.cms_extensions VALUES (217, 0, 'plg_workflow_publishing', 'plugin', 'publishing', NULL, 'workflow', 0, 1, 1, 0, 1, '{"name":"plg_workflow_publishing","type":"plugin","creationDate":"March 2020","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.0.0","description":"PLG_WORKFLOW_PUBLISHING_XML_DESCRIPTION","group":"","filename":"publishing"}', '{}', '', NULL, NULL, 3, 0, NULL);
INSERT INTO public.cms_extensions VALUES (218, 0, 'atum', 'template', 'atum', NULL, '', 1, 1, 1, 0, 1, '{"name":"atum","type":"template","creationDate":"September 2016","author":"Joomla! Project","copyright":"(C) 2016 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"","version":"1.0","description":"TPL_ATUM_XML_DESCRIPTION","group":"","inheritable":true,"filename":"templateDetails"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (219, 0, 'cassiopeia', 'template', 'cassiopeia', NULL, '', 0, 1, 1, 0, 1, '{"name":"cassiopeia","type":"template","creationDate":"February 2017","author":"Joomla! Project","copyright":"(C) 2017 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"","version":"1.0","description":"TPL_CASSIOPEIA_XML_DESCRIPTION","group":"","inheritable":true,"filename":"templateDetails"}', '{"logoFile":"","fluidContainer":"0","sidebarLeftWidth":"3","sidebarRightWidth":"3"}', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (221, 0, 'English (en-GB) Language Pack', 'package', 'pkg_en-GB', NULL, '', 0, 1, 1, 1, 1, '{"name":"English (en-GB) Language Pack","type":"package","creationDate":"March 2022","author":"Joomla! Project","copyright":"(C) 2019 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1.2.1","description":"en-GB language pack","group":"","filename":"pkg_en-GB"}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (223, 221, 'English (en-GB)', 'language', 'en-GB', NULL, '', 1, 1, 1, 1, 1, '{"name":"English (en-GB)","type":"language","creationDate":"March 2022","author":"Joomla! Project","copyright":"(C) 2005 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1.2","description":"en-GB administrator language","group":""}', '', '', NULL, NULL, 0, 0, NULL);
INSERT INTO public.cms_extensions VALUES (224, 221, 'English (en-GB)', 'language', 'en-GB', NULL, '', 3, 1, 1, 1, 1, '{"name":"English (en-GB)","type":"language","creationDate":"March 2022","author":"Joomla! Project","copyright":"(C) 2020 Open Source Matters, Inc.","authorEmail":"admin@joomla.org","authorUrl":"www.joomla.org","version":"4.1.2","description":"en-GB api language","group":""}', '', '', NULL, NULL, 0, 0, NULL);


--
-- Data for Name: cms_fields; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_fields_categories; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_fields_groups; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_fields_values; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_filters; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_links; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_links_terms; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_logging; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_taxonomy; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_finder_taxonomy VALUES (1, 0, 0, 1, 0, '', 'ROOT', 'root', 1, 1, '*');


--
-- Data for Name: cms_finder_taxonomy_map; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_terms; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_terms_common; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_finder_terms_common VALUES ('i', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('me', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('my', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('myself', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('we', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('our', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('ours', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('ourselves', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('you', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('your', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('yours', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('yourself', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('yourselves', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('he', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('him', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('his', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('himself', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('she', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('her', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('hers', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('herself', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('it', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('its', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('itself', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('they', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('them', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('their', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('theirs', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('themselves', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('what', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('which', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('who', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('whom', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('this', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('that', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('these', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('those', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('am', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('is', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('are', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('was', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('were', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('be', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('been', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('being', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('have', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('has', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('had', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('having', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('do', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('does', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('did', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('doing', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('would', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('should', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('could', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('ought', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('i''m', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('you''re', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('he''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('she''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('it''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('we''re', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('they''re', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('i''ve', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('you''ve', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('we''ve', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('they''ve', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('i''d', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('you''d', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('he''d', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('she''d', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('we''d', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('they''d', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('i''ll', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('you''ll', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('he''ll', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('she''ll', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('we''ll', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('they''ll', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('isn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('aren''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('wasn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('weren''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('hasn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('haven''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('hadn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('doesn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('don''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('didn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('won''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('wouldn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('shan''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('shouldn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('can''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('cannot', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('couldn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('mustn''t', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('let''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('that''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('who''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('what''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('here''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('there''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('when''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('where''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('why''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('how''s', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('a', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('an', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('the', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('and', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('but', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('if', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('or', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('because', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('as', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('until', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('while', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('of', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('at', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('by', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('for', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('with', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('about', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('against', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('between', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('into', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('through', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('during', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('before', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('after', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('above', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('below', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('to', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('from', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('up', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('down', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('in', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('out', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('on', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('off', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('over', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('under', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('again', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('further', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('then', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('once', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('here', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('there', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('when', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('where', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('why', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('how', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('all', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('any', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('both', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('each', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('few', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('more', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('most', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('other', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('some', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('such', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('no', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('nor', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('not', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('only', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('own', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('same', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('so', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('than', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('too', 'en', 0);
INSERT INTO public.cms_finder_terms_common VALUES ('very', 'en', 0);


--
-- Data for Name: cms_finder_tokens; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_tokens_aggregate; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_finder_types; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_history; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_languages; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_languages VALUES (1, 0, 'en-GB', 'English (en-GB)', 'English (United Kingdom)', 'en', 'en_gb', '', '', '', '', 1, 1, 1);


--
-- Data for Name: cms_mail_templates; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_mail_templates VALUES ('com_config.test_mail', 'com_config', '       ', 'COM_CONFIG_SENDMAIL_SUBJECT', 'COM_CONFIG_SENDMAIL_BODY', '', '', '{"tags":["sitename","method"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_contact.mail', 'com_contact', '       ', 'COM_CONTACT_ENQUIRY_SUBJECT', 'COM_CONTACT_ENQUIRY_TEXT', '', '', '{"tags":["sitename","name","email","subject","body","url","customfields"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_contact.mail.copy', 'com_contact', '       ', 'COM_CONTACT_COPYSUBJECT_OF', 'COM_CONTACT_COPYTEXT_OF', '', '', '{"tags":["sitename","name","email","subject","body","url","customfields"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.massmail.mail', 'com_users', '       ', 'COM_USERS_MASSMAIL_MAIL_SUBJECT', 'COM_USERS_MASSMAIL_MAIL_BODY', '', '', '{"tags":["subject","body","subjectprefix","bodysuffix"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.password_reset', 'com_users', '       ', 'COM_USERS_EMAIL_PASSWORD_RESET_SUBJECT', 'COM_USERS_EMAIL_PASSWORD_RESET_BODY', '', '', '{"tags":["name","email","sitename","link_text","link_html","token"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.reminder', 'com_users', '       ', 'COM_USERS_EMAIL_USERNAME_REMINDER_SUBJECT', 'COM_USERS_EMAIL_USERNAME_REMINDER_BODY', '', '', '{"tags":["name","username","sitename","email","link_text","link_html"]}');
INSERT INTO public.cms_mail_templates VALUES ('plg_system_updatenotification.mail', 'plg_system_updatenotification', '       ', 'PLG_SYSTEM_UPDATENOTIFICATION_EMAIL_SUBJECT', 'PLG_SYSTEM_UPDATENOTIFICATION_EMAIL_BODY', '', '', '{"tags":["newversion","curversion","sitename","url","link","releasenews"]}');
INSERT INTO public.cms_mail_templates VALUES ('plg_user_joomla.mail', 'plg_user_joomla', '       ', 'PLG_USER_JOOMLA_NEW_USER_EMAIL_SUBJECT', 'PLG_USER_JOOMLA_NEW_USER_EMAIL_BODY', '', '', '{"tags":["name","sitename","url","username","password","email"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_actionlogs.notification', 'com_actionlogs', '       ', 'COM_ACTIONLOGS_EMAIL_SUBJECT', 'COM_ACTIONLOGS_EMAIL_BODY', 'COM_ACTIONLOGS_EMAIL_HTMLBODY', '', '{"tags":["message","date","extension"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_privacy.userdataexport', 'com_privacy', '       ', 'COM_PRIVACY_EMAIL_DATA_EXPORT_COMPLETED_SUBJECT', 'COM_PRIVACY_EMAIL_DATA_EXPORT_COMPLETED_BODY', '', '', '{"tags":["sitename","url"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_privacy.notification.export', 'com_privacy', '       ', 'COM_PRIVACY_EMAIL_REQUEST_SUBJECT_EXPORT_REQUEST', 'COM_PRIVACY_EMAIL_REQUEST_BODY_EXPORT_REQUEST', '', '', '{"tags":["sitename","url","tokenurl","formurl","token"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_privacy.notification.remove', 'com_privacy', '       ', 'COM_PRIVACY_EMAIL_REQUEST_SUBJECT_REMOVE_REQUEST', 'COM_PRIVACY_EMAIL_REQUEST_BODY_REMOVE_REQUEST', '', '', '{"tags":["sitename","url","tokenurl","formurl","token"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_privacy.notification.admin.export', 'com_privacy', '       ', 'COM_PRIVACY_EMAIL_ADMIN_REQUEST_SUBJECT_EXPORT_REQUEST', 'COM_PRIVACY_EMAIL_ADMIN_REQUEST_BODY_EXPORT_REQUEST', '', '', '{"tags":["sitename","url","tokenurl","formurl","token"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_privacy.notification.admin.remove', 'com_privacy', '       ', 'COM_PRIVACY_EMAIL_ADMIN_REQUEST_SUBJECT_REMOVE_REQUEST', 'COM_PRIVACY_EMAIL_ADMIN_REQUEST_BODY_REMOVE_REQUEST', '', '', '{"tags":["sitename","url","tokenurl","formurl","token"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.user.admin_activation', 'com_users', '       ', 'COM_USERS_EMAIL_ACCOUNT_DETAILS', 'COM_USERS_EMAIL_REGISTERED_WITH_ADMIN_ACTIVATION_BODY_NOPW', '', '', '{"tags":["name","sitename","activate","siteurl","username"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.user.admin_activation_w_pw', 'com_users', '       ', 'COM_USERS_EMAIL_ACCOUNT_DETAILS', 'COM_USERS_EMAIL_REGISTERED_WITH_ADMIN_ACTIVATION_BODY', '', '', '{"tags":["name","sitename","activate","siteurl","username","password_clear"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.user.self_activation', 'com_users', '       ', 'COM_USERS_EMAIL_ACCOUNT_DETAILS', 'COM_USERS_EMAIL_REGISTERED_WITH_ACTIVATION_BODY_NOPW', '', '', '{"tags":["name","sitename","activate","siteurl","username"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.user.self_activation_w_pw', 'com_users', '       ', 'COM_USERS_EMAIL_ACCOUNT_DETAILS', 'COM_USERS_EMAIL_REGISTERED_WITH_ACTIVATION_BODY', '', '', '{"tags":["name","sitename","activate","siteurl","username","password_clear"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.user.registration_mail', 'com_users', '       ', 'COM_USERS_EMAIL_ACCOUNT_DETAILS', 'COM_USERS_EMAIL_REGISTERED_BODY_NOPW', '', '', '{"tags":["name","sitename","activate","siteurl","username"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.user.registration_mail_w_pw', 'com_users', '       ', 'COM_USERS_EMAIL_ACCOUNT_DETAILS', 'COM_USERS_EMAIL_REGISTERED_BODY', '', '', '{"tags":["name","sitename","activate","siteurl","username","password_clear"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.admin.new_notification', 'com_users', '       ', 'COM_USERS_EMAIL_ACCOUNT_DETAILS', 'COM_USERS_EMAIL_REGISTERED_NOTIFICATION_TO_ADMIN_BODY', '', '', '{"tags":["name","sitename","siteurl","username"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.user.admin_activated', 'com_users', '       ', 'COM_USERS_EMAIL_ACTIVATED_BY_ADMIN_ACTIVATION_SUBJECT', 'COM_USERS_EMAIL_ACTIVATED_BY_ADMIN_ACTIVATION_BODY', '', '', '{"tags":["name","sitename","siteurl","username"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_users.registration.admin.verification_request', 'com_users', '       ', 'COM_USERS_EMAIL_ACTIVATE_WITH_ADMIN_ACTIVATION_SUBJECT', 'COM_USERS_EMAIL_ACTIVATE_WITH_ADMIN_ACTIVATION_BODY', '', '', '{"tags":["name","sitename","email","username","activate"]}');
INSERT INTO public.cms_mail_templates VALUES ('plg_system_privacyconsent.request.reminder', 'plg_system_privacyconsent', '       ', 'PLG_SYSTEM_PRIVACYCONSENT_EMAIL_REMIND_SUBJECT', 'PLG_SYSTEM_PRIVACYCONSENT_EMAIL_REMIND_BODY', '', '', '{"tags":["sitename","url","tokenurl","formurl","token"]}');
INSERT INTO public.cms_mail_templates VALUES ('com_messages.new_message', 'com_messages', '       ', 'COM_MESSAGES_NEW_MESSAGE', 'COM_MESSAGES_NEW_MESSAGE_BODY', '', '', '{"tags":["subject","message","fromname","sitename","siteurl","fromemail","toname","toemail"]}');
INSERT INTO public.cms_mail_templates VALUES ('plg_system_tasknotification.failure_mail', 'plg_system_tasknotification', '       ', 'PLG_SYSTEM_TASK_NOTIFICATION_FAILURE_MAIL_SUBJECT', 'PLG_SYSTEM_TASK_NOTIFICATION_FAILURE_MAIL_BODY', '', '', '{"tags": ["task_id", "task_title", "exit_code", "exec_data_time", "task_output"]}');
INSERT INTO public.cms_mail_templates VALUES ('plg_system_tasknotification.fatal_recovery_mail', 'plg_system_tasknotification', '       ', 'PLG_SYSTEM_TASK_NOTIFICATION_FATAL_MAIL_SUBJECT', 'PLG_SYSTEM_TASK_NOTIFICATION_FATAL_MAIL_BODY', '', '', '{"tags": ["task_id", "task_title"]}');
INSERT INTO public.cms_mail_templates VALUES ('plg_system_tasknotification.orphan_mail', 'plg_system_tasknotification', '       ', 'PLG_SYSTEM_TASK_NOTIFICATION_ORPHAN_MAIL_SUBJECT', 'PLG_SYSTEM_TASK_NOTIFICATION_ORPHAN_MAIL_BODY', '', '', '{"tags": ["task_id", "task_title"]}');
INSERT INTO public.cms_mail_templates VALUES ('plg_system_tasknotification.success_mail', 'plg_system_tasknotification', '       ', 'PLG_SYSTEM_TASK_NOTIFICATION_SUCCESS_MAIL_SUBJECT', 'PLG_SYSTEM_TASK_NOTIFICATION_SUCCESS_MAIL_BODY', '', '', '{"tags":["task_id", "task_title", "exec_data_time", "task_output"]}');


--
-- Data for Name: cms_menu; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_menu VALUES (1, '', 'Menu_Item_Root', 'root', '', '', '', '', 1, 0, 0, 0, NULL, NULL, 0, 0, '', 0, '', 0, 43, 0, '*', 0, NULL, NULL);
INSERT INTO public.cms_menu VALUES (2, 'main', 'com_banners', 'Banners', '', 'Banners', 'index.php?option=com_banners', 'component', 1, 1, 1, 3, NULL, NULL, 0, 0, 'class:bookmark', 0, '', 1, 10, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (3, 'main', 'com_banners', 'Banners', '', 'Banners/Banners', 'index.php?option=com_banners&view=banners', 'component', 1, 2, 2, 3, NULL, NULL, 0, 0, 'class:banners', 0, '', 2, 3, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (4, 'main', 'com_banners_categories', 'Categories', '', 'Banners/Categories', 'index.php?option=com_categories&view=categories&extension=com_banners', 'component', 1, 2, 2, 5, NULL, NULL, 0, 0, 'class:banners-cat', 0, '', 4, 5, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (5, 'main', 'com_banners_clients', 'Clients', '', 'Banners/Clients', 'index.php?option=com_banners&view=clients', 'component', 1, 2, 2, 3, NULL, NULL, 0, 0, 'class:banners-clients', 0, '', 6, 7, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (6, 'main', 'com_banners_tracks', 'Tracks', '', 'Banners/Tracks', 'index.php?option=com_banners&view=tracks', 'component', 1, 2, 2, 3, NULL, NULL, 0, 0, 'class:banners-tracks', 0, '', 8, 9, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (7, 'main', 'com_contact', 'Contacts', '', 'Contacts', 'index.php?option=com_contact', 'component', 1, 1, 1, 7, NULL, NULL, 0, 0, 'class:address-book', 0, '', 11, 20, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (8, 'main', 'com_contact_contacts', 'Contacts', '', 'Contacts/Contacts', 'index.php?option=com_contact&view=contacts', 'component', 1, 7, 2, 7, NULL, NULL, 0, 0, 'class:contact', 0, '', 12, 13, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (9, 'main', 'com_contact_categories', 'Categories', '', 'Contacts/Categories', 'index.php?option=com_categories&view=categories&extension=com_contact', 'component', 1, 7, 2, 5, NULL, NULL, 0, 0, 'class:contact-cat', 0, '', 14, 15, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (10, 'main', 'com_newsfeeds', 'News Feeds', '', 'News Feeds', 'index.php?option=com_newsfeeds', 'component', 1, 1, 1, 16, NULL, NULL, 0, 0, 'class:rss', 0, '', 23, 28, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (11, 'main', 'com_newsfeeds_feeds', 'Feeds', '', 'News Feeds/Feeds', 'index.php?option=com_newsfeeds&view=newsfeeds', 'component', 1, 10, 2, 16, NULL, NULL, 0, 0, 'class:newsfeeds', 0, '', 24, 25, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (12, 'main', 'com_newsfeeds_categories', 'Categories', '', 'News Feeds/Categories', 'index.php?option=com_categories&view=categories&extension=com_newsfeeds', 'component', 1, 10, 2, 5, NULL, NULL, 0, 0, 'class:newsfeeds-cat', 0, '', 26, 27, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (13, 'main', 'com_finder', 'Smart Search', '', 'Smart Search', 'index.php?option=com_finder', 'component', 1, 1, 1, 23, NULL, NULL, 0, 0, 'class:search-plus', 0, '', 29, 38, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (14, 'main', 'com_tags', 'Tags', '', 'Tags', 'index.php?option=com_tags&view=tags', 'component', 1, 1, 1, 25, NULL, NULL, 0, 1, 'class:tags', 0, '', 39, 40, 0, '', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (15, 'main', 'com_associations', 'Multilingual Associations', '', 'Multilingual Associations', 'index.php?option=com_associations&view=associations', 'component', 1, 1, 1, 30, NULL, NULL, 0, 0, 'class:language', 0, '', 21, 22, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (16, 'main', 'mod_menu_fields', 'Contact Custom Fields', '', 'contact/Custom Fields', 'index.php?option=com_fields&context=com_contact.contact', 'component', 1, 7, 2, 29, NULL, NULL, 0, 0, 'class:messages-add', 0, '', 16, 17, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (17, 'main', 'mod_menu_fields_group', 'Contact Custom Fields Group', '', 'contact/Custom Fields Group', 'index.php?option=com_fields&view=groups&context=com_contact.contact', 'component', 1, 7, 2, 29, NULL, NULL, 0, 0, 'class:messages-add', 0, '', 18, 19, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (18, 'main', 'com_finder_index', 'Smart-Search-Index', '', 'Smart Search/Index', 'index.php?option=com_finder&view=index', 'component', 1, 13, 2, 23, NULL, NULL, 0, 0, 'class:finder', 0, '', 30, 31, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (19, 'main', 'com_finder_maps', 'Smart-Search-Maps', '', 'Smart Search/Maps', 'index.php?option=com_finder&view=maps', 'component', 1, 13, 2, 23, NULL, NULL, 0, 0, 'class:finder-maps', 0, '', 32, 33, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (20, 'main', 'com_finder_filters', 'Smart-Search-Filters', '', 'Smart Search/Filters', 'index.php?option=com_finder&view=filters', 'component', 1, 13, 2, 23, NULL, NULL, 0, 0, 'class:finder-filters', 0, '', 34, 35, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (21, 'main', 'com_finder_searches', 'Smart-Search-Searches', '', 'Smart Search/Searches', 'index.php?option=com_finder&view=searches', 'component', 1, 13, 2, 23, NULL, NULL, 0, 0, 'class:finder-searches', 0, '', 36, 37, 0, '*', 1, NULL, NULL);
INSERT INTO public.cms_menu VALUES (101, 'mainmenu', 'Home', 'home', '', 'home', 'index.php?option=com_content&view=featured', 'component', 1, 1, 1, 19, NULL, NULL, 0, 1, '', 0, '{"featured_categories":[""],"layout_type":"blog","blog_class_leading":"","blog_class":"","num_leading_articles":"1","num_intro_articles":"3","num_links":"0","link_intro_image":"","orderby_pri":"","orderby_sec":"front","order_date":"","show_pagination":"2","show_pagination_results":"1","show_title":"","link_titles":"","show_intro":"","info_block_position":"","info_block_show_title":"","show_category":"","link_category":"","show_parent_category":"","link_parent_category":"","show_associations":"","show_author":"","link_author":"","show_create_date":"","show_modify_date":"","show_publish_date":"","show_item_navigation":"","show_vote":"","show_readmore":"","show_readmore_title":"","show_hits":"","show_tags":"","show_noauth":"","show_feed_link":"1","feed_summary":"","menu-anchor_title":"","menu-anchor_css":"","menu_image":"","menu_image_css":"","menu_text":1,"menu_show":1,"page_title":"","show_page_heading":"1","page_heading":"","pageclass_sfx":"","menu-meta_description":"","robots":""}', 41, 42, 1, '*', 0, NULL, NULL);


--
-- Data for Name: cms_menu_types; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_menu_types VALUES (1, 0, 'mainmenu', 'Main Menu', 'The main menu for the site', 0);


--
-- Data for Name: cms_messages; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_messages_cfg; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_modules; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_modules VALUES (1, 39, 'Main Menu', '', '', 1, 'sidebar-right', NULL, NULL, NULL, NULL, 1, 'mod_menu', 1, 1, '{"menutype":"mainmenu","startLevel":"0","endLevel":"0","showAllChildren":"1","tag_id":"","class_sfx":"","window_open":"","layout":"_:default","moduleclass_sfx":"","cache":"1","cache_time":"900","cachemode":"itemid"}', 0, '*');
INSERT INTO public.cms_modules VALUES (2, 40, 'Login', '', '', 1, 'login', NULL, NULL, NULL, NULL, 1, 'mod_login', 1, 1, '', 1, '*');
INSERT INTO public.cms_modules VALUES (3, 41, 'Popular Articles', '', '', 3, 'cpanel', NULL, NULL, NULL, NULL, 1, 'mod_popular', 3, 1, '{"count":"5","catid":"","user_id":"0","layout":"_:default","moduleclass_sfx":"","cache":"0", "bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (4, 42, 'Recently Added Articles', '', '', 4, 'cpanel', NULL, NULL, NULL, NULL, 1, 'mod_latest', 3, 1, '{"count":"5","ordering":"c_dsc","catid":"","user_id":"0","layout":"_:default","moduleclass_sfx":"","cache":"0", "bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (8, 43, 'Toolbar', '', '', 1, 'toolbar', NULL, NULL, NULL, NULL, 1, 'mod_toolbar', 3, 1, '', 1, '*');
INSERT INTO public.cms_modules VALUES (9, 44, 'Notifications', '', '', 3, 'icon', NULL, NULL, NULL, NULL, 1, 'mod_quickicon', 3, 1, '{"context":"update_quickicon","header_icon":"icon-sync","show_jupdate":"1","show_eupdate":"1","show_oupdate":"1","show_privacy":"1","layout":"_:default","moduleclass_sfx":"","cache":1,"cache_time":900,"style":"0","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":""}', 1, '*');
INSERT INTO public.cms_modules VALUES (10, 45, 'Logged-in Users', '', '', 2, 'cpanel', NULL, NULL, NULL, NULL, 1, 'mod_logged', 3, 1, '{"count":"5","name":"1","layout":"_:default","moduleclass_sfx":"","cache":"0", "bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (12, 46, 'Admin Menu', '', '', 1, 'menu', NULL, NULL, NULL, NULL, 1, 'mod_menu', 3, 1, '{"layout":"","moduleclass_sfx":"","shownew":"1","showhelp":"1","cache":"0"}', 1, '*');
INSERT INTO public.cms_modules VALUES (15, 49, 'Title', '', '', 1, 'title', NULL, NULL, NULL, NULL, 1, 'mod_title', 3, 1, '', 1, '*');
INSERT INTO public.cms_modules VALUES (16, 50, 'Login Form', '', '', 7, 'sidebar-right', NULL, NULL, NULL, NULL, 1, 'mod_login', 1, 1, '{"greeting":"1","name":"0"}', 0, '*');
INSERT INTO public.cms_modules VALUES (17, 51, 'Breadcrumbs', '', '', 1, 'breadcrumbs', NULL, NULL, NULL, NULL, 1, 'mod_breadcrumbs', 1, 1, '{"moduleclass_sfx":"","showHome":"1","homeText":"","showComponent":"1","separator":"","cache":"0","cache_time":"0","cachemode":"itemid"}', 0, '*');
INSERT INTO public.cms_modules VALUES (79, 52, 'Multilanguage status', '', '', 2, 'status', NULL, NULL, NULL, NULL, 1, 'mod_multilangstatus', 3, 1, '{"layout":"_:default","moduleclass_sfx":"","cache":"0"}', 1, '*');
INSERT INTO public.cms_modules VALUES (86, 53, 'Joomla Version', '', '', 1, 'status', NULL, NULL, NULL, NULL, 1, 'mod_version', 3, 1, '{"layout":"_:default","moduleclass_sfx":"","cache":"0"}', 1, '*');
INSERT INTO public.cms_modules VALUES (87, 55, 'Sample Data', '', '', 0, 'cpanel', NULL, NULL, NULL, NULL, 1, 'mod_sampledata', 6, 1, '{"bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (88, 67, 'Latest Actions', '', '', 0, 'cpanel', NULL, NULL, NULL, NULL, 1, 'mod_latestactions', 6, 1, '{"bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (89, 68, 'Privacy Dashboard', '', '', 0, 'cpanel', NULL, NULL, NULL, NULL, 1, 'mod_privacy_dashboard', 6, 1, '{"bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (90, 89, 'Login Support', '', '', 1, 'sidebar', NULL, NULL, NULL, NULL, 1, 'mod_loginsupport', 1, 1, '{"forum_url":"https://forum.joomla.org/","documentation_url":"https://docs.joomla.org/","news_url":"https://www.joomla.org/announcements.html","automatic_title":1,"prepare_content":1,"layout":"_:default","moduleclass_sfx":"","cache":1,"cache_time":900,"module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"}', 1, '*');
INSERT INTO public.cms_modules VALUES (91, 72, 'System Dashboard', '', '', 1, 'cpanel-system', NULL, NULL, NULL, NULL, 1, 'mod_submenu', 1, 0, '{"menutype":"*","preset":"system","layout":"_:default","moduleclass_sfx":"","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":"","style":"System-none"}', 1, '*');
INSERT INTO public.cms_modules VALUES (92, 73, 'Content Dashboard', '', '', 1, 'cpanel-content', NULL, NULL, NULL, NULL, 1, 'mod_submenu', 1, 0, '{"menutype":"*","preset":"content","layout":"_:default","moduleclass_sfx":"","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":"","style":"System-none"}', 1, '*');
INSERT INTO public.cms_modules VALUES (93, 74, 'Menus Dashboard', '', '', 1, 'cpanel-menus', NULL, NULL, NULL, NULL, 1, 'mod_submenu', 1, 0, '{"menutype":"*","preset":"menus","layout":"_:default","moduleclass_sfx":"","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":"","style":"System-none"}', 1, '*');
INSERT INTO public.cms_modules VALUES (94, 75, 'Components Dashboard', '', '', 1, 'cpanel-components', NULL, NULL, NULL, NULL, 1, 'mod_submenu', 1, 0, '{"menutype":"*","preset":"components","layout":"_:default","moduleclass_sfx":"","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":"","style":"System-none"}', 1, '*');
INSERT INTO public.cms_modules VALUES (95, 76, 'Users Dashboard', '', '', 1, 'cpanel-users', NULL, NULL, NULL, NULL, 1, 'mod_submenu', 1, 0, '{"menutype":"*","preset":"users","layout":"_:default","moduleclass_sfx":"","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":"","style":"System-none"}', 1, '*');
INSERT INTO public.cms_modules VALUES (96, 86, 'Popular Articles', '', '', 3, 'cpanel-content', NULL, NULL, NULL, NULL, 1, 'mod_popular', 3, 1, '{"count":"5","catid":"","user_id":"0","layout":"_:default","moduleclass_sfx":"","cache":"0", "bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (97, 87, 'Recently Added Articles', '', '', 4, 'cpanel-content', NULL, NULL, NULL, NULL, 1, 'mod_latest', 3, 1, '{"count":"5","ordering":"c_dsc","catid":"","user_id":"0","layout":"_:default","moduleclass_sfx":"","cache":"0", "bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (98, 88, 'Logged-in Users', '', '', 2, 'cpanel-users', NULL, NULL, NULL, NULL, 1, 'mod_logged', 3, 1, '{"count":"5","name":"1","layout":"_:default","moduleclass_sfx":"","cache":"0", "bootstrap_size": "12","header_tag":"h2"}', 1, '*');
INSERT INTO public.cms_modules VALUES (99, 77, 'Frontend Link', '', '', 5, 'status', NULL, NULL, NULL, NULL, 1, 'mod_frontend', 1, 1, '', 1, '*');
INSERT INTO public.cms_modules VALUES (100, 78, 'Messages', '', '', 4, 'status', NULL, NULL, NULL, NULL, 1, 'mod_messages', 3, 1, '', 1, '*');
INSERT INTO public.cms_modules VALUES (101, 79, 'Post Install Messages', '', '', 3, 'status', NULL, NULL, NULL, NULL, 1, 'mod_post_installation_messages', 3, 1, '', 1, '*');
INSERT INTO public.cms_modules VALUES (102, 80, 'User Status', '', '', 6, 'status', NULL, NULL, NULL, NULL, 1, 'mod_user', 3, 1, '', 1, '*');
INSERT INTO public.cms_modules VALUES (103, 70, 'Site', '', '', 1, 'icon', NULL, NULL, NULL, NULL, 1, 'mod_quickicon', 1, 1, '{"context":"site_quickicon","header_icon":"icon-desktop","show_users":"1","show_articles":"1","show_categories":"1","show_media":"1","show_menuItems":"1","show_modules":"1","show_plugins":"1","show_templates":"1","layout":"_:default","moduleclass_sfx":"","cache":1,"cache_time":900,"style":"0","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":""}', 1, '*');
INSERT INTO public.cms_modules VALUES (104, 71, 'System', '', '', 2, 'icon', NULL, NULL, NULL, NULL, 1, 'mod_quickicon', 1, 1, '{"context":"system_quickicon","header_icon":"icon-wrench","show_global":"1","show_checkin":"1","show_cache":"1","layout":"_:default","moduleclass_sfx":"","cache":1,"cache_time":900,"style":"0","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":""}', 1, '*');
INSERT INTO public.cms_modules VALUES (105, 82, '3rd Party', '', '', 4, 'icon', NULL, NULL, NULL, NULL, 1, 'mod_quickicon', 1, 1, '{"context":"mod_quickicon","header_icon":"icon-boxes","load_plugins":"1","layout":"_:default","moduleclass_sfx":"","cache":1,"cache_time":900,"style":"0","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":""}', 1, '*');
INSERT INTO public.cms_modules VALUES (106, 83, 'Help Dashboard', '', '', 1, 'cpanel-help', NULL, NULL, NULL, NULL, 1, 'mod_submenu', 1, 0, '{"menutype":"*","preset":"help","layout":"_:default","moduleclass_sfx":"","style":"System-none","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":""}', 1, '*');
INSERT INTO public.cms_modules VALUES (107, 84, 'Privacy Requests', '', '', 1, 'cpanel-privacy', NULL, NULL, NULL, NULL, 1, 'mod_privacy_dashboard', 1, 1, '{"layout":"_:default","moduleclass_sfx":"","cache":1,"cache_time":900,"cachemode":"static","style":"0","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":""}', 1, '*');
INSERT INTO public.cms_modules VALUES (108, 85, 'Privacy Status', '', '', 1, 'cpanel-privacy', NULL, NULL, NULL, NULL, 1, 'mod_privacy_status', 1, 1, '{"layout":"_:default","moduleclass_sfx":"","cache":1,"cache_time":900,"cachemode":"static","style":"0","module_tag":"div","bootstrap_size":"12","header_tag":"h2","header_class":""}', 1, '*');


--
-- Data for Name: cms_modules_menu; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_modules_menu VALUES (1, 0);
INSERT INTO public.cms_modules_menu VALUES (2, 0);
INSERT INTO public.cms_modules_menu VALUES (3, 0);
INSERT INTO public.cms_modules_menu VALUES (4, 0);
INSERT INTO public.cms_modules_menu VALUES (6, 0);
INSERT INTO public.cms_modules_menu VALUES (7, 0);
INSERT INTO public.cms_modules_menu VALUES (8, 0);
INSERT INTO public.cms_modules_menu VALUES (9, 0);
INSERT INTO public.cms_modules_menu VALUES (10, 0);
INSERT INTO public.cms_modules_menu VALUES (12, 0);
INSERT INTO public.cms_modules_menu VALUES (14, 0);
INSERT INTO public.cms_modules_menu VALUES (15, 0);
INSERT INTO public.cms_modules_menu VALUES (16, 0);
INSERT INTO public.cms_modules_menu VALUES (17, 0);
INSERT INTO public.cms_modules_menu VALUES (79, 0);
INSERT INTO public.cms_modules_menu VALUES (86, 0);
INSERT INTO public.cms_modules_menu VALUES (87, 0);
INSERT INTO public.cms_modules_menu VALUES (88, 0);
INSERT INTO public.cms_modules_menu VALUES (89, 0);
INSERT INTO public.cms_modules_menu VALUES (90, 0);
INSERT INTO public.cms_modules_menu VALUES (91, 0);
INSERT INTO public.cms_modules_menu VALUES (92, 0);
INSERT INTO public.cms_modules_menu VALUES (93, 0);
INSERT INTO public.cms_modules_menu VALUES (94, 0);
INSERT INTO public.cms_modules_menu VALUES (95, 0);
INSERT INTO public.cms_modules_menu VALUES (96, 0);
INSERT INTO public.cms_modules_menu VALUES (97, 0);
INSERT INTO public.cms_modules_menu VALUES (98, 0);
INSERT INTO public.cms_modules_menu VALUES (99, 0);
INSERT INTO public.cms_modules_menu VALUES (100, 0);
INSERT INTO public.cms_modules_menu VALUES (101, 0);
INSERT INTO public.cms_modules_menu VALUES (102, 0);
INSERT INTO public.cms_modules_menu VALUES (103, 0);
INSERT INTO public.cms_modules_menu VALUES (104, 0);
INSERT INTO public.cms_modules_menu VALUES (105, 0);
INSERT INTO public.cms_modules_menu VALUES (106, 0);
INSERT INTO public.cms_modules_menu VALUES (107, 0);
INSERT INTO public.cms_modules_menu VALUES (108, 0);


--
-- Data for Name: cms_newsfeeds; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_overrider; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_postinstall_messages; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_postinstall_messages VALUES (1, 220, 'PLG_TWOFACTORAUTH_TOTP_POSTINSTALL_TITLE', 'PLG_TWOFACTORAUTH_TOTP_POSTINSTALL_BODY', 'PLG_TWOFACTORAUTH_TOTP_POSTINSTALL_ACTION', 'plg_twofactorauth_totp', 1, 'action', 'site://plugins/twofactorauth/totp/postinstall/actions.php', 'twofactorauth_postinstall_action', 'site://plugins/twofactorauth/totp/postinstall/actions.php', 'twofactorauth_postinstall_condition', '3.2.0', 1);
INSERT INTO public.cms_postinstall_messages VALUES (2, 220, 'COM_CPANEL_WELCOME_BEGINNERS_TITLE', 'COM_CPANEL_WELCOME_BEGINNERS_MESSAGE', '', 'com_cpanel', 1, 'message', '', '', '', '', '3.2.0', 1);
INSERT INTO public.cms_postinstall_messages VALUES (3, 220, 'COM_CPANEL_MSG_STATS_COLLECTION_TITLE', 'COM_CPANEL_MSG_STATS_COLLECTION_BODY', '', 'com_cpanel', 1, 'message', '', '', 'admin://components/com_admin/postinstall/statscollection.php', 'admin_postinstall_statscollection_condition', '3.5.0', 1);
INSERT INTO public.cms_postinstall_messages VALUES (4, 220, 'PLG_SYSTEM_UPDATENOTIFICATION_POSTINSTALL_UPDATECACHETIME', 'PLG_SYSTEM_UPDATENOTIFICATION_POSTINSTALL_UPDATECACHETIME_BODY', 'PLG_SYSTEM_UPDATENOTIFICATION_POSTINSTALL_UPDATECACHETIME_ACTION', 'plg_system_updatenotification', 1, 'action', 'site://plugins/system/updatenotification/postinstall/updatecachetime.php', 'updatecachetime_postinstall_action', 'site://plugins/system/updatenotification/postinstall/updatecachetime.php', 'updatecachetime_postinstall_condition', '3.6.3', 1);
INSERT INTO public.cms_postinstall_messages VALUES (5, 220, 'PLG_SYSTEM_HTTPHEADERS_POSTINSTALL_INTRODUCTION_TITLE', 'PLG_SYSTEM_HTTPHEADERS_POSTINSTALL_INTRODUCTION_BODY', 'PLG_SYSTEM_HTTPHEADERS_POSTINSTALL_INTRODUCTION_ACTION', 'plg_system_httpheaders', 1, 'action', 'site://plugins/system/httpheaders/postinstall/introduction.php', 'httpheaders_postinstall_action', 'site://plugins/system/httpheaders/postinstall/introduction.php', 'httpheaders_postinstall_condition', '4.0.0', 1);


--
-- Data for Name: cms_privacy_consents; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_privacy_requests; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_redirect_links; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_scheduler_tasks; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_schemas; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_schemas VALUES (220, '4.1.1-2022-02-20');


--
-- Data for Name: cms_session; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_tags; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_tags VALUES (1, 0, 0, 1, 0, '', 'ROOT', 'root', '', '', 1, NULL, NULL, 1, '', '', '', '', 476, '2022-04-02 09:44:28.213084', '', 476, '2022-04-02 09:44:28.213084', '', '', 0, '*', 1, NULL, NULL);


--
-- Data for Name: cms_template_overrides; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_template_styles; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_template_styles VALUES (10, 'atum', 1, '1', 'Atum - Default', 1, '', '{"hue":"hsl(214, 63%, 20%)","bg-light":"#f0f4fb","text-dark":"#495057","text-light":"#ffffff","link-color":"#2a69b8","special-color":"#001b4c","monochrome":"0","loginLogo":"","loginLogoAlt":"","logoBrandLarge":"","logoBrandLargeAlt":"","logoBrandSmall":"","logoBrandSmallAlt":""}');
INSERT INTO public.cms_template_styles VALUES (11, 'cassiopeia', 0, '1', 'Cassiopeia - Default', 1, '', '{"brand":"1","logoFile":"","siteTitle":"","siteDescription":"","useFontScheme":"0","colorName":"colors_standard","fluidContainer":"0","stickyHeader":0,"backTop":0}');


--
-- Data for Name: cms_ucm_base; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_ucm_content; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_update_sites; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_update_sites VALUES (1, 'Joomla! Core', 'collection', 'https://update.joomla.org/core/list.xml', 1, 0, '', NULL, NULL);
INSERT INTO public.cms_update_sites VALUES (3, 'Joomla! Update Component Update Site', 'extension', 'https://update.joomla.org/core/extensions/com_joomlaupdate.xml', 1, 0, '', NULL, NULL);
INSERT INTO public.cms_update_sites VALUES (2, 'Accredited Joomla! Translations', 'collection', 'https://update.joomla.org/language/translationlist_4.xml', 1, 1648920096, '', NULL, NULL);


--
-- Data for Name: cms_update_sites_extensions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_update_sites_extensions VALUES (1, 220);
INSERT INTO public.cms_update_sites_extensions VALUES (2, 221);
INSERT INTO public.cms_update_sites_extensions VALUES (3, 24);


--
-- Data for Name: cms_updates; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_updates VALUES (337, 2, 0, 'Arabic Unitag', '', 'pkg_ar-AA', 'package', '', 0, '4.0.2.1', '', 'https://update.joomla.org/language/details4/ar-AA_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (338, 2, 0, 'Catalan', '', 'pkg_ca-ES', 'package', '', 0, '4.0.4.2', '', 'https://update.joomla.org/language/details4/ca-ES_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (339, 2, 0, 'Chinese, Simplified', '', 'pkg_zh-CN', 'package', '', 0, '4.1.0.3', '', 'https://update.joomla.org/language/details4/zh-CN_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (340, 2, 0, 'Chinese, Traditional', '', 'pkg_zh-TW', 'package', '', 0, '4.0.6.1', '', 'https://update.joomla.org/language/details4/zh-TW_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (341, 2, 0, 'Czech', '', 'pkg_cs-CZ', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/cs-CZ_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (342, 2, 0, 'Danish', '', 'pkg_da-DK', 'package', '', 0, '4.1.1.1', '', 'https://update.joomla.org/language/details4/da-DK_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (343, 2, 0, 'Dutch', '', 'pkg_nl-NL', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/nl-NL_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (344, 2, 0, 'English, Australia', '', 'pkg_en-AU', 'package', '', 0, '4.1.0.2', '', 'https://update.joomla.org/language/details4/en-AU_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (345, 2, 0, 'English, Canada', '', 'pkg_en-CA', 'package', '', 0, '4.1.0.2', '', 'https://update.joomla.org/language/details4/en-CA_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (346, 2, 0, 'English, New Zealand', '', 'pkg_en-NZ', 'package', '', 0, '4.1.0.2', '', 'https://update.joomla.org/language/details4/en-NZ_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (347, 2, 0, 'English, USA', '', 'pkg_en-US', 'package', '', 0, '4.1.0.2', '', 'https://update.joomla.org/language/details4/en-US_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (348, 2, 0, 'Estonian', '', 'pkg_et-EE', 'package', '', 0, '4.1.0.1', '', 'https://update.joomla.org/language/details4/et-EE_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (349, 2, 0, 'Finnish', '', 'pkg_fi-FI', 'package', '', 0, '4.1.1.2', '', 'https://update.joomla.org/language/details4/fi-FI_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (350, 2, 0, 'Flemish', '', 'pkg_nl-BE', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/nl-BE_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (351, 2, 0, 'French', '', 'pkg_fr-FR', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/fr-FR_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (352, 2, 0, 'Georgian', '', 'pkg_ka-GE', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/ka-GE_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (353, 2, 0, 'German', '', 'pkg_de-DE', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/de-DE_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (354, 2, 0, 'German, Austria', '', 'pkg_de-AT', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/de-AT_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (355, 2, 0, 'German, Liechtenstein', '', 'pkg_de-LI', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/de-LI_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (356, 2, 0, 'German, Luxembourg', '', 'pkg_de-LU', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/de-LU_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (357, 2, 0, 'German, Switzerland', '', 'pkg_de-CH', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/de-CH_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (358, 2, 0, 'Greek', '', 'pkg_el-GR', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/el-GR_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (359, 2, 0, 'Hungarian', '', 'pkg_hu-HU', 'package', '', 0, '4.1.0.1', '', 'https://update.joomla.org/language/details4/hu-HU_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (360, 2, 0, 'Italian', '', 'pkg_it-IT', 'package', '', 0, '4.1.1.1', '', 'https://update.joomla.org/language/details4/it-IT_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (361, 2, 0, 'Japanese', '', 'pkg_ja-JP', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/ja-JP_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (362, 2, 0, 'Kazakh', '', 'pkg_kk-KZ', 'package', '', 0, '4.1.0.2', '', 'https://update.joomla.org/language/details4/kk-KZ_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (363, 2, 0, 'Norwegian Bokmål', '', 'pkg_nb-NO', 'package', '', 0, '4.0.1.1', '', 'https://update.joomla.org/language/details4/nb-NO_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (364, 2, 0, 'Persian Farsi', '', 'pkg_fa-IR', 'package', '', 0, '4.1.0.1', '', 'https://update.joomla.org/language/details4/fa-IR_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (365, 2, 0, 'Polish', '', 'pkg_pl-PL', 'package', '', 0, '4.1.0.5', '', 'https://update.joomla.org/language/details4/pl-PL_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (366, 2, 0, 'Portuguese, Brazil', '', 'pkg_pt-BR', 'package', '', 0, '4.0.3.1', '', 'https://update.joomla.org/language/details4/pt-BR_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (367, 2, 0, 'Portuguese, Portugal', '', 'pkg_pt-PT', 'package', '', 0, '4.0.0-rc4.2', '', 'https://update.joomla.org/language/details4/pt-PT_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (368, 2, 0, 'Romanian', '', 'pkg_ro-RO', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/ro-RO_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (369, 2, 0, 'Russian', '', 'pkg_ru-RU', 'package', '', 0, '4.1.1.1', '', 'https://update.joomla.org/language/details4/ru-RU_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (370, 2, 0, 'Slovak', '', 'pkg_sk-SK', 'package', '', 0, '4.0.6.1', '', 'https://update.joomla.org/language/details4/sk-SK_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (371, 2, 0, 'Slovenian', '', 'pkg_sl-SI', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/sl-SI_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (372, 2, 0, 'Spanish', '', 'pkg_es-ES', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/es-ES_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (373, 2, 0, 'Swedish', '', 'pkg_sv-SE', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/sv-SE_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (374, 2, 0, 'Tamil, India', '', 'pkg_ta-IN', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/ta-IN_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (375, 2, 0, 'Thai', '', 'pkg_th-TH', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/th-TH_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (376, 2, 0, 'Turkish', '', 'pkg_tr-TR', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/tr-TR_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (377, 2, 0, 'Ukrainian', '', 'pkg_uk-UA', 'package', '', 0, '4.0.3.2', '', 'https://update.joomla.org/language/details4/uk-UA_details.xml', '', '', '');
INSERT INTO public.cms_updates VALUES (378, 2, 0, 'Welsh', '', 'pkg_cy-GB', 'package', '', 0, '4.1.2.1', '', 'https://update.joomla.org/language/details4/cy-GB_details.xml', '', '', '');


--
-- Data for Name: cms_user_keys; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_user_notes; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_user_profiles; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_user_usergroup_map; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_user_usergroup_map VALUES (476, 8);


--
-- Data for Name: cms_usergroups; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_usergroups VALUES (1, 0, 1, 18, 'Public');
INSERT INTO public.cms_usergroups VALUES (2, 1, 8, 15, 'Registered');
INSERT INTO public.cms_usergroups VALUES (3, 2, 9, 14, 'Author');
INSERT INTO public.cms_usergroups VALUES (4, 3, 10, 13, 'Editor');
INSERT INTO public.cms_usergroups VALUES (5, 4, 11, 12, 'Publisher');
INSERT INTO public.cms_usergroups VALUES (6, 1, 4, 7, 'Manager');
INSERT INTO public.cms_usergroups VALUES (7, 6, 5, 6, 'Administrator');
INSERT INTO public.cms_usergroups VALUES (8, 1, 16, 17, 'Super Users');
INSERT INTO public.cms_usergroups VALUES (9, 1, 2, 3, 'Guest');


--
-- Data for Name: cms_users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_users VALUES (476, 'Admin', 'admin', 'change-me@gmail.com', '$2y$10$61nEM552uhXkedXPzyJhneVs3kiFHo4bprAmElEvXGkBMVvNvZXRC', 0, 1, '2022-04-02 16:44:33', NULL, '0', '', NULL, 0, '', '', 0, '');


--
-- Data for Name: cms_viewlevels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_viewlevels VALUES (1, 'Public', 0, '[1]');
INSERT INTO public.cms_viewlevels VALUES (2, 'Registered', 2, '[6,2,8]');
INSERT INTO public.cms_viewlevels VALUES (3, 'Special', 3, '[6,3,8]');
INSERT INTO public.cms_viewlevels VALUES (5, 'Guest', 1, '[9]');
INSERT INTO public.cms_viewlevels VALUES (6, 'Super Users', 4, '[8]');


--
-- Data for Name: cms_webauthn_credentials; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_workflow_associations; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: cms_workflow_stages; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_workflow_stages VALUES (1, 57, 1, 1, 1, 'COM_WORKFLOW_BASIC_STAGE', '', 1, NULL, NULL);


--
-- Data for Name: cms_workflow_transitions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_workflow_transitions VALUES (1, 58, 1, 1, 1, 'UNPUBLISH', '', -1, 1, '{"publishing":"0"}', NULL, NULL);
INSERT INTO public.cms_workflow_transitions VALUES (2, 59, 2, 1, 1, 'PUBLISH', '', -1, 1, '{"publishing":"1"}', NULL, NULL);
INSERT INTO public.cms_workflow_transitions VALUES (3, 60, 3, 1, 1, 'TRASH', '', -1, 1, '{"publishing":"-2"}', NULL, NULL);
INSERT INTO public.cms_workflow_transitions VALUES (4, 61, 4, 1, 1, 'ARCHIVE', '', -1, 1, '{"publishing":"2"}', NULL, NULL);
INSERT INTO public.cms_workflow_transitions VALUES (5, 62, 5, 1, 1, 'FEATURE', '', -1, 1, '{"featuring":"1"}', NULL, NULL);
INSERT INTO public.cms_workflow_transitions VALUES (6, 63, 6, 1, 1, 'UNFEATURE', '', -1, 1, '{"featuring":"0"}', NULL, NULL);
INSERT INTO public.cms_workflow_transitions VALUES (7, 64, 7, 1, 1, 'PUBLISH_AND_FEATURE', '', -1, 1, '{"publishing":"1","featuring":"1"}', NULL, NULL);


--
-- Data for Name: cms_workflows; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cms_workflows VALUES (1, 56, 1, 'COM_WORKFLOW_BASIC_WORKFLOW', '', 'com_content.article', 1, 1, '2022-04-02 09:44:28.940022', 476, '2022-04-02 09:44:28.940022', 476, NULL, NULL);


--
-- Name: cms_action_log_config_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_action_log_config_id_seq', 21, false);


--
-- Name: cms_action_logs_extensions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_action_logs_extensions_id_seq', 20, false);


--
-- Name: cms_action_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_action_logs_id_seq', 1, false);


--
-- Name: cms_assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_assets_id_seq', 91, false);


--
-- Name: cms_banner_clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_banner_clients_id_seq', 1, false);


--
-- Name: cms_banners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_banners_id_seq', 1, false);


--
-- Name: cms_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_categories_id_seq', 8, false);


--
-- Name: cms_contact_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_contact_details_id_seq', 1, false);


--
-- Name: cms_content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_content_id_seq', 1, false);


--
-- Name: cms_content_types_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_content_types_type_id_seq', 10000, false);


--
-- Name: cms_extensions_extension_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_extensions_extension_id_seq', 224, true);


--
-- Name: cms_fields_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_fields_groups_id_seq', 1, false);


--
-- Name: cms_fields_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_fields_id_seq', 1, false);


--
-- Name: cms_finder_filters_filter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_finder_filters_filter_id_seq', 1, false);


--
-- Name: cms_finder_links_link_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_finder_links_link_id_seq', 1, false);


--
-- Name: cms_finder_taxonomy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_finder_taxonomy_id_seq', 2, false);


--
-- Name: cms_finder_terms_term_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_finder_terms_term_id_seq', 1, false);


--
-- Name: cms_finder_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_finder_types_id_seq', 1, false);


--
-- Name: cms_history_version_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_history_version_id_seq', 1, false);


--
-- Name: cms_languages_lang_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_languages_lang_id_seq', 2, false);


--
-- Name: cms_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_menu_id_seq', 102, false);


--
-- Name: cms_menu_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_menu_types_id_seq', 2, false);


--
-- Name: cms_messages_message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_messages_message_id_seq', 1, false);


--
-- Name: cms_modules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_modules_id_seq', 109, false);


--
-- Name: cms_newsfeeds_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_newsfeeds_id_seq', 1, false);


--
-- Name: cms_overrider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_overrider_id_seq', 1, false);


--
-- Name: cms_postinstall_messages_postinstall_message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_postinstall_messages_postinstall_message_id_seq', 5, true);


--
-- Name: cms_privacy_consents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_privacy_consents_id_seq', 1, false);


--
-- Name: cms_privacy_requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_privacy_requests_id_seq', 1, false);


--
-- Name: cms_redirect_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_redirect_links_id_seq', 1, false);


--
-- Name: cms_scheduler_tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_scheduler_tasks_id_seq', 1, false);


--
-- Name: cms_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_tags_id_seq', 2, false);


--
-- Name: cms_template_overrides_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_template_overrides_id_seq', 1, false);


--
-- Name: cms_template_styles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_template_styles_id_seq', 12, false);


--
-- Name: cms_ucm_base_ucm_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_ucm_base_ucm_id_seq', 1, false);


--
-- Name: cms_ucm_content_core_content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_ucm_content_core_content_id_seq', 1, false);


--
-- Name: cms_update_sites_update_site_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_update_sites_update_site_id_seq', 4, false);


--
-- Name: cms_updates_update_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_updates_update_id_seq', 378, true);


--
-- Name: cms_user_keys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_user_keys_id_seq', 1, false);


--
-- Name: cms_user_notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_user_notes_id_seq', 1, false);


--
-- Name: cms_usergroups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_usergroups_id_seq', 10, false);


--
-- Name: cms_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_users_id_seq', 1, false);


--
-- Name: cms_viewlevels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_viewlevels_id_seq', 7, false);


--
-- Name: cms_workflow_stages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_workflow_stages_id_seq', 2, false);


--
-- Name: cms_workflow_transitions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_workflow_transitions_id_seq', 8, false);


--
-- Name: cms_workflows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cms_workflows_id_seq', 2, false);


--
-- Name: cms_action_log_config cms_action_log_config_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_action_log_config
    ADD CONSTRAINT cms_action_log_config_pkey PRIMARY KEY (id);


--
-- Name: cms_action_logs_extensions cms_action_logs_extensions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_action_logs_extensions
    ADD CONSTRAINT cms_action_logs_extensions_pkey PRIMARY KEY (id);


--
-- Name: cms_action_logs cms_action_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_action_logs
    ADD CONSTRAINT cms_action_logs_pkey PRIMARY KEY (id);


--
-- Name: cms_action_logs_users cms_action_logs_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_action_logs_users
    ADD CONSTRAINT cms_action_logs_users_pkey PRIMARY KEY (user_id);


--
-- Name: cms_assets cms_assets_idx_asset_name; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_assets
    ADD CONSTRAINT cms_assets_idx_asset_name UNIQUE (name);


--
-- Name: cms_assets cms_assets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_assets
    ADD CONSTRAINT cms_assets_pkey PRIMARY KEY (id);


--
-- Name: cms_associations cms_associations_idx_context_id; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_associations
    ADD CONSTRAINT cms_associations_idx_context_id PRIMARY KEY (context, id);


--
-- Name: cms_banner_clients cms_banner_clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_banner_clients
    ADD CONSTRAINT cms_banner_clients_pkey PRIMARY KEY (id);


--
-- Name: cms_banner_tracks cms_banner_tracks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_banner_tracks
    ADD CONSTRAINT cms_banner_tracks_pkey PRIMARY KEY (track_date, track_type, banner_id);


--
-- Name: cms_banners cms_banners_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_banners
    ADD CONSTRAINT cms_banners_pkey PRIMARY KEY (id);


--
-- Name: cms_categories cms_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_categories
    ADD CONSTRAINT cms_categories_pkey PRIMARY KEY (id);


--
-- Name: cms_contact_details cms_contact_details_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_contact_details
    ADD CONSTRAINT cms_contact_details_pkey PRIMARY KEY (id);


--
-- Name: cms_content_frontpage cms_content_frontpage_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_content_frontpage
    ADD CONSTRAINT cms_content_frontpage_pkey PRIMARY KEY (content_id);


--
-- Name: cms_content cms_content_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_content
    ADD CONSTRAINT cms_content_pkey PRIMARY KEY (id);


--
-- Name: cms_content_rating cms_content_rating_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_content_rating
    ADD CONSTRAINT cms_content_rating_pkey PRIMARY KEY (content_id);


--
-- Name: cms_content_types cms_content_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_content_types
    ADD CONSTRAINT cms_content_types_pkey PRIMARY KEY (type_id);


--
-- Name: cms_contentitem_tag_map cms_contentitem_tag_map_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_contentitem_tag_map
    ADD CONSTRAINT cms_contentitem_tag_map_pkey PRIMARY KEY (type_id, content_item_id, tag_id);


--
-- Name: cms_extensions cms_extensions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_extensions
    ADD CONSTRAINT cms_extensions_pkey PRIMARY KEY (extension_id);


--
-- Name: cms_fields_categories cms_fields_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_fields_categories
    ADD CONSTRAINT cms_fields_categories_pkey PRIMARY KEY (field_id, category_id);


--
-- Name: cms_fields_groups cms_fields_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_fields_groups
    ADD CONSTRAINT cms_fields_groups_pkey PRIMARY KEY (id);


--
-- Name: cms_fields cms_fields_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_fields
    ADD CONSTRAINT cms_fields_pkey PRIMARY KEY (id);


--
-- Name: cms_finder_filters cms_finder_filters_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_filters
    ADD CONSTRAINT cms_finder_filters_pkey PRIMARY KEY (filter_id);


--
-- Name: cms_finder_links cms_finder_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_links
    ADD CONSTRAINT cms_finder_links_pkey PRIMARY KEY (link_id);


--
-- Name: cms_finder_links_terms cms_finder_links_terms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_links_terms
    ADD CONSTRAINT cms_finder_links_terms_pkey PRIMARY KEY (link_id, term_id);


--
-- Name: cms_finder_logging cms_finder_logging_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_logging
    ADD CONSTRAINT cms_finder_logging_pkey PRIMARY KEY (md5sum);


--
-- Name: cms_finder_taxonomy_map cms_finder_taxonomy_map_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_taxonomy_map
    ADD CONSTRAINT cms_finder_taxonomy_map_pkey PRIMARY KEY (link_id, node_id);


--
-- Name: cms_finder_taxonomy cms_finder_taxonomy_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_taxonomy
    ADD CONSTRAINT cms_finder_taxonomy_pkey PRIMARY KEY (id);


--
-- Name: cms_finder_terms_common cms_finder_terms_common_idx_term_language; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_terms_common
    ADD CONSTRAINT cms_finder_terms_common_idx_term_language UNIQUE (term, language);


--
-- Name: cms_finder_terms cms_finder_terms_idx_term_language; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_terms
    ADD CONSTRAINT cms_finder_terms_idx_term_language UNIQUE (term, language);


--
-- Name: cms_finder_terms cms_finder_terms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_terms
    ADD CONSTRAINT cms_finder_terms_pkey PRIMARY KEY (term_id);


--
-- Name: cms_finder_types cms_finder_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_types
    ADD CONSTRAINT cms_finder_types_pkey PRIMARY KEY (id);


--
-- Name: cms_finder_types cms_finder_types_title; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_finder_types
    ADD CONSTRAINT cms_finder_types_title UNIQUE (title);


--
-- Name: cms_history cms_history_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_history
    ADD CONSTRAINT cms_history_pkey PRIMARY KEY (version_id);


--
-- Name: cms_languages cms_languages_idx_langcode; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_languages
    ADD CONSTRAINT cms_languages_idx_langcode UNIQUE (lang_code);


--
-- Name: cms_languages cms_languages_idx_sef; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_languages
    ADD CONSTRAINT cms_languages_idx_sef UNIQUE (sef);


--
-- Name: cms_languages cms_languages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_languages
    ADD CONSTRAINT cms_languages_pkey PRIMARY KEY (lang_id);


--
-- Name: cms_mail_templates cms_mail_templates_idx_template_id_language; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_mail_templates
    ADD CONSTRAINT cms_mail_templates_idx_template_id_language UNIQUE (template_id, language);


--
-- Name: cms_menu cms_menu_idx_client_id_parent_id_alias_language; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_menu
    ADD CONSTRAINT cms_menu_idx_client_id_parent_id_alias_language UNIQUE (client_id, parent_id, alias, language);


--
-- Name: cms_menu cms_menu_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_menu
    ADD CONSTRAINT cms_menu_pkey PRIMARY KEY (id);


--
-- Name: cms_menu_types cms_menu_types_idx_menutype; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_menu_types
    ADD CONSTRAINT cms_menu_types_idx_menutype UNIQUE (menutype);


--
-- Name: cms_menu_types cms_menu_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_menu_types
    ADD CONSTRAINT cms_menu_types_pkey PRIMARY KEY (id);


--
-- Name: cms_messages_cfg cms_messages_cfg_idx_user_var_name; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_messages_cfg
    ADD CONSTRAINT cms_messages_cfg_idx_user_var_name UNIQUE (user_id, cfg_name);


--
-- Name: cms_messages cms_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_messages
    ADD CONSTRAINT cms_messages_pkey PRIMARY KEY (message_id);


--
-- Name: cms_modules_menu cms_modules_menu_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_modules_menu
    ADD CONSTRAINT cms_modules_menu_pkey PRIMARY KEY (moduleid, menuid);


--
-- Name: cms_modules cms_modules_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_modules
    ADD CONSTRAINT cms_modules_pkey PRIMARY KEY (id);


--
-- Name: cms_newsfeeds cms_newsfeeds_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_newsfeeds
    ADD CONSTRAINT cms_newsfeeds_pkey PRIMARY KEY (id);


--
-- Name: cms_overrider cms_overrider_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_overrider
    ADD CONSTRAINT cms_overrider_pkey PRIMARY KEY (id);


--
-- Name: cms_postinstall_messages cms_postinstall_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_postinstall_messages
    ADD CONSTRAINT cms_postinstall_messages_pkey PRIMARY KEY (postinstall_message_id);


--
-- Name: cms_privacy_consents cms_privacy_consents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_privacy_consents
    ADD CONSTRAINT cms_privacy_consents_pkey PRIMARY KEY (id);


--
-- Name: cms_privacy_requests cms_privacy_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_privacy_requests
    ADD CONSTRAINT cms_privacy_requests_pkey PRIMARY KEY (id);


--
-- Name: cms_redirect_links cms_redirect_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_redirect_links
    ADD CONSTRAINT cms_redirect_links_pkey PRIMARY KEY (id);


--
-- Name: cms_scheduler_tasks cms_scheduler_tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_scheduler_tasks
    ADD CONSTRAINT cms_scheduler_tasks_pkey PRIMARY KEY (id);


--
-- Name: cms_schemas cms_schemas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_schemas
    ADD CONSTRAINT cms_schemas_pkey PRIMARY KEY (extension_id, version_id);


--
-- Name: cms_session cms_session_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_session
    ADD CONSTRAINT cms_session_pkey PRIMARY KEY (session_id);


--
-- Name: cms_tags cms_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_tags
    ADD CONSTRAINT cms_tags_pkey PRIMARY KEY (id);


--
-- Name: cms_template_overrides cms_template_overrides_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_template_overrides
    ADD CONSTRAINT cms_template_overrides_pkey PRIMARY KEY (id);


--
-- Name: cms_template_styles cms_template_styles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_template_styles
    ADD CONSTRAINT cms_template_styles_pkey PRIMARY KEY (id);


--
-- Name: cms_ucm_base cms_ucm_base_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_ucm_base
    ADD CONSTRAINT cms_ucm_base_pkey PRIMARY KEY (ucm_id);


--
-- Name: cms_ucm_content cms_ucm_content_idx_type_alias_item_id; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_ucm_content
    ADD CONSTRAINT cms_ucm_content_idx_type_alias_item_id UNIQUE (core_type_alias, core_content_item_id);


--
-- Name: cms_ucm_content cms_ucm_content_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_ucm_content
    ADD CONSTRAINT cms_ucm_content_pkey PRIMARY KEY (core_content_id);


--
-- Name: cms_update_sites_extensions cms_update_sites_extensions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_update_sites_extensions
    ADD CONSTRAINT cms_update_sites_extensions_pkey PRIMARY KEY (update_site_id, extension_id);


--
-- Name: cms_update_sites cms_update_sites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_update_sites
    ADD CONSTRAINT cms_update_sites_pkey PRIMARY KEY (update_site_id);


--
-- Name: cms_updates cms_updates_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_updates
    ADD CONSTRAINT cms_updates_pkey PRIMARY KEY (update_id);


--
-- Name: cms_user_keys cms_user_keys_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_user_keys
    ADD CONSTRAINT cms_user_keys_pkey PRIMARY KEY (id);


--
-- Name: cms_user_keys cms_user_keys_series; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_user_keys
    ADD CONSTRAINT cms_user_keys_series UNIQUE (series);


--
-- Name: cms_user_notes cms_user_notes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_user_notes
    ADD CONSTRAINT cms_user_notes_pkey PRIMARY KEY (id);


--
-- Name: cms_user_profiles cms_user_profiles_idx_user_id_profile_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_user_profiles
    ADD CONSTRAINT cms_user_profiles_idx_user_id_profile_key UNIQUE (user_id, profile_key);


--
-- Name: cms_user_usergroup_map cms_user_usergroup_map_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_user_usergroup_map
    ADD CONSTRAINT cms_user_usergroup_map_pkey PRIMARY KEY (user_id, group_id);


--
-- Name: cms_usergroups cms_usergroups_idx_usergroup_parent_title_lookup; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_usergroups
    ADD CONSTRAINT cms_usergroups_idx_usergroup_parent_title_lookup UNIQUE (parent_id, title);


--
-- Name: cms_usergroups cms_usergroups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_usergroups
    ADD CONSTRAINT cms_usergroups_pkey PRIMARY KEY (id);


--
-- Name: cms_users cms_users_idx_username; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_users
    ADD CONSTRAINT cms_users_idx_username UNIQUE (username);


--
-- Name: cms_users cms_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_users
    ADD CONSTRAINT cms_users_pkey PRIMARY KEY (id);


--
-- Name: cms_viewlevels cms_viewlevels_idx_assetgroup_title_lookup; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_viewlevels
    ADD CONSTRAINT cms_viewlevels_idx_assetgroup_title_lookup UNIQUE (title);


--
-- Name: cms_viewlevels cms_viewlevels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_viewlevels
    ADD CONSTRAINT cms_viewlevels_pkey PRIMARY KEY (id);


--
-- Name: cms_webauthn_credentials cms_webauthn_credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_webauthn_credentials
    ADD CONSTRAINT cms_webauthn_credentials_pkey PRIMARY KEY (id);


--
-- Name: cms_workflow_associations cms_workflow_associations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_workflow_associations
    ADD CONSTRAINT cms_workflow_associations_pkey PRIMARY KEY (item_id, extension);


--
-- Name: cms_workflow_stages cms_workflow_stages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_workflow_stages
    ADD CONSTRAINT cms_workflow_stages_pkey PRIMARY KEY (id);


--
-- Name: cms_workflow_transitions cms_workflow_transitions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_workflow_transitions
    ADD CONSTRAINT cms_workflow_transitions_pkey PRIMARY KEY (id);


--
-- Name: cms_workflows cms_workflows_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cms_workflows
    ADD CONSTRAINT cms_workflows_pkey PRIMARY KEY (id);


--
-- Name: _cms_finder_tokens_aggregate_keyword_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _cms_finder_tokens_aggregate_keyword_id ON public.cms_finder_tokens_aggregate USING btree (term_id);


--
-- Name: cms_action_logs_idx_extension_itemid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_action_logs_idx_extension_itemid ON public.cms_action_logs USING btree (extension, item_id);


--
-- Name: cms_action_logs_idx_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_action_logs_idx_user_id ON public.cms_action_logs USING btree (user_id);


--
-- Name: cms_action_logs_idx_user_id_extension; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_action_logs_idx_user_id_extension ON public.cms_action_logs USING btree (user_id, extension);


--
-- Name: cms_action_logs_idx_user_id_logdate; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_action_logs_idx_user_id_logdate ON public.cms_action_logs USING btree (user_id, log_date);


--
-- Name: cms_action_logs_users_idx_notify; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_action_logs_users_idx_notify ON public.cms_action_logs_users USING btree (notify);


--
-- Name: cms_assets_idx_lft_rgt; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_assets_idx_lft_rgt ON public.cms_assets USING btree (lft, rgt);


--
-- Name: cms_assets_idx_parent_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_assets_idx_parent_id ON public.cms_assets USING btree (parent_id);


--
-- Name: cms_associations_idx_key; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_associations_idx_key ON public.cms_associations USING btree (key);


--
-- Name: cms_banner_clients_idx_metakey_prefix; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banner_clients_idx_metakey_prefix ON public.cms_banner_clients USING btree (metakey_prefix);


--
-- Name: cms_banner_clients_idx_own_prefix; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banner_clients_idx_own_prefix ON public.cms_banner_clients USING btree (own_prefix);


--
-- Name: cms_banner_tracks_idx_banner_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banner_tracks_idx_banner_id ON public.cms_banner_tracks USING btree (banner_id);


--
-- Name: cms_banner_tracks_idx_track_date; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banner_tracks_idx_track_date ON public.cms_banner_tracks USING btree (track_date);


--
-- Name: cms_banner_tracks_idx_track_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banner_tracks_idx_track_type ON public.cms_banner_tracks USING btree (track_type);


--
-- Name: cms_banners_idx_banner_catid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banners_idx_banner_catid ON public.cms_banners USING btree (catid);


--
-- Name: cms_banners_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banners_idx_language ON public.cms_banners USING btree (language);


--
-- Name: cms_banners_idx_metakey_prefix; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banners_idx_metakey_prefix ON public.cms_banners USING btree (metakey_prefix);


--
-- Name: cms_banners_idx_own_prefix; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banners_idx_own_prefix ON public.cms_banners USING btree (own_prefix);


--
-- Name: cms_banners_idx_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_banners_idx_state ON public.cms_banners USING btree (state);


--
-- Name: cms_categories_cat_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_categories_cat_idx ON public.cms_categories USING btree (extension, published, access);


--
-- Name: cms_categories_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_categories_idx_access ON public.cms_categories USING btree (access);


--
-- Name: cms_categories_idx_alias; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_categories_idx_alias ON public.cms_categories USING btree (alias);


--
-- Name: cms_categories_idx_checkout; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_categories_idx_checkout ON public.cms_categories USING btree (checked_out);


--
-- Name: cms_categories_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_categories_idx_language ON public.cms_categories USING btree (language);


--
-- Name: cms_categories_idx_left_right; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_categories_idx_left_right ON public.cms_categories USING btree (lft, rgt);


--
-- Name: cms_categories_idx_path; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_categories_idx_path ON public.cms_categories USING btree (path);


--
-- Name: cms_contact_details_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contact_details_idx_access ON public.cms_contact_details USING btree (access);


--
-- Name: cms_contact_details_idx_catid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contact_details_idx_catid ON public.cms_contact_details USING btree (catid);


--
-- Name: cms_contact_details_idx_checkout; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contact_details_idx_checkout ON public.cms_contact_details USING btree (checked_out);


--
-- Name: cms_contact_details_idx_createdby; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contact_details_idx_createdby ON public.cms_contact_details USING btree (created_by);


--
-- Name: cms_contact_details_idx_featured_catid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contact_details_idx_featured_catid ON public.cms_contact_details USING btree (featured, catid);


--
-- Name: cms_contact_details_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contact_details_idx_language ON public.cms_contact_details USING btree (language);


--
-- Name: cms_contact_details_idx_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contact_details_idx_state ON public.cms_contact_details USING btree (published);


--
-- Name: cms_content_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_access ON public.cms_content USING btree (access);


--
-- Name: cms_content_idx_alias; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_alias ON public.cms_content USING btree (alias);


--
-- Name: cms_content_idx_catid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_catid ON public.cms_content USING btree (catid);


--
-- Name: cms_content_idx_checkout; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_checkout ON public.cms_content USING btree (checked_out);


--
-- Name: cms_content_idx_createdby; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_createdby ON public.cms_content USING btree (created_by);


--
-- Name: cms_content_idx_featured_catid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_featured_catid ON public.cms_content USING btree (featured, catid);


--
-- Name: cms_content_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_language ON public.cms_content USING btree (language);


--
-- Name: cms_content_idx_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_idx_state ON public.cms_content USING btree (state);


--
-- Name: cms_content_types_idx_alias; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_content_types_idx_alias ON public.cms_content_types USING btree (type_alias);


--
-- Name: cms_contentitem_tag_map_idx_core_content_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contentitem_tag_map_idx_core_content_id ON public.cms_contentitem_tag_map USING btree (core_content_id);


--
-- Name: cms_contentitem_tag_map_idx_date_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contentitem_tag_map_idx_date_id ON public.cms_contentitem_tag_map USING btree (tag_date, tag_id);


--
-- Name: cms_contentitem_tag_map_idx_tag_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_contentitem_tag_map_idx_tag_type ON public.cms_contentitem_tag_map USING btree (tag_id, type_id);


--
-- Name: cms_extensions_element_clientid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_extensions_element_clientid ON public.cms_extensions USING btree (element, client_id);


--
-- Name: cms_extensions_element_folder_clientid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_extensions_element_folder_clientid ON public.cms_extensions USING btree (element, folder, client_id);


--
-- Name: cms_extensions_extension; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_extensions_extension ON public.cms_extensions USING btree (type, element, folder, client_id);


--
-- Name: cms_fields_groups_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_groups_idx_access ON public.cms_fields_groups USING btree (access);


--
-- Name: cms_fields_groups_idx_checked_out; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_groups_idx_checked_out ON public.cms_fields_groups USING btree (checked_out);


--
-- Name: cms_fields_groups_idx_context; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_groups_idx_context ON public.cms_fields_groups USING btree (context);


--
-- Name: cms_fields_groups_idx_created_by; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_groups_idx_created_by ON public.cms_fields_groups USING btree (created_by);


--
-- Name: cms_fields_groups_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_groups_idx_language ON public.cms_fields_groups USING btree (language);


--
-- Name: cms_fields_groups_idx_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_groups_idx_state ON public.cms_fields_groups USING btree (state);


--
-- Name: cms_fields_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_idx_access ON public.cms_fields USING btree (access);


--
-- Name: cms_fields_idx_checked_out; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_idx_checked_out ON public.cms_fields USING btree (checked_out);


--
-- Name: cms_fields_idx_context; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_idx_context ON public.cms_fields USING btree (context);


--
-- Name: cms_fields_idx_created_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_idx_created_user_id ON public.cms_fields USING btree (created_user_id);


--
-- Name: cms_fields_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_idx_language ON public.cms_fields USING btree (language);


--
-- Name: cms_fields_idx_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_idx_state ON public.cms_fields USING btree (state);


--
-- Name: cms_fields_values_idx_field_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_values_idx_field_id ON public.cms_fields_values USING btree (field_id);


--
-- Name: cms_fields_values_idx_item_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_fields_values_idx_item_id ON public.cms_fields_values USING btree (item_id);


--
-- Name: cms_finder_links_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_idx_language ON public.cms_finder_links USING btree (language);


--
-- Name: cms_finder_links_idx_md5; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_idx_md5 ON public.cms_finder_links USING btree (md5sum);


--
-- Name: cms_finder_links_idx_published_list; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_idx_published_list ON public.cms_finder_links USING btree (published, state, access, publish_start_date, publish_end_date, list_price);


--
-- Name: cms_finder_links_idx_published_sale; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_idx_published_sale ON public.cms_finder_links USING btree (published, state, access, publish_start_date, publish_end_date, sale_price);


--
-- Name: cms_finder_links_idx_title; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_idx_title ON public.cms_finder_links USING btree (title);


--
-- Name: cms_finder_links_idx_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_idx_type ON public.cms_finder_links USING btree (type_id);


--
-- Name: cms_finder_links_idx_url; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_idx_url ON public.cms_finder_links USING btree (substr((url)::text, 0, 76));


--
-- Name: cms_finder_links_terms_idx_link_term_weight; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_terms_idx_link_term_weight ON public.cms_finder_links_terms USING btree (link_id, term_id, weight);


--
-- Name: cms_finder_links_terms_idx_term_weight; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_links_terms_idx_term_weight ON public.cms_finder_links_terms USING btree (term_id, weight);


--
-- Name: cms_finder_logging_idx_md5sum; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_logging_idx_md5sum ON public.cms_finder_logging USING btree (md5sum);


--
-- Name: cms_finder_logging_idx_searchterm; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_logging_idx_searchterm ON public.cms_finder_logging USING btree (searchterm);


--
-- Name: cms_finder_taxonomy_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_access ON public.cms_finder_taxonomy USING btree (access);


--
-- Name: cms_finder_taxonomy_alias; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_alias ON public.cms_finder_taxonomy USING btree (alias);


--
-- Name: cms_finder_taxonomy_idx_parent_published; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_idx_parent_published ON public.cms_finder_taxonomy USING btree (parent_id, state, access);


--
-- Name: cms_finder_taxonomy_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_language ON public.cms_finder_taxonomy USING btree (language);


--
-- Name: cms_finder_taxonomy_level; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_level ON public.cms_finder_taxonomy USING btree (level);


--
-- Name: cms_finder_taxonomy_lft_rgt; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_lft_rgt ON public.cms_finder_taxonomy USING btree (lft, rgt);


--
-- Name: cms_finder_taxonomy_map_link_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_map_link_id ON public.cms_finder_taxonomy_map USING btree (link_id);


--
-- Name: cms_finder_taxonomy_map_node_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_map_node_id ON public.cms_finder_taxonomy_map USING btree (node_id);


--
-- Name: cms_finder_taxonomy_path; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_path ON public.cms_finder_taxonomy USING btree (path);


--
-- Name: cms_finder_taxonomy_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_taxonomy_state ON public.cms_finder_taxonomy USING btree (state);


--
-- Name: cms_finder_terms_common_idx_lang; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_terms_common_idx_lang ON public.cms_finder_terms_common USING btree (language);


--
-- Name: cms_finder_terms_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_terms_idx_language ON public.cms_finder_terms USING btree (language);


--
-- Name: cms_finder_terms_idx_soundex_phrase; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_terms_idx_soundex_phrase ON public.cms_finder_terms USING btree (soundex, phrase);


--
-- Name: cms_finder_terms_idx_stem_phrase; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_terms_idx_stem_phrase ON public.cms_finder_terms USING btree (stem, phrase);


--
-- Name: cms_finder_terms_idx_term_phrase; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_terms_idx_term_phrase ON public.cms_finder_terms USING btree (term, phrase);


--
-- Name: cms_finder_tokens_aggregate_token; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_tokens_aggregate_token ON public.cms_finder_tokens_aggregate USING btree (term);


--
-- Name: cms_finder_tokens_idx_context; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_tokens_idx_context ON public.cms_finder_tokens USING btree (context);


--
-- Name: cms_finder_tokens_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_tokens_idx_language ON public.cms_finder_tokens USING btree (language);


--
-- Name: cms_finder_tokens_idx_stem; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_tokens_idx_stem ON public.cms_finder_tokens USING btree (stem);


--
-- Name: cms_finder_tokens_idx_word; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_finder_tokens_idx_word ON public.cms_finder_tokens USING btree (term);


--
-- Name: cms_history_idx_save_date; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_history_idx_save_date ON public.cms_history USING btree (save_date);


--
-- Name: cms_history_idx_ucm_item_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_history_idx_ucm_item_id ON public.cms_history USING btree (item_id);


--
-- Name: cms_languages_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_languages_idx_access ON public.cms_languages USING btree (access);


--
-- Name: cms_languages_idx_ordering; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_languages_idx_ordering ON public.cms_languages USING btree (ordering);


--
-- Name: cms_mail_templates_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_mail_templates_idx_language ON public.cms_mail_templates USING btree (language);


--
-- Name: cms_mail_templates_idx_template_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_mail_templates_idx_template_id ON public.cms_mail_templates USING btree (template_id);


--
-- Name: cms_menu_idx_alias; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_menu_idx_alias ON public.cms_menu USING btree (alias);


--
-- Name: cms_menu_idx_componentid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_menu_idx_componentid ON public.cms_menu USING btree (component_id, menutype, published, access);


--
-- Name: cms_menu_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_menu_idx_language ON public.cms_menu USING btree (language);


--
-- Name: cms_menu_idx_left_right; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_menu_idx_left_right ON public.cms_menu USING btree (lft, rgt);


--
-- Name: cms_menu_idx_menutype; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_menu_idx_menutype ON public.cms_menu USING btree (menutype);


--
-- Name: cms_menu_idx_path; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_menu_idx_path ON public.cms_menu USING btree (path);


--
-- Name: cms_messages_useridto_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_messages_useridto_state ON public.cms_messages USING btree (user_id_to, state);


--
-- Name: cms_modules_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_modules_idx_language ON public.cms_modules USING btree (language);


--
-- Name: cms_modules_newsfeeds; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_modules_newsfeeds ON public.cms_modules USING btree (module, published);


--
-- Name: cms_modules_published; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_modules_published ON public.cms_modules USING btree (published, access);


--
-- Name: cms_newsfeeds_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_newsfeeds_idx_access ON public.cms_newsfeeds USING btree (access);


--
-- Name: cms_newsfeeds_idx_catid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_newsfeeds_idx_catid ON public.cms_newsfeeds USING btree (catid);


--
-- Name: cms_newsfeeds_idx_checkout; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_newsfeeds_idx_checkout ON public.cms_newsfeeds USING btree (checked_out);


--
-- Name: cms_newsfeeds_idx_createdby; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_newsfeeds_idx_createdby ON public.cms_newsfeeds USING btree (created_by);


--
-- Name: cms_newsfeeds_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_newsfeeds_idx_language ON public.cms_newsfeeds USING btree (language);


--
-- Name: cms_newsfeeds_idx_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_newsfeeds_idx_state ON public.cms_newsfeeds USING btree (published);


--
-- Name: cms_privacy_consents_idx_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_privacy_consents_idx_user_id ON public.cms_privacy_consents USING btree (user_id);


--
-- Name: cms_redirect_links_idx_link_modified; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_redirect_links_idx_link_modified ON public.cms_redirect_links USING btree (modified_date);


--
-- Name: cms_redirect_links_idx_old_url; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_redirect_links_idx_old_url ON public.cms_redirect_links USING btree (old_url);


--
-- Name: cms_scheduler_tasks_idx_checked_out; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_checked_out ON public.cms_scheduler_tasks USING btree (checked_out);


--
-- Name: cms_scheduler_tasks_idx_cli_exclusive; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_cli_exclusive ON public.cms_scheduler_tasks USING btree (cli_exclusive);


--
-- Name: cms_scheduler_tasks_idx_last_exit; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_last_exit ON public.cms_scheduler_tasks USING btree (last_exit_code);


--
-- Name: cms_scheduler_tasks_idx_locked; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_locked ON public.cms_scheduler_tasks USING btree (locked);


--
-- Name: cms_scheduler_tasks_idx_next_exec; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_next_exec ON public.cms_scheduler_tasks USING btree (next_execution);


--
-- Name: cms_scheduler_tasks_idx_priority; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_priority ON public.cms_scheduler_tasks USING btree (priority);


--
-- Name: cms_scheduler_tasks_idx_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_state ON public.cms_scheduler_tasks USING btree (state);


--
-- Name: cms_scheduler_tasks_idx_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_scheduler_tasks_idx_type ON public.cms_scheduler_tasks USING btree (type);


--
-- Name: cms_session_idx_client_id_guest; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_session_idx_client_id_guest ON public.cms_session USING btree (client_id, guest);


--
-- Name: cms_session_time; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_session_time ON public.cms_session USING btree ("time");


--
-- Name: cms_session_userid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_session_userid ON public.cms_session USING btree (userid);


--
-- Name: cms_tags_cat_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_tags_cat_idx ON public.cms_tags USING btree (published, access);


--
-- Name: cms_tags_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_tags_idx_access ON public.cms_tags USING btree (access);


--
-- Name: cms_tags_idx_alias; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_tags_idx_alias ON public.cms_tags USING btree (alias);


--
-- Name: cms_tags_idx_checkout; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_tags_idx_checkout ON public.cms_tags USING btree (checked_out);


--
-- Name: cms_tags_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_tags_idx_language ON public.cms_tags USING btree (language);


--
-- Name: cms_tags_idx_left_right; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_tags_idx_left_right ON public.cms_tags USING btree (lft, rgt);


--
-- Name: cms_tags_idx_path; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_tags_idx_path ON public.cms_tags USING btree (path);


--
-- Name: cms_template_overrides_idx_extension_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_template_overrides_idx_extension_id ON public.cms_template_overrides USING btree (extension_id);


--
-- Name: cms_template_overrides_idx_template; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_template_overrides_idx_template ON public.cms_template_overrides USING btree (template);


--
-- Name: cms_template_styles_idx_client_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_template_styles_idx_client_id ON public.cms_template_styles USING btree (client_id);


--
-- Name: cms_template_styles_idx_client_id_home; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_template_styles_idx_client_id_home ON public.cms_template_styles USING btree (client_id, home);


--
-- Name: cms_template_styles_idx_template; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_template_styles_idx_template ON public.cms_template_styles USING btree (template);


--
-- Name: cms_ucm_base_ucm_item_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_base_ucm_item_id ON public.cms_ucm_base USING btree (ucm_item_id);


--
-- Name: cms_ucm_base_ucm_language_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_base_ucm_language_id ON public.cms_ucm_base USING btree (ucm_language_id);


--
-- Name: cms_ucm_base_ucm_type_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_base_ucm_type_id ON public.cms_ucm_base USING btree (ucm_type_id);


--
-- Name: cms_ucm_content_idx_access; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_access ON public.cms_ucm_content USING btree (core_access);


--
-- Name: cms_ucm_content_idx_alias; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_alias ON public.cms_ucm_content USING btree (core_alias);


--
-- Name: cms_ucm_content_idx_content_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_content_type ON public.cms_ucm_content USING btree (core_type_alias);


--
-- Name: cms_ucm_content_idx_core_checked_out_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_core_checked_out_user_id ON public.cms_ucm_content USING btree (core_checked_out_user_id);


--
-- Name: cms_ucm_content_idx_core_created_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_core_created_user_id ON public.cms_ucm_content USING btree (core_created_user_id);


--
-- Name: cms_ucm_content_idx_core_modified_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_core_modified_user_id ON public.cms_ucm_content USING btree (core_modified_user_id);


--
-- Name: cms_ucm_content_idx_core_type_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_core_type_id ON public.cms_ucm_content USING btree (core_type_id);


--
-- Name: cms_ucm_content_idx_created_time; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_created_time ON public.cms_ucm_content USING btree (core_created_time);


--
-- Name: cms_ucm_content_idx_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_language ON public.cms_ucm_content USING btree (core_language);


--
-- Name: cms_ucm_content_idx_modified_time; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_modified_time ON public.cms_ucm_content USING btree (core_modified_time);


--
-- Name: cms_ucm_content_idx_title; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_idx_title ON public.cms_ucm_content USING btree (core_title);


--
-- Name: cms_ucm_content_tag_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_ucm_content_tag_idx ON public.cms_ucm_content USING btree (core_state, core_access);


--
-- Name: cms_user_keys_idx_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_user_keys_idx_user_id ON public.cms_user_keys USING btree (user_id);


--
-- Name: cms_user_notes_idx_category_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_user_notes_idx_category_id ON public.cms_user_notes USING btree (catid);


--
-- Name: cms_user_notes_idx_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_user_notes_idx_user_id ON public.cms_user_notes USING btree (user_id);


--
-- Name: cms_usergroups_idx_usergroup_adjacency_lookup; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_usergroups_idx_usergroup_adjacency_lookup ON public.cms_usergroups USING btree (parent_id);


--
-- Name: cms_usergroups_idx_usergroup_nested_set_lookup; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_usergroups_idx_usergroup_nested_set_lookup ON public.cms_usergroups USING btree (lft, rgt);


--
-- Name: cms_usergroups_idx_usergroup_title_lookup; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_usergroups_idx_usergroup_title_lookup ON public.cms_usergroups USING btree (title);


--
-- Name: cms_users_email; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_users_email ON public.cms_users USING btree (email);


--
-- Name: cms_users_email_lower; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_users_email_lower ON public.cms_users USING btree (lower((email)::text));


--
-- Name: cms_users_idx_block; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_users_idx_block ON public.cms_users USING btree (block);


--
-- Name: cms_users_idx_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_users_idx_name ON public.cms_users USING btree (name);


--
-- Name: cms_webauthn_credentials_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_webauthn_credentials_user_id ON public.cms_webauthn_credentials USING btree (user_id);


--
-- Name: cms_workflow_associations_idx_extension; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_associations_idx_extension ON public.cms_workflow_associations USING btree (extension);


--
-- Name: cms_workflow_associations_idx_item_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_associations_idx_item_id ON public.cms_workflow_associations USING btree (item_id);


--
-- Name: cms_workflow_associations_idx_item_stage_extension; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_associations_idx_item_stage_extension ON public.cms_workflow_associations USING btree (item_id, stage_id, extension);


--
-- Name: cms_workflow_associations_idx_stage_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_associations_idx_stage_id ON public.cms_workflow_associations USING btree (stage_id);


--
-- Name: cms_workflow_stages_idx_asset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_stages_idx_asset_id ON public.cms_workflow_stages USING btree (asset_id);


--
-- Name: cms_workflow_stages_idx_checked_out; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_stages_idx_checked_out ON public.cms_workflow_stages USING btree (checked_out);


--
-- Name: cms_workflow_stages_idx_default; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_stages_idx_default ON public.cms_workflow_stages USING btree ("default");


--
-- Name: cms_workflow_stages_idx_title; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_stages_idx_title ON public.cms_workflow_stages USING btree (title);


--
-- Name: cms_workflow_stages_idx_workflow_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_stages_idx_workflow_id ON public.cms_workflow_stages USING btree (workflow_id);


--
-- Name: cms_workflow_transitions_idx_asset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_transitions_idx_asset_id ON public.cms_workflow_transitions USING btree (asset_id);


--
-- Name: cms_workflow_transitions_idx_checked_out; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_transitions_idx_checked_out ON public.cms_workflow_transitions USING btree (checked_out);


--
-- Name: cms_workflow_transitions_idx_from_stage_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_transitions_idx_from_stage_id ON public.cms_workflow_transitions USING btree (from_stage_id);


--
-- Name: cms_workflow_transitions_idx_title; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_transitions_idx_title ON public.cms_workflow_transitions USING btree (title);


--
-- Name: cms_workflow_transitions_idx_to_stage_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_transitions_idx_to_stage_id ON public.cms_workflow_transitions USING btree (to_stage_id);


--
-- Name: cms_workflow_transitions_idx_workflow_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflow_transitions_idx_workflow_id ON public.cms_workflow_transitions USING btree (workflow_id);


--
-- Name: cms_workflows_idx_asset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_asset_id ON public.cms_workflows USING btree (asset_id);


--
-- Name: cms_workflows_idx_checked_out; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_checked_out ON public.cms_workflows USING btree (checked_out);


--
-- Name: cms_workflows_idx_created; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_created ON public.cms_workflows USING btree (created);


--
-- Name: cms_workflows_idx_created_by; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_created_by ON public.cms_workflows USING btree (created_by);


--
-- Name: cms_workflows_idx_default; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_default ON public.cms_workflows USING btree ("default");


--
-- Name: cms_workflows_idx_extension; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_extension ON public.cms_workflows USING btree (extension);


--
-- Name: cms_workflows_idx_modified; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_modified ON public.cms_workflows USING btree (modified);


--
-- Name: cms_workflows_idx_modified_by; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_modified_by ON public.cms_workflows USING btree (modified_by);


--
-- Name: cms_workflows_idx_title; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cms_workflows_idx_title ON public.cms_workflows USING btree (title);


--
-- PostgreSQL database dump complete
--

