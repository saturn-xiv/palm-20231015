<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: musa.proto

namespace Palm\Musa\V1\WechatPayQueryBatchTransferRequest;

use UnexpectedValueException;

/**
 * Protobuf type <code>palm.musa.v1.WechatPayQueryBatchTransferRequest.DetailStatus</code>
 */
class DetailStatus
{
    /**
     * Generated from protobuf enum <code>ALL = 0;</code>
     */
    const ALL = 0;
    /**
     * Generated from protobuf enum <code>SUCCESS = 1;</code>
     */
    const SUCCESS = 1;
    /**
     * Generated from protobuf enum <code>WAIT_PAY = 2;</code>
     */
    const WAIT_PAY = 2;
    /**
     * Generated from protobuf enum <code>FAIL = 9;</code>
     */
    const FAIL = 9;

    private static $valueToName = [
        self::ALL => 'ALL',
        self::SUCCESS => 'SUCCESS',
        self::WAIT_PAY => 'WAIT_PAY',
        self::FAIL => 'FAIL',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(DetailStatus::class, \Palm\Musa\V1\WechatPayQueryBatchTransferRequest_DetailStatus::class);

