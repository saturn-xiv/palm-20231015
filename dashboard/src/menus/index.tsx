import { ReactNode } from 'react';

import { IPermission } from '@/models/useAuthModel';
import nut from './nut';
import forum from './forum';
import cms from './cms';
import mall from './mall';
import school from './school';

export interface IMenu {
  to: string;
  icon?: ReactNode;
  permissions: IPermission[];
  items: IMenu[];
}

const items: IMenu[] = [...nut, ...cms, ...forum, ...mall, ...school];

export default items;
