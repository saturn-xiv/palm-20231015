import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

export interface IOkResponse {
  createdAt: Date;
}

export type IErrorResponse = I422Response | I500Response;

export interface I422Response {
  errors: string[];
}
export interface I500Response {
  code: number;
  message: string;
}

export const TIMESTAMP_COLUMN_WIDTH: number = 280;
export const ID_WIDTH: number = 100;
export const IP_WIDTH: number = 120;
export const LANGUAGE_WIDTH: number = 120;
export const DEFAULT_PAGE: number = 1;
export const DEFAULT_SIZE: number = 20;

export const home_url = (): string =>
  `${window.location.protocol}//${window.location.host}`;

export const to_date = (ts: Timestamp): Date => {
  return new Date(ts.getSeconds() * 1000);
};
