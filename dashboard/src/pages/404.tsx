import { useIntl, useHistory, FormattedMessage } from 'umi';
import { Card, Button, Col } from 'antd';

import Layout from '@/layouts/application';
import broken_link from '@/assets/broken-link.svg';

const Widget = () => {
  const intl = useIntl();
  const history = useHistory();
  const title = intl.formatMessage({ id: 'nut.404.title' });
  return (
    <Layout title={title}>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <Card
          title={title}
          extra={
            <>
              <Button
                type="link"
                onClick={() => {
                  history.push('/');
                }}
              >
                <FormattedMessage id="buttons.go-home" />
              </Button>
              <Button
                type="link"
                onClick={() => {
                  history.goBack();
                }}
              >
                <FormattedMessage id="buttons.go-back" />
              </Button>
            </>
          }
          cover={<img src={broken_link} />}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
