<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lemon.proto

namespace GPBMetadata;

class Lemon
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\GPBEmpty::initOnce();
        \GPBMetadata\Google\Protobuf\Timestamp::initOnce();
        \GPBMetadata\Google\Protobuf\Duration::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
lemon.protopalm.lemon.v1google/protobuf/timestamp.protogoogle/protobuf/duration.proto"H
SiteLayoutRequest
locale (	#
theme (2.palm.lemon.v1.Theme"�
SiteLayoutResponse6
clean_white (2.palm.lemon.v1.CleanWhiteLayoutH +
docsy (2.palm.lemon.v1.DocsyLayoutH -
gantry (2.palm.lemon.v1.GantryLayoutH -
hinode (2.palm.lemon.v1.HinodeLayoutH 3
	universal (2.palm.lemon.v1.UniversalLayoutH :
x_corporation (2!.palm.lemon.v1.XCorporationLayoutH B
layout"�
SiteRssResponse8
items (2).palm.lemon.v1.SiteRssResponse.ItemsEntry@

ItemsEntry
key (	!
value (2.palm.lemon.v1.Rss:8"�
SiteSitemapResponse<
items (2-.palm.lemon.v1.SiteSitemapResponse.ItemsEntryD

ItemsEntry
key (	%
value (2.palm.lemon.v1.Sitemap:8"#
SiteShowPageRequest
slug (	"�
SiteShowPageResponse!
page (2.palm.lemon.v1.Page9
related (2(.palm.lemon.v1.SiteShowPageResponse.Link#
Link
slug (	
title (	"J
SiteHomePageRequest
locale (	#
theme (2.palm.lemon.v1.Theme"�
SiteHomePageResponse8
clean_white (2!.palm.lemon.v1.CleanWhiteHomePageH -
docsy (2.palm.lemon.v1.DocsyHomePageH /
gantry (2.palm.lemon.v1.GantryHomePageH /
hinode (2.palm.lemon.v1.HinodeHomePageH 5
	universal (2 .palm.lemon.v1.UniversalHomePageH <
x_corporation (2#.palm.lemon.v1.XCorporationHomePageH B	
payload"
CleanWhiteLayout"
DocsyLayout"
GantryLayout"
HinodeLayout"
UniversalLayout"
XCorporationLayout"
CleanWhiteHomePage"
DocsyHomePage"
GantryHomePage"
HinodeHomePage"
UniversalHomePage"
XCorporationHomePage"�
Rss
home (	
title (	
description (	&
links	 (2.palm.lemon.v1.Rss.Linkh
Link
path (	
title (	
description (	.

updated_at	 (2.google.protobuf.Timestamp"�
Sitemap
home (	/
urlset (2.palm.lemon.v1.Sitemap.UrlSetH -
index (2.palm.lemon.v1.Sitemap.IndexH �
Link
path (	;
change_freq (2&.palm.lemon.v1.Sitemap.Link.ChangeFreq
priority (.

updated_at	 (2.google.protobuf.Timestamp"_

ChangeFreq	
Never 

Always

Hourly	
Daily

Weekly
Monthly

Yearly4
UrlSet*
links (2.palm.lemon.v1.Sitemap.Link
Index
links (	B
body"#
Page
slug (	
title (	*[
Theme
	Universal 

CleanWhite	
Docsy

Gantry

Hinode
XCorporation2�
SiteO
Layout .palm.lemon.v1.SiteLayoutRequest!.palm.lemon.v1.SiteLayoutResponse" B
Rss.google.protobuf.Duration.palm.lemon.v1.SiteRssResponse" G
Sitemap.google.protobuf.Empty".palm.lemon.v1.SiteSitemapResponse" U
ShowPage".palm.lemon.v1.SiteShowPageRequest#.palm.lemon.v1.SiteShowPageResponse" U
HomePage".palm.lemon.v1.SiteHomePageRequest#.palm.lemon.v1.SiteHomePageResponse" BS
+com.github.saturn_xiv.palm.plugins.lemon.v1PZ"github.com/saturn_xiv/fig/lemon/v2bproto3'
        , true);

        static::$is_initialized = true;
    }
}

