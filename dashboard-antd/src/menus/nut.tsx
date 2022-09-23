import type { MenuDataItem } from "@ant-design/pro-components";
import { UserOutlined, FileOutlined, SettingOutlined } from "@ant-design/icons";

const items: MenuDataItem[] = [
  {
    key: "nut.users.index",
    path: "users",
    icon: <UserOutlined />,
    routes: [
      { key: "nut.users.logs", path: "logs" },
      {
        key: "nut.users.change-password",
        path: "change-password",
      },
      {
        key: "nut.users.account-info",
        path: "account-info",
      },
    ],
  },
  {
    key: "nut.attachments.index",
    path: "attachments",

    icon: <FileOutlined />,
  },
  {
    key: "nut.admin.index",
    path: "admin",
    icon: <SettingOutlined />,
    routes: [
      { path: "locales", key: "nut.admin.locales.index" },
      { path: "leave-words", key: "nut.admin.leave-words.index" },
      { path: "site", key: "nut.admin.site.index" },
      { path: "users", key: "nut.admin.users.index" },
      { path: "permissions", key: "nut.admin.permissions.index" },
    ],
  },
];

export default items;
