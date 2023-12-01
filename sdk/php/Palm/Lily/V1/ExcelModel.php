<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lily.proto

namespace Palm\Lily\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.lily.v1.ExcelModel</code>
 */
class ExcelModel extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .palm.lily.v1.ExcelModel.Sheet sheets = 1;</code>
     */
    private $sheets;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Palm\Lily\V1\ExcelModel\Sheet>|\Google\Protobuf\Internal\RepeatedField $sheets
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Lily::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .palm.lily.v1.ExcelModel.Sheet sheets = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSheets()
    {
        return $this->sheets;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.lily.v1.ExcelModel.Sheet sheets = 1;</code>
     * @param array<\Palm\Lily\V1\ExcelModel\Sheet>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSheets($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Lily\V1\ExcelModel\Sheet::class);
        $this->sheets = $arr;

        return $this;
    }

}

