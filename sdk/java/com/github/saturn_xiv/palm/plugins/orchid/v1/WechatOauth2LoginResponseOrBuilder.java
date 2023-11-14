// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: orchid.proto

package com.github.saturn_xiv.palm.plugins.orchid.v1;

public interface WechatOauth2LoginResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.orchid.v1.WechatOauth2LoginResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string unionid = 1;</code>
   * @return The unionid.
   */
  java.lang.String getUnionid();
  /**
   * <code>string unionid = 1;</code>
   * @return The bytes for unionid.
   */
  com.google.protobuf.ByteString
      getUnionidBytes();

  /**
   * <code>string openid = 2;</code>
   * @return The openid.
   */
  java.lang.String getOpenid();
  /**
   * <code>string openid = 2;</code>
   * @return The bytes for openid.
   */
  com.google.protobuf.ByteString
      getOpenidBytes();

  /**
   * <code>string nickname = 11;</code>
   * @return The nickname.
   */
  java.lang.String getNickname();
  /**
   * <code>string nickname = 11;</code>
   * @return The bytes for nickname.
   */
  com.google.protobuf.ByteString
      getNicknameBytes();

  /**
   * <code>.palm.orchid.v1.WechatOauth2LoginResponse.Sex sex = 12;</code>
   * @return The enum numeric value on the wire for sex.
   */
  int getSexValue();
  /**
   * <code>.palm.orchid.v1.WechatOauth2LoginResponse.Sex sex = 12;</code>
   * @return The sex.
   */
  com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2LoginResponse.Sex getSex();

  /**
   * <code>string province = 13;</code>
   * @return The province.
   */
  java.lang.String getProvince();
  /**
   * <code>string province = 13;</code>
   * @return The bytes for province.
   */
  com.google.protobuf.ByteString
      getProvinceBytes();

  /**
   * <code>string city = 14;</code>
   * @return The city.
   */
  java.lang.String getCity();
  /**
   * <code>string city = 14;</code>
   * @return The bytes for city.
   */
  com.google.protobuf.ByteString
      getCityBytes();

  /**
   * <code>string country = 15;</code>
   * @return The country.
   */
  java.lang.String getCountry();
  /**
   * <code>string country = 15;</code>
   * @return The bytes for country.
   */
  com.google.protobuf.ByteString
      getCountryBytes();

  /**
   * <code>optional string headimgurl = 16;</code>
   * @return Whether the headimgurl field is set.
   */
  boolean hasHeadimgurl();
  /**
   * <code>optional string headimgurl = 16;</code>
   * @return The headimgurl.
   */
  java.lang.String getHeadimgurl();
  /**
   * <code>optional string headimgurl = 16;</code>
   * @return The bytes for headimgurl.
   */
  com.google.protobuf.ByteString
      getHeadimgurlBytes();

  /**
   * <code>repeated string privilege = 17;</code>
   * @return A list containing the privilege.
   */
  java.util.List<java.lang.String>
      getPrivilegeList();
  /**
   * <code>repeated string privilege = 17;</code>
   * @return The count of privilege.
   */
  int getPrivilegeCount();
  /**
   * <code>repeated string privilege = 17;</code>
   * @param index The index of the element to return.
   * @return The privilege at the given index.
   */
  java.lang.String getPrivilege(int index);
  /**
   * <code>repeated string privilege = 17;</code>
   * @param index The index of the value to return.
   * @return The bytes of the privilege at the given index.
   */
  com.google.protobuf.ByteString
      getPrivilegeBytes(int index);
}
