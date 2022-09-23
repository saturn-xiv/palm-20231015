import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanced from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";
import timezones from "timezones-list";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);
dayjs.extend(localizedFormat);

export const switch_lang = (lang: string) => {
  switch (lang) {
    case "zh-Hans":
      dayjs.locale("zh-cn");
      break;
    case "zh-Hant":
      dayjs.locale("zh-tw");
      break;
    default:
      dayjs.locale("en");
      break;
  }
};

export const guess_timezone = (): string => dayjs.tz.guess();

interface IShowTimestampProps {
  value: Date;
}
export const ShowTimestamp = ({ value }: IShowTimestampProps) => {
  return <span>{dayjs(value).format("llll")}</span>;
};

export const all_time_zones = () => {
  return timezones.map((x) => ({ value: x.tzCode, label: x.label }));
};
