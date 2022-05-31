import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const guess_timezone = (): string => dayjs.tz.guess();
export const home_url = (): string =>
  `${window.location.protocol}//${window.location.host}`;

export const TO_SIGN_IN = '/users/sign-in';
