// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: lemon.proto

package com.github.saturn_xiv.palm.plugins.lemon.v1;

public interface SitemapOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.lemon.v1.Sitemap)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string home = 1;</code>
   * @return The home.
   */
  java.lang.String getHome();
  /**
   * <code>string home = 1;</code>
   * @return The bytes for home.
   */
  com.google.protobuf.ByteString
      getHomeBytes();

  /**
   * <code>.palm.lemon.v1.Sitemap.UrlSet urlset = 11;</code>
   * @return Whether the urlset field is set.
   */
  boolean hasUrlset();
  /**
   * <code>.palm.lemon.v1.Sitemap.UrlSet urlset = 11;</code>
   * @return The urlset.
   */
  com.github.saturn_xiv.palm.plugins.lemon.v1.Sitemap.UrlSet getUrlset();
  /**
   * <code>.palm.lemon.v1.Sitemap.UrlSet urlset = 11;</code>
   */
  com.github.saturn_xiv.palm.plugins.lemon.v1.Sitemap.UrlSetOrBuilder getUrlsetOrBuilder();

  /**
   * <code>.palm.lemon.v1.Sitemap.Index index = 12;</code>
   * @return Whether the index field is set.
   */
  boolean hasIndex();
  /**
   * <code>.palm.lemon.v1.Sitemap.Index index = 12;</code>
   * @return The index.
   */
  com.github.saturn_xiv.palm.plugins.lemon.v1.Sitemap.Index getIndex();
  /**
   * <code>.palm.lemon.v1.Sitemap.Index index = 12;</code>
   */
  com.github.saturn_xiv.palm.plugins.lemon.v1.Sitemap.IndexOrBuilder getIndexOrBuilder();

  com.github.saturn_xiv.palm.plugins.lemon.v1.Sitemap.BodyCase getBodyCase();
}
