import Footer from '@ant-design/pro-layout/lib/Footer';
import { GithubOutlined, HomeOutlined } from '@ant-design/icons';

export default () => {
  // TODO copyright
  return (
    <Footer
      copyright="2021 Palm"
      links={[
        {
          key: 'home',
          title: <HomeOutlined />,
          href: '/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/saturn-xiv/palm',
          blankTarget: true,
        },
      ]}
    />
  );
};
