<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cms.proto

namespace Palm\Cms\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.cms.v1.ArticleShowResponse</code>
 */
class ArticleShowResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.palm.cms.v1.ArticleIndexResponse.Item item = 1;</code>
     */
    protected $item = null;
    /**
     * Generated from protobuf field <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
     */
    private $comments;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Cms\V1\ArticleIndexResponse\Item $item
     *     @type array<\Palm\Cms\V1\CommentIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $comments
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Cms::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.cms.v1.ArticleIndexResponse.Item item = 1;</code>
     * @return \Palm\Cms\V1\ArticleIndexResponse\Item|null
     */
    public function getItem()
    {
        return $this->item;
    }

    public function hasItem()
    {
        return isset($this->item);
    }

    public function clearItem()
    {
        unset($this->item);
    }

    /**
     * Generated from protobuf field <code>.palm.cms.v1.ArticleIndexResponse.Item item = 1;</code>
     * @param \Palm\Cms\V1\ArticleIndexResponse\Item $var
     * @return $this
     */
    public function setItem($var)
    {
        GPBUtil::checkMessage($var, \Palm\Cms\V1\ArticleIndexResponse\Item::class);
        $this->item = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.cms.v1.CommentIndexResponse.Item comments = 2;</code>
     * @param array<\Palm\Cms\V1\CommentIndexResponse\Item>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setComments($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Cms\V1\CommentIndexResponse\Item::class);
        $this->comments = $arr;

        return $this;
    }

}

