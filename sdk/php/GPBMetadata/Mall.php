<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: mall.proto

namespace GPBMetadata;

class Mall
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�

mall.protopalm.mall.v1"�
Order"�
Status

Voided 
Pending

Processing

Shiped
Complete
Canceled

Denied
CanceledReversal

Failed
Refunded	
Reversed


Chargeback
Expired
	Processed2
Sku2
SpuBR
*com.github.saturn_xiv.palm.plugins.mall.v1PZ"github.com/saturn_xiv/palm/mall/v2bproto3'
        , true);

        static::$is_initialized = true;
    }
}

