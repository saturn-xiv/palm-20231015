<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: metasequoia.proto

namespace Palm\Metasequoia\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>palm.metasequoia.v1.SiteStatusResponse</code>
 */
class SiteStatusResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.PostgreSql postgresql = 1;</code>
     */
    protected $postgresql = null;
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.MySql mysql = 2;</code>
     */
    protected $mysql = null;
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.Redis redis = 3;</code>
     */
    protected $redis = null;
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.RabbitMq rabbitmq = 4;</code>
     */
    protected $rabbitmq = null;
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.OpenSearch opensearch = 5;</code>
     */
    protected $opensearch = null;
    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.System system = 11;</code>
     */
    protected $system = null;
    /**
     * Generated from protobuf field <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
     */
    private $healthes;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Palm\Metasequoia\V1\SiteStatusResponse\PostgreSql $postgresql
     *     @type \Palm\Metasequoia\V1\SiteStatusResponse\MySql $mysql
     *     @type \Palm\Metasequoia\V1\SiteStatusResponse\Redis $redis
     *     @type \Palm\Metasequoia\V1\SiteStatusResponse\RabbitMq $rabbitmq
     *     @type \Palm\Metasequoia\V1\SiteStatusResponse\OpenSearch $opensearch
     *     @type \Palm\Metasequoia\V1\SiteStatusResponse\System $system
     *     @type array<\Palm\Metasequoia\V1\SiteStatusResponse\Health>|\Google\Protobuf\Internal\RepeatedField $healthes
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Metasequoia::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.PostgreSql postgresql = 1;</code>
     * @return \Palm\Metasequoia\V1\SiteStatusResponse\PostgreSql|null
     */
    public function getPostgresql()
    {
        return $this->postgresql;
    }

    public function hasPostgresql()
    {
        return isset($this->postgresql);
    }

    public function clearPostgresql()
    {
        unset($this->postgresql);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.PostgreSql postgresql = 1;</code>
     * @param \Palm\Metasequoia\V1\SiteStatusResponse\PostgreSql $var
     * @return $this
     */
    public function setPostgresql($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\SiteStatusResponse\PostgreSql::class);
        $this->postgresql = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.MySql mysql = 2;</code>
     * @return \Palm\Metasequoia\V1\SiteStatusResponse\MySql|null
     */
    public function getMysql()
    {
        return $this->mysql;
    }

    public function hasMysql()
    {
        return isset($this->mysql);
    }

    public function clearMysql()
    {
        unset($this->mysql);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.MySql mysql = 2;</code>
     * @param \Palm\Metasequoia\V1\SiteStatusResponse\MySql $var
     * @return $this
     */
    public function setMysql($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\SiteStatusResponse\MySql::class);
        $this->mysql = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.Redis redis = 3;</code>
     * @return \Palm\Metasequoia\V1\SiteStatusResponse\Redis|null
     */
    public function getRedis()
    {
        return $this->redis;
    }

    public function hasRedis()
    {
        return isset($this->redis);
    }

    public function clearRedis()
    {
        unset($this->redis);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.Redis redis = 3;</code>
     * @param \Palm\Metasequoia\V1\SiteStatusResponse\Redis $var
     * @return $this
     */
    public function setRedis($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\SiteStatusResponse\Redis::class);
        $this->redis = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.RabbitMq rabbitmq = 4;</code>
     * @return \Palm\Metasequoia\V1\SiteStatusResponse\RabbitMq|null
     */
    public function getRabbitmq()
    {
        return $this->rabbitmq;
    }

    public function hasRabbitmq()
    {
        return isset($this->rabbitmq);
    }

    public function clearRabbitmq()
    {
        unset($this->rabbitmq);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.RabbitMq rabbitmq = 4;</code>
     * @param \Palm\Metasequoia\V1\SiteStatusResponse\RabbitMq $var
     * @return $this
     */
    public function setRabbitmq($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\SiteStatusResponse\RabbitMq::class);
        $this->rabbitmq = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.OpenSearch opensearch = 5;</code>
     * @return \Palm\Metasequoia\V1\SiteStatusResponse\OpenSearch|null
     */
    public function getOpensearch()
    {
        return $this->opensearch;
    }

    public function hasOpensearch()
    {
        return isset($this->opensearch);
    }

    public function clearOpensearch()
    {
        unset($this->opensearch);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.OpenSearch opensearch = 5;</code>
     * @param \Palm\Metasequoia\V1\SiteStatusResponse\OpenSearch $var
     * @return $this
     */
    public function setOpensearch($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\SiteStatusResponse\OpenSearch::class);
        $this->opensearch = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.System system = 11;</code>
     * @return \Palm\Metasequoia\V1\SiteStatusResponse\System|null
     */
    public function getSystem()
    {
        return $this->system;
    }

    public function hasSystem()
    {
        return isset($this->system);
    }

    public function clearSystem()
    {
        unset($this->system);
    }

    /**
     * Generated from protobuf field <code>.palm.metasequoia.v1.SiteStatusResponse.System system = 11;</code>
     * @param \Palm\Metasequoia\V1\SiteStatusResponse\System $var
     * @return $this
     */
    public function setSystem($var)
    {
        GPBUtil::checkMessage($var, \Palm\Metasequoia\V1\SiteStatusResponse\System::class);
        $this->system = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getHealthes()
    {
        return $this->healthes;
    }

    /**
     * Generated from protobuf field <code>repeated .palm.metasequoia.v1.SiteStatusResponse.Health healthes = 21;</code>
     * @param array<\Palm\Metasequoia\V1\SiteStatusResponse\Health>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setHealthes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Palm\Metasequoia\V1\SiteStatusResponse\Health::class);
        $this->healthes = $arr;

        return $this;
    }

}

