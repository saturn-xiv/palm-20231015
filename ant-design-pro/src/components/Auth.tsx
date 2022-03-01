import { Redirect } from 'umi';
import { ReactNode, useState, useEffect } from 'react';
import jwt_decode, { JwtPayload } from 'jwt-decode';

import { graphql } from '@/global';

export interface IProps {
  children: ReactNode;
}

export interface ICurrentUser {
  uid: string;
  roles: string[];
}

interface IResponse {
  self: ICurrentUser;
}

const KEY = 'token';

export const get = () => {
  return sessionStorage.getItem(KEY);
};

export const set = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

export const destroy = () => {
  sessionStorage.removeItem(KEY);
};

export const current_user = (): ICurrentUser | undefined => {
  const token = get();

  try {
    const payload = jwt_decode<JwtPayload>(token!);
    if (typeof payload.aud === 'string') {
      // todo
      return { uid: payload.aud!, roles: [] };
    }
  } catch (e) {
    console.error(e);
  }

  return undefined;
};

export default ({ children }: IProps) => {
  const [user, setUser] = useState<ICurrentUser>();
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
        setUser({ uid: 'aaa', roles: [] });
      },
    );
  }, [setUser]);
  if (user?.uid) {
    return children;
  } else {
    return <Redirect to="/users/sign-in" />;
  }
};
