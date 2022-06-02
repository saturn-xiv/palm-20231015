import { useRef } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, getLocale, getAllLocales } from 'umi';
import type { ProFormInstance } from '@ant-design/pro-form';

import Layout from '@/layouts/non-sign-in';
import { guess_timezone, home_url, TO_SIGN_IN } from '@/components';
import {
  RULE_EMAIL,
  RULE_NAME,
  RULE_CODE,
  RULE_PASSWORD,
} from '@/components/forms';
import {
  UserChangePasswordRequest,
  UserSetProfileRequest,
  UserGetProfileResponse,
} from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

const Widget = () => {
  return <>TODO</>;
};

export default Widget;
