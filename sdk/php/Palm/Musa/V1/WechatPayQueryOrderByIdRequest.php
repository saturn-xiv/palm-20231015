<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: musa.proto

namespace Palm\Musa\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.musa.v1.WechatPayQueryOrderByIdRequest</code>
 */
class WechatPayQueryOrderByIdRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string transaction_id = 1;</code>
     */
    protected $transaction_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $transaction_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Musa::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string transaction_id = 1;</code>
     * @return string
     */
    public function getTransactionId()
    {
        return $this->transaction_id;
    }

    /**
     * Generated from protobuf field <code>string transaction_id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTransactionId($var)
    {
        GPBUtil::checkString($var, True);
        $this->transaction_id = $var;

        return $this;
    }

}
