// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v4.25.0
// source: ops-ddns.proto

package v2

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_ops_ddns_proto protoreflect.FileDescriptor

var file_ops_ddns_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x6f, 0x70, 0x73, 0x2d, 0x64, 0x64, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x10, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6f, 0x70, 0x73, 0x2e, 0x64, 0x64, 0x6e, 0x73, 0x2e,
	0x76, 0x31, 0x32, 0x05, 0x0a, 0x03, 0x56, 0x70, 0x6e, 0x32, 0x09, 0x0a, 0x07, 0x4d, 0x65, 0x74,
	0x72, 0x69, 0x63, 0x73, 0x32, 0x06, 0x0a, 0x04, 0x4d, 0x61, 0x69, 0x6c, 0x42, 0x59, 0x0a, 0x2e,
	0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x73, 0x61, 0x74, 0x75, 0x72,
	0x6e, 0x5f, 0x78, 0x69, 0x76, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69,
	0x6e, 0x73, 0x2e, 0x6f, 0x70, 0x73, 0x2e, 0x64, 0x64, 0x6e, 0x73, 0x2e, 0x76, 0x31, 0x50, 0x01,
	0x5a, 0x25, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x61, 0x74,
	0x75, 0x72, 0x6e, 0x5f, 0x78, 0x69, 0x76, 0x2f, 0x66, 0x69, 0x67, 0x2f, 0x6f, 0x70, 0x73, 0x2f,
	0x64, 0x64, 0x6e, 0x73, 0x2f, 0x76, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_ops_ddns_proto_goTypes = []interface{}{}
var file_ops_ddns_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ops_ddns_proto_init() }
func file_ops_ddns_proto_init() {
	if File_ops_ddns_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ops_ddns_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   3,
		},
		GoTypes:           file_ops_ddns_proto_goTypes,
		DependencyIndexes: file_ops_ddns_proto_depIdxs,
	}.Build()
	File_ops_ddns_proto = out.File
	file_ops_ddns_proto_rawDesc = nil
	file_ops_ddns_proto_goTypes = nil
	file_ops_ddns_proto_depIdxs = nil
}