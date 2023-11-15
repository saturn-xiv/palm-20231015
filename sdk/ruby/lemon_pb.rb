# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lemon.proto

require 'google/protobuf'

require 'google/protobuf/empty_pb'
require 'google/protobuf/timestamp_pb'
require 'google/protobuf/duration_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("lemon.proto", :syntax => :proto3) do
    add_message "palm.lemon.v1.SiteLayoutRequest" do
      optional :locale, :string, 1
      optional :theme, :enum, 2, "palm.lemon.v1.Theme"
    end
    add_message "palm.lemon.v1.SiteLayoutResponse" do
      oneof :layout do
        optional :clean_white, :message, 1, "palm.lemon.v1.CleanWhiteLayout"
        optional :docsy, :message, 2, "palm.lemon.v1.DocsyLayout"
        optional :gantry, :message, 3, "palm.lemon.v1.GantryLayout"
        optional :hinode, :message, 4, "palm.lemon.v1.HinodeLayout"
        optional :universal, :message, 5, "palm.lemon.v1.UniversalLayout"
        optional :x_corporation, :message, 6, "palm.lemon.v1.XCorporationLayout"
      end
    end
    add_message "palm.lemon.v1.SiteRssResponse" do
      map :items, :string, :message, 1, "palm.lemon.v1.Rss"
    end
    add_message "palm.lemon.v1.SiteSitemapResponse" do
      map :items, :string, :message, 1, "palm.lemon.v1.Sitemap"
    end
    add_message "palm.lemon.v1.SiteShowPageRequest" do
      optional :slug, :string, 1
    end
    add_message "palm.lemon.v1.SiteShowPageResponse" do
      optional :page, :message, 1, "palm.lemon.v1.Page"
      repeated :related, :message, 2, "palm.lemon.v1.SiteShowPageResponse.Link"
    end
    add_message "palm.lemon.v1.SiteShowPageResponse.Link" do
      optional :slug, :string, 1
      optional :title, :string, 2
    end
    add_message "palm.lemon.v1.SiteHomePageRequest" do
      optional :locale, :string, 1
      optional :theme, :enum, 2, "palm.lemon.v1.Theme"
    end
    add_message "palm.lemon.v1.SiteHomePageResponse" do
      oneof :payload do
        optional :clean_white, :message, 1, "palm.lemon.v1.CleanWhiteHomePage"
        optional :docsy, :message, 2, "palm.lemon.v1.DocsyHomePage"
        optional :gantry, :message, 3, "palm.lemon.v1.GantryHomePage"
        optional :hinode, :message, 4, "palm.lemon.v1.HinodeHomePage"
        optional :universal, :message, 5, "palm.lemon.v1.UniversalHomePage"
        optional :x_corporation, :message, 6, "palm.lemon.v1.XCorporationHomePage"
      end
    end
    add_message "palm.lemon.v1.CleanWhiteLayout" do
    end
    add_message "palm.lemon.v1.DocsyLayout" do
    end
    add_message "palm.lemon.v1.GantryLayout" do
    end
    add_message "palm.lemon.v1.HinodeLayout" do
    end
    add_message "palm.lemon.v1.UniversalLayout" do
    end
    add_message "palm.lemon.v1.XCorporationLayout" do
    end
    add_message "palm.lemon.v1.CleanWhiteHomePage" do
    end
    add_message "palm.lemon.v1.DocsyHomePage" do
    end
    add_message "palm.lemon.v1.GantryHomePage" do
    end
    add_message "palm.lemon.v1.HinodeHomePage" do
    end
    add_message "palm.lemon.v1.UniversalHomePage" do
    end
    add_message "palm.lemon.v1.XCorporationHomePage" do
    end
    add_message "palm.lemon.v1.Rss" do
      optional :home, :string, 1
      optional :title, :string, 2
      optional :description, :string, 3
      repeated :links, :message, 9, "palm.lemon.v1.Rss.Link"
    end
    add_message "palm.lemon.v1.Rss.Link" do
      optional :path, :string, 1
      optional :title, :string, 2
      optional :description, :string, 3
      optional :updated_at, :message, 9, "google.protobuf.Timestamp"
    end
    add_message "palm.lemon.v1.Sitemap" do
      optional :home, :string, 1
      oneof :body do
        optional :urlset, :message, 11, "palm.lemon.v1.Sitemap.UrlSet"
        optional :index, :message, 12, "palm.lemon.v1.Sitemap.Index"
      end
    end
    add_message "palm.lemon.v1.Sitemap.Link" do
      optional :path, :string, 1
      optional :change_freq, :enum, 2, "palm.lemon.v1.Sitemap.Link.ChangeFreq"
      optional :priority, :float, 3
      optional :updated_at, :message, 9, "google.protobuf.Timestamp"
    end
    add_enum "palm.lemon.v1.Sitemap.Link.ChangeFreq" do
      value :Never, 0
      value :Always, 1
      value :Hourly, 2
      value :Daily, 3
      value :Weekly, 4
      value :Monthly, 5
      value :Yearly, 6
    end
    add_message "palm.lemon.v1.Sitemap.UrlSet" do
      repeated :links, :message, 1, "palm.lemon.v1.Sitemap.Link"
    end
    add_message "palm.lemon.v1.Sitemap.Index" do
      repeated :links, :string, 1
    end
    add_message "palm.lemon.v1.Page" do
      optional :slug, :string, 1
      optional :title, :string, 2
    end
    add_enum "palm.lemon.v1.Theme" do
      value :Universal, 0
      value :CleanWhite, 1
      value :Docsy, 2
      value :Gantry, 3
      value :Hinode, 4
      value :XCorporation, 5
    end
  end
end

module Palm
  module Lemon
    module V1
      SiteLayoutRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteLayoutRequest").msgclass
      SiteLayoutResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteLayoutResponse").msgclass
      SiteRssResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteRssResponse").msgclass
      SiteSitemapResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteSitemapResponse").msgclass
      SiteShowPageRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteShowPageRequest").msgclass
      SiteShowPageResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteShowPageResponse").msgclass
      SiteShowPageResponse::Link = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteShowPageResponse.Link").msgclass
      SiteHomePageRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteHomePageRequest").msgclass
      SiteHomePageResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.SiteHomePageResponse").msgclass
      CleanWhiteLayout = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.CleanWhiteLayout").msgclass
      DocsyLayout = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.DocsyLayout").msgclass
      GantryLayout = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.GantryLayout").msgclass
      HinodeLayout = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.HinodeLayout").msgclass
      UniversalLayout = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.UniversalLayout").msgclass
      XCorporationLayout = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.XCorporationLayout").msgclass
      CleanWhiteHomePage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.CleanWhiteHomePage").msgclass
      DocsyHomePage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.DocsyHomePage").msgclass
      GantryHomePage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.GantryHomePage").msgclass
      HinodeHomePage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.HinodeHomePage").msgclass
      UniversalHomePage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.UniversalHomePage").msgclass
      XCorporationHomePage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.XCorporationHomePage").msgclass
      Rss = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Rss").msgclass
      Rss::Link = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Rss.Link").msgclass
      Sitemap = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Sitemap").msgclass
      Sitemap::Link = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Sitemap.Link").msgclass
      Sitemap::Link::ChangeFreq = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Sitemap.Link.ChangeFreq").enummodule
      Sitemap::UrlSet = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Sitemap.UrlSet").msgclass
      Sitemap::Index = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Sitemap.Index").msgclass
      Page = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Page").msgclass
      Theme = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lemon.v1.Theme").enummodule
    end
  end
end
