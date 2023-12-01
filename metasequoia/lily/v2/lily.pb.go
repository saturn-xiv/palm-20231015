// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v4.24.3
// source: lily.proto

package v2

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ExcelModel struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Sheets []*ExcelModel_Sheet `protobuf:"bytes,1,rep,name=sheets,proto3" json:"sheets,omitempty"`
}

func (x *ExcelModel) Reset() {
	*x = ExcelModel{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExcelModel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExcelModel) ProtoMessage() {}

func (x *ExcelModel) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExcelModel.ProtoReflect.Descriptor instead.
func (*ExcelModel) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{0}
}

func (x *ExcelModel) GetSheets() []*ExcelModel_Sheet {
	if x != nil {
		return x.Sheets
	}
	return nil
}

type S3File struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bucket      string `protobuf:"bytes,1,opt,name=bucket,proto3" json:"bucket,omitempty"`
	Name        string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	ContentType string `protobuf:"bytes,9,opt,name=content_type,json=contentType,proto3" json:"content_type,omitempty"`
}

func (x *S3File) Reset() {
	*x = S3File{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *S3File) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*S3File) ProtoMessage() {}

func (x *S3File) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use S3File.ProtoReflect.Descriptor instead.
func (*S3File) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{1}
}

func (x *S3File) GetBucket() string {
	if x != nil {
		return x.Bucket
	}
	return ""
}

func (x *S3File) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *S3File) GetContentType() string {
	if x != nil {
		return x.ContentType
	}
	return ""
}

