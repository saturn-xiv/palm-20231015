import { Image, Card, List, Menu, Button, Row, Col } from 'antd';
import { useIntl, history, getLocale, setLocale, getAllLocales } from 'umi';
import { FormattedMessage } from 'react-intl';

// https://ant.design/docs/react/i18n
const language_name = (l: string) => {
  switch (l) {
    case 'zh-CN':
      return '简体中文';
    case 'zh-TW':
      return '正體中文';
    case 'ko-KR':
      return '한국어';
    case 'ja-JP':
      return '日本語';
    case 'es-ES':
      return 'Español';
    default:
      return 'English';
  }
};

export default () => {
  const intl = useIntl();
  const style = { width: '100%' };
  return (
    <Card title={<FormattedMessage id="switch-language.title" />}>
      <Card.Grid hoverable={false} style={style}>
        <List
          bordered={true}
          dataSource={getAllLocales()}
          renderItem={(it) => (
            <List.Item>
              <Button
                onClick={() => {
                  setLocale(it, true);
                }}
                type="link"
                disabled={getLocale() === it}
              >
                {language_name(it)}
              </Button>
            </List.Item>
          )}
        />
      </Card.Grid>
      <Card.Grid hoverable={false} style={style}>
        <Button key="home" type="primary" onClick={() => history.push('/')}>
          {intl.formatMessage({ id: 'buttons.go-home' })}
        </Button>
      </Card.Grid>
    </Card>
  );
};
