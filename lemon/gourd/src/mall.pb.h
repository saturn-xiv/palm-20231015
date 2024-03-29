// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: mall.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_mall_2eproto_2epb_2eh
#define GOOGLE_PROTOBUF_INCLUDED_mall_2eproto_2epb_2eh

#include <limits>
#include <string>
#include <type_traits>

#include "google/protobuf/port_def.inc"
#if PROTOBUF_VERSION < 4024000
#error "This file was generated by a newer version of protoc which is"
#error "incompatible with your Protocol Buffer headers. Please update"
#error "your headers."
#endif  // PROTOBUF_VERSION

#if 4024003 < PROTOBUF_MIN_PROTOC_VERSION
#error "This file was generated by an older version of protoc which is"
#error "incompatible with your Protocol Buffer headers. Please"
#error "regenerate this file with a newer version of protoc."
#endif  // PROTOBUF_MIN_PROTOC_VERSION
#include "google/protobuf/port_undef.inc"
#include "google/protobuf/io/coded_stream.h"
#include "google/protobuf/arena.h"
#include "google/protobuf/arenastring.h"
#include "google/protobuf/generated_message_bases.h"
#include "google/protobuf/generated_message_tctable_decl.h"
#include "google/protobuf/generated_message_util.h"
#include "google/protobuf/metadata_lite.h"
#include "google/protobuf/generated_message_reflection.h"
#include "google/protobuf/message.h"
#include "google/protobuf/repeated_field.h"  // IWYU pragma: export
#include "google/protobuf/extension_set.h"  // IWYU pragma: export
#include "google/protobuf/generated_enum_reflection.h"
#include "google/protobuf/unknown_field_set.h"
// @@protoc_insertion_point(includes)

// Must be included last.
#include "google/protobuf/port_def.inc"

#define PROTOBUF_INTERNAL_EXPORT_mall_2eproto

namespace google {
namespace protobuf {
namespace internal {
class AnyMetadata;
}  // namespace internal
}  // namespace protobuf
}  // namespace google

// Internal implementation detail -- do not use these members.
struct TableStruct_mall_2eproto {
  static const ::uint32_t offsets[];
};
extern const ::google::protobuf::internal::DescriptorTable
    descriptor_table_mall_2eproto;
namespace palm {
namespace mall {
namespace v1 {
class Order;
struct OrderDefaultTypeInternal;
extern OrderDefaultTypeInternal _Order_default_instance_;
}  // namespace v1
}  // namespace mall
}  // namespace palm
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google

