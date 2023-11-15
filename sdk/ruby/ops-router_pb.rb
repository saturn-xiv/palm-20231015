# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto

require 'google/protobuf'

require 'google/protobuf/empty_pb'
require 'google/protobuf/timestamp_pb'
require 'google/protobuf/duration_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("ops-router.proto", :syntax => :proto3) do
    add_message "palm.ops.router.v1.Contact" do
      proto3_optional :phone, :string, 1
      proto3_optional :wechat, :string, 2
      proto3_optional :email, :string, 3
      proto3_optional :address, :string, 99
    end
    add_message "palm.ops.router.v1.RouterSetLanRequest" do
      optional :payload, :message, 1, "palm.ops.router.v1.Lan"
      optional :enable, :bool, 2
    end
    add_message "palm.ops.router.v1.RouterSetDmzRequest" do
      optional :payload, :message, 1, "palm.ops.router.v1.Dmz"
      optional :enable, :bool, 2
    end
    add_message "palm.ops.router.v1.RouterSetWanRequest" do
      optional :payload, :message, 1, "palm.ops.router.v1.Wan"
      optional :enable, :bool, 2
    end
    add_message "palm.ops.router.v1.WanPool" do
      repeated :items, :message, 1, "palm.ops.router.v1.WanPool.Item"
    end
    add_message "palm.ops.router.v1.WanPool.Item" do
      optional :device, :string, 1
      optional :weight, :uint32, 2
    end
    add_message "palm.ops.router.v1.RouterCreateUserRequest" do
      optional :name, :string, 1
      optional :contact, :message, 2, "palm.ops.router.v1.Contact"
    end
    add_message "palm.ops.router.v1.RouterIndexUserResponse" do
      repeated :items, :message, 1, "palm.ops.router.v1.RouterIndexUserResponse.Item"
    end
    add_message "palm.ops.router.v1.RouterIndexUserResponse.Item" do
      optional :id, :int32, 1
      optional :name, :string, 2
      optional :contact, :message, 3, "palm.ops.router.v1.Contact"
    end
    add_message "palm.ops.router.v1.RouterUpdateHostRequest" do
      optional :id, :int32, 1
      optional :user, :int32, 2
      optional :group, :string, 3
      optional :ip, :string, 4
      optional :fixed, :bool, 5
      optional :zone, :string, 8
      proto3_optional :location, :string, 9
    end
    add_message "palm.ops.router.v1.RouterIndexRuleResponse" do
      repeated :items, :message, 1, "palm.ops.router.v1.RouterIndexRuleResponse.Item"
    end
    add_message "palm.ops.router.v1.RouterIndexRuleResponse.Item" do
      optional :id, :int32, 1
      optional :name, :string, 2
      optional :group, :string, 3
      oneof :payload do
        optional :in, :message, 11, "palm.ops.router.v1.Rule.InBound"
        optional :out, :message, 12, "palm.ops.router.v1.Rule.OutBound"
        optional :nat, :message, 13, "palm.ops.router.v1.Rule.Nat"
      end
    end
    add_message "palm.ops.router.v1.Host" do
      optional :id, :int32, 1
      optional :name, :string, 2
      optional :mac, :string, 3
      optional :ip, :string, 4
      optional :fixed, :bool, 5
      optional :group, :string, 9
      proto3_optional :location, :string, 11
      optional :owner, :message, 12, "palm.ops.router.v1.Host.Owner"
    end
    add_message "palm.ops.router.v1.Host.Owner" do
      optional :name, :string, 1
      optional :contact, :message, 2, "palm.ops.router.v1.Contact"
    end
    add_message "palm.ops.router.v1.Rule" do
      optional :name, :string, 1
      optional :group, :string, 2
      oneof :payload do
        optional :in, :message, 11, "palm.ops.router.v1.Rule.InBound"
        optional :out, :message, 12, "palm.ops.router.v1.Rule.OutBound"
        optional :nat, :message, 13, "palm.ops.router.v1.Rule.Nat"
      end
    end
    add_message "palm.ops.router.v1.Rule.InBound" do
      optional :device, :string, 1
      optional :tcp, :bool, 2
      optional :port, :uint32, 3
      proto3_optional :source, :string, 4
    end
    add_message "palm.ops.router.v1.Rule.OutBound" do
      oneof :payload do
        optional :host, :message, 1, "palm.ops.router.v1.Rule.OutBound.Host"
        optional :speed, :message, 2, "palm.ops.router.v1.Rule.OutBound.Speed"
        optional :time, :message, 3, "palm.ops.router.v1.Rule.OutBound.Time"
      end
    end
    add_message "palm.ops.router.v1.Rule.OutBound.Host" do
      optional :to, :string, 1
      optional :protocol, :enum, 2, "palm.ops.router.v1.Rule.Protocol"
      optional :port, :uint32, 3
    end
    add_message "palm.ops.router.v1.Rule.OutBound.Speed" do
      proto3_optional :up, :uint32, 1
      proto3_optional :down, :uint32, 2
    end
    add_message "palm.ops.router.v1.Rule.OutBound.Time" do
      optional :from, :message, 1, "google.protobuf.Timestamp"
      optional :to, :message, 2, "google.protobuf.Timestamp"
      optional :monday, :bool, 11
      optional :tuesday, :bool, 12
      optional :wednesday, :bool, 13
      optional :thursday, :bool, 14
      optional :friday, :bool, 15
      optional :saturday, :bool, 16
      optional :sunday, :bool, 17
    end
    add_message "palm.ops.router.v1.Rule.Nat" do
      optional :source, :message, 1, "palm.ops.router.v1.Rule.Nat.Source"
      optional :tcp, :bool, 2
      optional :destination, :message, 3, "palm.ops.router.v1.Rule.Nat.Destination"
    end
    add_message "palm.ops.router.v1.Rule.Nat.Source" do
      optional :device, :string, 1
      optional :port, :uint32, 3
    end
    add_message "palm.ops.router.v1.Rule.Nat.Destination" do
      optional :ip, :string, 1
      optional :port, :uint32, 3
    end
    add_enum "palm.ops.router.v1.Rule.Protocol" do
      value :Icmp, 0
      value :Tcp, 1
      value :Udp, 2
    end
    add_message "palm.ops.router.v1.RouterStatusResponse" do
      map :interfaces, :string, :string, 1
      optional :lan, :message, 11, "palm.ops.router.v1.Lan"
      optional :dmz, :message, 12, "palm.ops.router.v1.Dmz"
      optional :dns, :message, 13, "palm.ops.router.v1.Dns"
      repeated :wan, :message, 14, "palm.ops.router.v1.Wan"
      optional :wan_pool, :message, 15, "palm.ops.router.v1.WanPool"
      repeated :rules, :message, 21, "palm.ops.router.v1.Rule"
      repeated :hosts, :message, 22, "palm.ops.router.v1.Host"
      optional :ip, :message, 97, "palm.ops.router.v1.RouterStatusResponse.Ip"
      optional :firewall, :string, 98
      optional :uptime, :message, 99, "google.protobuf.Duration"
    end
    add_message "palm.ops.router.v1.RouterStatusResponse.Ip" do
      optional :address, :string, 1
      optional :route, :string, 2
      optional :rule, :string, 3
    end
    add_message "palm.ops.router.v1.Lan" do
      optional :device, :string, 1
      optional :mac, :string, 2
      optional :metric, :uint32, 3
      optional :address, :string, 11
    end
    add_message "palm.ops.router.v1.Dmz" do
      optional :device, :string, 1
      optional :mac, :string, 2
      optional :metric, :uint32, 3
      optional :address, :string, 11
    end
    add_message "palm.ops.router.v1.Wan" do
      optional :device, :string, 1
      optional :metric, :uint32, 2
      optional :name, :string, 9
      optional :mac, :string, 11
      optional :enable, :bool, 99
      oneof :ip do
        optional :dhcp, :message, 21, "palm.ops.router.v1.Dhcp"
        optional :static, :message, 22, "palm.ops.router.v1.Static"
      end
    end
    add_message "palm.ops.router.v1.Dhcp" do
      optional :v6, :bool, 1
    end
    add_message "palm.ops.router.v1.Static" do
      optional :address, :string, 1
      optional :gateway, :string, 3
      optional :dns1, :string, 4
      proto3_optional :dns2, :string, 5
    end
    add_message "palm.ops.router.v1.Dns" do
      repeated :items, :string, 1
    end
    add_message "palm.ops.router.v1.UserProfile" do
      optional :nickname, :string, 1
      optional :password, :string, 2
    end
    add_message "palm.ops.router.v1.UserSignInRequest" do
      optional :user, :message, 1, "palm.ops.router.v1.UserProfile"
      optional :ttl, :message, 9, "google.protobuf.Duration"
    end
    add_message "palm.ops.router.v1.UserSignInResponse" do
      optional :token, :string, 1
    end
    add_message "palm.ops.router.v1.UserUpdateRequest" do
      optional :current, :message, 1, "palm.ops.router.v1.UserProfile"
      optional :new, :message, 2, "palm.ops.router.v1.UserProfile"
    end
    add_message "palm.ops.router.v1.UserLogsResponse" do
      repeated :items, :string, 1
    end
  end
