import { useState, useEffect } from 'react';
import Footer from '@ant-design/pro-layout/lib/Footer';
import {
  GithubOutlined,
  HomeOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
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
  const languages = ['en-US', 'zh-CN', 'zh-TW', 'ko-KR', 'ja-JP'];

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
          {
            key: 'global',
            title: <GlobalOutlined />,
            href: `${process.env.UMI_APP_BASE_PATH}/switch-language`,
          },
        ]}
      />
      <Helmet>
        <title>{`${item?.subhead} | ${item?.title}`}</title>
      </Helmet>
    </>
  );
};
