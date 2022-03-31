import { useState, useEffect } from "react";

import { Row, Col } from "antd";

import Redis, { IProps as IRedisProps } from "./Redis";
import PostgreSql, { IProps as IPostgreSqlProps } from "./PostgreSql";
import RabbitMQ, { IProps as IRabbitMQProps } from "./RabbitMQ";
import System, { IProps as ISystemProps } from "./System";
import { graphql } from "../../../../../request";

interface IState {
  system: ISystemProps;
  postgresql: IPostgreSqlProps;
  redis: IRedisProps;
  rabbitmq: IRabbitMQProps;
}

interface IFetchResponse {
  showSiteStatus: IState;
}

const Widget = () => {
  const [item, setItem] = useState<IState>({
    system: {
      version: "",
      cpu: "",
      memory: "",
      boot: "",
      load: "",
      fs: "",
      network: "",
      disk: "",
      swap: "",
      uptime: "",
    },
    redis: { info: "", items: [] },
    rabbitmq: { protocol: "" },
    postgresql: { version: "", now: 0, databases: [] },
  });

  useEffect(() => {
    graphql<{}, IFetchResponse>(
      `
        query Fetch {
          showSiteStatus {
            system {
              version
              cpu
              memory
              boot
              load
              fs
              network
              disk
              swap
              uptime
            }
            redis {
              info
              items {
                key
                ttl
              }
            }
            rabbitmq {
              protocol
            }
            postgresql {
              version
              now
              databases {
                name
                size
              }
            }
          }
        }
      `,
      {}
    ).then((response) => {
      if (response.data) {
        setItem(response.data.showSiteStatus);
      }
    });
  }, [setItem]);
  return (
    <Row>
      <Col span={24}>
        <System {...item?.system} />
      </Col>
      <Col sm={24} md={8}>
        <PostgreSql {...item?.postgresql} />
      </Col>
      <Col sm={24} md={8}>
        <Redis {...item?.redis} />
      </Col>
      <Col sm={24} md={8}>
        <RabbitMQ {...item?.rabbitmq} />
      </Col>
    </Row>
  );
};

export default Widget;
