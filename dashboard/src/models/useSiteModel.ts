import { useState, useCallback } from 'react';
import { message } from 'antd';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { SiteClient } from '@/protocols/NutServiceClientPb';
import { SiteLayoutResponse } from '@/protocols/nut_pb';
import { GRPC_HOST, grpc_metadata } from '@/request';

export interface IAuthor {
  name: string;
  email: string;
}

export interface ILayout {
  logo: string;
  title: string;
  subhead: string;
  keywords: string[];
  description: string;
  copyright: string;
  author: IAuthor;
}

export const to_layout = (response: SiteLayoutResponse): ILayout => {
  return {
    logo: response.getLogo(),
    title: response.getTitle(),
    subhead: response.getSubhead(),
    keywords: response.getKeywordsList(),
    description: response.getDescription(),
    copyright: response.getCopyright(),
    author: {
      email: response.getAuthor()?.getEmail() || '',
      name: response.getAuthor()?.getName() || '',
    },
  };
};

export default function useSiteModel() {
  const [layout, setLayout] = useState<ILayout>();
  const refresh = useCallback(() => {
    const client = new SiteClient(GRPC_HOST);

    client.layout(new Empty(), grpc_metadata(), function (err, response) {
      if (err) {
        message.error(err.message);
      } else {
        setLayout(to_layout(response));
      }
    });
  }, []);
  return {
    layout,
    refresh,
  };
}