type S3GetFileRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bucket string               `protobuf:"bytes,1,opt,name=bucket,proto3" json:"bucket,omitempty"`
	Name   string               `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Ttl    *durationpb.Duration `protobuf:"bytes,9,opt,name=ttl,proto3" json:"ttl,omitempty"`
}

func (x *S3GetFileRequest) Reset() {
	*x = S3GetFileRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *S3GetFileRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*S3GetFileRequest) ProtoMessage() {}

func (x *S3GetFileRequest) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use S3GetFileRequest.ProtoReflect.Descriptor instead.
func (*S3GetFileRequest) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{2}
}

func (x *S3GetFileRequest) GetBucket() string {
	if x != nil {
		return x.Bucket
	}
	return ""
}

func (x *S3GetFileRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *S3GetFileRequest) GetTtl() *durationpb.Duration {
	if x != nil {
		return x.Ttl
	}
	return nil
}

type S3GetFileResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Url string `protobuf:"bytes,1,opt,name=url,proto3" json:"url,omitempty"`
}

func (x *S3GetFileResponse) Reset() {
	*x = S3GetFileResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *S3GetFileResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*S3GetFileResponse) ProtoMessage() {}

func (x *S3GetFileResponse) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use S3GetFileResponse.ProtoReflect.Descriptor instead.
func (*S3GetFileResponse) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{3}
}

func (x *S3GetFileResponse) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

type TexToRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Title     string               `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Files     map[string][]byte    `protobuf:"bytes,2,rep,name=files,proto3" json:"files,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Ttl       *durationpb.Duration `protobuf:"bytes,7,opt,name=ttl,proto3,oneof" json:"ttl,omitempty"`
	Owner     *string              `protobuf:"bytes,8,opt,name=owner,proto3,oneof" json:"owner,omitempty"`
	Published bool                 `protobuf:"varint,9,opt,name=published,proto3" json:"published,omitempty"`
}

func (x *TexToRequest) Reset() {
	*x = TexToRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TexToRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TexToRequest) ProtoMessage() {}

func (x *TexToRequest) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TexToRequest.ProtoReflect.Descriptor instead.
func (*TexToRequest) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{4}
}

func (x *TexToRequest) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *TexToRequest) GetFiles() map[string][]byte {
	if x != nil {
		return x.Files
	}
	return nil
}

func (x *TexToRequest) GetTtl() *durationpb.Duration {
	if x != nil {
		return x.Ttl
	}
	return nil
}

func (x *TexToRequest) GetOwner() string {
	if x != nil && x.Owner != nil {
		return *x.Owner
	}
	return ""
}

func (x *TexToRequest) GetPublished() bool {
	if x != nil {
		return x.Published
	}
	return false
}

type EpubBuildRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *EpubBuildRequest) Reset() {
	*x = EpubBuildRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EpubBuildRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EpubBuildRequest) ProtoMessage() {}

func (x *EpubBuildRequest) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EpubBuildRequest.ProtoReflect.Descriptor instead.
func (*EpubBuildRequest) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{5}
}

type ExcelModel_Sheet struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string                   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Cells []*ExcelModel_Sheet_Cell `protobuf:"bytes,2,rep,name=cells,proto3" json:"cells,omitempty"`
}

func (x *ExcelModel_Sheet) Reset() {
	*x = ExcelModel_Sheet{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExcelModel_Sheet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExcelModel_Sheet) ProtoMessage() {}

func (x *ExcelModel_Sheet) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExcelModel_Sheet.ProtoReflect.Descriptor instead.
func (*ExcelModel_Sheet) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{0, 0}
}

func (x *ExcelModel_Sheet) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ExcelModel_Sheet) GetCells() []*ExcelModel_Sheet_Cell {
	if x != nil {
		return x.Cells
	}
	return nil
}

type ExcelModel_Sheet_Cell struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Row uint32 `protobuf:"varint,1,opt,name=row,proto3" json:"row,omitempty"`
	Col uint32 `protobuf:"varint,2,opt,name=col,proto3" json:"col,omitempty"`
	Val string `protobuf:"bytes,3,opt,name=val,proto3" json:"val,omitempty"`
}

func (x *ExcelModel_Sheet_Cell) Reset() {
	*x = ExcelModel_Sheet_Cell{}
	if protoimpl.UnsafeEnabled {
		mi := &file_lily_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExcelModel_Sheet_Cell) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExcelModel_Sheet_Cell) ProtoMessage() {}

func (x *ExcelModel_Sheet_Cell) ProtoReflect() protoreflect.Message {
	mi := &file_lily_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExcelModel_Sheet_Cell.ProtoReflect.Descriptor instead.
func (*ExcelModel_Sheet_Cell) Descriptor() ([]byte, []int) {
	return file_lily_proto_rawDescGZIP(), []int{0, 0, 0}
}

func (x *ExcelModel_Sheet_Cell) GetRow() uint32 {
	if x != nil {
		return x.Row
	}
	return 0
}

func (x *ExcelModel_Sheet_Cell) GetCol() uint32 {
	if x != nil {
		return x.Col
	}
	return 0
}

func (x *ExcelModel_Sheet_Cell) GetVal() string {
	if x != nil {
		return x.Val
	}
	return ""
}

var File_lily_proto protoreflect.FileDescriptor

var file_lily_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x70, 0x61,
	0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75, 0x72, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xdb, 0x01, 0x0a, 0x0a, 0x45,
	0x78, 0x63, 0x65, 0x6c, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x12, 0x36, 0x0a, 0x06, 0x73, 0x68, 0x65,
	0x65, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x70, 0x61, 0x6c, 0x6d,
	0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x78, 0x63, 0x65, 0x6c, 0x4d, 0x6f,
	0x64, 0x65, 0x6c, 0x2e, 0x53, 0x68, 0x65, 0x65, 0x74, 0x52, 0x06, 0x73, 0x68, 0x65, 0x65, 0x74,
	0x73, 0x1a, 0x94, 0x01, 0x0a, 0x05, 0x53, 0x68, 0x65, 0x65, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x39, 0x0a, 0x05, 0x63, 0x65, 0x6c, 0x6c, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x23,
	0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x78,
	0x63, 0x65, 0x6c, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x2e, 0x53, 0x68, 0x65, 0x65, 0x74, 0x2e, 0x43,
	0x65, 0x6c, 0x6c, 0x52, 0x05, 0x63, 0x65, 0x6c, 0x6c, 0x73, 0x1a, 0x3c, 0x0a, 0x04, 0x43, 0x65,
	0x6c, 0x6c, 0x12, 0x10, 0x0a, 0x03, 0x72, 0x6f, 0x77, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x03, 0x72, 0x6f, 0x77, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x6f, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x03, 0x63, 0x6f, 0x6c, 0x12, 0x10, 0x0a, 0x03, 0x76, 0x61, 0x6c, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x76, 0x61, 0x6c, 0x22, 0x57, 0x0a, 0x06, 0x53, 0x33, 0x46, 0x69,
	0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x21,
	0x0a, 0x0c, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x09,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70,
	0x65, 0x22, 0x6b, 0x0a, 0x10, 0x53, 0x33, 0x47, 0x65, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x2b, 0x0a, 0x03, 0x74, 0x74, 0x6c, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x03, 0x74, 0x74, 0x6c, 0x22, 0x25,
	0x0a, 0x11, 0x53, 0x33, 0x47, 0x65, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x75, 0x72, 0x6c, 0x22, 0x98, 0x02, 0x0a, 0x0c, 0x54, 0x65, 0x78, 0x54, 0x6f, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x3b, 0x0a, 0x05,
	0x66, 0x69, 0x6c, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x70, 0x61,
	0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x78, 0x54, 0x6f,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x52, 0x05, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x12, 0x30, 0x0a, 0x03, 0x74, 0x74, 0x6c,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x48, 0x00, 0x52, 0x03, 0x74, 0x74, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x6f,
	0x77, 0x6e, 0x65, 0x72, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x05, 0x6f, 0x77,
	0x6e, 0x65, 0x72, 0x88, 0x01, 0x01, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x73,
	0x68, 0x65, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x70, 0x75, 0x62, 0x6c, 0x69,
	0x73, 0x68, 0x65, 0x64, 0x1a, 0x38, 0x0a, 0x0a, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0c, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x06,
	0x0a, 0x04, 0x5f, 0x74, 0x74, 0x6c, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6f, 0x77, 0x6e, 0x65, 0x72,
	0x22, 0x12, 0x0a, 0x10, 0x45, 0x70, 0x75, 0x62, 0x42, 0x75, 0x69, 0x6c, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x32, 0x80, 0x01, 0x0a, 0x05, 0x45, 0x78, 0x63, 0x65, 0x6c, 0x12, 0x39,
	0x0a, 0x05, 0x50, 0x61, 0x72, 0x73, 0x65, 0x12, 0x14, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c,
	0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x33, 0x46, 0x69, 0x6c, 0x65, 0x1a, 0x18, 0x2e,
	0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x78, 0x63,
	0x65, 0x6c, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x22, 0x00, 0x12, 0x3c, 0x0a, 0x08, 0x47, 0x65, 0x6e,
	0x65, 0x72, 0x61, 0x74, 0x65, 0x12, 0x18, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c,
	0x79, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x78, 0x63, 0x65, 0x6c, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x1a,
	0x14, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x33, 0x46, 0x69, 0x6c, 0x65, 0x22, 0x00, 0x32, 0x52, 0x0a, 0x02, 0x53, 0x33, 0x12, 0x4c, 0x0a,
	0x07, 0x47, 0x65, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x1e, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e,
	0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x33, 0x47, 0x65, 0x74, 0x46, 0x69, 0x6c,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e,
	0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x33, 0x47, 0x65, 0x74, 0x46, 0x69, 0x6c,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x32, 0x80, 0x01, 0x0a, 0x03,
	0x54, 0x65, 0x78, 0x12, 0x3b, 0x0a, 0x05, 0x54, 0x6f, 0x50, 0x64, 0x66, 0x12, 0x1a, 0x2e, 0x70,
	0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x78, 0x54,
	0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e,
	0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x33, 0x46, 0x69, 0x6c, 0x65, 0x22, 0x00,
	0x12, 0x3c, 0x0a, 0x06, 0x54, 0x6f, 0x57, 0x6f, 0x72, 0x64, 0x12, 0x1a, 0x2e, 0x70, 0x61, 0x6c,
	0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x65, 0x78, 0x54, 0x6f, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69,
	0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x33, 0x46, 0x69, 0x6c, 0x65, 0x22, 0x00, 0x32, 0x47,
	0x0a, 0x04, 0x45, 0x70, 0x75, 0x62, 0x12, 0x3f, 0x0a, 0x05, 0x42, 0x75, 0x69, 0x6c, 0x64, 0x12,
	0x1e, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x45,
	0x70, 0x75, 0x62, 0x42, 0x75, 0x69, 0x6c, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x14, 0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x6c, 0x69, 0x6c, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x53,
	0x33, 0x46, 0x69, 0x6c, 0x65, 0x22, 0x00, 0x42, 0x52, 0x0a, 0x2a, 0x63, 0x6f, 0x6d, 0x2e, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x73, 0x61, 0x74, 0x75, 0x72, 0x6e, 0x5f, 0x78, 0x69, 0x76,
	0x2e, 0x70, 0x61, 0x6c, 0x6d, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x6c, 0x69,
	0x6c, 0x79, 0x2e, 0x76, 0x31, 0x50, 0x01, 0x5a, 0x22, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x61, 0x74, 0x75, 0x72, 0x6e, 0x5f, 0x78, 0x69, 0x76, 0x2f, 0x70,
	0x61, 0x6c, 0x6d, 0x2f, 0x6c, 0x69, 0x6c, 0x79, 0x2f, 0x76, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_lily_proto_rawDescOnce sync.Once
	file_lily_proto_rawDescData = file_lily_proto_rawDesc
)

func file_lily_proto_rawDescGZIP() []byte {
	file_lily_proto_rawDescOnce.Do(func() {
		file_lily_proto_rawDescData = protoimpl.X.CompressGZIP(file_lily_proto_rawDescData)
	})
	return file_lily_proto_rawDescData
}

var file_lily_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_lily_proto_goTypes = []interface{}{
	(*ExcelModel)(nil),            // 0: palm.lily.v1.ExcelModel
	(*S3File)(nil),                // 1: palm.lily.v1.S3File
	(*S3GetFileRequest)(nil),      // 2: palm.lily.v1.S3GetFileRequest
	(*S3GetFileResponse)(nil),     // 3: palm.lily.v1.S3GetFileResponse
	(*TexToRequest)(nil),          // 4: palm.lily.v1.TexToRequest
	(*EpubBuildRequest)(nil),      // 5: palm.lily.v1.EpubBuildRequest
	(*ExcelModel_Sheet)(nil),      // 6: palm.lily.v1.ExcelModel.Sheet
	(*ExcelModel_Sheet_Cell)(nil), // 7: palm.lily.v1.ExcelModel.Sheet.Cell
	nil,                           // 8: palm.lily.v1.TexToRequest.FilesEntry
	(*durationpb.Duration)(nil),   // 9: google.protobuf.Duration
}
var file_lily_proto_depIdxs = []int32{
	6,  // 0: palm.lily.v1.ExcelModel.sheets:type_name -> palm.lily.v1.ExcelModel.Sheet
	9,  // 1: palm.lily.v1.S3GetFileRequest.ttl:type_name -> google.protobuf.Duration
	8,  // 2: palm.lily.v1.TexToRequest.files:type_name -> palm.lily.v1.TexToRequest.FilesEntry
	9,  // 3: palm.lily.v1.TexToRequest.ttl:type_name -> google.protobuf.Duration
	7,  // 4: palm.lily.v1.ExcelModel.Sheet.cells:type_name -> palm.lily.v1.ExcelModel.Sheet.Cell
	1,  // 5: palm.lily.v1.Excel.Parse:input_type -> palm.lily.v1.S3File
	0,  // 6: palm.lily.v1.Excel.Generate:input_type -> palm.lily.v1.ExcelModel
	2,  // 7: palm.lily.v1.S3.GetFile:input_type -> palm.lily.v1.S3GetFileRequest
	4,  // 8: palm.lily.v1.Tex.ToPdf:input_type -> palm.lily.v1.TexToRequest
	4,  // 9: palm.lily.v1.Tex.ToWord:input_type -> palm.lily.v1.TexToRequest
	5,  // 10: palm.lily.v1.Epub.Build:input_type -> palm.lily.v1.EpubBuildRequest
	0,  // 11: palm.lily.v1.Excel.Parse:output_type -> palm.lily.v1.ExcelModel
	1,  // 12: palm.lily.v1.Excel.Generate:output_type -> palm.lily.v1.S3File
	3,  // 13: palm.lily.v1.S3.GetFile:output_type -> palm.lily.v1.S3GetFileResponse
	1,  // 14: palm.lily.v1.Tex.ToPdf:output_type -> palm.lily.v1.S3File
	1,  // 15: palm.lily.v1.Tex.ToWord:output_type -> palm.lily.v1.S3File
	1,  // 16: palm.lily.v1.Epub.Build:output_type -> palm.lily.v1.S3File
	11, // [11:17] is the sub-list for method output_type
	5,  // [5:11] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_lily_proto_init() }
func file_lily_proto_init() {
	if File_lily_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_lily_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExcelModel); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_lily_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*S3File); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_lily_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*S3GetFileRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_lily_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*S3GetFileResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_lily_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TexToRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_lily_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EpubBuildRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_lily_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExcelModel_Sheet); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_lily_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExcelModel_Sheet_Cell); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_lily_proto_msgTypes[4].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_lily_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   4,
		},
		GoTypes:           file_lily_proto_goTypes,
		DependencyIndexes: file_lily_proto_depIdxs,
		MessageInfos:      file_lily_proto_msgTypes,
	}.Build()
	File_lily_proto = out.File
	file_lily_proto_rawDesc = nil
	file_lily_proto_goTypes = nil
	file_lily_proto_depIdxs = nil
}