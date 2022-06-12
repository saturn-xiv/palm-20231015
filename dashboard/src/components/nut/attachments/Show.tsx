import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyOutlined, PictureOutlined, EyeOutlined } from '@ant-design/icons';
import { Tooltip, Button, message } from 'antd';
import { useState, useRef } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import ProForm, {
  ModalForm,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';

import { IItem } from '.';
import { AttachemtShowRequest } from '@/protocols/nut_pb';
import { AttachmentClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

interface IProps {
  item: IItem;
}
interface IFormData {
  expiredAt: Date;
}

const Widget = ({ item }: IProps) => {
  const intl = useIntl();
  const [url, setUrl] = useState<string>();
  const formRef = useRef<ProFormInstance>();
  return (
    <ModalForm<IFormData>
      name="attachments.show"
      formRef={formRef}
      submitter={{
        render: (props, doms) => {
          return url
            ? [
                ...doms,
                <Tooltip
                  key="copy"
                  title={intl.formatMessage({
                    id: 'buttons.copy-to-clipboard',
                  })}
                >
                  <CopyToClipboard text={url || ''} onCopy={() => {}}>
                    <Button icon={<CopyOutlined />} />
                  </CopyToClipboard>
                </Tooltip>,
                <Tooltip
                  key="open"
                  title={intl.formatMessage({ id: 'buttons.open' })}
                >
                  <Button
                    onClick={() => {
                      window.open(url, '_blank');
                    }}
                    icon={<PictureOutlined />}
                  />
                </Tooltip>,
              ]
            : doms;
        },
      }}
      onFinish={async (values: IFormData) => {
        const client = new AttachmentClient(GRPC_HOST);

        const request = new AttachemtShowRequest();
        request.setId(item.id);

        client.show(request, grpc_metadata(), (err, res) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: 'form.submit.successed' }),
            );
            setUrl(res.getUrl());
          }
        });
      }}
      trigger={
        <Tooltip title={<FormattedMessage id="buttons.show" />}>
          <Button type="dashed" shape="circle" icon={<EyeOutlined />} />
        </Tooltip>
      }
    >
      <ProForm.Group>
        <ProFormDateTimePicker
          width="md"
          name="due"
          label={intl.formatMessage({
            id: 'form.fields.due-day.label',
          })}
          rules={[{ required: true }]}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default Widget;
