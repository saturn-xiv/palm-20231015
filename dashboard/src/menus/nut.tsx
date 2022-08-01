import type { MenuDataItem } from "@ant-design/pro-components";
import { UserOutlined, FileOutlined, SettingOutlined } from "@ant-design/icons";

const items: MenuDataItem[] = [
  {
    path: "users",
    name: "nut.users.profile.title",
    icon: <UserOutlined />,
    routes: [
      { path: "logs", name: "nut.users.logs.title" },
      {
        path: "change-password",
        name: "nut.users.change-password.title",
      },
      { path: "account-info", name: "nut.users.account-info.title" },
    ],
  },
  {
    path: "attachments",
    name: "nut.attachments.index.title",
    icon: <FileOutlined />,
  },
  {
    path: "admin",
    name: "nut.admin.index.title",
    icon: <SettingOutlined />,
    routes: [
      { path: "leave-words", name: "nut.admin.leave-words.index.title" },
      { path: "locales", name: "nut.admin.locales.index.title" },
      { path: "users", name: "nut.admin.users.index.title" },
      { path: "site", name: "nut.admin.site.index.title" },
    ],
  },
];

export default items;
