import { useState, useCallback } from 'react';
import { message } from 'antd';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import jwtDecode, { JwtPayload } from 'jwt-decode';

import {
  UserSignInRequest,
  UserSignInResponse,
  UserQueryRequest,
} from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { setLocale } from '@/i18n';

export const TO_SIGN_IN = '/users/sign-in';
export const TO_PROFILE = '/users/profile';

const KEY = 'token';
export const DURATION = 60 * 60 * 24;

export const getToken = (): string | null => {
  return sessionStorage.getItem(KEY);
};

export const setToken = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

export const removeToken = () => {
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

export interface IPermission {
  resourceType: string;
  resourceId?: number;
  operation: string;
}

export interface ICurrentUser {
  uid: string;
}

export const to_current_user = (response: UserSignInResponse): ICurrentUser => {
  const decoded: any = jwtDecode<JwtPayload>(response.getToken());

  return {
    uid: decoded.aud,
  };
};

export default function useAuthModel() {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>();

  const signIn = useCallback((account: string, password: string) => {
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
        removeToken();
        message.error(err.message);
      } else {
        setToken(response.getToken());
        setCurrentUser(to_current_user(response));
      }
    });
  }, []);

  const signOut = useCallback(() => {
    const client = new UserClient(GRPC_HOST);

    client.signOut(new Empty(), grpc_metadata(), function (err) {
      removeToken();
      if (err) {
        message.error(err.message);
      } else {
      }
    });
  }, []);

  return {
    currentUser,
    signIn,
    signOut,
  };
}
