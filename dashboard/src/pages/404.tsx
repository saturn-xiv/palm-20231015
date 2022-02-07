import { Image, Button, Row, Col } from 'antd';
import { useIntl, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { FormattedMessage } from 'react-intl';

import broken_link from '../assets/broken-link.svg';

export default () => {
  const intl = useIntl();

  return (
    <PageContainer
      content={<FormattedMessage id="404.title" />}
      breadcrumbRender={false}
      extra={[
        <Button key="back" onClick={() => history.goBack()}>
          {intl.formatMessage({ id: 'buttons.go-back' })}
        </Button>,
        <Button key="home" type="primary" onClick={() => history.push('/')}>
          {intl.formatMessage({ id: 'buttons.go-home' })}
        </Button>,
      ]}
    >
      <Row>
        <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 3 }}>
          <Image src={broken_link} />
        </Col>
      </Row>
    </PageContainer>
  );
};
