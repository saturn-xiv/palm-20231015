import { useEffect } from "react";
import { Card, Col, Button, Popconfirm, List } from "antd";
import { useIntl, FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import { set as setLocale, LANGUAGES } from "../../locales";
import Layout from "../../layouts/Application";
import { setTitle } from "../../reducers/layout";
import { useAppDispatch } from "../../hooks";

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(intl.formatMessage({ id: "nut.switch-language.title" })));
  }, [dispatch, intl]);
  return (
    <Layout>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <Card>
          <List
            bordered
            dataSource={LANGUAGES}
            renderItem={(it) => (
              <List.Item>
                <Popconfirm
                  title={intl.formatMessage(
                    {
                      id: "nut.switch-language.confirm",
                    },
                    { lang: intl.formatMessage({ id: `languages.${it}` }) }
                  )}
                  onConfirm={() => {
                    navigate("/");
                    setLocale(it, true);
                  }}
                >
                  <Button type="text">
                    <FormattedMessage id={`languages.${it}`} />
                  </Button>
                </Popconfirm>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Layout>
  );
};

export default Widget;
