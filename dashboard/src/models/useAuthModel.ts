import { useState, useCallback } from 'react';
import { message } from 'antd';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { useHistory } from 'umi';
import jwtDecode, { JwtPayload } from 'jwt-decode';

import {
  UserSignInRequest,
  UserSignInResponse,
  UserQueryRequest,
} from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { TO_SIGN_IN } from '@/components';

const KEY = 'token';
export const DURATION = 60 * 60 * 24;

export const get = (): string | null => {
  return sessionStorage.getItem(KEY);
};

export const set = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

export const remove = () => {
  sessionStorage.removeItem(KEY);
};

export const OPERATION_READ = 'read';
export const OPERATION_WRITE = 'write';
export const OPERATION_CREATE = 'create';
export const OPERATION_UPDATE = 'update';
export const OPERATION_REMOVE = 'remove';

export const to_user_query_request = (account: string): UserQueryRequest => {
  const query = new UserQueryRequest();
  if (account.includes('@')) {
    query.setEmail(account);
  } else {
    query.setNickName(account);
  }
  return query;
};

export interface IPolicy {
  resourceType: string;
  resourceId?: number;
  operation: string;
}

export interface ICurrentUser {
  uid: string;
  realName: string;
  avatar: string;
  lang: string;
  timeZone: string;
  isAdministrator: boolean;
  policies: IPolicy[];
}

export const to_current_user = (response: UserSignInResponse): ICurrentUser => {
  const decoded: any = jwtDecode<JwtPayload>(response.getToken());
  return {
    uid: decoded.aud,
    realName: response.getRealName(),
    avatar: response.getAvatar(),
    lang: response.getLang(),
    timeZone: response.getTimeZone(),
    isAdministrator: response.getIsAdministrator(),
    policies: response.getPoliciesList().map((x) => {
      return {
        operation: x.getOperation(),
        resourceType: x.getResourceType(),
        resourceId: x.getResourceId(),
      };
    }),
  };
};

export default function useAuthModel() {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>();
  const history = useHistory();

  const sign_in = useCallback((account: string, password: string) => {
    const client = new UserClient(GRPC_HOST);

    const request = new UserSignInRequest();
    request.setPassword(password);
    request.setQuery(to_user_query_request(account));
    {
      const ttl = new Duration();
      ttl.setSeconds(DURATION);
      request.setTtl(ttl);
    }

    client.signIn(request, grpc_metadata(), function (err, response) {
      if (err) {
        message.error(err.message);
      } else {
        setCurrentUser(to_current_user(response));
        history.push('/users/profile');
      }
    });
  }, []);

  const sign_out = useCallback(() => {
    const client = new UserClient(GRPC_HOST);

    client.signOut(new Empty(), grpc_metadata(), function (err) {
      if (err) {
        message.error(err.message);
      } else {
        history.push(TO_SIGN_IN);
      }
    });
  }, []);

  return {
    currentUser,
    sign_in,
    sign_out,
  };
}
