import { useState, RefObject, useRef } from "react";
import { Tag, Input, Space, InputRef } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ProForm from "@ant-design/pro-form";

export interface IProps {
  title: string;
  items: string[];
  onUpdate: (values: string[]) => void;
}

interface INewState {
  visable: boolean;
  value: string;
  ref: RefObject<InputRef>;
}

interface IEditState {
  index: number;
  value: string;
  ref: RefObject<InputRef>;
}

const tagInputStyle = {
  width: "78px",
  marginRight: "8px",
  verticalAlign: "top",
};

const Widget = ({ title, items, onUpdate }: IProps) => {
  const [newData, setNewData] = useState<INewState>({
    visable: false,
    value: "",
    ref: useRef<InputRef>(null),
  });
  const [editData, setEditData] = useState<IEditState>({
    index: -1,
    value: "",
    ref: useRef<InputRef>(null),
  });

  const handleEditConfirm = () => {
    const tmp = [...items];
    tmp[editData.index] = editData.value;
    onUpdate(tmp);
    setEditData({ ...editData, index: -1, value: "" });
  };

  const handleNewConfirm = () => {
    if (newData.value && items.indexOf(newData.value) === -1) {
      onUpdate([...items, newData.value]);
    }
    setNewData({ ...newData, visable: false, value: "" });
  };

  return (
    <ProForm.Group>
      <ProForm.Item label={title}>
        <Space wrap>
          {items.map((it, idx) => {
            if (editData.index === idx) {
              return (
                <Input
                  key={it}
                  size="small"
                  style={tagInputStyle}
                  value={editData.value}
                  onChange={(event) => {
                    setEditData({ ...editData, value: event.target.value });
                  }}
                  onBlur={handleEditConfirm}
                  onPressEnter={handleEditConfirm}
                />
              );
            }

            return (
              <Tag
                style={{ userSelect: "none" }}
                key={it}
                closable
                onClose={() => {
                  onUpdate(items.filter((v: string) => v !== it));
                }}
              >
                <span
                  onDoubleClick={(e) => {
                    e.preventDefault();
                    setEditData({ ...editData, index: idx, value: it });
                    editData.ref.current?.focus();
                  }}
                >
                  {it}
                </span>
              </Tag>
            );
          })}

          {newData.visable ? (
            <Input
              type="text"
              size="small"
              style={tagInputStyle}
              value={newData.value}
              onChange={(event) => {
                setNewData({ ...newData, value: event.target.value });
              }}
              onBlur={handleNewConfirm}
              onPressEnter={handleNewConfirm}
            />
          ) : (
            <Tag
              style={{
                background: "#fff",
                borderStyle: "dashed",
              }}
              onClick={() => {
                setNewData({ ...newData, visable: true });
                newData.ref.current?.focus();
              }}
            >
              <PlusOutlined /> New Tag
            </Tag>
          )}
        </Space>
      </ProForm.Item>
    </ProForm.Group>
  );
};

export default Widget;
