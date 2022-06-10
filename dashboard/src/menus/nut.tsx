import { DashboardOutlined, SettingOutlined } from '@ant-design/icons';

import { IPermission } from '@/models/useAuthModel';
import { IMenu } from '.';

const items: IMenu[] = [
  {
    to: '/settings',
    icon: <SettingOutlined />,
    permissions: [],
    items: [
      {
        to: '/users/profile',
        permissions: [],
        items: [],
      },
      {
        to: '/attachments',
        permissions: [],
        items: [],
      },
      {
        to: '/admin',
        permissions: [],
        mustAdministrator: true,
        items: [
          {
            to: '/admin/site',
            permissions: [],
            items: [],
          },
          {
            to: '/admin/locales',
            permissions: [],
            items: [],
          },
          {
            to: '/admin/users',
            permissions: [],
            items: [],
          },
          {
            to: '/admin/policies',
            permissions: [],
            items: [],
          },
          {
            to: '/admin/roles',
            permissions: [],
            items: [],
          },
          {
            to: '/admin/leave-words',
            permissions: [],
            items: [],
          },
        ],
      },
    ],
  },
];

export default items;
