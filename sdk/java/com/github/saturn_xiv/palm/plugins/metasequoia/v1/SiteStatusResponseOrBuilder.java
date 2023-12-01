// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface SiteStatusResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.SiteStatusResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.PostgreSql postgresql = 1;</code>
   * @return Whether the postgresql field is set.
   */
  boolean hasPostgresql();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.PostgreSql postgresql = 1;</code>
   * @return The postgresql.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.PostgreSql getPostgresql();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.PostgreSql postgresql = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.PostgreSqlOrBuilder getPostgresqlOrBuilder();

  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.MySql mysql = 2;</code>
   * @return Whether the mysql field is set.
   */
  boolean hasMysql();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.MySql mysql = 2;</code>
   * @return The mysql.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.MySql getMysql();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.MySql mysql = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.MySqlOrBuilder getMysqlOrBuilder();

  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.Redis redis = 3;</code>
   * @return Whether the redis field is set.
   */
  boolean hasRedis();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.Redis redis = 3;</code>
   * @return The redis.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.Redis getRedis();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.Redis redis = 3;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.RedisOrBuilder getRedisOrBuilder();

  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.RabbitMq rabbitmq = 4;</code>
   * @return Whether the rabbitmq field is set.
   */
  boolean hasRabbitmq();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.RabbitMq rabbitmq = 4;</code>
   * @return The rabbitmq.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.RabbitMq getRabbitmq();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.RabbitMq rabbitmq = 4;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.RabbitMqOrBuilder getRabbitmqOrBuilder();

  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.OpenSearch opensearch = 5;</code>
   * @return Whether the opensearch field is set.
   */
  boolean hasOpensearch();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.OpenSearch opensearch = 5;</code>
   * @return The opensearch.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.OpenSearch getOpensearch();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.OpenSearch opensearch = 5;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.OpenSearchOrBuilder getOpensearchOrBuilder();

  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.System system = 11;</code>
   * @return Whether the system field is set.
   */
  boolean hasSystem();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.System system = 11;</code>
   * @return The system.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.System getSystem();
  /**
   * <code>.palm.metasequoia.v1.SiteStatusResponse.System system = 11;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.SystemOrBuilder getSystemOrBuilder();

  /**
   * <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.Health> 
      getHealthesList();
  /**
   * <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.Health getHealthes(int index);
  /**
   * <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
   */
  int getHealthesCount();
  /**
   * <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.HealthOrBuilder> 
      getHealthesOrBuilderList();
  /**
   * <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteStatusResponse.HealthOrBuilder getHealthesOrBuilder(
      int index);
}