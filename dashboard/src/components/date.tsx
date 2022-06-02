import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advanced from 'dayjs/plugin/advancedFormat';
import timezones from 'timezones-list';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);

export const guess_timezone = (): string => dayjs.tz.guess();

interface IShowTimestampProps {
  value: Date;
}
export const ShowTimestamp = ({ value }: IShowTimestampProps) => {
  // FIXME
  return <span>{dayjs(value).tz(dayjs.tz.guess()).toString()}</span>;
};

export const all_time_zones = () => {
  return timezones.map((x) => ({ value: x.tzCode, label: x.label }));
};
