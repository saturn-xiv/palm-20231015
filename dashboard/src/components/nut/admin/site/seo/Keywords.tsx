import { useRef, useState, useEffect } from 'react';
import { message, Button, Tag, Card, Input, Tooltip } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';

import { SiteSetKeywordsRequest } from '@/protocols/nut_pb';
import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

const Widget = () => {
  const intl = useIntl();
  const [items, setItems] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);
  useEffect(() => {
    const client = new SiteClient(GRPC_HOST);
    client.layout(new Empty(), grpc_metadata(), (err, response) => {
      if (err) {
        message.error(err.message);
      } else {
        setItems(response.getKeywordsList());
      }
    });
  }, [setItems]);

  const handleClose = (removedTag: string) => {
    const newTags = items.filter((it) => it !== removedTag);
    setItems(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && items.indexOf(inputValue) === -1) {
      setItems([...items, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...items];
    newTags[editInputIndex] = editInputValue;
    setItems(newTags);
    setEditInputIndex(-1);
    setInputValue('');
  };

  const onSubmit = () => {
    const client = new SiteClient(GRPC_HOST);
    const request = new SiteSetKeywordsRequest();
    request.setItemsList(items);
    client.setKeywords(request, grpc_metadata(), (err) => {
      if (err) {
        message.error(err.message);
      } else {
        message.success(intl.formatMessage({ id: 'form.submit.successed' }));
      }
    });
  };

  return (
    <Card title={intl.formatMessage({ id: 'nut.admin.site.keywords.title' })}>
      {items.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="small"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > 20;

        const tagElem = (
          <Tag
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}

      <br />
      <br />
      <Card.Meta
        description={
          <Button type="primary" onClick={onSubmit}>
            <FormattedMessage id="buttons.submit" />
          </Button>
        }
      />
    </Card>
  );
};

export default Widget;
