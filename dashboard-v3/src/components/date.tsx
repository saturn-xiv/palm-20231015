import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advanced from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import timezones from 'timezones-list';

import { getLocale } from '@/i18n';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);
dayjs.extend(localizedFormat);

const get_lang = (): string => {
  const lang = getLocale().toLocaleLowerCase();

  switch (lang) {
    case 'zh-cn' || 'zh-tw':
      return 'lang';
    default:
      return 'en';
  }
};

export const guess_timezone = (): string => dayjs.tz.guess();

interface IShowTimestampProps {
  value: Date;
}
export const ShowTimestamp = ({ value }: IShowTimestampProps) => {
  return <span>{dayjs(value).locale(get_lang()).format('llll')}</span>;
};

export const all_time_zones = () => {
  return timezones.map((x) => ({ value: x.tzCode, label: x.label }));
};
