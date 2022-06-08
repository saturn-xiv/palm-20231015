import { useRef } from 'react';
import { message, Button, Tooltip } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormSelect,
  ProFormDateRangePicker,
} from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { GroupOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from 'umi';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import dayjs from 'dayjs';

import { PolicyClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { PolicyUserRoleAssociateRequest, IdRequest } from '@/protocols/nut_pb';
import { IItem } from '.';

interface IProps {
  item: IItem;
}

interface IFormData {
  user: string;
  roles: string[];
  dates: string[];
}

const Widget = ({ item }: IProps) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm<IFormData>
      name="user.roles"
      formRef={formRef}
      request={async () => {
        const client = new PolicyClient(GRPC_HOST);

        const request = new IdRequest();
        request.setId(item.id);
        const response = await client.rolesByUser(request, grpc_metadata());
        return {
          user: `${item.realName} <${item.nickName}>`,
          roles: response.getItemsList().map((x) => x.getCode()),
          dates: [],
        };
      }}
      onFinish={async (values: IFormData) => {
        const client = new PolicyClient(GRPC_HOST);

        const request = new PolicyUserRoleAssociateRequest();
        request.setUser(item.id);
        request.setRolesList(values.roles);
        {
          var nbf = new Timestamp();
          nbf.setSeconds(dayjs(values.dates[0]).unix());
          request.setNotBefore(nbf);
        }
        {
          var exp = new Timestamp();
          exp.setSeconds(dayjs(values.dates[1]).unix());
          request.setExpiredAt(exp);
        }
        client.associate(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: 'form.submit.successed' }),
            );
          }
        });
      }}
      trigger={
        <Tooltip title={<FormattedMessage id="nut.admin.users.roles" />}>
          <Button type="dashed" shape="circle" icon={<GroupOutlined />} />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="user"
          disabled
          label={intl.formatMessage({ id: 'form.fields.user.label' })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          fieldProps={{ mode: 'multiple' }}
          request={async () => {
            const client = new PolicyClient(GRPC_HOST);
            const response = await client.options(new Empty(), grpc_metadata());
            return response.getRolesList().map((it, id) => ({
              lable: it.getLabel(),
              value: it.getCode(),
              key: id,
            }));
          }}
          name="roles"
          label={intl.formatMessage({ id: 'form.fields.roles.label' })}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDateRangePicker
          width="md"
          name="dates"
          label={intl.formatMessage({
            id: 'form.fields.validate-date-range.label',
          })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default Widget;
