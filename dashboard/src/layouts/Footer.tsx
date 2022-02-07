import { useState, useEffect } from 'react';
import Footer from '@ant-design/pro-layout/lib/Footer';
import { GithubOutlined, HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'umi';

import { graphql } from '@/global';

interface ISiteInfo {
  title: string;
  subhead: string;
  copyright: string;
}
interface IResponse {
  siteInfo: ISiteInfo;
}

export default () => {
  const [item, setItem] = useState<ISiteInfo>();

  useEffect(() => {
    graphql(
      `
        query {
          siteInfo {
            title
            subhead
            copyright
          }
        }
      `,
      {},
      (res: IResponse) => {
        setItem(res.siteInfo);
      },
    );
  }, [setItem]);

  return (
    <>
      <Footer
        copyright={item?.copyright}
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
      <Helmet>
        <title>{`${item?.subhead} | ${item?.title}`}</title>
      </Helmet>
    </>
  );
};