namespace palm {
namespace mall {
namespace v1 {
enum Order_Status : int {
  Order_Status_Voided = 0,
  Order_Status_Pending = 1,
  Order_Status_Processing = 2,
  Order_Status_Shiped = 3,
  Order_Status_Complete = 4,
  Order_Status_Canceled = 5,
  Order_Status_Denied = 6,
  Order_Status_CanceledReversal = 7,
  Order_Status_Failed = 8,
  Order_Status_Refunded = 9,
  Order_Status_Reversed = 10,
  Order_Status_Chargeback = 11,
  Order_Status_Expired = 12,
  Order_Status_Processed = 13,
  Order_Status_Order_Status_INT_MIN_SENTINEL_DO_NOT_USE_ =
      std::numeric_limits<::int32_t>::min(),
  Order_Status_Order_Status_INT_MAX_SENTINEL_DO_NOT_USE_ =
      std::numeric_limits<::int32_t>::max(),
};

bool Order_Status_IsValid(int value);
constexpr Order_Status Order_Status_Status_MIN = static_cast<Order_Status>(0);
constexpr Order_Status Order_Status_Status_MAX = static_cast<Order_Status>(13);
constexpr int Order_Status_Status_ARRAYSIZE = 13 + 1;
const ::google::protobuf::EnumDescriptor*
Order_Status_descriptor();
template <typename T>
const std::string& Order_Status_Name(T value) {
  static_assert(std::is_same<T, Order_Status>::value ||
                    std::is_integral<T>::value,
                "Incorrect type passed to Status_Name().");
  return Order_Status_Name(static_cast<Order_Status>(value));
}
template <>
inline const std::string& Order_Status_Name(Order_Status value) {
  return ::google::protobuf::internal::NameOfDenseEnum<Order_Status_descriptor,
                                                 0, 13>(
      static_cast<int>(value));
}
inline bool Order_Status_Parse(absl::string_view name, Order_Status* value) {
  return ::google::protobuf::internal::ParseNamedEnum<Order_Status>(
      Order_Status_descriptor(), name, value);
}

// ===================================================================


// -------------------------------------------------------------------

class Order final :
    public ::google::protobuf::internal::ZeroFieldsBase /* @@protoc_insertion_point(class_definition:palm.mall.v1.Order) */ {
 public:
  inline Order() : Order(nullptr) {}
  template<typename = void>
  explicit PROTOBUF_CONSTEXPR Order(::google::protobuf::internal::ConstantInitialized);

  Order(const Order& from);
  Order(Order&& from) noexcept
    : Order() {
    *this = ::std::move(from);
  }

  inline Order& operator=(const Order& from) {
    CopyFrom(from);
    return *this;
  }
  inline Order& operator=(Order&& from) noexcept {
    if (this == &from) return *this;
    if (GetOwningArena() == from.GetOwningArena()
  #ifdef PROTOBUF_FORCE_COPY_IN_MOVE
        && GetOwningArena() != nullptr
  #endif  // !PROTOBUF_FORCE_COPY_IN_MOVE
    ) {
      InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  inline const ::google::protobuf::UnknownFieldSet& unknown_fields() const {
    return _internal_metadata_.unknown_fields<::google::protobuf::UnknownFieldSet>(::google::protobuf::UnknownFieldSet::default_instance);
  }
  inline ::google::protobuf::UnknownFieldSet* mutable_unknown_fields() {
    return _internal_metadata_.mutable_unknown_fields<::google::protobuf::UnknownFieldSet>();
  }

  static const ::google::protobuf::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::google::protobuf::Descriptor* GetDescriptor() {
    return default_instance().GetMetadata().descriptor;
  }
  static const ::google::protobuf::Reflection* GetReflection() {
    return default_instance().GetMetadata().reflection;
  }
  static const Order& default_instance() {
    return *internal_default_instance();
  }
  static inline const Order* internal_default_instance() {
    return reinterpret_cast<const Order*>(
               &_Order_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(Order& a, Order& b) {
    a.Swap(&b);
  }
  inline void Swap(Order* other) {
    if (other == this) return;
  #ifdef PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetOwningArena() != nullptr &&
        GetOwningArena() == other->GetOwningArena()) {
   #else  // PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetOwningArena() == other->GetOwningArena()) {
  #endif  // !PROTOBUF_FORCE_COPY_IN_SWAP
      InternalSwap(other);
    } else {
      ::google::protobuf::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(Order* other) {
    if (other == this) return;
    ABSL_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  Order* New(::google::protobuf::Arena* arena = nullptr) const final {
    return CreateMaybeMessage<Order>(arena);
  }
  using ::google::protobuf::internal::ZeroFieldsBase::CopyFrom;
  inline void CopyFrom(const Order& from) {
    ::google::protobuf::internal::ZeroFieldsBase::CopyImpl(*this, from);
  }
  using ::google::protobuf::internal::ZeroFieldsBase::MergeFrom;
  void MergeFrom(const Order& from) {
    ::google::protobuf::internal::ZeroFieldsBase::MergeImpl(*this, from);
  }
  public:

  private:
  friend class ::google::protobuf::internal::AnyMetadata;
  static ::absl::string_view FullMessageName() {
    return "palm.mall.v1.Order";
  }
  protected:
  explicit Order(::google::protobuf::Arena* arena);
  public:

  static const ClassData _class_data_;
  const ::google::protobuf::Message::ClassData*GetClassData() const final;

  ::google::protobuf::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  using Status = Order_Status;
  static constexpr Status Voided = Order_Status_Voided;
  static constexpr Status Pending = Order_Status_Pending;
  static constexpr Status Processing = Order_Status_Processing;
  static constexpr Status Shiped = Order_Status_Shiped;
  static constexpr Status Complete = Order_Status_Complete;
  static constexpr Status Canceled = Order_Status_Canceled;
  static constexpr Status Denied = Order_Status_Denied;
  static constexpr Status CanceledReversal = Order_Status_CanceledReversal;
  static constexpr Status Failed = Order_Status_Failed;
  static constexpr Status Refunded = Order_Status_Refunded;
  static constexpr Status Reversed = Order_Status_Reversed;
  static constexpr Status Chargeback = Order_Status_Chargeback;
  static constexpr Status Expired = Order_Status_Expired;
  static constexpr Status Processed = Order_Status_Processed;
  static inline bool Status_IsValid(int value) {
    return Order_Status_IsValid(value);
  }
  static constexpr Status Status_MIN = Order_Status_Status_MIN;
  static constexpr Status Status_MAX = Order_Status_Status_MAX;
  static constexpr int Status_ARRAYSIZE = Order_Status_Status_ARRAYSIZE;
  static inline const ::google::protobuf::EnumDescriptor* Status_descriptor() {
    return Order_Status_descriptor();
  }
  template <typename T>
  static inline const std::string& Status_Name(T value) {
    return Order_Status_Name(value);
  }
  static inline bool Status_Parse(absl::string_view name, Status* value) {
    return Order_Status_Parse(name, value);
  }

  // accessors -------------------------------------------------------

  // @@protoc_insertion_point(class_scope:palm.mall.v1.Order)
 private:
  class _Internal;

  template <typename T> friend class ::google::protobuf::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  struct Impl_ {
    PROTOBUF_TSAN_DECLARE_MEMBER
  };
  friend struct ::TableStruct_mall_2eproto;
};

// ===================================================================




// ===================================================================


#ifdef __GNUC__
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// -------------------------------------------------------------------

// Order

#ifdef __GNUC__
#pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)
}  // namespace v1
}  // namespace mall
}  // namespace palm


namespace google {
namespace protobuf {

template <>
struct is_proto_enum<::palm::mall::v1::Order_Status> : std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor<::palm::mall::v1::Order_Status>() {
  return ::palm::mall::v1::Order_Status_descriptor();
}

}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)

#include "google/protobuf/port_undef.inc"

#endif  // GOOGLE_PROTOBUF_INCLUDED_mall_2eproto_2epb_2eh
