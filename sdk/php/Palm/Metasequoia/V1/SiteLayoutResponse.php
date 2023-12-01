<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.SiteLayoutResponse</code>
 */
class SiteLayoutResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string title = 1;</code>
     */
    protected $title = '';
    /**
     * Generated from protobuf field <code>string subhead = 2;</code>
     */
    protected $subhead = '';
    /**
     * Generated from protobuf field <code>repeated string keywords = 3;</code>
     */
    private $keywords;
    /**
     * Generated from protobuf field <code>string description = 4;</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteLayoutResponse.Author author = 5;</code>
     */
    protected $author = null;
    /**
     * Generated from protobuf field <code>string copyright = 6;</code>
     */
    protected $copyright = '';
    /**
     * Generated from protobuf field <code>string logo = 7;</code>
     */
    protected $logo = '';
    /**
     * Generated from protobuf field <code>repeated string languages = 9;</code>
     */
    private $languages;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $title
     *     @type string $subhead
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $keywords
     *     @type string $description
     *     @type \Palm\Metasequoia\V1\SiteLayoutResponse\Author $author
     *     @type string $copyright
     *     @type string $logo
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $languages
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string title = 1;</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Generated from protobuf field <code>string title = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTitle($var)
    {
        GPBUtil::checkString($var, True);
        $this->title = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string subhead = 2;</code>
     * @return string
     */
    public function getSubhead()
    {
        return $this->subhead;
    }

    /**
     * Generated from protobuf field <code>string subhead = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setSubhead($var)
    {
        GPBUtil::checkString($var, True);
        $this->subhead = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string keywords = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getKeywords()
    {
        return $this->keywords;
    }

    /**
     * Generated from protobuf field <code>repeated string keywords = 3;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setKeywords($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->keywords = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 4;</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteLayoutResponse.Author author = 5;</code>
     * @return \Palm\Metasequoia\V1\SiteLayoutResponse\Author|null
     */
    public function getAuthor()
    {
        return $this->author;
    }

    public function hasAuthor()
    {
        return isset($this->author);
    }

    public function clearAuthor()
    {
        unset($this->author);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteLayoutResponse.Author author = 5;</code>
     * @param \Palm\Metasequoia\V1\SiteLayoutResponse\Author $var
     * @return $this
     */
    public function setAuthor($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\SiteLayoutResponse\Author::class);
        $this->author = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string copyright = 6;</code>
     * @return string
     */
    public function getCopyright()
    {
        return $this->copyright;
    }

    /**
     * Generated from protobuf field <code>string copyright = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setCopyright($var)
    {
        GPBUtil::checkString($var, True);
        $this->copyright = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string logo = 7;</code>
     * @return string
     */
    public function getLogo()
    {
        return $this->logo;
    }

    /**
     * Generated from protobuf field <code>string logo = 7;</code>
     * @param string $var
     * @return $this
     */
    public function setLogo($var)
    {
        GPBUtil::checkString($var, True);
        $this->logo = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string languages = 9;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLanguages()
    {
        return $this->languages;
    }

    /**
     * Generated from protobuf field <code>repeated string languages = 9;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setLanguages($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->languages = $arr;

        return $this;
    }

}
