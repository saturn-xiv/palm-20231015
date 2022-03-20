import moment from "moment";

interface ITimestampProps {
  value: number;
}
export const Timestamp = ({ value }: ITimestampProps) => {
  return <span>{moment.unix(value).toString()}</span>;
};
