import { useRef, useState } from 'react';
import { message, Button, Modal, Tooltip, List } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { FormattedMessage, useIntl } from 'umi';

import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

interface IBucketListProps {
  items: string[];
}
const BucketList = ({ items }: IBucketListProps) => {
  return (
    <List<string>
      dataSource={items}
      bordered
      pagination={{ position: 'bottom' }}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

interface IFormData {
  to: string;
  subject: string;
  body: string;
}

const Widget = () => {
  const formRef = useRef<ProFormInstance>();
  const [showBuckets, setShowBuckets] = useState(false);
  const [buckets, setBuckets] = useState<string[]>([]);

  const intl = useIntl();
  return (
    <>
      <Tooltip title={<FormattedMessage id="buttons.test" />}>
        <Button
          type="dashed"
          shape="circle"
          onClick={() => {
            setShowBuckets(true);
          }}
          icon={<UnorderedListOutlined />}
        />
      </Tooltip>
      <Modal
        title={intl.formatMessage({ id: 'nut.admin.site.aws.s3-buckets' })}
        visible={showBuckets}
        okText={intl.formatMessage({ id: 'buttons.fetch' })}
        onOk={() => {
          const client = new SiteClient(GRPC_HOST);

          client.testAwsS3(new Empty(), grpc_metadata(), (err, res) => {
            if (err) {
              message.error(err.message);
            } else {
              setBuckets(res.getBucketsList());
              message.success(
                intl.formatMessage({ id: 'form.submit.successed' }),
              );
            }
          });
        }}
        onCancel={() => {
          setShowBuckets(false);
        }}
      >
        <BucketList items={buckets} />
      </Modal>
    </>
  );
};

export default Widget;
