import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

export const random_string = (l: number): string => {
  return Array.from(Array(l), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
};

export const home_url = (): string =>
  `${window.location.protocol}//${window.location.host}`;

export const to_date = (ts: Timestamp): Date => {
  return new Date(ts.getSeconds() * 1000);
};
