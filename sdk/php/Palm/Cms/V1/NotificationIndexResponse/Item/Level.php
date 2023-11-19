<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cms.proto

namespace Palm\Cms\V1\NotificationIndexResponse\Item;

use UnexpectedValueException;

/**
 * Protobuf type <code>palm.cms.v1.NotificationIndexResponse.Item.Level</code>
 */
class Level
{
    /**
     * Generated from protobuf enum <code>NOTE = 0;</code>
     */
    const NOTE = 0;
    /**
     * Generated from protobuf enum <code>INFO = 1;</code>
     */
    const INFO = 1;

    private static $valueToName = [
        self::NOTE => 'NOTE',
        self::INFO => 'INFO',
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
class_alias(Level::class, \Palm\Cms\V1\NotificationIndexResponse_Item_Level::class);
