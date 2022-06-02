import { DashboardOutlined } from '@ant-design/icons';

import { IPermission } from '@/models/useAuthModel';
import { IMenu } from '.';

const items: IMenu[] = [
  {
    to: '/settings',
    icon: <DashboardOutlined />,
    permissions: [],
    items: [
      {
        to: '/users/profile',
        permissions: [],
        items: [],
      },
      {
        to: '/admin',
        permissions: [],
        items: [],
      },
    ],
  },
];

export default items;