end

module Palm
  module Ops
    module Router
      module V1
        Contact = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Contact").msgclass
        RouterSetLanRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterSetLanRequest").msgclass
        RouterSetDmzRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterSetDmzRequest").msgclass
        RouterSetWanRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterSetWanRequest").msgclass
        WanPool = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.WanPool").msgclass
        WanPool::Item = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.WanPool.Item").msgclass
        RouterCreateUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterCreateUserRequest").msgclass
        RouterIndexUserResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexUserResponse").msgclass
        RouterIndexUserResponse::Item = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexUserResponse.Item").msgclass
        RouterUpdateHostRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterUpdateHostRequest").msgclass
        RouterIndexRuleResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexRuleResponse").msgclass
        RouterIndexRuleResponse::Item = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexRuleResponse.Item").msgclass
        Host = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Host").msgclass
        Host::Owner = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Host.Owner").msgclass
        Rule = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule").msgclass
        Rule::InBound = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.InBound").msgclass
        Rule::OutBound = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound").msgclass
        Rule::OutBound::Host = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound.Host").msgclass
        Rule::OutBound::Speed = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound.Speed").msgclass
        Rule::OutBound::Time = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound.Time").msgclass
        Rule::Nat = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Nat").msgclass
        Rule::Nat::Source = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Nat.Source").msgclass
        Rule::Nat::Destination = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Nat.Destination").msgclass
        Rule::Protocol = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Protocol").enummodule
        RouterStatusResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterStatusResponse").msgclass
        RouterStatusResponse::Ip = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterStatusResponse.Ip").msgclass
        Lan = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Lan").msgclass
        Dmz = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Dmz").msgclass
        Wan = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Wan").msgclass
        Dhcp = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Dhcp").msgclass
        Static = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Static").msgclass
        Dns = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Dns").msgclass
        UserProfile = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserProfile").msgclass
        UserSignInRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserSignInRequest").msgclass
        UserSignInResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserSignInResponse").msgclass
        UserUpdateRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserUpdateRequest").msgclass
        UserLogsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserLogsResponse").msgclass
      end
    end
  end
end
