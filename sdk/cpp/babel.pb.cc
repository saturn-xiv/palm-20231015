// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: babel.proto

#include "babel.pb.h"

#include <algorithm>
#include "google/protobuf/io/coded_stream.h"
#include "google/protobuf/extension_set.h"
#include "google/protobuf/wire_format_lite.h"
#include "google/protobuf/descriptor.h"
#include "google/protobuf/generated_message_reflection.h"
#include "google/protobuf/reflection_ops.h"
#include "google/protobuf/wire_format.h"
#include "google/protobuf/generated_message_tctable_impl.h"
// @@protoc_insertion_point(includes)

// Must be included last.
#include "google/protobuf/port_def.inc"
PROTOBUF_PRAGMA_INIT_SEG
namespace _pb = ::google::protobuf;
namespace _pbi = ::google::protobuf::internal;
namespace _fl = ::google::protobuf::internal::field_layout;
namespace palm {
namespace babel {
namespace v1 {
}  // namespace v1
}  // namespace babel
}  // namespace palm
static constexpr const ::_pb::EnumDescriptor**
    file_level_enum_descriptors_babel_2eproto = nullptr;
static constexpr const ::_pb::ServiceDescriptor**
    file_level_service_descriptors_babel_2eproto = nullptr;
const ::uint32_t TableStruct_babel_2eproto::offsets[1] = {};
static constexpr ::_pbi::MigrationSchema* schemas = nullptr;
static constexpr ::_pb::Message* const* file_default_instances = nullptr;
const char descriptor_table_protodef_babel_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
    "\n\013babel.proto\022\rpalm.babel.v12\006\n\004Pali2\t\n\007"
    "Tibetan2\n\n\010SanskritB/\n+com.github.saturn"
    "_xiv.palm.plugins.babel.v1P\001b\006proto3"
};
static ::absl::once_flag descriptor_table_babel_2eproto_once;
const ::_pbi::DescriptorTable descriptor_table_babel_2eproto = {
    false,
    false,
    116,
    descriptor_table_protodef_babel_2eproto,
    "babel.proto",
    &descriptor_table_babel_2eproto_once,
    nullptr,
    0,
    0,
    schemas,
    file_default_instances,
    TableStruct_babel_2eproto::offsets,
    nullptr,
    file_level_enum_descriptors_babel_2eproto,
    file_level_service_descriptors_babel_2eproto,
};

// This function exists to be marked as weak.
// It can significantly speed up compilation by breaking up LLVM's SCC
// in the .pb.cc translation units. Large translation units see a
// reduction of more than 35% of walltime for optimized builds. Without
// the weak attribute all the messages in the file, including all the
// vtables and everything they use become part of the same SCC through
// a cycle like:
// GetMetadata -> descriptor table -> default instances ->
//   vtables -> GetMetadata
// By adding a weak function here we break the connection from the
// individual vtables back into the descriptor table.
PROTOBUF_ATTRIBUTE_WEAK const ::_pbi::DescriptorTable* descriptor_table_babel_2eproto_getter() {
  return &descriptor_table_babel_2eproto;
}
// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY2
static ::_pbi::AddDescriptorsRunner dynamic_init_dummy_babel_2eproto(&descriptor_table_babel_2eproto);
namespace palm {
namespace babel {
namespace v1 {
// @@protoc_insertion_point(namespace_scope)
}  // namespace v1
}  // namespace babel
}  // namespace palm
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google
// @@protoc_insertion_point(global_scope)
#include "google/protobuf/port_undef.inc"
